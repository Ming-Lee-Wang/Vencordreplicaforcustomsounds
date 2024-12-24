// Vencord 48a9aef2
// Standalone: false
// Platform: linux
// Updater Disabled: false
"use strict";var dr=Object.create;var xe=Object.defineProperty;var vr=Object.getOwnPropertyDescriptor;var mr=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,yr=Object.prototype.hasOwnProperty;var v=(e,t)=>()=>(e&&(t=e(e=0)),t);var oe=(e,t)=>{for(var n in t)xe(e,n,{get:t[n],enumerable:!0})},wt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of mr(t))!yr.call(e,r)&&r!==n&&xe(e,r,{get:()=>t[r],enumerable:!(i=vr(t,r))||i.enumerable});return e};var ze=(e,t,n)=>(n=e!=null?dr(Ir(e)):{},wt(t||!e||!e.__esModule?xe(n,"default",{value:e,enumerable:!0}):n,e)),St=e=>wt(xe({},"__esModule",{value:!0}),e);var c=v(()=>{"use strict"});var me=v(()=>{"use strict";c()});function Ie(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var Tt=v(()=>{"use strict";c()});var Tr={};function ae(...e){let t={cwd:Dt};return Be?Ue("flatpak-spawn",["--host","git",...e],t):Ue("git",e,t)}async function Ar(){return(await ae("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function Cr(){await ae("fetch");let e=(await ae("branch","--show-current")).stdout.trim();if(!((await ae("ls-remote","origin",e)).stdout.length>0))return[];let i=(await ae("log",`HEAD...origin/${e}`,"--pretty=format:%an/%h/%s")).stdout.trim();return i?i.split(`
`).map(r=>{let[a,o,...s]=r.split("/");return{hash:o,author:a,message:s.join("/").split(`
`)[0]}}):[]}async function wr(){return(await ae("pull")).stdout.includes("Fast-forward")}async function Sr(){return!(await Ue(Be?"flatpak-spawn":"node",Be?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:Dt})).stderr.includes("Build failed")}var bt,ye,xt,Et,Dt,Ue,Be,Pt=v(()=>{"use strict";c();me();bt=require("child_process"),ye=require("electron"),xt=require("path"),Et=require("util");Tt();Dt=(0,xt.join)(__dirname,".."),Ue=(0,Et.promisify)(bt.execFile),Be=!!process.env.FLATPAK_ID;ye.ipcMain.handle("VencordGetRepo",Ie(Ar));ye.ipcMain.handle("VencordGetUpdates",Ie(Cr));ye.ipcMain.handle("VencordUpdate",Ie(wr));ye.ipcMain.handle("VencordBuild",Ie(Sr))});var Rt=v(()=>{"use strict";c();Pt()});function _t(e,t,n,i){return BigInt(e)|BigInt(t)<<16n|BigInt(n)<<32n|BigInt(i)<<48n}function U(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function A(e,t){return e<<t&br|e>>Mt-t}function u(e){return BigInt.asUintN(64,e)}function Nt(e,t=0){return new Fe(t).update(e).digest()}var y,S,kt,Ae,Ot,Mt,br,xr,Fe,Lt=v(()=>{c();y=11400714785074694791n,S=14029467366897019727n,kt=1609587929392839161n,Ae=9650029242287828579n,Ot=2870177450012600261n,Mt=64n,br=2n**Mt-1n,xr=new TextEncoder;Fe=class{#t;#n;#r;#i;#o;#a;#s;#e;constructor(t=0){this.reset(t)}reset(t=this.#t){return this.#t=BigInt.asUintN(32,BigInt(t)),this.#n=u(this.#t+y+S),this.#r=u(this.#t+S),this.#i=this.#t,this.#o=u(this.#t-y),this.#a=null,this.#s=0,this.#e=0,this}update(t){typeof t=="string"&&(t=xr.encode(t));let n=0,i=t.length,r=n+i;if(i===0)return this;if(this.#s+=i,this.#e===0&&(this.#a=new Uint8Array(32)),this.#e+i<32)return this.#a.set(t.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#a.set(t.subarray(0,32-this.#e),this.#e);let a=0,o;o=U(this.#a,a),this.#n=u(A(u(this.#n+o*S),31n)*y),a+=8,o=U(this.memory,a),this.#r=u(A(u(this.#r+o*S),31n)*y),a+=8,o=U(this.memory,a),this.#i=u(A(u(this.#i+o*S),31n)*y),a+=8,o=U(this.memory,a),this.#o=u(A(u(this.#o+o*S),31n)*y),n+=32-this.#e,this.#e=0}if(n<=r-32){let a=r-32;do{let o;o=U(t,n),this.#n=u(A(u(this.#n+o*S),31n)*y),n+=8,o=U(t,n),this.#r=u(A(u(this.#r+o*S),31n)*y),n+=8,o=U(t,n),this.#i=u(A(u(this.#i+o*S),31n)*y),n+=8,o=U(t,n),this.#o=u(A(u(this.#o+o*S),31n)*y),n+=8}while(n<=a)}return n<r&&(this.#a.set(t.subarray(n,r),this.#e),this.#e=r-n),this}digest(){let t=this.#a,n=this.#e,i=0,r=0n,a=0n,o=0n;for(this.#s>=32?(r=A(this.#n,1n)+A(this.#r,7n)+A(this.#i,12n)+A(this.#o,18n),r=u(r^A(u(this.#n*S),31n)*y),r=u(r*y+Ae),r=u(r^A(u(this.#r*S),31n)*y),r=u(r*y+Ae),r=u(r^A(u(this.#i*S),31n)*y),r=u(r*y+Ae),r=u(r^A(u(this.#o*S),31n)*y),r=u(r*y+Ae)):r=u(this.#t+Ot),r+=BigInt(this.#s);i<=n-8;)o=U(t,i),o=u(A(u(o*S),31n)*y),r=u(A(r^o,27n)*y+Ae),i+=8;for(i+4<=n&&(o=_t(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),r=u(A(r^u(o*y),23n)*S+kt),i+=4);i<n;)o=_t(t[i++],0,0,0),r=u(A(r^u(o*Ot),11n)*y);return a=u(r>>33n),r=u((r^a)*S),a=u(r>>29n),r=u((r^a)*kt),a=u(r>>32n),r=u(r^a),r}}});function Dr(e){e=BigInt(e);let t=[],n=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let r=0;r<n;r++)t.unshift(Number(e>>BigInt(8*r)&BigInt(255)));let i=new Uint8Array(t);return Er?i:i.reverse()}function Gt(e){let t=Nt(e,0),n=Dr(t);return[se[n[0]>>2],se[(n[0]&3)<<4|n[1]>>4],se[(n[1]&15)<<2|n[2]>>6],se[n[2]&63],se[n[3]>>2],se[(n[3]&3)<<4|n[3]>>4]].join("")}var se,Er,Vt=v(()=>{"use strict";c();Lt();se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),Er=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})()});function zt(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(i,r,a)=>{let o=a==="raw"?r:Gt(r),s=typeof e=="string";return!Number.isNaN(Number(o[0]))||o.includes("+")||o.includes("/")?s?`["${o}"]`:String.raw`(?:\["${o}"\])`.replaceAll("+","\\+"):s?`.${o}`:String.raw`(?:\.${o})`}),typeof e=="string")return t;let n=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`);return new RegExp(n,e.flags)}var Ut=v(()=>{"use strict";c();Vt()});var Ke={};oe(Ke,{fetchTrackData:()=>_r});async function Ze(e){let{stdout:t}=await Ft("osascript",e.map(n=>["-e",n]).flat());return t}async function Or({id:e,name:t,artist:n,album:i}){if(e===_?.id){if("data"in _)return _.data;if("failures"in _&&_.failures>=5)return null}try{let r=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");r.searchParams.set("platform","web"),r.searchParams.set("l","en-US"),r.searchParams.set("limit","1"),r.searchParams.set("with","serverBubbles"),r.searchParams.set("types","songs"),r.searchParams.set("term",`${t} ${n} ${i}`),r.searchParams.set("include[songs]","artists");let a=await kr(),o=await fetch(r,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${a}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(s=>s.json()).then(s=>s.results.song.data[0]);return _={id:e,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},_.data}catch(r){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",r),_={id:e,failures:(e===_?.id&&"failures"in _?_.failures:0)+1},null}}async function _r(){try{await Ft("pgrep",["^Music$"])}catch{return null}if(await Ze(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let t=await Ze(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),n=await Ze(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,r,a,o,s]=n.split(`
`).filter(f=>!!f),h=Number.parseFloat(s),d=await Or({id:i,name:r,artist:o,album:a});return{name:r,album:a,artist:o,playerPosition:t,duration:h,...d}}var Bt,jt,Ft,_,Pr,Rr,We,kr,Zt=v(()=>{"use strict";c();Ut();Bt=require("child_process"),jt=require("util"),Ft=(0,jt.promisify)(Bt.execFile);_=null,Pr=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,Rr=zt(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),kr=async()=>{if(We)return We;let e=await fetch("https://music.apple.com/").then(r=>r.text()),t=new URL(e.match(Pr)[1],"https://music.apple.com/"),i=(await fetch(t).then(r=>r.text())).match(Rr)[1];return We=i,i}});var He={};oe(He,{initDevtoolsOpenEagerLoad:()=>Mr});function Mr(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Wt=v(()=>{"use strict";c()});var Ce,Kt=v(()=>{"use strict";c();Ce=class{pathListeners=new Map;globalListeners=new Set;constructor(t,n={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,n)}makeProxy(t,n=t,i=""){let r=this;return new Proxy(t,{get(a,o){let s=a[o];return!(o in a)&&r.getDefaultValue&&(s=r.getDefaultValue({target:a,key:o,root:n,path:i})),typeof s=="object"&&s!==null&&!Array.isArray(s)?r.makeProxy(s,n,`${i}${i&&"."}${o}`):s},set(a,o,s){if(a[o]===s)return!0;Reflect.set(a,o,s);let h=`${i}${i&&"."}${o}`;return r.globalListeners.forEach(d=>d(s,h)),r.pathListeners.get(h)?.forEach(d=>d(s)),!0}})}setData(t,n){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),n){let i=t,r=n.split(".");for(let a of r){if(!i){console.warn(`Settings#setData: Path ${n} does not exist in new data. Not dispatching update`);return}i=i[a]}this.pathListeners.get(n)?.forEach(a=>a(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,n){let i=this.pathListeners.get(t)??new Set;i.add(n),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,n){let i=this.pathListeners.get(t);!i||(i.delete(n),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function Ye(e,t){for(let n in t){let i=t[n];typeof i=="object"&&!Array.isArray(i)?(e[n]??={},Ye(e[n],i)):e[n]??=i}return e}var Ht=v(()=>{"use strict";c()});var Yt,Z,Ee,ce,W,le,Je,$e,Jt,De,ue=v(()=>{"use strict";c();Yt=require("electron"),Z=require("path"),Ee=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,Z.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,Z.join)(Yt.app.getPath("userData"),"..","Vencord")),ce=(0,Z.join)(Ee,"settings"),W=(0,Z.join)(Ee,"themes"),le=(0,Z.join)(ce,"quickCss.css"),Je=(0,Z.join)(ce,"settings.json"),$e=(0,Z.join)(ce,"native-settings.json"),Jt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"],De=process.argv.includes("--vanilla")});function qt(e,t){try{return JSON.parse((0,Y.readFileSync)(t,"utf-8"))}catch(n){return n?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,n),{}}}var Pe,Y,E,Nr,Xt,$t,J=v(()=>{"use strict";c();me();Kt();Ht();Pe=require("electron"),Y=require("fs");ue();(0,Y.mkdirSync)(ce,{recursive:!0});E=new Ce(qt("renderer",Je));E.addGlobalChangeListener(()=>{try{(0,Y.writeFileSync)(Je,JSON.stringify(E.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Pe.ipcMain.handle("VencordGetSettingsDir",()=>ce);Pe.ipcMain.on("VencordGetSettings",e=>e.returnValue=E.plain);Pe.ipcMain.handle("VencordSetSettings",(e,t,n)=>{E.setData(t,n)});Nr={plugins:{}},Xt=qt("native",$e);Ye(Xt,Nr);$t=new Ce(Xt);$t.addGlobalChangeListener(()=>{try{(0,Y.writeFileSync)($e,JSON.stringify($t.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var en={};var Qt,tn=v(()=>{"use strict";c();J();Qt=require("electron");Qt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let r=E.store.plugins?.FixSpotifyEmbeds;if(!r?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${r.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var rn={};var nn,on=v(()=>{"use strict";c();J();nn=require("electron");nn.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!E.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var qe={};oe(qe,{resolveRedirect:()=>Gr});function sn(e){return new Promise((t,n)=>{let i=(0,an.request)(new URL(e),{method:"HEAD"},r=>{t(r.headers.location?sn(r.headers.location):e)});i.on("error",n),i.end()})}async function Gr(e,t){return Lr.test(t)?sn(t):t}var an,Lr,cn=v(()=>{"use strict";c();an=require("https"),Lr=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var Xe={};oe(Xe,{makeDeeplTranslateRequest:()=>Vr});async function Vr(e,t,n,i){let r=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let a=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${n}`},body:i}),o=await a.text();return{status:a.status,data:o}}catch(a){return{status:-1,data:String(a)}}}var ln=v(()=>{"use strict";c()});var Qe={};oe(Qe,{readRecording:()=>zr});async function zr(e,t){t=(0,we.normalize)(t);let n=(0,we.basename)(t),i=(0,we.normalize)(un.app.getPath("userData")+"/");if(console.log(n,i,t),n!=="recording.ogg"||!t.startsWith(i))return null;try{let r=await(0,hn.readFile)(t);return new Uint8Array(r.buffer)}catch{return null}}var un,hn,we,fn=v(()=>{"use strict";c();un=require("electron"),hn=require("fs/promises"),we=require("path")});var et={};oe(et,{sendToOverlay:()=>Ur});function Ur(e,t){t.messageType=t.type;let n=JSON.stringify(t);pn??=(0,gn.createSocket)("udp4"),pn.send(n,42069,"127.0.0.1")}var gn,pn,dn=v(()=>{"use strict";c();gn=require("dgram")});var vn,mn=v(()=>{c();vn=`/* eslint-disable */

/**
 * This file is part of AdGuard's Block YouTube Ads (https://github.com/AdguardTeam/BlockYouTubeAdsShortcut).
 *
 * Copyright (C) AdGuard Team
 *
 * AdGuard's Block YouTube Ads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard's Block YouTube Ads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard's Block YouTube Ads.  If not, see <http://www.gnu.org/licenses/>.
 */

const hiddenCSS = [
    "#__ffYoutube1",
    "#__ffYoutube2",
    "#__ffYoutube3",
    "#__ffYoutube4",
    "#feed-pyv-container",
    "#feedmodule-PRO",
    "#homepage-chrome-side-promo",
    "#merch-shelf",
    "#offer-module",
    '#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
    "#pla-shelf",
    "#premium-yva",
    "#promo-info",
    "#promo-list",
    "#promotion-shelf",
    "#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer",
    "#search-pva",
    "#shelf-pyv-container",
    "#video-masthead",
    "#watch-branded-actions",
    "#watch-buy-urls",
    "#watch-channel-brand-div",
    "#watch7-branded-banner",
    "#YtKevlarVisibilityIdentifier",
    "#YtSparklesVisibilityIdentifier",
    ".carousel-offer-url-container",
    ".companion-ad-container",
    ".GoogleActiveViewElement",
    '.list-view[style="margin: 7px 0pt;"]',
    ".promoted-sparkles-text-search-root-container",
    ".promoted-videos",
    ".searchView.list-view",
    ".sparkles-light-cta",
    ".watch-extra-info-column",
    ".watch-extra-info-right",
    ".ytd-carousel-ad-renderer",
    ".ytd-compact-promoted-video-renderer",
    ".ytd-companion-slot-renderer",
    ".ytd-merch-shelf-renderer",
    ".ytd-player-legacy-desktop-watch-ads-renderer",
    ".ytd-promoted-sparkles-text-search-renderer",
    ".ytd-promoted-video-renderer",
    ".ytd-search-pyv-renderer",
    ".ytd-video-masthead-ad-v3-renderer",
    ".ytp-ad-action-interstitial-background-container",
    ".ytp-ad-action-interstitial-slot",
    ".ytp-ad-image-overlay",
    ".ytp-ad-overlay-container",
    ".ytp-ad-progress",
    ".ytp-ad-progress-list",
    '[class*="ytd-display-ad-"]',
    '[layout*="display-ad-"]',
    'a[href^="http://www.youtube.com/cthru?"]',
    'a[href^="https://www.youtube.com/cthru?"]',
    "ytd-action-companion-ad-renderer",
    "ytd-banner-promo-renderer",
    "ytd-compact-promoted-video-renderer",
    "ytd-companion-slot-renderer",
    "ytd-display-ad-renderer",
    "ytd-promoted-sparkles-text-search-renderer",
    "ytd-promoted-sparkles-web-renderer",
    "ytd-search-pyv-renderer",
    "ytd-single-option-survey-renderer",
    "ytd-video-masthead-ad-advertiser-info-renderer",
    "ytd-video-masthead-ad-v3-renderer",
    "YTM-PROMOTED-VIDEO-RENDERER",
];
/**
* Adds CSS to the page
*/
const hideElements = () => {
    const selectors = hiddenCSS;
    if (!selectors) {
        return;
    }
    const rule = selectors.join(", ") + " { display: none!important; }";
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
};
/**
* Calls the "callback" function on every DOM change, but not for the tracked events
* @param {Function} callback callback function
*/
const observeDomChanges = callback => {
    const domMutationObserver = new MutationObserver(mutations => {
        callback(mutations);
    });
    domMutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
};
/**
* This function is supposed to be called on every DOM change
*/
const hideDynamicAds = () => {
    const elements = document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");
    if (elements.length === 0) {
        return;
    }
    elements.forEach(el => {
        if (el.parentNode && el.parentNode.parentNode) {
            const parent = el.parentNode.parentNode;
            if (parent.localName === "ytd-rich-item-renderer") {
                parent.style.display = "none";
            }
        }
    });
};
/**
* This function checks if the video ads are currently running
* and auto-clicks the skip button.
*/
const autoSkipAds = () => {
    // If there's a video that plays the ad at this moment, scroll this ad
    if (document.querySelector(".ad-showing")) {
        const video = document.querySelector("video");
        if (video && video.duration) {
            video.currentTime = video.duration;
            // Skip button should appear after that,
            // now simply click it automatically
            setTimeout(() => {
                const skipBtn = document.querySelector("button.ytp-ad-skip-button");
                if (skipBtn) {
                    skipBtn.click();
                }
            }, 100);
        }
    }
};
/**
* This function overrides a property on the specified object.
*
* @param {object} obj object to look for properties in
* @param {string} propertyName property to override
* @param {*} overrideValue value to set
*/
const overrideObject = (obj, propertyName, overrideValue) => {
    if (!obj) {
        return false;
    }
    let overriden = false;
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key === propertyName) {
            obj[key] = overrideValue;
            overriden = true;
        } else if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
            if (overrideObject(obj[key], propertyName, overrideValue)) {
                overriden = true;
            }
        }
    }
    return overriden;
};
/**
* Overrides JSON.parse and Response.json functions.
* Examines these functions arguments, looks for properties with the specified name there
* and if it exists, changes it's value to what was specified.
*
* @param {string} propertyName name of the property
* @param {*} overrideValue new value for the property
*/
const jsonOverride = (propertyName, overrideValue) => {
    const nativeJSONParse = JSON.parse;
    JSON.parse = (...args) => {
        const obj = nativeJSONParse.apply(this, args);
        // Override it's props and return back to the caller
        overrideObject(obj, propertyName, overrideValue);
        return obj;
    };
    // Override Response.prototype.json
    Response.prototype.json = new Proxy(Response.prototype.json, {
        async apply(...args) {
            // Call the target function, get the original Promise
            const result = await Reflect.apply(...args);
            // Create a new one and override the JSON inside
            overrideObject(result, propertyName, overrideValue);
            return result;
        },
    });
};
// Removes ads metadata from YouTube XHR requests
jsonOverride("adPlacements", []);
jsonOverride("playerAds", []);
// Applies CSS that hides YouTube ad elements
hideElements();
// Some changes should be re-evaluated on every page change
hideDynamicAds();
autoSkipAds();
observeDomChanges(() => {
    hideDynamicAds();
    autoSkipAds();
});`});var yn={};var In,An=v(()=>{"use strict";c();J();In=require("electron");mn();In.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i.once("dom-ready",()=>{!E.store.plugins?.YoutubeAdblock?.enabled||(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(vn)})})})});var Cn,wn=v(()=>{c();Zt();Wt();tn();on();cn();ln();fn();dn();An();Cn={AppleMusicRichPresence:Ke,ConsoleShortcuts:He,FixSpotifyEmbeds:en,FixYoutubeEmbeds:rn,OpenInApp:qe,Translate:Xe,VoiceMessages:Qe,XSOverlay:et,YoutubeAdblock:yn}});var tt,Sn,Tn=v(()=>{"use strict";c();me();tt=require("electron");wn();Sn={};for(let[e,t]of Object.entries(Cn)){let n=Object.entries(t);if(!n.length)continue;let i=Sn[e]={};for(let[r,a]of n){let o=`VencordPluginNative_${e}_${r}`;tt.ipcMain.handle(o,a),i[r]=o}}tt.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Sn})});function nt(e,t=300){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{e(...i)},t)}}var bn=v(()=>{"use strict";c()});var xn,En=v(()=>{c();xn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function rt(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Dn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Pn(e,t){if(!e)return rt(t);let n=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!n)return rt(t);let i={},r="",a="";for(let o of n.split(Br))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[r]=a.trim();let s=o.indexOf(" ");r=o.substring(1,s),a=o.substring(s+1)}else a+=" "+o.replace("\\n",`
`).replace(jr,"@");return i[r]=a.trim(),delete i[""],rt(t,i)}var Br,jr,Rn=v(()=>{"use strict";c();Br=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,jr=/^\\@/});function On(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:n}=new URL(t)}catch{return{action:"deny"}}switch(n){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":kn.shell.openExternal(t)}return{action:"deny"}})}var kn,_n=v(()=>{"use strict";c();kn=require("electron")});function it(e,t){let n=(0,he.normalize)(e),i=(0,he.join)(e,t),r=(0,he.normalize)(i);return r.startsWith(n)?r:null}function Mn(){return(0,q.readFile)(le,"utf-8").catch(()=>"")}async function Fr(){let e=await(0,q.readdir)(W).catch(()=>[]),t=[];for(let n of e){if(!n.endsWith(".css"))continue;let i=await Nn(n).then(Dn).catch(()=>null);i!=null&&t.push(Pn(i,n))}return t}function Nn(e){e=e.replace(/\?v=\d+$/,"");let t=it(W,e);return t?(0,q.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function Ln(e){let t;(0,q.open)(le,"a+").then(i=>{i.close(),t=(0,$.watch)(le,{persistent:!1},nt(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Mn())},50))}).catch(()=>{});let n=(0,$.watch)(W,{persistent:!1},nt(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),n.close()})}var C,$,q,he,ot=v(()=>{"use strict";c();Rt();Tn();J();bn();me();C=require("electron");En();$=require("fs"),q=require("fs/promises"),he=require("path");Rn();ue();_n();(0,$.mkdirSync)(W,{recursive:!0});C.ipcMain.handle("VencordOpenQuickCss",()=>C.shell.openPath(le));C.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:n}=new URL(t)}catch{throw"Malformed URL"}if(!Jt.includes(n))throw"Disallowed protocol.";C.shell.openExternal(t)});C.ipcMain.handle("VencordGetQuickCss",()=>Mn());C.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,$.writeFileSync)(le,t));C.ipcMain.handle("VencordGetThemesDir",()=>W);C.ipcMain.handle("VencordGetThemesList",()=>Fr());C.ipcMain.handle("VencordGetThemeData",(e,t)=>Nn(t));C.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${C.systemPreferences.getAccentColor?.()||""}`}));C.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=C.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let n=new C.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,he.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});On(n),await n.loadURL(`data:text/html;base64,${xn}`)})});function ar(e,t,n){let i=t;if(t in e)return void n(e[i]);Object.defineProperty(e,t,{set(r){delete e[i],e[i]=r,n(r)},configurable:!0,enumerable:!1})}var sr=v(()=>{"use strict";c()});var fi={};var O,K,li,ui,pt,hi,cr=v(()=>{"use strict";c();sr();O=ze(require("electron")),K=require("path");ot();J();ue();console.log("[Vencord] Starting up...");li=require.main.filename,ui=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",pt=(0,K.join)((0,K.dirname)(li),"..",ui),hi=require((0,K.join)(pt,"package.json"));require.main.filename=(0,K.join)(pt,hi.main);O.app.setAppPath(pt);if(De)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=E.store;class t extends O.default.BrowserWindow{constructor(a){if(a?.webPreferences?.preload&&a.title){let o=a.webPreferences.preload;a.webPreferences.preload=(0,K.join)(__dirname,"preload.js"),a.webPreferences.sandbox=!1,a.webPreferences.backgroundThrottling=!1,e.frameless&&(a.frame=!1),e.transparent&&(a.transparent=!0,a.backgroundColor="#00000000"),!1&&(a.backgroundColor="#00000000",e.macosVibrancyStyle&&(a.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=o,super(a),Ln(this)}else super(a)}}Object.assign(t,O.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let n=require.resolve("electron");delete require.cache[n].exports,require.cache[n].exports={...O.default,BrowserWindow:t},ar(global,"appSettings",r=>{r.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(r.set("MIN_WIDTH",0),r.set("MIN_HEIGHT",0)):(r.set("MIN_WIDTH",940),r.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,K.join)(O.app.getPath("userData"),"..","Vencord");let i=O.app.commandLine.appendSwitch;O.app.commandLine.appendSwitch=function(...r){if(r[0]==="disable-features"){let a=new Set((r[1]??"").split(","));a.add("WidgetLayering"),a.add("UseEcoQoSForBackgroundProcess"),r[1]+=[...a].join(",")}return i.apply(this,r)},O.app.commandLine.appendSwitch("disable-renderer-backgrounding"),O.app.commandLine.appendSwitch("disable-background-timer-throttling"),O.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var Q=require("electron"),lr=require("path");ot();J();ue();c();var rr=require("electron");c();var zn=require("module"),Zr=(0,zn.createRequire)("/"),ke,Wr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ke=Zr("worker_threads").Worker}catch{}var Kr=ke?function(e,t,n,i,r){var a=!1,o=new ke(e+Wr,{eval:!0}).on("error",function(s){return r(s,null)}).on("message",function(s){return r(null,s)}).on("exit",function(s){s&&!a&&r(new Error("exited with code "+s),null)});return o.postMessage(n,i),o.terminate=function(){return a=!0,ke.prototype.terminate.call(o)},o}:function(e,t,n,i,r){setImmediate(function(){return r(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},x=Uint8Array,X=Uint16Array,Un=Int32Array,ct=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),lt=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bn=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),jn=function(e,t){for(var n=new X(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1];for(var r=new Un(n[30]),i=1;i<30;++i)for(var a=n[i];a<n[i+1];++a)r[a]=a-n[i]<<5|i;return{b:n,r}},Fn=jn(ct,2),ut=Fn.b,Hr=Fn.r;ut[28]=258,Hr[258]=28;var Zn=jn(lt,0),Wn=Zn.b,_o=Zn.r,Me=new X(32768);for(m=0;m<32768;++m)B=(m&43690)>>1|(m&21845)<<1,B=(B&52428)>>2|(B&13107)<<2,B=(B&61680)>>4|(B&3855)<<4,Me[m]=((B&65280)>>8|(B&255)<<8)>>1;var B,m,fe=function(e,t,n){for(var i=e.length,r=0,a=new X(t);r<i;++r)e[r]&&++a[e[r]-1];var o=new X(t);for(r=1;r<t;++r)o[r]=o[r-1]+a[r-1]<<1;var s;if(n){s=new X(1<<t);var h=15-t;for(r=0;r<i;++r)if(e[r])for(var d=r<<4|e[r],f=t-e[r],l=o[e[r]-1]++<<f,I=l|(1<<f)-1;l<=I;++l)s[Me[l]>>h]=d}else for(s=new X(i),r=0;r<i;++r)e[r]&&(s[r]=Me[o[e[r]-1]++]>>15-e[r]);return s},Se=new x(288);for(m=0;m<144;++m)Se[m]=8;var m;for(m=144;m<256;++m)Se[m]=9;var m;for(m=256;m<280;++m)Se[m]=7;var m;for(m=280;m<288;++m)Se[m]=8;var m,Kn=new x(32);for(m=0;m<32;++m)Kn[m]=5;var m;var Hn=fe(Se,9,1);var Yn=fe(Kn,5,1),Oe=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},k=function(e,t,n){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&n},_e=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Jn=function(e){return(e+7)/8|0},Ne=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new x(e.subarray(t,n))};var $n=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],b=function(e,t,n){var i=new Error(t||$n[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,b),!n)throw i;return i},qn=function(e,t,n,i){var r=e.length,a=i?i.length:0;if(!r||t.f&&!t.l)return n||new x(0);var o=!n,s=o||t.i!=2,h=t.i;o&&(n=new x(r*3));var d=function(yt){var At=n.length;if(yt>At){var Ct=new x(Math.max(At*2,yt));Ct.set(n),n=Ct}},f=t.f||0,l=t.p||0,I=t.b||0,N=t.l,ee=t.d,V=t.m,D=t.n,P=r*8;do{if(!N){f=k(e,l,1);var j=k(e,l+1,3);if(l+=3,j)if(j==1)N=Hn,ee=Yn,V=9,D=5;else if(j==2){var ge=k(e,l,31)+257,Te=k(e,l+10,15)+4,H=ge+k(e,l+5,31)+1;l+=14;for(var R=new x(H),ne=new x(19),w=0;w<Te;++w)ne[Bn[w]]=k(e,l+w*3,7);l+=Te*3;for(var de=Oe(ne),ur=(1<<de)-1,hr=fe(ne,de,1),w=0;w<H;){var gt=hr[k(e,l,ur)];l+=gt&15;var T=gt>>4;if(T<16)R[w++]=T;else{var re=0,be=0;for(T==16?(be=3+k(e,l,3),l+=2,re=R[w-1]):T==17?(be=3+k(e,l,7),l+=3):T==18&&(be=11+k(e,l,127),l+=7);be--;)R[w++]=re}}var dt=R.subarray(0,ge),F=R.subarray(ge);V=Oe(dt),D=Oe(F),N=fe(dt,V,1),ee=fe(F,D,1)}else b(1);else{var T=Jn(l)+4,z=e[T-4]|e[T-3]<<8,te=T+z;if(te>r){h&&b(0);break}s&&d(I+z),n.set(e.subarray(T,te),I),t.b=I+=z,t.p=l=te*8,t.f=f;continue}if(l>P){h&&b(0);break}}s&&d(I+131072);for(var fr=(1<<V)-1,pr=(1<<D)-1,Le=l;;Le=l){var re=N[_e(e,l)&fr],ie=re>>4;if(l+=re&15,l>P){h&&b(0);break}if(re||b(2),ie<256)n[I++]=ie;else if(ie==256){Le=l,N=null;break}else{var vt=ie-254;if(ie>264){var w=ie-257,ve=ct[w];vt=k(e,l,(1<<ve)-1)+ut[w],l+=ve}var Ge=ee[_e(e,l)&pr],Ve=Ge>>4;Ge||b(3),l+=Ge&15;var F=Wn[Ve];if(Ve>3){var ve=lt[Ve];F+=_e(e,l)&(1<<ve)-1,l+=ve}if(l>P){h&&b(0);break}s&&d(I+131072);var mt=I+vt;if(I<F){var It=a-F,gr=Math.min(F,mt);for(It+I<0&&b(3);I<gr;++I)n[I]=i[It+I]}for(;I<mt;++I)n[I]=n[I-F]}}t.l=N,t.p=Le,t.b=I,t.f=f,N&&(f=1,t.m=V,t.d=ee,t.n=D)}while(!f);return I!=n.length&&o?Ne(n,0,I):n.subarray(0,I)};var Yr=new x(0);var Jr=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},Gn=function(e,t,n){for(var i=e(),r=e.toString(),a=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var s=i[o],h=a[o];if(typeof s=="function"){t+=";"+h+"=";var d=s.toString();if(s.prototype)if(d.indexOf("[native code]")!=-1){var f=d.indexOf(" ",8)+1;t+=d.slice(f,d.indexOf("(",f))}else{t+=d;for(var l in s.prototype)t+=";"+h+".prototype."+l+"="+s.prototype[l].toString()}else t+=d}else n[h]=s}return t},Re=[],$r=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},qr=function(e,t,n,i){if(!Re[n]){for(var r="",a={},o=e.length-1,s=0;s<o;++s)r=Gn(e[s],r,a);Re[n]={c:Gn(e[o],r,a),e:a}}var h=Jr({},Re[n].e);return Kr(Re[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",n,h,$r(h),i)},Xr=function(){return[x,X,Un,ct,lt,Bn,ut,Wn,Hn,Yn,Me,$n,fe,Oe,k,_e,Jn,Ne,b,qn,ht,Xn,Qn]};var Xn=function(e){return postMessage(e,[e.buffer])},Qn=function(e){return e&&{out:e.size&&new x(e.size),dictionary:e.dictionary}},Qr=function(e,t,n,i,r,a){var o=qr(n,i,r,function(s,h){o.terminate(),a(s,h)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var L=function(e,t){return e[t]|e[t+1]<<8},M=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},at=function(e,t){return M(e,t)+M(e,t+4)*4294967296};function ei(e,t,n){return n||(n=t,t={}),typeof n!="function"&&b(7),Qr(e,t,[Xr],function(i){return Xn(ht(i.data[0],Qn(i.data[1])))},1,n)}function ht(e,t){return qn(e,{i:2},t&&t.out,t&&t.dictionary)}var st=typeof TextDecoder<"u"&&new TextDecoder,ti=0;try{st.decode(Yr,{stream:!0}),ti=1}catch{}var ni=function(e){for(var t="",n=0;;){var i=e[n++],r=(i>127)+(i>223)+(i>239);if(n+r>e.length)return{s:t,r:Ne(e,n-1)};r?r==3?(i=((i&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?t+=String.fromCharCode((i&31)<<6|e[n++]&63):t+=String.fromCharCode((i&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(i)}};function ri(e,t){if(t){for(var n="",i=0;i<e.length;i+=16384)n+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return n}else{if(st)return st.decode(e);var r=ni(e),a=r.s,n=r.r;return n.length&&b(8),a}}var ii=function(e,t){return t+30+L(e,t+26)+L(e,t+28)},oi=function(e,t,n){var i=L(e,t+28),r=ri(e.subarray(t+46,t+46+i),!(L(e,t+8)&2048)),a=t+46+i,o=M(e,t+20),s=n&&o==4294967295?ai(e,a):[o,M(e,t+24),M(e,t+42)],h=s[0],d=s[1],f=s[2];return[L(e,t+10),h,d,r,a+L(e,t+30)+L(e,t+32),f]},ai=function(e,t){for(;L(e,t)!=1;t+=4+L(e,t+2));return[at(e,t+12),at(e,t+4),at(e,t+20)]};var Vn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function er(e,t,n){n||(n=t,t={}),typeof n!="function"&&b(7);var i=[],r=function(){for(var D=0;D<i.length;++D)i[D]()},a={},o=function(D,P){Vn(function(){n(D,P)})};Vn(function(){o=n});for(var s=e.length-22;M(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(b(13,0,1),null),r;var h=L(e,s+8);if(h){var d=h,f=M(e,s+16),l=f==4294967295||d==65535;if(l){var I=M(e,s-12);l=M(e,I)==101075792,l&&(d=h=M(e,I+32),f=M(e,I+48))}for(var N=t&&t.filter,ee=function(D){var P=oi(e,f,l),j=P[0],T=P[1],z=P[2],te=P[3],ge=P[4],Te=P[5],H=ii(e,Te);f=ge;var R=function(w,de){w?(r(),o(w,null)):(de&&(a[te]=de),--h||o(null,a))};if(!N||N({name:te,size:T,originalSize:z,compression:j}))if(!j)R(null,Ne(e,H,H+T));else if(j==8){var ne=e.subarray(H,H+T);if(z<524288||T>.8*z)try{R(null,ht(ne,{out:new x(z)}))}catch(w){R(w,null)}else i.push(ei(ne,{size:z},R))}else R(b(14,"unknown compression type "+j,1),null);else R(null,null)},V=0;V<d;++V)ee(V)}else o(null,{});return r}var ir=require("fs"),G=require("fs/promises"),pe=require("path");ue();c();function tr(e){function t(o,s,h,d){let f=0;return f+=o<<0,f+=s<<8,f+=h<<16,f+=d<<24>>>0,f}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,i=e[4]===2;if(!i&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let o=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),h=16+o+s;return e.subarray(h,e.length)}let a=12+t(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}c();var nr=ze(require("https"));function ft(e,t={}){return new Promise((n,i)=>{nr.default.get(e,t,r=>{let{statusCode:a,statusMessage:o,headers:s}=r;if(a>=400)return void i(`${a}: ${o} - ${e}`);if(a>=300)return void n(ft(s.location,t));let h=[];r.on("error",i),r.on("data",d=>h.push(d)),r.once("end",()=>n(Buffer.concat(h)))})})}var si=(0,pe.join)(Ee,"ExtensionCache");async function ci(e,t){return await(0,G.mkdir)(t,{recursive:!0}),new Promise((n,i)=>{er(e,(r,a)=>{if(r)return void i(r);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,G.mkdir)((0,pe.join)(t,o),{recursive:!0});let s=o.split("/"),h=s.pop(),d=s.join("/"),f=(0,pe.join)(t,d);d&&await(0,G.mkdir)(f,{recursive:!0}),await(0,G.writeFile)((0,pe.join)(f,h),a[o])})).then(()=>n()).catch(o=>{(0,G.rm)(t,{recursive:!0,force:!0}),i(o)})})})}async function or(e){let t=(0,pe.join)(si,`${e}`);try{await(0,G.access)(t,ir.constants.F_OK)}catch{let i=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,r=await ft(i,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ci(tr(r),t).catch(console.error)}rr.session.defaultSession.loadExtension(t)}De||Q.app.whenReady().then(()=>{Q.protocol.registerFileProtocol("vencord",({url:r},a)=>{let o=r.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let s=o.slice(8),h=it(W,s);if(!h){a({statusCode:403});return}a(h.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,lr.join)(__dirname,o));break;default:a({statusCode:403})}});try{E.store.enableReactDevtools&&or("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let e=(r,a)=>Object.keys(r).find(o=>o.toLowerCase()===a),t=r=>{let a={};return r.split(";").forEach(o=>{let[s,...h]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=h)}),a},n=r=>Object.entries(r).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),i=r=>{let a=e(r,"content-security-policy");if(a){let o=t(r[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]??=[],o[s].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[a]=[n(o)]}};Q.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:a},o)=>{if(r&&(a==="mainFrame"&&i(r),a==="stylesheet")){let s=e(r,"content-type");s&&(r[s]=["text/css"])}o({cancel:!1,responseHeaders:r})}),Q.session.defaultSession.webRequest.onHeadersReceived=()=>{}});cr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
