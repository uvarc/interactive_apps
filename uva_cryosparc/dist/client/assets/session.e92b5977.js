import{g as y}from"./vendor.3ae73048.js";import{a2 as g,aB as Ps}from"./index.146c2037.js";import{m as js,W as Ns,x as Us}from"./router.1b465492.js";const ks=t=>{var P,j,N,U,A,w,C,k,S,E,J,I,L,H,M,W,z,F,T,$,B,K,q,G,Q,R,O,V,X,Y,Z,o,c,d,tt,et,st,at,nt,lt,rt,it,_t,ut,pt,mt,ft,bt,ht,yt,gt,vt,xt,Dt,Pt,jt,Nt,Ut,At,wt,Ct,kt,St,Et,Jt,It,Lt,Ht,Mt,Wt,zt,Ft,Tt,$t,Bt,Kt,qt,Gt,Qt,Rt,Ot,Vt,Xt,Yt,Zt,ot,ct,dt,te,ee,se,ae,ne,le,re,ie,_e,ue,pe,me;if(t===null||typeof t=="undefined")return null;const fe=typeof(t==null?void 0:t.created_by_user_id)=="string"?(P=y(js)[t.created_by_user_id])!=null?P:`(${t.created_by_user_id})`:"Unknown user",be=typeof(t==null?void 0:t.created_by_user_id)=="string"?(j=y(Ns)[t.created_by_user_id])!=null?j:`(${t.created_by_user_id})`:"?",he=typeof((N=t==null?void 0:t.last_accessed)==null?void 0:N.name)=="string"?(A=(U=y(Us).find(e=>{var s;return e.username===((s=t==null?void 0:t.last_accessed)==null?void 0:s.name)}))==null?void 0:U.fullName)!=null?A:`(${t.last_accessed.name})`:"Unknown user",f=(w=t==null?void 0:t.phase2_class2D_job)!=null?w:null,ye=typeof f=="string"&&g(f),b=(C=t==null?void 0:t.phase2_abinit_job)!=null?C:null,ge=typeof b=="string"&&g(b),h=(k=t==null?void 0:t.phase2_refine_job)!=null?k:null,ve=typeof h=="string"&&g(h),xe=(E=(S=t==null?void 0:t.stats)==null?void 0:S.total_exposures)!=null?E:null,De=(I=(J=t==null?void 0:t.stats)==null?void 0:J.avg_movies_found_per_hour)!=null?I:null,Pe=(H=(L=t==null?void 0:t.stats)==null?void 0:L.total_in_progress)!=null?H:null,je=(W=(M=t==null?void 0:t.stats)==null?void 0:M.total_queued)!=null?W:0,Ne=(F=(z=t==null?void 0:t.stats)==null?void 0:z.total_failed)!=null?F:null,Ue=($=(T=t==null?void 0:t.stats)==null?void 0:T.total_ready)!=null?$:null,Ae=(K=(B=t==null?void 0:t.stats)==null?void 0:B.avg_movies_ready_per_hour)!=null?K:null,we=(G=(q=t==null?void 0:t.stats)==null?void 0:q.total_accepted)!=null?G:null,Ce=(R=(Q=t==null?void 0:t.stats)==null?void 0:Q.avg_movies_accepted_per_hour)!=null?R:null,ke=(V=(O=t==null?void 0:t.stats)==null?void 0:O.total_rejected)!=null?V:null,Se=(Y=(X=t==null?void 0:t.stats)==null?void 0:X.manual_rejected)!=null?Y:null,v=(Z=t==null?void 0:t.parameters)!=null?Z:[],n=(o=v.flatMap(e=>e.contains))!=null?o:[],l=n.find(e=>e.name==="current_picker"),Ee=(l==null?void 0:l.is_default)===!0?(c=l==null?void 0:l.base_value)!=null?c:null:(d=l==null?void 0:l.value)!=null?d:null,Je=(et=(tt=t==null?void 0:t.stats)==null?void 0:tt.total_extracted_particles)!=null?et:null,Ie=(at=(st=t==null?void 0:t.stats)==null?void 0:st.avg_particles_extracted_per_mic)!=null?at:null,Le=(lt=(nt=t==null?void 0:t.stats)==null?void 0:nt.avg_particles_extracted_per_hour)!=null?lt:null,i=(it=(rt=t==null?void 0:t.stats)==null?void 0:rt.gsfsc)!=null?it:null,He=i!==null&&typeof i=="number"?`${i.toFixed(2)}\xC5`:"-",a=(_t=t==null?void 0:t.compute_resources)!=null?_t:null,Me=(pt=(ut=a==null?void 0:a.phase_one_gpus)==null?void 0:ut.length)!=null?pt:null,r=(mt=t==null?void 0:t.exposure_groups)!=null?mt:[],We=r.length,ze=(bt=(ft=r==null?void 0:r.filter(e=>e.final===!0))==null?void 0:ft.length)!=null?bt:0,Fe=(yt=(ht=n.find(e=>e.name==="psize_A"))==null?void 0:ht.value)!=null?yt:null,Te=((gt=n.find(e=>e.name==="phase_plate"))==null?void 0:gt.value)===!0,$e=((vt=n.find(e=>e.name==="neg_stain"))==null?void 0:vt.value)===!0,Be=(Dt=(xt=t==null?void 0:t.stats)==null?void 0:xt.ny)!=null?Dt:null,Ke=(jt=(Pt=t==null?void 0:t.stats)==null?void 0:Pt.nx)!=null?jt:null,qe=(Ut=(Nt=t==null?void 0:t.stats)==null?void 0:Nt.frames)!=null?Ut:null,x=(At=t==null?void 0:t.attributes)!=null?At:[],D=x.filter(e=>{var s;return(e==null?void 0:e.name)==="found_at"||!((s=e==null?void 0:e.name)==null?void 0:s.endsWith("_at"))}),Ge=D.filter(e=>e.min!==null&&e.max!==null),_=n.find(e=>e.section==="extraction"&&e.name==="box_size_pix"),Qe=typeof(_==null?void 0:_.value)=="number"?_.value:null,u=n.find(e=>e.section==="extraction"&&e.name==="bin_size_pix"),Re=typeof(u==null?void 0:u.value)=="number"?u.value:null,p=n.find(e=>e.section==="blob_pick"&&e.name==="diameter_max"),Oe=typeof(p==null?void 0:p.value)=="number"?p.value:null,m=n.find(e=>e.section==="template_pick"&&e.name==="diameter"),Ve=typeof(m==null?void 0:m.value)=="number"?m.value:null,Xe=(Ct=(wt=t==null?void 0:t.stats)==null?void 0:wt.total_manual_picks)!=null?Ct:null,Ye=(St=(kt=t==null?void 0:t.stats)==null?void 0:kt.total_manual_picked_exposures)!=null?St:null,Ze=(Et=t==null?void 0:t.phase2_class2D_num_particles_in)!=null?Et:null,oe=(Jt=t==null?void 0:t.phase2_class2D_num_particles_seen)!=null?Jt:null,ce=(Lt=(It=t==null?void 0:t.phase2_class2D_params_spec)==null?void 0:It.class2D_K)!=null?Lt:null,de=(Mt=(Ht=t==null?void 0:t.phase2_class2D_info)==null?void 0:Ht.filter(e=>(e==null?void 0:e.selected)===!0).length)!=null?Mt:null,ts=(zt=(Wt=t==null?void 0:t.phase2_class2D_info)==null?void 0:Wt.reduce((e,s)=>(s==null?void 0:s.num_particles_total)?e+s.num_particles_total:0,0))!=null?zt:null,es=($t=(Tt=(Ft=t==null?void 0:t.phase2_class2D_info)==null?void 0:Ft.filter(e=>(e==null?void 0:e.selected)===!0))==null?void 0:Tt.reduce((e,s)=>(s==null?void 0:s.num_particles_total)?e+s.num_particles_total:0,0))!=null?$t:null,ss=(Bt=t==null?void 0:t.phase2_class2D_num_particles_rejected)!=null?Bt:null,as=typeof(t==null?void 0:t.phase2_class2D_last_updated)=="number"&&t.phase2_class2D_last_updated!==0?new Date((t==null?void 0:t.phase2_class2D_last_updated)*1e3):null,ns=(Kt=t==null?void 0:t.phase2_abinit_num_particles_in)!=null?Kt:null,ls=(Gt=(qt=t==null?void 0:t.phase2_abinit_params_spec)==null?void 0:qt.abinit_K)!=null?Gt:null,rs=(Rt=(Qt=t==null?void 0:t.phase2_abinit_params_spec)==null?void 0:Qt.abinit_symmetry)!=null?Rt:"",is=(Ot=t==null?void 0:t.phase2_refine_num_particles_in)!=null?Ot:null,_s=(Xt=(Vt=t==null?void 0:t.phase2_refine_params_spec)==null?void 0:Vt.refine_symmetry)!=null?Xt:"C1",us=typeof(t==null?void 0:t.phase2_refine_last_updated)=="number"&&t.phase2_refine_last_updated!==0?new Date((t==null?void 0:t.phase2_refine_last_updated)*1e3):null,ps=(Yt=a==null?void 0:a.phase_one_lane)!=null?Yt:null,ms=(Zt=a==null?void 0:a.phase_two_lane)!=null?Zt:null,fs=(ot=a==null?void 0:a.auxiliary_lane)!=null?ot:null,bs=typeof(t==null?void 0:t.last_compacted_amount)=="number"?t.last_compacted_amount:null,hs=(ct=t==null?void 0:t.last_compacted_at)!=null?ct:null,ys=typeof(t==null?void 0:t.compacted_exposures_count)=="number"?t.compacted_exposures_count:null,gs=(dt=t==null?void 0:t.restoration_notification_id)!=null?dt:null,vs=(te=t==null?void 0:t.restoration_user_id)!=null?te:null,xs=typeof(t==null?void 0:t.last_restored_amount)=="number"?t.last_restored_amount:null,Ds=(ee=t==null?void 0:t.last_restored_at)!=null?ee:null;return{projectUid:t.project_uid,uid:t.session_uid,workspaceUid:t.uid,isDeleted:(t==null?void 0:t.deleted)===!0,isSession:(t==null?void 0:t.workspace_type)==="live",title:(se=t==null?void 0:t.title)!=null?se:null,description:(ae=t==null?void 0:t.description)!=null?ae:null,createdAt:(ne=t==null?void 0:t.created_at)!=null?ne:null,ownerUserName:fe,ownerUserInitials:be,lastAccessedAt:(re=(le=t==null?void 0:t.last_accessed)==null?void 0:le.accessed_at)!=null?re:null,lastAccessedBy:(_e=(ie=t==null?void 0:t.last_accessed)==null?void 0:ie.name)!=null?_e:null,lastAccessedByUserName:he,statsLastUpdated:(pe=(ue=t==null?void 0:t.workspace_stats)==null?void 0:ue.updated_at)!=null?pe:null,jobCount:typeof((me=t==null?void 0:t.workspace_stats)==null?void 0:me.job_count)=="number"?Ps(t.workspace_stats.job_count):null,class2DJob:f,hasClass2DJob:ye,abinitJob:b,hasAbinitJob:ge,refineJob:h,hasRefineJob:ve,totalExposures:xe,avgFoundPerHour:De,totalInProgress:Pe,totalQueued:je,totalFailed:Ne,totalReady:Ue,avgReadyPerHour:Ae,totalAccepted:we,avgAcceptedPerHour:Ce,totalRejected:ke,totalManualRejected:Se,parameterSections:v,allParameters:n,currentPicker:Ee,totalExtractedParticles:Je,avgExtractedPerMic:Ie,avgExtractedPerHour:Le,gsfsc:i,gsfscFormatted:He,computeResources:a,preprocessingWorkers:Me,exposureGroups:r,exposureGroupCount:We,enabledExposureGroupCount:ze,pixelSize:Fe,isPhasePlate:Te,isNegativeStain:$e,micrographWidth:Be,micrographHeight:Ke,framesNum:qe,attributes:x,overviewAttributes:D,attributesWithThresholds:Ge,extractionBoxSize:Qe,extractionBinSize:Re,blobParticleDiameter:Oe,templateParticleDiameter:Ve,totalManualPicks:Xe,totalExposuresManuallyPicked:Ye,class2DNumParticlesIn:Ze,class2DNumParticlesSeen:oe,class2DParamsSpecNumClasses:ce,class2DTotalClassesSelected:de,class2DTotalParticles:ts,class2DTotalParticlesSelected:es,class2DNumParticlesRejected:ss,class2DLastUpdated:as,abinitNumParticles:ns,abinitParamsNumClasses:ls,abinitParamsSymmetry:rs,refineNumParticles:is,refineParamsSymmetry:_s,refineLastUpdated:us,preprocessingLane:ps,reconstructionLane:ms,auxiliaryLane:fs,lastCompactedAmount:bs,lastCompactedAt:hs,compactedExposureCount:ys,restorationNotificationId:gs,restorationUserId:vs,lastRestoredAmount:xs,lastRestoredAt:Ds,doc:t}};export{ks as c};
