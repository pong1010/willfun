<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	request.setCharacterEncoding("UTF-8");
String cp = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>회원가입 | 크라우디</title>
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
<meta name="description"
	content="크라우드펀딩, 멋진 아이디어, 명품 스타트업, 스타트업 투자, 영화투자">
<meta property="og:title" content="회원가입 | 크라우디">
<meta name="url" property="og:url"
	content="https://www.ycrowdy.com/user/join">
<meta property="og:image"
	content="https://image-se.ycrowdy.com/link/crowdy-main-image.jpg">
<meta property="og:description"
	content="크라우드펀딩, 멋진 아이디어, 명품 스타트업, 스타트업 투자, 영화투자">
<meta name="keywords">

<meta content="" property="product:brand">
<meta content="" property="product:availability">
<meta content="" property="product:condition">
<meta content="" property="product:price:amount">
<meta content="" property="product:price:currency">
<meta content="" property="product:retailer_item_id">

<meta content="213171065778840" property="fb:app_id">
<meta content="website" property="og:type">
<meta content="crowdy" property="og:site_name">
<meta content="1200" property="og:image:width">
<meta content="630" property="og:image:height">


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
	href="//image-se.ycrowdy.com/crowdyCss/custom.min.css?v=20200706_001">

<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/crowdy/crowdy.min.css?v=20200615_002">
<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/crowdy/crowdyCardUI.min.css?v=20200515_002">
<link rel="stylesheet"
	href="//image-se.ycrowdy.com/crowdyCss/crowdy/datepickerCustom.css">



<script
	src="https://connect.facebook.net/ko_KR/sdk.js?hash=ae58b4b425c4c2a46d9d07d665d01a0f&amp;ua=modern_es6"
	async="" crossorigin="anonymous"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/plugins/ua/ec.js"></script>
<script type="text/javascript"
	integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta"
	crossorigin="anonymous" async=""
	src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js"></script>
<script
	src="https://connect.facebook.net/signals/config/112654742726251?v=2.9.22&amp;r=stable"
	async=""></script>
<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
<script type="text/javascript" async=""
	src="//www.googleadservices.com/pagead/conversion_async.js"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/analytics.js"></script>
<script type="text/javascript" async=""
	src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>
<script id="facebook-jssdk"
	src="https://connect.facebook.net/ko_KR/sdk.js?"></script>
<script async=""
	src="https://www.googletagmanager.com/gtm.js?id=GTM-KDPXZ7W"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.min.js"></script>

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
<!-- IE에서 vuejs 사용 못해서 밑에 js 추가 -->
<script
	src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js"></script>
<!--[if lt IE 9]>
		<script th:src="|${jsPath}/html5shiv.min.js|"></script>
	<![endif]-->
<!--[if lt IE 10]>
		<script th:src="|${jsPath}/media.match.min.js|"></script>
		<script th:src="|${jsPath}/respond.min.js|"></script>
	<![endif]-->



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

<script
	src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/882224542/?random=1594088343543&amp;cv=9&amp;fst=1594088343543&amp;num=1&amp;label=NYTuCI7MmWwQntvWpAM&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1040&amp;u_aw=1920&amp;u_cd=24&amp;u_his=17&amp;u_tz=540&amp;u_java=false&amp;u_nplug=3&amp;u_nmime=4&amp;gtm=2wg6o0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww.ycrowdy.com%2Fuser%2Fjoin&amp;ref=https%3A%2F%2Fwww.ycrowdy.com%2Fuser%2Fjoin&amp;tiba=%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%20%7C%20%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%94%94&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
<style type="text/css">
.fb_hidden {
	position: absolute;
	top: -10000px;
	z-index: 10001
}

.fb_reposition {
	overflow: hidden;
	position: relative
}

.fb_invisible {
	display: none
}

.fb_reset {
	background: none;
	border: 0;
	border-spacing: 0;
	color: #000;
	cursor: auto;
	direction: ltr;
	font-family: "lucida grande", tahoma, verdana, arial, sans-serif;
	font-size: 11px;
	font-style: normal;
	font-variant: normal;
	font-weight: normal;
	letter-spacing: normal;
	line-height: 1;
	margin: 0;
	overflow: visible;
	padding: 0;
	text-align: left;
	text-decoration: none;
	text-indent: 0;
	text-shadow: none;
	text-transform: none;
	visibility: visible;
	white-space: normal;
	word-spacing: normal
}

