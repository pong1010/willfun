! function(t) {
	function e(i) {
		if (n[i]) return n[i].exports;
		var o = n[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var n = {};
	e.m = t, e.c = n, e.i = function(t) {
		return t
	}, e.d = function(t, n, i) {
		e.o(t, n) || Object.defineProperty(t, n, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, e.n = function(t) {
		var n = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return e.d(n, "a", n), n
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "", e(e.s = 32)
}([function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<input type="file" class="dropify" v-on:change="read" :data-allowed-file-extensions="defaultFileExt" :data-max-file-size-preview="defaultFileMaxSize"/>\n\t\t\t',
						props: {
							defaultMessage: {
								default: "이미지 추가하기"
							},
							defaultImg: {
								default: ""
							},
							defaultFileExt: {
								default: "png jpg jpeg"
							},
							defaultFileMaxSize: {
								default: "5M"
							},
							defaultIndex: {
								default: 0
							}
						},
						data: function() {
							return {
								file: {
									fileData: "",
									fileName: this.defaultImg,
									state: !0
								},
								tag: ""
							}
						},
						computed: {
							img: function() {
								return "" != this.defaultImg ? "//" + this.defaultImg : this.defaultImg
							}
						},
						beforeDestroy: function() {
							this.tag.destroy()
						},
						mounted: function() {
							var t = this,
								e = $(this.$el).dropify({
									defaultFile: t.img,
									messages: {
										default: t.defaultMessage,
										replace: "터치 하여 이미지를 교체 합니다",
										remove: "삭제",
										error: "오류가 발생하였습니다."
									}
								});
							e.on("dropify.afterClear", function(e, n) {
								t.file.fileData = "", t.file.fileName = "", t.$emit("input", t.file), t.$emit("clear", t.defaultIndex), t.$emit("remove-img")
							}), this.tag = e.data("dropify")
						},
						methods: {
							read: function(t) {
								var e = this,
									n = t.target.files || t.dataTransfer.files;
								if (n.length) {
									var i = new FileReader;
									i.onload = function(t) {
										n[0] && (e.file.fileData = t.target.result, e.file.fileName = n[0].name, e.$emit("input", e.file))
									}, i.readAsDataURL(n[0])
								}
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: "\n\t\t\t\t<select>\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</select>\n\t\t\t",
						props: ["options", "value", "placeholderText"],
						mounted: function() {
							var t = this,
								e = {
									data: this.options,
									minimumResultsForSearch: -1
								};
							void 0 != this.placeholderText && (e.placeholder = this.placeholderText), $(this.$el).select2(e).val(this.value).trigger("change").on("change", function() {
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
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<input class="form-control datetimepicker"/>\n\t\t\t',
						props: {
							dateFormat: {
								default: "yy-mm-dd"
							},
							date: {
								type: String,
								required: !0
							},
							max: {
								type: String,
								required: !1,
								default: null
							},
							min: {
								type: String,
								required: !1,
								default: null
							}
						},
						watch: {
							date: function() {
								$(this.$el).datepicker("setDate", this.date)
							}
						},
						mounted: function() {
							var t = this;
							$(this.$el).datepicker({
								dateFormat: t.dateFormat,
								prevText: "이전 달",
								nextText: "다음 달",
								monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
								monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
								dayNames: ["일", "월", "화", "수", "목", "금", "토"],
								dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
								dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
								showMonthAfterYear: !0,
								yearSuffix: "년",
								onSelect: function(e) {
									t.$emit("input", e)
								},
								beforeShow: function(t) {
									$(t).css({
										"z-index": 999999
									})
								},
								maxDate: t.max,
								minDate: t.min
							}).datepicker("setDate", t.date)
						},
						beforeDestroy: function() {
							$(this.$el).datepicker("hide").datepicker("destroy")
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
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
							var t = this;
							tinymce.init({
								selector: "#" + t.id,
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
								paste_preprocess: function(t, e) {
									var n = e.content,
										i = $(document.createElement("div"));
									i.html(n), i.find("*").removeAttr("style"), i.find("img").each(function() {
										$(this).attr("src").indexOf("ycrowdy") < 0 && $(this).remove()
									}), e.content = i.html()
								},
								force_p_newlines: !0,
								forced_root_block: "p",
								extended_valid_elements: "span[!class]",
								automatic_uploads: !0,
								file_picker_types: "image",
								file_picker_callback: function(e, n, i) {
									var o = document.createElement("input");
									o.setAttribute("type", "file"), o.setAttribute("accept", "image/*"), document.body.appendChild(o), o.onchange = function(n) {
										var i = n.target.files || n.dataTransfer.files;
										if (i.length) {
											var o = new FileReader;
											o.onload = function(n) {
												if (i[0]) {
													var o = {};
													o.fileData = n.target.result, o.fileName = i[0].name, t.imageSave(e, o)
												}
											}, o.readAsDataURL(i[0])
										}
									}, o.click()
								},
								setup: function(t) {
									t.addButton("backgroundcolor", {
										icon: "backcolor",
										tooltip: "글자 배경색 바꾸기",
										id: "editor_highlight",
										onclick: function(e) {
											t.execCommand("mceToggleFormat", !1, "backgroundcolor")
										},
										onPostRender: function() {
											var e = this;
											t.on("NodeChange", function(n) {
												var i = jQuery(t.selection.getNode()).hasClass("bg_color");
												e.active(i)
											})
										}
									}), t.addButton("textcolor", {
										icon: "forecolor",
										tooltip: "글자색 바꾸기",
										id: "editor_blue",
										onclick: function(e) {
											t.execCommand("mceToggleFormat", !1, "textcolor")
										},
										onPostRender: function() {
											var e = this;
											t.on("NodeChange", function(n) {
												var i = jQuery(t.selection.getNode()).hasClass("txt_color");
												e.active(i)
											})
										}
									}), t.addButton("custom_underline", {
										icon: "underline",
										tooltip: "밑줄",
										onclick: function(e) {
											t.execCommand("mceToggleFormat", !1, "custom_underline")
										},
										onPostRender: function() {
											var e = this;
											t.on("NodeChange", function(n) {
												var i = jQuery(t.selection.getNode()).hasClass("custom_underline");
												e.active(i)
											})
										}
									}), t.addButton("crowdy_list", {
										type: "menubutton",
										icon: "bullist",
										tooltip: "리스트",
										menu: [{
											icon: "bullist",
											text: "점 리스트",
											tooltip: "점 리스트",
											onclick: function() {
												t.execCommand("InsertUnorderedList")
											}
										}, {
											icon: "numlist",
											text: "숫자 리스트",
											tooltip: "숫자 리스트",
											onclick: function() {
												t.execCommand("InsertOrderedList")
											}
										}]
									}), t.addButton("crowdy_hr", {
										type: "menubutton",
										image: "/resources/css/img/btn_icon_hr1.png",
										tooltip: "구분선",
										menu: [{
											icon: "/resources/css/img/btn_icon_hr1.png",
											image: "/resources/css/img/btn_icon_hr1.png",
											text: "긴 구분선",
											tooltip: "긴 구분선",
											onclick: function() {
												t.insertContent('<hr class="hr1"/><p><br/></p>')
											}
										}, {
											icon: "/resources/css/img/btn_icon_hr2.png",
											image: "/resources/css/img/btn_icon_hr2.png",
											text: "짧은 구분선",
											tooltip: "짧은 구분선",
											onclick: function() {
												t.insertContent('<hr class="hr2"/><p><br/></p>')
											}
										}]
									}), t.addButton("crowdy_blockquote", {
										type: "menubutton",
										image: "/resources/css/img/btn_icon_bq1.png",
										tooltip: "인용구",
										menu: [{
											icon: "/resources/css/img/btn_icon_bq1.png",
											image: "/resources/css/img/btn_icon_bq1.png",
											text: "인용구1",
											tooltip: "인용구1",
											onclick: function() {
												var e = jQuery(t.selection.getNode()),
													n = e.hasClass("blockquote_center"),
													i = e.text();
												"" != i && " " != i || (i = "내용을 입력해주세요."), t.selection.getNode().parentNode.removeChild(t.selection.getNode()), n ? t.insertContent("<p> " + i + "</p>") : t.insertContent('<blockquote class="blockquote_center"> ' + i + " </blockquote>")
											},
											onPostRender: function() {
												var e = this;
												t.on("NodeChange", function(n) {
													var i = jQuery(t.selection.getNode()).hasClass("blockquote_center");
													e.active(i)
												})
											}
										}, {
											icon: "/resources/css/img/btn_icon_bq2.png",
											tooltip: "인용구2",
											text: "인용구2",
											image: "/resources/css/img/btn_icon_bq2.png",
											onclick: function() {
												var e = jQuery(t.selection.getNode()),
													n = e.hasClass("blockquote_left"),
													i = e.text();
												"" != i && " " != i || (i = "내용을 입력해주세요."), t.selection.getNode().parentNode.removeChild(t.selection.getNode()), n ? t.insertContent("<p> " + i + "</p>") : t.insertContent('<blockquote class="blockquote_left"> ' + i + " </blockquote>")
											},
											onPostRender: function() {
												var e = this;
												t.on("NodeChange", function(n) {
													var i = jQuery(t.selection.getNode()).hasClass("blockquote_left");
													e.active(i)
												})
											}
										}]
									})
								},
								init_instance_callback: function(e) {
									e.on("KeyUp", function(n) {
										t.$emit("input", e.getContent())
									}), e.on("Change", function(n) {
										t.$emit("input", e.getContent())
									}), e.setContent(t.removeStyleAttr(t.value))
								}
							})
						},
						destroyed: function() {
							tinymce.get(this.id).destroy()
						},
						methods: {
							imageSave: function(t, e) {
								$(".page-loader-more").fadeIn(""), axios.post("/file/upload", {
									fileType: "aws",
									file: e
								}).then(function(n) {
									$(".page-loader-more").fadeOut(""), t("//" + n.data, {
										title: e.fileName
									})
								})
							},
							removeStyleAttr: function(t) {
								var e = $(document.createElement("div"));
								return e.html(t), e.find("*").removeAttr("style"), t = e.html()
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n                <input type="text" :value="url" @input="updateUrl($event.target.value)" ref="input"/>\n            ',
						props: ["url"],
						methods: {
							updateUrl: function(t) {
								var e = t.replace(/^\s+|\s+$/g, "");
								this.$refs.input.value = e.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Z|~!?@\#$%<>^&*\()=+\’\\,.:;\'\"`\/]/g, ""), this.$emit("input", e.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|A-Z|~!?@\#$%<>^&*\()=+\’\\,.:;\'\"`\/]/g, ""))
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
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
							var t = this;
							tinymce.init({
								selector: "#" + t.id,
								height: "650",
								theme: "modern",
								skin: "white",
								menubar: !1,
								plugins: ["autolink lists link image hr visualblocks media table textcolor paste"],
								toolbar1: "undo redo | link image media",
								content_css: ["/resources/css/custom-tinymce.min.css?20190911v01", "/resources/js/tinymce/skins/white/skin.min.css"],
								default_link_target: "_blank",
								link_title: !1,
								target_list: !1,
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
								paste_preprocess: function(t, e) {
									var n = e.content,
										i = $(document.createElement("div"));
									i.html(n), i.find("*").removeAttr("style"), i.find("img").each(function() {
										$(this).attr("src").indexOf("ycrowdy") < 0 && $(this).remove()
									}), e.content = i.html()
								},
								force_p_newlines: !0,
								forced_root_block: "p",
								extended_valid_elements: "span[!class]",
								automatic_uploads: !0,
								file_picker_types: "image",
								file_picker_callback: function(e, n, i) {
									var o = document.createElement("input");
									o.setAttribute("type", "file"), o.setAttribute("accept", "image/*"), document.body.appendChild(o), o.onchange = function(n) {
										var i = n.target.files || n.dataTransfer.files;
										if (i.length) {
											var o = new FileReader;
											o.onload = function(n) {
												if (i[0]) {
													var o = {};
													o.fileData = n.target.result, o.fileName = i[0].name, t.imageSave(e, o)
												}
											}, o.readAsDataURL(i[0])
										}
									}, o.click()
								},
								init_instance_callback: function(e) {
									e.on("KeyUp", function(n) {
										t.$emit("input", e.getContent())
									}), e.on("Change", function(n) {
										t.$emit("input", e.getContent())
									}), e.setContent(t.removeStyleAttr(t.value))
								}
							})
						},
						destroyed: function() {
							tinymce.get(this.id).destroy()
						},
						methods: {
							imageSave: function(t, e) {
								$(".page-loader-more").fadeIn(""), axios.post("/file/upload", {
									fileType: "aws",
									file: e
								}).then(function(n) {
									$(".page-loader-more").fadeOut(""), t("//" + n.data, {
										title: e.fileName
									})
								})
							},
							removeStyleAttr: function(t) {
								var e = $(document.createElement("div"));
								return e.html(t), e.find("*").removeAttr("style"), t = e.html()
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	window.make = {}, make.start = n(21).default, make.invest = {}, make.invest.main = n(15).default, make.invest.reuqest = n(18).default, make.reward = {}, make.reward.main = n(25).default, make.simulation = {}, make.simulation.main = n(30).default
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<input type="file" v-on:change="read"/>\n\t\t\t',
						props: {
							size: {
								default: 10
							}
						},
						data: function() {
							return {
								file: {
									fileData: "",
									fileName: "",
									state: !0
								}
							}
						},
						methods: {
							read: function(t) {
								var e = this,
									n = t.target.files || t.dataTransfer.files;
								if (n.length) {
									var i = new FileReader;
									i.onload = function(t) {
										if (n[0].size / 1024e3 > e.size) return void e.$emit("error", n[0].size);
										e.file.fileData = t.target.result, e.file.fileName = n[0].name, e.$emit("input", e.file)
									}, i.readAsDataURL(n[0])
								}
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<input type="text" class="form-control input-sm keyword" placeholder="키워드 입력 후 엔터를 눌러주세요."/>\n\t\t\t',
						data: function() {
							return {
								value: []
							}
						},
						mounted: function() {
							var t = this;
							t.$nextTick(function() {
								$(this.$el).on("tokenfield:createtoken", function(e) {
									t.value.push(e.attrs.value), t.$emit("input", t.value)
								}).on("tokenfield:removedtoken", function(e) {
									t.value = _.without(t.value, e.attrs.value), t.$emit("input", t.value)
								}).tokenfield()
							})
						},
						watch: {}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mt10">\n\t\t\t\t\t\t\t\t\t\t\t등록하기를 눌러 프로젝트와 관련된 뉴스를 등록해주세요!\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m" />\n\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mb30">\n\t\t\t\t\t\t\t\t\t\t\t<strong>등록된 뉴스</strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_group">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_loop" v-for="(item, index) in articleList">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5>제목 : {{item.pjaTitle}}</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_memo">링크 : {{item.pjaUrl}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_btn text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="modalOpen(item)">수정하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete btn_delete_grey grey-500 ml20" v-on:click="remove(item.pjaIdx)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2" v-if="articleList.length < 1">\n\t\t\t\t\t\t\t\t\t\t\t\t등록된 뉴스가 없습니다.\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t                                    <a class="btn btn-block btn-primary-outline" v-on:click="modalOpen(\'\')">새로 등록하기</a>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="nextStep">다음단계</a>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\x3c!-- 등록하기 / 수정하기 --\x3e\n\t\t\t\t\t<div id="articlemModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n\t\t\t\t\t\t<div class="modal-dialog" role="document">\n\t\t\t\t\t\t\t<form class="form-horizontal modal-content">\n\t\t\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t\t\t<div class="modal-title crowdy-font-bold">{{statusText}}하기</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt30 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="article_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">링크</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="col-md-8 col-sm-8 col-xs-10" v-model="updateArticle.pjaUrl" placeholder="https://까지 다 입력해주세요."/>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-2 col-sm-2 col-xs-12 btn btn-primary ml20" v-on:click="connectUrl">정보 가져오기</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt10 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">제목</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="updateArticle.pjaTitle" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt10 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">내용</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="updateArticle.pjaContent" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt10 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">출처</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="updateArticle.pjaFrom" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt10 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">공개/비공개</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-10 col-sm-10 col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<order-select :options="statusOptions" v-model="updateArticle.pjaStatus"></order-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="article_memo_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">뉴스작성일</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="updateArticle.pjaDate" :date="updateArticle.pjaDate"></date-picker>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t<a class="pointerCursor" data-dismiss="modal">취소</a>\n\t\t\t\t\t\t\t\t\t\t<a class="ml30 modalBlueBtn" v-on:click="save">{{statusText}}</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- //수정하기 --\x3e\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								articleList: [],
								resetArticle: {
									pjCode: this.pjCode,
									pjaIdx: "",
									pjaTitle: "",
									pjaContent: "",
									pjaFrom: "",
									pjaUrl: "",
									pjaStatus: 1,
									pjaDate: ""
								},
								updateArticle: {
									pjCode: this.pjCode,
									pjaIdx: "",
									pjaTitle: "",
									pjaContent: "",
									pjaFrom: "",
									pjaUrl: "",
									pjaStatus: 1,
									pjaDate: ""
								},
								search: {
									pjCode: this.pjCode,
									paging: {
										count: 0,
										start: 0
									}
								},
								statusOptions: [{
									id: 0,
									text: "비공개"
								}, {
									id: 1,
									text: "공개"
								}]
							}
						},
						components: {
							orderSelect: n(1).default.component(),
							datePicker: n(2).default.component()
						},
						computed: {
							statusText: function() {
								return "" != this.updateArticle.pjaIdx ? "수정" : "등록"
							}
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/article", this.search).then(function(e) {
									"0000" == e.data.rCode ? t.articleList = e.data.rData.list : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							connectUrl: function() {
								var t = this;
								$(".page-loader-more").fadeIn(""), axios.get("https://cors-anywhere.herokuapp.com/" + this.updateArticle.pjaUrl).then(function(e) {
									$(".page-loader-more").fadeOut("");
									var n = $(e.data);
									t.updateArticle.pjaContent = t.getMetaContent(n, "description"), t.updateArticle.pjaTitle = t.getMetaContent(n, "title"), void 0 !== t.updateArticle.pjaTitle && "" != t.updateArticle.pjaTitle || (t.updateArticle.pjaTitle = t.getTitle(n, "title")), t.updateArticle.pjaFrom = t.getMetaContent(n, "site_name")
								}).catch(function() {
									$(".page-loader-more").fadeOut(""), noti.open("에러입니다! 입력하신 URL을 확인해주세요!")
								})
							},
							getMetaContent: function(t, e) {
								return t.filter(function(t, n) {
									return n && n.name && n.name == e || "META" == n.nodeName && n.outerHTML.indexOf("og:" + e) > -1
								}).attr("content")
							},
							getTitle: function(t, e) {
								return t.filter(function(t, n) {
									return n == e
								}).attr("text")
							},
							save: function() {
								if (1 == this.pjStatus) return void noti.open("승인대기 중인 프로젝트는 수정이 불가능합니다.");
								if ("" == this.updateArticle.pjaTitle) return void noti.open("제목을 입력하세요.");
								if ("" == this.updateArticle.pjaContent) return void noti.open("내용을 입력하세요.");
								if ("" == this.updateArticle.pjaFrom) return void noti.open("출처를 입력하세요.");
								if ("" == this.updateArticle.pjaUrl) return void noti.open("링크를 입력하세요");
								if ("" == this.updateArticle.pjaDate) return void noti.open("뉴스작성일을 입력하세요");
								var t = this;
								$(".page-loader-more").fadeIn(""), axios.post("/data/save/invest/article", this.updateArticle).then(function(e) {
									if ($(".page-loader-more").fadeOut(""), "0000" != e.data.rCode) return void noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.");
									noti.open("저장되었습니다."), $("#articlemModal").modal("hide"), t.load()
								})
							},
							modalOpen: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중인 프로젝트는 수정이 불가능합니다.");
								this.updateArticle = "" == t ? _.clone(this.resetArticle) : _.clone(t), $("#articlemModal").modal("show")
							},
							remove: function(t) {
								if (confirm("삭제하시겠습니까?")) {
									var e = this;
									$(".page-loader-more").fadeIn(""), axios.post("/data/save/invest/delete/article", {
										pjaIdx: t
									}).then(function(t) {
										if ($(".page-loader-more").fadeOut(""), "0000" != t.data.rCode) return void noti.open("에러가 발생했습니다.");
										noti.open("삭제되었습니다."), e.load()
									})
								}
							},
							nextStep: function() {
								this.$emit("step-change", 10, !0)
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t    <div class="row not-space">\n\t\t\t\t        <div class="col-lg-1"></div>\n\t\t\t\t        <div class="col-lg-11">\n\t\t\t\t            <div class="md-ml30 mt5 md-mt0">\n\t\t\t\t                <form class="form-horizontal">\n\t\t\t\t                    <div class="control-label control-label-big-lg webfont2">\n\t\t\t\t                        <div class="text-left mb15">시작하기 전에</div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <p class="form-control-static mb40 md-mb40">\n\t\t\t\t                        프로젝트 진행을 쉽게 하기위해 ‘프로젝트 진행하기 가이드’를 준비하였습니다.\n\t\t\t\t                        <br /> 상세한 안내를 원하시면 가이드를 다운 받으세요.\n\t\t\t\t                    </p>\n\t\t\t\t                    <div class="form-group row-mobile-n">\n\t\t\t\t                    \t<div class="col-md-6 mb40"><a href="https://image-se.ycrowdy.com/file/%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8_ver2018.pdf" target="_blank" class="btn btn-block btn-primary-outline">투자 가이드 다운받기</a></div> \n\t\t\t\t                    </div>\n\t\t\t\t                    <div class="form-group row-mobile-n">\n\t\t\t\t                        <label for="project_subject" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                            <div class="text-left">프로젝트 제목</div>\n\t\t\t\t                        </label>\n\t\t\t\t                        <div class="col-xs-12 col-sm-8">\n\t\t\t\t                            <input type="text" class="form-control" v-model.trim="request.pjTitle" maxlength="50" :disabled="pjStatus != 0" />\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="col-xs-12 col-sm-2">\n\t\t\t\t                            <span class="textarea_text_leng webfont2 mt10"><span v-text="request.pjTitle.length"></span> / 50</span>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class="form-group row-mobile-n">\n\t\t\t\t                        <label for="project_summary" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                            <div class="text-left">프로젝트 요약</div>\n\t\t\t\t                        </label>\n\t\t\t\t                        <div class="col-xs-12 col-sm-8">\n\t\t\t\t                        \t<textarea rows="4" cols="50" class="form-control" v-model="request.pjSummary" :disabled="pjStatus == 1"></textarea>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class="form-group row-mobile-n">\n\t\t\t\t                        <label for="project_weburl" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                            <div class="text-left">프로젝트 웹주소 설정</div>\n\t\t\t\t                        </label>\n\t\t\t\t                        <div class="col-xs-4 col-sm-3">\n\t\t\t\t                            <p class="form-control-static">https://www.ycrowdy.com/i/</p>\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="col-xs-8 col-sm-3">\n\t\t\t\t                        \t<url-input :url="url" v-model="url" class="form-control" :class="{\'error\' : !urlConfirm}" maxlength="30" placeholder="프로젝트 명" :disabled="pjStatus != 0"></url-input>\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="col-xs-12" v-if="!urlConfirm">\n\t\t\t\t\t\t\t\t\t\t\t<label style="margin-left:15px;" class="error" v-text="\'이미 같은 주소가 있습니다. 새로운 주소를 입력해주세요\'"></label>\n\t\t\t                        \t</div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class="form-group row-mobile-n">\n\t\t\t\t                        <div class="col-xs-12 col-sm-6">\n\t\t\t\t                            <div class="row row-mobile-n">\n\t\t\t\t                                <label for="project_img" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                                    <div class="text-left">프로젝트 이미지</div>\n\t\t\t\t                                </label>\n\t\t\t\t                                <div class="col-xs-12 dropify-wrapper-340">\n\t\t\t\t                                    <dropify-input v-if="dataConfirm" v-model="request.pjCardFile" default-message="최적 사이즈 740 X 492" :default-img="request.pjCardImg"></dropify-input>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="col-xs-12 col-sm-6">\n\t\t\t\t                            <div class="row row-mobile-n">\n\t\t\t\t                                <label for="company_ci" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                                    <div class="text-left">회사 로고(CI)</div>\n\t\t\t\t                                </label>\n\t\t\t\t                                <div class="col-xs-12 dropify-wrapper-350">\n\t\t\t\t                                    <dropify-input v-if="dataConfirm" v-model="request.pjCiFile" default-message="최적 사이즈 350 X 350" :default-img="request.companyCiImg"></dropify-input>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    \x3c!-- <div class="form-group row-mobile-n">\n\t\t\t\t                        <label for="project_top_img" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                            <div class="text-left">프로젝트 상단배경 이미지\n\t\t\t\t                                <p class="red-800">(선택사항)</p>\n\t\t\t\t                            </div>\n\t\t\t\t                        </label>\n\t\t\t\t                        <div class="col-xs-12 col-md-11 dropify-wrapper-1920-400">\n\t\t\t\t                            <div>\n\t\t\t\t                                <dropify-input v-if="dataConfirm" v-model="request.pjBannerfile" default-message="최적 사이즈 1920 X 400" :default-img="request.pjBannerImg"></dropify-input>\n\t\t\t\t                            </div>\n\t\t\t\t                            <p class="form-control-static">\n\t\t\t\t                                이미지를 선택하지 않으시면, 기본 이미지가 제공됩니다.\n\t\t\t\t                            </p>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div> --\x3e\n\t\t\t\t                    <div class="form-group row-mobile-n">\n\t\t\t\t                        <label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t                            <div class="text-left">메인 동영상 또는 이미지</div>\n\t\t\t\t                        </label>\n\t\t\t\t                        <div class="col-xs-12">\n\t\t\t\t                            <p class="form-control-static mt0 mb25">프로젝트 페이지의 최상단에 노출될 동영상 또는 이미지 입니다. 영상과 이미지를 함께 등록할 경우 영상이 먼저 보여집니다.</p>\n\t\t\t\t                            <div class="row row-mobile-n">\n\t\t\t\t                                <label for="vod_gallery" class="col-xs-12 control-label">\n\t\t\t\t                                    <div class="text-left">동영상의 주소를 적어주세요</div>\n\t\t\t\t                                </label>\n\t\t\t\t                                <div class="vod-holder input-append" v-for="(item, index) in request.pjVideos" :class="{\'mt10\' : index != 0}">\n\t\t\t\t                                    <div class="row row-mobile-n">\n\t\t\t\t                                        <div class="col-xs-10 col-sm-7">\n\t\t\t\t                                            <input type="text" class="form-control" v-model.trim="request.pjVideos[index]" placeholder="Youtube 또는 Vimeo에 등록된 영상의 URL을 입력해주세요." />\n\t\t\t\t                                        </div>\n\t\t\t\t                                        <div class="col-xs-2 col-sm-1">\n\t\t\t\t                                            <span class="files-add vod-add" v-on:click="videoAdd" v-if="index == 0">+</span>\n\t\t\t\t                                            <span class="files-add img-delete vod-delete" v-on:click="videoDelete" v-else>-</span>\n\t\t\t\t                                        </div>\n\t\t\t\t                                    </div>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="col-xs-12 mt25">\n\t\t\t\t                            <label for="eligible[]" class="control-label">\n\t\t\t\t                                <div class="text-left">이미지를 등록해주세요</div>\n\t\t\t\t                            </label>\n\t\t\t\t                            <div class="row">\n\t\t\t\t                                <div class="eligible-holder input-append dropify-wrapper-197 col-xs-6 col-sm-3 mt10" v-for="(item, index) in request.pjImage" v-if="request.pjImage[index].state">\n\t\t\t\t                                    <dropify-input class="dropify-gallery" :default-index="index" v-model="request.pjImage[index]" v-on:clear="imageDelete" :default-img="item.fileName"></dropify-input>\n\t\t\t\t                                </div>\n\t\t\t\t                                <div class="col-xs-6 col-sm-3 dropify-wrapper-197 mt10">\n\t\t\t\t                                    <div class="dropify-wrapper dropify-wrapper-plus" v-on:click="imageAdd">+</div>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                    <div class="form-group row-mobile-n mt40">\n\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary-outline" v-on:click="save">저장</a>\n\t\t\t\t                                </div>\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save(true)">저장 후 다음단계</a>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t                </form>\n\t\t\t\t            </div>\n\t\t\t\t        </div>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								dataConfirm: !1,
								request: {
									pjTitle: "",
									pjAliasUrl: "",
									pjSummary: "",
									pjCardFile: {},
									pjCiFile: {},
									pjBannerfile: {},
									pjCardImg: "",
									companyCiImg: "",
									pjBannerImg: "",
									pjVideos: [],
									pjImage: []
								},
								urlConfirm: !0
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							urlInput: n(4).default.component()
						},
						created: function() {
							this.load()
						},
						computed: {
							url: {
								get: function() {
									return this.request.pjAliasUrl
								},
								set: function(t) {
									if ("" != t) {
										var e = this;
										axios.post("/data/invest/url", {
											url: t
										}).then(function(t) {
											e.urlConfirm = t.data
										})
									}
									this.request.pjAliasUrl = t
								}
							}
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/basic", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData,
										i = t.request;
									i.pjTitle = n.pjTitle, i.pjAliasUrl = n.pjAliasUrl, i.pjSummary = n.pjSummary, i.pjCardImg = n.pjCardImg, i.pjBannerImg = n.pjBannerImg, i.companyCiImg = n.companyCiImg, 0 == n.pjImages.length ? t.request.pjImage.push(t.file) : _.forEach(n.pjImages, function(e) {
										t.request.pjImage.push({
											fileName: e,
											fileData: "",
											state: !0
										})
									}), 0 == n.pjVideos.length ? t.request.pjVideos.push("") : _.forEach(n.pjVideos, function(e) {
										t.request.pjVideos.push(e)
									}), t.dataConfirm = !t.dataConfirm
								})
							},
							videoAdd: function() {
								1 != this.pjStatus && _.last(this.request.pjVideos) && this.request.pjVideos.push("")
							},
							videoDelete: function() {
								1 != this.pjStatus && this.request.pjVideos.pop()
							},
							imageAdd: function() {
								if (1 != this.pjStatus) {
									var t = _.last(this.request.pjImage);
									t.state && "" == t.fileName || this.request.pjImage.push(this.file)
								}
							},
							imageDelete: function(t) {
								if (1 != this.pjStatus) {
									this.request.pjImage[t].state = !1;
									0 == _.filter(this.request.pjImage, function(t) {
										return 1 == t.state
									}).length && this.request.pjImage.push(this.file)
								}
							},
							save: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중 인 프로젝트는 수정이 불가능합니다.");
								if (!this.urlConfirm) return noti.open("이미 같은 주소가 있습니다. 새로운 주소를 입력해주세요"), !1;
								var e = this;
								this.request.pjCode = this.pjCode, this.request.pjImage = _.filter(this.request.pjImage, function(t) {
									return 1 == t.state && "" != t.fileName
								}), this.request.pjVideos = _.filter(this.request.pjVideos, function(t) {
									return "" != t
								}), $(".page-loader-more").fadeIn(""), axios.post("/set/invest/basic", this.request).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (0 == e.request.pjImage.length && e.request.pjImage.push(e.file), 0 == e.request.pjVideos.length && e.request.pjVideos.push(""), 1 == t ? e.$emit("step-change", 2, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 2, !1))) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							urlCheck: function() {
								var t = this;
								if (0 == this.request.pjAliasUrl.length || "" == this.request.pjAliasUrl) return void(this.urlConfirm = !0);
								axios.post("/data/invest/url", {
									url: this.request.pjAliasUrl
								}).then(function(e) {
									t.urlConfirm = e.data
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t<div class="md-ml30 mt5 md-mt0">\n\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="com_sectors" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">업종</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label for="com_ceo" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">대표이사</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.companyType" :disabled="pjStatus == 1"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1"></div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.companyCeo" :disabled="pjStatus == 1"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="com_establishment" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">설립일</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label for="com_employees" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">임직원 수</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.companyIncoDate" :date="request.companyIncoDate" v-if="dataConfirm" :disabled="pjStatus == 1"></date-picker>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1"></div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model.trim="request.companyStaffCount" :disabled="pjStatus == 1"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">명</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="zip_code" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">\n\t\t\t\t\t\t\t\t\t\t\t\t우편번호\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-9">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="tel" class="form-control" v-on:click="postOpen" v-model="address.postNum" readonly="readonly" style="position: relative; z-index: 1;"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-btn" v-on:click="postOpen">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn btn-outline btn-file">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-upload" aria-hidden="true"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-10">\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="address1" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t주소\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 mb10">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-on:click="postOpen" v-model="address1" placeholder="주소를 검색해주세요." readonly="readonly" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="request.companyAddress2" placeholder="상세 주소를 입력해주세요." :disabled="pjStatus == 1"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="com_website" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">\n\t\t\t\t\t\t\t\t\t\t\t\t웹사이트\n\t\t\t\t\t\t\t\t\t\t\t\t<div><span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="request.companyWebSite" :disabled="pjStatus == 1" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="com_email" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">대표 이메일</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="request.companyEmail" :disabled="pjStatus == 1" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="crash_history" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">\n\t\t\t\t\t\t\t\t\t\t\t\t범죄이력\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="crash1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="crash_history" id="crash1" value="N" v-model="request.companyLaw" :disabled="pjStatus == 1" /><span class="webfont">없음</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="crash2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="crash_history" id="crash2" value="Y" v-model="request.companyLaw" :disabled="pjStatus == 1" /><span class="webfont">있음</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary-outline" v-on:click="save">저장</a>\n\t\t\t\t                                </div>\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save(true)">저장 후  다음단계</a>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								request: {
									companyType: "",
									companyCeo: "",
									companyStaffCount: 0,
									companyIncoDate: "",
									companyPostNum: "",
									companyAddress1: "",
									companyAddress2: "",
									companyWebSite: "",
									companyEmail: "",
									companyLaw: "N"
								},
								address: {
									postNum: "",
									address1: ""
								}
							}
						},
						computed: {
							postNum: function() {
								return this.request.companyPostNum = this.address.postNum, this.address.postNum
							},
							address1: function() {
								return this.request.companyAddress1 = this.address.address1, this.address.address1
							}
						},
						components: {
							datePicker: n(2).default.component(),
							vueNumeric: VueNumeric.default
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/company-basic", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData,
										i = t.request;
									i.companyType = n.companyType, i.companyCeo = n.companyCeo, i.companyStaffCount = n.companyStaffCount, i.companyIncoDate = n.companyIncoDate, i.companyPostNum = n.companyPostNum, i.companyAddress1 = n.companyAddress1, i.companyAddress2 = n.companyAddress2, i.companyWebSite = n.companyWebSite, i.companyEmail = n.companyEmail, i.companyLaw = n.companyLaw, t.address.postNum = n.companyPostNum, t.address.address1 = n.companyAddress1, t.dataConfirm = !t.dataConfirm, t.$nextTick(function() {
										$(".option_group .radio-inline input").checkboxradio(), $(".crash_history").controlgroup()
									})
								})
							},
							postOpen: function() {
								1 != this.pjStatus && post.open(this)
							},
							save: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중 인 프로젝트는 수정이 불가능합니다.");
								var e = this;
								$(".page-loader-more").fadeIn(""), this.request.pjCode = this.pjCode, this.request.companyPostNum = this.address.postNum, this.request.companyAddress1 = this.address.address1, axios.post("/set/save/invest/company-basic", this.request).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? 1 == t ? e.$emit("step-change", 3, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 3, !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mt10 mb70">\n\t\t\t\t\t\t\t\t\t\t\t투자자들이 자주 문의할 것으로 예상되는 질문과 대답을 등록해 주세요!\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="faq_subject" class="col-xs-1 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">질문</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-11">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="pjFaq.pjFaqTitle" :class="{\'error\' : errors.has(\'pjFaqTitle\')}" name="pjFaqTitle" v-validate="\'required\'" :disabled="pjStatus == 1"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'pjFaqTitle\')" v-text="errors.first(\'pjFaqTitle\')"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="faq_memo" class="col-xs-1 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">답변</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-11">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows="3" cols="25" class="textarea-form-control form-control" v-model="pjFaq.pjFaqContent" :class="{\'error\' : errors.has(\'pjFaqContent\')}" name="pjFaqContent" v-validate="\'required\'" :disabled="pjStatus == 1"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'pjFaqContent\')" v-text="errors.first(\'pjFaqContent\')"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-12 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary-outline" v-on:click="faqSave" :disabled="pjStatus == 1">등록하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m" />\n\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mb30">\n\t\t\t\t\t\t\t\t\t\t\t<strong>등록된 질문들</strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_group">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_loop" v-for="(item, index) in faqList">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5 v-text="item.pjFaqTitle"></h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_memo" v-html="convert(item.pjFaqContent)">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_btn text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="updateOpen(item, index)">수정하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete btn_delete_grey grey-500 ml20" v-on:click="removeConfirm(item.pjFaqIdx)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save">다음단계</a>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\x3c!-- 수정하기 --\x3e\n\t\t\t\t\t<div id="faqmModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n\t\t\t\t\t\t<div class="modal-dialog" role="document">\n\t\t\t\t\t\t\t<form class="form-horizontal modal-content">\n\t\t\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t\t\t<div class="modal-title crowdy-font-bold">수정하기</div>\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt30 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">질문</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="updateFaq.pjFaqTitle" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_memo_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">답변</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<textarea rows="8" cols="40" class="form-control" v-model="updateFaq.pjFaqContent"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t<a class="pointerCursor" v-on:click="updateClose">취소</a>\n\t\t\t\t\t\t\t\t\t\t<a class="ml30 modalBlueBtn" v-on:click="update">수정</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- //수정하기 --\x3e\n\n\t\t\t\t\t\x3c!-- FAQ 삭제 --\x3e\n\t                <div id="removeModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n\t                    <div class="modal-dialog modal-sm" role="document">\n\t                        <div class="modal-content">\n\t                            <div class="modal-body modal-order">\n\t                                <div>삭제하시겠습니까?</div>\n\t                            </div>\n\t                            <div class="modal-footer">\n                                    <div class="row not-space">\n                                        <a class="pointerCursor" data-dismiss="modal">취소</a>\n\t\t\t\t\t\t\t\t\t\t<a class="ml30 modalRedBtn" v-on:click="remove">수정</a>\n                                    </div>\n                                </div>\n\t                        </div>\n\t                    </div>\n\t                </div>\n\t                \x3c!-- //파일삭제확인 --\x3e\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								faqList: [],
								pjFaq: {
									pjFaqTitle: "",
									pjFaqContent: ""
								},
								updateFaq: {
									pjFaqIdx: "",
									pjFaqTitle: "",
									pjFaqContent: "",
									index: ""
								},
								deleteCode: ""
							}
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/faq", {
									pjCode: this.pjCode
								}).then(function(e) {
									t.faqList = _.concat(t.faqList, e.data.rData)
								})
							},
							convert: function(t) {
								return t.replace(/[\n]/g, "<br/>")
							},
							faqSave: function() {
								if (1 != this.pjStatus) {
									var t = this;
									this.$validator.validateAll().then(function(e) {
										e && ($(".page-loader-more").fadeIn(""), t.pjFaq.pjCode = t.pjCode, t.pjFaq.memCode = userInfo.memCode, axios.post("/set/save/invest/faq", t.pjFaq).then(function(e) {
											$(".page-loader-more").fadeOut("");
											var n = e.data;
											"0000" == n.rCode ? (t.pjFaq.pjFaqIdx = n.rData.pjFaqIdx, t.faqList.push(_.clone(t.pjFaq)), t.pjFaq.pjFaqTitle = "", t.pjFaq.pjFaqContent = "", noti.open("저장되었습니다."), t.$emit("step-change", 7, !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
										}))
									})
								}
							},
							update: function() {
								var t = this;
								$(".page-loader-more").fadeIn(""), this.updateFaq.pjCode = this.pjCode, this.updateFaq.memCode = userInfo.memCode, axios.post("/set/save/invest/faq", this.updateFaq).then(function(e) {
									if ($(".page-loader-more").fadeOut(""), "0000" == e.data.rCode) {
										var n = t.faqList[t.updateFaq.index];
										n.pjFaqTitle = t.updateFaq.pjFaqTitle, n.pjFaqContent = t.updateFaq.pjFaqContent, t.updateClose()
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							updateOpen: function(t, e) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중인 프로젝트는 수정이 불가능합니다.");
								this.updateFaq.pjFaqIdx = t.pjFaqIdx, this.updateFaq.pjFaqTitle = t.pjFaqTitle, this.updateFaq.pjFaqContent = t.pjFaqContent, this.updateFaq.index = e, $("#faqmModal").modal("show")
							},
							updateClose: function() {
								this.updateFaq.index = "", this.updateFaq.pjFaqIdx = "", this.updateFaq.pjFaqTitle = "", this.updateFaq.pjFaqContent = "", $("#faqmModal").modal("hide")
							},
							removeConfirm: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중인 프로젝트는 삭제가 불가능합니다.");
								this.deleteCode = t, $("#removeModal").modal("show")
							},
							remove: function(t) {
								var e = this;
								$("#removeModal").modal("hide"), $(".page-loader-more").fadeIn(""), axios.post("/set/save/invest/faq/delete", {
									pjCode: this.pjCode,
									pjFaqIdx: this.deleteCode
								}).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (e.faqList = _.filter(e.faqList, function(e) {
										return e.pjFaqIdx != t
									}), noti.open("삭제되었습니다.")) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							save: function() {
								this.$emit("step-change", 7, !0)
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div>\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mt10 mb70">\n\t\t\t\t\t\t\t\t\t\t투자자에게 게시할 파일들을 등록해 주세요.\n\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="sip_filename" class="col-xs-1 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">제목</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-11">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="request.fileTitle" :class="{\'error\' : errors.has(\'fileTitle\')}" data-vv-name="fileTitle" v-validate="\'required\'" :disabled="pjStatus == 1"/>\n\t\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'fileTitle\')" v-text="errors.first(\'fileTitle\')"></label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="sip_file" class="col-xs-1 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">첨부</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-11">\n\t\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" :class="{\'error\' : errors.has(\'file\')}" v-model="request.file.fileName" readonly="readonly" />\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-btn">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn btn-outline btn-file">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-upload" aria-hidden="true"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<file-input v-model="request.file" data-vv-name="file" v-validate="\'required\'" v-on:error="error"></file-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'file\')" v-text="errors.first(\'file\')"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<div class="col-sm-12 text-right">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary-outline" v-on:click="add">등록하기</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<hr class="big_m" />\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mb30">\n\t\t\t\t\t\t\t\t\t\t<strong>첨부된 파일들</strong>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<table class="table table-stext table-fixed">\n\t\t\t\t\t\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t\t\t\t\t\t<col style="width:24%;">\n\t\t\t\t\t\t\t\t\t\t\t<col style="width:29%;" class="hidden-xs">\n\t\t\t\t\t\t\t\t\t\t\t<col style="width:16%;">\n\t\t\t\t\t\t\t\t\t\t\t<col style="width:15%;">\n\t\t\t\t\t\t\t\t\t\t</colgroup>\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span>문서제목</span></th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class="hidden-xs"><span>첨부파일명</span></th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th><span>용량</span></th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr class="text-center" v-for="(item, index) in files">\n\t\t\t\t\t\t\t\t\t\t\t\t<td v-text="item.fileInfo"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td class="hidden-xs" v-text="item.fileName"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td v-text="size(item.fileSize)"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><button type="button" class="btn btn-sm btn-link grey-500" v-on:click="removeConfirm(item.fileCode)"><i class="btn-link-delete"></i> 삭제하기</button></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\n\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save">다음단계</a>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t\x3c!-- 파일삭제확인 --\x3e\n                <div id="removeModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n                    <div class="modal-dialog modal-sm" role="document">\n                        <div class="modal-content">\n                            <div class="modal-body modal-order">\n                                삭제하시겠습니까?\n                            </div>\n                            <div class="modal-footer ">\n                                <div class="row not-space">\n                                \t<a class="pointerCursor" data-dismiss="modal">취소</a>\n                                    <a class="ml30 modalRedBtn" v-on:click="remove">삭제</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \x3c!-- //파일삭제확인 --\x3e\n\n\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								request: {
									fileTitle: "",
									fileCodeGroup: "",
									file: {
										fileData: "",
										fileName: ""
									}
								},
								files: [],
								file: {
									fileData: "",
									fileName: ""
								},
								deleteCode: ""
							}
						},
						components: {
							fileInput: n(7).default.component()
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/file", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData;
									t.request.fileCodeGroup = n.fileCodeGroup, t.files = n.files
								})
							},
							add: function() {
								if (0 == this.pjStatus) {
									var t = this;
									this.$validator.validateAll().then(function(e) {
										e && (t.request.pjCode = t.pjCode, $(".page-loader-more").fadeIn(""), axios.post("/set/invest/file", t.request).then(function(e) {
											$(".page-loader-more").fadeOut("");
											var n = e.data.rData,
												i = t.request;
											t.request.fileCodeGroup = n.data, i.fileTitle = "", i.file = t.file, t.load(), t.$emit("step-change", 8, !1)
										}))
									})
								}
							},
							removeConfirm: function(t) {
								this.deleteCode = t, $("#removeModal").modal("show")
							},
							remove: function(t) {
								var e = this;
								axios.post("/file/delete/" + this.deleteCode).then(function(t) {
									$("#removeModal").modal("hide"), e.load(), e.$emit("step-change", 8, !1)
								})
							},
							size: function(t) {
								var e = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
									n = 0 === t ? 0 : Math.floor(Math.log(t) / Math.log(1024));
								return 1 * (t / Math.pow(1024, n)).toFixed(2) + " " + e[n]
							},
							error: function(t) {
								noti.open("업로드되는 파일 사이즈는 10MB보다 작아야합니다."), this.request.fileTitle = "", this.request.file = this.file
							},
							save: function() {
								this.$emit("step-change", 8, !0)
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="mc_keyword" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">\n\t\t\t\t\t\t\t\t\t\t\t\t프로젝트 키워드 등록 <a class="form-tip webuiPopover" href="javascript:void(0)" data-plugin="webuiPopover" data-content="키워드는 최대 다섯개까지 등록할 수 있습니다. 키워드를 등록 해두는 경우, &lt;br / &gt;프로젝트 제목 외에도 해당 키워드 검색 시 검색 결과에 프로젝트가 포함되게 됩니다." data-animation="pop"><i class="fa fa-question" aria-hidden="true"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t<br /><span class="red-800">(선택사항)</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-7">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" data-limit="5" v-model.trim="keyWords" id="keyword" placeholder="최대 5개까지 등록 가능합니다." :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <button type="button" class="btn btn-block btn-primary-outline" v-on:click="save" :disabled="pjStatus != 0">저장</button>\n\t\t\t\t                                </div>\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <button type="button" class="btn btn-block btn-primary" v-on:click="approve" :disabled="!approveCheck || pjStatus != 0">승인요청하기</button>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "approveCheck", "pjStatus"],
						data: function() {
							return {
								request: {
									keyWords: []
								},
								keyWords: []
							}
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/keyword", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData;
									t.request;
									t.keyWords = n.keyWords, t.$nextTick(function() {
										$("#keyword").on("tokenfield:createtoken", function(e) {
											t.request.keyWords.push(e.attrs.value)
										}).on("tokenfield:removedtoken", function(e) {
											t.request.keyWords = _.without(t.request.keyWords, e.attrs.value)
										}).tokenfield()
									})
								})
							},
							save: function() {
								if (0 == this.pjStatus) {
									$(".page-loader-more").fadeIn(""), this.request.pjCode = this.pjCode, axios.post("/set/save/invest/keyword", this.request).then(function(t) {
										$(".page-loader-more").fadeOut(""), "0000" == t.data.rCode ? noti.open("저장되었습니다.") : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
									})
								}
							},
							approve: function() {
								0 == this.pjStatus && this.$emit("approve")
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="common_support hidden-xs hidden-sm">\n\t\t\t\t\t<div class="common_sub_vi bg_gray">\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t<div class="col-md-3">\n\t\t\t\t\t\t\t\t\t<div class="common_vi_title webfont2" v-text="title"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-md-4 text-right">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-md-5">\n\t\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="btn btn-block btn-primary-outline">투자 가이드 다운받기</a>\n\t\t\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-danger-outline" v-on:click="approve" :disabled="changeStatus != 0">승인요청하기</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="common_sub_layout">\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t\t\t\t<div class="col-line-lm">\n\t\t\t\t\t\t\t\t\t\t\t<div class="user-media">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="media">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img class="media-object" :src="\'//\' + userImage"  />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="media-body media-middle" v-html="userName"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="st-navi-device-wrap">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>프로젝트 미리보기</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="st-navi-device">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'A1522\')">모바일</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'A1474\')">태블릿</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'PC05\')">PC</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul class="st-navi st-navi-p">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="active">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)">프로젝트 만들기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="list_link_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>STEP 1</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 1, \'vpass\' : confirm.step1}"><a href="javascript:void(0)" v-on:click="stepChange(1, true)">1. 프로젝트 기본정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 2, \'vpass\' : confirm.step2}"><a href="javascript:void(0)" v-on:click="stepChange(2, true)">2. 회사 기본정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 3, \'vpass\' : confirm.step3}"><a href="javascript:void(0)" v-on:click="stepChange(3, true)">3. 증권발행조건</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="list_link_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>STEP 2</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 4, \'vpass\' : confirm.step4}"><a href="javascript:void(0)" v-on:click="stepChange(4, true)">1. 핵심투자노트</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 5, \'vpass\' : confirm.step5}"><a href="javascript:void(0)" v-on:click="stepChange(5, true)">2. 온라인 IR</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 6, \'vpass\' : confirm.step6}"><a href="javascript:void(0)" v-on:click="stepChange(6, true)">3. 자주하는 질문</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="list_link_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>STEP 3</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 7, \'vpass\' : confirm.step7}"><a href="javascript:void(0)" v-on:click="stepChange(7, true)">1. 첨부파일</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 8, \'vpass\' : confirm.step8}"><a href="javascript:void(0)" v-on:click="stepChange(8, true)">2. 주금납입정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 9, \'vpass\' : confirm.step9}"><a href="javascript:void(0)" v-on:click="stepChange(9, true)">3. 관련 뉴스</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 10, \'vpass\' : confirm.step10}"><a href="javascript:void(0)" v-on:click="stepChange(10, true)">4. 부가정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<template v-if="dataConfirm">\n\t\t\t\t\t\t\t\t\t\t<invest-basic :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 1" v-on:step-change="stepChange"></invest-basic>\n\t\t\t\t\t\t\t\t\t\t<company-basic :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 2" v-on:step-change="stepChange"></company-basic>\n\t\t\t\t\t\t\t\t\t\t<securities-issue :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 3" v-on:step-change="stepChange"></securities-issue>\n\t\t\t\t\t\t\t\t\t\t<point-note :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 4" v-on:step-change="stepChange"></point-note>\n\t\t\t\t\t\t\t\t\t\t<online-ir :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 5" v-on:step-change="stepChange"></online-ir>\n\t\t\t\t\t\t\t\t\t\t<faq :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 6" v-on:step-change="stepChange"></faq>\n\t\t\t\t\t\t\t\t\t\t<file :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 7" v-on:step-change="stepChange"></file>\n\t\t\t\t\t\t\t\t\t\t<stock :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 8" v-on:step-change="stepChange"></stock>\n\t\t\t\t\t\t\t\t\t\t<invest-article :pj-code="pjCode" :pj-status="changeStatus" v-if="step == 9" v-on:step-change="stepChange"></invest-article>\n\t\t\t\t\t\t\t\t\t\t<keyword :pj-code="pjCode" :pj-status="changeStatus" :approve-check="approveCheck" v-if="step == 10" v-on:step-change="stepChange" v-on:approve="approve"></keyword>\t\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode"],
						data: function() {
							return {
								dataConfirm: !1,
								step: 1,
								confirm: {
									step1: !1,
									step2: !1,
									step3: !1,
									step4: !1,
									step5: !1,
									step6: !1,
									step7: !1,
									step8: !1,
									step9: !1,
									step10: !0
								},
								titleName: {
									1: "기본정보",
									2: "회사 기본정보",
									3: "증권발행조건",
									4: "핵심투자노트",
									5: "온라인 IR",
									6: "자주하는질문",
									7: "첨부파일",
									8: "주금납입정보",
									9: "관련 뉴스",
									10: "부가정보"
								},
								url: "",
								endStatus: "",
								recStatus: ""
							}
						},
						computed: {
							userName: function() {
								return userInfo.name + "<br /> 님의 프로젝트"
							},
							userImage: function() {
								return userInfo.image
							},
							title: function() {
								return this.titleName[this.step]
							},
							approveCheck: function() {
								return this.confirm.step1 && this.confirm.step2 && this.confirm.step3 && this.confirm.step4 && this.confirm.step7 && this.confirm.step8
							},
							projectUrl: function() {
								return "" != this.url && this.url ? encodeURI(this.url) : ""
							},
							changeStatus: function() {
								return "1" == this.recStatus ? 1 : "2" == this.recStatus && "0" != this.endStatus ? 2 : 0
							}
						},
						components: {
							investBasic: n(10).default.component(),
							companyBasic: n(11).default.component(),
							securitiesIssue: n(19).default.component(),
							pointNote: n(17).default.component(),
							onlineIr: n(16).default.component(),
							faq: n(12).default.component(),
							file: n(13).default.component(),
							stock: n(20).default.component(),
							keyword: n(14).default.component(),
							investArticle: n(9).default.component()
						},
						created: function() {
							this.check(!0)
						},
						methods: {
							stepChange: function(t, e) {
								e && (this.step = t), this.check(!1)
							},
							check: function(t) {
								var e = this;
								axios.post("/data/save/invest/info/confirm", {
									pjCode: this.pjCode,
									memCode: userInfo.memCode
								}).then(function(n) {
									var i = n.data.rData;
									if (!i.check) return void noti.open("잘못된 접근입니다.", function() {
										window.open("/", "_self")
									});
									t && (e.dataConfirm = !0), e.url = i.pjAliasUrl, e.endStatus = i.pjEndStatus, e.recStatus = i.pjRecStatus, e.confirm.step1 = i.investBasic, e.confirm.step2 = i.companyBasic, e.confirm.step3 = i.securitiesIssue, e.confirm.step4 = i.pointNote, e.confirm.step5 = i.onlineIr, e.confirm.step6 = i.faq, e.confirm.step7 = i.file, e.confirm.step8 = i.stockPayment, e.confirm.step9 = i.article
								})
							},
							approve: function() {
								if (0 == this.changeStatus) {
									if (!this.approveCheck) return noti.open("모든 단계를 완료해야 승인요청을 할 수 있습니다."), !1;
									$(".page-loader-more").fadeIn(""), axios.post("/data/save/invest/approve", {
										pjCode: this.pjCode
									}).then(function(t) {
										$(".page-loader-more").fadeOut(""), "0000" == t.data.rCode ? noti.open("승인요청이 완료되었습니다") : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
									})
								}
							},
							pagePreview: function(t) {
								if ("" == this.projectUrl) return void noti.open("프로젝트 웹주소를 먼저 설정해주세요.");
								window.open("http://troy.labs.daum.net/?url=" + this.projectUrl + "&device=" + t, "_blank")
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t<div class="md-ml30 mt10">\n\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mt10 mb70">\n\t\t\t\t\t\t\t\t\t온라인IR에 필요한 정보들을 선택하여 작성해 주세요\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<div class="panel-group faq invest">\n\n\t\t\t\t\t\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title" :class="{\'checked\' : checkInput.content}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="core-inve0" class="checkbox-inline" data-toggle="collapse" data-target="#collapse1000" aria-expanded="false" aria-controls="collapse1000">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="core-inve0" v-model="checkInput.content" /><span class="label"></span><span class="label-text">프로젝트 소개</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="collapse1000" class="panel-collapse collapse" :class="{\'in\' : checkInput.content}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-body panel-edit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ir-area :id="\'editor0\'" v-if="dataConfirm" :value="request.companyContent" v-model="request.companyContent" :disabled="pjStatus != 0"></ir-area>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title" :class="{\'checked\' : checkInput.trend}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="core-inve3" class="checkbox-inline" data-toggle="collapse" data-target="#collapse1003" aria-expanded="false" aria-controls="collapse1003">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="core-inve3" v-model="checkInput.trend" /><span class="label"></span><span class="label-text">시장분석</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="collapse1003" class="panel-collapse collapse" :class="{\'in\' : checkInput.trend}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-body panel-edit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ir-area :id="\'editor3\'" v-if="dataConfirm" :value="request.companyTrend" v-model="request.companyTrend" :disabled="pjStatus != 0"></ir-area>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title" :class="{\'checked\' : checkInput.value}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="core-inve11" class="checkbox-inline" data-toggle="collapse" data-target="#collapse10011" aria-expanded="false" aria-controls="collapse10011">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="core-inve11" v-model="checkInput.value" /><span class="label"></span><span class="label-text">주요 재무정보</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="collapse10011" class="panel-collapse collapse" :class="{\'in\' : checkInput.value}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-body panel-edit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ir-area :id="\'editor11\'" v-if="dataConfirm" :value="request.companyValue" v-model="request.companyValue" :disabled="pjStatus != 0"></ir-area>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title" :class="{\'checked\' : checkInput.riExplan}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="core-inve8" class="checkbox-inline" data-toggle="collapse" data-target="#collapse1008" aria-expanded="false" aria-controls="collapse1008">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="core-inve8" v-model="checkInput.riExplan" /><span class="label"></span><span class="label-text">리스크</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="collapse1008" class="panel-collapse collapse" :class="{\'in\' : checkInput.riExplan}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-body panel-edit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ir-area :id="\'editor8\'" v-if="dataConfirm" :value="request.companyRiExplan" v-model="request.companyRiExplan" :disabled="pjStatus != 0"></ir-area>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title" :class="{\'checked\' : checkInput.staff}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="core-inve13" class="checkbox-inline" data-toggle="collapse" data-target="#collapse10013" aria-expanded="false" aria-controls="collapse10013">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="core-inve13" v-model="checkInput.staff" /><span class="label"></span><span class="label-text">주요 인력</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="collapse10013" class="panel-collapse collapse" :class="{\'in\' : checkInput.staff}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-body panel-edit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ir-area :id="\'editor13\'" v-if="dataConfirm" :value="request.companyStaff" v-model="request.companyStaff" :disabled="pjStatus != 0"></ir-area>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title" :class="{\'checked\' : checkInput.patent}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="core-inve14" class="checkbox-inline" data-toggle="collapse" data-target="#collapse10014" aria-expanded="false" aria-controls="collapse10014">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" id="core-inve14" v-model="checkInput.patent" /><span class="label"></span><span class="label-text">특허·수상내역</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="collapse10014" class="panel-collapse collapse" :class="{\'in\' : checkInput.patent}">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-body panel-edit">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ir-area :id="\'editor14\'" v-if="dataConfirm" :value="request.companyPatent" v-model="request.companyPatent" :disabled="pjStatus != 0"></ir-area>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary-outline" v-on:click="save">저장</a>\n\t\t\t\t                                </div>\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save(true)">저장 후  다음단계</a>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								request: {
									companyContent: "",
									companyRiExplan: "",
									companyTrend: "",
									companyValue: "",
									companyStaff: "",
									companyPatent: ""
								},
								checkInput: {
									content: !1,
									riExplan: !1,
									trend: !1,
									value: !1,
									staff: !1,
									patent: !1
								}
							}
						},
						computed: {
							content: function() {
								return "" != this.request.companyContent
							},
							riExplan: function() {
								return "" != this.request.companyRiExplan
							},
							trend: function() {
								return "" != this.request.companyTrend
							},
							value: function() {
								return "" != this.request.companyValue
							},
							staff: function() {
								return "" != this.request.companyStaff
							},
							patent: function() {
								return "" != this.request.companyPatent
							}
						},
						created: function() {
							this.load()
						},
						components: {
							irArea: n(3).default.component()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/online-ir", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData,
										i = t.request;
									i.companyContent = n.companyContent, i.companyRiExplan = n.companyRiExplan, i.companyTrend = n.companyTrend, i.companyValue = n.companyValue, i.companyStaff = n.companyStaff, i.companyPatent = n.companyPatent, t.checkInput.content = t.content, t.checkInput.riExplan = t.riExplan, t.checkInput.trend = t.trend, t.checkInput.value = t.value, t.checkInput.staff = t.staff, t.checkInput.patent = t.patent, t.dataConfirm = !t.dataConfirm
								})
							},
							save: function(t) {
								if (0 != this.pjStatus) return void noti.open("승인대기 중 이거나 진행중인 프로젝트는 수정이 불가능합니다.");
								var e = this;
								this.request.companyContent = userInfo.removeStyleAttr(this.request.companyContent), this.request.companyRiExplan = userInfo.removeStyleAttr(this.request.companyRiExplan), this.request.companyTrend = userInfo.removeStyleAttr(this.request.companyTrend), this.request.companyValue = userInfo.removeStyleAttr(this.request.companyValue), this.request.companyStaff = userInfo.removeStyleAttr(this.request.companyStaff), this.request.companyPatent = userInfo.removeStyleAttr(this.request.companyPatent), $(".page-loader-more").fadeIn(""), this.request.pjCode = this.pjCode, axios.post("/set/save/invest/online-ir", this.request).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? 1 == t ? e.$emit("step-change", 6, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 6, !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mt10 mb70">\n\t\t\t\t\t\t\t\t\t\t\t핵심투자노트를 등록해 주세요! \'공개\' 상태인 핵심투자노트만 사이트에 노출됩니다. 하단의 등록하기 버튼을 누르지 않으면 저장되지 않습니다. \n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="faq_subject" class="col-xs-1 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">상태</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-11">\n\t\t\t\t\t\t\t\t\t\t\t\t<order-select :options="statusOptions" v-model="data.noteStatus"></order-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t                        <label for="faq_memo" class="col-xs-1 control-label">\n\t\t\t\t\t                            <div class="text-left">제목</div>\n\t\t\t\t\t                        </label>\n\t\t\t\t\t                        <div class="col-xs-10 col-sm-10">\n\t\t\t\t\t                            <input type="text" class="form-control" v-model.trim="data.noteTitle" maxlength="50"/>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                        <div class="col-xs-1 col-sm-1">\n\t\t\t\t\t                            <span class="textarea_text_leng webfont2 mt10"><span v-text="data.noteTitle.length"></span> / 50</span>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="faq_memo" class="col-xs-1 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">내용</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-11">\n\t\t\t\t\t\t\t\t\t\t\t\t<note-area :id="\'noteArea\'" v-if="dataConfirm" :value="data.pjNote" v-model="data.pjNote"></note-area>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-12 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary-outline" v-on:click="insert(\'insert\')" :disabled="pjStatus == 1">등록하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m" />\n\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mb30">\n\t\t\t\t\t\t\t\t\t\t\t<strong>등록된 핵심투자노트</strong>\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_group">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_loop" v-for="(item, index) in list">\n\t\t\t\t\t\t\t\t\t\t\t\t<h5>{{index + 1}}번째 핵심투자노트</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_memo">제목 : {{item.noteTitle}} <br/> 상태 : {{item.noteStatus | statusText}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="faq_sip_btn text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="updateOpen(item)">수정하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete btn_delete_grey grey-500 ml20" v-on:click="removeOpen(item)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="next">다음단계</a>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\x3c!-- 수정하기 --\x3e\n\t\t\t\t\t<div id="noteModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n\t\t\t\t\t\t<div class="modal-dialog" role="document" style="width: 800px;">\n\t\t\t\t\t\t\t<form class="form-horizontal modal-content">\n\t\t\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t\t\t<div class="modal-title crowdy-font-bold">수정하기</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt30 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">공개/비공개</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<order-select :options="statusOptions" v-model="save.noteStatus"></order-select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt30 xs-mt10">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_subject_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">제목</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-10 col-sm-10">\n\t\t\t\t                            <input type="text" class="form-control" v-model.trim="save.noteTitle" maxlength="50"/>\n\t\t\t\t                        </div>\n\t\t\t\t                        <div class="col-xs-2 col-sm-2">\n\t\t\t\t                            <span class="textarea_text_leng webfont2 mt10"><span v-text="save.noteTitle.length"></span> / 50</span>\n\t\t\t\t                        </div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="faq_memo_pop" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">내용</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<update-area :id="\'saveArea\'" v-if="dataConfirm" :value="save.pjNote" v-model="save.pjNote"></update-area>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t<div class="modal-footer">\n\t\t\t\t\t\t\t\t\t\t<a class="pointerCursor" v-on:click="updateClose">취소</a>\n\t\t\t\t\t\t\t\t\t\t<a class="ml30 modalBlueBtn" v-on:click="insert">수정</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- //수정하기 --\x3e\n\n\t\t\t\t\t\x3c!-- 삭제하기 --\x3e\n\t                <div id="removeModal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n\t                    <div class="modal-dialog modal-sm" role="document">\n\t                        <div class="modal-content">\n\t                            <div class="modal-body modal-order">\n\t                                <div>삭제하시겠습니까?</div>\n\t                            </div>\n\t                            <div class="modal-footer">\n                                    <div class="row not-space">\n                                        <a class="pointerCursor" data-dismiss="modal">취소</a>\n\t\t\t\t\t\t\t\t\t\t<a class="ml30 modalRedBtn" v-on:click="remove">삭제</a>\n                                    </div>\n                                </div>\n\t                        </div>\n\t                    </div>\n\t                </div>\n\t                \x3c!-- //삭제하기 --\x3e\n\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								request: {
									pjCode: this.pjCode,
									paging: {
										page: "1",
										count: "12"
									}
								},
								dataConfirm: !1,
								list: [],
								data: {
									noteTitle: "",
									noteIdx: "",
									pjCode: this.pjCode,
									noteRank: "",
									pjNote: "",
									noteStatus: 1
								},
								save: {
									noteTitle: "",
									noteIdx: "",
									pjCode: this.pjCode,
									noteRank: "",
									pjNote: "",
									noteStatus: 1
								},
								listCheck: [],
								statusOptions: [{
									id: "0",
									text: "비공개"
								}, {
									id: "1",
									text: "공개"
								}]
							}
						},
						computed: {},
						components: {
							orderSelect: n(1).default.component(),
							noteArea: n(5).default.component(),
							updateArea: n(5).default.component()
						},
						created: function() {
							this.load()
						},
						filters: {
							statusText: function(t) {
								return 1 == t ? "공개" : "비공개"
							}
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/note", this.request).then(function(e) {
									var n = e.data.rData;
									t.list = n.list, t.dataConfirm = !0
								})
							},
							insert: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중인 프로젝트는 추가가 불가능합니다.");
								var e = "";
								e = "insert" == t ? _.clone(this.data) : _.clone(this.save), e.pjNote = userInfo.removeStyleAttr(e.pjNote);
								var n = this;
								$(".page-loader-more").fadeIn(""), e.pjCode = this.pjCode, axios.post("/set/save/invest/note", e).then(function(i) {
									$(".page-loader-more").fadeOut(""), "0000" == i.data.rCode ? (noti.open("저장되었습니다."), "insert" == t ? (n.data.noteIdx = "", n.data.noteRank = "", n.data.pjNote = "", n.data.noteStatus = 1, n.data.noteTitle = "", tinymce.get("noteArea").setContent(e.pjNote)) : n.updateClose(), n.load()) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							updateOpen: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기 중인 프로젝트는 수정이 불가능합니다.");
								this.save.noteIdx = t.noteIdx, this.save.noteRank = t.noteRank, this.save.pjNote = t.pjNote, this.save.noteStatus = t.noteStatus, this.save.noteTitle = t.noteTitle, tinymce.get("saveArea").setContent(t.pjNote), $("#noteModal").modal("show")
							},
							updateClose: function() {
								this.save.noteIdx = "", this.save.noteRank = "", this.save.pjNote = "", this.save.noteStatus = 1, this.save.noteTitle = "", tinymce.get("saveArea").setContent(""), $("#noteModal").modal("hide")
							},
							removeOpen: function(t) {
								if (1 == this.pjStatus) return void noti.open("승인대기중인 프로젝트는 삭제가 불가능합니다.");
								this.save.noteIdx = t.noteIdx, this.save.noteRank = t.noteRank, this.save.pjNote = t.pjNote, this.save.noteStatus = t.noteStatus, this.save.noteTitle = t.noteTitle, $("#removeModal").modal("show")
							},
							remove: function() {
								var t = this;
								this.save.pjCode = this.pjCode, $("#removeModal").modal("hide"), $(".page-loader-more").fadeIn(""), axios.post("/set/save/invest/note/delete", this.save).then(function(e) {
									$(".page-loader-more").fadeOut(""), "0000" == e.data.rCode ? (noti.open("삭제되었습니다."), t.updateClose(), t.load()) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							next: function() {
								this.$emit("step-change", 5, !0)
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t\t<div class="sr-subtitle-s">\n\t\t\t\t\t\t\t\t\t<strong>투자 의뢰<br />기초자료</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-10">\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="attraction_fund" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left">투자 유치자금 규모</div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-4">\n\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="₩" v-model="request.pjAmount" data-vv-name="pjAmount" v-validate="\'required|min_value:1000\'" :class="{\'error\' : errors.has(\'pjAmount\')}"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'pjAmount\')" v-text="errors.first(\'pjAmount\')"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="business_info" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left">사업내용</div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<textarea rows="4" cols="50" class="form-control" :class="{\'error\' : errors.has(\'pjContent\')}" data-vv-name="pjContent" v-model="request.pjContent" v-validate="\'required\'"></textarea>\n\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'pjContent\')" v-text="errors.first(\'pjContent\')"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="company_profile" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left">회사소개서 <span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" :class="{\'error\' : errors.has(\'file\')}" readonly="readonly" v-model="request.file.fileName" />\n\t\t\t\t\t\t\t\t\t\t\t<span class="input-group-btn">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn btn-outline btn-file">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-upload" aria-hidden="true"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="file" v-on:change="fileUpload" data-vv-name="file" v-validate="\'size:10240\'"  />\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<label for="company_profile" class="col-xs-12 control-label" v-if="errors.has(\'file\')">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left"><span class="red-800" v-text="errors.first(\'file\')"></span></div>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="form-control-static form-control-static-grey">\n\t\t\t\t\t\t\t\t\t\t\t신청 후 5일 이내에 투자팀의 심사를 거쳐 연락을 드립니다.<br />\n\t\t\t\t\t\t\t\t\t\t\t크라우디와 함께 성장하고 싶은 스타트업들의 많은 신청 부탁드립니다.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<hr class="wline" />\n\t\t\t\t\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="text-center form-control-static form-control-static-grey">\n\t\t\t\t\t\t\t<span class="red-800">승인후 프로세스 안내</span>\n\t\t\t\t\t\t\t<div class="mt10">\n\t\t\t\t\t\t\t\t투자팀 PM이 의뢰가 들어온 투자 프로젝트를 승인완료 하면,<br />\n\t\t\t\t\t\t\t\t의뢰한 회원은 마이페이지 <i class="fa fa-angle-right" aria-hidden="true"></i> 나의 프로젝트 <i class="fa fa-angle-right" aria-hidden="true"></i> 투자프로젝트 <i class="fa fa-angle-right" aria-hidden="true"></i> 시작하기에서 온라인 IR 작성이 가능합니다.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="form-group row-mobile mt40 pb30">\n\t\t\t\t\t\t\t<div class="col-xs-4 col-xs-offset-4 col-sm-4 col-sm-offset-4">\n\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-10 col-sm-offset-1">\n\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="btn btn-block btn-lg btn-primary" v-on:click="completed">신청하기</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t',
						data: function() {
							return {
								request: {
									memCode: userInfo.memCode,
									pjAmount: "",
									pjContent: "",
									file: {
										fileData: "",
										fileName: ""
									}
								}
							}
						},
						components: {
							vueNumeric: VueNumeric.default
						},
						methods: {
							fileUpload: function(t) {
								var e = this,
									n = t.target.files || t.dataTransfer.files;
								if (n.length) {
									var i = new FileReader;
									i.onload = function(t) {
										e.request.file.fileData = t.target.result, e.request.file.fileName = n[0].name
									}, i.readAsDataURL(n[0])
								}
							},
							completed: function() {
								var t = this;
								this.$validator.validateAll().then(function(e) {
									e && ($(".page-loader-more").fadeIn(""), axios.post("/set/invest/request", t.request).then(function(t) {
										$(".page-loader-more").fadeOut(""), "0000" == t.data.rCode ? $("#completedModal").modal("show") : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
									}))
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t<div class="md-ml30 mt15">\n\t\t\t\t\t\t\t\t<div class="fp-items-method mb60">\n\t\t\t\t\t\t\t\t\t<div class="fp-items-method-tab">\n\t\t\t\t\t\t\t\t\t\t<label for="method_set1" class="radio-btn webfont2">\n\t\t\t\t\t\t\t\t\t\t\t주식형 <input type="radio" name="method_set" id="method_set1" value="1" v-model="request.pjStockType" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<label for="method_set2" class="radio-btn webfont2">\n\t\t\t\t\t\t\t\t\t\t\t채권형 <input type="radio" name="method_set" id="method_set2" value="2" v-model="request.pjStockType" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="ptab_contents">\n\t\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb10">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_pu_type1" class="col-xs-3 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">공개발행 여부</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-9">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="stock_pu_type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_pu_type1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="stock_pu_type" id="stock_pu_type1" value="1" v-model="request.pjType" :disabled="pjStatus != 0"/><span class="webfont">공모</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_pu_type2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="stock_pu_type" id="stock_pu_type2" value="2" v-model="request.pjType" :disabled="pjStatus != 0"/><span class="webfont">사모</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb10">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_Income_type1" class="col-xs-3 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">소득공제 가능여부</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-9">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="stock_income_type">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_income_type1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="stock_income_type" id="stock_income_type1" value="N" v-model="request.pjDeductionConfirm" :disabled="pjStatus != 0"/><span class="webfont">불가능</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_income_type2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="stock_income_type" id="stock_income_type2" value="Y" v-model="request.pjDeductionConfirm" :disabled="pjStatus != 0"/><span class="webfont">가능</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_type_0" class="col-xs-3 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">증권 구분</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.pjStockType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<order-select :options="securCodeOptions" v-model="request.pjSecurCode" :disabled="pjStatus != 0"></order-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<order-select :options="stockCodeOptions" v-model="request.pjStockCode" :disabled="pjStatus != 0"></order-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.pjStockType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<bond-select :options="securBondOptions" v-model="request.pjSecurBondCode" :disabled="pjStatus != 0"></bond-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model="request.pjBondType" placeholder="채권종류를 입력하세요." :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m2" />\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ta" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">목표금액</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjTgAmount" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">원</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_project_start" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">프로젝트 기간</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjStartDate" :date="request.pjStartDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-1 text-center form-mline webfont2"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjEndDate" :date="request.pjEndDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_apr" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">청약배정순위</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<order-select :options="assignOptions" v-model="request.pjAssignPl" :disabled="pjStatus != 0"></order-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<template v-if="request.pjStockType == 2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ta" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">상환방법</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjRedemptionType" placeholder="ex) 만기 일시 상환" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</template>\t\n\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m2" />\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_pd" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">배정확정/환불일</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_rd" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">납입일</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjFixedDate" :date="request.pjFixedDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjPmtDate" :date="request.pjPmtDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_rd" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">발행예정일</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_pd" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">증권입고일</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjPublishDate" :date="request.pjPublishDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjWearingDate" :date="request.pjWearingDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n" v-if="request.pjStockType == 2">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_rd" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">채권만기일</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjBondDueDate" :date="request.pjBondDueDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<template v-if="request.pjStockType == 1 && request.pjStockCode == \'STC002\'">\n\t\t\t\t\t\t\t\t\t\t\t<hr class="big_m2" />\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_project_start" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">상환청구기간</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjRedemptionStartDate" :date="request.pjRedemptionStartDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-1 text-center form-mline webfont2"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjRedemptionEndDate" :date="request.pjRedemptionEndDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ta" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">상환 금리</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjRedemptionInterestRate" placeholder="ex) 연 복리 10%" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_project_start" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">전환청구기간</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjConversionStartDate" :date="request.pjConversionStartDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-1 text-center form-mline webfont2"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.pjConversionEndDate" :date="request.pjConversionEndDate" v-if="dataConfirm" :disabled="pjStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ta" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">전환 조건</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjConversionRate" placeholder="ex) 우선주 1주 당 보통주 1주" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_isin" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">최저배당이율</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_ppw" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">의결권 유무</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjDividendRate" placeholder="ex) 연 2%(액면가 기준)" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<order-select :options="votingRightOptions" v-model="request.pjVotingRight" :disabled="pjStatus != 0"></order-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ta" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">주식 종류</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-7">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjBondType" placeholder="주식종류를 입력하세요." :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m2" />\n\n\t\t\t\t\t\t\t\t\t\t<template v-if="request.pjStockType == 1">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_cs" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">현재 기업가치</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_pd" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left" v-text="pubStockName"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjCurrValue" placeholder="기업가치를 입력하세요." :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">원</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjPublishCnt" :placeholder="pubStockName + \'를 입력하세요.\'" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">주</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_cs" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">현재 주식수</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="stock_aes" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">발행 후 배정지분율</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjCurrStock" placeholder="현재 주식수를 입력하세요." :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">주</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" :precision="6" v-model="request.pjAtAssign" placeholder="발행 후 배정지분율를 입력하세요." :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-3">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ms" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">투자가능 최대{{stockType}}수</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_ms" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">투자가능 최소{{stockType}}수</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model.trim="request.pjInvestMaxStock" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--:placeholder="\'투자가능 최대\' + stockType + \'수\'"--\x3e\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">{{stockTypeText}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model.trim="request.pjInvestMinStock" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--:placeholder="\'투자가능 최소\' + stockType + \'수\'"--\x3e\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">{{stockTypeText}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t<template v-if="request.pjStockType == 2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_cs" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">연이자율</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_pd" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left" v-text="pubStockName"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" :precision="6"  v-model="request.pjPaymentRate" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- vue-numeric class="form-control" separator="," currency="" :precision="6"  v-model="request.pjPaymentRate" placeholder="연이자율를 입력하세요." :disabled="pjStatus != 0"></vue-numeric --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">%</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjPublishCnt" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--:placeholder="pubStockName + \'를 입력하세요.\'" --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">구좌</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="bond_aes" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">이자지급 주기</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjPaymentCycle" :disabled="pjStatus != 0">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m2" />\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_isin" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">종목코드(ISIN)</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_ppw" class="col-xs-5 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left" v-text="contStockName"></div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" v-model.trim="request.pjIsin" placeholder="종목코드를 입력하세요." :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-1"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjContStock" :placeholder="contStockName + \'을 입력하세요.\'" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">원</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="stock_isin" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left" v-text="faceName"></div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," currency="" v-model="request.pjFaceValue" :placeholder="faceName + \'를 입력하세요.\'" :disabled="pjStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-1">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10">원</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<hr class="big_m2" />\n\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bond_uniq" class="col-xs-3 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">발행증권의 특이사항</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-9">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows="5" cols="50" class="form-control mt10 md-mt0 m-mt0 xs-mt0" v-model="request.pjSignReport" :disabled="pjStatus != 0"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t                                    <a class="btn btn-block btn-primary-outline" v-on:click="save">저장</a>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save(true)">저장 후  다음단계</a>\n\t\t\t\t\t                                </div>\n\t\t\t\t\t                            </div>\n\t\t\t\t\t                        </div>\n\t\t\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								request: {
									pjType: "1",
									pjStockType: "1",
									pjDeductionConfirm: "N",
									pjSecurBondCode: "SEC002",
									pjSecurCode: "SEC001",
									pjStockCode: "STC001",
									pjBondType: "",
									pjTgAmount: 0,
									pjStartDate: "",
									pjEndDate: "",
									pjAssignPl: "ASS001",
									pjFixedDate: "",
									pjPmtDate: "",
									pjPublishDate: "",
									pjWearingDate: "",
									pjBondDueDate: "",
									pjCurrValue: 0,
									pjPublishCnt: 0,
									pjCurrStock: 0,
									pjAtAssign: 0,
									pjInvestMinStock: 0,
									pjInvestMaxStock: 0,
									pjInvestMaxAmt: 0,
									pjPaymentRate: 0,
									pjPaymentCycle: "",
									pjIsin: "",
									pjContStock: 0,
									pjFaceValue: 0,
									pjSignReport: "",
									pjRedemptionStartDate: "",
									pjRedemptionEndDate: "",
									pjConversionStartDate: "",
									pjConversionEndDate: "",
									pjRedemptionInterestRate: "",
									pjConversionRate: "",
									pjDividendRate: "",
									pjVotingRight: "N",
									pjRedemptionType: ""
								},
								securCodeOptions: [{
									id: "SEC001",
									text: "지분증권-주식형"
								}],
								securBondOptions: [{
									id: "SEC002",
									text: "채무증권-채권형"
								}, {
									id: "SEC003",
									text: "채무증권-CB(전환사채)형"
								}, {
									id: "SEC004",
									text: "채무증권-BW(신주인수권부사채)형"
								}, {
									id: "SEC006",
									text: "채무증권-등록발행"
								}, {
									id: "SEC007",
									text: "채무증권-비등록발행"
								}],
								stockCodeOptions: [{
									id: "STC001",
									text: "보통주"
								}, {
									id: "STC002",
									text: "우선주"
								}],
								assignOptions: [{
									id: "ASS001",
									text: "선착순"
								}, {
									id: "ASS002",
									text: "금액순"
								}, {
									id: "ASS003",
									text: "기타배정"
								}],
								votingRightOptions: [{
									id: "Y",
									text: "있음"
								}, {
									id: "N",
									text: "없음"
								}]
							}
						},
						computed: {
							pubStockName: function() {
								return 1 == this.request.pjStockType ? "발행예정 주식수" : "발행예정 구좌수"
							},
							contStockName: function() {
								return 1 == this.request.pjStockType ? "주당 가격" : "구좌당 가격"
							},
							faceName: function() {
								return 1 == this.request.pjStockType ? "액면가" : "권면가"
							},
							stockTypeText: function() {
								return 1 == this.request.pjStockType ? "주" : "구좌"
							},
							stockType: function() {
								return 1 == this.request.pjStockType ? "주식" : "구좌"
							}
						},
						components: {
							orderSelect: n(1).default.component(),
							bondSelect: n(1).default.component(),
							vueNumeric: VueNumeric.default,
							datePicker: n(2).default.component()
						},
						created: function() {
							this.load()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/securities-issue", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData,
										i = t.request,
										o = n.pjStockType;
									i.pjType = n.pjType, i.pjStockType = o, 2 == o ? i.pjSecurBondCode = n.pjSecurCode : (i.pjSecurCode = n.pjSecurCode, i.pjStockCode = n.pjStockCode), i.pjDeductionConfirm = n.pjDeductionConfirm, i.pjBondType = n.pjBondType, i.pjTgAmount = n.pjTgAmount, i.pjStartDate = n.pjStartDate, i.pjEndDate = n.pjEndDate, i.pjAssignPl = n.pjAssignPl, i.pjFixedDate = n.pjFixedDate, i.pjPmtDate = n.pjPmtDate, i.pjPublishDate = n.pjPublishDate, i.pjWearingDate = n.pjWearingDate, i.pjBondDueDate = n.pjBondDueDate, i.pjCurrValue = n.pjCurrValue, i.pjPublishCnt = n.pjPublishCnt, i.pjCurrStock = n.pjCurrStock, i.pjAtAssign = n.pjAtAssign, i.pjInvestMinStock = n.pjInvestMinStock, i.pjInvestMaxAmt = n.pjInvestMaxAmt, i.pjInvestMaxStock = n.pjInvestMaxAmt / n.pjContStock, i.pjPaymentRate = n.pjPaymentRate, i.pjPaymentCycle = n.pjPaymentCycle, i.pjIsin = n.pjIsin, i.pjContStock = n.pjContStock, i.pjFaceValue = n.pjFaceValue, i.pjSignReport = n.pjSignReport, i.pjRedemptionStartDate = n.pjRedemptionStartDate, i.pjRedemptionEndDate = n.pjRedemptionEndDate, i.pjConversionStartDate = n.pjConversionStartDate, i.pjConversionEndDate = n.pjConversionEndDate, i.pjRedemptionInterestRate = n.pjRedemptionInterestRate, i.pjConversionRate = n.pjConversionRate, i.pjDividendRate = n.pjDividendRate, i.pjVotingRight = n.pjVotingRight, i.pjRedemptionType = n.pjRedemptionType, t.dataConfirm = !0, t.$nextTick(function() {
										$(".option_group .radio-inline input").checkboxradio(), $(".stock_pu_type, .stock_income_type, .bond_pu_type, .bond_income_type").controlgroup(), $(".fp-items-method-tab .radio-inline input").checkboxradio(), $(".fp-items-method-tab").controlgroup()
									})
								})
							},
							save: function(t) {
								if (0 != this.pjStatus) return void noti.open("승인대기 중 이거나 진행중인 프로젝트는 수정이 불가능합니다.");
								var e = this;
								$(".page-loader-more").fadeIn(""), this.request.pjCode = this.pjCode;
								var n = this.request.pjStockType;
								this.request.pjInvestMaxAmt = this.request.pjInvestMaxStock * this.request.pjContStock, 1 == n ? this.request.pjBondDueDate = "" : (this.request.pjSecurCode = this.request.pjSecurBondCode, this.request.pjStockCode = ""), axios.post("/set/save/invest/securities-issue", this.request).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? 1 == t ? e.$emit("step-change", 4, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 4, !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t\t<form class="form-horizontal">\n\t\t\t\t\t\t\t\t\t<p class="form-control-static form-control-static-grey2 mt10 mb70">\n\t\t\t\t\t\t\t\t\t\t주금 납입을 위해 주금을 받을 계좌 정보를 입력하여 주세요.\n\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t<label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">계좌정보 </div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="account_bank" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">증권발행대금 은행</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-3">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<bank-select v-if="dataConfirm" :options="bankCodeOptions" v-model="request.irmiStockBank" :disabled="pjStatus != 0"></bank-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="account_num" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">증권발행대금 납부계좌</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="tel" v-if="dataConfirm" class="form-control" v-model.trim="request.irmiStockAcc" :disabled="pjStatus != 0" placeholder="숫자만 입력하세요."/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="account_num" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">증권발행대금 예금주명</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" v-if="dataConfirm" class="form-control" v-model.trim="request.irmiStockAccNm" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">세금계산서 정보</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div role="tabpanel" class="tab-pane active" id="tex_tab1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="tex1_company_email" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">전자세금 계산서 이메일</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="email" v-if="dataConfirm" class="form-control" v-model.trim="request.irmiTaxEmail" :disabled="pjStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt40">\n\t\t\t\t                        <div class="col-sm-11">\n\t\t\t\t                            <div class="form-group row-mobile-n">\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary-outline" v-on:click="save">저장</a>\n\t\t\t\t                                </div>\n\t\t\t\t                                <div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t                                    <a class="btn btn-block btn-primary" v-on:click="save(true)">저장 후  다음단계</a>\n\t\t\t\t                                </div>\n\t\t\t\t                            </div>\n\t\t\t\t                        </div>\n\t\t\t\t                    </div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						props: ["pjCode", "pjStatus"],
						data: function() {
							return {
								bankCodeOptions: [],
								request: {
									irmiStockAcc: "",
									irmiStockAccNm: "",
									irmiStockBank: "",
									irmiTaxEmail: ""
								},
								confirm: {
									bank: !1,
									stock: !1
								}
							}
						},
						created: function() {
							this.load(), this.bankCodeList()
						},
						computed: {
							dataConfirm: function() {
								return this.confirm.bank && this.confirm.stock
							}
						},
						components: {
							bankSelect: n(1).default.component()
						},
						methods: {
							load: function() {
								var t = this;
								axios.post("/data/save/invest/info/stock-payment", {
									pjCode: this.pjCode
								}).then(function(e) {
									var n = e.data.rData;
									t.request.irmiStockAcc = n.irmiStockAcc, t.request.irmiStockAccNm = n.irmiStockAccNm;
									var i = n.irmiStockBank;
									"" == i && (i = "001"), t.request.irmiStockBank = i, t.request.irmiTaxEmail = n.irmiTaxEmail, t.confirm.stock = !0
								})
							},
							bankCodeList: function() {
								var t = this;
								axios.post("/data/crowdy/code/invest", {
									gcode: "IRMI_STOCK_BANK"
								}).then(function(e) {
									for (var n = e.data, i = 0; i < n.rData.length; i++) {
										var o = {
											id: n.rData[i].commonCode,
											text: n.rData[i].commonInfo
										};
										t.bankCodeOptions.push(o)
									}
									t.confirm.bank = !0
								})
							},
							save: function(t) {
								if (0 != this.pjStatus) return void noti.open("승인대기 중 이거나 진행중인 프로젝트는 수정이 불가능합니다.");
								(_.includes(this.request.irmiStockAcc, " ") || _.includes(this.request.irmiStockAcc, "-")) && (this.request.irmiStockAcc = _.replace(this.request.irmiStockAcc, new RegExp(" ", "g"), ""), this.request.irmiStockAcc = _.replace(this.request.irmiStockAcc, new RegExp("-", "g"), ""));
								var e = this;
								$(".page-loader-more").fadeIn(""), this.request.pjCode = this.pjCode, axios.post("/set/save/invest/stock-payment", this.request).then(function(n) {
									$(".page-loader-more").fadeOut("");
									var i = n.data;
									"0000" == i.rCode ? 1 == t ? e.$emit("step-change", 9, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 9, !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요. " + i.rMsg)
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t\t<div>\n\t\t\t\t\t<div class="spstart_vi_wrap spstart_vi_wrap1">\n\t\t\t\t\t\t<div class="spstart_vi_frame">\n\t\t\t\t\t\t\t<div class="container container_2">\n\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-3 col-md-5 col-lg-6"></div>\n\t\t\t\t\t\t\t\t\t<div class="col-sm-9 col-md-7 col-lg-6">\n\t\t\t\t\t\t\t\t\t\t<div class="md-ml20 m-ml15 xs-ml0">\n\t\t\t\t\t\t\t\t\t\t\t<div class="spstart_vi_title">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong class="webfont2">리워드형</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>크라우드펀딩</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>제품/서비스를 리워드로 제공하여 수익을 얻습니다.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="spstart_vi_btn">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n hidden-sm hidden-md hidden-lg">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://docs.google.com/forms/d/e/1FAIpQLSdzhOOCoTTj0OFbvM0UCYLymArrilwdkND67W27t5w7X3SH6Q/viewform?usp=sf_link" class="btn btn-block btn-sps btn-shadow btn-default-outline" target="_blank">진행가능여부 확인</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://image-se.ycrowdy.com/file/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5_%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5_ver7.pdf" target="_blank" class="btn btn-block btn-sps btn-shadow btn-default-outline">리워드 가이드북<span class="hidden-xs"> 다운로드</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 mt10">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt15 grey-800 big-hb hidden-sm hidden-md hidden-lg text-center">리워드 프로젝트 바로시작은 PC에서 가능합니다.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="hidden-xs">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzhOOCoTTj0OFbvM0UCYLymArrilwdkND67W27t5w7X3SH6Q/viewform?usp=sf_link" class="btn btn-sps btn-shadow btn-default-outline" target="_blank">진행가능여부 확인</a> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--a href="https://image-se.ycrowdy.com/file/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5_%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5_ver7.pdf" target="_blank" class="btn btn-sps btn-shadow btn-default-outline">리워드 가이드북<span class="hidden-xs"> 다운로드</span></a--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a :href="none()" v-on:click="noDownload" target="_blank" class="btn btn-sps btn-shadow btn-default-outline">리워드 가이드북<span class="hidden-xs"> 다운로드</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div v-on:click="createRewardProject" class="btn btn-sps btn-shadow btn-primary">리워드 프로젝트 만들기</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="spstart_vi_wrap spstart_vi_wrap2">\n\t\t\t\t\t\t<div class="spstart_vi_frame">\n\t\t\t\t\t\t\t<div class="container container_2">\n\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-3 col-md-5 col-lg-6"></div>\n\t\t\t\t\t\t\t\t\t<div class="col-sm-9 col-md-7 col-lg-6">\n\t\t\t\t\t\t\t\t\t\t<div class="md-ml20 m-ml15 xs-ml0">\n\t\t\t\t\t\t\t\t\t\t\t<div class="spstart_vi_title">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong class="webfont2">투자형</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>크라우드펀딩</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p>스타트업의 주식/채권을 발행하여 자금을 조달합니다.</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="spstart_vi_btn">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n hidden-sm hidden-md hidden-lg">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/crowdy/help#help_5_96" target="_blank" class="btn btn-block btn-sps btn-shadow btn-default-outline">자격요건 알아보기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://image-se.ycrowdy.com/file/%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8_ver2018.pdf" target="_blank" class="btn btn-block btn-sps btn-shadow btn-default-outline">투자 상세가이드 다운</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 mt10">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt15 grey-800 big-hb hidden-sm hidden-md hidden-lg text-center">투자 프로젝트 의뢰신청은 PC에서 가능합니다.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="hidden-xs">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/crowdy/help#help_5_46" target="_blank" class="btn btn-sps btn-shadow btn-default-outline">자격요건 알아보기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://image-se.ycrowdy.com/file/%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8_ver2018.pdf" target="_blank" class="btn btn-sps btn-shadow btn-default-outline">투자 가이드북 다운로드</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" v-on:click="requestInvestProject" class="btn btn-sps btn-shadow btn-primary">투자신청 의뢰하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="common_vi_wrap common_vi_wrap5">\n\t\t\t\t\t\t<div class="common_vi_frame">\n\t\t\t\t\t\t\t<div class="container container_2">\n\t\t\t\t\t\t\t\t<span class="webfont2">모의펀딩 시작하기</span>\n\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-8 col-sm-offset-2 col-lg-4 col-lg-offset-4">\n\t\t\t\t\t\t\t\t\t\t<div class="md-pl30 md-pr30 xs-pl0 xs-pr0">\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mt20">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-12">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://image-se.ycrowdy.com/file/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5_%E1%84%86%E1%85%A9%E1%84%8B%E1%85%B4%E1%84%91%E1%85%A5%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC_%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3_181204.pdf" target="_blank" class="btn btn-block btn-sps btn-shadow btn-default-outline hover">모의펀딩 가이드</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="btn btn-block btn-sps btn-shadow btn-primary-outline hover hidden-xs">모의크라우드펀딩 시작하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt15 grey-800 big-hb hidden-sm hidden-md hidden-lg text-center">모의크라우드펀딩 시작하기는 PC에서 가능합니다.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="common_vi_wrap common_vi_wrap5">\n\t\t\t\t\t\t<div class="common_vi_frame community-make-img">\n\t\t\t\t\t\t\t<div class="container container_2">\n\t\t\t\t\t\t\t\t<span class="webfont2">커뮤니티파트너 시작하기</span>\n\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-8 col-sm-offset-2 col-lg-4 col-lg-offset-4">\n\t\t\t\t\t\t\t\t\t\t<div class="md-pl30 md-pr30 xs-pl0 xs-pr0">\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mt20">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" v-if="memCode == \'\'" class="btn btn-block btn-sps btn-shadow btn-default-outline hover" v-on:click="getStatus">파트너 신청하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/community/make"  v-if="status.communityStatus == \'3\'" class="btn btn-block btn-sps btn-shadow btn-default-outline hover" >파트너 신청하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a :href="\'/community/make?index=\' + status.communityIdx" v-if="status.communityStatus == \'2\'" class="btn btn-block btn-sps btn-shadow btn-default-outline hover">파트너 수정하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a :href="\'/c/\' + status.communityUrl" v-if="status.communityStatus == \'1\'" class="btn btn-block btn-sps btn-shadow btn-default-outline hover">내 커뮤니티 파트너 바로가기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" v-if="status.communityStatus == \'0\'" class="btn btn-block btn-sps btn-shadow btn-default-outline" disabled>신청중</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="spstrat_wrap">\n\t\t\t\t\t\t<div class="container container_2">\n\t\t\t\t\t\t\t<div class="spstrat_top">\n\t\t\t\t\t\t\t\tCROWDY와 함께하는 프로젝트\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="container container_2">\n\t\t\t\t\t\t\t<div class="pl15 pr15 xs-pl0 xs-pr0">\n\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t<div class="spstrat_frame">\n\t\t\t\t\t\t\t\t\t\t\t<strong>CROWDY 도움말</strong>\n\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t프로젝트를 시작하시는데 어려움을 겪고 계신가요? <br />\n\t\t\t\t\t\t\t\t\t\t\t\t도움말을 참고해보세요!\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-xs-offset-3">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/crowdy/help" target="_blank" class="btn btn-sps m-btn-block btn-primary-outline">자세히 보기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t<div class="spstrat_frame">\n\t\t\t\t\t\t\t\t\t\t\t<strong>서비스 운영정책</strong>\n\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t서비스, 이용약관 및 서비스 운영정책에 <br />\n\t\t\t\t\t\t\t\t\t\t\t\t대해 안내해 드립니다.\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-xs-offset-3">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/crowdy/term?menu=2" class="btn btn-sps m-btn-block btn-primary-outline">자세히 보기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t',
						data: function() {
							return {
								status: {},
								memCode: userInfo.memCode
							}
						},
						created: function() {
							"" != this.memCode && this.getStatus()
						},
						watch: {
							memCode: function() {
								this.getStatus()
							}
						},
						methods: {
							createRewardProject: function() {
								userInfo.loginConfirm() && axios.post("/data/save/reward/create", {
									memCode: userInfo.memCode
								}).then(function(t) {
									var e = t.data;
									"0000" == e.rCode ? window.open("/make/reward/main/" + e.rData.cpCode, "_self") : noti.open("시스템 오류입니다. 다시 시도해주세요.")
								})
							},
							requestInvestProject: function() {
								if (userInfo.loginConfirm()) {
									if ("2" != userInfo.type) return void noti.open("투자형 크라우드펀딩은<br /> 법인만 가능합니다.");
									axios.post("/data/member/investor/state", {
										memCode: userInfo.memCode
									}).then(function(t) {
										var e = t.data.rData;
										if ("Y" != e.investor || "Y" == e.investor && "MIC001" == e.memIvsState) return void noti.open("투자회원으로 등록해야 프로젝트를 시작할 수 있습니다.<br /> 설정 페이지로 이동하시겠습니까?", function() {
											window.open("/mypage/main?menu=5&sub-menu=2", "_self")
										}, !0);
										window.open("/make/invest/request", "_self")
									})
								}
							},
							getStatus: function() {
								var t = this;
								userInfo.loginConfirm() && userInfo.memCode && axios.post("/data/view/community/status", {
									memCode: userInfo.memCode
								}).then(function(e) {
									if ("0000" == e.data.rCode)
										if (e.data.rData) t.status = e.data.rData;
										else {
											var n = {
												communityStatus: "3"
											};
											t.status = n
										}
									else t.error = e.data.rMsg
								})
							},
							none: function() {},
							noDownload: function() {
								noti.open("준비중입니다.")
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal" id="projectForm" method="get" action="#">\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_type1" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트의 성공 조건을 정해주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">100% 이상을 선택할 경우 <a class="red-800">기본 수수료는 5%</a>, 조건 없음을 선택할 경우 <a class="red-800">기본 수수료는 10%</a>입니다. (결제 및 송금 수수료, VAT 별도)</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none mt3">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="project_type">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_type1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="project_type" id="project_type1" value="1" v-model="request.cpFundType" :disabled="cpStatus != 0" :disabled="endStatus != 0" /><span class="webfont">100% 이상</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_type2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="project_type" id="project_type2" value="2" v-model="request.cpFundType" :disabled="cpStatus != 0" :disabled="endStatus != 0" /><span class="webfont">조건 없음</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_subject" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트의 제목을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">프로젝트의 핵심 내용을 담을 수 있고 간결한 제목을 정해주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-8">\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="project_subject" maxlength="40" v-model.trim="request.cpTitle" :disabled="cpStatus != 0" :disabled="endStatus != 0" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-2">\n\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10"><span id="charNum" v-text="request.cpTitle.length"></span> / 40</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_price" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">목표 금액을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0"><a class="red-800">최소 100,000원 이상</a>이어야 합니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-8" v-if="dataConfirm">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<vue-numeric  :disabled="cpStatus != 0" :disabled="endStatus != 0" class="form-control" separator="," currency="" v-model="request.cpTargetAmount" data-vv-name="cpTargetAmount"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\x3c!-- <vue-numeric  :disabled="cpStatus != 0" class="form-control" separator="," currency="" v-model="request.cpTargetAmount" data-vv-name="cpTargetAmount" v-validate="\'target_amount\'" :class="{\'error\' : errors.has(\'cpTargetAmount\')}"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'cpTargetAmount\')" v-text="errors.first(\'cpTargetAmount\')"></label> --\x3e\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-2">\n\t\t\t\t\t\t\t\t\t\t<div class="textarea_text_leng mt10">원</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-10">\n\t\t\t\t\t\t\t\t\t\t<div class="fees_info">\n\t\t\t\t\t\t\t\t\t\t\t<div class="fees_info_frame">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t펀딩 결제 수수료(카드 수수료 + 계좌이체 수수료)\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id="pg_fees">0</span>원\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t크라우디 플랫폼 이용 수수료\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id="platform_fees">0</span>원\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t프로젝트를 성공했을 경우 예상 정산 금액\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4 text-right text-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id="totalSum" class="red-800">0</span>원\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>1. 위 금액은 예상이므로, 실제 정산 금액은 조금 다를 수 있습니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>2. 목표금액을 초과달성하여도 수수료는 동일한 비율로 적용됩니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t3. 수수료의 비율은 다음과 같습니다.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li> - 크라우디 플랫폼 이용 수수료 (결제승인금액의 5% + 부가가치세 10%)</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li> - PG 수수료 (카드결제승인금액의 1.7-2% + 부가가치세 10%)</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_start" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트의 진행 기간을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">최소 7일부터 최대 60일까지 가능합니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-6">\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" max="60" v-model.trim="cpDateTerm" placeholder="" v-if="dataConfirm" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2 col-sm-2">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="textarea_text_leng mt10">일 남음</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5" style="z-index: 10">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="cpEndDate" :date="cpEndDate" v-if="dataConfirm" :max="maxDate" :min="minDate" :disabled="cpStatus != 0" :disabled="endStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t                        <label for="project_weburl" class="col-xs-12 control-label control-label-big">\n\t\t\t                            <div class="text-left">프로젝트의 고유 주소를 적어주세요</div>\n\t\t\t                            <p class="form-control-static mb10 mt0">프로젝트와 관련된 키워드를 짧은 영어로 적어주세요. 특수문자와 띄어쓰기는 불가능합니다.</p>\n\t\t\t                        </label>\n\t\t\t                        <div class="col-xs-4 col-sm-3">\n\t\t\t                            <p class="form-control-static">https://www.ycrowdy.com/r/</p>\n\t\t\t                        </div>\n\t\t\t                        <div class="col-xs-8 col-sm-3">\n\t\t\t                            <url-input :url="url" v-model="url" class="form-control" :class="{\'error\' : !urlConfirm}" maxlength="30" placeholder="프로젝트 명" :disabled="cpStatus != 0" :disabled="endStatus != 0" ></url-input>\n\t\t\t                        </div>\n\t\t\t                        <div class="col-xs-12" v-if="!urlConfirm">\n\t\t\t\t\t\t\t\t\t\t<label style="margin-left:15px;" class="error" v-text="\'이미 같은 주소가 있습니다. 새로운 주소를 입력해주세요\'"></label>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_img" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트 대표 이미지를 등록해주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">홈페이지와 외부 공유를 했을 때 보여집니다. 프로젝트를 한 눈에 나타낼 수 있는 이미지를 등록해주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 dropify-wrapper-340">\n\t\t\t\t\t\t\t\t\t\t<dropify-input v-if="dataConfirm" v-model="request.cpCardFile" default-message="최적 사이즈 740*492px" :default-img="request.cpCardImg" :disabled="cpStatus == 1" :disabled="endStatus != 0"></dropify-input>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_top_img" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트 키워드를 적어주세요<span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">제목 외에도 키워드 검색 시 검색 결과에 프로젝트가 나타납니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<input type="text" data-limit="5" v-model.trim="keyWords" id="keyword" placeholder="키워드 입력 후 엔터를 눌러주세요" :disabled="cpStatus == 1" :disabled="endStatus != 0"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3" v-if="endStatus == 0">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-block btn-primary-outline" v-on:click="save">저장하기</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save(true)">다음단계</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus", "endStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								now: moment().format("YYYY-MM-DD"),
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								request: {
									cpTitle: "",
									cpFundType: 1,
									cpAliasUrl: "",
									cpTargetAmount: 0,
									cpEndDate: moment(this.now).add(14, "days").format("YYYY-MM-DD"),
									cpCardFile: {},
									cpCardImg: "",
									cpKeyWord: "",
									cpKeyWords: []
								},
								keyWords: [],
								cpStartDate: this.now,
								cpEndDate: moment(this.now).add(14, "days").format("YYYY-MM-DD"),
								cpDateTerm: 1,
								minDate: moment(this.now).add(7, "days").format("YYYY-MM-DD"),
								maxDate: moment(this.now).add(60, "days").format("YYYY-MM-DD"),
								urlConfirm: !0
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							vueNumeric: VueNumeric.default,
							datePicker: n(2).default.component(),
							urlInput: n(4).default.component()
						},
						created: function() {
							$(window).scrollTop(0);
							var t = this;
							axios.post("/data/save/reward/info/basic", {
								cpCode: this.cpCode
							}).then(function(e) {
								var n = e.data;
								if ("0000" == n.rCode) {
									var i = t.request;
									"Y" == n.rData.simulationConfirm && noti.open("잘못된 URL입니다.", function() {
										window.open("/", "_self")
									}), i.cpTitle = n.rData.cpTitle, i.cpFundType = n.rData.cpFundType, i.cpAliasUrl = n.rData.cpAliasUrl, i.cpTargetAmount = n.rData.cpTargetAmount, t.cpEndDate = n.rData.cpEndDate, t.cpDateTerm = moment(t.cpEndDate).diff(t.cpStartDate, "days") + 1, i.cpCardImg = n.rData.cpCardImg, t.keyWords = n.rData.cpKeyWord, t.dataConfirm = !t.dataConfirm, t.$nextTick(function() {
										$(".option_group .radio-inline input").checkboxradio(), $(".project_type").controlgroup(), $("#keyword").on("tokenfield:createtoken", function(e) {
											t.request.cpKeyWords.push(e.attrs.value)
										}).on("tokenfield:removedtoken", function(e) {
											t.request.cpKeyWords = _.without(t.request.cpKeyWords, e.attrs.value)
										}).tokenfield()
									})
								} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
							})
						},
						watch: {
							cpEndDate: function(t) {
								var e = moment(t).diff(this.cpStartDate, "days");
								this.cpDateTerm = e + 1
							}
						},
						computed: {
							url: {
								get: function() {
									return this.request.cpAliasUrl
								},
								set: function(t) {
									if ("" != t) {
										var e = this;
										axios.post("/data/reward/url", {
											url: t
										}).then(function(t) {
											e.urlConfirm = t.data
										})
									}
									this.request.cpAliasUrl = t
								}
							}
						},
						methods: {
							save: function(t) {
								var e = this;
								if (0 != this.endStatus) e.$emit("step-change", 2, !0);
								else {
									if (this.request.cpEndDate = this.cpEndDate, this.request.cpCode = this.cpCode, this.cpDateTerm < 7 && 0 == this.cpStatus) return noti.open("캠페인 기간은 7일 이상이어야합니다."), !1;
									if (!this.urlConfirm) return noti.open("이미 같은 주소가 있습니다. 새로운 주소를 입력해주세요"), !1;
									if (this.request.cpAliasUrl.indexOf(" ") > 0) return noti.open("주소에는 띄어쓰기를 넣을 수 없습니다."), !1;
									this.request.cpKeyWord = _.uniq(_.compact(this.request.cpKeyWords)).join(), this.$validator.validateAll().then(function(n) {
										n && ($(".page-loader-more").fadeIn(""), axios.post("/set/reward/basic", e.request).then(function(n) {
											$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (e.$emit("set-url", e.request.cpAliasUrl), 1 == t ? e.$emit("step-change", 2, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 2, !1))) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
										}))
									})
								}
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal" id="combinationForm" method="get" action="#">\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t프로젝트 리워드를 구성해주세요 \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">프로젝트 시작을 위해서는 <a class="red-800">최소 1개 이상의 리워드가 있어야 합니다.</a> 배송이 필요한 리워드는 배송비가 포함된 가격을 적어주세요.</p>\n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="ps-wrap mb80">\n\t\t\t\t\t\t\t\t\t\x3c!--/// 추후 cpCode 정해지면 밑에 v-if 조건에 추가 --\x3e\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25" v-if="cpCode == \'1000006704\'">\n\t\t\t\t\t\t\t\t\t\t<label class="checkbox-inline-1 mt15" style="border-bottom:0px;">\n\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" v-model="confirmFlg" :checked="confirmFlg" :disabled="endStatus != 0" /><span class="label"></span><span class="ivs-pro-answer">알림신청자 전용</span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_price" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">리워드 금액</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," maxlength="9" currency="" v-model="request.cpBenefitAmount" placeholder="1,000원 이상 입력해주세요." :disabled="endStatus != 0"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2">원</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_ea" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">리워드 제공 <br />가능 수</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none mt3">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="qty_radio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="qty_radio1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="qty_radio" id="qty_radio1" value="N" v-model="request.cpBenefitQtyLimit" :disabled="endStatus != 0"/><span class="webfont">무제한</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="qty_radio2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="qty_radio" id="qty_radio2" value="Y" v-model="request.cpBenefitQtyLimit" :disabled="endStatus != 0" /><span class="webfont">제한</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitQtyLimit == \'Y\'">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="tel" class="form-control" v-model="request.cpBenefitQty" maxlength="100" placeholder="제공 가능 수량" :disabled="endStatus != 0" />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-1">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2">개</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_name" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">리워드 제목</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control " maxlength="30" v-model="request.cpBenefitTitle" :disabled="endStatus != 0" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2"><span id="charNum1" v-text="request.cpBenefitTitle.length"></span> / 30</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_contents" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">리워드 내용</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t<textarea rows="5" id="rewards_contents" class="form-control" v-model="request.cpBenefitInfo" maxlength="70" placeholder="준비된 리워드와 설명을 적어주세요" :disabled="endStatus != 0"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2"><span id="charNum2" v-text="request.cpBenefitInfo.length"></span> / 70</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_date" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">예상 배송일</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-3">\n\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.cpBenefitDeliveryDate" :date="request.cpBenefitDeliveryDate" :disabled="endStatus != 0"></date-picker>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">리워드 옵션</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-9">\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 옵션이 없을때 기본 버튼 --\x3e\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitOptions.length == 0">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary-outline" v-on:click="addOption" :disabled="cpStatus == 1" :disabled="endStatus != 0">리워드 옵션 추가하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 옵션선택 Loop --\x3e\n\t\t\t\t\t\t\t\t\t\t\t<div class="option_group" v-for="(item, index) in request.cpBenefitOptions" :disabled="cpStatus == 1">\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div v-for="(item, index) in request.cpBenefitOptions" :disabled="cpStatus == 1"> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="small-hb grey-600 mb10">옵션선택 {{index + 1}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n option_select">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6" :class="\'option_radio_\' + index">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label :for="\'option_radio_\' + index + \'_1\'" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" :name="\'option_radio_\' + index" :id="\'option_radio_\' + index + \'_1\'" value="1" v-model="item.cpBenefitOptionType"/><span class="webfont">선택형</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label :for="\'option_radio_\' + index + \'_2\'" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" :name="\'option_radio_\' + index" :id="\'option_radio_\' + index + \'_2\'" value="2" v-model="item.cpBenefitOptionType"/><span class="webfont">단답형</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="col-xs-6 text-right"> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_plus blue-800" v-if="index == request.cpBenefitOptions.length - 1" v-on:click="addOption">추가하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteOption(index)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 선택형 --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<div id="option1_contents_radio1" class="row row-mobile-n otab1_contents mt10"  v-show="item.cpBenefitOptionType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control " v-model="item.cpBenefitOptionTitle" maxlength="30" placeholder="ex) 옷의 사이즈를 적어주세요" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<keyword v-model.trim="item.cpBenefitOption" :value="item.cpBenefitOption"></keyword>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- //선택형 --\x3e\n\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 단답형 --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<div id="option1_contents_radio2" class="row row-mobile-n otab1_contents mt10"  v-show="item.cpBenefitOptionType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control " v-model="item.cpBenefitOptionTitle" maxlength="20" placeholder="ex) 옷의 사이즈를 적어주세요" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2"><span id="charNum3" v-text="item.cpBenefitOptionTitle.length"></span> / 20</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- //단답형 --\x3e\n\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="row row-mobile-n option_select">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteOption(index)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>--\x3e\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- //옵션선택 Loop --\x3e\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_date" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">배송지 필요여부</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none mt3">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="delivery_radio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="delivery_radio1" class="radio-inline" style="z-index: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="delivery_radio" id="delivery_radio1" value="Y" v-model="request.cpBenefitDeliveryConfirm" :disabled="endStatus != 0"/><span class="webfont">배송지 필요</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="delivery_radio2" class="radio-inline" style="z-index: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="delivery_radio" id="delivery_radio2" value="N" v-model="request.cpBenefitDeliveryConfirm" :disabled="endStatus != 0"/><span class="webfont">배송지 필요없음</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<hr />\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n pt15 mb30">\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4"></div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="insertBenefit()" :disabled="endStatus != 0">\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode == \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t등록\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode != \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t수정\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary-outline" v-on:click="resetBenefit()" :disabled="endStatus != 0">\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode == \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t초기화\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode != \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t취소\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<div class="col-xs-2 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t등록된 리워드<br />미리보기 \x3c!--a class="form-tip webuiPopover" href="javascript:void(0);" data-plugin="webuiPopover" data-content="운영하고 계신 웹사이트 또는 SNS가 있으시다면 등록 해주세요. 프로젝트 상세보기 페이지의 &lt;br / &gt;제작자 정보 ‘자세히 보기’에서 아이콘 클릭을 통해 해당 웹사이트로 바로 이동할 수 있게 됩니다. &lt;br / &gt;링크 등록을 통해 크라우드펀딩을 진행하는 제품/서비스 외에 제작자(팀)의 활동을 알려보세요." data-animation="pop"><i class="fa fa-question" aria-hidden="true"></i></a--\x3e\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-10">\n\t\t\t\t\t\t\t\t\t\t<div id="st-items-wrap" class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0" v-if="!dataConfirm"> 리워드가 없습니다. 리워드를 추가해주세요.</p>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12" v-for="(item, index) in benefitList" v-if="dataConfirm && (index % 2 == 0)">\n                                                    <div class="st-items st-items-loop">\n                                                        <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                        <div class="row not-space">\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <div class="st-items-su">\n                                                                    <strong><span class="webfont2">{{parseInt(item.cpBenefitAmount).toLocaleString()}}</span>원 펀딩</strong>\n                                                                </div>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                                <div class="st-items-btn">\n\t                                                                <template v-if="item.cpBenefitQty < 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">{{item.cpBenefitRemQty}}개 남음</span>\n\t                                                                </template>\n\t                                                                <template v-if="item.cpBenefitQty >= 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">무제한</span>\n\t                                                                </template>\n                                                                    <span class="btn btn-sm btn-danger-outline">{{item.cpBenefitSpsQty}}개 펀딩</span>\n                                                                </div>\n                                                            </div>\n                                                            <div v-if="item.preopenConfirm == \'Y\'" class="col-xs-12">\n                                                            \t<dl>\n                                                            \t\t<dt>구분</dt>\n                                                            \t\t<dd><strong>{{item.preopenConfirm | confirmType}}</strong></dd>\n                                                            \t</dl>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <dl>\n                                                                    <dt>리워드명</dt>\n                                                                    <dd><strong v-text="item.cpBenefitTitle"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <p v-html="item.cpBenefitInfo"></p>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <dl>\n                                                                    <dt>예상 배송일</dt>\n                                                                    <dd><strong v-text="item.cpBenefitDeliveryDate"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                        </div>\n                                                        \x3c!-- 옵션 --\x3e\n                                                        <div class="st-items-option">\n                                                            <dl v-for="(option, optionIndex) in item.cpBenefitOptions" v-if="dataConfirm">\n                                                                <dt>{{option.cpBenefitOptionTitle}}</dt>\n                                                                <dd>\n                                                                \t<template v-if="option.cpBenefitOptionType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class="reward-choice-optionBtn reward-choice-optionArr mt5" >\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option v-for ="(d,di) in option.cpBenefitOption.split(\',\')" :value="d">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{d}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="option.cpBenefitOptionType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" value="직접 입력하세요" class="form-control" maxlength="50" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n                                                                </dd>\n                                                            </dl>\n                                                        </div>\n                                                        \x3c!-- //옵션 --\x3e\n\n                                                        <div class="st-items-option-control" v-if="endStatus == 0">\n                                                        \t<a v-if="item.cpBenefitStatus == 1 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'2\')">리워드 중단</a>\n                                                        \t<a v-if="item.cpBenefitStatus == 2 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'1\')">리워드 제공</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="updateBenefit(index)">수정</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteBenefitCheck(item)">삭제</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n                                                    </div>\n                                            \t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12" v-for="(item, index) in benefitList" v-if="dataConfirm && (index % 2 == 1)">\n\t\t\t\t\t\t\t\t\t\t\t\t    <div class="st-items st-items-loop">\n                                                        <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                        <div class="row not-space">\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <div class="st-items-su">\n                                                                    <strong><span class="webfont2">{{parseInt(item.cpBenefitAmount).toLocaleString()}}</span>원 펀딩</strong>\n                                                                </div>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                                <div class="st-items-btn">\n\t                                                                <template v-if="item.cpBenefitQty < 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">{{item.cpBenefitRemQty}}개 남음</span>\n\t                                                                </template>\n\t                                                                <template v-if="item.cpBenefitQty >= 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">무제한</span>\n\t                                                                </template>\n                                                                    <span class="btn btn-sm btn-danger-outline">{{item.cpBenefitSpsQty}}개 펀딩</span>\n                                                                </div>\n                                                            </div>\n                                                            <div v-if="item.preopenConfirm == \'Y\'" class="col-xs-12">\n                                                            \t<dl>\n                                                            \t\t<dt>구분</dt>\n                                                            \t\t<dd><strong>{{item.preopenConfirm | confirmType}}</strong></dd>\n                                                            \t</dl>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <dl>\n                                                                    <dt>리워드명</dt>\n                                                                    <dd><strong v-text="item.cpBenefitTitle"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <p v-html="item.cpBenefitInfo"></p>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <dl>\n                                                                    <dt>예상 배송일</dt>\n                                                                    <dd><strong v-text="item.cpBenefitDeliveryDate"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                        </div>\n                                                        \x3c!-- 옵션 --\x3e\n                                                        <div class="st-items-option">\n                                                            <dl v-for="(option, optionIndex) in item.cpBenefitOptions" v-if="dataConfirm">\n                                                                <dt>{{option.cpBenefitOptionTitle}}</dt>\n                                                                <dd>\n                                                                \t<template v-if="option.cpBenefitOptionType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select class="reward-choice-optionBtn reward-choice-optionArr mt5" >\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option v-for ="(d,di) in option.cpBenefitOption.split(\',\')" :value="d">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{d}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="option.cpBenefitOptionType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" value="직접 입력하세요" class="form-control" maxlength="50" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n                                                                </dd>\n                                                            </dl>   \n                                                        </div>\n\n                                                        \x3c!-- //옵션 --\x3e\n\n                                                        <div class="st-items-option-control" v-if="endStatus == 0">\n                                                        \t<a v-if="item.cpBenefitStatus == 1 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'2\')">리워드 중단</a>\n                                                        \t<a v-if="item.cpBenefitStatus == 2 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'1\')">리워드 제공</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="updateBenefit(index)">수정</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteBenefitCheck(item)">삭제</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n                                                    </div>\n                                            \t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save(true)">다음단계</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus", "endStatus"],
						data: function() {
							return {
								request: {
									cpCode: this.cpCode,
									memCode: userInfo.memCode,
									cpBenefitCode: "",
									cpBenefitTitle: "",
									cpBenefitAmount: 0,
									cpBenefitInfo: "",
									cpBenefitQty: 0,
									cpBenefitRemQty: 0,
									cpBenefitDeliveryDate: moment().format("YYYY-MM-DD"),
									cpBenefitDeliveryConfirm: "Y",
									cpBenefitStatus: 1,
									cpBenefitSpsQty: 0,
									cpBenefitOptions: [],
									cpBenefitQtyLimit: "N",
									preopenConfirm: "N"
								},
								benefitList: [],
								selectedBenefit: {},
								confirmFlg: !1
							}
						},
						computed: {
							dataConfirm: function() {
								return this.benefitList.length > 0
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							datePicker: n(2).default.component(),
							keyword: n(8).default.component(),
							vueNumeric: VueNumeric.default
						},
						created: function() {
							$(window).scrollTop(0), this.getBenefitList()
						},
						methods: {
							getBenefitList: function(t) {
								var e = this;
								axios.post("/data/save/reward/info/benefit", {
									cpCode: this.cpCode
								}).then(function(n) {
									var i = n.data;
									"0000" == i.rCode ? (e.resetBenefit(), e.benefitList = i.rData, e.setRadio(t)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							setRadio: function(t) {
								var e = this;
								"refresh" == t ? e.$nextTick(function() {
									$(".option_group .radio-inline input").checkboxradio(t), $(".delivery_radio, .qty_radio, [class*='option_radio_']").controlgroup(t)
								}) : e.$nextTick(function() {
									$(".option_group .radio-inline input").checkboxradio(), $(".delivery_radio, .qty_radio, [class*='option_radio_']").controlgroup()
								})
							},
							addOption: function() {
								var t = this,
									e = {
										cpBenefitOptionType: 2,
										cpBenefitOption: [],
										cpBenefitOptionTitle: "",
										cpBenefitCode: ""
									};
								t.request.cpBenefitOptions.push(e), t.setRadio()
							},
							deleteOption: function(t) {
								this.request.cpBenefitOptions.splice(t, 1)
							},
							insertBenefit: function() {
								for (var t = this, e = 0; e < t.request.cpBenefitOptions.length; e++) {
									var n = _.uniq(t.request.cpBenefitOptions[e].cpBenefitOption).join();
									t.request.cpBenefitOptions[e].cpBenefitOption = n, t.request.cpBenefitOptions[e].cpBenefitCode = t.request.cpBenefitCode
								}
								if (t.request.memCode = userInfo.memCode, "N" == t.request.cpBenefitQtyLimit) t.request.cpBenefitRemQty = 999999, t.request.cpBenefitQty = 999999;
								else {
									var i = t.request.cpBenefitQty;
									t.request.cpBenefitRemQty = i
								}
								return t.request.cpBenefitAmount < 1e3 ? void noti.open("리워드 금액은 1000원 이상 입력해야합니다.") : "Y" == t.request.cpBenefitQtyLimit && t.request.cpBenefitQty < 1 ? void noti.open("리워드 제공가능 수는 0개 이상이어야 합니다.") : "" == t.request.cpBenefitTitle ? void noti.open("리워드 제목을 입력해주세요.") : "" == t.request.cpBenefitInfo ? void noti.open("리워드 내용을 입력해주세요.") : (this.confirmFlg ? this.request.preopenConfirm = "Y" : this.request.preopenConfirm = "N", void axios.post("/data/save/reward/benefit/set", this.request).then(function(e) {
									"0000" == e.data.rCode ? (noti.open("등록/저장되었습니다."), t.getBenefitList("refresh"), t.$emit("check", !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								}))
							},
							deleteBenefitCheck: function(t) {
								var e = this;
								this.selectedBenefit = t, noti.open("정말 리워드를 삭제 하시겠습니까?", e.deleteBenefit, !0)
							},
							deleteBenefit: function() {
								var t = this;
								axios.post("/data/save/reward/benefit/delete", {
									cpCode: this.cpCode,
									cpBenefitCode: this.selectedBenefit.cpBenefitCode
								}).then(function(e) {
									"0000" == e.data.rCode ? (t.getBenefitList("refresh"), t.$emit("check", !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							changeBenefitStatus: function(t, e) {
								var n = this;
								axios.post("/data/save/reward/benefit/status", {
									cpCode: this.cpCode,
									cpBenefitCode: t.cpBenefitCode,
									cpBenefitStatus: e
								}).then(function(t) {
									"0000" == t.data.rCode ? ("2" == e ? noti.open("리워드의 제공이 중단되었습니다.") : noti.open("리워드가 다시 제공됩니다."), n.getBenefitList()) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							updateBenefit: function(t) {
								var e = this;
								e.resetBenefit(), e.request.cpCode = this.cpCode, e.request.memCode = userInfo.memCode, e.request.cpBenefitCode = e.benefitList[t].cpBenefitCode, e.request.cpBenefitTitle = e.benefitList[t].cpBenefitTitle, e.request.cpBenefitAmount = e.benefitList[t].cpBenefitAmount, e.request.cpBenefitInfo = e.benefitList[t].cpBenefitInfo, e.request.cpBenefitQty = e.benefitList[t].cpBenefitQty, e.request.cpBenefitRemQty = e.benefitList[t].cpBenefitRemQty, e.request.cpBenefitDeliveryDate = e.benefitList[t].cpBenefitDeliveryDate, e.request.cpBenefitDeliveryConfirm = e.benefitList[t].cpBenefitDeliveryConfirm, e.request.cpBenefitStatus = e.benefitList[t].cpBenefitStatus, e.request.cpBenefitSpsQty = e.benefitList[t].cpBenefitSpsQty, e.request.cpBenefitQty < 999999 ? e.request.cpBenefitQtyLimit = "Y" : e.request.cpBenefitQtyLimit = "N", e.request.cpBenefitOptions = [];
								for (var n = e.benefitList[t].cpBenefitOptions, i = 0; i < n.length; i++) {
									var o = n[i].cpBenefitOption.split(","),
										a = {
											cpBenefitOptionType: n[i].cpBenefitOptionType,
											cpBenefitOptionTitle: n[i].cpBenefitOptionTitle,
											cpBenefitCode: n[i].cpBenefitCode,
											cpBenefitOption: []
										};
									e.request.cpBenefitOptions.push(a);
									for (var s = 0; s < o.length; s++) e.request.cpBenefitOptions[i].cpBenefitOption.push(o[s])
								}
								e.setRadio("refresh")
							},
							resetBenefit: function() {
								this.request = {
									memCode: userInfo.memCode,
									cpCode: this.cpCode,
									cpBenefitCode: "",
									cpBenefitTitle: "",
									cpBenefitAmount: 0,
									cpBenefitInfo: "",
									cpBenefitQty: 0,
									cpBenefitRemQty: 0,
									cpBenefitDeliveryDate: moment().format("YYYY-MM-DD"),
									cpBenefitDeliveryConfirm: "Y",
									cpBenefitStatus: 1,
									cpBenefitSpsQty: 0,
									cpBenefitOptions: [],
									cpBenefitQtyLimit: "N"
								}, this.selectedBenefit = {}
							},
							save: function(t) {
								var e = this;
								1 == t && e.$emit("step-change", 4, !0)
							}
						},
						filters: {
							confirmType: function(t) {
								return "Y" == t ? "알림신청자 전용" : "모두"
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line reward-make-fund">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal">\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">계좌 정보를 입력해주세요 </div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">프로젝트 종료 후 입금받으실 계좌를 입력해주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="account_bank" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">거래 은행을 선택해주세요 </div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<bank-select v-if="dataConfirm" :options="bankCodeOptions" v-model="request.cpFundBankCode" :disabled="cpStatus != 0" :disabled="endStatus != 0"></bank-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="account_num" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">계좌번호를 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="tel" v-if="dataConfirm" class="form-control" v-model="request.cpFundBankAccountNo" maxlength="20" :disabled="cpStatus != 0" :disabled="endStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="account_name" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">예금주명을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" v-if="dataConfirm" class="form-control" id="account_name" maxlength="20" v-model="request.cpFundBankAccountName" placeholder="계좌에 등록된 예금주명과 일치해야 합니다" :disabled="cpStatus != 0" :disabled="endStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bankbook_img" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">통장 사본 이미지를 올려주세요</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file dropify-wrapper-340">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<dropify-input v-if="dataConfirm" v-model="request.cpFundBankAccountFile" :default-img="request.cpFundBankAccountImg" :disabled="cpStatus != 0" :disabled="endStatus != 0"></dropify-input>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">세금계산서 정보를 입력해주세요<span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">크라우디 수수료에 한해서만 세금계산서를 발급해 드립니다. 이 단계에서 사업자등록증을 올리지 않으시면 세금계산서를 발급받으실 수 없습니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div role="tabpanel" class="tab-pane active" id="tex_tab1">\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="tex1_company_email" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">전자 세금 계산서 이메일을 적어주세요 </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="email" v-if="dataConfirm" class="form-control" maxlength="40" v-model="request.cpFundTaxEmail" :disabled="cpStatus == 1" :disabled="endStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="tex1_company_img" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">사업자등록증 사본 이미지를 올려주세요 </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file dropify-wrapper-340">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dropify-input v-if="dataConfirm" v-model="request.cpBizFile" :default-img="request.cpBizImg"  :disabled="cpStatus == 1" :disabled="endStatus != 0"></dropify-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="partner_facebook" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t홈페이지와 SNS 주소를 적어주세요<span class="red-800">(선택사항)</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">현재 운영 중인 곳의 주소를 적어주세요. 진행자 정보에 노출됩니다. </p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-7 sns-group" v-if="dataConfirm" >\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_website" class="icon_sns icon_website pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_website" v-model="snsInfo.websiteUrl" placeholder="웹사이트 URL을 입력해주세요" :disabled="cpStatus == 1" :disabled="endStatus != 0"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_facebook" class="icon_sns icon_facebook pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_facebook" v-model="snsInfo.facebookUrl" placeholder="페이스북 페이지 주소를 입력해주세요" :disabled="cpStatus == 1" :disabled="endStatus != 0"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_instagram" class="icon_sns icon_instagram pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_instagram" v-model="snsInfo.instagramUrl" placeholder="인스타그램 URL을 입력해주세요" :disabled="cpStatus == 1" :disabled="endStatus != 0"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_blog" class="icon_sns icon_blog pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_blog" v-model="snsInfo.blogUrl" placeholder="블로그 URL을 입력해주세요." :disabled="cpStatus == 1" :disabled="endStatus != 0"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_twitter" class="icon_sns icon_twitter pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_twitter" v-model="snsInfo.twitterUrl" placeholder="트위터 URL을 입력해주세요" :disabled="cpStatus == 1" :disabled="endStatus != 0"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n" style="display:none;">\n\t\t\t\t\t\t\t\t\t<label for="mc_partner" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t커뮤니티 파트너를 선택해주세요\n\t\t\t\t\t\t\t\t\t\t\t<span class="red-800">(선택사항) 프로젝트가 시작해야 선택할 수 있습니다. </span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">파트너와 협업을 원하는 경우 선택해주세요. 신청은 프로젝트가 시작된 후에 가능합니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-7">\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-7">\n\t\t\t\t\t\t\t\t\t\t\t\t<community-select v-if="dataConfirm" :options="communityList" v-model="request.communityIdx" :disabled="endStatus != 0" /></community-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="red-800" v-if="partnerStatus == 2"> 승인 대기 중입니다. </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="red-800" v-if="partnerStatus == 1"> 승인 완료되었습니다. </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" v-if="partnerStatus == 3" class="btn btn-block btn-primary-outline" :disabled="cpStatus != 2" v-on:click="partnerApprovalRequest" :disabled="endStatus != 0">{{ partnerName }}</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90" v-if="endStatus == 0">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save">저장하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus", "endStatus"],
						data: function() {
							return {
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								request: {
									cpCode: "",
									memCode: userInfo.memCode,
									cpFundBankCode: "02",
									cpFundBankAccountNo: "",
									cpFundBankAccountName: "",
									cpFundBankAccountImg: "",
									cpFundBankAccountFile: {},
									cpBizImg: "",
									cpBizFile: {},
									cpFundTaxEmail: userInfo.email,
									communityApproveStatus: "",
									communityIdx: "",
									communityReturnReason: "",
									snsList: []
								},
								bankCodeOptions: [],
								communityList: [],
								confirm: {
									bank: !1,
									community: !1,
									fund: !1
								},
								snsInfo: {
									websiteUrl: "",
									facebookUrl: "",
									blogUrl: "",
									instagramUrl: "",
									twitterUrl: ""
								},
								partnerStatus: 3
							}
						},
						computed: {
							dataConfirm: function() {
								return this.confirm.bank && this.confirm.fund && this.confirm.community
							},
							partnerName: function() {
								return 2 == this.request.communityApproveStatus && 1 == this.endStatus ? "파트너 재승인 요청" : "파트너 승인 요청"
							}
						},
						components: {
							bankSelect: n(1).default.component(),
							dropifyInput: n(0).default.component(),
							communitySelect: n(1).default.component()
						},
						created: function() {
							$(window).scrollTop(0), this.getBankCodeList(), 0 != this.cpStatus ? this.getCommunityList() : this.confirm.community = !0, this.getFundInfo()
						},
						methods: {
							setPartnerStatus: function() {
								1 == this.request.communityApproveStatus ? this.partnerStatus = 1 : this.request.communityIdx > 0 && 0 == this.request.communityApproveStatus ? this.partnerStatus = 2 : this.partnerStatus = 3
							},
							getBankCodeList: function() {
								var t = this;
								axios.post("/data/crowdy/code/reward", {
									gcode: "CFND_BANK_CODE"
								}).then(function(e) {
									var n = e.data;
									if ("0000" == n.rCode) {
										for (var i = 0; i < n.rData.length; i++) {
											var o = {
												id: n.rData[i].commonCode,
												text: n.rData[i].commonInfo
											};
											t.bankCodeOptions.push(o)
										}
										t.confirm.bank = !0
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							getCommunityList: function() {
								var t = this;
								axios.post("/data/save/reward/info/community", {
									cpCode: this.cpCode
								}).then(function(e) {
									var n = e.data;
									if ("0000" == n.rCode) {
										for (var i = 0; i < n.rData.length; i++) {
											var o = {
												id: n.rData[i].communityIdx,
												text: n.rData[i].communityName
											};
											t.communityList.push(o), t.setPartnerStatus()
										}
										t.confirm.community = !0
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							getFundInfo: function() {
								var t = this;
								axios.post("/data/save/reward/info/fund", {
									cpCode: this.cpCode
								}).then(function(e) {
									var n = e.data;
									if ("0000" == n.rCode) {
										var i = t.request;
										"" == n.rData.cpFundBankCode || null == n.rData.cpFundBankCode ? i.cpFundBankCode = "02" : i.cpFundBankCode = n.rData.cpFundBankCode, i.cpFundBankAccountNo = n.rData.cpFundBankAccountNo, i.cpFundBankAccountName = n.rData.cpFundBankAccountName, i.cpFundBankAccountImg = n.rData.cpFundBankAccountImg, i.cpBizImg = n.rData.cpBizImg, i.cpFundTaxEmail = n.rData.cpFundTaxEmail, "" == n.rData.cpFundTaxEmail && (i.cpFundTaxEmail = userInfo.email), i.communityApproveStatus = n.rData.communityApproveStatus, i.communityIdx = n.rData.communityIdx, i.communityReturnReason = n.rData.communityReturnReason;
										for (var o = 0; o < n.rData.snsList.length; o++) {
											var a = n.rData.snsList[o].snsType,
												s = n.rData.snsList[o].snsUrl;
											n.rData.snsList[o].miscIdx;
											0 == a ? t.snsInfo.websiteUrl = s : 1 == a ? t.snsInfo.facebookUrl = s : 2 == a ? t.snsInfo.blogUrl = s : 3 == a ? t.snsInfo.instagramUrl = s : 4 == a && (t.snsInfo.twitterUrl = s)
										}
										t.setPartnerStatus(), t.confirm.fund = !0
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							save: function() {
								var t = this;
								this.request.snsList = [], this.request.snsList.push({
									snsType: 0,
									snsUrl: this.snsInfo.websiteUrl
								}), this.request.snsList.push({
									snsType: 1,
									snsUrl: this.snsInfo.facebookUrl
								}), this.request.snsList.push({
									snsType: 2,
									snsUrl: this.snsInfo.blogUrl
								}), this.request.snsList.push({
									snsType: 3,
									snsUrl: this.snsInfo.instagramUrl
								}), this.request.snsList.push({
									snsType: 4,
									snsUrl: this.snsInfo.twitterUrl
								}), this.request.cpCode = this.cpCode, $(".page-loader-more").fadeIn(""), axios.post("/set/reward/fund", this.request).then(function(e) {
									$(".page-loader-more").fadeOut(""), "0000" == e.data.rCode ? (noti.open("저장되었습니다."), t.$emit("check", !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							partnerApprovalRequest: function() {
								var t = this;
								$(".page-loader-more").fadeIn(""), axios.post("/set/save/community/project/approvalRequest", {
									cpCode: this.cpCode,
									communityIdx: this.request.communityIdx
								}).then(function(e) {
									$(".page-loader-more").fadeOut(""), "0000" == e.data.rCode ? (noti.open("파트너 승인 요청이 완료되었습니다."), t.getFundInfo()) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div id="list_wrap" class="common_support hidden-xs hidden-sm reward-make-main">\n\t\t\t\t<div class="common_sub_vi bg_gray">\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-md-3">\n\t\t\t\t\t\t\t\t<div class="common_vi_title webfont2" v-text="title"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-4 text-right">\n\t\t\t\t\t\t\t\t\x3c!-- <div class="mr20">\n\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="btn btn-link mr15 webfont2">미리보기</a>\n\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)" class="btn btn-link webfont2">저장 후 다음단계</a>\n\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-5">\n\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t\x3c!--a href="https://image-se.ycrowdy.com/file/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5_%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%8C%E1%85%AE%E1%86%AB%E1%84%87%E1%85%B5%E1%84%80%E1%85%AD%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5_ver7.pdf" class="btn btn-block btn-primary-outline">가이드북 다운로드</a--\x3e\n\t\t\t\t\t\t\t\t\t\t<a :href="none()" v-on:click="noDownload" class="btn btn-block btn-primary-outline">가이드북 다운로드</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t<button type="button" href="javascript:void(0)" class="btn btn-block btn-danger-outline" :disabled="changeStatus != 0" v-on:click="approveChecking">승인 요청하기</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="common_sub_layout">\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t\t<div class="col-line-lm">\n\t\t\t\t\t\t\t\t\t\x3c!-- <div class="user-media">\n\t\t\t\t\t\t\t\t\t\t<div class="media">\n\t\t\t\t\t\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="media-object" :src="\'//\' + userImage"  />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="media-body media-middle" v-html="userName"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t\t\t<div class="st-navi-device-wrap">\n\t\t\t\t\t\t\t\t\t\t<span>프로젝트 미리보기</span>\n\t\t\t\t\t\t\t\t\t\t<div class="st-navi-device">\n\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'A1522\')">모바일</a>\n\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'A1474\')">태블릿</a>\n\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'PC05\')">PC</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ul class="st-navi st-navi-p">\n\t\t\t\t\t\t\t\t\t\t<li class="active">\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)">프로젝트 만들기</a>\n\t\t\t\t\t\t\t\t\t\t\t<div class="list_link_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 1, \'vpass\' : confirm.step1}"><a href="javascript:void(0)" v-on:click="stepChange(1, true)">1. 기본정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 2, \'vpass\' : confirm.step2}"><a href="javascript:void(0)" v-on:click="stepChange(2, true)">2. 스토리</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 3, \'vpass\' : confirm.step3}"><a href="javascript:void(0)" v-on:click="stepChange(3, true)">3. 리워드</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 4, \'vpass\' : confirm.step4}"><a href="javascript:void(0)" v-on:click="stepChange(4, true)">4. 제작자/부가 정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div v-on:click="showNotion" style="cursor:pointer;">\n\t\t\t\t\t\t\t\t\t\t<img src="https://image-se.ycrowdy.com/crowdyCss/img/mypage_banner.png" style="width:180px; padding-right:10px;" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<template v-if="dataConfirm">\n\t\t\t\t\t\t\t\t<reward-basic :cp-code="cpCode" :cp-status="changeStatus" :end-status="endStatus" v-if="step == 1" v-on:set-url="setUrl" v-on:step-change="stepChange" v-on:check="check"></reward-basic>\n\t\t\t\t\t\t\t\t<story :cp-code="cpCode" :cp-status="changeStatus" :end-status="endStatus" v-if="step == 2"  v-on:step-change="stepChange" v-on:check="check"></story>\n\t\t\t\t\t\t\t\t<benefit :cp-code="cpCode" :cp-status="changeStatus" :end-status="endStatus" v-if="step == 3"  v-on:step-change="stepChange" v-on:check="check"></benefit>\n\t\t\t\t\t\t\t\t<fund :cp-code="cpCode" :cp-status="changeStatus" :end-status="endStatus" v-if="step == 4"  v-on:step-change="stepChange" v-on:check="check"></fund>\n\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div id="confirmMd" class="modal fade deliveryModal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">\n\t\t\t\t\t<div class="modal-dialog" role="document">\n\t\t\t\t\t\t<div class="modal-content">\n\t\t\t\t\t\t\t<div class="modal-header">\n                                <div class="headerTitle" style="width:70px;">승인 요청</div>\n\t\t\t\t\t\t\t\t<button type="button" class="close" aria-label="Close" class="xButton" data-dismiss="modal"></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t\t<div class="crowdy-confirm-title">확인해주세요!</div>\n\t\t\t\t\t\t\t\t<div class="mt20">\n\t\t\t\t\t\t\t\t\t<div class="row" v-for="item in txtArr">\n\t\t\t\t\t\t\t\t\t\t<div class="ml10 mr10">\n\t\t\t\t\t\t\t\t\t\t\t<div class="crowdy-confirm-checkbox">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="crowdy-check-container03">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.txt}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" name="confirmCheck" v-model="item.checked" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="mt30">\n\t\t\t\t\t\t\t\t\t<button id="confirmBtn" type="button" class="btn btn-block btn-primary" :class="{\'btn-disabled-gray\': (!txtArr[0].checked || !txtArr[1].checked || !txtArr[2].checked)}" v-on:click="approveConfirm">승인 요청</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode"],
						data: function() {
							return {
								dataConfirm: !1,
								step: 1,
								confirm: {
									step1: !1,
									step2: !1,
									step3: !1,
									step4: !1
								},
								titleName: {
									1: "기본정보",
									2: "스토리",
									3: "리워드",
									4: "제작자/부가 정보"
								},
								url: "",
								endStatus: "",
								recStatus: "",
								txtArr: [{
									checked: !1,
									txt: "크라우드펀딩 진행자가 사실과 다른 내용을 표시한 경우에는 형법상 사기에 해당할 수 있고, 표시광고법 위반에도 해당해 징역이나 벌금의 형벌에 처해지거나, 민사상 손해배상책임까지 지게 될 수 있습니다."
								}, {
									checked: !1,
									txt: "진행자가 제품에 대해 사실과 다르게 표시·광고하거나, 사실을 은폐하거나 축소하는 등의 방법으로 표시·광고한 경우에는 표시광고법위반에 해당해 형벌을 받게 될 수 있습니다."
								}, {
									checked: !1,
									txt: "또한 이로 인해 피해를 입은 참여자들에게 손해배상을 해야할 수도 있음을 확인했습니다."
								}]
							}
						},
						computed: {
							userName: function() {
								return userInfo.name + "<br /> 님의 프로젝트"
							},
							userImage: function() {
								return userInfo.image
							},
							title: function() {
								return this.titleName[this.step]
							},
							approveCheck: function() {
								return this.confirm.step1 && this.confirm.step2 && this.confirm.step3 && this.confirm.step4
							},
							projectUrl: function() {
								return "" != this.url && this.url ? encodeURI(this.url) : ""
							},
							changeStatus: function() {
								return "1" == this.recStatus || "2" == this.recStatus && "1" != this.endStatus ? 1 : "2" == this.recStatus && "1" == this.endStatus ? 2 : 0
							}
						},
						mounted: function() {
							$("#noti").on("hidden.bs.modal", function(t) {
								$("#confirmMd").css("z-index", "1050")
							})
						},
						components: {
							rewardBasic: n(22).default.component(),
							story: n(26).default.component(),
							benefit: n(23).default.component(),
							fund: n(24).default.component()
						},
						created: function() {
							this.check(!0)
						},
						methods: {
							stepChange: function(t, e) {
								e && (this.step = t), this.check(!1)
							},
							check: function(t) {
								var e = this;
								axios.post("/data/save/reward/info/confirm", {
									cpCode: this.cpCode,
									memCode: userInfo.memCode
								}).then(function(n) {
									var i = n.data.rData;
									if (!i.check) return void noti.open("잘못된 접근입니다.", function() {
										window.open("/", "_self")
									});
									t && (e.dataConfirm = !0), e.confirm.step1 = i.rewardBasic, e.confirm.step2 = i.story, e.confirm.step3 = i.benefit, e.confirm.step4 = i.fund, e.cpEndStatus = i.cpEndStatus, e.url = i.cpAliasUrl, e.endStatus = i.cpEndStatus, e.recStatus = i.cpRecStatus
								})
							},
							approveChecking: function() {
								var t = this;
								0 == this.changeStatus && ($(".page-loader-more").fadeIn(""), axios.post("/data/member/info", {
									memCode: userInfo.memCode
								}).then(function(e) {
									$(".page-loader-more").fadeOut("");
									var n = e.data;
									if ("0000" == n.rCode)
										if ("Y" == n.rData.memNameConfirm) {
											if (!t.approveCheck) {
												var i = 1;
												return i = t.confirm.step1 ? t.confirm.step2 ? t.confirm.step3 ? 4 : 3 : 2 : 1, noti.open("< " + t.titleName[i] + " > 단계의 정보를 입력하지 않으셨습니다. <br/> < " + t.titleName[i] + " > 단계의 모든 요소를 입력 후 다시 승인요청을 해주세요.", t.stepChange(i, !0)), !1
											}
											for (var o = 0; o < t.txtArr.length; o++) t.txtArr[o].checked = !1;
											$("#confirmMd").modal("show")
										} else noti.open("본인인증을 완료해야 승인요청 할 수 있습니다. 설정 페이지로 이동하시겠습니까?", function() {
											window.open("/mypage/main?menu=5&sub-menu=1", "_self")
										}, !0);
									else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								}))
							},
							approveConfirm: function() {
								for (var t = 0; t < this.txtArr.length; t++)
									if (!this.txtArr[t].checked) return $("#confirmMd").css("z-index", "1001"), void noti.open("모두 확인하셔야 승인 요청하실 수 있습니다.");
								$("#confirmMd").css("z-index", "1001"), noti.open("승인 요청하시겠습니까?", this.approve, !0)
							},
							approve: function() {
								$(".page-loader-more").fadeIn(""), axios.post("/data/save/reward/approval", {
									cpCode: this.cpCode
								}).then(function(t) {
									$(".page-loader-more").fadeOut(""), "0000" == t.data.rCode ? noti.open("승인요청이 완료되었습니다.", function() {
										window.open("/mypage/main?menu=2&sub-menu=1", "_self")
									}) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							pagePreview: function(t) {
								if ("" == this.projectUrl) return void noti.open("프로젝트 고유 주소를 먼저 저장해주세요.");
								window.open("http://troy.labs.daum.net/?url=" + this.projectUrl + "&device=" + t, "_blank")
							},
							setUrl: function(t) {
								this.url = "" != t && t ? encodeURI(window.location.origin + "/r/" + t) : ""
							},
							none: function() {},
							noDownload: function() {
								noti.open("준비중입니다.")
							},
							showNotion: function() {
								var t = navigator.userAgent.toLowerCase();
								"Netscape" == navigator.appName && -1 != navigator.userAgent.search("Trident") || -1 != t.indexOf("msie") ? noti.open("인터넷 익스플로러에서는 확인하실 수 없습니다.<br /><br />Chrome 또는 Microsoft Edge 등<br />다른 브라우저를 이용해주세요.") : window.open("https://www.notion.so/4147a649a3b649f381657928ac8470f6", "_blank")
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal" id="combinationForm" method="get" action="#">\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t                        <label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t                            <div class="text-left mb10">프로젝트 소개 영상과 이미지를 등록해주세요</div>\n\t\t\t                            <p class="form-control-static mb10 mt0">영상과 이미지를 함께 등록할 경우, 영상이 먼저 보여집니다.</p>\n\t\t\t                        </label>\n\t\t\t                        <div class="col-xs-12">\n\t\t\t                            <div class="row row-mobile-n">\n\t\t\t                                <label for="vod_gallery" class="col-xs-12 control-label">\n\t\t\t                                    <div class="text-left">동영상 주소를 적어주세요</div>\n\t\t\t                                </label>\n\t\t\t                                <div class="vod-holder input-append" v-for="(item, index) in request.cpVideos" :class="{\'mt10\' : index != 0}" :disabled="cpStatus == 1">\n\t\t\t                                    <div class="row row-mobile-n">\n\t\t\t                                        <div class="col-xs-10 col-sm-7">\n\t\t\t                                            <input type="text" class="form-control" v-model.trim="request.cpVideos[index]" placeholder="YouTube, Vimeo  URL을 입력해주세요" :disabled="endStatus != 0" />\n\t\t\t                                        </div>\n\t\t\t                                        <div class="col-xs-2 col-sm-1" style="display: -webkit-box;" v-if="endStatus == 0">\n\t\t\t                                            <span class="files-add vod-add" v-on:click="videoAdd" v-if="index + 1 == request.cpVideos.length" style="margin-right: 10px;">+</span>\n\t\t\t                                            <span class="files-add img-delete vod-delete" v-on:click="videoDelete(index)" v-if="request.cpVideos.length != 1">-</span>\n\t\t\t                                        </div>\n\t\t\t                                    </div>\n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="col-xs-12 mt25">\n\t\t\t                            <label for="eligible[]" class="control-label">\n\t\t\t                                <div class="text-left">이미지를 등록해주세요</div>\n\t\t\t                            </label>\n\t\t\t                            <div class="row">\n\t\t\t                                <div class="eligible-holder input-append dropify-wrapper-197 col-xs-6 col-sm-3 mt10" v-for="(item, index) in request.cpImage" v-if="request.cpImage[index].state" :disabled="cpStatus == 1">\n\t\t\t                                    <dropify-input class="dropify-gallery" :default-index="index" v-model="request.cpImage[index]" v-on:clear="imageDelete" :default-message="\'최적 사이즈 740×417px\'" :default-img="item.fileName" :disabled="endStatus != 0"></dropify-input>\n\t\t\t                                </div>\n\t\t\t                                <div class="col-xs-6 col-sm-3 dropify-wrapper-197 mt10" v-if="endStatus == 0">\n\t\t\t                                    <div class="dropify-wrapper dropify-wrapper-plus" v-on:click="imageAdd" :disabled="cpStatus == 1">+</div>\n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_story" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트 스토리를 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0"><a class="red-800">프로젝트를 시작하기 위해 필요한 내용이 없다면 승인이 되지 않습니다. 프로젝트 가이드북</a>을 읽어보시고 매력적인 스토리를 적어주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="">\n\t\t\t\t\t\t\t\t\t\t\t<div class="common-flex-between-center">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="mb15">\n\t\t\t\t\t\t\t\t\t\t\t\tEnter(↵) : 문단 나눔, Shift + Enter : 줄바꿈입니다!  <br />\n\t\t\t\t\t\t\t\t\t\t\t\t적절한 문단/줄 바꿈만으로 멋진 프로젝트를 완성 할 수 있습니다! <br />\n\t\t\t\t\t\t\t\t\t\t\t\t이미지와 영상은 꼭 버튼을 이용하여 첨부해주세요.\n\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://image-se.ycrowdy.com/file/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5_%E1%84%85%E1%85%B5%E1%84%8B%E1%85%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3_%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%80%E1%85%AD%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5_ver1.pdf" target="_blank" class="btnGuide1"></a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<story-area :id="\'editor0\'" v-if="dataConfirm" :value="request.cpStory" v-model="request.cpStory" :disabled="cpStatus == 1" :disabled="endStatus != 0"></story-area>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_story" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">환불 및 교환 정책을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">스토리 맨 아래에 노출됩니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="ps-wrap">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb15">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_policy" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">진행자의 환불 및 교환 정책<span class="red-800">(필수사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows="5" id="project_policy" class="form-control" title="" placeholder="크라우디 환불 및 교환 정책 외에 추가사항이 있으시면 적어주세요." v-model="request.cpRefundPolicy" :disabled="cpStatus != 0" :disabled="endStatus != 0"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb35">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_mobile1" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">문의 가능한 번호</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">번호 공개 여부를 선택해주세요.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control telbox" maxlength="200" placeholder="번호를 적어주세요 (예. 01012345678)" :value="request.cpRefundTell" v-model="request.cpRefundTell" :disabled="cpStatus == 1" :disabled="endStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="tel_open" class="checkbox-inline" style="position: relative;top:-3px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" name="tel_open" id="tel_open" :checked="request.cpRefundTellViewStatus == \'1\'" v-on:click="changeRefundTellViewStatus()" :disabled="cpStatus == 1" :disabled="endStatus != 0"/><span class="label"></span><span class="label-text">번호공개</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb35">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_email" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">문의 이메일</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">반드시 적어주세요.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="project_email" maxlength="200" title="" placeholder="info@ycrowdy.com" :value="request.cpInquiryEmail" v-model="request.cpInquiryEmail" :disabled="cpStatus == 1" :disabled="endStatus != 0"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="textarea-style">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>크라우디의 환불 및 교환정책 기본사항</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>1. 프로젝트 기간 중에는 자유롭게 <a href="/mypage/main?menu=1&sub-menu=1" target="_blank">마이 페이지</a>에서 펀딩 취소가 가능합니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>2. 펀딩을 받아야만 생산을 시작할 수 있는 크라우드 펀딩 특성상, 프로젝트 종료 이후에는 단순 변심으로 인한 교환이나 환불이 불가하니 이점 양해 부탁드립니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>3. 리워드 배송일이 예상보다 지연되는 경우, 새소식과 후원자 분들의 이메일을 통해 안내해드리겠습니다.<br />이에 관한 문의는 이메일 "<a :href="\'mailto:\' + request.cpInquiryEmail" target="_blank" class="project_email red-800">{{request.cpInquiryEmail}}</a>" <template v-if="request.cpRefundTellViewStatus == \'1\'"> , 연락처 "<a class="red-800" :href="\'tel:\' + request.cpRefundTell">{{request.cpRefundTell}}</a>" 로 연락바랍니다. </template>  <template v-if="request.cpRefundTellViewStatus == \'0\'"> 로 문의바랍니다.</template> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul class="con-icon blue-800 mb25">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>프로젝트 종료일 이후에 리워드와 관련된 환불 및 교환은 프로젝트 제작자가 약속하는 것에 따르며 크라우디는 이에 책임지지 않습니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3" v-if="endStatus == 0">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary-outline" v-on:click="save(false)">저장하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save(true)">다음단계</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus", "endStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								request: {
									cpCode: "",
									memCode: "",
									cpStory: "",
									cpRefundTell: "",
									cpRefundTellViewStatus: "1",
									cpInquiryEmail: "",
									cpRefundPolicy: "",
									cpVideos: [],
									cpImage: []
								}
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							storyArea: n(3).default.component()
						},
						created: function() {
							$(window).scrollTop(0);
							var t = this;
							axios.post("/data/save/reward/info/story", {
								cpCode: this.cpCode
							}).then(function(e) {
								var n = e.data;
								if ("0000" == n.rCode) {
									var i = t.request;
									i.cpStory = n.rData.cpStory, i.cpRefundTell = n.rData.cpRefundTell, i.cpInquiryEmail = n.rData.cpInquiryEmail, i.cpRefundTellViewStatus = n.rData.cpRefundTellViewStatus, i.cpRefundPolicy = n.rData.cpRefundPolicy, 0 == n.rData.cpImages.length ? i.cpImage.push(t.file) : _.forEach(n.rData.cpImages, function(t) {
										i.cpImage.push({
											fileName: t,
											fileData: "",
											state: !0
										})
									}), 0 == n.rData.cpVideos.length ? i.cpVideos.push("") : _.forEach(n.rData.cpVideos, function(t) {
										i.cpVideos.push(t)
									}), t.dataConfirm = !t.dataConfirm
								} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
							})
						},
						methods: {
							videoAdd: function() {
								1 != this.cpStatus && this.request.cpVideos.push("")
							},
							videoDelete: function(t) {
								1 != this.cpStatus && this.request.cpVideos.splice(t, 1)
							},
							imageAdd: function() {
								if (1 != this.cpStatus) {
									var t = _.last(this.request.cpImage);
									t.state && "" == t.fileName || this.request.cpImage.push(this.file)
								}
							},
							imageDelete: function(t) {
								if (1 != this.cpStatus) {
									this.request.cpImage[t].state = !1;
									0 == _.filter(this.request.cpImage, function(t) {
										return 1 == t.state
									}).length && this.request.cpImage.push(this.file)
								}
							},
							changeRefundTellViewStatus: function() {
								var t = this;
								"1" == t.request.cpRefundTellViewStatus ? (t.request.cpRefundTellViewStatus = "0", $("input.telbox").attr("disabled", !0)) : (t.request.cpRefundTellViewStatus = "1", $("input.telbox").attr("disabled", !1))
							},
							save: function(t) {
								var e = this;
								if (0 != this.endStatus) e.$emit("step-change", 3, !0);
								else {
									if (1 == this.cpStatus) return void noti.open("수정이 불가능한 상태입니다.");
									this.request.cpCode = this.cpCode, this.request.memCode = userInfo.memCode, this.request.cpImage = _.filter(this.request.cpImage, function(t) {
										return 1 == t.state && "" != t.fileName
									}), this.request.cpVideos = _.filter(this.request.cpVideos, function(t) {
										return "" != t
									}), this.request.cpStory = userInfo.removeStyleAttr(this.request.cpStory), $(".page-loader-more").fadeIn(""), axios.post("/set/reward/story", this.request).then(function(n) {
										$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (0 == e.request.cpImage.length && e.request.cpImage.push(e.file), 0 == e.request.cpVideos.length && e.request.cpVideos.push(""), 1 == t ? e.$emit("step-change", 3, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 3, !1))) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
									})
								}
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal" id="projectForm" method="get" action="#">\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_type1" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트의 성공 조건을 정해주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none mt3">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="project_type">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_type1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="project_type" id="project_type1" value="1" v-model="request.cpFundType" disabled/><span class="webfont">100% 이상</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_type2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="project_type" id="project_type2" value="2" v-model="request.cpFundType" disabled/><span class="webfont">조건 없음</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_subject" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트의 제목을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">간결하고 프로젝트의 핵심 내용을 담을 수 있는 제목을 정해주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-8">\n\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="project_subject" maxlength="40" v-model.trim="request.cpTitle" :disabled="cpStatus != 0"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-2">\n\t\t\t\t\t\t\t\t\t\t<span class="textarea_text_leng webfont2 mt10"><span id="charNum" v-text="request.cpTitle.length"></span> / 40</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_price" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">목표 금액을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0"><a class="red-800">최소 100,000원 이상</a>이어야 합니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-8" v-if="dataConfirm">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<vue-numeric  :disabled="cpStatus != 0" class="form-control" separator="," currency="" v-model="request.cpTargetAmount" data-vv-name="cpTargetAmount" v-validate="\'target_amount\'" :class="{\'error\' : errors.has(\'cpTargetAmount\')}"></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t<label class="error" v-if="errors.has(\'cpTargetAmount\')" v-text="errors.first(\'cpTargetAmount\')"></label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-2">\n\t\t\t\t\t\t\t\t\t\t<div class="textarea_text_leng mt10">원</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-10">\n\t\t\t\t\t\t\t\t\t\t<div class="fees_info">\n\t\t\t\t\t\t\t\t\t\t\t<div class="fees_info_frame">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t펀딩 결제 수수료(카드 수수료 + 계좌이체 수수료)\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id="pg_fees">0</span>원\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t크라우디 플랫폼 이용 수수료\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id="platform_fees">0</span>원\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t프로젝트를 성공했을 경우 예상 정산 금액\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4 text-right text-big">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span id="totalSum" class="red-800">0</span>원\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>1. 위 금액은 예상이므로, 실제 정산 금액은 조금 다를 수 있습니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>2. 목표금액을 초과달성하여도 수수료는 동일한 비율로 적용됩니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t3. 수수료의 비율은 다음과 같습니다.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li> - 크라우디 플랫폼 이용 수수료 (결제승인금액의 5% + 부가가치세 10%)</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li> - PG 수수료 (카드결제승인금액의 1.7-2% + 부가가치세 10%)</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_start" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트의 진행 기간을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 col-sm-6">\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" max="60" v-model.trim="cpDateTerm" placeholder="" v-if="dataConfirm" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2 col-sm-2">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="textarea_text_leng mt10">일 남음</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="cpEndDate" :date="cpEndDate" v-if="dataConfirm" :max="maxDate" :min="minDate" disabled></date-picker>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t                        <label for="project_weburl" class="col-xs-12 control-label control-label-big">\n\t\t\t                            <div class="text-left">프로젝트의 고유 주소를 적어주세요</div>\n\t\t\t                            <p class="form-control-static mb10 mt0">프로젝트와 관련된 키워드를 짧은 영어로 적어주세요. 특수문자와 띄어쓰기는 불가능합니다.</p>\n\t\t\t                        </label>\n\t\t\t                        <div class="col-xs-4 col-sm-3">\n\t\t\t                            <p class="form-control-static">https://www.ycrowdy.com/sr/</p>\n\t\t\t                        </div>\n\n\t\t\t                        <div class="col-xs-8 col-sm-3">\n\t\t\t                            <url-input :url="url" v-model="url" class="form-control" :class="{\'error\' : !urlConfirm}" maxlength="30" placeholder="프로젝트 명" :disabled="cpStatus != 0"></url-input>\n\t\t\t                        </div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12" v-if="!urlConfirm">\n\t\t\t\t\t\t\t\t\t\t<label style="margin-left:15px;" class="error" v-text="\'이미 같은 주소가 있습니다. 새로운 주소를 입력해주세요\'"></label>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_img" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트 대표 이미지를 등록해주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">홈페이지와 외부 공유를 했을 때 보여집니다. 프로젝트를 한 눈에 나타낼 수 있는 이미지를 등록해주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 dropify-wrapper-340">\n\t\t\t\t\t\t\t\t\t\t<dropify-input v-if="dataConfirm" v-model="request.cpCardFile" default-message="최적 사이즈 740*492px" :default-img="request.cpCardImg" :disabled="cpStatus == 1"></dropify-input>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t<label for="project_top_img" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트 키워드를 적어주세요<span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">제목 외에도 키워드 검색 시 검색 결과에 프로젝트가 나타납니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<input type="text" data-limit="5" v-model.trim="keyWords" id="keyword" placeholder="최대 5개까지 등록 가능합니다. 키워드 입력 후 엔터를 눌러주세요" :disabled="cpStatus == 1"/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-block btn-primary-outline" v-on:click="save">저장하기</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save(true)">다음단계</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								now: moment().format("YYYY-MM-DD"),
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								request: {
									cpTitle: "",
									cpFundType: 1,
									cpAliasUrl: "",
									cpTargetAmount: 0,
									cpEndDate: moment(this.now).add(14, "days").format("YYYY-MM-DD"),
									cpCardFile: {},
									cpCardImg: "",
									cpKeyWord: "",
									cpKeyWords: []
								},
								keyWords: [],
								cpStartDate: this.now,
								cpEndDate: moment(this.now).add(14, "days").format("YYYY-MM-DD"),
								cpDateTerm: 1,
								minDate: moment(this.now).add(7, "days").format("YYYY-MM-DD"),
								maxDate: moment(this.now).add(60, "days").format("YYYY-MM-DD"),
								urlConfirm: !0
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							vueNumeric: VueNumeric.default,
							datePicker: n(2).default.component(),
							urlInput: n(4).default.component()
						},
						created: function() {
							$(window).scrollTop(0);
							var t = this;
							axios.post("/data/save/reward/info/basic", {
								cpCode: this.cpCode
							}).then(function(e) {
								var n = e.data;
								if ("0000" == n.rCode) {
									var i = t.request;
									"N" == n.rData.simulationConfirm && noti.open("잘못된 URL입니다.", function() {
										window.open("/", "_self")
									}), i.cpTitle = n.rData.cpTitle, i.cpFundType = n.rData.cpFundType, i.cpAliasUrl = n.rData.cpAliasUrl, i.cpTargetAmount = n.rData.cpTargetAmount, t.cpEndDate = n.rData.cpEndDate, t.cpDateTerm = moment(t.cpEndDate).diff(t.cpStartDate, "days") + 1, i.cpCardImg = n.rData.cpCardImg, t.keyWords = n.rData.cpKeyWord, t.dataConfirm = !t.dataConfirm, t.$nextTick(function() {
										$(".option_group .radio-inline input").checkboxradio(), $(".project_type").controlgroup(), $("#keyword").on("tokenfield:createtoken", function(e) {
											t.request.cpKeyWords.push(e.attrs.value)
										}).on("tokenfield:removedtoken", function(e) {
											t.request.cpKeyWords = _.without(t.request.cpKeyWords, e.attrs.value)
										}).tokenfield()
									})
								} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
							})
						},
						watch: {
							cpEndDate: function(t) {
								var e = moment(t).diff(this.cpStartDate, "days");
								this.cpDateTerm = e + 1
							}
						},
						computed: {
							url: {
								get: function() {
									return this.request.cpAliasUrl
								},
								set: function(t) {
									if ("" != t) {
										var e = this;
										axios.post("/data/reward/url", {
											url: t
										}).then(function(t) {
											e.urlConfirm = t.data
										})
									}
									this.request.cpAliasUrl = t
								}
							}
						},
						methods: {
							save: function(t) {
								var e = this;
								if (this.request.cpEndDate = this.cpEndDate, this.request.cpCode = this.cpCode, !this.urlConfirm) return noti.open("이미 같은 주소가 있습니다. 새로운 주소를 입력해주세요"), !1;
								this.request.cpKeyWord = _.uniq(_.compact(this.request.cpKeyWords)).join(), this.$validator.validateAll().then(function(n) {
									n && ($(".page-loader-more").fadeIn(""), axios.post("/set/reward/basic", e.request).then(function(n) {
										$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (e.$emit("set-url", e.request.cpAliasUrl), 1 == t ? e.$emit("step-change", 2, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 2, !1))) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
									}))
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal" id="combinationForm" method="get" action="#">\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t프로젝트 리워드를 구성해주세요 \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">프로젝트 시작을 위해서는 <a class="red-800">최소 1개 이상의 리워드가 있어야 합니다.</a> 배송이 필요한 리워드는 배송비가 포함된 가격을 적어주세요.</p>\n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="ps-wrap mb80">\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_price" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">리워드 금액</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t<vue-numeric class="form-control" separator="," maxlength="9" currency="" v-model="request.cpBenefitAmount" placeholder="1,000원 이상 입력해주세요."></vue-numeric>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2">원</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_ea" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">리워드 제공 <br />가능 수</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none mt3">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="qty_radio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="qty_radio1" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="qty_radio" id="qty_radio1" value="N" v-model="request.cpBenefitQtyLimit" disabled/><span class="webfont">무제한</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="qty_radio2" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="qty_radio" id="qty_radio2" value="Y" v-model="request.cpBenefitQtyLimit" disabled/><span class="webfont">제한</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitQtyLimit == \'Y\'">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="tel" class="form-control" v-model="request.cpBenefitQty" maxlength="100" placeholder="제공 가능 수량" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-1">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2">개</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_name" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">리워드 제목</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control " maxlength="30" v-model="request.cpBenefitTitle" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2"><span id="charNum1" v-text="request.cpBenefitTitle.length"></span> / 30</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_contents" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">리워드 내용</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t<textarea rows="5" id="rewards_contents" class="form-control" v-model="request.cpBenefitInfo" maxlength="70" placeholder="준비된 리워드와 설명을 적어주세요"></textarea>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2"><span id="charNum2" v-text="request.cpBenefitInfo.length"></span> / 70</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_date" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">예상 배송일</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-3">\n\t\t\t\t\t\t\t\t\t\t\t<date-picker v-model="request.cpBenefitDeliveryDate" :date="request.cpBenefitDeliveryDate" disabled></date-picker>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb30">\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">리워드 옵션</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-9">\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 옵션이 없을때 기본 버튼 --\x3e\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitOptions.length == 0">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary-outline" v-on:click="addOption" :disabled="cpStatus == 1">리워드 옵션 추가하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 옵션선택 Loop --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="option_group" v-for="(item, index) in request.cpBenefitOptions" :disabled="cpStatus == 1">--\x3e\n\t\t\t\t\t\t\t\t\t\t\t<div v-for="(item, index) in request.cpBenefitOptions" :disabled="cpStatus == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--<h6 class="small-hb grey-600 mb10">옵션선택 {{index + 1}}</h6>--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div class="row row-mobile-n option_select">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6" :class="\'option_radio_\' + index">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label :for="\'option_radio_\' + index + \'_1\'" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" :name="\'option_radio_\' + index" :id="\'option_radio_\' + index + \'_1\'" value="1" v-model="item.cpBenefitOptionType"/><span class="webfont">선택형</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label :for="\'option_radio_\' + index + \'_2\'" class="radio-inline">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" :name="\'option_radio_\' + index" :id="\'option_radio_\' + index + \'_2\'" value="2" v-model="item.cpBenefitOptionType"/><span class="webfont">단답형</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_plus blue-800" v-if="index == request.cpBenefitOptions.length - 1" v-on:click="addOption">추가하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteOption(index)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> --\x3e \n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 선택형 --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- <div id="option1_contents_radio1" class="row row-mobile-n otab1_contents mt10" v-if="item.cpBenefitOptionType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control " v-model="item.cpBenefitOptionTitle" maxlength="30" placeholder="ex) 옷의 사이즈를 적어주세요" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<keyword v-model.trim="item.cpBenefitOption" :value="item.cpBenefitOption"></keyword>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- //선택형 --\x3e\n\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- 단답형 --\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<div id="option1_contents_radio2" class="row row-mobile-n otab1_contents mt10"  v-if="item.cpBenefitOptionType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control " v-model="item.cpBenefitOptionTitle" maxlength="20" placeholder="ex) 옷의 사이즈를 적어주세요" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt10 textarea_text_leng webfont2"><span id="charNum3" v-text="item.cpBenefitOptionTitle.length"></span> / 20</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!-- //단답형 --\x3e\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n option_select">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="mt5">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteOption(index)">삭제하기</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\x3c!-- //옵션선택 Loop --\x3e\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb25">\n\t\t\t\t\t\t\t\t\t\t<label for="rewards_date" class="col-xs-2 control-label">\n\t\t\t\t\t\t\t\t\t\t\t<div class="text-left">배송지 필요여부</div>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t<div class="option_group option_group_none mt3">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="delivery_radio">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="delivery_radio1" class="radio-inline" style="z-index: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="delivery_radio" id="delivery_radio1" value="Y" v-model="request.cpBenefitDeliveryConfirm" disabled/><span class="webfont">배송지 필요</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="delivery_radio2" class="radio-inline" style="z-index: 0;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" name="delivery_radio" id="delivery_radio2" value="N" v-model="request.cpBenefitDeliveryConfirm" disabled/><span class="webfont">배송지 필요없음</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<hr />\n\n\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n pt15 mb30">\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4"></div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="insertBenefit()">\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode == \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t등록\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode != \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t수정\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-2">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary-outline" v-on:click="resetBenefit()">\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode == \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t초기화\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="request.cpBenefitCode != \'\'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t취소\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="col-xs-4"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<div class="col-xs-2 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t등록된 리워드<br />미리보기 \x3c!--a class="form-tip webuiPopover" href="javascript:void(0);" data-plugin="webuiPopover" data-content="운영하고 계신 웹사이트 또는 SNS가 있으시다면 등록 해주세요. 프로젝트 상세보기 페이지의 &lt;br / &gt;제작자 정보 ‘자세히 보기’에서 아이콘 클릭을 통해 해당 웹사이트로 바로 이동할 수 있게 됩니다. &lt;br / &gt;링크 등록을 통해 크라우드펀딩을 진행하는 제품/서비스 외에 제작자(팀)의 활동을 알려보세요." data-animation="pop"><i class="fa fa-question" aria-hidden="true"></i></a--\x3e\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-10">\n\t\t\t\t\t\t\t\t\t\t<div id="st-items-wrap" class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0" v-if="!dataConfirm"> 리워드가 없습니다. 리워드를 추가해주세요.</p>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12" v-for="(item, index) in benefitList" v-if="dataConfirm && (index % 2 == 0)">\n                                                    <div class="st-items st-items-loop">\n                                                        <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                        <div class="row not-space">\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <div class="st-items-su">\n                                                                    <strong><span class="webfont2" v-text="item.cpBenefitAmount"></span>원 펀딩</strong>\n                                                                </div>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                               <div class="st-items-btn">\n\t                                                                <template v-if="item.cpBenefitQty < 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">{{item.cpBenefitRemQty}}개 남음</span>\n\t                                                                </template>\n\t                                                                <template v-if="item.cpBenefitQty >= 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">무제한</span>\n\t                                                                </template>\n                                                                    <span class="btn btn-sm btn-danger-outline">{{item.cpBenefitSpsQty}}개 펀딩</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <dl>\n                                                                    <dt>리워드명</dt>\n                                                                    <dd><strong v-text="item.cpBenefitTitle"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <p v-html="item.cpBenefitInfo"></p>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <dl>\n                                                                    <dt>예상 배송일</dt>\n                                                                    <dd><strong v-text="item.cpBenefitDeliveryDate"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                        </div>\n                                                        \x3c!-- 옵션 --\x3e\n                                                        <div class="st-items-option">\n                                                            <dl v-for="(option, optionIndex) in item.cpBenefitOptions" v-if="dataConfirm">\n                                                                <dt>{{option.cpBenefitOptionTitle}}</dt>\n                                                                <dd>\n                                                                \t<template v-if="option.cpBenefitOptionType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{option.cpBenefitOption}} 중 택 1</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="option.cpBenefitOptionType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" value="직접 입력하세요" class="form-control" maxlength="50" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n                                                                </dd>\n                                                            </dl>\n                                                        </div>\n                                                        \x3c!-- //옵션 --\x3e\n\n                                                        <div class="st-items-option-control">\n                                                        \t<a v-if="item.cpBenefitStatus == 1 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'2\')">리워드 중단</a>\n                                                        \t<a v-if="item.cpBenefitStatus == 2 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'1\')">리워드 제공</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="updateBenefit(index)">수정</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteBenefitCheck(item)">삭제</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n                                                    </div>\n                                            \t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12" v-for="(item, index) in benefitList" v-if="dataConfirm && (index % 2 == 1)">\n                                                    <div class="st-items st-items-loop">\n                                                        <a href="javascript:void(0)" class="st-link">바로가기</a>\n                                                        <div class="row not-space">\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <div class="st-items-su">\n                                                                    <strong><span class="webfont2" v-text="item.cpBenefitAmount"></span>원 펀딩</strong>\n                                                                </div>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12 xs-text-right">\n                                                                <div class="st-items-btn">\n\t                                                                <template v-if="item.cpBenefitQty < 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">{{item.cpBenefitRemQty}}개 남음</span>\n\t                                                                </template>\n\t                                                                <template v-if="item.cpBenefitQty >= 999999">\n\t                                                                \t<span class="btn btn-sm btn-danger">무제한</span>\n\t                                                                </template>\n                                                                    <span class="btn btn-sm btn-danger-outline">{{item.cpBenefitSpsQty}}개 펀딩</span>\n                                                                </div>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <dl>\n                                                                    <dt>리워드명</dt>\n                                                                    <dd><strong v-text="item.cpBenefitTitle"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                            <div class="col-xs-12">\n                                                                <p v-html="item.cpBenefitInfo"></p>\n                                                            </div>\n                                                            <div class="col-xs-6 col-sm-12">\n                                                                <dl>\n                                                                    <dt>예상 배송일</dt>\n                                                                    <dd><strong v-text="item.cpBenefitDeliveryDate"></strong></dd>\n                                                                </dl>\n                                                            </div>\n                                                        </div>\n                                                        \x3c!-- 옵션 --\x3e\n                                                        <div class="st-items-option">\n                                                            <dl v-for="(option, optionIndex) in item.cpBenefitOptions" v-if="dataConfirm">\n                                                                <dt>{{option.cpBenefitOptionTitle}}</dt>\n                                                                <dd>\n                                                                \t<template v-if="option.cpBenefitOptionType == 1">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>{{option.cpBenefitOption}} 중 택 1</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template v-if="option.cpBenefitOptionType == 2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" value="직접 입력하세요" class="form-control" maxlength="50" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n                                                                </dd>\n                                                            </dl>\n                                                        </div>\n                                                        \x3c!-- //옵션 --\x3e\n\n                                                        <div class="st-items-option-control">\n                                                        \t<a v-if="item.cpBenefitStatus == 1 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'2\')">리워드 중단</a>\n                                                        \t<a v-if="item.cpBenefitStatus == 2 && cpStatus != 1" href="javascript:void(0);" class="btn_none_icon btn_stop blue-800" v-on:click="changeBenefitStatus(item, \'1\')">리워드 제공</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_modify red-800" v-on:click="updateBenefit(index)">수정</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a v-if="cpStatus != 1 && item.cpBenefitSpsQty == 0" href="javascript:void(0);" class="btn_none_icon btn_delete red-800" v-on:click="deleteBenefitCheck(item)">삭제</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n                                                    </div>\n                                            \t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save(true)">다음단계</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus"],
						data: function() {
							return {
								request: {
									cpCode: this.cpCode,
									memCode: userInfo.memCode,
									cpBenefitCode: "",
									cpBenefitTitle: "",
									cpBenefitAmount: 0,
									cpBenefitInfo: "",
									cpBenefitQty: 0,
									cpBenefitRemQty: 0,
									cpBenefitDeliveryDate: moment().format("YYYY-MM-DD"),
									cpBenefitDeliveryConfirm: "Y",
									cpBenefitStatus: 1,
									cpBenefitSpsQty: 0,
									cpBenefitOptions: [],
									cpBenefitQtyLimit: "N"
								},
								benefitList: [],
								selectedBenefit: {}
							}
						},
						computed: {
							dataConfirm: function() {
								return this.benefitList.length > 0
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							datePicker: n(2).default.component(),
							vueNumeric: VueNumeric.default
						},
						created: function() {
							$(window).scrollTop(0), this.getBenefitList()
						},
						methods: {
							getBenefitList: function(t) {
								var e = this;
								axios.post("/data/save/reward/info/benefit", {
									cpCode: this.cpCode
								}).then(function(n) {
									var i = n.data;
									"0000" == i.rCode ? (e.resetBenefit(), e.benefitList = i.rData, e.setRadio(t)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							setRadio: function(t) {
								var e = this;
								"refresh" == t ? e.$nextTick(function() {
									$(".option_group .radio-inline input").checkboxradio(t), $(".delivery_radio, .qty_radio").controlgroup(t)
								}) : e.$nextTick(function() {
									$(".option_group .radio-inline input").checkboxradio(), $(".delivery_radio, .qty_radio").controlgroup()
								})
							},
							addOption: function() {
								var t = this,
									e = {
										cpBenefitOptionType: 2,
										cpBenefitOption: [],
										cpBenefitOptionTitle: "",
										cpBenefitCode: ""
									};
								t.request.cpBenefitOptions.push(e)
							},
							deleteOption: function(t) {
								this.request.cpBenefitOptions.splice(t, 1)
							},
							insertBenefit: function() {
								for (var t = this, e = 0; e < t.request.cpBenefitOptions.length; e++) {
									var n = _.uniq(t.request.cpBenefitOptions[e].cpBenefitOption).join();
									t.request.cpBenefitOptions[e].cpBenefitOption = n, t.request.cpBenefitOptions[e].cpBenefitCode = t.request.cpBenefitCode
								}
								if (t.request.memCode = userInfo.memCode, "N" == t.request.cpBenefitQtyLimit) t.request.cpBenefitRemQty = 999999, t.request.cpBenefitQty = 999999;
								else {
									var i = t.request.cpBenefitQty;
									t.request.cpBenefitRemQty = i
								}
								return t.request.cpBenefitAmount < 1e3 ? void noti.open("리워드 금액은 1000원 이상 입력해야합니다.") : "Y" == t.request.cpBenefitQtyLimit && t.request.cpBenefitQty < 1 ? void noti.open("리워드 제공가능 수는 0개 이상이어야 합니다.") : "" == t.request.cpBenefitTitle ? void noti.open("리워드 제목을 입력해주세요.") : "" == t.request.cpBenefitInfo ? void noti.open("리워드 내용을 입력해주세요.") : void axios.post("/data/save/reward/benefit/set", this.request).then(function(e) {
									"0000" == e.data.rCode ? (noti.open("등록/저장되었습니다."), t.getBenefitList("refresh"), t.$emit("check", !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							deleteBenefitCheck: function(t) {
								var e = this;
								this.selectedBenefit = t, noti.open("정말 리워드를 삭제 하시겠습니까?", e.deleteBenefit, !0)
							},
							deleteBenefit: function() {
								var t = this;
								axios.post("/data/save/reward/benefit/delete", {
									cpCode: this.cpCode,
									cpBenefitCode: this.selectedBenefit.cpBenefitCode
								}).then(function(e) {
									"0000" == e.data.rCode ? (t.getBenefitList("refresh"), t.$emit("check", !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							changeBenefitStatus: function(t, e) {
								var n = this;
								axios.post("/data/save/reward/benefit/status", {
									cpCode: this.cpCode,
									cpBenefitCode: t.cpBenefitCode,
									cpBenefitStatus: e
								}).then(function(t) {
									"0000" == t.data.rCode ? ("2" == e ? noti.open("리워드의 제공이 중단되었습니다.") : noti.open("리워드가 다시 제공됩니다."), n.getBenefitList()) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							updateBenefit: function(t) {
								var e = this;
								e.resetBenefit(), e.request.cpCode = this.cpCode, e.request.memCode = userInfo.memCode, e.request.cpBenefitCode = e.benefitList[t].cpBenefitCode, e.request.cpBenefitTitle = e.benefitList[t].cpBenefitTitle, e.request.cpBenefitAmount = e.benefitList[t].cpBenefitAmount, e.request.cpBenefitInfo = e.benefitList[t].cpBenefitInfo, e.request.cpBenefitQty = e.benefitList[t].cpBenefitQty, e.request.cpBenefitRemQty = e.benefitList[t].cpBenefitRemQty, e.request.cpBenefitDeliveryDate = e.benefitList[t].cpBenefitDeliveryDate, e.request.cpBenefitDeliveryConfirm = e.benefitList[t].cpBenefitDeliveryConfirm, e.request.cpBenefitStatus = e.benefitList[t].cpBenefitStatus, e.request.cpBenefitSpsQty = e.benefitList[t].cpBenefitSpsQty, e.request.cpBenefitQty < 999999 ? e.request.cpBenefitQtyLimit = "Y" : e.request.cpBenefitQtyLimit = "N", e.request.cpBenefitOptions = [];
								for (var n = e.benefitList[t].cpBenefitOptions, i = 0; i < n.length; i++) {
									var o = n[i].cpBenefitOption.split(","),
										a = {
											cpBenefitOptionType: n[i].cpBenefitOptionType,
											cpBenefitOptionTitle: n[i].cpBenefitOptionTitle,
											cpBenefitCode: n[i].cpBenefitCode,
											cpBenefitOption: []
										};
									e.request.cpBenefitOptions.push(a);
									for (var s = 0; s < o.length; s++) e.request.cpBenefitOptions[i].cpBenefitOption.push(o[s])
								}
								e.setRadio("refresh")
							},
							resetBenefit: function() {
								this.request = {
									memCode: userInfo.memCode,
									cpCode: this.cpCode,
									cpBenefitCode: "",
									cpBenefitTitle: "",
									cpBenefitAmount: 0,
									cpBenefitInfo: "",
									cpBenefitQty: 0,
									cpBenefitRemQty: 0,
									cpBenefitDeliveryDate: moment().format("YYYY-MM-DD"),
									cpBenefitDeliveryConfirm: "Y",
									cpBenefitStatus: 1,
									cpBenefitSpsQty: 0,
									cpBenefitOptions: [],
									cpBenefitQtyLimit: "N"
								}, this.selectedBenefit = {}
							},
							save: function(t) {
								var e = this;
								1 == t && e.$emit("step-change", 4, !0)
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line reward-make-fund">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal">\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">계좌 정보를 입력해주세요 </div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="account_bank" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">거래 은행을 선택해주세요 </div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<bank-select v-if="dataConfirm" :options="bankCodeOptions" v-model="request.cpFundBankCode" disabled></bank-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="account_num" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">계좌번호를 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="tel" v-if="dataConfirm" class="form-control" v-model="request.cpFundBankAccountNo" maxlength="20" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="account_name" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">예금주명을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" v-if="dataConfirm" class="form-control" id="account_name" maxlength="10" v-model="request.cpFundBankAccountName" placeholder="계좌에 등록된 예금주명과 일치해야 합니다." disabled/>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t<label for="bankbook_img" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">통장 사본 이미지를 올려주세요</div>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file dropify-wrapper-340">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<dropify-input v-if="dataConfirm" v-model="request.cpFundBankAccountFile" :default-img="request.cpFundBankAccountImg" disabled></dropify-input>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">세금계산서 정보를 입력해주세요<span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div role="tabpanel" class="tab-pane active" id="tex_tab1">\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="tex1_company_email" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">전자 세금 계산서 이메일을 적어주세요 </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="email" v-if="dataConfirm" class="form-control" maxlength="40" v-model="request.cpFundTaxEmail" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb20">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="tex1_company_img" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">사업자등록증 사본 이미지를 올려주세요 </div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="input-group input-group-file dropify-wrapper-340">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<dropify-input v-if="dataConfirm" v-model="request.cpBizFile" :default-img="request.cpBizImg"  disabled></dropify-input>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="partner_facebook" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t홈페이지와 SNS 주소를 적어주세요<span class="red-800">(선택사항)</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">현재 운영 중인 곳의 주소를 적어주세요. 진행자 정보에 노출됩니다. </p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-7 sns-group" v-if="dataConfirm" >\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_website" class="icon_sns icon_website pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_website" v-model="snsInfo.websiteUrl" placeholder="웹사이트 URL을 입력해주세요" :disabled="cpStatus == 1"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_facebook" class="icon_sns icon_facebook pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_facebook" v-model="snsInfo.facebookUrl" placeholder="페이스북 페이지 주소를 입력해주세요" :disabled="cpStatus == 1"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_instagram" class="icon_sns icon_instagram pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_instagram" v-model="snsInfo.instagramUrl" placeholder="인스타그램 URL을 입력해주세요" :disabled="cpStatus == 1"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_blog" class="icon_sns icon_blog pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_blog" v-model="snsInfo.blogUrl" placeholder="블로그 URL을 입력해주세요." :disabled="cpStatus == 1"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\n\t\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t\t<dt><label for="partner_twitter" class="icon_sns icon_twitter pointer"></label></dt>\n\t\t\t\t\t\t\t\t\t\t\t<dd><input type="text" class="form-control" id="partner_twitter" v-model="snsInfo.twitterUrl" placeholder="트위터 URL을 입력해주세요" :disabled="cpStatus == 1"/></dd>\n\t\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="mc_partner" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">\n\t\t\t\t\t\t\t\t\t\t\t커뮤니티 파트너를 선택해주세요\n\t\t\t\t\t\t\t\t\t\t\t<span class="red-800">(선택사항) 프로젝트가 시작해야 선택할 수 있습니다. </span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다. </p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-7">\n\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-7">\n\t\t\t\t\t\t\t\t\t\t\t\t<community-select v-if="dataConfirm" :options="communityList" v-model="request.communityIdx" disabled/></community-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="red-800" v-if="partnerStatus == 2"> 승인 대기 중입니다. </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="red-800" v-if="partnerStatus == 1"> 승인 완료되었습니다. </span>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" v-if="partnerStatus == 3" class="btn btn-block btn-primary-outline" :disabled="cpStatus != 2" v-on:click="partnerApprovalRequest">{{ partnerName }}</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save">저장하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus", "endStatus"],
						data: function() {
							return {
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								request: {
									cpCode: "",
									memCode: userInfo.memCode,
									cpFundBankCode: "02",
									cpFundBankAccountNo: "",
									cpFundBankAccountName: "",
									cpFundBankAccountImg: "",
									cpFundBankAccountFile: {},
									cpBizImg: "",
									cpBizFile: {},
									cpFundTaxEmail: userInfo.email,
									communityApproveStatus: "",
									communityIdx: "",
									communityReturnReason: "",
									snsList: []
								},
								bankCodeOptions: [],
								communityList: [],
								confirm: {
									bank: !1,
									community: !1,
									fund: !1
								},
								snsInfo: {
									websiteUrl: "",
									facebookUrl: "",
									blogUrl: "",
									instagramUrl: "",
									twitterUrl: ""
								},
								partnerStatus: 3
							}
						},
						computed: {
							dataConfirm: function() {
								return this.confirm.bank && this.confirm.fund && this.confirm.community
							},
							partnerName: function() {
								return 2 == this.request.communityApproveStatus && 1 == this.endStatus ? "파트너 재승인 요청" : "파트너 승인 요청"
							}
						},
						components: {
							bankSelect: n(1).default.component(),
							dropifyInput: n(0).default.component(),
							communitySelect: n(1).default.component()
						},
						created: function() {
							$(window).scrollTop(0), this.getBankCodeList(), 0 != this.cpStatus ? this.getCommunityList() : this.confirm.community = !0, this.getFundInfo()
						},
						methods: {
							setPartnerStatus: function() {
								1 == this.request.communityApproveStatus ? this.partnerStatus = 1 : this.request.communityIdx > 0 && 0 == this.request.communityApproveStatus ? this.partnerStatus = 2 : this.partnerStatus = 3
							},
							getBankCodeList: function() {
								var t = this;
								axios.post("/data/crowdy/code/reward", {
									gcode: "CFND_BANK_CODE"
								}).then(function(e) {
									var n = e.data;
									if ("0000" == n.rCode) {
										for (var i = 0; i < n.rData.length; i++) {
											var o = {
												id: n.rData[i].commonCode,
												text: n.rData[i].commonInfo
											};
											t.bankCodeOptions.push(o)
										}
										t.confirm.bank = !0
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							getCommunityList: function() {
								var t = this;
								axios.post("/data/save/reward/info/community", {
									cpCode: this.cpCode
								}).then(function(e) {
									var n = e.data;
									if ("0000" == n.rCode) {
										for (var i = 0; i < n.rData.length; i++) {
											var o = {
												id: n.rData[i].communityIdx,
												text: n.rData[i].communityName
											};
											t.communityList.push(o), t.setPartnerStatus()
										}
										t.confirm.community = !0
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							getFundInfo: function() {
								var t = this;
								axios.post("/data/save/reward/info/fund", {
									cpCode: this.cpCode
								}).then(function(e) {
									var n = e.data;
									if ("0000" == n.rCode) {
										var i = t.request;
										"" == n.rData.cpFundBankCode || null == n.rData.cpFundBankCode ? i.cpFundBankCode = "02" : i.cpFundBankCode = n.rData.cpFundBankCode, i.cpFundBankAccountNo = n.rData.cpFundBankAccountNo, i.cpFundBankAccountName = n.rData.cpFundBankAccountName, i.cpFundBankAccountImg = n.rData.cpFundBankAccountImg, i.cpBizImg = n.rData.cpBizImg, i.cpFundTaxEmail = n.rData.cpFundTaxEmail, "" == n.rData.cpFundTaxEmail && (i.cpFundTaxEmail = userInfo.email), i.communityApproveStatus = n.rData.communityApproveStatus, i.communityIdx = n.rData.communityIdx, i.communityReturnReason = n.rData.communityReturnReason;
										for (var o = 0; o < n.rData.snsList.length; o++) {
											var a = n.rData.snsList[o].snsType,
												s = n.rData.snsList[o].snsUrl;
											n.rData.snsList[o].miscIdx;
											0 == a ? t.snsInfo.websiteUrl = s : 1 == a ? t.snsInfo.facebookUrl = s : 2 == a ? t.snsInfo.blogUrl = s : 3 == a ? t.snsInfo.instagramUrl = s : 4 == a && (t.snsInfo.twitterUrl = s)
										}
										t.setPartnerStatus(), t.confirm.fund = !0
									} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							save: function() {
								var t = this;
								this.request.snsList = [], this.request.snsList.push({
									snsType: 0,
									snsUrl: this.snsInfo.websiteUrl
								}), this.request.snsList.push({
									snsType: 1,
									snsUrl: this.snsInfo.facebookUrl
								}), this.request.snsList.push({
									snsType: 2,
									snsUrl: this.snsInfo.blogUrl
								}), this.request.snsList.push({
									snsType: 3,
									snsUrl: this.snsInfo.instagramUrl
								}), this.request.snsList.push({
									snsType: 4,
									snsUrl: this.snsInfo.twitterUrl
								}), this.request.cpCode = this.cpCode, $(".page-loader-more").fadeIn(""), axios.post("/set/reward/fund", this.request).then(function(e) {
									$(".page-loader-more").fadeOut(""), "0000" == e.data.rCode ? (noti.open("저장되었습니다."), t.$emit("check", !1)) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							partnerApprovalRequest: function() {
								var t = this;
								$(".page-loader-more").fadeIn(""), axios.post("/set/save/community/project/approvalRequest", {
									cpCode: this.cpCode,
									communityIdx: this.request.communityIdx
								}).then(function(e) {
									$(".page-loader-more").fadeOut(""), "0000" == e.data.rCode ? (noti.open("파트너 승인 요청이 완료되었습니다."), t.getFundInfo()) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div id="list_wrap" class="common_support hidden-xs hidden-sm reward-make-main">\n\t\t\t\t<div class="common_sub_vi bg_gray">\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-md-3">\n\t\t\t\t\t\t\t\t<div class="common_vi_title webfont2" v-text="title"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-4 text-right">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="col-md-5">\n\t\t\t\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t<a href="https://image-se.ycrowdy.com/reward_guide/%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B5%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8(20170921).pdf" class="btn btn-block btn-primary-outline">가이드북 다운로드</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t\t\t<button type="button" href="javascript:void(0)" class="btn btn-block btn-danger-outline" :disabled="changeStatus != 0" v-on:click="approveChecking">승인요청하기</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="common_sub_layout">\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="row not-space">\n\t\t\t\t\t\t\t<div class="col-md-2">\n\t\t\t\t\t\t\t\t<div class="col-line-lm">\n\t\t\t\t\t\t\t\t\t\x3c!-- <div class="user-media">\n\t\t\t\t\t\t\t\t\t\t<div class="media">\n\t\t\t\t\t\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t\t\t\t\t\t<img class="media-object" :src="\'//\' + userImage"  />\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="media-body media-middle" v-html="userName"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t\t\t\t<div class="st-navi-device-wrap">\n\t\t\t\t\t\t\t\t\t\t<span>프로젝트 미리보기</span>\n\t\t\t\t\t\t\t\t\t\t<div class="st-navi-device">\n\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'A1522\')">모바일</a>\n\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'A1474\')">태블릿</a>\n\t\t\t\t\t\t\t\t\t\t\t<a v-on:click="pagePreview(\'PC05\')">PC</a>\n\t\t\t\t\t\t\t\t\t\t</div>           \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ul class="st-navi st-navi-p">\n\t\t\t\t\t\t\t\t\t\t<li class="active">\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:void(0)">프로젝트 만들기</a>\n\t\t\t\t\t\t\t\t\t\t\t<div class="list_link_tab">\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 1, \'vpass\' : confirm.step1}"><a href="javascript:void(0)" v-on:click="stepChange(1, true)">1. 기본정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 2, \'vpass\' : confirm.step2}"><a href="javascript:void(0)" v-on:click="stepChange(2, true)">2. 스토리</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 3, \'vpass\' : confirm.step3}"><a href="javascript:void(0)" v-on:click="stepChange(3, true)">3. 리워드</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{\'active\' : step == 4, \'vpass\' : confirm.step4}"><a href="javascript:void(0)" v-on:click="stepChange(4, true)">4. 제작자/부가 정보</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<template v-if="dataConfirm">\n\t\t\t\t\t\t\t\t<reward-basic :cp-code="cpCode" :cp-status="changeStatus" v-if="step == 1" v-on:set-url="setUrl" v-on:step-change="stepChange" v-on:check="check"></reward-basic>\n\t\t\t\t\t\t\t\t<story :cp-code="cpCode" :cp-status="changeStatus" v-if="step == 2"  v-on:step-change="stepChange" v-on:check="check"></story>\n\t\t\t\t\t\t\t\t<benefit :cp-code="cpCode" :cp-status="changeStatus" v-if="step == 3"  v-on:step-change="stepChange" v-on:check="check"></benefit>\n\t\t\t\t\t\t\t\t<fund :cp-code="cpCode" :cp-status="changeStatus" :end-status="endStatus" v-if="step == 4"  v-on:step-change="stepChange" v-on:check="check"></fund>\n\t\t\t\t\t\t\t</template>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode"],
						data: function() {
							return {
								dataConfirm: !1,
								step: 1,
								confirm: {
									step1: !1,
									step2: !1,
									step3: !1,
									step4: !1
								},
								titleName: {
									1: "기본정보",
									2: "스토리",
									3: "리워드",
									4: "제작자/부가 정보"
								},
								url: "",
								endStatus: "",
								recStatus: ""
							}
						},
						computed: {
							userName: function() {
								return userInfo.name + "<br /> 님의 프로젝트"
							},
							userImage: function() {
								return userInfo.image
							},
							title: function() {
								return this.titleName[this.step]
							},
							approveCheck: function() {
								return this.confirm.step1 && this.confirm.step2 && this.confirm.step3 && this.confirm.step4
							},
							projectUrl: function() {
								return "" != this.url && this.url ? encodeURI(this.url) : ""
							},
							changeStatus: function() {
								return "1" == this.recStatus || "2" == this.recStatus && "1" != this.endStatus ? 1 : "2" == this.recStatus && "1" == this.endStatus ? 2 : 0
							}
						},
						components: {
							rewardBasic: n(27).default.component(),
							story: n(31).default.component(),
							benefit: n(28).default.component(),
							fund: n(29).default.component()
						},
						created: function() {
							this.check(!0)
						},
						methods: {
							stepChange: function(t, e) {
								e && (this.step = t), this.check(!1)
							},
							check: function(t) {
								var e = this;
								axios.post("/data/save/reward/info/confirm", {
									cpCode: this.cpCode,
									memCode: userInfo.memCode,
									simulationConfirm: "Y"
								}).then(function(n) {
									var i = n.data.rData;
									if (!i.check) return void noti.open("잘못된 접근입니다.", function() {
										window.open("/", "_self")
									});
									t && (e.dataConfirm = !0), e.confirm.step1 = i.rewardBasic, e.confirm.step2 = i.story, e.confirm.step3 = i.benefit, e.confirm.step4 = i.fund, e.cpEndStatus = i.cpEndStatus, e.url = i.cpAliasUrl, e.endStatus = i.cpEndStatus, e.recStatus = i.cpRecStatus, "1" == e.recStatus && noti.open("승인요청 중인 프로젝트입니다. 마이페이지로 이동합니다.", function() {
										window.open("/mypage/main?menu=2&sub-menu=3", "_self")
									})
								})
							},
							approveChecking: function() {
								var t = this;
								0 == this.changeStatus && ($(".page-loader-more").fadeIn(""), axios.post("/data/member/info", {
									memCode: userInfo.memCode
								}).then(function(e) {
									$(".page-loader-more").fadeOut("");
									var n = e.data;
									if ("0000" == n.rCode)
										if ("Y" == n.rData.memNameConfirm) {
											if (!t.approveCheck) {
												var i = 1;
												return i = t.confirm.step1 ? t.confirm.step2 ? t.confirm.step3 ? 4 : 3 : 2 : 1, noti.open("< " + t.titleName[i] + " > 단계의 정보를 입력하지 않으셨습니다. <br/> < " + t.titleName[i] + " > 단계의 모든 요소를 입력 후 다시 승인요청을 해주세요.", t.stepChange(i, !0)), !1
											}
											noti.open("승인 요청하시겠습니까?", t.approve, !0)
										} else noti.open("본인인증을 완료해야 승인요청 할 수 있습니다. 설정 페이지로 이동하시겠습니까?", function() {
											window.open("/mypage/main?menu=5&sub-menu=1", "_self")
										}, !0);
									else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								}))
							},
							approve: function() {
								$(".page-loader-more").fadeIn(""), axios.post("/data/save/reward/approval", {
									cpCode: this.cpCode
								}).then(function(t) {
									$(".page-loader-more").fadeOut(""), "0000" == t.data.rCode ? noti.open("승인요청이 완료되었습니다.", function() {
										window.open("/mypage/main?menu=2&sub-menu=3", "_self")
									}) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							},
							pagePreview: function(t) {
								if ("" == this.projectUrl) return void noti.open("프로젝트 고유 주소를 먼저 저장해주세요.");
								var e = this.projectUrl.replace("/r/", "/sr/");
								window.open("http://troy.labs.daum.net/?url=" + e + "&device=" + t, "_blank")
							},
							setUrl: function(t) {
								this.url = "" != t && t ? encodeURI(window.location.origin + "/sr/" + t) : ""
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	"use strict";

	function i(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = function() {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
				}
			}
			return function(e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e
			}
		}(),
		a = function() {
			function t() {
				i(this, t)
			}
			return o(t, [{
				key: "component",
				value: function() {
					return {
						template: '\n\t\t\t<div class="col-md-10 col-line">\n\t\t\t\t<div class="row not-space">\n\t\t\t\t\t<div class="col-lg-1"></div>\n\t\t\t\t\t<div class="col-lg-11">\n\t\t\t\t\t\t<div class="md-ml30">\n\t\t\t\t\t\t\t<form class="form-horizontal" id="combinationForm" method="get" action="#">\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t                        <label for="project_vod" class="col-xs-12 control-label control-label-big">\n\t\t\t                            <div class="text-left mb10">프로젝트 소개 영상과 이미지를 등록해주세요</div>\n\t\t\t                            <p class="form-control-static mb10 mt0">영상과 이미지를 함께 등록할 경우, 영상이 먼저 보여집니다.</p>\n\t\t\t                        </label>\n\t\t\t                        <div class="col-xs-12">\n\t\t\t                            <div class="row row-mobile-n">\n\t\t\t                                <label for="vod_gallery" class="col-xs-12 control-label">\n\t\t\t                                    <div class="text-left">동영상 주소를 적어주세요</div>\n\t\t\t                                </label>\n\t\t\t                                <div class="vod-holder input-append" v-for="(item, index) in request.cpVideos" :class="{\'mt10\' : index != 0}" :disabled="cpStatus == 1">\n\t\t\t                                    <div class="row row-mobile-n">\n\t\t\t                                        <div class="col-xs-10 col-sm-7">\n\t\t\t                                            <input type="text" class="form-control" v-model.trim="request.cpVideos[index]" placeholder="YouTube, Vimeo  URL을 입력해주세요" />\n\t\t\t                                        </div>\n\t\t\t                                        <div class="col-xs-2 col-sm-1" style="display: -webkit-box;">\n\t\t\t                                            <span class="files-add vod-add" v-on:click="videoAdd" v-if="index + 1 == request.cpVideos.length" style="margin-right: 10px;">+</span>\n\t\t\t                                            <span class="files-add img-delete vod-delete" v-on:click="videoDelete(index)" v-if="request.cpVideos.length != 1">-</span>\n\t\t\t                                        </div>\n\t\t\t                                    </div>\n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                        <div class="col-xs-12 mt25">\n\t\t\t                            <label for="eligible[]" class="control-label">\n\t\t\t                                <div class="text-left">이미지를 등록해주세요</div>\n\t\t\t                            </label>\n\t\t\t                            <div class="row">\n\t\t\t                                <div class="eligible-holder input-append dropify-wrapper-197 col-xs-6 col-sm-3 mt10" v-for="(item, index) in request.cpImage" v-if="request.cpImage[index].state" :disabled="cpStatus == 1">\n\t\t\t                                    <dropify-input class="dropify-gallery" :default-index="index" v-model="request.cpImage[index]" v-on:clear="imageDelete" :default-message="\'최적 사이즈 740×417px\'" :default-img="item.fileName"></dropify-input>\n\t\t\t                                </div>\n\t\t\t                                <div class="col-xs-6 col-sm-3 dropify-wrapper-197 mt10">\n\t\t\t                                    <div class="dropify-wrapper dropify-wrapper-plus" v-on:click="imageAdd" :disabled="cpStatus == 1">+</div>\n\t\t\t                                </div>\n\t\t\t                            </div>\n\t\t\t                        </div>\n\t\t\t                    </div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_story" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">프로젝트 스토리를 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0"><a class="red-800">프로젝트를 시작하기 위해 필요한 내용이 없다면 승인이 되지 않습니다. 프로젝트 가이드북</a>을 읽어보시고 매력적인 스토리를 적어주세요.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="ps-wrap">\n\t\t\t\t\t\t\t\t\t\t\tEnter(↵) : 문단 나눔, Shift + Enter : 줄바꿈입니다!  <br />\n\t\t\t\t\t\t\t\t\t\t\t적절한 문단/줄 바꿈만으로 멋진 프로젝트를 완성 할 수 있습니다!\n\t\t\t\t\t\t\t\t\t\t\t<story-area :id="\'editor0\'" v-if="dataConfirm" :value="request.cpStory" v-model="request.cpStory" :disabled="cpStatus == 1"></story-area>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t<label for="project_story" class="col-xs-12 control-label control-label-big">\n\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">환불 및 교환 정책을 적어주세요</div>\n\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t<div class="ps-wrap">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb15">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_policy" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">진행자의 환불 및 교환 정책<span class="red-800">(선택사항)</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows="5" id="project_policy" class="form-control" title="" placeholder="크라우디 환불 및 교환 정책 외에 추가사항이 있으시면 적어주세요." v-model="request.cpRefundPolicy" disabled></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb35">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_mobile1" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">문의 가능한 번호</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control telbox" maxlength="200" placeholder="번호를 적어주세요 (예. 01012345678)" :value="request.cpRefundTell" v-model="request.cpRefundTell" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="tel_open" class="checkbox-inline" style="position: relative;top:-3px;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" name="tel_open" id="tel_open" :checked="request.cpRefundTellViewStatus == \'1\'" v-on:click="changeRefundTellViewStatus()" disabled/><span class="label"></span><span class="label-text">번호공개</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="row row-mobile-n mb35">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="project_email" class="col-xs-12 control-label">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="text-left mb10">문의 이메일</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="form-control-static mb10 mt0">실제 리워드 프로젝트를 진행할 경우에 필요한 정보입니다.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-sm-6">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" id="project_email" maxlength="200" title="" placeholder="info@ycrowdy.com" :value="request.cpInquiryEmail" v-model="request.cpInquiryEmail" disabled/>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class="textarea-style">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>크라우디의 환불 및 교환정책 기본사항</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>1. 프로젝트 기간 중에는 자유롭게 <a href="/mypage/main?menu=1&sub-menu=1" target="_blank">마이 페이지</a>에서 펀딩 취소가 가능합니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>2. 펀딩을 받아야만 생산을 시작할 수 있는 크라우드 펀딩 특성상, 프로젝트 종료 이후에는 단순 변심으로 인한 교환이나 환불이 불가하니 이점 양해 부탁드립니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>3. 리워드 배송일이 예상보다 지연되는 경우, 새소식과 후원자 분들의 이메일을 통해 안내해드리겠습니다.<br />이에 관한 문의는 이메일 "<a :href="\'mailto:\' + request.cpInquiryEmail" target="_blank" class="project_email red-800">{{request.cpInquiryEmail}}</a>" <template v-if="request.cpRefundTellViewStatus == \'1\'"> , 연락처 "<a class="red-800" :href="\'tel:\' + request.cpRefundTell">{{request.cpRefundTell}}</a>" 로 연락바랍니다. </template>  <template v-if="request.cpRefundTellViewStatus == \'0\'"> 로 문의바랍니다.</template> </li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<ul class="con-icon blue-800 mb25">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>프로젝트 종료일 이후에 리워드와 관련된 환불 및 교환은 프로젝트 제작자가 약속하는 것에 따르며 크라우디는 이에 책임지지 않습니다.</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n mt90">\n\t\t\t\t\t\t\t\t\t<div class="col-sm-11">\n\t\t\t\t\t\t\t\t\t\t<div class="form-group row-mobile-n">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary-outline" v-on:click="save(false)">저장하기</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-6 col-sm-4 col-md-3">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-block btn-primary" v-on:click="save(true)">다음단계</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t',
						props: ["cpCode", "cpStatus"],
						data: function() {
							return {
								dataConfirm: !1,
								file: {
									fileData: "",
									fileName: "",
									state: !0
								},
								request: {
									cpCode: "",
									memCode: "",
									cpStory: "",
									cpRefundTell: "",
									cpRefundTellViewStatus: "1",
									cpInquiryEmail: "",
									cpRefundPolicy: "",
									cpVideos: [],
									cpImage: []
								}
							}
						},
						components: {
							dropifyInput: n(0).default.component(),
							storyArea: n(3).default.component()
						},
						created: function() {
							$(window).scrollTop(0);
							var t = this;
							axios.post("/data/save/reward/info/story", {
								cpCode: this.cpCode
							}).then(function(e) {
								var n = e.data;
								if ("0000" == n.rCode) {
									var i = t.request;
									i.cpStory = n.rData.cpStory, i.cpRefundTell = n.rData.cpRefundTell, i.cpInquiryEmail = n.rData.cpInquiryEmail, i.cpRefundTellViewStatus = n.rData.cpRefundTellViewStatus, i.cpRefundPolicy = n.rData.cpRefundPolicy, 0 == n.rData.cpImages.length ? i.cpImage.push(t.file) : _.forEach(n.rData.cpImages, function(t) {
										i.cpImage.push({
											fileName: t,
											fileData: "",
											state: !0
										})
									}), 0 == n.rData.cpVideos.length ? i.cpVideos.push("") : _.forEach(n.rData.cpVideos, function(t) {
										i.cpVideos.push(t)
									}), t.dataConfirm = !t.dataConfirm
								} else noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
							})
						},
						methods: {
							videoAdd: function() {
								1 != this.cpStatus && this.request.cpVideos.push("")
							},
							videoDelete: function(t) {
								1 != this.cpStatus && this.request.cpVideos.splice(t, 1)
							},
							imageAdd: function() {
								if (1 != this.cpStatus) {
									var t = _.last(this.request.cpImage);
									t.state && "" == t.fileName || this.request.cpImage.push(this.file)
								}
							},
							imageDelete: function(t) {
								if (1 != this.cpStatus) {
									this.request.cpImage[t].state = !1;
									0 == _.filter(this.request.cpImage, function(t) {
										return 1 == t.state
									}).length && this.request.cpImage.push(this.file)
								}
							},
							changeRefundTellViewStatus: function() {
								var t = this;
								"1" == t.request.cpRefundTellViewStatus ? (t.request.cpRefundTellViewStatus = "0", $("input.telbox").attr("disabled", !0)) : (t.request.cpRefundTellViewStatus = "1", $("input.telbox").attr("disabled", !1))
							},
							save: function(t) {
								var e = this;
								if (1 == this.cpStatus) return void noti.open("수정이 불가능한 상태입니다.");
								this.request.cpCode = this.cpCode, this.request.memCode = userInfo.memCode, this.request.cpImage = _.filter(this.request.cpImage, function(t) {
									return 1 == t.state && "" != t.fileName
								}), this.request.cpVideos = _.filter(this.request.cpVideos, function(t) {
									return "" != t
								}), this.request.cpStory = userInfo.removeStyleAttr(this.request.cpStory), $(".page-loader-more").fadeIn(""), axios.post("/set/reward/story", this.request).then(function(n) {
									$(".page-loader-more").fadeOut(""), "0000" == n.data.rCode ? (0 == e.request.cpImage.length && e.request.cpImage.push(e.file), 0 == e.request.cpVideos.length && e.request.cpVideos.push(""), 1 == t ? e.$emit("step-change", 3, !0) : (noti.open("저장되었습니다."), e.$emit("step-change", 3, !1))) : noti.open("시스템 문제가 발생하였습니다.<br/> 다시 시도해주세요.")
								})
							}
						}
					}
				}
			}]), t
		}();
	e.default = new a
}, function(t, e, n) {
	t.exports = n(6)
}]);