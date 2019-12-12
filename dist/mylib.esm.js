import { createElement, PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var IMG_BRAND = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAcCAYAAAA5pQx5AAACf0lEQVRYR81YvXITMRDetd3zAoTBKWM6yeMaOh4CyrRQUaSJUzAUaUjLK7iioiO1bakj6RgY8AvQMeDxZu4GMcdF0q6kOweX0kq734/2ZCF4ftPpdLLb7T61pxDxyhjzqBpXSpFvLSL+BID3RPTMWvvbFxMam81mR9vt9sozf22tnTTH6cVjf/6LS5Tk9AZpredEdOoBPjfGnMWAuzWDweBkvV6/kRThYiR5XWwvwJVSFetH7aJHo9FkuVxeN8dTVOJISMnbOfAcICkFh8BrrQ+J6LPE5lVM58BT7Naw6CkRzT1H48wYc2vcB14p9QAAvgJA9Ixaa+t5DnioB7n1t5LkqJfjEh94rfUrIjoBgHshZ/QCvARADmHcmY/Nc4pze/+jeI7Nu7Q7V2xvn7MS1UrckgK4889ZF4WXEJcKvjOrczaX3Oa01tndPdSF24Q0mtt3ALjfmt/gxeWB5IL194xzanHEVMlKXJMM/OWTp0D0rgF+A4jH+PbjBzFwScEcMY55aVyqtbuOrxXn1JQQc1fdPZeQGjinEkdMX3f3XFCSdShRkyOmnSg1XlJo1zEYUtP9rZQQ0y6qj+7uurm0CbZrQsQNABwbY+rmh2113EPCeDx+vlgsfqXY3CXLIavRHL0PDKXAa7CIG2NM/bljXyv2bVvuX5XU8tw+UeAlykkL9PSHqOLSfYuA59hcWlgojitYuj+3T1Txfds8duNyZ7x34FKbd00Op1TvwKU2L/l0+UDcOXCpklJnlColXc/FBd/c/tzdk148QyQNh8PD1Wr1hSumOZ97QZHmiAKXvngyyarP0kNr7TdpUf9Fc5O8eEYA/UDE18aY8xTQ+wR+A3jcZWsSRVoZAAAAAElFTkSuQmCC";

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n        ", "\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  float: right;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  color: #ff6f41;\n  line-height: ", ";\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n  animation: ", "\n    ", "s linear infinite;\n  margin-right: auto;\n  margin-left: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 31px;\n  height: 14px;\n  margin: auto 0 auto 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject(), function (props) {
  return props.width ? props.width + "px" : '100%';
}, function (props) {
  return props.height ? props.height + "px" : '44px';
});
var LogoImg =
/*#__PURE__*/
styled.img(
/*#__PURE__*/
_templateObject2());
var Content =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject3(), function (props) {
  return props.animation ? props.animation : '';
}, function (props) {
  return props.duration;
});
var Text =
/*#__PURE__*/
styled.p(
/*#__PURE__*/
_templateObject4(), function (props) {
  return props.height ? props.height + "px" : '44px';
});
var ExtraWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject5());

var NoticeBoard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(NoticeBoard, _React$PureComponent);

  function NoticeBoard(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _this.componentDidMount = function () {
      _this.init();
    };

    _this.handleDataSource = function () {
      var _this$props$dataSourc = _this.props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc;
      return new Promise(function (resolve, reject) {
        if (dataSource.length > 0) {
          _this.setState({
            dataSource: dataSource.concat(dataSource[0])
          }, function () {
            resolve();
          });
        } else {
          reject('dataSource.length must >= 1');
          throw new Error('dataSource.length must >= 1');
        }
      });
    };

    _this.init = function () {
      try {
        return Promise.resolve(_this.handleDataSource()).then(function () {
          _this.createKeyFrames();
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    _this.createKeyFrames = function () {
      var _this$props$height = _this.props.height,
          height = _this$props$height === void 0 ? 0 : _this$props$height;
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

      var css = cssStr.join('');

      _this.setState({
        keyframesValue: css
      });
    };

    _this.state = {
      dataSource: [],
      keyframesValue: ""
    };
    return _this;
  }

  var _proto = NoticeBoard.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.dataSource) !== JSON.stringify(this.props.dataSource)) {
      this.init();
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var dataSource = this.state.dataSource;
    var _this$props = this.props,
        extra = _this$props.extra,
        textClassName = _this$props.textClassName,
        hideBrand = _this$props.hideBrand;
    return createElement("div", null, createElement(Wrapper, Object.assign({}, this.props), !hideBrand && createElement(LogoImg, {
      src: IMG_BRAND
    }), createElement(Content, Object.assign({}, this.props, {
      animation: this.stepLen > 2 ? this.scrollKeyFrames : null,
      duration: this.duration
    }), dataSource.map(function (item, index) {
      return createElement(Text, Object.assign({}, _this2.props, {
        className: textClassName,
        key: index + "-" + item
      }), item);
    })), extra && createElement(ExtraWrapper, null, extra)));
  };

  _createClass(NoticeBoard, [{
    key: "stepLen",
    get: function get() {
      var _this$props$dataSourc2 = this.props.dataSource,
          dataSource = _this$props$dataSourc2 === void 0 ? [] : _this$props$dataSourc2;
      return dataSource.length * 2;
    }
  }, {
    key: "duration",
    get: function get() {
      var _this$props2 = this.props,
          _this$props2$stepDura = _this$props2.stepDuration,
          stepDuration = _this$props2$stepDura === void 0 ? 1000 : _this$props2$stepDura,
          dataSource = _this$props2.dataSource;
      return dataSource.length * stepDuration / 1000;
    }
  }, {
    key: "scrollKeyFrames",
    get: function get() {
      var keyframesValue = this.state.keyframesValue;

      if (keyframesValue) {
        return keyframes(_templateObject6(), keyframesValue);
      }

      return null;
    }
  }]);

  return NoticeBoard;
}(PureComponent);
NoticeBoard.defaultProps = {
  stepDuration: 1000,
  height: 44,
  className: '',
  hideBrand: false
};

export default NoticeBoard;
//# sourceMappingURL=mylib.esm.js.map