.fb_reset>div {
	overflow: hidden
}

@
keyframes fb_transform {
	from {opacity: 0;
	transform: scale(.95)
}

to {
	opacity: 1;
	transform: scale(1)
}

}
.fb_animate {
	animation: fb_transform .3s forwards
}

.fb_dialog {
	background: rgba(82, 82, 82, .7);
	position: absolute;
	top: -10000px;
	z-index: 10001
}

.fb_dialog_advanced {
	border-radius: 8px;
	padding: 10px
}

.fb_dialog_content {
	background: #fff;
	color: #373737
}

.fb_dialog_close_icon {
	background:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png)
		no-repeat scroll 0 0 transparent;
	cursor: pointer;
	display: block;
	height: 15px;
	position: absolute;
	right: 18px;
	top: 17px;
	width: 15px
}

.fb_dialog_mobile .fb_dialog_close_icon {
	left: 5px;
	right: auto;
	top: 5px
}

.fb_dialog_padding {
	background-color: transparent;
	position: absolute;
	width: 1px;
	z-index: -1
}

.fb_dialog_close_icon:hover {
	background:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png)
		no-repeat scroll 0 -15px transparent
}

.fb_dialog_close_icon:active {
	background:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png)
		no-repeat scroll 0 -30px transparent
}

.fb_dialog_iframe {
	line-height: 0
}

.fb_dialog_content .dialog_title {
	background: #6d84b4;
	border: 1px solid #365899;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	margin: 0
}

.fb_dialog_content .dialog_title>span {
	background:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif)
		no-repeat 5px 50%;
	float: left;
	padding: 5px 0 7px 26px
}

body.fb_hidden {
	height: 100%;
	left: 0;
	margin: 0;
	overflow: visible;
	position: absolute;
	top: -10000px;
	transform: none;
	width: 100%
}

.fb_dialog.fb_dialog_mobile.loading {
	background:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif)
		white no-repeat 50% 50%;
	min-height: 100%;
	min-width: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	z-index: 10001
}

.fb_dialog.fb_dialog_mobile.loading.centered {
	background: none;
	height: auto;
	min-height: initial;
	min-width: initial;
	width: auto
}

.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner {
	width: 100%
}

.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content {
	background: none
}

.loading.centered #fb_dialog_loader_close {
	clear: both;
	color: #fff;
	display: block;
	font-size: 18px;
	padding-top: 20px
}

#fb-root #fb_dialog_ipad_overlay {
	background: rgba(0, 0, 0, .4);
	bottom: 0;
	left: 0;
	min-height: 100%;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 10000
}

#fb-root #fb_dialog_ipad_overlay.hidden {
	display: none
}

.fb_dialog.fb_dialog_mobile.loading iframe {
	visibility: hidden
}

.fb_dialog_mobile .fb_dialog_iframe {
	position: sticky;
	top: 0
}

