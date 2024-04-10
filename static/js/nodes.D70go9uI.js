import{d as e,r as a,o as l,C as t,c as o,e as n,Z as s,w as i,l as u,a2 as r,g as p,ay as m,W as c,aH as d,a0 as v,a1 as f,aN as g,aO as y}from"./index.Ba5-doou.js";import{E as C}from"./el-card.D2khrh39.js";import{g as w,A as _,U as h,D as j,E as k,a as x,b}from"./node.BR74B4ji.js";import"./el-tag.CSn3yk_g.js";import"./el-select.D1vvps3w.js";import"./el-scrollbar.BCIV8EjR.js";import"./el-popper.BAD6ziHo.js";import"./el-tooltip.l0sNRNKZ.js";import{E as z}from"./el-dialog.Ve8qp-fp.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isEqual.lwZG1hQ-.js";import"./_initCloneObject.DxseZg3e.js";import"./debounce.CcJUImaE.js";import"./index.DBZ6OWJz.js";import"./strings.CSNw9U7z.js";import"./isUndefined.DgmxjSXK.js";import"./use-dialog.kBM4id6A.js";import"./refs.CYYiQqwo.js";const I=e=>(g("data-v-d208a1a2"),e=e(),y(),e),V={class:"dialog-footer"},E=I((()=>u("div",{style:{"margin-bottom":"10px"}},null,-1))),B=I((()=>u("div",{style:{"margin-top":"20px"}},null,-1))),O=I((()=>u("div",{style:{"margin-top":"20px"}},null,-1))),S=D(e({__name:"nodes",setup(e){const g=a([]),y=a(""),D=a(""),I=a(""),S=a(!1),T=a(),U=a("");async function L(){const{data:e}=await w();g.value=e}l((async()=>{L()}));const N=()=>{U.value="添加节点",y.value="",D.value="",S.value=!0},R=async()=>{let e=y.value.split(/[\r\n,]/);e&&(y.value=e.join(",")),"添加节点"==U.value?(await _({link:y.value.trim(),name:D.value.trim()}),m.success("添加成功")):(await h({oldname:I.value.trim(),link:y.value.trim(),name:D.value.trim()}),m.success("更新成功")),L(),y.value="",D.value="",S.value=!1},H=a([]),K=e=>{H.value=e},q=()=>{0!==H.value.length&&d.confirm("你是否要删除选中这些 ?","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{for(let e=0;e<H.value.length;e++)j({id:H.value[e].ID}),g.value=g.value.filter((a=>a.ID!==H.value[e].ID));m({type:"success",message:"删除成功"})}))},A=a(1),G=a(10),M=e=>{G.value=e},Q=e=>{A.value=e},W=t((()=>{const e=(A.value-1)*G.value,a=e+G.value;return g.value.slice(e,a)})),Z=e=>{(e=>{const a=document.createElement("textarea");a.value=e,document.body.appendChild(a),a.select();try{const e=document.execCommand("copy");m({type:e?"success":"warning",message:e?"复制成功！":"复制失败！"})}catch(l){m({type:"warning",message:"复制失败！"})}finally{document.body.removeChild(a)}})(e.Link)};return(e,a)=>{const l=v,t=f,w=z,_=k,h=x,H=b,$=C;return o(),n("div",null,[s(w,{modelValue:S.value,"onUpdate:modelValue":a[3]||(a[3]=e=>S.value=e),title:U.value,width:"80%"},{footer:i((()=>[u("div",V,[s(t,{onClick:a[2]||(a[2]=e=>S.value=!1)},{default:i((()=>[r("关闭")])),_:1}),s(t,{type:"primary",onClick:R},{default:i((()=>[r("确定")])),_:1})])])),default:i((()=>[s(l,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),placeholder:"请输入节点多行使用回车或逗号分开,支持base64格式的url订阅",type:"textarea",style:{"margin-bottom":"10px"},autosize:{minRows:2,maxRows:10}},null,8,["modelValue"]),s(l,{modelValue:D.value,"onUpdate:modelValue":a[1]||(a[1]=e=>D.value=e),placeholder:"请输入备注"},null,8,["modelValue"])])),_:1},8,["modelValue","title"]),s($,null,{default:i((()=>[s(t,{type:"primary",onClick:N},{default:i((()=>[r("添加节点")])),_:1}),E,s(h,{ref_key:"table",ref:T,data:p(W),style:{width:"100%"},onSelectionChange:K},{default:i((()=>[s(_,{type:"selection",fixed:"",prop:"ID",label:"id"}),s(_,{prop:"Name",label:"备注"}),s(_,{prop:"Link",label:"节点","show-overflow-tooltip":!0}),s(_,{prop:"CreateDate",label:"创建时间",sortable:""}),s(_,{fixed:"right",label:"操作",width:"120"},{default:i((e=>[s(t,{link:"",type:"primary",size:"small",onClick:a=>Z(e.row)},{default:i((()=>[r("复制")])),_:2},1032,["onClick"]),s(t,{link:"",type:"primary",size:"small",onClick:a=>(e=>{for(let a=0;a<g.value.length;a++)g.value[a].ID===e.ID&&(U.value="编辑节点",D.value=g.value[a].Name,I.value=D.value,y.value=g.value[a].Link,S.value=!0)})(e.row)},{default:i((()=>[r("编辑")])),_:2},1032,["onClick"]),s(t,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,void d.confirm(`你是否要删除 ${l.Name} ?`,"提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{await j({id:l.ID}),m({type:"success",message:"删除成功"}),L()}));var l}},{default:i((()=>[r("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),B,s(t,{type:"info",onClick:a[4]||(a[4]=e=>{c((()=>{g.value.forEach((e=>{T.value.toggleRowSelection(e,!0)}))}))})},{default:i((()=>[r("全选")])),_:1}),s(t,{type:"warning",onClick:a[5]||(a[5]=e=>{T.value.clearSelection()})},{default:i((()=>[r("取消选择")])),_:1}),s(t,{type:"danger",onClick:q},{default:i((()=>[r("批量删除")])),_:1}),O,s(H,{onSizeChange:M,onCurrentChange:Q,"current-page":A.value,"page-size":G.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],total:g.value.length},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-d208a1a2"]]);export{S as default};