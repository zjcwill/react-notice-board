"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var IMG_BRAND_1 = __importDefault(require("./IMG_BRAND"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n"])), function (props) { return (props.width ? props.width + "px" : "100%"); }, function (props) { return (props.height ? props.height + "px" : "44px"); });
var LogoImg = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 31px;\n  height: 14px;\n  margin: auto 0 auto 16px;\n"], ["\n  width: 31px;\n  height: 14px;\n  margin: auto 0 auto 16px;\n"])));
var Content = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n  animation: ", "\n    ", "s linear infinite;\n  margin-right: auto;\n  margin-left: 12px;\n"], ["\n  overflow: hidden;\n  animation: ", "\n    ", "s linear infinite;\n  margin-right: auto;\n  margin-left: 12px;\n"])), function (props) { return (props.animation ? props.animation : ""); }, function (props) { return props.duration; });
var Text = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #ff6f41;\n  line-height: ", ";\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  color: #ff6f41;\n  line-height: ", ";\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (props) { return (props.height ? props.height + "px" : "44px"); });
var ExtraWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  float: right;\n  display: flex;\n  align-items: center;\n"], ["\n  float: right;\n  display: flex;\n  align-items: center;\n"])));
var NoticeBoard = /** @class */ (function (_super) {
    __extends(NoticeBoard, _super);
    function NoticeBoard(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            _this.init();
        };
        _this.handleDataSource = function () {
            var _a = _this.props.dataSource, dataSource = _a === void 0 ? [] : _a;
            return new Promise(function (resolve, reject) {
                if (dataSource.length > 0) {
                    _this.setState({
                        dataSource: dataSource.concat(dataSource[0])
                    }, function () {
                        resolve();
                    });
                }
                else {
                    reject("dataSource.length must >= 1");
                    throw new Error("dataSource.length must >= 1");
                }
            });
        };
        _this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleDataSource()];
                    case 1:
                        _a.sent();
                        this.createKeyFrames();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.createKeyFrames = function () {
            var _a = _this.props.height, height = _a === void 0 ? 0 : _a;
            var per = 100 / _this.stepLen;
            var offset = 0;
            var cssStr = [];
            for (var i = 0; i <= _this.stepLen; i++) {
                var even = i % 2 === 0;
                if (i !== 0 && even) {
                    offset += height;
                }
                var v = "\n        " + i * per + "% {\n          margin-top: -" + offset + "px\n        }\n      ";
                cssStr.push(v);
            }
            var css = cssStr.join("");
            _this.setState({ keyframesValue: css });
        };
        _this.state = {
            dataSource: [],
            keyframesValue: ""
        };
        return _this;
    }
    NoticeBoard.prototype.componentWillReceiveProps = function (nextProps) {
        if (JSON.stringify(nextProps.dataSource) !==
            JSON.stringify(this.props.dataSource)) {
            this.init();
        }
    };
    Object.defineProperty(NoticeBoard.prototype, "stepLen", {
        get: function () {
            var _a = this.props.dataSource, dataSource = _a === void 0 ? [] : _a;
            return dataSource.length * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeBoard.prototype, "duration", {
        get: function () {
            var _a = this.props, _b = _a.stepDuration, stepDuration = _b === void 0 ? 1000 : _b, dataSource = _a.dataSource;
            return (dataSource.length * stepDuration) / 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoticeBoard.prototype, "scrollKeyFrames", {
        get: function () {
            var keyframesValue = this.state.keyframesValue;
            if (keyframesValue) {
                return styled_components_1.keyframes(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        ", "\n      "], ["\n        ", "\n      "])), keyframesValue);
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    NoticeBoard.prototype.render = function () {
        var _this = this;
        var dataSource = this.state.dataSource;
        var _a = this.props, extra = _a.extra, textClassName = _a.textClassName, hideBrand = _a.hideBrand;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Wrapper, __assign({}, this.props),
                !hideBrand && react_1.default.createElement(LogoImg, { src: IMG_BRAND_1.default }),
                react_1.default.createElement(Content, __assign({}, this.props, { animation: this.stepLen > 2 ? this.scrollKeyFrames : null, duration: this.duration }), dataSource.map(function (item, index) { return (react_1.default.createElement(Text, __assign({}, _this.props, { className: textClassName, key: index + "-" + item }), item)); })),
                extra && react_1.default.createElement(ExtraWrapper, null, extra))));
    };
    NoticeBoard.defaultProps = {
        stepDuration: 1000,
        height: 44,
        className: "",
        hideBrand: false
    };
    return NoticeBoard;
}(react_1.default.PureComponent));
exports.default = NoticeBoard;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
