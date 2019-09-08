import React from "react";
import { Keyframes } from "styled-components";
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
export default class NoticeBoard extends React.PureComponent<IProps, IState> {
    static defaultProps: {
        stepDuration: number;
        height: number;
    };
    constructor(props: IProps);
    componentDidMount: () => void;
    handleDataSource: () => Promise<unknown>;
    readonly stepLen: number;
    readonly duration: number;
    readonly scrollKeyFrames: Keyframes | null;
    init: () => Promise<void>;
    createKeyFrames: () => void;
    render(): JSX.Element;
}
export {};
