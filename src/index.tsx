import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";

interface IProps {
  dataSource: string[];
  stepDuration?: number;
  height?: number;
  extra?: React.ReactElement | null | false;
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
  display: flex;
`;

const LogoImg = styled.img`
  width: 31px;
  height: 14px;
  margin: auto 12px auto 16px;
`;

const Content = styled.div<IContent>`
  overflow: hidden;
  animation: ${props => (props.animation ? props.animation : "")}
    ${props => props.duration}s linear infinite;
  margin-right: auto;
`;
const Text = styled.p<IProps>`
  color: #ff6f41;
  line-height: ${props => (props.height ? `${props.height}px` : "44px")};
  margin: 0;
`;

const ExtraWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;
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
    const { extra } = this.props;
    return (
      <div>
        <Wrapper {...this.props}>
          <LogoImg
            src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAcCAYAAAA5pQx5AAACf0lEQVRYR81YvXITMRDetd3zAoTBKWM6yeMaOh4CyrRQUaSJUzAUaUjLK7iioiO1bakj6RgY8AvQMeDxZu4GMcdF0q6kOweX0kq734/2ZCF4ftPpdLLb7T61pxDxyhjzqBpXSpFvLSL+BID3RPTMWvvbFxMam81mR9vt9sozf22tnTTH6cVjf/6LS5Tk9AZpredEdOoBPjfGnMWAuzWDweBkvV6/kRThYiR5XWwvwJVSFetH7aJHo9FkuVxeN8dTVOJISMnbOfAcICkFh8BrrQ+J6LPE5lVM58BT7Naw6CkRzT1H48wYc2vcB14p9QAAvgJA9Ixaa+t5DnioB7n1t5LkqJfjEh94rfUrIjoBgHshZ/QCvARADmHcmY/Nc4pze/+jeI7Nu7Q7V2xvn7MS1UrckgK4889ZF4WXEJcKvjOrczaX3Oa01tndPdSF24Q0mtt3ALjfmt/gxeWB5IL194xzanHEVMlKXJMM/OWTp0D0rgF+A4jH+PbjBzFwScEcMY55aVyqtbuOrxXn1JQQc1fdPZeQGjinEkdMX3f3XFCSdShRkyOmnSg1XlJo1zEYUtP9rZQQ0y6qj+7uurm0CbZrQsQNABwbY+rmh2113EPCeDx+vlgsfqXY3CXLIavRHL0PDKXAa7CIG2NM/bljXyv2bVvuX5XU8tw+UeAlykkL9PSHqOLSfYuA59hcWlgojitYuj+3T1Txfds8duNyZ7x34FKbd00Op1TvwKU2L/l0+UDcOXCpklJnlColXc/FBd/c/tzdk148QyQNh8PD1Wr1hSumOZ97QZHmiAKXvngyyarP0kNr7TdpUf9Fc5O8eEYA/UDE18aY8xTQ+wR+A3jcZWsSRVoZAAAAAElFTkSuQmCC
`}
          />
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
          {extra && <ExtraWrapper>{extra}</ExtraWrapper>}
        </Wrapper>
      </div>
    );
  }
}
