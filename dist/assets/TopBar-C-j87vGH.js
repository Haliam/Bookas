import{c as l,u as d,j as e}from"./index-DfAZHG0P.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],h=l("chevron-left",x);function f({title:r,subtitle:t,back:s,rightAction:n,transparent:c=!1,light:o=!1}){const a=d(),i=()=>{a(typeof s=="string"?s:-1)};return e.jsxs("div",{className:`
        sticky top-0 z-30 flex items-center px-4 h-14
        ${c?"bg-transparent":o?"bg-white/95 backdrop-blur-md border-b border-[#F0F0F0]":"bg-white"}
      `,children:[s!==void 0&&e.jsx("button",{onClick:i,className:"w-10 h-10 flex items-center justify-center rounded-full bg-[#FAFAFA] border border-[#F0F0F0] text-[#2C2C2C] mr-3 shrink-0 hover:bg-[#F5F5F5] transition-colors",children:e.jsx(h,{size:20})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[r&&e.jsx("h4",{className:"truncate text-[#2C2C2C]",children:r}),t&&e.jsx("p",{className:"text-xs text-[#9CA3AF] truncate",children:t})]}),n&&e.jsx("div",{className:"ml-3 shrink-0",children:n})]})}export{h as C,f as T};
