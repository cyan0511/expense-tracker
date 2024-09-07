"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[437],{9969:function(e,n,t){t.d(n,{v:function(){return E}});var a=t(9439),s=t(2791),r=t(3763),i="TransactionForm_container__1WXA9",c="TransactionForm_typeContainer__Dt-tU",o="TransactionForm_radioContainer__DYF4m",l="TransactionForm_dateTimeContainer__qiUbC",u="TransactionForm_dateContainer__0RN9B",d="TransactionForm_fieldContainer__jrk6B",m="TransactionForm_error__UDa11",h="TransactionForm_timeContainer__ZxkNw",v="TransactionForm_currency__wL7Ly",x="TransactionForm_sumContainer__PzwRl",f=t(4420),_=t(2113),p=t(9321),j=t(1413),y="CategoryList_container__OdC+O",g="CategoryList_categories__f-Z8o",C="CategoryList_newCategoryContainer__WzlNk",N="CategoryList_save__0fWee",T=t(4666),k="CategoryListItem_actionButtons__afOrE",b=t(3329),S=function(e){var n=e.category,t=e.onItemClick,a=e.setCategory,s=e.setIsEdit,i=(0,f.I0)();return(0,b.jsxs)("li",{children:[n.categoryName,(0,b.jsxs)("div",{className:k,children:[(0,b.jsx)("svg",{onClick:function(){return t(n)},children:(0,b.jsx)("use",{href:"".concat(r.Z,"#check")})}),(0,b.jsx)("svg",{onClick:function(e){e.stopPropagation(),e.preventDefault(),s(!0),a(n)},children:(0,b.jsx)("use",{href:"".concat(r.Z,"#edit")})}),(0,b.jsx)("svg",{onClick:function(e){return function(e){e.stopPropagation(),e.preventDefault(),i((0,T.uu)(n._id))}(e)},children:(0,b.jsx)("use",{href:"".concat(r.Z,"#trash")})})]})]})},w=t(2530),Z=t(3733),F=function(e){var n=e.type,t=e.onItemClick,r=(0,f.I0)(),i=(0,f.v9)(w.CP),c=(0,s.useState)(null),o=(0,a.Z)(c,2),l=o[0],u=o[1],d=(0,s.useState)(!1),m=(0,a.Z)(d,2),h=m[0],v=m[1];return(0,b.jsxs)("div",{className:y,children:[(0,b.jsx)("span",{className:g,children:"All Category"}),(0,b.jsx)("div",{children:(0,b.jsx)("ul",{children:i[n].map((function(e,n){return(0,b.jsx)(S,{setCategory:u,setIsEdit:v,onItemClick:t,category:e},n)}))})}),(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)("span",{children:"New Category"}),(0,b.jsx)("input",{type:"text",value:(null===l||void 0===l?void 0:l.categoryName)||"",onChange:function(e){return u((function(n){return(0,j.Z)((0,j.Z)({},n),{},{categoryName:e.target.value})}))}}),(0,b.jsx)("button",{disabled:!l,onClick:h?function(e){r((0,T.yr)(l)),v(!1),u(null)}:function(e){r((0,T.i8)({type:n,categoryName:l.categoryName})),u(null)},className:(0,Z.Z)("primary-button",h?N:""),type:"button",children:h?"Save":"Add"})]})]})},L="CategoriesModal_container__Cn6Nd",D=function(e){var n=e.title,t=e.type,a=e.isModalOpen,s=e.closeModal,r=e.onItemClick;return(0,b.jsx)(p.Z,{isOpen:a,onClose:s,children:(0,b.jsxs)("div",{className:L,children:[(0,b.jsx)("h2",{children:n}),(0,b.jsx)(F,{onItemClick:r,type:t})]})})},I=t(4746),E=function(e){var n=e.onSave,t=(0,f.v9)(I.PR),p=(0,_.S)(),j=p.validateForm,y=p.errors,g=p.formData,C=p.handleChange,N=p.handleSubmit,T=(0,s.useRef)(null),k=(0,s.useRef)(null),S=(0,s.useState)(null),w=(0,a.Z)(S,2),Z=w[0],F=w[1],L=(0,s.useState)(!1),E=(0,a.Z)(L,2),A=E[0],O=E[1],P=function(){return O(!1)};return(0,s.useEffect)((function(){Z&&j()}),[Z]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(D,{isModalOpen:A,closeModal:P,type:g.type,onItemClick:function(e){F(e),C("category",e._id),P()},title:g.type}),(0,b.jsxs)("form",{className:i,onSubmit:function(e){N(e),n&&n()},children:[(0,b.jsxs)("div",{className:c,children:[(0,b.jsxs)("div",{className:o,children:[(0,b.jsx)("input",{type:"radio",id:"expense",name:"transaction",value:"expenses",onChange:function(e){F(null),C("type",e.target.value)},defaultChecked:!0}),(0,b.jsx)("label",{htmlFor:"expense",children:"Expense"})]}),(0,b.jsxs)("div",{className:o,children:[(0,b.jsx)("input",{type:"radio",id:"income",name:"transaction",value:"incomes",onChange:function(e){F(null),C("type",e.target.value)},required:!0}),(0,b.jsx)("label",{htmlFor:"income",children:"Income"})]})]}),(0,b.jsxs)("div",{className:l,children:[(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)("label",{htmlFor:"date",children:"Date"}),(0,b.jsxs)("div",{style:{position:"relative"},children:[(0,b.jsx)("input",{className:y.date&&"invalid",name:"date",ref:T,value:g.date||"",type:"date",onClick:function(e){return e.currentTarget.showPicker()},onChange:function(e){return C("date",e.target.value)}}),(0,b.jsx)("svg",{onClick:function(){var e;return null===(e=T.current)||void 0===e?void 0:e.click()},children:(0,b.jsx)("use",{href:"".concat(r.Z,"#calendar-icon")})}),y.date&&(0,b.jsx)("span",{className:m,children:y.date})]})]}),(0,b.jsxs)("div",{className:u,children:[(0,b.jsx)("label",{htmlFor:"time",children:"Time"}),(0,b.jsxs)("div",{className:h,style:{position:"relative"},children:[(0,b.jsx)("input",{ref:k,value:g.time||"",type:"time",onClick:function(e){return e.currentTarget.showPicker()},onChange:function(e){return C("time",e.target.value)}}),(0,b.jsx)("svg",{onClick:function(){var e;return null===(e=k.current)||void 0===e?void 0:e.click()},children:(0,b.jsx)("use",{href:"".concat(r.Z,"#clock-icon")})})]})]})]}),(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("label",{htmlFor:"category",children:"Category"}),(0,b.jsx)("input",{name:"category",readOnly:!0,onClick:function(){return O(!0)},type:"text",placeholder:"Enter the category",value:g.category&&(null===Z||void 0===Z?void 0:Z.categoryName)||"",className:y.category&&"invalid"}),y.category&&(0,b.jsx)("span",{className:m,children:y.category})]}),(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("label",{htmlFor:"sum",children:"Sum"}),(0,b.jsxs)("div",{className:x,children:[(0,b.jsx)("input",{name:"sum",type:"number",placeholder:"Enter the sum",value:g.sum||"",onChange:function(e){return C("sum",e.target.value)},className:y.sum&&"invalid"}),(0,b.jsx)("span",{className:v,children:t.currency}),y.category&&(0,b.jsx)("span",{className:m,children:y.sum})]})]}),(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("label",{htmlFor:"comment",children:"Comment"}),(0,b.jsx)("textarea",{name:"comment",className:y.comment&&"invalid",style:{height:"97px",resize:"none"},placeholder:"Enter the text",value:g.comment||"",onChange:function(e){return C("comment",e.target.value)}}),y.comment&&(0,b.jsx)("span",{className:m,children:y.comment})]}),(0,b.jsx)("button",{type:"submit",className:"primary-button",children:g._id?"Save":"Add"})]})]})}},9530:function(e,n,t){t.d(n,{v:function(){return h}});t(2791);var a="TransactionsTotalAmount_container__53c8b",s="TransactionsTotalAmount_totalContainer__Zfj10",r="TransactionsTotalAmount_arrow__arOwM",i="TransactionsTotalAmount_dataContainer__kopwM",c="TransactionsTotalAmount_amount__vb38O",o="TransactionsTotalAmount_description__+0297",l=t(3763),u=t(4420),d=t(4746),m=t(3329),h=function(e){var n,t,h=e.expenses,v=e.incomes,x=(0,u.v9)(d.PR),f={UAH:"\u20b4",USD:"$",EUR:"\u20ac"};return(0,m.jsxs)("div",{className:a,children:[(0,m.jsxs)("div",{className:s,children:[(0,m.jsx)("div",{className:r,children:(0,m.jsx)("svg",{width:"15",height:"17",children:(0,m.jsx)("use",{href:"".concat(l.Z,"#arrow-up")})})}),(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:o,children:"Total Income"}),(0,m.jsxs)("div",{className:c,children:[f[null===x||void 0===x||null===(n=x.currency)||void 0===n?void 0:n.toUpperCase()],v.reduce((function(e,n){return e+n.sum}),0).toFixed(2)]})]})]}),(0,m.jsxs)("div",{className:s,children:[(0,m.jsx)("div",{className:r,children:(0,m.jsx)("svg",{width:"15",height:"17",children:(0,m.jsx)("use",{href:"".concat(l.Z,"#arrow-down")})})}),(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:o,children:"Total Expense"}),(0,m.jsxs)("div",{className:c,children:[f[null===x||void 0===x||null===(t=x.currency)||void 0===t?void 0:t.toUpperCase()],h.reduce((function(e,n){return e+n.sum}),0).toFixed(2)]})]})]})]})}},2113:function(e,n,t){t.d(n,{S:function(){return d},k:function(){return m}});var a=t(4942),s=t(1413),r=t(9439),i=t(2791),c=t(6378),o=t(4420),l=t(3329),u=(0,i.createContext)({formData:{type:"incomes"},setFormData:function(){}}),d=function(){return(0,i.useContext)(u)},m=function(e){var n=e.children,t=e.transaction,d=(0,o.I0)(),m=(0,i.useState)(t||{type:"expenses"}),h=(0,r.Z)(m,2),v=h[0],x=h[1],f=(0,i.useState)(!1),_=(0,r.Z)(f,2),p=_[0],j=_[1],y=(0,i.useState)({category:"",password:""}),g=(0,r.Z)(y,2),C=g[0],N=g[1],T=function(){var e=!0,n={category:"",password:""};return v.date||(n.date="Date is required.",e=!1),v.category||(n.category="Category is required.",e=!1),v.sum&&0!==+v.sum||(n.sum="Sum is required.",e=!1),v.comment||(n.comment="Comment is required.",e=!1),N(n),j(e),e};(0,i.useEffect)((function(){var e=new Date,n=e.toISOString().split("T")[0],t=e.toTimeString().split(" ")[0].slice(0,5);x((function(e){return{type:e.type,date:n,time:t}}))}),[]);return(0,l.jsx)(u.Provider,{value:{validateForm:T,errors:C,isValid:p,formData:v,setFormData:x,handleChange:function(e,n){x((0,s.Z)((0,s.Z)({},v),{},(0,a.Z)({},e,n)))},handleSubmit:function(e){e.preventDefault(),T()&&(v._id?d((0,c.Ld)(v)):d((0,c.dT)(v)),x((function(e){return{type:e.type,date:e.date,time:e.time}})))}},children:n})}},2437:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(7689),s=t(2791),r="TransactionsHistoryPage_container__TdNmt",i="TransactionsHistoryPage_headerContainer__n3Oyn",c="TransactionsHistoryPage_topContainer__JLsSL",o=t(9530),l=t(4420),u=t(8418),d=t(9439),m="TransactionList_container__+v9ep",h="TransactionList_header__oJx4y",v="TransactionList_table__cOyds",x="TransactionList_row__7ro-Q",f="TransactionList_tableHeader__CEwDm",_="TransactionList_cell__lcSnD",p="TransactionList_actionButtons__KxWn5",j="TransactionList_btnEdit__9UrwQ",y="TransactionList_btnDelete__TqYFO",g="TransactionList_buttonText__Nfsxv",C=t(4942),N=t(1413),T="TransactionsSearchTools_container__u-yZz",k="TransactionsSearchTools_dateContainer__9Ksue",b=t(3763),S=t(6895),w=t(3329),Z=function(){var e=(0,l.I0)(),n=(0,l.v9)(u.zK),t=function(t,a){e((0,S.T)((0,N.Z)((0,N.Z)({},n),{},(0,C.Z)({},t,a))))},a=(0,s.useState)(""),r=(0,d.Z)(a,2),i=r[0],c=r[1];(0,s.useEffect)((function(){var e=(new Date).toISOString().split("T")[0];c(e)}),[]);var o=(0,s.useRef)(null);return(0,w.jsxs)("div",{className:T,children:[(0,w.jsx)("input",{placeholder:"Search for anything..",onChange:function(e){return t("value",e.target.value)}}),(0,w.jsx)("div",{className:k,children:(0,w.jsxs)("div",{style:{position:"relative"},children:[(0,w.jsx)("input",{value:i,ref:o,type:"date",onClick:function(e){return e.currentTarget.showPicker()},onChange:function(e){t("date",e.target.value),c(e.target.value)}}),(0,w.jsx)("svg",{style:{color:"#0EF387",fill:"#0EF387"},onClick:function(){var e;return null===(e=o.current)||void 0===e?void 0:e.click()},children:(0,w.jsx)("use",{href:"".concat(b.Z,"#calendar-icon")})})]})})]})},F=t(6378),L=t(9321),D=t(9969),I=t(2113),E=function(e){var n=e.transactions,t=(0,l.I0)(),a=(0,l.v9)(u.zK),r=a.value,i=a.date,c=(0,s.useState)(!1),o=(0,d.Z)(c,2),C=o[0],N=o[1],T=(0,I.S)().setFormData,k=["category","comment","date","time","sum"],S=function(){return N(!1)},E=n.filter((function(e){return k.some((function(n){return"object"===typeof e[n]&&"category"===n?String(e[n].categoryName).toLowerCase().includes(String(r).toLowerCase()):void 0!==e[n]&&String(e[n]).toLowerCase().includes(String(r).toLowerCase())}))&&(!i||i&&e.date===i)})),A=function(e){return function(n){T(e),N(!0)}},O=function(e){var n=e._id,a=e.type;return function(e){t((0,F.Ks)({_id:n,type:a}))}};return(0,w.jsxs)("div",{className:m,children:[(0,w.jsx)(L.Z,{isOpen:C,onClose:S,children:(0,w.jsx)(D.v,{onSave:S})}),(0,w.jsx)("div",{className:h,children:(0,w.jsx)(Z,{})}),(0,w.jsxs)("div",{className:"".concat(x," ").concat(f),children:[k.map((function(e,n){return(0,w.jsx)("span",{className:_,children:e},n)})),(0,w.jsx)("span",{className:_,children:"Actions"})]}),(0,w.jsx)("ul",{className:v,children:null===E||void 0===E?void 0:E.map((function(e,n){return(0,w.jsxs)("li",{className:x,children:[k.map((function(n,t){return(0,w.jsx)("span",{className:_,children:"category"===n?e[n].categoryName:e[n]},t)})),(0,w.jsxs)("span",{className:_+" "+p,children:[(0,w.jsxs)("button",{className:"primary-button ".concat(j),onClick:A(e),children:[(0,w.jsx)("span",{className:g,children:"Edit"}),(0,w.jsx)("svg",{width:16,height:16,children:(0,w.jsx)("use",{href:"".concat(b.Z,"#edit")})})]}),(0,w.jsxs)("button",{className:"secondary-button ".concat(y),onClick:O({type:e.type,_id:e._id}),children:[(0,w.jsx)("span",{className:g,children:"Delete"}),(0,w.jsx)("svg",{width:16,height:16,children:(0,w.jsx)("use",{href:"".concat(b.Z,"#trash")})})]})]})]},n)}))})]})},A=function(){var e=(0,a.UO)().transactionType,n=(0,l.v9)(u.f1),t=n.expenses,s=n.incomes,d="expenses"===e;return(0,w.jsxs)("div",{className:r,children:[(0,w.jsxs)("div",{className:c,children:[(0,w.jsxs)("div",{className:i,children:[(0,w.jsxs)("h2",{children:["All ",d?"Expense":"Income"]}),(0,w.jsx)("p",{children:d?"Capture and organize every penny spent with ease! A clear view of\n          your financial habits at your fingertips.":"Track and celebrate every bit of earnings effortlessly! Gain insights into your total revenue in a snap."})]}),(0,w.jsx)(o.v,{expenses:t,incomes:s})]}),(0,w.jsx)(I.k,{children:(0,w.jsx)(E,{transactions:d?t:s})})]})}},3733:function(e,n,t){function a(e){var n,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=a(e[n]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}n.Z=function(){for(var e,n,t=0,s="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=a(e))&&(s&&(s+=" "),s+=n);return s}}}]);
//# sourceMappingURL=437.9ab23481.chunk.js.map