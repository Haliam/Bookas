import{c as F,j as e}from"./index-DfAZHG0P.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],x=F("loader-circle",b),g={primary:"bg-[#2C2C2C] text-white hover:bg-[#1F1F1F] active:bg-[#1A1A1A] disabled:bg-[#9CA3AF]",secondary:"bg-[#FAFAFA] text-[#2C2C2C] hover:bg-[#F5F5F5] active:bg-[#F0F0F0] border border-[#F0F0F0]",destructive:"bg-[#E94C59] text-white hover:bg-[#D93D4A] active:bg-[#C53E51]",ghost:"bg-transparent text-[#2C2C2C] hover:bg-[#FAFAFA] active:bg-[#F5F5F5]",outline:"bg-white border border-[#F0F0F0] text-[#2C2C2C] hover:bg-[#FAFAFA] active:bg-[#F5F5F5]"},h={sm:"h-10 px-4 text-sm rounded-lg gap-1.5",md:"h-12 px-5 text-[15px] rounded-xl gap-2",lg:"h-14 px-6 text-base rounded-xl gap-2"};function p({variant:r="primary",size:i="md",fullWidth:n=!1,loading:t=!1,iconLeft:a,iconRight:s,children:o,disabled:d,className:l="",...c}){return e.jsx("button",{disabled:d||t,className:`
        inline-flex items-center justify-center font-medium transition-all duration-150
        select-none touch-manipulation
        disabled:opacity-50 disabled:cursor-not-allowed
        ${g[r]}
        ${h[i]}
        ${n?"w-full":""}
        ${l}
      `,...c,children:t?e.jsx(x,{size:18,className:"animate-spin"}):e.jsxs(e.Fragment,{children:[a&&e.jsx("span",{className:"shrink-0",children:a}),o,s&&e.jsx("span",{className:"shrink-0",children:s})]})})}export{p as B};
