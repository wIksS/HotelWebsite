"use strict";

/*
Name: 			Style Switcher Initializer
Written by: 	Okler Themes - (http://www.okler.net)
Version: 		2.5
*/
var styleSwitcher = { initialized: !1, defaults: { saveToStorage: !0, preserveCookies: !1, colorPrimary: "#0088CC", colorSecondary: "#E36159", colorTertiary: "#2BAAB1", colorQuaternary: "#383f48", borderRadius: "4px", layoutStyle: "wide", websiteType: "normal", backgroundColor: "light", backgroundPattern: "", changeLogo: !0, showSwitcher: !1 }, initialize: function initialize() {
    var a = this,
        b = $("html").data("style-switcher-options"),
        c = $("#styleSwitcherScript").data("base-path") ? $("#styleSwitcherScript").data("base-path") : "",
        d = $("head"),
        e = $("#styleSwitcherScript").data("skin-src") ? $("#styleSwitcherScript").data("skin-src") : c + "master/less/skin-default.less";if (a.basePath = c, !this.initialized) {
      if (a.options = $.extend({}, a.defaults), String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
      }, jQuery.styleSwitcherCachedScript = function (a, b) {
        return b = $.extend(b || {}, { dataType: "script", cache: !0, url: a }), jQuery.ajax(b);
      }, null != $.cookie("borderRadius") && (a.options.borderRadius = $.cookie("borderRadius")), null != $.cookie("colorPrimary") && (a.options.colorPrimary = "#" + $.cookie("colorPrimary")), null != $.cookie("colorSecondary") && (a.options.colorSecondary = "#" + $.cookie("colorSecondary")), null != $.cookie("colorTertiary") && (a.options.colorTertiary = "#" + $.cookie("colorTertiary")), null != $.cookie("colorQuaternary") && (a.options.colorQuaternary = "#" + $.cookie("colorQuaternary")), b && (b = b.replace(/'/g, '"'), a.options = $.extend({}, a.options, JSON.parse(b)), a.options.preserveCookies = !0, a.options.saveToStorage = !1), d.append($('<link rel="stylesheet">').attr("href", c + "master/style-switcher/style-switcher.css")), null == $.cookie("showSwitcher") && !a.options.showSwitcher && $.cookie("initialized")) return void a.initializeSimpleMode();d.append($('<link rel="stylesheet/less">').attr("href", e)), d.append($('<link rel="stylesheet">').attr("href", c + "master/style-switcher/bootstrap-colorpicker/css/bootstrap-colorpicker.css")), $.styleSwitcherCachedScript(c + "master/style-switcher/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js").done(function (d, e) {
        less = { async: !0, env: "production", modifyVars: { "@border-radius": a.options.borderRadius, "@color-primary": a.options.colorPrimary, "@color-secondary": a.options.colorSecondary, "@color-tertiary": a.options.colorTertiary, "@color-quaternary": a.options.colorQuaternary } }, $.styleSwitcherCachedScript(c + "master/less/less.js").done(function (d, e) {
          $.ajax({ url: c + "master/style-switcher/style.switcher.html" }).done(function (c) {
            $("body").append(c), a.container = $("#styleSwitcher"), a.build(), a.events(), "img/logo.png" != $("#header .header-logo img").attr("src") && (a.options.changeLogo = !1), b || (null != $.cookie("layoutStyle") && (a.options.layoutStyle = $.cookie("layoutStyle")), $("body").hasClass("one-page") && (a.options.websiteType = "one-page"), null != $.cookie("backgroundColor") && (a.options.backgroundColor = $.cookie("backgroundColor")), null != $.cookie("backgroundPattern") && (a.options.backgroundPattern = $.cookie("backgroundPattern"))), a.setLayoutStyle(a.options.layoutStyle), a.setWebsiteType(a.options.websiteType), a.setBackgroundColor(a.options.backgroundColor), a.setBackgroundPattern(a.options.backgroundPattern), a.setColors(), a.setBorderRadius(a.options.borderRadius), $("#styleSwitcherSimple").remove(), a.initialized = !0, null == $.cookie("initialized") && $.cookie("initialized", !0);
          });
        });
      }), $.styleSwitcherCachedScript(c + "master/style-switcher/cssbeautify/cssbeautify.js").done(function (a, b) {});
    }
  }, initializeSimpleMode: function initializeSimpleMode() {
    var a = this,
        b = $("#header .header-logo img"),
        c = $("#header .header-logo img").attr("src"),
        d = '<div id="styleSwitcherSimple" class="style-switcher style-switcher-simple d-none d-sm-block"><a id="styleSwitcherSimpleOpen" class="style-switcher-open" href="#"><i class="fas fa-cogs"></i></a></div>';$("body").append(d), "img/logo.png" == c && a.setLogo(), $("#styleSwitcherSimpleOpen").on("click", function (d) {
      d.preventDefault(), b.attr("src", c), $(this).find(".fa").removeClass().addClass("fas fa-cog fa-spin fa-fw"), $.cookie("showSwitcher", !0), a.initialized = !1, a.initialize();
    });
  }, build: function build() {
    var a = this,
        b = a.container.find(".color-primary input"),
        c = a.container.find(".color-secondary input"),
        d = a.container.find(".color-tertiary input"),
        e = a.container.find(".color-quaternary input");b.val(a.options.colorPrimary).parent().colorpicker(), c.val(a.options.colorSecondary).parent().colorpicker(), d.val(a.options.colorTertiary).parent().colorpicker(), e.val(a.options.colorQuaternary).parent().colorpicker(), $(".colorpicker").on("mousedown", function (b) {
      b.preventDefault(), a.isChanging = !0;
    }).on("mouseup", function (f) {
      f.preventDefault(), a.isChanging = !1, a.options.colorPrimary = b.val(), a.options.colorSecondary = c.val(), a.options.colorTertiary = d.val(), a.options.colorQuaternary = e.val(), a.setColors();
    }), $(".colorpicker-element input").on("blur", function (f) {
      a.options.colorPrimary = b.val(), a.options.colorSecondary = c.val(), a.options.colorTertiary = d.val(), a.options.colorQuaternary = e.val(), a.setColors();
    }), this.container.find(".options-links.borders a").on("click", function (b) {
      b.preventDefault(), a.setBorderRadius($(this).attr("data-border-radius"));
    }), this.container.find(".options-links.layout a").on("click", function (b) {
      b.preventDefault(), a.setLayoutStyle($(this).attr("data-layout-type"), !0);
    }), this.container.find(".options-links.website-type a").on("click", function (a) {
      a.preventDefault(), $.cookie("showSwitcher", !0), self.location = $(this).attr("href");
    }), this.container.find(".options-links.background-color a").on("click", function (b) {
      b.preventDefault(), a.setBackgroundColor($(this).attr("data-background-color"));
    });var f = this.container.find("ul[data-type=patterns]");f.find("a").on("click", function (b) {
      b.preventDefault(), a.setBackgroundPattern($(this).attr("data-pattern"));
    }), a.container.find(".reset").on("click", function (b) {
      b.preventDefault(), a.reset();
    }), a.container.find(".get-css").on("click", function (b) {
      b.preventDefault(), a.getCss();
    });
  }, events: function events() {
    var a = this;$("#styleSwitcherOpen").on("click", function (b) {
      b.preventDefault(), a.container.toggleClass("active");
    }), (null != $.cookie("showSwitcher") || $("body").hasClass("one-page")) && ($("#styleSwitcherOpen").trigger("click"), $.removeCookie("showSwitcher"));
  }, setColors: function setColors(a, b) {
    var c = this;return this.isChanging ? !1 : (a && (c.options["color" + b.capitalize()] = a, c.container.find(".color-" + b + " input").val(a)), c.options.preserveCookies || ($.cookie("colorPrimary", c.options.colorPrimary.replace("#", "")), $.cookie("colorSecondary", c.options.colorSecondary.replace("#", "")), $.cookie("colorTertiary", c.options.colorTertiary.replace("#", "")), $.cookie("colorQuaternary", c.options.colorQuaternary.replace("#", ""))), c.modifyVars(), void this.setLogo());
  }, setBorderRadius: function setBorderRadius(a) {
    var b = this;b.options.borderRadius = a, b.options.preserveCookies || $.cookie("borderRadius", a), b.modifyVars();var c = this.container.find(".options-links.borders");c.find(".active").removeClass("active"), c.find("a[data-border-radius=" + a + "]").addClass("active"), $.event.trigger({ type: "styleSwitcher.setBorderRadius", radius: a });
  }, setLayoutStyle: function setLayoutStyle(a, b) {
    var c = this;if ($("body").hasClass("one-page")) return !1;if (c.options.preserveCookies || $.cookie("layoutStyle", a), this.options.saveToStorage && "undefined" != typeof localStorage && localStorage.setItem("porto-layout", a), b) return $.cookie("showSwitcher", !0), window.location.reload(), !1;var d = this.container.find(".options-links.layout"),
        e = this.container.find(".patterns");d.find(".active").removeClass("active"), d.find("a[data-layout-type=" + a + "]").addClass("active"), "wide" == a ? (e.hide(), $("html").removeClass("boxed"), $.removeCookie("backgroundPattern")) : (e.show(), $("html").addClass("boxed"), null == $.cookie("backgroundPattern") && this.container.find("ul[data-type=patterns] li:first a").trigger("click")), $.event.trigger({ type: "styleSwitcher.setLayoutStyle", style: a });
  }, setWebsiteType: function setWebsiteType(a) {
    var b = this.container.find(".options-links.website-type"),
        c = this.container.find(".options-links.layout");"one-page" == a ? (b.find("a:last").addClass("active"), c.prev().remove(), c.remove()) : b.find("a:first").addClass("active");
  }, setBackgroundColor: function setBackgroundColor(a) {
    var b = this;b.options.preserveCookies || $.cookie("backgroundColor", a);var c = this.container.find(".options-links.background-color");c.find(".active").removeClass("active"), c.find("a[data-background-color=" + a + "]").addClass("active"), "dark" == a ? $("html").addClass("dark") : $("html").removeClass("dark"), $.event.trigger({ type: "styleSwitcher.setBackgroundColor", color: a }), this.setLogo();
  }, setBackgroundPattern: function setBackgroundPattern(a) {
    var b = this;if ("" == a) return this;var c = $("html").hasClass("boxed");c && $("html").css("background-image", "url(img/patterns/" + a + ".png)"), b.options.preserveCookies || $.cookie("backgroundPattern", a), $.event.trigger({ type: "styleSwitcher.setBackgroundPattern", pattern: a });
  }, setLogo: function setLogo(a) {
    return this.options.changeLogo ? (a || ("#" + $.cookie("colorPrimary")).toUpperCase() == this.defaults.colorPrimary.toUpperCase() && "dark" != $.cookie("backgroundColor") ? $("#header .header-logo img").attr("src", "img/logo-default.png") : "dark" == $.cookie("backgroundColor") ? $("#header .header-logo img").attr("src", "img/logo-dark.png") : $("#header .header-logo img").attr("src", "img/logo.png"), void $.event.trigger({ type: "styleSwitcher.setLogo" })) : this;
  }, modifyVars: function modifyVars() {
    var a = this;window.clearTimeout(a.timer), a.timer = window.setTimeout(function () {
      less.modifyVars({ "@border-radius": a.options.borderRadius, "@color-primary": a.options.colorPrimary, "@color-secondary": a.options.colorSecondary, "@color-tertiary": a.options.colorTertiary, "@color-quaternary": a.options.colorQuaternary }), a.options.saveToStorage && "undefined" != typeof localStorage && localStorage.setItem("porto-skin.css", $('style[id^="less:"]').text());
    }, 300);
  }, reset: function reset() {
    $.removeCookie("borderRadius"), $.removeCookie("colorPrimary"), $.removeCookie("colorSecondary"), $.removeCookie("colorTertiary"), $.removeCookie("colorQuaternary"), $.removeCookie("layoutStyle"), $.removeCookie("backgroundColor"), $.removeCookie("backgroundPattern"), $.cookie("showSwitcher", !0), window.location.reload(), "undefined" != typeof localStorage && (localStorage.removeItem("porto-skin.css"), localStorage.removeItem("porto-layout"));
  }, getCss: function getCss() {
    raw = "";var a = $("html").hasClass("boxed");a ? (raw = 'html { background-image: url("../../img/patterns/' + $.cookie("backgroundPattern") + '.png"); }', $("#addBoxedClassInfo").show()) : $("#addBoxedClassInfo").hide(), $("#getCSSTextarea").text($('style[id^="less:"]').text()).focus(function () {
      var a = $(this);a.select(), a.mouseup(function () {
        return a.unbind("mouseup"), !1;
      });
    }), $("#getCSSModal").modal("show"), options = { indent: "	", autosemicolon: !0 }, raw += $("#getCSSTextarea").text(), $("#getCSSTextarea").text(cssbeautify(raw, options));
  } };styleSwitcher.initialize();