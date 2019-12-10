"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, ModelComponent, Vec3, Color, _dec, _dec2, _class, _class2, _temp, ccclass, property, requireComponent, AreaNode;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ModelComponent = _cc.ModelComponent;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "c46ddxaiDZHNI39tKPf+iLq", "AreaNode"); // begin AreaNode


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;

      _export("AreaNode", AreaNode = (_dec = ccclass("AreaNode"), _dec2 = requireComponent(ModelComponent), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(AreaNode, _Component);
        babelHelpers.createClass(AreaNode, [{
          key: "maxDistance",
          get: function get() {
            return this._maxDistance;
          },
          set: function set(value) {
            if (!this._material) {
              this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
            }

            this._maxDistance = value;

            this._material.setProperty('maxDistance', this._maxDistance / 5);
          }
        }, {
          key: "minDistance",
          get: function get() {
            return this._minDistance;
          },
          set: function set(value) {
            if (!this._material) {
              this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
            }

            this._minDistance = value;

            this._material.setProperty('minDistance', this._minDistance / 5);
          }
        }, {
          key: "angle",
          get: function get() {
            return this._angle;
          },
          set: function set(value) {
            if (!this._material) {
              this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
            }

            this._angle = value;

            this._material.setProperty('angle', this._angle);
          }
        }, {
          key: "areaColor",
          get: function get() {
            return this._areaColor;
          },
          set: function set(value) {
            if (!this._material) {
              this._material = this.node.getComponent(ModelComponent).getSharedMaterial(0);
            }

            this._areaColor = value;

            this._material.setProperty('color', this._areaColor);
          }
        }, {
          key: "direction",
          get: function get() {
            return this.node.eulerAngles;
          }
        }]);

        function AreaNode() {
          var _this;

          babelHelpers.classCallCheck(this, AreaNode);
          _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(AreaNode).call(this));
          _this._maxDistance = 5;
          _this._minDistance = 0;
          _this._angle = 30;
          _this._areaColor = new Color(255, 0, 0, 128);
          _this._direction = new Vec3(0, 0, 0);
          _this._material = null;
          return _this;
        }

        babelHelpers.createClass(AreaNode, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return AreaNode;
      }(Component), _temp), (babelHelpers.applyDecoratedDescriptor(_class2.prototype, "maxDistance", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "maxDistance"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "minDistance", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "minDistance"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "angle", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "angle"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "areaColor", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "areaColor"), _class2.prototype), babelHelpers.applyDecoratedDescriptor(_class2.prototype, "direction", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "direction"), _class2.prototype)), _class2)) || _class) || _class));

      cc._RF.pop(); // end AreaNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9DaGVzcy9BcmVhL0FyZWFOb2RlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJNb2RlbENvbXBvbmVudCIsIlZlYzMiLCJDb2xvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInJlcXVpcmVDb21wb25lbnQiLCJBcmVhTm9kZSIsIl9tYXhEaXN0YW5jZSIsInZhbHVlIiwiX21hdGVyaWFsIiwibm9kZSIsImdldENvbXBvbmVudCIsImdldFNoYXJlZE1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJfbWluRGlzdGFuY2UiLCJfYW5nbGUiLCJfYXJlYUNvbG9yIiwiZXVsZXJBbmdsZXMiLCJfZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlDQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7OzsrRUFFSDs7O0FBRGpFQyxNQUFBQSxPLEdBQXdDTCxVLENBQXhDSyxPO0FBQVNDLE1BQUFBLFEsR0FBK0JOLFUsQ0FBL0JNLFE7QUFBVUMsTUFBQUEsZ0IsR0FBcUJQLFUsQ0FBckJPLGdCOzswQkFJZEMsUSxXQUZaSCxPQUFPLENBQUMsVUFBRCxDLFVBQ1BFLGdCQUFnQixDQUFDTCxjQUFELEM7Ozs7Ozs4QkFRYztBQUN2QixtQkFBTyxLQUFLTyxZQUFaO0FBQ0gsVzs0QkFDZ0JDLEssRUFBZTtBQUM1QixnQkFBSSxDQUFDLEtBQUtDLFNBQVYsRUFBcUI7QUFDakIsbUJBQUtBLFNBQUwsR0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxjQUF2QixFQUF1Q1ksaUJBQXZDLENBQXlELENBQXpELENBQWpCO0FBQ0g7O0FBQ0QsaUJBQUtMLFlBQUwsR0FBb0JDLEtBQXBCOztBQUNBLGlCQUFLQyxTQUFMLENBQWVJLFdBQWYsQ0FBMkIsYUFBM0IsRUFBMEMsS0FBS04sWUFBTCxHQUFvQixDQUE5RDtBQUNIOzs7OEJBRzBCO0FBQ3ZCLG1CQUFPLEtBQUtPLFlBQVo7QUFDSCxXOzRCQUNnQk4sSyxFQUFlO0FBQzVCLGdCQUFJLENBQUMsS0FBS0MsU0FBVixFQUFxQjtBQUNqQixtQkFBS0EsU0FBTCxHQUFpQixLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJYLGNBQXZCLEVBQXVDWSxpQkFBdkMsQ0FBeUQsQ0FBekQsQ0FBakI7QUFDSDs7QUFDRCxpQkFBS0UsWUFBTCxHQUFvQk4sS0FBcEI7O0FBQ0EsaUJBQUtDLFNBQUwsQ0FBZUksV0FBZixDQUEyQixhQUEzQixFQUEwQyxLQUFLQyxZQUFMLEdBQW9CLENBQTlEO0FBQ0g7Ozs4QkFLb0I7QUFDakIsbUJBQU8sS0FBS0MsTUFBWjtBQUNILFc7NEJBQ1VQLEssRUFBZTtBQUN0QixnQkFBSSxDQUFDLEtBQUtDLFNBQVYsRUFBcUI7QUFDakIsbUJBQUtBLFNBQUwsR0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxjQUF2QixFQUF1Q1ksaUJBQXZDLENBQXlELENBQXpELENBQWpCO0FBQ0g7O0FBQ0QsaUJBQUtHLE1BQUwsR0FBY1AsS0FBZDs7QUFDQSxpQkFBS0MsU0FBTCxDQUFlSSxXQUFmLENBQTJCLE9BQTNCLEVBQW9DLEtBQUtFLE1BQXpDO0FBQ0g7Ozs4QkFLdUI7QUFDcEIsbUJBQU8sS0FBS0MsVUFBWjtBQUNILFc7NEJBQ2NSLEssRUFBYztBQUN6QixnQkFBSSxDQUFDLEtBQUtDLFNBQVYsRUFBcUI7QUFDakIsbUJBQUtBLFNBQUwsR0FBaUIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxjQUF2QixFQUF1Q1ksaUJBQXZDLENBQXlELENBQXpELENBQWpCO0FBQ0g7O0FBQ0QsaUJBQUtJLFVBQUwsR0FBa0JSLEtBQWxCOztBQUNBLGlCQUFLQyxTQUFMLENBQWVJLFdBQWYsQ0FBMkIsT0FBM0IsRUFBb0MsS0FBS0csVUFBekM7QUFDSDs7OzhCQUtxQjtBQUNsQixtQkFBTyxLQUFLTixJQUFMLENBQVVPLFdBQWpCO0FBQ0g7OztBQUlELDRCQUFlO0FBQUE7O0FBQUE7QUFDWDtBQURXLGdCQWpFUFYsWUFpRU8sR0FqRWdCLENBaUVoQjtBQUFBLGdCQS9EUE8sWUErRE8sR0EvRGdCLENBK0RoQjtBQUFBLGdCQXJDUEMsTUFxQ08sR0FyQ1UsRUFxQ1Y7QUFBQSxnQkF2QlBDLFVBdUJPLEdBdkJhLElBQUlkLEtBQUosQ0FBVSxHQUFWLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQixHQUFsQixDQXVCYjtBQUFBLGdCQVRQZ0IsVUFTTyxHQVRZLElBQUlqQixJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBU1o7QUFBQSxnQkFGUFEsU0FFTyxHQUZlLElBRWY7QUFBQTtBQUVkOzs7O2tDQUVRLENBR1IsQyxDQURHO0FBR0o7QUFDQTtBQUNBOzs7O1FBOUUwQlYsUyxxRkFNekJLLFEsbUtBWUFBLFEsNkpBY0FBLFEsMkpBY0FBLFEsK0pBY0FBLFE7O29CQS9EYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMiwgTWF0ZXJpYWwsIE1vZGVsQ29tcG9uZW50LCBWZWMzLCBDb2xvciB9IGZyb20gXCJjY1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJBcmVhTm9kZVwiKVxuQHJlcXVpcmVDb21wb25lbnQoTW9kZWxDb21wb25lbnQpXG5leHBvcnQgY2xhc3MgQXJlYU5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfbWF4RGlzdGFuY2U6IG51bWJlciA9IDU7XG5cbiAgICBwcml2YXRlIF9taW5EaXN0YW5jZTogbnVtYmVyID0gMDtcbiAgICBcbiAgICBAcHJvcGVydHlcbiAgICBnZXQgbWF4RGlzdGFuY2UgKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhEaXN0YW5jZTtcbiAgICB9XG4gICAgc2V0IG1heERpc3RhbmNlICh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkuZ2V0U2hhcmVkTWF0ZXJpYWwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWF4RGlzdGFuY2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21heERpc3RhbmNlJywgdGhpcy5fbWF4RGlzdGFuY2UgLyA1KTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBnZXQgbWluRGlzdGFuY2UgKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5EaXN0YW5jZTtcbiAgICB9XG4gICAgc2V0IG1pbkRpc3RhbmNlICh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkuZ2V0U2hhcmVkTWF0ZXJpYWwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbWluRGlzdGFuY2UgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ21pbkRpc3RhbmNlJywgdGhpcy5fbWluRGlzdGFuY2UgLyA1KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hbmdsZTogbnVtYmVyID0gMzA7XG5cbiAgICBAcHJvcGVydHlcbiAgICBnZXQgYW5nbGUgKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmdsZTtcbiAgICB9XG4gICAgc2V0IGFuZ2xlICh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX21hdGVyaWFsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkuZ2V0U2hhcmVkTWF0ZXJpYWwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW5nbGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2FuZ2xlJywgdGhpcy5fYW5nbGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2FyZWFDb2xvcjogQ29sb3IgPSBuZXcgQ29sb3IoMjU1LDAsMCwxMjgpO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZ2V0IGFyZWFDb2xvciAoKTogQ29sb3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJlYUNvbG9yO1xuICAgIH1cbiAgICBzZXQgYXJlYUNvbG9yICh2YWx1ZTogQ29sb3IpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXRlcmlhbCkge1xuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWwgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KS5nZXRTaGFyZWRNYXRlcmlhbCgwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hcmVhQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ2NvbG9yJywgdGhpcy5fYXJlYUNvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9kaXJlY3Rpb246IFZlYzMgPSBuZXcgVmVjMygwLDAsMCk7XG5cbiAgICBAcHJvcGVydHlcbiAgICBnZXQgZGlyZWN0aW9uKCk6IFZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmV1bGVyQW5nbGVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hdGVyaWFsOiBNYXRlcmlhbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==