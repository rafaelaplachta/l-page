(function(g){var window=this;'use strict';var o6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Zf=!1;this.player=a;this.N(a,"minimized",this.eg);this.N(a,"onStateChange",this.PE)},p6=function(a){g.tN.call(this,a);
this.i=new o6(this.player);this.i.hide();g.hN(this.player,this.i.element,4);a.Ke()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(o6,g.V);g.k=o6.prototype;
g.k.bD=function(){this.tooltip=new g.SQ(this.player,this);g.F(this,this.tooltip);g.hN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.lc=new g.oO(this.player);g.F(this,this.lc);this.rg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.F(this,this.rg);this.rg.Ba(this.element);this.N(this.rg.element,"click",this.Sy);var a=new g.V({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fechar"},S:[g.vL()]});g.F(this,a);a.Ba(this.rg.element);this.N(a.element,"click",this.wi);
a=new g.O1(this.player,this);g.F(this,a);a.Ba(this.rg.element);this.Vo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.F(this,this.Vo);this.Vo.Ba(this.rg.element);this.N(this.Vo.element,"click",this.Sy);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,b);b.Ba(this.Vo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.F(this,a);a.Ba(this.Vo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,c);c.Ba(this.Vo.element);this.iL=new g.PP(this.player,
this,!1);g.F(this,this.iL);this.iL.Ba(b.element);b=new g.MP(this.player,this);g.F(this,b);b.Ba(a.element);this.nextButton=new g.PP(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.Ba(c.element);this.wg=new g.FQ(this.player,this);g.F(this,this.wg);this.wg.Ba(this.rg.element);this.Hc=new g.UP(this.player,this);g.F(this,this.Hc);g.hN(this.player,this.Hc.element,4);this.Gy=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.F(this,this.Gy);g.hN(this.player,this.Gy.element,4);a=new g.V({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fechar"},S:[g.vL()]});g.F(this,a);a.Ba(this.Gy.element);this.N(a.element,"click",this.wi);a=new g.V({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fechar"},S:[g.AL()]});g.F(this,a);a.Ba(this.Gy.element);this.N(a.element,"click",this.UT);this.N(this.player,"presentingplayerstatechange",this.Gc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.yd=new g.Dq(this.Mp,null,this);this.yd.start();this.Zf||(this.bD(),this.Zf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.yd&&(this.yd.dispose(),this.yd=void 0);g.V.prototype.hide.call(this);this.player.Ke()||(this.Zf&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.yd&&(this.yd.dispose(),this.yd=void 0);g.V.prototype.va.call(this)};
g.k.wi=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.UT=function(){this.player.playVideo()};
g.k.Sy=function(a){if(a.target===this.rg.element||a.target===this.Vo.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.yK(this.player.ub())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.eg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Ke())};
g.k.dd=function(){this.Hc.Rb();this.wg.Rb()};
g.k.Mp=function(){this.dd();this.yd&&this.yd.start()};
g.k.Gc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.eQ(this.Hc,0,this.player.Za().getPlayerSize().width,!1);g.WP(this.Hc)};
g.k.PE=function(a){this.player.Ke()&&(0===a?this.hide():this.show())};
g.k.fc=function(){return this.tooltip};
g.k.Ie=function(){return!1};
g.k.hf=function(){return!1};
g.k.di=function(){return!1};
g.k.Cz=function(){};
g.k.Im=function(){};
g.k.rr=function(){};
g.k.Um=function(){return null};
g.k.cj=function(){return new g.sl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Tp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Rl(a);if(b){c=g.Nq(b,"ytp-prev-button")||g.Nq(b,"ytp-next-button");var m=g.Nq(b,"ytp-play-button"),n=g.Nq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Pl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Nq(b,"ytp-miniplayer-button-top-left"),f=g.Pl(b,this.element),b=g.Rl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Pf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Lk=function(){};
g.k.hk=function(){return!1};g.v(p6,g.tN);p6.prototype.create=function(){};
p6.prototype.Gi=function(){return!1};
p6.prototype.load=function(){this.player.hideControls();this.i.show()};
p6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.EN.miniplayer=p6;})(_yt_player);
