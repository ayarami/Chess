"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec3, Vec2, tweenUtil, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, ChessMove;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      tweenUtil = _cc.tweenUtil;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3fe86o4DzpOQJGRazVz4cNN", "ChessMove"); // begin ChessMove


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChessMove", ChessMove = (_dec = ccclass("ChessMove"), _dec2 = property(Vec3), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ChessMove, _Component);

        function ChessMove() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ChessMove);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ChessMove)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "targetPosition", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this.moveing = false;
          _this.location = null;
          return _this;
        }

        babelHelpers.createClass(ChessMove, [{
          key: "move",
          value: function move(targetPos) {
            var _this2 = this;

            this.targetPosition = new Vec3(targetPos.x, 0, targetPos.y);
            this.location = this.node.position;
            this.moveing = true;
            tweenUtil(this.location).to(3, this.targetPosition, {
              easing: 'Sinusoidal-InOut'
            }).call(function () {
              _this2.moveing = false;
            }).repeat(0).start();
          }
        }, {
          key: "test",
          value: function test() {
            this.move(new Vec2(2, 0));
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.moveing) {
              this.node.position = this.location;
            }
          }
        }]);
        return ChessMove;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "targetPosition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ChessMove

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9DaGVzcy9DaGVzc01vdmUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJWZWMyIiwidHdlZW5VdGlsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2hlc3NNb3ZlIiwibW92ZWluZyIsImxvY2F0aW9uIiwidGFyZ2V0UG9zIiwidGFyZ2V0UG9zaXRpb24iLCJ4IiwieSIsIm5vZGUiLCJwb3NpdGlvbiIsInRvIiwiZWFzaW5nIiwiY2FsbCIsInJlcGVhdCIsInN0YXJ0IiwibW92ZSIsImRlbHRhVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBYUMsTUFBQUEsUyxPQUFBQSxTOzs7Z0ZBRWdCOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEMsVUFFSEMsUUFBUSxDQUFDSixJQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHRE0sTyxHQUFtQixLO2dCQUNuQkMsUSxHQUFpQixJOzs7Ozs7K0JBRW5CQyxTLEVBQWlCO0FBQUE7O0FBQ25CLGlCQUFLQyxjQUFMLEdBQXNCLElBQUlULElBQUosQ0FBU1EsU0FBUyxDQUFDRSxDQUFuQixFQUFzQixDQUF0QixFQUF5QkYsU0FBUyxDQUFDRyxDQUFuQyxDQUF0QjtBQUNBLGlCQUFLSixRQUFMLEdBQWdCLEtBQUtLLElBQUwsQ0FBVUMsUUFBMUI7QUFDQSxpQkFBS1AsT0FBTCxHQUFlLElBQWY7QUFDQUosWUFBQUEsU0FBUyxDQUFDLEtBQUtLLFFBQU4sQ0FBVCxDQUNLTyxFQURMLENBQ1EsQ0FEUixFQUNXLEtBQUtMLGNBRGhCLEVBQ2dDO0FBQUNNLGNBQUFBLE1BQU0sRUFBRTtBQUFULGFBRGhDLEVBRUtDLElBRkwsQ0FFVSxZQUFNO0FBQUUsY0FBQSxNQUFJLENBQUNWLE9BQUwsR0FBZSxLQUFmO0FBQXNCLGFBRnhDLEVBR0tXLE1BSEwsQ0FHWSxDQUhaLEVBSUtDLEtBSkw7QUFLSDs7O2lDQUVPO0FBQ0osaUJBQUtDLElBQUwsQ0FBVSxJQUFJbEIsSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLENBQVY7QUFDSDs7O2lDQUVPbUIsUyxFQUFtQjtBQUN2QjtBQUNBLGdCQUFJLEtBQUtkLE9BQVQsRUFBa0I7QUFDZCxtQkFBS00sSUFBTCxDQUFVQyxRQUFWLEdBQXFCLEtBQUtOLFFBQTFCO0FBQ0g7QUFDSjs7O1FBM0IwQlIsUzs7Ozs7aUJBRUosSTs7OztvQkFKVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgVmVjMiwgdHdlZW4sIHR3ZWVuVXRpbCB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJDaGVzc01vdmVcIilcbmV4cG9ydCBjbGFzcyBDaGVzc01vdmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShWZWMzKVxuICAgIHRhcmdldFBvc2l0aW9uOiBWZWMzID0gbnVsbDtcblxuICAgIHByaXZhdGUgbW92ZWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgbG9jYXRpb246IFZlYzMgPSBudWxsO1xuXG4gICAgbW92ZSAodGFyZ2V0UG9zOiBWZWMyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0UG9zaXRpb24gPSBuZXcgVmVjMyh0YXJnZXRQb3MueCwgMCwgdGFyZ2V0UG9zLnkpO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm1vdmVpbmcgPSB0cnVlO1xuICAgICAgICB0d2VlblV0aWwodGhpcy5sb2NhdGlvbilcbiAgICAgICAgICAgIC50bygzLCB0aGlzLnRhcmdldFBvc2l0aW9uLCB7ZWFzaW5nOiAnU2ludXNvaWRhbC1Jbk91dCd9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4geyB0aGlzLm1vdmVpbmcgPSBmYWxzZSB9KVxuICAgICAgICAgICAgLnJlcGVhdCgwKVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdGVzdCAoKSB7XG4gICAgICAgIHRoaXMubW92ZShuZXcgVmVjMigyLDApKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgaWYgKHRoaXMubW92ZWluZykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5sb2NhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==