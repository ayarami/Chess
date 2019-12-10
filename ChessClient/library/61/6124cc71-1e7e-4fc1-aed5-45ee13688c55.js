"use strict";

System.register(["cc", "../Global/Defines.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec2, PlayerFlag, EChessJob, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, ccclass, property, ChessState;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
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
      Vec2 = _cc.Vec2;
    }, function (_GlobalDefinesTs) {
      PlayerFlag = _GlobalDefinesTs.PlayerFlag;
      EChessJob = _GlobalDefinesTs.EChessJob;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "6124cxxHn5Pwa7VRe4TaIxV", "ChessState"); // begin ChessState


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChessState", ChessState = (_dec = ccclass("ChessState"), _dec2 = property({
        type: PlayerFlag
      }), _dec3 = property({
        type: EChessJob
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ChessState, _Component);

        function ChessState() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ChessState);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ChessState)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "playerFlag", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "chessJob", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "attackRadius", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "attackAngel", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "moveTarget", _descriptor5, babelHelpers.assertThisInitialized(_this));
          _this._ModelTouchReceiver = null;
          return _this;
        }

        babelHelpers.createClass(ChessState, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return ChessState;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playerFlag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return PlayerFlag.White;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "chessJob", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EChessJob.Sword;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "attackRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "attackAngel", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "moveTarget", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0, 0);
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ChessState

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9DaGVzcy9DaGVzc1N0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMyIiwiUGxheWVyRmxhZyIsIkVDaGVzc0pvYiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNoZXNzU3RhdGUiLCJ0eXBlIiwiX01vZGVsVG91Y2hSZWNlaXZlciIsIldoaXRlIiwiU3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTs7QUFDN0JDLE1BQUFBLFUsb0JBQUFBLFU7QUFBWUMsTUFBQUEsUyxvQkFBQUEsUzs7O2lGQUNvRDs7O0FBQ2pFQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVMO0FBQVAsT0FBRCxDLFVBR1JHLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUVKO0FBQVAsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVlESyxtQixHQUEwQyxJOzs7Ozs7a0NBRXpDLENBR1IsQyxDQUZHO0FBTUo7QUFDQTtBQUNBOzs7O1FBNUI0QlIsUzs7Ozs7aUJBR1BFLFVBQVUsQ0FBQ08sSzs7Ozs7OztpQkFHYk4sU0FBUyxDQUFDTyxLOzttR0FFNUJMLFE7Ozs7O2lCQUNzQixDOztrR0FFdEJBLFE7Ozs7O2lCQUNxQixFOztpR0FFckJBLFE7Ozs7O2lCQUNrQixJQUFJSixJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsQzs7OztvQkFuQkwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzIgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IFBsYXllckZsYWcsIEVDaGVzc0pvYiB9IGZyb20gXCIuLi9HbG9iYWwvRGVmaW5lc1wiO1xuaW1wb3J0IHsgTW9kZWxUb3VjaFJlY2VpdmVyIH0gZnJvbSBcIi4uL01vZGVsVG91Y2hSZWNlaXZlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJDaGVzc1N0YXRlXCIpXG5leHBvcnQgY2xhc3MgQ2hlc3NTdGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQbGF5ZXJGbGFnfSlcbiAgICBwbGF5ZXJGbGFnOiBudW1iZXIgPSBQbGF5ZXJGbGFnLldoaXRlO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBFQ2hlc3NKb2J9KVxuICAgIGNoZXNzSm9iOiBzdHJpbmcgPSBFQ2hlc3NKb2IuU3dvcmQ7XG5cbiAgICBAcHJvcGVydHlcbiAgICBhdHRhY2tSYWRpdXM6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHlcbiAgICBhdHRhY2tBbmdlbDogbnVtYmVyID0gNjA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBtb3ZlVGFyZ2V0OiBWZWMyID0gbmV3IFZlYzIoMCwwKTtcblxuICAgIHByaXZhdGUgX01vZGVsVG91Y2hSZWNlaXZlcjogTW9kZWxUb3VjaFJlY2VpdmVyID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=