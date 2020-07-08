<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	request.setCharacterEncoding("UTF-8");
String cp = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<title>크라우디, 새로운 취미가 되다 | 크라우디</title>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	name="viewport">
<meta content="bf68484d88b67d936d952cbebd06ef061c0e99a0"
	name="naver-site-verification">
<meta content="-RRbkzGa_vANlu2QsyG9Uxb1NDtapUiykWlllv8xspk"
	name="google-site-verification">
<meta content="telephone=no" name="format-detection">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">


<link href="/resources/font/NotoSansCJKkr/font.min.css" rel="stylesheet">

<link rel="apple-touch-icon" sizes="180x180"
	href="//image-se.ycrowdy.com/crowdyCss/img/apple-touch-icon-180x180.png">
<link rel="icon" sizes="32x32" type="image/png"
	href="//image-se.ycrowdy.com/crowdyCss/img/CROWDY-32x32.png">
<link rel="icon" sizes="16x16" type="image/png"
	href="//image-se.ycrowdy.com/crowdyCss/img/CROWDY-16x16.png">

<link
	href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
	rel="stylesheet">

<link crossorigin="anonymous"
	href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
	integrity="sha256-rByPlHULObEjJ6XQxW/flG2r+22R5dKiAoef+aXWfik="
	rel="stylesheet">
<link
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
	rel="stylesheet">

<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/common.min.css?v=20200416_001">
<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/theme.min.css?v=20200407_001">
<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/custom.min.css?v=20200429_001">

<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/crowdy/crowdy.min.css?v=20200615_002">
<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/crowdy/crowdyCardUI.min.css?v=20200515_002">
<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/crowdy/datepickerCustom.css">



<script type="text/javascript" async=""
	src="https://www.google-analytics.com/gtm/js?id=GTM-MTFRN3N&amp;t=gtm7&amp;cid=1732693303.1593509696&amp;gac=_gaexp%3DGAX1.2.RavZgOFUQguucQ6PRPTY_w.18522.1"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/plugins/ua/ec.js"></script>
<script type="text/javascript"
	integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta"
	crossorigin="anonymous" async=""
	src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js"></script>
<script
	src="https://connect.facebook.net/signals/config/112654742726251?v=2.9.21&amp;r=stable"
	async=""></script>
<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/analytics.js"></script>
<script type="text/javascript" async=""
	src="//www.googleadservices.com/pagead/conversion_async.js"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/analytics.js"></script>
<script type="text/javascript" async=""
	src="https://www.gstatic.com/recaptcha/releases/NMoy4HgGiLr5NAQaEQa2ho8X/recaptcha__ko.js"></script>
<script type="text/javascript" async=""
	src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>
<script async=""
	src="https://www.googletagmanager.com/gtm.js?id=GTM-KDPXZ7W"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



<script
	src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script
	src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
<script src="//cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
<script src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

<!-- IE에서 사용 -->
<script
	src="//cdnjs.cloudflare.com/ajax/libs/url-search-params/0.10.0/url-search-params.js"></script>



<script
	src="//image-se.ycrowdy.com/crowdyDist/component_crowdy.9882b38a749b10cc7295.js"></script>


<script>
		var user = localStorage.getItem('user');
		
		if(user != null) {
			var uid = JSON.parse(user).memCode;
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({'uid': uid, 'CD1': uid, 'event' : ''});
		}
	</script>

<!-- kakao pixel -->
<script charset="UTF-8" src="//t1.daumcdn.net/adfit/static/kp.js"
	type="text/javascript"></script>
<script type="text/javascript">
	      kakaoPixel('1467026451353914035').pageView();
	      var path = document.location.pathname;
	      if(path.indexOf('/i/') > -1 || path.indexOf('/invest/list') > -1) {
	    	  kakaoPixel('1467026451353914035').pageView('investVisit');	  
	      }
	</script>

<!-- Google Optimize -->
<!-- Page hiding snippet (recommended) -->
<style>
.async-hide {
	opacity: 0 !important
}
</style>
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

<script src="//rum.beusable.net/script/b180711e153144u381/0b252100fa"
	async="" type="text/javascript"></script>
<script
	src="//rum.beusable.net/script/checker/b180711e153144u381/0b252100fa?url=https%3A%2F%2Fwww.ycrowdy.com%2Freward%2Flist"
	async="" type="text/javascript"></script>
<script src="//script.beusable.net/rum.v1.0.0.min.js" async=""
	type="text/javascript"></script>
<script
	src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/882224542/?random=1593740020203&amp;cv=9&amp;fst=1593740020203&amp;num=1&amp;label=NYTuCI7MmWwQntvWpAM&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_his=3&amp;u_tz=540&amp;u_java=false&amp;u_nplug=4&amp;u_nmime=33&amp;gtm=2wg6o0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww.ycrowdy.com%2Freward%2Flist&amp;ref=https%3A%2F%2Fwww.ycrowdy.com%2Fmake%2Fstart&amp;tiba=%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%94%94%2C%20%EC%83%88%EB%A1%9C%EC%9A%B4%20%EC%B7%A8%EB%AF%B8%EA%B0%80%20%EB%90%98%EB%8B%A4%20%7C%20%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%94%94&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
</head>








