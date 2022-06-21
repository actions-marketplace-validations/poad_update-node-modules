import './sourcemap-register.cjs';import{createRequire as e}from"module";var t={351:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const i=s(n(37));const a=n(278);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const c="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=c+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${c}${escapeData(this.message)}`;return e}}function escapeData(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return a.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);o(t,e);return t};var i=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.getIDToken=t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.notice=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const a=n(351);const c=n(717);const u=n(278);const l=s(n(37));const d=s(n(17));const p=n(41);var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=u.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${l.EOL}${n}${l.EOL}${t}`;c.issueCommand("ENV",r)}else{a.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){a.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){c.issueCommand("PATH",e)}else{a.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${d.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return n}return n.trim()}t.getInput=getInput;function getMultilineInput(e,t){const n=getInput(e,t).split("\n").filter((e=>e!==""));return n}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const n=["true","True","TRUE"];const r=["false","False","FALSE"];const o=getInput(e,t);if(n.includes(o))return true;if(r.includes(o))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(l.EOL);a.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){a.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){a.issueCommand("debug",{},e)}t.debug=debug;function error(e,t={}){a.issueCommand("error",u.toCommandProperties(t),e instanceof Error?e.toString():e)}t.error=error;function warning(e,t={}){a.issueCommand("warning",u.toCommandProperties(t),e instanceof Error?e.toString():e)}t.warning=warning;function notice(e,t={}){a.issueCommand("notice",u.toCommandProperties(t),e instanceof Error?e.toString():e)}t.notice=notice;function info(e){process.stdout.write(e+l.EOL)}t.info=info;function startGroup(e){a.issue("group",e)}t.startGroup=startGroup;function endGroup(){a.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return i(this,void 0,void 0,(function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n}))}t.group=group;function saveState(e,t){a.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState;function getIDToken(e){return i(this,void 0,void 0,(function*(){return yield p.OidcClient.getIDToken(e)}))}t.getIDToken=getIDToken;var h=n(327);Object.defineProperty(t,"summary",{enumerable:true,get:function(){return h.summary}});var m=n(327);Object.defineProperty(t,"markdownSummary",{enumerable:true,get:function(){return m.markdownSummary}});var g=n(981);Object.defineProperty(t,"toPosixPath",{enumerable:true,get:function(){return g.toPosixPath}});Object.defineProperty(t,"toWin32Path",{enumerable:true,get:function(){return g.toWin32Path}});Object.defineProperty(t,"toPlatformPath",{enumerable:true,get:function(){return g.toPlatformPath}})},717:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const i=s(n(147));const a=s(n(37));const c=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!i.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}i.appendFileSync(n,`${c.toCommandValue(t)}${a.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},41:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.OidcClient=void 0;const o=n(255);const s=n(526);const i=n(186);class OidcClient{static createHttpClient(e=true,t=10){const n={allowRetries:e,maxRetries:t};return new o.HttpClient("actions/oidc-client",[new s.BearerCredentialHandler(OidcClient.getRequestToken())],n)}static getRequestToken(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable")}return e}static getIDTokenUrl(){const e=process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];if(!e){throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable")}return e}static getCall(e){var t;return r(this,void 0,void 0,(function*(){const n=OidcClient.createHttpClient();const r=yield n.getJson(e).catch((e=>{throw new Error(`Failed to get ID Token. \n \n        Error Code : ${e.statusCode}\n \n        Error Message: ${e.result.message}`)}));const o=(t=r.result)===null||t===void 0?void 0:t.value;if(!o){throw new Error("Response json body do not have ID Token field")}return o}))}static getIDToken(e){return r(this,void 0,void 0,(function*(){try{let t=OidcClient.getIDTokenUrl();if(e){const n=encodeURIComponent(e);t=`${t}&audience=${n}`}i.debug(`ID token url is ${t}`);const n=yield OidcClient.getCall(t);i.setSecret(n);return n}catch(e){throw new Error(`Error message: ${e.message}`)}}))}}t.OidcClient=OidcClient},981:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);o(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.toPlatformPath=t.toWin32Path=t.toPosixPath=void 0;const i=s(n(17));function toPosixPath(e){return e.replace(/[\\]/g,"/")}t.toPosixPath=toPosixPath;function toWin32Path(e){return e.replace(/[/]/g,"\\")}t.toWin32Path=toWin32Path;function toPlatformPath(e){return e.replace(/[/\\]/g,i.sep)}t.toPlatformPath=toPlatformPath},327:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.summary=t.markdownSummary=t.SUMMARY_DOCS_URL=t.SUMMARY_ENV_VAR=void 0;const o=n(37);const s=n(147);const{access:i,appendFile:a,writeFile:c}=s.promises;t.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY";t.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";class Summary{constructor(){this._buffer=""}filePath(){return r(this,void 0,void 0,(function*(){if(this._filePath){return this._filePath}const e=process.env[t.SUMMARY_ENV_VAR];if(!e){throw new Error(`Unable to find environment variable for $${t.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`)}try{yield i(e,s.constants.R_OK|s.constants.W_OK)}catch(t){throw new Error(`Unable to access summary file: '${e}'. Check if the file has correct read/write permissions.`)}this._filePath=e;return this._filePath}))}wrap(e,t,n={}){const r=Object.entries(n).map((([e,t])=>` ${e}="${t}"`)).join("");if(!t){return`<${e}${r}>`}return`<${e}${r}>${t}</${e}>`}write(e){return r(this,void 0,void 0,(function*(){const t=!!(e===null||e===void 0?void 0:e.overwrite);const n=yield this.filePath();const r=t?c:a;yield r(n,this._buffer,{encoding:"utf8"});return this.emptyBuffer()}))}clear(){return r(this,void 0,void 0,(function*(){return this.emptyBuffer().write({overwrite:true})}))}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){this._buffer="";return this}addRaw(e,t=false){this._buffer+=e;return t?this.addEOL():this}addEOL(){return this.addRaw(o.EOL)}addCodeBlock(e,t){const n=Object.assign({},t&&{lang:t});const r=this.wrap("pre",this.wrap("code",e),n);return this.addRaw(r).addEOL()}addList(e,t=false){const n=t?"ol":"ul";const r=e.map((e=>this.wrap("li",e))).join("");const o=this.wrap(n,r);return this.addRaw(o).addEOL()}addTable(e){const t=e.map((e=>{const t=e.map((e=>{if(typeof e==="string"){return this.wrap("td",e)}const{header:t,data:n,colspan:r,rowspan:o}=e;const s=t?"th":"td";const i=Object.assign(Object.assign({},r&&{colspan:r}),o&&{rowspan:o});return this.wrap(s,n,i)})).join("");return this.wrap("tr",t)})).join("");const n=this.wrap("table",t);return this.addRaw(n).addEOL()}addDetails(e,t){const n=this.wrap("details",this.wrap("summary",e)+t);return this.addRaw(n).addEOL()}addImage(e,t,n){const{width:r,height:o}=n||{};const s=Object.assign(Object.assign({},r&&{width:r}),o&&{height:o});const i=this.wrap("img",null,Object.assign({src:e,alt:t},s));return this.addRaw(i).addEOL()}addHeading(e,t){const n=`h${t}`;const r=["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h1";const o=this.wrap(r,e);return this.addRaw(o).addEOL()}addSeparator(){const e=this.wrap("hr",null);return this.addRaw(e).addEOL()}addBreak(){const e=this.wrap("br",null);return this.addRaw(e).addEOL()}addQuote(e,t){const n=Object.assign({},t&&{cite:t});const r=this.wrap("blockquote",e,n);return this.addRaw(r).addEOL()}addLink(e,t){const n=this.wrap("a",e,{href:t});return this.addRaw(n).addEOL()}}const u=new Summary;t.markdownSummary=u;t.summary=u},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.toCommandProperties=t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue;function toCommandProperties(e){if(!Object.keys(e).length){return{}}return{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}}t.toCommandProperties=toCommandProperties},526:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.PersonalAccessTokenCredentialHandler=t.BearerCredentialHandler=t.BasicCredentialHandler=void 0;class BasicCredentialHandler{constructor(e,t){this.username=e;this.password=t}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return false}handleAuthentication(){return n(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.BasicCredentialHandler=BasicCredentialHandler;class BearerCredentialHandler{constructor(e){this.token=e}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Bearer ${this.token}`}canHandleAuthentication(){return false}handleAuthentication(){return n(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.BearerCredentialHandler=BearerCredentialHandler;class PersonalAccessTokenCredentialHandler{constructor(e){this.token=e}prepareRequest(e){if(!e.headers){throw Error("The request has no headers")}e.headers["Authorization"]=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return false}handleAuthentication(){return n(this,void 0,void 0,(function*(){throw new Error("not implemented")}))}}t.PersonalAccessTokenCredentialHandler=PersonalAccessTokenCredentialHandler},255:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){if(r===undefined)r=n;Object.defineProperty(e,r,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,r){if(r===undefined)r=n;e[r]=t[n]});var o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))r(t,e,n);o(t,e);return t};var i=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function fulfilled(e){try{step(r.next(e))}catch(e){o(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){o(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:true});t.HttpClient=t.isHttps=t.HttpClientResponse=t.HttpClientError=t.getProxyUrl=t.MediaTypes=t.Headers=t.HttpCodes=void 0;const a=s(n(685));const c=s(n(687));const u=s(n(835));const l=s(n(294));var d;(function(e){e[e["OK"]=200]="OK";e[e["MultipleChoices"]=300]="MultipleChoices";e[e["MovedPermanently"]=301]="MovedPermanently";e[e["ResourceMoved"]=302]="ResourceMoved";e[e["SeeOther"]=303]="SeeOther";e[e["NotModified"]=304]="NotModified";e[e["UseProxy"]=305]="UseProxy";e[e["SwitchProxy"]=306]="SwitchProxy";e[e["TemporaryRedirect"]=307]="TemporaryRedirect";e[e["PermanentRedirect"]=308]="PermanentRedirect";e[e["BadRequest"]=400]="BadRequest";e[e["Unauthorized"]=401]="Unauthorized";e[e["PaymentRequired"]=402]="PaymentRequired";e[e["Forbidden"]=403]="Forbidden";e[e["NotFound"]=404]="NotFound";e[e["MethodNotAllowed"]=405]="MethodNotAllowed";e[e["NotAcceptable"]=406]="NotAcceptable";e[e["ProxyAuthenticationRequired"]=407]="ProxyAuthenticationRequired";e[e["RequestTimeout"]=408]="RequestTimeout";e[e["Conflict"]=409]="Conflict";e[e["Gone"]=410]="Gone";e[e["TooManyRequests"]=429]="TooManyRequests";e[e["InternalServerError"]=500]="InternalServerError";e[e["NotImplemented"]=501]="NotImplemented";e[e["BadGateway"]=502]="BadGateway";e[e["ServiceUnavailable"]=503]="ServiceUnavailable";e[e["GatewayTimeout"]=504]="GatewayTimeout"})(d=t.HttpCodes||(t.HttpCodes={}));var p;(function(e){e["Accept"]="accept";e["ContentType"]="content-type"})(p=t.Headers||(t.Headers={}));var f;(function(e){e["ApplicationJson"]="application/json"})(f=t.MediaTypes||(t.MediaTypes={}));function getProxyUrl(e){const t=u.getProxyUrl(new URL(e));return t?t.href:""}t.getProxyUrl=getProxyUrl;const h=[d.MovedPermanently,d.ResourceMoved,d.SeeOther,d.TemporaryRedirect,d.PermanentRedirect];const m=[d.BadGateway,d.ServiceUnavailable,d.GatewayTimeout];const g=["OPTIONS","GET","DELETE","HEAD"];const v=10;const y=5;class HttpClientError extends Error{constructor(e,t){super(e);this.name="HttpClientError";this.statusCode=t;Object.setPrototypeOf(this,HttpClientError.prototype)}}t.HttpClientError=HttpClientError;class HttpClientResponse{constructor(e){this.message=e}readBody(){return i(this,void 0,void 0,(function*(){return new Promise((e=>i(this,void 0,void 0,(function*(){let t=Buffer.alloc(0);this.message.on("data",(e=>{t=Buffer.concat([t,e])}));this.message.on("end",(()=>{e(t.toString())}))}))))}))}}t.HttpClientResponse=HttpClientResponse;function isHttps(e){const t=new URL(e);return t.protocol==="https:"}t.isHttps=isHttps;class HttpClient{constructor(e,t,n){this._ignoreSslError=false;this._allowRedirects=true;this._allowRedirectDowngrade=false;this._maxRedirects=50;this._allowRetries=false;this._maxRetries=1;this._keepAlive=false;this._disposed=false;this.userAgent=e;this.handlers=t||[];this.requestOptions=n;if(n){if(n.ignoreSslError!=null){this._ignoreSslError=n.ignoreSslError}this._socketTimeout=n.socketTimeout;if(n.allowRedirects!=null){this._allowRedirects=n.allowRedirects}if(n.allowRedirectDowngrade!=null){this._allowRedirectDowngrade=n.allowRedirectDowngrade}if(n.maxRedirects!=null){this._maxRedirects=Math.max(n.maxRedirects,0)}if(n.keepAlive!=null){this._keepAlive=n.keepAlive}if(n.allowRetries!=null){this._allowRetries=n.allowRetries}if(n.maxRetries!=null){this._maxRetries=n.maxRetries}}}options(e,t){return i(this,void 0,void 0,(function*(){return this.request("OPTIONS",e,null,t||{})}))}get(e,t){return i(this,void 0,void 0,(function*(){return this.request("GET",e,null,t||{})}))}del(e,t){return i(this,void 0,void 0,(function*(){return this.request("DELETE",e,null,t||{})}))}post(e,t,n){return i(this,void 0,void 0,(function*(){return this.request("POST",e,t,n||{})}))}patch(e,t,n){return i(this,void 0,void 0,(function*(){return this.request("PATCH",e,t,n||{})}))}put(e,t,n){return i(this,void 0,void 0,(function*(){return this.request("PUT",e,t,n||{})}))}head(e,t){return i(this,void 0,void 0,(function*(){return this.request("HEAD",e,null,t||{})}))}sendStream(e,t,n,r){return i(this,void 0,void 0,(function*(){return this.request(e,t,n,r)}))}getJson(e,t={}){return i(this,void 0,void 0,(function*(){t[p.Accept]=this._getExistingOrDefaultHeader(t,p.Accept,f.ApplicationJson);const n=yield this.get(e,t);return this._processResponse(n,this.requestOptions)}))}postJson(e,t,n={}){return i(this,void 0,void 0,(function*(){const r=JSON.stringify(t,null,2);n[p.Accept]=this._getExistingOrDefaultHeader(n,p.Accept,f.ApplicationJson);n[p.ContentType]=this._getExistingOrDefaultHeader(n,p.ContentType,f.ApplicationJson);const o=yield this.post(e,r,n);return this._processResponse(o,this.requestOptions)}))}putJson(e,t,n={}){return i(this,void 0,void 0,(function*(){const r=JSON.stringify(t,null,2);n[p.Accept]=this._getExistingOrDefaultHeader(n,p.Accept,f.ApplicationJson);n[p.ContentType]=this._getExistingOrDefaultHeader(n,p.ContentType,f.ApplicationJson);const o=yield this.put(e,r,n);return this._processResponse(o,this.requestOptions)}))}patchJson(e,t,n={}){return i(this,void 0,void 0,(function*(){const r=JSON.stringify(t,null,2);n[p.Accept]=this._getExistingOrDefaultHeader(n,p.Accept,f.ApplicationJson);n[p.ContentType]=this._getExistingOrDefaultHeader(n,p.ContentType,f.ApplicationJson);const o=yield this.patch(e,r,n);return this._processResponse(o,this.requestOptions)}))}request(e,t,n,r){return i(this,void 0,void 0,(function*(){if(this._disposed){throw new Error("Client has already been disposed.")}const o=new URL(t);let s=this._prepareRequest(e,o,r);const i=this._allowRetries&&g.includes(e)?this._maxRetries+1:1;let a=0;let c;do{c=yield this.requestRaw(s,n);if(c&&c.message&&c.message.statusCode===d.Unauthorized){let e;for(const t of this.handlers){if(t.canHandleAuthentication(c)){e=t;break}}if(e){return e.handleAuthentication(this,s,n)}else{return c}}let t=this._maxRedirects;while(c.message.statusCode&&h.includes(c.message.statusCode)&&this._allowRedirects&&t>0){const i=c.message.headers["location"];if(!i){break}const a=new URL(i);if(o.protocol==="https:"&&o.protocol!==a.protocol&&!this._allowRedirectDowngrade){throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.")}yield c.readBody();if(a.hostname!==o.hostname){for(const e in r){if(e.toLowerCase()==="authorization"){delete r[e]}}}s=this._prepareRequest(e,a,r);c=yield this.requestRaw(s,n);t--}if(!c.message.statusCode||!m.includes(c.message.statusCode)){return c}a+=1;if(a<i){yield c.readBody();yield this._performExponentialBackoff(a)}}while(a<i);return c}))}dispose(){if(this._agent){this._agent.destroy()}this._disposed=true}requestRaw(e,t){return i(this,void 0,void 0,(function*(){return new Promise(((n,r)=>{function callbackForResult(e,t){if(e){r(e)}else if(!t){r(new Error("Unknown error"))}else{n(t)}}this.requestRawWithCallback(e,t,callbackForResult)}))}))}requestRawWithCallback(e,t,n){if(typeof t==="string"){if(!e.options.headers){e.options.headers={}}e.options.headers["Content-Length"]=Buffer.byteLength(t,"utf8")}let r=false;function handleResult(e,t){if(!r){r=true;n(e,t)}}const o=e.httpModule.request(e.options,(e=>{const t=new HttpClientResponse(e);handleResult(undefined,t)}));let s;o.on("socket",(e=>{s=e}));o.setTimeout(this._socketTimeout||3*6e4,(()=>{if(s){s.end()}handleResult(new Error(`Request timeout: ${e.options.path}`))}));o.on("error",(function(e){handleResult(e)}));if(t&&typeof t==="string"){o.write(t,"utf8")}if(t&&typeof t!=="string"){t.on("close",(function(){o.end()}));t.pipe(o)}else{o.end()}}getAgent(e){const t=new URL(e);return this._getAgent(t)}_prepareRequest(e,t,n){const r={};r.parsedUrl=t;const o=r.parsedUrl.protocol==="https:";r.httpModule=o?c:a;const s=o?443:80;r.options={};r.options.host=r.parsedUrl.hostname;r.options.port=r.parsedUrl.port?parseInt(r.parsedUrl.port):s;r.options.path=(r.parsedUrl.pathname||"")+(r.parsedUrl.search||"");r.options.method=e;r.options.headers=this._mergeHeaders(n);if(this.userAgent!=null){r.options.headers["user-agent"]=this.userAgent}r.options.agent=this._getAgent(r.parsedUrl);if(this.handlers){for(const e of this.handlers){e.prepareRequest(r.options)}}return r}_mergeHeaders(e){if(this.requestOptions&&this.requestOptions.headers){return Object.assign({},lowercaseKeys(this.requestOptions.headers),lowercaseKeys(e||{}))}return lowercaseKeys(e||{})}_getExistingOrDefaultHeader(e,t,n){let r;if(this.requestOptions&&this.requestOptions.headers){r=lowercaseKeys(this.requestOptions.headers)[t]}return e[t]||r||n}_getAgent(e){let t;const n=u.getProxyUrl(e);const r=n&&n.hostname;if(this._keepAlive&&r){t=this._proxyAgent}if(this._keepAlive&&!r){t=this._agent}if(t){return t}const o=e.protocol==="https:";let s=100;if(this.requestOptions){s=this.requestOptions.maxSockets||a.globalAgent.maxSockets}if(n&&n.hostname){const e={maxSockets:s,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(n.username||n.password)&&{proxyAuth:`${n.username}:${n.password}`}),{host:n.hostname,port:n.port})};let r;const i=n.protocol==="https:";if(o){r=i?l.httpsOverHttps:l.httpsOverHttp}else{r=i?l.httpOverHttps:l.httpOverHttp}t=r(e);this._proxyAgent=t}if(this._keepAlive&&!t){const e={keepAlive:this._keepAlive,maxSockets:s};t=o?new c.Agent(e):new a.Agent(e);this._agent=t}if(!t){t=o?c.globalAgent:a.globalAgent}if(o&&this._ignoreSslError){t.options=Object.assign(t.options||{},{rejectUnauthorized:false})}return t}_performExponentialBackoff(e){return i(this,void 0,void 0,(function*(){e=Math.min(v,e);const t=y*Math.pow(2,e);return new Promise((e=>setTimeout((()=>e()),t)))}))}_processResponse(e,t){return i(this,void 0,void 0,(function*(){return new Promise(((n,r)=>i(this,void 0,void 0,(function*(){const o=e.message.statusCode||0;const s={statusCode:o,result:null,headers:{}};if(o===d.NotFound){n(s)}function dateTimeDeserializer(e,t){if(typeof t==="string"){const e=new Date(t);if(!isNaN(e.valueOf())){return e}}return t}let i;let a;try{a=yield e.readBody();if(a&&a.length>0){if(t&&t.deserializeDates){i=JSON.parse(a,dateTimeDeserializer)}else{i=JSON.parse(a)}s.result=i}s.headers=e.message.headers}catch(e){}if(o>299){let e;if(i&&i.message){e=i.message}else if(a&&a.length>0){e=a}else{e=`Failed request: (${o})`}const t=new HttpClientError(e,o);t.result=s.result;r(t)}else{n(s)}}))))}))}}t.HttpClient=HttpClient;const lowercaseKeys=e=>Object.keys(e).reduce(((t,n)=>(t[n.toLowerCase()]=e[n],t)),{})},835:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.checkBypass=t.getProxyUrl=void 0;function getProxyUrl(e){const t=e.protocol==="https:";if(checkBypass(e)){return undefined}const n=(()=>{if(t){return process.env["https_proxy"]||process.env["HTTPS_PROXY"]}else{return process.env["http_proxy"]||process.env["HTTP_PROXY"]}})();if(n){return new URL(n)}else{return undefined}}t.getProxyUrl=getProxyUrl;function checkBypass(e){if(!e.hostname){return false}const t=process.env["no_proxy"]||process.env["NO_PROXY"]||"";if(!t){return false}let n;if(e.port){n=Number(e.port)}else if(e.protocol==="http:"){n=80}else if(e.protocol==="https:"){n=443}const r=[e.hostname.toUpperCase()];if(typeof n==="number"){r.push(`${r[0]}:${n}`)}for(const e of t.split(",").map((e=>e.trim().toUpperCase())).filter((e=>e))){if(r.some((t=>t===e))){return true}}return false}t.checkBypass=checkBypass},294:(e,t,n)=>{e.exports=n(219)},219:(e,t,n)=>{var r=n(808);var o=n(404);var s=n(685);var i=n(687);var a=n(361);var c=n(491);var u=n(837);t.httpOverHttp=httpOverHttp;t.httpsOverHttp=httpsOverHttp;t.httpOverHttps=httpOverHttps;t.httpsOverHttps=httpsOverHttps;function httpOverHttp(e){var t=new TunnelingAgent(e);t.request=s.request;return t}function httpsOverHttp(e){var t=new TunnelingAgent(e);t.request=s.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function httpOverHttps(e){var t=new TunnelingAgent(e);t.request=i.request;return t}function httpsOverHttps(e){var t=new TunnelingAgent(e);t.request=i.request;t.createSocket=createSecureSocket;t.defaultPort=443;return t}function TunnelingAgent(e){var t=this;t.options=e||{};t.proxyOptions=t.options.proxy||{};t.maxSockets=t.options.maxSockets||s.Agent.defaultMaxSockets;t.requests=[];t.sockets=[];t.on("free",(function onFree(e,n,r,o){var s=toOptions(n,r,o);for(var i=0,a=t.requests.length;i<a;++i){var c=t.requests[i];if(c.host===s.host&&c.port===s.port){t.requests.splice(i,1);c.request.onSocket(e);return}}e.destroy();t.removeSocket(e)}))}u.inherits(TunnelingAgent,a.EventEmitter);TunnelingAgent.prototype.addRequest=function addRequest(e,t,n,r){var o=this;var s=mergeOptions({request:e},o.options,toOptions(t,n,r));if(o.sockets.length>=this.maxSockets){o.requests.push(s);return}o.createSocket(s,(function(t){t.on("free",onFree);t.on("close",onCloseOrRemove);t.on("agentRemove",onCloseOrRemove);e.onSocket(t);function onFree(){o.emit("free",t,s)}function onCloseOrRemove(e){o.removeSocket(t);t.removeListener("free",onFree);t.removeListener("close",onCloseOrRemove);t.removeListener("agentRemove",onCloseOrRemove)}}))};TunnelingAgent.prototype.createSocket=function createSocket(e,t){var n=this;var r={};n.sockets.push(r);var o=mergeOptions({},n.proxyOptions,{method:"CONNECT",path:e.host+":"+e.port,agent:false,headers:{host:e.host+":"+e.port}});if(e.localAddress){o.localAddress=e.localAddress}if(o.proxyAuth){o.headers=o.headers||{};o.headers["Proxy-Authorization"]="Basic "+new Buffer(o.proxyAuth).toString("base64")}l("making CONNECT request");var s=n.request(o);s.useChunkedEncodingByDefault=false;s.once("response",onResponse);s.once("upgrade",onUpgrade);s.once("connect",onConnect);s.once("error",onError);s.end();function onResponse(e){e.upgrade=true}function onUpgrade(e,t,n){process.nextTick((function(){onConnect(e,t,n)}))}function onConnect(o,i,a){s.removeAllListeners();i.removeAllListeners();if(o.statusCode!==200){l("tunneling socket could not be established, statusCode=%d",o.statusCode);i.destroy();var c=new Error("tunneling socket could not be established, "+"statusCode="+o.statusCode);c.code="ECONNRESET";e.request.emit("error",c);n.removeSocket(r);return}if(a.length>0){l("got illegal response body from proxy");i.destroy();var c=new Error("got illegal response body from proxy");c.code="ECONNRESET";e.request.emit("error",c);n.removeSocket(r);return}l("tunneling connection has established");n.sockets[n.sockets.indexOf(r)]=i;return t(i)}function onError(t){s.removeAllListeners();l("tunneling socket could not be established, cause=%s\n",t.message,t.stack);var o=new Error("tunneling socket could not be established, "+"cause="+t.message);o.code="ECONNRESET";e.request.emit("error",o);n.removeSocket(r)}};TunnelingAgent.prototype.removeSocket=function removeSocket(e){var t=this.sockets.indexOf(e);if(t===-1){return}this.sockets.splice(t,1);var n=this.requests.shift();if(n){this.createSocket(n,(function(e){n.request.onSocket(e)}))}};function createSecureSocket(e,t){var n=this;TunnelingAgent.prototype.createSocket.call(n,e,(function(r){var s=e.request.getHeader("host");var i=mergeOptions({},n.options,{socket:r,servername:s?s.replace(/:.*$/,""):e.host});var a=o.connect(0,i);n.sockets[n.sockets.indexOf(r)]=a;t(a)}))}function toOptions(e,t,n){if(typeof e==="string"){return{host:e,port:t,localAddress:n}}return e}function mergeOptions(e){for(var t=1,n=arguments.length;t<n;++t){var r=arguments[t];if(typeof r==="object"){var o=Object.keys(r);for(var s=0,i=o.length;s<i;++s){var a=o[s];if(r[a]!==undefined){e[a]=r[a]}}}}return e}var l;if(process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)){l=function(){var e=Array.prototype.slice.call(arguments);if(typeof e[0]==="string"){e[0]="TUNNEL: "+e[0]}else{e.unshift("TUNNEL:")}console.error.apply(console,e)}}else{l=function(){}}t.debug=l},491:t=>{t.exports=e(import.meta.url)("assert")},361:t=>{t.exports=e(import.meta.url)("events")},147:t=>{t.exports=e(import.meta.url)("fs")},685:t=>{t.exports=e(import.meta.url)("http")},687:t=>{t.exports=e(import.meta.url)("https")},808:t=>{t.exports=e(import.meta.url)("net")},37:t=>{t.exports=e(import.meta.url)("os")},17:t=>{t.exports=e(import.meta.url)("path")},404:t=>{t.exports=e(import.meta.url)("tls")},837:t=>{t.exports=e(import.meta.url)("util")}};var n={};function __nccwpck_require__(e){var r=n[e];if(r!==undefined){return r.exports}var o=n[e]={exports:{}};var s=true;try{t[e].call(o.exports,o,o.exports,__nccwpck_require__);s=false}finally{if(s)delete n[e]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=new URL(".",import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/)?1:0,-1)+"/";var r={};(()=>{var t=__nccwpck_require__(186);var n=__nccwpck_require__(147);var r=__nccwpck_require__(17);const o=e(import.meta.url)("child_process");const s={npm:{install:{dependencies:["install"],devDependencies:["install","--save-dev"],peerDependencies:["install","--save-peer"],optionalDependencies:["install","--save-optional"]},remove:{dependencies:["uninstall"],devDependencies:["uninstall"],peerDependencies:["uninstall"],optionalDependencies:["uninstall"]}},yarn:{install:{dependencies:["add"],devDependencies:["add","-D"],peerDependencies:["add","-P"],optionalDependencies:["add","-O"]},remove:{dependencies:["remove"],devDependencies:["remove"],peerDependencies:["remove"],optionalDependencies:["remove"]}}};const errHandler=e=>{t.error(e.message);t.setFailed(e.message)};const getInput=e=>{const n=t.getInput(e.name,e.options);return n||e.defaultValue};const getBooleanInput=e=>{const n=t.getBooleanInput(e.name,e.options);return n||e.defaultValue||false};async function run(){const e=getBooleanInput({name:"yarn",options:{required:false}});const i=getInput({name:"path",options:{required:false},defaultValue:"./package.json"});const a=getBooleanInput({name:"debug",options:{required:false}});const c=getInput({name:"ignore",options:{required:false},defaultValue:"[]"});t.info(`yarn: ${e}`);t.info(`targetPath: ${i}`);t.info(`debug: ${a}`);t.info(`ignore: ${c}`);const u=c!==undefined?JSON.parse(c):[];if(!n.existsSync(i)){throw new Error(`No such file ${i}.`)}const l=n.statSync(i,{throwIfNoEntry:true});if(l===undefined){throw new Error(`Can not access to ${i}.`)}if(!l.isFile()&&!n.existsSync(r.join(i,"package.json"))){throw new Error(`No such file ${r.join(i,"package.json")}.`)}const d=l.isFile()?i:r.join(i,"package.json");const p=r.resolve(d);const f=r.dirname(p);t.info(`work dir: ${f}`);const h=e===true?s.yarn:s.npm;const m=JSON.parse(n.readFileSync(p).toString());const{devDependencies:g,peerDependencies:v,optionalDependencies:y,dependencies:w}=m;const _=o.execFileSync("which",[e===true?"yarn":"npm"],{cwd:f,windowsHide:true,shell:false}).toString().trim();t.debug(JSON.stringify(u));const O=[Object.keys(g||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.remove.devDependencies.concat(Object.keys(g||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[],Object.keys(v||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.remove.peerDependencies.concat(Object.keys(v||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[],Object.keys(y||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.remove.optionalDependencies.concat(Object.keys(y||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[],Object.keys(w||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.remove.dependencies.concat(Object.keys(w||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[]].filter((e=>e.length>0));const b=[Object.keys(g||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.install.devDependencies.concat(Object.keys(g||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[],Object.keys(v||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.install.peerDependencies.concat(Object.keys(v||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[],Object.keys(y||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.install.optionalDependencies.concat(Object.keys(y||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[],Object.keys(w||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).length>0?h.install.dependencies.concat(Object.keys(w||{}).filter((e=>u.findIndex((t=>t===e))!==-1)).map((e=>`${e}@${g[e]}`))):[]].filter((e=>e.length>0));const C=[Object.keys(g||{}).filter((e=>u.findIndex((t=>t===e))===-1)).length>0?h.install.devDependencies.concat(Object.keys(g||{}).filter((e=>u.findIndex((t=>t===e))===-1))):[],Object.keys(v||{}).filter((e=>u.findIndex((t=>t===e))===-1)).length>0?h.install.peerDependencies.concat(Object.keys(v||{}).filter((e=>u.findIndex((t=>t===e))===-1))):[],Object.keys(y||{}).filter((e=>u.findIndex((t=>t===e))===-1)).length>0?h.install.optionalDependencies.concat(Object.keys(y||{}).filter((e=>u.findIndex((t=>t===e))===-1))):[],Object.keys(w||{}).filter((e=>u.findIndex((t=>t===e))===-1)).length>0?h.install.dependencies.concat(Object.keys(w||{}).filter((e=>u.findIndex((t=>t===e))===-1))):[],e===true?["upgrade"]:["update"]].filter((e=>e.length>0));o.execFileSync(_,["install"],{cwd:f,windowsHide:true,shell:false});C.filter((e=>e.length>0)).forEach((e=>{if(a){t.debug(`command: ${JSON.stringify([_].concat(e))}`)}o.execFileSync(_,e,{cwd:f,windowsHide:true,shell:false})}));[O,b].forEach((e=>{e.forEach((e=>{if(a){t.debug(`command: ${JSON.stringify([_].concat(e))}`)}}))}))}Promise.resolve(run()).catch((e=>errHandler(e)))})();
//# sourceMappingURL=index.js.map