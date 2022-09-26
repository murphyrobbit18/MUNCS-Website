import{j as e,a as t,f as i,F as n}from"../../../react.jsx-runtime.v17.0.2-94a4e9cb.js";import"../../../index-afdcc5d0-268d2e95.js";const a=[{link:"/events/fall-2022-election",title:"Fall 2022 Election",dates:[{time:new Date(2022,8,26),title:"Applications Open"},{time:new Date(2022,8,30),title:"Applications Close"},{time:new Date(2022,9,3),title:"Campaigning Starts"},{time:new Date(2022,9,5),title:"Voting Starts"},{time:new Date(2022,9,10),title:"Voting & Campaigning End"},{time:new Date(2022,9,13),title:"Results posted"}]},{link:"/events/february-2022-picoCAD-competition",title:"picoCAD Competition",dates:[{time:new Date(2022,1,18),title:"Competition Begins"},{time:new Date(2022,1,27),title:"Competition Ends"}]},{link:"/events/february-2022-gmod-prop-hunt",title:"Garry's Mod Prop Hunt Night",dates:[{time:new Date(2022,1,25),title:"Begins @ 7pm"}]},{link:"/events/february-2022-department-headship-application",title:"Department: Sharene Bungay Headship Application Meeting",dates:[{time:new Date(2022,1,23),title:"Meeting on Webex @ 1pm"}]},{link:"/events/february-2022-kattis-competition",title:"Kattis Competition",dates:[{time:new Date(2022,1,11),title:"Pre-Comp. Info Session @ 5pm"},{time:new Date(2022,1,11),title:"Begins @ 6pm"},{time:new Date(2022,1,11),title:"Ends @ 11pm"}]},{link:"/events/january-2022-xonotic",title:"Xonotic Night",dates:[{time:new Date(2022,0,13),title:"Xonotic Night"}]},{link:"/events/hacktoberfest-2021",title:"Hacktoberfest 2021",dates:[{time:new Date(2021,9,1),title:"Hacktoberfest Begins"},{time:new Date(2021,9,28),title:"Workshop"},{time:new Date(2021,9,31),title:"Hacktoberfest Ends"}]},{link:"/events/fall-2021-clothing",title:"Fall 2021 Clothing Order",dates:[{time:new Date(2021,8,24),title:"Clothing Order Available"},{time:new Date(2021,9,11),title:"Clothing Order Availability Ends"}]},{link:"/events/fall-2021-election",title:"Fall 2021 Election",dates:[{time:new Date(2021,8,20),title:"Applications Open"},{time:new Date(2021,8,27),title:"Applications Close"},{time:new Date(2021,8,30),title:"Campaigning Starts"},{time:new Date(2021,9,5),title:"Campaigning Ends"},{time:new Date(2021,9,6),title:"Results posted"}]},{link:"/events/fall-2021-info-session",title:"Info Session",dates:[{time:new Date(2021,8,27),title:"Info Session in EN2007"}]}],l=({date:n})=>t("li",{children:[n.title,e("span",{className:"italic float-right opacity-50 dark:opacity-70",children:i(n.time,"MMMM do, yyyy")})]}),s=({dates:t})=>e("ul",{className:"list-disc pl-5",children:t.map((t=>e(l,{date:t},t.time)))}),o=({event:i})=>e("a",{href:i.link,children:t("div",{className:"border px-3 py-2 rounded-sm mb-2",children:[e("h2",{className:"font-semibold",children:i.title}),e(s,{dates:i.dates})]})}),m=a.map((e=>({...e,dates:e.dates.filter((e=>new Date(e.time)>=(new Date).setDate((new Date).getDate()-1)))}))).filter((e=>e.dates.length>0)).reverse(),p=()=>t(n,{children:[0===m.length&&e("p",{className:"italic text-center",children:"No upcoming events"}),m.map((t=>e(o,{event:t},t.link)))]});export{p as UpcomingEvents};
