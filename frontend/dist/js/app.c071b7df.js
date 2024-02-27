(function(){"use strict";var e={494:function(e,t,a){var o=a(144),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},n=[],s={name:"App",components:{},data(){return{user:null,trackers:[],name:{}}},methods:{getName(){fetch("https://api.qself.soumyavaidya.me/api/user",{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{console.log(e),this.name=e,this.user=this.name.username})).catch((e=>{console.log(e)}))}},created(){this.getName()}},l=s,i=a(1),c=(0,i.Z)(l,r,n,!1,null,null,null),m=c.exports,p=a(345),u=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),e.check?e._e():t("div",{staticClass:"container mt-5"},[t("h2",[e._v("Hello, "+e._s(e.name.username)+"!")]),t("br"),t("router-link",{staticClass:"btn btn-success mx-2 mt-2",attrs:{to:{name:"createtracker"}}},[e._v("ADD Tracker ")]),t("br"),t("br"),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table",staticStyle:{"text-transform":"capitalize"}},[e._m(0),t("tbody",e._l(e.trackers,(function(a){return t("tr",{key:a.tracker_id},[t("td",[t("router-link",{attrs:{to:{name:"trackerlogs",params:{tracker_id:a.tracker_id}}}},[e._v(" "+e._s(a.name)+" ")])],1),t("td",[e._v(e._s(a.last_modified))]),t("td",[e._v(e._s(a.last_modified_value))]),t("td",[t("router-link",{staticClass:"btn btn-success mx-2 mt-2",attrs:{to:{name:"createlog",params:{user_id:e.name.user_id,tracker_id:a.tracker_id}}}},[e._v("+")])],1),t("td",[t("router-link",{staticClass:"btn btn-warning mx-2 mt-2",attrs:{to:{name:"updatetracker",params:{user_id:e.name.user_id,tracker_id:a.tracker_id}}}},[e._v("Update")])],1),t("td",[t("button",{staticClass:"btn btn-danger mx-2 mt-2",on:{click:function(t){return e.deleteTracker(a.tracker_id)}}},[e._v(" Delete ")])]),t("td",[t("button",{staticClass:"btn btn-light mx-2 mt-2",attrs:{type:"button"},on:{click:function(t){return e.downloadLog(a.tracker_id)}}},[e._v(" Download ")])])])})),0)])])],1)],1)},d=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[e._v("Name")]),t("th",{attrs:{scope:"col"}},[e._v("Last Update")]),t("th",{attrs:{scope:"col"}},[e._v("Recent Value")]),t("th",{attrs:{scope:"col"}}),t("th",{attrs:{scope:"col"}}),t("th",{attrs:{scope:"col"}}),t("th",{attrs:{scope:"col"}})])])}],h={data(){return{check:null,user:null,trackers:[],name:{},last_time:"",last_value:""}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},methods:{getTrackers(){fetch("https://api.qself.soumyavaidya.me/api/trackers",{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.trackers.push(...e)})).catch((e=>{this.check=1,console.log(e),this.$router.push({name:"login"})}))},getName(){fetch("https://api.qself.soumyavaidya.me/api/user",{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{console.log(e),this.name=e,this.user=this.name.username})).catch((e=>{console.log(e)}))},deleteTracker(e){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${e}`,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((()=>{})).catch((e=>{console.log(e)}));let t=this.trackers.indexOf(e);this.trackers.splice(t,1)},downloadLog(e){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${e}/download`,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.blob())).then((t=>{var a=window.URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=`./export/${e}_logs.csv`,document.body.appendChild(o),o.click(),o.remove()})).catch((e=>{console.log(e)}))}},created(){this.getTrackers(),this.getName()}},v=h,g=(0,i.Z)(v,u,d,!1,null,null,null),f=g.exports,b=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("div",{staticClass:"container mt-4"},[t("h3",[e._v("Add Tracker")]),t("br"),t("form",{on:{submit:function(t){return t.preventDefault(),e.insertTracker.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"This is the name of your tracker",required:"",id:"exampleFormControlInput1"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),t("br"),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"inputState"}},[e._v("Type")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"form-control",attrs:{name:"type",id:"inputState"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]}}},[t("option",{attrs:{value:"numerical",selected:""}},[e._v("Numerical")]),t("option",{attrs:{value:"multiple"}},[e._v("Multiple Values")]),t("option",{attrs:{value:"td"}},[e._v("Date and Time")]),t("option",{attrs:{value:"bool"}},[e._v("Boolean")])])]),t("br"),"multiple"==e.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Settings")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.settings,expression:"settings"}],staticClass:"form-control",attrs:{type:"text",name:"settings",placeholder:"Choice for multiple input type only",id:"exampleFormControlInput1"},domProps:{value:e.settings},on:{input:function(t){t.target.composing||(e.settings=t.target.value)}}})]):e._e(),t("br"),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlTextarea1"}},[e._v("Description")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.desc,expression:"desc"}],staticClass:"form-control",attrs:{placeholder:"Describe it!",id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:e.desc},on:{input:function(t){t.target.composing||(e.desc=t.target.value)}}})]),t("br"),e._m(0)]),e.error?t("div",[t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[e._v(" "+e._s(e.error)+" ")])]):e._e()])],1)},C=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add!")])])}],k={data(){return{name:null,type:null,settings:null,desc:null,error:null}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},methods:{insertTracker(){this.name&&this.type?fetch("https://api.qself.soumyavaidya.me/api/trackers",{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"},body:JSON.stringify({tuser_id:this.user_id,name:this.name,type:this.type,desc:this.desc,settings:this.settings})}).then((e=>e.json())).then((()=>{this.$router.push({name:"home"})})).catch((e=>{console.log(e)})):this.error="Please enter all fields"}}},_=k,y=(0,i.Z)(_,b,C,!1,null,null,null),A=y.exports,w=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("div",{staticClass:"container mt-4"},[t("h3",[e._v("Update Tracker")]),t("br"),t("form",{on:{submit:function(t){return t.preventDefault(),e.updateTracker.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.trackername.name,expression:"trackername.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"This is the name of your tracker",required:"",id:"exampleFormControlInput1"},domProps:{value:e.trackername.name},on:{input:function(t){t.target.composing||e.$set(e.trackername,"name",t.target.value)}}})]),t("br"),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlTextarea1"}},[e._v("Description")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.trackername.desc,expression:"trackername.desc"}],staticClass:"form-control",attrs:{placeholder:"Describe it!",id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:e.trackername.desc},on:{input:function(t){t.target.composing||e.$set(e.trackername,"desc",t.target.value)}}})]),t("br"),e._m(0)]),e.error?t("div",[t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[e._v(" "+e._s(e.error)+" ")])]):e._e()])],1)},T=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Update!")])])}],O={data(){return{name:null,desc:null,error:null,trackername:{}}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},props:{tracker_id:{type:[Number,String],required:!0}},methods:{updateTracker(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}`,{method:"PUT",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"},body:JSON.stringify(this.trackername)}).then((e=>e.json())).then((()=>{this.$router.push({name:"home"})})).catch((e=>{console.log(e)}))},getTrackerDetails(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.trackername=e})).catch((e=>{console.log(e)}))}},mounted(){this.getTrackerDetails()}},x=O,P=(0,i.Z)(x,w,T,!1,null,null,null),S=P.exports,N=function(){var e=this,t=e._self._c;return t("div",[t("NavBar",{attrs:{user:!0}}),t("div",{staticClass:"container mt-5"},[t("div",[t("h2",{staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(e.trackername.name))]),t("p",{staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(e.trackername.desc))]),t("br"),e.logs.length?t("div",{staticClass:"container-sm"},[t("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return e.downloadLog(e.trackername.tracker_id)}}},[e._v(" Download ")]),t("br"),t("br"),t("h3",[e._v("Graph")]),"multiple"==e.trackername.type||"bool"==e.trackername.type?t("div",{staticClass:"container-sm",staticStyle:{"max-width":"600px"}},[t("canvas",{attrs:{id:"myChart"}})]):t("div",{staticClass:"container-sm"},[t("canvas",{attrs:{id:"myChart",width:"400",height:"125"}})]),t("br")]):e._e(),t("br"),t("h3",[e._v("Logs")]),e.logs.length?e._e():t("p",[e._v("No Logs Yet!")]),t("div",{staticClass:"table-responsive"},[e.logs.length?t("table",{staticClass:"table",staticStyle:{"text-transform":"capitalize"}},[e._m(0),t("tbody",e._l(e.logs,(function(a){return t("tr",{key:a.log_id},[t("td",[e._v(e._s(a.timestamp))]),t("td",[e._v(e._s(a.value))]),t("td",[e._v(e._s(a.note))]),t("td",[t("router-link",{staticClass:"btn btn-warning mx-2 mt-2",attrs:{to:{name:"updatelog",params:{tracker_id:e.trackername.tracker_id,log_id:a.log_id}}}},[e._v("Update")])],1),t("td",[t("button",{staticClass:"btn btn-danger mx-2 mt-2",on:{click:function(t){return e.deleteLog(a.ltracker_id,a.log_id)}}},[e._v(" Delete ")])])])})),0)]):e._e()])])])],1)},I=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[e._v("On")]),t("th",{attrs:{scope:"col"}},[e._v("Value")]),t("th",{attrs:{scope:"col"}},[e._v("Note")]),t("th",{attrs:{scope:"col"}}),t("th",{attrs:{scope:"col"}})])])}],j=a(809),$={data(){return{logs:{},trackername:{},graph:[],check:null}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},props:{tracker_id:{type:[Number,String],required:!0}},methods:{getLogs(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}/logs`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.logs=e})).catch((e=>{console.log(e)}))},getTrackerName(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.trackername=e,this.createChart(this.trackername.type)})).catch((e=>{console.log(e)}))},deleteLog(e,t){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${e}/logs/${t}`,{method:"DELETE",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((()=>{})).catch((e=>{console.log(e)}));let a=this.logs.indexOf(t);this.logs.splice(a,1)},downloadLog(e){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${e}/download`,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.blob())).then((t=>{var a=window.URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=`./export/${e}_logs.csv`,document.body.appendChild(o),o.click(),o.remove()})).catch((e=>{console.log(e)}))},createChart(e){fetch(`https://api.qself.soumyavaidya.me/api/chart/${this.tracker_id}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((t=>{if(this.graph=t,console.log(this.graph),"multiple"==e||"bool"==e){const e=document.getElementById("myChart");new j.ZP(e,{type:"doughnut",data:{labels:this.graph.options,datasets:[{label:this.graph.options,data:this.graph.count,backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(255, 159, 64)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],hoverOffset:4}],options:{scales:{y:{beginAtZero:!0}}}}})}else if("td"==e||"numerical"==e){console.log(this.graph.value);const e=document.getElementById("myChart");new j.ZP(e,{type:"line",data:{labels:this.graph.timestamp,datasets:[{label:"Values",data:this.graph.value,fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]},options:{scales:{y:{beginAtZero:!0}}}})}})).catch((e=>{console.log(e)}))}},created(){this.getLogs(),this.getTrackerName()},mounted(){}},B=$,q=(0,i.Z)(B,N,I,!1,null,null,null),F=q.exports,D=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("div",{staticClass:"container mt-4"},[t("h3",{staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(e.trackername.name))]),t("h4",[e._v("Add Log")]),t("br"),t("form",{on:{submit:function(t){return t.preventDefault(),e.insertLog.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Date and Time")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.timestamp,expression:"timestamp"}],staticClass:"form-control",attrs:{type:"datetime-local",name:"timestamp",id:"exampleFormControlInput1"},domProps:{value:e.timestamp},on:{input:function(t){t.target.composing||(e.timestamp=t.target.value)}}})]),t("br"),"numerical"==e.trackername.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Value")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{input:"",type:"number",step:"any",name:"value",id:"exampleFormControlInput1"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]):"bool"==e.trackername.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Boolean Value")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{type:"number",name:"value",min:"0",max:"1",id:"exampleFormControlInput1"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]):"td"==e.trackername.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Time Spent")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-control",attrs:{input:"",type:"time",name:"value",id:"exampleFormControlInput1"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]):"multiple"==e.trackername.type?t("div",{staticClass:"form-check form-check-inline"},e._l(e.splitComma(e.trackername.settings),(function(a){return t("div",{key:a},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio1"},domProps:{value:a,checked:e._q(e.value,a)},on:{change:function(t){e.value=a}}}),t("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e._v(e._s(a))])])})),0):e._e(),t("br"),t("br"),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Note")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"note"}],staticClass:"form-control",attrs:{type:"text",name:"note",placeholder:"Anything else you want to note!",id:"exampleFormControlInput1"},domProps:{value:e.note},on:{input:function(t){t.target.composing||(e.note=t.target.value)}}})]),t("br"),e._m(0)]),e.error?t("div",[t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[e._v(" "+e._s(e.error)+" ")])]):e._e()])],1)},E=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Log it!")])])}],H={data(){return{timestamp:null,value:null,note:null,error:null,trackername:{},s:{}}},props:{tracker_id:{type:[Number,String],required:!0}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},methods:{splitComma(e){return e.split(",")},getTrackerDetails(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.trackername=e})).catch((e=>{console.log(e)}))},insertLog(){this.value?fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}/logs`,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"},body:JSON.stringify({ltype:this.trackername.type,timestamp:this.timestamp,value:this.value,note:this.note})}).then((e=>e.json())).then((()=>{this.$router.push({name:"home"})})).catch((e=>{console.log(e)})):this.error="Please enter all fields"}},created(){this.getTrackerDetails()}},L=H,z=(0,i.Z)(L,D,E,!1,null,null,null),M=z.exports,U=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("main",{staticClass:"form-signin w-100 m-auto"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.getUserData.apply(null,arguments)}}},[t("h1",{staticClass:"h3 mb-3 fw-normal"},[e._v("Please sign in")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),t("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"}},[e._v(" Sign in ")])]),e.error?t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[e._v(" "+e._s(e.error)+" ")]):e._e()])],1)},Z=[],R=a(669),G=a.n(R),V={data(){return{username:"",password:"",error:""}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},methods:{async getUserData(){try{const e=await G().post("https://api.qself.soumyavaidya.me/api/login",{username:this.username,password:this.password});console.log(e.data),"Invalid Password"==e.data?this.error="Invalid username/ password":(localStorage.setItem("token",e.data.access_token),localStorage.setItem("is_logged_in",!0),this.$router.push({name:"home"}))}catch(e){this.error="Invalid username/ password"}}}},Y=V,J=(0,i.Z)(Y,U,Z,!1,null,null,null),W=J.exports,Q=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("main",{staticClass:"form-signin w-100 m-auto"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("h1",{staticClass:"h3 mb-3 fw-normal"},[e._v("Please register")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),t("button",{staticClass:"w-100 btn btn-lg btn-primary",attrs:{type:"submit"}},[e._v(" Submit ")])]),e.error?t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[e._v(" "+e._s(e.error)+" ")]):e._e()])],1)},K=[],X={data(){return{username:"",email:"",password:"",error:null}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},methods:{handleSubmit(){fetch("https://api.qself.soumyavaidya.me/api/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"},body:JSON.stringify({username:this.username,email:this.email,password:this.password})}).then((e=>{e.json(),console.log(e)})).then((()=>{this.$router.push({name:"login"})})).catch((e=>{console.log(e),this.error="Username/ Email already registered"}))}}},ee=X,te=(0,i.Z)(ee,Q,K,!1,null,null,null),ae=te.exports,oe=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("div",{staticClass:"container mt-4"},[t("h3",[e._v("Update Log")]),t("h4",{staticStyle:{"text-transform":"capitalize"}},[e._v(e._s(e.trackername.name))]),t("br"),t("form",{on:{submit:function(t){return t.preventDefault(),e.updateLog.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Date and Time")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.logdetails.timestamp,expression:"logdetails.timestamp"}],staticClass:"form-control",attrs:{type:"datetime-local",name:"timestamp",id:"exampleFormControlInput1"},domProps:{value:e.logdetails.timestamp},on:{input:function(t){t.target.composing||e.$set(e.logdetails,"timestamp",t.target.value)}}})]),t("br"),"numerical"==e.trackername.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Value")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.logdetails.value,expression:"logdetails.value"}],staticClass:"form-control",attrs:{input:"",type:"number",step:"any",name:"value",id:"exampleFormControlInput1"},domProps:{value:e.logdetails.value},on:{input:function(t){t.target.composing||e.$set(e.logdetails,"value",t.target.value)}}})]):"bool"==e.trackername.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Boolean Value")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.logdetails.value,expression:"logdetails.value"}],staticClass:"form-control",attrs:{type:"number",name:"value",min:"0",max:"1",id:"exampleFormControlInput1"},domProps:{value:e.logdetails.value},on:{input:function(t){t.target.composing||e.$set(e.logdetails,"value",t.target.value)}}})]):"td"==e.trackername.type?t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Time Spent")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.logdetails.value,expression:"logdetails.value"}],staticClass:"form-control",attrs:{input:"",type:"time",name:"value",id:"exampleFormControlInput1"},domProps:{value:e.logdetails.value},on:{input:function(t){t.target.composing||e.$set(e.logdetails,"value",t.target.value)}}})]):"multiple"==e.trackername.type?t("div",{staticClass:"form-check form-check-inline"},e._l(e.splitComma(e.trackername.settings),(function(a){return t("div",{key:a},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.logdetails.value,expression:"logdetails.value"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio1"},domProps:{value:a,checked:e._q(e.logdetails.value,a)},on:{change:function(t){return e.$set(e.logdetails,"value",a)}}}),t("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e._v(e._s(a))])])})),0):e._e(),t("br"),t("br"),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Note")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.logdetails.note,expression:"logdetails.note"}],staticClass:"form-control",attrs:{type:"text",name:"note",placeholder:"Anything else you want to note!",id:"exampleFormControlInput1"},domProps:{value:e.logdetails.note},on:{input:function(t){t.target.composing||e.$set(e.logdetails,"note",t.target.value)}}})]),t("br"),e._m(0)]),e.error?t("div",[t("small",{staticClass:"form-text text-muted",attrs:{id:"passwordHelpBlock"}},[e._v(" "+e._s(e.error)+" ")])]):e._e()])],1)},re=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Update!")])])}],ne={data(){return{error:null,trackername:{},s:{},logdetails:{}}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},props:{tracker_id:{type:[Number,String],required:!0},log_id:{type:[Number,String],required:!0}},methods:{splitComma(e){return e.split(",")},getTrackerDetails(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.trackername=e})).catch((e=>{console.log(e)}))},updateLog(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}/logs/${this.log_id}`,{method:"PUT",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"},body:JSON.stringify(this.logdetails)}).then((e=>e.json())).then((()=>{this.$router.push({name:"trackerlogs"})})).catch((e=>{console.log(e)}))},getLogs(){fetch(`https://api.qself.soumyavaidya.me/api/trackers/${this.tracker_id}/logs/${this.log_id}`,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{this.logdetails=e,console.log(this.logdetails)})).catch((e=>{console.log(e)}))}},created(){this.getTrackerDetails()},mounted(){this.getLogs()}},se=ne,le=(0,i.Z)(se,oe,re,!1,null,null,null),ie=le.exports,ce=function(){var e=this,t=e._self._c;return t("div",[t("NavBar"),t("div",{staticClass:"container mt-5"},[t("br"),t("h3",[e._v("Your Details:")]),t("br"),t("p",[e._v("Username: "+e._s(e.user.username))]),t("p",[e._v("Email: "+e._s(e.user.email))]),t("br"),t("br"),t("h3",[e._v("Reminders:")]),t("br"),t("p",[e._v("Would you like to recieve daily reminders?")]),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reminder,expression:"reminder"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"Yes"},domProps:{checked:this.user.webhook,checked:e._q(e.reminder,"Yes")},on:{change:function(t){e.reminder="Yes"}}}),t("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e._v(" Yes please!")]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.reminder,expression:"reminder"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions",id:"inlineRadio1",value:"No"},domProps:{checked:!this.user.webhook,checked:e._q(e.reminder,"No")},on:{change:function(t){e.reminder="No"}}}),t("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio1"}},[e._v(" Nope!")])]),t("br"),"Yes"==e.reminder?t("div",[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"exampleFormControlInput1"}},[e._v("Enter webhook: ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.webhook,expression:"user.webhook"}],staticClass:"form-control",attrs:{type:"text",name:"webhook",placeholder:"Paste your Google Chat webhook here!",required:"",id:"exampleFormControlInput1"},domProps:{value:e.user.webhook},on:{input:function(t){t.target.composing||e.$set(e.user,"webhook",t.target.value)}}}),t("br")])]):e._e(),t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary",on:{click:e.send_message}},[e._v(" Confirm! ")])])])],1)},me=[],pe={data(){return{message:"This is a QuantifiedSelf reminder!",reminder:"",user:""}},components:{NavBar:()=>a.e(712).then(a.bind(a,712))},methods:{send_message(){if("Yes"==this.reminder){let e={text:this.message};fetch(this.user.webhook,{method:"POST",body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),this.updateWebhook()})).catch((e=>console.log("Some error occured: ",e)))}else this.user.webhook=null,this.updateWebhook()},updateWebhook(){fetch("https://api.qself.soumyavaidya.me/api/webhook",{method:"PUT",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"},body:JSON.stringify(this.user)}).then((e=>e.json())).then((()=>{this.$router.go()})).catch((e=>{console.log(e)}))},getUserDetails(){fetch("https://api.qself.soumyavaidya.me/api/user",{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"}}).then((e=>e.json())).then((e=>{console.log(e),this.user=e})).catch((e=>{console.log(e)}))}},created(){this.getUserDetails()}},ue=pe,de=(0,i.Z)(ue,ce,me,!1,null,null,null),he=de.exports;o.ZP.use(p.ZP);var ve=new p.ZP({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"/login",component:W,name:"login"},{path:"/register",component:ae,name:"register"},{path:"/profile",component:he,name:"profile"},{path:"/dashboard/",component:f,name:"home"},{path:"/tracker/create",component:A,name:"createtracker"},{path:"/tracker/:tracker_id/logs",name:"trackerlogs",component:F,props:!0},{path:"/tracker/:tracker_id/logs/create",component:M,name:"createlog",props:!0},{path:"/tracker/:tracker_id/update",component:S,name:"updatetracker",props:!0},{path:"/tracker/:tracker_id/logs/:log_id/update",component:ie,name:"updatelog",props:!0}]}),ge=a(839);(0,ge.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o.ZP.config.productionTip=!1,new o.ZP({router:ve,render:function(e){return e(m)}}).$mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var s=1/0;for(m=0;m<e.length;m++){o=e[m][0],r=e[m][1],n=e[m][2];for(var l=!0,i=0;i<o.length;i++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(l=!1,n<s&&(s=n));if(l){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[o,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+".faee6392.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="hello:";a.l=function(o,r,n,s){if(e[o])e[o].push(r);else{var l,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var p=c[m];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+n){l=p;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=o),e[o]=[r];var u=function(t,a){l.onerror=l.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(a)})),t)return t(a)},d=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,o){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise((function(a,o){r=e[t]=[a,o]}));o.push(r[2]=n);var s=a.p+a.u(t),l=new Error,i=function(o){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,r[1](l)}};a.l(s,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,s=o[0],l=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var m=i(a)}for(t&&t(o);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(m)},o=self["webpackChunkhello"]=self["webpackChunkhello"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(494)}));o=a.O(o)})();
//# sourceMappingURL=app.c071b7df.js.map