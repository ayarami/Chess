"use strict";

System.register(["cc", "./Global/Defines.ts", "./Global/GlobalVariables.ts"], function (_export, _context) {
  "use strict";

  var _decorator, Component, director, AnimationComponent, EClientMsg, EChessAnim, _G, _dec, _class, ccclass, property, SelectChess;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_GlobalDefinesTs) {
      EClientMsg = _GlobalDefinesTs.EClientMsg;
      EChessAnim = _GlobalDefinesTs.EChessAnim;
    }, function (_GlobalGlobalVariablesTs) {
      _G = _GlobalGlobalVariablesTs._G;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3a2a0AL0A5AbZT3+bwqYpJr", "SelectChess"); // begin SelectChess


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SelectChess", SelectChess = (_dec = ccclass("SelectChess"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SelectChess, _Component);

        function SelectChess() {
          babelHelpers.classCallCheck(this, SelectChess);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SelectChess).apply(this, arguments));
        }

        babelHelpers.createClass(SelectChess, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            director.on(EClientMsg.SelectedChess, this.selectChess, this);
          }
        }, {
          key: "selectChess",
          value: function selectChess(chessNode) {
            if (_G.selectedChess != chessNode) {}

            if (chessNode.name == 'ChessBoard' || chessNode == null || _G.selectedChess != chessNode) {
              if (_G.selectedChess) {
                this.unselectChess();
              }
            }

            if (chessNode && chessNode.name != 'ChessBoard') {
              _G.selectedChess = chessNode;

              _G.selectedChess.getComponent(AnimationComponent).crossFade(EChessAnim.SelectedChessAnim, 0.1);
            }
          }
        }, {
          key: "unselectChess",
          value: function unselectChess() {
            _G.selectedChess.getComponent(AnimationComponent).crossFade(EChessAnim.UnselectedChessAnim, 0.1);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return SelectChess;
      }(Component)) || _class));

      cc._RF.pop(); // end SelectChess

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL1NjcmlwdC9TZWxlY3RDaGVzcy50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiZGlyZWN0b3IiLCJBbmltYXRpb25Db21wb25lbnQiLCJFQ2xpZW50TXNnIiwiRUNoZXNzQW5pbSIsIl9HIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2VsZWN0Q2hlc3MiLCJvbiIsIlNlbGVjdGVkQ2hlc3MiLCJzZWxlY3RDaGVzcyIsImNoZXNzTm9kZSIsInNlbGVjdGVkQ2hlc3MiLCJuYW1lIiwidW5zZWxlY3RDaGVzcyIsImdldENvbXBvbmVudCIsImNyb3NzRmFkZSIsIlNlbGVjdGVkQ2hlc3NBbmltIiwiVW5zZWxlY3RlZENoZXNzQW5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGtCLE9BQUFBLGtCOztBQUN2Q0MsTUFBQUEsVSxvQkFBQUEsVTtBQUFZQyxNQUFBQSxVLG9CQUFBQSxVOztBQUNaQyxNQUFBQSxFLDRCQUFBQSxFOzs7a0ZBQWdFOzs7QUFDakVDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMTCxZQUFBQSxRQUFRLENBQUNRLEVBQVQsQ0FBWU4sVUFBVSxDQUFDTyxhQUF2QixFQUFzQyxLQUFLQyxXQUEzQyxFQUF3RCxJQUF4RDtBQUNIOzs7c0NBRVlDLFMsRUFBaUI7QUFDMUIsZ0JBQUlQLEVBQUUsQ0FBQ1EsYUFBSCxJQUFvQkQsU0FBeEIsRUFBbUMsQ0FFbEM7O0FBQ0QsZ0JBQUlBLFNBQVMsQ0FBQ0UsSUFBVixJQUFrQixZQUFsQixJQUFrQ0YsU0FBUyxJQUFJLElBQS9DLElBQXVEUCxFQUFFLENBQUNRLGFBQUgsSUFBb0JELFNBQS9FLEVBQTBGO0FBQ3RGLGtCQUFJUCxFQUFFLENBQUNRLGFBQVAsRUFBc0I7QUFDbEIscUJBQUtFLGFBQUw7QUFDSDtBQUNKOztBQUNELGdCQUFJSCxTQUFTLElBQUlBLFNBQVMsQ0FBQ0UsSUFBVixJQUFrQixZQUFuQyxFQUFpRDtBQUM3Q1QsY0FBQUEsRUFBRSxDQUFDUSxhQUFILEdBQW1CRCxTQUFuQjs7QUFDQVAsY0FBQUEsRUFBRSxDQUFDUSxhQUFILENBQWlCRyxZQUFqQixDQUE4QmQsa0JBQTlCLEVBQWtEZSxTQUFsRCxDQUE0RGIsVUFBVSxDQUFDYyxpQkFBdkUsRUFBMEYsR0FBMUY7QUFDSDtBQUNKOzs7MENBRWdCO0FBQ2JiLFlBQUFBLEVBQUUsQ0FBQ1EsYUFBSCxDQUFpQkcsWUFBakIsQ0FBOEJkLGtCQUE5QixFQUFrRGUsU0FBbEQsQ0FBNERiLFVBQVUsQ0FBQ2UsbUJBQXZFLEVBQTRGLEdBQTVGO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7OztRQWpDNkJuQixTOztvQkFKZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIEFuaW1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgRUNsaWVudE1zZywgRUNoZXNzQW5pbSB9IGZyb20gXCIuL0dsb2JhbC9EZWZpbmVzXCI7XG5pbXBvcnQgeyBfRyB9IGZyb20gXCIuL0dsb2JhbC9HbG9iYWxWYXJpYWJsZXNcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiU2VsZWN0Q2hlc3NcIilcbmV4cG9ydCBjbGFzcyBTZWxlY3RDaGVzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGRpcmVjdG9yLm9uKEVDbGllbnRNc2cuU2VsZWN0ZWRDaGVzcywgdGhpcy5zZWxlY3RDaGVzcywgdGhpcyk7XG4gICAgfVxuXG4gICAgc2VsZWN0Q2hlc3MgKGNoZXNzTm9kZTogTm9kZSkge1xuICAgICAgICBpZiAoX0cuc2VsZWN0ZWRDaGVzcyAhPSBjaGVzc05vZGUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVzc05vZGUubmFtZSA9PSAnQ2hlc3NCb2FyZCcgfHwgY2hlc3NOb2RlID09IG51bGwgfHwgX0cuc2VsZWN0ZWRDaGVzcyAhPSBjaGVzc05vZGUpIHtcbiAgICAgICAgICAgIGlmIChfRy5zZWxlY3RlZENoZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNlbGVjdENoZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZXNzTm9kZSAmJiBjaGVzc05vZGUubmFtZSAhPSAnQ2hlc3NCb2FyZCcpIHtcbiAgICAgICAgICAgIF9HLnNlbGVjdGVkQ2hlc3MgPSBjaGVzc05vZGU7XG4gICAgICAgICAgICBfRy5zZWxlY3RlZENoZXNzLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpLmNyb3NzRmFkZShFQ2hlc3NBbmltLlNlbGVjdGVkQ2hlc3NBbmltLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5zZWxlY3RDaGVzcyAoKSB7XG4gICAgICAgIF9HLnNlbGVjdGVkQ2hlc3MuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCkuY3Jvc3NGYWRlKEVDaGVzc0FuaW0uVW5zZWxlY3RlZENoZXNzQW5pbSwgMC4xKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=