"use strict";

System.register(["cc", "./Area.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Vec2, Area, _dec, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, SectionArea;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Vec2 = _cc.Vec2;
    }, function (_AreaTs) {
      Area = _AreaTs.Area;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "43c32ADJv5OVrAUpB2lnre4", "SectionArea"); // begin SectionArea


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SectionArea", SectionArea = (_dec = ccclass("SectionArea"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Area) {
        babelHelpers.inherits(SectionArea, _Area);

        function SectionArea(radius, angle) {
          var _this;

          babelHelpers.classCallCheck(this, SectionArea);
          _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SectionArea).call(this));
          babelHelpers.initializerDefineProperty(_this, "radius", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "angle", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this.radius = radius;
          _this.angle = angle;
          return _this;
        }

        babelHelpers.createClass(SectionArea, [{
          key: "intersectPoint",
          value: function intersectPoint(location, point) {
            var pointProjection = new Vec2(point.x, point.z);
            var locationProjection = new Vec2(location.x, location.z);
            var halfAngle = this.angle / 2;
            var targetDirection = pointProjection.subtract(locationProjection);

            if (targetDirection.length() > this.radius) {
              return false;
            }

            var angleBetweenTargetAndDirection = targetDirection.angle(this.direction);

            if (angleBetweenTargetAndDirection <= halfAngle) {
              return true;
            } else return false;

            return false;
          }
        }]);
        return SectionArea;
      }(Area), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "radius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "angle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end SectionArea

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9DaGVzcy9BcmVhL1NlY3Rpb25BcmVhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJWZWMyIiwiQXJlYSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNlY3Rpb25BcmVhIiwicmFkaXVzIiwiYW5nbGUiLCJsb2NhdGlvbiIsInBvaW50IiwicG9pbnRQcm9qZWN0aW9uIiwieCIsInoiLCJsb2NhdGlvblByb2plY3Rpb24iLCJoYWxmQW5nbGUiLCJ0YXJnZXREaXJlY3Rpb24iLCJzdWJ0cmFjdCIsImxlbmd0aCIsImFuZ2xlQmV0d2VlblRhcmdldEFuZERpcmVjdGlvbiIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFtQ0MsTUFBQUEsSSxPQUFBQSxJOztBQUNuQ0MsTUFBQUEsSSxXQUFBQSxJOzs7a0ZBQ2dFOzs7QUFBakVDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7O0FBU0osNkJBQWFHLE1BQWIsRUFBNkJDLEtBQTdCLEVBQTRDO0FBQUE7O0FBQUE7QUFDeEM7QUFEd0M7QUFBQTtBQUV4QyxnQkFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsZ0JBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUh3QztBQUkzQzs7Ozt5Q0FFZUMsUSxFQUFnQkMsSyxFQUFzQjtBQUNsRCxnQkFBSUMsZUFBcUIsR0FBRyxJQUFJVCxJQUFKLENBQVNRLEtBQUssQ0FBQ0UsQ0FBZixFQUFrQkYsS0FBSyxDQUFDRyxDQUF4QixDQUE1QjtBQUNBLGdCQUFJQyxrQkFBd0IsR0FBRyxJQUFJWixJQUFKLENBQVNPLFFBQVEsQ0FBQ0csQ0FBbEIsRUFBcUJILFFBQVEsQ0FBQ0ksQ0FBOUIsQ0FBL0I7QUFDQSxnQkFBSUUsU0FBUyxHQUFHLEtBQUtQLEtBQUwsR0FBYSxDQUE3QjtBQUNBLGdCQUFJUSxlQUFlLEdBQUdMLGVBQWUsQ0FBQ00sUUFBaEIsQ0FBeUJILGtCQUF6QixDQUF0Qjs7QUFDQSxnQkFBSUUsZUFBZSxDQUFDRSxNQUFoQixLQUEyQixLQUFLWCxNQUFwQyxFQUE0QztBQUN4QyxxQkFBTyxLQUFQO0FBQ0g7O0FBQ0QsZ0JBQUlZLDhCQUE4QixHQUFHSCxlQUFlLENBQUNSLEtBQWhCLENBQXNCLEtBQUtZLFNBQTNCLENBQXJDOztBQUNBLGdCQUFJRCw4QkFBOEIsSUFBSUosU0FBdEMsRUFBaUQ7QUFDN0MscUJBQU8sSUFBUDtBQUNILGFBRkQsTUFJSSxPQUFPLEtBQVA7O0FBRUosbUJBQU8sS0FBUDtBQUNIOzs7UUE5QjRCWixJLDhGQUU1QkUsUTs7Ozs7aUJBQ2dCLEM7OzRGQUVoQkEsUTs7Ozs7aUJBQ2UsRzs7OztvQkFURiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgVmVjMiwgZGlyZWN0b3IgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IEFyZWEgfSBmcm9tIFwiLi9BcmVhXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIlNlY3Rpb25BcmVhXCIpXG5leHBvcnQgY2xhc3MgU2VjdGlvbkFyZWEgZXh0ZW5kcyBBcmVhIHtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICByYWRpdXM6IG51bWJlciA9IDE7XG5cbiAgICBAcHJvcGVydHlcbiAgICBhbmdsZTogbnVtYmVyID0gMzYwO1xuXG4gICAgY29uc3RydWN0b3IgKHJhZGl1czogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxuXG4gICAgaW50ZXJzZWN0UG9pbnQgKGxvY2F0aW9uOiBWZWMzLCBwb2ludDogVmVjMyk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcG9pbnRQcm9qZWN0aW9uOiBWZWMyID0gbmV3IFZlYzIocG9pbnQueCwgcG9pbnQueik7XG4gICAgICAgIHZhciBsb2NhdGlvblByb2plY3Rpb246IFZlYzIgPSBuZXcgVmVjMihsb2NhdGlvbi54LCBsb2NhdGlvbi56KTtcbiAgICAgICAgdmFyIGhhbGZBbmdsZSA9IHRoaXMuYW5nbGUgLyAyO1xuICAgICAgICB2YXIgdGFyZ2V0RGlyZWN0aW9uID0gcG9pbnRQcm9qZWN0aW9uLnN1YnRyYWN0KGxvY2F0aW9uUHJvamVjdGlvbik7XG4gICAgICAgIGlmICh0YXJnZXREaXJlY3Rpb24ubGVuZ3RoKCkgPiB0aGlzLnJhZGl1cykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbmdsZUJldHdlZW5UYXJnZXRBbmREaXJlY3Rpb24gPSB0YXJnZXREaXJlY3Rpb24uYW5nbGUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBpZiAoYW5nbGVCZXR3ZWVuVGFyZ2V0QW5kRGlyZWN0aW9uIDw9IGhhbGZBbmdsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXX0=