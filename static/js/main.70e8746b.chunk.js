(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,c){t.exports={StatisticsList:"Statistics_StatisticsList__2pT1Y",StatisticsItem:"Statistics_StatisticsItem__34CIq"}},,,function(t,e,c){t.exports={Section:"Section_Section__dc5U3",Title:"Section_Title__1X90n"}},function(t,e,c){t.exports={BtnList:"FeedbackOptions_BtnList__3uzng",Button:"FeedbackOptions_Button__2SriG"}},,function(t,e,c){t.exports={container:"Container_container__3Flh8"}},function(t,e,c){t.exports={Notification:"Notification_Notification__17vDb"}},,,,,,,function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),i=c(7),s=c.n(i),r=c(3),o=c(8),l=c.n(o),d=c(0),u=function(t){var e=t.children;return Object(d.jsx)("div",{className:l.a.container,children:e})},b=function(t){var e=t.children;return Object(d.jsx)(u,{children:e})},j=c(5),f=c.n(j),h=function(t){var e=t.title,c=t.children;return Object(d.jsxs)("section",{className:f.a.Section,children:[Object(d.jsx)("h2",{className:f.a.Title,children:e}),c]})},O=c(6),x=c.n(O),m=function(t){var e=t.feedback,c=t.onLeaveFeedback;return Object(d.jsx)("button",{type:"button","data-feedback":e,onClick:c,className:x.a.Button,children:e})},_=function(t){var e=t.options,c=t.onLeaveFeedback;return Object(d.jsx)("div",{className:x.a.BtnList,children:e.map((function(t){return Object(d.jsx)(m,{feedback:t,onLeaveFeedback:c})}))})},k=c(9),S=c.n(k),v=function(t){var e=t.message;return Object(d.jsx)("p",{className:S.a.Notification,children:e})},p=c(2),N=c.n(p),g=function(t){var e=t.good,c=t.neutral,n=t.bad,a=t.total,i=t.positivePercentage;return Object(d.jsxs)(d.Fragment,{children:[a>0&&Object(d.jsxs)("ul",{className:N.a.StatisticsList,children:[Object(d.jsxs)("li",{className:N.a.StatisticsItem,children:["Good: ",e]}),Object(d.jsxs)("li",{className:N.a.StatisticsItem,children:["Neutral: ",c]}),Object(d.jsxs)("li",{className:N.a.StatisticsItem,children:["Bad: ",n]}),Object(d.jsxs)("li",{className:N.a.StatisticsItem,children:["Total: ",a]}),Object(d.jsxs)("li",{className:N.a.StatisticsItem,children:["Positive feedback: ",i,"%"]})]}),0===a&&Object(d.jsx)(v,{message:"No feedback given"})]})},L=["good","neutral","bad"];function I(){var t=Object(n.useState)(0),e=Object(r.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(0),s=Object(r.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(0),j=Object(r.a)(u,2),f=j[0],O=j[1],x=function(){return c+o+f};return Object(d.jsxs)(b,{children:[Object(d.jsx)(h,{title:"Please leave feedback",children:Object(d.jsx)(_,{options:L,onLeaveFeedback:function(t){switch(t.target.dataset.feedback){case"good":a((function(t){return t+1}));break;case"neutral":l((function(t){return t+1}));break;case"bad":O((function(t){return t+1}));break;default:return}}})}),Object(d.jsx)(h,{title:"Statistics",children:Object(d.jsx)(g,{good:c,neutral:o,bad:f,total:x(),positivePercentage:function(){var t=x();return t?Math.round(c/t*100):0}()})})]})}c(15),c(16);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.70e8746b.chunk.js.map