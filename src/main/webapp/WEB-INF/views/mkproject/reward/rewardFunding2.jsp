<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	request.setCharacterEncoding("UTF-8");
String cp = request.getContextPath();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>크라우드펀딩 | 크라우디</title>
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
<meta property="og:title" content="크라우드펀딩 | 크라우디">
<meta name="url" property="og:url"
	content="https://www.ycrowdy.com/make/reward/main/1000008073">
<meta property="og:image">
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
	href="/resources/willfun/css/common.min.css">
<link rel="stylesheet"
	href="/resources/willfun/css/theme.min.css">
<link rel="stylesheet"
	href="/resources/willfun/css/custom.min.css">

<link rel="stylesheet"
	href="/resources/willfun/css/crowdy.min.css">
<link rel="stylesheet"
	href="/resources/willfun/css/crowdyCardUI.min.css">
<link rel="stylesheet"
	href="/resources/willfun/css/datepickerCustom.css">



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
	src="//www.googleadservices.com/pagead/conversion_async.js"></script>
<script type="text/javascript" async=""
	src="https://www.google-analytics.com/analytics.js"></script>
<script
	src="https://connect.facebook.net/ko_KR/sdk.js?hash=c1c2f3664e322f4961bc88f992a9b354&amp;ua=modern_es6"
	async="" crossorigin="anonymous"></script>
<script type="text/javascript" async=""
	src="https://cdn.channel.io/plugin/ch-plugin-web.js" charset="UTF-8"></script>
<script id="facebook-jssdk"
	src="https://connect.facebook.net/ko_KR/sdk.js?v=20171117"></script>
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
	src="/resources/willfun/js/component_crowdy.js"></script>


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
	src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/882224542/?random=1593602134662&amp;cv=9&amp;fst=1593602134662&amp;num=1&amp;label=NYTuCI7MmWwQntvWpAM&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;eid=376635471&amp;u_h=763&amp;u_w=1275&amp;u_ah=763&amp;u_aw=1275&amp;u_cd=24&amp;u_his=15&amp;u_tz=540&amp;u_java=false&amp;u_nplug=0&amp;u_nmime=0&amp;gtm=2wg6o0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fwww.ycrowdy.com%2Fmake%2Freward%2Fmain%2F1000008073&amp;ref=https%3A%2F%2Fwww.ycrowdy.com%2Fmake%2Fstart&amp;tiba=%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%93%9C%ED%8E%80%EB%94%A9%20%7C%20%ED%81%AC%EB%9D%BC%EC%9A%B0%EB%94%94&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
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


