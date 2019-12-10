"use strict";

System.register(["cc", "./Area/SectionArea.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec3, SectionArea, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, ChessAttack;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_AreaSectionAreaTs) {
      SectionArea = _AreaSectionAreaTs.SectionArea;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "74b7c9jNnRBqqF/O5o1hKMO", "ChessAttack"); // begin ChessAttack


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChessAttack", ChessAttack = (_dec = ccclass("ChessAttack"), _dec2 = property({
        type: Vec3,
        readonly: true
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ChessAttack, _Component);

        function ChessAttack() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ChessAttack);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ChessAttack)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "radius", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "angle", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "direction", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this.area = null;
          return _this;
        }

        babelHelpers.createClass(ChessAttack, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.area = new SectionArea(this.radius, this.angle);
          }
        }, {
          key: "intersect",
          value: function intersect(location, point) {
            return this.area.intersectPoint(location, point);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return ChessAttack;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "angle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "direction", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ChessAttack

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9DaGVzcy9DaGVzc0F0dGFjay50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsIlNlY3Rpb25BcmVhIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2hlc3NBdHRhY2siLCJ0eXBlIiwicmVhZG9ubHkiLCJhcmVhIiwicmFkaXVzIiwiYW5nbGUiLCJsb2NhdGlvbiIsInBvaW50IiwiaW50ZXJzZWN0UG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBc0JDLE1BQUFBLEksT0FBQUEsSTs7QUFDbENDLE1BQUFBLFcsc0JBQUFBLFc7OztrRkFDZ0U7OztBQUNqRUMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxVQVdIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFTCxJQUFQO0FBQWFNLFFBQUFBLFFBQVEsRUFBRTtBQUF2QixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdEQyxJLEdBQWEsSTs7Ozs7O2tDQUVaO0FBQ0w7QUFDQSxpQkFBS0EsSUFBTCxHQUFZLElBQUlOLFdBQUosQ0FBZ0IsS0FBS08sTUFBckIsRUFBNkIsS0FBS0MsS0FBbEMsQ0FBWjtBQUNIOzs7b0NBRVVDLFEsRUFBZ0JDLEssRUFBc0I7QUFDN0MsbUJBQU8sS0FBS0osSUFBTCxDQUFVSyxjQUFWLENBQXlCRixRQUF6QixFQUFtQ0MsS0FBbkMsQ0FBUDtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUExQjZCWixTLDhGQUk1QkksUTs7Ozs7aUJBQ2dCLEM7OzRGQUVoQkEsUTs7Ozs7aUJBQ2UsRzs7Ozs7OztpQkFHbUIsSTs7OztvQkFmckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvZywgVmVjMyB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgU2VjdGlvbkFyZWEgfSBmcm9tIFwiLi9BcmVhL1NlY3Rpb25BcmVhXCI7XG5pbXBvcnQgeyBBcmVhIH0gZnJvbSBcIi4vQXJlYS9BcmVhXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkNoZXNzQXR0YWNrXCIpXG5leHBvcnQgY2xhc3MgQ2hlc3NBdHRhY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgLy9AcHJvcGVydHkoe3R5cGU6IENoZXNzQXR0YWNrQXJlYVR5cGV9KVxuXG4gICAgQHByb3BlcnR5XG4gICAgcmFkaXVzOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgYW5nbGU6IG51bWJlciA9IDM2MDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogVmVjMywgcmVhZG9ubHk6IHRydWV9KVxuICAgIHByb3RlY3RlZCBkaXJlY3Rpb246IFZlYzMgfCBudWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgYXJlYTogQXJlYSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLmFyZWEgPSBuZXcgU2VjdGlvbkFyZWEodGhpcy5yYWRpdXMsIHRoaXMuYW5nbGUpO1xuICAgIH1cblxuICAgIGludGVyc2VjdCAobG9jYXRpb246IFZlYzMsIHBvaW50OiBWZWMzKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyZWEuaW50ZXJzZWN0UG9pbnQobG9jYXRpb24sIHBvaW50KTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=