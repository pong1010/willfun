! function(t) {
    function n(a) {
        if (e[a]) return e[a].exports;
        var i = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    var e = {};
    n.m = t, n.c = e, n.i = function(t) {
        return t
    }, n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, n.p = "", n(n.s = 23)
}([function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
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
                            var t = this;
                            this.childBus.$on("load", function(n, e, a) {
                                t.step = n, t.changeType = e, t.changeUrl = a, t.loadFade(1), t.load()
                            }), $("#adCertiMd").on("show.bs.modal", function(t) {
                                $("#adCertiMd").css("z-index", "1050")
                            }), $("#noti").on("show.bs.modal", function(t) {
                                $("#adCertiMd").css("z-index", "1001")
                            }), $("#noti").on("hidden.bs.modal", function(t) {
                                $("#adCertiMd").css("z-index", "1050")
                            }), $("#authModal").on("hidden.bs.modal", function(t) {
                                $("#adCertiMd").css("z-index", "1050")
                            })
                        },
                        components: {
                            adultString: e(6).default.component(),
                            numberInput: e(7).default.component(),
                            nameSelect: e(1).default.component(),
                            authModal: e(4).default.component()
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
                            loadFade: function(t) {
                                1 == t ? $(".page-loader-more").fadeIn("") : $(".page-loader-more").fadeOut("")
                            },
                            none: function() {},
                            load: function() {
                                this.dataClear(1), $(window).width() < 400 && (this.isMobile = !0), $("#adCertiMd").modal("show"), this.loadFade(2)
                            },
                            errClear: function() {
                                for (var t = 0; t < this.errId.length; t++) "txt" == this.errId[t].substring(0, 3) && $("#" + this.errId[t]).removeClass("error"), $("#" + this.errId[t] + "_err").html("")
                            },
                            sendPhoneAuth: function() {
                                var t = this;
                                this.errClear();
                                var n = "",
                                    e = "";
                                if ("" == this.certi.memTelNo && (n = "휴대폰 번호를 입력해주세요.", e = this.errId[4]), "" == this.selectCom && (n = "통신사를 선택해주세요.", e = this.errId[3]), "" == this.certi.memSex && (n = "주민번호 뒷자리를 입력해주세요.", e = this.errId[2]), "" == this.certi.memBirth && (n = "주민번호 앞자리를 입력해주세요.", e = this.errId[1]), "" == this.certi.memName && (n = "이름을 입력해주세요.", e = this.errId[0]), "" != n) return "sel" == e.substring(0, 3) ? void $("#" + e + "_err").html(n) : ($("#" + e).addClass("error"), $("#" + e + "_err").html(n), void $("#" + e).focus());
                                this.loadFade(1), this.dataConfirm = !1, this.certi.memTelCompany = this.selectCom, axios.post("/data/member/certi-call", this.certi).then(function(n) {
                                    var e = n.data;
                                    t.dataConfirm = !0, t.loadFade(2), "0000" == e.rCode ? (t.requestWord = "재요청", t.readFlg = !0, t.sendAuthNumber = !0, t.timeOutFlg = !1, t.timerStart = !0, t.$nextTick(function() {
                                        t.setReCaptcha()
                                    }), t.setCountdown(!1)) : noti.open(e.rMsg)
                                })
                            },
                            setReCaptcha: function() {
                                var t = this;
                                this.wigetId = grecaptcha.render(document.getElementById("certiRecaptcha"), {
                                    sitekey: t.sitekey
                                })
                            },
                            setCountdown: function(t) {
                                var n = this;
                                clearTimeout(this.timer);
                                var e, a, i;
                                this.timer = setInterval(function() {
                                    if (t || (n.timeStr = "5:00", n.timeOutFlg = !0, n.timerStart = !1, t = !0, e = +new Date + 1e3 * (60 * n.maxMin + n.maxSec) + 500), (a = e - +new Date) < 1e3) return n.dataConfirm = !1, clearTimeout(n.timer), n.timeOutFlg = !1, n.readFlg = !0, n.dataConfirm = !0, n.captcha.memAuthNo = "", n.timeStr = "00:00", void noti.open("인증 번호 입력 시간이 만료되었습니다.<br />다시 인증번호를 요청하세요.");
                                    i = new Date(a), n.timeStr = n.twoDigits(i.getUTCMinutes()) + ":" + n.twoDigits(i.getUTCSeconds())
                                }, 1e3)
                            },
                            twoDigits: function(t) {
                                return t <= 9 ? "0" + t : t
                            },
                            onCaptchaVerified: function(t) {
                                this.captcha.recaptchaToken = t
                            },
                            dataClear: function(t) {
                                this.dataConfirm = !1, 1 == t ? (this.readFlg = !1, this.selectCom = "", this.certi = _.clone({
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
                                }), $("#txtName").focus()) : (2 == t ? (this.captcha.memTelNo = "", this.captcha.recaptchaToken = "") : this.captcha = _.clone({
                                    memCode: userInfo.memCode,
                                    memTelNo: "",
                                    memAuthNo: "",
                                    recaptchaToken: ""
                                }), grecaptcha.reset(this.wigetId)), this.dataConfirm = !0
                            },
                            modalChange: function(t) {
                                $("#adCertiMd").css("z-index", "1001"), this.modalSelect = t, $("#authModal").modal("show")
                            },
                            authCheck: function() {
                                var t = this;
                                if (!this.sendAuthNumber) return void noti.open("본인인증을 완료해주세요.");
                                if ("" == this.captcha.memAuthNo) return void noti.open("인증번호를 입력해주세요.");
                                for (var n = 0; n < this.agree.length; n++)
                                    if (!this.agree[n].check) return void noti.open(this.agree[n].text + "는 필수입니다.");
                                this.loadFade(1), this.captcha.memTelNo = this.certi.memTelNo, this.captcha.recaptchaToken = grecaptcha.getResponse(this.wigetId), axios.post("/data/member/certi-check", this.captcha).then(function(n) {
                                    t.loadFade(2);
                                    var e = n.data;
                                    "0000" == e.rCode ? (clearTimeout(t.timer), t.sendAuthNumber = !1, t.isChild(t.certi.memBirth) ? (noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다."), t.modalClose()) : noti.open("본인인증이 완료되었습니다.", function() {
                                        $("#adCertiMd").modal("hide"), 1 == t.changeType ? t.$emit("return-url", t.changeUrl) : t.$emit("change-confirm")
                                    })) : (noti.open(e.rMsg), "2203" == e.rCode ? t.dataClear(2) : t.dataClear(3))
                                })
                            },
                            isChild: function(t) {
                                if (6 == _.size(t)) {
                                    var n = 1 * t.slice(0, 2),
                                        e = t.slice(-4);
                                    return n < 21 && n > 1 || 1 == n && e > moment().format("MMDD")
                                }
                                return !1
                            },
                            stepChange: function() {
                                this.step = 2
                            },
                            modalClose: function() {
                                var t = this;
                                $("#adCertiMd").modal("hide"), 2 == t.changeType && (location.href = "/")
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: "\n\t\t\t\t<select>\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</select>\n\t\t\t",
                        props: ["options", "value", "placeholderText"],
                        mounted: function() {
                            var t = this,
                                n = {
                                    data: this.options,
                                    minimumResultsForSearch: -1
                                };
                            void 0 != this.placeholderText && (n.placeholder = this.placeholderText), $(this.$el).select2(n).val(this.value).trigger("change").on("change", function() {
                                t.$emit("input", this.value), t.$emit("change", this.value)
                            })
                        },
                        watch: {
                            value: function(t) {
                                $(this.$el).val(t).trigger("change")
                            }
                        },
                        destroyed: function() {
                            $(this.$el).off().select2("destroy")
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="card-news-list">\n                        <div class="card-row-01">\n                            <div v-for="(item, index) in pData" class="col-sm-6 col-xs-12" v-if="index<showCnt.cnt">\n                                <a :href="item.type == 1? \'/i/\' + item.newsUrl + \'?menu=3\':\'/r/\' + item.newsUrl + \'?menu=2\'" class="card-news-item">\n                                    <div class="card-news-img">\n                                        <img :src="\'//\' + item.newsImage + \'/ycrowdy/resize/!340x!226\'"  alt="..." />\n                                    </div>\n                                    <div class="card-news-content">\n                                        <div class="card-news-row">\n                                        \t<div class="card-news-projectTitle">\t\t\n                                        \t\t<span class="card-news-type" >{{item.type == 1 ? \'투자\':\'리워드\'}}</span> | {{item.newsProjectTitle}}\n                                        \t</div>\n                                            <div class="card-news-date">20{{item.wdate}}</div>\n                                        </div>\n                                        <div class="card-news-title">{{item.newsTitle}}</div>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n\t\t\t\t\t<div v-show="moreShow" class="crowdy-btn-paddingleft">\n                        <div v-on:click="more()" class="crowdy-btn-01 crowdy-btn-layout02">새소식 더보기</div>\n                    </div>\n\t\t\t\t</div>\n\t\t\t',
                        props: {
                            paramSearchCount: {
                                default: "W"
                            }
                        },
                        data: function() {
                            return {
                                pData: [],
                                numSeq: {
                                    ivs: 0,
                                    reward: 0
                                },
                                search: {
                                    paging: {
                                        page: 1,
                                        count: 3
                                    }
                                },
                                moreShow: !0,
                                showCnt: {
                                    unit: 6,
                                    cnt: 6
                                },
                                total: {
                                    rPageCount: 0,
                                    iPageCount: 0,
                                    totalCount: 0
                                }
                            }
                        },
                        created: function() {
                            this.ivsLoad(), "M" == this.paramSearchCount && (this.showCnt.unit = 3, this.showCnt.cnt = 3)
                        },
                        methods: {
                            ivsLoad: function() {
                                var t = this;
                                axios.post("/data/view/invest/main/news", t.search).then(function(n) {
                                    if (1 == t.search.paging.page && (t.total.iPageCount = n.data.rData.dataCount), n.data.rData.dataList.length > 0) {
                                        for (var e = 0; e < t.search.paging.count && !(n.data.rData.dataList.length - 1 < e); e++) n.data.rData.dataList[e].type = "1", n.data.rData.dataList[e].seq = 2 * t.numSeq.ivs + 1, t.numSeq.ivs++;
                                        t.pData = _.concat(t.pData, n.data.rData.dataList), t.sort()
                                    }
                                    t.rewardLoad()
                                })
                            },
                            rewardLoad: function() {
                                var t = this;
                                axios.post("/data/view/reward/main/news", t.search).then(function(n) {
                                    if (1 == t.search.paging.page && (t.total.rPageCount = n.data.rData.dataCount), n.data.rData.dataList.length > 0) {
                                        for (var e = 0; e < t.search.paging.count && !(n.data.rData.dataList.length - 1 < e); e++) n.data.rData.dataList[e].type = "2", n.data.rData.dataList[e].seq = 2 * t.numSeq.reward, t.numSeq.reward++;
                                        t.pData = _.concat(t.pData, n.data.rData.dataList), t.sort()
                                    }
                                    1 == t.search.paging.page && (t.total.totalCount = t.total.iPageCount + t.total.rPageCount), t.total.totalCount <= t.showCnt.cnt ? t.moreShow = !1 : t.moreShow = !0
                                })
                            },
                            sort: function() {
                                this.pData.sort(function(t, n) {
                                    return t.seq < n.seq ? -1 : t.seq > n.seq ? 1 : 0
                                })
                            },
                            more: function() {
                                this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.ivsLoad(), (this.showCnt.cnt / 2 >= this.total.iPageCount || this.showCnt.cnt / 2 >= this.total.rPageCount) && (this.showCnt.unit = 3), this.showCnt.cnt += this.showCnt.unit
                            },
                            bannerClick: function(t, n) {
                                var e = "_self";
                                1 == n && (e = "_blank"), window.open(t, e)
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    window.crowdy = {}, crowdy.main = e(14).default, crowdy.companyBanner = e(11).default, crowdy.term = e(17).default, crowdy.nav = e(15).default, crowdy.news = e(2).default, crowdy.help = e(13).default, crowdy.search = e(16).default
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
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
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<select class="crowdy-select-box" dir="rtl">\n\t\t\t\t\t<option value="" disabled hidden v-if="placeholderText!=\'\'">{{placeholderText}}</option>\n\t\t\t\t\t<option v-for="option in options" :value="option.id">{{option.text}}</option>\n\t\t\t\t</select>\n\t\t\t',
                        props: ["options", "value", "placeholderText"],
                        mounted: function() {
                            var t = this;
                            $(this.$el).val(this.value).trigger("change").on("change", function() {
                                t.$emit("input", this.value)
                            })
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<div v-if="isMobile">\n\t                <div style="text-align:center;">\n\t                    <img src="//image-se.ycrowdy.com/crowdyCss/img/adult3.png" style="margin:0 auto;" />\n\t                </div>\n\t                <div style="margin-top:31px; text-align:center; font-size:19px; font-weight:bold; line-height:1.47; letter-spacing:-0.7px; color:#464646;">\n\t                    이 프로젝트는 만 19세 이상의<br /> 성인만 참가할 수 있습니다.\n\t                </div>\n\t                <div style="margin-top:25px; font-size:13px; font-weight:normal; line-height:1.54; letter-spacing:-0.7px; color:#464646;">\n\t                    본 프로젝트는 청소년 유해매체물로서 \'정보통신망 이용촉진 및 정보보호 등에 관한 법률\' 및 \'청소년보호법\'에 따라 만 19세 미만의 청소년이 이용할 수 없습니다. 프로젝트에 펀딩하려면 연 1회 \'휴대폰 본인인증\'이 필요합니다. \n\t                </div>\n\t            </div>\n\t            <div v-else style="vertical-align:middle;">\n\t            \t<img src="//image-se.ycrowdy.com/crowdyCss/img/adult3.png" style="max-width:80px !important; width:20%; padding:5px; float:left;"/>\n\t            \t<div style="width:78%; float:left; margin:0px;">\n\t            \t\t<div style="font-size:20px; font-weight:bold; line-height:1; letter-spacing:-0.56px; color:#464646; margin:0px;">\n\t            \t\t\t이 프로젝트는 만 19세 이상의 성인만 참가할 수 있습니다.\n\t            \t\t</div>\n\t            \t\t<div style="font-size:16px; line-height:1.67; letter-spacing:-0.7px; color:#464646; margin:10px 0px 0px 0px;">\n\t            \t\t\t본 프로젝트는 청소년 유해매체물로서 \'정보통신망 이용촉진 및 정보보호 등에 관한 법률\' 및 \'청소년보호법\'에 따라 만 19세 미만의 청소년이 이용할 수 없습니다. 프로젝트에 펀딩하려면 연 1회 \'휴대폰 본인인증\'이 필요합니다. \n\t            \t\t</div>\n\t            \t</div>\n\t            \t<div class="clearfix"></div>\n\t            </div>\n\t\t\t',
                        props: ["isMobile"]
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
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
                            updateNum: function(t) {
                                var n = t.replace(/^\s+|\s+$/g, "");
                                this.$refs.input.value = n.replace(/[^0-9]/g, ""), this.$emit("input", n.replace(/[^0-9]/g, "")), this.$emit("send-number-value", n.replace(/[^0-9]/g, ""))
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n                <input type="text" class="form-control" v-model="keyWord" v-on:keypress.enter="searchKeyWord" ref="input"/>\n            ',
                        data: function() {
                            return {
                                keyWord: ""
                            }
                        },
                        methods: {
                            searchKeyWord: function() {
                                this.keyWord = this.keyWord.replace(/^\s+|\s+$/g, "");
                                var t = encodeURI("/crowdy/search?title=" + this.keyWord);
                                window.open(t, "_self")
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n            <div>\n                <div class="card-community-list">\n                    <div class="card-community-btn">\n                        <i class="fa fa-angle-left"></i>\n                    </div>\n                    \n                    <div id="community-list" class="card-community-row">\n                        <div v-for="(item, index) in community" >\n                            <a :href="\'/c/\' + item.communityUrl" class="card-community-item">\n                                <img :src="\'//\' + item.communityImg + \'/ycrowdy/resize/!320x!240\'" class="img-responsive" alt="" />\n                                <div class="card-community-name">{{item.communityName}}</div>\n                            </a>\n                        </div>\n                    </div>\n\n                    <div class="card-community-btn">\n                        <i class="fa fa-angle-right"></i>\n                    </div>\n                </div>\n\n                \x3c!-- div class="crowdy-btn-paddingFull">\n                    <div v-on:click="link" class="crowdy-btn-01 mt35 xs-mt20">커뮤니티 파트너 페이지로 가기</div>\n                </div --\x3e\n            </div>\n\t\t\t',
                        data: function() {
                            return {
                                community: []
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        updated: function() {},
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/view/community/banner-list", {}).then(function(n) {
                                    t.community = _.concat(t.community, n.data.rData), t.$nextTick(function() {
                                        $("#community-list").slick({
                                            dots: !1,
                                            infinite: !0,
                                            autoplay: !0,
                                            autoplaySpeed: 3e3,
                                            slidesToShow: 4,
                                            centerMode: !0,
                                            centerPadding: "100px",
                                            variableWidth: !1,
                                            prevArrow: $(".card-community-btn .fa-angle-left"),
                                            nextArrow: $(".card-community-btn .fa-angle-right"),
                                            responsive: [{
                                                breakpoint: 1200,
                                                settings: {
                                                    centerMode: !0,
                                                    dots: !1,
                                                    slidesToShow: 4
                                                }
                                            }, {
                                                breakpoint: 1025,
                                                settings: {
                                                    centerMode: !0,
                                                    dots: !0,
                                                    slidesToShow: 4
                                                }
                                            }, {
                                                breakpoint: 900,
                                                settings: {
                                                    centerMode: !0,
                                                    dots: !0,
                                                    slidesToShow: 3
                                                }
                                            }, {
                                                breakpoint: 600,
                                                settings: {
                                                    centerMode: !0,
                                                    dots: !0,
                                                    slidesToShow: 2
                                                }
                                            }, {
                                                breakpoint: 500,
                                                settings: {
                                                    centerMode: !0,
                                                    centerPadding: "17px",
                                                    dots: !0,
                                                    slidesToShow: 2
                                                }
                                            }]
                                        })
                                    })
                                })
                            },
                            link: function() {
                                window.open("/community/main", "_self")
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
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
                                var t = this;
                                axios.post("/data/crowdy/banner/list", {
                                    pageType: this.pageType
                                }).then(function(n) {
                                    t.banner = n.data.rData, t.bannerCount = n.data.rData.length, t.$nextTick(function() {
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
                                            t.currentIndex = $("div.carousel-inner a.active").index() + 1
                                        })
                                    })
                                })
                            },
                            bannerClick: function(t, n) {
                                var e = "_self";
                                2 == n && (e = "_blank"), t.indexOf("http://") < 0 && t.indexOf("https://") < 0 && (t = "http://" + t), window.open(t, e)
                            },
                            indicatorClick: function(t) {
                                $("#bannerCarousel").carousel(t)
                            },
                            color: function(t) {
                                return "1" == t ? "#464646" : "#ffffff"
                            },
                            convert: function(t) {
                                return t.replace(/[\n]/g, "<br/>")
                            },
                            badge: function(t) {
                                return "1" == t ? "선착순 배정" : "2" == t ? "금액순 배정" : "3" == t ? "기타배정" : "0" == t || "" == t ? "" : void 0
                            },
                            type: function(t) {
                                return "1" == t ? "리워드" : "2" == t ? "투자" : "3" == t ? "공지" : "4" == t ? "EVENT" : "5" == t ? "사전공개" : "6" == t ? "NEW" : void 0
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<div id="company-list" \n\t\t\t\t\tclass="pb30 md-pb0"\n\t\t\t\t\t:class="{\'xs-pb10\' : pc}">\n\t\t\t\t\t<figure v-for="(item, index) in company">\n\t\t\t\t\t\t<div class="bbs-img">\n\t\t\t\t\t\t\t<img :src="\'//\' + item.companyImg" class="img-responsive" alt="" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</figure>\n\t\t\t\t</div>\n\t\t\t',
                        props: {
                            pc: {
                                default: !0
                            }
                        },
                        data: function() {
                            return {
                                company: []
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        updated: function() {
                            $("#company-list").slick({
                                dots: !1,
                                infinite: !0,
                                autoplay: !0,
                                autoplaySpeed: 3e3,
                                slidesToShow: 4,
                                slidesToScroll: 4,
                                responsive: [{
                                    breakpoint: 1050,
                                    settings: {
                                        dots: !0,
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                }, {
                                    breakpoint: 767,
                                    settings: {
                                        dots: !0,
                                        slidesToShow: 3,
                                        slidesToScroll: 3
                                    }
                                }, {
                                    breakpoint: 477,
                                    settings: {
                                        dots: !0,
                                        slidesToShow: 2,
                                        slidesToScroll: 2
                                    }
                                }]
                            })
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/crowdy/banner/company-list", {}).then(function(n) {
                                    n.data.rData.length > 0 && (t.company = _.concat(t.company, n.data.rData))
                                })
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="card-magazine-list">\n                        <div class="card-row-02">\n                            <div v-for="(item, index) in data" class="col-sm-3 col-xs-6" v-on:click="bannerClick(item.newsUrl, item.newsType)">\n                                <a href="javascript:void(0)" class="card-magazine-item">\n                                    <div class="card-magazine-img"> \n                                        <img :src="\'//\' + item.newsImage + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" alt="..." />\n                                    </div>\n                                    <div class="card-magazine-content">\n                                        <div class="card-magazine-title">{{item.newsTitle}}</div>\n                                        <div class="card-magazine-desc">{{item.newsText}}</div>\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n\t\t\t\t\t<div v-show="moreShow">\n                        <div v-on:click="more()" class="crowdy-btn-01 crowdy-btn-layout01">매거진 더보기</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
                        props: {
                            paramSearchCount: {
                                default: "4"
                            }
                        },
                        data: function() {
                            return {
                                data: [],
                                search: {
                                    paging: {
                                        page: "1",
                                        count: this.paramSearchCount
                                    }
                                },
                                totalPageCount: 0,
                                sumPageCount: 0,
                                moreShow: !0
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/crowdy/news/magazine", t.search).then(function(n) {
                                    1 == t.search.paging.page && (t.totalPageCount = n.data.rData.dataCount), t.data = _.concat(t.data, n.data.rData.dataList), t.totalPageCount <= t.data.length ? t.moreShow = !1 : t.moreShow = !0
                                })
                            },
                            more: function() {
                                this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.load()
                            },
                            bannerClick: function(t, n) {
                                var e = "_blank";
                                1 == n && (e = "_self"), window.open(t, e)
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="dinvestNavWrapXs hidden-md hidden-lg">\n\t\t\t\t\t\t<div class="dinvestNav">\n\t\t\t\t\t\t\t<ul class="nav m-mb10">\n\t\t\t\t\t\t\t\t<li :class="{\'active\' : index == 0}" v-for="(item, index) in faqName">\n\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" data-toggle="collapse" :data-target="\'#help_\' + index" :aria-controls="\'help_\' + index" aria-expanded="false" aria-label="Toggle navigation">\n\t\t\t\t\t\t\t\t\t\t{{ item.faqName }}<span class="caret"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class="collapse dinvestNav-collapse" :class="{\'in\' : index == 0}" :id="\'help_\' + index" aria-expanded="true">\n\t\t\t\t\t\t\t\t\t\t<ul class="nav">\n\t\t\t\t\t\t\t\t\t\t\t<li v-for="(faqItem, faqIndex) in faqList(item.faqTypeCode)">\n\t\t\t\t\t\t\t\t\t\t\t\t<a :href="\'#help_\' + index + \'_\' + faqItem.faqIdx">{{ faqItem.faqTitle }}</a>\n\t\t\t\t\t\t\t\t\t\t\t</li> \n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="sideOpenMask"></div>\n\n\t\t\t\t\t<div class="detail_wrap">\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t<div class="col-md-9">\n\t\t\t\t\t\t\t\t\t<div class="help_line">\n\t\t\t\t\t\t\t\t\t\t<template v-for="(item, index) in faqName">\n\t\t\t\t\t\t\t\t\t\t\t<section v-for="(faqItem, faqIndex) in faqList(item.faqTypeCode)" class="help_wrap_contents jcorgFilterTextParent" :id="\'help_\' + index + \'_\' + faqItem.faqIdx">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="webfont2 jcorgFilterTextParent" v-if="faqIndex == 0">{{ item.faqName }}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class="webfont2 jcorgFilterTextParent">{{ faqItem.faqTitle}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="jcorgFilterTextChild mce-content-body" v-html="faqItem.faqContent"></div>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-md-3">\n\t\t\t\t\t\t\t\t\t<div class="dinvestNavWrap hidden-xs hidden-sm">\n\t\t\t\t\t\t\t\t\t\t<div class="dinvestNav">\n\t\t\t\t\t\t\t\t\t\t\t<ul class="nav m-mb10">\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : index == 0}" v-for="(item, index) in faqName">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" data-toggle="collapse" :data-target="\'#help_\' + index" :aria-controls="\'help_\' + index" aria-expanded="false" aria-label="Toggle navigation">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.faqName }}<span class="caret"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="collapse dinvestNav-collapse" :id="\'help_\' + index" aria-expanded="true">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="nav">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li v-for="(faqItem, faqIndex) in faqList(item.faqTypeCode)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a :href="\'#help_\' + index + \'_\' + faqItem.faqIdx">{{ faqItem.faqTitle }}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="help_quick_navi">\n\t\t\t\t\t\t<button class="btn-help-navi" type="button">NAVI</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t',
                        data: function() {
                            return {
                                dataConfirm: !1,
                                faqName: [],
                                faq: []
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/crowdy/faq/list", {}).then(function(n) {
                                    var e = n.data.rData;
                                    t.faqName = e.faqType, t.faq = e.faq, t.dataConfirm = !0, t.$nextTick(function() {
                                        t.animateLoad()
                                    })
                                })
                            },
                            faqList: function(t) {
                                return _.filter(this.faq, function(n) {
                                    return n.faqType == t
                                })
                            },
                            animateLoad: function() {
                                $(".btn-help-navi").click(function() {
                                    $(".dinvestNavWrapXs").animate({
                                        right: "0px"
                                    }, 200), $(".page-wrapper").animate({
                                        right: "285px"
                                    }, 200), $(".page-wrapper").addClass("sideOpen"), $("body").addClass("sideOpen")
                                }), $(".sideOpenMask, .dinvestNav_m_close").click(function() {
                                    $(".dinvestNavWrapXs").animate({
                                        right: "-285px"
                                    }, 200), $(".page-wrapper").animate({
                                        right: "0px"
                                    }, 200), $(".page-wrapper").removeClass("sideOpen"), $("body").removeClass("sideOpen")
                                });
                                $(".dinvestNavWrap").affix({
                                    offset: {
                                        top: 224,
                                        bottom: function() {
                                            return this.bottom = $("footer").outerHeight(!0) + 440
                                        }
                                    }
                                }), $(".dinvestNavWrap").length && (window.location.hash && $('.dinvestNavWrap ul li a[href="' + window.location.hash + '"]').click(), $(".dinvestNavWrap ul li").removeClass("active"), $('.dinvestNavWrap ul li a[data-toggle*="collapse"]').on("click", function() {
                                    $(".dinvestNavWrap ul li").removeClass("active"), $(this).parent("li").addClass("active"), $(".help_wrap_contents jcorgFilterTextParent").removeClass("active"), $(".dinvestNav-collapse").removeClass("in").next(), $(this.hash).addClass("active")
                                }), $('.dinvestNavWrap ul li a[href*="#"]').on("click", function() {
                                    $(".jcorgFilterTextParent").removeClass("active"), $(this.hash).addClass("active");
                                    var t = $(this.hash);
                                    return $(window).width() < 992 && (offset_topscroll = 40), t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), !!t.length && ($("html, body").animate({
                                        scrollTop: t.offset().top - 40
                                    }, 1e3, "easeInOutExpo"), !1)
                                })), $(".dinvestNavWrapXs").length && (window.location.hash && $('.dinvestNavWrap ul li a[href="' + window.location.hash + '"]').click(), $(".dinvestNavWrapXs ul li").removeClass("active"), $('.dinvestNavWrapXs ul li a[data-toggle*="collapse"]').on("click", function() {
                                    $(".dinvestNavWrapXs ul li").removeClass("active"), $(this).parent("li").addClass("active"), $(".help_wrap_contents jcorgFilterTextParent").removeClass("active"), $(".dinvestNav-collapse").removeClass("in").next(), $(this.hash).addClass("active")
                                }), $('.dinvestNavWrapXs ul li a[href*="#"]').on("click", function() {
                                    $(this.hash).addClass("active"), $(".dinvestNavWrapXs").animate({
                                        right: "-285px"
                                    }, 200), $(".page-wrapper").animate({
                                        right: "0px"
                                    }, 200), $(".page-wrapper").removeClass("sideOpen"), $("body").removeClass("sideOpen");
                                    var t = $(this.hash);
                                    return $(window).width() < 992 && (offset_topscroll = 90), t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), !!t.length && ($("html, body").animate({
                                        scrollTop: t.offset().top - 70
                                    }, 1e3, "easeInOutExpo"), !1)
                                })), $(".dinvestNavWrap").length && $("body").scrollspy({
                                    target: ".dinvestNavWrap",
                                    offset: 60
                                }), $(".dinvestNavWrapXs").length && $("body").scrollspy({
                                    target: ".dinvestNavWrapXs",
                                    offset: 60
                                })
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t<div>\n\t\t\t\t<banner></banner>\n\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div>\n                            <a v-on:click="pageMove(\'R\', $event); return false;"><div class="crowdy-title-01"><font>리워드 프로젝트</font> <i class="fa fa-angle-right hidden-md hidden-lg" aria-hidden="true"></i></div></a>\n                            <span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디에서 핫한 프로젝트들을 만나보세요</span>\n                        </div>\n                        <reward :param-search-count="cardCount.reward" :param-end-type="0"></reward>\n                    </div>\n                </div>\n                 \n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div>\n                            <a v-on:click="pageMove(\'I\', $event); return false;"><div class="crowdy-title-01"><font>투자 프로젝트</font> <i class="fa fa-angle-right hidden-md hidden-lg" aria-hidden="true"></i></div></a>\n                        \t<span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디가 엄선한 스타트업들을 만나보세요</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<invest :param-search-count="cardCount.invest" param-end-type="0" :main-flag="true" class="crowdy-layout-leftFull"></invest>\n                    </div>\n                </div>\n\t\t\t\t\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div>\n                            <a v-on:click="pageMove(\'P\', $event); return false;"><div class="crowdy-title-01"><font>프로젝트 사전공개</font> <i class="fa fa-angle-right hidden-md hidden-lg" aria-hidden="true"></i></div></a>\n                        \t<span class="crowdy-titleDesc-01 hidden-xs hidden-sm">곧 오픈 할 프로젝트들을 가장 먼저 만나보세요</span>\n                        </div>\n                        <pre-open :param-search-count="cardCount.preopen"></pre-open>\n                    </div>\n                </div>\n\n                <div class="crowdy-layout-video mt60 xs-mt50">\n                    <div class="container">\n                        <div>\n                            <div>\n                                <div class="crowdy-title-video mt60 xs-mt50">크라우디 TV</div>\n                            </div>\n                            <invest-video class="video-layout-full pb80 xs-pb20"></invest-video>\n                        </div>\n                    </div>\n                </div>\n   \n                <div class="crowdy-layout-introduction crowdy-layout-main">\n                    <div class="crowdy-content-introduction">\n                        <span class="crowdy-title-introduction">신뢰할 수 있는 크라우드펀딩, 크라우디</span>\n                        <span class="crowdy-subtitle-introduction">꼼꼼한 스크리닝으로 믿을 수 있는 플랫폼을 만듭니다.</span>\n                        <div class="crowdy-btn-introduction" v-on:click="showGoogleDriveLink">자세히 알아보기</div>\n                    </div>\n                </div>\n\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div>\n                            <div class="crowdy-title-01">크라우디 매거진</div>\n                            <span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디가 제공하는 유용한 정보들을 만나보세요</span>\n                        </div>\n                        <magazine :param-search-count="cardCount.magazine"></magazine>\n                    </div>\n                </div>\n\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div>\n                        \t<div class="crowdy-title-01">프로젝트 최근 새소식</div>\n                          \t<span class="crowdy-titleDesc-01 hidden-xs hidden-sm">프로젝트별 새로운 소식을 전달해드립니다</span>\n                        </div>\n                        <crowdy-news :param-search-count="cardCount.news" class="crowdy-layout-leftFull"></crowdy-news>\n                    </div>\n                </div>\n\t\t\t\t\n                <div class="container">\n                    <div class="mt60 xs-mt50">\n                        <div>\n                            <a v-on:click="pageMove(\'C\', $event); return false;"><div class="crowdy-title-01"><font>커뮤니티 파트너</font> <i class="fa fa-angle-right hidden-md hidden-lg" aria-hidden="true"></i></div></a>\n                            <span class="crowdy-titleDesc-01 hidden-xs hidden-sm">크라우디는 여러분과 함께 합니다</span>\n                        </div>\n                        <community-banner class="crowdy-layout-full"></community-banner>\n                    </div>\n                </div>\n\t\t\t</div>\n\t\t\t',
                        data: function() {
                            return {
                                dataConfirm: !1,
                                cardCount: {
                                    reward: 3,
                                    invest: 3,
                                    preopen: 4,
                                    news: "W",
                                    magazine: 4
                                }
                            }
                        },
                        created: function() {
                            $(window).width() < 768 && (this.cardCount.reward = 4, this.cardCount.news = "M")
                        },
                        components: {
                            banner: e(10).default.component(),
                            reward: e(21).default.component(),
                            newReward: e(22).default.component(),
                            invest: e(18).default.component(),
                            preOpen: e(20).default.component(),
                            communityBanner: e(9).default.component(),
                            crowdyNews: e(2).default.component(),
                            magazine: e(12).default.component(),
                            investVideo: e(19).default.component()
                        },
                        methods: {
                            none: function() {},
                            pageMove: function(t, n) {
                                var e = n.target.nodeName;
                                "I" != e.toUpperCase() && "FONT" != e.toUpperCase() || ("R" == t ? window.open("/reward/list", "_self") : "I" == t ? window.open("/invest/list", "_self") : "P" == t ? window.open("/preopen/list", "_self") : "C" == t && window.open("/community/main", "_self"))
                            },
                            showGoogleDriveLink: function() {
                                var t = navigator.userAgent.toLowerCase();
                                "Netscape" == navigator.appName && -1 != navigator.userAgent.search("Trident") || -1 != t.indexOf("msie") ? noti.open("인터넷 익스플로러에서는 확인하실 수 없습니다.<br /><br />Chrome 또는 Microsoft Edge 등<br />다른 브라우저를 이용해주세요.") : window.open("https://drive.google.com/file/d/14KyQqyMYkP1pTdxFDjpjRWdcdcDu2U3m/view?usp=sharing", "_blank")
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t<div>\n\t\t\t\t<nav class="navbar navbar-venture navbar-fixed-top affix">\n\t\t\t\t\x3c!-- css : affix --\x3e\n\t\t\t\t\t\x3c!-- 상단 팝업 --\x3e\n\t\t\t\t\t\x3c!--<div class="top-popup">\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="top-popup-contents-text text-center">\n\t\t\t\t\t\t\t\t변경된 약관을 확인하세요! <a href="/crowdy/term?menu=1">약관 확인하기 -> </a>\n\t\t\t\t\t\t\t\t<a href="javascript:void(0)" title="창닫기" class="top-popup-close">닫기</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\x3c!-- //상단 팝업 --\x3e\n\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<template v-if="!searching">\n\t\t\t\t\t\t\t<div class="navbar-header">\n\t\t\t\t\t\t\t\t<a href="/" class="navbar-brand"><div>CROWDY</div></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id="navbar" class="navbar-collapse collapse">\n\t\t\t\t\t\t\t\t<ul class="nav navbar-nav">\n\t\t\t\t\t\t\t\t\t<li><a href="/reward/list" class="dropdown-toggle">리워드</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href="/invest/list" class="dropdown-toggle">투자</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href="/preopen/list" class="dropdown-toggle">사전공개</a></li>\n\t\t\t\t\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">\n\t\t\t\t\t\t\t\t\t\t\t더보기 <span class="caret"></span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<div class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="/community/main">커뮤니티 파트너</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="/simulation/main">모의펀딩</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="/crowdy/about">리워드/투자란?</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href="/crowdy/help" target="_blank">도움말</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li><a href="/make/start" class="dropdown-toggle dropdown-pro">프로젝트 만들기</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t\t\t\t\t<li class="nav-search-form">\n\t\t\t\t\t\t\t\t\t\t<form action="javascript:void(0);">\n\t\t\t\t\t\t\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <search-input style="cursor: pointer;" placeholder="키워드를 입력하세요."></search-input> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-addon" v-on:click="searchConfirm">검색</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<template v-if="check">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div class="gnb_card_background"></div>\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="dropdown-toggle open_my_card" v-on:click="gnbCardOpen">\n\t\t\t\t\t\t\t\t\t\t\t마이페이지\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t<template v-else>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="dropdown-toggle" v-on:click="login">\n\t\t\t\t\t\t\t\t\t\t\t로그인\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="dropdown-toggle" v-on:click="join">\n\t\t\t\t\t\t\t\t\t\t\t회원가입\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\t\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="/crowdy/help" class="dropdown-toggle" target="_blank">\n\t\t\t\t\t\t\t\t\t\t\t도움말\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li> \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t\t<template v-if="searching">\n\t\t\t\t\t\t\t <div class="input-group input-group-file margin-top-10">\n\t\t\t\t\t\t\t \t<span class="input-group-btn">\n                                    <span class="btn btn-outline btn-file btn-search">\n                                    </span>\n                                </span> \n                                <input type="text" placeholder="찾으시는 프로젝트가 있으신가요?" class="form-control border-none search-box" v-model="keyWord" v-on:keypress.enter="searchKeyWord" autofocus> \n                                <span class="input-group-btn">\n                                    <span class="btn btn-outline btn-file btn-exit" v-on:click="searchConfirm">\n                                    </span>\n                                </span> \n                            </div>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\n\t\t\t\t<nav class="mobile-header-wrap">\n\n\t\t\t\t\t\x3c!-- 상단 팝업 --\x3e\n\t\t\t\t\t\x3c!--<div class="top-popup">\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="top-popup-contents-text text-center">\n\t\t\t\t\t\t\t\t변경된 약관을 확인하세요! <br/> <a href="/crowdy/term?menu=1">약관 확인하기 -> </a>\n\t\t\t\t\t\t\t\t<a href="javascript:void(0)" title="창닫기" class="top-popup-close">닫기</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\x3c!-- //상단 팝업 --\x3e\n\n\t\t\t\t\t\n\t\t\t\t\t<template v-if="!searching">\n\t\t\t\t\t\t<div class="mobile-header">\n\t\t\t\t\t\t\t<div class="nav-search-form">\n\t\t\t\t\t\t\t\t<form action="javascript:void(0);">\n\t\t\t\t\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t\t\t\t\t<span type="text" class="form-control" v-on:click="searchConfirm"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<a href="/" class="mobile-brand">CROWDY</a>\n\t\t\t\t\t\t\t<div class="gnb_card_background"></div>\n\t\t\t\t\t\t\t<a href="#" class="open_my_card" v-on:click="gnbCardOpen" :class="{\'mobile-icon\' : !check , \'mobile-icon-login\' : check}">  \n\t\t\t\t\t\t\t\t<span>마이페이지</span>\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n\n\t\t\t\t\t<template v-if="searching">\n\t\t\t\t\t\t<div class="mobile-header">\n\t\t\t\t\t\t\t<div class="input-group input-group-file">\n\t\t\t\t\t\t\t\t<div class="input-group-btn">\n                                    <span class="btn btn-outline btn-file btn-search">\n                                    </span>\n                                </div> \n                                <div style="width:76%;">\n                                \t<input type="text" placeholder="찾으시는 프로젝트가 있으신가요?" class="form-control border-none search-box" v-model="keyWord" v-on:keypress.enter="searchKeyWord" autofocus />\n                                </div>\n\t                            <div class="input-group-btn padding-right-10" style="padding:0px;">\n\t                                <div class="btn btn-outline btn-file btn-exit" v-on:click="searchConfirm">\n\t                                </div>\n\t                            </div> \n\t\t\t\t\t\t\t</div>\n                        </div>\n\t\t\t\t\t</template>\n\n\t\t\t\t\t<div class="mobile-navbar">\n\t\t\t\t\t\t<ul class="mobile-nav">\n\t\t\t\t\t\t\t<li><a href="/reward/list" class="mobile-anav">리워드</a></li>\n\t\t\t\t\t\t\t<li><a href="/invest/list" class="mobile-anav">투자</a></li>\n\t\t\t\t\t\t\t<li><a href="/preopen/list" class="mobile-anav">사전공개</a></li>\n\t\t\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="mobile-anav" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">\n\t\t\t\t\t\t\t\t\t더보기 <span class="caret"></span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><a href="/community/main">커뮤니티 파트너</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href="/simulation/main">모의펀딩</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href="/crowdy/about">리워드/투자란</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href="/crowdy/help" target="_blank">도움말</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href="/make/start">프로젝트 만들기</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\n\t\t\t\t<div class="gnb_card">\n\t\t\t\t\t<div class="gnb_card_frame">\n\t\t\t\t\t\t<div class="gnb_card_header">\n\t\t\t\t\t\t\t<div class="gnb_card_header_table">\n\t\t\t\t\t\t\t\t<div class="gnb_card_header_table_cell">\n\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="gnb_card_close">창닫기</a>\n\t\t\t\t\t\t\t\t\t<div class="user_photo">\n\t\t\t\t\t\t\t\t\t\t<img v-if="image != \'\'" :src="\'//\' + image" class="img-responsive" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="user_name" v-text="name">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="user_email" v-text="email">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="gnb_card_body">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<template v-if="check">\n\t\t\t\t\t\t\t\t\t<li><a href="#" v-on:click="loadInvestState(1)">펀딩한 프로젝트</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href="/mypage/main?menu=2">제작한 프로젝트</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href="/mypage/main?menu=3">관심 프로젝트</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href="/mypage/main?menu=5">설정</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href="javascript:void(0);" v-on:click="logout">로그아웃</a></li>\n\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t<template v-else>\n\t\t\t\t\t\t\t\t\t<li><a v-on:click="login">로그인</a></li>\n\t\t\t\t\t\t\t\t\t<li><a v-on:click="join">회원가입</a></li>\t\n\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t',
                        props: ["check"],
                        data: function() {
                            return {
                                keyWord: "",
                                searching: !1,
                                winWid: 0
                            }
                        },
                        components: {
                            searchInput: e(8).default.component()
                        },
                        created: function() {
                            this.winWid = $(window).width(), $(document).ready(function() {
                                $(".top-popup-close").click(function() {
                                    $(".top-popup").addClass("top-popup-hidden")
                                })
                            }), window.userInfo = this
                        },
                        mounted: function() {
                            var t = document.location.pathname,
                                n = -1,
                                e = -1;
                            1 == t.indexOf("reward/") || 1 == t.indexOf("r/") ? n = 0 : 1 == t.indexOf("invest/") || 1 == t.indexOf("i/") ? n = 1 : 1 == t.indexOf("preopen/") || 1 == t.indexOf("open/") ? n = 2 : 1 == t.indexOf("community/") || 1 == t.indexOf("c/") ? (n = 3, e = 0) : 1 == t.indexOf("simulation/") || 1 == t.indexOf("sc/") || 1 == t.indexOf("sr/") ? (n = 3, e = 1) : 1 == t.indexOf("crowdy/about") ? (n = 3, e = 2) : 1 == t.indexOf("crowdy/help") ? (n = 3, e = 3) : 1 == t.indexOf("make/start") && (n = 4, e = 4), n > -1 && (3 == n ? ($(".navbar-nav > li.dropdown > a").addClass("crowdy-color-blue"), $(".mobile-nav > li.dropdown > a").addClass("crowdy-color-blue border-bottom-blue")) : 4 == n ? $(".mobile-nav > li.dropdown > a").addClass("crowdy-color-blue border-bottom-blue") : ($(".navbar-nav li:eq(" + n + ") a").addClass("crowdy-color-blue"), $(".mobile-nav li:eq(" + n + ") a").addClass("crowdy-color-blue border-bottom-blue"))), e > -1 && ($(".navbar-nav > li.dropdown > div.dropdown-menu > ul > li:eq(" + e + ") > a").addClass("crowdy-color-blue"), $(".mobile-nav > li.dropdown > div.dropdown-menu > ul > li:eq(" + e + ") > a").addClass("crowdy-color-blue"))
                        },
                        computed: {
                            name: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memName : ""
                                }
                            },
                            email: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memEmail : ""
                                }
                            },
                            image: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memShotImg : ""
                                }
                            },
                            memCode: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memCode : ""
                                }
                            },
                            type: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memType : ""
                                }
                            },
                            investorType: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memInvestorTypeName : ""
                                }
                            },
                            investorState: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memInvestor : ""
                                }
                            },
                            nameConfirm: {
                                cache: !1,
                                get: function() {
                                    return this.check ? JSON.parse(localStorage.getItem("user")).memNameConfirm : ""
                                }
                            }
                        },
                        methods: {
                            logout: function() {
                                localStorage.removeItem("user"), window.open("/logout", "_self")
                            },
                            login: function() {
                                localStorage.setItem("return", window.location.pathname + window.location.search), window.open("/user/login", "_self")
                            },
                            join: function() {
                                localStorage.setItem("return", window.location.pathname + window.location.search), window.open("/user/join", "_self")
                            },
                            loginConfirm: function() {
                                return "" != this.memCode || (noti.open("로그인이 필요한 서비스입니다.<br/> 로그인 후 이용하세요.", function() {
                                    userInfo.login()
                                }), !1)
                            },
                            investLoginConfirm: function(t) {
                                return "" != this.memCode || (noti.open("로그인이 필요한 서비스입니다.<br/> 로그인 후 이용하세요.", function() {
                                    localStorage.setItem("return", "/invest/process/" + t), window.open("/user/login", "_self")
                                }), !1)
                            },
                            updateInfo: function(t) {
                                localStorage.removeItem("user"), localStorage.setItem("user", JSON.stringify(t))
                            },
                            setLoginInfo: function(t) {
                                localStorage.setItem("user", JSON.stringify(t))
                            },
                            loadInvestState: function(t) {
                                axios.post("/data/member/investor/state", {
                                    memCode: userInfo.memCode
                                }).then(function(n) {
                                    "Y" == n.data.rData.investor ? window.open("/mypage/main?menu=" + t + "&sub-menu=2", "_self") : window.open("/mypage/main?menu=" + t, "_self")
                                })
                            },
                            searchConfirm: function() {
                                this.winWid = $(window).width(), this.searching = !this.searching
                            },
                            searchKeyWord: function() {
                                this.keyWord = this.keyWord.replace(/^\s+|\s+$/g, "");
                                var t = encodeURI("/crowdy/search?title=" + this.keyWord);
                                window.open(t, "_self")
                            },
                            gnbCardOpen: function() {
                                $("body").toggleClass("gnb_card_open")
                            },
                            removeStyleAttr: function(t) {
                                var n = $(document.createElement("div"));
                                return n.html(t), n.find("*").removeAttr("style"), t = n.html()
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n                <div>\n\n                    \x3c!----------- 상단 --------------\x3e\n                    <div class="container">\n                        <div class="crowdy-search-header">\n                            <div class="crowdy-search-title">{{totalPageCount}}건의 검색결과를<br/> 찾았습니다.</div>\n                            <div class="crowdy-search-box">\n                                <input class="crowdy-search-input" type="text" placeholder="찾으시는 프로젝트가 있으신가요?" :value="search.title" v-model="search.title" v-on:keypress.enter="reSearch"></input>\n                                <div class="crowdy-search-btn" v-on:click="reSearch"></div>\n                            </div>\n                            <div class="crowdy-search-select">\n                                <order-select :options="orderTypeOptions" v-model="projectType"></order-select>\n                            </div>\n                            <hr class="crowdy-search-hr hidden-sm hidden-md hidden-lg">\n                        </div>\n                    </div>\n\n                    <div v-if="dataConfirm">\n                        <div class="container" v-if="totalPageCount > 0">\n                            \x3c!----------- PC --------------\x3e\n                            <div class="card-search-list hidden-xs">\n                                <div class="card-row-01">\n                                    <div v-for="(item, index) in searchResult" class="col-sm-4" >\n                                        <figure>\n                                            <a :href="none()" v-on:click="changeUrl(item)" class="card-search-item">\n                                                <div class="card-search-img">\n                                                    \x3c!--img :src="\'//\' + item.img + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" alt="..." /--\x3e\n                                                    <img v-if="item.cpAdultImgType == \'N\'" :src="\'//\' + item.img + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" alt="..." />\n                                                    <img v-if="item.cpAdultImgType == \'Y\' && item.cpAdultType == \'Y\'" style="width:310px; height:206px;" src="/resources/img/adult1.png" />\n                                                    <img v-if="item.cpAdultType == \'Y\'" style="position:absolute; top:10px; right:0px; width:60px; height:40px;" src="/resources/img/adult2.png" />\n                                                </div>\n                                                <figcaption>\n                                                    <div class="card-search-content">\n                                                        <div class="card-search-name"><span class="card-search-type" :class="getColor(item)">{{getType(item)}} </span> {{item.memName}}</div>\n                                                        <div class="card-search-title">{{item.title}}</div>\n                                                    </div>\n                                                    <div class="card-search-row">\n                                                        <div class="card-search-row-01"> \n                                                            <div class="card-search-price" :class="{\'crowdy-color-blue\' : item.endStatus == 1}">\n                                                                <template v-if="item.type == 4">{{item.customText}} 오픈!</template>\n                                                                <template v-if="item.type != 4">\n                                                                    {{ parseInt(item.sponsorAmount).toLocaleString() }}원 펀딩\n                                                                    <template v-if="item.endStatus == 2">\n                                                                        성공\n                                                                    </template>\n                                                                    <template v-if="item.endStatus == 3">\n                                                                        종료\n                                                                    </template>\n                                                                </template>\n                                                            </div>\n                                                            <div class="card-search-day" :class="{\'crowdy-color-blue\' : (item.endStatus == 1 && item.dday < 1)}" v-if="item.type != 4">\n                                                                <template v-if="item.endStatus == 1">{{endDay(item.startDate, item.endDate)}}</template>\n                                                                <template v-else>종료</template>\n                                                            </div>\n                                                            <div class="card-search-persent">\n                                                                <template v-if="item.type == 4">사전공개</template>\n                                                                <template v-if="item.type != 4">{{item.achievement}}%</template>\n                                                            </div>\n                                                        </div>\n                                                        <div class="card-search-assignList">\n                                                            <div class="card-search-assign" v-if="item.type == 2">{{item.customType | assign }}</div>\n                                                            <div class="card-search-assign" v-if="item.type == 2">{{item.customText | secur }}</div>\n                                                            <div class="card-search-assign" v-if="item.type == 2 && item.deduction == \'Y\'">{{item.deduction | deduction }}</div>\n                                                        </div>\n                                                    </div>\n                                                </figcaption>\n                                            </a>\n                                        </figure>\n                                    </div>\n                                </div>\n                            </div>\n\n                            \x3c!----------- Mobile --------------\x3e\n                            <div class="crowdy-layout-leftFull"> \n                                <div class="card-search-list hidden-sm hidden-md hidden-lg">\n                                    <div class="card-row-01">\n                                        <div v-for="(item, index) in searchResult" class="col-xs-12">\n                                            <a :href="none()" v-on:click="changeUrl(item)" class="card-search-item">\n                                                <div class="card-search-img">\n                                                    <img v-if="item.cpAdultImgType == \'N\'" img :src="\'//\' + item.img + \'/ycrowdy/resize/!340x!226\'" alt="..." />\n                                                    <img v-if="item.cpAdultImgType == \'Y\' && item.cpAdultType == \'Y\'" src="//image-se.ycrowdy.com/crowdyCss/img/adult1.png/ycrowdy/resize/!340x!226" />\n                                                    <img v-if="item.cpAdultType == \'Y\'" style="position:absolute; top:5px; right:0px; width:30px; height:25px;" src="//image-se.ycrowdy.com/crowdyCss/img/adult2.png/ycrowdy/resize/!60x!40" />\n                                                </div>\n                                                <div class="card-search-content">\n                                                    <div>\n                                                        <span class="card-search-type" :class="getColor(item)">{{getType(item)}}</span> \n                                                        <span class="card-search-assign-b" v-if="item.type == 2">|&nbsp;{{item.customText | secur }}</span>\n                                                        <span class="card-search-assign" v-if="item.type == 2">|&nbsp;{{item.customType | assign }}</span>\n                                                        <span class="card-search-assign" v-if="item.type == 2 && item.deduction == \'Y\'">|&nbsp;{{item.deduction | deduction }}</span>\n                                                    </div>\n                                                    <div class="card-search-title">{{item.title}}</div>\n                                                    <div>\n                                                        <span class="card-search-price">\n                                                            <template v-if="item.type == 4"><font :class="{\'crowdy-color-blue\' : item.endStatus == 1}">{{item.customText}} 오픈!</font></template>\n                                                            <template v-if="item.type != 4">\n                                                                <font :class="{\'crowdy-color-blue\' : item.endStatus == 1}">\n                                                                    {{ parseInt(item.sponsorAmount).toLocaleString() }}원 펀딩\n                                                                    <template v-if="item.endStatus == 2">성공</template>\n                                                                    <template v-if="item.endStatus == 3">종료</template>\n                                                                </font>\n                                                            </template>\n                                                        </span>\n                                                        <span class="card-search-persent">\n                                                            <template v-if="item.type == 4">사전공개</template>\n                                                            <template v-if="item.type != 4">{{item.achievement}}%</template>\n                                                        </span>\n                                                    </div>\n                                                    <div style="margin-top:-6px;">\n                                                        <span v-if="item.type != 4" class="card-search-day" :class="{\'card-search-nowEnd\' : (item.endStatus == 1 && item.dday < 1)}">\n                                                            <template v-if="item.endStatus == 1">{{endDay(item.startDate, item.endDate)}}</template>\n                                                            <template v-else>종료</template>\n                                                        </span>\n                                                        <span class="card-search-name">{{item.memName}}</span>\n                                                    </div>\n                                                </div>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            <div v-show="moreShow" class="crowdy-btn-paddingleft">\n                                <div v-on:click="more()" class="crowdy-btn-01 crowdy-search-more">검색결과 더보기</div>\n                            </div>\n                        </div>\n\n                        <div class="container" v-if="totalPageCount == 0">\n                            <div class="crowdy-search-notice">\n                                <div class="crowdy-search-noticeIcon"></div>\n                                <div class="crowdy-search-noticeTitle">\n                                    죄송합니다.<br/>\n                                    찾으시는 결과가 없습니다.\n                                </div>\n                                <div class="crowdy-search-noticeText">\n                                    프로젝트 이름 혹은 진행자명을<br/>\n                                    다시 확인해주세요!\n                                </div>  \n                            </div>\n\n                            <div>\n                                <div v-on:click="goMain()" class="crowdy-btn-01 mt35">메인페이지로 가기</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <member-adult-certi :childBus="childBus" v-on:return-url="returnUrl"></member-adult-certi>\n                </div>\n\t\t\t',
                        props: {
                            title: {
                                default: ""
                            }
                        },
                        components: {
                            orderSelect: e(5).default.component(),
                            memberAdultCerti: e(0).default.component()
                        },
                        data: function() {
                            return {
                                childBus: new Vue,
                                searchResult: [],
                                search: {
                                    title: this.title,
                                    projectType: "0",
                                    paging: {
                                        count: "9",
                                        page: "1"
                                    }
                                },
                                totalPageCount: 0,
                                dataConfirm: !1,
                                searchTitle: "",
                                moreShow: !0,
                                projectType: "0",
                                orderTypeOptions: [{
                                    id: "0",
                                    text: "전체보기"
                                }, {
                                    id: "1",
                                    text: "리워드"
                                }, {
                                    id: "2",
                                    text: "투자"
                                }, {
                                    id: "3",
                                    text: "모의펀딩"
                                }, {
                                    id: "4",
                                    text: "사전공개"
                                }]
                            }
                        },
                        created: function() {
                            this.searchTitle = this.title, this.load()
                        },
                        watch: {
                            projectType: function(t) {
                                this.search.projectType = t, this.searchResult = _.clone([]), this.load()
                            }
                        },
                        methods: {
                            loadFade: function(t) {
                                1 == t ? $(".page-loader-more").fadeIn("") : $(".page-loader-more").fadeOut("")
                            },
                            load: function() {
                                if ("" == this.title) return void noti.open("검색어를 입력해주세요!");
                                var t = this;
                                this.loadFade(1), axios.post("/data/crowdy/search/project", this.search).then(function(n) {
                                    t.loadFade(2), 1 == t.search.paging.page && (t.totalPageCount = n.data.rData.searchCount), t.searchResult = _.concat(t.searchResult, n.data.rData.searchList), t.totalPageCount <= t.searchResult.length ? t.moreShow = !1 : t.moreShow = !0, t.dataConfirm = !0
                                })
                            },
                            reSearch: function() {
                                this.projectType = "0", this.search.paging.page = "1", this.search.paging.count = "9", this.searchResult = _.clone([]), this.load()
                            },
                            endDay: function(t, n) {
                                var e = moment().format("YYYY-MM-DD"),
                                    a = (moment(t), moment(n)),
                                    i = a.diff(e, "days");
                                return i > 0 ? "D - " + i : this.endTime()
                            },
                            endTime: function() {
                                return moment.updateLocale("en", {
                                    relativeTime: {
                                        hh: "%d시간 남음",
                                        mm: "%d분 남음",
                                        d: "오늘까지",
                                        h: "1시간 남음"
                                    }
                                }), moment().endOf("day").add(-1, "hours").fromNow(!0)
                            },
                            changeUrl: function(t) {
                                var n = this;
                                if (1 == t.type)
                                    if ("Y" == t.cpAdultType && "Y" == t.cpAdultImgType) {
                                        if (!userInfo.loginConfirm()) return;
                                        this.loadFade(1), axios.post("/data/member/certi/adult", {
                                            memCode: userInfo.memCode
                                        }).then(function(e) {
                                            if (n.loadFade(2), "0000" == e.data.rCode) {
                                                var a = e.data.rData;
                                                if ("Y" == a.memCiConfirm) {
                                                    if ("N" == a.memAdultConfirm) return void noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다.");
                                                    location.href = "/r/" + t.aliasUrl
                                                } else n.childBus.$emit("load", 1, 1, "/r/" + t.aliasUrl)
                                            } else n.childBus.$emit("load", 1, 1, "/r/" + t.aliasUrl)
                                        })
                                    } else location.href = "/r/" + t.aliasUrl;
                                else 2 == t.type ? location.href = "/i/" + t.aliasUrl : 3 == t.type ? location.href = "/sr/" + t.aliasUrl : location.href = "/open/" + t.url
                            },
                            returnUrl: function(t) {
                                location.href = t
                            },
                            getType: function(t) {
                                return "1" == t.type || "4" == t.type && "1" == t.customType ? "리워드" : "2" == t.type || "4" == t.type && "2" == t.customType ? "투자" : "모의펀딩"
                            },
                            getColor: function(t) {},
                            more: function() {
                                this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.load()
                            },
                            goMain: function() {
                                window.open("/", "_self")
                            },
                            none: function() {}
                        },
                        filters: {
                            assign: function(t) {
                                return "ASS001" == t ? "선착순배정" : "ASS002" == t ? "금액순배정" : "기타배정"
                            },
                            secur: function(t) {
                                return "SEC001" == t ? "주식형" : "채권형"
                            },
                            deduction: function(t) {
                                if ("Y" == t) return "소득공제"
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n\t\t\t\t<div class="common_sub_layout">\n\t\t\t\t\t<div class="common_sub_top_menu webfont2">\n\t\t\t\t\t\t\t<div class="hidden-xs" style="border-bottom: 1px solid #ddd;">\n\t                            <a href="javascript:void(0)" :class="{\'active\' : menu == 1}" v-on:click="menuChange(\'1\')"><span class="terms_sub_menu">회원가입 기본약관</span></a>\n\t                            <a href="javascript:void(0)" :class="{\'active\' : menu == 2}" v-on:click="menuChange(\'2\')"><span class="terms_sub_menu">CROWDY 이용약관(리워드)</span></a>\n\t                            <a href="javascript:void(0)" :class="{\'active\' : menu == 3}" v-on:click="menuChange(\'3\')"><span class="terms_sub_menu">CROWDY 이용약관(투자)</span></a>\n\t                            <a href="javascript:void(0)" :class="{\'active\' : menu == 4}" v-on:click="menuChange(\'4\')"><span class="terms_sub_menu">개인정보 처리방침(리워드)</span></a>\t                            <a href="javascript:void(0)" :class="{\'active\' : menu == 5}" v-on:click="menuChange(\'5\')"><span class="terms_sub_menu">개인정보 처리방침(투자)</span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="hidden-sm hidden-md hidden-lg">\n\t\t\t\t\t\t\t\t<menu-select :options="menuOptions" v-model="menu"></menu-select>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="tab-content" v-if="dataConfirm">\n\t\t\t\t\t\t\t\t<div role="tabpanel" class="tab-pane mce-content-body active" v-html="content" style="text-align: left;"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
                        props: ["termMenu"],
                        data: function() {
                            return {
                                dataConfirm: !1,
                                menu: this.termMenu,
                                menuOptions: [{
                                    id: "1",
                                    text: "회원가입 기본약관"
                                }, {
                                    id: "2",
                                    text: "CROWDY 이용약관(리워드)"
                                }, {
                                    id: "3",
                                    text: "CROWDY 이용약관(투자)"
                                }, {
                                    id: "4",
                                    text: "개인정보 처리방침(리워드)"
                                }, {
                                    id: "5",
                                    text: "개인정보 처리방침(투자)"
                                }],
                                terms: []
                            }
                        },
                        components: {
                            menuSelect: e(1).default.component()
                        },
                        computed: {
                            content: function() {
                                var t = _.find(this.terms, {
                                    type: this.menu
                                });
                                return t ? t.content : ""
                            }
                        },
                        created: function() {
                            var t = this;
                            axios.post("/data/crowdy/term", {}).then(function(n) {
                                var e = n.data;
                                t.terms = e.rData, t.dataConfirm = !0
                            })
                        },
                        methods: {
                            menuChange: function(t) {
                                this.menu = t
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n                <div>\n                    \x3c!----------- PC --------------\x3e\n                    <div class="card-ivs-list hidden-xs">\n                        <div class="card-row-01">\n                            <div v-for="(item, index) in invest" class="col-sm-4" >\n                                <figure>\n                                    <a :href="\'/i/\' + item.pjAliasUrl" class="card-ivs-item">\n                                        <div class="card-ivs-img">\n                                            <div class="card-newStatus-icon" v-if="badgeCheck(item.pjStartDate)">NEW</div>\n                                            <img :src="\'//\' + item.pjCardImg + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" alt="..." />\n                                        </div>\n                                        <figcaption>\n                                            <div class="card-ivs-content">\n                                                <div class="card-ivs-name"><span class="card-ivs-type">{{item.pjSecurName}} </span> {{item.companyName}}</div>\n                                                <div class="card-ivs-title">{{item.pjTitle}}</div>\n                                            </div>\n\n                                            <div class="card-ivs-row" v-if="item.pjEndStatus != 0">\n                                                <div class="card-ivs-row-01"> \n                                                    <div class="card-ivs-price crowdy-color-blue"> {{ parseInt(item.pjCurrentAmount).toLocaleString() }}원 펀딩</div>\n                                                    <div class="card-ivs-day" :class="{\'crowdy-color-blue\' : item.pjDday == 0}">\n                                                        <template v-if="item.pjEndStatus == 1">{{endDay(item.pjStartDate, item.pjEndDate)}}</template>\n                                                        <template v-else>종료</template>\n                                                    </div>\n                                                    <div class="card-ivs-persent">{{item.pjRate}}%</div>\n                                                </div>\n                                                <div class="card-ivs-assign">{{item.pjAssignPlType | assign}}</div>\n                                                <div class="card-ivs-deduction" v-if="item.pjDeductionConfirm == \'Y\'">{{item.pjDeductionConfirm | deduction}}</div>\n                                            </div>\n                                            <div class="card-ivs-row textRight" v-if="item.pjEndStatus == 0">\n                                                <div class="card-reward-day crowdy-font-bold">대기</div>\n                                            </div>\n                                        </figcaption>\n                                    </a>\n                                </figure>\n                            </div>\n\n                            \x3c!-- empty status  --\x3e\n                            <div v-if="emptyFlag">\n                                <div class="card-ivs-screening">\n                                    <div class="card-ivs-screeningImg"></div>\n                                    <div class="card-ivs-screeningText">세상을 바꿀 스타트업을 여러분들께 소개하기 위해<br/>꼼꼼하게 스크리닝 중 입니다.</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    \x3c!----------- Mobile --------------\x3e\n                    <div class="card-ivs-list hidden-sm hidden-md hidden-lg">\n                        <div class="card-row-01">\n                            <div v-for="(item, index) in invest" class="col-xs-12">\n                                <a :href="\'/i/\' + item.pjAliasUrl" class="card-ivs-item">\n                                    <div class="card-ivs-img">\n                                        <div class="card-newStatus-icon" v-if="badgeCheck(item.pjStartDate)">NEW</div>\n                                        <img :src="\'//\' + item.pjCardImg + \'/ycrowdy/resize/!340x!226\'"  alt="..." />\n                                    </div>\n                                    <div class="card-ivs-content">\n                                        <div>\n                                            <span class="card-ivs-type">{{item.pjSecurName}} |</span> \n                                            <span class="card-ivs-assign">{{item.pjAssignPlType | assign }}</span>\n                                            <span class="card-ivs-deduction" v-if="item.pjDeductionConfirm == \'Y\'"> | {{item.pjDeductionConfirm | deduction}}</span>\n                                        </div>\n                                        <div class="card-ivs-title">{{item.pjTitle}}</div>\n                                        <div>\n                                            <span class="card-ivs-price" :class="{\'card-ivs-price-mb\' : item.pjCurrentAmount >= 1000000000}"> {{ parseInt(item.pjCurrentAmount).toLocaleString() }}원 펀딩</span>\n                                            <span class="card-ivs-persent">{{item.pjRate}}%</span>\n                                        </div>\n                                        <div style="margin-top:-3px;">\n                                            <span class="card-ivs-day"  :class="{\'card-ivs-nowEnd\' : item.pjDday == 0}">\n                                                <template v-if="item.pjEndStatus == 1">{{endDay(item.pjStartDate, item.pjEndDate)}}</template>\n                                                <template v-else>종료</template>\n                                            </span>\n                                            <span class="card-ivs-name">{{item.companyName}}</span>\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n\n                            \x3c!-- empty status  --\x3e\n                            <div v-if="mEmptyFlag">\n                                <div class="card-ivs-screening">\n                                    <div class="card-ivs-screeningImg"></div>\n                                    <div class="card-ivs-screeningText">세상을 바꿀 스타트업을 여러분들께 소개하기 위해<br/>꼼꼼하게 스크리닝 중 입니다.</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div v-show="moreShow" class="crowdy-btn-paddingleft">\n                        <div v-on:click="more()" class="crowdy-btn-01 crowdy-btn-layout01">{{mainFlag? \'투자프로젝트 더보기\' : \'진행 중인 투자 프로젝트 더보기\'}}</div>\n                    </div>\n                </div>\n            ',
                        props: {
                            mainFlag: {
                                default: !1
                            },
                            communityIdx: {
                                default: ""
                            },
                            paramOrderType: {
                                default: "1"
                            },
                            paramSearchType: {
                                default: "3"
                            },
                            paramEndType: {
                                default: "0"
                            },
                            paramSearchCount: {
                                default: "3"
                            }
                        },
                        data: function() {
                            return {
                                invest: [],
                                search: {
                                    communityIdx: this.communityIdx,
                                    orderType: this.paramOrderType,
                                    endType: this.paramEndType,
                                    searchType: this.paramSearchType,
                                    paging: {
                                        page: "1",
                                        count: this.paramSearchCount
                                    }
                                },
                                totalPageCount: 0,
                                sumPageCount: 0,
                                moreShow: !0,
                                dataCnt: {
                                    ivs: 0
                                },
                                mEmptyFlag: !1,
                                emptyFlag: !1,
                                mobileFlag: !1
                            }
                        },
                        created: function() {
                            $(window).width() < 768 && (this.mobileFlag = !0), this.load()
                        },
                        watch: {
                            paramOrderType: function(t) {
                                this.search.orderType = t, this.search.paging.page = "1", this.invest = [], this.load()
                            },
                            paramEndType: function(t) {
                                this.search.endType = t, this.search.paging.page = "1", this.invest = [], this.load()
                            },
                            paramSearchType: function(t) {
                                this.search.searchType = t, this.search.paging.page = "1", this.invest = [], this.load()
                            }
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/view/invest/list", this.search).then(function(n) {
                                    1 == t.search.paging.page && (t.totalPageCount = n.data.rData.cardCount), t.invest = _.concat(t.invest, n.data.rData.cardList), t.totalPageCount <= t.invest.length ? t.moreShow = !1 : t.moreShow = !0, "" != t.communityIdx ? 0 == t.invest.length && t.$emit("data-count-confirm", "invest") : null == t.invest || "" == t.invest ? (t.dataCnt.ivs = 0, t.emptyLoad(), t.$emit("invest-status")) : (t.dataCnt.ivs = t.invest.length, t.dataCnt.ivs < t.paramSearchCount && t.emptyLoad(), t.mEmptyFlag = !1)
                                })
                            },
                            more: function() {
                                this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.load()
                            },
                            endDay: function(t, n, e) {
                                var a = moment().format("YYYY-MM-DD"),
                                    i = (moment(t), moment(n)),
                                    r = i.diff(a, "days");
                                return r > 0 ? "D - " + r : this.endTime()
                            },
                            endTime: function() {
                                return moment.updateLocale("en", {
                                    relativeTime: {
                                        hh: "%d시간 남음",
                                        mm: "%d분 남음",
                                        d: "오늘까지",
                                        h: "1시간 남음"
                                    }
                                }), moment().endOf("day").add(-1, "hours").fromNow(!0)
                            },
                            badgeCheck: function(t) {
                                var n = moment(new Date),
                                    e = moment(t);
                                return n.diff(e, "days") < 7
                            },
                            emptyLoad: function() {
                                var t = this,
                                    n = t.dataCnt.ivs;
                                if (n < t.paramSearchCount) {
                                    var e = "col-sm-" + 4 * (t.paramSearchCount - n);
                                    t.$nextTick(function() {
                                        $(".card-ivs-screening").parent("div").addClass(e)
                                    }), t.emptyFlag = !0, t.mEmptyFlag = !0
                                }
                            }
                        },
                        filters: {
                            assign: function(t) {
                                return "ASS001" == t ? "선착순배정" : "ASS002" == t ? "금액순배정" : "기타배정"
                            },
                            deduction: function(t) {
                                if ("Y" == t) return "소득공제"
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n            <div class="crowdy-tv">\n                <div class="card-video-list">\n                    <div class="card-video-btn">\n                        <div class="btn-left-arrow"></div>\n                    </div>\n                    <div id="video-list" class="card-video-row">\n                        <div v-for="(item, index) in video">\n                            <a v-on:click="link(item)" class="card-video-item">\n                                <img :src="\'//\' + item.videoThumImg + \'/ycrowdy/resize/!544x!312\'" alt="" />\n                                <div class="card-video-play">\n                                    <div class="btn-video-play"></div>\n                                </div>\n                                <div class="card-video-title">                                \n                                    <div class="video-main-title">{{item.videoTitle}}</div>\n                                    <div class="video-sub-title">{{item.videoSubTitle}}</div>\n                                </div>\n                            </a>\n                        </div>\n                    </div>\n                    <div class="card-video-btn">\n                        <div class="btn-right-arrow"></div>\n                    </div>\n                </div>\n                \n            </div> \n\n            ',
                        data: function() {
                            return {
                                video: []
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        updated: function() {},
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/view/invest/video", {}).then(function(n) {
                                    t.video = _.filter(n.data.rData, {
                                        videoPin: "0"
                                    }), t.video = _.shuffle(t.video);
                                    var e = _.filter(n.data.rData, function(t) {
                                        if (t.videoPin > 0) return t
                                    });
                                    if (_.size(e) > 0)
                                        for (var a = 0; a < _.size(e); a++) {
                                            var i = e[a];
                                            t.video.splice(i.videoPin - 1, 0, i)
                                        }
                                    t.$nextTick(function() {
                                        $("#video-list").slick({
                                            dots: !0,
                                            prevArrow: $(".card-video-btn .btn-left-arrow"),
                                            nextArrow: $(".card-video-btn .btn-right-arrow"),
                                            centerMode: !0,
                                            infinite: !0,
                                            centerPadding: "170px",
                                            slidesToShow: 1,
                                            slideToScroll: 1,
                                            speed: 300,
                                            cssEase: "linear",
                                            autoplaySpeed: 3e3,
                                            autoplay: !0,
                                            variableWidth: !0,
                                            customPaging: function(t, n) {
                                                return '<a href="#"><div></div></a>'
                                            }
                                        })
                                    })
                                })
                            },
                            link: function(t) {
                                window.open("https://" + t.videoUrl, "_blank")
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n                <div>\n                    <div class="card-preopen-list">\n                        <div class="card-row-02">\n                            <div v-for="(item, index) in preOpen" class="col-sm-3 col-xs-6" >\n                                <figure>\n                                    <a :href="\'/open/\' + item.preopenIdx" class="card-preopen-item">\n                                        <div class="card-preopen-img">\n                                            <img :src="\'//\' + item.preopenImg + \'/ycrowdy/resize/!370x!246\'" class="img-responsive" alt="" />\n                                        </div>\n                                        <figcaption>\n                                            <div class="card-preopen-content">\n                                                <div class="card-preopen-name">\n                                                    <span class="card-preopen-type">{{typeConvert(item.preopenType)}} \n                                                    </span> {{item.preopenBrand}}</div>\n                                                <div class="card-preopen-title">{{item.preopenTitle}}</div>\n                                                <div class="card-preopen-price">{{item.preopenOpneDay}} &nbsp;오픈!</div>\n                                            </div>\n                                        </figcaption>\n                                    </a>\n                                </figure>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div v-show="moreShow">\n                        <div v-on:click="more()" class="crowdy-btn-01 crowdy-btn-layout01">사전공개 더보기</div>\n                    </div>\n                </div>\n            ',
                        props: {
                            main: {
                                default: !0
                            },
                            communityIdx: {
                                default: ""
                            },
                            paramPreopenType: {
                                default: "0"
                            },
                            paramSearchCount: {
                                default: "12"
                            }
                        },
                        data: function() {
                            return {
                                preOpen: [],
                                search: {
                                    communityIdx: this.communityIdx,
                                    preopenType: this.paramPreopenType,
                                    paging: {
                                        page: "1",
                                        count: this.paramSearchCount
                                    }
                                },
                                moreShow: !0
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        watch: {
                            paramPreopenType: function(t) {
                                this.search.preopenType = t, this.search.paging.page = "1", this.preOpen = [], this.load()
                            }
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/crowdy/pre-project/list", this.search).then(function(n) {
                                    1 == t.search.paging.page && (t.totalPageCount = n.data.rData.dataCount), t.preOpen = _.concat(t.preOpen, n.data.rData.dataList), t.totalPageCount <= t.preOpen.length ? t.moreShow = !1 : t.moreShow = !0, 0 == t.preOpen.length && (t.$emit("data-count-confirm", "preopen"), t.$emit("preopen-stauts"))
                                })
                            },
                            typeConvert: function(t) {
                                return "1" == t ? "리워드" : "투자"
                            },
                            more: function() {
                                this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.load()
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
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
                            memberAdultCerti: e(0).default.component()
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
                            $("#authModal").on("hidden.bs.modal", function(t) {
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
                            paramOrderType: function(t) {
                                this.search.orderType = t, this.search.paging.page = 1, this.reward = [], this.load()
                            },
                            paramEndType: function(t) {
                                this.search.endType = t, this.search.paging.page = 1, this.reward = [], this.load()
                            }
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                this.dataConfirm = !1, axios.post("/data/view/reward/list", this.search).then(function(n) {
                                    1 == t.search.paging.page && (t.totalPageCount = n.data.rData.cardCount), t.reward = _.concat(t.reward, n.data.rData.cardList), t.totalPageCount <= t.reward.length ? t.moreShow = !1 : t.moreShow = !0, 0 == t.reward.length && ("Y" == t.simulationStatus ? t.$emit("data-count-confirm", "simulation") : t.$emit("data-count-confirm", "reward")), "Y" == t.simulationStatus ? t.link = "/sr/" : t.link = "/r/", t.dataConfirm = !0
                                })
                            },
                            more: function() {
                                this.search.paging.page = _.toString(_.add(_.toNumber(this.search.paging.page), 1)), this.load()
                            },
                            badgeCheck: function(t) {
                                var n = moment(new Date),
                                    e = moment(t);
                                return n.diff(e, "days") < 7
                            },
                            changeUrl: function(t) {
                                var n = this;
                                if ("Y" == t.cpAdultType && "Y" == t.cpAdultImgType) {
                                    if (!userInfo.loginConfirm()) return;
                                    $(".page-loader-more").fadeIn(""), axios.post("/data/member/certi/adult", {
                                        memCode: userInfo.memCode
                                    }).then(function(e) {
                                        if ($(".page-loader-more").fadeOut(""), "0000" == e.data.rCode) {
                                            var a = e.data.rData;
                                            if ("Y" == a.memCiConfirm) {
                                                if ("N" == a.memAdultConfirm) return void noti.open("이 프로젝트는 만 19세 이상의 성인만<br /> 참여하실 수 있습니다.");
                                                location.href = n.link + t.cpAliasUrl
                                            } else n.childBus.$emit("load", 1, 1, n.link + t.cpAliasUrl)
                                        } else n.childBus.$emit("load", 1, 1, n.link + t.cpAliasUrl)
                                    })
                                } else location.href = this.link + t.cpAliasUrl
                            },
                            returnUrl: function(t) {
                                location.href = t
                            },
                            none: function() {}
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    "use strict";

    function a(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = function() {
            function t(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var a = n[e];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                }
            }
            return function(n, e, a) {
                return e && t(n.prototype, e), a && t(n, a), n
            }
        }(),
        r = function() {
            function t() {
                a(this, t)
            }
            return i(t, [{
                key: "component",
                value: function() {
                    return {
                        template: '\n                <div>\n                    <div class="main-box-wrap" v-if="dataConfirm">\n                        <div class="container">\n                            <div class="main-box">\n                                <div class="title">\n                                    <div class="title-block">\n                                        <span class="main-title">새로운 리워드</span>\n                                        <a href="/reward/list" class="title-line"><span class="main-title-description">새로 시작한 프로젝트들을 만나보세요</span><i class="fa fa-angle-right hidden-md hidden-lg" aria-hidden="true"></i></a>\n                                    </div>\n                                </div>\n\n                                <div class="rewards-list">\n                                    <div class="row row-mobile">\n                                        <div v-for="(item, index) in reward"\n                                            class="col-sm-4 col-md-3 col-xs-6 list_card_pre_open_height_parent">\n                                            <figure>\n                                                <a :href="\'/r/\' + item.cpAliasUrl" class="items over-box list_card_pre_open_height">\n                                                    <div class="items_img">\n                                                        <div class="badge_icon full-badge">NEW!</div>\n                                                        <div class="badge_icon badge_icon_event" v-if="item.cpEndStatus ==\'2\'">성공</div>\n                                                        <div class="badge_icon badge_icon_event" v-if="item.cpEndStatus ==\'3\'">종료</div>\n                                                        <img :src="\'//\' + item.cpCardImg + \'/ycrowdy/resize/!340x!226\'" class="img-responsive" alt="..." />\n                                                    </div>\n                                                    <figcaption class="rewards-caption">\n                                                        <div class="rewards-subject new-subject">\n                                                            <div class="rewards-summury">{{item.memName}}</div>\n                                                            <div class="rewards-card-title">{{item.cpTitle}}</div>\n                                                        </div>\n                                                        <div class="progress visible-hidden hidden-lg">\n                                                            <div class="progress-bar" role="progressbar" :aria-valuenow="item.cpRate" aria-valuemin="0" aria-valuemax="100" :style="{width: item.cpRate + \'%\'}"><span class="sr-only">{{item.cpRate}}% 완료</span></div>\n                                                        </div>\n\n                                                        <div class="row not-space">\n                                                            <div class="col-xs-12">\n                                                                <div class="rewards-support font-blue pb2">지금 바로 펀딩하세요!</div>\n                                                            </div>\n                                                        </div>\n                                                    </figcaption>\n                                                </a>\n                                            </figure>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <template v-if="dataConfirm">\n                                    <div v-show="moreShow">\n                                       <a href="javascript:void(10)" v-on:click="more()" class="btn btn-primary-outline col-sm-8 col-md-6 col-xs-12 col-sm-offset-2 col-md-offset-3 btn-more text-center mt30 xs-mt20">새로운 리워드 더보기</a>\n                                    </div>\n                                </template>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    \n                </div>\n            ',
                        props: {
                            paramSearchCount: {
                                default: "4"
                            }
                        },
                        data: function() {
                            return {
                                reward: [],
                                search: {
                                    paging: {
                                        page: "1",
                                        count: this.paramSearchCount
                                    }
                                },
                                count: 0,
                                moreShow: !0,
                                dataConfirm: !1
                            }
                        },
                        created: function() {
                            this.load()
                        },
                        methods: {
                            load: function() {
                                var t = this;
                                axios.post("/data/view/reward/new-list", this.search).then(function(n) {
                                    t.count = n.data.rData.cardCount, n.data.rData.cardCount > 0 && (t.reward = _.concat(t.reward, n.data.rData.cardList), (n.data.rData.cardCount < 5 || t.reward.length == t.count) && (t.moreShow = !1), t.dataConfirm = !0)
                                })
                            },
                            more: function() {
                                this.search.paging.page = 2, this.load()
                            }
                        }
                    }
                }
            }]), t
        }();
    n.default = new r
}, function(t, n, e) {
    t.exports = e(3)
}]);