"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[593],{2593:(I,F,t)=>{t.r(F),t.d(F,{DashboardModule:()=>y});var l=t(177),m=t(1497),d=t(467),e=t(4438),v=t(5779),j=t(1413),p=t(6977),k=t(8726),E=t(563),c=t(1141),u=t(2242),b=t(8150),h=t(4945);const r=n=>({tab_active:n});let g=(()=>{class n{constructor(){this._service=(0,e.WQX)(k.g),this.showSkeleton=!0,this.destroy$=new j.B,this.dashboardData=[],this.activeIndex=0}ngOnInit(){var s=this;return(0,d.A)(function*(){yield s.gridData()})()}gridData(){var s=this;return(0,d.A)(function*(){try{s.dashboardData=[];let i=yield s._service.getUserInfo("userCader");s._service.postApi("getDashboardDetails","postEndPoint",{cader:i.code,create_by:s._service.getUserInfo("_id")}).pipe((0,p.Q)(s.destroy$)).subscribe({next:a=>{200==(a=s._service.enableCryptoForResponse()?s._service.decrypt(a):a).S_CODE&&a.DATA.length>0&&(s.dashboardData=a.DATA)},error:a=>{s.dashboardData=[]}})}catch{}})()}getprofilepicture(){var s=this;return(0,d.A)(function*(){try{s._service.postApi("getprofilepicture","postEndPoint",{empId:s._service.getUserInfo("_id")}).pipe((0,p.Q)(s.destroy$)).subscribe({next:i=>{200==(i=s._service.enableCryptoForResponse()?s._service.decrypt(i):i).S_CODE&&i.DATA.length>0&&console.log("data['DATA'] ",i.DATA)},error:i=>{}})}catch{}})()}static#e=this.\u0275fac=function(i){return new(i||n)};static#s=this.\u0275cmp=e.VBU({type:n,selectors:[["ng-component"]],features:[e.Jv_([v.bg,v.td])],decls:357,vars:15,consts:[[1,"main_content"],[1,"dash_board_top"],[1,"as_logo"],[1,"as_logo_single"],[1,"dash_board_body"],[3,"activeIndexChange","activeIndex","scrollable"],["header","Dashboard",3,"ngClass"],[1,"cntnt_card"],[1,"main_header"],[1,"y_dashboard"],[1,"my_balance"],[1,"rupees_cntnt","rupees"],[1,"balance_action"],["pButton","","pRipple","","label","Withdraw"],[1,"rupees_cntnt"],["pButton","","pRipple","","label","View"],[1,"products_head"],[1,"products_cntnt"],[1,"flex","h-full","gap-3","flex-wrap"],[1,"product_card","vip_0"],[1,"user_images"],["src","../../../../../assets/demo/images/bikes/bike_1.png","alt",""],[1,"product_card_cntnt"],[1,"cntnt_name"],[1,"flex","gap-1","flex-column","align-items-center","justify-content-center"],[1,"flex","gap-2"],[1,"rupees"],[1,"rupees","d_income"],[1,"theme_color"],[1,"choosing_button"],["pButton","","pRipple","","label","Buy Now"],["pButton","","pRipple","","label","View All"],["pButton","","pRipple","","label","Add to Cart"],[1,"product_card","vip_1"],["src","../../../../../assets/demo/images/bikes/bike_2.png","alt",""],[1,"ellipse"],[1,"invitation_code"],[1,"invitation_references"],["pButton","","pRipple","","label","Submit"],["header","Recharge",3,"ngClass"],[1,"recharge_body"],[1,"recharge_card"],[1,"flex","flex-column","gap-1"],[1,"drop_down"],["optionLabel","name","placeholder","Select a Plan",3,"showClear"],[1,"payments_input"],["type","text","pInputText",""],[1,"payments_cntnt"],[1,"payment_one"],[1,"recharge_button"],["pButton","","pRipple","","label","Recharge"],["header","Orders",3,"ngClass"],[1,"recharge_cntnt"],[1,"orders_body"],[1,"my_orders"],[1,"order_list"],[1,"order_list_cntnt"],[1,""],["header","Teams",3,"ngClass"],[1,"service_card"],[1,"icon-wrapper"],[1,"team_commition"],[1,"theme_color","percentage"],[1,"team_commition_div"],[1,"theme_color","rupees"],["href","#"]],template:function(i,a){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"label")(4,"span",3),e.EFF(5,"AS"),e.k0s(),e.EFF(6," Riders"),e.k0s()()(),e.j41(7,"div",4)(8,"p-tabView",5),e.mxI("activeIndexChange",function(o){return e.DH7(a.activeIndex,o)||(a.activeIndex=o),o}),e.j41(9,"p-tabPanel",6)(10,"div",7)(11,"div",8)(12,"h2"),e.EFF(13,"Your Dashboard"),e.k0s()(),e.j41(14,"div",9)(15,"div",10)(16,"h6"),e.EFF(17,"Balance"),e.k0s(),e.j41(18,"div")(19,"span",11),e.EFF(20,"1000"),e.k0s()(),e.j41(21,"div",12),e.nrm(22,"p-button",13),e.k0s()(),e.j41(23,"div",10)(24,"h6"),e.EFF(25,"Transactions"),e.k0s(),e.j41(26,"div")(27,"span",14),e.EFF(28,"100"),e.k0s()(),e.j41(29,"div",12),e.nrm(30,"p-button",15),e.k0s()(),e.j41(31,"div",10)(32,"h6"),e.EFF(33,"Team Balance"),e.k0s(),e.j41(34,"div")(35,"span",11),e.EFF(36,"100"),e.k0s()(),e.j41(37,"div",12),e.nrm(38,"p-button",15),e.k0s()()()(),e.j41(39,"div",7)(40,"div",16)(41,"h5"),e.EFF(42,"Special Offers"),e.k0s()(),e.j41(43,"div",17)(44,"div",18)(45,"div",19)(46,"div",20),e.nrm(47,"img",21),e.k0s(),e.j41(48,"div",22)(49,"div",23)(50,"h6"),e.EFF(51,"KAWASAKI NINJA 650"),e.k0s(),e.j41(52,"label"),e.EFF(53,"(649 CC)"),e.k0s()(),e.j41(54,"div",24)(55,"label",25)(56,"span"),e.EFF(57,"Price: "),e.k0s(),e.j41(58,"h6",26),e.EFF(59,"0"),e.k0s()(),e.j41(60,"label",25)(61,"span"),e.EFF(62,"D-Income: "),e.k0s(),e.j41(63,"h6",27),e.EFF(64,"15.2"),e.k0s()(),e.j41(65,"label",25)(66,"span"),e.EFF(67,"R-Income: "),e.k0s(),e.j41(68,"h6",26),e.EFF(69,"5518.8"),e.k0s()(),e.j41(70,"label",25)(71,"span"),e.EFF(72,"Time Limit: "),e.k0s(),e.j41(73,"span")(74,"span",28),e.EFF(75,"1"),e.k0s(),e.EFF(76," hour"),e.k0s()()(),e.j41(77,"div",29),e.nrm(78,"p-button",30),e.k0s()()()()()(),e.j41(79,"div",7)(80,"div",16)(81,"h5"),e.EFF(82,"Products"),e.k0s(),e.j41(83,"div"),e.nrm(84,"p-button",31),e.k0s()(),e.j41(85,"div",17)(86,"div",18)(87,"div",19)(88,"div",20),e.nrm(89,"img",21),e.k0s(),e.j41(90,"div",22)(91,"div",23)(92,"h6"),e.EFF(93,"KAWASAKI NINJA 650"),e.k0s(),e.j41(94,"label"),e.EFF(95,"(649 CC)"),e.k0s()(),e.j41(96,"div",24)(97,"label",25)(98,"span"),e.EFF(99,"Price: "),e.k0s(),e.j41(100,"h6",26),e.EFF(101,"0"),e.k0s()(),e.j41(102,"label",25)(103,"span"),e.EFF(104,"D-Income: "),e.k0s(),e.j41(105,"h6",27),e.EFF(106,"15.2"),e.k0s()(),e.j41(107,"label",25)(108,"span"),e.EFF(109,"R-Income: "),e.k0s(),e.j41(110,"h6",26),e.EFF(111,"5518.8"),e.k0s()(),e.j41(112,"label",25)(113,"span"),e.EFF(114,"Purchase Limit: "),e.k0s(),e.j41(115,"span")(116,"span",28),e.EFF(117,"0"),e.k0s(),e.EFF(118,"/1"),e.k0s()()(),e.j41(119,"div",29),e.nrm(120,"p-button",30)(121,"p-button",32),e.k0s()()(),e.j41(122,"div",33)(123,"div",20),e.nrm(124,"img",34),e.k0s(),e.j41(125,"div",22)(126,"div",23)(127,"h6",35),e.EFF(128,"Suzuki Gixxer SF"),e.k0s(),e.j41(129,"label"),e.EFF(130,"(200 CC )"),e.k0s()(),e.j41(131,"div",24)(132,"label",25)(133,"span"),e.EFF(134,"Price: "),e.k0s(),e.j41(135,"h6",26),e.EFF(136,"650"),e.k0s()(),e.j41(137,"label",25)(138,"span"),e.EFF(139,"D-Income: "),e.k0s(),e.j41(140,"h6",27),e.EFF(141,"64.8"),e.k0s()(),e.j41(142,"label",25)(143,"span"),e.EFF(144,"R-Income: "),e.k0s(),e.j41(145,"h6",26),e.EFF(146,"2916"),e.k0s()(),e.j41(147,"label",25)(148,"span"),e.EFF(149,"Purchase Limit: "),e.k0s(),e.j41(150,"span")(151,"span",28),e.EFF(152,"0"),e.k0s(),e.EFF(153,"/1"),e.k0s()()(),e.j41(154,"div",29),e.nrm(155,"p-button",30)(156,"p-button",32),e.k0s()()()()()(),e.j41(157,"div",7)(158,"div",36)(159,"div",37)(160,"h6"),e.EFF(161,"Invite friends to get reward "),e.j41(162,"span",26),e.EFF(163,"75"),e.k0s()(),e.j41(164,"label"),e.EFF(165,"Invite friends to AS Riders and get "),e.j41(166,"span",26),e.EFF(167,"75"),e.k0s(),e.EFF(168," when your friend purchase one product. they get "),e.j41(169,"span",26),e.EFF(170,"25"),e.k0s()(),e.j41(171,"div")(172,"label"),e.EFF(173,"Copy your code "),e.j41(174,"strong"),e.EFF(175,"Asr001"),e.k0s()()()(),e.j41(176,"div"),e.nrm(177,"p-button",38),e.k0s()()()(),e.j41(178,"p-tabPanel",39)(179,"div",7)(180,"h5",28),e.EFF(181,"Recharge"),e.k0s(),e.j41(182,"div",40)(183,"div",41)(184,"h6"),e.EFF(185,"Available Balance"),e.k0s(),e.j41(186,"div")(187,"h2",26),e.EFF(188,"500"),e.k0s()()(),e.j41(189,"div",42)(190,"label"),e.EFF(191,"Choose Amount"),e.k0s(),e.j41(192,"div",43),e.nrm(193,"p-dropdown",44),e.k0s()(),e.j41(194,"div",45),e.nrm(195,"input",46),e.k0s(),e.j41(196,"div",47)(197,"h6"),e.EFF(198,"Recharge Methods"),e.k0s(),e.j41(199,"div",48)(200,"label"),e.EFF(201,"Payment 1"),e.k0s()()(),e.j41(202,"div",49),e.nrm(203,"button",50),e.k0s(),e.j41(204,"div",47)(205,"h6"),e.EFF(206,"Recharge Rule:"),e.k0s(),e.j41(207,"div")(208,"ol")(209,"li"),e.EFF(210,"The minimum deposit amount is "),e.j41(211,"span",26),e.EFF(212,"650"),e.k0s()(),e.j41(213,"li"),e.EFF(214,"If the account has not been received within half an hour after the successful recharge, please contact customer service in time, and send us the account number and proof of successful payment."),e.k0s(),e.j41(215,"li"),e.EFF(216,"Do not save the previous receiving account for transfer. The recharge receipt must match the payment amount. Avoid payment errors."),e.k0s(),e.j41(217,"li"),e.EFF(218,"Do not transfer money to strangers, recharge must be completed in the application. "),e.k0s()()()()()()(),e.j41(219,"p-tabPanel",51)(220,"div",7)(221,"div",52)(222,"h5",28),e.EFF(223,"My Orders"),e.k0s(),e.j41(224,"div",53)(225,"div",54)(226,"div",20),e.nrm(227,"img",34),e.k0s(),e.j41(228,"div",55)(229,"div",23)(230,"h6",35),e.EFF(231,"Suzuki Gixxer SF"),e.k0s(),e.j41(232,"label"),e.EFF(233,"(200 CC )"),e.k0s()(),e.j41(234,"div",56)(235,"small",57),e.EFF(236,"Ordered 21 May"),e.k0s()()()(),e.j41(237,"div",54)(238,"div",20),e.nrm(239,"img",21),e.k0s(),e.j41(240,"div",55)(241,"div",23)(242,"h6"),e.EFF(243,"KAWASAKI NINJA 650"),e.k0s(),e.j41(244,"label"),e.EFF(245,"(649 CC)"),e.k0s()(),e.j41(246,"div")(247,"small",57),e.EFF(248,"Ordered 8 May"),e.k0s()()()(),e.j41(249,"div",54)(250,"div",20),e.nrm(251,"img",34),e.k0s(),e.j41(252,"div",55)(253,"div",23)(254,"h6"),e.EFF(255,"Suzuki Gixxer SF"),e.k0s(),e.j41(256,"label"),e.EFF(257,"(200 CC )"),e.k0s()(),e.j41(258,"div")(259,"small",57),e.EFF(260,"Ordered 28 April"),e.k0s()()()()()()()(),e.j41(261,"p-tabPanel",58)(262,"div",7)(263,"div",8)(264,"h5",28),e.EFF(265,"Teams"),e.k0s()(),e.j41(266,"div",9)(267,"div",10)(268,"h6"),e.EFF(269,"Team investment"),e.k0s(),e.j41(270,"div")(271,"span",11),e.EFF(272,"0"),e.k0s()()(),e.j41(273,"div",10)(274,"h6"),e.EFF(275,"Team size"),e.k0s(),e.j41(276,"div")(277,"span",14),e.EFF(278,"1"),e.k0s()()()()(),e.j41(279,"div")(280,"div",59)(281,"div",60)(282,"span"),e.EFF(283,"1"),e.k0s()(),e.j41(284,"h3"),e.EFF(285,"Team 1"),e.k0s(),e.j41(286,"div",61)(287,"label"),e.EFF(288,"Commition rate"),e.k0s(),e.j41(289,"h5",62),e.EFF(290,"15"),e.k0s()(),e.j41(291,"div",63)(292,"div",61)(293,"label"),e.EFF(294,"Invite people"),e.k0s(),e.j41(295,"h5",28),e.EFF(296,"1"),e.k0s()(),e.j41(297,"div",61)(298,"label"),e.EFF(299,"Commission"),e.k0s(),e.j41(300,"h5",64),e.EFF(301,"0"),e.k0s()()(),e.j41(302,"div")(303,"a",65),e.EFF(304,"View Details"),e.k0s()()()(),e.j41(305,"div")(306,"div",59)(307,"div",60)(308,"span"),e.EFF(309,"2"),e.k0s()(),e.j41(310,"h3"),e.EFF(311,"Team 2"),e.k0s(),e.j41(312,"div",61)(313,"label"),e.EFF(314,"Commition rate"),e.k0s(),e.j41(315,"h5",62),e.EFF(316,"15"),e.k0s()(),e.j41(317,"div",63)(318,"div",61)(319,"label"),e.EFF(320,"Invite people"),e.k0s(),e.j41(321,"h5",28),e.EFF(322,"1"),e.k0s()(),e.j41(323,"div",61)(324,"label"),e.EFF(325,"Commission"),e.k0s(),e.j41(326,"h5",64),e.EFF(327,"0"),e.k0s()()(),e.j41(328,"div")(329,"a",65),e.EFF(330,"View Details"),e.k0s()()()(),e.j41(331,"div")(332,"div",59)(333,"div",60)(334,"span"),e.EFF(335,"3"),e.k0s()(),e.j41(336,"h3"),e.EFF(337,"Team 3"),e.k0s(),e.j41(338,"div",61)(339,"label"),e.EFF(340,"Commition rate"),e.k0s(),e.j41(341,"h5",62),e.EFF(342,"15"),e.k0s()(),e.j41(343,"div",63)(344,"div",61)(345,"label"),e.EFF(346,"Invite people"),e.k0s(),e.j41(347,"h5",28),e.EFF(348,"1"),e.k0s()(),e.j41(349,"div",61)(350,"label"),e.EFF(351,"Commission"),e.k0s(),e.j41(352,"h5",64),e.EFF(353,"0"),e.k0s()()(),e.j41(354,"div")(355,"a",65),e.EFF(356,"View Details"),e.k0s()()()()()()()()),2&i&&(e.R7$(8),e.R50("activeIndex",a.activeIndex),e.Y8G("scrollable",!0),e.R7$(),e.Y8G("ngClass",e.eq3(7,r,0==a.activeIndex)),e.R7$(169),e.Y8G("ngClass",e.eq3(9,r,1==a.activeIndex)),e.R7$(15),e.Y8G("showClear",!0),e.R7$(26),e.Y8G("ngClass",e.eq3(11,r,2==a.activeIndex)),e.R7$(42),e.Y8G("ngClass",e.eq3(13,r,3==a.activeIndex)))},dependencies:[l.YU,E.n,c._f,c.$n,u.S,b.ms,h.JQ,h.Kp],encapsulation:2})}return n})();var f=t(4895);const C=[{path:"",component:g}];let y=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#s=this.\u0275mod=e.$C({type:n});static#i=this.\u0275inj=e.G2t({imports:[l.MD,m.iI.forChild(C),f.G]})}return n})()}}]);