"use strict";
! function(e) {
    jQuery(document).ready(function() {
        var t = {
                getItem: function(e) {
                    return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                },
                setItem: function(e, t, o, s, a, n) {
                    if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
                    var i = "";
                    if (o) switch (o.constructor) {
                        case Number:
                            i = o === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + o;
                            break;
                        case String:
                            i = "; expires=" + o;
                            break;
                        case Date:
                            i = "; expires=" + o.toUTCString()
                    }
                    return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + (a ? "; domain=" + a : "") + (s ? "; path=" + s : "") + (n ? "; secure" : ""), !0
                },
                removeItem: function(e, t, o) {
                    return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (o ? "; domain=" + o : "") + (t ? "; path=" + t : ""), !0)
                },
                hasItem: function(e) {
                    return !(!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                },
                keys: function() {
                    for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, o = 0; o < t; o++) e[o] = decodeURIComponent(e[o]);
                    return e
                }
            },
            o = "_sd_demo_page_promo",
            s = t.getItem(o),
            a = e(".promo-popup");
        s ? setTimeout(function() {
            a.addClass("hidden slideInUp")
        }, 3e3) : setTimeout(function() {
            a.addClass("bounceIn")
        }, 3e3), a.find(".close").click(function() {
            a.addClass("hidden");
            var e = new Date;
            e.setDate(e.getDate() + 1), t.setItem(o, !0, e)
        }), a.find(".pp-intro-bar").click(function(s) {
            s.target === this && e(this).parent().hasClass("hidden") && (t.removeItem(o), a.removeClass("hidden"))
        }), a.find(".pp-intro-bar .up").click(function() {
            a.removeClass("hidden"), t.removeItem(o)
        }), a.find(".pp-cta").click(function(e) {
            e.preventDefault(), "undefined" !== dataLayer && dataLayer.push({
                event: "sdp-demo-cta-upsell",
                data: {
                    category: "product-demo",
                    action: "cta-upsell",
                    label: "shards-dashboard-pro"
                }
            }), window.location = e.target.href
        });
        var n, i = e(".color-switcher .accent-colors"),
            r = e("#main-stylesheet"),
            c = r.attr("href"),
            d = r.attr("data-version");
        i.on("click", "li", function() {
            var t = e(this).attr("data-color"),
                o = "styles/accents/" + t + "." + d + ".css";
            "primary" == t && (o = c), i.find("li.active").removeClass("active"), e(this).addClass("active"), r.attr("href", o),
                function(t) {
                    var o = e("#main-logo");
                    n || (n = o.attr("src"));
                    if ("primary" === t) return void o.attr("src", n);
                    o.attr("src", "images/shards-dashboards-logo-" + t + ".svg")
                }(t), void 0 !== window.ubdChart && void 0 !== window.BlogOverviewUsers && function(t) {
                    t = l[t], ubdChart.data.datasets[0].backgroundColor = [u(t, .9), u(t, .5), u(t, .3)], ubdChart.update(), e(".ubd-stats__legend .ubd-stats__item:nth-child(1) i").attr("style", "color:" + u(t, .9) + ";"), e(".ubd-stats__legend .ubd-stats__item:nth-child(2) i").attr("style", "color:" + u(t, .5) + ";"), e(".ubd-stats__legend .ubd-stats__item:nth-child(3) i").attr("style", "color:" + u(t, .3) + ";")
                }(t)
        });
        const l = {
            primary: "#007bff",
            secondary: "#5A6169",
            success: "#17c671",
            info: "#00b8d8",
            warning: "#ffb400",
            danger: "#c4183c"
        };

        function u(e, t) {
            t = t || 1;
            let o;
            if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)) return 3 == (o = e.substring(1).split("")).length && (o = [o[0], o[0], o[1], o[1], o[2], o[2]]), "rgba(" + [(o = "0x" + o.join("")) >> 16 & 255, o >> 8 & 255, 255 & o].join(",") + "," + t + ")"
        }
        e("#social-share").sharrre({
            share: {
                facebook: !0,
                twitter: !0
            },
            buttons: {
                facebook: {
                    layout: "button_count",
                    action: "like"
                },
                twitter: {
                    count: "horizontal",
                    via: "DesignRevision",
                    hashtags: "bootstrap,uikit"
                }
            },
            enableTracking: !0,
            enableHover: !1,
            enableCounter: !1
        }), e(".color-switcher-toggle").click(p), e(".color-switcher .close").click(p);
        var m = new Date;

        function p() {
            e(".color-switcher").toggleClass("visible"), e(".color-switcher").hasClass("visible") ? t.setItem("_sd_cs_visible", !0, m) : t.setItem("_sd_cs_visible", !1, m)
        }
        m.setDate(m.getDate() + 1), t.setItem(o, !0, m), null === t.getItem("_sd_cs_visible") && t.setItem("_sd_cs_visible", !0, m), "false" !== t.getItem("_sd_cs_visible") && e(".color-switcher").addClass("visible"), setTimeout(function() {
            e(".loading-overlay").fadeOut(250)
        }, 2e3), e(document).on("click", "a.extra-action", function(t) {
            t.preventDefault(), t.stopPropagation();
            var o = e(this).attr("href");
            ! function() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            }() ? window.location = o: window.parent.location = o
        })
    })
}(jQuery);