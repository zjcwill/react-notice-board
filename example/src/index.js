import React from "react";
import { render } from "react-dom";
import NoticeBoard from "../../src/NoticeBoard";
var Container = document.getElementById("app");
render(React.createElement(NoticeBoard, { stepDuration: 2000, dataSource: ["1. 我们不加班", "2. 我们加班发工资", "3. 今天吃点啥", '4.你中暑了'], extra: React.createElement("a", null, "\u66F4\u591A") }), Container);
//# sourceMappingURL=index.js.map