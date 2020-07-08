<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	request.setCharacterEncoding("UTF-8");
	String cp = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>파이널프로젝트 | 크라우디</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
    <meta content="bf68484d88b67d936d952cbebd06ef061c0e99a0" name="naver-site-verification">
    <meta content="-RRbkzGa_vANlu2QsyG9Uxb1NDtapUiykWlllv8xspk" name="google-site-verification">
   
   
<!-- css & js -->    
	<link rel="stylesheet" href="/resources/willfun/font/font.min.css">
	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/all.min.css">
	
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="/resources/willfun/bootstrap/bootstrap.min.css">

	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/common.min.css">
	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/theme.min.css">
	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/custom.min.css">
    
	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/crowdy.min.css">
	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/crowdyCardUI.min.css">
	<link rel="stylesheet" type="text/css" href="/resources/willfun/css/datepickerCustom.css">   
    
    <link crossorigin="anonymous" href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha256-rByPlHULObEjJ6XQxW/flG2r+22R5dKiAoef+aXWfik=" rel="stylesheet">
		
<!-- 웹브라우저 위에 아이콘?? -->	
    <link rel="icon" sizes="32x32" type="image/png" href="//image-se.ycrowdy.com/crowdyCss/img/CROWDY-32x32.png">
    <link rel="icon" sizes="16x16" type="image/png" href="//image-se.ycrowdy.com/crowdyCss/img/CROWDY-16x16.png">
    

    
   

    
    
