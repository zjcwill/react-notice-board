import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import IMG_BRAND from "./IMG_BRAND";

interface IProps {
  dataSource: string[];
  stepDuration?: number;
  width?: number;
  height?: number;
  extra?: React.ReactElement | null | false;
  textClassName?: string | undefined;
  hideBrand?: boolean;
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
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  height: ${props => (props.height ? `${props.height}px` : "44px")};
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
  display: flex;
`;

const LogoImg = styled.img`
  width: 31px;
  height: 14px;
  margin: auto 0 auto 16px;
`;

const Content = styled.div<IContent>`
  overflow: hidden;
  animation: ${props => (props.animation ? props.animation : "")}
    ${props => props.duration}s linear infinite;
  margin-right: auto;
  margin-left: 12px;
`;
const Text = styled.p<IProps>`
  color: #ff6f41;
  line-height: ${props => (props.height ? `${props.height}px` : "44px")};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ExtraWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
`;

export default class NoticeBoard extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    stepDuration: 1000,
    height: 44,
    className: "",
    hideBrand: false
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
  componentWillReceiveProps(nextProps) {
    if (
      JSON.stringify(nextProps.dataSource) !==
      JSON.stringify(this.props.dataSource)
    ) {
      this.init();
    }
  }
  handleDataSource = () => {
    const { dataSource = [] } = this.props;
    return new Promise((resolve, reject) => {
      if (dataSource.length > 0) {
        this.setState(
          {
            dataSource: dataSource.concat(dataSource[0])
          },
          () => {
            resolve();
          }
        );
      } else {
        reject("dataSource.length must >= 1");
        throw new Error("dataSource.length must >= 1");
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
    const cssStr: string[] = [];
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
    const { extra, textClassName, hideBrand } = this.props;
    return (
      <div>
        <Wrapper {...this.props}>
          {!hideBrand && <LogoImg src={IMG_BRAND} />}
          <Content
            {...this.props}
            animation={this.stepLen > 2 ? this.scrollKeyFrames : null}
            duration={this.duration}
          >
            {dataSource.map((item, index) => (
              <Text
                {...this.props}
                className={textClassName}
                key={`${index}-${item}`}
              >
                {item}
              </Text>
            ))}
          </Content>
          {extra && <ExtraWrapper>{extra}</ExtraWrapper>}
        </Wrapper>
      </div>
    );
  }
}
