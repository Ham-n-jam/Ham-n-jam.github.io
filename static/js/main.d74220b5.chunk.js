(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],[,,,function(e,a,t){e.exports={table:"MainPage_table__2cExn",flexBox:"MainPage_flexBox__2RQLf",lineSeparator:"MainPage_lineSeparator__DZjd1",body:"MainPage_body__2L8AN",content:"MainPage_content__1dP4f",paragraph:"MainPage_paragraph__2muUB",whiteSeparator:"MainPage_whiteSeparator__spk1a",imageBg:"MainPage_imageBg__cBfTG",pairContainer:"MainPage_pairContainer__37AtF",imageGallery:"MainPage_imageGallery__3OsnK",whiteLink:"MainPage_whiteLink__1TSlD",buttonLink:"MainPage_buttonLink__1MshZ"}},,function(e,a,t){e.exports={navbar:"SideBar_navbar__xQ_ML",contentMenu:"SideBar_contentMenu__1o2vR",verticalSpacer:"SideBar_verticalSpacer__3CB1R",wrapper:"SideBar_wrapper__1T1Qg",bg:"SideBar_bg__yBIBM",name:"SideBar_name__1D-ou",info:"SideBar_info__2L3C1",link:"SideBar_link__1044v",blackText:"SideBar_blackText__3UfU1",pfp:"SideBar_pfp__1GpnV",jumpToWrapper:"SideBar_jumpToWrapper__1gTu-",lineSeparator10:"SideBar_lineSeparator10__2tIz7",lineSeparator70:"SideBar_lineSeparator70__1ha6f",cvDownload:"SideBar_cvDownload__2WizV"}},,function(e,a,t){e.exports={screen:"TvScreenTurnOnEffect_screen__341oh","fade-to-transparent-black":"TvScreenTurnOnEffect_fade-to-transparent-black__1AvBi",inner:"TvScreenTurnOnEffect_inner__2b1rH",text:"TvScreenTurnOnEffect_text__3JlT6",rubberBand:"TvScreenTurnOnEffect_rubberBand__17wBk",lineSeparator:"TvScreenTurnOnEffect_lineSeparator__20M8b","fade-to-transparent-lightgray":"TvScreenTurnOnEffect_fade-to-transparent-lightgray__1GT-l"}},,,function(e,a,t){e.exports={paragraph:"ProjectSummary_paragraph__2bqwq",pairContainer:"ProjectSummary_pairContainer__iFhvl",imageGallery:"ProjectSummary_imageGallery__c21u-",whiteLink:"ProjectSummary_whiteLink__1YMg4"}},function(e,a,t){e.exports={wrapper:"TechSkill_wrapper__2B5GY",roundedBox:"TechSkill_roundedBox__1NQqO",icon:"TechSkill_icon__3y4B4"}},function(e,a,t){e.exports={wrapper:"ScrollToMenuItem_wrapper__1ETjn",lineSeparator:"ScrollToMenuItem_lineSeparator__2sG8o",a:"ScrollToMenuItem_a__oFyKH"}},,,function(e,a,t){e.exports={button:"Button_button__2uvah",black:"Button_black__2gji_",white:"Button_white__2BxTo",animated:"Button_animated__7fgXG",gradient:"Button_gradient__3yg9C"}},function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),i=t(18),s=t.n(i),r=(t(25),t(26),t(3)),o=t.n(r),l=(t(27),t(16),t(10)),j=t.n(l),d=t(19),b=t.n(d),m=t(1);function p(e){var a=e.title,t=e.subTitle,n=e.description,c=e.imageNames,i=e.imageFolder,s=e.isMirrored,r=e.links,o=Object(m.jsxs)("div",{className:j.a.paragraph,children:[Object(m.jsx)("h2",{children:a}),Object(m.jsx)("h5",{children:t}),Object(m.jsx)("p",{children:n}),Object(m.jsx)("div",{children:r.map((function(e){return Object(m.jsxs)(m.Fragment,{children:[e,Object(m.jsx)("p",{})]})}))})]}),l=Object(m.jsx)("div",{className:j.a.imageGallery,children:Object(m.jsx)(b.a,{items:c.map((function(e){return{original:"".concat("/personal-website/images/"+i+"/"+e),thumbnail:"".concat("/personal-website/images/"+i+"/"+e)}})),showPlayButton:!1,showBullets:!1,showNav:!1})});return Object(m.jsx)("div",{className:"".concat(j.a.pairContainer),children:s?[o,l]:[l,o]})}var h=t(4);function x(){return Object(m.jsx)(p,{title:"Golden Hour Chronicles",subTitle:"(Work in progress)",description:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"A Zelda-like 2D top-down action adventure game."}),Object(m.jsx)("p",{children:"Follow Zach and his allies on a journey across the Kingdom of Eulyssia to uncover the true nature of the world."}),Object(m.jsx)("p",{children:"This project is being developed using Godot Engine and Aseprite for sprite art."})]}),imageFolder:"ghc",imageNames:["gameplay.png","dialogue.png","loadGame.png","silhouettes.png"],links:[Object(m.jsxs)("a",{className:o.a.whiteLink,href:"https://twitter.com/GoldenHourC",children:[Object(m.jsx)(h.l,{className:"icon"}),"Follow GHC on Twitter"]})]})}var u=t(15),O=t.n(u);function g(e){var a=e.text,t=e.onClick,n=e.color,c=void 0===n?"black":n,i={black:"black",white:"white",animated:"animated"},s=i.hasOwnProperty(c)?i[c]:"black";return Object(m.jsx)("div",{className:"".concat(O.a.button," ").concat(O.a[s]),onClick:t,children:a})}function _(){return Object(m.jsx)(p,{title:"Income Ticker",description:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"A fun little app I made that you can put on in the background at work."}),Object(m.jsx)("p",{children:"Input your payment details and watch your income for the day slowly tick up as you work! The ticker will take your off-days and lunch breaks into account so that it only ticks over while you are on the clock."}),Object(m.jsx)("p",{children:"Developed using React and deployed to GitHub Pages."})]}),imageFolder:"income-ticker",imageNames:["incomeTicker.png","incomeSetup.png"],links:[Object(m.jsx)("a",{className:o.a.buttonLink,href:"https://ham-n-jam.github.io/income-ticker/#/",children:Object(m.jsx)(g,{text:"Check it out",color:"animated"})}),Object(m.jsxs)("a",{className:o.a.whiteLink,href:"https://github.com/Ham-n-jam/income-ticker",children:[Object(m.jsx)(h.f,{className:"icon"}),"View GitHub repo"]})],isMirrored:!0})}function f(){return Object(m.jsx)(p,{title:"Pok\xe9Builder",description:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"A modern webapp take on a Pok\xe9Dex from the Pok\xe9mon video game series that allows users to build and share Pok\xe9mon teams."}),Object(m.jsx)("p",{children:"Users can browse the Pok\xe9dex to look at Pok\xe9mon stats, types and descriptions. They can also view, upvote, and comment on posted teams."}),Object(m.jsx)("p",{children:"This project was developed with a few friends using the MERN tech stack."})]}),imageFolder:"pokebuilder",imageNames:["pokeDex.png","pokeDetail.png","pokeBuilder.png","pokeTeams.png","pokeTeam.png"],links:[Object(m.jsxs)("a",{className:o.a.whiteLink,href:"https://github.com/seif-y/PokeBuilder",children:[Object(m.jsx)(h.f,{className:"icon"}),"View GitHub repo"]})]})}function k(){return Object(m.jsx)(p,{title:"Tetrus",description:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"The classic block-stacker game with a twist."}),Object(m.jsx)("p",{children:"Enjoy hectic gameplay as 1-4 players all play on the same board simultaneously!"}),Object(m.jsx)("p",{children:"This project was created using Godot Engine and Aseprite for sprite art."})]}),imageFolder:"tetrus",imageNames:["tetrusGameplay.png","tetrusMenu.png","tetrusGameOver.png"],links:[Object(m.jsx)("a",{className:o.a.buttonLink,href:"https://ham-n-jam.github.io/tetrus-game/",children:Object(m.jsx)(g,{text:"Play Tetrus",color:"animated"})}),Object(m.jsxs)("a",{className:o.a.whiteLink,href:"https://github.com/Ham-n-jam/tetrus-game",children:[Object(m.jsx)(h.f,{className:"icon"}),"View GitHub repo"]})],isMirrored:!0})}var v=t(6),N=t(11),w=t.n(N);function S(e){var a=e.skillName,t=e.icon;return Object(m.jsx)("div",{className:w.a.wrapper,children:Object(m.jsxs)("div",{className:w.a.roundedBox,children:[Object(m.jsx)("div",{className:w.a.icon,children:t}),a]})})}function y(){return Object(m.jsxs)("div",{className:o.a.paragraph,children:[Object(m.jsx)("h2",{children:"Software Engineer"}),Object(m.jsx)("p",{children:" Hi! I'm Alex, a motivated software engineer, passionate about software development and design. I'm looking to bring new and innovative ideas to the table."}),Object(m.jsx)("table",{className:o.a.table,children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:o.a.pairContainer,children:[Object(m.jsx)(h.c,{className:"icon"}),"Key Technical Skills"]})}),Object(m.jsxs)("td",{children:[Object(m.jsxs)("div",{className:o.a.flexBox,children:[Object(m.jsx)(S,{skillName:"React",icon:Object(m.jsx)(h.k,{color:"#5bcded"})}),Object(m.jsx)(S,{skillName:"Angular",icon:Object(m.jsx)(h.a,{color:"#d22c30"})}),Object(m.jsx)(S,{skillName:"Typescript",icon:Object(m.jsx)(v.j,{color:"#3d98ff"})}),Object(m.jsx)(S,{skillName:"Javascript",icon:Object(m.jsx)(v.g,{color:"#e8d21d"})}),Object(m.jsx)(S,{skillName:"CSS",icon:Object(m.jsx)(h.d,{color:"#25acff"})}),Object(m.jsx)(S,{skillName:"Java",icon:Object(m.jsx)(h.i,{color:"#ffb471"})}),Object(m.jsx)(S,{skillName:"C#",icon:Object(m.jsx)(v.d,{color:"#9871cf"})}),Object(m.jsx)(S,{skillName:".NET",icon:Object(m.jsx)(v.e,{color:"#9770ce"})}),Object(m.jsx)(S,{skillName:"SQL",icon:Object(m.jsx)(v.i,{color:"#55acf5"})}),Object(m.jsx)(S,{skillName:"Kotlin",icon:Object(m.jsx)(v.h,{color:"#ff50a7"})}),Object(m.jsx)(S,{skillName:"GDScript",icon:Object(m.jsx)(v.f,{color:"#5fbafd"})}),Object(m.jsx)(S,{skillName:"Python",icon:Object(m.jsx)(h.j,{color:"#fdda4d"})})]}),Object(m.jsx)("p",{}),Object(m.jsxs)("div",{className:o.a.flexBox,children:[Object(m.jsx)(S,{skillName:"Photoshop",icon:Object(m.jsx)(v.b,{color:"#2f9ef1"})}),Object(m.jsx)(S,{skillName:"Illustrator",icon:Object(m.jsx)(v.a,{color:"#ffb246"})}),Object(m.jsx)(S,{skillName:"Aseprite",icon:Object(m.jsx)(v.c,{color:"#fdfdfe"})})]})]})]}),Object(m.jsx)("div",{className:o.a.lineSeparator}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:o.a.pairContainer,children:[Object(m.jsx)(h.b,{className:"icon"}),"Employment History"]})}),Object(m.jsxs)("td",{children:["Vista Entertainment Solutions - Graduate Software Engineer",Object(m.jsx)("p",{}),"Pipers Patent Attorneys - Database Engineer Intern",Object(m.jsx)("p",{}),"Motion Design - Junior Software Developer"]})]}),Object(m.jsx)("div",{className:o.a.lineSeparator}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:o.a.pairContainer,children:[Object(m.jsx)(h.g,{className:"icon"}),"Education"]})}),Object(m.jsxs)("td",{children:["Bachelor of Software Engineering with First Class Honors at the University of Auckland",Object(m.jsx)("p",{}),"Auckland Grammar School"]})]}),Object(m.jsx)("div",{className:o.a.lineSeparator}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:o.a.pairContainer,children:[Object(m.jsx)(h.h,{className:"icon"}),"Hobbies"]})}),Object(m.jsx)("td",{children:"Cycling, Skiing, Digital Art/Animation, Sketching, Gaming, Game Design, Swimming and Video Editing."})]})]})})]})}function T(e){var a=e.id,t=e.title;return Object(m.jsx)("a",{id:a,children:Object(m.jsx)("div",{className:o.a.whiteSeparator,children:t})})}function B(){var e=[{component:Object(m.jsx)(k,{}),bgImage:"tetrus/bg.png"},{component:Object(m.jsx)(f,{}),bgImage:"pokebuilder/bg.png"},{component:Object(m.jsx)(_,{}),bgImage:"income-ticker/bg.png"},{component:Object(m.jsx)(x,{}),bgImage:"ghc/bg.png"}];return Object(m.jsxs)("div",{className:o.a.body,children:[Object(m.jsx)(T,{id:"about_me",title:"About Me"}),Object(m.jsxs)("div",{className:"".concat(o.a.content," ").concat(o.a.imageBg),style:{backgroundImage:"url(".concat("/personal-website/images/bg.png",")")},children:[Object(m.jsx)(y,{}),Object(m.jsx)("p",{})]}),Object(m.jsx)(T,{id:"personal_projects",title:"Personal Projects"}),e.map((function(e,a){return Object(m.jsx)("div",{className:"".concat(o.a.imageBg),style:{backgroundImage:"url(".concat("/personal-website/images/"+e.bgImage,")")},children:e.component})}))]})}var P=t(5),M=t.n(P),C=t(9),G=t(12),E=t.n(G);function A(e){var a=e.href,t=e.text;return Object(m.jsxs)("a",{className:E.a.a,href:a,children:[Object(m.jsx)("div",{className:E.a.wrapper,children:"\u2022 "+t}),Object(m.jsx)("div",{className:E.a.lineSeparator})]})}function F(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:M.a.navbar,children:[Object(m.jsxs)("div",{className:M.a.wrapper,children:[Object(m.jsx)("img",{className:M.a.pfp,src:"".concat("/personal-website","/images/profilePhoto.png"),alt:"Profile"}),Object(m.jsx)("div",{className:M.a.bg,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:M.a.name,children:"Alex Bell"}),Object(m.jsx)("div",{className:M.a.info,children:"Software Engineer"}),Object(m.jsx)("div",{children:Object(m.jsxs)("a",{className:M.a.link,href:"mailto:alexbell0509@gmail.com",children:[Object(m.jsx)(C.a,{className:"icon"})," alexbell0509@gmail.com"]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("a",{className:M.a.link,href:"tel:021-084-90623",children:[Object(m.jsx)(C.b,{className:"icon"})," 021-084-90623"]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("a",{className:M.a.link,href:"https://github.com/Ham-n-jam",children:[Object(m.jsx)(h.f,{className:"icon"})," Ham-n-jam"]})})]})})]}),Object(m.jsxs)("div",{className:M.a.contentMenu,children:[Object(m.jsxs)("div",{className:M.a.jumpToWrapper,children:[Object(m.jsx)("div",{className:M.a.lineSeparator10}),"Jump To Section",Object(m.jsx)("div",{className:M.a.lineSeparator70})]}),Object(m.jsx)(A,{href:"#about_me",text:"About Me"}),Object(m.jsx)(A,{href:"#personal_projects",text:"Personal Projects"})]}),Object(m.jsx)("div",{className:M.a.verticalSpacer}),Object(m.jsx)("div",{className:M.a.cvDownload,children:Object(m.jsx)("a",{className:"".concat(M.a.link," ").concat(M.a.blackText),href:"".concat("/personal-website","/files/Alex_Bell_CV.pdf"),download:"Alex_Bell_CV",children:Object(m.jsx)(g,{text:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.e,{className:"icon"}),"Download My CV"]}),color:"white"})})})]})})}var I=t(20),D=t(7),L=t.n(D);function H(){var e=Object(n.useState)({}),a=Object(I.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){setTimeout((function(){c({display:"none"})}),1010)}),[]),Object(m.jsx)("div",{className:L.a.screen,style:t,children:Object(m.jsxs)("div",{className:L.a.inner,children:[Object(m.jsx)("h2",{className:L.a.text,children:"Alex Bell"}),Object(m.jsx)("div",{className:L.a.lineSeparator}),Object(m.jsx)("h6",{className:L.a.text,children:"Software Engineer"})]})})}var V=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(H,{}),Object(m.jsx)(F,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(B,{})})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),J()}],[[39,1,2]]]);
//# sourceMappingURL=main.d74220b5.chunk.js.map