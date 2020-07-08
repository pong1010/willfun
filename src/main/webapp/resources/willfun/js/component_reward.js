! function(n) {
	function e(i) {
		if (t[i]) return t[i].exports;
		var a = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return n[i].call(a.exports, a, a.exports, e), a.l = !0, a.exports
	}
	var t = {};
	e.m = n, e.c = t, e.d = function(n, t, i) {
		e.o(n, t) || Object.defineProperty(n, t, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, e.n = function(n) {
		var t = n && n.__esModule ? function() {
			return n.default
		} : function() {
			return n
		};
		return e.d(t, "a", t), t
	}, e.o = function(n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	}, e.p = "", e(e.s = 7)
}([function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <input :type="type" :value="num" @input="updateNum($event.target.value)" autocomplete="new-password" pattern="[0-9]*" inputmode="numeric" ref="input"/>\n            ',
						props: {
							num: {
								default: ""
							},
							length: {
								default: 0
							},
							type: {
								default: "text"
							}
						},
						methods: {
							updateNum: function(n) {
								var e = n.replace(/^\s+|\s+$/g, "");
								this.$refs.input.value = e.replace(/[^0-9]/g, ""), this.$emit("input", e.replace(/[^0-9]/g, "")), this.$emit("send-number-value", e.replace(/[^0-9]/g, ""))
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n    \t\t\t\t<div id="adCertiMd" class="modal fade deliveryModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                        <div class="modal-dialog" role="document">\n                            <div class="modal-content">\n                                <div class="modal-header">\n                                    <div class="headerTitle" style="width:100px;">휴대폰 본인인증</div>\n                                    <button type="button" class="close" aria-label="Close" class="xButton" v-on:click="modalClose"></button>\n                                </div>\n                                <div class="modal-body innerScroll">\n                                    <div class="innerDiv">\n                                        <template v-if="step == 1">\n                                            \x3c!-- 무조건 휴대폰 사이즈 경고문으로만 조회 --\x3e\n                                            <adult-string :is-mobile="\'true\'"></adult-string>\n                                            <div class="mt35">\n                                                <a :href="none()" class="btn btn-block btn-primary" v-on:click="stepChange">휴대폰 본인인증</a>\n                                            </div>\n                                        </template>\n                                        <template v-else>\n                                            <div class="row sponsorDelRow">\n                                                <div class="sdrLabel">\n                                                    <template v-if="userInfo.type == 1">이름(실명)</template>\n                                                    <template v-else>담당자명</template>\n                                                </div>\n                                                <div>\n                                                    <input id="txtName" v-model.trim="certi.memName" type="text" class="form-control" :class="{\'sdrInput\':!readFlg, \'sdrInfo\': readFlg}" placeholder="이름을 입력하세요." :readonly="readFlg" v-if="dataConfirm" />\n                                                </div>  \n                                                <div id="txtName_err" class="sdfError"></div>\n                                            </div>\n                                            <div class="row sponsorDelRow">\n                                                <div class="sdrLabel">주민등록번호</div>\n                                                <div>\n                                                    <number-input id="txtBirth" :num="certi.memBirth" v-model="certi.memBirth" type="tel" class="form-control sdrSplit" :class="{\'sdrInput\':!readFlg, \'sdrInfo\': readFlg}" placeholder="앞자리6자리" maxlength="6" :readonly="readFlg" v-if="dataConfirm" /></number-input>\n                                                    <div class="ivs-pro-dash"></div>\n                                                    <number-input id="txtSex" :num="certi.memSex" v-model="certi.memSex" type="tel" class="form-control sdrSplit" :class="{\'sdrInput\':!readFlg, \'sdrInfo\': readFlg}" maxlength="1" :readonly="readFlg" v-if="dataConfirm" /></number-input>\n                                                    <div class="ad-dot-postion">\n                                                        <span class="ivs-dot"></span>\n                                                        <span class="ivs-dot"></span>\n                                                        <span class="ivs-dot"></span>\n                                                        <span class="ivs-dot"></span>\n                                                        <span class="ivs-dot"></span>\n                                                        <span class="ivs-dot"></span>\n                                                    </div>  \n                                                </div>\n                                                <div class="clearfix"></div>\n                                                <div id="txtBirth_err" class="sdfError"></div>\n                                                <div id="txtSex_err" class="sdfError"></div>\n                                            </div>\n                                            <div class="row sponsorDelRow">\n                                                <div class="sdrLabel">통신사</div>\n                                                <div>\n                                                    <name-select id="selCom" v-model="selectCom" :readonly="readFlg" :disabled="readFlg" v-if="dataConfirm">\n                                                        <option v-for="item in mobileCom" :value="item.id">{{item.text}}</option>\n                                                    </name-select>\n                                                    <div id="selCom_err" class="sdfError"></div>\n                                                </div>\n                                            </div>\n                                            <div class="row sponsorDelRow">\n                                                <div class="sdrLabel">전화번호</div>\n                                                <div class="sdrTel">\n                                                    <number-input id="txtTel" :num="certi.memTelNo" v-model="certi.memTelNo" type="tel" class="form-control" :class="{\'sdrInput\':!readFlg, \'sdrInfo\': readFlg}" placeholder="\'-\' 없이 핸드폰 번호를 입력해주세요." maxlength="11" :readonly="readFlg" v-if="dataConfirm" /></number-input>\n                                                    <button class="borderBtn" v-on:click="sendPhoneAuth">{{requestWord}}</button>\n                                                </div>\n                                                <div class="clearfix"></div>\n                                                <div id="txtTel_err" class="sdfError"></div>\n                                            </div>\n                                            <div class="row sponsorDelRow" v-if="sendAuthNumber">\n                                                <div class="sdrLabel">인증번호 입력</div>\n                                                <div class="sdrAuthNo">\n                                                    <number-input id="txtAuthNo" :num="captcha.memAuthNo" v-model="captcha.memAuthNo" type="tel" class="form-control" :class="(!timeOutFlg) ? \'sdrInfo\' : \'sdrInput\'" :readonly="!timeOutFlg" maxlength="8" /></number-input>\n                                                    <div class="sdrTimeStr">{{timeStr}}</div>\n                                                </div>\n                                                <div class="clearfix"></div>\n                                                <div class="crowdy-color-blue font12" :class="{\'text-center\':isMobile}">통신사의 사정에 따라 문자 수신이 <br v-if="isMobile" />다소 늦어질 수 있습니다.</div>\n                                                \x3c!-- /// width 안넣어주면 모바일 사이즈에서 체크 화면이 깨지기 때문에 꼭 넣어줘야 함 --\x3e\n                                                \x3c!--vue-recaptcha class="vueRecaptcha" @verify="onCaptchaVerified" sitekey="6LdbvpkUAAAAABuHxlZkN_IJTEPYeG5CrRjq371_" class="mt15 xs-mt5 ivs-vue-cap"></vue-recaptcha--\x3e\n                                                <div class="mt15 xs-mt5 ivs-vue-cap" id="certiRecaptcha"></div>\n\n                                                <div class="sdrCheck" v-for="(item, index) in agree" :class="{\'mt10\':(index == 0), \'mb10\':(index == (_.size(agree) - 1)) } ">\n                                                    <div class="sdrCheckInDiv">\n                                                        <label class="sdrCheckInLabel">\n                                                            <input type="checkbox" v-model="item.check" />\n                                                            <span>&nbsp;{{item.text}} &nbsp;</span>\n                                                        </label>\n                                                        <span><a :href="none()" class="blue-800" data-toggle="modal" v-model="modalSelect" v-on:click="modalChange(index)">전문보기</a></span>\n                                                    </div>\n                                                    <div class="clearfix"></div>\n                                                </div>\n                                                <a :href="none()" class="btn btn-block btn-primary" v-on:click="authCheck">인증 확인</a>\n                                            </div>\n                                        </template>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <auth-modal :agreeIdx="modalSelect" :selectCom="selectCom"></auth-modal>\n                </div> \n\t\t\t',
						props: ["childBus"],
						data: function() {
							return {
								isMobile: !1,
								step: 1,
								mobileCom: [{
									id: "",
									text: "통신사를 선택하세요."
								}, {
									id: 1,
									text: "SKT"
								}, {
									id: 2,
									text: "KT"
								}, {
									id: 3,
									text: "LG U+"
								}, {
									id: 5,
									text: "알뜰폰SKT"
								}, {
									id: 6,
									text: "알뜰폰KT"
								}, {
									id: 7,
									text: "알뜰폰LG"
								}],
								modalSelect: 0,
								selectCom: "",
								certi: {
									memCode: userInfo.memCode,
									memName: "",
									memBirth: "",
									memSex: "",
									memTelCompany: "",
									memTelNo: "",
									memNameType: 1
								},
								captcha: {
									memCode: userInfo.memCode,
									memTelNo: "",
									memAuthNo: "",
									recaptchaToken: ""
								},
								sendAuthNumber: !1,
								timeOutFlg: !1,
								errId: ["txtName", "txtBirth", "txtSex", "selCom", "txtTel"],
								requestWord: "인증요청",
								maxMin: 4,
								maxSec: 59,
								timer: {},
								timeStr: "5:00",
								agree: [],
								changeUrl: "",
								changeType: 1,
								readFlg: !1,
								dataConfirm: !1,
								sitekey: "6LdbvpkUAAAAABuHxlZkN_IJTEPYeG5CrRjq371_",
								wigetId: ""
							}
						},
						mounted: function() {
							var n = this;
							this.childBus.$on("load", function(e, t, i) {
								n.step = e, n.changeType = t, n.changeUrl = i, n.loadFade(1), n.load()
							}), $("#adCertiMd").on("show.bs.modal", function(n) {
								$("#adCertiMd").css("z-index", "1050")
							}), $("#noti").on("show.bs.modal", function(n) {
								$("#adCertiMd").css("z-index", "1001")
							}), $("#noti").on("hidden.bs.modal", function(n) {
								$("#adCertiMd").css("z-index", "1050")
							}), $("#authModal").on("hidden.bs.modal", function(n) {
								$("#adCertiMd").css("z-index", "1050")
							})
						},
						components: {
							adultString: t(2).default.component(),
							numberInput: t(0).default.component(),
							nameSelect: t(12).default.component(),
							authModal: t(13).default.component()
						},
						watch: {
							selectCom: function() {
								1 == this.selectCom || 5 == this.selectCom ? this.agree = [{
									text: "[NICE평가정보] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[SK텔레콤] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[SK텔레콤, NICE평가정보] 개인정보 이용동의",
									check: !1
								}, {
									text: "[SK텔레콤, NICE평가정보] 고유식별정보 처리 동의",
									check: !1
								}] : 2 == this.selectCom ? this.agree = [{
									text: "[NICE평가정보] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[KT] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[KT, NICE평가정보] 개인정보 이용동의",
									check: !1
								}, {
									text: "[KT, NICE평가정보] 고유식별정보 처리 동의",
									check: !1
								}] : 3 == this.selectCom ? this.agree = [{
									text: "[NICE평가정보] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[LGU+] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[LGU+, NICE평가정보] 개인정보 이용동의",
									check: !1
								}, {
									text: "[LGU+, NICE평가정보] 고유식별정보 처리 동의",
									check: !1
								}] : 6 == this.selectCom ? this.agree = [{
									text: "[NICE평가정보] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[KT] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[KT, NICE평가정보] 개인정보 이용동의",
									check: !1
								}, {
									text: "[KT, NICE평가정보] 고유식별정보 처리 동의",
									check: !1
								}, {
									text: "[KT 알뜰폰] 개인정보 제3자 제공 동의",
									check: !1
								}] : 7 == this.selectCom && (this.agree = [{
									text: "[NICE평가정보] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[LGU+] 본인확인서비스 이용약관 동의",
									check: !1
								}, {
									text: "[LGU+, NICE평가정보] 개인정보 이용동의",
									check: !1
								}, {
									text: "[LGU+, NICE평가정보] 고유식별정보 처리 동의",
									check: !1
								}, {
									text: "[LGU+ 알뜰폰] 개인정보 제3자 제공 동의",
									check: !1
								}])
							}
						},
						methods: {
							loadFade: function(n) {
								1 == n ? $(".page-loader-more").fadeIn("") : $(".page-loader-more").fadeOut("")
							},
							none: function() {},
							load: function() {
								this.dataClear(1), $(window).width() < 400 && (this.isMobile = !0), $("#adCertiMd").modal("show"), this.loadFade(2)
							},
							errClear: function() {
								for (var n = 0; n < this.errId.length; n++) "txt" == this.errId[n].substring(0, 3) && $("#" + this.errId[n]).removeClass("error"), $("#" + this.errId[n] + "_err").html("")
							},
							sendPhoneAuth: function() {
								var n = this;
								this.errClear();
								var e = "",
									t = "";
								if ("" == this.certi.memTelNo && (e = "휴대폰 번호를 입력해주세요.", t = this.errId[4]), "" == this.selectCom && (e = "통신사를 선택해주세요.", t = this.errId[3]), "" == this.certi.memSex && (e = "주민번호 뒷자리를 입력해주세요.", t = this.errId[2]), "" == this.certi.memBirth && (e = "주민번호 앞자리를 입력해주세요.", t = this.errId[1]), "" == this.certi.memName && (e = "이름을 입력해주세요.", t = this.errId[0]), "" != e) return "sel" == t.substring(0, 3) ? void $("#" + t + "_err").html(e) : ($("#" + t).addClass("error"), $("#" + t + "_err").html(e), void $("#" + t).focus());
								this.loadFade(1), this.dataConfirm = !1, this.certi.memTelCompany = this.selectCom, axios.post("/data/member/certi-call", this.certi).then(function(e) {
									var t = e.data;
									n.dataConfirm = !0, n.loadFade(2), "0000" == t.rCode ? (n.requestWord = "재요청", n.readFlg = !0, n.sendAuthNumber = !0, n.timeOutFlg = !1, n.timerStart = !0, n.$nextTick(function() {
										n.setReCaptcha()
									}), n.setCountdown(!1)) : noti.open(t.rMsg)
								})
							},
							setReCaptcha: function() {
								var n = this;
								this.wigetId = grecaptcha.render(document.getElementById("certiRecaptcha"), {
									sitekey: n.sitekey
								})
							},
							setCountdown: function(n) {
								var e = this;
								clearTimeout(this.timer);
								var t, i, a;
								this.timer = setInterval(function() {
									if (n || (e.timeStr = "5:00", e.timeOutFlg = !0, e.timerStart = !1, n = !0, t = +new Date + 1e3 * (60 * e.maxMin + e.maxSec) + 500), (i = t - +new Date) < 1e3) return e.dataConfirm = !1, clearTimeout(e.timer), e.timeOutFlg = !1, e.readFlg = !0, e.dataConfirm = !0, e.captcha.memAuthNo = "", e.timeStr = "00:00", void noti.open("인증 번호 입력 시간이 만료되었습니다.<br />다시 인증번호를 요청하세요.");
									a = new Date(i), e.timeStr = e.twoDigits(a.getUTCMinutes()) + ":" + e.twoDigits(a.getUTCSeconds())
								}, 1e3)
							},
							twoDigits: function(n) {
								return n <= 9 ? "0" + n : n
							},
							onCaptchaVerified: function(n) {
								this.captcha.recaptchaToken = n
							},
							dataClear: function(n) {
								this.dataConfirm = !1, 1 == n ? (this.readFlg = !1, this.selectCom = "", this.certi = _.clone({
									memCode: userInfo.memCode,
									memName: "",
									memBirth: "",
									memSex: "",
									memTelCompany: "",
									memTelNo: "",
									memNameType: 1
								}), this.sendAuthNumber = !1, this.timeOutFlg = !1, this.requestWord = "인증요청", this.captcha = _.clone({
									memCode: userInfo.memCode,
									memTelNo: "",
									memAuthNo: "",
									recaptchaToken: ""
								}), $("#txtName").focus()) : (2 == n ? (this.captcha.memTelNo = "", this.captcha.recaptchaToken = "") : this.captcha = _.clone({
									memCode: userInfo.memCode,
									memTelNo: "",
									memAuthNo: "",
									recaptchaToken: ""
								}), grecaptcha.reset(this.wigetId)), this.dataConfirm = !0
							},
							modalChange: function(n) {
								$("#adCertiMd").css("z-index", "1001"), this.modalSelect = n, $("#authModal").modal("show")
							},
							authCheck: function() {
								var n = this;
								if (!this.sendAuthNumber) return void noti.open("본인인증을 완료해주세요.");
								if ("" == this.captcha.memAuthNo) return void noti.open("인증번호를 입력해주세요.");
								for (var e = 0; e < this.agree.length; e++)
									if (!this.agree[e].check) return void noti.open(this.agree[e].text + "는 필수입니다.");
								this.loadFade(1), this.captcha.memTelNo = this.certi.memTelNo, this.captcha.recaptchaToken = grecaptcha.getResponse(this.wigetId), axios.post("/data/member/certi-check", this.captcha).then(function(e) {
									n.loadFade(2);
									var t = e.data;
									"0000" == t.rCode ? (clearTimeout(n.timer), n.sendAuthNumber = !1, n.isChild(n.certi.memBirth) ? (noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다."), n.modalClose()) : noti.open("본인인증이 완료되었습니다.", function() {
										$("#adCertiMd").modal("hide"), 1 == n.changeType ? n.$emit("return-url", n.changeUrl) : n.$emit("change-confirm")
									})) : (noti.open(t.rMsg), "2203" == t.rCode ? n.dataClear(2) : n.dataClear(3))
								})
							},
							isChild: function(n) {
								if (6 == _.size(n)) {
									var e = 1 * n.slice(0, 2),
										t = n.slice(-4);
									return e < 21 && e > 1 || 1 == e && t > moment().format("MMDD")
								}
								return !1
							},
							stepChange: function() {
								this.step = 2
							},
							modalClose: function() {
								var n = this;
								$("#adCertiMd").modal("hide"), 2 == n.changeType && (location.href = "/")
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div v-if="isMobile">\n\t                <div style="text-align:center;">\n\t                    <img src="//image-se.ycrowdy.com/crowdyCss/img/adult3.png" style="margin:0 auto;" />\n\t                </div>\n\t                <div style="margin-top:31px; text-align:center; font-size:19px; font-weight:bold; line-height:1.47; letter-spacing:-0.7px; color:#464646;">\n\t                    이 프로젝트는 만 19세 이상의<br /> 성인만 참가할 수 있습니다.\n\t                </div>\n\t                <div style="margin-top:25px; font-size:13px; font-weight:normal; line-height:1.54; letter-spacing:-0.7px; color:#464646;">\n\t                    본 프로젝트는 청소년 유해매체물로서 \'정보통신망 이용촉진 및 정보보호 등에 관한 법률\' 및 \'청소년보호법\'에 따라 만 19세 미만의 청소년이 이용할 수 없습니다. 프로젝트에 펀딩하려면 연 1회 \'휴대폰 본인인증\'이 필요합니다. \n\t                </div>\n\t            </div>\n\t            <div v-else style="vertical-align:middle;">\n\t            \t<img src="//image-se.ycrowdy.com/crowdyCss/img/adult3.png" style="max-width:80px !important; width:20%; padding:5px; float:left;"/>\n\t            \t<div style="width:78%; float:left; margin:0px;">\n\t            \t\t<div style="font-size:20px; font-weight:bold; line-height:1; letter-spacing:-0.56px; color:#464646; margin:0px;">\n\t            \t\t\t이 프로젝트는 만 19세 이상의 성인만 참가할 수 있습니다.\n\t            \t\t</div>\n\t            \t\t<div style="font-size:16px; line-height:1.67; letter-spacing:-0.7px; color:#464646; margin:10px 0px 0px 0px;">\n\t            \t\t\t본 프로젝트는 청소년 유해매체물로서 \'정보통신망 이용촉진 및 정보보호 등에 관한 법률\' 및 \'청소년보호법\'에 따라 만 19세 미만의 청소년이 이용할 수 없습니다. 프로젝트에 펀딩하려면 연 1회 \'휴대폰 본인인증\'이 필요합니다. \n\t            \t\t</div>\n\t            \t</div>\n\t            \t<div class="clearfix"></div>\n\t            </div>\n\t\t\t',
						props: ["isMobile"]
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="pb40 xs-pb5" id="notable-project" style="margin-left:-18px; margin-right:-18px">\n\t\t\t\t\t<figure v-for="item in reward">\n\t\t\t\t\t\t<a :href="\'/r/\' + item.cpAliasUrl" class="mt0 bbs-caption custom-bbs-caption over-box">\n\t\t\t\t\t\t\t<div class="bbs-img">\n\t\t\t\t\t\t\t\t<img :src="\'//\' + item.cpCardImg + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="bbs-subject bbs-subject2">\n\t\t\t\t\t\t\t\t<div class="reward-best-name">{{ item.memName }}</div>\n\t\t\t\t\t\t\t\t<div class="rewards-card-title">{{ item.cpTitle }}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</figure>\n\t\t\t\t</div>\n\t\t\t',
						props: {
							paramOrderType: {
								default: "1"
							},
							paramEndType: {
								default: "0"
							},
							paramSearchCount: {
								default: "6"
							},
							type: {
								default: !0
							}
						},
						data: function() {
							return {
								reward: [],
								search: {
									orderType: this.paramOrderType,
									endType: this.paramEndType,
									cpSimulationConfirm: "",
									paging: {
										page: "1",
										count: this.paramSearchCount
									}
								}
							}
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var n = this;
								axios.post("/data/view/reward/list", n.search).then(function(e) {
									n.reward = _.concat(n.reward, e.data.rData.cardList), n.$nextTick(function() {
										n.slickCall()
									})
								})
							},
							slickCall: function() {
								$(this.$el).slick({
									arrows: !1,
									dots: !1,
									swipe: !1,
									swipeToSlide: !1,
									touchMove: !0,
									infinite: !0,
									autoplay: !0,
									autoplaySpeed: 3e3,
									slidesToShow: 4,
									slidesToScroll: 4,
									centerMode: !1,
									responsive: [{
										breakpoint: 1050,
										settings: {
											arrows: !1,
											dots: !1,
											slidesToShow: 4,
											slidesToScroll: 4
										}
									}, {
										breakpoint: 767,
										settings: {
											arrows: !0,
											centerMode: !0,
											dots: !1,
											slidesToShow: 2,
											slidesToScroll: 2
										}
									}, {
										breakpoint: 477,
										settings: {
											arrows: !0,
											centerMode: !0,
											dots: !1,
											slidesToShow: 2,
											slidesToScroll: 2
										}
									}]
								})
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div :class="{\'col-md-10\' : !isMobile, \'col-line\' : !isMobile}">\n                        <div class="row not-space">\n                            <div class="col-md-1"></div>\n                            <div class="col-md-11">\n                                <form class="form-horizontal pay_info_wrap_not" action="#">\n                                    \x3c!-- 내가 선택한 리워드 --\x3e\n                                    <div class="pay_info_wrap" :class="{\'container\' : isMobile, \'mt30\' : isMobile}">\n                                        <div class="step-title mt0">\n                                            내가 선택한 리워드\n                                        </div>\n\n                                        <div class="xs-mt0 m-mb0 my_dash_table my_dash_table_center">\n                                            <table class="table table-condensed-big table-vertical-align-top table-thead-blue table-fixed mb20">\n                                                <colgroup>\n                                                    <col style="width:18%;">\n                                                    <col style="width:45%;">\n                                                    <col style="width:26%;" class="hidden-xs">\n                                                    <col style="width:11%;">\n                                                </colgroup>\n                                                <thead>\n                                                    <tr>\n                                                        <th>펀딩금액</th>\n                                                        <th>리워드명</th>\n                                                        <th class="hidden-xs">리워드옵션</th>\n                                                        <th>수량</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    \x3c!-- Loop --\x3e\n                                                    <tr v-if="dataConfirm" v-for="(item, index) in fundingData.list">\n                                                        <td><strong>{{calcAmount(item.sbfUnitPrice, item.qty)}} 원 <br class="hidden-sm hidden-md hidden-lg" />펀딩</strong></td>\n                                                        <td class="text-left">\n                                                            <strong>{{item.cbfTitle}}</strong>\n                                                            <p class="text-left">{{item.cbfInfo}}</p>\n                                                        </td>\n                                                        <td class="hidden-xs"><strong>{{item.benefit}}</strong></td>\n                                                        <td><strong>{{item.qty}}개</strong></td>\n                                                    </tr>\n                                                    \x3c!-- //Loop --\x3e\n                                                </tbody>\n                                            </table>\n\n                                            <div class="total_price text-right" v-if="dataConfirm && parseInt(fundingData.spsAmount) > 0">\n                                                추가펀딩 금액 <span>{{parseInt(fundingData.spsAmount).toLocaleString()}}원</span>\n                                            </div>\n                                            <div class="total_price text-right blue-800">\n                                                총 결제예상 금액 <span>{{ parseInt(saveData.sponsorData.spsTotAmount).toLocaleString() }}원</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    \x3c!-- //내가 선택한 리워드 --\x3e\n                                    \n                                    \x3c!-- 결제정보 --\x3e\n                                    <payment-info :type="type" :delivery-check="deliveryCheck" :save-data="saveData" v-on:pay-reserve-finish="payReserveFinish"></payment-info>\n                                    \x3c!-- //결제정보 --\x3e\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>           \n            ',
						props: ["fundingData"],
						data: function() {
							return {
								type: 1,
								pinType: 1,
								dataConfirm: !1,
								cardNo: [],
								saveData: {
									sponsorData: {
										cpCode: this.fundingData.cpCode,
										memCode: userInfo.memCode,
										spsIdx: "",
										spsRsName: "",
										spsRsMobileno: "",
										spsPostnum: "",
										spsAddr1: "",
										spsAddr2: "",
										spsMiscinfo: "",
										spsAmount: "0",
										spsTotAmount: 0,
										spsStatus: "0",
										spsViewStatus: "0",
										spsCmsYn: "N",
										spsDeliveryStatus: "0",
										payDiv: "1",
										payNum: "",
										bankCode: "",
										payInfoNum: "",
										payMemType: "0",
										spsMbMobileno: "",
										conType: "0",
										payAgreeYn: "Y",
										payEtc: "N",
										memberInfo: !1,
										myAddressSave: !1,
										benefitList: [],
										cpAdultType: this.fundingData.cpAdultType,
										memCiConfirm: this.fundingData.memCiConfirm
									},
									cardData: {
										cardNo: [],
										cardPw: "",
										expMonth: "",
										expYear: "",
										idNo: "",
										agree: !1
									}
								},
								address: {
									postNum: "",
									address1: ""
								},
								deliveryCheck: !1,
								phoneCheck: !1,
								certiCheck: 1,
								paymentInfo: {
									paymentType: 1,
									paymentInfoConfirm: !1,
									direct: {}
								},
								isMobile: !1
							}
						},
						components: {
							numberInput: t(0).default.component(),
							paymentInfo: t(25).default.component()
						},
						created: function() {
							this.load(), $(window).width() < 768 && (this.isMobile = !0)
						},
						methods: {
							load: function() {
								var n = this;
								if (this.saveData.sponsorData.benefitList = this.fundingData.list, this.saveData.sponsorData.spsAmount = this.fundingData.spsAmount, this.fundingData.list.length > 0) {
									"Y" == this.fundingData.list[0].cpBenefitDeliveryConfirm && (this.saveData.sponsorData.spsDeliveryStatus = "1");
									for (var e = 0; e < this.fundingData.list.length; e++) this.saveData.sponsorData.spsTotAmount += parseInt(this.fundingData.list[e].sbfUnitPrice) * parseInt(this.fundingData.list[e].qty);
									this.saveData.sponsorData.spsTotAmount = parseInt(this.saveData.sponsorData.spsTotAmount) + parseInt(this.fundingData.spsAmount)
								} else this.saveData.sponsorData.spsTotAmount = parseInt(this.fundingData.spsAmount);
								_.forEach(this.fundingData.list, function(e) {
									"Y" == e.cbfDevrAddrYn && (n.deliveryCheck = !0)
								}), this.dataConfirm = !0, this.setGtmCheckout()
							},
							setPaymentInfo: function(n) {
								this.paymentInfo = n
							},
							calcAmount: function(n, e) {
								return (parseInt(n) * parseInt(e)).toLocaleString()
							},
							payReserveFinish: function(n) {
								this.setGtmPurchases(n)
							},
							setGtmCheckout: function() {
								var n = this.fundingData.cpTitle,
									e = 1 * this.saveData.sponsorData.spsTotAmount,
									t = this.fundingData.cpAliasUrl,
									i = [],
									a = [],
									s = {
										id: t,
										name: n,
										price: e,
										quantity: 1
									};
								i.push(s);
								var o = {
										event: "Checkout",
										ecommerce: {
											checkout: {
												actionField: {
													step: 1
												},
												products: i
											}
										}
									},
									r = {
										id: t,
										name: n,
										item_price: e,
										quantity: 1
									};
								a.push(r), window.pixelCheckoutData = window.pixelCheckoutData || {}, window.pixelCheckoutData = {
									contents: a,
									content_name: n,
									content_ids: [t],
									content_type: "product",
									value: e,
									currency: "KRW"
								}, window.dataLayer = window.dataLayer || [], window.dataLayer.push(o)
							},
							setGtmPurchases: function(n) {
								var e = this,
									t = n.rData.spsIdx,
									i = this.fundingData.cpTitle,
									a = 1 * this.saveData.sponsorData.spsTotAmount,
									s = this.fundingData.cpAliasUrl,
									o = [],
									r = [],
									d = {
										id: s,
										name: i,
										price: a,
										quantity: 1
									};
								o.push(d);
								var c = {
										ecommerce: {
											purchase: {
												actionField: {
													id: t,
													affiliation: i,
													revenue: a
												},
												products: o
											}
										},
										event: "Purchase"
									},
									l = {
										id: s,
										name: i,
										item_price: a,
										quantity: 1
									};
								r.push(l), window.pixelData = window.pixelData || {}, window.pixelData = {
									contents: r,
									content_name: i,
									content_ids: [s],
									content_type: "product",
									value: a,
									currency: "KRW",
									num_items: 1,
									id: t
								}, window.dataLayer = window.dataLayer || [], window.dataLayer.push(c), e.$emit("step-change", 2), e.$emit("set-idx", n.rData.spsIdx)
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="card-info">\t\n                    \x3c!-- 펀딩하기 > PC --\x3e\n                    <template v-if="fundingPageConfirm">\n                        <div class="funding-page-area mt10">\n                            <label for="cardLabel">카드번호</label> \n                            <input type="tel" name="cardLabel" class="funding-page-area-input card hide-card inputs" v-model="cardInfo.cardNoPart[0]" maxlength="4">\n                            <input type="tel" name="cardLabel" class="funding-page-area-input card hide-card inputs" v-model="cardInfo.cardNoPart[1]" maxlength="4">\n                            <input type="tel" name="cardLabel" class="funding-page-area-input card hide-card inputs" v-model="cardInfo.cardNoPart[2]" maxlength="4">\n                            <input type="tel" name="cardLabel" class="funding-page-area-input card inputs" v-model="cardInfo.cardNoPart[3]" maxlength="4">\n                            <p class="noti-word2">크라우디는 카드번호를 저장하지 않고, 카드사에서 제공하는 암호화된 정보만을 저장합니다.</p>\n                        </div>\n                        <div class="funding-page-area mt10">\n                            <label for="cardLabel">카드 비밀번호</label> \n                            <input type="tel" name="cardLabel" class="funding-page-area-input card hide-card" v-model="cardInfo.cardPw" maxlength="2" placeholder="앞두자리">\n                        </div>\n                        <div class="funding-page-area mt20">\n                            <label for="cardLabel">유효기간</label> \n                            <input type="tel" name="cardLabel" class="funding-page-area-input card inputs" v-model="cardInfo.expMonth" maxlength="2" placeholder="MM">\n                            <input type="tel" name="cardLabel" class="funding-page-area-input card inputs" v-model="cardInfo.expYear" maxlength="2" placeholder="YY">\n                        </div>\n                        <div class="funding-page-area mt20">\n                            <label for="cardLabel">생년월일</label> \n                            <input type="tel" name="cardLabel" class="funding-page-area-input" v-model="cardInfo.idNo" maxlength="10" placeholder="법인카드의 경우 사업자등록번호 10자리 숫자">\n                        </div>\n                    </template>\n                    \x3c!-- //펀딩하기 > PC --\x3e\n\n                    \x3c!-- 그 외 카드정보 입력 --\x3e\n                    <template v-if="!fundingPageConfirm">\n                        <div class="card-info-box">\n                            <div class="card card-hide">\n                                <label class="card-label">카드번호</label>\n                                <div class="card-inputs ml15">\n                                    <font class="card-placeholder card-placeholder-num" v-on:click="hidePlaceholder" v-if="cardInfo.cardNoPart.join(\'\').length == 0">-없이 16자리 숫자를 입력해주세요.</font>\n                                    <div class="card-input-box">\n                                        <number-input class="form-control hide-card inputs input-no" :type="\'tel\'" :num="cardInfo.cardNoPart[0]" v-model="cardInfo.cardNoPart[0]" maxlength="4"></number-input>\n                                    </div>\n                                    <div class="card-input-box">\n                                        <number-input class="form-control hide-card inputs input-no" :type="\'tel\'" :num="cardInfo.cardNoPart[1]" v-model="cardInfo.cardNoPart[1]" maxlength="4"></number-input>\n                                    </div>\n                                    <div class="card-input-box">\n                                        <number-input class="form-control hide-card inputs input-no" :type="\'tel\'" :num="cardInfo.cardNoPart[2]" v-model="cardInfo.cardNoPart[2]" maxlength="4"></number-input>\n                                    </div>\n                                    <div class="card-input-box">\n                                        <number-input class="form-control inputs input-no" :type="\'tel\'" :num="cardInfo.cardNoPart[3]" v-model="cardInfo.cardNoPart[3]" maxlength="4"></number-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="card card-middle card-hide">\n                                <div class="half-card">\n                                    <label class="card-label">카드 비밀번호</label>\n                                    <font class="card-placeholder card-placeholder-pwd ml15" v-on:click="hidePwdPlaceholder" v-if="cardInfo.cardPw.length == 0">앞2자리</font>\n                                    <div class="card-input-box ml15">\n                                        <number-input class="form-control hide-card inputs input-pwd" :type="\'tel\'" :num="cardInfo.cardPw" v-model="cardInfo.cardPw" maxlength="2"></number-input>\n                                    </div>\n                                </div>\n                                <div>\n                                    <label class="card-label">유효기간</label>\n                                    <div class="card-input-box month ml15">\n                                        <number-input class="form-control inputs input-exp" :type="\'tel\'" :num="cardInfo.expMonth" v-model="cardInfo.expMonth" maxlength="2" placeholder="MM"></number-input>\n                                    </div>\n                                    <div class="card-input-box divider">/</div>\n                                    <div class="card-input-box year">\n                                        <number-input class="form-control inputs input-exp" :type="\'tel\'" :num="cardInfo.expYear" v-model="cardInfo.expYear" maxlength="2" placeholder="YY"></number-input>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="card card-hide">\n                                <label class="card-label">생년월일<font>(6자리)</font></label>\n                                 <div class="card-input-box num ml15">\n                                    <number-input class="form-control inputs" :type="\'tel\'" :num="cardInfo.idNo" v-model="cardInfo.idNo" maxlength="10" placeholder="법인카드의 경우 사업자등록번호 10자리 숫자"></number-input>\n                                </div>\n                            </div>\n                        </div>\n                    </template>\n                    \x3c!-- //그 외 카드정보 입력 --\x3e\n\t\t\t\t</div>\n\t\t\t',
						props: ["cardInfo", "fundingPageConfirm", "refreshConfirm"],
						data: function() {
							return {}
						},
						components: {
							numberInput: t(0).default.component()
						},
						created: function() {
							$(function() {
								$(".inputs").keydown(function(n) {
									var e = $(this).attr("maxlength"),
										t = [8, 9, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145],
										i = $(this).attr("class");
									if (8 == n.which && 0 == this.value.length) i.indexOf("input-no") > -1 ? $(this).parent().prev().children(".inputs").focus() : i.indexOf("input-exp") > -1 ? $(this).parent().prev().prev().children(".inputs").focus() : i.indexOf("funding-page-area-input") > -1 && $(this).prev(".inputs").focus();
									else {
										if ($.inArray(n.which, t) >= 0) return !0;
										if (this.value.length >= e) return i.indexOf("input-no") > -1 ? $(this).parent().next().children(".inputs").focus() : i.indexOf("input-exp") > -1 ? $(this).parent().next().next().children(".inputs").focus() : i.indexOf("funding-page-area-input") > -1 && $(this).next(".inputs").focus(), !1;
										if (n.shiftKey || n.which <= 47 || n.which >= 106) return !1;
										if (n.shiftKey || n.which >= 58 && n.which <= 95) return !1
									}
								}).keyup(function() {
									var n = $(this).attr("class"),
										e = $(this).attr("maxlength");
									if (this.value.length >= e) return n.indexOf("input-no") > -1 ? $(this).parent().next().children(".inputs").focus() : n.indexOf("input-exp") > -1 ? $(this).parent().next().next().children(".inputs").focus() : n.indexOf("funding-page-area-input") > -1 && $(this).next(".inputs").focus(), !1
								})
							})
						},
						watch: {
							refreshConfirm: function(n) {
								n && this.$emit("set-refresh-confirm", !1)
							}
						},
						methods: {
							hidePlaceholder: function() {
								$(".card-inputs .card-input-box:first .inputs").focus()
							},
							hidePwdPlaceholder: function() {
								$(".input-pwd").focus()
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\n                    \x3c!-- 비밀번호 표기란 --\x3e\n                    <div class="pin-num">\n                        <div class="pin-num-box" v-for="(item, index) in check">\n                            <template v-if="index < pinNum.length">*</template>\n                        </div>\n                    </div>\n\n                    \x3c!-- 비번입력 --\x3e\n                    <div class="pin-keyboard">\n                        <div class="pin-keyword-background">\n                            <div class="pin-keyboard-boxs">\n                                <div class="pin-keyboard-box" v-for="(item, index) in boxData.slice(0, 4)" v-html="item" v-on:click="clickBox(item)"></div>\n                                <div class="pin-keyboard-box pin-keyboard-gray" v-on:click="deleteBox">\n                                    <div class="icon icon-pin-backward"></div>\n                                </div>\n                            </div>\n                            <div class="pin-keyboard-boxs">\n                                <div class="pin-keyboard-box" v-for="(item, index) in boxData.slice(4, 8)" v-html="item" v-on:click="clickBox(item)"></div>\n                                <div class="pin-keyboard-box pin-keyboard-gray pin-refresh" v-on:click="refreshPinNo">재배열</div>\n                            </div>\n                            <div class="pin-keyboard-boxs">\n                                <div class="pin-keyboard-box" v-for="(item, index) in boxData.slice(8, 12)" v-html="item" v-on:click="clickBox(item)"></div>\n                                <div class="pin-keyboard-box pin-keyboard-gray pin-hide"></div>\n                            </div>\n                        </div>\n                    </div>\x3c!--arrow-left--\x3e\n                          \n                    \x3c!-- //핀번호 입력 내용 --\x3e\n\t\t\t\t</div>\n\t\t\t',
						props: ["pinReset"],
						data: function() {
							return {
								check: [!1, !1, !1, !1, !1, !1],
								boxData: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "", ""],
								pinNum: []
							}
						},
						created: function() {
							this.pinNum = _.clone([]), this.refreshPinNo()
						},
						watch: {
							pinNum: function(n) {
								6 == n.length && (this.$emit("pin-done", CryptoJS.SHA256(_.join(n)).toString()), this.pinNum = _.clone([]))
							},
							pinReset: function(n) {
								n && (this.pinNum = _.clone([]))
							}
						},
						methods: {
							refreshPinNo: function() {
								this.boxData = _.shuffle(this.boxData)
							},
							clickBox: function(n) {
								"" != n && this.pinNum.length < 7 && this.pinNum.push(n)
							},
							deleteBox: function() {
								this.pinNum = _.dropRight(this.pinNum)
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	n.exports = t(8)
}, function(n, e, t) {
	window.reward = {}, reward.list = t(9).default, reward.detail = t(15).default, reward.best = t(3).default, reward.funding = {}, reward.funding.main = t(24).default, reward.funding.support = t(30).default, reward.funding.payment = t(4).default
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n            <div>\n                \x3c!--/// 리워드 배너 --\x3e\n                <banner :page-type="\'R\'"></banner>\n\n                \x3c!--/// 진행중인 리워드 --\x3e\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div class="crowdy-title-01">진행중인 리워드</div>\n                        <span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디에서 핫한 프로젝트들을 만나보세요</span>\n                        <div class="crowdy-rwd-select">\n                            <order-select :options="orderTypeOptions" v-model="orderType"></order-select>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="container">\n                    <reward :param-order-type="orderType" :param-search-count="cardCount" :param-end-type="0"></reward>\n                </div>\n                \n                <div class="container mt60 xs-mt50">\n                    <a href="/c/july"><div class="crowdy-layout-introduction crowdy-layout-reward"></div></a>\n                </div>\n\n                \x3c!--/// 종료된 리워드 프로젝트 --\x3e\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div class="crowdy-title-01">종료된 리워드 프로젝트</div>\n                        <span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디에서 마무리된 리워드 프로젝트입니다.</span>\n                    </div>\n                    <reward :param-search-count="cardCount" :param-get-type="2"></reward>\n                </div>\n            </div>\n\t\t\t',
						data: function() {
							return {
								cardCount: 12,
								orderType: 1,
								orderTypeOptions: [{
									id: "1",
									text: "펀딩금액순"
								}, {
									id: "2",
									text: "마감임박순"
								}, {
									id: "3",
									text: "최신순"
								}]
							}
						},
						created: function() {
							$(window).width() < 768 && (this.cardCount = 6)
						},
						components: {
							banner: t(10).default.component(),
							reward: t(11).default.component(),
							orderSelect: t(14).default.component()
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div id="bannerCarousel" class="carousel slide main_slider_wrap" v-if="bannerCount > 0">\t\t\t\t\n\t\t\t\t\t<div class="carousel-indicator">\n\t\t\t\t\t\t<span class="arrow arrow-left ml3 hidden-xs" v-on:click="indicatorClick(\'prev\')"></span>\n\t\t\t\t\t\t<span class="arrow arrow-right ml13 hidden-xs" v-on:click="indicatorClick(\'next\')"></span>\n\t\t\t\t\t\t<span class="banner-count"> <span class="color-white">{{ currentIndex }}</span> / {{ bannerCount }} </span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="carousel-inner" role="listbox">\n\t\t\t\t\t\t<a v-for="(item, index) in banner" \n\t\t\t\t\t\t\tclass="item" \n\t\t\t\t\t\t\t:class="{active : index == 0}"  \n\t\t\t\t\t\t\t:style="{\'background-image\' : \'url(//\'+ item.bannerImg +\')\'}" \n\t\t\t\t\t\t\tv-on:click="bannerClick(item.bannerUrl, item.bannerUrlType)">\n\t\t\t\t\t\t\t<div class="carousel-caption webfont2">\n\t\t\t\t\t\t\t\t<div style="display: inline-flex;">\n\t\t\t\t\t\t\t\t\t<p class="font-blue type-text custom-mr">\n\t\t\t\t\t\t\t\t\t\t{{ type(item.bannerType) }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p v-if="pageType != \'R\'" class="font-blue type-text">\n\t\t\t\t\t\t\t\t\t\t{{ badge(item.bannerBadge) }}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h2 :style="{\'color\' : color(item.bannerColor)}" v-html="convert(item.bannerTitle)"></h2>\n\t\t\t\t\t\t\t\t<p :style="{\'color\' : color(item.bannerColor)}" class="caption-description">\n\t\t\t\t\t\t\t\t\t{{ item.bannerText }}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t',
						props: {
							pageType: {
								default: "A"
							}
						},
						data: function() {
							return {
								banner: [],
								bannerCount: 1,
								currentIndex: 1
							}
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var n = this;
								axios.post("/data/crowdy/banner/list", {
									pageType: this.pageType
								}).then(function(e) {
									n.banner = e.data.rData, n.bannerCount = e.data.rData.length, n.$nextTick(function() {
										$("#bannerCarousel").carousel({
											interval: 5e3,
											cycle: !0
										}), $("#bannerCarousel").hammer({
											velocity: .1,
											threshold: 10,
											posThreshold: 50,
											time: 1e3
										}).on("swipeleft", function() {
											$("#bannerCarousel").carousel("next")
										}), $("#bannerCarousel").hammer({
											velocity: .1,
											threshold: 10,
											posThreshold: 50,
											time: 1e3
										}).on("swiperight", function() {
											$("#bannerCarousel").carousel("prev")
										}), $(".carousel").on("slid.bs.carousel", function() {
											n.currentIndex = $("div.carousel-inner a.active").index() + 1
										})
									})
								})
							},
							bannerClick: function(n, e) {
								var t = "_self";
								2 == e && (t = "_blank"), n.indexOf("http://") < 0 && n.indexOf("https://") < 0 && (n = "http://" + n), window.open(n, t)
							},
							indicatorClick: function(n) {
								$("#bannerCarousel").carousel(n)
							},
							color: function(n) {
								return "1" == n ? "#464646" : "#ffffff"
							},
							convert: function(n) {
								return n.replace(/[\n]/g, "<br/>")
							},
							badge: function(n) {
								return "1" == n ? "선착순 배정" : "2" == n ? "금액순 배정" : "3" == n ? "기타배정" : "0" == n || "" == n ? "" : void 0
							},
							type: function(n) {
								return "1" == n ? "리워드" : "2" == n ? "투자" : "3" == n ? "공지" : "4" == n ? "EVENT" : "5" == n ? "사전공개" : "6" == n ? "NEW" : void 0
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n                    <div class="card-reward-list">\n                        <div class="card-row-01">\n                            <div v-for="(item, index) in reward" class="col-sm-4 col-xs-6" >\n                                <figure v-if="dataConfirm">\n                                    <a v-on:click="(item.cpAdultType == \'Y\' && item.cpAdultImgType == \'Y\') ? changeUrl(item) : none()" :href="(item.cpAdultType == \'Y\' && item.cpAdultImgType == \'Y\') ? \'javascript:void(0)\' : \'/r/\' + item.cpAliasUrl" class="card-reward-item" style="cursor:pointer;">\n                                        <div class="card-reward-img">\n                                            <div class="card-newStatus-icon" v-if="badgeCheck(item.cpStartDate)">NEW</div>\n                                            <img v-if="item.cpAdultImgType == \'N\'" :src="\'//\' + item.cpCardImg + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" alt="..." />\n                                            <img v-if="item.cpAdultImgType == \'Y\' && item.cpAdultType == \'Y\'" src="//image-se.ycrowdy.com/crowdyCss/img/adult1.png/ycrowdy/resize/!340x!226" class="img-responsive" />\n                                            <img v-if="item.cpAdultType == \'Y\'" style="position:absolute; top:10px; right:0px; width:20%;" src="//image-se.ycrowdy.com/crowdyCss/img/adult2.png/ycrowdy/resize/!60x!40" />\n                                        </div>\n                                        <figcaption>\n                                            <div class="card-reward-content">\n                                                <div class="card-reward-name">{{item.memName}}</div>\n                                                <div class="card-reward-title">{{item.cpTitle}}</div>\n                                            </div>\n                                            <div class="card-reward-row">\n                                                <template v-if="item.cpEndStatus == \'0\'">\n                                                    <div class="card-reward-day crowdy-font-bold">대기</div>\n                                                </template>\n                                                <template v-if="item.cpEndStatus == \'1\' && parseInt(item.cpCurrentAmount) > 0">\n                                                    <div class="card-reward-price crowdy-color-blue" :class="{\'card-reward-price-mb\' : (width < 768 && item.cpCurrentAmount >= 1000000000)}"> {{ parseInt(item.cpCurrentAmount).toLocaleString() }}원 펀딩</div>\n                                                    <div class="card-reward-day"  :class="{\'card-reward-nowEnd\' : (width < 768 && item.cpDday == 0), \'crowdy-color-blue\': (width >= 768 && item.cpDday == 0)}">\n                                                        <template v-if="item.cpDday > 0">D - {{item.cpDday}}</template>\n                                                        <template v-if="item.cpDday == 0">{{endTime}}</template>\n                                                    </div>\n                                                    <div class="card-reward-persent">{{item.cpRate}}%</div>\n                                                </template>\n\n                                                <template v-if="(item.cpEndStatus ==\n                                                 \'1\') && parseInt(item.cpCurrentAmount) == 0">\n\n                                                    <div class="card-reward-day card-reward-day-zero"  :class="{\'card-reward-nowEnd\' : (width < 768 && item.cpDday == 0), \'crowdy-color-blue\': (width >= 768 && item.cpDday == 0)}" style="display:none;">\n                                                        <template v-if="item.cpDday > 0">D - {{item.cpDday}}</template>\n                                                        <template v-if="item.cpDday == 0">{{endTime}}</template>\n                                                    </div>\n\n                                                    <div class="card-reward-now">지금 바로 펀딩하세요!</div>\n                                                </template>\n\n                                                <template v-if="item.cpEndStatus != \'0\' && item.cpEndStatus != \'1\'">\n                                                    <div class="card-reward-price" :class="{\'card-reward-price-mb\' : (width < 768 && item.cpCurrentAmount >= 1000000000)}"> {{ parseInt(item.cpCurrentAmount).toLocaleString() }}원\n                                                        <template v-if="item.cpEndStatus == \'2\'">펀딩성공</template>\n                                                        <template v-if="item.cpEndStatus == \'3\'">펀딩종료</template>\n                                                    </div>\n                                                    <div class="card-reward-day crowdy-font-bold">종료</div>\n                                                    <div class="card-reward-persent">{{item.cpRate}}%</div>\n                                                </template>\n                                            </div>\n                                        </figcaption>\n                                    </a>\n                                </figure>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div v-show="moreShow">\n                        <div v-on:click="more()" class="crowdy-btn-01 crowdy-btn-layout01">\n                            <font v-if="paramGetType == 1">리워드 프로젝트 더보기</font>\n                            <font v-if="paramGetType == 2">종료된 프로젝트 더보기</font>\n                            <font v-if="paramGetType == 3">모의펀딩 프로젝트 더보기</font>\n                        </div>\n                    </div>\n                    \n                    <member-adult-certi :childBus="childBus" v-on:return-url="returnUrl"></member-adult-certi>\n                </div> \n            ',
						props: {
							main: {
								default: !0
							},
							communityIdx: {
								default: ""
							},
							simulationStatus: {
								default: ""
							},
							paramOrderType: {
								default: 1
							},
							paramEndType: {
								default: 1
							},
							paramSearchCount: {
								default: 12
							},
							paramGetType: {
								default: 1
							}
						},
						components: {
							memberAdultCerti: t(1).default.component()
						},
						data: function() {
							return {
								childBus: new Vue,
								authBus: new Vue,
								dataConfirm: !1,
								reward: [],
								search: {
									communityIdx: this.communityIdx,
									orderType: this.paramOrderType,
									endType: this.paramEndType,
									cpSimulationConfirm: this.simulationStatus,
									link: [],
									paging: {
										page: 1,
										count: this.paramSearchCount
									}
								},
								totalPageCount: 0,
								sumPageCount: 0,
								moreShow: !0,
								width: $(window).width()
							}
						},
						mounted: function() {
							$("#authModal").on("hidden.bs.modal", function(n) {
								$("#adCertiMd").css("z-index", "1050")
							})
						},
						created: function() {
							this.load()
						},
						computed: {
							endTime: function() {
								return moment.updateLocale("en", {
									relativeTime: {
										hh: "%d 시간 남음",
										mm: "%d 분 남음",
										d: "오늘 까지",
										h: "1 시간 남음"
									}
								}), moment().endOf("day").fromNow(!0)
							}
						},
						watch: {
							paramOrderType: function(n) {
								this.search.orderType = n, this.search.paging.page = 1, this.reward = [], this.load()
							},
							paramEndType: function(n) {
								this.search.endType = n, this.search.paging.page = 1, this.reward = [], this.load()
							}
						},
						methods: {
							load: function() {
								var n = this;
								this.dataConfirm = !1, axios.post("/data/view/reward/list", this.search).then(function(e) {
									1 == n.search.paging.page && (n.totalPageCount = e.data.rData.cardCount), n.reward = _.concat(n.reward, e.data.rData.cardList), n.totalPageCount <= n.reward.length ? n.moreShow = !1 : n.moreShow = !0, 0 == n.reward.length && ("Y" == n.simulationStatus ? n.$emit("data-count-confirm", "simulation") : n.$emit("data-count-confirm", "reward")), "Y" == n.simulationStatus ? n.link = "/sr/" : n.link = "/r/", n.dataConfirm = !0
								})
							},
							more: function() {
								this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.load()
							},
							badgeCheck: function(n) {
								var e = moment(new Date),
									t = moment(n);
								return e.diff(t, "days") < 7
							},
							changeUrl: function(n) {
								var e = this;
								if ("Y" == n.cpAdultType && "Y" == n.cpAdultImgType) {
									if (!userInfo.loginConfirm()) return;
									$(".page-loader-more").fadeIn(""), axios.post("/data/member/certi/adult", {
										memCode: userInfo.memCode
									}).then(function(t) {
										if ($(".page-loader-more").fadeOut(""), "0000" == t.data.rCode) {
											var i = t.data.rData;
											if ("Y" == i.memCiConfirm) {
												if ("N" == i.memAdultConfirm) return void noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다.");
												location.href = e.link + n.cpAliasUrl
											} else e.childBus.$emit("load", 1, 1, e.link + n.cpAliasUrl)
										} else e.childBus.$emit("load", 1, 1, e.link + n.cpAliasUrl)
									})
								} else location.href = this.link + n.cpAliasUrl
							},
							returnUrl: function(n) {
								location.href = n
							},
							none: function() {}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: "\n\t\t\t\t<select>\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</select>\n\t\t\t",
						props: ["options", "value", "placeholderText"],
						mounted: function() {
							var n = this,
								e = {
									data: this.options,
									minimumResultsForSearch: -1
								};
							void 0 != this.placeholderText && (e.placeholder = this.placeholderText), $(this.$el).select2(e).val(this.value).trigger("change").on("change", function() {
								n.$emit("input", this.value), n.$emit("change", this.value)
							})
						},
						watch: {
							value: function(n) {
								$(this.$el).val(n).trigger("change")
							}
						},
						destroyed: function() {
							$(this.$el).off().select2("destroy")
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                \x3c!-- 본인인증 모달  --\x3e\n                <div id="authModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                    <div class="modal-dialog" role="document">\n                        <div class="modal-content">\n                        \t<div class="modal-header">\n                                <button type="button" class="close" v-on:click="modalHide" aria-label="Close" class="xButton"></button>\n\t\t\t\t\t\t\t</div>\n                            <div class="modal-body"  :style="\'height:\' + (winHei - 200) + \'px;\'">\n                                <div class="agree-body">\n                                    <template v-if="agreeIdx == 0">\n                                        <div class="agree-subtitle">제1조 (목적)</div>\n                                        본 약관은 NICE평가정보(주) (이하 "회사"라 한다)이 제공하는 본인확인서비스(이하 "서비스"라 한다)에 관한 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제2조 (약관의 효력 및 변경)</div>\n                                        1. 본 약관은 "이용자"에게 "서비스" 화면에 게시하거나, 기타의 방법으로 공지하는 것으로 효력이 발생합니다.<br/>\n                                        2. "회사"는 약관의 규제에 관한 법률 및 기타 관련 법령에 위배되지 않는 범위에서 본 약관의 내용을 개정할 수 있으며, 변경된 경우에는 제1항과 같은 방법으로 공지합니다. 다만 "이용자"의 권리와 의무에 관한 중요한 사항은 변경된 내용의 시행 15일 이전에 공지합니다.<br/>\n                                        3. "이용자"는 변경된 약관에 대한 내용을 알지 못하여 발생하는 손해 및 피해에 대해서는 "회사"가 책임을 지지 않습니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제3조 (약관 외 준칙)</div>\n                                        본 약관에 명시되지 아니한 사항에 대해서는 정보통신망 이용 촉진 및 정보보호 등에 관한 법률등 기타 관련 법령 또는 상관례에 따릅니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제4조 (용어의 정의)</div>\n                                        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>\n                                        1. "본인확인서비스"라 함은 "이용자"가 인터넷상에서 휴대폰 등의 인증수단을 이용하여, 본인임을 안전하게 식별 및 확인해 주는 서비스를 말합니다.<br/>\n                                        2. "이용자"라 함은 "회사"에서 제공하는 "서비스"의 이용을 위해 자신의 "본인확인정보"를 "회사" 및 "본인확인기관" 등에게 제공하고, 본인임을 확인 받고자 하는 자를 말합니다.<br/>\n                                        3. "본인확인정보"라 함은 "이용자"가 입력한 생년월일, 성별, 성명, 내/외국인, 휴대폰번호, 통신사 등 본인 식별에 필요한 "이용자"의 정보를 말합니다.<br/>\n                                        4. "본인확인기관"이라 함은 주민등록번호를 사용하지 아니하고 본인을 확인하는 방법 또는 서비스를 제공하는 자로 방송통신위원회로부터 본인확인기관으로 지정을 받은 자를 의미합니다.<br/>\n                                        5. "인터넷사업자"라 함은 인터넷을 이용하여 정보를 제공하거나, 정보의 제공을 매개하는 일을 업으로 하는 자로 "회사"와 계약을 통해 운영하며, 인터넷 웹사이트의 "이용자"에 대한 "본인확인정보"를 제공 받는 사업체를 말합니다.<br/>\n                                        6. "중복가입확인정보"라 함은 웹사이트에 가입하고자 하는 이용자의 중복 확인을 위해 제공되는 정보를 말합니다.<br/>\n                                        7. "연계정보" 라 함은 "인터넷사업자"의 온ㆍ오프라인 서비스 연계 등의 목적으로 "이용자"를 식별하기 위해 제공되는 정보를 말합니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제5조 (회사의 의무)</div>\n                                        1. "회사"는 "서비스" 제공과 관련하여 인지한 "이용자"의 "본인확인정보"를 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있는 경우 등 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.<br/>\n                                        2. "회사"는 "이용자"에게 안전한 "서비스" 제공을 위하여 지속적으로 "서비스"의 예방점검, 유지보수 등을 이행하며, "서비스"의 장애가 발생하는 경우, 이를 지체 없이 수리 및 복구합니다.<br/>\n                                        3. "회사"는 "이용자"가 제기한 의견, 불만이 타당하다고 인정되는 경우 적절한 절차를 거쳐 이를 지체 없이 처리하거나 처리에 관한 일정을 통지하여야 합니다.<br/>\n                                        4. "회사"는 접근매체의 발급 주체가 아닌 경우에는 접근 매체의 위조나 변조로 발생한 사고로 인하여, "이용자"에게 발생한 손해에 대하여 배상책임이 없습니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제6조 (이용자의 의무)</div>\n                                        1. "이용자"는 "서비스"를 이용함에 있어서 다음 각호에 해당하는 행위를 하여서는 안되며, "회사"는 위반 행위에 따르는 일체의 법적 책임을 지지 않습니다.<br/>\n                                        1) 타 "이용자"의 "본인확인정보"를 부정하게 사용 및 도용하는 행위<br/>\n                                        2) "회사"의 저작권, 제3자의 저작원 등 기타 권리를 침해하는 행위<br/>\n                                        3) 범죄 행위<br/>\n                                        4) 기타 관련 법령에 위배되는 행위<br/>\n                                        2. "이용자"는 자신의 접근매체를 제3자에게 누설 또는 노출하거나 방치하여서는 안되며, 접근 매체의 도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 합니다.<br/>\n                                        3. "이용자"는 본 약관에서 규정하는 사항과 "서비스"에 대한 이용안내 또는 주의사항을 준수하여야 합니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제7조 (서비스의 내용)</div>\n                                        1. "서비스"는 "이용자"가 주민등록번호의 입력 없이, 본인명의로 된 인증수단(휴대폰 등)을 이용하여 본인 확인이 가능한 인증 서비스 입니다.<br/>\n                                        2. "인터넷사업자"는 회원가입, ID/PW찾기, 성인인증, 기타 본인확인이 필요한 컨텐츠 요청 시 "이용자"에게 "서비스"를 제공 합니다.<br/>\n                                        3. "이용자"는 자신의 생년월일, 성명, 성별, 내/외국인, 휴대폰번호, 통신사 등의 정보를 입력 후, 입력한 정보가 일치한 경우 해당 휴대폰번호로 1회성 비밀번호(승인번호)가 발송되며, 수신된 승인번호를 정확하게 입력하는 것으로 본인 확인이 이루어 집니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제8조 (서비스 제공시간)</div>\n                                        1. "서비스"의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 정기 점검 및 기타 기술상의 이유로 "서비스"가 일시 중지될 수 있고 또한, 운영상의 목적으로 "회사"가 정한 기간에도 일시 중지될 수 있습니다.<br/>\n                                        2. "회사"는 효율적인 업무 수행을 위하여 필요하다고 판단하는 경우 "서비스"를 일정 범위로 분할 하여 각 범위 별로 이용가능 시간을 달리 정할 수 있으며, 이 경우 그 내용을 공지 합니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제9조 (서비스 제공의 중지)</div>\n                                        1."회사"는 다음 각 호에 해당하는 사유가 있는 경우 "서비스" 제공의 전부 또는 일부를 중지할 수 있습니다.<br/>\n                                        1) "서비스"를 위한 설비의 보수 등 공사로 인한 부득이한 경우<br/>\n                                        2) 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 "서비스" 이용에 지장이 있는 경우<br/>\n                                        3) "서비스" 계약종료 등과 같은 "인터넷사업자"의 제반 사정으로 "서비스"를 유지할 수 업는 경우<br/>\n                                        4) 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우<br/>\n                                        2. "회사"는 "서비스"의 변경, 중지로 발생하는 문제에 대해서는 어떠한 책임도 지지 않습니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제10조 (서비스의 안전성 확보)</div>\n                                        1. "회사"는 "서비스"의 안전성과 신뢰성을 확보하기 위하여 업무처리지침의 제정 및 시행, 정보처리시스템 및 전산자료의 관리 등의 관리적 조치와 모니터링 체계 및 해킹방지시스템 구축 및 운영 등의 기술적 조치를 취하고 있습니다.<br/>\n                                        2. "회사"는 서버 및 통신기기의 정상작동여부 확인을 위하여 정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 체계를 갖추고 있습니다.<br/>\n                                        3. "회사"는 해킹 침해 방지를 위하여 다음 각 호의 시스템 및 프로그램을 설치하여 운영합니다.<br/>\n                                        1) 침입차단시스템 설치<br/>\n                                        2) 침입탐지시스템 설치<br/>\n                                        3) 그 밖에 필요한 보호장비 또는 암호프로그램 등 정보보호시스템 설치<br/>\n                                        1. "회사"는 컴퓨터바이러스 감염을 방지하기 위하여 다음 각 호를 포함한 대책을 수립, 운영하고 있습니다.<br/>\n                                        1) 출처, 유통경로 및 제작자가 명확하지 아니한 응용프로그램은 사용을 자제하고 불가피할 경우에는 컴퓨터바이러스 검색프로그램으로 진단 및 치료 후 사용할 것<br/>\n                                        2) 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신 버전을 유지할 것<br/>\n                                        3) 컴퓨터바이러스 감염에 대비하여 방어, 탐색 및 복구 절차를 마련할 것\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제11조 (이용자의 개인정보보호)</div>\n                                        "회사"는 관련법령이 정하는 바에 따라서 "이용자"의 개인정보를 보호하기 위하여 노력합니다. "이용자"의 개인정보보호에 관한 사항은 관련법령 및 "회사"가 정하는 "개인정보취급방침"에 정한 바에 따릅니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제12조 (개인정보의 위탁)</div>\n                                        "회사"는 수집된 개인정보의 취급 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나, 필요한 경우 업무의 일부 또는 전부를 "회사"가 선정한 회사에 위탁할 수 있습니다. 개인정보의 위탁에 관한 사항은 관련법령 및 "회사"가 정하는 "개인정보취급방침"에 정한 바에 따릅니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제13조 (손해배상)</div>\n                                        "회사"는 "서비스"의 이용과 관련하여 "이용자"에게 발생한 "회사"측의 중과실에 의한 손해를 제외한 어떠한 손해에 관하여도 책임을 지지 않습니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제14조 (회사와 인터넷사업자와의 관계)</div>\n                                        1. "회사"는 "인터넷사업자"가 제공하는 서비스 상품 또는 용역 등에 대하여 보증책임을 지지 않습니다.<br/>\n                                        2. "회사"와 "인터넷사업자"는 독자적으로 사이트를 운영하며, "인터넷사업자"와 "이용자"간에 행해진 거래에 대하여 고의 또는 중과실이 있는 경우를 제외하고는 어떠한 책임도 지지 않습니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제15조 (면책)</div>\n                                        1. "회사"의 고의 또는 과실 없이 "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한 책임이 면제됩니다.<br/>\n                                        2. "회사"는 "이용자" 또는 제3자 측의 사정으로 인한 "서비스" 이용의 장애에 대하여 책임을 지지 않습니다.<br/>\n                                        3. "회사"는 고의 또는 중과실이 없는 한 "이용자"가 "서비스"를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 "서비스"를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.<br/>\n                                        4. "회사"는 "이용자"가 "서비스"에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 고의 또는 중과실이 없는 한 일체의 책임을 지지 않습니다.<br/>\n                                        5. 계약만료 또는 요금 미납의 결과로 사용자계정이 정지되거나, 보관 파일이 삭제된 후 이에 따르는 손해에 대하여 책임을 지지 않습니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">제16조 (관할 법원)</div>\n                                        1. "회사"와 "이용자"는 "서비스"와 관련하여 분쟁이 발생한 경우, 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.<br/>\n                                        2. 제1항의 협의에서도 분쟁이 해결되지 않은 경우 등, 약관과 관련하여 분쟁으로 인한 소송이 제기될 경우 동 소송은 서울중앙지방법원을 관할 법원으로 합니다.\n                                        <br/><br/>\n                                        <div class="agree-subtitle">부칙</div>\n                                        (시행일) 이 약관은 공시한 날로부터 시행합니다.\n\n                                    </template>\n                                   \n                                    <template v-if="agreeIdx == 1">\n    \t                                <template v-if="selectCom == 1 || selectCom == 5">\n                                            \n                                            <div class="agree-subtitle">1조 (목적)</div>\n                                            이 약관은 ‘본인확인서비스’를 제공하는 에스케이텔레콤 주식’회사’(이하 ‘‘회사’’라 합니다)와 ‘본인확인서비스’ 이용자 (이하 ‘이용자’라 합니다)간에 ‘본인확인서비스’ 이용에 관한 ‘회사’와 ‘이용자’의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2조 (용어의 정의)</div>\n                                            ① ‘본인확인서비스’라 함은 ‘이용자’가 유무선 인터넷 웹’사이트’ 및 스마트폰 Application 등(이하 ‘사이트’라 합니다)에서 본인 명의로 개통한 휴대폰을 이용하여, 본인확인정보를 입력하고 인증 절차를 통하여 본인 여부와 본인이 등록한 정보의 정확성을 확인하여 주는 서비스를 말합니다.<br/>\n\n                                            ② ‘본인확인정보’라 함은 본인확인을 위하여 ‘이용자’가 입력한 본인의 생년월일, 성별, 성명, 내/외국인 여부, 본인명의로 개통된 이동전화번호, 기타 ‘회사’와 ‘이용자’간에 별도로 설정한 번호 등 ‘이용자’에 대한 ‘본인확인서비스’ 제공을 위해 필요한 정보를 말합니다.<br/>\n\n                                            ③ ‘이용자’라 함은 ‘사이트’에서 ‘회사’가 제공하는 ‘본인확인서비스’를 이용하는 자를 말하며, ‘회사’의 이동전화서비스 가입자와 ‘회사’의 이동전화망을 이용하여 개별적으로 이동전화서비스를 제공하는 별정통신사업자의 가입자중 ‘회사’의 ‘본인확인서비스’를 이용하는 자를 말합니다.<br/>\n\n                                            ④ ‘중복가입확인정보’라 함은 ‘이용자’가 ‘사이트’에 가입하거나 ‘사이트’에서 특정 서비스 이용, 구매 등 어떤 행동을 할 때, 해당 ‘이용자’의 기 가입/이용 여부를 확인하기 위하여 생성되는 정보를 말합니다.<br/>\n\n                                            ⑤ ‘본인확인기관’이라 함은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 ‘본인확인서비스’ 관련 법령에 따라 주민등록번호를 수집·이용하고, ‘사이트’에서 주민등록번호를 사용하지 아니하고 본인을 확인할 수 있도록 해주는 방법(이하 ‘대체수단’이라 합니다)을 개발·제공·관리하는 업무를 담당하는 사업자를 말합니다.<br/>\n\n                                            ⑥ ‘연계 식별정보’라 함은 ‘이용자’가 가입/등록한 ‘사이트’들간의 서비스 또는 Contents, point등의 연계, 정산 등의 목적으로 ‘사이트’에 가입/등록한 ‘이용자’를 식별하기 위하여 생성되는 정보를 말합니다.<br/>\n\n                                            ⑦ ‘대행기관’은 ‘이용자’가 ‘사이트’에서 ‘본인확인서비스’를 제공받을 수 있도록, ‘사이트’와 ‘회사’간의 ‘본인확인서비스’를 중계하고 ‘이용자’에게 ‘본인확인서비스’ 이용방법의 안내와 문의 등 지원업무를 담당하는 등, ‘회사’가 위탁한 업무범위내에서 ‘회사’를 대신하여 ‘이용자’에게 ‘본인확인서비스’와 관련된 업무를 제공하는 사업자를 말합니다.<br/>\n\n                                            ⑧ ‘사이트’라 함은 유무선 인터넷 웹’사이트’, 스마트폰 Application 등을 통하여 ‘이용자’에게 상품, 서비스, Contents, Point 등 각종 재화와 용역을 유/무료로 제공하는 개인, 법인, 기관, 단체 등을 말합니다.<br/>\n\n                                            ⑨ ‘접근매체’란 ‘본인확인서비스’ 이용을 위해 ‘이용자’ 및 ‘이용자’가 입력하는 내용 등의진실성과 정확성을 담보하는 수단으로서, ‘이용자’가 입력하는 제2항의 정보, I-PIN ID 및 Password 등 ‘본인확인기관’에서 발급받은 정보, 기타 ‘이용자’가 ‘회사’ 및 ‘사이트’에서 설정한 ID 및 Password 등의 정보, ‘이용자’ 명의의 이동전화 번호 등을 말합니다.<br/>\n\n                                            ⑩ ‘대체수단’이라 함은 ‘중복가입확인정보’ 및 연계식별정보를 포함하여, 주민등록정보를 사용하지 아니하고 본인여부를 식별 및 확인할 수 있는 수단을 말합니다.<br/>\n\n                                            ⑪ ‘부가서비스’라 함은 ‘회사’가 ‘본인확인서비스’와 관련하여 추가적인 보안·인증절차 등을 유료 또는 무료로 제공하는 서비스를 말하여, 유료인 경우에는 ‘이용자’에 대해 ‘회사’의 이동전화서비스 청구서에 합산하여 ‘부가서비스’ 이용요금을 청구하고 이동전화 요금과 함께 수납합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3조 (약관의 명시 및 변경)</div>\n\n                                            ① ‘회사’는 이 약관을 ‘회사’가 운영하는 ‘사이트’ 등에 게시하거나 ‘이용자’의 ‘본인확인서비스’ 이용시 공개하여 ‘이용자’가 이 약관의 내용을 확인할 수 있도록 합니다. 또한 ‘이용자’의 요청이 있는 경우 전자문서의 형태로 약관 사본을 ‘이용자’에게 교부합니다.<br/>\n\n                                            ② ‘회사’는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, ‘회사’가 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 ‘회사’가 운영하는 ‘사이트’에서 적용일자 15일 전부터 공지합니다.<br/>\n\n                                            ③ ‘회사’가 전항에 따라 변경 약관을 공지 또는 통지하면서 ‘이용자’에게 약관 변경 적용일 까지 거부의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 명확하게 공지 또는 통지하였음에도 ‘이용자’가 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면 ‘이용자’가 변경 약관에 동의한 것으로 간주합니다. ‘이용자’는 변경된 약관 사항에 동의하지 않으면 ‘본인확인서비스’ 이용을 중단하고 이용 계약을 해지할 수 있습니다.<br/>\n\n                                            ④ ‘이용자’ 또는 ‘사이트’가 이 약관의 내용(약관 변경시 변경된 내용 포함)을 알지 못하여 발생하는 손해 및 피해에 대해서는 ‘회사’는 일체 책임을 지지 않습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">4조 (이용 계약의 성립)</div>\n                                            ‘이용자’가 ‘사이트’ 등에 게시되거나 ‘본인확인서비스’ 이용시 공개되는 이 약관의 내용에 “동의” 버튼을 누르거나 체크하면 약관에 동의하고, ‘본인확인서비스’ 이용을 신청한 것으로 간주합니다.\n                                            <br/><br/>\n\n                                            <div class="agree-subtitle">5조 (본인확인정보 및 ‘접근매체’의 관리 등)</div>\n\n                                            ① ‘회사’는 ‘본인확인서비스’ 제공시 ‘이용자’가 사용한 ‘접근매체’와 입력된 본인확인정보, ‘사이트’에서 제공하는 정보 등을 이용하여, ‘이용자’의 신원, 권한 및 ‘본인확인서비스’를 요청한 내역 등을 확인 할 수 있습니다.<br/>\n\n                                            ② ‘이용자’는 자신의 본인확인 정보 및 ‘접근매체’를 제3자에게 대여하거나 사용을 위임하거나 양도 또는 담보 목적으로 제공할 수 없으며, 본인확인정보 및 ‘접근매체’의 도용이나 위조·변조 등을 방지하기 위해 충분한 주의를 기울여야 합니다.<br/>\n\n                                            ③ ‘이용자’는 자신의 본인확인정보 및 ‘접근매체’를 제3자에게 누설 또는 노출하거나 방치하여서는 안됩니다.<br/>\n\n                                            ④ ‘이용자’는 ‘접근매체’의 분실·도난·유출·위조·변조 등 또는 본인확인정보 유출 등의 사실을 인지할 경우 ‘회사’에 즉시 통지하여야 하며, ‘회사’는 ‘이용자’의 통지를 받은 때부터 즉시 ‘본인확인서비스’를 중지합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">6조 (‘본인확인서비스’ 안내)</div>\n\n                                            ① ‘회사’가 제공하는 ‘본인확인서비스’는, ‘이용자’가 입력한 본인확인정보에 대해, ‘이용자’가 본인 명의로 개통하고 사용하고 있는 이동전화 서비스 관련 정보·’중복가입확인정보’·’연계 식별정보’를 이용하여, 본인 식별 또는 본인의 성년·미성년 여부, 중복가입여부 등을 확인하여주는 서비스 입니다. 단, ‘회사’의 이동전화망을 이용하여 개별적으로 이동전화서비스를 제공하는 별정통신사업자의 가입자에 대해서는 개별 별정통신사업자가 ‘회사’에 취급을 위탁한 정보만을 기반으로 본문의 서비스를 제공합니다.<br/>\n\n                                            ② ‘회사’는 직접 또는 ‘대행기관’을 통하여 ‘사이트’에, 서비스 화면 또는 Socket형태로 ‘본인확인서비스’를 제공하며, ‘사이트’는 ‘사이트’ 운영과 관련된 법령과 ‘사이트’ 이용약관에 따라 ‘이용자’에게 ‘본인확인서비스’ 이용 수단을 제공합니다.<br/>\n\n                                            ③ ‘이용자’는 특정 ‘사이트’에서 ‘회사’ 및 ‘대행기관’의 이용약관, ‘사이트’의 이용약관에 동의하는 경우, 해당 ‘사이트’에서 ‘회사’가 제공하는 ‘본인확인서비스’를 이용하실 수 있습니다.<br/>\n\n                                            ④ 제3항에 따라 각 이용약관에 동의한 경우, ‘이용자’가 자신의 생년월일, 성명, 성별, 내/외국인, 본인 명의로 가입한 이동통신사와 이동전화 번호 등의 정보를 입력하고, 입력한 정보가 일치하는 경우에 ‘이용자’의 이동전화 번호로 송신되는 1회성 암호(승인암호)를 정확하게 입력하는 것으로 본인 확인이 이루어 집니다. 단, ‘회사’가 직접 운영하는 ‘사이트’ 또는 관련 법령 등에 따라 주민등록번호의 수집·이용이 허용되는 ‘사이트’에서는 생년월일 대신 주민등록번호를 받을 수 있습니다.<br/>\n\n                                            ⑤ 제4항에 따라 본인확인이 완료된 ‘이용자’에 대해서는 해당 ‘이용자’의 본인확인정보, ‘중복가입확인정보’ 및 ‘연계 식별정보’를 ‘회사’가 보유하고 있는 경우, ‘사이트’의 요청에 따라 ‘사이트’에 제공될 수 있으며, 제공된 정보는 각 ‘사이트’가 ‘이용자’와 체결한 약관, 계약에 따라 운영·관리·폐기됩니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">7조(‘본인확인서비스’의 ‘부가서비스’)</div>\n\n                                            ① ‘회사’는 ‘본인확인서비스’ 이용과 관련하여, 보다 강화된 보안을 필요로 하는 ‘이용자’가 가입을 신청하는 경우에 한하여, 별도의 ‘부가서비스’를 유료 또는 무료로 제공합니다.<br/>\n\n                                            ② ‘회사’가 제공하는 ‘부가서비스’는 다음 각 호와 같으며, 상세 서비스 내용 및 이용 조건은 서비스별 이용약관에 따릅니다.<br/>\n\n                                            1. 휴대폰 인증보호 서비스 (월 1천원, 부가가치세 별도)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">8조 (‘대체수단’의 생성 및 제공)</div>\n\n                                            ① ‘회사’는 ‘이용자’의 이동전화 가입시 수집한 주민등록번호를 토대로 ‘대체수단’을 생성하고 ‘사이트’에 제공할 수 있습니다.<br/>\n\n                                            ② ‘회사’의 ‘대체수단’ 생성 및 제공방법은 다음 각 호와 같습니다.<br/>\n\n                                            1. ‘이용자’의 이동전화 가입시, 제3의 ‘본인확인기관’에 실명 사용여부를 질의하고, 이에 따라 ‘대체수단’을 받아와서 저장하는 방법<br/>\n                                            2. ‘이용자’의 ‘본인확인서비스’ 이용시, 제3의 ‘본인확인기관’간의 합의를 통하여 비밀번호 등 ‘대체수단’ 규격을 정한 후, 이에 따라 ‘회사’가 생성하거나 제3의 ‘본인확인기관’으로부터 제공받는 방법<br/>\n                                            3. ‘이용자’의 ‘본인확인서비스’ 이용시, 해당 ‘이용자’의 이동전화가입시 ‘회사’가 제공받은 주민등록번호와 해당 ‘이용자’가 이용하고 있는 ‘사이트’의 일련번호를 제3의 ‘본인확인기관’에 제공하고, 이에 해당되는 ‘대체수단’을 받아와서 제공하는 방법<br/>\n\n                                            ③ 제1항 제3호에 따라 ‘회사’가 제3의 ‘본인확인기관’으로부터 ‘대체수단’을 제공받은 경우, 해당 ‘대체수단’의 정확성 유무에 대해서는 ‘회사’가 책임지지 않습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">9조 (‘본인확인서비스’ 제공시간)</div>\n\n                                            ① ‘본인확인서비스’의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 정기 점검 및 기타 기술상의 이유, 기타 운영상의 사유와 목적에 따라 ‘회사’가 정한 기간에 일시 중지될 수 있으며, 각 ‘사이트’의 기술상, 운영상의 사유와 목적에 따라 일시 중지될 수 있습니다.<br/>\n\n                                            ② ‘회사’는 ‘본인확인서비스’ 중지에 따라 ‘이용자’에게 별도의 보상은 하지 않습니다. 단 ‘본인확인서비스’를 이용기간에 따라 정액제 형태로 유료 판매하는 경우, 정액제 유료 ‘이용자’에게는 중지시간이 24시간을 초과한 경우에 한하여, 월 이용금액을 해당월의 날짜 수로 일할 계산하여 환불 또는 차감하며, 이용금액의 과금 당사자가 ‘회사’인 경우에는 ‘회사’가, ‘대행기관’인 경우에는 ‘대행기관’이 환불 또는 차감하여 드립니다.<br/>\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제10조 (‘회사’의 권리와 의무)</div>\n\n                                            ① ‘회사’가 ‘접근매체’의 발급주체가 아닌 경우에는 ‘접근매체’의 위조·변조·누설 등으로 인해 ‘이용자’에게 발생한 손해에 대하여 배상책임이 없습니다.<br/>\n\n                                            ② ‘이용자’가 제5조 제2항 내지 제4항의 내용을 준수하지 아니하거나, ‘회사’가 부정사용 여부를 확인할 수 없는 ‘접근매체’ 또는 본인확인정보의 이용으로 인해 발생한 ‘이용자’의 손해에 대하여 ‘회사’는 배상책임이 없습니다.<br/>\n\n                                            ③ ‘회사’는 ‘본인확인서비스’ 제공과 관련하여 인지한 ‘이용자’의 본인확인정보를 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있는 경우 등 관계 법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.<br/>\n\n                                            ④ ‘회사’는 ‘이용자’에게 안정적인 ‘본인확인서비스’ 제공을 위하여 지속적으로 관련 시스템이나 절차, 기능 등의 예방점검, 유지보수 등을 이행하며, ‘본인확인서비스’의 장애가 발생하는 경우, 이를 지체 없이 수리 및 복구합니다.<br/>\n\n                                            ⑤ ‘회사’는 복제폰, 대포폰, 휴대폰 소액대출(일명 휴대폰깡) 등 시장 질서를 교란시키는 불법행위에 의한 피해 방지를 위하여 불법행위가 의심되는 ‘이용자’ 또는 회선에 대한 ‘본인확인서비스’ 이용을 제한하거나 중지하는 것은 물론, 관계 법령에 따라 행정 및 사법기관에 수사를 의뢰할 수 있습니다.<br/>\n\n                                            ⑥ ‘회사’는 ‘회사’가 제공하는 이동전화 등 통신역무의 요금을 정상적으로 납부하지 않거나 일부 특수 요금제에 가입한 ‘이용자’에 대하여 ‘본인확인서비스’ 이용을 제한할 수 있습니다.<br/>\n\n                                            ⑦ ‘회사’는 ‘이용자’가 ‘회사’의 이동전화 등 통신역무 이용을 위해 제출한 가입신청서 또는 이와 관련된 본인확인 절차가, 명의도용, 관련 서류 위·변조 등 위법 행위가 개입된 사실을 확인하는 즉시 해당 ‘이용자’ 및 회선에 대한 ‘본인확인서비스’ 제공을 중지하며, 해당 ‘이용자’와 회선에 대해 관련 법령 및 통신역무 이용약관에 따른 조치를 취할 수 있습니다.<br/>\n\n                                            ⑧ ‘이용자’중 ‘회사’의 이동전화망을 이용하여 개별적으로 이동전화서비스를 제공하는 별정통신사업자의 가입자에 대해서는, 개별 별정통신사업자의 본인확인절차 미비, 명의도용, 관련 서류 위·변조, 본인확인정보의 오류 등에 대해 ‘회사’는 일절 책임을 부담하지 않고, 개별 별정통신사업자가 일체의 책임을 부담합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">11조 (‘이용자’의 권리와 의무)</div>\n\n                                            ① ‘이용자’는 ‘본인확인서비스’를 이용함에 있어서 다음 각 호에 해당하는 행위를 하여서는 안되며, ‘회사’는 ‘이용자’의 다음 각 호의 행위에 대해 일체의 법적 책임을 지지 않습니다.<br/>\n\n                                            1. 본인이 아닌 타인의 본인확인정보를 부정하게 사용 및 도용하는 행위<br/>\n                                            2. ‘회사’ 및 ‘대행기관’, ‘사이트’의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위<br/>\n                                            3. 법령에 규정하는 제반 범죄 및 위법 행위<br/>\n                                            4. 이 약관에 규정된 ‘이용자’의 의무 또는 준수사항을 위반하는 행위<br/>\n\n                                            ② ‘이용자’는 이 약관에서 규정하는 사항과 ‘본인확인서비스’에 대한 이용안내 또는 주의사항 등을 준수하여야 합니다.<br/>\n\n                                            ③ ‘이용자’는 제5조의 의무를 이행하여야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">12조 (‘이용자’ 정보의 제공 범위)</div>\n\n                                            ① ‘회사’는 ‘본인확인서비스’를 제공함에 있어 취득한 ‘이용자’의 정보를 ‘이용자’의 동의 없이 제3자에게 제공, 누설하거나 업무상 목적 외에 사용하지 않습니다.<br/>\n\n                                            ② ‘이용자’가 개인정보의 수집·이용·제공에 동의하고 이용하는 ‘사이트’ 또는 신용카드사 등 제3자가, ‘이용자’의 이동전화 번호 및 해당 ‘사이트’·신용카드사 등 제3자가 보유한 ‘대체수단’의 진실성 여부를 ‘회사’에 대해 확인할 경우, ‘회사’는 해당 이동전화 번호 및 ‘대체수단’의 진실성 여부를, 확인을 요청한 ‘사이트’ 또는 신용카드사 등 제3자에게 회신할 수 있습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">13조 (‘본인확인서비스’의 안정성 확보)</div>\n\n                                            ① ‘회사’는 ‘본인확인서비스’의 안전성과 신뢰성, 보안성을 확보하기 위하여 해킹방지시스템 및 보안관리 체계 구성, 접근제한 등 기술적, 관리적 조치를 취합니다.<br/>\n\n                                            ② ‘회사’는 ‘본인확인서비스’ 관련 서버 및 통신기기의 정상작동여부 확인을 위하여 정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 체계를 갖춥니다.<br/>\n\n                                            ③ ‘회사’는 해킹 침해 방지를 위하여 다음 각 호의 시스템 및 프로그램을 설치하여 운영합니다.<br/>\n\n                                            1. 침입 차단 및 탐지시스템 설치<br/>\n                                            2. 그 밖에 필요한 보호장비 또는 암호프로그램 등 정보보호시스템 설치<br/>\n\n                                            ④ ‘회사’는 컴퓨터바이러스 감염을 방지하기 위하여 바이러스 방지를 위한 방어, 탐색, 복구 절차를 자체적으로 운영합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">14조 (‘이용자’의 개인정보보호)</div>\n\n                                            ① ‘이용자’의 개인정보 보호는 ‘회사’가 관련 법령과 ‘회사’가 수립하여 운영하는 개인정보 취급방침 등에 따릅니다. 자세한 ‘회사’의 개인정보 수집·이용 범위 등은 이동전화 가입신청서와 ‘회사’ 대표 ‘사이트’(www.sktelecom.com)에서 제공되는 개인정보 취급방침을 참조하시기 바랍니다.<br/>\n\n                                            ② ‘이용자’중 ‘회사’의 이동전화망을 이용하여 개별적으로 이동전화서비스를 제공하는 별정통신사업자의 가입자에 대해서는, 해당 가입자가 속한 개별 별정통신사업자가 개인정보보호 및 수집·이용·제공 등에 대한 법적 절차 준수와 관련된 일체의 책임을 부담하며, 해당 가입자에 대한 개인정보 수집·이용 범위 등은 개별 별정통신사업자의 개인정보 취급방침을 참조하시기 바랍니다.<br/>\n\n                                            ③ 제1항과 제2항의 개인정보 취급방침에서 정한 바 이외에, ‘회사’는 ‘본인확인서비스’를 위하여 다음 각 호의 경우에 ‘이용자’ 개인정보의 일부를 ‘회사’가 선정한 사업자에게 제공할 수 있습니다.<br/>\n\n                                            1. ‘이용자’의 ‘본인확인서비스’ 이용시 ‘사이트’가 필요로 하는 ‘이용자’ 식별정보(‘중복가입확인정보’, ‘대체수단’)의 생성 및 관리, 제공을 위하여 ‘이용자’의 주민등록정보를 제3의 ‘본인확인기관’에게 제공할 수 있습니다.<br/>\n                                            2. ‘회사’가 수집 또는 제공받은 개인정보(‘중복가입확인정보’, ‘대체수단’)는 ‘회사’ 또는 ‘대행기관’을 통해 ‘사이트’에게 제공합니다.<br/>\n                                            3. ‘본인확인서비스’를 위한 ‘회사’의 개인정보의 수집·이용·제공범위 및 개인정보의 취급을 위탁하는 수탁자와 위탁업무내용 등은 이 약관이 게시되는 화면에 별도로 링크하여 제공합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">15조 (약관 외 준칙)</div>\n\n                                            이 약관에 명시되지 아니한 사항에 대해서는 정보통신망 이용 촉진 및 정보보호 등에 관한 법률 등 기타 관련 법령 또는 상관례에 따릅니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">16조 (관할법원)</div>\n\n                                            ① ‘본인확인서비스’ 이용과 관련하여 ‘회사’와 ‘이용자’ 사이에 분쟁이 발생한 경우, ‘회사’와 ‘이용자’는 분쟁의 해결을 위해 성실히 협의합니다.<br/>\n\n                                            ② 제1항의 협의에서도 분쟁이 해결되지 않을 경우 양 당사자는 민사소송법상의 관할 법원에 소를 제기할 수 있습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">부칙</div>\n\n                                            (시행일) 이 약관은 공지한 날로부터 시행합니다.\n\n                                        </template>\n                                        \n                                        <template v-if="selectCom == 2 || selectCom == 6">\n                                            \n                                            <div class="agree-subtitle">[㈜케이티 이용약관]</div>\n\n                                            <div class="agree-subtitle">제1조 (목적)</div>\n                                            \n                                            본 약관은 주민등록번호 대체 본인확인서비스를 제공하는 주식회사 케이티(이하 “회사”)와 이용 고객(이하 “이용자”)간에 서비스 제공에 관한 이용조건 및 절차 등 기타 필요한 사항을 규정함을 목적으로 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제2조 (용어의 정의)</div>\n\n                                            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>\n\n                                            ① “본인확인서비스”라 함은 이용자가 인터넷상에서 본인명의의 휴대폰(이용자 개인 명의 휴대폰 또는 법인 명의 휴대폰으로서 이용자가 본인확인서비스에 가입한 휴대폰)을 이용하여, 주민등록번호 입력 없이도 본인임을 안전하게 식별 및 확인해 주는 서비스를 말합니다.<br/>\n\n                                            ② “간편본인확인서비스”라 함은 본인확인서비스를 이용함에 있어 입력하는 본인확인정보를 성명과 휴대폰번호로 간소화하고 “PASS” 애플리케이션을 이용하는 방식을 의미합니다.<br/>\n\n                                            ③ “PASS”이라 함은 회사가 제공하는 애플리케이션(Application, 이하 ‘PASS 앱’)으로서 이용자가 PASS 앱에 등록한 인증수단을 확인하는 행위(예. 비밀번호 입력, 지문인식, 화자인식 등)를 통해 이용자 본인임을 안전하게 식별 및 확인하고 단말기의 점유를 확인하는 서비스를 말합니다.<br/>\n\n                                            ④ “이용자”라 함은 회사 또는 대행기관에서 제공하는 본인확인서비스의 이용을 위해 자신의 본인확인정보를 회사, 대행기관, 본인확인기관 등에게 제공하고, 본인임을 확인 받고자 하는 자로서 다음 각호의 자를 말합니다.<br/>\n\n                                            1. 회사의 개인 명의 이동전화서비스 가입자<br/>\n                                            2. 회사의 이동전화망을 이용하여 자체적으로 이동전화서비스를 제공하는 별정통신사업자의 가입자 중 개인 명의 가입자<br/>\n                                            3. 회사의 법인 명의 이동전화서비스 가입자의 휴대폰을 실제 사용하는 자로서 명의인의 법인으로부터 필요한 서류를 발급 받아 이를 회사에 제출하고 본인확인서비스에 가입한 자<br/>\n\n                                            ⑤ “본인확인정보”라 함은 이용자가 입력한 생년월일, 성별, 성명, 내/외국인, 휴대폰번호, 통신사 등 본인 식별에 필요한 이용자의 정보를 말합니다.<br/>\n\n                                            ⑥ “중복가입확인정보”라 함은 웹사이트에 가입하고자 하는 이용자의 중복확인을 위해 제공되는 정보를 말 합니다.<br/>\n\n                                            ⑦ “연계정보”라 함은 인터넷사업자의 온ㆍ오프라인 서비스 연계 등의 목적으로 이용자를 식별하기 위해 제공되는 정보를 말합니다.<br/>\n\n                                            ⑧ “본인확인기관”이라 함은 주민등록번호를 사용하지 아니하고 본인을 확인하는 방법 또는 본인확인서비스를 제공 하는 자로 방송통신위원회로부터 본인확인기관으로 지정을 받은 자를 의미합니다.<br/>\n\n                                            ⑨ “대행기관”이라 함은 회사를 대신하여 본인확인서비스의 제공 및 지원 등의 중계 업무를 담당하는 곳으로 회사와 업무지원에 대한 계약이 완료되어 인터넷사업자에 본인확인서비스를 제공하는 사업체를 말합니다.<br/>\n\n                                            ⑩ “인터넷사업자”라 함은 인터넷을 이용하여 정보를 제공하거나, 정보의 제공을 매개하는 일을 업으로 하는 자로 회사 또는 대행기관과의 서비스 계약을 통해, 인터넷 웹사이트에서 이용자에 대한 본인확인정보를 제공받는 사업체를 말합니다.<br/>\n\n                                            ⑪ “접근매체”라 함은 본인확인을 함에 있어 이용자 본인확인의 진실성과 정확성을 확보하기 위하여 사용 되는 수단 또는 정보로서 회사에 등록된 이용자의 전화번호, 이용자의 생체정보, 이상의 수단이나 정보를 사용하는데 필요한 비밀번호 등을 말합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제3조 (약관의 명시 및 변경)</div>\n\n                                            ① 회사는 본 약관을 회사가 운영하는 사이트에 게시하거나 본인확인서비스 이용시 이용자가 내용을 확인할 수 있도록 공개합니다.<br/>\n\n                                            ② 회사는 약관의 규제에 관한 법률 및 기타 관련 법령에 위배되지 않는 범위에서 본 약관의 내용을 개정 할 수 있으며, 변경된 경우에는 회사가 운영하는 사이트에서 공지합니다. 다만 “이용자”의 권리와 의무에 관한 중요한 사항은 변경된 내용의 시행 15일 이전에 공지합니다.<br/>\n\n                                            ③ 이용자는 개정된 약관 사항에 동의하지 않을 권리가 있으며, 개정된 약관에 동의하지 않는 경우, 본 서비스의 이용을 중단하고 이용 계약을 해지할 수 있습니다. 이용자가 회사의 전항 단서에 따른 약관의 불리한 변경에 대하여 적용예정일까지 회사에게 부동의 의사를 표시하지 않거나 이용계약을 해지하지 않은 경우 변경된 약관을 승인한 것으로 봅니다.<br/>\n\n                                            ④ 이용자가 변경된 약관에 대한 내용을 알지 못하여 발생하는 손해 및 피해에 대해서는 회사가 책임을 지지 않습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제4조 (접근매체의 관리 등)</div>\n\n                                            ⑤ 회사는 서비스 제공 시 접근매체를 이용하여 이용자의 신원, 권한 및 거래지시의 내용 등을 확인 할 수 있습니다.<br/>\n\n                                            ⑥ 이용자는 접근매체를 제3자에게 대여하거나 사용을 위임하거나 양도 또는 담보 목적으로 제공할 수 없습니다.<br/>\n\n                                            ⑦ 이용자는 자신의 접근매체를 제3자에게 누설 또는 노출하거나 방치하여서는 안되며, 접근매체의 도용 이나 위조 또는 변조를 방지하기 위해 충분한 주의를 기울여야 합니다.<br/>\n\n                                            ⑧ 회사가 접근매체의 발급주체가 아닌 경우에는 접근매체의 위조나 변조로 발생한 사고로 인하여 이용자에게 발생한 손해에 대하여 배상책임이 없습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제5조 (본인확인서비스 안내)</div>\n\n                                            ① 본인확인서비스는 이용자가 주민등록번호의 입력 없이, 본인명의로 된 개통된 휴대폰정보(이용자 개인 명의로 개통된 휴대폰 정보 또는 법인 명의로 개통된 휴대폰으로서 이용자가 본인확인서비스에 가입한 정보)를 이용하여 본인 식별 또는 본인 확인이 가능한 생년월일 기반의 주민등록번호 대체 휴대폰인증 서비스 입니다.<br/>\n\n                                            ② 회사는 대행기관을 통해 인터넷사업자에게 본인확인서비스를 제공하며, 인터넷사업자는 회원가입, ID/PW 찾기, 성인인증, 기타 본인확인이 필요한 경우 이용자에게 본인확인서비스를 제공 합니다.<br/>\n\n                                            ③ 이용자는 자신의 생년월일, 성명, 성별, 내/외국인, 휴대폰번호, 통신사 등의 정보를 입력하며(법인 명의로 개통된 휴대폰으로서 이용자가 본인확인서비스에 가입한 경우에는 본인확인서비스 가입 시 등록한 비밀번호를 추가로 입력하며), 입력한 정보가 일치한 경우에는 해당 휴대폰번호로 수신된 1회성 비밀번호(승인번호)를 정확하게 입력하는 것으로 본인 식별 또는 본인 확인이 이루어집니다. 단, 이용자가 간편본인확인서비스를 선택한 경우에는 자신의 통신사, 휴대폰번호, 이름만 입력하며, 입력한 정보가 일치한 경우에 해당 휴대폰에 설치 및 가입된 PASS 앱을 통해 이용자가 사전에 등록해둔 인증수단(비밀번호, 지문, 화자 정보 등)을 정확하게 입력하는 것으로 본인 식별 또는 본인 확인이 이루어집니다. 이 때, PASS 앱에 미 가입된 상태로 간편본인확인서비스 이용을 시도하는 경우 회사는 영속적인 서비스 제공을 위해 해당 이용자에게 PASS 앱 설치를 안내합니다.<br/>\n\n                                            ④ 본인확인서비스는 본인 명의로 개통된 휴대폰 정보(이용자 개인 명의로 개통된 휴대폰 정보 또는 법인 명의로 개통된 휴대폰으로서 이용자가 본인확인서비스에 가입한 정보)로 본인확인이 이루어집니다. 단, 휴대폰 일시정지 또는 이용정지 시 해당 정지기간 동안에는 본인확인서비스도 정지됩니다. <br/>\n\n                                            ⑤ 본인 확인이 완료 된 이용자에 대해서는 본인확인정보와 중복가입확인정보 및 연계정보가 인터넷사업 자에게 제공되며, 인터넷사업자는 중복가입확인정보 또는 연계정보 등을 이용하여 이용자 관리 및 컨텐츠를 제공ㆍ운영 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제6조 (본인확인서비스 제공시간)</div>\n\n                                            ① 본인확인서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 다만, 정기 점검 및 기타 기술상의 이유로 본인확인서비스가 일시 중지될 수 있고 또한, 운영상의 목적으로 회사가 정한 기간에도 일시 중지될 수 있습니다.<br/>\n\n                                            ② 회사는 효율적인 업무 수행을 위하여 필요하다고 판단하는 경우 본인확인서비스를 일정 범위로 분할하여 각 범위 별로 이용가능 시간을 달리 정할 수 있으며, 이 경우 그 내용을 공지 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제7조 (회사의 권리와 의무)</div>\n\n                                            ① 회사는 이용자가 본인확인서비스 이용시 본 이용약관이나 안내사항 등을 확인하지 않아 발생한 손해, 또는 접근매체를 통해 알 수 있었음에도 불구하고, 이용자가 자신의 접근매체를 누설 또는 노출하거나 방치한 손해 등 이용자의 부주의에 기인한 손해에 대하여 배상책임이 없습니다.<br/>\n\n                                            ② 회사는 본인확인서비스 제공과 관련하여 인지한 이용자의 본인확인정보를 본인의 승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있는 경우 등 기타 관계 법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.<br/>\n\n                                            ③ 회사는 이용자에게 안정적인 본인확인서비스 제공을 위하여 지속적으로 본인확인서비스의 예방점검, 유지보수 등을 이행하며, 본인확인서비스의 장애가 발생하는 경우, 이를 지체 없이 수리 및 복구합니다.<br/>\n\n                                            ④ 회사는 아래와 같은 사유가 발생하는 경우 이용자에 대하여 본인확인서비스를 제한할 수 있습니다.<br/>\n\n                                            1. 다른 사람의 명의사용 등 이용자 등록 시 허위로 신청하는 경우<br/>\n                                            2. 이용자 등록 사항을 누락하거나 오기하여 신청하는 경우<br/>\n                                            3. 대포폰(이동전화 서비스 본래의 목적과는 달리 불법대출 등 부정사용을 목적으로 타인 명의 무단 개통 또는 명의자를 교사하여 개통하는 휴대전화)을 이용하는 경우<br/>\n                                            4. 타인의 명의를 도용한 사실이 있거나 명의 도용을 이유로 처벌받은 경우<br/>\n                                            5. 불법 복제와 관련된 사실이 있거나 처벌 받은 경우<br/>\n                                            6. 기타 시장질서를 교란시키는 불법행위에 해당하는 경우<br/>\n\n                                            ⑤ 회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 중지할 수 있습니다. 회사는 회사의 고의 또는 과실이 없는 한 이로 인하여 발생한 손해에 대하여 배상책임이 없습니다.<br/>\n\n                                            1. 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우<br/>\n                                            2. 서비스를 위한 설비의 보수 등 공사로 인해 부득이한 경우<br/>\n                                            3. 서비스 업그레이드 및 시스템 유지보수 등을 위해 필요한 경우<br/>\n                                            4. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우<br/>\n                                            5. 이용자가 회사의 본인확인서비스 운영을 방해하는 경우<br/>\n                                            6. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우<br/>\n                                            7. 규제기관이 마련한 본인확인서비스 가이드를 준수하지 않고 임의로 변형 적용한 사이트에서 본인확인서비스를 요청하는 경우<br/>\n\n                                            ⑥ 전 항에 의하여 본인확인서비스를 중지하는 경우에는 회사가 이를 공지합니다. 다만, 회사가 통제할 수 없는 사유로 인한 본 서비스의 중단(회사 또는 운영자의 고의 및 과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 공지가 불가능한 경우에는 그러하지 아니합니다.<br/>\n\n                                            ⑦ 이용자 중 회사의 이동전화망을 이용하여 자체적으로 이동전화서비스를 제공하는 별정통신사업자의 개인 명의 가입자에 대하여는 해당 별정통신사업자의 본인확인절차 미비, 명의도용, 관련 서류 위·변조, 본인확인정보의 오류 등에 대해 회사는 일체 책임을 부담하지 않고 해당 별정통신사업자가 일체의 책임을 부담합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제8조 (이용자의 의무)</div>\n\n                                            ① 이용자는 본인확인서비스를 이용함에 있어서 다음 각호에 해당하는 행위를 하여서는 안되며, 회사는 위반 행위에 따르는 일체의 법적 책임을 지지 않습니다.<br/>\n\n                                            1. 타 이용자의 본인확인정보를 부정하게 사용 및 도용하는 행위<br/>\n                                            2. 회사의 저작권, 제3자의 저작 권 등 기타 권리를 침해하는 행위<br/>\n                                            3. 범죄 행위<br/>\n                                            4. 기타 관련 법령에 위배되는 행위<br/>\n\n                                            ② 이용자는 본 약관에서 규정하는 사항과 본인확인서비스에 대한 이용안내 또는 주의사항 등을 준수하여야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제9조 (본인확인정보의 제공금지)</div>\n\n                                            회사는 서비스를 제공함에 있어 취득한 이용자의 정보 또는 자료를 이용자의 동의 없이 제3자에게 제공, 누설하거나 업무상 목적 외에 사용하지 않습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제10조 (본인확인서비스의 안정성 확보)</div>\n\n                                            ① 회사는 본인확인서비스의 안전성과 신뢰성을 확보하기 위하여 업무처리지침의 제정 및 시행, 정보 처리시스템 및 전산자료의 관리 등의 관리적 조치와 모니터링 체계 및 해킹방지시스템 구축 및 운영 등의 기술적 조치를 취해야 합니다.<br/>\n\n                                            ② 회사는 서버 및 통신기기의 정상작동여부 확인을 위하여 정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 체계를 갖추어야 합니다.<br/>\n\n                                            ③ “회사”는 해킹 침해 방지를 위하여 정보보호시스템 및 프로그램을 설치하여 운영합니다.<br/>\n\n                                            ④ “회사”는 컴퓨터바이러스 감염을 방지하기 위하여 다음 각 호를 포함한 대책을 수립, 운영하고 있습니다.<br/>\n\n                                            1. 출처, 유통경로 및 제작자가 명확하지 아니한 응용프로그램은 사용을 자제하고 불가피할 경우에는 컴퓨터바이러스 검색프로그램으로 진단 및 치료 후 사용할 것<br/>\n                                            2. 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신 버전을 유지할 것<br/>\n                                            3. 컴퓨터바이러스 감염에 대비하여 방어, 탐색 및 복구 절차를 마련할 것\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제11조 (이용자의 개인정보보호)</div>\n\n                                            회사는 관련법령이 정하는 방에 따라서 이용자의 개인정보를 보호하기 위하여 노력하며, 이용자의 개인정보에 관한 사항은 관련 법령 및 회사가 정하는 개인정보처리방침에 정한 바에 따릅니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제12조 (개인정보의 처리)</div>\n\n                                            ① 회사는 수집된 개인정보의 처리 및 관리 등의 업무를 스스로 수행함을 원칙으로 하나, 필요한 경우 업무의 일부 또는 전부를 회사가 선정한 사업자에게 위탁할 수 있습니다.<br/>\n\n                                            ② 본인확인서비스 이용 시 이용자의 개인정보 수집 및 이용 동의에 따라 인터넷사업자가 필요로 하는 이용자 식별정보(중복가입확인정보, 연계정보)의 생성 및 제공을 위하여 관련 정보를 타 본인확인기관에게 제공할 수 있으며, 수집된 식별정보(중복가입확인정보, 연계정보)는 본인 식별 및 확인 위한 목적으로 회사 또는 대행기관을 통해 인터넷사업자에게 제공할 수 있습니다.<br/>\n\n                                            ③ 개인정보 처리 및 위탁 등에 관한 사항은 관련법령 및 회사가 정하는 개인정보처리방침에 정한 바에 따릅니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제13조 (약관 외 준칙)</div>\n\n                                            본 약관에 명시되지 아니한 사항에 대해서는 정보통신망 이용 촉진 및 정보보호 등에 관한 법률, 개인정 보보호법 등 기타 관련법령 또는 상관례에 따릅니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">부칙</div>\n\n                                            (시행일) 이 약관은 공시한 날로부터 시행합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">부칙</div>\n\n                                            (시행일) 이 약관은 2015년 4월 29일부터 시행합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">부칙</div>\n\n                                            (시행일) 이 약관은 2016년 8월 2일부터 시행합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">부칙</div>\n\n                                            (시행일) 이 약관은 2018년 8월 2일부터 시행합니다.\n\n                                        </template>\n\n                                        <template v-if="selectCom == 3 || selectCom == 7">\n                                            \n                                            <div class="agree-subtitle">[LG유플러스(주) 이용약관]</div>\n\n                                            <div class="agree-subtitle">제 1조 (목적)</div>\n\n                                            본 약관은 주민번호를 대체한 휴대폰 본인확인서비스(이하 “서비스”)를 제공하는 LG유플러스(이하 “회사”)와 이용 고객(이하 “이용자”)간에 서비스 제공에 관한 이용조건 및 절차 등 기타 필요한 사항을 정함을 목적으로 합니다.\n                                            <br/><br/>\n\n                                            <div class="agree-subtitle">제 2조 (용어의 정리)</div>\n\n                                            본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>\n\n                                            1. “휴대폰 본인확인서비스”라 함은 이용자가 인터넷상에서 본인명의의 휴대폰을 이용하여 주민번호를 입력하지 않고 본인임을 안전하게 식별 및 확인하는 방법을 제공하는 서비스를 말합니다.<br/>\n\n                                            2. “이용자”라 함은 서비스의 이용을 위해 자신의 본인확인정보를 회사, 인증대행사 및 타 본인확인기관 등에게 제공하고, 본인임을 확인 받고자 하는 자를 말합니다. <br/>\n\n                                            3. “본인확인정보”라 함은 이용자가 입력한 생년월일, 성별, 성명, 내/외국인, 휴대폰번호, 통신사 등 본인 식별에 필요한 이용자의 정보를 말합니다. <br/>\n\n                                            4. “접근매체”라 함은 모바일 통신 단말기(피쳐폰, 스마트폰)를 지칭한다.<br/>\n\n                                            5. “중복가입확인정보(DI)”라 함은 웹사이트에 가입하고자 하는 이용자의 중복확인을 위해 제공되는 정보를 말합니다.<br/>\n\n                                            6. “연계정보(CI)”라 함은 인터넷사업자의 온ㆍ오프라인 서비스 연계 등의 목적으로 이용자를 식별하기 위해 제공되는 정보를 말합니다.<br/>\n\n                                            7. “본인확인기관”이라 함은 주민등록번호를 사용하지 아니하고 본인을 확인하는 방법 또는 서비스를 제공하는 자로 방송통신위원회로부터 본인확인기관으로 지정을 받은 자를 의미합니다.<br/>\n\n                                            8. “인증대행사”이라 함은 회사를 대신하여 서비스의 제공 및 지원 등의 중계 업무를 담당하는 곳으로 회사와 업무지원에 대한 계약이 완료되어 인터넷사업자에게 서비스를 제공하는 사업자를 말합니다.<br/>\n\n                                            9. “인터넷사업자”라 함은 인터넷을 이용하여 정보를 제공하거나, 정보의 제공을 매개하는 일을 업으로 하는 자로 회사 또는 인증 대행사와의 서비스 계약을 통해 운영하며, 인터넷 웹사이트의 이용자에 대한 본인확인정보를 제공받는 사업자를 말합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 3조 (약관의 효력 및 변경)</div>\n\n                                            1. 본 약관은 이용자에게 서비스 화면에 게시하거나, 회사 홈페이지(www.uplus.co.kr)에 게시하여 공지함으로써 효력이 발생합니다. <br/>\n\n                                            2. 회사는 약관의 규제에 관한 법률 및 기타 관련 법령에 위배되지 않는 범위에서 본 약관의 내용을 개정할 수 있으며, 변경된 경우에는 제1항과 같은 방법으로 공지합니다. 다만 “이용자”의 권리와\n                                            의무에 관한 중요한 사항은 변경된 내용의 시행 15일 이전에 공지합니다. <br/>\n\n                                            3. 이용자는 변경된 약관에 대한 내용을 알지 못하여 발생하는 손해 및 피해에 대해서는 회사가 책임을 지지 않습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 4조 (접근매체의 관리 등)</div>\n\n                                            1. 이용자는 접근매체를 제3자에게 대여하거나 사용을 위임하거나 양도 또는 담보 목적으로 제공할 수 없습니다. <br/>\n\n                                            2. 이용자는 자신의 접근매체를 제3자에게 제공 또는 노출하거나 방치하여서는 안되며, 접근매체의 도용이나 위·변조를 방지하기 위해 충분한 주의를 기울여야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 5조 (서비스 이용방법)</div>\n\n                                            1. 서비스는 이용자가 주민등록번호를 입력하지 아니하고 본인의 생년월일과 본인 명의로 된 휴대폰정보를 이용하여 본인 식별 또는 본인 확인이 가능하도록 하는 휴대폰인증 서비스 입니다.<br/>\n\n                                            2. 회사는 인증대행사를 통해 인터넷사업자에게 서비스를 제공하며, 인터넷사업자는 회원가입, ID/PW찾기, 성인인증 등 이용자의 본인확인이 필요한 경우 이용자에게 서비스를 제공 합니다.<br/>\n\n                                            3. 제2항의 경우 이용자가 자신의 생년월일, 성명, 성별, 내/외국인, 휴대폰번호, 통신사 등의 정보를 입력한 후 입력한 정보가 이용자 본인의 정보와 일치한 경우에는 이용자 본인 명의의 휴대폰번호로 수신된 1회성 비밀번호(이하 “승인번호”)를 정확하게 입력하면 본인 식별 또는 본인 확인이 이루어 집니다.<br/>\n\n                                            4. 제3항과 같이 본인확인이 완료 된 이용자에 대해서는 본인확인정보와 중복가입확인정보 및 연계정보가 인터넷사업자에게 제공되며, 인터넷사업자가 중복가입확인정보 또는 연계정보 등을 이용하여 이용자 관리 및 컨텐츠를 제공 운영 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 6조 (서비스 제공시간)</div>\n\n                                            1. 회사는 연중무휴 1일 24시간 서비스를 제공함을 원칙으로 합니다. 다만, 회사는 서비스 설비의 장애, 서비스 이용의 폭주 등 기술상의 이유로 서비스를 일시 정지할 수 있고, 서비스 설비 정기 점검 등 운영상의 목적으로 시간을 정하고 공지한 후 서비스를 일시 정지할 수 있습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 7조 (회사의 권리와 의무)</div>\n\n                                            1. 회사가 접근매체의 발급주체가 아닌 경우에는 접근매체의 위조나 변조로 발생한 사고로 인하여 이용자에게 발생한 손해에 대하여 배상책임이 없습니다.<br/>\n\n                                            2. 회사는 이용자가 서비스 이용약관이나 안내사항 등을 확인하지 않아 발생한 손해, 이용자에게 책임있는 사유로 접근매체를 누설 또는 노출하거나 방치한 손해 등 이용자의 부주의에 기인한 손해에\n                                            대하여 배상책임이 없습니다.<br/>\n\n                                            3. 회사는 서비스 제공시 접근매체를 이용하여 이용자의 신원, 권한 및 거래지시의 내용 등을 확인할 수 있습니다.<br/>\n\n                                            4. 회사는 서비스 제공과 관련하여 인지한 이용자의 본인확인정보를 본인의 승낙 없이 제3자에게 누설하거나 제공하지 않습니다. 단, 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있는\n                                            경우 등 기타 관계 법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.<br/>\n\n                                            5. 회사는 이용자에게 안정적으로 서비스를 제공하기 위하여 지속적으로 서비스의 예방점검, 유지보수 등을 이행하며 서비스 장애가 발생하는 경우 지체없이 서비스를 복구합니다.<br/>\n\n                                            6. 회사는 복제폰, 대포폰, 불법 휴대폰 대출(일명 휴대폰깡) 등 시장질서를 교란시키는 불법행위로 의한 피해를 방지하기 위하여 사전통지 없이 서비스를 제한하거나 중지할 수 있습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 8조 (이용자의 의무)</div>\n\n                                            1. 이용자는 서비스를 이용함에 있어서 다음 각호에 해당하는 행위를 하여서는 안되며, 회사는 위반 행위에 따르는 일체의 법적 책임을 지지 않습니다.<br/>\n\n                                            1) 타 이용자의 본인확인정보 및 승인번호를 부정하게 사용 및 도용하는 행위<br/>\n\n                                            2) 회사 또는 제3자의 지식재산권 등 기타 권리를 침해하는 행위<br/>\n\n                                            3) 범죄 행위 및 범죄적 행위와 관련있는 행위<br/>\n\n                                            4) 관련 법령에 위배되는 행위<br/>\n\n                                            5) 기타 서비스의 정상적 운영, 유지 등을 방해하거나 지연시키는 행위<br/>\n\n                                            2. 이용자는 본 약관에서 규정하는 사항과 서비스에 대한 이용안내 또는 주의사항 등을 준수하여야 합니다.<br/>\n\n                                            3. 이용자가 본 약관을 위반하여 회사에 손해가 발생한 경우에는 이용자가 모든 손해를 배상하여야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 9조 (본인인증 정보의 제공금지)</div>\n\n                                            회사는 서비스를 제공함에 있어 취득한 이용자의 정보 또는 자료를 이용자의 동의 없이 제3자에게 공, 누설하거나 서비스 목적 외에 사용하지 않습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 10조 (서비스의 안정성 확보)</div>\n\n                                            1. 회사는 서비스의 안전성과 신뢰성을 확보하기 위하여 업무처리지침의 제정 및 시행, 정보 처리시스템 및 전산자료의 관리 등의 관리적 조치와 모니터링 체계 및 해킹방지시스템 구축 및 운영 등의\n                                            기술적 조치를 취해야 합니다. <br/>\n\n                                            2. 회사는 서버 및 통신기기의 정상작동여부 확인을 위하여 정보처리시스템 자원 상태의 감시, 경고 및 제어가 가능한 모니터링 체계를 갖추어야 합니다.<br/>\n\n                                            3. “회사”는 해킹 침해 방지를 위하여 다음 각 호의 시스템 및 프로그램을 설치하여 운영합니다.<br/>\n\n                                            1) 침입차단시스템 설치<br/>\n\n                                            2) 침입탐지시스템 설치<br/>\n\n                                            3) 그 밖에 필요한 보호장비 또는 암호프로그램 등 정보보호시스템 설치<br/>\n\n                                            4. “회사”는 컴퓨터바이러스 감염을 방지하기 위하여 다음 각 호를 포함한 대책을 수립, 운영하고 있습니다.<br/>\n\n                                            1) 출처, 유통경로 및 제작자가 명확하지 아니한 응용프로그램은 사용을 자제하고 불가피할 경우에는 컴퓨터바이러스 검색프로그램으로 진단 및 치료 후 사용할 것<br/>\n\n                                            2) 컴퓨터바이러스 검색, 치료 프로그램을 설치하고 최신 버전을 유지할 것\n\n                                        </template>\n\n                                    </template>\n\n                                    <template v-if="agreeIdx == 2">\n\n    \t                                <template v-if="selectCom == 1 || selectCom == 5">\n                                            \n                                            <div class="agree-subtitle">[SK텔레콤 귀중]</div>\n\n                                            본인은 SK텔레콤(주)(이하 ‘회사’라 합니다)가 제공하는 본인확인서비스(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 ‘회사’가 본인의 개인정보를 수집/이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.<br/>\n\n                                            <div class="agree-subtitle">1. 수집항목</div>\n\n                                            - 이용자의 성명, 이동전화번호, 가입한 이동전화 회사, 생년월일, 성별<br/>\n\n                                            - 연계정보(CI), 중복가입확인정보(DI)<br/>\n\n                                            - 이용자가 이용하는 웹사이트 또는 Application 정보, 이용일시<br/>\n\n                                            - 내외국인 여부<br/>\n\n                                            - 가입한 이동전화회사 및 이동전화브랜드\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 이용목적</div>\n\n                                            - 이용자가 웹사이트 또는 Application에 입력한 본인확인정보의 정확성 여부 확인(본인확인서비스 제공)<br/>\n\n                                            - 해당 웹사이트 또는 Application에 연계정보(CI)/중복가입확인정보(DI) 전송<br/>\n\n                                            - 서비스 관련 상담 및 불만 처리 등<br/>\n\n                                            - 이용 웹사이트/Application 정보 등에 대한 분석 및 세분화를 통한, 이용자의 서비스 이용 선호도 분석\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3. 개인정보의 보유기간 및 이용기간</div>\n\n                                            - 이용자가 서비스를 이용하는 기간에 한하여 보유 및 이용. 다만, 아래의 경우는 제외<br/>\n\n                                            - 법령에서 정하는 경우 해당 기간까지 보유(상세 사항은 회사의 개인정보취급방침에 기재된 바에 따름)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">4. 본인확인서비스 제공을 위한 개인정보의 취급위탁</div>\n\n                                            수탁자 : (주)다날, (주)드림시큐리티, (주)케이지모빌리언스, (주)한국사이버결제, 한국모바일인증(주), 씨앤케이소프트(주), 수미온(주), SK플래닛(주), 엠드림커뮤니케이션(주), NICE평가정보(주), 서울신용평가정보(주)\n                                            <br/>\n                                            취급위탁 업무 : 본인확인정보의 정확성 여부 확인(본인확인서비스 제공), 연계정보(CI)/중복가입확인정보(DI) 생성 및 전송, 서비스 관련 상담 및 불만 처리, 휴대폰인증보호 서비스, 이용자의 서비스 이용 선호도 분석정보 제공관련 시스템 구축·광고매체 연동 및 위탁영업 등\n                                            <br/>\n                                            ※ 수탁자의 상세 개인정보 취급 위탁 내용은 각 수탁자가 정하는 절차와 방법에 따라 수탁자 홈페이지 등에 게시된 수탁자의 개인정보 취급방침 및 제3자 제공 동의 방침 등에 따릅니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">5. 위 개인정보 수집·이용 및 취급위탁에 동의하지 않으실 경우, 서비스를 이용하실 수 없습니다.</div>\n\n                                            ※ 회사가 제공하는 서비스와 관련된 개인정보의 취급과 관련된 사항은, 회사의 개인정보취급방침(회사 홈페이지 www.sktelecom.com )에 따릅니다.\n                                            <br/><br/>\n\n                                            <div class="agree-subtitle">NICE평가정보(주) 귀중</div>\n\n                                            NICE평가정보(주)(이하 ‘회사’)는 SK텔레콤(주)의 업무를 대행하여 휴대폰본인확인서비스를 제공함에 있어 고객으로부터 개인정보를 수집하고 이용하기 위해 ‘정보통신망 이용촉진 및 정보보호에 관한 법률’에 따라서 다음과 같이 본인의 동의를 받습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">1. 개인정보의 내용</div>\n\n                                            가. 정보항목<br/>\n\n                                            - 생년월일, 성명, 성별, 내/외국인 구분, 휴대폰번호, 가입한 이동통신사, IP주소<br/>\n\n                                            나. 수집방법<br/>\n\n                                            - 본인인증 요청시 회원사 서비스 페이지 또는 본인인증 팝업창 페이지에서 이용자가 직접 입력<br/>\n\n                                            - 본인인증 과정에서 시스템에서 생성되는 정보 수집(Ex. IP주소)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 개인정보의 이용목적과 제공정보</div>\n\n                                            가. 이용 목적<br/>\n\n                                            - 고객의 회원가입, ID/PW찾기, 거래동의 등을 위한 휴대폰 본인확인 결과**<br/>\n\n                                            - 휴대폰 소지 확인을 위한 SMS 인증번호 전송<br/>\n\n                                            - 부정 이용 방지 및 수사의뢰**<br/>\n\n                                            - 휴대폰번호보호서비스 해제(서비스 가입자에 한함)<br/>\n\n                                            - 기타 법률에서 정한 목적<br/>\n\n                                            나. 제공하는 개인정보<br/>\n\n                                            - 성명, 성별, 생년월일, 내/외국인, 휴대폰번호, 이동통신사, IP주소 [제공사 : 서비스 회원사]<br/>\n\n                                            - 성명, 성별, 생년월일, 휴대폰번호, 이동통신사 [제공사 : SKT, KT, LGU+,모빌리언스, 다날]<br/>\n\n                                            - 휴대폰번호 [제공사 : SKT, KT, LGU+, 삼성SDS, 모빌리언스, SK네트웍스, 다날]\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3. 개인정보의 보유 및 이용기간</div>\n\n                                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명기한 기간 동안 보유합니다.<br/>\n\n                                            가. 회사 내부 방침에 의한 정보보유 사유 - 본인확인 발생 및 차단기록, 휴대폰번호<br/>\n\n                                            보유 이유: 부정 이용 방지 및 민원 처리<br/>\n\n                                            보유 기간: 5년<br/>\n\n                                            나. 관계법령에 의한 정보보유 사유<br/>\n\n                                            - 이용자 불만 또는 분쟁 처리에 관한 기록<br/>\n\n                                            보유 이유: 전자상거래 등에서의 소비자보호에 관한 법률<br/>\n\n                                            보유 기간: 3년\n                                        </template>\n\n                                        <template v-if="selectCom == 2 || selectCom == 6">\n\n                                            <div class="agree-subtitle">[(주)케이티 귀중]</div>\n\n                                            (주)케이티(이하 ‘회사’라 함)가 제공하는 본인확인서비스를 이용하기 위해, 다음과 같이 ‘회사’가 본인의 개인정보를 수집 및 이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.<br/>\n\n                                            <div class="agree-subtitle">1. 수집항목</div>\n\n                                            -고객의 생년월일, 이동전화번호, 성명, 성별, 내/외국인 구분<br/>\n\n                                            -연계정보(CI), 중복가입확인정보(DI)<br/>\n\n                                            -고객이 이용하는 웹사이트 등\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 이용목적</div>\n\n                                            -고객이 웹사이트 또는 Application 등에 입력한 본인확인정보의 정확성 여부 확인<br/>\n\n                                            -해당 웹사이트 또는 Application 등에 연계정보(CI)와 중복가입확인정보)DI) 전송<br/>\n\n                                            -서비스 관련 상담 및 불만 처리<br/>\n\n                                            -기타 법룰에서 정한 목적\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3.개인정보의 보유 및 이용기간</div>\n\n                                            "회사"는 이용자의 개인정보를 이용목적이 달성되거나 보유 및 보존기간이 종료하면 해당 정보를 지체없이 파기 하며 별도의 보관을 하지 않습니다. 단, 관련 법령 및 회사방침에 따라 보존하는 목적과 기간은 아래와 같습니다.<br/>\n\n                                            - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년(전자상거래등에서의 소비자보호에 관한 법률)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">4.본인확인서비스 제공을 위한 개인정보의 취급 위탁</div>\n\n                                            -수탁자 : NICE평가정보<br/>\n\n                                            -취급위탁 업무 : 본인확인정보의 정확성 여부 확인, 연계정보(CI) 및 중복가입확인정보(DI) 전송, 서비스 관련 상담 및 불만 처리 등<br/>\n\n                                            1. 상기 개인정보 수집 및 이용과 취급위탁에 동의하지 않는 경우, 서비스를 이용할 수 없습니다.<br/>\n\n                                            ‘회사’가 제공하는 서비스의 개인정보 취급과 관련된 사항은 아래의 ‘회사’ 홈페이지에 기재된 개인정보취급방침에 따릅니다.<br/>\n\n                                            -(주)케이티 : www.kt.com<br/>\n\n                                            본인은 상기 내용을 숙지하였으며 이에 동의합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">[NICE평가정보(주) 귀중]</div>\n\n                                            NICE평가정보(주)(이하 ‘회사’)는 (주)케이티의 업무를 대행하여 휴대폰본인확인서비스를 제공함에 있어 고객으로부터 개인정보를 수집하고 이용하기 위해 ‘정보통신망 이용촉진 및 정보보호에 관한 법률’에 따라서 다음과 같이 본인의 동의를 받습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">1. 개인정보의 내용</div>\n\n                                            가. 정보항목<br/>\n\n                                            - 생년월일, 성명, 성별, 내/외국인 구분, 휴대폰번호, 가입한 이동통신사, IP주소<br/>\n\n                                            나. 수집방법<br/>\n\n                                            - 본인인증 요청시 회원사 서비스 페이지 또는 본인인증 팝업창 페이지에서 이용자가 직접 입력<br/>\n\n                                            - 본인인증 과정에서 시스템에서 생성되는 정보 수집(Ex. IP주소)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 개인정보의 이용목적과 제공정보</div>\n\n                                            가. 이용 목적<br/>\n\n                                            - 고객의 회원가입, ID/PW찾기, 거래동의 등을 위한 휴대폰 본인확인 결과<br/>\n\n                                            - 휴대폰 소지 확인을 위한 SMS 인증번호 전송<br/>\n\n                                            - 부정 이용 방지 및 수사의뢰<br/>\n\n                                            - 휴대폰번호보호서비스 해제(서비스 가입자에 한함)<br/>\n\n                                            - 기타 법률에서 정한 목적<br/>\n\n                                            나. 제공하는 개인정보<br/>\n\n                                            - 성명, 성별, 생년월일, 내/외국인, 휴대폰번호, 이동통신사, IP주소 [**제공사 : 서비스 회원사]<br/>\n\n                                            - 성명, 성별, 생년월일, 휴대폰번호, 이동통신사 [제공사 : SKT, KT, LGU+,모빌리언스, 다날]<br/>\n\n                                            - 휴대폰번호 [제공사 : SKT, KT, LGU+, 삼성SDS, 모빌리언스, SK네트웍스, 다날]\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3. 개인정보의 보유 및 이용기간</div>\n\n                                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명기한 기간 동안 보유합니다.<br/>\n\n                                            가. 회사 내부 방침에 의한 정보보유 사유 - 본인확인 발생 및 차단기록, 휴대폰번호<br/>\n\n                                            보유 이유: 부정 이용 방지 및 민원 처리<br/>\n\n                                            보유 기간: 5년<br/>\n\n                                            나. 관계법령에 의한 정보보유 사유<br/>\n\n                                            - 이용자 불만 또는 분쟁 처리에 관한 기록<br/>\n\n                                            보유 이유: 전자상거래 등에서의 소비자보호에 관한 법률<br/>\n\n                                            보유 기간: 3년\n                                        </template>\n\n                                        <template v-if="selectCom == 3 || selectCom == 7">\n                                            \n                                            <div class="agree-subtitle">[LG유플러스(주) 귀중]</div>\n\n                                            LG유플러스(주) (이하 ‘회사’라 함)가 제공하는 본인확인서비스를 이용하기 위해, 다음과 같이 ‘회사’가 본인의 개인정보를 수집 및 이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">1. 수집항목</div>\n\n                                            -고객의 생년월일, 이동전화번호, 성명, 성별, 내/외국인 구분<br/>\n\n                                            -연계정보(CI), 중복가입확인정보(DI)<br/>\n\n                                            -고객이 이용하는 웹사이트 등\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 이용목적</div>\n\n                                            -고객이 웹사이트 또는 Application 등에 입력한 본인확인정보의 정확성 여부 확인<br/>\n\n                                            -해당 웹사이트 또는 Application 등에 연계정보(CI)와 중복가입확인정보)DI) 전송<br/>\n\n                                            -서비스 관련 상담 및 불만 처리<br/>\n\n                                            -기타 법룰에서 정한 목적\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3. 개인정보의 보유 및 이용기간</div>\n\n                                            -고객이 서비스를 이용하는 기간에 한하여 보유 및 이용을 원칙으로 하되, 법률에서 정하는 경우 해당 기간까지 보유 및 이용(세부사항은 ‘회사’의 개인정보취급방침에 따름)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">4.본인확인서비스 제공을 위한 개인정보의 취급 위탁</div>\n\n                                            -수탁자 : NICE평가정보<br/>\n\n                                            -취급위탁 업무 : 본인확인정보의 정확성 여부 확인, 연계정보(CI) 및 중복가입확인정보(DI) 전송, 서비스 관련 상담 및 불만 처리 등\n                                            <br/><br/>\n                                            <div class="agree-subtitle">5. 상기 개인정보 수집 및 이용과 취급위탁에 동의하지 않는 경우, 서비스를 이용할 수 없습니다.</div>\n\n                                            ‘회사’가 제공하는 서비스의 개인정보 취급과 관련된 사항은 아래의 ‘회사’ 홈페이지에 기재된 개인정보취급방침에 따릅니다.<br/>\n\n                                            -LG유플러스(주) : www.lguplus.co.kr<br/>\n\n                                            본인은 상기 내용을 숙지하였으며 이에 동의합니다.\n\n                                            <br/><br/>\n\n                                            <div class="agree-subtitle">[NICE평가정보(주) 귀중]</div>\n\n                                            NICE평가정보(주)(이하 ‘회사’)는 LG유플러스(주) 의 업무를 대행하여 휴대폰본인확인서비스를 제공함에 있어 고객으로부터 개인정보를 수집하고 이용하기 위해 ‘정보통신망 이용촉진 및 정보보호에 관한 법률’에 따라서 다음과 같이 본인의 동의를 받습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">1. 개인정보의 내용</div>\n\n                                            가. 정보항목<br/>\n\n                                            - 생년월일, 성명, 성별, 내/외국인 구분, 휴대폰번호, 가입한 이동통신사, IP주소<br/>\n\n                                            나. 수집방법<br/>\n\n                                            - 본인인증 요청시 회원사 서비스 페이지 또는 본인인증 팝업창 페이지에서 이용자가 직접 입력<br/>\n\n                                            - 본인인증 과정에서 시스템에서 생성되는 정보 수집(Ex. IP주소)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 개인정보의 이용목적과 제공정보</div>\n\n                                            가. 이용 목적<br/>\n\n                                            - 고객의 회원가입, ID/PW찾기, 거래동의 등을 위한 휴대폰 본인확인 결과<br/>\n\n                                            - 휴대폰 소지 확인을 위한 SMS 인증번호 전송<br/>\n\n                                            - 부정 이용 방지 및 수사의뢰<br/>\n\n                                            - 휴대폰번호보호서비스 해제(서비스 가입자에 한함)<br/>\n\n                                            - 기타 법률에서 정한 목적<br/>\n\n                                            나. 제공하는 개인정보<br/>\n\n                                            - 성명, 성별, 생년월일, 내/외국인, 휴대폰번호, 이동통신사, IP주소 [제공사 : 서비스 회원사]<br/>\n\n                                            - 성명, 성별, 생년월일, 휴대폰번호, 이동통신사 [*제공사 : SKT, KT, LGU+]*\n\n                                            - 휴대폰번호 [제공사 : SKT, KT, LGU+]*\n\n                                            - IP주소 [제공사 : 서비스 회원사]\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3. 개인정보의 보유 및 이용기간</div>\n\n                                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명기한 기간 동안 보유합니다.<br/>\n\n                                            가. 회사 내부 방침에 의한 정보보유 사유 - 본인확인 발생 및 차단기록, 휴대폰번호<br/>\n\n                                            보유 이유: 부정 이용 방지 및 민원 처리<br/>\n\n                                            보유 기간: 5년<br/>\n\n                                            나. 관계법령에 의한 정보보유 사유<br/>\n\n                                            - 이용자 불만 또는 분쟁 처리에 관한 기록<br/>\n\n                                            보유 이유: 전자상거래 등에서의 소비자보호에 관한 법률<br/>\n\n                                            보유 기간: 3년\n                                        </template>\n\n                                    </template>\n\n                                    <template v-if="agreeIdx == 3">\n\n    \t                                <template v-if="selectCom == 1 || selectCom == 5">\n                                            <div class="agree-subtitle">[SK텔레콤 귀중]</div>\n\n                                            본인은 SK텔레콤(주)(이하 ‘회사’라 합니다)가 제공하는 본인확인서비스(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 본인의 개인정보를 회사가 아래 기재된 제3자에게 제공하는 것에 동의합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">1. 개인정보를 제공받는 자</div>\n\n                                            - NICE평가정보(주), SCI평가정보(주)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">2. 개인정보를 제공받는 자의 개인정보 이용목적</div>\n\n                                            - 연계정보(CI)/중복가입확인정보(DI) 생성 및 회사에 제공\n                                            <br/><br/>\n                                            <div class="agree-subtitle">3. 제공하는 개인정보 항목</div>\n\n                                            - 회사가 보유하고 있는 이용자의 주민등록번호\n                                            <br/><br/>\n                                            <div class="agree-subtitle">4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간</div>\n\n                                            - 연계정보(CI)/중복가입확인정보(DI) 생성 후 즉시 폐기\n                                            <br/><br/>\n                                            <div class="agree-subtitle">*5. 위 개인정보 제공에 동의하지 않으실 경우, 서비스를 이용할 수 없습니다</div>\n                                            <br/><br/>\n                                            <div class="agree-subtitle">[NICE평가정보 귀중]</div>\n\n                                            NICE평가정보(주) (이하 “회사”)가 에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 업무 대행을 통해 제공하는 휴대폰본인확인서비스와 관련하여 고객으로부터 수집한 고유식별정보를 이용 및 처리하거나 제3자에게 제공하고자 할 때에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라서 고객으로 부터 동의를 받아야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제1조 [고유식별정보의 이용 및 처리 목적]</div>\n\n                                            “회사”는 고객의 고유식별정보를 아래의 목적으로 이용 및 처리할 수 있습니다.<br/>\n\n                                            1. 정보통신망법 제23조에서 정한 본인확인서비스 제공<br/>\n                                            2. 부정 이용 방지 및 수사의뢰<br/>\n                                            3. 휴대폰번호보호서비스 해제 (서비스 가입자에 한함)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 2조 [고유식별정보의 이용 및 처리 내용]</div>\n\n                                            에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 통신사 또는 통신사의 대행업무를 수행하는 사업자에 정보를 전송하여 방송통신위원회에서 고시로 지정한 휴대폰본인확인기관을 통해 본인여부를 확인하고 결과를 제공받기 위해 고유식별정보가 이용 및 처리됩니다.<br/>\n\n                                            - 이용 및 처리되는 고유식별정보 : 주민등록번호(내국인), 외국인등록번호(외국인)<br/>\n\n                                            상기와 같이 고유식별정보 이용 및 처리에 동의합니다.\n                                        </template>\n\n                                        <template v-if="selectCom == 2 || selectCom == 6">\n\n                                            <div class="agree-subtitle">[(주)케이티 귀중]</div>\n\n                                            주)케이티 (이하 "본인확인기관")가 NICE평가정보(주) (이하 "회사")을 통해 제공하는 휴대폰 본인확인 서비스 관련하여 이용자로부터 수집한 고유식별정보를 이용하거나 타인에게 제공할 때에는 \'정보통신망 이용촉진 및 정보보호 등에 관한 법률\'(이하 "정보통신망법")에 따라 이용자의 동의를 얻어야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">■ 제 1 조[고유식별정보의 처리 동의]</div>\n\n                                            "본인확인기관"은 정보통신망법 제23조의2 제2항에 따라 인터넷상에서 주민등록번호를 입력하지 않고도 본인임을 확인할 수 있는 휴대폰 본인확인서비스를 제공하기 위해 고유식별정보를 처리합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">■ 제 2 조[고유식별정보의 제공 동의]</div>\n\n                                            "본인확인기관 지정 등에 관한 기준(방송통신위원회 고시)"에 따라 "회사"와 계약한 정보통신서비스 제공자 의 연계서비스 및 중복가입확인을 위해 아래와 같이 본인의 고유식별정보를 \'다른 본인확인기관\'에 제공하는 것에 동의합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">[고유식별정보 제공 동의]</div>\n\n                                            1. 제공자(본인확인기관)<br/>\n\n                                            (주)케이티<br/>\n\n                                            2. 제공 받는자(본인확인기관)<br/>\n\n                                            NICE평가정보(주)<br/>\n\n                                            3. 제공하는 항목<br/>\n\n                                            주민등록번호(내국인), 외국인등록번호(국내거주외국인)<br/>\n\n                                            4. 제공 목적<br/>\n\n                                            CI(연계정보), DI(중복가입확인정보)의 생성 및 전달<br/>\n\n                                            5. 보유 및 이용기간<br/>\n\n                                            CI(연계정보), DI(중복가입확인정보) 생성 후 즉시 폐기<br/>\n\n                                            <br/><br/>\n\n                                            <div class="agree-subtitle">[NICE평가정보 귀중]</div>\n\n                                            NICE평가정보(주) (이하 “회사”)가 에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 업무 대행을 통해 제공하는 휴대폰본인확인서비스와 관련하여 고객으로부터 수집한 고유식별정보를 이용 및 처리하거나 제3자에게 제공하고자 할 때에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라서 고객으로 부터 동의를 받아야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제1조 [고유식별정보의 이용 및 처리 목적]</div>\n\n                                            “회사”는 고객의 고유식별정보를 아래의 목적으로 이용 및 처리할 수 있습니다.<br/>\n\n                                            1. 정보통신망법 제23조에서 정한 본인확인서비스 제공<br/>\n                                            2. 부정 이용 방지 및 수사의뢰<br/>\n                                            3. 휴대폰번호보호서비스 해제 (서비스 가입자에 한함)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 2조 [고유식별정보의 이용 및 처리 내용]</div>\n\n                                            에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 통신사 또는 통신사의 대행업무를 수행하는 사업자에 정보를 전송하여 방송통신위원회에서 고시로 지정한 휴대폰본인확인기관을 통해 본인여부를 확인하고 결과를 제공받기 위해 고유식별정보가 이용 및 처리됩니다.<br/>\n\n                                            -이용 및 처리되는 고유식별정보 : 주민등록번호(내국인), 외국인등록번호(외국인)<br/>\n\n                                            상기와 같이 고유식별정보 이용 및 처리에 동의합니다.\n\n                                        </template>\n\n                                        <template v-if="selectCom == 3 || selectCom == 7">\n                                            <div class="agree-subtitle">[LG유플러스(주) 귀중]</div>\n\n                                            LG유플러스(주)(이하 ‘회사’)가 휴대폰본인확인서비스(이하 ‘서비스’)를 제공하기 위해 고유식별정보를 다음과 같이 제3자에게 제공 및 처리 하는 데에 동의합니다.<br/>\n\n                                            1. 고유식별정보를 제공받는자- NICE평가정보㈜, SCI평가정보㈜<br/>\n                                            2. 고유식별정보를 제공받는자의 목적- 연계정보(CI)와 중복가입확인정보(DI)의 생성 및 ‘회사’ 제공- 부정 이용 방지 및 민원 처리<br/>\n                                            3. 고유식별정보 제공 항목: ‘회사’가 보유하고 있는 고객의 주민등록번호와 외국인등록번호<br/>\n                                            4. 고유식별정보를 제공받는 자의 보유 및 이용기간: 연계정보(CI) 및 중복가입확인정보(DI) 생성후 6개월<br/>\n                                            5. 상기 고유식별정보 처리에 대한 내용에 동의하지 않으실 경우, ‘서비스’를 이용할 수 없습니다.상기와 같이 고유식별정보 이용 및 처리에 동의합니다.\n\n                                            <br/><br/>\n\n                                            <div class="agree-subtitle">[NICE평가정보 귀중]</div>\n\n                                            NICE평가정보(주) (이하 “회사”)가 에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 업무 대행을 통해 제공하는 휴대폰본인확인서비스와 관련하여 고객으로부터 수집한 고유식별정보를 이용 및 처리하거나 제3자에게 제공하고자 할 때에는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’에 따라서 고객으로 부터 동의를 받아야 합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제1조 [고유식별정보의 이용 및 처리 목적]</div>\n\n                                            “회사”는 고객의 고유식별정보를 아래의 목적으로 이용 및 처리할 수 있습니다.<br/>\n\n                                            1. 정보통신망법 제23조에서 정한 본인확인서비스 제공<br/>\n                                            2. 부정 이용 방지 및 수사의뢰<br/>\n                                            3. 휴대폰번호보호서비스 해제 (서비스 가입자에 한함)\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제 2조 [고유식별정보의 이용 및 처리 내용]</div>\n\n                                            에스케이텔레콤(주), (주)케이티, LG유플러스(주)의 통신사 또는 통신사의 대행업무를 수행하는 사업자에 정보를 전송하여 방송통신위원회에서 고시로 지정한 휴대폰본인확인기관을 통해 본인여부를 확인하고 결과를 제공받기 위해 고유식별정보가 이용 및 처리됩니다.\n\n                                            -이용 및 처리되는 고유식별정보 : 주민등록번호(내국인), 외국인등록번호(외국인)상기와 같이 고유식별정보 이용 및 처리에 동의합니다.\n                                        </template>\n\n                                    </template>\n\n                                    <template v-if="agreeIdx == 4">\n\n                                        <template v-if="selectCom == 6">\n\n                                            "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제1조 (알뜰폰(MVNO) 사업자)</div>\n\n                                            (주)케이티의 알뜰폰(MVNO) 사업자는 (주)CJ헬로비전(헬로모바일), KT파워텔(주)(더블비), 홈플러스(주)(플러스모바일), (주)씨엔커뮤니케이션(WMVNO), (주)에넥스텔레콤(WHOM), (주)에스원(안심폰), (주)위너스텔(Well), 에이씨앤코리아(Flash모바일), (주)세종텔레콤(스노우맨), (주)KT텔레캅(KT텔레캅), (주)프리텔레콤(freeT), (주)EG모바일(EG제로), (주)KT M모바일(M모바일), (주)앤알커뮤니케이션(앤텔레콤), (주)아이즈비전(아이즈모바일), (주)제이씨티(제이씨티), (주)머천드코리아(마이월드), 장성모바일(장성모바일), (주)유니컴즈(Mobing), 아이원(아이플러스유), (주)파인디지털, (주)미니게이트, (주)핀플레이, 드림라인(주) 입니다.\n\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제2조 (제공목적)</div>\n\n                                            본 동의는 본인확인서비스를 제공하기 위하여 본인확인기관인 (주)케이티와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제3조 (제공정보)</div>\n\n                                            휴대폰 본인확인서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별 정보입니다. \n                                            <br/><br/>\n                                            <div class="agree-subtitle">제4조 (제공받는자)</div>\n\n                                            (주)케이티 \n                                            <br/><br/>\n                                            <div class="agree-subtitle">제5조 (제공기간)</div>\n\n                                            이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다. \n\n                                            "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인확인서비스를 이용 하실 수 없습니다.\n                                        </template>\n\n                                        <template v-if="selectCom == 7">\n\n                                            "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제1조 (알뜰폰(MVNO) 사업자)</div>\n\n                                            엘지유플러스의 알뜰폰(MVNO) 사업자는 인스코비(프리티), 머천드코리아(마이월드), (주)엠티티텔레콤(메리큐), 홈플러스(주), (주)알뜰폰, (주)미디어로그, 이마트, 서경방송, 울산방송, 푸른방송, 남인천방송, 금강방송, 제주방송, (주)와이엘랜드(여유텔레콤), ACN코리아(플래시모바일) 입니다\n\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제2조 (제공목적)</div>\n\n                                            본 동의는 본인확인 서비스를 제공하기 위하여 본인확인기관인 (주)엘지유플러스와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제3조 (제공정보)</div>\n\n                                            휴대폰 본인확인 서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내.외국인구분, 성별 정보입니다.\n                                            <br/><br/>\n                                            <div class="agree-subtitle">제4조 (제공받는자)</div>\n\n                                            (주)엘지유플러스  \n                                            <br/><br/>\n                                            <div class="agree-subtitle">제5조 (제공기간)</div>\n\n                                            이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다. \n\n                                            "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인 확인 서비스를 이용 하실 수 없습니다.\n                                        </template>\n\n                                    </template>\n                                </div>\n                            </div>\n                            <div class="modal-footer">\n                                <div class="row not-space">\n                                    <a class="btn btn-block btn-primary-outline" v-on:click="modalHide">확인</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\t\t\t',
						props: {
							agreeIdx: 0,
							selectCom: 0
						},
						data: function() {
							return {
								winHei: 0
							}
						},
						created: function() {
							this.winHei = $(window).height()
						},
						methods: {
							load: function() {
								this.winHei = $(window).height(), $("#authModal").modal("show")
							},
							modalHide: function() {
								$("#authModal").modal("hide")
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<select class="crowdy-select-box" dir="rtl">\n\t\t\t\t\t<option value="" disabled hidden v-if="placeholderText!=\'\'">{{placeholderText}}</option>\n\t\t\t\t\t<option v-for="option in options" :value="option.id">{{option.text}}</option>\n\t\t\t\t</select>\n\t\t\t',
						props: ["options", "value", "placeholderText"],
						mounted: function() {
							var n = this;
							$(this.$el).val(this.value).trigger("change").on("change", function() {
								n.$emit("input", this.value)
							})
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n                    \x3c!-- 상단 리워드 정보 *component --\x3e\n                    <info :reward-detail-data="rewardDetailData" v-on:shareBtn="shareBtn" v-if="dataConfirm"></info> \n\n                    \x3c!-- 메뉴 바 --\x3e\n                    <div id="list_category" style="border-top: 1px solid #ddd;" v-if="dataConfirm">\n                        <div class="common_sub_top_menu common_stm_detail">\n                            <div class="reward-menu">\n                                <a class="pointerCursor" :class="{\'active\' : step == 1}"  v-on:click="stepChange(1)"><span class="webcrowdy-font-bold">스토리</span></a>\n                                <a class="pointerCursor" :class="{\'active\' : step == 2}"  v-on:click="stepChange(2)"><span class="webcrowdy-font-bold">새소식 <em>{{ rewardDetailData.cbCount }}</em></span></a>\n                                <a class="pointerCursor" :class="{\'active\' : step == 3}"  v-on:click="stepChange(3)"><span class="webcrowdy-font-bold">댓글 <em>{{ rewardDetailData.replyCnt }}</em></span></a>\n                                <a class="pointerCursor" :class="{\'active\' : step == 4}"  v-on:click="stepChange(4)"><span class="webcrowdy-font-bold">교환 및 환불</span></a>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    \x3c!-- 스토리 *component --\x3e\n                    <story v-if="step == 1 && dataConfirm" :reward-detail-data="rewardDetailData"></story>\n                    \n                    \x3c!-- 새소식 *component --\x3e\n                    <news v-if="step == 2 && dataConfirm" :reward-detail-data="rewardDetailData"></news>\n\n                    \x3c!-- 댓글작성 & 댓글목록  *component --\x3e\n                    <comment v-if="step == 3  && dataConfirm" :reward-detail-data="rewardDetailData" :crpy-idxs="0" :param-search-count="10" :cpAliasUrl=cpAliasUrl></comment>\n\n                    \x3c!-- 교환 및 환불 *component --\x3e\n                    <policy v-if="step == 4 && dataConfirm" :reward-detail-data="rewardDetailData"></policy>\n\n                    \x3c!--리워드 카드 *component --\x3e\n                    <options v-if="dataConfirm" :reward-detail-data="rewardDetailData" :cp-alias-url="cpAliasUrl" v-on:set-min-benefit="setMinBenefit" v-on:shareBtn="shareBtn" v-on:child-bus-call="childBusCall"></options>\n\n                    \x3c!-- 공유하기 modal --\x3e\n                    <div class="modal fade" id="shareModal" role="dialog" tabindex="-1" data-backdrop="static" data-keyboard="false" v-if="dataConfirm">\n                        <div class="modal-dialog modal-sm">\n                            <div class="modal-content">\n                                <div class="modal-padding modal-order">\n                                    <div class="reward-info-desc1 mb15 mt10">더 많이 알릴 수록 프로젝트는<br/>성공에 가까워집니다!</div>\n                                    <div class="reward-modal-share">\n                                        <div v-on:click="clipBoard" id="link-icon" class="link-icon reward-icon-setting1 mr20" data-clipboard-target="#copy-link"></div>\n                                        <div v-on:click="kokaoShare" class="kakao-icon reward-icon-setting1 mr20"></div>\n                                        <div v-on:click="facebookShare" class="facebook-icon reward-icon-setting1"></div>\n                                    </div>\n                                    <div id="copy-link">{{url}}</div>\n                                </div>\n                                <div class="modal-footer">\n                                    <div class="row not-space">\n                                        <a class="modalBlueBtn" data-dismiss="modal">확인</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //공유하기 --\x3e\n                    \n                    <member-adult-certi :childBus="childBus" v-on:change-confirm="changeConfirm"></member-adult-certi>\n                </div>\n            ',
						props: ["cpAliasUrl", "myMenu", "choosePopup"],
						data: function() {
							return {
								childBus: new Vue,
								step: this.myMenu,
								dataConfirm: !1,
								rewardDetailData: {
									cpCardImg: "",
									cpCOde: ""
								},
								param: {
									cpAliasUrl: this.cpAliasUrl,
									cpTraining: "N",
									cpCode: ""
								},
								cpCode: "",
								url: document.location.href + "?utm_source=url&utm_medium=share&utm_campaign=" + this.cpAliasUrl
							}
						},
						components: {
							info: t(16).default.component(),
							story: t(17).default.component(),
							news: t(18).default.component(),
							comment: t(20).default.component(),
							policy: t(22).default.component(),
							options: t(23).default.component(),
							memberAdultCerti: t(1).default.component()
						},
						created: function() {
							$(document).scroll(function() {
								var n = $(this).scrollTop(),
									e = $(".option-btn-mobile"),
									t = $("#ch-plugin-core").children().eq(2);
								n > $(".reward-info-box").position().top ? (t.addClass("affix"), e.css("display", "block")) : (t.removeClass("affix"), e.css("display", "none"))
							}), this.load()
						},
						computed: {
							computeCommentCount: function() {
								return this.commentCountValue
							}
						},
						mounted: function() {
							$("#adCertiMd").on("hidden.bs.modal", function(n) {
								$(window).width() < 768 ? $("nav.mobile-header-wrap").show() : $("nav.navbar-venture").show(), $("footer").show()
							})
						},
						methods: {
							loadFade: function(n) {
								1 == n ? $(".page-loader-more").fadeIn("") : $(".page-loader-more").fadeOut("")
							},
							load: function() {
								var n = this;
								this.loadFade(1), axios.post("/data/view/reward/detail", this.param).then(function(e) {
									var t = e.data.rData;
									return null == t ? void noti.open("잘못된 주소입니다.", function() {
										window.open("/", "_self")
									}) : "0" == t.cpStatus ? void noti.open("비공개 처리된 프로젝트입니다.", function() {
										window.open("/", "_self")
									}) : (n.rewardDetailData = e.data.rData, null != n.rewardDetailData.cpInquiryEmail && "" != n.rewardDetailData.cpInquiryEmail || (n.rewardDetailData.cpInquiryEmail = n.rewardDetailData.memEmail), n.cpCode = t.cpCode, void("Y" == n.rewardDetailData.cpAdultType && "Y" == n.rewardDetailData.cpAdultImgType ? n.adultCheck() : (n.dataConfirm = !n.dataConfirm, n.loadFade(2))))
								})
							},
							adultCheck: function() {
								var n = this;
								userInfo.loginConfirm() && axios.post("/data/member/certi/adult", {
									memCode: userInfo.memCode
								}).then(function(e) {
									if (n.loadFade(2), "0000" == e.data.rCode) {
										var t = e.data.rData;
										if ("Y" == t.memCiConfirm) {
											if ("N" == t.memAdultConfirm) return noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다."), void(location.href = "/");
											n.dataConfirm = !0
										} else $("nav").hide(), $("footer").hide(), n.childBusCall(1, 2, window.location.href)
									} else n.childBusCall(1, 2, window.location.href)
								})
							},
							childBusCall: function(n, e, t) {
								this.childBus.$emit("load", n, e, t)
							},
							changeConfirm: function() {
								this.dataConfirm = !0
							},
							notiShow: function() {
								var n = '<div><img src="//image-se.ycrowdy.com/20191202/CROWDY_201912021722440274_KwhUH.gif/ycrowdy/resize/!340x!226" alt="..." class="img-responsive"><br/>고추냉이를 선택한 당신!<br/>올 연말에는 고추냉이와 어울리는 참치 앞뱃살은 어떠신가요?</div>';
								"soysource" == this.choosePopup && (n = '<div><img src="//image-se.ycrowdy.com/20191202/CROWDY_201912021722220403_o4LWk.gif/ycrowdy/resize/!340x!226" alt="..." class="img-responsive"><br/>간장을 선택한 당신!<br/>올 연말에는 간장과 어울리는 참치 뒷뱃살은 어떠신가요?</div>'), info.popupOpen(n, "참치 보러가기")
							},
							stepChange: function(n) {
								this.step = n;
								var e = $("#list_category").position().top;
								$("html").scrollTop(e)
							},
							setMinBenefit: function(n) {
								var e = this,
									t = e.rewardDetailData.cpTitle,
									i = e.cpAliasUrl,
									a = [],
									s = [],
									o = {},
									r = {
										id: i,
										name: t,
										quantity: 1
									};
								a.push(r);
								var d = {
									id: i,
									item_price: 1 * n,
									quantity: 1
								};
								s.push(d), o = {
									content_name: e.rewardDetailData.cpTitle,
									content_ids: [e.cpAliasUrl],
									content_type: "product",
									contents: s,
									value: 1 * n,
									currency: "KRW",
									category: "reward",
									location_href: document.location.href,
									referrer: document.referrer
								}, window.pixelViewData = window.pixelViewData || {}, window.pixelViewData = o;
								var c = {
									event: "RewardViewContent",
									ecommerce: {
										detail: {
											products: a
										}
									},
									projectUrl: i
								};
								window.dataLayer = window.dataLayer || [], window.dataLayer.push(c);
								var l = "available for order";
								e.rewardDetailData.cpEndStatus > 1 && (l = "out of stock"), $("meta[property=product\\:brand]").attr("content", e.rewardDetailData.memName), $("meta[property=product\\:availability]").attr("content", l), $("meta[property=product\\:condition]").attr("content", "new"), $("meta[property=product\\:price\\:amount]").attr("content", n), $("meta[property=product\\:price\\:currency]").attr("content", "KRW"), $("meta[property=product\\:retailer_item_id]").attr("content", e.cpAliasUrl)
							},
							shareBtn: function() {
								$("#shareModal").modal("show")
							},
							clipBoard: function() {
								new Clipboard(".link-icon").on("success", function(n) {
									n.clearSelection(), alert("링크가 복사되었습니다.")
								})
							},
							facebookShare: function() {
								var n = this;
								FB.ui({
									method: "share",
									display: "popup",
									href: encodeURI(document.location.href) + "?utm_source=facebook&utm_medium=share&utm_campaign=" + n.rewardDetailData.cpAliasUrl
								}, function(n) {
									void 0 === n && "" == n.post_id || noti.open("공유되었습니다.")
								})
							},
							kokaoShare: function() {
								Kakao.Link.sendDefault({
									objectType: "feed",
									content: {
										title: this.rewardDetailData.cpTitle,
										imageUrl: "https://" + this.rewardDetailData.cpCardImg,
										link: {
											mobileWebUrl: document.location.href + "?utm_source=kakao&utm_medium=share&utm_campaign=" + this.rewardDetailData.cpAliasUrl,
											webUrl: document.location.href + "?utm_source=kakao&utm_medium=share&utm_campaign=" + this.rewardDetailData.cpAliasUrl
										}
									}
								})
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n                    <div class="container">\n                        <div class="row">\n                            \x3c!-- 타이틀 --\x3e\n                            <div class="col-sm-8">\n                                <template v-if="rewardDetailData.communityName != \'\'">\n                                    <div class="reward_community_partner mt40 mb10 xs-mt25">해당 프로젝트는 <a :href="\'/c/\' + rewardDetailData.communityUrl"><span class="crowdy-color-blue">[ {{ rewardDetailData.communityName }} ]</span></a>과 함께 합니다</div>\n                                    <div class="reward_title mb30 xs-mb15">{{ rewardDetailData.cpTitle }}</div>\n                                </template>\n                                <template v-if="rewardDetailData.communityName == \'\'">\n                                    <div class="reward_title xs-mt35 mt60 mb35 xs-mb15">{{ rewardDetailData.cpTitle }}</div>\n                                </template>\n                            </div>\n                            <div>\n                                \x3c!--썸네일 --\x3e\n                                \x3c!-- pl50 pr50 : 동영상 사이즈 줄일 때 이 클래스 넣으면 됨 --\x3e\n                                <div class="col-sm-8 xs-pl0 xs-pr0" style="margin:0 -9px;">\n                                    <div id="slider-for" >\n                                        <figure v-for="(item, index) in mediaData">\n                                            <template v-if="item.cmscDiv == \'1\'">\n                                                <div class="embed-responsive embed-responsive-16by9">\n                                                    <iframe class="embed-responsive-item" style="background-color:#000000" :src="item.msrc" height="538" allowfullscreen></iframe>\n                                                </div>\n                                            </template>\n                                            <template v-if="item.cmscDiv == \'2\'">\n                                                <div class="embed-responsive embed-responsive-16by9">\n                                                    <img :src="item.msrc" class="img-responsive" />\n                                                </div>\n\n                                            </template>\n                                        </figure>\n                                    </div>\n\n                                    <div id="slider-nav">\n                                        <figure v-for="(item, index) in mediaData">\n                                            <img :src="item.src" class="img-responsive" />\n                                        </figure>\n                                    </div>\n                                </div>\n                                \x3c!--//썸네일 --\x3e\n                                \n                                \x3c!-- 정보 --\x3e\n                                <div class="col-sm-4 mb30 xs-mt25 xs-mb20 pl45 pr15 xs-pl15 xs-pr15">\n                                    <div class="reward-info-box">\n                                        <div class="reward-info-name">리워드</div>\n                                        <div class="reward-info-amount">{{ parseInt(rewardDetailData.cpSponsorAmount).toLocaleString() }}원 \n                                            <span v-if="rewardDetailData.cpEndStatus == \'0\'" class="reward-info-status">대기</span>\n                                            <span v-if="rewardDetailData.cpEndStatus == \'1\'" class="reward-info-status">펀딩 중</span>\n                                            <span v-if="rewardDetailData.cpEndStatus > 1" class="reward-info-status">펀딩완료</span>\n                                        </div>  \n                                        <div class="mt20">\n                                            <span class="reward-info-text">달성률</span>\n                                            <span class="reward-info-now">{{ rewardDetailData.cpAchievement}}% &nbsp;</span>\n                                            <span class="reward-info-goal">목표금액 &nbsp;{{ parseInt(rewardDetailData.tgAmount).toLocaleString()}}원</span>\n                                        </div>\n                                        <div class="mt5">\n                                            <span class="reward-info-text">남은기간</span>\n                                            <template v-if="rewardDetailData.cpEndStatus == \'0\' || rewardDetailData.cpEndStatus == \'1\'">\n                                                <span class="reward-info-now mr5" v-if="rewardDetailData.cpDday > 0"> {{ rewardDetailData.cpDday }}일</span>\n                                                <span class="reward-info-now mr5" v-else-if="rewardDetailData.cpDday == 0"><font color="#ff0071">{{ endTime }}</font></span>\n                                                <span class="reward-info-goal">20{{rewardDetailData.cpEndDate}} 종료</span>\n                                            </template>\n                                            <template v-else>\n                                                <span class="reward-info-now"><font color="#ff0071">종료</font></span>\n                                            </template>\n                                        </div>\n                                        <div class="mt5">\n                                            <span class="reward-info-text">참여자</span>\n                                            <span class="reward-info-now">{{ rewardDetailData.sponCnt }}명</span>\n                                        </div>\n                                        <div class="reward-info-share mt10 xs-mt15" v-on:click="shareBtn">\n                                            <span class="reward-share-icon"></span>       \n                                            <span>프로젝트 공유하기</span>\n                                        </div>\n\n                                        <div class="common-flex-between mt30 xs-mt40 reward-order0-1">\n                                            <div class="reward-info-group">\n                                                <div class="reward-info-nowStatus reward-icon-1"></div>\n                                                <div class="reward-info-text2 mt5">펀딩종료일</div>\n                                                <div class="reward-info-text3">{{ rewardDetailData.cpEndDate }}</div>\n                                            </div>\n                                            <div class="reward-info-statusLine"></div>\n                                            <div class="reward-info-group">\n                                                <div class="reward-info-nowStatus reward-icon-2"></div>\n                                                <div class="reward-info-text2 mt5">결제예정일</div>\n                                                <div class="reward-info-text3">{{ rewardDetailData.paymentData }}</div>\n                                            </div>\n                                            <div class="reward-info-statusLine"></div>\n                                            <div class="reward-info-group">\n                                                <div class="reward-info-nowStatus reward-icon-3"></div>\n                                                <div class="reward-info-text2 mt5">배송예정일</div>\n                                                <div class="reward-info-text3">{{ rewardDetailData.cpDeliveryDate }}</div>\n                                            </div>\n                                        </div>\n\n                                        \x3c!-- 프로필 PC --\x3e\n                                        <div class="detail_order_info mt25 xs-mt15 reward-order1-0">\n                                            <a href="#" v-on:click="detailShow">\n                                                <div class="detail_order_info_head">\n                                                    <div class="mr8 m-auto">\n                                                        <div class="imgava"><img :src="\'//\' + rewardDetailData.memShotImg" class="media-object" v-if="rewardDetailData.memShotImg != \'\'"/></div>\n                                                    </div>\n                                                    <div class="ivs-info-profile">\n                                                        <div>\n                                                            <div class="ivs-info-pjName">{{rewardDetailData.memName}}</div>\n                                                            <a class="ivs-info-pjlink">진행자에게 문의하기</a>\n                                                        </div>\n                                                        <div class="mt10">   \n                                                            <span class="ivs-info-arrow arrow-left ml10"></span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </div>\n                                        \x3c!-- //프로필 PC --\x3e\n\n                                        <div class="reward-info-desc mt15 xs-mt40 reward-order2-2">\n                                            <template v-if="rewardDetailData.cpFundType == 1">\n    펀딩을 마치면 <span class="crowdy-font-bold">결제 예약 상태</span>입니다. 종료일에 100% 이상이 달성되었을 경우에만 결제예정일에 결제가 됩니다.\n                                            </template>\n                                            <template v-if="rewardDetailData.cpFundType == 2">\n                                                펀딩을 마치면 <span class="crowdy-font-bold">결제 예약 상태</span>이며,<br/> 결제예정일에 결제가 됩니다.\n                                            </template>\n                                        </div>\n                                    </div>\n                                    \x3c!-- //정보 --\x3e\n\n                                    \n                                    \x3c!-- 문의하기 --\x3e\n                                    <div id="profileModal" class="modal fade" tabindex="-1" role="dialog">\n                                        <div class="modal-dialog modal-sm" role="document">\n                                            <div class="modal-content">\n                                                <div class="modal-padding">\n                                                    <div class="reward_policy_title">진행자에게 문의하기</div>\n                                                    <div class="reward-policy-profilebox-1 mt5 xs-mt20">\n                                                        <div class="reward-policy-profileImg"><img v-if="rewardDetailData.memShotImg != \'\'" :src="\'//\' + rewardDetailData.memShotImg" class="media-object" /></div>\n                                                        <div>\n                                                            <div class="reward-info-projectName">{{ rewardDetailData.memName}}</div>\n                                                            <a href="mailto:rewardDetailData.cpInquiryEmail" class="reward-policy-email mb5">{{ rewardDetailData.cpInquiryEmail}}</a><br/>\n                                                            <template v-if="rewardDetailData.snsList != null && rewardDetailData.snsList.length>0" v-for="(item, index) in rewardDetailData.snsList">\n                                                                <a :href="linkUrl(item.snsUrl)" v-if="item.snsUrl!=null" target="_blank" class="reward-policy-email">\n                                                                    <div v-if="item.snsType == 0" class="website-icon reward-icon-setting"></div>\n                                                                    <div v-if="item.snsType == 1" class="facebook-icon reward-icon-setting"></div>\n                                                                    <div v-if="item.snsType == 2" class="naver-icon reward-icon-setting"></div>\n                                                                    <div v-if="item.snsType == 3" class="insta-icon reward-icon-setting"></div>\n                                                                    <div v-if="item.snsType == 5" class="youtube-icon reward-icon-setting"></div>\n                                                                </a>\n                                                            </template>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class="modal-footer ">\n                                                    <div class="row not-space">\n                                                        <a class="modalBlueBtn" data-dismiss="modal">확인</a>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    \x3c!-- //프로필정보 --\x3e\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ',
						props: {
							rewardDetailData: {
								type: Object
							}
						},
						data: function() {
							return {
								dataConfirm: !1,
								mediaConfirm: !1,
								vimeoConfirm: !1,
								mediaData: [],
								youtubeUrl: {},
								lightSlideObj: {},
								memCode: userInfo.memCode,
								url: document.location.href + "?utm_source=url&utm_medium=share&utm_campaign=" + this.rewardDetailData.cpAliasUrl
							}
						},
						created: function() {
							this.media(), $(".ytp-button").remove()
						},
						computed: {
							endTime: function() {
								return moment.updateLocale("en", {
									relativeTime: {
										hh: "%d 시간 남음",
										mm: "%d 분 남음",
										d: "오늘 까지",
										h: "1 시간 남음"
									}
								}), moment().endOf("day").fromNow(!0)
							}
						},
						methods: {
							detailShow: function() {
								$("#profileModal").modal("show")
							},
							media: function() {
								var n = this;
								axios.post("/data/view/reward/media", {
									cpCode: this.rewardDetailData.cpCode
								}).then(function(e) {
									var t = e.data.rData;
									if (null == t) return void noti.open("잘못된 주소입니다.", function() {
										window.open("/", "_self")
									});
									var t = e.data.rData;
									n.mediaConfirm = !0;
									for (var i = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, a = 0; a < t.length; a++) {
										var s = t[a],
											o = {
												cmscDiv: "",
												msrc: "",
												src: ""
											};
										if (o.src = s.cmscUrl, "1" == s.cmscDiv) {
											o.cmscDiv = s.cmscDiv;
											var r = s.cmscUrl.match(i);
											if (null != r) o.msrc = "https://www.youtube.com/embed/" + r[1], o.src = "//img.youtube.com/vi/" + r[1] + "/default.jpg";
											else {
												var d = /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/;
												o.msrc = "https://player.vimeo.com/video/" + s.cmscUrl.match(d)[5], o.src = "//image-se.ycrowdy.com/logo/project-default-1.png/ycrowdy/resize/!200x!150", n.getVimeoUrl(s.cmscUrl, a)
											}
										} else o.cmscDiv = s.cmscDiv, o.src = "//" + s.cmscUrl + "/ycrowdy/resize/!200x!150", o.msrc = "//" + s.cmscUrl + "/ycrowdy/resize/!740x!417";
										n.mediaData.push(o)
									}
									n.$nextTick(function() {
										n.mediaData.length < 4 && n.mediaData.length > 0 && n.mediaData[0].msrc.indexOf("vimeo") > 0 || n.slide()
									})
								})
							},
							slide: function() {
								$("#slider-for").slick({
									slidesToShow: 1,
									fade: !0,
									asNavFor: "#slider-nav"
								}), $("#slider-nav").slick({
									slidesToShow: 5,
									slidesToScroll: 1,
									asNavFor: "#slider-for",
									dots: !1,
									centerMode: !1,
									focusOnSelect: !0,
									responsive: [{
										breakpoint: 1200,
										settings: {
											slidesToShow: 5
										}
									}, {
										breakpoint: 768,
										settings: {
											slidesToShow: 4
										}
									}]
								})
							},
							getVimeoUrl: function(n, e) {
								var t = this,
									i = /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/,
									a = n.match(i);
								axios.get("/vimeo/get/" + a[5]).then(function(n) {
									var i = n.data.rData.data.medium;
									t.mediaData[e].src = i, t.mediaData[e].confirm = !0, t.slide()
								})
							},
							linkUrl: function(n) {
								var e = n;
								return e.indexOf("http://") >= 0 || e.indexOf("https://") >= 0 ? e : "http://" + e
							},
							shareBtn: function() {
								this.$emit("shareBtn")
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div class="mt40 xs-mt20 mb100">\n                    <div class="container"> \n                        <div>\n                            <div class="mce-content-body">\n                                <div v-if="rewardDetailData.cpAdultType == \'Y\'" style="margin:50px 0px 100px 0px;">\n                                    <adult-string :is-mobile="isMobile"></adult-string>\n                                </div>\n                                \x3c!-- 스토리 콘텐츠 --\x3e\n                                <div v-html ="rewardDetailData.cpStory"></div>\n                                \x3c!-- //스토리 콘텐츠 --\x3e\n\n                                \x3c!-- 신고하기 버튼 --\x3e\n                                <strong>프로젝트 신고하기</strong>\n                                <p class="report-description">\n                                    크라우디는 여러분의 제보를 바탕으로 진행자가 제공한 내용이 허위이거나 <br class="hidden-xs"/> 지적재산권을 침해하는 경우 이를 적극 반영하고 있습니다.\n                                </p>\n                                <a class="btn-detail btn-report" href="https://docs.google.com/forms/d/e/1FAIpQLSehniTpe3cUgaS0XKpt-rYIOry4y8-MwHegspyqeY5Rf2MFGQ/viewform" target="_blank">신고하기</a>\n                                \x3c!-- //신고하기 버튼 --\x3e\n                            </div>\n\n                            \x3c!-- 투자 상세페이지와 동일한 회색 가로선 --\x3e\n                            <div class="crowdy-row-line"></div>\n\n                            <div class="reward-content-body" v-if="bestData.length > 0">\n                                \x3c!-- 이런 프로젝트는 어때요? --\x3e\n                                <div class="ivs-story-content3">\n                                    <div class="ivs-story-title1 xs-mb0">이런 프로젝트는<br>어때요?</div>\n                                    <div class="card-story-list">\n                                        <div class="card-row-02">\n                                            <div v-for="(item, index) in bestData" class="col-sm-3 col-xs-6" v-if="index < bestCount">\n                                                <figure>\n                                                    <a :href="item.bestType==\'0\'?\'/r/\' + item.bestAliasUrl : \'/i/\' + item.bestAliasUrl" class="card-story-item">\n                                                        <div class="card-story-img">\n                                                            <img :src="\'//\' + item.bestCardImg + \'/ycrowdy/resize/!370x!246\'" class="img-responsive" alt="" />\n                                                        </div>\n                                                        <figcaption>\n                                                            <div class="card-story-content">\n                                                                <div class="card-story-name">\n                                                                    <span class="card-story-type">{{typeConvert(item.bestType)}}</span> {{item.memName}}\n                                                                </div>\n                                                                <div class="card-story-title">{{item.bestTitle}}</div>\n                                                            </div>\n                                                        </figcaption>\n                                                    </a>\n                                                </figure>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div v-if="moreConfirm">\n                                        <div v-on:click="moreAdd" class="crowdy-btn-01 crowdy-btn-layout01">더보기</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ',
						props: {
							rewardDetailData: {
								type: Object
							}
						},
						data: function() {
							return {
								isMobile: !1,
								memCode: userInfo.memCode,
								bestData: [],
								bestCount: 4,
								moreConfirm: !0
							}
						},
						components: {
							adultString: t(2).default.component()
						},
						created: function() {
							$(window).width() < 400 && (this.isMobile = !0), $(window.document).on("contextmenu", function() {
								if ("IMG" == event.target.nodeName) return !1
							}), $(".mce-content-body img").css("-webkit-user-select", "none !important"), $(".mce-content-body img").css("-webkit-touch-callout", "none !important"), $(".mce-content-body img").css("-moz-user-select", "none !important"), $(".mce-content-body img").css("-ms-user-select", "none !important"), $(".mce-content-body img").css("-o-user-select", "none !important"), $(".mce-content-body img").css("user-select", "none !important"), $(".mce-content-body img").css("pointer-events", "none !important"), $(".mce-content-body img").attr("draggable", "false"), $("body").on("click", ".mce-btn", function() {
								$(".mce-menu").addClass("popup_mce_menu"), $(".mce-tooltip").addClass("popup_mce_tooltip")
							}), this.getBest()
						},
						methods: {
							getBest: function() {
								var n = this;
								axios.post("/data/view/best/list", {}).then(function(e) {
									var t = e.data;
									"0000" == t.rCode ? n.bestData = t.rData : noti.open(t.rMsg)
								})
							},
							moreAdd: function() {
								this.bestCount += 4, this.bestCount >= this.bestData.length && (this.moreConfirm = !1)
							},
							typeConvert: function(n) {
								return "0" == n ? "리워드" : "투자"
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div class="mt40 xs-mt35 mb100">\n                    <div class="container">\n                        <div class="row row-mobile-n">\n                            <div class="reward-content-body">\n                                <div class="reward_page_title">프로젝트 새소식을<br>알려드립니다. </div>\n                                <div v-if="rewardDetailData.memCode == memCode && rewardDetailData.cpStatus > 0" class="reward-news-block">\n                                    <a class="btn btn-primary-outline col-sm-12 col-xs-12 mt20" v-on:click="newsClick(rewardDetailData.cpCode, memCode)">새소식 추가하기</a>\n                                </div>\n                                <div v-if="newsData.length == 0" class="reward-content-no mt40 xs-mt20">\n                                    등록된 새소식이 없습니다\n                                </div>\n                                <div v-for="(item, index) in newsData" class="reward-news-box" :class="{\'mt40 xs-mt20\':index==0}">\n                                    <div class="news_title">{{item.cbbsTitle}}</div>\n                                    <div class="mce-content-body" v-html="item.cbbsContent" ></div>\n                                    <div v-if="item.cbbsIdx != 890" class="colorGray2">{{getDate(item.wdate)}}</div>\n                                </div>\n                            </div>\n                        </div> \n                    </div>   \n\n                    \x3c!--새소식--\x3e\n                    <div id="news" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                        <div class="modal-dialog modal-dialog-lg" role="document">\n                            <form class="form-horizontal modal-content">\n                                <div class="modal-header modal-header-black">\n                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                                    <div class="modal-title">새소식 등록하기 <br /><h5>등록한 새소식은 수정할 수 없으니 신중하게 입력해주세요.</h5></div>\n                                </div>\n                                \n                                <div class="modal-body">\n                                    <div class="form-group row-mobile-n mt30 xs-mt10">\n                                        <label for="newsSubject" class="col-xs-12 control-label">\n                                            <div class="text-left">새소식 제목</div>\n                                        </label>\n                                        <div class="col-xs-12">\n                                            <input type="text" class="form-control" :class="{\'error\' : errors.has(\'cbbsTitle\')}" data-vv-name="cbbsTitle" v-model="save.cbbsTitle" v-validate="\'required\'"/>\n                                            <label class="error" v-if="errors.has(\'cbbsTitle\')" v-text="errors.first(\'cbbsTitle\')"></label>\n                                        </div>\n                                    </div>\n                                    \n                                    <div class="form-group row-mobile-n">\n                                        <label for="newsMemo" class="col-xs-12 control-label">\n                                            <div class="text-left">새소식 상세내용</div>\n                                        </label>\n                                        <div class="col-xs-12">\n                                            <div class="panel-body panel-edit">\n                                                <div class="mb15">\n                                                    Enter(↵) : 문단 나눔, Shift + Enter : 줄바꿈입니다!  <br />\n                                                    적절한 문단/줄 바꿈만으로 멋진 프로젝트를 완성 할 수 있습니다!\n                                                </div> \n                                                <news-area v-if="dataConfirm" :id="\'editor1\'" :value="save.cbbsContent" :class="{\'error\' : errors.has(\'cbbsContent\')}" data-vv-name="cbbsContent" v-model="save.cbbsContent" v-validate="\'required\'"></news-area>\n                                                <label class="error" v-if="errors.has(\'cbbsContent\')" v-text="errors.first(\'cbbsContent\')"></label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="modal-footer ">\n                                    <div class="row not-space">\n                                        <a class="pointerCursor" data-dismiss="modal">취소</a>\n                                        <a class="ml30 modalBlueBtn" v-on:click="confirm">등록</a>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    \x3c!--//새소식--\x3e\n\n                </div>\n            ',
						props: {
							rewardDetailData: {
								type: Object
							}
						},
						data: function() {
							return {
								dataConfirm: !1,
								newsData: [],
								newsCount: "",
								newsParam: {
									cpCode: this.rewardDetailData.cpCode
								},
								memCode: userInfo.memCode,
								newsChange: 1,
								saveBackup: {},
								save: {
									cpCode: "",
									memCode: "",
									cbbsTitle: "",
									cbbsSummary: "",
									cbbsContent: ""
								}
							}
						},
						created: function() {
							var n = this;
							n.saveBackup = _.clone(n.save), this.news()
						},
						components: {
							newsArea: t(19).default.component()
						},
						watch: {
							newsChange: function() {
								this.news()
							}
						},
						methods: {
							news: function() {
								var n = this;
								axios.post("/data/view/reward/news-list", n.newsParam).then(function(e) {
									n.newsData = e.data.rData
								})
							},
							confirm: function() {
								var n = this;
								if (n.save.cbbsTitle.length < 1) return void noti.open("새소식 제목을 입력해주세요.");
								n.save.cbbsContent = userInfo.removeStyleAttr(n.save.cbbsContent), noti.open("새소식을 등록하시면 수정이 불가합니다. <br /> 새소식을 등록하시겠습니까?", n.regitConfirm, !0)
							},
							regitConfirm: function() {
								var n = this;
								n.$validator.validateAll().then(function(e) {
									e && axios.post("/set/save/reward/set-news", n.save).then(function(e) {
										"0000" == e.data.rCode ? ($("#news").modal("hide"), n.dataConfirm = !1, n.save = _.clone(n.saveBackup), n.rewardDetailData.cbCount++, n.newsChange++) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
									})
								})
							},
							newsClick: function(n, e) {
								var t = this;
								t.save.cpCode = n, t.save.memCode = e, t.dataConfirm = !0, $("#news").modal("show")
							},
							newsDismiss: function() {
								this.dataConfirm = !1, $("#news").modal("hide")
							},
							getDate: function(n) {
								return moment(n, "YYYY-MM-DD hh:mm").format("YYYY-MM-DD")
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<textarea :id="id" :value="value"></textarea>\n\t\t\t',
						props: {
							id: {
								type: String,
								default: "editor"
							},
							value: {
								type: String,
								default: ""
							}
						},
						mounted: function() {
							var n = this;
							tinymce.init({
								selector: "#" + n.id,
								height: "650",
								theme: "modern",
								skin: "white",
								menubar: !1,
								body_class: this.id,
								body_id: this.id,
								plugins: ["autolink lists link image hr visualblocks media table textcolor paste"],
								toolbar1: "undo redo | styleselect | bold italic custom_underline textcolor backgroundcolor | crowdy_hr crowdy_blockquote |  alignleft aligncenter |  crowdy_list | table link image media",
								style_formats: [{
									title: "큰 제목",
									block: "h3"
								}, {
									title: "작은 제목",
									block: "h4"
								}, {
									title: "본문",
									block: "p"
								}, {
									title: "사진주석",
									block: "h6"
								}],
								formats: {
									alignleft: {
										selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,span",
										classes: "al_left"
									},
									aligncenter: {
										selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,span",
										classes: "al_center"
									},
									backgroundcolor: {
										inline: "span",
										classes: "bg_color"
									},
									textcolor: {
										inline: "span",
										classes: "txt_color"
									},
									custom_underline: {
										inline: "span",
										classes: "custom_underline"
									}
								},
								content_css: ["/resources/css/custom-tinymce.min.css?20190911v01", "/resources/js/tinymce/skins/white/skin.min.css"],
								default_link_target: "_blank",
								link_title: !1,
								target_list: !1,
								table_toolbar: "tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
								table_appearance_options: !1,
								table_grid: !0,
								table_advtab: !1,
								table_cell_advtab: !1,
								table_row_advtab: !1,
								visualblocks_default_state: !0,
								paste_data_images: !1,
								image_description: !1,
								image_dimensions: !1,
								image_advtab: !1,
								media_advtab: !1,
								media_live_embeds: !0,
								media_poster: !1,
								media_dimensions: !1,
								media_alt_source: !1,
								media_filter_html: !1,
								paste_preprocess: function(n, e) {
									var t = e.content,
										i = $(document.createElement("div"));
									i.html(t), i.find("*").removeAttr("style"), i.find("img").each(function() {
										$(this).attr("src").indexOf("ycrowdy") < 0 && $(this).remove()
									}), e.content = i.html()
								},
								force_p_newlines: !0,
								forced_root_block: "p",
								extended_valid_elements: "span[!class]",
								automatic_uploads: !0,
								file_picker_types: "image",
								file_picker_callback: function(e, t, i) {
									var a = document.createElement("input");
									a.setAttribute("type", "file"), a.setAttribute("accept", "image/*"), document.body.appendChild(a), a.onchange = function(t) {
										var i = t.target.files || t.dataTransfer.files;
										if (i.length) {
											var a = new FileReader;
											a.onload = function(t) {
												if (i[0]) {
													var a = {};
													a.fileData = t.target.result, a.fileName = i[0].name, n.imageSave(e, a)
												}
											}, a.readAsDataURL(i[0])
										}
									}, a.click()
								},
								setup: function(n) {
									n.addButton("backgroundcolor", {
										icon: "backcolor",
										tooltip: "글자 배경색 바꾸기",
										id: "editor_highlight",
										onclick: function(e) {
											n.execCommand("mceToggleFormat", !1, "backgroundcolor")
										},
										onPostRender: function() {
											var e = this;
											n.on("NodeChange", function(t) {
												var i = jQuery(n.selection.getNode()).hasClass("bg_color");
												e.active(i)
											})
										}
									}), n.addButton("textcolor", {
										icon: "forecolor",
										tooltip: "글자색 바꾸기",
										id: "editor_blue",
										onclick: function(e) {
											n.execCommand("mceToggleFormat", !1, "textcolor")
										},
										onPostRender: function() {
											var e = this;
											n.on("NodeChange", function(t) {
												var i = jQuery(n.selection.getNode()).hasClass("txt_color");
												e.active(i)
											})
										}
									}), n.addButton("custom_underline", {
										icon: "underline",
										tooltip: "밑줄",
										onclick: function(e) {
											n.execCommand("mceToggleFormat", !1, "custom_underline")
										},
										onPostRender: function() {
											var e = this;
											n.on("NodeChange", function(t) {
												var i = jQuery(n.selection.getNode()).hasClass("custom_underline");
												e.active(i)
											})
										}
									}), n.addButton("crowdy_list", {
										type: "menubutton",
										icon: "bullist",
										tooltip: "리스트",
										menu: [{
											icon: "bullist",
											text: "점 리스트",
											tooltip: "점 리스트",
											onclick: function() {
												n.execCommand("InsertUnorderedList")
											}
										}, {
											icon: "numlist",
											text: "숫자 리스트",
											tooltip: "숫자 리스트",
											onclick: function() {
												n.execCommand("InsertOrderedList")
											}
										}]
									}), n.addButton("crowdy_hr", {
										type: "menubutton",
										image: "/resources/css/img/btn_icon_hr1.png",
										tooltip: "구분선",
										menu: [{
											icon: "/resources/css/img/btn_icon_hr1.png",
											image: "/resources/css/img/btn_icon_hr1.png",
											text: "긴 구분선",
											tooltip: "긴 구분선",
											onclick: function() {
												n.insertContent('<hr class="hr1"/><p><br/></p>')
											}
										}, {
											icon: "/resources/css/img/btn_icon_hr2.png",
											image: "/resources/css/img/btn_icon_hr2.png",
											text: "짧은 구분선",
											tooltip: "짧은 구분선",
											onclick: function() {
												n.insertContent('<hr class="hr2"/><p><br/></p>')
											}
										}]
									}), n.addButton("crowdy_blockquote", {
										type: "menubutton",
										image: "/resources/css/img/btn_icon_bq1.png",
										tooltip: "인용구",
										menu: [{
											icon: "/resources/css/img/btn_icon_bq1.png",
											image: "/resources/css/img/btn_icon_bq1.png",
											text: "인용구1",
											tooltip: "인용구1",
											onclick: function() {
												var e = jQuery(n.selection.getNode()),
													t = e.hasClass("blockquote_center"),
													i = e.text();
												"" != i && " " != i || (i = "내용을 입력해주세요."), n.selection.getNode().parentNode.removeChild(n.selection.getNode()), t ? n.insertContent("<p> " + i + "</p>") : n.insertContent('<blockquote class="blockquote_center"> ' + i + " </blockquote>")
											},
											onPostRender: function() {
												var e = this;
												n.on("NodeChange", function(t) {
													var i = jQuery(n.selection.getNode()).hasClass("blockquote_center");
													e.active(i)
												})
											}
										}, {
											icon: "/resources/css/img/btn_icon_bq2.png",
											tooltip: "인용구2",
											text: "인용구2",
											image: "/resources/css/img/btn_icon_bq2.png",
											onclick: function() {
												var e = jQuery(n.selection.getNode()),
													t = e.hasClass("blockquote_left"),
													i = e.text();
												"" != i && " " != i || (i = "내용을 입력해주세요."), n.selection.getNode().parentNode.removeChild(n.selection.getNode()), t ? n.insertContent("<p> " + i + "</p>") : n.insertContent('<blockquote class="blockquote_left"> ' + i + " </blockquote>")
											},
											onPostRender: function() {
												var e = this;
												n.on("NodeChange", function(t) {
													var i = jQuery(n.selection.getNode()).hasClass("blockquote_left");
													e.active(i)
												})
											}
										}]
									})
								},
								init_instance_callback: function(e) {
									e.on("KeyUp", function(t) {
										n.$emit("input", e.getContent())
									}), e.on("Change", function(t) {
										n.$emit("input", e.getContent())
									}), e.setContent(n.removeStyleAttr(n.value))
								}
							})
						},
						destroyed: function() {
							tinymce.get(this.id).destroy()
						},
						methods: {
							imageSave: function(n, e) {
								$(".page-loader-more").fadeIn(""), axios.post("/file/upload", {
									fileType: "aws",
									file: e
								}).then(function(t) {
									$(".page-loader-more").fadeOut(""), n("//" + t.data, {
										title: e.fileName
									})
								})
							},
							removeStyleAttr: function(n) {
								var e = $(document.createElement("div"));
								return e.html(n), e.find("*").removeAttr("style"), n = e.html()
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n            <div class="mt40 xs-mt35 mb100">\n                 <div class="container">\n                    <div class="row row-mobile-n">\n                        <div class="reward-content-body">\n                                <div class="reward_page_title">\n                                    여러분의 한마디가<br/>\n                                    진행자에게 큰 힘이 됩니다\n                                </div>\n                                <div class="reward-comment-danger mt25 xs-mt20">댓글 작성시 유의사항</div>\n                                <ul class="reward-list-circle mt10 mb25">\n                                    <li>프로젝트와 관계없는 글, 광고성, 욕설, 비방, 도배 등의 글은 내부 검토 후 삭제됩니다.</li>\n                                    <li>리워드 관련 문의 및 배송문의는 프로젝트 진행자에게 문의하시면 정확한 답변을 받을 수 있습니다.</li>\n                                </ul>\n                                <div v-if="!loginYN" class="comment-login-btn" v-on:click="login">로그인 후 댓글달기</div>\n                                <div id="comment-collapse" v-if="loginYN">\n                                    <div class="mp-body">\n                                    \x3c!-- 댓글작성 & 댓글목록 --\x3e\n                                    \x3c!-- 댓글작성 --\x3e\n                                    <form class="form-horizontal pt15 xs-pt10 xs-pl5 xs-pr5">\n                                        <div class="form-group row-mobile-n mb10">\n                                            <div class="col-sm-12">\n                                                <textarea rows="3" cols="25" v-model="commentSaveData.crpyContent" name="crpyContent" class="textarea-form-control form-control" @input="inputTextArea($event.target.value,\'comment\')" v-on:click="commentClick" :placeholder="rewardDetailData.memName + \'님! 프로젝트 성공하시길 바래요!\'"></textarea>\n                                                <label class="error" v-if="errors.has(\'crpyContent\')" v-text="errors.first(\'crpyContent\')"></label>\n                                            </div>\n                                        </div>\n\n                                        <div class="form-group row-mobile-n mb20 xs-mb10 xs-pb3">\n                                            <div class="col-xs-4 col-sm-2">\n                                                <span class="textarea_text_leng xs-mt5"><span v-text="commentSaveData.crpyContent.length"></span> / 500</span>\n                                            </div>\n                                            <div class="col-xs-8 col-sm-10 text-right">\n                                                <a href="javascript:void(0)" class="btn-detail" id="complete_pay" v-on:click="commentRegit(\'c\')">댓글달기</a>\n                                            </div>\n                                        </div>\n                                        <hr style="border-top: 1px dashed #eaebed;">\n                                    </form>\n                                    \x3c!-- //댓글작성 --\x3e\n                                    </div>\n                                </div>\n                                \x3c!-- 댓글목록 --\x3e\n                                <div class="mt20 mb30">\n                                    <div v-if="commentData.length == 0" class="reward-content-no">\n                                        등록 된 댓글이 없습니다\n                                    </div>\n                                    \x3c!-- Loop --\x3e\n                                    <div v-if="commentData.length > 0" v-for="(item, index) in commentData" class="mb10" style="margin-top:30px;">\n                                        <div class="comment-box"> \n                                            <div class="displayFlex">\n                                                <div class="reward-policy-profileImg" href="javascript:void(0)"><img v-if="item.memShotImg != \'\'" :src="\'//\' + item.memShotImg + \'/ycrowdy/resize/!160x!160\'" /></div>\n                                                <div class="ivs-comment-nameBox">\n                                                    <span class="comment-id">{{ item.memName }}</span>\n                                                    <span class="comment-user ml5" v-if="item.memCode == rewardDetailData.memCode">진행자</span>\n                                                    <div class="comment-date">\n                                                        <template v-if="(item.sponConfirm==\'Y\' && item.memCode != rewardDetailData.memCode)"><span class="crowdy-color-blue">펀딩참여자</span> | </template>{{ getDate(item.wdate) }}\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <template v-if="item.crpyStatus == 1">\n                                                <div v-html="$options.filters.commentFilter(item.crpyContent)" class="mt5"></div>\n                                            </template>\n                                            <template v-if="item.crpyStatus != 1">\n                                                <div class="mt5" style="color: #aaa;">비공개 댓글입니다.</div>\n                                            </template>\n                                        </div>\n                                        <div class="textRight" v-if="loginYN" style="margin-bottom:-30px;">\n                                            <a class="blue-800 mr5"  :href="\'#\'+item.crpyIdx" role="button" data-toggle="collapse" aria-expanded="false" :aria-controls="item.crpyIdx" >답글달기</a>\n                                        </div>\n                                        <div>\n                                            \x3c!-- 원글에 대한 답글 작성 --\x3e\n                                            <form :id="item.crpyIdx" class="collapse comment-reply" style="margin-top:0px;">\n                                                <div class="mb10 replay-layout">\n                                                    <textarea class="textarea-form-control form-control" v-model="item.feedbackReplyContent" v-on:click="replyClick(item.crpyIdx)" @input="inputTextArea($event.target.value,\'reComment\')" rows="3" cols="25" placeholder="모든 댓글은 크라우드펀딩법에 따라 수정 및 삭제가 불가능하므로 신중히 써주시기 바랍니다."></textarea>\n                                                </div>\n                                                <div style="width:100%">\n                                                    <span v-text="item.feedbackReplyContent.length"></span> / 500\n                                                    <span style="float:right">\n                                                        <a class="btn btn-sm btn-default-outline" :href="\'#\'+item.crpyIdx" role="button" data-toggle="collapse" aria-expanded="false" :aria-controls="item.crpyIdx">답글취소</a>\n                                                        <a href="javascript:void(0)" role="button" data-toggle="collapse" aria-expanded="false" v-on:click="commentRegit(\'r\',item)" class="btn btn-sm btn-primary-outline">답글등록</a>\n                                                    </span>\n                                                </div>\n                                            </form>\n                                            \x3c!-- //답글 작성 --\x3e\n                                            <reply :param-reply = "replyData" :param-comment-idx = "commentData[index].crpyIdx" :reply-change="replyChange" :registor="rewardDetailData.memCode"></reply>\n                                        </div>\n                                    </div>\n                                </div>   \n                                \n                                <div class="text-center mb40" >\n                                    <a href="javascript:void(0)" id="comment_list_more" v-show="moreShow" v-on:click="more()" class="btn btn-primary-outline col-sm-8 col-md-6 col-xs-12 col-sm-offset-2 col-md-offset-3 btn-more text-center">더보기</a>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ',
						props: {
							rewardDetailData: {
								type: Object
							},
							crpyPidx: {
								default: ""
							},
							paramSearchCount: {
								default: "10"
							},
							cpAliasUrl: {
								default: ""
							}
						},
						data: function() {
							return {
								commentData: [],
								replyData: [],
								commentParam: {
									cpCode: this.rewardDetailData.cpCode,
									paging: {
										page: "1",
										count: this.paramSearchCount
									}
								},
								commentSaveData: {
									cpCode: this.rewardDetailData.cpCode,
									memCode: userInfo.memCode,
									crpyPidx: 0,
									crpyDeps: 0,
									crpyContent: "",
									crpyContentRe: ""
								},
								moreShow: !0,
								refresh: !0,
								replyChange: 1,
								loginYN: !1
							}
						},
						components: {
							reply: t(21).default.component()
						},
						computed: {
							userImg: function() {
								return userInfo.image
							}
						},
						created: function() {
							"" == !userInfo.memCode && (this.loginYN = !0), this.comment("regit")
						},
						filters: {
							commentFilter: function(n) {
								return n.replace(/[\n]/g, "<br/>")
							}
						},
						methods: {
							login: function() {
								userInfo.loginConfirm()
							},
							comment: function(n) {
								var e = this;
								_.isEqual("regit", n) && (e.commentParam.paging.page = "1", e.commentParam.paging.count = 10), axios.post("/data/view/reward/comment-list", e.commentParam).then(function(t) {
									_.isEqual("regit", n) ? (e.commentData = t.data.rData.comment, e.replyData = t.data.rData.reply) : (e.commentData = _.concat(e.commentData, t.data.rData.comment), e.replyData = _.concat(e.replyData, t.data.rData.reply)), e.moreEnd() && 0 != t.data.rData.comment.length || (e.moreShow = !1)
								})
							},
							commentRegit: function(n, e) {
								var t = this;
								"r" == n && (t.commentSaveData.crpyContent = e.feedbackReplyContent), axios.post("/set/save/reward/set-comment", t.commentSaveData).then(function(n) {
									"0000" == n.data.rCode ? (noti.open("등록되었습니다."), t.commentSaveData.crpyContentRe = "", t.commentSaveData.crpyContent = "", t.commentData = [], t.replyData = [], t.comment("regit")) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							replyClick: function(n) {
								var e = this;
								userInfo.loginConfirm() && (e.commentSaveData.crpyPidx = n, e.commentSaveData.crpyDeps = 1)
							},
							more: function() {
								var n = this;
								this.commentParam.paging.page = _.toString(_.add(_.toNumber(this.commentParam.paging.page), 1)), this.comment(), n.replyChange++
							},
							moreEnd: function() {
								return this.commentData.length % this.commentParam.paging.count == 0
							},
							commentClick: function() {
								this.$nextTick(function() {
									this.commentSaveData.crpyPidx = 0
								})
							},
							getDate: function(n) {
								var e = moment().format("YYYY-MM-DD HH:mm"),
									t = moment(n, "YYYY.MM.DD HH:mm").format("YYYY-MM-DD HH:mm"),
									i = moment(e).diff(t),
									a = moment.duration(i).asMinutes();
								return a < 30 ? "방금전" : a >= 30 && a < 60 ? "30분전" : a >= 60 && a < 1440 ? parseInt(a / 60) + "시간전" : a >= 1440 && a < 2880 ? "1일전" : a >= 2880 && a < 4320 ? "2일전" : moment(n, "YYYY.MM.DD HH:mm").format("YY.MM.DD")
							},
							inputTextArea: function(n, e) {
								var t = "";
								t = n.length > 500 ? n.substring(0, 500) : n, "comment" == e ? this.commentSaveData.crpyContent = t : (e = "reComment") && (this.commentSaveData.crpyContentRe = t)
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n            <div>\n                <div v-for="(item, index) in replyFilter" class="replay-layout">\n                    <div class="replay-dasi"></div>\n                    <div class="replay-container mt5">\n                        <div class="replay-box"> \n                            <div class="displayFlex">\n                                <div class="reward-policy-profileImg" href="javascript:void(0)"><img v-if="item.memShotImg != \'\'" :src="\'//\' + item.memShotImg + \'/ycrowdy/resize/!160x!160\'" /></div>\n                                <div class="ivs-comment-nameBox">\n                                    <span class="comment-id">{{ item.memName }}</span>\n                                    <span class="comment-user ml5" v-if="item.memCode == registor">진행자</span>\n                                    <div class="comment-date"><template v-if="(item.sponConfirm==\'Y\' && item.memCode != registor)"><span class="crowdy-color-blue">펀딩참여자</span> | </template>{{ getDate(item.wdate) }}</div>\n                                </div>\n                            </div>\n                            <template v-if="item.crpyStatus == 1">\n                                <div v-html="$options.filters.commentFilter(item.crpyContent)" class="mt5"></div>\n                            </template>\n                            <template v-if="item.crpyStatus != 1">\n                                <div class="mt5" style="color: #aaa;">비공개 댓글입니다.</div>\n                            </template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ',
						props: ["paramReply", "paramCommentIdx", "replyChange", "registor"],
						data: function() {
							return {
								comment: this.paramCommentIdx,
								reply: _.orderBy(this.paramReply, ["wdate", "asc"])
							}
						},
						watch: {
							replyChange: function() {
								var n = this;
								return this.reply.filter(function(e) {
									return e.crpyPidx == n.comment
								})
							}
						},
						computed: {
							replyFilter: function() {
								var n = this;
								return this.reply.filter(function(e) {
									return e.crpyPidx == n.comment
								})
							}
						},
						filters: {
							commentFilter: function(n) {
								return n.replace(/[\n]/g, "<br/>")
							}
						},
						methods: {
							getDate: function(n) {
								var e = moment().format("YYYY-MM-DD HH:mm"),
									t = moment(n, "YYYY.MM.DD HH:mm:ss").format("YYYY-MM-DD HH:mm"),
									i = moment(e).diff(t),
									a = moment.duration(i).asMinutes();
								return a < 30 ? "방금전" : a >= 30 && a < 60 ? "30분전" : a >= 60 && a < 1440 ? parseInt(a / 60) + "시간전" : a >= 1440 && a < 2880 ? "1일전" : a >= 2880 && a < 4320 ? "2일전" : moment(n, "YYYY.MM.DD HH:mm:ss").format("YY.MM.DD")
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div class="mt40 mb100">\n                    <div class="container">\n                        <div class="row row-mobile-n">\n                            <div class="reward-content-body">\n                                \n                                \x3c!-- 프로젝트 이메일 등.. pc --\x3e\n                                \x3c!-- div class="col-sm-5 pr0 pl0 hidden-xs" style="float:right">\n                                    <div class="reward_policy_title">진행자에게 문의하기</div>\n                                    <div class="reward-policy-profilebox mt5">\n                                        <div class="reward-policy-profileImg mr10"><img v-if="rewardDetailData.memShotImg != \'\'" :src="\'//\' + rewardDetailData.memShotImg" class="media-object" /></div>\n                                        <div>\n                                            <div class="reward-policy-name">{{ rewardDetailData.memName}}</div>\n                                            <a href="mailto:rewardDetailData.cpInquiryEmail" class="reward-policy-email mb5">{{ rewardDetailData.cpInquiryEmail}}</a><br/>\n                                            <template v-if="rewardDetailData.snsList != null && rewardDetailData.snsList.length>0" v-for="(item, index) in rewardDetailData.snsList">\n                                                <a :href="linkUrl(item.snsUrl)" target="_blank" class="reward-policy-email">\n                                                    <div v-if="item.snsType == 0" class="website-icon reward-icon-setting"></div>\n                                                    <div v-if="item.snsType == 1" class="facebook-icon reward-icon-setting"></div>\n                                                    <div v-if="item.snsType == 2" class="naver-icon reward-icon-setting"></div>\n                                                    <div v-if="item.snsType == 3" class="insta-icon reward-icon-setting"></div>\n                                                    <div v-if="item.snsType == 5" class="youtube-icon reward-icon-setting"></div>\n                                                </a>\n                                            </template>\n                                        </div>\n                                    </div>\n                                </div --\x3e\n                                \x3c!-- // 프로젝트 이메일 등.. --\x3e\n\n                                <div class="col-sm-12 col-xs-12">\n                                    <div class="reward_page_title">\n                                        리워드 배송 예정일은<br/><span class="crowdy-color-blue">{{getDate(rewardDetailData.cpDeliveryDate,1)}}</span> 입니다.  \n                                    </div>\n                                    <div class="mt20">\n                                        <span class="crowdy-color-blue crowdy-font-bold">리워드 변경 가능 날짜</span> | {{getDate(rewardDetailData.cpEndDate,2)}} 까지 <br/>프로젝트 종료 이후 환불은 불가하니 참고해주세요\n                                    </div>\n\n                                    \x3c!-- 프로젝트 이메일 등.. mobile--\x3e\n                                    \x3c!-- div class="col-xs-12 mt25 mb30 pr0 pl0 hidden-sm hidden-md hidden-lg" >\n                                        <div class="reward_policy_title">진행자에게 문의하기</div>\n                                        <div class="reward-policy-profilebox mt5">\n                                            <div class="reward-policy-profileImg mr10"><img v-if="rewardDetailData.memShotImg != \'\'" :src="\'//\' + rewardDetailData.memShotImg" class="media-object" /></div>\n                                            <div>\n                                                <div class="reward-policy-name">{{ rewardDetailData.memName}}</div>\n                                                <a href="mailto:rewardDetailData.cpInquiryEmail" class="reward-policy-email mb5">{{ rewardDetailData.cpInquiryEmail}}</a><br/>\n                                                <template v-if="rewardDetailData.snsList != null && rewardDetailData.snsList.length>0" v-for="(item, index) in rewardDetailData.snsList">\n                                                    <a :href="linkUrl(item.snsUrl)" target="_blank" class="reward-policy-email">\n                                                        <div v-if="item.snsType == 0" class="website-icon reward-icon-setting"></div>\n                                                        <div v-if="item.snsType == 1" class="facebook-icon reward-icon-setting"></div>\n                                                        <div v-if="item.snsType == 2" class="naver-icon reward-icon-setting"></div>\n                                                        <div v-if="item.snsType == 3" class="insta-icon reward-icon-setting"></div>\n                                                        <div v-if="item.snsType == 5" class="youtube-icon reward-icon-setting"></div>\n                                                    </a>\n                                                </template>\n                                            </div>\n                                        </div>\n                                    </div --\x3e\n                                    \x3c!-- // 프로젝트 이메일 등.. --\x3e\n\n                                    <div class="mt40 reward_policy_title">진행자 교환 및 환불 정책</div>\n                                    <ul class="reward-list-circle mt15" v-html="rewardDetailData.cpRefundPolicy"></ul>\n                                    \n                                    <div class="mt40 reward_policy_title">크라우디 교환 및 환불 정책</div>\n                                    <ul class="reward-list-circle mt15">\n                                        <li>프로젝트 기간 중엔 자유롭게 [마이페이지]에서 펀딩 취소가 가능합니다.</li>\n                                        <li>펀딩을 받아야만 생산이 시작할 수 있는 크라우드펀딩 특성상, 프로젝트 종료 이후에는 단순 변심으로 인한 교환이나 환불이 불가하니 이점 양해 부탁드립니다.</li>\n                                        <li>리워드 배송일이 예상보다 지연되는 경우, 새소식과 참여자 분들의 이메일을 통해 안내해 드리겠습니다</li>\n                                    </ul>\n\n                                    <div class="mt40 reward_policy_title">진행자 소개</div>\n                                    <div class="mt15">\n                                        <div class="reward-policy-name">{{ rewardDetailData.memName}}</div>\n                                        <a href="mailto:rewardDetailData.cpInquiryEmail" class="reward-policy-email mb10">{{ rewardDetailData.cpInquiryEmail}}</a><br/>\n                                        <template v-if="rewardDetailData.snsList != null && rewardDetailData.snsList.length>0" v-for="(item, index) in rewardDetailData.snsList">\n                                            <a :href="linkUrl(item.snsUrl)" target="_blank" class="reward-policy-email">\n                                                <div v-if="item.snsType == 0" class="website-icon reward-icon-setting"></div>\n                                                <div v-if="item.snsType == 1" class="facebook-icon reward-icon-setting"></div>\n                                                <div v-if="item.snsType == 2" class="naver-icon reward-icon-setting"></div>\n                                                <div v-if="item.snsType == 3" class="insta-icon reward-icon-setting"></div>\n                                                <div v-if="item.snsType == 5" class="youtube-icon reward-icon-setting"></div>\n                                            </a>\n                                        </template>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ',
						props: {
							rewardDetailData: {
								type: Object
							}
						},
						data: function() {
							return {}
						},
						created: function() {
							this.policyCustom()
						},
						methods: {
							getDate: function(n, e) {
								return 1 == e ? moment(n, "YY.MM.DD").format("YYYY년 MM월 DD일") : moment(n, "YY.MM.DD").format("MM월 DD일")
							},
							policyCustom: function() {
								null != this.rewardDetailData.cpRefundPolicy && (this.rewardDetailData.cpRefundPolicy = this.rewardDetailData.cpRefundPolicy.replace(/-/g, "<li>"), this.rewardDetailData.cpRefundPolicy = this.rewardDetailData.cpRefundPolicy.replace(/[\n]/g, "</li>"), this.rewardDetailData.cpRefundPolicy = this.rewardDetailData.cpRefundPolicy.replace(/※/g, "<br>※"))
							},
							linkUrl: function(n) {
								var e = n;
								return e.indexOf("http://") >= 0 || e.indexOf("https://") >= 0 ? e : "http://" + e
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n                    \x3c!--옵션 선택 --\x3e       \n                    <div class="reward-choice-container">\n                        <div class="reward-choice-shareBtn" v-on:click="shareBtn"></div>\n                        <div class="reward-choice-btn" v-on:click="choiceBoxOpen(true)">{{word.optionBtn}}<span class="ml10 glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>\n                        <div class="option-space-shadow" ></div>\n                    </div>\n\n                    <div class="reward-choice-box" id="choiceBox">\n                        <div class="reward-choice-contentArea" :class="{\'reward-choice-mbBottom\' : step!=1}">\n                            \x3c!--pc--\x3e\n                            <div class="reward-choice-boxBack-pc">\n                                <div class="reward-choice-storyBackBtn" v-on:click="btnController(1)" v-if="step!=3">\n                                    <i class="fa fa-angle-left"></i>\n                                    <div class="reward-choice-storyBackText">{{word.optionBackText}}</div>\n                                </div>\n                                <div class="reward-choice-storyBackBtn1" v-on:click="choiceBoxOpen(false)" v-if="step!=1">스토리로 돌아가기</div>\n                            </div>\n\n                            \x3c!--mb--\x3e\n                            <div class="reward-choice-boxBack-mobile">\n                                <div class="reward-choice-storyBackBtn" v-on:click="btnController(1)" v-if="step==2">\n                                    <i class="fa fa-angle-left"></i>\n                                    <div class="reward-choice-storyBackText">{{word.optionBackText}}</div>\n                                </div>\n                                <div class="reward-choice-storyBackBtn" v-on:click="btnController(3)" v-if="step==3&& funding.list.length == 0">\n                                    <i class="fa fa-angle-left"></i>\n                                    <div class="reward-choice-storyBackText">추가 선택하기</div>\n                                </div>\n                                <div class="menu-trigger mt5 active_1" v-on:click="choiceBoxOpen(false)"><span></span><span></span><span></span></div>\n                            </div>\n                        </div>\n                        \n                        <div class="reward-choice-projectTitle">{{rewardDetailData.cpTitle}}</div>\n\n                        <div class="reward-choice-contentArea reward-choice-margin">\n                            <div class="reward-choice-desc">\n                                펀딩을 마치면 <b>결제 예약 상태</b>입니다. 종료일에 100%\u2028<br/>\n                                이상 달성되었을 경우에만 결제예정일에 결제가 됩니다\n                            </div>\n\n                            <div class="reward-choice-margin">\n                                \x3c!--리워드 카드 리스트 --\x3e   \n                                <template v-if="step == 1">\n                                    <div class="common-flex-between" style="align-items:center;">\n                                        <span class="reward-choice-title mt10 xs-mt0 mb25">리워드 선택</span>\n                                        <span class="reward-choice-payment" v-if="funding.list.length>0" v-on:click="btnController(2)">리워드 결제하기</span>\n                                    </div>\n                                    \x3c!-- Loop --\x3e\n                                    <div class="reward-choice-optionBox-white rewad-chocie-active" v-for="(item, index) in cardBenefitData" :class="{\'reward-choice-optionBox-gray\' : (item.cbfRemQty == 0 && item.cbfStatus != 2) || (item.cbfStatus == 2)}" v-on:click="rewardChoiceConfirm(item, index)">\n                                        \n                                        <div class="reward-choice-boxlabel">\n                                            \x3c!--정상적인 상태인지 판단 --\x3e\n                                            <template v-if="(item.cbfRemQty != 0 && item.cbfStatus == 1) || (rewardDetailData.cpEndStatus == 0)">\n                                                <span v-if="item.preopenConfirm == \'Y\'" class="reward-option-preopen">알림 신청자 전용</span>\n                                                <span v-if="item.preopenConfirm == \'Y\' && item.cpBenefitOptions.length > 0">|</span>\n                                                <span v-if="item.cpBenefitOptions.length > 0" class="reward-option-preopen">옵션선택 필수</span>\n                                            </template>\n                                            <template v-if="item.cbfRemQty == 0 && item.cbfStatus != 2">\n                                                <span class="font-pink" style="margin-bottom: 10px;display:inline-block;">SOLD OUT</span>\n                                            </template>\n                                            <template v-if="item.cbfStatus == 2">\n                                                <span class="font-pink" style="margin-bottom: 10px;display:inline-block;">제공 중지</span>\n                                            </template>\n                                        </div>\n\n                                        <div class="reward-choice-boxamount">{{ parseInt(item.cbfAmount).toLocaleString() }} 원 펀딩</div>\n                                        \n                                        <div class="reward-choice-boxrow">\n                                            <span v-if="item.cbfRemQty > 89999"><b>무제한</b></span>\n                                            <span v-if="item.cbfRemQty < 90000"><b>{{ item.cbfRemQty }}개 남음</b></span>\n                                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                            <b class="pl20">예상 배송일 &nbsp;&nbsp;</b>\n                                            <span>{{ item.cbfResDate }}</span>\n                                            <i class="fas fa-caret-right"></i>\n                                        </div>\n                                       \n                                        <div class="reward-choice-boxtitle">{{ item.cbfTitle }}</div>\n                                        <div class="reward-choice-boxdesc">{{ item.cbfInfo }}</div>\n                                    </div>\n                                    \x3c!-- //Loop --\x3e\n                                </template>\n                               \n                                \x3c!--리워드 카드 옵션 선택 및 수량 선택 --\x3e\n                                <template v-if="step == 2">\n                                    <div class="option-slide">\n                                        <div class="reward-choice-title option-slide mt10 xs-mt20 mb25" v-if="selectCard.cpBenefitOptions.length == 0">리워드 수량 입력</div>\n                                        <div class="reward-choice-title option-slide mt10 xs-mt25 mb25" v-if="selectCard.cpBenefitOptions.length != 0">리워드 옵션 입력</div>\n                                        <div class="reward-choice-optionBox-white option-slide">\n                                            <div class="reward-choice-boxlabel">\n                                                \x3c!--정상적인 상태인지 판단 --\x3e\n                                                <template v-if="(selectCard.cbfRemQty != 0 && selectCard.cbfStatus == 1) || (rewardDetailData.cpEndStatus == 0)">\n                                                    <span v-if="selectCard.preopenConfirm == \'Y\'" class="reward-option-preopen">알림 신청자 전용</span>\n                                                    <span v-if="selectCard.preopenConfirm == \'Y\' && selectCard.cpBenefitOptions.length > 0">|</span>\n                                                    <span v-if="selectCard.cpBenefitOptions.length > 0" class="reward-option-preopen">옵션선택 필수</span>\n                                                </template>\n                                            </div>\n\n                                            <div class="reward-choice-boxamount">{{ parseInt(selectCard.cbfAmount).toLocaleString() }} 원 펀딩</div>\n                                        \n                                            <div class="reward-choice-boxrow">\n                                                <span v-if="selectCard.cbfRemQty > 89999"><b>무제한</b></span>\n                                                <span v-if="selectCard.cbfRemQty < 90000"><b>{{ selectCard.cbfRemQty }}개 남음</b></span>\n                                                <span>&nbsp;&nbsp;|&nbsp;&nbsp;{{ parseInt(selectCard.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                <b class="pl20">예상 배송일 &nbsp;&nbsp;</b>\n                                                <span>{{ selectCard.cbfResDate }}</span>\n                                            </div>\n                                           \n                                            <div class="reward-choice-boxtitle">{{ selectCard.cbfTitle }}</div>\n                                            <div class="reward-choice-boxdesc">{{ selectCard.cbfInfo }}</div>\n\n                                            <div class="common-flex-center mt25 xs-mt10" id="reward-qty">\n                                                <span class="qty-minus" v-on:click="qtyChange(-1)"></span>\n                                                <number-input type="tel" maxlength="11" :num="selectCard.qty" v-model="selectCard.qty" class="qty-input" id="qtyInput"></number-input>\n                                                <span class="qty-add" v-on:click="qtyChange(1)"></span>\n                                            </div>\n                                        </div>\n\n                                        <template v-if="selectCard.cpBenefitOptions.length > 0">\n                                            <div v-for="(item, index) in selectCard.cpBenefitOptions" :class="{\'mt10\' : index != 0 , \'mb100\' : (selectCard.cpBenefitOptions.length-1) == index }" class="option-select-custom option-slide">\n                                                <template v-if="item.cpBenefitOptionType == \'1\'">\n                                                    <div class="reward-choice-optionTitle">{{item.cpBenefitOptionTitle}}<span>(필수)</span></div>\n                                                    <select class="reward-choice-optionBtn reward-choice-optionArr mt5" v-model="selectCard.benefit[index]" v-on:change="selectChange">\n                                                        <option value="" disabled hidden>{{word.optionPlaceholder}}</option>\n                                                        <option v-for="data in getSplitOption(item.cpBenefitOption)" :value="data">{{data}}</option>\n                                                    </select>\n                                                </template>\n                                                <template v-if="item.cpBenefitOptionType == \'2\'" class="mt10">\n                                                    <div class="reward-choice-optionTitle">{{item.cpBenefitOptionTitle}}<span>(필수)</span></div>\n                                                    <input type="text" placeholder="20자 이내로 작성해주세요." v-model="selectCard.benefit[index]" v-on:keyup="selectChange" class="reward-choice-optionBtn mt5">\n                                                </template>\n                                            </div>\n                                        </template>\n                                    </div>\n                                </template>\n                                \n                                \x3c!--리워드 카드 확인--\x3e\n                                <template v-if="step == 3">\n                                    <div class="option-slide mb100">\n                                        <div class="common-flex-between" style="align-items: center;">\n                                            <span class="reward-choice-title mt10 xs-mt20 mb25">선택한 리워드 확인</span>\n                                            <span class="reward-choice-payment" v-if="funding.list.length>0" v-on:click="btnController(3)">리워드 추가하기</span>\n                                        </div>\n                                        \n                                        \x3c!-- LOOP --\x3e\n                                        <div class="reward-choice-optionBox-white" v-for="(item, index) in funding.list">\n                                            <div class="displayFlex">\n                                                <div style="width:100%;">\n                                                    <div class="reward-choice-boxlabel">\n                                                        <b v-if="item.preopenConfirm == \'Y\'" class="reward-option-preopen">알림 신청자 전용</b>\n                                                        <span v-if="item.preopenConfirm == \'Y\' && item.cpBenefitOptions.length > 0">|</span>\n                                                        <span v-if="item.cpBenefitOptions.length > 0" class="reward-option-preopen">옵션선택 필수</span>\n                                                    </div>\n\n                                                    <div class="reward-choice-boxamount">{{ parseInt(item.cbfAmount).toLocaleString() }} 원 펀딩</div>\n                                                \n                                                    <div class="reward-choice-boxrow">\n                                                        <span v-if="item.cbfRemQty > 89999"><b>무제한</b></span>\n                                                        <span v-if="item.cbfRemQty < 90000"><b>{{ item.cbfRemQty }}개 남음</b></span>\n                                                        <span>&nbsp;&nbsp;|&nbsp;&nbsp;{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                        <b class="pl20">예상 배송일 &nbsp;&nbsp;</b>\n                                                        <span>{{ item.cbfResDate }}</span>\n                                                    </div>\n                                                    <div class="reward-choice-boxtitle">{{ item.cbfTitle }}</div>\n                                                    <div class="reward-choice-boxdesc">{{ item.cbfInfo }}</div>\n                                                </div>\n                                                <div class="reward-choice-delBtn" v-on:click="deleteRewardCard(index)">삭제</div>\n                                            </div>\n                                            <div class="reward-choice-numBox">\n                                                <div class="mt10 displayFlex justifyBetween">\n                                                    <div class="displayFlex">\n                                                        <div class="reward-choice-numTitle">수량</div>\n                                                        <div>{{ parseInt(item.qty).toLocaleString() }}개</div>\n                                                    </div>\n                                                    <div class="reward-choice-update" v-on:click="editRewardCard(item,index)">옵션수정</div>\n                                                </div>\n                                                <div v-if="item.cpBenefitOptions.length > 0" v-for="(itemOption,idx) in item.cpBenefitOptions" class="displayFlex">\n                                                    <div class="reward-choice-numTitle">{{itemOption.cpBenefitOptionTitle}}</div> \n                                                    <div>{{item.benefit[idx]}}</div>\n                                                </div>\n                                                <div class="displayFlex">\n                                                    <div class="reward-choice-numTitle">결제 예정일</div>\n                                                    <div>{{rewardDetailData.paymentData}}</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        \x3c!-- //LOOP --\x3e\n\n                                        \x3c!-- 리워드 없을 경우 --\x3e\n                                        <div class="option-box-noneReward mb10" v-if="funding.list.length==0">리워드를 다시 선택하시겠습니까?</div>\n\n                                        <div class="reward-choice-addFundingText mt40 md-mt20" v-on:click="addFunding">추가 펀딩하기(선택)<i class="fa hidden-sm hidden-md hidden-lg" :class="{\'fa-angle-down\':toggle,\'fa-angle-up\':!toggle}"></i></div>\n                                        \n                                        <div id="rewardAdd">\n                                            <div class="common-flex-center" id="reward-input">\n                                                <number-input type="tel" :num="funding.spsAmount" v-model="funding.spsAmount" class="option-input-amount" @input="inputTotalAmount"></number-input>\n                                                <div class="option-input-text">원</div>\n                                            </div>\n                                            <div class="reward-choice-addFundingDesc">순수한 후원의 형태로 진행자에게 전달</div>\n                                        </div>\n\n                                        \x3c!--\n                                        <div class="reward-option-box-sub" v-if="item.cpBenefitOptions.length > 0">\n                                            <div class="option-box-left hidden-xs"></div>\n                                            <div class="option-box-optionList">\n                                                <div v-for="(itemOption,idx) in item.cpBenefitOptions">\n                                                    <strong> {{itemOption.cpBenefitOptionTitle}} </strong>: {{item.benefit[idx]}}\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class="hidden-sm hidden-md hidden-lg reward-option-box-btn2" v-on:click="editRewardCard(item,index)">수정하기</div>\n                                        코인원의 경우 조건 추가 \n                                        <template v-if="this.rewardDetailData.cpType == \'0\'">    \n                                            <div class="option-add-text mt20 xs-mt10 xs-mb5">추가 펀딩하기</div>\n                                            <div class="common-flex-center">\n                                                <number-input type="tel" :num="funding.spsAmount" v-model="funding.spsAmount" class="option-input-amount"  @input="inputTotalAmount"></number-input>\n                                                <div class="option-input-text">원</div>\n                                                <div class="option-add-desc hidden-xs ml10">추가 펀딩하기 : <br/>리워드를 받지 않고 진행자에게 순수한 후원형식으로 전달됩니다</div>\n                                            </div>\n                                            <div class="option-add-desc hidden-sm hidden-md hidden-lg xs-mt5">리워드를 받지 않고 진행자에게 순수한 후원형식으로 전달됩니다</div>\n                                            <hr class="mt25 hidden-xs">\n                                        </template>\n                                        --\x3e\n                                    </div>\n                                </template>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="reward-option-bottomBtn">\n                        <div class="reward-option-bottomStepBtn" v-on:click="nextStep" v-if="nextBtnShow">{{ word.optionBtnStep}}</div>\n                    </div>\n                </div>\n            ',
						props: {
							rewardDetailData: {
								type: Object
							},
							cpAliasUrl: {
								default: ""
							}
						},
						data: function() {
							return {
								dataConfirm: !1,
								memCode: userInfo.memCode,
								memPreopenConfirm: "N",
								cardBenefitData: [],
								selectCard: {},
								funding: {
									cpAliasUrl: this.cpAliasUrl,
									cpTitle: this.rewardDetailData.cpTitle,
									list: [],
									spsAmount: 0,
									spsTotAmount: 0,
									memCode: userInfo.memCode,
									cpCode: this.rewardDetailData.cpCode,
									cpType: this.rewardDetailData.cpType,
									id: userInfo.memCode + this.rewardDetailData.cpCode + Math.random().toString(36).substr(2, 5),
									message: this.rewardDetailData.cpTitle,
									cpAdultType: this.rewardDetailData.cpAdultType,
									memCiConfirm: "N"
								},
								totalAmount: 0,
								tempSpsAmount: 0,
								word: {
									optionPlaceholder: "옵션 선택하기",
									optionBtn: "펀딩하기",
									optionBtnStep: "다음단계",
									optionBackText: "스토리 돌아가기"
								},
								slideOpen: !1,
								step: 1,
								mode: 0,
								brower: "",
								position: 0,
								addCartCheck: 0,
								endCheck: !1,
								nextBtnShow: !0,
								toggle: !0
							}
						},
						created: function() {
							this.load(), 2 != this.rewardDetailData.cpEndStatus && 3 != this.rewardDetailData.cpEndStatus || "" == this.rewardDetailData.cpExUrl || (this.endCheck = !0, this.word.optionBtn = "구매하기")
						},
						computed: {
							getComma: function() {
								var n = this.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
								return 0 != n ? n + "원 " : ""
							}
						},
						watch: {
							addCartCheck: function() {
								1 == this.addCartCheck && this.setPixelAddToCart()
							},
							step: function() {
								1 == this.step ? ($(".reward-option-bottomBtn").hide(), this.word.optionBackText = "스토리로 돌아가기") : 2 == this.step ? (this.selectCard.cpBenefitOptions.length > 0 ? this.selectChange() : this.nextBtnShow = !0, this.word.optionBtnStep = "다음단계", this.word.optionBackText = "리워드 다시 선택하기", $(".reward-option-bottomBtn").show()) : 3 == this.step && ($(window).width() < 768 && ("" != this.funding.spsAmount ? $("#rewardAdd").css("display", "block") : $("#rewardAdd").css("display", "none")), this.$nextTick(function() {
									this.word.optionBtnStep = this.getComma + " 펀딩하기"
								}), $(".reward-option-bottomBtn").show())
							}
						},
						methods: {
							loadFade: function(n) {
								1 == n ? $(".page-loader-more").fadeIn("") : $(".page-loader-more").fadeOut("")
							},
							load: function() {
								var n = this;
								axios.post("/data/view/reward/preopen-confirm", {
									cpCode: this.rewardDetailData.cpCode,
									memCode: this.memCode
								}).then(function(e) {
									var t = e.data.rData;
									n.memPreopenConfirm = t.memPreopenConfirm
								}), axios.post("/data/view/reward/benefit-list", {
									cpCode: this.rewardDetailData.cpCode
								}).then(function(e) {
									var t = e.data;
									if ("0000" != t.rCode) return void noti.open("리워드 목록을 가져오지 못했습니다. " + t.rMsg);
									var i = [];
									t.rData.filter(function(n) {
										0 != n.cbfRemQty && 1 == n.cbfStatus && i.push(n)
									}), t.rData.filter(function(n) {
										0 == n.cbfRemQty && 2 != n.cbfStatus && i.push(n)
									}), t.rData.filter(function(n) {
										2 == n.cbfStatus && i.push(n)
									}), n.cardBenefitData = i, null == t || t.length < 1 ? n.setMinBenefit(0) : n.setMinBenefit(t.rData[0].cbfAmount)
								})
							},
							setMinBenefit: function(n) {
								this.$emit("set-min-benefit", n)
							},
							btnController: function(n) {
								1 == n ? ($("body").removeClass("not_scroll"), $("html").scrollTop(this.position), 1 == this.step ? ($("#choiceBox").css("display", "none"), $(".optionBtnBox").hide()) : (this.selectCard = {}, this.step = 1)) : 2 == n ? this.step = 3 : 3 == n && (this.selectCard = {}, this.step = 1)
							},
							choiceBoxOpen: function(n) {
								var e = this;
								if (this.endCheck) return void noti.open("프로젝트의 리워드를 판매하는 곳으로 이동하며, <br/>크라우디는 판매 당사자가 아닙니다.", function() {
									window.open(e.rewardDetailData.cpExUrl, "_blank")
								}, !0);
								n ? (this.position = $("html").scrollTop(), $("body").addClass("not_scroll"), $("#ch-plugin").css("display", "none"), $("#choiceBox").css("display", "block"), 1 != this.step && $(".reward-option-bottomBtn").show()) : ($("#ch-plugin").css("display", "block"), $("#choiceBox").css("display", "none"), $("body").removeClass("not_scroll"), $("html").scrollTop(this.position), $(".reward-option-bottomBtn").hide())
							},
							rewardChoiceConfirm: function(n, e) {
								var t = this;
								if (2 == this.rewardDetailData.cpEndStatus || 3 == this.rewardDetailData.cpEndStatus) return void noti.open("이미 종료된 리워드입니다.");
								if (2 == n.cbfStatus) return void noti.open("제공이 중지된 리워드입니다.");
								if (0 == n.cbfRemQty) return void noti.open("리워드의 수량이 남아있지 않습니다.");
								if (userInfo.loginConfirm()) return "Y" == n.preopenConfirm && "N" == this.memPreopenConfirm ? void noti.open("사전공개 기간 중 알림신청을 하신 분들만 선택할 수 있는 리워드입니다.") : void("Y" == this.rewardDetailData.cpAdultType ? (this.loadFade(1), axios.post("/data/member/certi/adult", {
									memCode: userInfo.memCode
								}).then(function(i) {
									if (t.loadFade(2), "0000" == i.data.rCode) {
										var a = i.data.rData;
										if ("Y" == a.memCiConfirm) {
											if ("N" == a.memAdultConfirm) return void noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다.");
											t.rewardChoice(n, e)
										} else t.$emit("child-bus-call", 1, 1, window.location.href)
									} else t.$emit("child-bus-call", 1, 1, window.location.href)
								})) : this.rewardChoice(n, e))
							},
							rewardChoice: function(n, e) {
								var t = this;
								this.rewardDetailData.cpEndStatus > 1 || (0 != n.cbfRemQty && 1 == n.cbfStatus || this.rewardDetailData.cpEndStatus < 2) && (this.selectCard = _.clone(n), this.selectCard.cpBenefitOptions.length > 0 && (this.selectCard.benefit = [], this.selectCard.cpBenefitOptions.forEach(function(n, e) {
									t.selectCard.benefit[e] = ""
								})), this.selectCard.qty = 1, this.step = 2, this.mode = 0)
							},
							selectChange: function() {
								var n = this;
								this.nextBtnShow = !0, this.selectCard.benefit.forEach(function(e, t) {
									if ("" == e) return n.nextBtnShow = !1, !1
								})
							},
							getSplitOption: function(n) {
								return n.split(",")
							},
							editRewardCard: function(n, e) {
								this.selectCard = _.clone(n), this.funding.list.splice(e, 1), this.step = 2, this.mode = 1
							},
							deleteRewardCard: function(n) {
								this.funding.list.splice(n, 1), this.getTotalAmount(), 0 == this.funding.list.length ? this.word.optionBtnStep = "리워드 선택하러 가기" : this.word.optionBtnStep = this.getComma + " 펀딩하기"
							},
							qtyChange: function(n) {
								var e = parseInt(this.selectCard.qty) + n;
								0 == e ? (this.selectCard.qty = 1, $("#qtyInput").val(this.selectCard.qty)) : e >= 1 && this.selectCard.cbfRemQty >= e && (this.selectCard.qty = e, $("#qtyInput").val(this.selectCard.qty))
							},
							getTotalAmount: function() {
								var n = this;
								this.totalAmount = 0, this.funding.list.forEach(function(e) {
									n.totalAmount += parseInt(e.cbfAmount * e.qty)
								}), 0 == this.funding.list.length && (this.funding.spsAmount = 0), this.totalAmount += this.funding.spsAmount, this.funding.spsTotAmount = this.totalAmount
							},
							inputTotalAmount: function() {
								"" == this.funding.spsAmount && (this.funding.spsAmount = 0);
								var n = parseInt(this.funding.spsAmount);
								isNaN(n) ? this.funding.spsAmount = 0 : (this.funding.spsAmount = n, this.totalAmount = this.totalAmount + n - this.tempSpsAmount, this.funding.spsTotAmount = this.totalAmount, this.tempSpsAmount = this.funding.spsAmount), this.word.optionBtnStep = this.getComma + " 펀딩하기"
							},
							nextStep: function() {
								var n = this;
								if (2 == this.step) {
									if (parseInt(this.selectCard.qty) > parseInt(this.selectCard.cbfRemQty)) return void noti.open(this.selectCard.cbfRemQty + "개 까지 리워드 가능합니다.");
									var e = !0;
									this.selectCard.cpBenefitOptions.length > 0 && this.selectCard.benefit.forEach(function(n) {
										"" == n && (noti.open("옵션 선택은 필수 입니다."), e = !1)
									}), e && (this.funding.list.push(_.clone(this.selectCard)), this.getTotalAmount(), this.step = 3, this.addCartCheck++)
								} else if (3 == this.step) {
									if (0 == this.rewardDetailData.cpEndStatus) return void noti.open("아직 시작하지 않은 프로젝트 입니다.");
									if (0 == this.funding.list.length && this.funding.spsAmount > 0) return noti.open("리워드를 선택해주세요. <br/>추가후원만으로는 펀딩하실 수 없습니다."), void(this.step = 1);
									if (0 == this.funding.list.length) return void(this.step = 1);
									this.cardBenefitData.forEach(function(e) {
										var t = e.cbfIdx,
											i = e.cbfRemQty,
											a = 0;
										n.funding.list.forEach(function(n) {
											if (n.cbfIdx == t && (a += parseInt(n.qty)) > i) return noti.open("현재 남은 리워드 수량보다 선택하신 리워드의 수량이 많습니다.<br/> 다시 한 번 확인해주세요."), void(confrim = !1)
										})
									});
									var t = this.getBenefitSplit();
									axios.post("/data/reward/funding/info/remaining", t).then(function(e) {
										var i = e.data;
										if ("0000" != i.rCode) return "3000" == i.rCode ? (noti.open(i.rMsg), void n.$nextTick(function() {
											this.cardBenefitData = i.data
										})) : void noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.");
										n.saveBenefit(t)
									})
								}
							},
							getBenefitSplit: function() {
								var n = _.cloneDeep(this.funding);
								return n.list.forEach(function(n) {
									n.sbfUnitPrice = n.cbfAmount
								}), n.list.forEach(function(n) {
									if (n.cpBenefitOptions.length > 0) {
										for (var e = "", t = 0; t < n.benefit.length; t++) e += n.benefit[t], n.benefit.length - 1 != t && (e += ",");
										n.benefit = e
									}
								}), n
							},
							saveBenefit: function(n) {
								var e = this;
								axios.post("/reward/funding/set/benefit", n).then(function(t) {
									window.open("/reward/funding/" + n.id + "/" + e.rewardDetailData.cpType, "_self")
								})
							},
							setPixelAddToCart: function() {
								var n = this.rewardDetailData.cpTitle,
									e = this.cpAliasUrl,
									t = [],
									i = [],
									a = this.funding.list[0],
									s = {
										id: e,
										name: n,
										price: a.cbfAmount * a.qty,
										quantity: 1
									};
								t.push(s);
								var o = {
										ecommerce: {
											currencyCode: "KRW",
											add: {
												products: t
											}
										},
										event: "AddToCart"
									},
									r = {
										id: e,
										name: n,
										item_price: a.cbfAmount * a.qty,
										quantity: 1,
										referrer: document.referrer
									};
								i.push(r), window.pixelCartData = window.pixelCartData || {}, window.pixelCartData = {
									contents: i,
									content_name: n,
									content_ids: [e],
									content_type: "product",
									value: a.cbfAmount * a.qty,
									currency: "KRW"
								}, window.dataLayer = window.dataLayer || [], window.dataLayer.push(o)
							},
							shareBtn: function() {
								this.$emit("shareBtn")
							},
							addFunding: function() {
								$(window).width() < 768 && ($("#rewardAdd").toggle(), $("#rewardAdd").is(":hidden") ? this.toggle = !0 : this.toggle = !1)
							}
						},
						components: {
							numberInput: t(0).default.component()
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n                    \x3c!-- 프로젝트 펀딩하기 - 펀딩하기 --\x3e\n                    <div id="list_wrap" class="common_support">\n                        <div class="common_sub_vi bg_gray">\n                            <div class="container">\n                                <div class="row">\n                                    <div class="col-md-9 m-text-center">\n                                        <div class="common_vi_title webfont2">{{ fundingData.cpTitle }}</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n        \n                        <div class="common_sub_layout">\n                            <div :class="{\'container\' : !isMobile}">\n                                <div class="row not-space">\n                                    <div class="col-md-2">\n                                        <div class="st-tab">\n                                            <ul>\n                                                <template v-if="fundingType == \'0\'">\n                                                    <li :class="{\'active\' : step == 1}" style="cursor: pointer;"><a class="st-tab-a"><i></i>카드/배송정보 입력</a><span></span></li>\n                                                    <li :class="{\'active\' : step == 2}" style="cursor: pointer;"><a class="st-tab-a"><i></i>결제예약확인</a><span></span></li>\n                                                </template>\n                                                <template v-if="fundingType == \'1\'">\n                                                    <li :class="{\'active\' : step == 1}" style="cursor: pointer;"><a class="st-tab-a"><i></i>결제정보 입력</a><span></span></li>\n                                                    <li :class="{\'active\' : step == 2}" style="cursor: pointer;"><a class="st-tab-a"><i></i>결제확인</a><span></span></li>\n                                                </template>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <payment v-if="step == 1 && fundingType == \'0\' && dataConfirm" :funding-data="fundingData" v-on:step-change="stepChange" v-on:set-idx="setIdx"></payment>\n                                    <amount v-if="step == 1 && fundingType == \'1\' && dataConfirm" :funding-data="fundingData" :funding-id="fundingId" :funding-result="fundingResult" v-on:step-change="stepChange" v-on:set-idx="setIdx"></amount>\n                                    <confirm v-if="step == 2 && dataConfirm" :funding-data="fundingData" :funding-type="fundingType" :idx="idx" v-on:step-change="stepChange" v-on:facebook-share="facebookShare"></confirm>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //프로젝트 펀딩하기 - 펀딩하기 --\x3e\n                </div>           \n            ',
						props: {
							paramCpTraining: {
								default: "N"
							},
							fundingId: {
								default: ""
							},
							fundingStep: {
								default: 1
							},
							fundingType: {
								default: ""
							},
							fundingResult: {
								default: {}
							}
						},
						data: function() {
							return {
								memCode: userInfo.memCode,
								step: this.fundingStep,
								fundingData: {},
								dataConfirm: !1,
								idx: "",
								isMobile: !1
							}
						},
						components: {
							payment: t(4).default.component(),
							amount: t(28).default.component(),
							confirm: t(29).default.component()
						},
						created: function() {
							this.load(), $(window).width() < 768 && (this.isMobile = !0)
						},
						methods: {
							load: function() {
								var n = this;
								$(window).scrollTop(0), axios.post("/reward/funding/get/benefit/" + this.fundingId).then(function(e) {
									var t = e.data.rData.data;
									if (n.memCode != t.memCode) return void noti.open("잘못된 접근입니다.", function() {
										window.open("/", "_self")
									});
									n.fundingData = t, n.fundingData.cpTitle = n.fundingData.message, n.dataConfirm = !0
								})
							},
							stepChange: function(n) {
								this.step = n
							},
							setIdx: function(n) {
								this.idx = n
							},
							facebookShare: function() {
								FB.ui({
									method: "share",
									display: "popup",
									href: document.location.origin + "/r/" + this.fundingData.cpAliasUrl + "?utm_source=facebook&utm_medium=share&utm_campaign=" + this.fundingData.cpAliasUrl
								}, function(n) {
									void 0 === n && "" == n.post_id || noti.open("공유되었습니다.")
								})
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div id="paymentInfo">   \n                    \x3c!-- 팝업 --\x3e\n                    <div id="paymentModal" :class="{\'payment-modal\' : type == 2, \'modal\' : type == 2, \'fade\' : type == 2, \'funding-page\' : type == 1}" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                        <div :class="{\'modal-dialog\' : type == 2}" role="document">\n                            <div :class="{\'modal-content\' : type == 2, \'payment-content\' : type == 2}">\n                                <div class="modal-header" v-if="type == 2">\n                                    <div class="payment-title">간편결제 카드</div> \n                                    <div class="close-button">\n                                        <div class="icon icon-close" v-on:click="resetData" data-dismiss="modal" aria-label="Close"></div>\n                                    </div>\n                                </div>\n                                <div :class="{\'modal-body\' : type == 2}">\n\n                                    \x3c!-- 결제정보 --\x3e\n                                    <div :class="{\'payment-area\' : type == 3, \'mt30\' : type == 1, \'payment-background-color\' : (type == 1 && isMobile)}">\n                                        \n                                        \x3c!-- 마이페이지 - 설정 - 간편결제 설정에서는 직접입력 없음 --\x3e\n                                        <template v-if="type != 3">\n                                            <div class="mypage-card-type" :class="{\'type2\' : type == 2}">\n                                                <a href="javascript:void(0)" :class="{\'active\' : paymentType == 1}" v-on:click="paymentTypeChange(1)">\n                                                    <span class="card-button">간편결제</span>\n                                                </a>\n                                                <a href="javascript:void(0)" :class="{\'active\' : paymentType == 2}" v-on:click="paymentTypeChange(2)">\n                                                    <span class="card-button">직접입력</span>\n                                                </a>\n                                            </div>\n                                        </template>\n                                        <template v-if="type == 3">\n                                            <div class="hidden-xs mypage-card-title">카드관리</div>\n                                        </template>\n                                        \n                                        <div class="modal-body-content" :class="{\'container\' : (type == 1 && isMobile)}">\n                                            \x3c!-- 간편결제 --\x3e\n                                            <template v-if="paymentType == 1">\n                                                <template v-if="paymentInfoConfirm">\n                                                    <div class="mypage-card mypage-card-blue" :class="{\'mypage-card-center\' : type == 2}">\n                                                        <div class="title">{{paymentInfo.payCodeName}}카드 ({{paymentInfo.payNum}})</div>\n                                                        <div class="date">등록일:{{paymentInfo.wdate}}</div>\n                                                    </div>\n                                                    <template v-if="type == 3">\n                                                        <div class="mypage-card-button">\n                                                            <div v-on:click="deleteCardConfirm">삭제</div>\n                                                            <div v-on:click="changeCardConfirm">변경</div>\n                                                        </div>\n                                                    </template>\n                                                </template>\n                                                <template v-if="!paymentInfoConfirm">\n                                                    \x3c!-- 빈 카드--\x3e\n                                                    <template v-if="!popupCheck">\n                                                        <div class="mypage-card mypage-card-empty" :class="{\'mypage-card-center\' : type == 2}" v-on:click="openCardPopup">\n                                                            <div class="icon icon-plus"></div>\n                                                        </div>\n                                                        <p class="mypage-card-empty-word" :class="{\'mypage-card-empty-center\' : type == 2}">등록된 카드 정보가 없습니다.</p>\n                                                    </template>\n                                                    <template v-if="popupCheck">\n                                                        <simple-card-info :card-info="simple"></simple-card-info>\n                                                        <p class="noti-word2">* 크라우디는 카드번호를 저장하지 않고, 카드사에서 제공하는 암호화된 정보만을 저장합니다.</p>\n                                                    </template>\n                                                </template>\n                                                \n                                                <hr class="hidden-xs mypage-card-hr" :class="{\'hide\' : (type != 3) && !(type == 1 && !isMobile)}"></hr>\n\n                                                <div class="mypage-card-noti" v-if="(type == 3 && !popupCheck) || (type != 3 && !paymentInfoConfirm && paymentType == 1 && !popupCheck)" :class="{\'mb100\' : type == 3 && paymentInfoConfirm}">\n                                                    <p class="title">[간편결제 안내사항]</p>\n                                                    <ul>\n                                                        <li>간편결제를 위한 카드는 1개만 등록할 수 있습니다.</li>\n                                                        <li>크라우디는 카드 번호를 저장하지 않습니다.</li>\n                                                        <li>카드를 변경하면 기존에 등록된 카드는 삭제됩니다.</li>\n                                                        <li>펀딩한 카드 정보는 마이페이지 내 펀딩한 프로젝트에서 변경할 수 있습니다. </li>\n                                                    </ul>\n                                                </div>\n\n                                                <template v-if="type != 2 && !paymentInfoConfirm">\n                                                    <div>\n                                                        <div class="btn btn-lg btn-primary mypage-card-pay-button mt30 not-pop" v-on:click="openCardPopup">등록하기</div>\n                                                    </div>\n                                                </template>\n                                                \n                                            </template>\n                                            \x3c!-- //간편결제 --\x3e\n\n                                            \x3c!-- 직접입력 --\x3e\n                                            <template v-if="paymentType == 2">\n                                                \x3c!-- 결제정보입력 --\x3e\n                                                <div v-if="type == 1 && fundingPageConfirm">\n                                                    <div class="funding-page-subs mt30 mb20">결제정보 입력</div>\n                                                </div>\n                                                \n                                                \x3c!-- 카드정보 --\x3e\n                                                <template v-if="type == 1">\n                                                    \x3c!-- 일반 카드 UI --\x3e\n                                                    <direct-card-info :card-info="direct" :funding-page-confirm="fundingPageConfirm"></direct-card-info>\n                                                </template>\n                                                <template v-if="type != 1">\n                                                    <direct-card-info :card-info="direct"></direct-card-info>\n                                                    <p class="noti-word2">* 크라우디는 카드번호를 저장하지 않고, 카드사에서 제공하는 암호화된 정보만을 저장합니다.</p>\n                                                </template>\n                                                \x3c!-- //카드정보 --\x3e\n                                                \n                                                \x3c!-- //결제정보입력 --\x3e\n                                            </template>\n                                            \x3c!-- //직접입력 --\x3e\n\n                                            \x3c!-- 유의사항 --\x3e\n                                            <template v-if="(type == 1 && ((paymentType == 1 && paymentInfoConfirm) || (paymentType == 2))) || (type == 2 && (paymentType == 1 && paymentInfoConfirm && payNowConfirm && !popupCheck)) || (type == 2 && (paymentType == 2 && payNowConfirm))">\n                                                <div class="mypage-card-noti" v-if="!isMobile && paymentType != 2">\n                                                    <p class="title">[유의사항]</p>\n                                                    <ul>\n                                                        <li>결제실행일에 카드 한도초과, 이용정지, 잔액부족 등의 사유로 <br/> 결제가 실패할 수 있습니다. 결제수단이 유효한지 확인하세요.</li>\n                                                    </ul>\n                                                </div>\n                                                \x3c!-- p v-if="isMobile || paymentType == 2" class="noti-word2">* 결제실행일에 카드 한도초과, 이용정지, 잔액부족 등의 사유로 <br/> 결제가 실패할 수 있습니다. 결제수단이 유효한지 확인하세요.</p --\x3e\n                                                <p v-if="isMobile || paymentType == 2" class="noti-word2">* 결제실행일에 카드 한도초과, 이용정지, 잔액부족 등의 사유로 결제가 실패할 수 있습니다. 결제수단이 유효한지 확인하세요.</p>\n                                            </template>\n                                            \x3c!-- //유의사항 --\x3e\n\n                                            \x3c!-- 결제자 휴대폰 번호 --\x3e\n                                            <member-certi v-if="type == 1 && ((paymentType == 1 && paymentInfoConfirm) || (paymentType == 2))" v-on:set-mobile-no="setMobileNo"></member-certi>\n                                            \x3c!-- //결제자 휴대폰 번호 --\x3e\n\n                                            \x3c!-- 정보동의 --\x3e\n                                            <div v-if="type == 2 && ((paymentType == 1 && paymentInfoConfirm) || paymentType == 2)" class="mypage-card-agree">\n                                                <label for="pay_info_consent" class="agree-title">\n                                                    <div class="agree-text">정보동의</div>\n                                                </label> \n                                                <div class="pay_info_content">\n                                                    <label for="pay_info_content" class="checkbox-inline agree-content">\n                                                        <input type="checkbox" name="pay_info_content" id="pay_info_content" v-model="agree"><span class="label"></span><span class="label-text agree-text">결제에 필요한 정보 제공에 동의합니다.</span>\n                                                    </label> \n                                                    <span class="label-text agree-text agree-popup agree-popup" :class="{\'mt5\' : type == 2}" v-on:click="policy(1)">(보기)</span>\n                                                </div>\n                                            </div>\n                                            \x3c!-- //정보동의 --\x3e\n\n                                            \x3c!-- 간편결제 카드 등록 : 직접입력 + --\x3e\n                                            <div v-if="paymentType == 2 && type != 3" class="mypage-card-agree mt20">\n                                                <label for="pay_add_content" class="agree-title">\n                                                    <div class="agree-text">간편결제 카드 등록 (선택)</div>\n                                                </label> \n                                                <div>\n                                                    <label for="pay_add_content" class="checkbox-inline agree-content">\n                                                        <input type="checkbox" name="pay_add_content" id="pay_add_content" v-model="simpleAgree"><span class="label"></span><span class="label-text agree-text">이 카드를 간편결제 카드로 설정하겠습니다. <br /> &nbsp; 현재 등록된 카드정보는 삭제됩니다.</span>\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            \x3c!-- //간편결제 카드 등록 --\x3e\n\n                                            <template v-if="type == 2">\n                                                <template v-if="paymentType == 1">\n                                                    <template v-if="paymentInfoConfirm">\n                                                        <div class="btn btn-lg btn-block btn-primary mypage-card-pay-button mt30" :class="{\'not-allowed-btn\' : !agree, \'mb50\' : isMobile}" v-on:click="openPinModalFor">{{buttonText}}</div>     \n                                                    </template>\n                                                    <template v-if="!paymentInfoConfirm">\n                                                        <div class="btn btn-lg btn-block btn-primary mypage-card-pay-button" :class="{\'mb50\' : isMobile}" v-on:click="openCardPopup">등록하기</div>\n                                                    </template>\n                                                </template>\n                                                <template v-if="paymentType == 2">\n                                                    <div class="btn btn-lg btn-block btn-primary mypage-card-pay-button mt30" :class="{\'not-allowed-btn\' : !agree, \'mb50\' : isMobile}" v-on:click="openPinModalFor">{{buttonText}}</div>\n                                                </template>\n                                            </template>\n                                        </div>\n                                    </div>\n                                    \x3c!-- //결제정보 --\x3e\n                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <template v-if="type == 1">\n                        <div :class="{\'funding-page\' : type == 1}">\n                            <template v-if="(paymentType == 1 && paymentInfoConfirm) || paymentType == 2">\n                                <template v-if="deliveryCheck">\n                                    <div class="funding-page-title mt60" :class="{\'container\' : isMobile}">\n                                        <div class="funding-page-subs">배송정보 입력</div> \n                                        <div class="mypage-card-agree mt10">\n                                            <label for="pay_same_consent" class="checkbox-inline agree-content">\n                                                <input v-model="phoneCheck" type="checkbox" name="pay_same_consent" id="pay_same_consent"><span class ="label"></span><span class="label-text agree-text">회원 정보와 동일</span>\n                                            </label>\n                                        </div> \n                                        <div class="funding-page-area mt10">\n                                            <label for="sendName">받는 사람</label> \n                                            <input v-model="spsRsName" type="text" id="sendName" name="sendName" class="funding-page-area-input">\n                                        </div>\n\n                                        <div class="funding-page-area mt20">\n                                            <label for="sendMobileNo">받는 사람 번호</label> \n                                            <input v-model="spsRsMobileno" minlength="10" maxlength="11" type="tel" id="sendMobileNo" name="sendMobileNo" class="funding-page-area-input" autocomplete="new-password" pattern="[0-9]*" inputmode="numeric" ref="input">\n                                        </div>\n\n                                        <div class="funding-page-area mt20">\n                                            <label for="zipCode">우편번호</label> \n                                            <div class="funding-zip">\n                                                <input v-on:click="postOpen" v-model="address.postNum" type="tel" id="zipCode" name="zipCode" class="funding-page-area-input funding-page-area-zip" readonly="readonly">\n                                                <span v-on:click="postOpen" class="funding-area-zip-span"></span> \n                                            </div>\n                                        </div>\n\n                                        <div class="funding-page-area mt20">\n                                            <label for="sendAddress" class="">주소</label>\n                                            <input v-on:click="postOpen" v-model="address.address1" type="text" name="sendAddress" class="funding-page-area-input" readonly="readonly" placeholder="주소를 검색해주세요.">\n                                            <input v-model="spsAddr2" type="text" name="sendAddress" class="funding-page-area-input mt10" placeholder="상세 주소를 입력해주세요.">\n                                        </div>\n\n                                        <div class="mypage-card-agree mt10">\n                                            <label for="delivery_post_check" class="checkbox-inline agree-content">\n                                                <input v-model="myAddressSave" type="checkbox" name="delivery_post_check" id="delivery_post_check"><span class="label"></span><span class="label-text agree-text">내 배송지 저장</span>\n                                            </label> \n                                        </div>\n\n                                        <div class="funding-page-area mt10">\n                                            <label for="delivery_person">진행자에게 요청사항(선택사항)</label> \n                                            <textarea v-model="spsMiscinfo" id="delivery_person" class="funding-page-area-input" rows="3" cols="50"></textarea>\n                                        </div>\n                                    </div>\n                                </template>\n                                \x3c!-- //배송정보 입력 --\x3e\n\n                                \x3c!-- 정보동의 --\x3e\n                                <div class="mypage-card-agree mt30" :class="{\'container\' : isMobile}">\n                                    <label for="pay_info_consent" class="agree-title">\n                                        <div class="agree-text">정보동의</div>\n                                    </label> \n                                    <div>\n                                        <label for="pay_info_consent" class="checkbox-inline agree-content">\n                                            <input type="checkbox" name="pay_info_consent" id="pay_info_consent" v-model="agree"><span class="label"></span><span class="label-text agree-text">결제에 필요한 정보 제공에 동의합니다.</span>\n                                        </label>\n                                        <span class="label-text agree-text agree-popup" v-on:click="policy(1)">(보기)</span>\n                                    </div>\n                                     <div>\n                                        <label for="pay_reward_consent" class="checkbox-inline agree-content">\n                                            <input type="checkbox" name="pay_reward_consent" id="pay_reward_consent" v-model="agree2"><span class="label"></span><span class="label-text agree-text">리워드 제공에 필요한 정보제공에 동의합니다.</span>\n                                        </label>\n                                        <span class="label-text agree-text agree-popup" v-on:click="policy(2)">(보기)</span>\n                                    </div>\n                                </div>\n                                \x3c!-- //정보동의 --\x3e\n                                \n                                <div :class="{\'container\' : isMobile}">\n                                    <div class="btn btn-lg btn-primary mypage-card-pay-button mt30 not-pop" v-on:click="openPinModalFor">결제 예약 완료</div>\n                                </div>\n                            </template>\n                        </div>\n                    </template>\n\n                    \x3c!-- 카드정보 입력 팝업 --\x3e\n                    <div id="cardModal" class="payment-modal modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                        <div class="modal-dialog" role="document">\n                            <div class="modal-content payment-content">\n                                <div class="modal-header">\n                                    <div class="payment-title">간편결제 카드{{cardPopupTitle}}</div> \n                                    <div class="close-button">\n                                        <div class="icon icon-close" v-on:click="cardModalHide"></div>\n                                    </div>\n                                </div>\n                                <div class="modal-body">\n                                    <div class="modal-body-content">\n                                        <p class="noti-word1 mt0 mb15">리워드 결제에 사용할 카드를 등록하세요.</p>\n                                        \x3c!-- 카드정보 --\x3e\n                                        <simple-card-info :card-info="simple" :refresh-confirm="refreshConfirm" v-on:set-refresh-confirm="setRefreshConfirm"></simple-card-info>\n                                        \x3c!-- //카드정보 --\x3e\n                                        <p class="noti-word2 mb30">* 크라우디는 카드번호를 저장하지 않고, 카드사에서 제공하는 암호화된 정보만을 저장합니다.</p>\n                                        <a class="mb100 btn btn-lg btn-block btn-primary" :class="{\'not-allowed-btn\' : !cardInfoConfirm}" v-on:click="keepPaymentInfo">카드 {{cardPopupTitle}}</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //카드정보 입력 팝업 --\x3e\n\n                    \x3c!-- 핀번호 입력 팝업 --\x3e\n                    <pin-modal :type="type" :pin-type="pinType" :pin-step="pinStep" :pin-reset="pinReset" v-on:save-payment-info="savePaymentInfo" v-on:change-payment-info="changePaymentInfo" v-on:pay-reserve-finish="payReserveFinish" v-on:reset-pin="resetPin"></pin-modal>\n                    \x3c!-- //핀번호 입력 팝업 --\x3e\n\n                    \x3c!-- 결제사 정보 제공 약관 --\x3e\n                    <div class="modal fade modal-primary" id="privacyCardPopup" role="dialog" tabindex="-1">\n                        <div class="modal-dialog">\n                            <div class="modal-content">\n                                <div class="modal-header">\n                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                                </div>\n                                <div class="modal-body">\n                                    <h4 class="blue-800 text-center mb20">정보 제공 약관 보기</h4>\n                                    <ol>\n                                        <li>1. 귀하가 신청하신 신용카드 정기과금 결제는 나이스정보통신(주)에서 제공하는 서비스로, 귀하의 신용카드 결제내역에는 이용가맹점이 NICE로 표기됩니다. 또한, 나이스정보통신㈜는 정기과금 결제대행만 제공하므로, 정기과금 결제신청 및 해지 등 모든 업무는 해당 인터넷 상점을 통해 직접 요청하셔야 합니다.</li>\n                                        <li>2. 나이스정보통신㈜는 귀하의 본 신청과 관련한 거래내역을 e-mail로 통보 드리며, 당사 홈페이지 (<a href="https://www.nicepay.co.kr" target="_blank">https://home.nicepay.co.kr</a>)에서도 조회서비스를 제공합니다.</li>\n                                        <li>3. 나이스정보통신㈜는 조회 등의 기본 서비스제공을 위해 필요한 최소 정보(성명, 이메일)만을 보관하고 있습니다.</li>\n                                        <li>4. 회사는 리워드 제공 및 리워드 제공을 위해 필요한 행위를 하는 데에 있어 필요한 개인 정보를 회사가 제공하는 ‘개인정보 수집 및 이용 동의서’에 대한 확인 및 동의를 참여자로부터 받아 진행자에게 제공합니다. (CROWDY 이용약관(리워드) 20조)</li>\n                                    </ol>\n                                </div>\n                                <div class="modal-footer">\n                                    <div class="row row-mobile-n">\n                                        <a class="modalBlueBtn" data-dismiss="modal">확인</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //결제사 정보 제공 약관 --\x3e\n\n                    \x3c!-- 결제사 정보 제공 약관 --\x3e\n                    <div class="modal fade modal-primary" id="privacyDataPopup" role="dialog" tabindex="-1">\n                        <div class="modal-dialog">\n                            <div class="modal-content">\n                                <div class="modal-header">\n                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                                </div>\n                                <div class="modal-body">\n                                    <h4 class="blue-800 text-center mb20">제공 정보</h4>\n                                    <ol>\n                                        <li>대상 - 프로젝트 참여자</li>\n                                        <li>제공받는 자 - 프로젝트 진행자</li>\n                                        <li>제공 목적 - 리워드 정보 확인 및 배송, 프로젝트와 관련된 공지, 민원처리</li>\n                                        <li>제공 정보 - 참여자 이름, 휴대폰 번호, ID(이메일), 리워드 정보, 배송지 주소(수취인이 다를 경우 수취인의 정보), 수취인의 개인통과고유부호</li>\n                                        <li>보유 및 이용기간 - 재화 또는 서비스의 제공 목적이 달성된 후 파기(단, 관계법령에 정해진 규정에 따라 법정기간동안 보관) / 진행자는 어떠한 경우에도 참여자의 정보를 마케팅 또는 프로모션 목적으로 활용할 수 없음</li>\n                                        <a href="https://www.ycrowdy.com/crowdy/term?menu=4" class="crowdy-color-blue" target="_blank"><li>▶ 개인정보처리방침 바로가기</li></a>\n                                    </ol>\n                                </div>\n                                <div class="modal-footer">\n                                    <div class="row row-mobile-n">\n                                        <a class="modalBlueBtn" data-dismiss="modal">확인</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //결제사 정보 제공 약관 --\x3e\n                </div>\n            ',
						props: ["type", "payNowConfirm", "spsIdx", "spsTotAmount", "deliveryCheck", "saveData"],
						data: function() {
							return {
								paymentInfo: {},
								paymentInfoConfirm: !1,
								paymentType: 1,
								popupCheck: !1,
								agree: !1,
								agree2: !1,
								simpleAgree: !1,
								simple: {
									cardNoPart: [],
									cardNo: "",
									cardPw: "",
									expMonth: "",
									expYear: "",
									idNo: "",
									memCode: userInfo.memCode
								},
								direct: {
									cardNoPart: [],
									cardNo: "",
									cardPw: "",
									expMonth: "",
									expYear: "",
									idNo: "",
									memCode: userInfo.memCode
								},
								pinType: 1,
								pinStep: 1,
								fundingPageConfirm: !0,
								refreshConfirm: !1,
								cardPopupTitle: "등록",
								buttonText: "결제카드 변경",
								spsRsMobileno: "",
								spsRsName: "",
								spsAddr2: "",
								spsMbMobileno: "",
								spsMiscinfo: "",
								myAddressSave: "",
								certiCheck: 1,
								phoneCheck: !1,
								address: {
									postNum: "",
									address1: ""
								},
								isMobile: !1,
								pinReset: !1
							}
						},
						created: function() {
							this.getPaymentInfo(), $(window).width() < 768 && (this.isMobile = !0, 1 == this.type ? ($("div.container").css("padding", "0"), this.fundingPageConfirm = !1) : 3 == this.type && this.$nextTick(function() {
								$("#my-page > div > div.common_sub_layout > div.container").css("background-color", "#f7f8fa")
							})), 2 == this.type ? this.payNowConfirm ? this.buttonText = "즉시결제" : this.buttonText = "결제카드 변경" : 1 == this.type && (this.buttonText = "결제예약")
						},
						computed: {
							postNum: function() {
								return this.address.postNum
							},
							spsAddr1: function() {
								return this.address.address1
							},
							cardInfoConfirm: function() {
								var n = {};
								return n = 1 == this.paymentType ? _.clone(this.simple) : _.clone(this.direct), n.cardNo = n.cardNoPart.join(""), !(n.cardNo.length < 15) && (!(n.cardPw.length < 2) && (!(n.expMonth.length < 2 || n.expYear.length < 2) && !(n.idNo.length < 6)))
							}
						},
						components: {
							memberCerti: t(26).default.component(),
							simpleCardInfo: t(5).default.component(),
							directCardInfo: t(5).default.component(),
							pinModal: t(27).default.component()
						},
						watch: {
							paymentType: function() {
								this.agree = !1, this.agree2 = !1, this.simpleAgree = !1, this.setPaymentInfo()
							},
							paymentInfoConfirm: function(n) {
								this.changeCardPopupTitle(n), this.setPaymentInfo()
							},
							phoneCheck: function() {
								this.sameInfo()
							},
							payNowConfirm: function(n) {
								2 == this.type && (this.buttonText = n ? "즉시결제" : "결제카드 변경")
							}
						},
						methods: {
							postOpen: function() {
								post.open(this)
							},
							changeCardPopupTitle: function(n) {
								this.cardPopupTitle = n ? "변경" : "등록"
							},
							paymentTypeChange: function(n) {
								this.paymentType = n
							},
							getPaymentInfo: function() {
								var n = this;
								$(".page-loader-more").fadeIn(""), axios.post("/data/reward/payment/info", {
									memCode: userInfo.memCode
								}).then(function(e) {
									if ($(".page-loader-more").fadeOut(""), "0000" != e.data.rCode) return void noti.open(e.data.rMsg);
									var t = e.data.rData;
									t.payIdxCount > 0 ? (t.memCode = userInfo.memCode, n.paymentInfo = t, n.paymentInfoConfirm = !0) : n.paymentInfoConfirm = !1, n.agree = !1, n.agree2 = !1, n.changeCardPopupTitle(n.paymentInfoConfirm), 1 == n.type && n.setPaymentInfo()
								})
							},
							savePaymentInfo: function(n) {
								var e = this;
								$(".page-loader-more").fadeIn("");
								var t = "";
								t = 1 == this.paymentType ? this.simple.cardNoPart[3] : this.direct.cardNoPart[3];
								var i = {
									payPwd: n,
									memCode: userInfo.memCode,
									payNum: t
								};
								axios.post("/data/reward/payment/save", i).then(function(t) {
									if ($(".page-loader-more").fadeOut(""), "0000" == t.data.rCode)
										if ($("#pinModal").modal("hide"), 2 == e.type && 2 == e.paymentType && e.simpleAgree) e.changePaymentInfo(n);
										else if (1 == e.type && (1 == e.paymentType && e.paymentInfoConfirm || 2 == e.paymentType)) e.payReserveFinish(n);
									else {
										var i = "카드 정보가 정상적으로 등록되었습니다.";
										e.paymentInfoConfirm && (i = "카드 정보가 정상적으로 변경되었습니다."), 2 != e.type && ($("html").scrollTop($(".mypage-card").position().top), $("#cardModal").modal("hide")), e.resetData(), noti.open(i, e.getPaymentInfo)
									} else {
										if (!(t.data.rCode = "4000")) return void noti.open(t.data.rMsg);
										noti.open(t.data.rMsg), $("#pinModal").modal("hide")
									}
								})
							},
							policy: function(n) {
								1 == n ? $("#privacyCardPopup").modal("show") : $("#privacyDataPopup").modal("show")
							},
							openCardPopup: function() {
								2 == this.type ? this.popupCheck ? (this.pinType = 1, this.pinStep = 1, this.keepPaymentInfo()) : this.popupCheck = !0 : (this.simple = _.clone({
									cardNoPart: [],
									cardNo: "",
									cardPw: "",
									expMonth: "",
									expYear: "",
									idNo: "",
									memCode: userInfo.memCode
								}), this.refreshConfirm = !0, this.pinType = 1, this.pinStep = 1, $("#cardModal").modal("show"))
							},
							keepPaymentInfo: function() {
								var n = this,
									e = {};
								return e = 1 == this.paymentType ? _.clone(this.simple) : _.clone(this.direct), e.cardNo = e.cardNoPart.join(""), e.cardNo.length < 15 ? void noti.open("카드 번호를 입력해주세요.") : e.cardPw.length < 2 ? void noti.open("카드 비밀번호를 입력해주세요.") : e.expMonth.length < 2 || e.expYear.length < 2 ? void noti.open("유효기간을 입력해주세요.") : e.idNo.length < 6 ? void noti.open("생년월일 또는 사업자등록번호를 입력해주세요.") : ($(".page-loader-more").fadeIn(""), void axios.post("/data/reward/payment/keep", e).then(function(e) {
									if ($(".page-loader-more").fadeOut(""), "0000" == e.data.rCode) {
										var t = e.data.rData;
										if ("F100" != t.resultCode) {
											var i = t.resultMsg;
											"F112" == t.resultCode ? noti.open("유효하지 않은 카드번호를 입력하셨습니다. <br />카드 번호를 다시 확인해주세요.") : "F113" == t.resultCode ? "비밀번호틀림" == i ? noti.open("카드 비밀번호를 다시 입력해주세요. <br /><br />연속해서 틀릴 경우, <br />카드사에 따라 결제가 되지 않을 수 있습니다.") : "비밀번호 회수초과" == i ? noti.open("카드 비밀번호 오류 횟수가 초과되었습니다. <br />다른 결제 카드(체크, 신용)를 이용해주세요.") : "유효기간오류" == i ? noti.open("잘못된 유효기간을 입력하셨습니다. <br />유효기간을 다시 확인해주세요.") : "주민OR사업자등록번호오류" == i ? noti.open("잘못된 생년월일 또는 사업자등록번호를 입력하셨습니다. <br />다시 확인해주세요.") : noti.open("카드정보를 다시 확인해주세요.<br />" + i) : "3021" == t.resultCode && "유효기간오류" == i ? noti.open("잘못된 유효기간을 입력하셨습니다. <br />유효기간을 다시 확인해주세요.") : noti.open("카드정보를 다시 확인해주세요.<br />" + i)
										} else 2 != n.type || 2 != n.paymentType || n.simpleAgree ? 1 != n.type || 2 != n.paymentType || n.simpleAgree ? (n.pinType = 1, n.pinStep = 1, n.openPinModal()) : ($("#cardModal").modal("hide"), n.payReserveFinish()) : ($("#cardModal").modal("hide"), n.changePaymentInfo())
									} else noti.open(e.data.rMsg)
								}))
							},
							changeConfirm: function() {
								this.dataConfirm = !0
							},
							openPinModal: function() {
								this.pinReset && (this.pinReset = !1), $("#pinModal").modal("show")
							},
							setPaymentInfo: function() {
								var n = {
									paymentType: this.paymentType
								};
								1 == this.paymentType ? n.paymentInfoConfirm = this.paymentInfoConfirm : n.direct = this.direct, this.$emit("set-payment-info", n)
							},
							setMobileNo: function(n) {
								this.certiCheck = n.certiCheck, this.spsMbMobileno = n.mobileNo
							},
							deleteCardConfirm: function() {
								var n = this;
								noti.open("카드 정보를 삭제하시겠습니까?", n.deleteCard, !0)
							},
							deleteCard: function(n) {
								var e = this;
								$(".modal-backdrop").remove(), $(".page-loader-more").fadeIn(""), axios.post("/data/reward/payment/delete", this.paymentInfo).then(function(t) {
									if ($(".page-loader-more").fadeOut(""), "0000" != t.data.rCode) return void noti.open(t.data.rMsg);
									void 0 != n ? e.savePaymentInfo(n) : qst.open("카드 정보가 삭제되었습니다.", function() {
										e.getPaymentInfo()
									})
								})
							},
							changeCardConfirm: function() {
								var n = this;
								noti.open("카드를 변경하시겠습니까?", n.openCardPopup, !0)
							},
							openPinModalFor: function() {
								if (this.deliveryCheck) {
									if (_.size(this.spsRsName) < 1) return void noti.open("받는 사람을 입력해 주세요.");
									if (_.size(this.spsRsMobileno) < 1) return void noti.open("받는 사람의 휴대폰 번호를 입력해 주세요.");
									if (_.size(this.address.postNum) < 1 || _.size(this.address.address1) < 1) return void noti.open("주소를 입력해 주세요.");
									if (_.size(this.spsAddr2) < 1) return void noti.open("상세 주소를 입력해 주세요.")
								}
								if (!this.agree) return void noti.open("결제에 필요한 정보 제공에 동의해야 " + this.buttonText + " 진행이 가능합니다.");
								if (1 == this.type && !this.agree2) return void noti.open("리워드 제공에 필요한 정보 제공에 동의해야 " + this.buttonText + " 진행이 가능합니다.");
								if (1 == this.type && 3 != this.certiCheck) return void noti.open("휴대폰번호를 인증해주세요.");
								if (1 == this.paymentType) {
									if (!this.paymentInfoConfirm) return void noti.open("간편결제 카드를 먼저 등록해주세요.");
									if (3 == this.type) noti.open("현재 등록된 카드 정보를 삭제하고 새로운 카드 정보를 등록하시겠습니까?", this.setPinType, !0);
									else {
										if (1 == this.type && "Y" == this.saveData.sponsorData.cpAdultType && this.isChild(this.paymentInfo.payInfo)) return void noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다.");
										this.setPinType()
									}
								} else {
									if (1 == this.type && "Y" == this.saveData.sponsorData.cpAdultType && this.isChild(this.direct.idNo)) return void noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다.");
									this.keepPaymentInfo()
								}
							},
							isChild: function(n) {
								if (6 == _.size(n)) {
									var e = 1 * n.slice(0, 2),
										t = n.slice(-4);
									return e < 21 && e > 1 || 1 == e && t > moment().format("MMDD")
								}
								return !1
							},
							setPinType: function() {
								this.pinType = 2, this.pinStep = 1, this.openPinModal()
							},
							changePaymentInfo: function(n) {
								var e = this,
									t = "N",
									i = "결제카드 변경이";
								this.payNowConfirm && (t = "Y", i = "결제가");
								var a = "",
									s = "N";
								this.simpleAgree && (s = "Y", a = "간편결제 카드 등록 및 ");
								var o = "";
								2 == this.paymentType && (o = this.direct.cardNoPart[3]);
								var r = {
									paymentType: this.paymentType,
									memCode: userInfo.memCode,
									paymentInfo: {
										payPwd: n
									},
									payConfirm: t,
									spsIdx: this.spsIdx,
									paymentSaveConfirm: s,
									payNum: o,
									spsTotAmount: this.spsTotAmount,
									memName: userInfo.name
								};
								$(".page-loader-more").fadeIn(""), axios.post("/data/reward/funding/change/payment", r).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (noti.open(a + i + " 정상적으로 이루어졌습니다."), $("#pinModal").modal("hide"), e.$emit("reload-funding-list")) : "4004" == n.data.rCode ? ($("#pinModal").modal("hide"), noti.open(n.data.rMsg), e.getPaymentInfo()) : noti.open(n.data.rMsg)
								})
							},
							cardModalHide: function() {
								$("#cardModal").modal("hide")
							},
							setRefreshConfirm: function(n) {
								this.refreshConfirm = n
							},
							payReserveFinish: function(n) {
								if (3 != this.certiCheck) return void noti.open("휴대폰번호를 인증해주세요.");
								var e = "N";
								this.simpleAgree && (e = "Y");
								var t = "";
								2 == this.paymentType && (t = this.direct.cardNoPart[3]);
								var i = {
									paymentType: this.paymentType,
									memCode: userInfo.memCode,
									paymentInfo: {
										payPwd: n
									},
									paymentSaveConfirm: e,
									payNum: t,
									myAddressSave: this.myAddressSave,
									spsPostnum: this.postNum,
									spsAddr1: this.spsAddr1,
									spsAddr2: this.spsAddr2,
									payPwd: n,
									spsMbMobileno: this.spsMbMobileno,
									spsRsMobileno: this.spsRsMobileno,
									spsMiscinfo: this.spsMiscinfo,
									spsRsName: this.spsRsName
								};
								this.payConfirm(i)
							},
							payConfirm: function(n) {
								var e = this;
								n.spsAmount = this.saveData.sponsorData.spsAmount, n.spsTotAmount = this.saveData.sponsorData.spsTotAmount, n.benefitList = this.saveData.sponsorData.benefitList, n.cpCode = this.saveData.sponsorData.cpCode, n.payDiv = "1", $(".page-loader-more").fadeIn(""), axios.post("/set/reward/funding/confirm", n).then(function(n) {
									var t = n.data;
									$(".page-loader-more").fadeOut(""), "0000" == t.rCode ? ($("#pinModal").modal("hide"), e.$emit("pay-reserve-finish", t)) : "3000" == t.rCode ? noti.open(t.rMsg, function() {
										window.open("/r/" + e.fundingData.cpAliasUrl, "_self")
									}) : "4004" == t.rCode ? (noti.open(t.rMsg), $("#pinModal").modal("hide"), $("html").scrollTop($(".mypage-card").position().top), e.getPaymentInfo()) : noti.open(t.rMsg)
								})
							},
							sameInfo: function() {
								var n = this;
								this.phoneCheck ? axios.post("/data/member/info", {
									memCode: userInfo.memCode
								}).then(function(e) {
									var t = e.data.rData;
									"" != n.spsMbMobileno && (n.spsRsMobileno = n.spsMbMobileno), n.spsRsName = userInfo.name, n.address.postNum = "NULL" == t.memSpsPostNum ? "" : t.memSpsPostNum, n.address.address1 = "NULL" == t.memSpsAddr1 ? "" : t.memSpsAddr1, n.spsAddr2 = "NULL" == t.memSpsAddr2 ? "" : t.memSpsAddr2
								}) : (n.spsRsMobileno = "", n.spsRsName = "", n.address.postNum = "", n.address.address1 = "", n.spsAddr2 = "")
							},
							resetData: function() {
								var n = {
									cardNoPart: [],
									cardNo: "",
									cardPw: "",
									expMonth: "",
									expYear: "",
									idNo: "",
									memCode: userInfo.memCode
								};
								this.simple = _.clone(n), this.direct = _.clone(n), this.paymentType = 1, this.popupCheck = !1, this.agree = !1, this.agree2 = !1, this.simpleAgree = !1
							},
							resetPin: function(n, e) {
								n && (this.pinReset = !0), this.pinStep = e
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\t\n\t\t\t\t\t\x3c!-- 결제자 휴대폰 번호 --\x3e\n                    <div class="form-group row-mobile-n">\n                        <label for="delivery_mobile" class="col-sm-12 control-label funding-page-area">\n                            <label class="text-left">\n                                결제자 휴대폰 번호\n                            </label>\n                        </label>\n                        <div class="col-sm-6">\n                            <div class="row row-mobile-n">\n                                <div class="col-xs-8 col-sm-8">\n                                    <number-input :type="\'tel\'" class="form-control funding-page-area-input" :num="mobileNo" v-model="mobileNo" minlength="10" maxlength="11" :disabled="certiCheck == 3"></number-input>\n                                </div>\n                                <span class="crowdy-funding-certiBtn" v-on:click="phoneCertiRequest">{{certiBtnWord}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //결제자 휴대폰 번호 --\x3e\n\n                    \x3c!-- 인증 입력 부분 --\x3e\n                    <div class="form-group row-mobile-n funding-page-area mb0" v-if="certiNumDisplay">\n                        <div class="col-sm-6">\n                            <div class="row row-mobile-n">\n                                <div class="col-xs-7 col-sm-8">\n                                    <number-input :type="\'tel\'" class="form-control funding-page-area-input" :num="mobileRequest.authNo" v-model="mobileRequest.authNo" maxlength="11"></number-input>\n                                </div>\n                                <span>{{ time }}</span>  \n                                <span class="crowdy-funding-certiBtn" v-on:click="mobileAuth">확인</span>\n                            </div>    \n                            <p class="noti-word2 crowdy-color-blue mb0">통신사의 사정에 따라 문자 수신이 다소 늦어질 수 있습니다.</p>\n                        </div>\n                    </div>\n                    \x3c!-- //인증 입력 부분 --\x3e\n\n                    <form name="form_chk" method="post">\n                        <input type="hidden" name="m" value="checkplusSerivce">              \x3c!-- 필수 데이타로, 누락하시면 안됩니다. --\x3e\n                        <input type="hidden" name="EncodeData" id="encodeData" value="">     \x3c!-- 위에서 업체정보를 암호화 한 데이타입니다. --\x3e\n                        <input type="hidden" name="param_r1" value="accountSetting.authResult">\n                        <input type="hidden" name="param_r2" value="">\n                        <input type="hidden" name="param_r3" value="">\n                    </form>\n\t\t\t\t</div>\n\t\t\t',
						props: [],
						data: function() {
							return {
								certiCheck: 1,
								mobileNo: "",
								mobileRequest: {
									mobileNo: "",
									reqSeq: "",
									authNo: ""
								},
								certiBtnWord: "인증요청",
								certiNumDisplay: !1,
								time: "5:00",
								timerStart: !1,
								timeOut: !1,
								isCntdownRestart: !1,
								timer: {}
							}
						},
						created: function() {
							this.load()
						},
						components: {
							numberInput: t(0).default.component()
						},
						watch: {
							certiCheck: function() {
								1 == this.certiCheck ? this.certiBtnWord = "인증요청" : 2 == this.certiCheck ? this.certiBtnWord = "재요청" : this.certiBtnWord = "번호변경", this.setMobileNo()
							}
						},
						methods: {
							setMobileNo: function() {
								var n = {
									mobileNo: this.mobileNo,
									certiCheck: this.certiCheck
								};
								this.$emit("set-mobile-no", n)
							},
							load: function() {
								var n = this;
								axios.post("/data/member/certi/info", {
									memCode: userInfo.memCode
								}).then(function(e) {
									if ("0000" != e.data.rCode) return void noti.open(e.data.rMsg);
									var t = e.data.rData;
									null != t.memTelNo && "" != t.memTelNo ? (n.mobileNo = t.memTelNo, n.certiCheck = 3) : n.certiCheck = 1, n.setMobileNo()
								})
							},
							phoneCertiRequest: function() {
								var n = this;
								if (userInfo.loginConfirm()) {
									if (3 == n.certiCheck) return void(n.certiCheck = 1);
									if (n.mobileNo.length < 10) return void noti.open("휴대폰 번호를 모두 입력해 주세요.");
									n.mobileRequest.mobileNo = n.mobileNo, n.mobileRequest.authNo = "", n.isCntdownRestart = !0, axios.post("/auth/mobile", this.mobileRequest).then(function(e) {
										if (!e.data) return void noti.open("인증번호 수신 서비스 오류로 인해 인증을 하실 수 없습니다. 문제를 해결 중이니 잠시 후 다시 시도해주세요. 이용에 불편을 드려서 죄송합니다.");
										2 == n.certiCheck && noti.open("인증번호가 다시 전송되었습니다."), n.mobileRequest.reqSeq = e.data, n.certiNumDisplay = !0, n.certiCheck = 2, n.timerStart = !0, n.countdown(n.countdownTimeOut)
									})
								}
							},
							mobileAuth: function() {
								var n = this;
								if (n.mobileRequest.mobileNo != n.mobileNo) return noti.open("다시 인증해주세요."), n.certiCheck = 1, void(n.certiNumDisplay = !1);
								axios.post("/auth/mobile/result", this.mobileRequest).then(function(e) {
									if (clearTimeout(n.timer), n.timerStart = !1, !e.data) return void noti.open("인증번호가 유효하지 않습니다.");
									n.certiSave(), noti.open("휴대폰 인증이 완료되었습니다.")
								})
							},
							certiSave: function() {
								var n = this,
									e = {
										memCode: userInfo.memCode,
										memTelNo: n.mobileNo
									};
								axios.post("/data/member/sms-certi", e).then(function(e) {
									if ("0000" != e.data.rCode) return void noti.open(e.data.rMsg);
									n.certiNumDisplay = !1, n.initData()
								})
							},
							initData: function() {
								this.time = "5:00", this.timerStart = !1, this.timeOut = !1, this.isCntdownRestart = !0, this.timer = {}, this.certiCheck = 3, this.mobileRequest.authNo = "", this.setMobileNo()
							},
							countdown: function(n) {
								function e(n) {
									return n <= 9 ? "0" + n : n
								}

								function t() {
									l.isCntdownRestart && (l.time = "", l.isCntdownRestart = !1, clearTimeout(l.timer), d = 4, c = 59, i = +new Date + 1e3 * (60 * d + c) + 500), o = i - +new Date, o < 1e3 ? n() : (r = new Date(o), a = r.getUTCHours(), s = r.getUTCMinutes(), l.time = (a ? a + ":" + e(s) : s) + ":" + e(r.getUTCSeconds()), l.timer = setTimeout(t, r.getUTCMilliseconds() + 500))
								}
								var i, a, s, o, r, d = 4,
									c = 59,
									l = this;
								i = +new Date + 1e3 * (60 * d + c) + 500, t()
							},
							countdownTimeOut: function() {
								this.timeOut = !0, this.timerStart = !1, this.certiCheck = 1, this.certiNumDisplay = !1, noti.open("다시 인증해주세요.")
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\t\n\t\t\t\t    \x3c!-- 핀번호 입력 팝업 --\x3e\n                    <div id="pinModal" class="payment-modal modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                        <div class="modal-dialog" role="document">\n                            <div class="modal-content payment-content">\n                                <div class="modal-header">\n                                    <div class="payment-title">간편결제 비밀번호 {{titleText}}</div> \n                                    <div v-if="pinStep == 2" class="before-button">\n                                        <div class="icon icon-backward" v-on:click="rewritePin"></div>\n                                    </div>\n                                    <div class="close-button">\n                                        <div class="icon icon-close" v-on:click="modalHide"></div>\n                                    </div>\n                                </div>\n                                <div class="modal-body pin-body">\n                                    <p class="pin-text">설정한 비밀번호는 리워드 간편결제 시 사용됩니다.</p>\n                                    \x3c!-- 핀번호 입력 내용 --\x3e\n                                    <pin-info v-if="pinStep == 1" :pin-reset="pinReset" v-on:pin-done="pinDone"></pin-info>\n                                    <sec-pin-info v-if="pinStep == 2" v-on:pin-done="pinDone"></sec-pin-info>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //핀번호 입력 팝업 --\x3e\n\t\t\t\t</div>\n\t\t\t',
						props: ["type", "pinType", "pinStep", "pinReset"],
						data: function() {
							return {
								titleText: "",
								pinData: ""
							}
						},
						components: {
							pinInfo: t(6).default.component(),
							secPinInfo: t(6).default.component()
						},
						watch: {
							pinStep: function(n) {
								2 == this.pinType ? this.titleText = "입력" : this.titleText = 1 == n ? "설정" : "재입력"
							}
						},
						methods: {
							modalHide: function() {
								var n = this;
								this.$nextTick(function() {
									n.pinData = _.clone("")
								}), $("#pinModal").modal("hide"), this.$emit("reset-pin", !0, 1)
							},
							rewritePin: function(n) {
								var e = this;
								this.$nextTick(function() {
									e.pinData = _.clone("")
								}), this.$emit("reset-pin", !1, 1)
							},
							pinDone: function(n) {
								1 == this.pinType ? 1 == this.pinStep ? (this.pinData = _.clone(n), this.$emit("reset-pin", !1, 2)) : this.pinData != n ? noti.open("간편결제 비밀번호가 일치하지 않습니다.") : this.$emit("save-payment-info", n) : 1 == this.type ? this.$emit("pay-reserve-finish", n) : this.$emit("change-payment-info", n)
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div>\n                    <div style="display:none">\n                        \x3c!-- GalaxiaPay --\x3e     \n                        <form name="payment" method="post" action="" accept-charset="euc-kr">\n                            \n                            <input type="hidden" name="USER_ID" :value="request.userId">\n                            <input type="hidden" name="USER_NAME" :value="request.userName">\n                            <input type="hidden" name="ITEM_CODE" :value="request.itemCode">\n                            <input type="hidden" name="ITEM_NAME" :value="request.itemName">\n                            <input type="hidden" name="AMOUNT" :value="request.amount">\n\n                            <input type="hidden" name="SERVICE_ID" :value="request.serviceId">\n                            <input type="hidden" name="ORDER_ID" :value="request.orderId">\n                            <input type="hidden" name="ORDER_DATE" :value="request.orderDate">\n                            <input type="hidden" name="USER_IP" :value="request.userIp">\n                            <input type="hidden" name="RETURN_URL" :value="request.returnUrl">\n                            \n                            <input type="hidden" name="CHECK_SUM" :value="request.checkSum">\n                        </form>\n                    </div>\n\n                    <div class="col-md-10 col-line">\n                        <div class="row not-space">\n                            <div class="col-md-1"></div>\n                            <div class="col-md-11">\n                                <form class="form-horizontal pay_info_wrap_not" action="#">\n                                    \x3c!-- 내가 선택한 리워드 --\x3e\n                                    <div class="pay_info_wrap">\n                                        <div class="step-title mt0">\n                                            내가 선택한 리워드\n                                        </div>\n\n                                        <div class="xs-mt0 m-mb0 my_dash_table my_dash_table_center">\n                                            <table class="table table-condensed-big table-vertical-align-top table-thead-blue table-fixed mb20">\n                                                <colgroup>\n                                                    <col style="width:18%;">\n                                                    <col style="width:45%;">\n                                                    <col style="width:26%;" class="hidden-xs">\n                                                    <col style="width:11%;">\n                                                </colgroup>\n                                                <thead>\n                                                    <tr>\n                                                        <th>펀딩금액</th>\n                                                        <th>리워드명</th>\n                                                        <th class="hidden-xs">리워드옵션</th>\n                                                        <th>수량</th>\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    \x3c!-- Loop --\x3e\n                                                    <tr v-if="dataConfirm" v-for="(item, index) in fundingData.list">\n                                                        <td><strong>{{calcAmount(item.sbfUnitPrice, item.qty)}} 원 <br class="hidden-sm hidden-md hidden-lg" />펀딩</strong></td>\n                                                        <td class="text-left">\n                                                            <strong>{{item.cbfTitle}}</strong>\n                                                            <p class="text-left">{{item.cbfInfo}}</p>\n                                                        </td>\n                                                        <td class="hidden-xs"><strong>{{item.benefit}}</strong></td>\n                                                        <td><strong>{{item.qty}}개</strong></td>\n                                                    </tr>\n                                                    \x3c!-- //Loop --\x3e\n                                                </tbody>\n                                            </table>\n\n                                            <div class="total_price text-right" v-if="dataConfirm && parseInt(fundingData.spsAmount) > 0">\n                                                추가펀딩 금액 <span>{{parseInt(fundingData.spsAmount).toLocaleString()}}원</span>\n                                            </div>\n                                            <div class="total_price text-right blue-800">\n                                                총 결제예상 금액 <span>{{ parseInt(saveData.sponsorData.spsTotAmount).toLocaleString() }}원</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    \x3c!-- //내가 선택한 리워드 --\x3e\n\n                                   \n                                    \x3c!-- 배송정보 입력 --\x3e\n                                    <div class="pay_info_wrap pb0">\n\n                                         \x3c!-- 정보동의 --\x3e\n                                        <div class="form-group row-mobile-n mb5">\n                                            <label for="pay_consent1" class="col-xs-12 control-label">\n                                                <div class="text-left">\n                                                    <strong>정보동의</strong>\n                                                </div>\n                                            </label>\n                                            <div class="col-xs-12">\n                                                <label for="pay_consent2" class="checkbox-inline">\n                                                    <input type="checkbox" name="pay_consent2" id="pay_consent2" v-model="saveData.cardData.agree" /><span class="label"></span><span class="label-text grey-800">결제에 필요한 정보 제공에 동의합니다.</span>\n                                                </label>\n                                                <div class="ml25"><a href="javascript:void(0)" class="btn-link grey-500" v-on:click="policy">정보 제공 약관 보기<i class="fa fa-angle-right ml5" aria-hidden="true"></i></a></div>\n                                            </div>\n                                        </div>\n                                        \x3c!-- //정보동의 --\x3e\n\n                                    </div>\n                                    \x3c!-- //배송정보 입력 --\x3e\n                                    <div class="row st-submit">\n                                        <div class="col-sm-4 col-md-3">\n                                            <a class="btn btn-lg btn-block btn-primary" v-on:click="pay">결제하기</a>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n\n                    \x3c!-- 결제사 정보 제공 약관 --\x3e\n                    <div class="modal fade modal-primary" id="privacyCardPopup" role="dialog" tabindex="-1">\n                        <div class="modal-dialog">\n                            <div class="modal-content">\n                                <div class="modal-header">\n                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                                </div>\n                                <div class="modal-body">\n                                    <h4 class="blue-800 text-center mb20">정보 제공 약관 보기</h4>\n                                    <ol>\n                                        <li>1. 회사는 리워드 제공 및 리워드 제공을 위해 필요한 행위를 하는 데에 있어 필요한 개인 정보를 회사가 제공하는 ‘개인정보 수집 및 이용 동의서’에 대한 확인 및 동의를 참여자로부터 받아 진행자에게 제공합니다. (CROWDY 이용약관(리워드) 20조)</li>\n                                    </ol>\n                                </div>\n                                <div class="modal-footer">\n                                    <div class="row not-space">\n                                       <a class="modalBlueBtn" data-dismiss="modal">확인</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- //결제사 정보 제공 약관 --\x3e\n                </div>           \n            ',
						props: ["fundingData", "fundingId", "fundingResult"],
						data: function() {
							return {
								cardNo: [],
								saveData: {
									sponsorData: {
										cpCode: this.fundingData.cpCode,
										memCode: userInfo.memCode,
										spsIdx: "",
										spsRsName: "",
										spsPostnum: "",
										spsAddr1: "",
										spsAddr2: "",
										spsMiscinfo: "",
										spsAmount: "0",
										spsTotAmount: 0,
										spsStatus: "0",
										spsViewStatus: "0",
										spsCmsYn: "N",
										spsDeliveryStatus: "0",
										payDiv: "2",
										payNum: "",
										bankCode: "",
										payInfoNum: "",
										payMemType: "0",
										spsMbMobileno: "",
										conType: "0",
										payAgreeYn: "Y",
										payEtc: "N",
										memberInfo: !1,
										myAddressSave: !1,
										benefitList: [],
										memBirth: ""
									},
									cardData: {
										cardNo: [],
										cardPw: "",
										expMonth: "",
										expYear: "",
										idNo: "",
										agree: !1
									}
								},
								address: {
									postNum: "",
									address1: ""
								},
								dataConfirm: !1,
								phoneCheck: !1,
								request: {
									userId: userInfo.memCode,
									userName: "",
									itemCode: this.fundingData.cpCode,
									itemName: this.fundingData.cpTitle,
									amount: "",
									serviceId: "",
									orderId: "",
									orderDate: "",
									userIp: "",
									returnUrl: "",
									checkSum: "",
									os: "PC"
								}
							}
						},
						components: {
							numberInput: t(0).default.component()
						},
						created: function() {
							$(window).scrollTop(0), window.rewardFunding = this, this.load()
						},
						methods: {
							load: function() {
								var n = this;
								if (this.saveData.sponsorData.benefitList = this.fundingData.list, this.saveData.sponsorData.spsAmount = this.fundingData.spsAmount, this.fundingData.list.length > 0) {
									"Y" == this.fundingData.list[0].cpBenefitDeliveryConfirm && (this.saveData.sponsorData.spsDeliveryStatus = "1");
									for (var e = 0; e < this.fundingData.list.length; e++) this.saveData.sponsorData.spsTotAmount += parseInt(this.fundingData.list[e].sbfUnitPrice) * parseInt(this.fundingData.list[e].qty);
									this.saveData.sponsorData.spsTotAmount = parseInt(this.saveData.sponsorData.spsTotAmount) + parseInt(this.fundingData.spsAmount)
								} else this.saveData.sponsorData.spsTotAmount = parseInt(this.fundingData.spsAmount);
								this.checkBrowser(), $(".page-loader-more").fadeIn(""), axios.post("/data/member/certi/info", {
									memCode: this.request.userId
								}).then(function(e) {
									if ($(".page-loader-more").fadeOut(""), "0000" != e.data.rCode) return void noti.open(e.data.rMsg);
									var t = e.data.rData;
									n.saveData.sponsorData.spsRsName = t.memName, n.saveData.sponsorData.spsMbMobileno = t.memTelNo, n.saveData.sponsorData.payInfoNum = t.memBirth, n.request.userName = t.memName, n.dataConfirm = !0, "0" != n.fundingResult.fundingMethod ? n.payResult(n.fundingResult.fundingRcode, n.fundingResult.fundingRmsg, n.fundingResult.fundingRdata) : n.setPixelAddToCart()
								})
							},
							policy: function() {
								$("#privacyCardPopup").modal("show")
							},
							calcAmount: function(n, e) {
								return (parseInt(n) * parseInt(e)).toLocaleString()
							},
							checkBrowser: function() {
								"win16|win32|win64|mac|macintel".indexOf(navigator.platform.toLowerCase()) < 0 ? this.request.os = "MOBILE" : this.request.os = "PC"
							},
							payResult: function(n, e, t) {
								if ("0000" != n) return void noti.open(e);
								this.saveData.sponsorData.payNum = t, this.save()
							},
							pay: function() {
								if (userInfo.loginConfirm()) return this.saveData.cardData.agree ? ($(".page-loader-more").fadeIn(""), void axios.post("/reward/funding/request/info", {
									os: this.request.os,
									amount: this.saveData.sponsorData.spsTotAmount
								}).then(function(n) {
									if ($(".page-loader-more").fadeOut(""), "0000" != n.data.rCode) return void noti.open(n.data.rMsg);
									var e = n.data.rData;
									$('input[name="SERVICE_ID"]').val(e.serviceId), $('input[name="ORDER_ID"]').val(e.orderId), $('input[name="ORDER_DATE"]').val(e.orderDate), $('input[name="USER_IP"]').val(e.userIp), $('input[name="RETURN_URL"]').val(e.returnUrl), $('input[name="CHECK_SUM"]').val(e.checkSum), $('input[name="AMOUNT"]').val(e.amount);
									var t = document.payment;
									t.target = "payment", t.action = e.actionUrl;
									null == window.open("", "payment", "width=500,height=477,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,left=150,top=150") && alert("팝업이 차단되어 있습니다.\n팝업차단을 해제하신 뒤 다시 시도하여 주십시오."), t.submit()
								})) : void noti.open("결제사 정보 제공 동의해야 결제예약이 진행 가능합니다.")
							},
							save: function() {
								var n = this;
								$(".page-loader-more").fadeIn(""), axios.post("/set/reward/funding/finish", n.saveData.sponsorData).then(function(e) {
									var t = e.data;
									if ($(".page-loader-more").fadeOut(""), "0000" != t.rCode) return (t.rCode = "3000") ? void noti.open(t.rMsg, function() {
										window.open("/" + n.fundingData.cpAliasUrl, "_self")
									}) : void noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.");
									n.setGtmPurchases(t)
								})
							},
							setPixelAddToCart: function() {
								var n = this.fundingData.cpTitle,
									e = 1 * this.saveData.sponsorData.spsTotAmount,
									t = this.fundingData.cpAliasUrl,
									i = [],
									a = [],
									s = {
										id: t,
										name: n,
										price: e,
										quantity: 1
									};
								i.push(s);
								var o = {
										event: "Checkout",
										ecommerce: {
											checkout: {
												actionField: {
													step: 1
												},
												products: i
											}
										}
									},
									r = {
										id: t,
										name: n,
										item_price: e,
										quantity: 1
									};
								a.push(r), window.pixelCheckoutData = window.pixelCheckoutData || {}, window.pixelCheckoutData = {
									contents: a,
									content_name: n,
									content_ids: [t],
									content_type: "product",
									value: e,
									currency: "KRW"
								}, window.dataLayer = window.dataLayer || [], window.dataLayer.push(o)
							},
							setGtmPurchases: function(n) {
								var e = this,
									t = n.rData.spsIdx,
									i = this.fundingData.cpTitle,
									a = 1 * this.saveData.sponsorData.spsTotAmount,
									s = this.fundingData.cpAliasUrl,
									o = [],
									r = [],
									d = {
										id: s,
										name: i,
										price: a,
										quantity: 1
									};
								o.push(d);
								var c = {
										ecommerce: {
											purchase: {
												actionField: {
													id: t,
													affiliation: i,
													revenue: a
												},
												products: o
											}
										},
										event: "Purchase"
									},
									l = {
										id: s,
										name: i,
										item_price: a,
										quantity: 1
									};
								r.push(l), window.pixelData = window.pixelData || {}, window.pixelData = {
									contents: r,
									content_name: i,
									content_ids: [s],
									content_type: "product",
									value: a,
									currency: "KRW",
									num_items: 1,
									id: t
								}, window.dataLayer = window.dataLayer || [], window.dataLayer.push(c), e.$emit("step-change", 2), e.$emit("set-idx", t)
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div class="col-md-10 col-line">\n                    <div class="row not-space">\n                        <div class="col-md-1"></div>\n                        <div class="col-md-11">\n                            \x3c!-- 후원하여 주셔서 감사합니다! --\x3e\n                            <div class="fp-items-info">\n                                <div class="row not-space">\n                                    \n                                    <div class="col-sm-7">\n                                        <div class="fp-items-detail-c">\n                                            <div class="container_mobile">\n                                                <div class="yment">\n                                                    <h5 class="blue-800 xs-mt20">펀딩 참여 완료</h5>\n                                                    <strong>후원하여 주셔서 감사합니다!</strong>\n                                                    <span>{{ (parseInt(sponsorData.sponsorCount)).toLocaleString() }}번째 후원자</span>가 되셨습니다. <em>{{ sponsorData.wdate }}</em>\n                                                </div>\n                                            </div>\n\n                                            <hr class="big hidden-sm hidden-md hidden-lg" />\n\n                                            <div class="container_mobile xs-mt5">\n                                                <div class="yment_s">결제 관련 정보</div>\n                                                <dl>\n                                                    <dt>결제수단</dt>\n                                                    <dd><span>{{sponsorData.payDiv | payType}}</span></dd>\n                                                </dl>\n                                                <dl>\n                                                    <dt>총금액</dt>\n                                                    <dd><strong>{{ parseInt(sponsorData.spsTotAmount).toLocaleString() }}원</strong></dd>\n                                                </dl>\n                                                <dl v-if="fundingType == 0">\n                                                    <dt>결제 예정일</dt>\n                                                    <dd>{{ sponsorData.paymentData }}</dd>\n                                                </dl>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <hr class="big_m" />\n                            \x3c!-- //후원하여 주셔서 감사합니다! --\x3e\n\n                            <form class="form-horizontal">\n                                <div class="pay_info_wrap pt0 pb3">\n                                    <div class="step-title step-title2 mt0 xs-mb10">\n                                        좋은 아이디어는 <br class="hidden-lg hidden-md hidden-lg" />많은 사람들에게 알려져야합니다\n                                    </div>\n                                    <div class="row row-mobile mb20">\n                                        <div class="col-sm-12 col-md-5">\n                                            <div class="row row-mobile-n">\n                                                <div class="col-xs-6">\n                                                    <a class="btn btn-block btn-primary-outline" v-on:click="facebookShare"><i class="fa fa-facebook mr5" aria-hidden="true"></i> 페이스북 공유</a>\n                                                </div>\n                                                <div class="col-xs-6">\n                                                    <a class="btn btn-block btn-primary-outline" href="/"><i class="fa mr5" aria-hidden="true"></i>메인으로 돌아가기</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <hr class="big_m" />\n\n                                </div>\n                            </form>\n                            <div class="container_mobile">\n                                <div class="row not-space">\n                                    <div class="col-md-2">\n                                        <div class="notable-project-title">\n                                            지금 주목받는 <br class="hidden-xs hidden-sm" />\n                                            프로젝트\n                                        </div>\n                                    </div>\n                                    <div class="col-md-10">\n                                        <div id="notable-project" class="pb40 m-pb0 xs-pb5">\n                                            <best :param-order-type="1"></best>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ',
						props: ["idx", "fundingType"],
						data: function() {
							return {
								sponsorData: [],
								search: {
									memCode: userInfo.memCode,
									spsIdx: this.idx
								}
							}
						},
						components: {
							best: t(3).default.component()
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								$(window).scrollTop(0);
								var n = this;
								axios.post("/data/view/reward/funding/result", this.search).then(function(e) {
									var t = e.data.rData;
									n.sponsorData = t
								})
							},
							facebookShare: function() {
								this.$emit("facebook-share")
							}
						},
						filters: {
							payType: function(n) {
								var e = "";
								return "1" == n ? e = "카드" : "2" == n ? e = "계좌이체" : "3" == n && (e = "쿠폰"), e
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}, function(n, e, t) {
	"use strict";

	function i(n, e) {
		if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = function() {
			function n(n, e) {
				for (var t = 0; t < e.length; t++) {
					var i = e[t];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
				}
			}
			return function(e, t, i) {
				return t && n(e.prototype, t), i && n(e, i), e
			}
		}(),
		s = function() {
			function n() {
				i(this, n)
			}
			return a(n, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <div class="col-md-10 col-line xs-pt15">\n                    \x3c!-- 리워드 추가 선택하기 --\x3e\n                    <div class="row not-space">\n                        <div class="col-md-1"></div>\n                        <div class="col-md-11">\n                            <div class="label-title">\n                                <div class="frame">리워드 추가 선택하기</div>\n                                <p class="red-800">(선택사항)</p>\n                            </div>\n                            <div class="row not-space">\n                                <div class="col-xs-12">\n                                    <div class="row row-mobile" v-if="dataConfirm">\n                                        \x3c!-- Loop %2 == 0 --\x3e\n                                        <div class="col-xs-6">\n                                            <div class="col-xs-12 hidden-xs" v-for="(item, index) in cardBenefitFilter" v-if="item.cbfRemQty > 0 && (index % 2 == 0)"> \n                                                <div class="st-items st-items-loop" v-on:click="cardChoose(item, 1, $event)" :class="{\'active\' : item.isActive}">\n                                                    <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                    <div class="row not-space">\n                                                        <div class="col-xs-6 col-sm-12">\n                                                            <div class="st-items-su">\n                                                                <strong v-bind:style="[item.isActive ? {\'color\': \'#ff0071\'} : {\'color\': \'rgb(70, 70, 70)\'}]"><span class="webfont2">{{ parseInt(item.cbfAmount).toLocaleString() }}</span>원 펀딩</strong>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                            <div class="st-items-btn">\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty >= 89999">무제한</span>\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty < 90000">{{ item.cbfRemQty }}개 남음</span>\n                                                                <span class="btn btn-sm btn-danger-outline">{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <dl>\n                                                                <dt>리워드명</dt>\n                                                                <dd><strong>{{ item.cbfTitle }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <p>{{ item.cbfInfo }}</p>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12" v-if="item.cbfDevrAddrYn == \'Y\'">\n                                                            <dl>\n                                                                <dt>예상 배송일</dt>\n                                                                <dd><strong>{{ item.cbfResDate }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                    </div>\n\n                                                    \x3c!-- 옵션 --\x3e\n                                                    <div class="st-items-option">\n                                                        <dl>\n                                                            <dt>수량</dt>\n                                                            <dd><number-input class="form-control" :num="item.qty" v-model="item.qty" maxlength="5" v-on:click.native="cardChoose(item, 2, $event)" placeholder="수량"></number-input></dd>\n                                                            \x3c!--<dd><input type="tel" class="form-control" v-on:click="cardChoose(item, 2, $event)" v-model="item.qty" placeholder="수량" maxlength="5" v-on:keypress="isNumber"></dd>--\x3e\n                                                        </dl>\n\n                                                        <dl v-for="(items, indexs) in item.cpBenefitOptions">\n                                                            <dt>{{ items.cpBenefitOptionTitle }}</dt>\n                                                            <dd><input type="text" v-model="item.benefit[indexs]" v-on:click="cardChoose(item, 2, $event)" class="form-control" placeholder="옵션"></dd>\n                                                        </dl>\n                                                    </div>\n                                                    \x3c!-- //옵션 --\x3e\n                                                </div>\n                                            </div>\n                                        </div>\n                                        \x3c!-- //Loop --\x3e\n                                        \x3c!-- Loop %2 == 1--\x3e\n                                        <div class="col-xs-6">\n                                            <div class="col-xs-12 hidden-xs" v-for="(item, index) in cardBenefitFilter" v-if="item.cbfRemQty > 0 && (index % 2 == 1)"> \n                                                <div class="st-items st-items-loop" v-on:click="cardChoose(item, 1, $event)" :class="{\'active\' : item.isActive}">\n                                                    <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                    <div class="row not-space">\n                                                        <div class="col-xs-6 col-sm-12">\n                                                            <div class="st-items-su">\n                                                                <strong v-bind:style="[item.isActive ? {\'color\': \'#ff0071\'} : {\'color\': \'rgb(70, 70, 70)\'}]"><span class="webfont2">{{ parseInt(item.cbfAmount).toLocaleString() }}</span>원 펀딩</strong>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                            <div class="st-items-btn">\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty >= 89999">무제한</span>\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty < 90000">{{ item.cbfRemQty }}개 남음</span>\n                                                                <span class="btn btn-sm btn-danger-outline">{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <dl>\n                                                                <dt>리워드명</dt>\n                                                                <dd><strong>{{ item.cbfTitle }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <p>{{ item.cbfInfo }}</p>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12" v-if="item.cbfDevrAddrYn == \'Y\'">\n                                                            <dl>\n                                                                <dt>예상 배송일</dt>\n                                                                <dd><strong>{{ item.cbfResDate }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                    </div>\n\n                                                    \x3c!-- 옵션 --\x3e\n                                                    <div class="st-items-option">\n                                                        <dl>\n                                                            <dt>수량</dt>\n                                                            <dd><number-input class="form-control" :num="item.qty" v-model="item.qty" maxlength="5" v-on:click.native="cardChoose(item, 2, $event)" placeholder="수량"></number-input></dd>\n                                                            \x3c!--<dd><input type="tel" class="form-control" v-on:click="cardChoose(item, 2, $event)" v-model="item.qty" placeholder="수량" maxlength="5" v-on:keypress="isNumber"></dd>--\x3e\n                                                        </dl>\n\n                                                        <dl v-for="(items, indexs) in item.cpBenefitOptions">\n                                                            <dt>{{ items.cpBenefitOptionTitle }}</dt>\n                                                            <dd><input type="text" v-model="item.benefit[indexs]" v-on:click="cardChoose(item, 2, $event)" class="form-control" placeholder="옵션"></dd>\n                                                        </dl>\n                                                    </div>\n                                                    \x3c!-- //옵션 --\x3e\n                                                </div>\n                                            </div>\n                                        </div>\n                                        \x3c!-- //Loop --\x3e\n                                        \x3c!-- Loop 모바일 --\x3e\n                                        <div class="col-sm-6 hidden-lg hidden-md hidden-sm" v-for="(item, index) in cardBenefitData" v-if="item.cbfRemQty > 0"> \n                                            <div class="st-items st-items-loop" v-on:click="cardChoose(item, 1, $event)" :class="{\'active\' : item.isActive}">\n                                                <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                <div class="row not-space">\n                                                    <div class="col-xs-6 col-sm-12">\n                                                        <div class="st-items-su">\n                                                            <strong v-bind:style="[item.isActive ? {\'color\': \'#ff0071\'} : {\'color\': \'rgb(70, 70, 70)\'}]"><span class="webfont2">{{ parseInt(item.cbfAmount).toLocaleString() }}</span>원 펀딩</strong>\n                                                        </div>\n                                                    </div>\n                                                    <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                        <div class="st-items-btn">\n                                                            <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty >= 89999">무제한</span>\n                                                            <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty < 90000">{{ item.cbfRemQty }}개 남음</span>\n                                                            <span class="btn btn-sm btn-danger-outline">{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class="col-xs-12">\n                                                        <dl>\n                                                            <dt>리워드명</dt>\n                                                            <dd><strong>{{ item.cbfTitle }}</strong></dd>\n                                                        </dl>\n                                                    </div>\n                                                    <div class="col-xs-12">\n                                                        <p>{{ item.cbfInfo }}</p>\n                                                    </div>\n                                                    <div class="col-xs-6 col-sm-12" v-if="item.cbfDevrAddrYn == \'Y\'">\n                                                        <dl>\n                                                            <dt>예상 배송일</dt>\n                                                            <dd><strong>{{ item.cbfResDate }}</strong></dd>\n                                                        </dl>\n                                                    </div>\n                                                </div>\n\n                                                \x3c!-- 옵션 --\x3e\n                                                <div class="st-items-option">\n                                                    <dl>\n                                                        <dt>수량</dt>\n                                                        <dd><number-input class="form-control" :num="item.qty" v-model="item.qty" maxlength="5" v-on:click.native="cardChoose(item, 2, $event)" placeholder="수량"></number-input></dd>\n                                                        \x3c!--<dd><input type="tel" class="form-control" v-on:click="cardChoose(item, 2, $event)" v-model="item.qty" placeholder="수량" maxlength="5" v-on:keypress="isNumber"></dd>--\x3e\n                                                    </dl>\n\n                                                    <dl v-for="(items, indexs) in item.cpBenefitOptions">\n                                                        <dt>{{ items.cpBenefitOptionTitle }}</dt>\n                                                        <dd><input type="text" v-model="item.benefit[indexs]" v-on:click="cardChoose(item, 2, $event)" class="form-control" placeholder="옵션"></dd>\n                                                    </dl>\n                                                </div>\n                                                \x3c!-- //옵션 --\x3e\n                                            </div>\n                                        </div>\n                                        \x3c!-- //Loop --\x3e\n                                    </div>\n                                </div>\n                                <div class="col-md-2"></div>\n                            </div>\n                                                    \n                            <div class="label-title" v-if="finishBenefit > 0">\n                                <div class="frame">펀딩완료 리워드</div>\n                            </div>\n                            <div class="row not-space">\n                                <div class="col-xs-12">\n                                    <div class="row row-mobile" v-if="dataConfirm">\n                                        \x3c!-- Loop %2 == 0 --\x3e\n                                        <div class="col-xs-6">\n                                            <div class="col-xs-12 hidden-xs" v-for="(item, index) in cardBenefitFinishFilter" v-if="item.cbfRemQty == 0 && (index % 2 == 0)"> \n                                                <div class="st-items st-items-loop">\n                                                    <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                    <div class="row not-space">\n                                                        <div class="col-xs-6 col-sm-12">\n                                                            <div class="st-items-su">\n                                                                <strong v-bind:style="[item.isActive ? {\'color\': \'#ff0071\'} : {\'color\': \'rgb(70, 70, 70)\'}]"><span class="webfont2">{{ parseInt(item.cbfAmount).toLocaleString() }}</span>원 펀딩</strong>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                            <div class="st-items-btn">\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty >= 89999">무제한</span>\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty < 90000">{{ item.cbfRemQty }}개 남음</span>\n                                                                <span class="btn btn-sm btn-danger-outline">{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <dl>\n                                                                <dt>리워드명</dt>\n                                                                <dd><strong>{{ item.cbfTitle }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <p>{{ item.cbfInfo }}</p>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12" v-if="item.cbfDevrAddrYn == \'Y\'">\n                                                            <dl>\n                                                                <dt>예상 배송일</dt>\n                                                                <dd><strong>{{ item.cbfResDate }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                    </div>\n\n                                                    \x3c!-- 옵션 --\x3e\n                                                    \x3c!--<div class="st-items-option">\n                                                        <dl>\n                                                            <dt>수량</dt>\n                                                            <dd><number-input class="form-control" :num="item.qty" v-model="item.qty" maxlength="5" v-on:click.native="cardChoose(item, 2, $event)" placeholder="수량"></number-input></dd>\n                                                        </dl>\n\n                                                        <dl v-for="(items, indexs) in item.cpBenefitOptions">\n                                                            <dt>{{ items.cpBenefitOptionTitle }}</dt>\n                                                            <dd><input type="text" v-model="item.benefit[indexs]" v-on:click="cardChoose(item, 2, $event)" class="form-control" placeholder="옵션"></dd>\n                                                        </dl>\n                                                    </div>--\x3e\n                                                    \x3c!-- //옵션 --\x3e\n                                                </div>\n                                            </div>\n                                        </div>\n                                        \x3c!-- //Loop --\x3e\n                                        \x3c!-- Loop %2 == 1--\x3e\n                                        <div class="col-xs-6">\n                                            <div class="col-xs-12 hidden-xs" v-for="(item, index) in cardBenefitFinishFilter" v-if="item.cbfRemQty == 0 && (index % 2 == 1)"> \n                                                <div class="st-items st-items-loop">\n                                                    <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                    <div class="row not-space">\n                                                        <div class="col-xs-6 col-sm-12">\n                                                            <div class="st-items-su">\n                                                                <strong v-bind:style="[item.isActive ? {\'color\': \'#ff0071\'} : {\'color\': \'rgb(70, 70, 70)\'}]"><span class="webfont2">{{ parseInt(item.cbfAmount).toLocaleString() }}</span>원 펀딩</strong>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                            <div class="st-items-btn">\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty >= 89999">무제한</span>\n                                                                <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty < 90000">{{ item.cbfRemQty }}개 남음</span>\n                                                                <span class="btn btn-sm btn-danger-outline">{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <dl>\n                                                                <dt>리워드명</dt>\n                                                                <dd><strong>{{ item.cbfTitle }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                        <div class="col-xs-12">\n                                                            <p>{{ item.cbfInfo }}</p>\n                                                        </div>\n                                                        <div class="col-xs-6 col-sm-12" v-if="item.cbfDevrAddrYn == \'Y\'">\n                                                            <dl>\n                                                                <dt>예상 배송일</dt>\n                                                                <dd><strong>{{ item.cbfResDate }}</strong></dd>\n                                                            </dl>\n                                                        </div>\n                                                    </div>\n\n                                                    \x3c!-- 옵션 --\x3e\n                                                    \x3c!--<div class="st-items-option">\n                                                        <dl>\n                                                            <dt>수량</dt>\n                                                            <dd><number-input class="form-control" :num="item.qty" v-model="item.qty" maxlength="5" v-on:click.native="cardChoose(item, 2, $event)" placeholder="수량"></number-input></dd>\n                                                        </dl>\n\n                                                        <dl v-for="(items, indexs) in item.cpBenefitOptions">\n                                                            <dt>{{ items.cpBenefitOptionTitle }}</dt>\n                                                            <dd><input type="text" v-model="item.benefit[indexs]" v-on:click="cardChoose(item, 2, $event)" class="form-control" placeholder="옵션"></dd>\n                                                        </dl>\n                                                    </div>--\x3e\n                                                    \x3c!-- //옵션 --\x3e\n                                                </div>\n                                            </div>\n                                        </div>\n                                        \x3c!-- //Loop --\x3e\n                                        \x3c!-- Loop 모바일 --\x3e\n                                        <div class="col-sm-6 hidden-lg hidden-md hidden-sm" v-for="(item, index) in cardBenefitFinishFilter" v-if="item.cbfRemQty == 0"> \n                                            <div class="st-items st-items-loop">\n                                                <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                <div class="row not-space">\n                                                    <div class="col-xs-6 col-sm-12">\n                                                        <div class="st-items-su">\n                                                            <strong v-bind:style="[item.isActive ? {\'color\': \'#ff0071\'} : {\'color\': \'rgb(70, 70, 70)\'}]"><span class="webfont2">{{ parseInt(item.cbfAmount).toLocaleString() }}</span>원 펀딩</strong>\n                                                        </div>\n                                                    </div>\n                                                    <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                        <div class="st-items-btn">\n                                                            <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty >= 89999">무제한</span>\n                                                            <span class="btn btn-sm btn-danger" v-if="item.cbfRemQty < 90000">{{ item.cbfRemQty }}개 남음</span>\n                                                            <span class="btn btn-sm btn-danger-outline">{{ parseInt(item.cpBenefitSpsQty).toLocaleString() }}개 펀딩</span>\n                                                        </div>\n                                                    </div>\n                                                    <div class="col-xs-12">\n                                                        <dl>\n                                                            <dt>리워드명</dt>\n                                                            <dd><strong>{{ item.cbfTitle }}</strong></dd>\n                                                        </dl>\n                                                    </div>\n                                                    <div class="col-xs-12">\n                                                        <p>{{ item.cbfInfo }}</p>\n                                                    </div>\n                                                    <div class="col-xs-6 col-sm-12" v-if="item.cbfDevrAddrYn == \'Y\'">\n                                                        <dl>\n                                                            <dt>예상 배송일</dt>\n                                                            <dd><strong>{{ item.cbfResDate }}</strong></dd>\n                                                        </dl>\n                                                    </div>\n                                                </div>\n\n                                                \x3c!-- 옵션 --\x3e\n                                                \x3c!--<div class="st-items-option">\n                                                    <dl>\n                                                        <dt>수량</dt>\n                                                        <dd><number-input class="form-control" :num="item.qty" v-model="item.qty" maxlength="5" v-on:click.native="cardChoose(item, 2, $event)" placeholder="수량"></number-input></dd>\n                                                    </dl>\n\n                                                    <dl v-for="(items, indexs) in item.cpBenefitOptions">\n                                                        <dt>{{ items.cpBenefitOptionTitle }}</dt>\n                                                        <dd><input type="text" v-model="item.benefit[indexs]" v-on:click="cardChoose(item, 2, $event)" class="form-control" placeholder="옵션"></dd>\n                                                    </dl>\n                                                </div>--\x3e\n                                                \x3c!-- //옵션 --\x3e\n                                            </div>\n                                        </div>\n                                        \x3c!-- //Loop --\x3e\n                                    </div>\n                                </div>\n                                <div class="col-md-2"></div>\n                            </div>\n                            <hr class="big" />\n                        </div>\n                    </div>\n                    \x3c!-- //리워드 추가 선택하기 --\x3e\n\n                    <div class="row not-space">\n                        <div class="col-md-1"></div>\n                        <div class="col-md-11">\n                            <form class="form-horizontal">\n                                \x3c!-- 추가 펀딩하기 --\x3e\n                                <div class="form-group not-space">\n                                    <label for="plus_funding" class="col-xs-12 control-label control-label-big xs-pt0 xs-pb0">\n                                        <div class="text-left">\n                                            추가 펀딩하기\n                                            <p class="red-800">(선택사항)</p>\n                                        </div>\n                                    </label>\n                                    <div class="col-xs-7 col-sm-4">\n                                        <number-input class="form-control" :num="funding.spsAmount" v-model="funding.spsAmount" maxlength="15"></number-input>\n                                        <p class="form-control-static mb5">후원금을 더하여 펀딩 할 수 있습니다.</p>\n                                    </div>\n                                    <div class="col-xs-5">\n                                        <div class="mt5 ml10">원을 추가 펀딩</div>\n                                    </div>\n                                </div>\n                                <hr class="big" />\n                                \x3c!-- //추가 펀딩하기 --\x3e\n                                <div class="row st-submit">\n                                    <div class="col-sm-3">\n                                        <a class="btn btn-lg btn-block btn-primary" v-on:click="nextStep">다음 단계</a>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            ',
						props: ["code", "id"],
						data: function() {
							return {
								cardBenefitData: [],
								memShotImg: "",
								param: {
									cpCode: this.code,
									cbfStatus: "1"
								},
								dataConfirm: !1,
								cardClickSeparation: "",
								funding: {
									list: [],
									spsAmount: 0,
									memCode: userInfo.memCode,
									cpCode: this.code,
									id: userInfo.memCode + this.code + Math.random().toString(36).substr(2, 5)
								},
								url: "",
								finishBenefit: 0,
								selectedTotalAmount: 0
							}
						},
						components: {
							numberInput: t(0).default.component()
						},
						created: function() {
							this.load()
						},
						computed: {
							cardBenefitFilter: function() {
								return this.cardBenefitData.filter(function(n) {
									return n.cbfRemQty > 0
								})
							},
							cardBenefitFinishFilter: function() {
								var n = this;
								return this.cardBenefitData.filter(function(e) {
									return 0 == e.cbfRemQty && n.finishBenefit++, 0 == e.cbfRemQty
								})
							}
						},
						methods: {
							load: function() {
								var n = this;
								axios.post("/data/view/reward/benefit-list", this.param).then(function(e) {
									var t = e.data.rData;
									n.cardBenefitData = t, _.forEach(n.cardBenefitData, function(e) {
										n.$set(e, "isActive", !1), n.$set(e, "benefit", []), n.$set(e, "qty", 1)
									}), n.dataConfirm = !0
								})
							},
							isNumber: function(n) {
								n = n || window.event;
								var e = n.which ? n.which : n.keyCode;
								if (!(e > 31 && (e < 48 || e > 57) && 46 !== e)) return !0;
								n.preventDefault()
							},
							cardChoose: function(n, e, t) {
								this.cardClickSeparation = e, 1 == this.cardClickSeparation ? n.isActive = !n.isActive : 1 == n.isActive && t.stopPropagation()
							},
							nextStep: function() {
								var n = this,
									e = !1;
								if (_.forEach(this.cardBenefitData, function(t) {
										if (t.isActive) {
											var i = {
												cbfIdx: t.cbfIdx,
												cpCode: n.param.cpCode,
												cbfTitle: t.cbfTitle,
												sbfUnitPrice: t.cbfAmount,
												cbfInfo: t.cbfInfo,
												cbfDevrAddrYn: t.cbfDevrAddrYn,
												benefit: t.benefit.toString(),
												qty: t.qty,
												cbfRemQty: t.cbfRemQty,
												cpBenefitOptions: t.cpBenefitOptions
											};
											n.funding.list.push(i), e = !0
										}
									}), !e) return 0 == n.funding.spsAmount ? (noti.open("리워드 카드를 선택하지 않으셨습니다. <br />리워드 카드를 선택해주세요."), void(this.funding.list = [])) : void noti.open("리워드 카드를 선택하지 않고 추가 펀딩만 하셨습니다. <br />이럴 경우, 리워드는 제공되지 않습니다. <br />이대로 진행하시겠습니까?", n.save, !0);
								var t = !1;
								_.forEach(this.funding.list, function(e) {
									if (0 == e.qty || "" == e.qty) return noti.open("선택하신 리워드의 수량을 정확히 입력해주세요."), n.funding.list = [], void(t = !0);
									var i = parseInt(e.qty),
										a = parseInt(e.cbfRemQty);
									return a < 999999 && i > a ? (noti.open("선택하신 리워드의 수량이 부족합니다. <br />다시 한 번 수량을 확인해주세요."), t = !0, void(n.funding.list = [])) : e.cpBenefitOptions.length > 0 && "" == e.benefit ? (noti.open("선택하신 리워드에 옵션을 적어주세요!"), t = !0, void(n.funding.list = [])) : void 0
								}), t || this.save()
							},
							save: function() {
								var n = this;
								if ("1000003999" == this.code) {
									n.selectedTotalAmount = 0;
									for (var e = 0; e < n.funding.list.length; e++) {
										var t = n.funding.list[e];
										n.selectedTotalAmount += parseInt(t.sbfUnitPrice) * parseInt(t.qty)
									}
									if (n.selectedTotalAmount += parseInt(n.funding.spsAmount), parseInt(n.selectedTotalAmount) > parseInt(5e6)) return void noti.open("현재 진행 중인 프로젝트는 <br /> 1인당 " + parseInt(5e6).toLocaleString() + "원까지 펀딩가능합니다.");
									axios.post("/data/reward/funding/info/amount", {
										memCode: userInfo.memCode,
										cpCode: this.param.cpCode
									}).then(function(e) {
										var t = e.data.rData;
										if (parseInt(n.selectedTotalAmount) + parseInt(t.spsTotAmount) > 5e6) return void(t.spsTotAmount > 0 ? noti.open("현재 진행 중인 프로젝트는 <br /> 1인당 " + parseInt(5e6).toLocaleString() + "원까지 펀딩가능합니다. <br/> 현재 프로젝트에 이미 " + parseInt(t.spsTotAmount).toLocaleString() + "원 펀딩하셨습니다.") : noti.open("현재 진행 중인 프로젝트는 <br /> 1인당 " + parseInt(5e6).toLocaleString() + "원까지 펀딩가능합니다."));
										n.saveBenefit()
									})
								} else n.saveBenefit()
							},
							saveBenefit: function() {
								var n = this;
								axios.post("/reward/funding/set/benefit", this.funding).then(function(e) {
									n.$emit("set-id", n.funding.id), n.$emit("step-change", 2)
								})
							}
						}
					}
				}
			}]), n
		}();
	e.default = new s
}]);