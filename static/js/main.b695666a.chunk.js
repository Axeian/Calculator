(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(20),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_Screen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_components_Touchpad__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(13),App=function(_Component){Object(C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;Object(C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={expression:" ",result:"0",lastSymbolIsOperator:!1,decimalInOperand:!1,equalWasPressed:!1},_this.addToExpression=function(symbol){var _this$state=_this.state,expression=_this$state.expression,result=_this$state.result,lastSymbolIsOperator=_this$state.lastSymbolIsOperator,decimalInOperand=_this$state.decimalInOperand,equalWasPressed=_this$state.equalWasPressed,lastSymbol=expression.charAt(expression.length-1),operators=new Set(["/","*","+","-"]),numbs=new Set(["0","1","2","3","4","5","6","7","8","9"]);if(21===result.length&&numbs.has(symbol))return _this.setState({result:"DIGIT LIMIT REACHED!"}),void setTimeout((function(){_this.setState({result:result})}),1e3);if("DIGIT LIMIT REACHED!"!==result)if("AC"!==symbol)if("="!==symbol)if(equalWasPressed)operators.has(symbol)?_this.setState({expression:result+symbol,result:symbol,lastSymbolIsOperator:!0,decimalInOperand:!1,equalWasPressed:!1}):numbs.has(symbol)?_this.setState({expression:symbol,result:symbol,lastSymbolIsOperator:!1,decimalInOperand:!1,equalWasPressed:!1}):_this.setState({expression:"0.",result:"0.",lastSymbolIsOperator:!1,decimalInOperand:!0,equalWasPressed:!1});else if(numbs.has(symbol))"0"===result?_this.setState({expression:expression.slice(0,expression.length-1)+symbol,result:symbol,lastSymbolIsOperator:!1}):_this.setState({expression:expression+symbol,result:lastSymbolIsOperator?symbol:result+symbol,lastSymbolIsOperator:!1});else if(operators.has(symbol))if(operators.has(lastSymbol)){if(symbol===lastSymbol)return;if("-"===symbol&&"-"!==lastSymbol)_this.setState({expression:expression+"-",result:symbol});else{for(var _exp=expression,expLastSymbol=lastSymbol;operators.has(expLastSymbol);)_exp=_exp.slice(0,_exp.length-1),expLastSymbol=_exp.charAt(_exp.length-1);_this.setState({expression:_exp+symbol,result:symbol})}}else _this.setState({expression:expression+symbol,result:symbol,lastSymbolIsOperator:!0,decimalInOperand:!1});else decimalInOperand||_this.setState({expression:operators.has(lastSymbol)||" "===lastSymbol?expression+"0.":expression+".",result:operators.has(lastSymbol)?"0.":result+".",lastSymbolIsOperator:!1,decimalInOperand:!0});else{if(equalWasPressed)return;for(var exp=expression;operators.has(lastSymbol);)exp=exp.slice(0,exp.length-1),lastSymbol=exp.charAt(exp.length-1);try{var res=eval(exp);if("undefined"===typeof res){if("0"===result)return;throw"invalid exp"}_this.setState({result:res,expression:exp+"="+res,lastSymbolIsOperator:!1,decimalInOperand:!1,equalWasPressed:!0})}catch(_unused){_this.setState({result:"INVALID EXPRESSION!"}),setTimeout((function(){_this.setState({expression:" ",result:"0"})}),1e3)}}else _this.setState({expression:" ",result:"0",lastSymbolIsOperator:!1,decimalInOperand:!1,equalWasPressed:!1})},_this}return Object(C_Users_acer_Desktop_web_dev_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"body vh-100 d-flex align-items-center"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container jumbotron",style:calciStyle},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Screen__WEBPACK_IMPORTED_MODULE_6__.a,{expression:this.state.expression,result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Touchpad__WEBPACK_IMPORTED_MODULE_7__.a,{addToExpression:this.addToExpression,expression:this.state.expression,result:this.state.result}))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component),calciStyle={width:"auto",padding:"0",border:"4px solid"};__webpack_exports__.a=App},function(e,s,t){"use strict";var _=t(2),r=t(3),a=t(5),o=t(4),l=t(0),n=t.n(l),i=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(){return Object(_.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container",style:p},n.a.createElement("div",{style:c},this.props.expression),n.a.createElement("div",{style:u},this.props.result))}}]),t}(l.Component),p={backgroundColor:"black",color:"white",height:"auto",width:"350px",fontFamily:"calcifont",textAlign:"right"},c={fontSize:"1.2em",color:"orange",minHeight:"1.5em",overflowWrap:"break-word",wordWrap:"break-word"},u={fontSize:"2em"};s.a=i},,function(e,s,t){"use strict";var _=t(2),r=t(3),a=t(5),o=t(4),l=t(0),n=t.n(l),i=t(23),p=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(){var e;Object(_.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=s.call.apply(s,[this].concat(a))).getColor=function(e){var s=new Set(["0","1","2","3","4","5","6","7","8","9"]);return"AC"===e?"red":"="===e?"blue":s.has(e)||"."===e?"#696969":"grey"},e.getStyle=function(s){return{fontSize:"2em",height:"="===s?"4em":"2em",borderRadius:"0",border:"1px solid",backgroundColor:"".concat(e.getColor(s)),fontFamily:"calcifont"}},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props.symbol;return n.a.createElement(i.a,{id:e,onClick:this.props.addToExpression.bind(this,e),className:"".concat("AC"===e||"0"===e?"col-6":"col-3"," btn btn-dark"),style:this.getStyle(e)},e)}}]),t}(l.Component),c=function(e){Object(a.a)(t,e);var s=Object(o.a)(t);function t(){return Object(_.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this,s=Object.values({row1:["AC","/","*"],row2:["7","8","9","-"],row3:["4","5","6","+"],row4:["1","2","3","="],row5:["0","."]}),t=0;return s.map((function(s){return n.a.createElement("div",{className:"row",key:"row".concat(++t),style:u},s.map((function(s){return n.a.createElement(p,{key:s,addToExpression:e.props.addToExpression,symbol:s})})))}))}}]),t}(l.Component),u={height:"4em"};s.a=c},function(e,s,t){e.exports=t(15)},function(e,s,t){"use strict";t.r(s);var _=t(0),r=t.n(_),a=t(9),o=t.n(a),l=t(10);t(21);o.a.render(r.a.createElement(l.a,null),document.getElementById("root"))},,,,,function(e,s,t){}],[[14,1,2]]]);
//# sourceMappingURL=main.b695666a.chunk.js.map