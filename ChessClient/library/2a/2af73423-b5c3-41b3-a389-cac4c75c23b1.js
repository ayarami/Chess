"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var Enum, ModelTouchEvent, EventModelData, PlayerFlag, EChessJob, EClientMsg, EChessAnim;

  _export({
    ModelTouchEvent: void 0,
    EClientMsg: void 0,
    EChessAnim: void 0
  });

  return {
    setters: [function (_cc) {
      Enum = _cc.Enum;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "2af73QjtcNBs6OJysTHXCOx", "Defines"); // begin Defines


      (function (ModelTouchEvent) {
        ModelTouchEvent["TouchStart"] = "TouchStart";
        ModelTouchEvent["TouchMove"] = "TouchMove";
        ModelTouchEvent["TouchEnd"] = "TouchEnd";
        ModelTouchEvent["TouchCancel"] = "TouchCancel";
      })(ModelTouchEvent || _export("ModelTouchEvent", ModelTouchEvent = {}));

      _export("EventModelData", EventModelData = function EventModelData(hitpoint, node) {
        babelHelpers.classCallCheck(this, EventModelData);
        this.hitpoint = null;
        this.node = null;
        this._eventCode = null;
        this.hitpoint = hitpoint;
        this.node = node;
      });

      _export("PlayerFlag", PlayerFlag = Enum({
        White: 0,
        Black: 1
      }));

      _export("EChessJob", EChessJob = Enum({
        Sword: 'Sword',
        Spear: 'Spear',
        Arrow: 'Arrow'
      }));

      (function (EClientMsg) {
        EClientMsg["SelectedChess"] = "SelectedChess";
      })(EClientMsg || _export("EClientMsg", EClientMsg = {}));

      (function (EChessAnim) {
        EChessAnim["SelectedChessAnim"] = "SelectedChessAnim";
        EChessAnim["UnselectedChessAnim"] = "UnselectedChessAnim";
      })(EChessAnim || _export("EChessAnim", EChessAnim = {}));

      cc._RF.pop(); // end Defines

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9HbG9iYWwvRGVmaW5lcy50cyJdLCJuYW1lcyI6WyJFbnVtIiwiTW9kZWxUb3VjaEV2ZW50IiwiRXZlbnRNb2RlbERhdGEiLCJoaXRwb2ludCIsIm5vZGUiLCJfZXZlbnRDb2RlIiwiUGxheWVyRmxhZyIsIldoaXRlIiwiQmxhY2siLCJFQ2hlc3NKb2IiLCJTd29yZCIsIlNwZWFyIiwiQXJyb3ciLCJFQ2xpZW50TXNnIiwiRUNoZXNzQW5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCQSxNQUFBQSxJLE9BQUFBLEk7Ozs4RUFFb0Q7OztpQkFBN0RDLGU7QUFBQUEsUUFBQUEsZTtBQUFBQSxRQUFBQSxlO0FBQUFBLFFBQUFBLGU7QUFBQUEsUUFBQUEsZTtTQUFBQSxlLCtCQUFBQSxlOztnQ0FPQ0MsYyxHQUlULHdCQUFhQyxRQUFiLEVBQW9DQyxJQUFwQyxFQUFnRDtBQUFBO0FBQUEsYUFIekNELFFBR3lDLEdBSGpCLElBR2lCO0FBQUEsYUFGekNDLElBRXlDLEdBRjVCLElBRTRCO0FBQUEsYUFEekNDLFVBQ3lDLEdBRGIsSUFDYTtBQUM1QyxhQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGFBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNILE87OzRCQUdNRSxVLEdBQWFOLElBQUksQ0FBQztBQUN6Qk8sUUFBQUEsS0FBSyxFQUFPLENBRGE7QUFFekJDLFFBQUFBLEtBQUssRUFBTztBQUZhLE9BQUQsQzs7MkJBS2pCQyxTLEdBQVlULElBQUksQ0FBQztBQUN4QlUsUUFBQUEsS0FBSyxFQUFHLE9BRGdCO0FBRXhCQyxRQUFBQSxLQUFLLEVBQUcsT0FGZ0I7QUFHeEJDLFFBQUFBLEtBQUssRUFBRztBQUhnQixPQUFELEM7O2lCQU1mQyxVO0FBQUFBLFFBQUFBLFU7U0FBQUEsVSwwQkFBQUEsVTs7aUJBSUFDLFU7QUFBQUEsUUFBQUEsVTtBQUFBQSxRQUFBQSxVO1NBQUFBLFUsMEJBQUFBLFU7O29CQWhDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlYzMsIE5vZGUsIEVudW0gfSBmcm9tIFwiY2NcIjtcblxuZXhwb3J0IGVudW0gTW9kZWxUb3VjaEV2ZW50IHtcbiAgICBUb3VjaFN0YXJ0ICA9ICAgJ1RvdWNoU3RhcnQnLFxuICAgIFRvdWNoTW92ZSAgID0gICAnVG91Y2hNb3ZlJyxcbiAgICBUb3VjaEVuZCAgICA9ICAgJ1RvdWNoRW5kJyxcbiAgICBUb3VjaENhbmNlbCA9ICAgJ1RvdWNoQ2FuY2VsJ1xufVxuXG5leHBvcnQgY2xhc3MgRXZlbnRNb2RlbERhdGEge1xuICAgIHB1YmxpYyBoaXRwb2ludDogVmVjMyB8IG51bGwgPSBudWxsO1xuICAgIHB1YmxpYyBub2RlOiBOb2RlID0gbnVsbDtcbiAgICBwdWJsaWMgX2V2ZW50Q29kZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IgKGhpdHBvaW50OiBWZWMzIHwgbnVsbCwgbm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmhpdHBvaW50ID0gaGl0cG9pbnQ7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIFBsYXllckZsYWcgPSBFbnVtKHtcbiAgICBXaGl0ZSAgIDogICAwLFxuICAgIEJsYWNrICAgOiAgIDFcbn0pXG5cbmV4cG9ydCB2YXIgRUNoZXNzSm9iID0gRW51bSh7XG4gICAgU3dvcmQgOiAnU3dvcmQnLFxuICAgIFNwZWFyIDogJ1NwZWFyJyxcbiAgICBBcnJvdyA6ICdBcnJvdydcbn0pXG5cbmV4cG9ydCBlbnVtIEVDbGllbnRNc2cge1xuICAgIFNlbGVjdGVkQ2hlc3MgICA9ICAgICdTZWxlY3RlZENoZXNzJ1xufVxuXG5leHBvcnQgZW51bSBFQ2hlc3NBbmltIHtcbiAgICBTZWxlY3RlZENoZXNzQW5pbSAgICAgICA9ICdTZWxlY3RlZENoZXNzQW5pbScsXG4gICAgVW5zZWxlY3RlZENoZXNzQW5pbSAgICAgPSAnVW5zZWxlY3RlZENoZXNzQW5pbSdcbn0iXX0=