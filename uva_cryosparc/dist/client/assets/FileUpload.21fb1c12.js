import{S as m,h as l,s as c,u as j}from"./vendor.3ae73048.js";import{C as r,J as f}from"./Authenticated.43a5e742.js";import"./index.146c2037.js";import"./router.1b465492.js";import"./auth.ae36c178.js";import"./helpers.7177ca38.js";import"./createNew.a4a688d1.js";import"./jobs.7ab064ef.js";import"./index.c4392b02.js";import"./jobs.d50d1674.js";import"./Logout.c3964a48.js";import"./index.9987ff70.js";import"./index.11580965.js";import"./Icon.61279884.js";import"./index.2e3bb17a.js";import"./ChevronUp.0ab7bee0.js";import"./types.8cb6216c.js";import"./Spinner.012207c4.js";import"./Folder.9bc96b35.js";import"./LockClosed.9ead7228.js";import"./cleanupData.f259a128.js";import"./Exclamation.f44359c6.js";import"./TagCount.d4471cb8.js";import"./Tag.2b4e7c42.js";import"./Workflow.261abe6c.js";import"./Database.55c9be70.js";import"./Search.fa01495d.js";import"./LightningBolt.e8bda490.js";import"./SidebarLeftOpen.3b7701dd.js";function v(d){const t=e=>{e.preventDefault(),r.set(!0)},o=e=>{e.preventDefault(),r.set(!1)},a=e=>{e.preventDefault()},s=e=>{var i;e.preventDefault(),r.set(!1);const n=Array.from(((i=e.dataTransfer)==null?void 0:i.files)||[]).filter(p=>Math.abs(p.lastModified-Date.now())>1e3);n.length!==0&&f(n)};return j(()=>(window.addEventListener("dragenter",t),window.addEventListener("dragleave",o),window.addEventListener("dragover",a),window.addEventListener("drop",s),()=>{window.removeEventListener("dragenter",t),window.removeEventListener("dragleave",o),window.removeEventListener("dragover",a),window.removeEventListener("drop",s)})),[]}class H extends m{constructor(t){super();l(this,t,v,null,c,{})}}export{H as default};
