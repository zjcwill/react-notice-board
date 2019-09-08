import React, { Component } from "react";
import NoticeBoard from "../../src";
import styled from 'styled-components';

const PageContainer = styled.div`
  // display: flex;
  // align-items:center;
  background-color: red;
`

export default class App extends Component {
  render() {
    return (
      <PageContainer>
        <NoticeBoard
          stepDuration={2000}
          dataSource={[
            "1. 我们不加班",
            "2. 我们加班发工资",
            "3. 今天吃点啥",
            "4.你中暑了"
          ]}
          extra={<a style={{ color: '#BFBFBF', fontSize: 12, marginRight: '16px' }}>更多</a>}
        />
      </PageContainer>
    );
  }
}

