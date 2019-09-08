import React from "react";
import { render } from "react-dom";
import NoticeBoard from "./NoticeBoard";

const Container = document.getElementById("app");

render(
  <NoticeBoard
    stepDuration={2000}
    dataSource={["1. 我们不加班", "2. 我们加班发工资", "3. 今天吃点啥", '4.你中暑了']}
    extra={<a>更多</a>}
  />,
  Container
);
