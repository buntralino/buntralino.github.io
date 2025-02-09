import{c as N}from"./chunk-4KE642ED-CGfICaCj.js";import{p as Q}from"./gitGraph-YCYPL57B-MEVJTYR7-D8xppMFw.js";import{o as X,m as r,e as Y,t as y,aa as _,W as j,p as q,a8 as H,ab as I,ac as W,ad as J,C as U,w as Z,B as ee,T as te,k as ae,S as ie,v as re}from"./mermaid.esm.min-B7FQ1sEf.js";import"./chunk-5ZJXQJOJ-C_88jJS3.js";import"./app-bYV2ILiw.js";var M=X.pie,T={sections:new Map,showData:!1,config:M},u=T.sections,v=T.showData,le=structuredClone(M),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{u=new Map,v=T.showData,Y()},"clear"),ne=r(({label:e,value:a})=>{u.has(e)||(u.set(e,a),y.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),pe=r(()=>u,"getSections"),de=r(e=>{v=e},"setShowData"),ce=r(()=>v,"getShowData"),B={getConfig:se,clear:oe,setDiagramTitle:Z,getDiagramTitle:ee,setAccTitle:te,getAccTitle:ae,setAccDescription:ie,getAccDescription:re,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ge={parse:r(async e=>{let a=await Q("pie",e);y.debug(a),fe(a,B)},"parse")},me=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ue=me,he=r(e=>{let a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return _().value(l=>l.value)(a)},"createPieArcs"),Se=r((e,a,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,D=j(),C=q(d.getConfig(),D.pie),b=40,s=18,c=4,o=450,S=o,x=H(a),n=x.append("g");n.attr("transform","translate("+S/2+","+o/2+")");let{themeVariables:i}=D,[k]=I(i.pieOuterStrokeWidth);k??(k=2);let A=C.textPosition,f=Math.min(S,o)/2-b,F=W().innerRadius(0).outerRadius(f),L=W().innerRadius(f*A).outerRadius(f*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",f+k/2).attr("class","pieOuterCircle");let z=d.getSections(),w=he(z),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],p=J(P);n.selectAll("mySlices").data(w).enter().append("path").attr("d",F).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let O=0;z.forEach(t=>{O+=t}),n.selectAll("mySlices").data(w).enter().append("text").text(t=>(t.data.value/O*100).toFixed(0)+"%").attr("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(o-50)/2).attr("class","pieTitleText");let $=n.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,g)=>{let m=s+c,V=m*p.domain().length/2,G=12*s,K=g*m-V;return"translate("+G+","+K+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(t=>{let{label:g,value:m}=t.data;return d.getShowData()?`${g} [${m}]`:g});let E=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),R=S+b+s+c+E;x.attr("viewBox",`0 0 ${R} ${o}`),U(x,o,R,C.useMaxWidth)},"draw"),xe={draw:Se},De={parser:ge,db:B,renderer:xe,styles:ue};export{De as diagram};
