!function(t) {
    function e(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 4)
}([function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        (0,
        a.default)(function() {
            var n = (0,
            u.default)(t);
            for (var i in n) {
                var o = n[i];
                e(o)
            }
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = o;
    var r = n(2)
      , u = i(r)
      , s = n(11)
      , a = i(s)
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        return null == t ? null : (0,
        r.default)(t, e) ? t : i(t.parentNode, e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = i;
    var o = n(14)
      , r = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(o)
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document
          , n = e.querySelectorAll(t);
        return Array.prototype.slice.call(n)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = i
}
, function(t, e, n) {
    "use strict";
    function i() {
        return r && r.clientHeight || 0
    }
    function o(t) {
        r = t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getHeight = i,
    e.register = o;
    var r = null;
    e.default = {
        getHeight: i,
        register: o
    }
}
, function(t, e, n) {
    t.exports = n(5)
}
, function(t, e, n) {
    "use strict";
    n(6),
    n(8),
    n(10),
    n(13),
    n(15),
    n(16),
    n(19),
    n(20)
}
, function(t, e, n) {
    "use strict";
    var i = n(7);
    !function(t) {
        t && t.__esModule
    }(i)
}
, function(t, e, n) {
    /**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.3.1
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
    !function(e, n) {
        t.exports = n()
    }(0, function() {
        return function(t) {
            function e(i) {
                if (n[i])
                    return n[i].exports;
                var o = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(o.exports, o, o.exports, e),
                o.loaded = !0,
                o.exports
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.p = "",
            e(0)
        }([function(t, e) {
            "use strict";
            t.exports = function() {
                var t = "initial"
                  , e = null
                  , n = document.documentElement
                  , i = ["input", "select", "textarea"]
                  , o = []
                  , r = [16, 17, 18, 91, 93]
                  , u = [9]
                  , s = {
                    keydown: "keyboard",
                    keyup: "keyboard",
                    mousedown: "mouse",
                    mousemove: "mouse",
                    MSPointerDown: "pointer",
                    MSPointerMove: "pointer",
                    pointerdown: "pointer",
                    pointermove: "pointer",
                    touchstart: "touch"
                }
                  , a = []
                  , c = !1
                  , l = !1
                  , d = {
                    x: null,
                    y: null
                }
                  , f = {
                    2: "touch",
                    3: "touch",
                    4: "mouse"
                }
                  , g = !1;
                try {
                    var m = Object.defineProperty({}, "passive", {
                        get: function() {
                            g = !0
                        }
                    });
                    window.addEventListener("test", null, m)
                } catch (t) {}
                var p = function() {
                    var t = !!g && {
                        passive: !0
                    };
                    window.PointerEvent ? (n.addEventListener("pointerdown", v),
                    n.addEventListener("pointermove", y)) : window.MSPointerEvent ? (n.addEventListener("MSPointerDown", v),
                    n.addEventListener("MSPointerMove", y)) : (n.addEventListener("mousedown", v),
                    n.addEventListener("mousemove", y),
                    "ontouchstart"in window && (n.addEventListener("touchstart", w, t),
                    n.addEventListener("touchend", w))),
                    n.addEventListener(_(), y, t),
                    n.addEventListener("keydown", v),
                    n.addEventListener("keyup", v)
                }
                  , v = function(n) {
                    if (!c) {
                        var o = n.which
                          , a = s[n.type];
                        if ("pointer" === a && (a = L(n)),
                        t !== a || e !== a) {
                            var l = document.activeElement
                              , d = !1;
                            (l && l.nodeName && -1 === i.indexOf(l.nodeName.toLowerCase()) || -1 !== u.indexOf(o)) && (d = !0),
                            ("touch" === a || "mouse" === a || "keyboard" === a && o && d && -1 === r.indexOf(o)) && (t = e = a,
                            h())
                        }
                    }
                }
                  , h = function() {
                    n.setAttribute("data-whatinput", t),
                    n.setAttribute("data-whatintent", t),
                    -1 === a.indexOf(t) && (a.push(t),
                    n.className += " whatinput-types-" + t),
                    b("input")
                }
                  , y = function(t) {
                    if (d.x !== t.screenX || d.y !== t.screenY ? (l = !1,
                    d.x = t.screenX,
                    d.y = t.screenY) : l = !0,
                    !c && !l) {
                        var i = s[t.type];
                        "pointer" === i && (i = L(t)),
                        e !== i && (e = i,
                        n.setAttribute("data-whatintent", e),
                        b("intent"))
                    }
                }
                  , w = function(t) {
                    "touchstart" === t.type ? (c = !1,
                    v(t)) : c = !0
                }
                  , b = function(t) {
                    for (var n = 0, i = o.length; n < i; n++)
                        o[n].type === t && o[n].fn.call(void 0, e)
                }
                  , L = function(t) {
                    return "number" == typeof t.pointerType ? f[t.pointerType] : "pen" === t.pointerType ? "touch" : t.pointerType
                }
                  , _ = function() {
                    return "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                }
                  , E = function(t) {
                    for (var e = 0, n = o.length; e < n; e++)
                        if (o[e].fn === t)
                            return e
                };
                return "addEventListener"in window && Array.prototype.indexOf && function() {
                    s[_()] = "mouse",
                    p(),
                    h()
                }(),
                {
                    ask: function(n) {
                        return "loose" === n ? e : t
                    },
                    types: function() {
                        return a
                    },
                    ignoreKeys: function(t) {
                        r = t
                    },
                    registerOnChange: function(t, e) {
                        o.push({
                            fn: t,
                            type: e || "input"
                        })
                    },
                    unRegisterOnChange: function(t) {
                        var e = E(t);
                        e && o.splice(e, 1)
                    }
                }
            }()
        }
        ])
    })
}
, function(t, e, n) {
    "use strict";
    var i = n(9);
    (0,
    function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i).default)()
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E"
    }
    function o(t) {
        if (t.srcset && !h && window.picturefill) {
            var e = window.picturefill._;
            t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                reselect: !0
            }),
            t[e.ns].curSrc || (t[e.ns].supported = !1,
            e.fillImg(t, {
                reselect: !0
            })),
            t.currentSrc = t[e.ns].curSrc || t.src
        }
    }
    function r(t) {
        for (var e, n = getComputedStyle(t).fontFamily, i = {}; null !== (e = f.exec(n)); )
            i[e[1]] = e[2];
        return i
    }
    function u(t, e, n) {
        var o = i(e || 1, n || 0);
        y.call(t, "src") !== o && w.call(t, "src", o)
    }
    function s(t, e) {
        t.naturalWidth ? e(t) : setTimeout(s, 100, t, e)
    }
    function a(t) {
        var e = r(t)
          , n = t[d];
        if (e["object-fit"] = e["object-fit"] || "fill",
        !n.img) {
            if ("fill" === e["object-fit"])
                return;
            if (!n.skipTest && m && !e["object-position"])
                return
        }
        if (!n.img) {
            n.img = new Image(t.width,t.height),
            n.img.srcset = y.call(t, "data-ofi-srcset") || t.srcset,
            n.img.src = y.call(t, "data-ofi-src") || t.src,
            w.call(t, "data-ofi-src", t.src),
            t.srcset && w.call(t, "data-ofi-srcset", t.srcset),
            u(t, t.naturalWidth || t.width, t.naturalHeight || t.height),
            t.srcset && (t.srcset = "");
            try {
                c(t)
            } catch (t) {
                window.console && console.warn("https://bit.ly/ofi-old-browser")
            }
        }
        o(n.img),
        t.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")',
        t.style.backgroundPosition = e["object-position"] || "center",
        t.style.backgroundRepeat = "no-repeat",
        t.style.backgroundOrigin = "content-box",
        /scale-down/.test(e["object-fit"]) ? s(n.img, function() {
            n.img.naturalWidth > t.width || n.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
        }) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"),
        s(n.img, function(e) {
            u(t, e.naturalWidth, e.naturalHeight)
        })
    }
    function c(t) {
        var e = {
            get: function(e) {
                return t[d].img[e || "src"]
            },
            set: function(e, n) {
                return t[d].img[n || "src"] = e,
                w.call(t, "data-ofi-" + n, e),
                a(t),
                e
            }
        };
        Object.defineProperty(t, "src", e),
        Object.defineProperty(t, "currentSrc", {
            get: function() {
                return e.get("currentSrc")
            }
        }),
        Object.defineProperty(t, "srcset", {
            get: function() {
                return e.get("srcset")
            },
            set: function(t) {
                return e.set(t, "srcset")
            }
        })
    }
    function l(t, e) {
        var n = !b && !t;
        if (e = e || {},
        t = t || "img",
        p && !e.skipTest || !v)
            return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length"in t || (t = [t]);
        for (var i = 0; i < t.length; i++)
            t[i][d] = t[i][d] || {
                skipTest: e.skipTest
            },
            a(t[i]);
        n && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && l(t.target, {
                skipTest: e.skipTest
            })
        }, !0),
        b = !0,
        t = "img"),
        e.watchMQ && window.addEventListener("resize", l.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    /*! npm.im/object-fit-images 3.2.3 */
    var d = "bfred-it:object-fit-images"
      , f = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g
      , g = "undefined" == typeof Image ? {
        style: {
            "object-position": 1
        }
    } : new Image
      , m = "object-fit"in g.style
      , p = "object-position"in g.style
      , v = "background-size"in g.style
      , h = "string" == typeof g.currentSrc
      , y = g.getAttribute
      , w = g.setAttribute
      , b = !1;
    l.supportsObjectFit = m,
    l.supportsObjectPosition = p,
    function() {
        function t(t, e) {
            return t[d] && t[d].img && ("src" === e || "srcset" === e) ? t[d].img : t
        }
        p || (HTMLImageElement.prototype.getAttribute = function(e) {
            return y.call(t(this, e), e)
        }
        ,
        HTMLImageElement.prototype.setAttribute = function(e, n) {
            return w.call(t(this, e), e, String(n))
        }
        )
    }(),
    t.exports = l
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(0)
      , r = i(o)
      , u = n(12)
      , s = i(u)
      , a = n(2)
      , c = i(a)
      , l = "data-carousel"
      , d = "carousel__slide--active"
      , f = "carousel__slide--left"
      , g = "carousel__slide--right"
      , m = "carousel__slide--adjacent"
      , p = "carousel__button--disabled"
      , v = "carousel__slide--hold-media"
      , h = "carousel__slide--delay-content";
    (0,
    r.default)("[" + l + "]", function(t) {
        function e(t) {
            if (t <= H) {
                var e = C;
                C = t;
                for (var n in T)
                    !function(n) {
                        var i = T[n]
                          , s = i.getAttribute(l + "-slide")
                          , c = _(e, i)
                          , d = E(e, i)
                          , m = _(C, i)
                          , p = E(C, i);
                        e == s && (o(c),
                        o(d),
                        i.classList.add(v),
                        O.addEventListener("transitionend", function() {
                            i.classList.remove(v)
                        })),
                        t == s ? (a(i),
                        r(m),
                        r(p),
                        i.classList.add(h),
                        O.addEventListener("transitionend", function() {
                            i.classList.remove(h)
                        }),
                        i.classList.contains(g) && p.classList.contains(g) && (b(p),
                        w(p)),
                        i.classList.contains(g) && m.classList.contains(g) && (b(m),
                        w(m)),
                        i.classList.contains(f) && p.classList.contains(f) && (y(p),
                        L(p)),
                        i.classList.contains(f) && m.classList.contains(f) && (y(m),
                        L(m))) : u(i)
                    }(n);
                j.innerHTML = (0,
                s.default)(C.toString(), 2, "0")
            }
        }
        function n(t) {
            t.classList.remove(p)
        }
        function i(t) {
            t.classList.add(p)
        }
        function o(t) {
            t.classList.remove(m)
        }
        function r(t) {
            t.classList.add(m)
        }
        function u(t) {
            t.classList.remove(d)
        }
        function a(t) {
            t.classList.add(d)
        }
        function y(t) {
            t.classList.remove(f)
        }
        function w(t) {
            t.classList.add(f)
        }
        function b(t) {
            t.classList.remove(g)
        }
        function L(t) {
            t.classList.add(g)
        }
        function _(t, e) {
            return 1 == t ? e.parentNode.lastElementChild : e.previousElementSibling
        }
        function E(t, e) {
            return t == H ? e.parentNode.firstElementChild : e.nextElementSibling
        }
        function M(t) {
            O.style.transform = "translateZ(0) rotate(" + (Y + t) + "deg)",
            Y += t
        }
        var T = (0,
        c.default)("[" + l + "-slide]", t)
          , S = t.querySelector("[" + l + "-prev]")
          , x = t.querySelector("[" + l + "-next]")
          , O = t.querySelector("[" + l + "-divider]")
          , j = t.querySelector("[" + l + "-active-slide]")
          , k = t.querySelector("[" + l + "-total-slides]")
          , H = T.length
          , C = 1
          , Y = 0;
        !function() {
            k.innerHTML = (0,
            s.default)(H.toString(), 2, "0"),
            j.innerHTML = (0,
            s.default)(C.toString(), 2, "0");
            for (var t in T) {
                var e = T[t]
                  , n = e.parentNode.lastElementChild
                  , i = e.nextElementSibling;
                0 == t && (a(e),
                r(n),
                r(i)),
                H % 2 ? t % 2 ? e.classList.add(f) : t != H - 1 ? e.classList.add(g) : e.classList.add(f) : t % 2 ? e.classList.add(f) : e.classList.add(g)
            }
        }(),
        S.addEventListener("click", function() {
            i(S),
            C > 1 ? (M(-180),
            e(C - 1)) : (M(-180),
            e(H)),
            O.addEventListener("transitionend", function() {
                n(S)
            })
        }),
        x.addEventListener("click", function() {
            i(x),
            C < H ? (M(180),
            e(C + 1)) : (M(180),
            e((C + 1) % H)),
            O.addEventListener("transitionend", function() {
                n(x)
            })
        })
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = i
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ";
        return t.length >= e ? t : i(n + t, e, n)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = i
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        t.addEventListener("click", function(t) {
            (0,
            a.default)(t.target, "[data-modal-toggle]") && (d ? u() : r(e))
        })
    }
    function r(t) {
        var e = document.createElement("div");
        e.innerHTML = '<div class="content-black new-modal">\n\t\t<button class="new-modal__overlay" type="button" tabindex="-1" data-modal-toggle></button>\n\n\t\t<div class="new-modal__buttons">\n\t\t\t<button class="cta-button cta-button--clean" type="button" data-modal-toggle>Close</button>\n\t\t</div>\n\n\t\t<div class="container new-modal__container">\n\t\t\t<div class="new-modal__content">\n\t\t\t\t' + t.innerHTML + "\n\t\t\t</div>\n\t\t</div>\n\t</div>",
        d = e.firstChild,
        o(d, t),
        document.body.appendChild(d),
        setTimeout(function() {
            document.documentElement.classList.add(f)
        })
    }
    function u() {
        d && (document.body.removeChild(d),
        d = null,
        document.documentElement.classList.remove(f))
    }
    var s = n(1)
      , a = i(s)
      , c = n(0)
      , l = i(c)
      , d = null
      , f = "show-new-modal";
    (0,
    l.default)("[data-modal-container]", function(t) {
        var e = t.querySelector("[data-modal-template]");
        e && o(t, e)
    })
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        if (null == t)
            return null;
        var n = t.matches || t.msMatchesSelector;
        return n ? n.call(t, e) : null
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = i
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , o = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(i)
      , r = "data-newsletter";
    (0,
    o.default)("[" + r + "]", function(t) {
        var e = document.getElementsByTagName("head")[0]
          , n = document.createElement("script")
          , i = t.querySelector("[" + r + "-form]")
          , o = i.getAttribute("action")
          , u = i.querySelector("[" + r + "-email]")
          , s = i.querySelector("[" + r + "-label]")
          , a = s.getAttribute(r + "-error")
          , c = t.querySelector("[" + r + "-success]");
        i.addEventListener("submit", function(r) {
            r.preventDefault();
            var l = u.value;
            n.type = "text/javascript",
            n.src = o + "&c=document.MC_callback&EMAIL=" + l,
            e.appendChild(n),
            document.MC_callback = function(e) {
                if ("success" != e.result) {
                    var n = a;
                    e.msg && e.msg.indexOf("already subscribed") >= 0 && (n = "You're already subscribed to our insights."),
                    s.innerHTML = n
                } else
                    c.classList.add("newsletter__success--succeeded"),
                    t.removeChild(i)
            }
        })
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = function() {
        function t(t, e) {
            var n = []
              , i = !0
              , o = !1
              , r = void 0;
            try {
                for (var u, s = t[Symbol.iterator](); !(i = (u = s.next()).done) && (n.push(u.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                o = !0,
                r = t
            } finally {
                try {
                    !i && s.return && s.return()
                } finally {
                    if (o)
                        throw r
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , r = n(17)
      , u = i(r)
      , s = n(1)
      , a = i(s)
      , c = n(0)
      , l = i(c)
      , d = n(18)
      , f = i(d)
      , g = n(3)
      , m = i(g);
    (0,
    l.default)("[data-scroll]", function(t) {
        var e = t.getAttribute("data-scroll")
          , n = (e || "").split(",")
          , i = o(n, 2)
          , r = i[0]
          , s = i[1]
          , c = (r ? (0,
        a.default)(t, r) : null) || t;
        t.addEventListener("click", function() {
            var t = (0,
            f.default)(c)
              , e = "bottom" === s ? t.bottom : t.top
              , n = e - m.default.getHeight();
            u.default.toY(n)
        })
    })
}
, function(t, e, n) {
    var i, o, r;
    !function(n, u) {
        o = [],
        i = u(),
        void 0 !== (r = "function" == typeof i ? i.apply(e, o) : i) && (t.exports = r)
    }(0, function() {
        "use strict";
        var t = function(t) {
            return "getComputedStyle"in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"]
        };
        if ("undefined" == typeof window || !("document"in window))
            return {};
        var e = function(e, n, i) {
            n = n || 999,
            i || 0 === i || (i = 9);
            var o, r = function(t) {
                o = t
            }, u = function() {
                clearTimeout(o),
                r(0)
            }, s = function(t) {
                return Math.max(0, e.getTopOf(t) - i)
            }, a = function(i, o, s) {
                if (u(),
                0 === o || o && o < 0 || t(e.body))
                    e.toY(i),
                    s && s();
                else {
                    var a = e.getY()
                      , c = Math.max(0, i) - a
                      , l = (new Date).getTime();
                    o = o || Math.min(Math.abs(c), n),
                    function t() {
                        r(setTimeout(function() {
                            var n = Math.min(1, ((new Date).getTime() - l) / o)
                              , i = Math.max(0, Math.floor(a + c * (n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1)));
                            e.toY(i),
                            n < 1 && e.getHeight() + i < e.body.scrollHeight ? t() : (setTimeout(u, 99),
                            s && s())
                        }, 9))
                    }()
                }
            }, c = function(t, e, n) {
                a(s(t), e, n)
            }, l = function(t, n, o) {
                var r = t.getBoundingClientRect().height
                  , u = e.getTopOf(t) + r
                  , l = e.getHeight()
                  , d = e.getY()
                  , f = d + l;
                s(t) < d || r + i > l ? c(t, n, o) : u + i > f ? a(u - l + i, n, o) : o && o()
            }, d = function(t, n, i, o) {
                a(Math.max(0, e.getTopOf(t) - e.getHeight() / 2 + (i || t.getBoundingClientRect().height / 2)), n, o)
            };
            return {
                setup: function(t, e) {
                    return (0 === t || t) && (n = t),
                    (0 === e || e) && (i = e),
                    {
                        defaultDuration: n,
                        edgeOffset: i
                    }
                },
                to: c,
                toY: a,
                intoView: l,
                center: d,
                stop: u,
                moving: function() {
                    return !!o
                },
                getY: e.getY,
                getTopOf: e.getTopOf
            }
        }
          , n = document.documentElement
          , i = function() {
            return window.scrollY || n.scrollTop
        }
          , o = e({
            body: document.scrollingElement || document.body,
            toY: function(t) {
                window.scrollTo(0, t)
            },
            getY: i,
            getHeight: function() {
                return window.innerHeight || n.clientHeight
            },
            getTopOf: function(t) {
                return t.getBoundingClientRect().top + i() - n.offsetTop
            }
        });
        if (o.createScroller = function(t, i, o) {
            return e({
                body: t,
                toY: function(e) {
                    t.scrollTop = e
                },
                getY: function() {
                    return t.scrollTop
                },
                getHeight: function() {
                    return Math.min(t.clientHeight, window.innerHeight || n.clientHeight)
                },
                getTopOf: function(t) {
                    return t.offsetTop
                }
            }, i, o)
        }
        ,
        "addEventListener"in window && !window.noZensmooth && !t(document.body)) {
            var r = "scrollRestoration"in history;
            r && (history.scrollRestoration = "auto"),
            window.addEventListener("load", function() {
                r && (setTimeout(function() {
                    history.scrollRestoration = "manual"
                }, 9),
                window.addEventListener("popstate", function(t) {
                    t.state && "zenscrollY"in t.state && o.toY(t.state.zenscrollY)
                }, !1)),
                window.location.hash && setTimeout(function() {
                    var t = o.setup().edgeOffset;
                    if (t) {
                        var e = document.getElementById(window.location.href.split("#")[1]);
                        if (e) {
                            var n = Math.max(0, o.getTopOf(e) - t)
                              , i = o.getY() - n;
                            0 <= i && i < 9 && window.scrollTo(0, n)
                        }
                    }
                }, 9)
            }, !1);
            var u = new RegExp("(^|\\s)noZensmooth(\\s|$)");
            window.addEventListener("click", function(t) {
                for (var e = t.target; e && "A" !== e.tagName; )
                    e = e.parentNode;
                if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) {
                    if (r)
                        try {
                            history.replaceState({
                                zenscrollY: o.getY()
                            }, "")
                        } catch (t) {}
                    var n = e.getAttribute("href") || "";
                    if (0 === n.indexOf("#") && !u.test(e.className)) {
                        var i = 0
                          , s = document.getElementById(n.substring(1));
                        if ("#" !== n) {
                            if (!s)
                                return;
                            i = o.getTopOf(s)
                        }
                        t.preventDefault();
                        var a = function() {
                            window.location = n
                        }
                          , c = o.setup().edgeOffset;
                        c && (i = Math.max(0, i - c),
                        a = function() {
                            history.pushState(null, "", n)
                        }
                        ),
                        o.toY(i, null, a)
                    }
                }
            }, !1)
        }
        return o
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return window.pageYOffset + t
    }
    function o(t) {
        var e = t.getBoundingClientRect();
        return {
            top: i(e.top),
            right: i(e.right),
            bottom: i(e.bottom),
            left: i(e.left),
            width: e.width,
            height: e.height
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = o
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(0)
      , r = i(o)
      , u = n(3)
      , s = i(u);
    (0,
    r.default)("[data-site-header]", function(t) {
        s.default.register(t)
    })
}
, function(t, e, n) {
    "use strict";
    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = function() {
        function t(t, e) {
            var n = []
              , i = !0
              , o = !1
              , r = void 0;
            try {
                for (var u, s = t[Symbol.iterator](); !(i = (u = s.next()).done) && (n.push(u.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                o = !0,
                r = t
            } finally {
                try {
                    !i && s.return && s.return()
                } finally {
                    if (o)
                        throw r
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , r = n(1)
      , u = i(r)
      , s = n(0)
      , a = i(s);
    (0,
    a.default)("[data-toggle]", function(t) {
        var e = t.getAttribute("data-toggle")
          , n = (e || "").split(",")
          , i = o(n, 2)
          , r = i[0]
          , s = i[1]
          , a = (s ? (0,
        u.default)(t, s) : null) || t
          , c = r + "--in"
          , l = r + "--out";
        t.addEventListener("click", function() {
            var t = a.classList.contains(r);
            a.classList.toggle(r),
            a.classList.remove(t ? c : l),
            a.classList.add(t ? l : c)
        })
    })
}
]);
