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
          stepDuration={1000}
          dataSource={[
            "1. 我们不加班，重要的事情说三遍",
            "2. 我们加班发工资加鸡腿",
            "3. 今天中午吃点啥",
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

