"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[246],{7246:(e,n,u)=>{u.r(n),u.d(n,{default:()=>W});var l=u(124),a=u(3144),t=u(8534),r=(u(1249),u(2564),u(8309),u(4916),u(5306),u(9826),u(1539),u(6252)),i=u(2262),o=u(3577),c=u(86),d=u(6100),f=u(6708),s=u(4903),m=u(5856),v=(0,r._)("div",{id:"editor-container"},null,-1),p=(0,r._)("h2",null,"Daftar Soal",-1),w={class:"table-container"},U=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Soal"),(0,r._)("th",null,"Pilihan A"),(0,r._)("th",null,"Pilihan B"),(0,r._)("th",null,"Pilihan C"),(0,r._)("th",null,"Pilihan D"),(0,r._)("th",null,"Pilihan E"),(0,r._)("th",null,"Jawaban Benar"),(0,r._)("th",null,"Mata Pelajaran"),(0,r._)("th",null,"Kelas"),(0,r._)("th",null,"Aksi")])],-1),h=["innerHTML"],k=(0,r._)("div",{id:"editor-edit-container"},null,-1);const _={__name:"TambahSoal",setup:function(e){var n,u,_=(0,d.ad)(m.H),S=(0,f.cF)(m.H),W=(0,i.iH)([]),b=(0,i.iH)([]),g=(0,i.iH)(""),V=(0,i.iH)(""),H=(0,i.iH)(""),P=(0,i.iH)(""),x=(0,i.iH)(""),Z=(0,i.iH)(""),M=(0,i.iH)(""),D=(0,i.iH)(""),C=(0,i.iH)([]),E=(0,i.iH)(!1),A=(0,i.iH)(""),K=(0,i.iH)(""),T=(0,i.iH)(""),j=(0,i.iH)(""),B=(0,i.iH)(""),I=(0,i.iH)(""),y=(0,i.iH)(""),Q=(0,i.iH)(""),$=(0,i.iH)(""),J=(0,i.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),L=function(){var e=(0,t.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.PL)((0,d.hJ)(_,"soal"));case 2:n=e.sent,C.value=n.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,t.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.PL)((0,d.hJ)(_,"mataPelajaran"));case 2:n=e.sent,W.value=n.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=(0,t.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.PL)((0,d.hJ)(_,"kelas"));case 2:n=e.sent,b.value=n.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,t.Z)((0,l.Z)().mark((function e(){var u;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(g.value&&V.value&&H.value&&P.value&&x.value&&Z.value&&M.value&&D.value){e.next=3;break}return N("Semua kolom harus diisi","danger"),e.abrupt("return");case 3:if(u=n.root.innerHTML,u){e.next=7;break}return N("Soal tidak boleh kosong","danger"),e.abrupt("return");case 7:return e.prev=7,e.next=10,(0,d.ET)((0,d.hJ)(_,"soal"),{subject:g.value,class:V.value,question:u,options:{A:H.value,B:P.value,C:x.value,D:Z.value,E:M.value},correctAnswer:D.value});case 10:N("Soal berhasil ditambahkan","success"),F(),L(),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](7),console.error("Error adding question:",e.t0),N("Terjadi kesalahan saat menambahkan soal","danger");case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){$.value=e.id,A.value=e.subject,K.value=e["class"],T.value=e.options.A,j.value=e.options.B,B.value=e.options.C,I.value=e.options.D,y.value=e.options.E,Q.value=e.correctAnswer,E.value=!0,setTimeout((function(){u=new s.ZP("#editor-edit-container",{theme:"snow",modules:{toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video"],[{list:"ordered"},{list:"bullet"}]],handlers:{image:function(){ne()},video:function(){ue()}}}}}),u.root.innerHTML=e.question}),300)},O=function(){var e=(0,t.Z)((0,l.Z)().mark((function e(){var n;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(A.value&&K.value&&T.value&&j.value&&B.value&&I.value&&y.value&&Q.value){e.next=3;break}return N("Semua kolom harus diisi","danger"),e.abrupt("return");case 3:if(n=u.root.innerHTML,n){e.next=7;break}return N("Soal tidak boleh kosong","danger"),e.abrupt("return");case 7:return e.prev=7,e.next=10,(0,d.r7)((0,d.JU)(_,"soal",$.value),{subject:A.value,class:K.value,question:n,options:{A:T.value,B:j.value,C:B.value,D:I.value,E:y.value},correctAnswer:Q.value});case 10:N("Soal berhasil diperbarui","success"),E.value=!1,L(),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](7),console.error("Error updating question:",e.t0),N("Terjadi kesalahan saat memperbarui soal","danger");case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,t.Z)((0,l.Z)().mark((function e(n){return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.oe)((0,d.JU)(_,"soal",n));case 3:N("Soal berhasil dihapus","success"),L(),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error deleting question:",e.t0),N("Terjadi kesalahan saat menghapus soal","danger");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),F=function(){g.value="",V.value="",n.root.innerHTML="",H.value="",P.value="",x.value="",Z.value="",M.value="",D.value=""},N=function(e,n){J.value={isOpen:!0,message:e,duration:2e3,color:n}},X=function(e){setTimeout((function(){L(),e.target.complete()}),2e3)},ee=function(){E.value=!1},ne=function(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,t.Z)((0,l.Z)().mark((function n(){var a,t,r,i;return(0,l.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.files[0],t=(0,f.iH)(S,"images/".concat(a.name)),n.next=4,(0,f.KV)(t,a);case 4:return n.next=6,(0,f.Jt)(t);case 6:r=n.sent,i=u.getSelection(),u.insertEmbed(i.index,"image",r);case 9:case"end":return n.stop()}}),n)})))},ue=function(){var e=prompt("Masukkan URL video (YouTube):");if(e){var n=u.getSelection(),l='<iframe width="560" height="315" src="'.concat(e.replace("watch?v=","embed/"),'" frameborder="0" allowfullscreen></iframe>');u.clipboard.dangerouslyPasteHTML(n.index,l)}},le=function(e){var n=W.value.find((function(n){return n.id===e}));return n?n.name:"Unknown"},ae=function(e){var n=b.value.find((function(n){return n.id===e}));return n?n.name:"Unknown"};(0,r.bv)((function(){n=new s.ZP("#editor-container",{theme:"snow",modules:{toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video"],[{list:"ordered"},{list:"bullet"}]],handlers:{image:function(){te()},video:function(){re()}}}}}),L(),z(),Y()}));var te=function(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,t.Z)((0,l.Z)().mark((function u(){var a,t,r,i;return(0,l.Z)().wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.files[0],t=(0,f.iH)(S,"images/".concat(a.name)),u.next=4,(0,f.KV)(t,a);case 4:return u.next=6,(0,f.Jt)(t);case 6:r=u.sent,i=n.getSelection(),n.insertEmbed(i.index,"image",r);case 9:case"end":return u.stop()}}),u)})))},re=function(){var e=prompt("Masukkan URL video (YouTube):");if(e){var u=n.getSelection(),l='<iframe width="560" height="315" src="'.concat(e.replace("watch?v=","embed/"),'" frameborder="0" allowfullscreen></iframe>');n.clipboard.dangerouslyPasteHTML(u.index,l)}};return function(e,n){var u=(0,r.up)("ion-col"),l=(0,r.up)("ion-row"),a=(0,r.up)("ion-grid");return(0,r.wg)(),(0,r.j4)((0,i.SU)(c._i),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Gu),{mode:"ios"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.sr),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.wd),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Tambah Soal")]})),_:1}),(0,r.Wm)((0,i.SU)(c.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,r.Wm)((0,i.SU)(c.W2),{fullscreen:!0},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.nJ),{slot:"fixed",onIonRefresh:n[0]||(n[0]=function(e){return X(e)})},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Wo))]})),_:1}),(0,r.Wm)((0,i.SU)(c.W2),{class:"ion-padding"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Mata Pelajaran")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:g.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return g.value=e}),placeholder:"Pilih Mata Pelajaran"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(W.value,(function(e){return(0,r.wg)(),(0,r.j4)((0,i.SU)(c.n0),{key:e.id,value:e.id},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Kelas")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:V.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return V.value=e}),placeholder:"Pilih Kelas"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.value,(function(e){return(0,r.wg)(),(0,r.j4)((0,i.SU)(c.n0),{key:e.id,value:e.id},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),v,(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:H.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return H.value=e}),placeholder:"Masukkan pilihan A"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:P.value,"onUpdate:modelValue":n[4]||(n[4]=function(e){return P.value=e}),placeholder:"Masukkan pilihan B"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:x.value,"onUpdate:modelValue":n[5]||(n[5]=function(e){return x.value=e}),placeholder:"Masukkan pilihan C"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:Z.value,"onUpdate:modelValue":n[6]||(n[6]=function(e){return Z.value=e}),placeholder:"Masukkan pilihan D"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan E")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:M.value,"onUpdate:modelValue":n[7]||(n[7]=function(e){return M.value=e}),placeholder:"Masukkan pilihan E"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Jawaban Benar")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:D.value,"onUpdate:modelValue":n[8]||(n[8]=function(e){return D.value=e}),placeholder:"Pilih Jawaban Benar"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.n0),{value:"A"},{default:(0,r.w5)((function(){return[(0,r.Uk)("A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"B"},{default:(0,r.w5)((function(){return[(0,r.Uk)("B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"C"},{default:(0,r.w5)((function(){return[(0,r.Uk)("C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"D"},{default:(0,r.w5)((function(){return[(0,r.Uk)("D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"E"},{default:(0,r.w5)((function(){return[(0,r.Uk)("E")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.YG),{style:{color:"white"},expand:"block",onClick:q},{default:(0,r.w5)((function(){return[(0,r.Uk)("Tambah Soal")]})),_:1}),(0,r.Wm)(a,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(l,null,{default:(0,r.w5)((function(){return[(0,r.Wm)(u,null,{default:(0,r.w5)((function(){return[p,(0,r.Wm)((0,i.SU)(c.q_),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r._)("div",w,[(0,r._)("table",null,[U,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(C.value,(function(e){return(0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",{innerHTML:e.question},null,8,h),(0,r._)("td",null,(0,o.zw)(e.options.A),1),(0,r._)("td",null,(0,o.zw)(e.options.B),1),(0,r._)("td",null,(0,o.zw)(e.options.C),1),(0,r._)("td",null,(0,o.zw)(e.options.D),1),(0,r._)("td",null,(0,o.zw)(e.options.E),1),(0,r._)("td",null,(0,o.zw)(e.correctAnswer),1),(0,r._)("td",null,(0,o.zw)(le(e.subject)),1),(0,r._)("td",null,(0,o.zw)(ae(e["class"])),1),(0,r._)("td",null,[(0,r.Wm)((0,i.SU)(c.YG),{onClick:function(n){return G(e)},color:"warning"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Edit")]})),_:2},1032,["onClick"]),(0,r.Wm)((0,i.SU)(c.YG),{onClick:function(n){return R(e.id)},color:"danger"},{default:(0,r.w5)((function(){return[(0,r.Uk)("Hapus")]})),_:2},1032,["onClick"])])])})),128))])])])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)((0,i.SU)(c.Px),{"is-open":J.value.isOpen,message:J.value.message,duration:J.value.duration,color:J.value.color,onDidDismiss:n[9]||(n[9]=function(){return J.value.isOpen=!1})},null,8,["is-open","message","duration","color"]),(0,r.Wm)((0,i.SU)(c.ki),{"is-open":E.value,onDidDismiss:ee},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Gu),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.sr),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.wd),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Edit Soal")]})),_:1}),(0,r.Wm)((0,i.SU)(c.Sm),{slot:"end"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.YG),{onClick:ee},{default:(0,r.w5)((function(){return[(0,r.Uk)("Close")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,r.Wm)((0,i.SU)(c.W2),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Mata Pelajaran")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:A.value,"onUpdate:modelValue":n[10]||(n[10]=function(e){return A.value=e}),placeholder:"Pilih Mata Pelajaran"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(W.value,(function(e){return(0,r.wg)(),(0,r.j4)((0,i.SU)(c.n0),{key:e.id,value:e.id},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Kelas")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:K.value,"onUpdate:modelValue":n[11]||(n[11]=function(e){return K.value=e}),placeholder:"Pilih Kelas"},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.value,(function(e){return(0,r.wg)(),(0,r.j4)((0,i.SU)(c.n0),{key:e.id,value:e.id},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),k,(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:T.value,"onUpdate:modelValue":n[12]||(n[12]=function(e){return T.value=e}),placeholder:"Masukkan pilihan A"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:j.value,"onUpdate:modelValue":n[13]||(n[13]=function(e){return j.value=e}),placeholder:"Masukkan pilihan B"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:B.value,"onUpdate:modelValue":n[14]||(n[14]=function(e){return B.value=e}),placeholder:"Masukkan pilihan C"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:I.value,"onUpdate:modelValue":n[15]||(n[15]=function(e){return I.value=e}),placeholder:"Masukkan pilihan D"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Pilihan E")]})),_:1}),(0,r.Wm)((0,i.SU)(c.pK),{modelValue:y.value,"onUpdate:modelValue":n[16]||(n[16]=function(e){return y.value=e}),placeholder:"Masukkan pilihan E"},null,8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.Ie),null,{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.Q$),null,{default:(0,r.w5)((function(){return[(0,r.Uk)("Jawaban Benar")]})),_:1}),(0,r.Wm)((0,i.SU)(c.t9),{modelValue:Q.value,"onUpdate:modelValue":n[17]||(n[17]=function(e){return Q.value=e}),placeholder:"Pilih Jawaban Benar"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,i.SU)(c.n0),{value:"A"},{default:(0,r.w5)((function(){return[(0,r.Uk)("A")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"B"},{default:(0,r.w5)((function(){return[(0,r.Uk)("B")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"C"},{default:(0,r.w5)((function(){return[(0,r.Uk)("C")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"D"},{default:(0,r.w5)((function(){return[(0,r.Uk)("D")]})),_:1}),(0,r.Wm)((0,i.SU)(c.n0),{value:"E"},{default:(0,r.w5)((function(){return[(0,r.Uk)("E")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),(0,r.Wm)((0,i.SU)(c.YG),{expand:"block",onClick:O},{default:(0,r.w5)((function(){return[(0,r.Uk)("Simpan Perubahan")]})),_:1})]})),_:1})]})),_:1},8,["is-open"])]})),_:1})]})),_:1})}}},S=_,W=S}}]);
//# sourceMappingURL=246.913c4fb3.js.map