<script type="text/javascript" async="" src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>
<script type="text/javascript" async="" src="https://www.google-analytics.com/plugins/ua/ec.js"></script>
<script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/NMoy4HgGiLr5NAQaEQa2ho8X/recaptcha__ko.js"></script>
<script type="text/javascript" integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta" crossorigin="anonymous" async="" src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js"></script>
<script src="https://connect.facebook.net/signals/config/112654742726251?v=2.9.21&amp;r=stable" async=""></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="//www.googleadservices.com/pagead/conversion_async.js"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-KDPXZ7W"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    
	<script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.min.js"></script>
	

	<script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	
	<script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
	<script src="//cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
	<script src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
	
	<!-- IE에서 사용 -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/url-search-params/0.10.0/url-search-params.js"></script>
	<!-- IE에서 vuejs 사용 못해서 밑에 js 추가 -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js"></script>
	<!--[if lt IE 9]>
		<script th:src="|${jsPath}/html5shiv.min.js|"></script>
	<![endif]-->
	<!--[if lt IE 10]>
		<script th:src="|${jsPath}/media.match.min.js|"></script>
		<script th:src="|${jsPath}/respond.min.js|"></script>
	<![endif]-->
    
    


    
    <script>
		var user = localStorage.getItem('user');
		
		if(user != null) {
			var uid = JSON.parse(user).memCode;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({'uid': uid, 'CD1': uid, 'event' : ''});
		}
	</script>
    
    <!-- kakao pixel -->
    <script charset="UTF-8" src="//t1.daumcdn.net/adfit/static/kp.js" type="text/javascript"></script>
	<script type="text/javascript">
	      kakaoPixel('1467026451353914035').pageView();
	      var path = document.location.pathname;
	      if(path.indexOf('/i/') > -1 || path.indexOf('/invest/list') > -1) {
	    	  kakaoPixel('1467026451353914035').pageView('investVisit');	  
	      }
	</script>
	
	<!-- Google Optimize -->
	<!-- Page hiding snippet (recommended) -->
    <style>.async-hide { opacity: 0 !important} </style>
    <script>
    (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;
    h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
    (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);
    })(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-KDPXZ7W':true});
    </script>
    <!-- End Google Optimize -->
        
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KDPXZ7W');</script>
    <!-- End Google Tag Manager -->

<script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/882224542/?random=1593592236564&amp;cv=9&amp;fst=1593592236564&amp;num=1&amp;label=NYTuCI7MmWwQntvWpAM&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=777&amp;u_w=855&amp;u_ah=777&amp;u_aw=855&amp;u_cd=24&amp;u_his=3&amp;u_tz=540&amp;u_java=false&amp;u_nplug=0&amp;u_nmime=0&amp;gtm=2wg6o0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww.ycrowdy.com%2F&amp;ref=https%3A%2F%2Fwww.ycrowdy.com%2F&amp;tiba=%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%93%9C%ED%8E%80%EB%94%A9%20%7C%20%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%94%94&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script src="//rum.beusable.net/script/b180711e153144u381/0b252100fa" async="" type="text/javascript"></script><script src="//rum.beusable.net/script/checker/b180711e153144u381/0b252100fa?url=https%3A%2F%2Fwww.ycrowdy.com%2F" async="" type="text/javascript"></script><script src="//script.beusable.net/rum.v1.0.0.min.js" async="" type="text/javascript"></script></head>
</head>

<!-- =====================================헤드끝========================= -->
<!-- ====================================바디시작========================= -->





<body class="main">

	<link
		href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css"
		rel="stylesheet">
	<link rel="stylesheet"
		href="//image-se.ycrowdy.com/crowdyCss/select-box.min.css?v=20191202">


	<link rel="stylesheet"
		href="//image-se.ycrowdy.com/crowdyCss/slick.min.css?v=20200515_001">



	<script
		src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>


	<script src="//image-se.ycrowdy.com/crowdyJs/slick.min.js"></script>


	<script src="//image-se.ycrowdy.com/crowdyJs/hammer.min.js"></script>


	<script async="" defer=""
		src="//www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&amp;render=explicit"></script>
	<!-- REAL -->
	<!-- script src="//cdn.jsdelivr.net/npm/vue-recaptcha@1.3.0/dist/vue-recaptcha.min.js" integrity="sha256-wXEwRwIzT20IIJRK5JVrOxK0SiqjmjAYZxaQHe01KV0=" crossorigin="anonymous"></script-->
	<!-- DEVELOP & LOCAL -->
	<script
		src="//cdn.jsdelivr.net/npm/vue-recaptcha@1.3.0/dist/vue-recaptcha.min.js"></script>
	<script
		src="//unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js"></script>
	<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","112654742726251");fbq("track","PageView");</script>
	<noscript>
		<img height="1" width="1" style="display: none"
			src="https://www.facebook.com/tr?id=112654742726251&amp;ev=PageView&amp;noscript=1">
	</noscript>




	<script type="text/javascript" id="">function fbqSearchKeyword(){var a=document.referrer;if(a){var b=document.createElement("a");b.setAttribute("href",a);a=/[\?&](?:q|query)=([^&#]*)/;if((a=b.search.match(a))&&0<a.length)var c=a[1].replace(/\+/gi,"%20");c&&fbq("trackCustom","SearchKeyword",{hostname:b.hostname,keyword:decodeURIComponent(c)})}}fbqSearchKeyword();</script>

	<script type="text/javascript" id="">
	(function(e,a){function f(b,a){b.prototype[a]=function(){this._q.push([a].concat(Array.prototype.slice.call(arguments,0)));return this}}function g(b){function a(a){b[a]=function(){b._q.push([a].concat(Array.prototype.slice.call(arguments,0)))}}for(var c=0;c<h.length;c++)a(h[c])}var c=e.amplitude||{_q:[],_iq:{}},b=a.createElement("script");b.type="text/javascript";b.integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta";b.crossOrigin="anonymous";b.async=!0;b.src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js";
b.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a);b=function(){this._q=[];return this};a="add append clearAll prepend set setOnce unset".split(" ");for(var d=0;d<a.length;d++)f(b,a[d]);c.Identify=b;b=function(){this._q=[];return this};a=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(d=0;d<a.length;d++)f(b,a[d]);c.Revenue=b;var h="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId enableTracking setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId groupIdentify onInit logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");
g(c);c.getInstance=function(a){a=(a&&0!==a.length?a:"$default_instance").toLowerCase();c._iq.hasOwnProperty(a)||(c._iq[a]={_q:[]},g(c._iq[a]));return c._iq[a]};e.amplitude=c})(window,document);amplitude.getInstance().init("88ee3f94796e2cd53036c329ca2a87ec",null,{includeGclid:!0,includeUtm:!0,includeReferrer:!0});</script>


	<span itemscope="" itemtype="http://schema.org/Organization">
		<link href="https://www.ycrowdy.com/" itemprop="url"> <a
		href="https://www.facebook.com/ycrowdy" itemprop="sameAs"></a> <a
		href="http://blog.naver.com/crowdy0903" itemprop="sameAs"></a> <a
		href="http://post.naver.com/crowdy0903" itemprop="sameAs"></a> <a
		href="http://www.instagram.com/crowdy_official" itemprop="sameAs"></a>
	</span>





	<div class="page-wrapper">

		<link crossorigin="anonymous"
			href="//cdnjs.cloudflare.com/ajax/libs/webui-popover/2.1.15/jquery.webui-popover.min.css"
			integrity="sha256-lj8GPpYpm2RmDSdbc+xT0foat0zOqJHPRZFX1ChtVVI="
			rel="stylesheet">
		<link
			href="//cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"
			rel="stylesheet">


		<link
			href="//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
			rel="stylesheet">



		<script
			src="//cdnjs.cloudflare.com/ajax/libs/webui-popover/2.1.15/jquery.webui-popover.min.js"></script>
		<script
			src="//cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>





		<!-- ------------------------------------------------------------------------header -->

		<div id="user">
			<div>
				<nav class="navbar navbar-venture navbar-fixed-top affix">
				<div class="container">
					<div class="navbar-header">
					</br>
						<a href="/login/home"><div class="crwody-footer-logo">CROWDY</div></a>
						
					</div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li><a href="/reward/list" class="dropdown-toggle">리워드</a></li>
							<li><a href="/invest/list" class="dropdown-toggle">투자</a></li>
							<li><a href="/preopen/list" class="dropdown-toggle">사전공개</a>
							</li>
							<li class="dropdown"><a href="javascript:void(0);"
								data-toggle="dropdown" role="button" aria-haspopup="true"
								aria-expanded="false" class="dropdown-toggle"> 더보기 <span
									class="caret"></span>
							</a>
								<div role="menu" class="dropdown-menu">
									<ul>
										<li><a href="/community/main">커뮤니티 파트너</a></li>
										<li><a href="/simulation/main">모의펀딩</a></li>
										<li><a href="/crowdy/about">리워드/투자란?</a></li>
										<li><a href="/crowdy/help" target="_blank">도움말</a></li>
									</ul>
								</div></li>
							<li><a href="/login/makeproject"
								class="dropdown-toggle dropdown-pro">프로젝트 만들기</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-search-form">

								<form action="javascript:void(0);">
									<div class="input-group">
										<span class="input-group-addon">검색</span>
									</div>
								</form>
							</li>
							<li><a href="javascript:void(0)" class="dropdown-toggle">로그인
							</a></li>
							<li><a href="/login/join" class="dropdown-toggle">회원가입</a></li>
							<li><a href="/crowdy/help" target="_blank"
								class="dropdown-toggle">도움말</a></li>
						</ul>
					</div>
					<!---->
				</div>
				</nav>


			</div>
		</div>

<!-- ======================================================================================헤더끝=============================== -->
		