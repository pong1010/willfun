<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../header.jsp" %>
		<div id="login">
			<div class="crowdy-login-layout">
				<a href="/" class="crowdy-login-logo"></a>
				<div class="crowdy-login-tilte">
					반갑습니다<br class="hidden-xs">
					<span class="hidden-sm hidden-md hidden-lg">, </span>크라우디입니다<span
						class="crowdy-color-blue">.</span>
				</div>
				<div class="crowdy-login-subtitle mb30 xs-mb25">
					크라우디 처음 오셨나요? <a href="/user/join"
						class="crowdy-color-blue crowdy-font-bold">1분 만에 회원가입하기 <i
						aria-hidden="true" class="fa fa-angle-right"></i></a>
				</div>
				<div class="crowdy-focus-change">
					<label for="memEmail" class="crowdy-label-01 hidden-xs">이메일(ID)</label>
					<div for="memEmail" class="hidden-sm hidden-md hidden-lg"></div>
					<input type="text" id="memEmail" name="email"
						autofocus="autofocus" placeholder="ID(Email)를 입력해주세요"
						class="crowdy-input-01 mb15 xs-mb15">
				</div>
				<div class="crowdy-focus-change">
					<label for="memPwd" class="crowdy-label-01 hidden-xs">비밀번호</label>
					<div for="memPwd" class="hidden-sm hidden-md hidden-lg"></div>
					<input type="password" id="memPwd" name="mem_pwd"
						placeholder="비밀번호를 입력해주세요" class="crowdy-input-01 mb15 xs-mb20">
				</div>
				<div class="crowdy-login-save">
					<label class="crowdy-check-container crowdy-label-02">아이디
						저장하기 <input type="checkbox"> <span
						class="crowdy-check-mark"></span>
					</label> <a href="/user/find-id-password" class="crowdy-label-02"
						style="text-align: right;">아이디 비밀번호 찾기 <i aria-hidden="true"
						class="fa fa-angle-right"></i></a>
				</div>
				<div class="crowdy-btn-02 mt30">로그인</div>
				<label class="labelError-01 xs-mt10" style="display: none;"></label>
				<div class="mt30 xs-mt10">
					<hr class="crowdy-login-hr">
					<span class="crowdy-login-txtWidth">또는</span>
					<hr class="crowdy-login-hr">
				</div>
				<div class="crowdy-btn-03 mt25 xs-mt10">
					<div class="crowdy-btn-centerLayout">
						<div class="crowdy-facebook-icon" style="margin-right: 15px;"></div>
						<div>페이스북으로 로그인</div>
					</div>
				</div>
				<div class="crowdy-btn-03 mt20 xs-mt15">
					<div class="crowdy-btn-centerLayout">
						<div class="crowdy-kakao-icon" style="margin-right: 15px;"></div>
						<div>카카오톡으로 로그인</div>
					</div>
				</div>
				<div class="crowdy-btn-03 mt20 xs-mt15">
					<div class="crowdy-btn-centerLayout">
						<div class="crowdy-naver-icon" style="margin-right: 15px;"></div>
						<div>네이버로 로그인</div>
					</div>
				</div>
				<!---->
			</div>
		</div>

		<!-- 
		<div class="hidden-xs">
			<div th:replace="fragments/footer"></div>
		</div>
		 -->
		<div class="clearfix"></div>
		<!-- Channel Plugin Scripts -->
		<script>
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var d = window.document;
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "14395221-358d-4eaf-aa74-7af315752ed0"
  });
