"use strict";

System.register(["cc", "./Global/Defines.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, geometry, CameraComponent, PhysicsSystem, ModelTouchEvent, EventModelData, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, ModelTouch;

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
      Node = _cc.Node;
      geometry = _cc.geometry;
      CameraComponent = _cc.CameraComponent;
      PhysicsSystem = _cc.PhysicsSystem;
    }, function (_GlobalDefinesTs) {
      ModelTouchEvent = _GlobalDefinesTs.ModelTouchEvent;
      EventModelData = _GlobalDefinesTs.EventModelData;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "2d1bacIj4pDb4UX9bXx+Lad", "ModelTouch"); // begin ModelTouch


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ModelTouch", ModelTouch = (_dec = ccclass("ModelTouch"), _dec2 = property(CameraComponent), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ModelTouch, _Component);

        function ModelTouch() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ModelTouch);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ModelTouch)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "camera", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this.targetNode = null;
          return _this;
        }

        babelHelpers.createClass(ModelTouch, [{
          key: "getTouchRay",
          value: function getTouchRay(touch) {
            var ray = new geometry.ray();
            var camera = this.camera;
            var touchPos = touch.getLocation();
            camera.screenPointToRay(touchPos.x, touchPos.y, ray);
            return ray;
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.node.on(Node.EventType.TOUCH_START, function (touch, event) {
              var ray = _this2.getTouchRay(touch);

              PhysicsSystem.instance.raycastClosest(ray, -1, 100, false);
              var result = PhysicsSystem.instance.raycastClosestResult; //console.log(PhysicsSystem.instance.raycastClosestResult);

              if (result.collider) {
                var node = result.collider.node;
                var hitpoint = result.hitPoint;
                var data = new EventModelData(hitpoint, node);
                node.emit(ModelTouchEvent.TouchStart, data);
                _this2.targetNode = node;
              }
            }, this);
            this.node.on(Node.EventType.TOUCH_MOVE, function (touch, event) {
              var ray = _this2.getTouchRay(touch);

              PhysicsSystem.instance.raycastClosest(ray, -1, 100, false);
              var result = PhysicsSystem.instance.raycastClosestResult; //console.log(PhysicsSystem.instance.raycastClosestResult);

              var node = result.collider.node;
              var hitpoint = result.hitPoint;
              var data = new EventModelData(hitpoint, node);

              _this2.targetNode.emit(ModelTouchEvent.TouchMove, data);
            }, this);
            this.node.on(Node.EventType.TOUCH_END, function (touch, event) {
              var ray = _this2.getTouchRay(touch);

              PhysicsSystem.instance.raycastClosest(ray, -1, 100, false);
              var result = PhysicsSystem.instance.raycastClosestResult; //console.log(PhysicsSystem.instance.raycastClosestResult);

              var node = result.collider.node;
              var hitpoint = result.hitPoint;
              var data = new EventModelData(hitpoint, node);

              _this2.targetNode.emit(ModelTouchEvent.TouchEnd, data);

              _this2.targetNode = null;
            }, this);
            this.node.on(Node.EventType.TOUCH_CANCEL, function (touch, event) {
              var ray = _this2.getTouchRay(touch);

              PhysicsSystem.instance.raycastClosest(ray, -1, 100, false);
              var result = PhysicsSystem.instance.raycastClosestResult; //console.log(PhysicsSystem.instance.raycastClosestResult);

              var node = result.collider.node;
              var hitpoint = result.hitPoint;
              var data = new EventModelData(hitpoint, node);

              _this2.targetNode.emit(ModelTouchEvent.TouchCancel, data);

              _this2.targetNode = null;
            }, this);
          }
        }]);
        return ModelTouch;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ModelTouch

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9Nb2RlbFRvdWNoLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiZ2VvbWV0cnkiLCJDYW1lcmFDb21wb25lbnQiLCJQaHlzaWNzU3lzdGVtIiwiTW9kZWxUb3VjaEV2ZW50IiwiRXZlbnRNb2RlbERhdGEiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNb2RlbFRvdWNoIiwidGFyZ2V0Tm9kZSIsInRvdWNoIiwicmF5IiwiY2FtZXJhIiwidG91Y2hQb3MiLCJnZXRMb2NhdGlvbiIsInNjcmVlblBvaW50VG9SYXkiLCJ4IiwieSIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJnZXRUb3VjaFJheSIsImluc3RhbmNlIiwicmF5Y2FzdENsb3Nlc3QiLCJyZXN1bHQiLCJyYXljYXN0Q2xvc2VzdFJlc3VsdCIsImNvbGxpZGVyIiwiaGl0cG9pbnQiLCJoaXRQb2ludCIsImRhdGEiLCJlbWl0IiwiVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJUb3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJUb3VjaEVuZCIsIlRPVUNIX0NBTkNFTCIsIlRvdWNoQ2FuY2VsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGUsT0FBQUEsZTtBQUF3QkMsTUFBQUEsYSxPQUFBQSxhOztBQUMvREMsTUFBQUEsZSxvQkFBQUEsZTtBQUFpQkMsTUFBQUEsYyxvQkFBQUEsYzs7O2lGQUMrQzs7O0FBQWpFQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBRUhDLFFBQVEsQ0FB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dUIsSUFBaEIsQ0FBcUI1QixlQUFlLENBQUNtQyxXQUFyQyxFQUFrRFIsSUFBbEQ7O0FBRUEsY0FBQSxNQUFJLENBQUN0QixVQUFMLEdBQWtCLElBQWxCO0FBQ0gsYUFmRCxFQWVHLElBZkg7QUFnQkg7OztRQXBGMkJWLFM7Ozs7O2lCQUVGLEk7Ozs7b0JBTFoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGdlb21ldHJ5LCBDYW1lcmFDb21wb25lbnQsIFRvdWNoLCBQaHlzaWNzU3lzdGVtLCBWZWMzLCBFdmVudCwgUGh5c2ljc1JheVJlc3VsdCwgX19pbnRlcm5hbH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBNb2RlbFRvdWNoRXZlbnQsIEV2ZW50TW9kZWxEYXRhIH0gZnJvbSBcIi4vR2xvYmFsL0RlZmluZXNcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiTW9kZWxUb3VjaFwiKVxuZXhwb3J0IGNsYXNzIE1vZGVsVG91Y2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShDYW1lcmFDb21wb25lbnQpXG4gICAgY2FtZXJhOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xuXG4gICAgXG5cbiAgICBwcml2YXRlIHRhcmdldE5vZGUgPSBudWxsO1xuXG4gICAgZ2V0VG91Y2hSYXkgKHRvdWNoOiBUb3VjaCkge1xuICAgICAgICBjb25zdCByYXkgPSBuZXcgZ2VvbWV0cnkucmF5KCk7XG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhO1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRvdWNoLmdldExvY2F0aW9uKCk7XG4gICAgICAgIGNhbWVyYS5zY3JlZW5Qb2ludFRvUmF5KHRvdWNoUG9zLngsIHRvdWNoUG9zLnksIHJheSk7XG4gICAgICAgIHJldHVybiByYXk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICh0b3VjaDogVG91Y2ggLCBldmVudDogRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgdmFyIHJheSA9IHRoaXMuZ2V0VG91Y2hSYXkodG91Y2gpO1xuXG4gICAgICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheSwgLTEsIDEwMCxmYWxzZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0OiBQaHlzaWNzUmF5UmVzdWx0ID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdDtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuY29sbGlkZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTogTm9kZSA9IHJlc3VsdC5jb2xsaWRlci5ub2RlIGFzIE5vZGU7XG4gICAgICAgICAgICAgICAgdmFyIGhpdHBvaW50OiBWZWMzID0gcmVzdWx0LmhpdFBvaW50O1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGE6IEV2ZW50TW9kZWxEYXRhID0gbmV3IEV2ZW50TW9kZWxEYXRhKGhpdHBvaW50LCBub2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLmVtaXQoTW9kZWxUb3VjaEV2ZW50LlRvdWNoU3RhcnQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAodG91Y2g6IFRvdWNoICwgZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgcmF5ID0gdGhpcy5nZXRUb3VjaFJheSh0b3VjaCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3QocmF5LCAtMSwgMTAwLGZhbHNlKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQ6IFBoeXNpY3NSYXlSZXN1bHQgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0O1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQpO1xuXG4gICAgICAgICAgICB2YXIgbm9kZTogTm9kZSA9IHJlc3VsdC5jb2xsaWRlci5ub2RlIGFzIE5vZGU7XG4gICAgICAgICAgICB2YXIgaGl0cG9pbnQ6IFZlYzMgPSByZXN1bHQuaGl0UG9pbnQ7XG5cbiAgICAgICAgICAgIHZhciBkYXRhOiBFdmVudE1vZGVsRGF0YSA9IG5ldyBFdmVudE1vZGVsRGF0YShoaXRwb2ludCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZW1pdChNb2RlbFRvdWNoRXZlbnQuVG91Y2hNb3ZlLCBkYXRhKTsgICAgICAgICAgICBcblxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAodG91Y2g6IFRvdWNoICwgZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgcmF5ID0gdGhpcy5nZXRUb3VjaFJheSh0b3VjaCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3QocmF5LCAtMSwgMTAwLGZhbHNlKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQ6IFBoeXNpY3NSYXlSZXN1bHQgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0O1xuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQpO1xuXG4gICAgICAgICAgICB2YXIgbm9kZTogTm9kZSA9IHJlc3VsdC5jb2xsaWRlci5ub2RlIGFzIE5vZGU7XG4gICAgICAgICAgICB2YXIgaGl0cG9pbnQ6IFZlYzMgPSByZXN1bHQuaGl0UG9pbnQ7XG5cbiAgICAgICAgICAgIHZhciBkYXRhOiBFdmVudE1vZGVsRGF0YSA9IG5ldyBFdmVudE1vZGVsRGF0YShoaXRwb2ludCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldE5vZGUuZW1pdChNb2RlbFRvdWNoRXZlbnQuVG91Y2hFbmQsIGRhdGEpOyBcblxuICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKHRvdWNoOiBUb3VjaCAsIGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJheSA9IHRoaXMuZ2V0VG91Y2hSYXkodG91Y2gpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheSwgLTEsIDEwMCxmYWxzZSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0OiBQaHlzaWNzUmF5UmVzdWx0ID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdDtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0KTtcblxuICAgICAgICAgICAgdmFyIG5vZGU6IE5vZGUgPSByZXN1bHQuY29sbGlkZXIubm9kZSBhcyBOb2RlO1xuICAgICAgICAgICAgdmFyIGhpdHBvaW50OiBWZWMzID0gcmVzdWx0LmhpdFBvaW50O1xuXG4gICAgICAgICAgICB2YXIgZGF0YTogRXZlbnRNb2RlbERhdGEgPSBuZXcgRXZlbnRNb2RlbERhdGEoaGl0cG9pbnQsIG5vZGUpO1xuICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlLmVtaXQoTW9kZWxUb3VjaEV2ZW50LlRvdWNoQ2FuY2VsLCBkYXRhKTsgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50YXJnZXROb2RlID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxufVxuIl19