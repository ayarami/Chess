"use strict";

System.register(["cc", "./Global/Defines.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, director, ModelTouchEvent, EClientMsg, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, ModelTouchReceiver;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_GlobalDefinesTs) {
      ModelTouchEvent = _GlobalDefinesTs.ModelTouchEvent;
      EClientMsg = _GlobalDefinesTs.EClientMsg;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "d77571Usp1CCqGg1Pz/JChd", "ModelTouchReceiver"); // begin ModelTouchReceiver


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ModelTouchReceiver", ModelTouchReceiver = (_dec = ccclass("ModelTouchReceiver"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ModelTouchReceiver, _Component);

        function ModelTouchReceiver() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ModelTouchReceiver);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ModelTouchReceiver)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "ReceiveNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "ReceiveTouchStart", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "ReceiveTouchMove", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "ReceiveTouchEnd", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "ReceiveTouchCancel", _descriptor5, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ModelTouchReceiver, [{
          key: "onLoad",
          value: function onLoad() {
            if (!this.ReceiveNode) {
              this.ReceiveNode = this.node;
            }
          }
        }, {
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this._ReceiveTouchStart = this.ReceiveTouchStart;
            this._ReceiveTouchMove = this.ReceiveTouchMove;
            this._ReceiveTouchEnd = this.ReceiveTouchEnd;
            this._ReceiveTouchCancel = this.ReceiveTouchCancel;
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(data) {}
        }, {
          key: "_touchMove",
          value: function _touchMove(data) {}
        }, {
          key: "_touchEnd",
          value: function _touchEnd(data) {
            if (data.node == this.ReceiveNode) {
              director.emit(EClientMsg.SelectedChess, this.node);
            }
          }
        }, {
          key: "_touchCancel",
          value: function _touchCancel(data) {} // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "_ReceiveTouchStart",
          set: function set(value) {
            if (!CC_EDITOR) {
              if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchStart, this._touchStart, this);
              } else {
                this.ReceiveNode.off(ModelTouchEvent.TouchStart, this._touchStart, this);
              }
            }

            this.ReceiveTouchStart = value;
          },
          get: function get() {
            return this.ReceiveTouchStart;
          }
        }, {
          key: "_ReceiveTouchMove",
          set: function set(value) {
            if (!CC_EDITOR) {
              if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchMove, this._touchMove, this);
              } else {
                this.ReceiveNode.off(ModelTouchEvent.TouchMove, this._touchMove, this);
              }
            }

            this.ReceiveTouchMove = value;
          },
          get: function get() {
            return this.ReceiveTouchMove;
          }
        }, {
          key: "_ReceiveTouchEnd",
          set: function set(value) {
            if (!CC_EDITOR) {
              if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchEnd, this._touchEnd, this);
              } else {
                this.ReceiveNode.off(ModelTouchEvent.TouchEnd, this._touchEnd, this);
              }
            }

            this.ReceiveTouchEnd = value;
          },
          get: function get() {
            return this.ReceiveTouchEnd;
          }
        }, {
          key: "_ReceiveTouchCancel",
          set: function set(value) {
            if (!CC_EDITOR) {
              if (value) {
                this.ReceiveNode.on(ModelTouchEvent.TouchCancel, this._touchCancel, this);
              } else {
                this.ReceiveNode.off(ModelTouchEvent.TouchCancel, this._touchCancel, this);
              }
            }

            this.ReceiveTouchCancel = value;
          },
          get: function get() {
            return this.ReceiveTouchCancel;
          }
        }]);
        return ModelTouchReceiver;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ReceiveNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ReceiveTouchStart", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ReceiveTouchMove", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ReceiveTouchEnd", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ReceiveTouchCancel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "_ReceiveTouchStart", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_ReceiveTouchStart"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "_ReceiveTouchMove", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_ReceiveTouchMove"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "_ReceiveTouchEnd", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_ReceiveTouchEnd"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "_ReceiveTouchCancel", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_ReceiveTouchCancel"), _class2.prototype)), _class2)) || _class));

      cc._RF.pop(); // end ModelTouchReceiver

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9Nb2RlbFRvdWNoUmVjZWl2ZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJkaXJlY3RvciIsIk1vZGVsVG91Y2hFdmVudCIsIkVDbGllbnRNc2ciLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNb2RlbFRvdWNoUmVjZWl2ZXIiLCJSZWNlaXZlTm9kZSIsIm5vZGUiLCJfUmVjZWl2ZVRvdWNoU3RhcnQiLCJSZWNlaXZlVG91Y2hTdGFydCIsIl9SZWNlaXZlVG91Y2hNb3ZlIiwiUmVjZWl2ZVRvdWNoTW92ZSIsIl9SZWNlaXZlVG91Y2hFbmQiLCJSZWNlaXZlVG91Y2hFbmQiLCJfUmVjZWl2ZVRvdWNoQ2FuY2VsIiwiUmVjZWl2ZVRvdWNoQ2FuY2VsIiwiZGF0YSIsImVtaXQiLCJTZWxlY3RlZENoZXNzIiwidmFsdWUiLCJDQ19FRElUT1IiLCJvbiIsIlRvdWNoU3RhcnQiLCJfdG91Y2hTdGFydCIsIm9mZiIsIlRvdWNoTW92ZSIsIl90b3VjaE1vdmUiLCJUb3VjaEVuZCIsIl90b3VjaEVuZCIsIlRvdWNoQ2FuY2VsIiwiX3RvdWNoQ2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSxRLE9BQUFBLFE7O0FBQzFDQyxNQUFBQSxlLG9CQUFBQSxlO0FBQWlDQyxNQUFBQSxVLG9CQUFBQSxVOzs7eUZBQytCOzs7QUFBakVDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7O29DQUdKQyxrQixXQURaRixPQUFPLENBQUMsb0JBQUQsQyxVQVNIQyxRQUFRLENBQUNMLElBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQStFQztBQUNOLGdCQUFJLENBQUMs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OzhCQUNtQztBQUNoQyxtQkFBTyxLQUFLSixrQkFBWjtBQUNIOzs7UUFyRm1DakIsUzs7Ozs7aUJBU2hCLEk7O3dHQUVuQk0sUTs7Ozs7aUJBQzRCLEs7O3VHQUU1QkEsUTs7Ozs7aUJBQzJCLEs7O3NHQUUzQkEsUTs7Ozs7aUJBQzBCLEs7O3lHQUUxQkEsUTs7Ozs7aUJBQzZCLEs7OzBGQUU3QkEsUSxnTEFnQkFBLFEsOEtBZ0JBQSxRLGdMQWdCQUEsUTs7b0JBMUVhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUb3VjaCwgVmVjMywgZGlyZWN0b3IgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IE1vZGVsVG91Y2hFdmVudCwgRXZlbnRNb2RlbERhdGEsIEVDbGllbnRNc2cgfSBmcm9tIFwiLi9HbG9iYWwvRGVmaW5lc1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJNb2RlbFRvdWNoUmVjZWl2ZXJcIilcbmV4cG9ydCBjbGFzcyBNb2RlbFRvdWNoUmVjZWl2ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgUmVjZWl2ZU5vZGU6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgUmVjZWl2ZVRvdWNoU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIFJlY2VpdmVUb3VjaE1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIFJlY2VpdmVUb3VjaEVuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQHByb3BlcnR5XG4gICAgUmVjZWl2ZVRvdWNoQ2FuY2VsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzZXQgX1JlY2VpdmVUb3VjaFN0YXJ0ICh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoIUNDX0VESVRPUikge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5SZWNlaXZlTm9kZS5vbihNb2RlbFRvdWNoRXZlbnQuVG91Y2hTdGFydCwgdGhpcy5fdG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2VpdmVOb2RlLm9mZihNb2RlbFRvdWNoRXZlbnQuVG91Y2hTdGFydCwgdGhpcy5fdG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5SZWNlaXZlVG91Y2hTdGFydCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgX1JlY2VpdmVUb3VjaFN0YXJ0ICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuUmVjZWl2ZVRvdWNoU3RhcnQ7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgc2V0IF9SZWNlaXZlVG91Y2hNb3ZlICh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoIUNDX0VESVRPUikge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5SZWNlaXZlTm9kZS5vbihNb2RlbFRvdWNoRXZlbnQuVG91Y2hNb3ZlLCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5SZWNlaXZlTm9kZS5vZmYoTW9kZWxUb3VjaEV2ZW50LlRvdWNoTW92ZSwgdGhpcy5fdG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLlJlY2VpdmVUb3VjaE1vdmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IF9SZWNlaXZlVG91Y2hNb3ZlICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuUmVjZWl2ZVRvdWNoTW92ZTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBzZXQgX1JlY2VpdmVUb3VjaEVuZCAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUmVjZWl2ZU5vZGUub24oTW9kZWxUb3VjaEV2ZW50LlRvdWNoRW5kLCB0aGlzLl90b3VjaEVuZCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2VpdmVOb2RlLm9mZihNb2RlbFRvdWNoRXZlbnQuVG91Y2hFbmQsIHRoaXMuX3RvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLlJlY2VpdmVUb3VjaEVuZCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgX1JlY2VpdmVUb3VjaEVuZCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLlJlY2VpdmVUb3VjaEVuZDtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBzZXQgX1JlY2VpdmVUb3VjaENhbmNlbCAodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUmVjZWl2ZU5vZGUub24oTW9kZWxUb3VjaEV2ZW50LlRvdWNoQ2FuY2VsLCB0aGlzLl90b3VjaENhbmNlbCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlJlY2VpdmVOb2RlLm9mZihNb2RlbFRvdWNoRXZlbnQuVG91Y2hDYW5jZWwsIHRoaXMuX3RvdWNoQ2FuY2VsLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLlJlY2VpdmVUb3VjaENhbmNlbCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgX1JlY2VpdmVUb3VjaENhbmNlbCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLlJlY2VpdmVUb3VjaENhbmNlbDtcbiAgICB9XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBpZiAoIXRoaXMuUmVjZWl2ZU5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuUmVjZWl2ZU5vZGUgPSB0aGlzLm5vZGUgYXMgTm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuX1JlY2VpdmVUb3VjaFN0YXJ0ID0gdGhpcy5SZWNlaXZlVG91Y2hTdGFydDtcbiAgICAgICAgdGhpcy5fUmVjZWl2ZVRvdWNoTW92ZSA9IHRoaXMuUmVjZWl2ZVRvdWNoTW92ZTtcbiAgICAgICAgdGhpcy5fUmVjZWl2ZVRvdWNoRW5kID0gdGhpcy5SZWNlaXZlVG91Y2hFbmQ7XG4gICAgICAgIHRoaXMuX1JlY2VpdmVUb3VjaENhbmNlbCA9IHRoaXMuUmVjZWl2ZVRvdWNoQ2FuY2VsO1xuICAgIH1cblxuICAgIF90b3VjaFN0YXJ0IChkYXRhOiBFdmVudE1vZGVsRGF0YSkge1xuICAgIH1cblxuICAgIF90b3VjaE1vdmUgKGRhdGE6IEV2ZW50TW9kZWxEYXRhKSB7XG5cbiAgICB9XG5cbiAgICBfdG91Y2hFbmQgKGRhdGE6IEV2ZW50TW9kZWxEYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLm5vZGUgPT0gdGhpcy5SZWNlaXZlTm9kZSkge1xuICAgICAgICAgICAgZGlyZWN0b3IuZW1pdChFQ2xpZW50TXNnLlNlbGVjdGVkQ2hlc3MsIHRoaXMubm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdG91Y2hDYW5jZWwgKGRhdGE6IEV2ZW50TW9kZWxEYXRhKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==