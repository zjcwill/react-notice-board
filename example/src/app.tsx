import React, { Component } from "react";
import styled from "styled-components";
import NoticeBoard from "../../src";

const PageContainer = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 100vh;
`;

export default class App extends Component {
  render() {
    return (
      <PageContainer>
        <NoticeBoard
          width={600}
          stepDuration={2000}
          dataSource={[
            "1. 我们不加班",
            "2. 我们加班发工资",
            "3. 今天吃点啥",
            "4.你中暑了"
          ]}
          extra={
            <a style={{ color: "#BFBFBF", fontSize: 12, marginRight: "16px" }}>
              更多
            </a>
          }
        />
      </PageContainer>
    );
  }
}

