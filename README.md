# 一款 React 上下无缝滚动公告栏组件

> A React notice board component can seamlessly up and down.

## 预览 Preview

![](./intr.gif)
在线预览（效果更佳）：http://zjcwill.top/react-notice-board/

## 安装 Installation

```bash
npm i react-notice-board
# or
yarn add react-notice-board
```

## 文档 Document

| Attribute     | Description            | Type           | Default | Version |
| ------------- | ---------------------- | -------------- | ------- | ------- |
| dataSource    | 公告内容               | \*string[ ]\*  | `[]`    | \-      |
| stepDuration  | 每条公告停顿时长       | _number_       | `1000`  | \-      |
| width         | 公告栏长度             | _number_       | `100%`  | \-      |
| height        | 公告栏高度             | _number_       | `44px`  | \-      |
| extra         | 公告栏右侧额外内容     | _ReactElement_ | `null`  | \-      |
| textClassName | 公告栏文字内容样式类名 | _string_       | `""`    | \-      |
| hideBrand     | 隐藏公告栏图案         | _boolean_      | `false` | \-      |

## TODO 待实现

1.  样式调优
2.  自定义配置项
3.  边界防御
4.  左右滚动？ 更多效果
5.  增加组件单元测试