.fb_dialog_content .dialog_header {
	background: linear-gradient(from(#738aba), to(#2c4987));
	border-bottom: 1px solid;
	border-color: #043b87;
	box-shadow: white 0 1px 1px -1px inset;
	color: #fff;
	font: bold 14px Helvetica, sans-serif;
	text-overflow: ellipsis;
	text-shadow: rgba(0, 30, 84, .296875) 0 -1px 0;
	vertical-align: middle;
	white-space: nowrap
}

.fb_dialog_content .dialog_header table {
	height: 43px;
	width: 100%
}

.fb_dialog_content .dialog_header td.header_left {
	font-size: 12px;
	padding-left: 5px;
	vertical-align: middle;
	width: 60px
}

.fb_dialog_content .dialog_header td.header_right {
	font-size: 12px;
	padding-right: 5px;
	vertical-align: middle;
	width: 60px
}

.fb_dialog_content .touchable_button {
	background: linear-gradient(from(#4267B2), to(#2a4887));
	background-clip: padding-box;
	border: 1px solid #29487d;
	border-radius: 3px;
	display: inline-block;
	line-height: 18px;
	margin-top: 3px;
	max-width: 85px;
	padding: 4px 12px;
	position: relative
}

.fb_dialog_content .dialog_header .touchable_button input {
	background: none;
	border: none;
	color: #fff;
	font: bold 12px Helvetica, sans-serif;
	margin: 2px -12px;
	padding: 2px 6px 3px 6px;
	text-shadow: rgba(0, 30, 84, .296875) 0 -1px 0
}

.fb_dialog_content .dialog_header .header_center {
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	line-height: 18px;
	text-align: center;
	vertical-align: middle
}

.fb_dialog_content .dialog_content {
	background:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif)
		no-repeat 50% 50%;
	border: 1px solid #4a4a4a;
	border-bottom: 0;
	border-top: 0;
	height: 150px
}

.fb_dialog_content .dialog_footer {
	background: #f5f6f7;
	border: 1px solid #4a4a4a;
	border-top-color: #ccc;
	height: 40px
}

#fb_dialog_loader_close {
	float: left
}

.fb_dialog.fb_dialog_mobile .fb_dialog_close_button {
	text-shadow: rgba(0, 30, 84, .296875) 0 -1px 0
}

.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon {
	visibility: hidden
}

#fb_dialog_loader_spinner {
	animation: rotateSpinner 1.2s linear infinite;
	background-color: transparent;
	background-image:
		url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);
	background-position: 50% 50%;
	background-repeat: no-repeat;
	height: 24px;
	width: 24px
}

@
keyframes rotateSpinner { 0%{
	transform: rotate(0deg)
}

100
%
{
transform
:
rotate(
360deg
)
}
}
.fb_iframe_widget {
	display: inline-block;
	position: relative
}

.fb_iframe_widget span {
	display: inline-block;
	position: relative;
	text-align: justify
}

.fb_iframe_widget iframe {
	position: absolute
}

.fb_iframe_widget_fluid_desktop, .fb_iframe_widget_fluid_desktop span,
	.fb_iframe_widget_fluid_desktop iframe {
	max-width: 100%
}

.fb_iframe_widget_fluid_desktop iframe {
	min-width: 220px;
	position: relative
}

.fb_iframe_widget_lift {
	z-index: 1
}

.fb_iframe_widget_fluid {
	display: inline
}

.fb_iframe_widget_fluid span {
	width: 100%
}
</style>
</head>
<body>
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
	<script>
    new Vue({
        el : '#noti',
        data : {
            text : '',
            callback : {},
            cancelButton : false
        },
        created : function() {
            window.noti = this;
        },
        methods : {
            open : function(val, callback, cancelButton) {
                this.text = val;
                this.callback = callback;
                this.cancelButton = cancelButton;
                $('#noti').modal({backdrop: 'static', keyboard: false});
            },
            dismiss : function(check) {
                this.text = '';
                $('#noti').modal('hide');
                if(this.callback && check) {
                    this.callback();
                }
            }
        }

    })
</script>
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
	<script>
    new Vue({
        el : '#info',
        data : {
            text : '',
            callback : {},
            cancelButton : false,
            okButtonText : '확인',
            buttonCentor : false
        },
        created : function() {
            window.info = this;
        },
        methods : {
            popupOpen : function(val, okButton) {
                this.text = val;
                this.okButtonText = okButton;
                this.buttonCentor = true;
                $('#info').modal({backdrop: 'static', keyboard: false});
            },
            popupOpenCallback : function(val, callback, okButton) {
                this.text = val;
                this.callback = callback;
                this.okButtonText = okButton;
                this.buttonCentor = true;
                $('#info').modal({backdrop: 'static', keyboard: false});
            },
            open : function(val, callback, cancelButton) {
                this.text = val;
                this.callback = callback;
                this.okButtonText = '확인';
                this.cancelButton = cancelButton;
                this.buttonCentor = false;
                $('#info').modal({backdrop: 'static', keyboard: false});
            },
            dismiss : function(check) {
                this.text = '';
                $('#info').modal('hide');
                if(this.callback && check) {
                    this.callback();
                }
            }
        }

    })