rotate
(


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
<!-- tinymce skin 관련 css -->
<link rel="stylesheet" type="text/css" id="u0"
	href="/resources/willfun/css/skin.min.css">
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


	<link
		href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css"
		rel="stylesheet">
	<link rel="stylesheet"
		href="/resources/willfun/css/select-box.min.css">


	<!-- dropify.css가 수정되어 있기 때문에 cdn에 있는 내용과 다름 -->
	<link href="/resources/willfun/css/dropfy2.css" rel="stylesheet">


	<!-- bootstrap-tokenfield.css가 수정되어 있기 때문에 cdn에 있는 내용과 다름 -> 그걸 가지고 min 다시 만듬 -->
	<link
		href="/resources/willfun/css/bootstrap-tokenfield.min.css"
		rel="stylesheet">


	<link rel="stylesheet"
		href="/resources/willfun/css/custom_shinhan.min.css">


	<link rel="stylesheet"
		href="/resources/willfun/css/custom-tinymce.min.css">



	<script
		src="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>


	<script
		src="//cdnjs.cloudflare.com/ajax/libs/accounting.js/0.4.1/accounting.min.js"></script>
	<script src="/resources/willfun/js/vue-numeric.min.js"></script>


	<script
		src="//cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/js/dropify.min.js"></script>


	<script
		src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-tokenfield/0.12.0/bootstrap-tokenfield.min.js"></script>
	<!-- cdn꺼 넣으면 에디터가 안나오니 그냥 resources꺼 사용 -->
	<script src="/resources/js/tinymce/tinymce.min.js"></script>
	<script src="/resources/js/tinymce/langs/ko_KR.js"></script>


	<script
		src="//cdnjs.cloudflare.com/ajax/libs/vee-validate/2.0.0-rc.7/vee-validate.min.js"></script>
	<script
		src="//cdnjs.cloudflare.com/ajax/libs/vee-validate/2.0.0-rc.7/locale/ko.js"></script>
	<script charset="utf-8"
		src="//static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"></script>
	<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
	<script
		src="/resources/willfun/css/customer.script.min.js"></script>
	<script
		src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"></script>



	<script
		src="/resources/willfun/js/component_make.js"></script>


	<div class="page-wrapper" id="page">

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
							<li><div class="gnb_card_background"></div> <a href="#"
								class="dropdown-toggle open_my_card"> 마이페이지 </a></li>
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
					<a href="#" class="open_my_card mobile-icon-login"><span>마이페이지</span></a>
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
								class="caret"></span>
						</a>
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
									<div class="user_name">천홍철</div>
									<div class="user_email">cjsghdcjf@nate.com</div>
								</div>
							</div>
						</div>
						<div class="gnb_card_body">
							<ul>
								<li><a href="#">펀딩한 프로젝트</a></li>
								<li><a href="/mypage/main?menu=2">제작한 프로젝트</a></li>
								<li><a href="/mypage/main?menu=3">관심 프로젝트</a></li>
								<li><a href="/mypage/main?menu=5">설정</a></li>
								<li><a href="javascript:void(0);">로그아웃</a></li>
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
			sessionCheck : true
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

		<div class="enot_wrap hidden-md hidden-lg">
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-4">
					<div class="enot_logo"></div>
				</div>
				<div class="col-sm-6 col-md-4">
					<div class="enot_oops mt50 xs-mt25"></div>
					<div class="enot_text">
						앗! 죄송해요..
						<p>
							모바일은 지원하지 않습니다. ㅠ_ㅠ <br> PC로 이용해주세요
						</p>
					</div>
					<div class="btn_wrap">
						<a class="btn btn-primary-outline" href="/">메인화면으로</a>
					</div>
				</div>
				<div class="col-md-2"></div>
			</div>
		</div>

		<div id="reward-make">
			<div id="list_wrap"
				class="common_support hidden-xs hidden-sm reward-make-main">
				<div class="common_sub_vi bg_gray">
					<div class="container">
						<div class="row not-space">
							<div class="col-md-3">
								<div class="common_vi_title webfont2">스토리</div>
							</div>
							<div class="col-md-4 text-right"></div>
							<div class="col-md-5">
								<div class="row">
									<div class="col-md-6">
										<a class="btn btn-block btn-primary-outline">가이드북 다운로드</a>
									</div>
									<div class="col-md-6">
										<button type="button" href="javascript:void(0)"
											class="btn btn-block btn-danger-outline">승인 요청하기</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="common_sub_layout">
					<div class="container">
						<div class="row not-space">
							<div class="col-md-2">
								<div class="col-line-lm">
									<div class="st-navi-device-wrap">
										<span>프로젝트 미리보기</span>
										<div class="st-navi-device">
											<a>모바일</a> <a>태블릿</a> <a>PC</a>
										</div>
									</div>
									<ul class="st-navi st-navi-p">
										<li class="active"><a href="javascript:void(0)">프로젝트
												만들기</a>
											<div class="list_link_tab">
												<ul>
													<li class=""><a href="javascript:void(0)">1. 기본정보</a></li>
													<li class="active"><a href="javascript:void(0)">2.
															스토리</a></li>
													<li class=""><a href="javascript:void(0)">3. 리워드</a></li>
													<li class=""><a href="javascript:void(0)">4.
															제작자/부가 정보</a></li>
												</ul>
											</div></li>
									</ul>
									<div style="cursor: pointer;">
										<img
											src="https://image-se.ycrowdy.com/crowdyCss/img/mypage_banner.png"
											style="width: 180px; padding-right: 10px;">
									</div>
								</div>
							</div>
							<!---->
							<div class="col-md-10 col-line">
								<div class="row not-space">
									<div class="col-lg-1"></div>
									<div class="col-lg-11">
										<div class="md-ml30">
											<form id="combinationForm" method="get" action="#"
												class="form-horizontal">
												<div class="form-group row-mobile-n">
													<label for="project_vod"
														class="col-xs-12 control-label control-label-big"><div
															class="text-left mb10">프로젝트 소개 영상과 이미지를 등록해주세요</div>
														<p class="form-control-static mb10 mt0">영상과 이미지를 함께
															등록할 경우, 영상이 먼저 보여집니다.</p></label>
													<div class="col-xs-12">
														<div class="row row-mobile-n">
															<label for="vod_gallery" class="col-xs-12 control-label"><div
																	class="text-left">동영상 주소를 적어주세요</div></label>
															<div class="vod-holder input-append">
																<div class="row row-mobile-n">
																	<div class="col-xs-10 col-sm-7">
																		<input type="text"
																			placeholder="YouTube, Vimeo  URL을 입력해주세요"
																			class="form-control">
																	</div>
																	<div class="col-xs-2 col-sm-1"
																		style="display: -webkit-box;">
																		<span class="files-add vod-add"
																			style="margin-right: 10px;">+</span>
																		<!---->
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="col-xs-12 mt25">
														<label for="eligible[]" class="control-label"><div
																class="text-left">이미지를 등록해주세요</div></label>
														<div class="row">
															<div
																class="eligible-holder input-append dropify-wrapper-197 col-xs-6 col-sm-3 mt10">
																<div class="dropify-wrapper touch-fallback">
																	<div class="dropify-message">
																		<span class="file-icon"></span>
																		<p>최적 사이즈 740×417px</p>
																		<p class="dropify-error">오류가 발생하였습니다.</p>
																	</div>
																	<div class="dropify-loader"></div>
																	<div class="dropify-errors-container">
																		<ul></ul>
																	</div>
																	<input type="file"
																		data-allowed-file-extensions="png jpg jpeg"
																		data-max-file-size-preview="5M"
																		class="dropify dropify-gallery">
																	<button type="button" class="dropify-clear">삭제</button>
																	<div class="dropify-preview">
																		<span class="dropify-render"></span>
																		<div class="dropify-infos">
																			<div class="dropify-infos-inner">
																				<p class="dropify-filename">
																					<span class="file-icon"></span> <span
																						class="dropify-filename-inner"></span>
																				</p>
																				<p class="dropify-infos-message">터치 하여 이미지를 교체
																					합니다</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="col-xs-6 col-sm-3 dropify-wrapper-197 mt10">
																<div class="dropify-wrapper dropify-wrapper-plus">+</div>
															</div>
														</div>
													</div>
												</div>

												<div class="form-group row-mobile-n">
													<label for="project_story"
														class="col-xs-12 control-label control-label-big"><div
															class="text-left mb10">프로젝트 스토리를 적어주세요</div>
														<p class="form-control-static mb10 mt0">
															<a class="red-800">프로젝트를 시작하기 위해 필요한 내용이 없다면 승인이 되지
																않습니다. 프로젝트 가이드북</a>을 읽어보시고 매력적인 스토리를 적어주세요.
														</p></label>
													<div class="col-xs-12">
														<div>
															<div class="common-flex-between-center">
																<div class="mb15">
																	Enter(↵) : 문단 나눔, Shift + Enter : 줄바꿈입니다! <br> 적절한
																	문단/줄 바꿈만으로 멋진 프로젝트를 완성 할 수 있습니다! <br> 이미지와 영상은 꼭
																	버튼을 이용하여 첨부해주세요.
																</div>
																<a
																	href="https://image-se.ycrowdy.com/file/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5_%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%AD%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5_ver1.pdf"
																	target="_blank" class="btnGuide1"></a>
															</div>
															<div id="mceu_15"
																class="mce-tinymce mce-container mce-panel"
																hidefocus="1" tabindex="-1" role="application"
																style="visibility: hidden; border-width: 1px;">
																<div id="mceu_15-body"
																	class="mce-container-body mce-stack-layout">
																	<div id="mceu_16"
																		class="mce-toolbar-grp mce-container mce-panel mce-stack-layout-item mce-first"
																		hidefocus="1" tabindex="-1" role="group">
																		<div id="mceu_16-body"
																			class="mce-container-body mce-stack-layout">
																			<div id="mceu_17"
																				class="mce-container mce-toolbar mce-stack-layout-item mce-first mce-last"
																				role="toolbar">
																				<div id="mceu_17-body"
																					class="mce-container-body mce-flow-layout">
																					<div id="mceu_18"
																						class="mce-container mce-flow-layout-item mce-first mce-btn-group"
																						role="group">
																						<div id="mceu_18-body">
																							<div id="mceu_0"
																								class="mce-widget mce-btn mce-first mce-disabled"
																								tabindex="-1" aria-labelledby="mceu_0"
																								role="button" aria-label="Undo"
																								aria-disabled="true">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-undo"></i>
																								</button>
																							</div>
																							<div id="mceu_1"
																								class="mce-widget mce-btn mce-last mce-disabled"
																								tabindex="-1" aria-labelledby="mceu_1"
																								role="button" aria-label="Redo"
																								aria-disabled="true">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-redo"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																					<div id="mceu_19"
																						class="mce-container mce-flow-layout-item mce-btn-group"
																						role="group">
																						<div id="mceu_19-body">
																							<div id="mceu_2"
																								class="mce-widget mce-btn mce-menubtn mce-first mce-last mce-btn-has-text"
																								tabindex="-1" aria-labelledby="mceu_2"
																								role="button" aria-haspopup="true">
																								<button id="mceu_2-open" role="presentation"
																									type="button" tabindex="-1">
																									<span class="mce-txt">문단서식</span> <i
																										class="mce-caret"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																					<div id="mceu_20"
																						class="mce-container mce-flow-layout-item mce-btn-group"
																						role="group">
																						<div id="mceu_20-body">
																							<div id="mceu_3"
																								class="mce-widget mce-btn mce-first"
																								tabindex="-1" aria-labelledby="mceu_3"
																								role="button" aria-label="Bold">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-bold"></i>
																								</button>
																							</div>
																							<div id="mceu_4" class="mce-widget mce-btn"
																								tabindex="-1" aria-labelledby="mceu_4"
																								role="button" aria-label="Italic">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-italic"></i>
																								</button>
																							</div>
																							<div id="mceu_5" class="mce-widget mce-btn"
																								tabindex="-1" aria-labelledby="mceu_5"
																								role="button" aria-label="밑줄">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-underline"></i>
																								</button>
																							</div>
																							<div id="editor_blue" class="mce-widget mce-btn"
																								tabindex="-1" aria-labelledby="editor_blue"
																								role="button" aria-label="글자색 바꾸기">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-forecolor"></i>
																								</button>
																							</div>
																							<div id="editor_highlight"
																								class="mce-widget mce-btn mce-last"
																								tabindex="-1" aria-labelledby="editor_highlight"
																								role="button" aria-label="글자 배경색 바꾸기">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-backcolor"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																					<div id="mceu_21"
																						class="mce-container mce-flow-layout-item mce-btn-group"
																						role="group">
																						<div id="mceu_21-body">
																							<div id="mceu_6"
																								class="mce-widget mce-btn mce-menubtn mce-first"
																								tabindex="-1" aria-labelledby="mceu_6"
																								role="button" aria-label="구분선"
																								aria-haspopup="true">
																								<button id="mceu_6-open" role="presentation"
																									type="button" tabindex="-1">
																									<i class="mce-ico mce-i-none"
																										style="background-image: url('/resources/css/img/btn_icon_hr1.png')"></i>
																									<i class="mce-caret"></i>
																								</button>
																							</div>
																							<div id="mceu_7"
																								class="mce-widget mce-btn mce-menubtn mce-last"
																								tabindex="-1" aria-labelledby="mceu_7"
																								role="button" aria-label="인용구"
																								aria-haspopup="true">
																								<button id="mceu_7-open" role="presentation"
																									type="button" tabindex="-1">
																									<i class="mce-ico mce-i-none"
																										style="background-image: url('/resources/css/img/btn_icon_bq1.png')"></i>
																									<i class="mce-caret"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																					<div id="mceu_22"
																						class="mce-container mce-flow-layout-item mce-btn-group"
																						role="group">
																						<div id="mceu_22-body">
																							<div id="mceu_8"
																								class="mce-widget mce-btn mce-first"
																								tabindex="-1" aria-labelledby="mceu_8"
																								role="button" aria-label="Align left">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-alignleft"></i>
																								</button>
																							</div>
																							<div id="mceu_9"
																								class="mce-widget mce-btn mce-last"
																								tabindex="-1" aria-labelledby="mceu_9"
																								role="button" aria-label="Align center">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-aligncenter"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																					<div id="mceu_23"
																						class="mce-container mce-flow-layout-item mce-btn-group"
																						role="group">
																						<div id="mceu_23-body">
																							<div id="mceu_10"
																								class="mce-widget mce-btn mce-menubtn mce-first mce-last"
																								tabindex="-1" aria-labelledby="mceu_10"
																								role="button" aria-label="리스트"
																								aria-haspopup="true">
																								<button id="mceu_10-open" role="presentation"
																									type="button" tabindex="-1">
																									<i class="mce-ico mce-i-bullist"></i> <i
																										class="mce-caret"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																					<div id="mceu_24"
																						class="mce-container mce-flow-layout-item mce-last mce-btn-group"
																						role="group">
																						<div id="mceu_24-body">
																							<div id="mceu_11"
																								class="mce-widget mce-btn mce-menubtn mce-first"
																								tabindex="-1" aria-labelledby="mceu_11"
																								role="button" aria-label="Table"
																								aria-haspopup="true">
																								<button id="mceu_11-open" role="presentation"
																									type="button" tabindex="-1">
																									<i class="mce-ico mce-i-table"></i> <i
																										class="mce-caret"></i>
																								</button>
																							</div>
																							<div id="mceu_12" class="mce-widget mce-btn"
																								tabindex="-1" aria-labelledby="mceu_12"
																								role="button" aria-label="Insert/edit link">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-link"></i>
																								</button>
																							</div>
																							<div id="mceu_13" class="mce-widget mce-btn"
																								tabindex="-1" aria-labelledby="mceu_13"
																								role="button" aria-label="Insert/edit image">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-image"></i>
																								</button>
																							</div>
																							<div id="mceu_14"
																								class="mce-widget mce-btn mce-last"
																								tabindex="-1" aria-labelledby="mceu_14"
																								role="button" aria-label="Insert/edit video">
																								<button role="presentation" type="button"
																									tabindex="-1">
																									<i class="mce-ico mce-i-media"></i>
																								</button>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div id="mceu_25"
																		class="mce-edit-area mce-container mce-panel mce-stack-layout-item"
																		hidefocus="1" tabindex="-1" role="group"
																		style="border-width: 1px 0px 0px;">
																		<iframe id="editor0_ifr" frameborder="0"
																			allowtransparency="true"
																			title="서식 있는 텍스트 편집기 입니다. ALT-F9를 누르면 메뉴, ALT-F10를 누르면 툴바, ALT-0을 누르면 도움말을 볼 수 있습니다."
																			src="javascript:&quot;&quot;"
																			style="width: 100%; height: 650px; display: block;"></iframe>
																	</div>
																	<div id="mceu_26"
																		class="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
																		hidefocus="1" tabindex="-1" role="group"
																		style="border-width: 1px 0px 0px;">
																		<div id="mceu_26-body"
																			class="mce-container-body mce-flow-layout">
																			<div id="mceu_27"
																				class="mce-path mce-flow-layout-item mce-first">
																				<div role="button" class="mce-path-item mce-last"
																					data-index="0" tabindex="-1" id="mceu_27-0"
																					aria-level="1">p</div>
																			</div>
																			<div id="mceu_28"
																				class="mce-flow-layout-item mce-last mce-resizehandle">
																				<i class="mce-ico mce-i-resize"></i>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<textarea id="editor0" value="" aria-hidden="true"
																style="display: none;"></textarea>
														</div>
													</div>
												</div>
												<div class="form-group row-mobile-n">
													<label for="project_story"
														class="col-xs-12 control-label control-label-big"><div
															class="text-left mb10">환불 및 교환 정책을 적어주세요</div>
														<p class="form-control-static mb10 mt0">스토리 맨 아래에
															노출됩니다.</p></label>
													<div class="col-xs-12">
														<div class="ps-wrap">
															<div class="row row-mobile-n mb15">
																<label for="project_policy"
																	class="col-xs-12 control-label"><div
																		class="text-left mb10">
																		진행자의 환불 및 교환 정책<span class="red-800">(필수사항)</span>
																	</div></label>
																<div class="col-xs-12">
																	<textarea rows="5" id="project_policy" title=""
																		placeholder="크라우디 환불 및 교환 정책 외에 추가사항이 있으시면 적어주세요."
																		class="form-control"></textarea>
																</div>
															</div>
															<div class="row row-mobile-n mb35">
																<label for="project_mobile1"
																	class="col-xs-12 control-label"><div
																		class="text-left mb10">문의 가능한 번호</div>
																	<p class="form-control-static mb10 mt0">번호 공개 여부를
																		선택해주세요.</p></label>
																<div class="col-sm-6">
																	<input type="text" maxlength="200"
																		placeholder="번호를 적어주세요 (예. 01012345678)"
																		class="form-control telbox">
																</div>
																<div class="col-sm-6">
																	<label for="tel_open" class="checkbox-inline"
																		style="position: relative; top: -3px;"><input
																		type="checkbox" name="tel_open" id="tel_open"><span
																		class="label"></span><span class="label-text">번호공개</span></label>
																</div>
															</div>
															<div class="row row-mobile-n mb35">
																<label for="project_email"
																	class="col-xs-12 control-label"><div
																		class="text-left mb10">문의 이메일</div>
																	<p class="form-control-static mb10 mt0">반드시 적어주세요.</p></label>
																<div class="col-sm-6">
																	<input type="text" id="project_email" maxlength="200"
																		title="" placeholder="info@ycrowdy.com"
																		class="form-control">
																</div>
															</div>
															<div class="textarea-style">
																<strong>크라우디의 환불 및 교환정책 기본사항</strong>
																<ul>
																	<li>1. 프로젝트 기간 중에는 자유롭게 <a
																		href="/mypage/main?menu=1&amp;sub-menu=1"
																		target="_blank">마이 페이지</a>에서 펀딩 취소가 가능합니다.
																	</li>
																	<li>2. 펀딩을 받아야만 생산을 시작할 수 있는 크라우드 펀딩 특성상, 프로젝트 종료
																		이후에는 단순 변심으로 인한 교환이나 환불이 불가하니 이점 양해 부탁드립니다.</li>
																	<li>3. 리워드 배송일이 예상보다 지연되는 경우, 새소식과 후원자 분들의 이메일을 통해
																		안내해드리겠습니다.<br>이에 관한 문의는 이메일 "<a
																		href="mailto:cjsghdcjf@nate.com" target="_blank"
																		class="project_email red-800">cjsghdcjf@nate.com</a>"
																		, 연락처 "<a href="tel:" class="red-800"></a>" 로 연락바랍니다.
																		<!---->
																	</li>
																</ul>
															</div>
															<ul class="con-icon blue-800 mb25">
																<li>프로젝트 종료일 이후에 리워드와 관련된 환불 및 교환은 프로젝트 제작자가 약속하는
																	것에 따르며 크라우디는 이에 책임지지 않습니다.</li>
															</ul>
														</div>
													</div>
												</div>
												<div class="form-group row-mobile-n mt90">
													<div class="col-sm-11">
														<div class="form-group row-mobile-n">
															<div class="col-xs-6 col-sm-4 col-md-3">
																<button type="button"
																	class="btn btn-block btn-primary-outline">저장하기</button>
															</div>
															<div class="col-xs-6 col-sm-4 col-md-3">
																<button type="button" class="btn btn-block btn-primary">다음단계</button>
															</div>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<!---->
							<!---->
						</div>
					</div>
				</div>
				<div id="confirmMd" tabindex="-1" role="dialog"
					data-backdrop="static" data-keyboard="false"
					class="modal fade deliveryModal">
					<div role="document" class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<div class="headerTitle" style="width: 70px;">승인 요청</div>
								<button type="button" aria-label="Close" class="xButton"
									data-dismiss="modal"></button>
							</div>
							<div class="modal-body">
								<div class="crowdy-confirm-title">확인해주세요!</div>
								<div class="mt20">
									<div class="row">
										<div class="ml10 mr10">
											<div class="crowdy-confirm-checkbox">
												<label class="crowdy-check-container03"> 크라우드펀딩 진행자가
													사실과 다른 내용을 표시한 경우에는 형법상 사기에 해당할 수 있고, 표시광고법 위반에도 해당해 징역이나
													벌금의 형벌에 처해지거나, 민사상 손해배상책임까지 지게 될 수 있습니다. <input
													type="checkbox" name="confirmCheck"> <span></span>
												</label>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="ml10 mr10">
											<div class="crowdy-confirm-checkbox">
												<label class="crowdy-check-container03"> 진행자가 제품에 대해
													사실과 다르게 표시·광고하거나, 사실을 은폐하거나 축소하는 등의 방법으로 표시·광고한 경우에는
													표시광고법위반에 해당해 형벌을 받게 될 수 있습니다. <input type="checkbox"
													name="confirmCheck"> <span></span>
												</label>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="ml10 mr10">
											<div class="crowdy-confirm-checkbox">
												<label class="crowdy-check-container03"> 또한 이로 인해
													피해를 입은 참여자들에게 손해배상을 해야할 수도 있음을 확인했습니다. <input
													type="checkbox" name="confirmCheck"> <span></span>
												</label>
											</div>
										</div>
									</div>
								</div>
								<div class="mt30">
									<button id="confirmBtn" type="button"
										class="btn btn-block btn-primary btn-disabled-gray">승인
										요청</button>
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

		<div class="page-loader-more" style="display: none;">
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
	<!-- <div class="qaCustomer" data-toggle="modal" data-target="#qaCustomer">-</div> -->

	<!-- 저장완료 -->
	<div class="complete_pay">
		<div>
			<span></span>
		</div>
	</div>
	<!-- //저장완료 -->

	<!-- <script src="./js/number-divider.js"></script> -->

	<script>
		/*<![CDATA[*/
		Vue.use(VeeValidate)

	 // 	VeeValidate.Validator.extend('target_amount', {
		//     getMessage: field => '최소 100,000원 이상이어야 합니다.',
		//     validate: value => {
		//         if(value > 0 && value < 100000) {
		//         	return false;
		//         } else {
		//         	return true;
		//         }
		//     }
		// });
		
		var dictionary = {
	  		en: {
		    	messages: {
	      			required: function(field) {
	      				return "필수 입력란입니다."
	      			},
	      			alpha_dash : function(field) {
	      				return "영어, _ , - 문자만 입력해주세요."
	      			}
		    	}
		  	}
		}

		VeeValidate.Validator.updateDictionary(dictionary)
		
		new Vue({
			el : "#reward-make",
			data : {
				cpCode : '1000008073'
			},
			components : {
				rewardMake : make.reward.main.component()
			}
		})
	
	</script>


	<div id="ch-plugin">
		<div id="ch-plugin-core">
			<style data-styled="" data-styled-version="4.4.1"></style>
			<div class="sc-bbkauy kUaSpl sc-keFjpB fPjYzw" hidden=""
				style="z-index: 100000000 !important;">
				<div class="sc-fihHvN eqhTLQ">
					<div name="cancel" size="18" width="42" height="78"
						class="sc-dEoRIm fdHWPc"></div>
				</div>
				<div class="sc-kEmuub dBHPnA">
					<div class="sc-lnmtFM kjBSwQ">
						<div size="44" class="sc-kpOJdX maGPA"></div>
					</div>
					<div class="sc-iuDHTM eBwTfr">
						<div class="sc-erNlkL gpNHQY">(알 수 없음)</div>
						<div class="sc-FQuPU fiMFHA"></div>
					</div>
				</div>
			</div>
			<style data-styled="" data-styled-version="4.4.1"></style>
			<div class="sc-ifAKCX iqgNGY">
				<div class="sc-EHOje hgcFAI">
					<div class="sc-bZQynM bbMeuC textLauncherContent">문의하기</div>
					<div class="sc-gzVnrw jABblg textLauncherIcon">
						<div hidden="" class="sc-bxivhb sc-dnqmqq eEZasV">0</div>
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
	<div class="scrollToTop">
		<i class="fa fa-angle-up"></i>
	</div>
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
	<div id="ui-datepicker-div"
		class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all">
		<div
			class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
			<a class="ui-datepicker-prev ui-corner-all ui-state-disabled"
				title="이전 달"><span class="ui-icon ui-icon-circle-triangle-w">이전
					달</span></a><a class="ui-datepicker-next ui-corner-all" data-handler="next"
				data-event="click" title="다음 달"><span
				class="ui-icon ui-icon-circle-triangle-e">다음 달</span></a>
			<div class="ui-datepicker-title">
				<span class="ui-datepicker-year">2020</span>년&nbsp;<span
					class="ui-datepicker-month">7월</span>
			</div>
		</div>
		<table class="ui-datepicker-calendar">
			<thead>
				<tr>
					<th scope="col" class="ui-datepicker-week-end"><span title="일">일</span></th>
					<th scope="col"><span title="월">월</span></th>
					<th scope="col"><span title="화">화</span></th>
					<th scope="col"><span title="수">수</span></th>
					<th scope="col"><span title="목">목</span></th>
					<th scope="col"><span title="금">금</span></th>
					<th scope="col" class="ui-datepicker-week-end"><span title="토">토</span></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td
						class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
					<td
						class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
					<td
						class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
					<td
						class=" ui-datepicker-unselectable ui-state-disabled  ui-datepicker-today"><span
						class="ui-state-default">1</span></td>
					<td class=" ui-datepicker-unselectable ui-state-disabled "><span
						class="ui-state-default">2</span></td>
					<td class=" ui-datepicker-unselectable ui-state-disabled "><span
						class="ui-state-default">3</span></td>
					<td
						class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
						class="ui-state-default">4</span></td>
				</tr>
				<tr>
					<td
						class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled "><span
						class="ui-state-default">5</span></td>
					<td class=" ui-datepicker-unselectable ui-state-disabled "><span
						class="ui-state-default">6</span></td>
					<td class=" ui-datepicker-unselectable ui-state-disabled "><span
						class="ui-state-default">7</span></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">8</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">9</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">10</a></td>
					<td class=" ui-datepicker-week-end " data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default" href="#">11</a></td>
				</tr>
				<tr>
					<td class=" ui-datepicker-week-end " data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default" href="#">12</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">13</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">14</a></td>
					<td class="  ui-datepicker-current-day" data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default ui-state-active" href="#">15</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">16</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">17</a></td>
					<td class=" ui-datepicker-week-end " data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default" href="#">18</a></td>
				</tr>
				<tr>
					<td class=" ui-datepicker-week-end " data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default" href="#">19</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">20</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">21</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">22</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">23</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">24</a></td>
					<td class=" ui-datepicker-week-end " data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default" href="#">25</a></td>
				</tr>
				<tr>
					<td class=" ui-datepicker-week-end " data-handler="selectDay"
						data-event="click" data-month="6" data-year="2020"><a
						class="ui-state-default" href="#">26</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">27</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">28</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">29</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">30</a></td>
					<td class=" " data-handler="selectDay" data-event="click"
						data-month="6" data-year="2020"><a class="ui-state-default"
						href="#">31</a></td>
					<td
						class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
				</tr>
			</tbody>
		</table>
	</div>
	<span
		style="position: absolute; top: -999px; left: 0; white-space: pre;"></span>
	<script
		src="chrome-extension://ofgdcdohlhjfdhbnfkikfeakhpojhpgm/web_accessible_resources/index.js"></script>
	<iframe src="https://bid.g.doubleclick.net/xbbe/pixel?d=KAE"
		style="display: none;"></iframe>
	<div id="fb-root" class=" fb_reset">
		<div
			style="position: absolute; top: -10000px; width: 0px; height: 0px;">
			<div></div>
		</div>
	</div>
</body>






</html>