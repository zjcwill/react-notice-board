import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";

interface IProps {
  dataSource: string[];
  stepDuration?: number;
  height?: number;
}
interface IState {
  dataSource: string[];
  keyframesValue: string;
}
interface IContent extends IProps {
  animation: Keyframes | null;
  duration: number;
}

const Wrapper = styled.div<IProps>`
  height: ${props => (props.height ? `${props.height}px` : "44px")};
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const Content = styled.div<IContent>`
  overflow: hidden;
  animation: ${props => (props.animation ? props.animation : "")}
    ${props => props.duration}s linear infinite;
`;
const Text = styled.p<IProps>`
  color: #ff6f41;
  line-height: ${props => (props.height ? `${props.height}px` : "44px")};
  margin: 0;
`;

export default class NoticeBoard extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    stepDuration: 1000,
    height: 44
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      dataSource: [],
      keyframesValue: ``
    };
  }
  componentDidMount = () => {
    this.init();
  };
  handleDataSource = () => {
    const { dataSource = [] } = this.props;
    return new Promise((resolve, reject) => {
      if (dataSource.length > 1) {
        this.setState(
          {
            dataSource: dataSource.concat(dataSource[0])
          },
          () => {
            resolve();
          }
        );
      } else {
        reject("dataSource.length <= 1");
      }
    });
  };
  get stepLen() {
    const { dataSource = [] } = this.props;
    return dataSource.length * 2;
  }
  get duration() {
    const { stepDuration = 1000, dataSource } = this.props;

    return (dataSource.length * stepDuration) / 1000;
  }

  get scrollKeyFrames() {
    const { keyframesValue } = this.state;
    if (keyframesValue) {
      return keyframes`
        ${keyframesValue}
      `;
    }
    return null;
  }

  init = async () => {
    await this.handleDataSource();
    this.createKeyFrames();
  };
  createKeyFrames = () => {
    const { height = 0 } = this.props;
    const per = 100 / this.stepLen;
    let offset = 0;
    const cssStr = [];
    for (let i = 0; i <= this.stepLen; i++) {
      const even = i % 2 === 0;
      if (i !== 0 && even) {
        offset += height;
      }
      const v = `
        ${i * per}% {
          margin-top: -${offset}px
        }
      `;
      cssStr.push(v);
    }
    const css = cssStr.join("");
    this.setState({ keyframesValue: css });
  };
  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <Wrapper {...this.props}>
          <Content
            {...this.props}
            animation={this.scrollKeyFrames}
            duration={this.duration}
          >
            {dataSource.map((item, index) => (
              <Text {...this.props} key={`${index}-${item}`}>
                {item}
              </Text>
            ))}
          </Content>
        </Wrapper>
      </div>
    );
  }
}