<body class="main">
	<noscript>
		<iframe height="0"
			src="https://www.googletagmanager.com/ns.html?id=GTM-KDPXZ7W"
			style="display: none; visibility: hidden" width="0"></iframe>
	</noscript>
	<!-- End Google Tag Manager (noscript) -->
	<div id="noti" role="dialog" tabindex="-1" class="modal fade"
		style="z-index: 9999;">
		<div role="document" class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-body modal-order">
					<div></div>
				</div>
				<div class="modal-footer">
					<div class="row not-space">
						<a class="modalBlueBtn">확인</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="info" role="dialog" tabindex="-1" class="modal fade"
		style="z-index: 9999;">
		<div role="document" class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-body">
					<div></div>
				</div>
				<div class="modal-footer">
					<div class="row not-space">
						<a class="modalBlueBtn">확인</a>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!-- DEV : //image-se.ycrowdy.com/test -->
	<!-- <body layout:fragment="content" th:with="cssPath='//image-se.ycrowdy.com/testCss', jsPath='//image-se.ycrowdy.com/testJs', distPath='//image-se.ycrowdy.com/testDist'"> -->
	<!-- REAL : //image-se.ycrowdy.com -->


	<link
		href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css"
		rel="stylesheet">
	<link rel="stylesheet"
		href="//image-se.ycrowdy.com/crowdyCss/select-box.min.css?v=20191202">



	<script
		src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>


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



	<script
		src="//image-se.ycrowdy.com/crowdyDist/component_reward.d0c72d6564c0185c6559.js"></script>


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


		<div id="user">
			<div>
				<nav class="navbar navbar-venture navbar-fixed-top affix">
				<div class="container">
					<div class="navbar-header">
						<a href="/" class="navbar-brand"><div>CROWDY</div></a>
					</div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li><a href="/reward/list"
								class="dropdown-toggle crowdy-color-blue">리워드</a></li>
							<li><a href="/invest/list" class="dropdown-toggle">투자</a></li>
							<li><a href="/preopen/list" class="dropdown-toggle">사전공개</a></li>
							<li class="dropdown"><a href="javascript:void(0);"
								data-toggle="dropdown" role="button" aria-haspopup="true"
								aria-expanded="false" class="dropdown-toggle"> 더보기 <span
									class="caret"></span></a>
								<div role="menu" class="dropdown-menu">
									<ul>
										<li><a href="/community/main">커뮤니티 파트너</a></li>
										<li><a href="/simulation/main">모의펀딩</a></li>
										<li><a href="/crowdy/about">리워드/투자란?</a></li>
										<li><a href="/crowdy/help" target="_blank">도움말</a></li>
									</ul>
								</div></li>
							<li><a href="/make/start"
								class="dropdown-toggle dropdown-pro">프로젝트 만들기</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-search-form"><form
									action="javascript:void(0);">
									<div class="input-group">
										<span class="input-group-addon">검색</span>
									</div>
								</form></li>
							<li><a href="javascript:void(0)" class="dropdown-toggle">
									로그인 </a></li>
							<li><a href="javascript:void(0)" class="dropdown-toggle">
									회원가입 </a></li>
							<li><a href="/crowdy/help" target="_blank"
								class="dropdown-toggle"> 도움말 </a></li>
						</ul>
					</div>
					<!---->
				</div>
				</nav>
				<nav class="mobile-header-wrap">
				<div class="mobile-header">
					<div class="nav-search-form">
						<form action="javascript:void(0);">
							<div class="input-group">
								<span type="text" class="form-control"></span>
							</div>
						</form>
					</div>
					<a href="/" class="mobile-brand">CROWDY</a>
					<div class="gnb_card_background"></div>
					<a href="#" class="open_my_card mobile-icon"><span>마이페이지</span></a>
				</div>
				<!---->
				<div class="mobile-navbar">
					<ul class="mobile-nav">
						<li><a href="/reward/list"
							class="mobile-anav crowdy-color-blue border-bottom-blue">리워드</a></li>
						<li><a href="/invest/list" class="mobile-anav">투자</a></li>
						<li><a href="/preopen/list" class="mobile-anav">사전공개</a></li>
						<li class="dropdown"><a href="javascript:void(0);"
							data-toggle="dropdown" role="button" aria-haspopup="true"
							aria-expanded="false" class="mobile-anav"> 더보기 <span
								class="caret"></span></a>
							<div role="menu" class="dropdown-menu">
								<ul>
									<li><a href="/community/main">커뮤니티 파트너</a></li>
									<li><a href="/simulation/main">모의펀딩</a></li>
									<li><a href="/crowdy/about">리워드/투자란</a></li>
									<li><a href="/crowdy/help" target="_blank">도움말</a></li>
									<li><a href="/make/start">프로젝트 만들기</a></li>
								</ul>
							</div></li>
					</ul>
				</div>
				</nav>
				<div class="gnb_card">
					<div class="gnb_card_frame">
						<div class="gnb_card_header">
							<div class="gnb_card_header_table">
								<div class="gnb_card_header_table_cell">
									<a href="javascript:void(0)" class="gnb_card_close">창닫기</a>
									<div class="user_photo">
										<!---->
									</div>
									<div class="user_name"></div>
									<div class="user_email"></div>
								</div>
							</div>
						</div>
						<div class="gnb_card_body">
							<ul>
								<li><a>로그인</a></li>
								<li><a>회원가입</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div id="main">
			<div>
				<div id="bannerCarousel" class="carousel slide main_slider_wrap"
					style="user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); touch-action: none;">
					<div class="carousel-indicator">
						<span class="arrow arrow-left ml3 hidden-xs"></span> <span
							class="arrow arrow-right ml13 hidden-xs"></span> <span
							class="banner-count"><span class="color-white">2</span> /
							7 </span>
					</div>
					<div role="listbox" class="carousel-inner">
						<a class="item"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200629/CROWDY_0_202006290952080106_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="237"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(70, 70, 70);">
									화이트보드도<br>엄연히 가구다
								</h2>
								<p class="caption-description" style="color: rgb(70, 70, 70);">
									아날로그와 디지털 사이</p>
							</div></a><a class="item active"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200616/CROWDY_0_202006161427480841_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="7427"
							data-gtm-vis-recent-on-screen-7174468_280="265887"
							data-gtm-vis-total-visible-time-7174468_280="100"
							data-gtm-vis-has-fired-7174468_280="1"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(70, 70, 70);">
									노트북 액세서리는<br>하나면 충분
								</h2>
								<p class="caption-description" style="color: rgb(70, 70, 70);">
									3 IN 1 노트북 거치대 케이스</p>
							</div></a><a class="item"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200629/CROWDY_0_202006290958170769_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="15732"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(255, 255, 255);">
									일상에서 벗어나<br>떠나고 싶을 때
								</h2>
								<p class="caption-description"
									style="color: rgb(255, 255, 255);">Jeep 스마트 셰어링 패스 프로젝트</p>
							</div></a><a class="item"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200616/CROWDY_0_202006161405250081_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="21061"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(255, 255, 255);">
									역대 크라우드펀딩 1위<br>무선 이어폰
								</h2>
								<p class="caption-description"
									style="color: rgb(255, 255, 255);">파뮤 슬라이드 미니 크라우디 최초 공개</p>
							</div></a><a class="item"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200615/CROWDY_0_202006151101310370_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="26121"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(70, 70, 70);">
									7월의<br>크라우디
								</h2>
								<p class="caption-description" style="color: rgb(70, 70, 70);">
									집에만 있어도 행복한 여러분을 위한 준비했어요</p>
							</div></a><a class="item"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200616/CROWDY_0_202006161401540807_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="31080"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(70, 70, 70);">
									당신의 여름을<br>더 장어롭게
								</h2>
								<p class="caption-description" style="color: rgb(70, 70, 70);">
									장어 중에 최고는 은장어</p>
							</div></a><a class="item"
							style="background-image: url(&quot;//image-se.ycrowdy.com/20200616/CROWDY_0_202006161407550710_gaeul.png&quot;);"
							data-gtm-vis-first-on-screen-7174468_280="36085"><div
								class="carousel-caption webfont2">
								<div style="display: inline-flex;">
									<p class="font-blue type-text custom-mr">NEW</p>
									<!---->
								</div>
								<h2 style="color: rgb(70, 70, 70);">
									당신의 여름을<br>더 백숙스럽게
								</h2>
								<p class="caption-description" style="color: rgb(70, 70, 70);">
									다가오는 복날엔 물만 준비하세요</p>
							</div></a>
					</div>
				</div>
				<div class="container">
					<div class="mt60 xs-mt50">
						<div class="crowdy-title-01">진행중인 리워드</div>
						<span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디에서
							핫한 프로젝트들을 만나보세요</span>
						<div class="crowdy-rwd-select">
							<select dir="rtl" class="crowdy-select-box"><option
									value="" disabled="disabled" hidden="hidden"></option>
								<option value="1">펀딩금액순</option>
								<option value="2">마감임박순</option>
								<option value="3">최신순</option></select>
						</div>
					</div>
				</div>
				<div class="container">
					<div>
						<div class="card-reward-list">
							<div class="card-row-01">
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/slidemini" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<div class="card-newStatus-icon">NEW</div>
											<img
												src="//image-se.ycrowdy.com/20200610/CROWDY_202006101357030673_DDRlD.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">Umade</div>
											<div class="card-reward-title">글로벌150억펀딩 무선이어폰 [Pamu
												Slide Mini]</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												14,158,000원 펀딩</div>
											<div class="card-reward-day">
												D - 24
												<!---->
											</div>
											<div class="card-reward-persent">1416%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/jeepian" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200612/CROWDY_202006121638510417_J8y4V.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">(주)씨엘모터스</div>
											<div class="card-reward-title">크라우디를 통해 처음 선보이는 Jeep
												스마트 셰어링 패스 프로젝트!!</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												13,474,000원 펀딩</div>
											<div class="card-reward-day">
												D - 10
												<!---->
											</div>
											<div class="card-reward-persent">674%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/sinex3in1" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<div class="card-newStatus-icon">NEW</div>
											<img
												src="//image-se.ycrowdy.com/20200603/CROWDY_202006031705010362_W1rws.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">Umade</div>
											<div class="card-reward-title">SINEX:세계 최초 3 in 1 노트북
												거치대 케이스</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												6,466,000원 펀딩</div>
											<div class="card-reward-day">
												D - 24
												<!---->
											</div>
											<div class="card-reward-persent">1293%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/nomaticcamerapackk" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200526/CROWDY_202005261106150199_0rzEh.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">태남디비아이(주)</div>
											<div class="card-reward-title">[앵콜펀딩] 400만 파워 유튜버와 노매틱이
												만든 역대급 카메라팩</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												3,962,000원 펀딩</div>
											<div class="card-reward-day">
												D - 2
												<!---->
											</div>
											<div class="card-reward-persent">132%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/coroboda" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200521/CROWDY_202005211331390928_RbMdr.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">coroboda</div>
											<div class="card-reward-title">당신만을 위한 예술가의 진짜 니치향수
												coroboda EDP 50ml</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												1,580,000원 펀딩</div>
											<div class="card-reward-day">
												D - 7
												<!---->
											</div>
											<div class="card-reward-persent">1580%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/ripley1" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200611/CROWDY_202006111334140191_VXXvP.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">스테디에이치디</div>
											<div class="card-reward-title">가볍고 편한 패션뿔테 안경 Ripley I
												+ 전용 선글라스 클립</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												857,000원 펀딩</div>
											<div class="card-reward-day">
												D - 2
												<!---->
											</div>
											<div class="card-reward-persent">171%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/100sook" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<div class="card-newStatus-icon">NEW</div>
											<img
												src="//image-se.ycrowdy.com/20200630/CROWDY_202006301455410510_CMizq.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">단아정</div>
											<div class="card-reward-title">[팔공산 백숙맛집] 물만 있으면 끝나는
												슬기로운 백숙생활</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												625,000원 펀딩</div>
											<div class="card-reward-day">
												D - 10
												<!---->
											</div>
											<div class="card-reward-persent">63%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/spometicssuncream" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200701/CROWDY_202007011350130386_6Mpyo.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">주식회사 스포메틱스</div>
											<div class="card-reward-title">[스포메틱스] 유명 뷰티 디렉터도 인정한
												착한성분! 이번엔 선크림이다!</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												546,600원 펀딩</div>
											<div class="card-reward-day">
												D - 9
												<!---->
											</div>
											<div class="card-reward-persent">55%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/mannerbackpack" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200604/CROWDY_202006041728540783_s60q8.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">Umade</div>
											<div class="card-reward-title">"매너백팩이 사람을 만든다"슬림 어반 스타일
												Manner backpack</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												245,000원 펀딩</div>
											<div class="card-reward-day crowdy-color-blue">
												<!---->
												13 시간 남음
											</div>
											<div class="card-reward-persent">49%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/uniampersand" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<div class="card-newStatus-icon">NEW</div>
											<img
												src="//image-se.ycrowdy.com/20200615/CROWDY_202006151710410707_FA72W.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">유니앰퍼샌드</div>
											<div class="card-reward-title">[복날]한 입의 감동, 프리미엄 은장어를
												국내최초로 만나보세요</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												217,360원 펀딩</div>
											<div class="card-reward-day">
												D - 11
												<!---->
											</div>
											<div class="card-reward-persent">22%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/magneticwallet" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200522/CROWDY_202005222157030921_WqZJY.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">유한회사 플록시</div>
											<div class="card-reward-title">내부 숨김 자석으로 깔끔하게 여닫을 수 있는
												품격있는 반지갑</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												180,000원 펀딩</div>
											<div class="card-reward-day">
												D - 27
												<!---->
											</div>
											<div class="card-reward-persent">36%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/air-pt" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200529/CROWDY_202005291329140612_M6sO6.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">(주)에덴21</div>
											<div class="card-reward-title">하루 10분 엉덩이 마사지로 놀라운 변화를!
												마사지기 에어피티</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<div class="card-reward-price crowdy-color-blue">
												118,000원 펀딩</div>
											<div class="card-reward-day">
												D - 7
												<!---->
											</div>
											<div class="card-reward-persent">12%</div>
											<!---->
											<!---->
										</div>
										</figcaption></a></figure>
								</div>
							</div>
						</div>
						<div style="display: none;">
							<div class="crowdy-btn-01 crowdy-btn-layout01">
								<font>리워드 프로젝트 더보기</font>
								<!---->
								<!---->
							</div>
						</div>
						<div>
							<div id="adCertiMd" tabindex="-1" role="dialog"
								data-backdrop="static" data-keyboard="false"
								class="modal fade deliveryModal">
								<div role="document" class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<div class="headerTitle" style="width: 100px;">휴대폰 본인인증</div>
											<button type="button" aria-label="Close" class="xButton"></button>
										</div>
										<div class="modal-body innerScroll">
											<div class="innerDiv">
												<div>
													<div style="text-align: center;">
														<img src="//image-se.ycrowdy.com/crowdyCss/img/adult3.png"
															style="margin: 0px auto;">
													</div>
													<div
														style="margin-top: 31px; text-align: center; font-size: 19px; font-weight: bold; line-height: 1.47; letter-spacing: -0.7px; color: rgb(70, 70, 70);">
														이 프로젝트는 만 19세 이상의<br> 성인만 참가할 수 있습니다.
													</div>
													<div
														style="margin-top: 25px; font-size: 13px; font-weight: normal; line-height: 1.54; letter-spacing: -0.7px; color: rgb(70, 70, 70);">
														본 프로젝트는 청소년 유해매체물로서 '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 및
														'청소년보호법'에 따라 만 19세 미만의 청소년이 이용할 수 없습니다. 프로젝트에 펀딩하려면 연 1회
														'휴대폰 본인인증'이 필요합니다.</div>
												</div>
												<div class="mt35">
													<a class="btn btn-block btn-primary">휴대폰 본인인증</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="authModal" tabindex="-1" role="dialog"
								data-backdrop="static" data-keyboard="false" class="modal fade">
								<div role="document" class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" aria-label="Close" class="xButton"></button>
										</div>
										<div class="modal-body" style="height: 642px;">
											<div class="agree-body">
												<div class="agree-subtitle">제1조 (목적)</div>
												본 약관은 NICE평가정보(주) (이하 "회사"라 한다)이 제공하는 본인확인서비스(이하 "서비스"라 한다)에
												관한 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다. <br>
												<br>
												<div class="agree-subtitle">제2조 (약관의 효력 및 변경)</div>
												1. 본 약관은 "이용자"에게 "서비스" 화면에 게시하거나, 기타의 방법으로 공지하는 것으로 효력이
												발생합니다.<br> 2. "회사"는 약관의 규제에 관한 법률 및 기타 관련 법령에 위배되지 않는
												범위에서 본 약관의 내용을 개정할 수 있으며, 변경된 경우에는 제1항과 같은 방법으로 공지합니다. 다만
												"이용자"의 권리와 의무에 관한 중요한 사항은 변경된 내용의 시행 15일 이전에 공지합니다.<br>
												3. "이용자"는 변경된 약관에 대한 내용을 알지 못하여 발생하는 손해 및 피해에 대해서는 "회사"가 책임을
												지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제3조 (약관 외 준칙)</div>
												본 약관에 명시되지 아니한 사항에 대해서는 정보통신망 이용 촉진 및 정보보호 등에 관한 법률등 기타 관련
												법령 또는 상관례에 따릅니다. <br>
												<br>
												<div class="agree-subtitle">제4조 (용어의 정의)</div>
												본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br> 1. "본인확인서비스"라 함은
												"이용자"가 인터넷상에서 휴대폰 등의 인증수단을 이용하여, 본인임을 안전하게 식별 및 확인해 주는 서비스를
												말합니다.<br> 2. "이용자"라 함은 "회사"에서 제공하는 "서비스"의 이용을 위해 자신의
												"본인확인정보"를 "회사" 및 "본인확인기관" 등에게 제공하고, 본인임을 확인 받고자 하는 자를 말합니다.<br>
												3. "본인확인정보"라 함은 "이용자"가 입력한 생년월일, 성별, 성명, 내/외국인, 휴대폰번호, 통신사 등
												본인 식별에 필요한 "이용자"의 정보를 말합니다.<br> 4. "본인확인기관"이라 함은
												주민등록번호를 사용하지 아니하고 본인을 확인하는 방법 또는 서비스를 제공하는 자로 방송통신위원회로부터
												본인확인기관으로 지정을 받은 자를 의미합니다.<br> 5. "인터넷사업자"라 함은 인터넷을 이용하여
												정보를 제공하거나, 정보의 제공을 매개하는 일을 업으로 하는 자로 "회사"와 계약을 통해 운영하며, 인터넷
												웹사이트의 "이용자"에 대한 "본인확인정보"를 제공 받는 사업체를 말합니다.<br> 6.
												"중복가입확인정보"라 함은 웹사이트에 가입하고자 하는 이용자의 중복 확인을 위해 제공되는 정보를 말합니다.<br>
												7. "연계정보" 라 함은 "인터넷사업자"의 온ㆍ오프라인 서비스 연계 등의 목적으로 "이용자"를 식별하기
												위해 제공되는 정보를 말합니다. <br>
												<br>
												<div class="agree-subtitle">제5조 (회사의 의무)</div>
												1. "회사"는 "서비스" 제공과 관련하여 인지한 "이용자"의 "본인확인정보"를 본인의 승낙 없이 제3자에게
												누설하거나 배포하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있는 경우 등
												기타 관계법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.<br> 2. "회사"는
												"이용자"에게 안전한 "서비스" 제공을 위하여 지속적으로 "서비스"의 예방점검, 유지보수 등을 이행하며,
												"서비스"의 장애가 발생하는 경우, 이를 지체 없이 수리 및 복구합니다.<br> 3. "회사"는
												"이용자"가 제기한 의견, 불만이 타당하다고 인정되는 경우 적절한 절차를 거쳐 이를 지체 없이 처리하거나
												처리에 관한 일정을 통지하여야 합니다.<br> 4. "회사"는 접근매체의 발급 주체가 아닌 경우에는
												접근 매체의 위조나 변조로 발생한 사고로 인하여, "이용자"에게 발생한 손해에 대하여 배상책임이 없습니다.
												<br>
												<br>
												<div class="agree-subtitle">제6조 (이용자의 의무)</div>
												1. "이용자"는 "서비스"를 이용함에 있어서 다음 각호에 해당하는 행위를 하여서는 안되며, "회사"는 위반
												행위에 따르는 일체의 법적 책임을 지지 않습니다.<br> 1) 타 "이용자"의 "본인확인정보"를
												부정하게 사용 및 도용하는 행위<br> 2) "회사"의 저작권, 제3자의 저작원 등 기타 권리를
												침해하는 행위<br> 3) 범죄 행위<br> 4) 기타 관련 법령에 위배되는 행위<br>
												2. "이용자"는 자신의 접근매체를 제3자에게 누설 또는 노출하거나 방치하여서는 안되며, 접근 매체의
												도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 합니다.<br> 3. "이용자"는
												본 약관에서 규정하는 사항과 "서비스"에 대한 이용안내 또는 주의사항을 준수하여야 합니다. <br>
												<br>
												<div class="agree-subtitle">제7조 (서비스의 내용)</div>
												1. "서비스"는 "이용자"가 주민등록번호의 입력 없이, 본인명의로 된 인증수단(휴대폰 등)을 이용하여 본인
												확인이 가능한 인증 서비스 입니다.<br> 2. "인터넷사업자"는 회원가입, ID/PW찾기,
												성인인증, 기타 본인확인이 필요한 컨텐츠 요청 시 "이용자"에게 "서비스"를 제공 합니다.<br>
												3. "이용자"는 자신의 생년월일, 성명, 성별, 내/외국인, 휴대폰번호, 통신사 등의 정보를 입력 후,
												입력한 정보가 일치한 경우 해당 휴대폰번호로 1회성 비밀번호(승인번호)가 발송되며, 수신된 승인번호를
												정확하게 입력하는 것으로 본인 확인이 이루어 집니다. <br>
												<br>
												<div class="agree-subtitle">제8조 (서비스 제공시간)</div>
												1. "서비스"의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 정기 점검 및 기타 기술상의
												이유로 "서비스"가 일시 중지될 수 있고 또한, 운영상의 목적으로 "회사"가 정한 기간에도 일시 중지될 수
												있습니다.<br> 2. "회사"는 효율적인 업무 수행을 위하여 필요하다고 판단하는 경우 "서비스"를
												일정 범위로 분할 하여 각 범위 별로 이용가능 시간을 달리 정할 수 있으며, 이 경우 그 내용을 공지
												합니다. <br>
												<br>
												<div class="agree-subtitle">제9조 (서비스 제공의 중지)</div>
												1."회사"는 다음 각 호에 해당하는 사유가 있는 경우 "서비스" 제공의 전부 또는 일부를 중지할 수
												있습니다.<br> 1) "서비스"를 위한 설비의 보수 등 공사로 인한 부득이한 경우<br>
												2) 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 "서비스" 이용에 지장이 있는 경우<br>
												3) "서비스" 계약종료 등과 같은 "인터넷사업자"의 제반 사정으로 "서비스"를 유지할 수 업는 경우<br>
												4) 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우<br> 2. "회사"는
												"서비스"의 변경, 중지로 발생하는 문제에 대해서는 어떠한 책임도 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제10조 (서비스의 안전성 확보)</div>
												1. "회사"는 "서비스"의 안전성과 신뢰성을 확보하기 위하여 업무처리지침의 제정 및 시행, 정보처리시스템
												및 전산자료의 관리 등의 관리적 조치와 모니터링 체계 및 해킹방지시스템 구축 및 운영 등의 기술적 조치를
												취하고 있습니다.<br> 2. "회사"는 서버 및 통신기기의 정상작동여부 확인을 위하여
												정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 체계를 갖추고 있습니다.<br>
												3. "회사"는 해킹 침해 방지를 위하여 다음 각 호의 시스템 및 프로그램을 설치하여 운영합니다.<br>
												1) 침입차단시스템 설치<br> 2) 침입탐지시스템 설치<br> 3) 그 밖에 필요한
												보호장비 또는 암호프로그램 등 정보보호시스템 설치<br> 1. "회사"는 컴퓨터바이러스 감염을
												방지하기 위하여 다음 각 호를 포함한 대책을 수립, 운영하고 있습니다.<br> 1) 출처, 유통경로
												및 제작자가 명확하지 아니한 응용프로그램은 사용을 자제하고 불가피할 경우에는 컴퓨터바이러스 검색프로그램으로
												진단 및 치료 후 사용할 것<br> 2) 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신 버전을
												유지할 것<br> 3) 컴퓨터바이러스 감염에 대비하여 방어, 탐색 및 복구 절차를 마련할 것 <br>
												<br>
												<div class="agree-subtitle">제11조 (이용자의 개인정보보호)</div>
												"회사"는 관련법령이 정하는 바에 따라서 "이용자"의 개인정보를 보호하기 위하여 노력합니다. "이용자"의
												개인정보보호에 관한 사항은 관련법령 및 "회사"가 정하는 "개인정보취급방침"에 정한 바에 따릅니다. <br>
												<br>
												<div class="agree-subtitle">제12조 (개인정보의 위탁)</div>
												"회사"는 수집된 개인정보의 취급 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나, 필요한 경우 업무의
												일부 또는 전부를 "회사"가 선정한 회사에 위탁할 수 있습니다. 개인정보의 위탁에 관한 사항은 관련법령 및
												"회사"가 정하는 "개인정보취급방침"에 정한 바에 따릅니다. <br>
												<br>
												<div class="agree-subtitle">제13조 (손해배상)</div>
												"회사"는 "서비스"의 이용과 관련하여 "이용자"에게 발생한 "회사"측의 중과실에 의한 손해를 제외한 어떠한
												손해에 관하여도 책임을 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제14조 (회사와 인터넷사업자와의 관계)</div>
												1. "회사"는 "인터넷사업자"가 제공하는 서비스 상품 또는 용역 등에 대하여 보증책임을 지지 않습니다.<br>
												2. "회사"와 "인터넷사업자"는 독자적으로 사이트를 운영하며, "인터넷사업자"와 "이용자"간에 행해진
												거래에 대하여 고의 또는 중과실이 있는 경우를 제외하고는 어떠한 책임도 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제15조 (면책)</div>
												1. "회사"의 고의 또는 과실 없이 "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한 책임이
												면제됩니다.<br> 2. "회사"는 "이용자" 또는 제3자 측의 사정으로 인한 "서비스" 이용의
												장애에 대하여 책임을 지지 않습니다.<br> 3. "회사"는 고의 또는 중과실이 없는 한
												"이용자"가 "서비스"를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 "서비스"를
												통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.<br> 4. "회사"는 "이용자"가
												"서비스"에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 고의 또는 중과실이 없는 한
												일체의 책임을 지지 않습니다.<br> 5. 계약만료 또는 요금 미납의 결과로 사용자계정이
												정지되거나, 보관 파일이 삭제된 후 이에 따르는 손해에 대하여 책임을 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제16조 (관할 법원)</div>
												1. "회사"와 "이용자"는 "서비스"와 관련하여 분쟁이 발생한 경우, 원만하게 해결하기 위하여 필요한 모든
												노력을 하여야 합니다.<br> 2. 제1항의 협의에서도 분쟁이 해결되지 않은 경우 등, 약관과
												관련하여 분쟁으로 인한 소송이 제기될 경우 동 소송은 서울중앙지방법원을 관할 법원으로 합니다. <br>
												<br>
												<div class="agree-subtitle">부칙</div>
												(시행일) 이 약관은 공시한 날로부터 시행합니다.

												<!---->
												<!---->
												<!---->
												<!---->
											</div>
										</div>
										<div class="modal-footer">
											<div class="row not-space">
												<a class="btn btn-block btn-primary-outline">확인</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container mt60 xs-mt50">
					<a href="/c/july"><div
							class="crowdy-layout-introduction crowdy-layout-reward"></div></a>
				</div>
				<div class="container">
					<div class="mt60 xs-mt50">
						<div class="crowdy-title-01">종료된 리워드 프로젝트</div>
						<span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디에서
							마무리된 리워드 프로젝트입니다.</span>
					</div>
					<div>
						<div class="card-reward-list">
							<div class="card-row-01">
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/traveldnation" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20180905/CROWDY_201809051342460943_T6kPX.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">(주)블럭버스터</div>
											<div class="card-reward-title">Travel dNation 토큰 크라우드펀딩</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												103,490,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">103%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/hugelong" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20181224/CROWDY_201812241750000413_Zyt5s.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">스테디에이치디</div>
											<div class="card-reward-title">'크고 가벼운 안경 : 휴즈(Huge)'
												1.5</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												72,549,100원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">7255%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/pivo" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20190225/CROWDY_201902250951570657_gWKmc.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">Pivo</div>
											<div class="card-reward-title">세계에서 인정받은 사진영상 촬영 스마트팟
												'피보(Pivo)'</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												60,376,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">2013%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/huriz" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20190222/CROWDY_201902221130370534_Sa6sA.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">디앤비인터내셔널(주)</div>
											<div class="card-reward-title">가격은 낮추고 품질은 높이다! 블루투스
												스피커 가성비 완결판[HR-T]</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												55,103,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">1102%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/hevitz" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20190621/CROWDY_201906211059010355_W0xNQ.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">주식회사 헤비츠</div>
											<div class="card-reward-title">주말을 풍요롭게 만들어주는 [hevitz]
												레더 '위켄더 토트백'</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												52,779,500원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">5278%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/zungleviper" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200514/CROWDY_202005141143120135_iGOuX.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">주식회사 정글</div>
											<div class="card-reward-title">[최초공개] 당신의 스포츠에 비트를 입히다!
												Zungle Viper</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												43,196,800원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">4320%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/ambi0102" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200424/CROWDY_202004241129310947_b2wRf.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">주식회사 엠비치오넴</div>
											<div class="card-reward-title">초경량 카메라백팩, 장비는 맥시멀 무게는
												미니멈</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												41,270,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">4127%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/mustneeds" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20190626/CROWDY_201906261528580868_1xstM.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">머스트니즈</div>
											<div class="card-reward-title">명품과 비교해보세요! 1000유로 이상의
												가치 [머스트니즈 브리프케이스]</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												40,434,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">1348%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/nomaticcamerapack" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200224/CROWDY_202002241121540999_DEIB4.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">태남디비아이(주)</div>
											<div class="card-reward-title">[글로벌 30억] 400만 파워 유튜버와
												노매틱이 만든 역대급 카메라팩</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												34,848,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">697%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/smart_tourpass" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20200609/CROWDY_202006092325180955_wTaZf.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">한국투어패스</div>
											<div class="card-reward-title">2020 올 여름 해수욕장을 더 시원하게
												즐기는 방법! 한국투어패스</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												34,109,500원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">3411%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/pirates" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20191205/CROWDY_201912051732030406_trccT.png/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">주식회사 더파이러츠</div>
											<div class="card-reward-title">[연말음식 종결] 인어교주해적단이 제안하는
												궁극의 참치뱃살!</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												33,639,100원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">1121%</div>
										</div>
										</figcaption></a></figure>
								</div>
								<div class="col-sm-4 col-xs-6">
									<figure>
									<a href="/r/mokibo" class="card-reward-item"
										style="cursor: pointer;"><div class="card-reward-img">
											<!---->
											<img
												src="//image-se.ycrowdy.com/20191011/CROWDY_201910111045170143_Te2V0.jpg/ycrowdy/resize/!340x!226"
												alt="..." class="img-responsive">
											<!---->
											<!---->
										</div> <figcaption>
										<div class="card-reward-content">
											<div class="card-reward-name">(주)이노프레소</div>
											<div class="card-reward-title">무선 키보드, 터치패드가 되다 - 모키보</div>
										</div>
										<div class="card-reward-row">
											<!---->
											<!---->
											<!---->
											<div class="card-reward-price">
												32,672,000원 펀딩성공
												<!---->
											</div>
											<div class="card-reward-day crowdy-font-bold">종료</div>
											<div class="card-reward-persent">327%</div>
										</div>
										</figcaption></a></figure>
								</div>
							</div>
						</div>
						<div>
							<div class="crowdy-btn-01 crowdy-btn-layout01">
								<!---->
								<font>종료된 프로젝트 더보기</font>
								<!---->
							</div>
						</div>
						<div>
							<div id="adCertiMd" tabindex="-1" role="dialog"
								data-backdrop="static" data-keyboard="false"
								class="modal fade deliveryModal">
								<div role="document" class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<div class="headerTitle" style="width: 100px;">휴대폰 본인인증</div>
											<button type="button" aria-label="Close" class="xButton"></button>
										</div>
										<div class="modal-body innerScroll">
											<div class="innerDiv">
												<div>
													<div style="text-align: center;">
														<img src="//image-se.ycrowdy.com/crowdyCss/img/adult3.png"
															style="margin: 0px auto;">
													</div>
													<div
														style="margin-top: 31px; text-align: center; font-size: 19px; font-weight: bold; line-height: 1.47; letter-spacing: -0.7px; color: rgb(70, 70, 70);">
														이 프로젝트는 만 19세 이상의<br> 성인만 참가할 수 있습니다.
													</div>
													<div
														style="margin-top: 25px; font-size: 13px; font-weight: normal; line-height: 1.54; letter-spacing: -0.7px; color: rgb(70, 70, 70);">
														본 프로젝트는 청소년 유해매체물로서 '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 및
														'청소년보호법'에 따라 만 19세 미만의 청소년이 이용할 수 없습니다. 프로젝트에 펀딩하려면 연 1회
														'휴대폰 본인인증'이 필요합니다.</div>
												</div>
												<div class="mt35">
													<a class="btn btn-block btn-primary">휴대폰 본인인증</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="authModal" tabindex="-1" role="dialog"
								data-backdrop="static" data-keyboard="false" class="modal fade">
								<div role="document" class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" aria-label="Close" class="xButton"></button>
										</div>
										<div class="modal-body" style="height: 642px;">
											<div class="agree-body">
												<div class="agree-subtitle">제1조 (목적)</div>
												본 약관은 NICE평가정보(주) (이하 "회사"라 한다)이 제공하는 본인확인서비스(이하 "서비스"라 한다)에
												관한 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다. <br>
												<br>
												<div class="agree-subtitle">제2조 (약관의 효력 및 변경)</div>
												1. 본 약관은 "이용자"에게 "서비스" 화면에 게시하거나, 기타의 방법으로 공지하는 것으로 효력이
												발생합니다.<br> 2. "회사"는 약관의 규제에 관한 법률 및 기타 관련 법령에 위배되지 않는
												범위에서 본 약관의 내용을 개정할 수 있으며, 변경된 경우에는 제1항과 같은 방법으로 공지합니다. 다만
												"이용자"의 권리와 의무에 관한 중요한 사항은 변경된 내용의 시행 15일 이전에 공지합니다.<br>
												3. "이용자"는 변경된 약관에 대한 내용을 알지 못하여 발생하는 손해 및 피해에 대해서는 "회사"가 책임을
												지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제3조 (약관 외 준칙)</div>
												본 약관에 명시되지 아니한 사항에 대해서는 정보통신망 이용 촉진 및 정보보호 등에 관한 법률등 기타 관련
												법령 또는 상관례에 따릅니다. <br>
												<br>
												<div class="agree-subtitle">제4조 (용어의 정의)</div>
												본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br> 1. "본인확인서비스"라 함은
												"이용자"가 인터넷상에서 휴대폰 등의 인증수단을 이용하여, 본인임을 안전하게 식별 및 확인해 주는 서비스를
												말합니다.<br> 2. "이용자"라 함은 "회사"에서 제공하는 "서비스"의 이용을 위해 자신의
												"본인확인정보"를 "회사" 및 "본인확인기관" 등에게 제공하고, 본인임을 확인 받고자 하는 자를 말합니다.<br>
												3. "본인확인정보"라 함은 "이용자"가 입력한 생년월일, 성별, 성명, 내/외국인, 휴대폰번호, 통신사 등
												본인 식별에 필요한 "이용자"의 정보를 말합니다.<br> 4. "본인확인기관"이라 함은
												주민등록번호를 사용하지 아니하고 본인을 확인하는 방법 또는 서비스를 제공하는 자로 방송통신위원회로부터
												본인확인기관으로 지정을 받은 자를 의미합니다.<br> 5. "인터넷사업자"라 함은 인터넷을 이용하여
												정보를 제공하거나, 정보의 제공을 매개하는 일을 업으로 하는 자로 "회사"와 계약을 통해 운영하며, 인터넷
												웹사이트의 "이용자"에 대한 "본인확인정보"를 제공 받는 사업체를 말합니다.<br> 6.
												"중복가입확인정보"라 함은 웹사이트에 가입하고자 하는 이용자의 중복 확인을 위해 제공되는 정보를 말합니다.<br>
												7. "연계정보" 라 함은 "인터넷사업자"의 온ㆍ오프라인 서비스 연계 등의 목적으로 "이용자"를 식별하기
												위해 제공되는 정보를 말합니다. <br>
												<br>
												<div class="agree-subtitle">제5조 (회사의 의무)</div>
												1. "회사"는 "서비스" 제공과 관련하여 인지한 "이용자"의 "본인확인정보"를 본인의 승낙 없이 제3자에게
												누설하거나 배포하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있는 경우 등
												기타 관계법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.<br> 2. "회사"는
												"이용자"에게 안전한 "서비스" 제공을 위하여 지속적으로 "서비스"의 예방점검, 유지보수 등을 이행하며,
												"서비스"의 장애가 발생하는 경우, 이를 지체 없이 수리 및 복구합니다.<br> 3. "회사"는
												"이용자"가 제기한 의견, 불만이 타당하다고 인정되는 경우 적절한 절차를 거쳐 이를 지체 없이 처리하거나
												처리에 관한 일정을 통지하여야 합니다.<br> 4. "회사"는 접근매체의 발급 주체가 아닌 경우에는
												접근 매체의 위조나 변조로 발생한 사고로 인하여, "이용자"에게 발생한 손해에 대하여 배상책임이 없습니다.
												<br>
												<br>
												<div class="agree-subtitle">제6조 (이용자의 의무)</div>
												1. "이용자"는 "서비스"를 이용함에 있어서 다음 각호에 해당하는 행위를 하여서는 안되며, "회사"는 위반
												행위에 따르는 일체의 법적 책임을 지지 않습니다.<br> 1) 타 "이용자"의 "본인확인정보"를
												부정하게 사용 및 도용하는 행위<br> 2) "회사"의 저작권, 제3자의 저작원 등 기타 권리를
												침해하는 행위<br> 3) 범죄 행위<br> 4) 기타 관련 법령에 위배되는 행위<br>
												2. "이용자"는 자신의 접근매체를 제3자에게 누설 또는 노출하거나 방치하여서는 안되며, 접근 매체의
												도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 합니다.<br> 3. "이용자"는
												본 약관에서 규정하는 사항과 "서비스"에 대한 이용안내 또는 주의사항을 준수하여야 합니다. <br>
												<br>
												<div class="agree-subtitle">제7조 (서비스의 내용)</div>
												1. "서비스"는 "이용자"가 주민등록번호의 입력 없이, 본인명의로 된 인증수단(휴대폰 등)을 이용하여 본인
												확인이 가능한 인증 서비스 입니다.<br> 2. "인터넷사업자"는 회원가입, ID/PW찾기,
												성인인증, 기타 본인확인이 필요한 컨텐츠 요청 시 "이용자"에게 "서비스"를 제공 합니다.<br>
												3. "이용자"는 자신의 생년월일, 성명, 성별, 내/외국인, 휴대폰번호, 통신사 등의 정보를 입력 후,
												입력한 정보가 일치한 경우 해당 휴대폰번호로 1회성 비밀번호(승인번호)가 발송되며, 수신된 승인번호를
												정확하게 입력하는 것으로 본인 확인이 이루어 집니다. <br>
												<br>
												<div class="agree-subtitle">제8조 (서비스 제공시간)</div>
												1. "서비스"의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 정기 점검 및 기타 기술상의
												이유로 "서비스"가 일시 중지될 수 있고 또한, 운영상의 목적으로 "회사"가 정한 기간에도 일시 중지될 수
												있습니다.<br> 2. "회사"는 효율적인 업무 수행을 위하여 필요하다고 판단하는 경우 "서비스"를
												일정 범위로 분할 하여 각 범위 별로 이용가능 시간을 달리 정할 수 있으며, 이 경우 그 내용을 공지
												합니다. <br>
												<br>
												<div class="agree-subtitle">제9조 (서비스 제공의 중지)</div>
												1."회사"는 다음 각 호에 해당하는 사유가 있는 경우 "서비스" 제공의 전부 또는 일부를 중지할 수
												있습니다.<br> 1) "서비스"를 위한 설비의 보수 등 공사로 인한 부득이한 경우<br>
												2) 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 "서비스" 이용에 지장이 있는 경우<br>
												3) "서비스" 계약종료 등과 같은 "인터넷사업자"의 제반 사정으로 "서비스"를 유지할 수 업는 경우<br>
												4) 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우<br> 2. "회사"는
												"서비스"의 변경, 중지로 발생하는 문제에 대해서는 어떠한 책임도 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제10조 (서비스의 안전성 확보)</div>
												1. "회사"는 "서비스"의 안전성과 신뢰성을 확보하기 위하여 업무처리지침의 제정 및 시행, 정보처리시스템
												및 전산자료의 관리 등의 관리적 조치와 모니터링 체계 및 해킹방지시스템 구축 및 운영 등의 기술적 조치를
												취하고 있습니다.<br> 2. "회사"는 서버 및 통신기기의 정상작동여부 확인을 위하여
												정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 체계를 갖추고 있습니다.<br>
												3. "회사"는 해킹 침해 방지를 위하여 다음 각 호의 시스템 및 프로그램을 설치하여 운영합니다.<br>
												1) 침입차단시스템 설치<br> 2) 침입탐지시스템 설치<br> 3) 그 밖에 필요한
												보호장비 또는 암호프로그램 등 정보보호시스템 설치<br> 1. "회사"는 컴퓨터바이러스 감염을
												방지하기 위하여 다음 각 호를 포함한 대책을 수립, 운영하고 있습니다.<br> 1) 출처, 유통경로
												및 제작자가 명확하지 아니한 응용프로그램은 사용을 자제하고 불가피할 경우에는 컴퓨터바이러스 검색프로그램으로
												진단 및 치료 후 사용할 것<br> 2) 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신 버전을
												유지할 것<br> 3) 컴퓨터바이러스 감염에 대비하여 방어, 탐색 및 복구 절차를 마련할 것 <br>
												<br>
												<div class="agree-subtitle">제11조 (이용자의 개인정보보호)</div>
												"회사"는 관련법령이 정하는 바에 따라서 "이용자"의 개인정보를 보호하기 위하여 노력합니다. "이용자"의
												개인정보보호에 관한 사항은 관련법령 및 "회사"가 정하는 "개인정보취급방침"에 정한 바에 따릅니다. <br>
												<br>
												<div class="agree-subtitle">제12조 (개인정보의 위탁)</div>
												"회사"는 수집된 개인정보의 취급 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나, 필요한 경우 업무의
												일부 또는 전부를 "회사"가 선정한 회사에 위탁할 수 있습니다. 개인정보의 위탁에 관한 사항은 관련법령 및
												"회사"가 정하는 "개인정보취급방침"에 정한 바에 따릅니다. <br>
												<br>
												<div class="agree-subtitle">제13조 (손해배상)</div>
												"회사"는 "서비스"의 이용과 관련하여 "이용자"에게 발생한 "회사"측의 중과실에 의한 손해를 제외한 어떠한
												손해에 관하여도 책임을 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제14조 (회사와 인터넷사업자와의 관계)</div>
												1. "회사"는 "인터넷사업자"가 제공하는 서비스 상품 또는 용역 등에 대하여 보증책임을 지지 않습니다.<br>
												2. "회사"와 "인터넷사업자"는 독자적으로 사이트를 운영하며, "인터넷사업자"와 "이용자"간에 행해진
												거래에 대하여 고의 또는 중과실이 있는 경우를 제외하고는 어떠한 책임도 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제15조 (면책)</div>
												1. "회사"의 고의 또는 과실 없이 "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한 책임이
												면제됩니다.<br> 2. "회사"는 "이용자" 또는 제3자 측의 사정으로 인한 "서비스" 이용의
												장애에 대하여 책임을 지지 않습니다.<br> 3. "회사"는 고의 또는 중과실이 없는 한
												"이용자"가 "서비스"를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 "서비스"를
												통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.<br> 4. "회사"는 "이용자"가
												"서비스"에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 고의 또는 중과실이 없는 한
												일체의 책임을 지지 않습니다.<br> 5. 계약만료 또는 요금 미납의 결과로 사용자계정이
												정지되거나, 보관 파일이 삭제된 후 이에 따르는 손해에 대하여 책임을 지지 않습니다. <br>
												<br>
												<div class="agree-subtitle">제16조 (관할 법원)</div>
												1. "회사"와 "이용자"는 "서비스"와 관련하여 분쟁이 발생한 경우, 원만하게 해결하기 위하여 필요한 모든
												노력을 하여야 합니다.<br> 2. 제1항의 협의에서도 분쟁이 해결되지 않은 경우 등, 약관과
												관련하여 분쟁으로 인한 소송이 제기될 경우 동 소송은 서울중앙지방법원을 관할 법원으로 합니다. <br>
												<br>
												<div class="agree-subtitle">부칙</div>
												(시행일) 이 약관은 공시한 날로부터 시행합니다.

												<!---->
												<!---->
												<!---->
												<!---->
											</div>
										</div>
										<div class="modal-footer">
											<div class="row not-space">
												<a class="btn btn-block btn-primary-outline">확인</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="clearfix"></div>

		<footer class="crwody-footer-wrap">
		<div class="container">
			<div class="crwody-footer-layout row not-space">
				<div class="crwody-footer-logo">CROWDY</div>
				<div class="crowdy-footer-inc">© CROWDY INC.</div>
				<div class="col-xs-12 col-md-4 crowdy-footer-list">
					<div class="row">
						<div class="col-xs-6">
							<div class="crowdy-footer-title">ABOUT CROWDY</div>
							<ul class="crowdy-footer-ul">
								<li><a href="/crowdy/info">크라우디란?</a></li>
								<li><a href="/news/main">새소식</a></li>
								<li><a href="/community/main">커뮤니티 파트너</a></li>
							</ul>
						</div>
						<div class="col-xs-6">
							<div class="crowdy-footer-title">HELP</div>
							<ul class="crowdy-footer-ul">
								<li><a href="/crowdy/help" target="_blank">도움말</a></li>
								<li><a href="/crowdy/term?menu=1">회원가입 기본약관</a></li>
								<li><a href="/crowdy/term?menu=2">CROWDY 리워드 이용약관</a></li>
								<li><a href="/crowdy/term?menu=3">CROWDY 투자 이용약관</a></li>
								<li><a href="/crowdy/term?menu=4">개인정보 처리방침(리워드)</a></li>
								<li><a href="/crowdy/term?menu=5">개인정보 처리방침(투자)</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="col-md-8 col-xs-12">
					<hr class="hidden-lg hidden-md"
						style="margin-left: -18px; margin-right: -18px;">
					<div class="crowdy-footer-dangerTitle xs-mt20">투자위험고지</div>
					<div class="mt5 crowdy-footer-dangerDesc">
						스타트업 투자는 원금 손실과 유동성 및 현금성에 대한 투자위험을 가지고 있습니다. <br
							class="hidden-xs hidden-md ">투자 전에 투자위험고지를 꼭 확인해주세요. <br
							class="hidden-lg "> <a class="crowdy-color-blue"
							data-target="#irnModal" data-toggle="modal" href="#">투자위험고지
							바로가기 <i aria-hidden="true" class="fa fa-angle-right ml5"></i>
						</a>
					</div>
					<div class="mt20 xs-mt10 crowdy-footer-dangerDesc">
						㈜크라우디는 중개업(온라인소액투자중개 및 통신판매중개)을 영위하는 플랫폼 제공자로 자금을 모집하는<br
							class="hidden-xs hidden-md "> 당사자가 아닙니다. 따라서 투자손실의 위험을 보전하거나
						리워드 제공을 보장해 드리지 않으며 이에 대한 법적인 <br class="hidden-xs hidden-md ">책임을
						지지 않습니다. <br>
						<br>
						<div class="hidden-xs hidden-sm">
							<a href="https://goo.gl/maps/WhfViBP2f6WVWMLA7"
								style="font-size: 12px" target="_blank">경기도 성남시 수정구 대왕판교로
								815 기업지원허브 814호</a> | 리워드 031-8039-5569 | 투자 070-8633-3183,
							031-8039-5568
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="crowdy-footer-bottom">
			<div class="container">
				<div class="row row-mobile-n">
					<div class="col-md-5 col-xs-12 crowdy-footer-linkBox">
						<div class="col-sm-6 col-xs-12 md-pl0">
							<b>리워드</b> <a class="nth-child3"
								href="https://www.facebook.com/ycrowdy" target="_blank"><img
								class="ml5" src="/resources/img/Sns_fb_icon.png"></a> <a
								class="nth-child8" href="http://pf.kakao.com/_tYuWu"
								target="_blank"><img src="/resources/img/Sns_kt_icon.png"></a>
							<a class="nth-child9"
								href="https://www.youtube.com/channel/UC4S5gcgft2CC2epZlkxww1Q"
								target="_blank"><img class="ml5"
								src="/resources/img/Sns_yt_icon.png"></a> <a
								class="nth-child9" href="http://blog.naver.com/crowdy0903"
								target="_blank"><img class="ml5"
								src="/resources/img/Sns_nv_icon.png"></a>
						</div>
						<div class="col-sm-6 col-xs-12 xs-mt10 xs-pl13">
							<b>투자</b> <a class="nth-child3"
								href="https://www.facebook.com/crowdy.invest" target="_blank"><img
								class="ml5" src="/resources/img/Sns_fb_icon.png"></a> <a
								class="nth-child8" href="https://pf.kakao.com/_MxhTVd"
								target="_blank"><img src="/resources/img/Sns_kt_icon.png"></a>
							<a class="nth-child9"
								href="https://www.youtube.com/channel/UC4S5gcgft2CC2epZlkxww1Q"
								target="_blank"><img class="ml5"
								src="/resources/img/Sns_yt_icon.png"></a> <a
								class="nth-child9" href="http://naver.me/GmoP5Mby"
								target="_blank"><img class="ml5"
								src="/resources/img/Sns_nv_icon.png"></a>
						</div>
					</div>
					<div class="col-md-7 col-xs-12 crowdy-footer-comInfo">
						<hr class="hidden-lg hidden-md"
							style="margin-left: -18px; margin-right: -18px;">
						통신판매업신고 : 2020-서울서초-0232 |&nbsp; 사업자등록번호 : 841 - 86 - 00201
						|&nbsp; 대표자 : 김기석, 김주원 <span class="hidden-lg hidden-md"
							style="display: inline-block;">|</span> <br class="hidden-xs">
						벤처인증기업 : 제 20180300861 호
					</div>
				</div>
			</div>
		</div>
		</footer>

		<div class="page-loader-more">
			<div class="page-load">
				<div class="f_circleG" id="frotateG_01"></div>
				<div class="f_circleG" id="frotateG_02"></div>
				<div class="f_circleG" id="frotateG_03"></div>
				<div class="f_circleG" id="frotateG_04"></div>
				<div class="f_circleG" id="frotateG_05"></div>
				<div class="f_circleG" id="frotateG_06"></div>
				<div class="f_circleG" id="frotateG_07"></div>
				<div class="f_circleG" id="frotateG_08"></div>
			</div>
		</div>
		<div class="modal fade" data-backdrop="static" data-keyboard="false"
			id="irnModal" role="dialog" tabindex="-1">
			<div class="modal-dialog">
				<form class="modal-content form-horizontal">
					<div class="modal-header modal-header-black">
						<button aria-label="Close" class="close" data-dismiss="modal"
							type="button">
							<span aria-hidden="true">×</span>
						</button>
						<div class="modal-title">투자위험고지</div>
					</div>
					<div class="modal-body">
						<div class="pay_info_wrap pb0">
							<div class="step-q">
								<div class="step-q-num">1</div>
								<div class="step-q-memo">귀하는 본 금융투자상품이 자본시장법에 따른 “증권”에
									해당되므로 원본손실 위험성이 있다는 것을 확인합니다. 따라서 투자한 자금의 원본손실의 위험이 있으며, 발행인이
									제시한 예상 수익과, 귀하가 예상하는 수익이나 기대하는 수익의 일부 또는 전부를 얻지 못할 수 있음을 확인합니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">2</div>
								<div class="step-q-memo">귀하는 (주)크라우디가 자본시장법에 따른
									“온라인소액투자중개업자”의 지위에서 온라인소액증권 발행인과 온라인소액투자 중개계약을 체결하여 위 발행인이 발행하는
									증권에 대한 청약 거래를 중개 역할만 하므로, 직접 증권을 발행하거나 주금을 납입 받지 않는다는 것을 알고
									있습니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">3</div>
								<div class="step-q-memo">귀하는 (주)크라우디의 홈페이지에 게재되어 모집되는 증권의
									취득에 따른 투자위험요소, 증권의 발행조건, 발행인의 재무상태가 기재된 서류 및 사업계획서의 내용을 충분히
									확인하였으며, 또한 게재된 사항은 청약기간 종료 전에 정정될 수 있다는 점을 인지하고 있습니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">4</div>
								<div class="step-q-memo">귀하는 (주)크라우디는 온라인소액중개 플랫폼으로써
									크라우드펀딩으로 자금을 모집하는 단순 중개자로서의 역할만 수행하므로 투자손실의 위험을 보전하는 당사자가 아님을
									확인합니다. 투자에 대한 모든 위험은 투자자 본인에게 있음을 확인합니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">5</div>
								<div class="step-q-memo">귀하는 금번에 발행되는 비상장 증권의 발행이 한국거래소의
									상장을 목적으로 하는 것이 아니며, 따라서 증권의 환금성에 큰 제약이 있다는 점과 예상 회수금액에 대한 일부 혹은
									전부를 회수할 수 없는 위험이 있음을 이해하며, 귀하가 이를 감당할 수 있음을 확인합니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">6</div>
								<div class="step-q-memo">발행인이 증권의 발행조건과 관련하여 상환조건, 전환조건을
									설정하거나, 이해관계자에 대해 특정한 조건을 설정한 경우 이에 대한 구체적인 내용을 홈페이지 혹은 IR보고서에서
									확인해야 함을 인지하고 있습니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">7</div>
								<div class="step-q-memo">귀하는 “자본시장과 금융투자업에 관한 법률” 제117조의
									10 제7항에 따라 발행된 증권이 예외없이 예탁결제원에 예탁 혹은 보호예수 되며 전문투자자에 대한 매도 등
									예외적인 경우를 제외하고는 원칙적으로 6개월간 전매가 제한된다는 점을 이해합니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">8</div>
								<div class="step-q-memo">귀하는 청약기간 중에는 청약의 철회를 할 수 있으나,
									청약기간 종료일 이후에는 청약을 철회할 수 없으며, 모집예정금액의 80% 미달 시 증권발행이 취소되며, 귀하의
									청약증거금은 투자예치금 계좌에 복원됩니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">9</div>
								<div class="step-q-memo">귀하는 **개인정보보호정책(투자)**을 확인하였으며,
									귀하에게 서비스 제공과 원활한 계약사항의 이행을 위해 본 약관에 허용된 범위에 한하여 제3자에게 개인정보가 제공될
									수 있음에 동의합니다. [개인정보보호정책(투자)
									확인하기](https://www.ycrowdy.com/crowdy/term?menu=5)</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">10</div>
								<div class="step-q-memo">귀하는 **CROWDY 이용약관(투자)**을 확인하였으며,
									투자정보의 게재, 청약의 방법, 청약의 주문 및 철회, 모집결과의 게시 및 통보에 관한 사항 등 온라인소액투자
									중개 서비스 이용에 대한 약관 내용에 동의합니다. [CROWDY 이용약관(투자)
									확인하기](https://www.ycrowdy.com/crowdy/term?menu=3)</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">11</div>
								<div class="step-q-memo">(주)크라우디는 온라인소액증권 청약과 관련하여 투자자들에게
									별도의 수수료 (CROWDY 서비스 이용료 등)를 징수하지 않습니다. 다만 청약증거금 용도의 자금을 투자예치금
									계좌에 이체할 때, 이용하는 은행의 정책에 따라 타행이체의 경우 이체 수수료가 발생할 수 있습니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">12</div>
								<div class="step-q-memo">(주)크라우디는 발행인의 요청에 따라(법적으로 설정 가능한)
									청약 시 합리적으로 명확한 기준(선착순, 금액순, 전문투자자순 등)에 따라 투자자의 자격 등을 제한할 수 있으므로
									해당 기준과 조건에 따라 청약의 우대 및 차별을 받게 될 수 있음을 인지합니다.</div>
								<div class="clearfix"></div>
							</div>
							<div class="step-q">
								<div class="step-q-num">13</div>
								<div class="step-q-memo">위 사항들은 청약 주문 거래에 수반되는 위험과 제도와
									관련하여 귀하가 알아야할 내용 및 사안을 간략하게 서술한 것으로 본 거래와 관련하여 발생될 수 있는 모든 위험과
									중요사항이 전부 기술된 것은 아닙니다. 따라서 상세내용은 관계법규 및 (주)크라우디의 CROWDY
									이용약관(투자)와 개인정보보호정책(투자)을 통해 확인하여야 합니다. 또한 본 고지는 청약 주문 거래와 관련된 법규
									등에 우선하지 못한다는 점을 양지하여 주시기 바랍니다.</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="row not-space">
							<a class="modalBlueBtn" data-dismiss="modal">확인</a>
						</div>
					</div>
				</form>
			</div>
		</div>

		<div class="clearfix"></div>
		<script type="text/javascript">
(function(w, d, a){
	w.__beusablerumclient__ = {
		load : function(src){
			var b = d.createElement("script");
			b.src = src; b.async=true; b.type = "text/javascript";
			d.getElementsByTagName("head")[0].appendChild(b);
		}
	};w.__beusablerumclient__.load(a);
})(window, document, '//rum.beusable.net/script/b180711e153144u381/0b252100fa');
</script>

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
					<div class="sc-gzVnrw dUfzXY textLauncherIcon">
						<div hidden="" class="sc-bxivhb sc-dnqmqq fwAFts">0</div>
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
	<script
		src="chrome-extension://ofgdcdohlhjfdhbnfkikfeakhpojhpgm/web_accessible_resources/index.js"></script>
	<style data-styled="" data-styled-version="4.4.1"></style>
	<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","112654742726251");fbq("track","PageView");</script>
	<noscript>
		<img height="1" width="1" style="display: none"
			src="https://www.facebook.com/tr?id=112654742726251&amp;ev=PageView&amp;noscript=1">
	</noscript>




	<script type="text/javascript" id="">function fbqSearchKeyword(){var a=document.referrer;if(a){var b=document.createElement("a");b.setAttribute("href",a);a=/[\?&](?:q|query)=([^&#]*)/;if((a=b.search.match(a))&&0<a.length)var c=a[1].replace(/\+/gi,"%20");c&&fbq("trackCustom","SearchKeyword",{hostname:b.hostname,keyword:decodeURIComponent(c)})}}fbqSearchKeyword();</script>

	<script type="text/javascript" id="">(function(e,a){function f(b,a){b.prototype[a]=function(){this._q.push([a].concat(Array.prototype.slice.call(arguments,0)));return this}}function g(b){function a(a){b[a]=function(){b._q.push([a].concat(Array.prototype.slice.call(arguments,0)))}}for(var c=0;c<h.length;c++)a(h[c])}var c=e.amplitude||{_q:[],_iq:{}},b=a.createElement("script");b.type="text/javascript";b.integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta";b.crossOrigin="anonymous";b.async=!0;b.src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js";
b.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a);b=function(){this._q=[];return this};a="add append clearAll prepend set setOnce unset".split(" ");for(var d=0;d<a.length;d++)f(b,a[d]);c.Identify=b;b=function(){this._q=[];return this};a=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(d=0;d<a.length;d++)f(b,a[d]);c.Revenue=b;var h="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId enableTracking setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId groupIdentify onInit logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");
g(c);c.getInstance=function(a){a=(a&&0!==a.length?a:"$default_instance").toLowerCase();c._iq.hasOwnProperty(a)||(c._iq[a]={_q:[]},g(c._iq[a]));return c._iq[a]};e.amplitude=c})(window,document);amplitude.getInstance().init("88ee3f94796e2cd53036c329ca2a87ec",null,{includeGclid:!0,includeUtm:!0,includeReferrer:!0});</script>
</body>


</html>