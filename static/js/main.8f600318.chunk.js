(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.time;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:n})]})}}]),n}(u.a.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",currentTime:(new Date).toUTCString().slice(-12,-4),hasClock:!0},e.timerId=0,e.currentTime=0,e.handleDocumentClick=function(){e.setState({hasClock:!0})},e.handleDocumentContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleClick=function(){e.setState({hasClock:!0})},e.handleRightClick=function(){e.setState({hasClock:!1})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",this.handleDocumentClick),document.addEventListener("contextmenu",this.handleDocumentContextMenu),this.timerId=window.setInterval((function(){var t=e.state.clockName;e.setState({clockName:d()}),console.debug("Renamed from ".concat(t," to ").concat(e.state.clockName))}),3300),this.currentTime=window.setInterval((function(){var t=(new Date).toUTCString().slice(-12,-4);e.setState({currentTime:t}),console.info(t)}),1e3)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("contextmenu",this.handleDocumentContextMenu)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.currentTime,c=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),c&&Object(m.jsx)(h,{name:t,time:n})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8f600318.chunk.js.map