</script>
		<!-- End Channel Plugin -->

		<!-- <script>
  ;window.channelPluginSettings = {
    "pluginKey": "14395221-358d-4eaf-aa74-7af315752ed0"
  };
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var d = window.document;
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
</script> -->
	</div>


	<div class="scrollToTop">
		<i class="fa fa-angle-up"></i>
	</div>
	<div id="ch-plugin">
		<div id="ch-plugin-core">
			<style data-styled="" data-styled-version="4.4.1"></style>
			<div hidden="" class="sc-cpHetk bVBTPS sc-bhlBdH hzHIzx"
				style="z-index: 100000000 !important;">
				<div class="sc-crNyjn eeabcK">
					<div class="sc-dznXNo waCXL">
						<div name="cancel" size="16" width="44" height="44"
							class="sc-dEoRIm jzoonr"></div>
					</div>
					<div class="sc-gGCbJM cMKBjA">
						<div size="34" class="sc-kpOJdX jfaPvB"></div>
						<div class="sc-ciodno hXDmKN">(알 수 없음)</div>
						<div class="sc-ekulBa hNjHKx">9:00am</div>
					</div>
					<div class="sc-jkCMRl eEDaVW">
						<div class="sc-lcpuFF fzkLGk"></div>
					</div>
				</div>
			</div>
			<style data-styled="" data-styled-version="4.4.1"></style>
			<div size="300" class="sc-htpNat kKcMqw"></div>
			<div class="sc-ifAKCX eyavPk">
				<div class="sc-EHOje hgcFAI">
					<div class="sc-bZQynM kfhBdd textLauncherContent">문의하기</div>
					<div class="sc-gzVnrw ioofPt textLauncherIcon">
						<div class="sc-bxivhb sc-dnqmqq DjFCC">1</div>
					</div>
				</div>
			</div>
		</div>
		<div id="ch-plugin-script" style="display: none"
			class="ch-messenger-hidden">
			<iframe id="ch-plugin-script-iframe"
				style="position: relative !important; height: 100% !important; width: 100% !important; border: none !important;"></iframe>
		</div>
	</div>
	<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","112654742726251");fbq("track","PageView");</script>
	<noscript>
		<img height="1" width="1" style="display: none"
			src="https://www.facebook.com/tr?id=112654742726251&amp;ev=PageView&amp;noscript=1">
	</noscript>




	<script type="text/javascript" id="">function fbqSearchKeyword(){var a=document.referrer;if(a){var b=document.createElement("a");b.setAttribute("href",a);a=/[\?&](?:q|query)=([^&#]*)/;if((a=b.search.match(a))&&0<a.length)var c=a[1].replace(/\+/gi,"%20");c&&fbq("trackCustom","SearchKeyword",{hostname:b.hostname,keyword:decodeURIComponent(c)})}}fbqSearchKeyword();</script>

	<script type="text/javascript" id="">fbq("track","PageView_Login");</script>
	<script type="text/javascript" id="">(function(e,a){function f(b,a){b.prototype[a]=function(){this._q.push([a].concat(Array.prototype.slice.call(arguments,0)));return this}}function g(b){function a(a){b[a]=function(){b._q.push([a].concat(Array.prototype.slice.call(arguments,0)))}}for(var c=0;c<h.length;c++)a(h[c])}var c=e.amplitude||{_q:[],_iq:{}},b=a.createElement("script");b.type="text/javascript";b.integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta";b.crossOrigin="anonymous";b.async=!0;b.src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js";
b.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a);b=function(){this._q=[];return this};a="add append clearAll prepend set setOnce unset".split(" ");for(var d=0;d<a.length;d++)f(b,a[d]);c.Identify=b;b=function(){this._q=[];return this};a=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(d=0;d<a.length;d++)f(b,a[d]);c.Revenue=b;var h="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId enableTracking setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId groupIdentify onInit logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");
g(c);c.getInstance=function(a){a=(a&&0!==a.length?a:"$default_instance").toLowerCase();c._iq.hasOwnProperty(a)||(c._iq[a]={_q:[]},g(c._iq[a]));return c._iq[a]};e.amplitude=c})(window,document);amplitude.getInstance().init("88ee3f94796e2cd53036c329ca2a87ec",null,{includeGclid:!0,includeUtm:!0,includeReferrer:!0});</script>
	<style data-styled="" data-styled-version="4.4.1"></style>
	<div id="fb-root" class=" fb_reset">
		<div
			style="position: absolute; top: -10000px; width: 0px; height: 0px;">
			<div></div>
		</div>
	</div>
</body>
</html>