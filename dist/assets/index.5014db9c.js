var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var l in r||(r={}))a.call(r,l)&&s(e,l,r[l]);if(t)for(var l of t(r))n.call(r,l)&&s(e,l,r[l]);return e};import{I as l,P as c,r as o,u as m,R as i,T as p,a as d,b as _,C as u,d as E,c as y,e as v,D as h,f,K as g,g as x,h as w,B as N,N as b,i as k,q as S,M as C,j as z,k as j,F as R,l as Y,m as I,S as M,n as F,o as D,p as W}from"./vendor.31ee2904.js";var $=l.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js");var q="_tab_1udd2_1";const B=({showNav:e})=>{const[t,a]=o.exports.useState("/"),n=m();return i.createElement(p,{visible:e,className:q,activeKey:t,onChange:e=>{a(e),n.push(e)}},i.createElement(p.Item,{itemKey:"/",title:"账单",icon:i.createElement($,{type:"zhangdan"})}),i.createElement(p.Item,{itemKey:"/data",title:"统计",icon:i.createElement($,{type:"tongji"})}),i.createElement(p.Item,{itemKey:"/user",title:"我的",icon:i.createElement($,{type:"wode"})}))};B.propTypes={showNav:c.bool},d.defaults.baseURL="http://47.111.242.149:5021",d.defaults.withCredentials=!0,d.defaults.headers["X-Requested-With"]="XMLHttpRequest",d.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`,d.defaults.headers.post["Content-Type"]="application/json",d.interceptors.response.use((e=>"object"!=typeof e.data?(_.show("服务端异常！"),Promise.reject(e)):200!=e.data.code?(e.data.msg&&_.show(e.data.msg),401==e.data.code&&(window.location.href="/login"),Promise.reject(e.data)):e.data));const T="http://47.111.242.149:5021",A=d.get,O=d.post,P={1:{icon:"canyin"},2:{icon:"fushi"},3:{icon:"jiaotong"},4:{icon:"riyong"},5:{icon:"gouwu"},6:{icon:"xuexi"},7:{icon:"yiliao"},8:{icon:"lvxing"},9:{icon:"renqing"},10:{icon:"qita"},11:{icon:"gongzi"},12:{icon:"jiangjin"},13:{icon:"zhuanzhang"},14:{icon:"licai"},15:{icon:"tuikuang"},16:{icon:"qita"}},K=0,H=3,L=4,U=0,X=2,G=3,J=e=>e&&e.startsWith("http")?e:e=`${T}${e}`;var Q={item:"_item_mkxeh_1",headerDate:"_header-date_mkxeh_7",date:"_date_mkxeh_18",money:"_money_mkxeh_22",itemIcon:"_item-icon_mkxeh_37"};const V=({bill:e})=>{const[t,a]=o.exports.useState(0),[n,s]=o.exports.useState(0),r=m();o.exports.useEffect((()=>{const t=e.bills.filter((e=>2==e.pay_type)).reduce(((e,t)=>e+=Number(t.amount)),0);a(t);const n=e.bills.filter((e=>1==e.pay_type)).reduce(((e,t)=>e+=Number(t.amount)),0);s(n)}),[e.bills]);return i.createElement("div",{className:Q.item},i.createElement("div",{className:Q.headerDate},i.createElement("div",{className:Q.date},e.date),i.createElement("div",{className:Q.money},i.createElement("span",null,i.createElement("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"支"}),i.createElement("span",null,"¥",n.toFixed(2))),i.createElement("span",null,i.createElement("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"收"}),i.createElement("span",null,"¥",t.toFixed(2))))),e&&e.bills.map((e=>i.createElement(u,{className:Q.bill,key:e.id,onClick:()=>(e=>{r.push(`/detail?id=${e.id}`)})(e),title:i.createElement(i.Fragment,null,i.createElement($,{className:Q.itemIcon,type:e.type_id?P[e.type_id].icon:1}),i.createElement("span",null,e.type_name)),description:i.createElement("span",{style:{color:2==e.pay_type?"red":"#39be77"}},`${1==e.pay_type?"-":"+"}${e.amount}`),help:i.createElement("div",null,E(Number(e.date)).format("HH:mm")," ",e.remark?`| ${e.remark}`:"")}))))};V.propTypes={bill:c.object};var Z="_popup-type_4v4ui_1",ee="_header_4v4ui_7",te="_cross_4v4ui_20",ae="_content_4v4ui_28",ne="_all_4v4ui_31",se="_title_4v4ui_38",re="_expense-wrap_4v4ui_43",le="_income-wrap_4v4ui_44",ce="_active_4v4ui_58";const oe=o.exports.forwardRef((({onSelect:e},t)=>{const[a,n]=o.exports.useState(!1),[s,r]=o.exports.useState("all"),[c,m]=o.exports.useState([]),[p,d]=o.exports.useState([]);o.exports.useEffect((async()=>{const{data:{list:e}}=await A("/api/type/list");m(e.filter((e=>1==e.type))),d(e.filter((e=>2==e.type)))}),[]),t&&(t.current={show:()=>{n(!0)},close:()=>{n(!1)}});const _=t=>{r(t.id),n(!1),e(t)};return i.createElement(y,{visible:a,direction:"bottom",onMaskClick:()=>n(!1),destroy:!1,mountContainer:()=>document.body},i.createElement("div",{className:Z},i.createElement("div",{className:ee},"请选择类型",i.createElement(l,{type:"wrong",className:te,onClick:()=>n(!1)})),i.createElement("div",{className:ae},i.createElement("div",{onClick:()=>_({id:"all"}),className:v({[ne]:!0,[ce]:"all"==s})},"全部类型"),i.createElement("div",{className:se},"支出"),i.createElement("div",{className:re},c.map(((e,t)=>i.createElement("p",{key:t,onClick:()=>_(e),className:v({[ce]:s==e.id})},e.name)))),i.createElement("div",{className:se},"收入"),i.createElement("div",{className:le},p.map(((e,t)=>i.createElement("p",{key:t,onClick:()=>_(e),className:v({[ce]:s==e.id})},e.name)))))))}));oe.propTypes={onSelect:c.func};const me=o.exports.forwardRef((({onSelect:e,mode:t="date"},a)=>{const[n,s]=o.exports.useState(!1),[r,l]=o.exports.useState(new Date);return a&&(a.current={show:()=>{s(!0)},close:()=>{s(!1)}}),i.createElement(y,{visible:n,direction:"bottom",onMaskClick:()=>s(!1),destroy:!1,mountContainer:()=>document.body},i.createElement("div",null,i.createElement(h,{visible:n,value:r,mode:t,onOk:a=>{l(a),s(!1),"month"==t?e(E(a).format("YYYY-MM")):"date"==t&&e(E(a).format("YYYY-MM-DD"))},onCancel:()=>s(!1)})))}));me.propTypes={mode:c.string,onSelect:c.func};var ie={addWrap:"_add-wrap_bey74_1",header:"_header_bey74_7",close:"_close_bey74_10",filter:"_filter_bey74_15",type:"_type_bey74_21",expense:"_expense_bey74_30",active:"_active_bey74_33",income:"_income_bey74_38",time:"_time_bey74_43",arrow:"_arrow_bey74_52",money:"_money_bey74_56",sufix:"_sufix_bey74_61",amount:"_amount_bey74_66",typeWarp:"_type-warp_bey74_70",typeBody:"_type-body_bey74_79",typeItem:"_type-item_bey74_83",iconfontWrap:"_iconfont-wrap_bey74_90",iconfont:"_iconfont_bey74_90",remark:"_remark_bey74_116"};const pe=o.exports.forwardRef((({detail:e={},onReload:t},a)=>{const n=o.exports.useRef(),s=e&&e.id,[r,c]=o.exports.useState(!1),[m,p]=o.exports.useState("expense"),[d,u]=o.exports.useState([]),[h,x]=o.exports.useState([]),[w,N]=o.exports.useState({}),[b,k]=o.exports.useState(""),[S,C]=o.exports.useState(""),[z,j]=o.exports.useState(!1),[R,Y]=o.exports.useState(new Date);o.exports.useEffect((()=>{e.id&&(p(1==e.pay_type?"expense":"income"),N({id:e.type_id,name:e.type_name}),C(e.remark),k(e.amount),Y(E(Number(e.date)).$d))}),[e]),a&&(a.current={show:()=>{c(!0)},close:()=>{c(!1)}}),o.exports.useEffect((async()=>{const{data:{list:e}}=await A("/api/type/list"),t=e.filter((e=>1==e.type)),a=e.filter((e=>2==e.type));u(t),x(a),s||N(t[0])}),[]);const I=e=>{p(e),N("expense"==e?d[0]:h[0])},M=async()=>{if(!b)return void _.show("请输入具体金额");const e={amount:Number(b).toFixed(2),type_id:w.id,type_name:w.name,date:1e3*E(R).unix(),pay_type:"expense"==m?1:2,remark:S||""};s?(e.id=s,await O("/api/bill/update",e),_.show("修改成功")):(await O("/api/bill/add",e),k(""),p("expense"),N(d[0]),Y(new Date),C(""),_.show("添加成功")),c(!1),t&&t()};return i.createElement(y,{visible:r,direction:"bottom",onMaskClick:()=>c(!1),destroy:!1,mountContainer:()=>document.body},i.createElement("div",{className:ie.addWrap},i.createElement("header",{className:ie.header},i.createElement("span",{className:ie.close,onClick:()=>c(!1)},i.createElement(l,{type:"wrong"}))),i.createElement("div",{className:ie.filter},i.createElement("div",{className:ie.type},i.createElement("span",{onClick:()=>I("expense"),className:v({[ie.expense]:!0,[ie.active]:"expense"==m})},"支出"),i.createElement("span",{onClick:()=>I("income"),className:v({[ie.income]:!0,[ie.active]:"income"==m})},"收入")),i.createElement("div",{className:ie.time,onClick:()=>{n.current&&n.current.show()}},E(R).format("MM-DD")," ",i.createElement(l,{className:ie.arrow,type:"arrow-bottom"}))),i.createElement("div",{className:ie.money},i.createElement("span",{className:ie.sufix},"¥"),i.createElement("span",{className:v(ie.amount,ie.animation)},b)),i.createElement("div",{className:ie.typeWarp},i.createElement("div",{className:ie.typeBody},("expense"==m?d:h).map((e=>i.createElement("div",{onClick:()=>(e=>{N(e)})(e),key:e.id,className:ie.typeItem},i.createElement("span",{className:v({[ie.iconfontWrap]:!0,[ie.expense]:"expense"==m,[ie.income]:"income"==m,[ie.active]:w.id==e.id})},i.createElement($,{className:ie.iconfont,type:P[e.id].icon})),i.createElement("span",null,e.name)))))),i.createElement("div",{className:ie.remark},z?i.createElement(f,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:S,placeholder:"请输入备注信息",onChange:e=>C(e),onBlur:()=>j(!1)}):i.createElement("span",{onClick:()=>j(!0)},S||"添加备注")),i.createElement(g,{type:"price",onKeyClick:e=>(e=>{if("delete"!=(e=String(e)))"ok"!=e?"."==e&&b.includes(".")||"."!=e&&b.includes(".")&&b&&b.split(".")[1].length>=2||k(b+e):M();else{let e=b.slice(0,b.length-1);k(e)}})(e)}),i.createElement(me,{ref:n,onSelect:e=>{Y(e)}})))}));pe.propTypes={detail:c.object,onReload:c.func};var de={home:"_home_pyrz3_1",header:"_header_pyrz3_7",dataWrap:"_data-wrap_pyrz3_22",income:"_income_pyrz3_33",typeWrap:"_type-wrap_pyrz3_36",left:"_left_pyrz3_48",arrow:"_arrow_pyrz3_51",contentWrap:"_content-wrap_pyrz3_55",add:"_add_pyrz3_65"};var _e={data:"_data_f4sv2_1",total:"_total_f4sv2_5",time:"_time_f4sv2_13",date:"_date_f4sv2_35",title:"_title_f4sv2_39",expense:"_expense_f4sv2_45",income:"_income_f4sv2_51",structure:"_structure_f4sv2_55",head:"_head_f4sv2_60",tab:"_tab_f4sv2_70",active:"_active_f4sv2_80",content:"_content_f4sv2_88",item:"_item_f4sv2_88",left:"_left_f4sv2_93",type:"_type_f4sv2_100",name:"_name_f4sv2_115",right:"_right_f4sv2_124",percent:"_percent_f4sv2_129",momey:"_momey_f4sv2_135",proportion:"_proportion_f4sv2_138"};let ue=null;var Ee={user:"_user_2wwvo_1",head:"_head_2wwvo_5",info:"_info_2wwvo_14",content:"_content_2wwvo_33",logout:"_logout_2wwvo_43"};var ye="_header-warp_12wcp_1",ve="_block_12wcp_4",he="_header_12wcp_1";const fe=({title:e=""})=>{const t=m();return i.createElement("div",{className:ye},i.createElement("div",{className:ve},i.createElement(b,{className:he,left:i.createElement(l,{type:"arrow-left",theme:"primary",onClick:()=>t.goBack()}),title:e})))};fe.propTypes={title:c.string};var ge={detail:"_detail_1wagh_1",card:"_card_1wagh_8",type:"_type_1wagh_16",expense:"_expense_1wagh_29",income:"_income_1wagh_32",iconfont:"_iconfont_1wagh_35",amount:"_amount_1wagh_38",info:"_info_1wagh_43",time:"_time_1wagh_48",remark:"_remark_1wagh_61",operation:"_operation_1wagh_75",vanIcon:"_van-icon_1wagh_82"};var xe="_auth_kpur3_1",we="_head_kpur3_5",Ne="_tab_kpur3_16",be="_avtive_kpur3_25",ke="_form_kpur3_30",Se="_operation_kpur3_39",Ce="_agree_kpur3_42";var ze={userinfo:"_userinfo_1wov8_1",item:"_item_1wov8_8",title:"_title_1wov8_12",avatar:"_avatar_1wov8_16",avatarUrl:"_avatar-url_1wov8_20",desc:"_desc_1wov8_26",upload:"_upload_1wov8_32",signature:"_signature_1wov8_35"};var je="_account_u7md4_1",Re="_form_u7md4_4",Ye="_btn_u7md4_9";const Ie=[{path:"/",component:()=>{const e=o.exports.useRef(),t=o.exports.useRef(),a=o.exports.useRef(),[n,s]=o.exports.useState(0),[r,c]=o.exports.useState(0),[m,p]=o.exports.useState({}),[d,_]=o.exports.useState(E().format("YYYY-MM")),[u,y]=o.exports.useState(1),[v,h]=o.exports.useState([]),[f,g]=o.exports.useState(0),[w,N]=o.exports.useState(K),[b,k]=o.exports.useState(U);o.exports.useEffect((()=>{S(),console.log("typeRef",e)}),[u,m,d]);const S=async()=>{const{data:e}=await A(`/api/bill/list?page=${u}&page_size=5&date=${d}&type_id=${m.id||"all"}`);h(1==u?e.list:v.concat(e.list)),s(e.totalExpense.toFixed(2)),c(e.totalIncome.toFixed(2)),g(e.totalPage),k(G),N(L)},C=()=>{N(H),1!=u?y(1):S()};return i.createElement("div",{className:de.home},i.createElement("div",{className:de.header},i.createElement("div",{className:de.dataWrap},i.createElement("span",{className:de.expense},"总支出：",i.createElement("b",null,"¥ ",n)),i.createElement("span",{className:de.income},"总收入：",i.createElement("b",null,"¥ ",r))),i.createElement("div",{className:de.typeWrap},i.createElement("div",{className:de.left,onClick:()=>{e.current&&e.current.show()}},i.createElement("span",{className:de.title},m.name||"全部类型"," ",i.createElement(l,{className:de.arrow,type:"arrow-bottom"}))),i.createElement("div",{className:de.right},i.createElement("span",{className:de.time,onClick:()=>{t.current&&t.current.show()}},d,i.createElement(l,{className:de.arrow,type:"arrow-bottom"}))))),i.createElement("div",{className:de.contentWrap},v.length?i.createElement(x,{animationDuration:200,stayTime:400,refresh:{state:w,handler:C},load:{state:b,distance:200,handler:()=>{u<f&&(k(X),y(u+1))}}},v.map(((e,t)=>i.createElement(V,{bill:e,key:t})))):null),i.createElement("div",{className:de.add,onClick:()=>{a.current&&a.current.show()}},i.createElement($,{type:"tianjia"})),i.createElement(oe,{ref:e,onSelect:e=>{N(H),y(1),p(e)}}),i.createElement(me,{ref:t,mode:"month",onSelect:e=>{N(H),y(1),_(e)}}),i.createElement(pe,{ref:a,onReload:C}))}},{path:"/data",component:()=>{const e=o.exports.useRef(),[t,a]=o.exports.useState(E().format("YYYY-MM")),[n,s]=o.exports.useState("expense"),[r,c]=o.exports.useState(0),[m,p]=o.exports.useState(0),[d,_]=o.exports.useState([]),[u,y]=o.exports.useState([]),[h,f]=o.exports.useState("expense");o.exports.useEffect((()=>(g(),()=>{ue.dispose()})),[t]);const g=async()=>{const{data:e}=await A(`/api/bill/data?date=${t}`);c(e.total_expense),p(e.total_income);const a=e.total_data.filter((e=>1==e.pay_type)).sort(((e,t)=>t.number-e.number)),n=e.total_data.filter((e=>2==e.pay_type)).sort(((e,t)=>t.number-e.number));_(a),y(n),console.log("income_data",n),b("expense"==h?a:n)},x=e=>{s(e)},N=e=>{f(e),b("expense"==e?d:u)},b=e=>{echarts&&(ue=echarts.init(document.getElementById("proportion")),ue.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:e.map((e=>e.type_name))},series:[{name:"支出",type:"pie",radius:"55%",data:e.map((e=>({value:e.number,name:e.type_name}))),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))};return i.createElement("div",{className:_e.data},i.createElement("div",{className:_e.total},i.createElement("div",{className:_e.time,onClick:()=>{e.current&&e.current.show()}},i.createElement("span",null,t),i.createElement(l,{className:_e.date,type:"date"})),i.createElement("div",{className:_e.title},"共支出"),i.createElement("div",{className:_e.expense},"¥",r),i.createElement("div",{className:_e.income},"共收入¥",m)),i.createElement("div",{className:_e.structure},i.createElement("div",{className:_e.head},i.createElement("span",{className:_e.title},"收支构成"),i.createElement("div",{className:_e.tab},i.createElement("span",{onClick:()=>x("expense"),className:v({[_e.expense]:!0,[_e.active]:"expense"==n})},"支出"),i.createElement("span",{onClick:()=>x("income"),className:v({[_e.income]:!0,[_e.active]:"income"==n})},"收入"))),i.createElement("div",{className:_e.content},("expense"==n?d:u).map((e=>i.createElement("div",{key:e.type_id,className:_e.item},i.createElement("div",{className:_e.left},i.createElement("div",{className:_e.type},i.createElement("span",{className:v({[_e.expense]:"expense"==n,[_e.income]:"income"==n})},i.createElement($,{type:e.type_id?P[e.type_id].icon:1})),i.createElement("span",{className:_e.name},e.type_name)),i.createElement("div",{className:_e.progress},"¥",Number(e.number).toFixed(2)||0)),i.createElement("div",{className:_e.right},i.createElement("div",{className:_e.percent},i.createElement(w,{shape:"line",percent:Number(e.number/Number("expense"==n?r:m)*100).toFixed(2),theme:"primary"}))))))),i.createElement("div",{className:_e.proportion},i.createElement("div",{className:_e.head},i.createElement("span",{className:_e.title},"收支构成"),i.createElement("div",{className:_e.tab},i.createElement("span",{onClick:()=>N("expense"),className:v({[_e.expense]:!0,[_e.active]:"expense"==h})},"支出"),i.createElement("span",{onClick:()=>N("income"),className:v({[_e.income]:!0,[_e.active]:"income"==h})},"收入"))),i.createElement("div",{id:"proportion"}))),i.createElement(me,{ref:e,mode:"month",onSelect:e=>{a(e)}}))}},{path:"/user",component:()=>{const e=m(),[t,a]=o.exports.useState({});o.exports.useEffect((()=>{n()}),[]);const n=async()=>{const{data:e}=await A("/api/user/get_userinfo");a(e),setAvatar(e.avatar)};return i.createElement("div",{className:Ee.user},i.createElement("div",{className:Ee.head},i.createElement("div",{className:Ee.info},i.createElement("span",null,"昵称：",t.username||"--"),i.createElement("span",null,i.createElement("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png",alt:""}),i.createElement("b",null,t.signature||"暂无个签"))),i.createElement("img",{className:Ee.avatar,style:{width:60,height:60,borderRadius:8},src:t.avatar||"",alt:""})),i.createElement("div",{className:Ee.content},i.createElement(u,{hasArrow:!0,title:"用户信息修改",onClick:()=>e.push("/userinfo"),icon:i.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),i.createElement(u,{hasArrow:!0,title:"重制密码",onClick:()=>e.push("/account"),icon:i.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})}),i.createElement(u,{hasArrow:!0,title:"关于我们",onClick:()=>e.push("/about"),icon:i.createElement("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615975178434/lianxi.png",alt:""})})),i.createElement(N,{className:Ee.logout,block:!0,theme:"danger",onClick:async()=>{localStorage.removeItem("token"),e.push("/login")}},"退出登录"))}},{path:"/detail",component:()=>{const e=o.exports.useRef(),t=m(),a=k(),{id:n}=S.parse(a.search),[s,r]=o.exports.useState({});o.exports.useEffect((()=>{l()}),[]);const l=async()=>{const{data:e}=await A(`/api/bill/detail?id=${n}`);r(e)};return i.createElement("div",{className:ge.detail},i.createElement(fe,{title:"账单详情"}),i.createElement("div",{className:ge.card},i.createElement("div",{className:ge.type},i.createElement("span",{className:v({[ge.expense]:1==s.pay_type,[ge.income]:2==s.pay_type})},i.createElement($,{className:ge.iconfont,type:s.type_id?P[s.type_id].icon:1})),i.createElement("span",null,s.type_name||"")),1==s.pay_type?i.createElement("div",{className:v(ge.amount,ge.expense)},"-",s.amount):i.createElement("div",{className:v(ge.amount,ge.incom)},"+",s.amount),i.createElement("div",{className:ge.info},i.createElement("div",{className:ge.time},i.createElement("span",null,"记录时间"),i.createElement("span",null,E(Number(s.date)).format("YYYY-MM-DD HH:mm"))),i.createElement("div",{className:ge.remark},i.createElement("span",null,"备注"),i.createElement("span",null,s.remark||"-"))),i.createElement("div",{className:ge.operation},i.createElement("span",{onClick:()=>{C.confirm({title:"删除",content:"确认删除账单？",onOk:async()=>{await O("/api/bill/delete",{id:n}),_.show("删除成功"),t.goBack()}})}},i.createElement($,{type:"shanchu"}),"删除"),i.createElement("span",{onClick:()=>e.current&&e.current.show()},i.createElement($,{type:"tianjia"}),"编辑"))),i.createElement(pe,{ref:e,detail:s,onReload:l}))}},{path:"/login",component:()=>{const e=o.exports.useRef(),[t,a]=o.exports.useState("login"),[n,s]=o.exports.useState(""),[r,l]=o.exports.useState(""),[c,m]=o.exports.useState(""),[p,d]=o.exports.useState(""),E=o.exports.useCallback((e=>{s(e)}),[]);return o.exports.useEffect((()=>{document.title="login"==t?"登录":"注册"}),[t]),i.createElement("div",{className:xe},i.createElement("div",{className:we}),i.createElement("div",{className:Ne},i.createElement("span",{className:v({[be]:"login"==t}),onClick:()=>a("login")},"登录"),i.createElement("span",{className:v({[be]:"register"==t}),onClick:()=>a("register")},"注册")),i.createElement("div",{className:ke},i.createElement(u,{icon:i.createElement($,{type:"zhanghao"})},i.createElement(f,{clearable:!0,type:"text",placeholder:"请输入账号",onChange:e=>l(e)})),i.createElement(u,{icon:i.createElement($,{type:"mima"})},i.createElement(f,{clearable:!0,type:"password",placeholder:"请输入密码",onChange:e=>m(e)})),"register"==t?i.createElement(u,{icon:i.createElement($,{type:"mima"})},i.createElement(f,{clearable:!0,type:"text",placeholder:"请输入验证码",onChange:e=>d(e)}),i.createElement(z,{ref:e,charNum:4,onChange:E})):null),i.createElement("div",{className:Se},"register"==t?i.createElement("div",{className:Ce},i.createElement(j,null),i.createElement("label",{className:"text-light"},"阅读并同意",i.createElement("a",null,"《掘掘手札条款》"))):null,i.createElement(N,{onClick:async()=>{if(r)if(c)try{if("login"==t){const{data:e}=await O("/api/user/login",{username:r,password:c});console.log("data",e),localStorage.setItem("token",e.token),window.location.href="/"}else{if(!p)return void _.show("请输入验证码");if(p!=n)return void _.show("验证码错误");const{data:e}=await O("/api/user/register",{username:r,password:c});_.show("注册成功"),a("login")}}catch(e){_.show("系统错误")}else _.show("请输入密码");else _.show("请输入账号")},block:!0,theme:"primary"},"login"==t?"登录":"注册")))}},{path:"/userinfo",component:()=>{const e=m(),[t,a]=o.exports.useState({}),[n,s]=o.exports.useState(""),[r,l]=o.exports.useState(""),c=localStorage.getItem("token");o.exports.useEffect((()=>{p()}),[]);const p=async()=>{const{data:e}=await A("/api/user/get_userinfo");a(e),s(J(e.avatar)),l(e.signature)};return i.createElement(i.Fragment,null,i.createElement(fe,{title:"用户信息"}),i.createElement("div",{className:ze.userinfo},i.createElement("h1",null,"个人资料"),i.createElement("div",{className:ze.item},i.createElement("div",{className:ze.title},"头像"),i.createElement("div",{className:ze.avatar},i.createElement("img",{className:ze.avatarUrl,src:n,alt:""}),i.createElement("div",{className:ze.desc},i.createElement("span",null,"支持 jpg、png、jpeg 格式大小 200KB 以内的图片"),i.createElement(R,{className:ze.filePicker,onChange:e=>{if(console.log("file.file",e.file),e&&e.file.size>204800)return void _.show("上传头像不得超过 200 KB！！");let t=new FormData;t.append("file",e.file),d({method:"post",url:`${T}/upload`,data:t,headers:{"Content-Type":"multipart/form-data",Authorization:c}}).then((e=>{s(J(e.data))}))},accept:"image/*"},i.createElement(N,{className:ze.upload,theme:"primary",size:"xs"},"点击上传"))))),i.createElement("div",{className:ze.item},i.createElement("div",{className:ze.title},"个性签名"),i.createElement("div",{className:ze.signature},i.createElement(f,{clearable:!0,type:"text",value:r,placeholder:"请输入个性签名",onChange:e=>l(e)}))),i.createElement(N,{onClick:async()=>{await O("/api/user/edit_userinfo",{signature:r,avatar:n}),_.show("修改成功"),e.goBack()},style:{marginTop:50},block:!0,theme:"primary"},"保存")))}},{path:"/account",component:Y()((e=>{const{getFieldProps:t,getFieldError:a}=e.form;return i.createElement(i.Fragment,null,i.createElement(fe,{title:"重制密码"}),i.createElement("div",{className:je},i.createElement("div",{className:Re},i.createElement(u,{title:"原密码"},i.createElement(f,r({clearable:!0,type:"text",placeholder:"请输入原密码"},t("oldpass",{rules:[{required:!0}]})))),i.createElement(u,{title:"新密码"},i.createElement(f,r({clearable:!0,type:"text",placeholder:"请输入新密码"},t("newpass",{rules:[{required:!0}]})))),i.createElement(u,{title:"确认密码"},i.createElement(f,r({clearable:!0,type:"text",placeholder:"请再此输入新密码确认"},t("newpass2",{rules:[{required:!0}]}))))),i.createElement(N,{className:Ye,block:!0,theme:"primary",onClick:()=>{e.form.validateFields((async(e,t)=>{if(!e){if(console.log(t),t.newpass!=t.newpass2)return void _.show("新密码输入不一致");await O("/api/user/modify_pass",{old_pass:t.oldpass,new_pass:t.newpass,new_pass2:t.newpass2}),_.show("修改成功")}}))}},"提交")))}))}];function Me(){const e=k(),{pathname:t}=e,a=["/","/data","/user"],[n,s]=o.exports.useState(!1);return o.exports.useEffect((()=>{console.log(t),s(a.includes(t))}),[t]),i.createElement(i.Fragment,null,i.createElement(I,{primaryColor:"#007fff"},i.createElement(M,null,Ie.map((e=>i.createElement(F,{exact:!0,key:e.path,path:e.path},i.createElement(e.component,null)))))),i.createElement(B,{showNav:n}))}D.render(i.createElement(i.StrictMode,null,i.createElement(W,null,i.createElement(Me,null))),document.getElementById("root"));
