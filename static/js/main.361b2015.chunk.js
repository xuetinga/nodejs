(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n.n(r),u=n(1),i=n(2),c=n(4),d=n(3),s=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.done;return o.a.createElement("div",{id:"div2"},o.a.createElement("ul",{id:"doing"},this.props.renderTodos(e)))}}]),n}(a.Component),m=function(e){return o.a.createElement("div",null,[1,2,3,4,5].map((function(t){return o.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},p=(o.a.Component,n(5)),h=(n(17),a.Component,n(11)),f=n.n(h),v=o.a.createContext();var E=function(){return o.a.createElement("div",{style:{width:100,height:"100px",backgroundColor:"red"}},o.a.createElement("h2",null,"demo02"),o.a.createElement("ul",null,o.a.createElement(v.Consumer,null,(function(e){return e.data.map((function(e){return o.a.createElement("li",{key:e},e)}))}))))},g=function(e){return o.a.createElement("div",{style:{width:100,height:"100px",backgroundColor:"red"}},o.a.createElement("h2",null,"demo01"),o.a.createElement("ul",null,o.a.createElement(v.Consumer,null,(function(e){return e.data.map((function(e){return o.a.createElement("li",{key:e},e)}))}))),o.a.createElement(E,null))};g.protoTypes={name:f.a.string.isRequired},g.defaultProps={name:"tomg"};var b=g;console.log(v);o.a.Component;var y=function(e,t){return function(n){Object(c.a)(r,n);var a=Object(d.a)(r);function r(){var e;return Object(u.a)(this,r),(e=a.call(this)).state={data:[]},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return o.a.createElement(e,{data:this.state.data})}}]),r}(a.Component)},O=(y((function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"\u6807\u9898"),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.content}}))}),"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"),y((function(e){return console.log(e.data),o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",null,e.title)})))}),"https://cnodejs.org/api/v1/topics"),n(8),function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"div1"},o.a.createElement("label",{htmlFor:"inp"},"todolist"),o.a.createElement("input",{id:"inp",type:"text",onChange:this.props.handleChange,value:this.props.inpValue,ref:function(t){return e.input=t},placeholder:"\u6dfb\u52a0ToDo"}),o.a.createElement("button",{onClick:this.props.addTodo},"\u6dfb\u52a0"))}}]),n}(a.Component)),C=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({inpValue:t.target.value})},e.addTodo=function(){""!=e.state.inpValue&&(e.setState({todos:[{title:e.state.inpValue,done:!1}].concat(Object(p.a)(e.state.todos))}),e.setState({inpValue:""}))},e.toggle=function(t){var n=JSON.parse(JSON.stringify(e.state.todos));n[t].done=!n[t].done,e.setState({todos:n})},e.removeTodo=function(t){e.setState({todos:e.state.todos.filter((function(e,n){return t!=n}))},(function(){localStorage.setItem("todos",JSON.stringify(e.state.todos))}))},e.renderTodos=function(t){return e.state.todos.map((function(n,a){if(t==n.done)return o.a.createElement("li",null,o.a.createElement("input",{onClick:function(){return e.toggle(a)},checked:t,type:"checkbox"}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),o.a.createElement("button",{onClick:function(){return e.removeTodo(a)}},"\u5220\u9664 "))}))},e.state={inpValue:"",todos:[]},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.inpValue,a=t.filter((function(e){return!e.done})),r=t.filter((function(e){return e.done}));return o.a.createElement("div",null,o.a.createElement(O,{addTodo:this.addTodo,handleChange:this.handleChange,inpValue:n}),o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",a.length),o.a.createElement(s,{renderTodos:this.renderTodos,done:!1}),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",r.length),o.a.createElement(s,{renderTodos:this.renderTodos,done:!0}))}}]),n}(a.Component);l.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.361b2015.chunk.js.map