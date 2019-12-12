import * as React from 'react';
import { Keyframes } from 'styled-components';
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
export default class NoticeBoard extends React.PureComponent<IProps, IState> {
    static defaultProps: {
        stepDuration: number;
        height: number;
        className: string;
        hideBrand: boolean;
    };
    constructor(props: IProps);
    componentDidMount: () => void;
    componentWillReceiveProps(nextProps: any): void;
    handleDataSource: () => Promise<unknown>;
    get stepLen(): number;
    get duration(): number;
    get scrollKeyFrames(): Keyframes | null;
    init: () => Promise<void>;
    createKeyFrames: () => void;
    render(): JSX.Element;
}
export {};
