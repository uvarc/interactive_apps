import{z as h,u as r,e as b}from"./index.146c2037.js";import{o as g,h as j,z as w,f as J,g as v}from"./helpers.7177ca38.js";import{s as E}from"./createNew.a4a688d1.js";import{v as T}from"./index.11580965.js";const _=async(e,o,a,i=!0)=>{const n=`project_uid=${e}&uid=${o}`,t=g({params_spec:1}),{params_spec:m={}}=await h(`/api/actions/jobs/single?${n}&${t}`),{jobType:y,parameters:l}=a,p=Object.entries(l),f=Object.keys(l),d=Object.keys(m);if(i)for(let s=0;s<d.length;s++){const c=d[s];f.includes(c)||await r.core.clearJobParam(e,o,c,!1)}for(let s=0;s<p.length;s++){const[c,u]=p[s];await r.core.setJobParam(e,o,c,u.value,!1)}T(a._id,a,{projectUid:e,uid:o,jobType:y})},D=async e=>{const o=j("Constructing blueprint job");try{const[a,i]=await w(),{jobType:n}=e,t=await r.core.createJob(a,i,n);if(!t)throw new Error("Job could not be created");t&&e.title.length&&e.applyTitle&&r.core.updateJobTitle(a,t,e.title),t&&e.description.length&&e.applyDescription&&r.core.updateJobDescription(a,t,e.description),await _(a,t,e,!1),E(a,t),J("Successfully deployed blueprint",o)}catch(a){v("Could not apply blueprint",a,o),b("Could not apply blueprint: ",a.message)}};export{D as c,_ as s};