</script>


	<!-- DEV : //image-se.ycrowdy.com/test -->
	<!-- <body layout:fragment="content" th:with="cssPath='//image-se.ycrowdy.com/testCss', jsPath='//image-se.ycrowdy.com/testJs', distPath='//image-se.ycrowdy.com/testDist'"> -->
	<!-- REAL : //image-se.ycrowdy.com -->


	<script
		src="//cdnjs.cloudflare.com/ajax/libs/vee-validate/2.0.0-rc.7/vee-validate.min.js"></script>
	<script
		src="//cdnjs.cloudflare.com/ajax/libs/vee-validate/2.0.0-rc.7/locale/ko.js"></script>
	<script charset="utf-8"
		src="//static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"></script>
	<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
	<script
		src="//image-se.ycrowdy.com/crowdyJs/customer.script.min.js?v20200703v01"></script>
	<script
		src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"></script>



	<script
		src="//image-se.ycrowdy.com/crowdyDist/component_member.45a53b07d3a02d927d6b.js"></script>


	<div class="page-wrapper">
		<div class="hidden-xs">

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
								<li><a href="/reward/list" class="dropdown-toggle">리워드</a></li>
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
							<li><a href="/reward/list" class="mobile-anav">리워드</a></li>
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
			<script>
/*<![CDATA[*/
	new Vue({
		el : "#user",
		data : {
			sessionCheck : null
		},
		components : {
			crowdyNav : crowdy.nav.component()
		}
	});
	
	$( ".gnb_card_close, .gnb_card_wrap" ).on( "click", function() {
		$( "body" ).removeClass( "gnb_card_open" );
	});

	$('.webuiPopover').webuiPopover({
        defaults: {
            trigger: "click",
            width: 320,
            multi: true,
            cloaseable: false,
            style: "",
            delay: 300,
            padding: true
        }
    });
