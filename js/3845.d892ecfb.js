"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[3845],{1530:(e,n,t)=>{var u=t(8710).charAt;e.exports=function(e,n,t){return n+(t?u(e,n).length:1)}},7007:(e,n,t)=>{t(4916);var u=t(1470),a=t(8052),l=t(2261),r=t(7293),i=t(5112),o=t(8880),c=i("species"),d=RegExp.prototype;e.exports=function(e,n,t,s){var f=i(e),m=!r((function(){var n={};return n[f]=function(){return 7},7!==""[e](n)})),v=m&&!r((function(){var n=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[c]=function(){return t},t.flags="",t[f]=/./[f]),t.exec=function(){return n=!0,null},t[f](""),!n}));if(!m||!v||t){var p=u(/./[f]),h=n(f,""[e],(function(e,n,t,a,r){var i=u(e),o=n.exec;return o===l||o===d.exec?m&&!r?{done:!0,value:p(n,t,a)}:{done:!0,value:i(t,n,a)}:{done:!1}}));a(String.prototype,e,h[0]),a(d,f,h[1])}s&&o(d[f],"sham",!0)}},647:(e,n,t)=>{var u=t(1702),a=t(7908),l=Math.floor,r=u("".charAt),i=u("".replace),o=u("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,n,t,u,s,f){var m=t+e.length,v=u.length,p=d;return void 0!==s&&(s=a(s),p=c),i(f,p,(function(a,i){var c;switch(r(i,0)){case"$":return"$";case"&":return e;case"`":return o(n,0,t);case"'":return o(n,m);case"<":c=s[o(i,1,-1)];break;default:var d=+i;if(0===d)return a;if(d>v){var f=l(d/10);return 0===f?a:f<=v?void 0===u[f-1]?r(i,1):u[f-1]+r(i,1):a}c=u[d-1]}return void 0===c?"":c}))}},7651:(e,n,t)=>{var u=t(6916),a=t(9670),l=t(614),r=t(4326),i=t(2261),o=TypeError;e.exports=function(e,n){var t=e.exec;if(l(t)){var c=u(t,e,n);return null!==c&&a(c),c}if("RegExp"===r(e))return u(i,e,n);throw o("RegExp#exec called on incompatible receiver")}},6091:(e,n,t)=>{var u=t(6530).PROPER,a=t(7293),l=t(1361),r="​᠎";e.exports=function(e){return a((function(){return!!l[e]()||r[e]()!==r||u&&l[e].name!==e}))}},5306:(e,n,t)=>{var u=t(2104),a=t(6916),l=t(1702),r=t(7007),i=t(7293),o=t(9670),c=t(614),d=t(8554),s=t(9303),f=t(7466),m=t(1340),v=t(4488),p=t(1530),h=t(8173),w=t(647),U=t(7651),S=t(5112),_=S("replace"),k=Math.max,W=Math.min,b=l([].concat),g=l([].push),x=l("".indexOf),V=l("".slice),P=function(e){return void 0===e?e:String(e)},H=function(){return"$0"==="a".replace(/./,"$0")}(),M=function(){return!!/./[_]&&""===/./[_]("a","$0")}(),$=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,n,t){var l=M?"$":"$0";return[function(e,t){var u=v(this),l=d(e)?void 0:h(e,_);return l?a(l,e,u,t):a(n,m(u),e,t)},function(e,a){var r=o(this),i=m(e);if("string"==typeof a&&-1===x(a,l)&&-1===x(a,"$<")){var d=t(n,r,i,a);if(d.done)return d.value}var v=c(a);v||(a=m(a));var h,S=r.global;S&&(h=r.unicode,r.lastIndex=0);var _,H=[];while(1){if(_=U(r,i),null===_)break;if(g(H,_),!S)break;var M=m(_[0]);""===M&&(r.lastIndex=p(i,f(r.lastIndex),h))}for(var $="",E=0,T=0;T<H.length;T++){_=H[T];for(var Z,B=m(_[0]),I=k(W(s(_.index),i.length),0),L=[],A=1;A<_.length;A++)g(L,P(_[A]));var C=_.groups;if(v){var D=b([B],L,I,i);void 0!==C&&g(D,C),Z=m(u(a,void 0,D))}else Z=w(B,i,I,L,C,a);I>=E&&($+=V(i,E,I)+Z,E=I+B.length)}return $+V(i,E)}]}),!$||!H||M)},3210:(e,n,t)=>{var u=t(2109),a=t(3111).trim,l=t(6091);u({target:"String",proto:!0,forced:l("trim")},{trim:function(){return a(this)}})},3845:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var u=t(124),a=t(3144),l=t(8534),r=(t(1249),t(2564),t(3210),t(8309),t(4916),t(5306),t(6252)),i=t(2262),o=t(3577),c=t(3167),d=t(6100),s=t(6708),f=t(4903),m=t(5856),v=(0,r._)("div",{id:"editor-container"},null,-1),p=(0,r._)("div",{id:"editor-explanation-container"},null,-1),h=(0,r._)("h2",null,"Daftar Soal",-1),w={class:"table-container"},U={class:"fixed-table"},S=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{style:{width:"50px","white-space":"nowrap",overflow:"visible"}},"No"),(0,r._)("th",null,"Soal"),(0,r._)("th",null,"Pilihan A"),(0,r._)("th",null,"Pilihan B"),(0,r._)("th",null,"Pilihan C"),(0,r._)("th",null,"Pilihan D"),(0,r._)("th",null,"Pilihan E"),(0,r._)("th",null,"Jenis Soal"),(0,r._)("th",null,"Aksi")])],-1),_={style:{width:"50px","white-space":"nowrap",overflow:"visible"}},k=["innerHTML"],W=(0,r._)("div",{id:"editor-edit-container"},null,-1),b=(0,r._)("div",{id:"editor-edit-explanation-container"},null,-1),g=(0,r._)("br",null,null,-1),x=(0,r._)("br",null,null,-1),V=(0,r._)("br",null,null,-1);const P={__name:"SoalSnbt",setup:function(e){var n,t,P,H,M=(0,d.ad)(m.H),$=(0,s.cF)(m.H),E=(0,i.iH)([]),T=(0,i.iH)(""),Z=(0,i.iH)(""),B=(0,i.iH)(""),I=(0,i.iH)(""),L=(0,i.iH)(""),A=(0,i.iH)(""),C=(0,i.iH)(""),D=(0,i.iH)(""),y=(0,i.iH)([]),J=(0,i.iH)(!1),Q=(0,i.iH)(""),K=(0,i.iH)(""),j=(0,i.iH)(""),G=(0,i.iH)(""),q=(0,i.iH)(""),R=(0,i.iH)(""),Y=(0,i.iH)(""),z=(0,i.iH)(""),N=(0,i.iH)(""),O=(0,i.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),F=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var n;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.PL)((0,d.hJ)(M,"soalsnbt"));case 2:n=e.sent,y.value=n.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var n;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.PL)((0,d.hJ)(M,"mataPelajaran"));case 2:n=e.sent,E.value=n.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var t,a;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Z.value&&B.value&&I.value&&L.value&&A.value&&D.value&&C.value){e.next=3;break}return le("Semua kolom harus diisi","danger"),e.abrupt("return");case 3:if(t=n.root.innerHTML,a=P.root.innerHTML,t){e.next=8;break}return le("Soal tidak boleh kosong","danger"),e.abrupt("return");case 8:return e.prev=8,e.next=11,(0,d.ET)((0,d.hJ)(M,"soalsnbt"),{subject:T.value,question:t,options:{A:Z.value,B:B.value,C:I.value,D:L.value,E:A.value},correctAnswer:C.value,jenissoal:D.value,explanation:a});case 11:le("Soal berhasil ditambahkan","success"),ae(),F(),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](8),console.error("Error adding question:",e.t0),le("Terjadi kesalahan saat menambahkan soal","danger");case 20:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(){return e.apply(this,arguments)}}(),ne=function(e){z.value=e.id,Q.value=e.subject,K.value=e.options.A,j.value=e.options.B,G.value=e.options.C,q.value=e.options.D,R.value=e.options.E,Y.value=e.correctAnswer,N.value=e.jenissoal,J.value=!0,setTimeout((function(){t=new f.ZP("#editor-edit-container",{theme:"snow",modules:{toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video"],[{list:"ordered"},{list:"bullet"}]],handlers:{image:function(){oe()},video:function(){ce()}}}}}),H=new f.ZP("#editor-edit-explanation-container",{theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video"],[{list:"ordered"},{list:"bullet"}]]}}),t.root.innerHTML=e.question,H.root.innerHTML=e.explanation||""}),300)},te=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(){var n,a;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(K.value.trim()&&j.value.trim()&&G.value.trim()&&q.value.trim()&&R.value.trim()&&N.value.trim()&&Y.value.trim()){e.next=3;break}return le("Semua kolom harus diisi","danger"),e.abrupt("return");case 3:if(n=t.root.innerHTML.trim(),a=H.root.innerHTML.trim(),n&&"<p><br></p>"!==n){e.next=8;break}return le("Soal tidak boleh kosong","danger"),e.abrupt("return");case 8:return e.prev=8,e.next=11,(0,d.r7)((0,d.JU)(M,"soalsnbt",z.value),{question:n,options:{A:K.value.trim(),B:j.value.trim(),C:G.value.trim(),D:q.value.trim(),E:R.value.trim()},correctAnswer:Y.value.trim(),jenissoal:N.value.trim(),explanation:a});case 11:le("Soal berhasil diperbarui","success"),J.value=!1,F(),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](8),console.error("Error updating question:",e.t0),le("Terjadi kesalahan saat memperbarui soal","danger");case 20:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,l.Z)((0,u.Z)().mark((function e(n){return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.oe)((0,d.JU)(M,"soalsnbt",n));case 3:le("Soal berhasil dihapus","success"),F(),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error deleting question:",e.t0),le("Terjadi kesalahan saat menghapus soal","danger");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),ae=function(){T.value="",n.root.innerHTML="",P.root.innerHTML="",Z.value="",B.value="",I.value="",L.value="",A.value="",C.value="",D.value=""},le=function(e,n){O.value={isOpen:!0,message:e,duration:2e3,color:n}},re=function(e){setTimeout((function(){F(),e.target.complete()}),2e3)},ie=function(){J.value=!1},oe=function(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,l.Z)((0,u.Z)().mark((function n(){var a,l,r,i;return(0,u.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.files[0],l=(0,s.iH)($,"images/".concat(a.name)),n.next=4,(0,s.KV)(l,a);case 4:return n.next=6,(0,s.Jt)(l);case 6:r=n.sent,i=t.getSelection(),t.insertEmbed(i.index,"image",r);case 9:case"end":return n.stop()}}),n)})))},ce=function(){var e=prompt("Masukkan URL video (YouTube):");if(e){var n=t.getSelection(),u='<iframe width="560" height="315" src="'.concat(e.replace("watch?v=","embed/"),'" frameborder="0" allowfullscreen></iframe>');t.clipboard.dangerouslyPasteHTML(n.index,u)}};(0,r.bv)((function(){n=new f.ZP("#editor-container",{theme:"snow",modules:{toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video"],[{list:"ordered"},{list:"bullet"}]],handlers:{image:function(){de()},video:function(){se()}}}}}),P=new f.ZP("#editor-explanation-container",{theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video"],[{list:"ordered"},{list:"bullet"}]]}}),F(),X()}));var de=function(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,l.Z)((0,u.Z)().mark((function t(){var a,l,r,i;return(0,u.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.files[0],l=(0,s.iH)($,"images/".concat(a.name)),t.next=4,(0,s.KV)(l,a);case 4:return t.next=6,(0,s.Jt)(l);case 6:r=t.sent,i=n.getSelection(),n.insertEmbed(i.index,"image",r);case 9:case"end":return t.stop()}}),t)})))},se=function(){var e=prompt("Masukkan URL video (YouTube):");if(e){var t=n.getSelection(),u='<iframe width="560" height="315" src="'.concat(e.replace("watch?v=","embed/"),'" frameborder="0" allowfullscreen></iframe>');n.clipboard.dangerouslyPasteHTML(t.index,u)}};return function(e,n){var t=(0,r.up)("ion-col"),u=(0,r.up)("ion-row"),a=(0,r.up)("ion-grid");return(0,r.wg)(),(0,r.j4)((0,i.SU)(c._i),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Gu),{mode:"ios"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.sr),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.wd),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Tambah Soal SNBT")]})),_:1}),(0,r.Wm)((0,i.SU)(c.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,r.Wm)((0,i.SU)(c.W2),{fullscreen:!0},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.nJ),{slot:"fixed",onIonRefresh:n[0]||(n[0]=function(e){return re(e)})},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Wo))]})),_:1}),(0,r.Wm)((0,i.SU)(c.W2),{class:"ion-padding"},{default:(0,r.w5)((function(){return[v,(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:Z.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return Z.value=e}),placeholder:"Masukkan pilihan A"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:B.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return B.value=e}),placeholder:"Masukkan pilihan B"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:I.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return I.value=e}),placeholder:"Masukkan pilihan C"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:L.value,"onUpdate:modelValue":n[4]||(n[4]=function(e){return L.value=e}),placeholder:"Masukkan pilihan D"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan E")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:A.value,"onUpdate:modelValue":n[5]||(n[5]=function(e){return A.value=e}),placeholder:"Masukkan pilihan E"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Jawaban Benar")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:C.value,"onUpdate:modelValue":n[6]||(n[6]=function(e){return C.value=e}),placeholder:"Pilih Jawaban Benar"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.n0),{value:"A"},{default:(0,r.w5)((function(){return[(0,r.Uk)("A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"B"},{default:(0,r.w5)((function(){return[(0,r.Uk)("B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"C"},{default:(0,r.w5)((function(){return[(0,r.Uk)("C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"D"},{default:(0,r.w5)((function(){return[(0,r.Uk)("D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"E"},{default:(0,r.w5)((function(){return[(0,r.Uk)("E")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Jenis Soal")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:D.value,"onUpdate:modelValue":n[7]||(n[7]=function(e){return D.value=e}),placeholder:"Pilih Jenis Soal"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.n0),{value:"TPS"},{default:(0,r.w5)((function(){return[(0,r.Uk)("TPS")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"MM"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Penalaran Matematika")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"LBIND"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Literasi B.indonesia")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"LBING"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Literasi B.inggris")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pembahasan Soal")]})),_:1})]})),_:1}),p,(0,r.Wm)((0,i.SU)(c.YG),{style:{color:"white"},expand:"block",onClick:ee},{default:(0,r.w5)((function(){return[(0,r.Uk)("Tambah Soal")]})),_:1}),(0,r.Wm)(a,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(u,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(t,null,{default:(0,r.w5)((function(){return[h,(0,r.Wm)((0,i.SU)(c.q_),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r._)("div",w,[(0,r._)("table",U,[S,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.value,(function(e,n){return(0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",_,(0,o.zw)(n+1),1),(0,r._)("td",{innerHTML:e.question},null,8,k),(0,r._)("td",null,(0,o.zw)(e.options.A),1),(0,r._)("td",null,(0,o.zw)(e.options.B),1),(0,r._)("td",null,(0,o.zw)(e.options.C),1),(0,r._)("td",null,(0,o.zw)(e.options.D),1),(0,r._)("td",null,(0,o.zw)(e.options.E),1),(0,r._)("td",null,(0,o.zw)(e.jenissoal),1),(0,r._)("td",null,[(0,r.Wm)((0,i.SU)(c.YG),{onClick:function(n){return ne(e)},color:"warning"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Edit")]})),_:2},1032,["onClick"]),(0,r.Wm)((0,i.SU)(c.YG),{onClick:function(n){return ue(e.id)},color:"danger"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Hapus")]})),_:2},1032,["onClick"])])])})),128))])])])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)((0,i.SU)(c.Px),{"is-open":O.value.isOpen,message:O.value.message,duration:O.value.duration,color:O.value.color,onDidDismiss:n[8]||(n[8]=function(){return O.value.isOpen=!1})},null,8,["is-open","message","duration","color"]),(0,r.Wm)((0,i.SU)(c.ki),{"is-open":J.value,onDidDismiss:ie,class:"custom-modal"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Gu),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.sr),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.wd),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Edit Soal")]})),_:1}),(0,r.Wm)((0,i.SU)(c.Sm),{slot:"end"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.YG),{onClick:ie},{default:(0,r.w5)((function(){return[(0,r.Uk)("Close")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)((0,i.SU)(c.W2),null,{default:(0,r.w5)((function(){return[W,(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:K.value,"onUpdate:modelValue":n[9]||(n[9]=function(e){return K.value=e}),placeholder:"Masukkan pilihan A"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:j.value,"onUpdate:modelValue":n[10]||(n[10]=function(e){return j.value=e}),placeholder:"Masukkan pilihan B"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:G.value,"onUpdate:modelValue":n[11]||(n[11]=function(e){return G.value=e}),placeholder:"Masukkan pilihan C"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:q.value,"onUpdate:modelValue":n[12]||(n[12]=function(e){return q.value=e}),placeholder:"Masukkan pilihan D"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan E")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:R.value,"onUpdate:modelValue":n[13]||(n[13]=function(e){return R.value=e}),placeholder:"Masukkan pilihan E"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Jawaban Benar")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:Y.value,"onUpdate:modelValue":n[14]||(n[14]=function(e){return Y.value=e}),placeholder:"Pilih Jawaban Benar"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.n0),{value:"A"},{default:(0,r.w5)((function(){return[(0,r.Uk)("A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"B"},{default:(0,r.w5)((function(){return[(0,r.Uk)("B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"C"},{default:(0,r.w5)((function(){return[(0,r.Uk)("C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"D"},{default:(0,r.w5)((function(){return[(0,r.Uk)("D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"E"},{default:(0,r.w5)((function(){return[(0,r.Uk)("E")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Jenis Soal")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:N.value,"onUpdate:modelValue":n[15]||(n[15]=function(e){return N.value=e}),placeholder:"Pilih Jenis Soal"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.n0),{value:"TPS"},{default:(0,r.w5)((function(){return[(0,r.Uk)("TPS")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"MM"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Penalaran Matematika")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"LBIND"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Literasi B.indonesia")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"LBING"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Literasi B.inggris")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pembahasan")]})),_:1})]})),_:1}),b,(0,r.Wm)((0,i.SU)(c.YG),{expand:"block",onClick:te,style:{color:"white","margin-bottom":"15%"}},{default:(0,r.w5)((function(){return[(0,r.Uk)("Simpan Perubahan")]})),_:1}),g,x,V]})),_:1})]})),_:1},8,["is-open"])]})),_:1})]})),_:1})}}},H=P,M=H}}]);
//# sourceMappingURL=3845.d892ecfb.js.map