/*]]>*/
</script>

		</div>

		<div id="join">
			<div class="crowdy-login-layout mb100">
				<div class="hidden-sm hidden-md hidden-lg crowdy-login-backBtn">
					<i aria-hidden="true" class="fa fa-angle-left"></i>
				</div>
				<div class="crowdy-login-tilte">
					1분이면 끝나는 <br class="hidden-xs">회원가입<span
						class="crowdy-color-blue">.</span>
				</div>
				<ul role="tablist"
					class="nav nav-tabs nav-justified crowdy-nav-custom mt70 xs-mt20 xs-mb15">
					<li role="presentation" class="active"><a
						href="javascript:void(0)" aria-controls="individual" role="tab"
						data-toggle="tab">개인회원</a></li>
					<li role="presentation"><a href="javascript:void(0)"
						aria-controls="corporation" role="tab" data-toggle="tab">법인회원</a></li>
					<li role="presentation"><a href="javascript:void(0)"
						aria-controls="combination" role="tab" data-toggle="tab">조합회원</a></li>
				</ul>
				<label
					class="crowdy-check-container01 crowdy-login-agreeText01 mt20 xs-mt0">전체동의
					<input type="checkbox"> <span class="crowdy-check-mark01"></span>
				</label> <i aria-hidden="true"
					class="fa ml20 crowdy-login-customArr fa-angle-down"></i>
				<div class="crowdy-login-desc1 ml20">회원가입 기본약관, CROWDY 이용약관,
					개인정보 취급방침, 크라우디 소식과 다양한 안내(선택)</div>
				<!---->
				<hr class="mt20">
				<div class="crowdy-btn-03 mt35 xs-mt25">
					<div class="crowdy-btn-centerLayout">
						<div class="crowdy-facebook-icon" style="margin-right: 10px;"></div>
						<div>페이스북으로 회원가입</div>
					</div>
				</div>
				<div class="displayFlex mt20 xs-mt15">
					<div class="crowdy-btn-03 mr15 xs-mr10">
						<div class="crowdy-btn-centerLayout">
							<div class="crowdy-kakao-icon" style="margin-right: 10px;"></div>
							<div>카카오로 회원가입</div>
						</div>
					</div>
					<div class="crowdy-btn-03">
						<div class="crowdy-btn-centerLayout">
							<div class="crowdy-naver-icon" style="margin-right: 10px;"></div>
							<div>네이버로 회원가입</div>
						</div>
					</div>
				</div>
				<div class="mt30 xs-mt10">
					<hr class="crowdy-login-hr"><span class="crowdy-login-txtWidth">또는</span>	<hr class="crowdy-login-hr">
				</div>
				<div class="crowdy-btn-03 mt30 xs-mt5">이메일로 회원가입</div>
				<!---->
				<!---->
				<form name="form_chk" method="post">
					<input type="hidden" name="m" value="checkplusSerivce"> 
					<input type="hidden" name="EncodeData" id="encodeData" value="">
					<input type="hidden" name="param_r1"
						value="accountSetting.authResult"> 
					<input type="hidden"
						name="param_r2" value=""> 
					<input type="hidden"
						name="param_r3" value="">
				</form>
			</div>
		</div>

		<script>
			var attr = {
				memPwd : "비밀번호",
				memPwdConfirm : "비밀번호 확인"
			}

			Vue.use(VeeValidate)

			var dictionary = {
		  		en: {
			    	messages: {
		      			email: function() {
		      				return "올바른 이메일 형식이 아닙니다."
		      			},
		      			required: function(field) {
		      				return "필수 입력란입니다."
		      			},
			      		confirmed: function(field, confirmedField) {
			      			return attr[confirmedField] + " 와 일치하지 않습니다."
			      		},
			      		min : function(field, length) {
			      			return attr[field] + "는 최소한" + length + "글자보다 커야 합니다."
			      		}
			    	}
			  	}
			}

			VeeValidate.Validator.updateDictionary(dictionary)
			
			var join = new Vue({
				el : "#join",
				components : {
					join : member.join.component()
                }
				
			})
		</script>
		<!-- 
		<footer th:replace="fragments/footer"></footer>
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



	<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","112654742726251");fbq("track","PageView");</script>
	<noscript>
		<img height="1" width="1" style="display: none"
			src="https://www.facebook.com/tr?id=112654742726251&amp;ev=PageView&amp;noscript=1">
	</noscript>




	<script type="text/javascript" id="">function fbqSearchKeyword(){var a=document.referrer;if(a){var b=document.createElement("a");b.setAttribute("href",a);a=/[\?&](?:q|query)=([^&#]*)/;if((a=b.search.match(a))&&0<a.length)var c=a[1].replace(/\+/gi,"%20");c&&fbq("trackCustom","SearchKeyword",{hostname:b.hostname,keyword:decodeURIComponent(c)})}}fbqSearchKeyword();</script>

	<script type="text/javascript" id="">(function(e,a){function f(b,a){b.prototype[a]=function(){this._q.push([a].concat(Array.prototype.slice.call(arguments,0)));return this}}function g(b){function a(a){b[a]=function(){b._q.push([a].concat(Array.prototype.slice.call(arguments,0)))}}for(var c=0;c<h.length;c++)a(h[c])}var c=e.amplitude||{_q:[],_iq:{}},b=a.createElement("script");b.type="text/javascript";b.integrity="sha384-vYYnQ3LPdp/RkQjoKBTGSq0X5F73gXU3G2QopHaIfna0Ct1JRWzwrmEz115NzOta";b.crossOrigin="anonymous";b.async=!0;b.src="https://cdn.amplitude.com/libs/amplitude-5.8.0-min.gz.js";
b.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};a=a.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a);b=function(){this._q=[];return this};a="add append clearAll prepend set setOnce unset".split(" ");for(var d=0;d<a.length;d++)f(b,a[d]);c.Identify=b;b=function(){this._q=[];return this};a=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(d=0;d<a.length;d++)f(b,a[d]);c.Revenue=b;var h="init logEvent logRevenue setUserId setUserProperties setOptOut setVersionName setDomain setDeviceId enableTracking setGlobalUserProperties identify clearUserProperties setGroup logRevenueV2 regenerateDeviceId groupIdentify onInit logEventWithTimestamp logEventWithGroups setSessionId resetSessionId".split(" ");
g(c);c.getInstance=function(a){a=(a&&0!==a.length?a:"$default_instance").toLowerCase();c._iq.hasOwnProperty(a)||(c._iq[a]={_q:[]},g(c._iq[a]));return c._iq[a]};e.amplitude=c})(window,document);amplitude.getInstance().init("88ee3f94796e2cd53036c329ca2a87ec",null,{includeGclid:!0,includeUtm:!0,includeReferrer:!0});</script>
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
	<style data-styled="" data-styled-version="4.4.1"></style>
	<div id="fb-root" class=" fb_reset">
		<div
			style="position: absolute; top: -10000px; width: 0px; height: 0px;">
			<div></div>
		</div>
	</div>
</body>
</html>