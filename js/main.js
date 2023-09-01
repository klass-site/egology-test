/*! For license information please see main.js.LICENSE.txt */
!function () {
    var e = {
        2435: function (e, t, n) {
            var r, o, i;

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            i = function () {
                "use strict";

                function e(e, t) {
                    var n, r = Object.keys(e);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)), r
                }

                function t(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? e(Object(r), !0).forEach((function (e) {
                            var n, o;
                            n = t, e = r[o = e], o in n ? Object.defineProperty(n, o, {
                                value: e,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[o] = e
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }

                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    })(e)
                }

                function r() {
                    return (r = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n, r = arguments[t];
                            for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function o(e, t) {
                    if (null == e) return {};
                    var n, r = function (e, t) {
                        if (null == e) return {};
                        for (var n, r = {}, o = Object.keys(e), i = 0; i < o.length; i++) n = o[i], 0 <= t.indexOf(n) || (r[n] = e[n]);
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++) n = o[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r
                }

                function i(e) {
                    return function (e) {
                        if (Array.isArray(e)) return s(e)
                    }(e) || function (e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                        }
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function l(e) {
                    if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(e)
                }

                var c = l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), u = l(/Edge/i), d = l(/firefox/i),
                    p = l(/safari/i) && !l(/chrome/i) && !l(/android/i), f = l(/iP(ad|od|hone)/i),
                    h = l(/chrome/i) && l(/android/i), m = {capture: !1, passive: !1};

                function g(e, t, n) {
                    e.addEventListener(t, n, !c && m)
                }

                function v(e, t, n) {
                    e.removeEventListener(t, n, !c && m)
                }

                function y(e, t) {
                    if (t && (">" === t[0] && (t = t.substring(1)), e)) try {
                        if (e.matches) return e.matches(t);
                        if (e.msMatchesSelector) return e.msMatchesSelector(t);
                        if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
                    } catch (e) {
                        return
                    }
                }

                function b(e, t, n, r) {
                    if (e) {
                        n = n || document;
                        do {
                            if (null != t && (">" !== t[0] || e.parentNode === n) && y(e, t) || r && e === n) return e
                        } while (e !== n && (e = (o = e).host && o !== document && o.host.nodeType ? o.host : o.parentNode))
                    }
                    var o;
                    return null
                }

                var _, w = /\s+/g;

                function x(e, t, n) {
                    var r;
                    e && t && (e.classList ? e.classList[n ? "add" : "remove"](t) : (r = (" " + e.className + " ").replace(w, " ").replace(" " + t + " ", " "), e.className = (r + (n ? " " + t : "")).replace(w, " ")))
                }

                function E(e, t, n) {
                    var r = e && e.style;
                    if (r) {
                        if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
                        r[t = t in r || -1 !== t.indexOf("webkit") ? t : "-webkit-" + t] = n + ("string" == typeof n ? "" : "px")
                    }
                }

                function k(e, t) {
                    var n = "";
                    if ("string" == typeof e) n = e; else do {
                        var r = E(e, "transform")
                    } while (r && "none" !== r && (n = r + " " + n), !t && (e = e.parentNode));
                    var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
                    return o && new o(n)
                }

                function S(e, t, n) {
                    if (e) {
                        var r = e.getElementsByTagName(t), o = 0, i = r.length;
                        if (n) for (; o < i; o++) n(r[o], o);
                        return r
                    }
                    return []
                }

                function T() {
                    return document.scrollingElement || document.documentElement
                }

                function C(e, t, n, r, o) {
                    if (e.getBoundingClientRect || e === window) {
                        var i, a, s, l, u, d,
                            p = e !== window && e.parentNode && e !== T() ? (a = (i = e.getBoundingClientRect()).top, s = i.left, l = i.bottom, u = i.right, d = i.height, i.width) : (s = a = 0, l = window.innerHeight, u = window.innerWidth, d = window.innerHeight, window.innerWidth);
                        if ((t || n) && e !== window && (o = o || e.parentNode, !c)) do {
                            if (o && o.getBoundingClientRect && ("none" !== E(o, "transform") || n && "static" !== E(o, "position"))) {
                                var f = o.getBoundingClientRect();
                                a -= f.top + parseInt(E(o, "border-top-width")), s -= f.left + parseInt(E(o, "border-left-width")), l = a + i.height, u = s + i.width;
                                break
                            }
                        } while (o = o.parentNode);
                        return r && e !== window && (r = (t = k(o || e)) && t.a, e = t && t.d, t && (l = (a /= e) + (d /= e), u = (s /= r) + (p /= r))), {
                            top: a,
                            left: s,
                            bottom: l,
                            right: u,
                            width: p,
                            height: d
                        }
                    }
                }

                function A(e, t, n) {
                    for (var r = N(e, !0), o = C(e)[t]; r;) {
                        var i = C(r)[n];
                        if (!("top" === n || "left" === n ? i <= o : o <= i)) return r;
                        if (r === T()) break;
                        r = N(r, !1)
                    }
                    return !1
                }

                function O(e, t, n, r) {
                    for (var o = 0, i = 0, a = e.children; i < a.length;) {
                        if ("none" !== a[i].style.display && a[i] !== Re.ghost && (r || a[i] !== Re.dragged) && b(a[i], n.draggable, e, !1)) {
                            if (o === t) return a[i];
                            o++
                        }
                        i++
                    }
                    return null
                }

                function P(e, t) {
                    for (var n = e.lastElementChild; n && (n === Re.ghost || "none" === E(n, "display") || t && !y(n, t));) n = n.previousElementSibling;
                    return n || null
                }

                function M(e, t) {
                    var n = 0;
                    if (!e || !e.parentNode) return -1;
                    for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === Re.clone || t && !y(e, t) || n++;
                    return n
                }

                function D(e) {
                    var t = 0, n = 0, r = T();
                    if (e) do {
                        var o = (i = k(e)).a, i = i.d
                    } while (t += e.scrollLeft * o, n += e.scrollTop * i, e !== r && (e = e.parentNode));
                    return [t, n]
                }

                function N(e, t) {
                    if (!e || !e.getBoundingClientRect) return T();
                    var n = e, r = !1;
                    do {
                        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                            var o = E(n);
                            if (n.clientWidth < n.scrollWidth && ("auto" == o.overflowX || "scroll" == o.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == o.overflowY || "scroll" == o.overflowY)) {
                                if (!n.getBoundingClientRect || n === document.body) return T();
                                if (r || t) return n;
                                r = !0
                            }
                        }
                    } while (n = n.parentNode);
                    return T()
                }

                function I(e, t) {
                    return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
                }

                function L(e, t) {
                    return function () {
                        var n;
                        _ || (1 === (n = arguments).length ? e.call(this, n[0]) : e.apply(this, n), _ = setTimeout((function () {
                            _ = void 0
                        }), t))
                    }
                }

                function j(e, t, n) {
                    e.scrollLeft += t, e.scrollTop += n
                }

                function q(e) {
                    var t = window.Polymer, n = window.jQuery || window.Zepto;
                    return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
                }

                function R(e, t) {
                    E(e, "position", "absolute"), E(e, "top", t.top), E(e, "left", t.left), E(e, "width", t.width), E(e, "height", t.height)
                }

                function B(e) {
                    E(e, "position", ""), E(e, "top", ""), E(e, "left", ""), E(e, "width", ""), E(e, "height", "")
                }

                var z = "Sortable" + (new Date).getTime(), U = [], H = {initializeByDefault: !0}, F = {
                    mount: function (e) {
                        for (var t in H) !H.hasOwnProperty(t) || t in e || (e[t] = H[t]);
                        U.forEach((function (t) {
                            if (t.pluginName === e.pluginName) throw"Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
                        })), U.push(e)
                    }, pluginEvent: function (e, n, r) {
                        var o = this;
                        this.eventCanceled = !1, r.cancel = function () {
                            o.eventCanceled = !0
                        };
                        var i = e + "Global";
                        U.forEach((function (o) {
                            n[o.pluginName] && (n[o.pluginName][i] && n[o.pluginName][i](t({sortable: n}, r)), n.options[o.pluginName] && n[o.pluginName][e] && n[o.pluginName][e](t({sortable: n}, r)))
                        }))
                    }, initializePlugins: function (e, t, n, o) {
                        for (var i in U.forEach((function (o) {
                            var i = o.pluginName;
                            (e.options[i] || o.initializeByDefault) && ((o = new o(e, t, e.options)).sortable = e, o.options = e.options, e[i] = o, r(n, o.defaults))
                        })), e.options) {
                            var a;
                            e.options.hasOwnProperty(i) && void 0 !== (a = this.modifyOption(e, i, e.options[i])) && (e.options[i] = a)
                        }
                    }, getEventProperties: function (e, t) {
                        var n = {};
                        return U.forEach((function (o) {
                            "function" == typeof o.eventProperties && r(n, o.eventProperties.call(t[o.pluginName], e))
                        })), n
                    }, modifyOption: function (e, t, n) {
                        var r;
                        return U.forEach((function (o) {
                            e[o.pluginName] && o.optionListeners && "function" == typeof o.optionListeners[t] && (r = o.optionListeners[t].call(e[o.pluginName], n))
                        })), r
                    }
                };

                function V(e) {
                    var n = e.sortable, r = e.rootEl, o = e.name, i = e.targetEl, a = e.cloneEl, s = e.toEl,
                        l = e.fromEl, d = e.oldIndex, p = e.newIndex, f = e.oldDraggableIndex, h = e.newDraggableIndex,
                        m = e.originalEvent, g = e.putSortable, v = e.extraEventProperties;
                    if (n = n || r && r[z]) {
                        var y, b = n.options;
                        e = "on" + o.charAt(0).toUpperCase() + o.substr(1), !window.CustomEvent || c || u ? (y = document.createEvent("Event")).initEvent(o, !0, !0) : y = new CustomEvent(o, {
                            bubbles: !0,
                            cancelable: !0
                        }), y.to = s || r, y.from = l || r, y.item = i || r, y.clone = a, y.oldIndex = d, y.newIndex = p, y.oldDraggableIndex = f, y.newDraggableIndex = h, y.originalEvent = m, y.pullMode = g ? g.lastPutMode : void 0;
                        var _, w = t(t({}, v), F.getEventProperties(o, n));
                        for (_ in w) y[_] = w[_];
                        r && r.dispatchEvent(y), b[e] && b[e].call(n, y)
                    }
                }

                function Y(e, n) {
                    var r = (i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt, i = o(i, W);
                    F.pluginEvent.bind(Re)(e, n, t({
                        dragEl: X,
                        parentEl: K,
                        ghostEl: $,
                        rootEl: J,
                        nextEl: Q,
                        lastDownEl: Z,
                        cloneEl: ee,
                        cloneHidden: te,
                        dragStarted: he,
                        putSortable: se,
                        activeSortable: Re.active,
                        originalEvent: r,
                        oldIndex: ne,
                        oldDraggableIndex: oe,
                        newIndex: re,
                        newDraggableIndex: ie,
                        hideGhostForTarget: Ie,
                        unhideGhostForTarget: Le,
                        cloneNowHidden: function () {
                            te = !0
                        },
                        cloneNowShown: function () {
                            te = !1
                        },
                        dispatchSortableEvent: function (e) {
                            G({sortable: n, name: e, originalEvent: r})
                        }
                    }, i))
                }

                var W = ["evt"];

                function G(e) {
                    V(t({
                        putSortable: se,
                        cloneEl: ee,
                        targetEl: X,
                        rootEl: J,
                        oldIndex: ne,
                        oldDraggableIndex: oe,
                        newIndex: re,
                        newDraggableIndex: ie
                    }, e))
                }

                var X, K, $, J, Q, Z, ee, te, ne, re, oe, ie, ae, se, le, ce, ue, de, pe, fe, he, me, ge, ve, ye,
                    be = !1, _e = !1, we = [], xe = !1, Ee = !1, ke = [], Se = !1, Te = [],
                    Ce = "undefined" != typeof document, Ae = f, Oe = u || c ? "cssFloat" : "float",
                    Pe = Ce && !h && !f && "draggable" in document.createElement("div"), Me = function () {
                        if (Ce) {
                            if (c) return !1;
                            var e = document.createElement("x");
                            return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
                        }
                    }(), De = function (e, t) {
                        var n = E(e),
                            r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                            o = O(e, 0, t), i = O(e, 1, t), a = o && E(o), s = i && E(i),
                            l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + C(o).width;
                        return e = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(i).width, "flex" === n.display ? "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal" : "grid" === n.display ? n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal" : o && a.float && "none" !== a.float ? (t = "left" === a.float ? "left" : "right", !i || "both" !== s.clear && s.clear !== t ? "horizontal" : "vertical") : o && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || r <= l && "none" === n[Oe] || i && "none" === n[Oe] && r < l + e) ? "vertical" : "horizontal"
                    }, Ne = function (e) {
                        function t(e, n) {
                            return function (r, o, i, a) {
                                var s = r.options.group.name && o.options.group.name && r.options.group.name === o.options.group.name;
                                return !(null != e || !n && !s) || null != e && !1 !== e && (n && "clone" === e ? e : "function" == typeof e ? t(e(r, o, i, a), n)(r, o, i, a) : (o = (n ? r : o).options.group.name, !0 === e || "string" == typeof e && e === o || e.join && -1 < e.indexOf(o)))
                            }
                        }

                        var r = {}, o = e.group;
                        o && "object" == n(o) || (o = {name: o}), r.name = o.name, r.checkPull = t(o.pull, !0), r.checkPut = t(o.put), r.revertClone = o.revertClone, e.group = r
                    }, Ie = function () {
                        !Me && $ && E($, "display", "none")
                    }, Le = function () {
                        !Me && $ && E($, "display", "")
                    };

                function je(e) {
                    if (X) {
                        e = e.touches ? e.touches[0] : e;
                        var t = (o = e.clientX, i = e.clientY, we.some((function (e) {
                            if ((r = e[z].options.emptyInsertThreshold) && !P(e)) {
                                var t = C(e), n = o >= t.left - r && o <= t.right + r,
                                    r = i >= t.top - r && i <= t.bottom + r;
                                return n && r ? a = e : void 0
                            }
                        })), a);
                        if (t) {
                            var n, r = {};
                            for (n in e) e.hasOwnProperty(n) && (r[n] = e[n]);
                            r.target = r.rootEl = t, r.preventDefault = void 0, r.stopPropagation = void 0, t[z]._onDragOver(r)
                        }
                    }
                    var o, i, a
                }

                function qe(e) {
                    X && X.parentNode[z]._isOutsideThisEl(e.target)
                }

                function Re(e, n) {
                    if (!e || !e.nodeType || 1 !== e.nodeType) throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
                    this.el = e, this.options = n = r({}, n), e[z] = this;
                    var o, i, a = {
                        group: null,
                        sort: !0,
                        disabled: !1,
                        store: null,
                        handle: null,
                        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
                        swapThreshold: 1,
                        invertSwap: !1,
                        invertedSwapThreshold: null,
                        removeCloneOnHide: !0,
                        direction: function () {
                            return De(e, this.options)
                        },
                        ghostClass: "sortable-ghost",
                        chosenClass: "sortable-chosen",
                        dragClass: "sortable-drag",
                        ignore: "a, img",
                        filter: null,
                        preventOnFilter: !0,
                        animation: 0,
                        easing: null,
                        setData: function (e, t) {
                            e.setData("Text", t.textContent)
                        },
                        dropBubble: !1,
                        dragoverBubble: !1,
                        dataIdAttr: "data-id",
                        delay: 0,
                        delayOnTouchOnly: !1,
                        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
                        forceFallback: !1,
                        fallbackClass: "sortable-fallback",
                        fallbackOnBody: !1,
                        fallbackTolerance: 0,
                        fallbackOffset: {x: 0, y: 0},
                        supportPointer: !1 !== Re.supportPointer && "PointerEvent" in window && !p,
                        emptyInsertThreshold: 5
                    };
                    for (o in F.initializePlugins(this, e, a), a) o in n || (n[o] = a[o]);
                    for (i in Ne(n), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
                    this.nativeDraggable = !n.forceFallback && Pe, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? g(e, "pointerdown", this._onTapStart) : (g(e, "mousedown", this._onTapStart), g(e, "touchstart", this._onTapStart)), this.nativeDraggable && (g(e, "dragover", this), g(e, "dragenter", this)), we.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), r(this, function () {
                        var e, n = [];
                        return {
                            captureAnimationState: function () {
                                n = [], this.options.animation && [].slice.call(this.el.children).forEach((function (e) {
                                    var r, o;
                                    "none" !== E(e, "display") && e !== Re.ghost && (n.push({
                                        target: e,
                                        rect: C(e)
                                    }), r = t({}, n[n.length - 1].rect), !e.thisAnimationDuration || (o = k(e, !0)) && (r.top -= o.f, r.left -= o.e), e.fromRect = r)
                                }))
                            }, addAnimationState: function (e) {
                                n.push(e)
                            }, removeAnimationState: function (e) {
                                n.splice(function (e, t) {
                                    for (var n in e) if (e.hasOwnProperty(n)) for (var r in t) if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
                                    return -1
                                }(n, {target: e}), 1)
                            }, animateAll: function (t) {
                                var r = this;
                                if (!this.options.animation) return clearTimeout(e), void ("function" == typeof t && t());
                                var o = !1, i = 0;
                                n.forEach((function (e) {
                                    var t = 0, n = e.target, a = n.fromRect, s = C(n), l = n.prevFromRect,
                                        c = n.prevToRect, u = e.rect, d = k(n, !0);
                                    d && (s.top -= d.f, s.left -= d.e), n.toRect = s, n.thisAnimationDuration && I(l, s) && !I(a, s) && (u.top - s.top) / (u.left - s.left) == (a.top - s.top) / (a.left - s.left) && (e = u, d = l, l = c, c = r.options, t = Math.sqrt(Math.pow(d.top - e.top, 2) + Math.pow(d.left - e.left, 2)) / Math.sqrt(Math.pow(d.top - l.top, 2) + Math.pow(d.left - l.left, 2)) * c.animation), I(s, a) || (n.prevFromRect = a, n.prevToRect = s, t = t || r.options.animation, r.animate(n, u, s, t)), t && (o = !0, i = Math.max(i, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function () {
                                        n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                                    }), t), n.thisAnimationDuration = t)
                                })), clearTimeout(e), o ? e = setTimeout((function () {
                                    "function" == typeof t && t()
                                }), i) : "function" == typeof t && t(), n = []
                            }, animate: function (e, t, n, r) {
                                var o, i;
                                r && (E(e, "transition", ""), E(e, "transform", ""), o = (i = k(this.el)) && i.a, i = i && i.d, o = (t.left - n.left) / (o || 1), i = (t.top - n.top) / (i || 1), e.animatingX = !!o, e.animatingY = !!i, E(e, "transform", "translate3d(" + o + "px," + i + "px,0)"), this.forRepaintDummy = e.offsetWidth, E(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), E(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout((function () {
                                    E(e, "transition", ""), E(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
                                }), r))
                            }
                        }
                    }())
                }

                function Be(e, t, n, r, o, i, a, s) {
                    var l, d = e[z], p = d.options.onMove;
                    return !window.CustomEvent || c || u ? (l = document.createEvent("Event")).initEvent("move", !0, !0) : l = new CustomEvent("move", {
                        bubbles: !0,
                        cancelable: !0
                    }), l.to = t, l.from = e, l.dragged = n, l.draggedRect = r, l.related = o || t, l.relatedRect = i || C(t), l.willInsertAfter = s, l.originalEvent = a, e.dispatchEvent(l), p ? p.call(d, l, a) : undefined
                }

                function ze(e) {
                    e.draggable = !1
                }

                function Ue() {
                    Se = !1
                }

                function He(e) {
                    return setTimeout(e, 0)
                }

                function Fe(e) {
                    return clearTimeout(e)
                }

                Ce && document.addEventListener("click", (function (e) {
                    if (_e) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), _e = !1
                }), !0), Re.prototype = {
                    constructor: Re, _isOutsideThisEl: function (e) {
                        this.el.contains(e) || e === this.el || (me = null)
                    }, _getDirection: function (e, t) {
                        return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, X) : this.options.direction
                    }, _onTapStart: function (e) {
                        if (e.cancelable) {
                            var t = this, n = this.el, r = this.options, o = r.preventOnFilter, i = e.type,
                                a = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e,
                                s = (a || e).target,
                                l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s,
                                c = r.filter;
                            if (function (e) {
                                Te.length = 0;
                                for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
                                    var r = t[n];
                                    r.checked && Te.push(r)
                                }
                            }(n), !X && !(/mousedown|pointerdown/.test(i) && 0 !== e.button || r.disabled) && !l.isContentEditable && (this.nativeDraggable || !p || !s || "SELECT" !== s.tagName.toUpperCase()) && !((s = b(s, r.draggable, n, !1)) && s.animated || Z === s)) {
                                if (ne = M(s), oe = M(s, r.draggable), "function" == typeof c) {
                                    if (c.call(this, e, s, this)) return G({
                                        sortable: t,
                                        rootEl: l,
                                        name: "filter",
                                        targetEl: s,
                                        toEl: n,
                                        fromEl: n
                                    }), Y("filter", t, {evt: e}), void (o && e.cancelable && e.preventDefault())
                                } else if (c = c && c.split(",").some((function (r) {
                                    if (r = b(l, r.trim(), n, !1)) return G({
                                        sortable: t,
                                        rootEl: r,
                                        name: "filter",
                                        targetEl: s,
                                        fromEl: n,
                                        toEl: n
                                    }), Y("filter", t, {evt: e}), !0
                                }))) return void (o && e.cancelable && e.preventDefault());
                                r.handle && !b(l, r.handle, n, !1) || this._prepareDragStart(e, a, s)
                            }
                        }
                    }, _prepareDragStart: function (e, t, n) {
                        var r, o = this, i = o.el, a = o.options, s = i.ownerDocument;
                        n && !X && n.parentNode === i && (r = C(n), J = i, K = (X = n).parentNode, Q = X.nextSibling, Z = n, ae = a.group, le = {
                            target: Re.dragged = X,
                            clientX: (t || e).clientX,
                            clientY: (t || e).clientY
                        }, pe = le.clientX - r.left, fe = le.clientY - r.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, X.style["will-change"] = "all", r = function () {
                            Y("delayEnded", o, {evt: e}), Re.eventCanceled ? o._onDrop() : (o._disableDelayedDragEvents(), !d && o.nativeDraggable && (X.draggable = !0), o._triggerDragStart(e, t), G({
                                sortable: o,
                                name: "choose",
                                originalEvent: e
                            }), x(X, a.chosenClass, !0))
                        }, a.ignore.split(",").forEach((function (e) {
                            S(X, e.trim(), ze)
                        })), g(s, "dragover", je), g(s, "mousemove", je), g(s, "touchmove", je), g(s, "mouseup", o._onDrop), g(s, "touchend", o._onDrop), g(s, "touchcancel", o._onDrop), d && this.nativeDraggable && (this.options.touchStartThreshold = 4, X.draggable = !0), Y("delayStart", this, {evt: e}), !a.delay || a.delayOnTouchOnly && !t || this.nativeDraggable && (u || c) ? r() : Re.eventCanceled ? this._onDrop() : (g(s, "mouseup", o._disableDelayedDrag), g(s, "touchend", o._disableDelayedDrag), g(s, "touchcancel", o._disableDelayedDrag), g(s, "mousemove", o._delayedDragTouchMoveHandler), g(s, "touchmove", o._delayedDragTouchMoveHandler), a.supportPointer && g(s, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(r, a.delay)))
                    }, _delayedDragTouchMoveHandler: function (e) {
                        e = e.touches ? e.touches[0] : e, Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
                    }, _disableDelayedDrag: function () {
                        X && ze(X), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
                    }, _disableDelayedDragEvents: function () {
                        var e = this.el.ownerDocument;
                        v(e, "mouseup", this._disableDelayedDrag), v(e, "touchend", this._disableDelayedDrag), v(e, "touchcancel", this._disableDelayedDrag), v(e, "mousemove", this._delayedDragTouchMoveHandler), v(e, "touchmove", this._delayedDragTouchMoveHandler), v(e, "pointermove", this._delayedDragTouchMoveHandler)
                    }, _triggerDragStart: function (e, t) {
                        t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? g(document, "pointermove", this._onTouchMove) : g(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (g(X, "dragend", this), g(J, "dragstart", this._onDragStart));
                        try {
                            document.selection ? He((function () {
                                document.selection.empty()
                            })) : window.getSelection().removeAllRanges()
                        } catch (e) {
                        }
                    }, _dragStarted: function (e, t) {
                        var n;
                        be = !1, J && X ? (Y("dragStarted", this, {evt: t}), this.nativeDraggable && g(document, "dragover", qe), n = this.options, e || x(X, n.dragClass, !1), x(X, n.ghostClass, !0), Re.active = this, e && this._appendGhost(), G({
                            sortable: this,
                            name: "start",
                            originalEvent: t
                        })) : this._nulling()
                    }, _emulateDragOver: function () {
                        if (ce) {
                            this._lastX = ce.clientX, this._lastY = ce.clientY, Ie();
                            for (var e = document.elementFromPoint(ce.clientX, ce.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ce.clientX, ce.clientY)) !== t;) t = e;
                            if (X.parentNode[z]._isOutsideThisEl(e), t) do {
                                if (t[z] && t[z]._onDragOver({
                                    clientX: ce.clientX,
                                    clientY: ce.clientY,
                                    target: e,
                                    rootEl: t
                                }) && !this.options.dragoverBubble) break
                            } while (t = (e = t).parentNode);
                            Le()
                        }
                    }, _onTouchMove: function (e) {
                        if (le) {
                            var t = (s = this.options).fallbackTolerance, n = s.fallbackOffset,
                                r = e.touches ? e.touches[0] : e, o = $ && k($, !0), i = $ && o && o.a,
                                a = $ && o && o.d, s = Ae && ye && D(ye);
                            if (i = (r.clientX - le.clientX + n.x) / (i || 1) + (s ? s[0] - ke[0] : 0) / (i || 1), a = (r.clientY - le.clientY + n.y) / (a || 1) + (s ? s[1] - ke[1] : 0) / (a || 1), !Re.active && !be) {
                                if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t) return;
                                this._onDragStart(e, !0)
                            }
                            $ && (o ? (o.e += i - (ue || 0), o.f += a - (de || 0)) : o = {
                                a: 1,
                                b: 0,
                                c: 0,
                                d: 1,
                                e: i,
                                f: a
                            }, o = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")"), E($, "webkitTransform", o), E($, "mozTransform", o), E($, "msTransform", o), E($, "transform", o), ue = i, de = a, ce = r), e.cancelable && e.preventDefault()
                        }
                    }, _appendGhost: function () {
                        if (!$) {
                            var e = this.options.fallbackOnBody ? document.body : J, t = C(X, !0, Ae, !0, e),
                                n = this.options;
                            if (Ae) {
                                for (ye = e; "static" === E(ye, "position") && "none" === E(ye, "transform") && ye !== document;) ye = ye.parentNode;
                                ye !== document.body && ye !== document.documentElement ? (ye === document && (ye = T()), t.top += ye.scrollTop, t.left += ye.scrollLeft) : ye = T(), ke = D(ye)
                            }
                            x($ = X.cloneNode(!0), n.ghostClass, !1), x($, n.fallbackClass, !0), x($, n.dragClass, !0), E($, "transition", ""), E($, "transform", ""), E($, "box-sizing", "border-box"), E($, "margin", 0), E($, "top", t.top), E($, "left", t.left), E($, "width", t.width), E($, "height", t.height), E($, "opacity", "0.8"), E($, "position", Ae ? "absolute" : "fixed"), E($, "zIndex", "100000"), E($, "pointerEvents", "none"), Re.ghost = $, e.appendChild($), E($, "transform-origin", pe / parseInt($.style.width) * 100 + "% " + fe / parseInt($.style.height) * 100 + "%")
                        }
                    }, _onDragStart: function (e, t) {
                        var n = this, r = e.dataTransfer, o = n.options;
                        Y("dragStart", this, {evt: e}), Re.eventCanceled ? this._onDrop() : (Y("setupClone", this), Re.eventCanceled || ((ee = q(X)).draggable = !1, ee.style["will-change"] = "", this._hideClone(), x(ee, this.options.chosenClass, !1), Re.clone = ee), n.cloneId = He((function () {
                            Y("clone", n), Re.eventCanceled || (n.options.removeCloneOnHide || J.insertBefore(ee, X), n._hideClone(), G({
                                sortable: n,
                                name: "clone"
                            }))
                        })), t || x(X, o.dragClass, !0), t ? (_e = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (v(document, "mouseup", n._onDrop), v(document, "touchend", n._onDrop), v(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", o.setData && o.setData.call(n, r, X)), g(document, "drop", n), E(X, "transform", "translateZ(0)")), be = !0, n._dragStartId = He(n._dragStarted.bind(n, t, e)), g(document, "selectstart", n), he = !0, p && E(document.body, "user-select", "none"))
                    }, _onDragOver: function (e) {
                        var n, r, o, i, a = this.el, s = e.target, l = this.options, c = l.group, u = Re.active,
                            d = ae === c, p = l.sort, f = se || u, h = this, m = !1;
                        if (!Se) {
                            if (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(), s = b(s, l.draggable, a, !0), L("dragOver"), Re.eventCanceled) return m;
                            if (X.contains(e.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s) return R(!1);
                            if (_e = !1, u && !l.disabled && (d ? p || (r = K !== J) : se === this || (this.lastPutMode = ae.checkPull(this, u, X, e)) && c.checkPut(this, u, X, e))) {
                                if (o = "vertical" === this._getDirection(e, s), n = C(X), L("dragOverValid"), Re.eventCanceled) return m;
                                if (r) return K = J, q(), this._hideClone(), L("revert"), Re.eventCanceled || (Q ? J.insertBefore(X, Q) : J.appendChild(X)), R(!0);
                                if (!(_ = P(a, l.draggable)) || function (e, t, n) {
                                    return n = C(P(n.el, n.options.draggable)), t ? e.clientX > n.right + 10 || e.clientX <= n.right && e.clientY > n.bottom && e.clientX >= n.left : e.clientX > n.right && e.clientY > n.top || e.clientX <= n.right && e.clientY > n.bottom + 10
                                }(e, o, this) && !_.animated) {
                                    if (_ === X) return R(!1);
                                    if ((s = _ && a === e.target ? _ : s) && (w = C(s)), !1 !== Be(J, a, X, n, s, w, e, !!s)) return q(), a.appendChild(X), K = a, B(), R(!0)
                                } else if (_ && function (e, t, n) {
                                    return n = C(O(n.el, 0, n.options, !0)), t ? e.clientX < n.left - 10 || e.clientY < n.top && e.clientX < n.right : e.clientY < n.top - 10 || e.clientY < n.bottom && e.clientX < n.left
                                }(e, o, this)) {
                                    if ((D = O(a, 0, l, !0)) === X) return R(!1);
                                    if (w = C(s = D), !1 !== Be(J, a, X, n, s, w, e, !1)) return q(), a.insertBefore(X, D), K = a, B(), R(!0)
                                } else if (s.parentNode === a) {
                                    var g, v, y, _, w = C(s), k = X.parentNode !== a,
                                        S = (S = X.animated && X.toRect || n, I = s.animated && s.toRect || w, T = (i = o) ? S.left : S.top, c = i ? S.right : S.bottom, _ = i ? S.width : S.height, D = i ? I.left : I.top, S = i ? I.right : I.bottom, I = i ? I.width : I.height, !(T === D || c === S || T + _ / 2 === D + I / 2)),
                                        T = o ? "top" : "left",
                                        D = (_ = A(s, "top", "top") || A(X, "top", "top")) ? _.scrollTop : void 0;
                                    if (me !== s && (v = w[T], xe = !1, Ee = !S && l.invertSwap || k), 0 !== (g = function (e, t, n, r, o, i, a, s) {
                                        var l = r ? e.clientY : e.clientX, c = r ? n.height : n.width;
                                        if (e = r ? n.top : n.left, r = r ? n.bottom : n.right, n = !1, !a) if (s && ve < c * o) {
                                            if (xe = !xe && (1 === ge ? e + c * i / 2 < l : l < r - c * i / 2) || xe) n = !0; else if (1 === ge ? l < e + ve : r - ve < l) return -ge
                                        } else if (e + c * (1 - o) / 2 < l && l < r - c * (1 - o) / 2) return function (e) {
                                            return M(X) < M(e) ? 1 : -1
                                        }(t);
                                        return (n = n || a) && (l < e + c * i / 2 || r - c * i / 2 < l) ? e + c / 2 < l ? 1 : -1 : 0
                                    }(e, s, w, o, S ? 1 : l.swapThreshold, null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold, Ee, me === s))) for (var N = M(X); (y = K.children[N -= g]) && ("none" === E(y, "display") || y === $);) ;
                                    if (0 === g || y === s) return R(!1);
                                    ge = g;
                                    var I = (me = s).nextElementSibling;
                                    if (k = !1, !1 !== (S = Be(J, a, X, n, s, w, e, k = 1 === g))) return 1 !== S && -1 !== S || (k = 1 === S), Se = !0, setTimeout(Ue, 30), q(), k && !I ? a.appendChild(X) : s.parentNode.insertBefore(X, k ? I : s), _ && j(_, 0, D - _.scrollTop), K = X.parentNode, void 0 === v || Ee || (ve = Math.abs(v - C(s)[T])), B(), R(!0)
                                }
                                if (a.contains(X)) return R(!1)
                            }
                            return !1
                        }

                        function L(i, l) {
                            Y(i, h, t({
                                evt: e,
                                isOwner: d,
                                axis: o ? "vertical" : "horizontal",
                                revert: r,
                                dragRect: n,
                                targetRect: w,
                                canSort: p,
                                fromSortable: f,
                                target: s,
                                completed: R,
                                onMove: function (t, r) {
                                    return Be(J, a, X, n, t, C(t), e, r)
                                },
                                changed: B
                            }, l))
                        }

                        function q() {
                            L("dragOverAnimationCapture"), h.captureAnimationState(), h !== f && f.captureAnimationState()
                        }

                        function R(t) {
                            return L("dragOverCompleted", {insertion: t}), t && (d ? u._hideClone() : u._showClone(h), h !== f && (x(X, (se || u).options.ghostClass, !1), x(X, l.ghostClass, !0)), se !== h && h !== Re.active ? se = h : h === Re.active && se && (se = null), f === h && (h._ignoreWhileAnimating = s), h.animateAll((function () {
                                L("dragOverAnimationComplete"), h._ignoreWhileAnimating = null
                            })), h !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (s === X && !X.animated || s === a && !s.animated) && (me = null), l.dragoverBubble || e.rootEl || s === document || (X.parentNode[z]._isOutsideThisEl(e.target), t || je(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0
                        }

                        function B() {
                            re = M(X), ie = M(X, l.draggable), G({
                                sortable: h,
                                name: "change",
                                toEl: a,
                                newIndex: re,
                                newDraggableIndex: ie,
                                originalEvent: e
                            })
                        }
                    }, _ignoreWhileAnimating: null, _offMoveEvents: function () {
                        v(document, "mousemove", this._onTouchMove), v(document, "touchmove", this._onTouchMove), v(document, "pointermove", this._onTouchMove), v(document, "dragover", je), v(document, "mousemove", je), v(document, "touchmove", je)
                    }, _offUpEvents: function () {
                        var e = this.el.ownerDocument;
                        v(e, "mouseup", this._onDrop), v(e, "touchend", this._onDrop), v(e, "pointerup", this._onDrop), v(e, "touchcancel", this._onDrop), v(document, "selectstart", this)
                    }, _onDrop: function (e) {
                        var t = this.el, n = this.options;
                        re = M(X), ie = M(X, n.draggable), Y("drop", this, {evt: e}), K = X && X.parentNode, re = M(X), ie = M(X, n.draggable), Re.eventCanceled || (xe = Ee = be = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Fe(this.cloneId), Fe(this._dragStartId), this.nativeDraggable && (v(document, "drop", this), v(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), p && E(document.body, "user-select", ""), E(X, "transform", ""), e && (he && (e.cancelable && e.preventDefault(), n.dropBubble || e.stopPropagation()), $ && $.parentNode && $.parentNode.removeChild($), (J === K || se && "clone" !== se.lastPutMode) && ee && ee.parentNode && ee.parentNode.removeChild(ee), X && (this.nativeDraggable && v(X, "dragend", this), ze(X), X.style["will-change"] = "", he && !be && x(X, (se || this).options.ghostClass, !1), x(X, this.options.chosenClass, !1), G({
                            sortable: this,
                            name: "unchoose",
                            toEl: K,
                            newIndex: null,
                            newDraggableIndex: null,
                            originalEvent: e
                        }), J !== K ? (0 <= re && (G({
                            rootEl: K,
                            name: "add",
                            toEl: K,
                            fromEl: J,
                            originalEvent: e
                        }), G({sortable: this, name: "remove", toEl: K, originalEvent: e}), G({
                            rootEl: K,
                            name: "sort",
                            toEl: K,
                            fromEl: J,
                            originalEvent: e
                        }), G({
                            sortable: this,
                            name: "sort",
                            toEl: K,
                            originalEvent: e
                        })), se && se.save()) : re !== ne && 0 <= re && (G({
                            sortable: this,
                            name: "update",
                            toEl: K,
                            originalEvent: e
                        }), G({
                            sortable: this,
                            name: "sort",
                            toEl: K,
                            originalEvent: e
                        })), Re.active && (null != re && -1 !== re || (re = ne, ie = oe), G({
                            sortable: this,
                            name: "end",
                            toEl: K,
                            originalEvent: e
                        }), this.save())))), this._nulling()
                    }, _nulling: function () {
                        Y("nulling", this), J = X = K = $ = Q = ee = Z = te = le = ce = he = re = ie = ne = oe = me = ge = se = ae = Re.dragged = Re.ghost = Re.clone = Re.active = null, Te.forEach((function (e) {
                            e.checked = !0
                        })), Te.length = ue = de = 0
                    }, handleEvent: function (e) {
                        switch (e.type) {
                            case"drop":
                            case"dragend":
                                this._onDrop(e);
                                break;
                            case"dragenter":
                            case"dragover":
                                X && (this._onDragOver(e), function (e) {
                                    e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault()
                                }(e));
                                break;
                            case"selectstart":
                                e.preventDefault()
                        }
                    }, toArray: function () {
                        for (var e, t = [], n = this.el.children, r = 0, o = n.length, i = this.options; r < o; r++) b(e = n[r], i.draggable, this.el, !1) && t.push(e.getAttribute(i.dataIdAttr) || function (e) {
                            for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
                            return r.toString(36)
                        }(e));
                        return t
                    }, sort: function (e, t) {
                        var n = {}, r = this.el;
                        this.toArray().forEach((function (e, t) {
                            b(t = r.children[t], this.options.draggable, r, !1) && (n[e] = t)
                        }), this), t && this.captureAnimationState(), e.forEach((function (e) {
                            n[e] && (r.removeChild(n[e]), r.appendChild(n[e]))
                        })), t && this.animateAll()
                    }, save: function () {
                        var e = this.options.store;
                        e && e.set && e.set(this)
                    }, closest: function (e, t) {
                        return b(e, t || this.options.draggable, this.el, !1)
                    }, option: function (e, t) {
                        var n = this.options;
                        if (void 0 === t) return n[e];
                        var r = F.modifyOption(this, e, t);
                        n[e] = void 0 !== r ? r : t, "group" === e && Ne(n)
                    }, destroy: function () {
                        Y("destroy", this);
                        var e = this.el;
                        e[z] = null, v(e, "mousedown", this._onTapStart), v(e, "touchstart", this._onTapStart), v(e, "pointerdown", this._onTapStart), this.nativeDraggable && (v(e, "dragover", this), v(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), (function (e) {
                            e.removeAttribute("draggable")
                        })), this._onDrop(), this._disableDelayedDragEvents(), we.splice(we.indexOf(this.el), 1), this.el = e = null
                    }, _hideClone: function () {
                        te || (Y("hideClone", this), Re.eventCanceled || (E(ee, "display", "none"), this.options.removeCloneOnHide && ee.parentNode && ee.parentNode.removeChild(ee), te = !0))
                    }, _showClone: function (e) {
                        "clone" === e.lastPutMode ? te && (Y("showClone", this), Re.eventCanceled || (X.parentNode != J || this.options.group.revertClone ? Q ? J.insertBefore(ee, Q) : J.appendChild(ee) : J.insertBefore(ee, X), this.options.group.revertClone && this.animate(X, ee), E(ee, "display", ""), te = !1)) : this._hideClone()
                    }
                }, Ce && g(document, "touchmove", (function (e) {
                    (Re.active || be) && e.cancelable && e.preventDefault()
                })), Re.utils = {
                    on: g,
                    off: v,
                    css: E,
                    find: S,
                    is: function (e, t) {
                        return !!b(e, t, e, !1)
                    },
                    extend: function (e, t) {
                        if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    },
                    throttle: L,
                    closest: b,
                    toggleClass: x,
                    clone: q,
                    index: M,
                    nextTick: He,
                    cancelNextTick: Fe,
                    detectDirection: De,
                    getChild: O
                }, Re.get = function (e) {
                    return e[z]
                }, Re.mount = function () {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    (n = n[0].constructor === Array ? n[0] : n).forEach((function (e) {
                        if (!e.prototype || !e.prototype.constructor) throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
                        e.utils && (Re.utils = t(t({}, Re.utils), e.utils)), F.mount(e)
                    }))
                }, Re.create = function (e, t) {
                    return new Re(e, t)
                };
                var Ve, Ye, We, Ge, Xe, Ke, $e = [], Je = !(Re.version = "1.14.0");

                function Qe() {
                    $e.forEach((function (e) {
                        clearInterval(e.pid)
                    })), $e = []
                }

                function Ze() {
                    clearInterval(Ke)
                }

                var et, tt = L((function (e, t, n, r) {
                    if (t.scroll) {
                        var o, i = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY,
                            s = t.scrollSensitivity, l = t.scrollSpeed, c = T(), u = !1;
                        Ye !== n && (Ye = n, Qe(), Ve = t.scroll, o = t.scrollFn, !0 === Ve && (Ve = N(n, !0)));
                        var d = 0, p = Ve;
                        do {
                            var f = p, h = (A = C(f)).top, m = A.bottom, g = A.left, v = A.right, y = A.width,
                                b = A.height, _ = void 0, w = f.scrollWidth, x = f.scrollHeight, k = E(f),
                                S = f.scrollLeft, A = f.scrollTop,
                                O = f === c ? (_ = y < w && ("auto" === k.overflowX || "scroll" === k.overflowX || "visible" === k.overflowX), b < x && ("auto" === k.overflowY || "scroll" === k.overflowY || "visible" === k.overflowY)) : (_ = y < w && ("auto" === k.overflowX || "scroll" === k.overflowX), b < x && ("auto" === k.overflowY || "scroll" === k.overflowY));
                            if (S = _ && (Math.abs(v - i) <= s && S + y < w) - (Math.abs(g - i) <= s && !!S), A = O && (Math.abs(m - a) <= s && A + b < x) - (Math.abs(h - a) <= s && !!A), !$e[d]) for (var P = 0; P <= d; P++) $e[P] || ($e[P] = {});
                            $e[d].vx == S && $e[d].vy == A && $e[d].el === f || ($e[d].el = f, $e[d].vx = S, $e[d].vy = A, clearInterval($e[d].pid), 0 == S && 0 == A || (u = !0, $e[d].pid = setInterval(function () {
                                r && 0 === this.layer && Re.active._onTouchMove(Xe);
                                var t = $e[this.layer].vy ? $e[this.layer].vy * l : 0,
                                    n = $e[this.layer].vx ? $e[this.layer].vx * l : 0;
                                "function" == typeof o && "continue" !== o.call(Re.dragged.parentNode[z], n, t, e, Xe, $e[this.layer].el) || j($e[this.layer].el, n, t)
                            }.bind({layer: d}), 24))), d++
                        } while (t.bubbleScroll && p !== c && (p = N(p, !1)));
                        Je = u
                    }
                }), 30);

                function nt() {
                }

                function rt() {
                }

                f = function (e) {
                    var t = e.originalEvent, n = e.putSortable, r = e.dragEl, o = e.activeSortable,
                        i = e.dispatchSortableEvent, a = e.hideGhostForTarget;
                    e = e.unhideGhostForTarget, t && (o = n || o, a(), t = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t = document.elementFromPoint(t.clientX, t.clientY), e(), o && !o.el.contains(t) && (i("spill"), this.onSpill({
                        dragEl: r,
                        putSortable: n
                    })))
                }, nt.prototype = {
                    startIndex: null, dragStart: function (e) {
                        e = e.oldDraggableIndex, this.startIndex = e
                    }, onSpill: function (e) {
                        var t = e.dragEl, n = e.putSortable;
                        this.sortable.captureAnimationState(), n && n.captureAnimationState(), (e = O(this.sortable.el, this.startIndex, this.options)) ? this.sortable.el.insertBefore(t, e) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
                    }, drop: f
                }, r(nt, {pluginName: "revertOnSpill"}), rt.prototype = {
                    onSpill: function (e) {
                        var t = e.dragEl;
                        (e = e.putSortable || this.sortable).captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), e.animateAll()
                    }, drop: f
                }, r(rt, {pluginName: "removeOnSpill"});
                var ot, it, at, st, lt, ct = [], ut = [], dt = !1, pt = !1, ft = !1;

                function ht(e, t) {
                    ut.forEach((function (n, r) {
                        (r = t.children[n.sortableIndex + (e ? Number(r) : 0)]) ? t.insertBefore(n, r) : t.appendChild(n)
                    }))
                }

                function mt() {
                    ct.forEach((function (e) {
                        e !== at && e.parentNode && e.parentNode.removeChild(e)
                    }))
                }

                return Re.mount(new function () {
                    function e() {
                        for (var e in this.defaults = {
                            scroll: !0,
                            forceAutoScrollFallback: !1,
                            scrollSensitivity: 30,
                            scrollSpeed: 10,
                            bubbleScroll: !0
                        }, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
                    }

                    return e.prototype = {
                        dragStarted: function (e) {
                            e = e.originalEvent, this.sortable.nativeDraggable ? g(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? g(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? g(document, "touchmove", this._handleFallbackAutoScroll) : g(document, "mousemove", this._handleFallbackAutoScroll)
                        }, dragOverCompleted: function (e) {
                            e = e.originalEvent, this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
                        }, drop: function () {
                            this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : (v(document, "pointermove", this._handleFallbackAutoScroll), v(document, "touchmove", this._handleFallbackAutoScroll), v(document, "mousemove", this._handleFallbackAutoScroll)), Ze(), Qe(), clearTimeout(_), _ = void 0
                        }, nulling: function () {
                            Xe = Ye = Ve = Je = Ke = We = Ge = null, $e.length = 0
                        }, _handleFallbackAutoScroll: function (e) {
                            this._handleAutoScroll(e, !0)
                        }, _handleAutoScroll: function (e, t) {
                            var n, r = this, o = (e.touches ? e.touches[0] : e).clientX,
                                i = (e.touches ? e.touches[0] : e).clientY, a = document.elementFromPoint(o, i);
                            Xe = e, t || this.options.forceAutoScrollFallback || u || c || p ? (tt(e, this.options, a, t), n = N(a, !0), !Je || Ke && o === We && i === Ge || (Ke && Ze(), Ke = setInterval((function () {
                                var a = N(document.elementFromPoint(o, i), !0);
                                a !== n && (n = a, Qe()), tt(e, r.options, a, t)
                            }), 10), We = o, Ge = i)) : this.options.bubbleScroll && N(a, !0) !== T() ? tt(e, this.options, N(a, !1), !1) : Qe()
                        }
                    }, r(e, {pluginName: "scroll", initializeByDefault: !0})
                }), Re.mount(rt, nt), Re.mount(new function () {
                    function e() {
                        this.defaults = {swapClass: "sortable-swap-highlight"}
                    }

                    return e.prototype = {
                        dragStart: function (e) {
                            e = e.dragEl, et = e
                        }, dragOverValid: function (e) {
                            var t = e.completed, n = e.target, r = e.onMove, o = e.activeSortable, i = e.changed,
                                a = e.cancel;
                            o.options.swap && (e = this.sortable.el, o = this.options, n && n !== e && (e = et, et = !1 !== r(n) ? (x(n, o.swapClass, !0), n) : null, e && e !== et && x(e, o.swapClass, !1)), i(), t(!0), a())
                        }, drop: function (e) {
                            var t, n, r = e.activeSortable, o = e.putSortable, i = e.dragEl, a = o || this.sortable,
                                s = this.options;
                            et && x(et, s.swapClass, !1), et && (s.swap || o && o.options.swap) && i !== et && (a.captureAnimationState(), a !== r && r.captureAnimationState(), n = et, e = (t = i).parentNode, s = n.parentNode, e && s && !e.isEqualNode(n) && !s.isEqualNode(t) && (o = M(t), i = M(n), e.isEqualNode(s) && o < i && i++, e.insertBefore(n, e.children[o]), s.insertBefore(t, s.children[i])), a.animateAll(), a !== r && r.animateAll())
                        }, nulling: function () {
                            et = null
                        }
                    }, r(e, {
                        pluginName: "swap", eventProperties: function () {
                            return {swapItem: et}
                        }
                    })
                }), Re.mount(new function () {
                    function e(e) {
                        for (var t in this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
                        e.options.supportPointer ? g(document, "pointerup", this._deselectMultiDrag) : (g(document, "mouseup", this._deselectMultiDrag), g(document, "touchend", this._deselectMultiDrag)), g(document, "keydown", this._checkKeyDown), g(document, "keyup", this._checkKeyUp), this.defaults = {
                            selectedClass: "sortable-selected",
                            multiDragKey: null,
                            setData: function (t, n) {
                                var r = "";
                                ct.length && it === e ? ct.forEach((function (e, t) {
                                    r += (t ? ", " : "") + e.textContent
                                })) : r = n.textContent, t.setData("Text", r)
                            }
                        }
                    }

                    return e.prototype = {
                        multiDragKeyDown: !1, isMultiDrag: !1, delayStartGlobal: function (e) {
                            e = e.dragEl, at = e
                        }, delayEnded: function () {
                            this.isMultiDrag = ~ct.indexOf(at)
                        }, setupClone: function (e) {
                            var t = e.sortable;
                            if (e = e.cancel, this.isMultiDrag) {
                                for (var n = 0; n < ct.length; n++) ut.push(q(ct[n])), ut[n].sortableIndex = ct[n].sortableIndex, ut[n].draggable = !1, ut[n].style["will-change"] = "", x(ut[n], this.options.selectedClass, !1), ct[n] === at && x(ut[n], this.options.chosenClass, !1);
                                t._hideClone(), e()
                            }
                        }, clone: function (e) {
                            var t = e.sortable, n = e.rootEl, r = e.dispatchSortableEvent;
                            e = e.cancel, this.isMultiDrag && (this.options.removeCloneOnHide || ct.length && it === t && (ht(!0, n), r("clone"), e()))
                        }, showClone: function (e) {
                            var t = e.cloneNowShown, n = e.rootEl;
                            e = e.cancel, this.isMultiDrag && (ht(!1, n), ut.forEach((function (e) {
                                E(e, "display", "")
                            })), t(), lt = !1, e())
                        }, hideClone: function (e) {
                            var t = this, n = (e.sortable, e.cloneNowHidden);
                            e = e.cancel, this.isMultiDrag && (ut.forEach((function (e) {
                                E(e, "display", "none"), t.options.removeCloneOnHide && e.parentNode && e.parentNode.removeChild(e)
                            })), n(), lt = !0, e())
                        }, dragStartGlobal: function (e) {
                            e.sortable, !this.isMultiDrag && it && it.multiDrag._deselectMultiDrag(), ct.forEach((function (e) {
                                e.sortableIndex = M(e)
                            })), ct = ct.sort((function (e, t) {
                                return e.sortableIndex - t.sortableIndex
                            })), ft = !0
                        }, dragStarted: function (e) {
                            var t, n = this;
                            e = e.sortable, this.isMultiDrag && (this.options.sort && (e.captureAnimationState(), this.options.animation && (ct.forEach((function (e) {
                                e !== at && E(e, "position", "absolute")
                            })), t = C(at, !1, !0, !0), ct.forEach((function (e) {
                                e !== at && R(e, t)
                            })), dt = pt = !0)), e.animateAll((function () {
                                dt = pt = !1, n.options.animation && ct.forEach((function (e) {
                                    B(e)
                                })), n.options.sort && mt()
                            })))
                        }, dragOver: function (e) {
                            var t = e.target, n = e.completed;
                            e = e.cancel, pt && ~ct.indexOf(t) && (n(!1), e())
                        }, revert: function (e) {
                            var t, n, r = e.fromSortable, o = e.rootEl, i = e.sortable, a = e.dragRect;
                            1 < ct.length && (ct.forEach((function (e) {
                                i.addAnimationState({
                                    target: e,
                                    rect: pt ? C(e) : a
                                }), B(e), e.fromRect = a, r.removeAnimationState(e)
                            })), pt = !1, t = !this.options.removeCloneOnHide, n = o, ct.forEach((function (e, r) {
                                (r = n.children[e.sortableIndex + (t ? Number(r) : 0)]) ? n.insertBefore(e, r) : n.appendChild(e)
                            })))
                        }, dragOverCompleted: function (e) {
                            var t, n = e.sortable, r = e.isOwner, o = e.insertion, i = e.activeSortable, a = e.parentEl,
                                s = e.putSortable;
                            e = this.options, o && (r && i._hideClone(), dt = !1, e.animation && 1 < ct.length && (pt || !r && !i.options.sort && !s) && (t = C(at, !1, !0, !0), ct.forEach((function (e) {
                                e !== at && (R(e, t), a.appendChild(e))
                            })), pt = !0), r || (pt || mt(), 1 < ct.length ? (r = lt, i._showClone(n), i.options.animation && !lt && r && ut.forEach((function (e) {
                                i.addAnimationState({
                                    target: e,
                                    rect: st
                                }), e.fromRect = st, e.thisAnimationDuration = null
                            }))) : i._showClone(n)))
                        }, dragOverAnimationCapture: function (e) {
                            var t = e.dragRect, n = e.isOwner;
                            e = e.activeSortable, ct.forEach((function (e) {
                                e.thisAnimationDuration = null
                            })), e.options.animation && !n && e.multiDrag.isMultiDrag && (st = r({}, t), t = k(at, !0), st.top -= t.f, st.left -= t.e)
                        }, dragOverAnimationComplete: function () {
                            pt && (pt = !1, mt())
                        }, drop: function (e) {
                            var t = e.originalEvent, n = e.rootEl, r = e.parentEl, o = e.sortable,
                                i = e.dispatchSortableEvent, a = e.oldIndex, s = e.putSortable, l = s || this.sortable;
                            if (t) {
                                var c, u, d, p = this.options, f = r.children;
                                if (!ft) if (p.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), x(at, p.selectedClass, !~ct.indexOf(at)), ~ct.indexOf(at)) ct.splice(ct.indexOf(at), 1), ot = null, V({
                                    sortable: o,
                                    rootEl: n,
                                    name: "deselect",
                                    targetEl: at,
                                    originalEvt: t
                                }); else {
                                    if (ct.push(at), V({
                                        sortable: o,
                                        rootEl: n,
                                        name: "select",
                                        targetEl: at,
                                        originalEvt: t
                                    }), t.shiftKey && ot && o.el.contains(ot)) {
                                        var h = M(ot);
                                        if (e = M(at), ~h && ~e && h !== e) for (var m, g = h < e ? (m = h, e) : (m = e, h + 1); m < g; m++) ~ct.indexOf(f[m]) || (x(f[m], p.selectedClass, !0), ct.push(f[m]), V({
                                            sortable: o,
                                            rootEl: n,
                                            name: "select",
                                            targetEl: f[m],
                                            originalEvt: t
                                        }))
                                    } else ot = at;
                                    it = l
                                }
                                ft && this.isMultiDrag && (pt = !1, (r[z].options.sort || r !== n) && 1 < ct.length && (c = C(at), u = M(at, ":not(." + this.options.selectedClass + ")"), !dt && p.animation && (at.thisAnimationDuration = null), l.captureAnimationState(), dt || (p.animation && (at.fromRect = c, ct.forEach((function (e) {
                                    var t;
                                    e.thisAnimationDuration = null, e !== at && (t = pt ? C(e) : c, e.fromRect = t, l.addAnimationState({
                                        target: e,
                                        rect: t
                                    }))
                                }))), mt(), ct.forEach((function (e) {
                                    f[u] ? r.insertBefore(e, f[u]) : r.appendChild(e), u++
                                })), a === M(at) && (d = !1, ct.forEach((function (e) {
                                    e.sortableIndex !== M(e) && (d = !0)
                                })), d && i("update"))), ct.forEach((function (e) {
                                    B(e)
                                })), l.animateAll()), it = l), (n === r || s && "clone" !== s.lastPutMode) && ut.forEach((function (e) {
                                    e.parentNode && e.parentNode.removeChild(e)
                                }))
                            }
                        }, nullingGlobal: function () {
                            this.isMultiDrag = ft = !1, ut.length = 0
                        }, destroyGlobal: function () {
                            this._deselectMultiDrag(), v(document, "pointerup", this._deselectMultiDrag), v(document, "mouseup", this._deselectMultiDrag), v(document, "touchend", this._deselectMultiDrag), v(document, "keydown", this._checkKeyDown), v(document, "keyup", this._checkKeyUp)
                        }, _deselectMultiDrag: function (e) {
                            if (!(void 0 !== ft && ft || it !== this.sortable || e && b(e.target, this.options.draggable, this.sortable.el, !1) || e && 0 !== e.button)) for (; ct.length;) {
                                var t = ct[0];
                                x(t, this.options.selectedClass, !1), ct.shift(), V({
                                    sortable: this.sortable,
                                    rootEl: this.sortable.el,
                                    name: "deselect",
                                    targetEl: t,
                                    originalEvt: e
                                })
                            }
                        }, _checkKeyDown: function (e) {
                            e.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
                        }, _checkKeyUp: function (e) {
                            e.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
                        }
                    }, r(e, {
                        pluginName: "multiDrag", utils: {
                            select: function (e) {
                                var t = e.parentNode[z];
                                t && t.options.multiDrag && !~ct.indexOf(e) && (it && it !== t && (it.multiDrag._deselectMultiDrag(), it = t), x(e, t.options.selectedClass, !0), ct.push(e))
                            }, deselect: function (e) {
                                var t = e.parentNode[z], n = ct.indexOf(e);
                                t && t.options.multiDrag && ~n && (x(e, t.options.selectedClass, !1), ct.splice(n, 1))
                            }
                        }, eventProperties: function () {
                            var e = this, t = [], n = [];
                            return ct.forEach((function (r) {
                                var o;
                                t.push({
                                    multiDragElement: r,
                                    index: r.sortableIndex
                                }), o = pt && r !== at ? -1 : pt ? M(r, ":not(." + e.options.selectedClass + ")") : M(r), n.push({
                                    multiDragElement: r,
                                    index: o
                                })
                            })), {items: i(ct), clones: [].concat(ut), oldIndicies: t, newIndicies: n}
                        }, optionListeners: {
                            multiDragKey: function (e) {
                                return "ctrl" === (e = e.toLowerCase()) ? e = "Control" : 1 < e.length && (e = e.charAt(0).toUpperCase() + e.substr(1)), e
                            }
                        }
                    })
                }), Re
            }, "object" == a(t) ? e.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
        }, 7368: function (e, t) {
            "use strict";
            t.byteLength = function (e) {
                var t = l(e), n = t[0], r = t[1];
                return 3 * (n + r) / 4 - r
            }, t.toByteArray = function (e) {
                var t, n, i = l(e), a = i[0], s = i[1], c = new o(function (e, t, n) {
                    return 3 * (t + n) / 4 - n
                }(0, a, s)), u = 0, d = s > 0 ? a - 4 : a;
                for (n = 0; n < d; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
                return 2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, c[u++] = 255 & t), 1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t), c
            }, t.fromByteArray = function (e) {
                for (var t, r = e.length, o = r % 3, i = [], a = 16383, s = 0, l = r - o; s < l; s += a) i.push(c(e, s, s + a > l ? l : s + a));
                return 1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")), i.join("")
            };
            for (var n = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) n[a] = i[a], r[i.charCodeAt(a)] = a;

            function l(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }

            function c(e, t, r) {
                for (var o, i, a = [], s = t; s < r; s += 3) o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                return a.join("")
            }

            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
        }, 8382: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            var o = n(7368), i = n(8250),
                a = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.Buffer = c, t.SlowBuffer = function (e) {
                return +e != e && (e = 0), c.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50;
            var s = 2147483647;

            function l(e) {
                if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, c.prototype), t
            }

            function c(e, t, n) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return p(e)
                }
                return u(e, t, n)
            }

            function u(e, t, n) {
                if ("string" == typeof e) return function (e, t) {
                    if ("string" == typeof t && "" !== t || (t = "utf8"), !c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    var n = 0 | g(e, t), r = l(n), o = r.write(e, t);
                    return o !== n && (r = r.slice(0, o)), r
                }(e, t);
                if (ArrayBuffer.isView(e)) return function (e) {
                    if (H(e, Uint8Array)) {
                        var t = new Uint8Array(e);
                        return h(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return f(e)
                }(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + r(e));
                if (H(e, ArrayBuffer) || e && H(e.buffer, ArrayBuffer)) return h(e, t, n);
                if ("undefined" != typeof SharedArrayBuffer && (H(e, SharedArrayBuffer) || e && H(e.buffer, SharedArrayBuffer))) return h(e, t, n);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var o = e.valueOf && e.valueOf();
                if (null != o && o !== e) return c.from(o, t, n);
                var i = function (e) {
                    if (c.isBuffer(e)) {
                        var t = 0 | m(e.length), n = l(t);
                        return 0 === n.length || e.copy(n, 0, 0, t), n
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || F(e.length) ? l(0) : f(e) : "Buffer" === e.type && Array.isArray(e.data) ? f(e.data) : void 0
                }(e);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, n);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + r(e))
            }

            function d(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function p(e) {
                return d(e), l(e < 0 ? 0 : 0 | m(e))
            }

            function f(e) {
                for (var t = e.length < 0 ? 0 : 0 | m(e.length), n = l(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
                return n
            }

            function h(e, t, n) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var r;
                return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, c.prototype), r
            }

            function m(e) {
                if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | e
            }

            function g(e, t) {
                if (c.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || H(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + r(e));
                var n = e.length, o = arguments.length > 2 && !0 === arguments[2];
                if (!o && 0 === n) return 0;
                for (var i = !1; ;) switch (t) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return n;
                    case"utf8":
                    case"utf-8":
                        return B(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * n;
                    case"hex":
                        return n >>> 1;
                    case"base64":
                        return z(e).length;
                    default:
                        if (i) return o ? -1 : B(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function v(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ;) switch (e) {
                    case"hex":
                        return M(this, t, n);
                    case"utf8":
                    case"utf-8":
                        return C(this, t, n);
                    case"ascii":
                        return O(this, t, n);
                    case"latin1":
                    case"binary":
                        return P(this, t, n);
                    case"base64":
                        return T(this, t, n);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return D(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function y(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function b(e, t, n, r, o) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), F(n = +n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (o) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, n, r, o);
                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : _(e, [t], n, r, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function _(e, t, n, r, o) {
                var i, a = 1, s = e.length, l = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, l /= 2, n /= 2
                }

                function c(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }

                if (o) {
                    var u = -1;
                    for (i = n; i < s; i++) if (c(e, i) === c(t, -1 === u ? 0 : i - u)) {
                        if (-1 === u && (u = i), i - u + 1 === l) return u * a
                    } else -1 !== u && (i -= i - u), u = -1
                } else for (n + l > s && (n = s - l), i = n; i >= 0; i--) {
                    for (var d = !0, p = 0; p < l; p++) if (c(e, i + p) !== c(t, p)) {
                        d = !1;
                        break
                    }
                    if (d) return i
                }
                return -1
            }

            function w(e, t, n, r) {
                n = Number(n) || 0;
                var o = e.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o;
                var i = t.length;
                r > i / 2 && (r = i / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (F(s)) return a;
                    e[n + a] = s
                }
                return a
            }

            function x(e, t, n, r) {
                return U(B(t, e.length - n), e, n, r)
            }

            function E(e, t, n, r) {
                return U(function (e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }

            function k(e, t, n, r) {
                return U(z(t), e, n, r)
            }

            function S(e, t, n, r) {
                return U(function (e, t) {
                    for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = (n = e.charCodeAt(a)) >> 8, o = n % 256, i.push(o), i.push(r);
                    return i
                }(t, e.length - n), e, n, r)
            }

            function T(e, t, n) {
                return 0 === t && n === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, n))
            }

            function C(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], o = t; o < n;) {
                    var i, a, s, l, c = e[o], u = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (o + d <= n) switch (d) {
                        case 1:
                            c < 128 && (u = c);
                            break;
                        case 2:
                            128 == (192 & (i = e[o + 1])) && (l = (31 & c) << 6 | 63 & i) > 127 && (u = l);
                            break;
                        case 3:
                            i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (l = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (u = l);
                            break;
                        case 4:
                            i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (u = l)
                    }
                    null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), o += d
                }
                return function (e) {
                    var t = e.length;
                    if (t <= A) return String.fromCharCode.apply(String, e);
                    for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
                    return n
                }(r)
            }

            t.kMaxLength = s, c.TYPED_ARRAY_SUPPORT = function () {
                try {
                    var e = new Uint8Array(1), t = {
                        foo: function () {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                enumerable: !0,
                get: function () {
                    if (c.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(c.prototype, "offset", {
                enumerable: !0, get: function () {
                    if (c.isBuffer(this)) return this.byteOffset
                }
            }), c.poolSize = 8192, c.from = function (e, t, n) {
                return u(e, t, n)
            }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function (e, t, n) {
                return function (e, t, n) {
                    return d(e), e <= 0 ? l(e) : void 0 !== t ? "string" == typeof n ? l(e).fill(t, n) : l(e).fill(t) : l(e)
                }(e, t, n)
            }, c.allocUnsafe = function (e) {
                return p(e)
            }, c.allocUnsafeSlow = function (e) {
                return p(e)
            }, c.isBuffer = function (e) {
                return null != e && !0 === e._isBuffer && e !== c.prototype
            }, c.compare = function (e, t) {
                if (H(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), H(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o) if (e[o] !== t[o]) {
                    n = e[o], r = t[o];
                    break
                }
                return n < r ? -1 : r < n ? 1 : 0
            }, c.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function (e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                var n;
                if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = c.allocUnsafe(t), o = 0;
                for (n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (H(i, Uint8Array)) o + i.length > r.length ? c.from(i).copy(r, o) : Uint8Array.prototype.set.call(r, i, o); else {
                        if (!c.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                        i.copy(r, o)
                    }
                    o += i.length
                }
                return r
            }, c.byteLength = g, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function () {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? C(this, 0, e) : v.apply(this, arguments)
            }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function (e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function () {
                var e = "", n = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
            }, a && (c.prototype[a] = c.prototype.inspect), c.prototype.compare = function (e, t, n, o, i) {
                if (H(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + r(e));
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || o < 0 || i > this.length) throw new RangeError("out of range index");
                if (o >= i && t >= n) return 0;
                if (o >= i) return -1;
                if (t >= n) return 1;
                if (this === e) return 0;
                for (var a = (i >>>= 0) - (o >>>= 0), s = (n >>>= 0) - (t >>>= 0), l = Math.min(a, s), u = this.slice(o, i), d = e.slice(t, n), p = 0; p < l; ++p) if (u[p] !== d[p]) {
                    a = u[p], s = d[p];
                    break
                }
                return a < s ? -1 : s < a ? 1 : 0
            }, c.prototype.includes = function (e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, c.prototype.indexOf = function (e, t, n) {
                return b(this, e, t, n, !0)
            }, c.prototype.lastIndexOf = function (e, t, n) {
                return b(this, e, t, n, !1)
            }, c.prototype.write = function (e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0; else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var o = this.length - t;
                if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1; ;) switch (r) {
                    case"hex":
                        return w(this, e, t, n);
                    case"utf8":
                    case"utf-8":
                        return x(this, e, t, n);
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return E(this, e, t, n);
                    case"base64":
                        return k(this, e, t, n);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return S(this, e, t, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0
                }
            }, c.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var A = 4096;

            function O(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                return r
            }

            function P(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                return r
            }

            function M(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = t; i < n; ++i) o += V[e[i]];
                return o
            }

            function D(e, t, n) {
                for (var r = e.slice(t, n), o = "", i = 0; i < r.length - 1; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }

            function N(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function I(e, t, n, r, o, i) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function L(e, t, n, r, o, i) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function j(e, t, n, r, o) {
                return t = +t, n >>>= 0, o || L(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
            }

            function q(e, t, n, r, o) {
                return t = +t, n >>>= 0, o || L(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
            }

            c.prototype.slice = function (e, t) {
                var n = this.length;
                (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                var r = this.subarray(e, t);
                return Object.setPrototypeOf(r, c.prototype), r
            }, c.prototype.readUintLE = c.prototype.readUIntLE = function (e, t, n) {
                e >>>= 0, t >>>= 0, n || N(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                return r
            }, c.prototype.readUintBE = c.prototype.readUIntBE = function (e, t, n) {
                e >>>= 0, t >>>= 0, n || N(e, t, this.length);
                for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
                return r
            }, c.prototype.readUint8 = c.prototype.readUInt8 = function (e, t) {
                return e >>>= 0, t || N(e, 1, this.length), this[e]
            }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function (e, t) {
                return e >>>= 0, t || N(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function (e, t) {
                return e >>>= 0, t || N(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function (e, t) {
                return e >>>= 0, t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function (e, t) {
                return e >>>= 0, t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readIntLE = function (e, t, n) {
                e >>>= 0, t >>>= 0, n || N(e, t, this.length);
                for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
                return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
            }, c.prototype.readIntBE = function (e, t, n) {
                e >>>= 0, t >>>= 0, n || N(e, t, this.length);
                for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, c.prototype.readInt8 = function (e, t) {
                return e >>>= 0, t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function (e, t) {
                e >>>= 0, t || N(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt16BE = function (e, t) {
                e >>>= 0, t || N(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt32LE = function (e, t) {
                return e >>>= 0, t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function (e, t) {
                return e >>>= 0, t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readFloatLE = function (e, t) {
                return e >>>= 0, t || N(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function (e, t) {
                return e >>>= 0, t || N(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function (e, t) {
                return e >>>= 0, t || N(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function (e, t) {
                return e >>>= 0, t || N(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function (e, t, n, r) {
                e = +e, t >>>= 0, n >>>= 0, r || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1, i = 0;
                for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
                return t + n
            }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function (e, t, n, r) {
                e = +e, t >>>= 0, n >>>= 0, r || I(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1, i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                return t + n
            }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeIntLE = function (e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    I(this, e, t, n, o - 1, -o)
                }
                var i = 0, a = 1, s = 0;
                for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + n
            }, c.prototype.writeIntBE = function (e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    I(this, e, t, n, o - 1, -o)
                }
                var i = n - 1, a = 1, s = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + n
            }, c.prototype.writeInt8 = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeInt16BE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeInt32LE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, c.prototype.writeInt32BE = function (e, t, n) {
                return e = +e, t >>>= 0, n || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeFloatLE = function (e, t, n) {
                return j(this, e, t, !0, n)
            }, c.prototype.writeFloatBE = function (e, t, n) {
                return j(this, e, t, !1, n)
            }, c.prototype.writeDoubleLE = function (e, t, n) {
                return q(this, e, t, !0, n)
            }, c.prototype.writeDoubleBE = function (e, t, n) {
                return q(this, e, t, !1, n)
            }, c.prototype.copy = function (e, t, n, r) {
                if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var o = r - n;
                return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), o
            }, c.prototype.fill = function (e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    if (1 === e.length) {
                        var o = e.charCodeAt(0);
                        ("utf8" === r && o < 128 || "latin1" === r) && (e = o)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                var i;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < n; ++i) this[i] = e; else {
                    var a = c.isBuffer(e) ? e : c.from(e, r), s = a.length;
                    if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < n - t; ++i) this[i + t] = a[i % s]
                }
                return this
            };
            var R = /[^+/0-9A-Za-z-_]/g;

            function B(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }

            function z(e) {
                return o.toByteArray(function (e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(R, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function U(e, t, n, r) {
                for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
                return o
            }

            function H(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function F(e) {
                return e != e
            }

            var V = function () {
                for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n) for (var r = 16 * n, o = 0; o < 16; ++o) t[r + o] = e[n] + e[o];
                return t
            }()
        }, 9483: function (e) {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var n = "", r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function (e, n, r, o, i) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (r) for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (a[l] = !0)
                    }
                    for (var c = 0; c < e.length; c++) {
                        var u = [].concat(e[c]);
                        r && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
                    }
                }, t
            }
        }, 659: function (e) {
            "use strict";
            e.exports = function (e) {
                return e[1]
            }
        }, 1855: function (e, t, n) {
            var r = n(5611), o = n(1965), i = n(9933);
            i.elementNames.__proto__ = null, i.attributeNames.__proto__ = null;
            var a = {
                __proto__: null,
                style: !0,
                script: !0,
                xmp: !0,
                iframe: !0,
                noembed: !0,
                noframes: !0,
                plaintext: !0,
                noscript: !0
            }, s = {
                __proto__: null,
                area: !0,
                base: !0,
                basefont: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                isindex: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }, l = e.exports = function (e, t) {
                Array.isArray(e) || e.cheerio || (e = [e]), t = t || {};
                for (var n = "", o = 0; o < e.length; o++) {
                    var i = e[o];
                    "root" === i.type ? n += l(i.children, t) : r.isTag(i) ? n += u(i, t) : i.type === r.Directive ? n += d(i) : i.type === r.Comment ? n += h(i) : i.type === r.CDATA ? n += f(i) : n += p(i, t)
                }
                return n
            }, c = ["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"];

            function u(e, t) {
                "foreign" === t.xmlMode && (e.name = i.elementNames[e.name] || e.name, e.parent && c.indexOf(e.parent.name) >= 0 && (t = Object.assign({}, t, {xmlMode: !1}))), !t.xmlMode && ["svg", "math"].indexOf(e.name) >= 0 && (t = Object.assign({}, t, {xmlMode: "foreign"}));
                var n = "<" + e.name, r = function (e, t) {
                    if (e) {
                        var n, r = "";
                        for (var a in e) n = e[a], r && (r += " "), "foreign" === t.xmlMode && (a = i.attributeNames[a] || a), r += a, (null !== n && "" !== n || t.xmlMode) && (r += '="' + (t.decodeEntities ? o.encodeXML(n) : n.replace(/\"/g, "&quot;")) + '"');
                        return r
                    }
                }(e.attribs, t);
                return r && (n += " " + r), !t.xmlMode || e.children && 0 !== e.children.length ? (n += ">", e.children && (n += l(e.children, t)), s[e.name] && !t.xmlMode || (n += "</" + e.name + ">")) : n += "/>", n
            }

            function d(e) {
                return "<" + e.data + ">"
            }

            function p(e, t) {
                var n = e.data || "";
                return !t.decodeEntities || e.parent && e.parent.name in a || (n = o.encodeXML(n)), n
            }

            function f(e) {
                return "<![CDATA[" + e.children[0].data + "]]>"
            }

            function h(e) {
                return "\x3c!--" + e.data + "--\x3e"
            }
        }, 5611: function (e, t) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {value: !0}), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0, function (e) {
                e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
            }(n = t.ElementType || (t.ElementType = {})), t.isTag = function (e) {
                return e.type === n.Tag || e.type === n.Script || e.type === n.Style
            }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
        }, 1976: function (e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.decodeHTML = t.decodeHTMLStrict = t.decodeXML = void 0;
            var o = r(n(1363)), i = r(n(8611)), a = r(n(4204)), s = r(n(8969)),
                l = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;

            function c(e) {
                var t = d(e);
                return function (e) {
                    return String(e).replace(l, t)
                }
            }

            t.decodeXML = c(a.default), t.decodeHTMLStrict = c(o.default);
            var u = function (e, t) {
                return e < t ? 1 : -1
            };

            function d(e) {
                return function (t) {
                    if ("#" === t.charAt(1)) {
                        var n = t.charAt(2);
                        return "X" === n || "x" === n ? s.default(parseInt(t.substr(3), 16)) : s.default(parseInt(t.substr(2), 10))
                    }
                    return e[t.slice(1, -1)] || t
                }
            }

            t.decodeHTML = function () {
                for (var e = Object.keys(i.default).sort(u), t = Object.keys(o.default).sort(u), n = 0, r = 0; n < t.length; n++) e[r] === t[n] ? (t[n] += ";?", r++) : t[n] += ";";
                var a = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), s = d(o.default);

                function l(e) {
                    return ";" !== e.substr(-1) && (e += ";"), s(e)
                }

                return function (e) {
                    return String(e).replace(a, l)
                }
            }()
        }, 8969: function (e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            var o = r(n(9451)), i = String.fromCodePoint || function (e) {
                var t = "";
                return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + String.fromCharCode(e)
            };
            t.default = function (e) {
                return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : (e in o.default && (e = o.default[e]), i(e))
            }
        }, 9480: function (e, t, n) {
            "use strict";
            var r = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = void 0;
            var o = u(r(n(4204)).default), i = d(o);
            t.encodeXML = g(o);
            var a, s, l = u(r(n(1363)).default), c = d(l);

            function u(e) {
                return Object.keys(e).sort().reduce((function (t, n) {
                    return t[e[n]] = "&" + n + ";", t
                }), {})
            }

            function d(e) {
                for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
                    var i = o[r];
                    1 === i.length ? t.push("\\" + i) : n.push(i)
                }
                t.sort();
                for (var a = 0; a < t.length - 1; a++) {
                    for (var s = a; s < t.length - 1 && t[s].charCodeAt(1) + 1 === t[s + 1].charCodeAt(1);) s += 1;
                    var l = 1 + s - a;
                    l < 3 || t.splice(a, l, t[a] + "-" + t[s])
                }
                return n.unshift("[" + t.join("") + "]"), new RegExp(n.join("|"), "g")
            }

            t.encodeHTML = (a = l, s = c, function (e) {
                return e.replace(s, (function (e) {
                    return a[e]
                })).replace(p, h)
            }), t.encodeNonAsciiHTML = g(l);
            var p = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                f = null != String.prototype.codePointAt ? function (e) {
                    return e.codePointAt(0)
                } : function (e) {
                    return 1024 * (e.charCodeAt(0) - 55296) + e.charCodeAt(1) - 56320 + 65536
                };

            function h(e) {
                return "&#x" + (e.length > 1 ? f(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";"
            }

            var m = new RegExp(i.source + "|" + p.source, "g");

            function g(e) {
                return function (t) {
                    return t.replace(m, (function (t) {
                        return e[t] || h(t)
                    }))
                }
            }

            t.escape = function (e) {
                return e.replace(m, h)
            }, t.escapeUTF8 = function (e) {
                return e.replace(i, h)
            }
        }, 1965: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.encodeHTML5 = t.encodeHTML4 = t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = t.encode = t.decodeStrict = t.decode = void 0;
            var r = n(1976), o = n(9480);
            t.decode = function (e, t) {
                return (!t || t <= 0 ? r.decodeXML : r.decodeHTML)(e)
            }, t.decodeStrict = function (e, t) {
                return (!t || t <= 0 ? r.decodeXML : r.decodeHTMLStrict)(e)
            }, t.encode = function (e, t) {
                return (!t || t <= 0 ? o.encodeXML : o.encodeHTML)(e)
            };
            var i = n(9480);
            Object.defineProperty(t, "encodeXML", {
                enumerable: !0, get: function () {
                    return i.encodeXML
                }
            }), Object.defineProperty(t, "encodeHTML", {
                enumerable: !0, get: function () {
                    return i.encodeHTML
                }
            }), Object.defineProperty(t, "encodeNonAsciiHTML", {
                enumerable: !0, get: function () {
                    return i.encodeNonAsciiHTML
                }
            }), Object.defineProperty(t, "escape", {
                enumerable: !0, get: function () {
                    return i.escape
                }
            }), Object.defineProperty(t, "escapeUTF8", {
                enumerable: !0, get: function () {
                    return i.escapeUTF8
                }
            }), Object.defineProperty(t, "encodeHTML4", {
                enumerable: !0, get: function () {
                    return i.encodeHTML
                }
            }), Object.defineProperty(t, "encodeHTML5", {
                enumerable: !0, get: function () {
                    return i.encodeHTML
                }
            });
            var a = n(1976);
            Object.defineProperty(t, "decodeXML", {
                enumerable: !0, get: function () {
                    return a.decodeXML
                }
            }), Object.defineProperty(t, "decodeHTML", {
                enumerable: !0, get: function () {
                    return a.decodeHTML
                }
            }), Object.defineProperty(t, "decodeHTMLStrict", {
                enumerable: !0, get: function () {
                    return a.decodeHTMLStrict
                }
            }), Object.defineProperty(t, "decodeHTML4", {
                enumerable: !0, get: function () {
                    return a.decodeHTML
                }
            }), Object.defineProperty(t, "decodeHTML5", {
                enumerable: !0, get: function () {
                    return a.decodeHTML
                }
            }), Object.defineProperty(t, "decodeHTML4Strict", {
                enumerable: !0, get: function () {
                    return a.decodeHTMLStrict
                }
            }), Object.defineProperty(t, "decodeHTML5Strict", {
                enumerable: !0, get: function () {
                    return a.decodeHTMLStrict
                }
            }), Object.defineProperty(t, "decodeXMLStrict", {
                enumerable: !0, get: function () {
                    return a.decodeXML
                }
            })
        }, 9440: function (e) {
            e.exports = {
                Text: "text",
                Directive: "directive",
                Comment: "comment",
                Script: "script",
                Style: "style",
                Tag: "tag",
                CDATA: "cdata",
                Doctype: "doctype",
                isTag: function (e) {
                    return "tag" === e.type || "script" === e.type || "style" === e.type
                }
            }
        }, 4534: function (e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            var o = n(9440), i = /\s+/g, a = n(8614), s = n(4574);

            function l(e, t, n) {
                "object" === r(e) ? (n = t, t = e, e = null) : "function" == typeof t && (n = t, t = c), this._callback = e, this._options = t || c, this._elementCB = n, this.dom = [], this._done = !1, this._tagStack = [], this._parser = this._parser || null
            }

            var c = {normalizeWhitespace: !1, withStartIndices: !1, withEndIndices: !1};
            l.prototype.onparserinit = function (e) {
                this._parser = e
            }, l.prototype.onreset = function () {
                l.call(this, this._callback, this._options, this._elementCB)
            }, l.prototype.onend = function () {
                this._done || (this._done = !0, this._parser = null, this._handleCallback(null))
            }, l.prototype._handleCallback = l.prototype.onerror = function (e) {
                if ("function" == typeof this._callback) this._callback(e, this.dom); else if (e) throw e
            }, l.prototype.onclosetag = function () {
                var e = this._tagStack.pop();
                this._options.withEndIndices && e && (e.endIndex = this._parser.endIndex), this._elementCB && this._elementCB(e)
            }, l.prototype._createDomElement = function (e) {
                if (!this._options.withDomLvl1) return e;
                var t;
                for (var n in t = "tag" === e.type ? Object.create(s) : Object.create(a), e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }, l.prototype._addDomElement = function (e) {
                var t = this._tagStack[this._tagStack.length - 1], n = t ? t.children : this.dom, r = n[n.length - 1];
                e.next = null, this._options.withStartIndices && (e.startIndex = this._parser.startIndex), this._options.withEndIndices && (e.endIndex = this._parser.endIndex), r ? (e.prev = r, r.next = e) : e.prev = null, n.push(e), e.parent = t || null
            }, l.prototype.onopentag = function (e, t) {
                var n = {
                    type: "script" === e ? o.Script : "style" === e ? o.Style : o.Tag,
                    name: e,
                    attribs: t,
                    children: []
                }, r = this._createDomElement(n);
                this._addDomElement(r), this._tagStack.push(r)
            }, l.prototype.ontext = function (e) {
                var t, n = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
                if (!this._tagStack.length && this.dom.length && (t = this.dom[this.dom.length - 1]).type === o.Text) n ? t.data = (t.data + e).replace(i, " ") : t.data += e; else if (this._tagStack.length && (t = this._tagStack[this._tagStack.length - 1]) && (t = t.children[t.children.length - 1]) && t.type === o.Text) n ? t.data = (t.data + e).replace(i, " ") : t.data += e; else {
                    n && (e = e.replace(i, " "));
                    var r = this._createDomElement({data: e, type: o.Text});
                    this._addDomElement(r)
                }
            }, l.prototype.oncomment = function (e) {
                var t = this._tagStack[this._tagStack.length - 1];
                if (t && t.type === o.Comment) t.data += e; else {
                    var n = {data: e, type: o.Comment}, r = this._createDomElement(n);
                    this._addDomElement(r), this._tagStack.push(r)
                }
            }, l.prototype.oncdatastart = function () {
                var e = {children: [{data: "", type: o.Text}], type: o.CDATA}, t = this._createDomElement(e);
                this._addDomElement(t), this._tagStack.push(t)
            }, l.prototype.oncommentend = l.prototype.oncdataend = function () {
                this._tagStack.pop()
            }, l.prototype.onprocessinginstruction = function (e, t) {
                var n = this._createDomElement({name: e, data: t, type: o.Directive});
                this._addDomElement(n)
            }, e.exports = l
        }, 4574: function (e, t, n) {
            var r = n(8614), o = e.exports = Object.create(r), i = {tagName: "name"};
            Object.keys(i).forEach((function (e) {
                var t = i[e];
                Object.defineProperty(o, e, {
                    get: function () {
                        return this[t] || null
                    }, set: function (e) {
                        return this[t] = e, e
                    }
                })
            }))
        }, 8614: function (e) {
            var t = e.exports = {
                get firstChild() {
                    var e = this.children;
                    return e && e[0] || null
                }, get lastChild() {
                    var e = this.children;
                    return e && e[e.length - 1] || null
                }, get nodeType() {
                    return r[this.type] || r.element
                }
            }, n = {
                tagName: "name",
                childNodes: "children",
                parentNode: "parent",
                previousSibling: "prev",
                nextSibling: "next",
                nodeValue: "data"
            }, r = {element: 1, text: 3, cdata: 4, comment: 8};
            Object.keys(n).forEach((function (e) {
                var r = n[e];
                Object.defineProperty(t, e, {
                    get: function () {
                        return this[r] || null
                    }, set: function (e) {
                        return this[r] = e, e
                    }
                })
            }))
        }, 3637: function (e, t, n) {
            var r = e.exports;
            [n(9798), n(9972), n(9076), n(4722), n(2478), n(5179)].forEach((function (e) {
                Object.keys(e).forEach((function (t) {
                    r[t] = e[t].bind(r)
                }))
            }))
        }, 5179: function (e, t) {
            t.removeSubsets = function (e) {
                for (var t, n, r, o = e.length; --o > -1;) {
                    for (t = n = e[o], e[o] = null, r = !0; n;) {
                        if (e.indexOf(n) > -1) {
                            r = !1, e.splice(o, 1);
                            break
                        }
                        n = n.parent
                    }
                    r && (e[o] = t)
                }
                return e
            };
            var n = t.compareDocumentPosition = function (e, t) {
                var n, r, o, i, a, s, l = [], c = [];
                if (e === t) return 0;
                for (n = e; n;) l.unshift(n), n = n.parent;
                for (n = t; n;) c.unshift(n), n = n.parent;
                for (s = 0; l[s] === c[s];) s++;
                return 0 === s ? 1 : (o = (r = l[s - 1]).children, i = l[s], a = c[s], o.indexOf(i) > o.indexOf(a) ? r === t ? 20 : 4 : r === e ? 10 : 2)
            };
            t.uniqueSort = function (e) {
                var t, r, o = e.length;
                for (e = e.slice(); --o > -1;) t = e[o], (r = e.indexOf(t)) > -1 && r < o && e.splice(o, 1);
                return e.sort((function (e, t) {
                    var r = n(e, t);
                    return 2 & r ? -1 : 4 & r ? 1 : 0
                })), e
            }
        }, 2478: function (e, t, n) {
            var r = n(9440), o = t.isTag = r.isTag;
            t.testElement = function (e, t) {
                for (var n in e) if (e.hasOwnProperty(n)) if ("tag_name" === n) {
                    if (!o(t) || !e.tag_name(t.name)) return !1
                } else if ("tag_type" === n) {
                    if (!e.tag_type(t.type)) return !1
                } else if ("tag_contains" === n) {
                    if (o(t) || !e.tag_contains(t.data)) return !1
                } else if (!t.attribs || !e[n](t.attribs[n])) return !1;
                return !0
            };
            var i = {
                tag_name: function (e) {
                    return "function" == typeof e ? function (t) {
                        return o(t) && e(t.name)
                    } : "*" === e ? o : function (t) {
                        return o(t) && t.name === e
                    }
                }, tag_type: function (e) {
                    return "function" == typeof e ? function (t) {
                        return e(t.type)
                    } : function (t) {
                        return t.type === e
                    }
                }, tag_contains: function (e) {
                    return "function" == typeof e ? function (t) {
                        return !o(t) && e(t.data)
                    } : function (t) {
                        return !o(t) && t.data === e
                    }
                }
            };

            function a(e, t) {
                return "function" == typeof t ? function (n) {
                    return n.attribs && t(n.attribs[e])
                } : function (n) {
                    return n.attribs && n.attribs[e] === t
                }
            }

            function s(e, t) {
                return function (n) {
                    return e(n) || t(n)
                }
            }

            t.getElements = function (e, t, n, r) {
                var o = Object.keys(e).map((function (t) {
                    var n = e[t];
                    return t in i ? i[t](n) : a(t, n)
                }));
                return 0 === o.length ? [] : this.filter(o.reduce(s), t, n, r)
            }, t.getElementById = function (e, t, n) {
                return Array.isArray(t) || (t = [t]), this.findOne(a("id", e), t, !1 !== n)
            }, t.getElementsByTagName = function (e, t, n, r) {
                return this.filter(i.tag_name(e), t, n, r)
            }, t.getElementsByTagType = function (e, t, n, r) {
                return this.filter(i.tag_type(e), t, n, r)
            }
        }, 9076: function (e, t) {
            t.removeElement = function (e) {
                if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
                    var t = e.parent.children;
                    t.splice(t.lastIndexOf(e), 1)
                }
            }, t.replaceElement = function (e, t) {
                var n = t.prev = e.prev;
                n && (n.next = t);
                var r = t.next = e.next;
                r && (r.prev = t);
                var o = t.parent = e.parent;
                if (o) {
                    var i = o.children;
                    i[i.lastIndexOf(e)] = t
                }
            }, t.appendChild = function (e, t) {
                if (t.parent = e, 1 !== e.children.push(t)) {
                    var n = e.children[e.children.length - 2];
                    n.next = t, t.prev = n, t.next = null
                }
            }, t.append = function (e, t) {
                var n = e.parent, r = e.next;
                if (t.next = r, t.prev = e, e.next = t, t.parent = n, r) {
                    if (r.prev = t, n) {
                        var o = n.children;
                        o.splice(o.lastIndexOf(r), 0, t)
                    }
                } else n && n.children.push(t)
            }, t.prepend = function (e, t) {
                var n = e.parent;
                if (n) {
                    var r = n.children;
                    r.splice(r.lastIndexOf(e), 0, t)
                }
                e.prev && (e.prev.next = t), t.parent = n, t.prev = e.prev, t.next = e, e.prev = t
            }
        }, 4722: function (e, t, n) {
            var r = n(9440).isTag;

            function o(e, t, n, r) {
                for (var i, a = [], s = 0, l = t.length; s < l && !(e(t[s]) && (a.push(t[s]), --r <= 0)) && (i = t[s].children, !(n && i && i.length > 0 && (i = o(e, i, n, r), a = a.concat(i), (r -= i.length) <= 0))); s++) ;
                return a
            }

            e.exports = {
                filter: function (e, t, n, r) {
                    return Array.isArray(t) || (t = [t]), "number" == typeof r && isFinite(r) || (r = 1 / 0), o(e, t, !1 !== n, r)
                }, find: o, findOneChild: function (e, t) {
                    for (var n = 0, r = t.length; n < r; n++) if (e(t[n])) return t[n];
                    return null
                }, findOne: function e(t, n) {
                    for (var o = null, i = 0, a = n.length; i < a && !o; i++) r(n[i]) && (t(n[i]) ? o = n[i] : n[i].children.length > 0 && (o = e(t, n[i].children)));
                    return o
                }, existsOne: function e(t, n) {
                    for (var o = 0, i = n.length; o < i; o++) if (r(n[o]) && (t(n[o]) || n[o].children.length > 0 && e(t, n[o].children))) return !0;
                    return !1
                }, findAll: function (e, t) {
                    for (var n = [], o = t.slice(); o.length;) {
                        var i = o.shift();
                        r(i) && (i.children && i.children.length > 0 && o.unshift.apply(o, i.children), e(i) && n.push(i))
                    }
                    return n
                }
            }
        }, 9798: function (e, t, n) {
            var r = n(9440), o = n(1855), i = r.isTag;
            e.exports = {
                getInnerHTML: function (e, t) {
                    return e.children ? e.children.map((function (e) {
                        return o(e, t)
                    })).join("") : ""
                }, getOuterHTML: o, getText: function e(t) {
                    return Array.isArray(t) ? t.map(e).join("") : i(t) ? "br" === t.name ? "\n" : e(t.children) : t.type === r.CDATA ? e(t.children) : t.type === r.Text ? t.data : ""
                }
            }
        }, 9972: function (e, t) {
            var n = t.getChildren = function (e) {
                return e.children
            }, r = t.getParent = function (e) {
                return e.parent
            };
            t.getSiblings = function (e) {
                var t = r(e);
                return t ? n(t) : [e]
            }, t.getAttributeValue = function (e, t) {
                return e.attribs && e.attribs[t]
            }, t.hasAttrib = function (e, t) {
                return !!e.attribs && hasOwnProperty.call(e.attribs, t)
            }, t.getName = function (e) {
                return e.name
            }
        }, 6948: function (e, t, n) {
            var r = n(9545);
            e.exports = function (e) {
                if (e >= 55296 && e <= 57343 || e > 1114111) return "�";
                e in r && (e = r[e]);
                var t = "";
                return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t + String.fromCharCode(e)
            }
        }, 6317: function (e) {
            "use strict";

            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, t(e)
            }

            var n, r = "object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) ? Reflect : null,
                o = r && "function" == typeof r.apply ? r.apply : function (e, t, n) {
                    return Function.prototype.apply.call(e, t, n)
                };
            n = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function (e) {
                return Object.getOwnPropertyNames(e)
            };
            var i = Number.isNaN || function (e) {
                return e != e
            };

            function a() {
                a.init.call(this)
            }

            e.exports = a, e.exports.once = function (e, t) {
                return new Promise((function (n, r) {
                    function o(n) {
                        e.removeListener(t, i), r(n)
                    }

                    function i() {
                        "function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments))
                    }

                    g(e, t, i, {once: !0}), "error" !== t && function (e, t, n) {
                        "function" == typeof e.on && g(e, "error", t, {once: !0})
                    }(e, o)
                }))
            }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
            var s = 10;

            function l(e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + t(e))
            }

            function c(e) {
                return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
            }

            function u(e, t, n, r) {
                var o, i, a, s;
                if (l(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]), void 0 === a) a = i[t] = n, ++e._eventsCount; else if ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (o = c(e)) > 0 && a.length > o && !a.warned) {
                    a.warned = !0;
                    var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, s = u, console && console.warn && console.warn(s)
                }
                return e
            }

            function d() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function p(e, t, n) {
                var r = {fired: !1, wrapFn: void 0, target: e, type: t, listener: n}, o = d.bind(r);
                return o.listener = n, r.wrapFn = o, o
            }

            function f(e, t, n) {
                var r = e._events;
                if (void 0 === r) return [];
                var o = r[t];
                return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function (e) {
                    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(o) : m(o, o.length)
            }

            function h(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function m(e, t) {
                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                return n
            }

            function g(e, n, r, o) {
                if ("function" == typeof e.on) o.once ? e.once(n, r) : e.on(n, r); else {
                    if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + t(e));
                    e.addEventListener(n, (function t(i) {
                        o.once && e.removeEventListener(n, t), r(i)
                    }))
                }
            }

            Object.defineProperty(a, "defaultMaxListeners", {
                enumerable: !0, get: function () {
                    return s
                }, set: function (e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    s = e
                }
            }), a.init = function () {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, a.prototype.setMaxListeners = function (e) {
                if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, a.prototype.getMaxListeners = function () {
                return c(this)
            }, a.prototype.emit = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                var r = "error" === e, i = this._events;
                if (void 0 !== i) r = r && void 0 === i.error; else if (!r) return !1;
                if (r) {
                    var a;
                    if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
                    var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                    throw s.context = a, s
                }
                var l = i[e];
                if (void 0 === l) return !1;
                if ("function" == typeof l) o(l, this, t); else {
                    var c = l.length, u = m(l, c);
                    for (n = 0; n < c; ++n) o(u[n], this, t)
                }
                return !0
            }, a.prototype.addListener = function (e, t) {
                return u(this, e, t, !1)
            }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function (e, t) {
                return u(this, e, t, !0)
            }, a.prototype.once = function (e, t) {
                return l(t), this.on(e, p(this, e, t)), this
            }, a.prototype.prependOnceListener = function (e, t) {
                return l(t), this.prependListener(e, p(this, e, t)), this
            }, a.prototype.removeListener = function (e, t) {
                var n, r, o, i, a;
                if (l(t), void 0 === (r = this._events)) return this;
                if (void 0 === (n = r[e])) return this;
                if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t)); else if ("function" != typeof n) {
                    for (o = -1, i = n.length - 1; i >= 0; i--) if (n[i] === t || n[i].listener === t) {
                        a = n[i].listener, o = i;
                        break
                    }
                    if (o < 0) return this;
                    0 === o ? n.shift() : function (e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
                }
                return this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function (e) {
                var t, n, r;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 === arguments.length) {
                    var o, i = Object.keys(n);
                    for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof (t = n[e])) this.removeListener(e, t); else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                return this
            }, a.prototype.listeners = function (e) {
                return f(this, e, !0)
            }, a.prototype.rawListeners = function (e) {
                return f(this, e, !1)
            }, a.listenerCount = function (e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
            }, a.prototype.listenerCount = h, a.prototype.eventNames = function () {
                return this._eventsCount > 0 ? n(this._events) : []
            }
        }, 7164: function (e, t, n) {
            function r(e) {
                this._cbs = e || {}, this.events = []
            }

            e.exports = r;
            var o = n(3397).EVENTS;
            Object.keys(o).forEach((function (e) {
                if (0 === o[e]) e = "on" + e, r.prototype[e] = function () {
                    this.events.push([e]), this._cbs[e] && this._cbs[e]()
                }; else if (1 === o[e]) e = "on" + e, r.prototype[e] = function (t) {
                    this.events.push([e, t]), this._cbs[e] && this._cbs[e](t)
                }; else {
                    if (2 !== o[e]) throw Error("wrong number of arguments");
                    e = "on" + e, r.prototype[e] = function (t, n) {
                        this.events.push([e, t, n]), this._cbs[e] && this._cbs[e](t, n)
                    }
                }
            })), r.prototype.onreset = function () {
                this.events = [], this._cbs.onreset && this._cbs.onreset()
            }, r.prototype.restart = function () {
                this._cbs.onreset && this._cbs.onreset();
                for (var e = 0, t = this.events.length; e < t; e++) if (this._cbs[this.events[e][0]]) {
                    var n = this.events[e].length;
                    1 === n ? this._cbs[this.events[e][0]]() : 2 === n ? this._cbs[this.events[e][0]](this.events[e][1]) : this._cbs[this.events[e][0]](this.events[e][1], this.events[e][2])
                }
            }
        }, 9767: function (e, t, n) {
            var r = n(4534), o = n(3637);

            function i(e, t) {
                this.init(e, t)
            }

            function a(e, t) {
                return o.getElementsByTagName(e, t, !0)
            }

            function s(e, t) {
                return o.getElementsByTagName(e, t, !0, 1)[0]
            }

            function l(e, t, n) {
                return o.getText(o.getElementsByTagName(e, t, n, 1)).trim()
            }

            function c(e, t, n, r, o) {
                var i = l(n, r, o);
                i && (e[t] = i)
            }

            n(8767)(i, r), i.prototype.init = r;
            var u = function (e) {
                return "rss" === e || "feed" === e || "rdf:RDF" === e
            };
            i.prototype.onend = function () {
                var e, t, n = {}, o = s(u, this.dom);
                o && ("feed" === o.name ? (t = o.children, n.type = "atom", c(n, "id", "id", t), c(n, "title", "title", t), (e = s("link", t)) && (e = e.attribs) && (e = e.href) && (n.link = e), c(n, "description", "subtitle", t), (e = l("updated", t)) && (n.updated = new Date(e)), c(n, "author", "email", t, !0), n.items = a("entry", t).map((function (e) {
                    var t, n = {};
                    return c(n, "id", "id", e = e.children), c(n, "title", "title", e), (t = s("link", e)) && (t = t.attribs) && (t = t.href) && (n.link = t), (t = l("summary", e) || l("content", e)) && (n.description = t), (t = l("updated", e)) && (n.pubDate = new Date(t)), n
                }))) : (t = s("channel", o.children).children, n.type = o.name.substr(0, 3), n.id = "", c(n, "title", "title", t), c(n, "link", "link", t), c(n, "description", "description", t), (e = l("lastBuildDate", t)) && (n.updated = new Date(e)), c(n, "author", "managingEditor", t, !0), n.items = a("item", o.children).map((function (e) {
                    var t, n = {};
                    return c(n, "id", "guid", e = e.children), c(n, "title", "title", e), c(n, "link", "link", e), c(n, "description", "description", e), (t = l("pubDate", e)) && (n.pubDate = new Date(t)), n
                })))), this.dom = n, r.prototype._handleCallback.call(this, o ? null : Error("couldn't find root of feed"))
            }, e.exports = i
        }, 8576: function (e, t, n) {
            var r = n(1282),
                o = {input: !0, option: !0, optgroup: !0, select: !0, button: !0, datalist: !0, textarea: !0}, i = {
                    tr: {tr: !0, th: !0, td: !0},
                    th: {th: !0},
                    td: {thead: !0, th: !0, td: !0},
                    body: {head: !0, link: !0, script: !0},
                    li: {li: !0},
                    p: {p: !0},
                    h1: {p: !0},
                    h2: {p: !0},
                    h3: {p: !0},
                    h4: {p: !0},
                    h5: {p: !0},
                    h6: {p: !0},
                    select: o,
                    input: o,
                    output: o,
                    button: o,
                    datalist: o,
                    textarea: o,
                    option: {option: !0},
                    optgroup: {optgroup: !0}
                }, a = {
                    __proto__: null,
                    area: !0,
                    base: !0,
                    basefont: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    isindex: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                }, s = {__proto__: null, math: !0, svg: !0}, l = {
                    __proto__: null,
                    mi: !0,
                    mo: !0,
                    mn: !0,
                    ms: !0,
                    mtext: !0,
                    "annotation-xml": !0,
                    foreignObject: !0,
                    desc: !0,
                    title: !0
                }, c = /\s|\//;

            function u(e, t) {
                this._options = t || {}, this._cbs = e || {}, this._tagname = "", this._attribname = "", this._attribvalue = "", this._attribs = null, this._stack = [], this._foreignContext = [], this.startIndex = 0, this.endIndex = null, this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode, this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode, this._options.Tokenizer && (r = this._options.Tokenizer), this._tokenizer = new r(this._options, this), this._cbs.onparserinit && this._cbs.onparserinit(this)
            }

            n(8767)(u, n(6317).EventEmitter), u.prototype._updatePosition = function (e) {
                null === this.endIndex ? this._tokenizer._sectionStart <= e ? this.startIndex = 0 : this.startIndex = this._tokenizer._sectionStart - e : this.startIndex = this.endIndex + 1, this.endIndex = this._tokenizer.getAbsoluteIndex()
            }, u.prototype.ontext = function (e) {
                this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(e)
            }, u.prototype.onopentagname = function (e) {
                if (this._lowerCaseTagNames && (e = e.toLowerCase()), this._tagname = e, !this._options.xmlMode && e in i) for (var t; (t = this._stack[this._stack.length - 1]) in i[e]; this.onclosetag(t)) ;
                !this._options.xmlMode && e in a || (this._stack.push(e), e in s ? this._foreignContext.push(!0) : e in l && this._foreignContext.push(!1)), this._cbs.onopentagname && this._cbs.onopentagname(e), this._cbs.onopentag && (this._attribs = {})
            }, u.prototype.onopentagend = function () {
                this._updatePosition(1), this._attribs && (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs), this._attribs = null), !this._options.xmlMode && this._cbs.onclosetag && this._tagname in a && this._cbs.onclosetag(this._tagname), this._tagname = ""
            }, u.prototype.onclosetag = function (e) {
                if (this._updatePosition(1), this._lowerCaseTagNames && (e = e.toLowerCase()), (e in s || e in l) && this._foreignContext.pop(), !this._stack.length || e in a && !this._options.xmlMode) this._options.xmlMode || "br" !== e && "p" !== e || (this.onopentagname(e), this._closeCurrentTag()); else {
                    var t = this._stack.lastIndexOf(e);
                    if (-1 !== t) if (this._cbs.onclosetag) for (t = this._stack.length - t; t--;) this._cbs.onclosetag(this._stack.pop()); else this._stack.length = t; else "p" !== e || this._options.xmlMode || (this.onopentagname(e), this._closeCurrentTag())
                }
            }, u.prototype.onselfclosingtag = function () {
                this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1] ? this._closeCurrentTag() : this.onopentagend()
            }, u.prototype._closeCurrentTag = function () {
                var e = this._tagname;
                this.onopentagend(), this._stack[this._stack.length - 1] === e && (this._cbs.onclosetag && this._cbs.onclosetag(e), this._stack.pop())
            }, u.prototype.onattribname = function (e) {
                this._lowerCaseAttributeNames && (e = e.toLowerCase()), this._attribname = e
            }, u.prototype.onattribdata = function (e) {
                this._attribvalue += e
            }, u.prototype.onattribend = function () {
                this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue), this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) && (this._attribs[this._attribname] = this._attribvalue), this._attribname = "", this._attribvalue = ""
            }, u.prototype._getInstructionName = function (e) {
                var t = e.search(c), n = t < 0 ? e : e.substr(0, t);
                return this._lowerCaseTagNames && (n = n.toLowerCase()), n
            }, u.prototype.ondeclaration = function (e) {
                if (this._cbs.onprocessinginstruction) {
                    var t = this._getInstructionName(e);
                    this._cbs.onprocessinginstruction("!" + t, "!" + e)
                }
            }, u.prototype.onprocessinginstruction = function (e) {
                if (this._cbs.onprocessinginstruction) {
                    var t = this._getInstructionName(e);
                    this._cbs.onprocessinginstruction("?" + t, "?" + e)
                }
            }, u.prototype.oncomment = function (e) {
                this._updatePosition(4), this._cbs.oncomment && this._cbs.oncomment(e), this._cbs.oncommentend && this._cbs.oncommentend()
            }, u.prototype.oncdata = function (e) {
                this._updatePosition(1), this._options.xmlMode || this._options.recognizeCDATA ? (this._cbs.oncdatastart && this._cbs.oncdatastart(), this._cbs.ontext && this._cbs.ontext(e), this._cbs.oncdataend && this._cbs.oncdataend()) : this.oncomment("[CDATA[" + e + "]]")
            }, u.prototype.onerror = function (e) {
                this._cbs.onerror && this._cbs.onerror(e)
            }, u.prototype.onend = function () {
                if (this._cbs.onclosetag) for (var e = this._stack.length; e > 0; this._cbs.onclosetag(this._stack[--e])) ;
                this._cbs.onend && this._cbs.onend()
            }, u.prototype.reset = function () {
                this._cbs.onreset && this._cbs.onreset(), this._tokenizer.reset(), this._tagname = "", this._attribname = "", this._attribs = null, this._stack = [], this._cbs.onparserinit && this._cbs.onparserinit(this)
            }, u.prototype.parseComplete = function (e) {
                this.reset(), this.end(e)
            }, u.prototype.write = function (e) {
                this._tokenizer.write(e)
            }, u.prototype.end = function (e) {
                this._tokenizer.end(e)
            }, u.prototype.pause = function () {
                this._tokenizer.pause()
            }, u.prototype.resume = function () {
                this._tokenizer.resume()
            }, u.prototype.parseChunk = u.prototype.write, u.prototype.done = u.prototype.end, e.exports = u
        }, 3234: function (e, t, n) {
            function r(e) {
                this._cbs = e || {}
            }

            e.exports = r;
            var o = n(3397).EVENTS;
            Object.keys(o).forEach((function (e) {
                if (0 === o[e]) e = "on" + e, r.prototype[e] = function () {
                    this._cbs[e] && this._cbs[e]()
                }; else if (1 === o[e]) e = "on" + e, r.prototype[e] = function (t) {
                    this._cbs[e] && this._cbs[e](t)
                }; else {
                    if (2 !== o[e]) throw Error("wrong number of arguments");
                    e = "on" + e, r.prototype[e] = function (t, n) {
                        this._cbs[e] && this._cbs[e](t, n)
                    }
                }
            }))
        }, 7046: function (e, t, n) {
            e.exports = o;
            var r = n(1767);

            function o(e) {
                r.call(this, new i(this), e)
            }

            function i(e) {
                this.scope = e
            }

            n(8767)(o, r), o.prototype.readable = !0;
            var a = n(3397).EVENTS;
            Object.keys(a).forEach((function (e) {
                if (0 === a[e]) i.prototype["on" + e] = function () {
                    this.scope.emit(e)
                }; else if (1 === a[e]) i.prototype["on" + e] = function (t) {
                    this.scope.emit(e, t)
                }; else {
                    if (2 !== a[e]) throw Error("wrong number of arguments!");
                    i.prototype["on" + e] = function (t, n) {
                        this.scope.emit(e, t, n)
                    }
                }
            }))
        }, 1282: function (e, t, n) {
            e.exports = ge;
            var r = n(6948), o = n(9489), i = n(490), a = n(1344), s = 0, l = s++, c = s++, u = s++, d = s++, p = s++,
                f = s++, h = s++, m = s++, g = s++, v = s++, y = s++, b = s++, _ = s++, w = s++, x = s++, E = s++,
                k = s++, S = s++, T = s++, C = s++, A = s++, O = s++, P = s++, M = s++, D = s++, N = s++, I = s++,
                L = s++, j = s++, q = s++, R = s++, B = s++, z = s++, U = s++, H = s++, F = s++, V = s++, Y = s++,
                W = s++, G = s++, X = s++, K = s++, $ = s++, J = s++, Q = s++, Z = s++, ee = s++, te = s++, ne = s++,
                re = s++, oe = s++, ie = s++, ae = s++, se = s++, le = s++, ce = 0, ue = ce++, de = ce++, pe = ce++;

            function fe(e) {
                return " " === e || "\n" === e || "\t" === e || "\f" === e || "\r" === e
            }

            function he(e, t, n) {
                var r = e.toLowerCase();
                return e === r ? function (e) {
                    e === r ? this._state = t : (this._state = n, this._index--)
                } : function (o) {
                    o === r || o === e ? this._state = t : (this._state = n, this._index--)
                }
            }

            function me(e, t) {
                var n = e.toLowerCase();
                return function (r) {
                    r === n || r === e ? this._state = t : (this._state = u, this._index--)
                }
            }

            function ge(e, t) {
                this._state = l, this._buffer = "", this._sectionStart = 0, this._index = 0, this._bufferOffset = 0, this._baseState = l, this._special = ue, this._cbs = t, this._running = !0, this._ended = !1, this._xmlMode = !(!e || !e.xmlMode), this._decodeEntities = !(!e || !e.decodeEntities)
            }

            ge.prototype._stateText = function (e) {
                "<" === e ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._state = c, this._sectionStart = this._index) : this._decodeEntities && this._special === ue && "&" === e && (this._index > this._sectionStart && this._cbs.ontext(this._getSection()), this._baseState = l, this._state = oe, this._sectionStart = this._index)
            }, ge.prototype._stateBeforeTagName = function (e) {
                "/" === e ? this._state = p : "<" === e ? (this._cbs.ontext(this._getSection()), this._sectionStart = this._index) : ">" === e || this._special !== ue || fe(e) ? this._state = l : "!" === e ? (this._state = x, this._sectionStart = this._index + 1) : "?" === e ? (this._state = k, this._sectionStart = this._index + 1) : (this._state = this._xmlMode || "s" !== e && "S" !== e ? u : R, this._sectionStart = this._index)
            }, ge.prototype._stateInTagName = function (e) {
                ("/" === e || ">" === e || fe(e)) && (this._emitToken("onopentagname"), this._state = m, this._index--)
            }, ge.prototype._stateBeforeCloseingTagName = function (e) {
                fe(e) || (">" === e ? this._state = l : this._special !== ue ? "s" === e || "S" === e ? this._state = B : (this._state = l, this._index--) : (this._state = f, this._sectionStart = this._index))
            }, ge.prototype._stateInCloseingTagName = function (e) {
                (">" === e || fe(e)) && (this._emitToken("onclosetag"), this._state = h, this._index--)
            }, ge.prototype._stateAfterCloseingTagName = function (e) {
                ">" === e && (this._state = l, this._sectionStart = this._index + 1)
            }, ge.prototype._stateBeforeAttributeName = function (e) {
                ">" === e ? (this._cbs.onopentagend(), this._state = l, this._sectionStart = this._index + 1) : "/" === e ? this._state = d : fe(e) || (this._state = g, this._sectionStart = this._index)
            }, ge.prototype._stateInSelfClosingTag = function (e) {
                ">" === e ? (this._cbs.onselfclosingtag(), this._state = l, this._sectionStart = this._index + 1) : fe(e) || (this._state = m, this._index--)
            }, ge.prototype._stateInAttributeName = function (e) {
                ("=" === e || "/" === e || ">" === e || fe(e)) && (this._cbs.onattribname(this._getSection()), this._sectionStart = -1, this._state = v, this._index--)
            }, ge.prototype._stateAfterAttributeName = function (e) {
                "=" === e ? this._state = y : "/" === e || ">" === e ? (this._cbs.onattribend(), this._state = m, this._index--) : fe(e) || (this._cbs.onattribend(), this._state = g, this._sectionStart = this._index)
            }, ge.prototype._stateBeforeAttributeValue = function (e) {
                '"' === e ? (this._state = b, this._sectionStart = this._index + 1) : "'" === e ? (this._state = _, this._sectionStart = this._index + 1) : fe(e) || (this._state = w, this._sectionStart = this._index, this._index--)
            }, ge.prototype._stateInAttributeValueDoubleQuotes = function (e) {
                '"' === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = oe, this._sectionStart = this._index)
            }, ge.prototype._stateInAttributeValueSingleQuotes = function (e) {
                "'" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = oe, this._sectionStart = this._index)
            }, ge.prototype._stateInAttributeValueNoQuotes = function (e) {
                fe(e) || ">" === e ? (this._emitToken("onattribdata"), this._cbs.onattribend(), this._state = m, this._index--) : this._decodeEntities && "&" === e && (this._emitToken("onattribdata"), this._baseState = this._state, this._state = oe, this._sectionStart = this._index)
            }, ge.prototype._stateBeforeDeclaration = function (e) {
                this._state = "[" === e ? O : "-" === e ? S : E
            }, ge.prototype._stateInDeclaration = function (e) {
                ">" === e && (this._cbs.ondeclaration(this._getSection()), this._state = l, this._sectionStart = this._index + 1)
            }, ge.prototype._stateInProcessingInstruction = function (e) {
                ">" === e && (this._cbs.onprocessinginstruction(this._getSection()), this._state = l, this._sectionStart = this._index + 1)
            }, ge.prototype._stateBeforeComment = function (e) {
                "-" === e ? (this._state = T, this._sectionStart = this._index + 1) : this._state = E
            }, ge.prototype._stateInComment = function (e) {
                "-" === e && (this._state = C)
            }, ge.prototype._stateAfterComment1 = function (e) {
                this._state = "-" === e ? A : T
            }, ge.prototype._stateAfterComment2 = function (e) {
                ">" === e ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = l, this._sectionStart = this._index + 1) : "-" !== e && (this._state = T)
            }, ge.prototype._stateBeforeCdata1 = he("C", P, E), ge.prototype._stateBeforeCdata2 = he("D", M, E), ge.prototype._stateBeforeCdata3 = he("A", D, E), ge.prototype._stateBeforeCdata4 = he("T", N, E), ge.prototype._stateBeforeCdata5 = he("A", I, E), ge.prototype._stateBeforeCdata6 = function (e) {
                "[" === e ? (this._state = L, this._sectionStart = this._index + 1) : (this._state = E, this._index--)
            }, ge.prototype._stateInCdata = function (e) {
                "]" === e && (this._state = j)
            }, ge.prototype._stateAfterCdata1 = function (e) {
                this._state = "]" === e ? q : L
            }, ge.prototype._stateAfterCdata2 = function (e) {
                ">" === e ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)), this._state = l, this._sectionStart = this._index + 1) : "]" !== e && (this._state = L)
            }, ge.prototype._stateBeforeSpecial = function (e) {
                "c" === e || "C" === e ? this._state = z : "t" === e || "T" === e ? this._state = $ : (this._state = u, this._index--)
            }, ge.prototype._stateBeforeSpecialEnd = function (e) {
                this._special !== de || "c" !== e && "C" !== e ? this._special !== pe || "t" !== e && "T" !== e ? this._state = l : this._state = ee : this._state = Y
            }, ge.prototype._stateBeforeScript1 = me("R", U), ge.prototype._stateBeforeScript2 = me("I", H), ge.prototype._stateBeforeScript3 = me("P", F), ge.prototype._stateBeforeScript4 = me("T", V), ge.prototype._stateBeforeScript5 = function (e) {
                ("/" === e || ">" === e || fe(e)) && (this._special = de), this._state = u, this._index--
            }, ge.prototype._stateAfterScript1 = he("R", W, l), ge.prototype._stateAfterScript2 = he("I", G, l), ge.prototype._stateAfterScript3 = he("P", X, l), ge.prototype._stateAfterScript4 = he("T", K, l), ge.prototype._stateAfterScript5 = function (e) {
                ">" === e || fe(e) ? (this._special = ue, this._state = f, this._sectionStart = this._index - 6, this._index--) : this._state = l
            }, ge.prototype._stateBeforeStyle1 = me("Y", J), ge.prototype._stateBeforeStyle2 = me("L", Q), ge.prototype._stateBeforeStyle3 = me("E", Z), ge.prototype._stateBeforeStyle4 = function (e) {
                ("/" === e || ">" === e || fe(e)) && (this._special = pe), this._state = u, this._index--
            }, ge.prototype._stateAfterStyle1 = he("Y", te, l), ge.prototype._stateAfterStyle2 = he("L", ne, l), ge.prototype._stateAfterStyle3 = he("E", re, l), ge.prototype._stateAfterStyle4 = function (e) {
                ">" === e || fe(e) ? (this._special = ue, this._state = f, this._sectionStart = this._index - 5, this._index--) : this._state = l
            }, ge.prototype._stateBeforeEntity = he("#", ie, ae), ge.prototype._stateBeforeNumericEntity = he("X", le, se), ge.prototype._parseNamedEntityStrict = function () {
                if (this._sectionStart + 1 < this._index) {
                    var e = this._buffer.substring(this._sectionStart + 1, this._index), t = this._xmlMode ? a : o;
                    t.hasOwnProperty(e) && (this._emitPartial(t[e]), this._sectionStart = this._index + 1)
                }
            }, ge.prototype._parseLegacyEntity = function () {
                var e = this._sectionStart + 1, t = this._index - e;
                for (t > 6 && (t = 6); t >= 2;) {
                    var n = this._buffer.substr(e, t);
                    if (i.hasOwnProperty(n)) return this._emitPartial(i[n]), void (this._sectionStart += t + 1);
                    t--
                }
            }, ge.prototype._stateInNamedEntity = function (e) {
                ";" === e ? (this._parseNamedEntityStrict(), this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(), this._state = this._baseState) : (e < "a" || e > "z") && (e < "A" || e > "Z") && (e < "0" || e > "9") && (this._xmlMode || this._sectionStart + 1 === this._index || (this._baseState !== l ? "=" !== e && this._parseNamedEntityStrict() : this._parseLegacyEntity()), this._state = this._baseState, this._index--)
            }, ge.prototype._decodeNumericEntity = function (e, t) {
                var n = this._sectionStart + e;
                if (n !== this._index) {
                    var o = this._buffer.substring(n, this._index), i = parseInt(o, t);
                    this._emitPartial(r(i)), this._sectionStart = this._index
                } else this._sectionStart--;
                this._state = this._baseState
            }, ge.prototype._stateInNumericEntity = function (e) {
                ";" === e ? (this._decodeNumericEntity(2, 10), this._sectionStart++) : (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(2, 10), this._index--)
            }, ge.prototype._stateInHexEntity = function (e) {
                ";" === e ? (this._decodeNumericEntity(3, 16), this._sectionStart++) : (e < "a" || e > "f") && (e < "A" || e > "F") && (e < "0" || e > "9") && (this._xmlMode ? this._state = this._baseState : this._decodeNumericEntity(3, 16), this._index--)
            }, ge.prototype._cleanup = function () {
                this._sectionStart < 0 ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._running && (this._state === l ? (this._sectionStart !== this._index && this._cbs.ontext(this._buffer.substr(this._sectionStart)), this._buffer = "", this._bufferOffset += this._index, this._index = 0) : this._sectionStart === this._index ? (this._buffer = "", this._bufferOffset += this._index, this._index = 0) : (this._buffer = this._buffer.substr(this._sectionStart), this._index -= this._sectionStart, this._bufferOffset += this._sectionStart), this._sectionStart = 0)
            }, ge.prototype.write = function (e) {
                this._ended && this._cbs.onerror(Error(".write() after done!")), this._buffer += e, this._parse()
            }, ge.prototype._parse = function () {
                for (; this._index < this._buffer.length && this._running;) {
                    var e = this._buffer.charAt(this._index);
                    this._state === l ? this._stateText(e) : this._state === c ? this._stateBeforeTagName(e) : this._state === u ? this._stateInTagName(e) : this._state === p ? this._stateBeforeCloseingTagName(e) : this._state === f ? this._stateInCloseingTagName(e) : this._state === h ? this._stateAfterCloseingTagName(e) : this._state === d ? this._stateInSelfClosingTag(e) : this._state === m ? this._stateBeforeAttributeName(e) : this._state === g ? this._stateInAttributeName(e) : this._state === v ? this._stateAfterAttributeName(e) : this._state === y ? this._stateBeforeAttributeValue(e) : this._state === b ? this._stateInAttributeValueDoubleQuotes(e) : this._state === _ ? this._stateInAttributeValueSingleQuotes(e) : this._state === w ? this._stateInAttributeValueNoQuotes(e) : this._state === x ? this._stateBeforeDeclaration(e) : this._state === E ? this._stateInDeclaration(e) : this._state === k ? this._stateInProcessingInstruction(e) : this._state === S ? this._stateBeforeComment(e) : this._state === T ? this._stateInComment(e) : this._state === C ? this._stateAfterComment1(e) : this._state === A ? this._stateAfterComment2(e) : this._state === O ? this._stateBeforeCdata1(e) : this._state === P ? this._stateBeforeCdata2(e) : this._state === M ? this._stateBeforeCdata3(e) : this._state === D ? this._stateBeforeCdata4(e) : this._state === N ? this._stateBeforeCdata5(e) : this._state === I ? this._stateBeforeCdata6(e) : this._state === L ? this._stateInCdata(e) : this._state === j ? this._stateAfterCdata1(e) : this._state === q ? this._stateAfterCdata2(e) : this._state === R ? this._stateBeforeSpecial(e) : this._state === B ? this._stateBeforeSpecialEnd(e) : this._state === z ? this._stateBeforeScript1(e) : this._state === U ? this._stateBeforeScript2(e) : this._state === H ? this._stateBeforeScript3(e) : this._state === F ? this._stateBeforeScript4(e) : this._state === V ? this._stateBeforeScript5(e) : this._state === Y ? this._stateAfterScript1(e) : this._state === W ? this._stateAfterScript2(e) : this._state === G ? this._stateAfterScript3(e) : this._state === X ? this._stateAfterScript4(e) : this._state === K ? this._stateAfterScript5(e) : this._state === $ ? this._stateBeforeStyle1(e) : this._state === J ? this._stateBeforeStyle2(e) : this._state === Q ? this._stateBeforeStyle3(e) : this._state === Z ? this._stateBeforeStyle4(e) : this._state === ee ? this._stateAfterStyle1(e) : this._state === te ? this._stateAfterStyle2(e) : this._state === ne ? this._stateAfterStyle3(e) : this._state === re ? this._stateAfterStyle4(e) : this._state === oe ? this._stateBeforeEntity(e) : this._state === ie ? this._stateBeforeNumericEntity(e) : this._state === ae ? this._stateInNamedEntity(e) : this._state === se ? this._stateInNumericEntity(e) : this._state === le ? this._stateInHexEntity(e) : this._cbs.onerror(Error("unknown _state"), this._state), this._index++
                }
                this._cleanup()
            }, ge.prototype.pause = function () {
                this._running = !1
            }, ge.prototype.resume = function () {
                this._running = !0, this._index < this._buffer.length && this._parse(), this._ended && this._finish()
            }, ge.prototype.end = function (e) {
                this._ended && this._cbs.onerror(Error(".end() after done!")), e && this.write(e), this._ended = !0, this._running && this._finish()
            }, ge.prototype._finish = function () {
                this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend()
            }, ge.prototype._handleTrailingData = function () {
                var e = this._buffer.substr(this._sectionStart);
                this._state === L || this._state === j || this._state === q ? this._cbs.oncdata(e) : this._state === T || this._state === C || this._state === A ? this._cbs.oncomment(e) : this._state !== ae || this._xmlMode ? this._state !== se || this._xmlMode ? this._state !== le || this._xmlMode ? this._state !== u && this._state !== m && this._state !== y && this._state !== v && this._state !== g && this._state !== _ && this._state !== b && this._state !== w && this._state !== f && this._cbs.ontext(e) : (this._decodeNumericEntity(3, 16), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._decodeNumericEntity(2, 10), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData())) : (this._parseLegacyEntity(), this._sectionStart < this._index && (this._state = this._baseState, this._handleTrailingData()))
            }, ge.prototype.reset = function () {
                ge.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs)
            }, ge.prototype.getAbsoluteIndex = function () {
                return this._bufferOffset + this._index
            }, ge.prototype._getSection = function () {
                return this._buffer.substring(this._sectionStart, this._index)
            }, ge.prototype._emitToken = function (e) {
                this._cbs[e](this._getSection()), this._sectionStart = -1
            }, ge.prototype._emitPartial = function (e) {
                this._baseState !== l ? this._cbs.onattribdata(e) : this._cbs.ontext(e)
            }
        }, 1767: function (e, t, n) {
            e.exports = s;
            var r = n(8576), o = n(247).Writable, i = n(1989).s, a = n(8382).Buffer;

            function s(e, t) {
                var n = this._parser = new r(e, t), a = this._decoder = new i;
                o.call(this, {decodeStrings: !1}), this.once("finish", (function () {
                    n.end(a.end())
                }))
            }

            n(8767)(s, o), s.prototype._write = function (e, t, n) {
                e instanceof a && (e = this._decoder.write(e)), this._parser.write(e), n()
            }
        }, 3397: function (e, t, n) {
            var r = n(8576), o = n(4534);

            function i(t, n) {
                return delete e.exports[t], e.exports[t] = n, n
            }

            e.exports = {
                Parser: r,
                Tokenizer: n(1282),
                ElementType: n(9440),
                DomHandler: o,
                get FeedHandler() {
                    return i("FeedHandler", n(9767))
                },
                get Stream() {
                    return i("Stream", n(7046))
                },
                get WritableStream() {
                    return i("WritableStream", n(1767))
                },
                get ProxyHandler() {
                    return i("ProxyHandler", n(3234))
                },
                get DomUtils() {
                    return i("DomUtils", n(3637))
                },
                get CollectingHandler() {
                    return i("CollectingHandler", n(7164))
                },
                DefaultHandler: o,
                get RssHandler() {
                    return i("RssHandler", this.FeedHandler)
                },
                parseDOM: function (e, t) {
                    var n = new o(t);
                    return new r(n, t).end(e), n.dom
                },
                parseFeed: function (t, n) {
                    var o = new e.exports.FeedHandler(n);
                    return new r(o, n).end(t), o.dom
                },
                createDomStream: function (e, t, n) {
                    var i = new o(e, t, n);
                    return new r(i, t)
                },
                EVENTS: {
                    attribute: 2,
                    cdatastart: 0,
                    cdataend: 0,
                    text: 1,
                    processinginstruction: 2,
                    comment: 1,
                    commentend: 0,
                    closetag: 1,
                    opentag: 2,
                    opentagname: 1,
                    error: 1,
                    end: 0
                }
            }
        }, 8250: function (e, t) {
            t.read = function (e, t, n, r, o) {
                var i, a, s = 8 * o - r - 1, l = (1 << s) - 1, c = l >> 1, u = -7, d = n ? o - 1 : 0, p = n ? -1 : 1,
                    f = e[t + d];
                for (d += p, i = f & (1 << -u) - 1, f >>= -u, u += s; u > 0; i = 256 * i + e[t + d], d += p, u -= 8) ;
                for (a = i & (1 << -u) - 1, i >>= -u, u += r; u > 0; a = 256 * a + e[t + d], d += p, u -= 8) ;
                if (0 === i) i = 1 - c; else {
                    if (i === l) return a ? NaN : 1 / 0 * (f ? -1 : 1);
                    a += Math.pow(2, r), i -= c
                }
                return (f ? -1 : 1) * a * Math.pow(2, i - r)
            }, t.write = function (e, t, n, r, o, i) {
                var a, s, l, c = 8 * i - o - 1, u = (1 << c) - 1, d = u >> 1,
                    p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : i - 1, h = r ? 1 : -1,
                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + d >= 1 ? p / l : p * Math.pow(2, 1 - d)) * l >= 2 && (a++, l /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * l - 1) * Math.pow(2, o), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + f] = 255 & s, f += h, s /= 256, o -= 8) ;
                for (a = a << o | s, c += o; c > 0; e[n + f] = 255 & a, f += h, a /= 256, c -= 8) ;
                e[n + f - h] |= 128 * m
            }
        }, 8767: function (e) {
            "function" == typeof Object.create ? e.exports = function (e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function (e, t) {
                if (t) {
                    e.super_ = t;
                    var n = function () {
                    };
                    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                }
            }
        }, 3984: function (e, t) {
            var n, r, o, i;

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }

            i = function () {
                var e = {};
                Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, e.default = function (e) {
                    return !(!e || !e.Window) && e instanceof e.Window
                };
                var t = {};
                Object.defineProperty(t, "__esModule", {value: !0}), t.getWindow = function (t) {
                    return (0, e.default)(t) ? t : (t.ownerDocument || t).defaultView || r.window
                }, t.init = o, t.window = t.realWindow = void 0;
                var n = void 0;
                t.realWindow = n;
                var r = void 0;

                function o(e) {
                    t.realWindow = n = e;
                    var o = e.document.createTextNode("");
                    o.ownerDocument !== e.document && "function" == typeof e.wrap && e.wrap(o) === o && (e = e.wrap(e)), t.window = r = e
                }

                t.window = r, "undefined" != typeof window && window && o(window);
                var i = {};

                function s(e) {
                    return s = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, s(e)
                }

                Object.defineProperty(i, "__esModule", {value: !0}), i.default = void 0;
                var l = function (e) {
                    return !!e && "object" === s(e)
                }, c = function (e) {
                    return "function" == typeof e
                }, u = {
                    window: function (n) {
                        return n === t.window || (0, e.default)(n)
                    }, docFrag: function (e) {
                        return l(e) && 11 === e.nodeType
                    }, object: l, func: c, number: function (e) {
                        return "number" == typeof e
                    }, bool: function (e) {
                        return "boolean" == typeof e
                    }, string: function (e) {
                        return "string" == typeof e
                    }, element: function (e) {
                        if (!e || "object" !== s(e)) return !1;
                        var n = t.getWindow(e) || t.window;
                        return /object|function/.test("undefined" == typeof Element ? "undefined" : s(Element)) ? e instanceof Element || e instanceof n.Element : 1 === e.nodeType && "string" == typeof e.nodeName
                    }, plainObject: function (e) {
                        return l(e) && !!e.constructor && /function Object\b/.test(e.constructor.toString())
                    }, array: function (e) {
                        return l(e) && void 0 !== e.length && c(e.splice)
                    }
                };
                i.default = u;
                var d = {};

                function p(e) {
                    var t = e.interaction;
                    if ("drag" === t.prepared.name) {
                        var n = t.prepared.axis;
                        "x" === n ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : "y" === n && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0)
                    }
                }

                function f(e) {
                    var t = e.iEvent, n = e.interaction;
                    if ("drag" === n.prepared.name) {
                        var r = n.prepared.axis;
                        if ("x" === r || "y" === r) {
                            var o = "x" === r ? "y" : "x";
                            t.page[o] = n.coords.start.page[o], t.client[o] = n.coords.start.client[o], t.delta[o] = 0
                        }
                    }
                }

                Object.defineProperty(d, "__esModule", {value: !0}), d.default = void 0;
                var h = {
                    id: "actions/drag",
                    install: function (e) {
                        var t = e.actions, n = e.Interactable, r = e.defaults;
                        n.prototype.draggable = h.draggable, t.map.drag = h, t.methodDict.drag = "draggable", r.actions.drag = h.defaults
                    },
                    listeners: {
                        "interactions:before-action-move": p,
                        "interactions:action-resume": p,
                        "interactions:action-move": f,
                        "auto-start:check": function (e) {
                            var t = e.interaction, n = e.interactable, r = e.buttons, o = n.options.drag;
                            if (o && o.enabled && (!t.pointerIsDown || !/mouse|pointer/.test(t.pointerType) || 0 != (r & n.options.drag.mouseButtons))) return e.action = {
                                name: "drag",
                                axis: "start" === o.lockAxis ? o.startAxis : o.lockAxis
                            }, !1
                        }
                    },
                    draggable: function (e) {
                        return i.default.object(e) ? (this.options.drag.enabled = !1 !== e.enabled, this.setPerAction("drag", e), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(e.lockAxis) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(e.startAxis) && (this.options.drag.startAxis = e.startAxis), this) : i.default.bool(e) ? (this.options.drag.enabled = e, this) : this.options.drag
                    },
                    beforeMove: p,
                    move: f,
                    defaults: {startAxis: "xy", lockAxis: "xy"},
                    getCursor: function () {
                        return "move"
                    }
                }, m = h;
                d.default = m;
                var g = {};
                Object.defineProperty(g, "__esModule", {value: !0}), g.default = void 0;
                var v = {
                    init: function (e) {
                        var t = e;
                        v.document = t.document, v.DocumentFragment = t.DocumentFragment || y, v.SVGElement = t.SVGElement || y, v.SVGSVGElement = t.SVGSVGElement || y, v.SVGElementInstance = t.SVGElementInstance || y, v.Element = t.Element || y, v.HTMLElement = t.HTMLElement || v.Element, v.Event = t.Event, v.Touch = t.Touch || y, v.PointerEvent = t.PointerEvent || t.MSPointerEvent
                    },
                    document: null,
                    DocumentFragment: null,
                    SVGElement: null,
                    SVGSVGElement: null,
                    SVGElementInstance: null,
                    Element: null,
                    HTMLElement: null,
                    Event: null,
                    Touch: null,
                    PointerEvent: null
                };

                function y() {
                }

                var b = v;
                g.default = b;
                var _ = {};
                Object.defineProperty(_, "__esModule", {value: !0}), _.default = void 0;
                var w = {
                    init: function (e) {
                        var t = g.default.Element, n = e.navigator || {};
                        w.supportsTouch = "ontouchstart" in e || i.default.func(e.DocumentTouch) && g.default.document instanceof e.DocumentTouch, w.supportsPointerEvent = !1 !== n.pointerEnabled && !!g.default.PointerEvent, w.isIOS = /iP(hone|od|ad)/.test(n.platform), w.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), w.isIe9 = /MSIE 9/.test(n.userAgent), w.isOperaMobile = "Opera" === n.appName && w.supportsTouch && /Presto/.test(n.userAgent), w.prefixedMatchesSelector = "matches" in t.prototype ? "matches" : "webkitMatchesSelector" in t.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in t.prototype ? "mozMatchesSelector" : "oMatchesSelector" in t.prototype ? "oMatchesSelector" : "msMatchesSelector", w.pEventTypes = w.supportsPointerEvent ? g.default.PointerEvent === e.MSPointerEvent ? {
                            up: "MSPointerUp",
                            down: "MSPointerDown",
                            over: "mouseover",
                            out: "mouseout",
                            move: "MSPointerMove",
                            cancel: "MSPointerCancel"
                        } : {
                            up: "pointerup",
                            down: "pointerdown",
                            over: "pointerover",
                            out: "pointerout",
                            move: "pointermove",
                            cancel: "pointercancel"
                        } : null, w.wheelEvent = g.default.document && "onmousewheel" in g.default.document ? "mousewheel" : "wheel"
                    },
                    supportsTouch: null,
                    supportsPointerEvent: null,
                    isIOS7: null,
                    isIOS: null,
                    isIe9: null,
                    isOperaMobile: null,
                    prefixedMatchesSelector: null,
                    pEventTypes: null,
                    wheelEvent: null
                }, x = w;
                _.default = x;
                var E = {};

                function k(e) {
                    var t = e.parentNode;
                    if (i.default.docFrag(t)) {
                        for (; (t = t.host) && i.default.docFrag(t);) ;
                        return t
                    }
                    return t
                }

                function S(e, n) {
                    return t.window !== t.realWindow && (n = n.replace(/\/deep\//g, " ")), e[_.default.prefixedMatchesSelector](n)
                }

                Object.defineProperty(E, "__esModule", {value: !0}), E.closest = function (e, t) {
                    for (; i.default.element(e);) {
                        if (S(e, t)) return e;
                        e = k(e)
                    }
                    return null
                }, E.getActualElement = function (e) {
                    return e.correspondingUseElement || e
                }, E.getElementClientRect = O, E.getElementRect = function (e) {
                    var n = O(e);
                    if (!_.default.isIOS7 && n) {
                        var r = A(t.getWindow(e));
                        n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y
                    }
                    return n
                }, E.getPath = function (e) {
                    for (var t = []; e;) t.push(e), e = k(e);
                    return t
                }, E.getScrollXY = A, E.indexOfDeepestElement = function (e) {
                    for (var n, r = [], o = 0; o < e.length; o++) {
                        var i = e[o], a = e[n];
                        if (i && o !== n) if (a) {
                            var s = T(i), l = T(a);
                            if (s !== i.ownerDocument) if (l !== i.ownerDocument) if (s !== l) {
                                r = r.length ? r : C(a);
                                var c = void 0;
                                if (a instanceof g.default.HTMLElement && i instanceof g.default.SVGElement && !(i instanceof g.default.SVGSVGElement)) {
                                    if (i === l) continue;
                                    c = i.ownerSVGElement
                                } else c = i;
                                for (var u = C(c, a.ownerDocument), d = 0; u[d] && u[d] === r[d];) d++;
                                var p = [u[d - 1], u[d], r[d]];
                                if (p[0]) for (var f = p[0].lastChild; f;) {
                                    if (f === p[1]) {
                                        n = o, r = u;
                                        break
                                    }
                                    if (f === p[2]) break;
                                    f = f.previousSibling
                                }
                            } else h = i, m = a, (parseInt(t.getWindow(h).getComputedStyle(h).zIndex, 10) || 0) >= (parseInt(t.getWindow(m).getComputedStyle(m).zIndex, 10) || 0) && (n = o); else n = o
                        } else n = o
                    }
                    var h, m;
                    return n
                }, E.matchesSelector = S, E.matchesUpTo = function (e, t, n) {
                    for (; i.default.element(e);) {
                        if (S(e, t)) return !0;
                        if ((e = k(e)) === n) return S(e, t)
                    }
                    return !1
                }, E.nodeContains = function (e, t) {
                    if (e.contains) return e.contains(t);
                    for (; t;) {
                        if (t === e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }, E.parentNode = k, E.trySelector = function (e) {
                    return !!i.default.string(e) && (g.default.document.querySelector(e), !0)
                };
                var T = function (e) {
                    return e.parentNode || e.host
                };

                function C(e, t) {
                    for (var n, r = [], o = e; (n = T(o)) && o !== t && n !== o.ownerDocument;) r.unshift(o), o = n;
                    return r
                }

                function A(e) {
                    return {
                        x: (e = e || t.window).scrollX || e.document.documentElement.scrollLeft,
                        y: e.scrollY || e.document.documentElement.scrollTop
                    }
                }

                function O(e) {
                    var t = e instanceof g.default.SVGElement ? e.getBoundingClientRect() : e.getClientRects()[0];
                    return t && {
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        bottom: t.bottom,
                        width: t.width || t.right - t.left,
                        height: t.height || t.bottom - t.top
                    }
                }

                var P = {};
                Object.defineProperty(P, "__esModule", {value: !0}), P.default = function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                };
                var M = {};

                function D(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function N(e, t, n) {
                    return "parent" === e ? (0, E.parentNode)(n) : "self" === e ? t.getRect(n) : (0, E.closest)(n, e)
                }

                Object.defineProperty(M, "__esModule", {value: !0}), M.addEdges = function (e, t, n) {
                    e.left && (t.left += n.x), e.right && (t.right += n.x), e.top && (t.top += n.y), e.bottom && (t.bottom += n.y), t.width = t.right - t.left, t.height = t.bottom - t.top
                }, M.getStringOptionResult = N, M.rectToXY = function (e) {
                    return e && {x: "x" in e ? e.x : e.left, y: "y" in e ? e.y : e.top}
                }, M.resolveRectLike = function (e, t, n, r) {
                    var o, a = e;
                    return i.default.string(a) ? a = N(a, t, n) : i.default.func(a) && (a = a.apply(void 0, function (e) {
                        if (Array.isArray(e)) return D(e)
                    }(o = r) || function (e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(o) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return D(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? D(e, t) : void 0
                        }
                    }(o) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())), i.default.element(a) && (a = (0, E.getElementRect)(a)), a
                }, M.tlbrToXywh = function (e) {
                    return !e || "x" in e && "y" in e || ((e = (0, P.default)({}, e)).x = e.left || 0, e.y = e.top || 0, e.width = e.width || (e.right || 0) - e.x, e.height = e.height || (e.bottom || 0) - e.y), e
                }, M.xywhToTlbr = function (e) {
                    return !e || "left" in e && "top" in e || ((e = (0, P.default)({}, e)).left = e.x || 0, e.top = e.y || 0, e.right = e.right || e.left + e.width, e.bottom = e.bottom || e.top + e.height), e
                };
                var I = {};
                Object.defineProperty(I, "__esModule", {value: !0}), I.default = function (e, t, n) {
                    var r = e.options[n], o = r && r.origin || e.options.origin,
                        i = (0, M.resolveRectLike)(o, e, t, [e && t]);
                    return (0, M.rectToXY)(i) || {x: 0, y: 0}
                };
                var L = {};

                function j(e) {
                    return e.trim().split(/ +/)
                }

                Object.defineProperty(L, "__esModule", {value: !0}), L.default = function e(t, n, r) {
                    if (r = r || {}, i.default.string(t) && -1 !== t.search(" ") && (t = j(t)), i.default.array(t)) return t.reduce((function (t, o) {
                        return (0, P.default)(t, e(o, n, r))
                    }), r);
                    if (i.default.object(t) && (n = t, t = ""), i.default.func(n)) r[t] = r[t] || [], r[t].push(n); else if (i.default.array(n)) for (var o = 0; o < n.length; o++) {
                        var a;
                        a = n[o], e(t, a, r)
                    } else if (i.default.object(n)) for (var s in n) {
                        var l = j(s).map((function (e) {
                            return "".concat(t).concat(e)
                        }));
                        e(l, n[s], r)
                    }
                    return r
                };
                var q = {};
                Object.defineProperty(q, "__esModule", {value: !0}), q.default = void 0, q.default = function (e, t) {
                    return Math.sqrt(e * e + t * t)
                };
                var R = {};
                Object.defineProperty(R, "__esModule", {value: !0}), R.default = function (e, t) {
                    e.__set || (e.__set = {});
                    var n = function (n) {
                        "function" != typeof e[n] && "__set" !== n && Object.defineProperty(e, n, {
                            get: function () {
                                return n in e.__set ? e.__set[n] : e.__set[n] = t[n]
                            }, set: function (t) {
                                e.__set[n] = t
                            }, configurable: !0
                        })
                    };
                    for (var r in t) n(r);
                    return e
                };
                var B = {};

                function z(e) {
                    return e instanceof g.default.Event || e instanceof g.default.Touch
                }

                function U(e, t, n) {
                    return e = e || "page", (n = n || {}).x = t[e + "X"], n.y = t[e + "Y"], n
                }

                function H(e, t) {
                    return t = t || {
                        x: 0,
                        y: 0
                    }, _.default.isOperaMobile && z(e) ? (U("screen", e, t), t.x += window.scrollX, t.y += window.scrollY) : U("page", e, t), t
                }

                function F(e, t) {
                    return t = t || {}, _.default.isOperaMobile && z(e) ? U("screen", e, t) : U("client", e, t), t
                }

                function V(e) {
                    var t = [];
                    return i.default.array(e) ? (t[0] = e[0], t[1] = e[1]) : "touchend" === e.type ? 1 === e.touches.length ? (t[0] = e.touches[0], t[1] = e.changedTouches[0]) : 0 === e.touches.length && (t[0] = e.changedTouches[0], t[1] = e.changedTouches[1]) : (t[0] = e.touches[0], t[1] = e.touches[1]), t
                }

                function Y(e) {
                    for (var t = {
                        pageX: 0,
                        pageY: 0,
                        clientX: 0,
                        clientY: 0,
                        screenX: 0,
                        screenY: 0
                    }, n = 0; n < e.length; n++) {
                        var r = e[n];
                        for (var o in t) t[o] += r[o]
                    }
                    for (var i in t) t[i] /= e.length;
                    return t
                }

                Object.defineProperty(B, "__esModule", {value: !0}), B.coordsToEvent = function (e) {
                    return {
                        coords: e, get page() {
                            return this.coords.page
                        }, get client() {
                            return this.coords.client
                        }, get timeStamp() {
                            return this.coords.timeStamp
                        }, get pageX() {
                            return this.coords.page.x
                        }, get pageY() {
                            return this.coords.page.y
                        }, get clientX() {
                            return this.coords.client.x
                        }, get clientY() {
                            return this.coords.client.y
                        }, get pointerId() {
                            return this.coords.pointerId
                        }, get target() {
                            return this.coords.target
                        }, get type() {
                            return this.coords.type
                        }, get pointerType() {
                            return this.coords.pointerType
                        }, get buttons() {
                            return this.coords.buttons
                        }, preventDefault: function () {
                        }
                    }
                }, B.copyCoords = function (e, t) {
                    e.page = e.page || {}, e.page.x = t.page.x, e.page.y = t.page.y, e.client = e.client || {}, e.client.x = t.client.x, e.client.y = t.client.y, e.timeStamp = t.timeStamp
                }, B.getClientXY = F, B.getEventTargets = function (e) {
                    var t = i.default.func(e.composedPath) ? e.composedPath() : e.path;
                    return [E.getActualElement(t ? t[0] : e.target), E.getActualElement(e.currentTarget)]
                }, B.getPageXY = H, B.getPointerId = function (e) {
                    return i.default.number(e.pointerId) ? e.pointerId : e.identifier
                }, B.getPointerType = function (e) {
                    return i.default.string(e.pointerType) ? e.pointerType : i.default.number(e.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][e.pointerType] : /touch/.test(e.type || "") || e instanceof g.default.Touch ? "touch" : "mouse"
                }, B.getTouchPair = V, B.getXY = U, B.isNativePointer = z, B.newCoords = function () {
                    return {page: {x: 0, y: 0}, client: {x: 0, y: 0}, timeStamp: 0}
                }, B.pointerAverage = Y, Object.defineProperty(B, "pointerExtend", {
                    enumerable: !0, get: function () {
                        return R.default
                    }
                }), B.setCoordDeltas = function (e, t, n) {
                    e.page.x = n.page.x - t.page.x, e.page.y = n.page.y - t.page.y, e.client.x = n.client.x - t.client.x, e.client.y = n.client.y - t.client.y, e.timeStamp = n.timeStamp - t.timeStamp
                }, B.setCoordVelocity = function (e, t) {
                    var n = Math.max(t.timeStamp / 1e3, .001);
                    e.page.x = t.page.x / n, e.page.y = t.page.y / n, e.client.x = t.client.x / n, e.client.y = t.client.y / n, e.timeStamp = n
                }, B.setCoords = function (e, t, n) {
                    var r = t.length > 1 ? Y(t) : t[0];
                    H(r, e.page), F(r, e.client), e.timeStamp = n
                }, B.setZeroCoords = function (e) {
                    e.page.x = 0, e.page.y = 0, e.client.x = 0, e.client.y = 0
                }, B.touchAngle = function (e, t) {
                    var n = t + "X", r = t + "Y", o = V(e), i = o[1][n] - o[0][n], a = o[1][r] - o[0][r];
                    return 180 * Math.atan2(a, i) / Math.PI
                }, B.touchBBox = function (e) {
                    if (!e.length) return null;
                    var t = V(e), n = Math.min(t[0].pageX, t[1].pageX), r = Math.min(t[0].pageY, t[1].pageY),
                        o = Math.max(t[0].pageX, t[1].pageX), i = Math.max(t[0].pageY, t[1].pageY);
                    return {x: n, y: r, left: n, top: r, right: o, bottom: i, width: o - n, height: i - r}
                }, B.touchDistance = function (e, t) {
                    var n = t + "X", r = t + "Y", o = V(e), i = o[0][n] - o[1][n], a = o[0][r] - o[1][r];
                    return (0, q.default)(i, a)
                };
                var W = {};

                function G(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(W, "__esModule", {value: !0}), W.BaseEvent = void 0;
                var X = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), G(this, "immediatePropagationStopped", !1), G(this, "propagationStopped", !1), this._interaction = t
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "preventDefault", value: function () {
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.propagationStopped = !0
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.immediatePropagationStopped = this.propagationStopped = !0
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();
                W.BaseEvent = X, Object.defineProperty(X.prototype, "interaction", {
                    get: function () {
                        return this._interaction._proxy
                    }, set: function () {
                    }
                });
                var K = {};
                Object.defineProperty(K, "__esModule", {value: !0}), K.remove = K.merge = K.from = K.findIndex = K.find = K.contains = void 0, K.contains = function (e, t) {
                    return -1 !== e.indexOf(t)
                }, K.remove = function (e, t) {
                    return e.splice(e.indexOf(t), 1)
                };
                var $ = function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        e.push(r)
                    }
                    return e
                };
                K.merge = $, K.from = function (e) {
                    return $([], e)
                };
                var J = function (e, t) {
                    for (var n = 0; n < e.length; n++) if (t(e[n], n, e)) return n;
                    return -1
                };
                K.findIndex = J, K.find = function (e, t) {
                    return e[J(e, t)]
                };
                var Q = {};

                function Z(e) {
                    return Z = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, Z(e)
                }

                function ee(e, t) {
                    return ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    }, ee(e, t)
                }

                function te(e, t) {
                    if (t && ("object" === Z(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return ne(e)
                }

                function ne(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function re(e) {
                    return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, re(e)
                }

                function oe(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Q, "__esModule", {value: !0}), Q.DropEvent = void 0;
                var ie = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {writable: !1}), t && ee(e, t)
                    }(a, e);
                    var t, n, r, o, i = (r = a, o = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = re(r);
                        if (o) {
                            var n = re(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return te(this, e)
                    });

                    function a(e, t, n) {
                        var r;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), oe(ne(r = i.call(this, t._interaction)), "dropzone", void 0), oe(ne(r), "dragEvent", void 0), oe(ne(r), "relatedTarget", void 0), oe(ne(r), "draggable", void 0), oe(ne(r), "propagationStopped", !1), oe(ne(r), "immediatePropagationStopped", !1);
                        var o = "dragleave" === n ? e.prev : e.cur, s = o.element, l = o.dropzone;
                        return r.type = n, r.target = s, r.currentTarget = s, r.dropzone = l, r.dragEvent = t, r.relatedTarget = t.target, r.draggable = t.interactable, r.timeStamp = t.timeStamp, r
                    }

                    return t = a, (n = [{
                        key: "reject", value: function () {
                            var e = this, t = this._interaction.dropState;
                            if ("dropactivate" === this.type || this.dropzone && t.cur.dropzone === this.dropzone && t.cur.element === this.target) if (t.prev.dropzone = this.dropzone, t.prev.element = this.target, t.rejected = !0, t.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
                                var n = t.activeDrops, r = K.findIndex(n, (function (t) {
                                    var n = t.dropzone, r = t.element;
                                    return n === e.dropzone && r === e.target
                                }));
                                t.activeDrops.splice(r, 1);
                                var o = new a(t, this.dragEvent, "dropdeactivate");
                                o.dropzone = this.dropzone, o.target = this.target, this.dropzone.fire(o)
                            } else this.dropzone.fire(new a(t, this.dragEvent, "dragleave"))
                        }
                    }, {
                        key: "preventDefault", value: function () {
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.propagationStopped = !0
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.immediatePropagationStopped = this.propagationStopped = !0
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), a
                }(W.BaseEvent);
                Q.DropEvent = ie;
                var ae = {};

                function se(e, t) {
                    for (var n = 0; n < e.slice().length; n++) {
                        var r = e.slice()[n], o = r.dropzone, i = r.element;
                        t.dropzone = o, t.target = i, o.fire(t), t.propagationStopped = t.immediatePropagationStopped = !1
                    }
                }

                function le(e, t) {
                    for (var n = function (e, t) {
                        for (var n = e.interactables, r = [], o = 0; o < n.list.length; o++) {
                            var a = n.list[o];
                            if (a.options.drop.enabled) {
                                var s = a.options.drop.accept;
                                if (!(i.default.element(s) && s !== t || i.default.string(s) && !E.matchesSelector(t, s) || i.default.func(s) && !s({
                                    dropzone: a,
                                    draggableElement: t
                                }))) for (var l = i.default.string(a.target) ? a._context.querySelectorAll(a.target) : i.default.array(a.target) ? a.target : [a.target], c = 0; c < l.length; c++) {
                                    var u = l[c];
                                    u !== t && r.push({dropzone: a, element: u, rect: a.getRect(u)})
                                }
                            }
                        }
                        return r
                    }(e, t), r = 0; r < n.length; r++) {
                        var o = n[r];
                        o.rect = o.dropzone.getRect(o.element)
                    }
                    return n
                }

                function ce(e, t, n) {
                    for (var r = e.dropState, o = e.interactable, i = e.element, a = [], s = 0; s < r.activeDrops.length; s++) {
                        var l = r.activeDrops[s], c = l.dropzone, u = l.element, d = l.rect;
                        a.push(c.dropCheck(t, n, o, i, u, d) ? u : null)
                    }
                    var p = E.indexOfDeepestElement(a);
                    return r.activeDrops[p] || null
                }

                function ue(e, t, n) {
                    var r = e.dropState,
                        o = {enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null};
                    return "dragstart" === n.type && (o.activate = new Q.DropEvent(r, n, "dropactivate"), o.activate.target = null, o.activate.dropzone = null), "dragend" === n.type && (o.deactivate = new Q.DropEvent(r, n, "dropdeactivate"), o.deactivate.target = null, o.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (o.leave = new Q.DropEvent(r, n, "dragleave"), n.dragLeave = o.leave.target = r.prev.element, n.prevDropzone = o.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (o.enter = new Q.DropEvent(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), "dragend" === n.type && r.cur.dropzone && (o.drop = new Q.DropEvent(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), "dragmove" === n.type && r.cur.dropzone && (o.move = new Q.DropEvent(r, n, "dropmove"), o.move.dragmove = n, n.dropzone = r.cur.dropzone)), o
                }

                function de(e, t) {
                    var n = e.dropState, r = n.activeDrops, o = n.cur, i = n.prev;
                    t.leave && i.dropzone.fire(t.leave), t.enter && o.dropzone.fire(t.enter), t.move && o.dropzone.fire(t.move), t.drop && o.dropzone.fire(t.drop), t.deactivate && se(r, t.deactivate), n.prev.dropzone = o.dropzone, n.prev.element = o.element
                }

                function pe(e, t) {
                    var n = e.interaction, r = e.iEvent, o = e.event;
                    if ("dragmove" === r.type || "dragend" === r.type) {
                        var i = n.dropState;
                        t.dynamicDrop && (i.activeDrops = le(t, n.element));
                        var a = r, s = ce(n, a, o);
                        i.rejected = i.rejected && !!s && s.dropzone === i.cur.dropzone && s.element === i.cur.element, i.cur.dropzone = s && s.dropzone, i.cur.element = s && s.element, i.events = ue(n, 0, a)
                    }
                }

                Object.defineProperty(ae, "__esModule", {value: !0}), ae.default = void 0;
                var fe = {
                    id: "actions/drop",
                    install: function (e) {
                        var t = e.actions, n = e.interactStatic, r = e.Interactable, o = e.defaults;
                        e.usePlugin(d.default), r.prototype.dropzone = function (e) {
                            return function (e, t) {
                                if (i.default.object(t)) {
                                    if (e.options.drop.enabled = !1 !== t.enabled, t.listeners) {
                                        var n = (0, L.default)(t.listeners),
                                            r = Object.keys(n).reduce((function (e, t) {
                                                return e[/^(enter|leave)/.test(t) ? "drag".concat(t) : /^(activate|deactivate|move)/.test(t) ? "drop".concat(t) : t] = n[t], e
                                            }), {});
                                        e.off(e.options.drop.listeners), e.on(r), e.options.drop.listeners = r
                                    }
                                    return i.default.func(t.ondrop) && e.on("drop", t.ondrop), i.default.func(t.ondropactivate) && e.on("dropactivate", t.ondropactivate), i.default.func(t.ondropdeactivate) && e.on("dropdeactivate", t.ondropdeactivate), i.default.func(t.ondragenter) && e.on("dragenter", t.ondragenter), i.default.func(t.ondragleave) && e.on("dragleave", t.ondragleave), i.default.func(t.ondropmove) && e.on("dropmove", t.ondropmove), /^(pointer|center)$/.test(t.overlap) ? e.options.drop.overlap = t.overlap : i.default.number(t.overlap) && (e.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), "accept" in t && (e.options.drop.accept = t.accept), "checker" in t && (e.options.drop.checker = t.checker), e
                                }
                                return i.default.bool(t) ? (e.options.drop.enabled = t, e) : e.options.drop
                            }(this, e)
                        }, r.prototype.dropCheck = function (e, t, n, r, o, a) {
                            return function (e, t, n, r, o, a, s) {
                                var l = !1;
                                if (!(s = s || e.getRect(a))) return !!e.options.drop.checker && e.options.drop.checker(t, n, l, e, a, r, o);
                                var c = e.options.drop.overlap;
                                if ("pointer" === c) {
                                    var u = (0, I.default)(r, o, "drag"), d = B.getPageXY(t);
                                    d.x += u.x, d.y += u.y;
                                    var p = d.x > s.left && d.x < s.right, f = d.y > s.top && d.y < s.bottom;
                                    l = p && f
                                }
                                var h = r.getRect(o);
                                if (h && "center" === c) {
                                    var m = h.left + h.width / 2, g = h.top + h.height / 2;
                                    l = m >= s.left && m <= s.right && g >= s.top && g <= s.bottom
                                }
                                return h && i.default.number(c) && (l = Math.max(0, Math.min(s.right, h.right) - Math.max(s.left, h.left)) * Math.max(0, Math.min(s.bottom, h.bottom) - Math.max(s.top, h.top)) / (h.width * h.height) >= c), e.options.drop.checker && (l = e.options.drop.checker(t, n, l, e, a, r, o)), l
                            }(this, e, t, n, r, o, a)
                        }, n.dynamicDrop = function (t) {
                            return i.default.bool(t) ? (e.dynamicDrop = t, n) : e.dynamicDrop
                        }, (0, P.default)(t.phaselessTypes, {
                            dragenter: !0,
                            dragleave: !0,
                            dropactivate: !0,
                            dropdeactivate: !0,
                            dropmove: !0,
                            drop: !0
                        }), t.methodDict.drop = "dropzone", e.dynamicDrop = !1, o.actions.drop = fe.defaults
                    },
                    listeners: {
                        "interactions:before-action-start": function (e) {
                            var t = e.interaction;
                            "drag" === t.prepared.name && (t.dropState = {
                                cur: {dropzone: null, element: null},
                                prev: {dropzone: null, element: null},
                                rejected: null,
                                events: null,
                                activeDrops: []
                            })
                        }, "interactions:after-action-start": function (e, t) {
                            var n = e.interaction, r = (e.event, e.iEvent);
                            if ("drag" === n.prepared.name) {
                                var o = n.dropState;
                                o.activeDrops = null, o.events = null, o.activeDrops = le(t, n.element), o.events = ue(n, 0, r), o.events.activate && (se(o.activeDrops, o.events.activate), t.fire("actions/drop:start", {
                                    interaction: n,
                                    dragEvent: r
                                }))
                            }
                        }, "interactions:action-move": pe, "interactions:after-action-move": function (e, t) {
                            var n = e.interaction, r = e.iEvent;
                            "drag" === n.prepared.name && (de(n, n.dropState.events), t.fire("actions/drop:move", {
                                interaction: n,
                                dragEvent: r
                            }), n.dropState.events = {})
                        }, "interactions:action-end": function (e, t) {
                            if ("drag" === e.interaction.prepared.name) {
                                var n = e.interaction, r = e.iEvent;
                                pe(e, t), de(n, n.dropState.events), t.fire("actions/drop:end", {
                                    interaction: n,
                                    dragEvent: r
                                })
                            }
                        }, "interactions:stop": function (e) {
                            var t = e.interaction;
                            if ("drag" === t.prepared.name) {
                                var n = t.dropState;
                                n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1)
                            }
                        }
                    },
                    getActiveDrops: le,
                    getDrop: ce,
                    getDropEvents: ue,
                    fireDropEvents: de,
                    defaults: {enabled: !1, accept: null, overlap: "pointer"}
                }, he = fe;
                ae.default = he;
                var me = {};

                function ge(e) {
                    var t = e.interaction, n = e.iEvent, r = e.phase;
                    if ("gesture" === t.prepared.name) {
                        var o = t.pointers.map((function (e) {
                            return e.pointer
                        })), a = "start" === r, s = "end" === r, l = t.interactable.options.deltaSource;
                        if (n.touches = [o[0], o[1]], a) n.distance = B.touchDistance(o, l), n.box = B.touchBBox(o), n.scale = 1, n.ds = 0, n.angle = B.touchAngle(o, l), n.da = 0, t.gesture.startDistance = n.distance, t.gesture.startAngle = n.angle; else if (s) {
                            var c = t.prevEvent;
                            n.distance = c.distance, n.box = c.box, n.scale = c.scale, n.ds = 0, n.angle = c.angle, n.da = 0
                        } else n.distance = B.touchDistance(o, l), n.box = B.touchBBox(o), n.scale = n.distance / t.gesture.startDistance, n.angle = B.touchAngle(o, l), n.ds = n.scale - t.gesture.scale, n.da = n.angle - t.gesture.angle;
                        t.gesture.distance = n.distance, t.gesture.angle = n.angle, i.default.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (t.gesture.scale = n.scale)
                    }
                }

                Object.defineProperty(me, "__esModule", {value: !0}), me.default = void 0;
                var ve = {
                    id: "actions/gesture",
                    before: ["actions/drag", "actions/resize"],
                    install: function (e) {
                        var t = e.actions, n = e.Interactable, r = e.defaults;
                        n.prototype.gesturable = function (e) {
                            return i.default.object(e) ? (this.options.gesture.enabled = !1 !== e.enabled, this.setPerAction("gesture", e), this.setOnEvents("gesture", e), this) : i.default.bool(e) ? (this.options.gesture.enabled = e, this) : this.options.gesture
                        }, t.map.gesture = ve, t.methodDict.gesture = "gesturable", r.actions.gesture = ve.defaults
                    },
                    listeners: {
                        "interactions:action-start": ge,
                        "interactions:action-move": ge,
                        "interactions:action-end": ge,
                        "interactions:new": function (e) {
                            e.interaction.gesture = {angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0}
                        },
                        "auto-start:check": function (e) {
                            if (!(e.interaction.pointers.length < 2)) {
                                var t = e.interactable.options.gesture;
                                if (t && t.enabled) return e.action = {name: "gesture"}, !1
                            }
                        }
                    },
                    defaults: {},
                    getCursor: function () {
                        return ""
                    }
                }, ye = ve;
                me.default = ye;
                var be = {};

                function _e(e, t, n, r, o, a, s) {
                    if (!t) return !1;
                    if (!0 === t) {
                        var l = i.default.number(a.width) ? a.width : a.right - a.left,
                            c = i.default.number(a.height) ? a.height : a.bottom - a.top;
                        if (s = Math.min(s, Math.abs(("left" === e || "right" === e ? l : c) / 2)), l < 0 && ("left" === e ? e = "right" : "right" === e && (e = "left")), c < 0 && ("top" === e ? e = "bottom" : "bottom" === e && (e = "top")), "left" === e) {
                            var u = l >= 0 ? a.left : a.right;
                            return n.x < u + s
                        }
                        if ("top" === e) {
                            var d = c >= 0 ? a.top : a.bottom;
                            return n.y < d + s
                        }
                        if ("right" === e) return n.x > (l >= 0 ? a.right : a.left) - s;
                        if ("bottom" === e) return n.y > (c >= 0 ? a.bottom : a.top) - s
                    }
                    return !!i.default.element(r) && (i.default.element(t) ? t === r : E.matchesUpTo(r, t, o))
                }

                function we(e) {
                    var t = e.iEvent, n = e.interaction;
                    if ("resize" === n.prepared.name && n.resizeAxes) {
                        var r = t;
                        n.interactable.options.resize.square ? ("y" === n.resizeAxes ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, "x" === n.resizeAxes ? r.delta.y = 0 : "y" === n.resizeAxes && (r.delta.x = 0))
                    }
                }

                Object.defineProperty(be, "__esModule", {value: !0}), be.default = void 0;
                var xe = {
                    id: "actions/resize",
                    before: ["actions/drag"],
                    install: function (e) {
                        var t = e.actions, n = e.browser, r = e.Interactable, o = e.defaults;
                        xe.cursors = function (e) {
                            return e.isIe9 ? {
                                x: "e-resize",
                                y: "s-resize",
                                xy: "se-resize",
                                top: "n-resize",
                                left: "w-resize",
                                bottom: "s-resize",
                                right: "e-resize",
                                topleft: "se-resize",
                                bottomright: "se-resize",
                                topright: "ne-resize",
                                bottomleft: "ne-resize"
                            } : {
                                x: "ew-resize",
                                y: "ns-resize",
                                xy: "nwse-resize",
                                top: "ns-resize",
                                left: "ew-resize",
                                bottom: "ns-resize",
                                right: "ew-resize",
                                topleft: "nwse-resize",
                                bottomright: "nwse-resize",
                                topright: "nesw-resize",
                                bottomleft: "nesw-resize"
                            }
                        }(n), xe.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function (t) {
                            return function (e, t, n) {
                                return i.default.object(t) ? (e.options.resize.enabled = !1 !== t.enabled, e.setPerAction("resize", t), e.setOnEvents("resize", t), i.default.string(t.axis) && /^x$|^y$|^xy$/.test(t.axis) ? e.options.resize.axis = t.axis : null === t.axis && (e.options.resize.axis = n.defaults.actions.resize.axis), i.default.bool(t.preserveAspectRatio) ? e.options.resize.preserveAspectRatio = t.preserveAspectRatio : i.default.bool(t.square) && (e.options.resize.square = t.square), e) : i.default.bool(t) ? (e.options.resize.enabled = t, e) : e.options.resize
                            }(this, t, e)
                        }, t.map.resize = xe, t.methodDict.resize = "resizable", o.actions.resize = xe.defaults
                    },
                    listeners: {
                        "interactions:new": function (e) {
                            e.interaction.resizeAxes = "xy"
                        }, "interactions:action-start": function (e) {
                            !function (e) {
                                var t = e.iEvent, n = e.interaction;
                                if ("resize" === n.prepared.name && n.prepared.edges) {
                                    var r = t, o = n.rect;
                                    n._rects = {
                                        start: (0, P.default)({}, o),
                                        corrected: (0, P.default)({}, o),
                                        previous: (0, P.default)({}, o),
                                        delta: {left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0}
                                    }, r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta
                                }
                            }(e), we(e)
                        }, "interactions:action-move": function (e) {
                            !function (e) {
                                var t = e.iEvent, n = e.interaction;
                                if ("resize" === n.prepared.name && n.prepared.edges) {
                                    var r = t, o = n.interactable.options.resize.invert,
                                        i = "reposition" === o || "negate" === o, a = n.rect, s = n._rects, l = s.start,
                                        c = s.corrected, u = s.delta, d = s.previous;
                                    if ((0, P.default)(d, c), i) {
                                        if ((0, P.default)(c, a), "reposition" === o) {
                                            if (c.top > c.bottom) {
                                                var p = c.top;
                                                c.top = c.bottom, c.bottom = p
                                            }
                                            if (c.left > c.right) {
                                                var f = c.left;
                                                c.left = c.right, c.right = f
                                            }
                                        }
                                    } else c.top = Math.min(a.top, l.bottom), c.bottom = Math.max(a.bottom, l.top), c.left = Math.min(a.left, l.right), c.right = Math.max(a.right, l.left);
                                    for (var h in c.width = c.right - c.left, c.height = c.bottom - c.top, c) u[h] = c[h] - d[h];
                                    r.edges = n.prepared.edges, r.rect = c, r.deltaRect = u
                                }
                            }(e), we(e)
                        }, "interactions:action-end": function (e) {
                            var t = e.iEvent, n = e.interaction;
                            if ("resize" === n.prepared.name && n.prepared.edges) {
                                var r = t;
                                r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta
                            }
                        }, "auto-start:check": function (e) {
                            var t = e.interaction, n = e.interactable, r = e.element, o = e.rect, a = e.buttons;
                            if (o) {
                                var s = (0, P.default)({}, t.coords.cur.page), l = n.options.resize;
                                if (l && l.enabled && (!t.pointerIsDown || !/mouse|pointer/.test(t.pointerType) || 0 != (a & l.mouseButtons))) {
                                    if (i.default.object(l.edges)) {
                                        var c = {left: !1, right: !1, top: !1, bottom: !1};
                                        for (var u in c) c[u] = _e(u, l.edges[u], s, t._latestPointer.eventTarget, r, o, l.margin || xe.defaultMargin);
                                        c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (e.action = {
                                            name: "resize",
                                            edges: c
                                        })
                                    } else {
                                        var d = "y" !== l.axis && s.x > o.right - xe.defaultMargin,
                                            p = "x" !== l.axis && s.y > o.bottom - xe.defaultMargin;
                                        (d || p) && (e.action = {name: "resize", axes: (d ? "x" : "") + (p ? "y" : "")})
                                    }
                                    return !e.action && void 0
                                }
                            }
                        }
                    },
                    defaults: {
                        square: !1,
                        preserveAspectRatio: !1,
                        axis: "xy",
                        margin: NaN,
                        edges: null,
                        invert: "none"
                    },
                    cursors: null,
                    getCursor: function (e) {
                        var t = e.edges, n = e.axis, r = e.name, o = xe.cursors, i = null;
                        if (n) i = o[r + n]; else if (t) {
                            for (var a = "", s = ["top", "bottom", "left", "right"], l = 0; l < s.length; l++) {
                                var c = s[l];
                                t[c] && (a += c)
                            }
                            i = o[a]
                        }
                        return i
                    },
                    defaultMargin: null
                }, Ee = xe;
                be.default = Ee;
                var ke = {};
                Object.defineProperty(ke, "__esModule", {value: !0}), ke.default = void 0;
                var Se = {
                    id: "actions", install: function (e) {
                        e.usePlugin(me.default), e.usePlugin(be.default), e.usePlugin(d.default), e.usePlugin(ae.default)
                    }
                };
                ke.default = Se;
                var Te = {};
                Object.defineProperty(Te, "__esModule", {value: !0}), Te.default = void 0;
                var Ce, Ae, Oe = 0, Pe = {
                    request: function (e) {
                        return Ce(e)
                    }, cancel: function (e) {
                        return Ae(e)
                    }, init: function (e) {
                        if (Ce = e.requestAnimationFrame, Ae = e.cancelAnimationFrame, !Ce) for (var t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length; n++) {
                            var r = t[n];
                            Ce = e["".concat(r, "RequestAnimationFrame")], Ae = e["".concat(r, "CancelAnimationFrame")] || e["".concat(r, "CancelRequestAnimationFrame")]
                        }
                        Ce = Ce && Ce.bind(e), Ae = Ae && Ae.bind(e), Ce || (Ce = function (t) {
                            var n = Date.now(), r = Math.max(0, 16 - (n - Oe)), o = e.setTimeout((function () {
                                t(n + r)
                            }), r);
                            return Oe = n + r, o
                        }, Ae = function (e) {
                            return clearTimeout(e)
                        })
                    }
                };
                Te.default = Pe;
                var Me = {};
                Object.defineProperty(Me, "__esModule", {value: !0}), Me.default = void 0, Me.getContainer = Ne, Me.getScroll = Ie, Me.getScrollSize = function (e) {
                    return i.default.window(e) && (e = window.document.body), {x: e.scrollWidth, y: e.scrollHeight}
                }, Me.getScrollSizeDelta = function (e, t) {
                    var n = e.interaction, r = e.element, o = n && n.interactable.options[n.prepared.name].autoScroll;
                    if (!o || !o.enabled) return t(), {x: 0, y: 0};
                    var i = Ne(o.container, n.interactable, r), a = Ie(i);
                    t();
                    var s = Ie(i);
                    return {x: s.x - a.x, y: s.y - a.y}
                };
                var De = {
                    defaults: {enabled: !1, margin: 60, container: null, speed: 300},
                    now: Date.now,
                    interaction: null,
                    i: 0,
                    x: 0,
                    y: 0,
                    isScrolling: !1,
                    prevTime: 0,
                    margin: 0,
                    speed: 0,
                    start: function (e) {
                        De.isScrolling = !0, Te.default.cancel(De.i), e.autoScroll = De, De.interaction = e, De.prevTime = De.now(), De.i = Te.default.request(De.scroll)
                    },
                    stop: function () {
                        De.isScrolling = !1, De.interaction && (De.interaction.autoScroll = null), Te.default.cancel(De.i)
                    },
                    scroll: function () {
                        var e = De.interaction, t = e.interactable, n = e.element, r = e.prepared.name,
                            o = t.options[r].autoScroll, a = Ne(o.container, t, n), s = De.now(),
                            l = (s - De.prevTime) / 1e3, c = o.speed * l;
                        if (c >= 1) {
                            var u = {x: De.x * c, y: De.y * c};
                            if (u.x || u.y) {
                                var d = Ie(a);
                                i.default.window(a) ? a.scrollBy(u.x, u.y) : a && (a.scrollLeft += u.x, a.scrollTop += u.y);
                                var p = Ie(a), f = {x: p.x - d.x, y: p.y - d.y};
                                (f.x || f.y) && t.fire({
                                    type: "autoscroll",
                                    target: n,
                                    interactable: t,
                                    delta: f,
                                    interaction: e,
                                    container: a
                                })
                            }
                            De.prevTime = s
                        }
                        De.isScrolling && (Te.default.cancel(De.i), De.i = Te.default.request(De.scroll))
                    },
                    check: function (e, t) {
                        var n;
                        return null == (n = e.options[t].autoScroll) ? void 0 : n.enabled
                    },
                    onInteractionMove: function (e) {
                        var t = e.interaction, n = e.pointer;
                        if (t.interacting() && De.check(t.interactable, t.prepared.name)) if (t.simulation) De.x = De.y = 0; else {
                            var r, o, a, s, l = t.interactable, c = t.element, u = t.prepared.name,
                                d = l.options[u].autoScroll, p = Ne(d.container, l, c);
                            if (i.default.window(p)) s = n.clientX < De.margin, r = n.clientY < De.margin, o = n.clientX > p.innerWidth - De.margin, a = n.clientY > p.innerHeight - De.margin; else {
                                var f = E.getElementClientRect(p);
                                s = n.clientX < f.left + De.margin, r = n.clientY < f.top + De.margin, o = n.clientX > f.right - De.margin, a = n.clientY > f.bottom - De.margin
                            }
                            De.x = o ? 1 : s ? -1 : 0, De.y = a ? 1 : r ? -1 : 0, De.isScrolling || (De.margin = d.margin, De.speed = d.speed, De.start(t))
                        }
                    }
                };

                function Ne(e, n, r) {
                    return (i.default.string(e) ? (0, M.getStringOptionResult)(e, n, r) : e) || (0, t.getWindow)(r)
                }

                function Ie(e) {
                    return i.default.window(e) && (e = window.document.body), {x: e.scrollLeft, y: e.scrollTop}
                }

                var Le = {
                    id: "auto-scroll", install: function (e) {
                        var t = e.defaults, n = e.actions;
                        e.autoScroll = De, De.now = function () {
                            return e.now()
                        }, n.phaselessTypes.autoscroll = !0, t.perAction.autoScroll = De.defaults
                    }, listeners: {
                        "interactions:new": function (e) {
                            e.interaction.autoScroll = null
                        }, "interactions:destroy": function (e) {
                            e.interaction.autoScroll = null, De.stop(), De.interaction && (De.interaction = null)
                        }, "interactions:stop": De.stop, "interactions:action-move": function (e) {
                            return De.onInteractionMove(e)
                        }
                    }
                }, je = Le;
                Me.default = je;
                var qe = {};
                Object.defineProperty(qe, "__esModule", {value: !0}), qe.copyAction = function (e, t) {
                    return e.name = t.name, e.axis = t.axis, e.edges = t.edges, e
                }, qe.sign = void 0, qe.warnOnce = function (e, n) {
                    var r = !1;
                    return function () {
                        return r || (t.window.console.warn(n), r = !0), e.apply(this, arguments)
                    }
                }, qe.sign = function (e) {
                    return e >= 0 ? 1 : -1
                };
                var Re = {};

                function Be(e) {
                    return i.default.bool(e) ? (this.options.styleCursor = e, this) : null === e ? (delete this.options.styleCursor, this) : this.options.styleCursor
                }

                function ze(e) {
                    return i.default.func(e) ? (this.options.actionChecker = e, this) : null === e ? (delete this.options.actionChecker, this) : this.options.actionChecker
                }

                Object.defineProperty(Re, "__esModule", {value: !0}), Re.default = void 0;
                var Ue = {
                    id: "auto-start/interactableMethods", install: function (e) {
                        var t = e.Interactable;
                        t.prototype.getAction = function (t, n, r, o) {
                            var i = function (e, t, n, r, o) {
                                var i = e.getRect(r), a = {
                                    action: null,
                                    interactable: e,
                                    interaction: n,
                                    element: r,
                                    rect: i,
                                    buttons: t.buttons || {0: 1, 1: 4, 3: 8, 4: 16}[t.button]
                                };
                                return o.fire("auto-start:check", a), a.action
                            }(this, n, r, o, e);
                            return this.options.actionChecker ? this.options.actionChecker(t, n, i, this, o, r) : i
                        }, t.prototype.ignoreFrom = (0, qe.warnOnce)((function (e) {
                            return this._backCompatOption("ignoreFrom", e)
                        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), t.prototype.allowFrom = (0, qe.warnOnce)((function (e) {
                            return this._backCompatOption("allowFrom", e)
                        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), t.prototype.actionChecker = ze, t.prototype.styleCursor = Be
                    }
                };
                Re.default = Ue;
                var He = {};

                function Fe(e, t, n, r, o) {
                    return t.testIgnoreAllow(t.options[e.name], n, r) && t.options[e.name].enabled && Ge(t, n, e, o) ? e : null
                }

                function Ve(e, t, n, r, o, i, a) {
                    for (var s = 0, l = r.length; s < l; s++) {
                        var c = r[s], u = o[s], d = c.getAction(t, n, e, u);
                        if (d) {
                            var p = Fe(d, c, u, i, a);
                            if (p) return {action: p, interactable: c, element: u}
                        }
                    }
                    return {action: null, interactable: null, element: null}
                }

                function Ye(e, t, n, r, o) {
                    var a = [], s = [], l = r;

                    function c(e) {
                        a.push(e), s.push(l)
                    }

                    for (; i.default.element(l);) {
                        a = [], s = [], o.interactables.forEachMatch(l, c);
                        var u = Ve(e, t, n, a, s, r, o);
                        if (u.action && !u.interactable.options[u.action.name].manualStart) return u;
                        l = E.parentNode(l)
                    }
                    return {action: null, interactable: null, element: null}
                }

                function We(e, t, n) {
                    var r = t.action, o = t.interactable, i = t.element;
                    r = r || {name: null}, e.interactable = o, e.element = i, (0, qe.copyAction)(e.prepared, r), e.rect = o && r.name ? o.getRect(i) : null, $e(e, n), n.fire("autoStart:prepared", {interaction: e})
                }

                function Ge(e, t, n, r) {
                    var o = e.options, i = o[n.name].max, a = o[n.name].maxPerElement, s = r.autoStart.maxInteractions,
                        l = 0, c = 0, u = 0;
                    if (!(i && a && s)) return !1;
                    for (var d = 0; d < r.interactions.list.length; d++) {
                        var p = r.interactions.list[d], f = p.prepared.name;
                        if (p.interacting()) {
                            if (++l >= s) return !1;
                            if (p.interactable === e) {
                                if ((c += f === n.name ? 1 : 0) >= i) return !1;
                                if (p.element === t && (u++, f === n.name && u >= a)) return !1
                            }
                        }
                    }
                    return s > 0
                }

                function Xe(e, t) {
                    return i.default.number(e) ? (t.autoStart.maxInteractions = e, this) : t.autoStart.maxInteractions
                }

                function Ke(e, t, n) {
                    var r = n.autoStart.cursorElement;
                    r && r !== e && (r.style.cursor = ""), e.ownerDocument.documentElement.style.cursor = t, e.style.cursor = t, n.autoStart.cursorElement = t ? e : null
                }

                function $e(e, t) {
                    var n = e.interactable, r = e.element, o = e.prepared;
                    if ("mouse" === e.pointerType && n && n.options.styleCursor) {
                        var a = "";
                        if (o.name) {
                            var s = n.options[o.name].cursorChecker;
                            a = i.default.func(s) ? s(o, n, r, e._interacting) : t.actions.map[o.name].getCursor(o)
                        }
                        Ke(e.element, a || "", t)
                    } else t.autoStart.cursorElement && Ke(t.autoStart.cursorElement, "", t)
                }

                Object.defineProperty(He, "__esModule", {value: !0}), He.default = void 0;
                var Je = {
                    id: "auto-start/base", before: ["actions"], install: function (e) {
                        var t = e.interactStatic, n = e.defaults;
                        e.usePlugin(Re.default), n.base.actionChecker = null, n.base.styleCursor = !0, (0, P.default)(n.perAction, {
                            manualStart: !1,
                            max: 1 / 0,
                            maxPerElement: 1,
                            allowFrom: null,
                            ignoreFrom: null,
                            mouseButtons: 1
                        }), t.maxInteractions = function (t) {
                            return Xe(t, e)
                        }, e.autoStart = {maxInteractions: 1 / 0, withinInteractionLimit: Ge, cursorElement: null}
                    }, listeners: {
                        "interactions:down": function (e, t) {
                            var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                            n.interacting() || We(n, Ye(n, r, o, i, t), t)
                        }, "interactions:move": function (e, t) {
                            !function (e, t) {
                                var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                                "mouse" !== n.pointerType || n.pointerIsDown || n.interacting() || We(n, Ye(n, r, o, i, t), t)
                            }(e, t), function (e, t) {
                                var n = e.interaction;
                                if (n.pointerIsDown && !n.interacting() && n.pointerWasMoved && n.prepared.name) {
                                    t.fire("autoStart:before-start", e);
                                    var r = n.interactable, o = n.prepared.name;
                                    o && r && (r.options[o].manualStart || !Ge(r, n.element, n.prepared, t) ? n.stop() : (n.start(n.prepared, r, n.element), $e(n, t)))
                                }
                            }(e, t)
                        }, "interactions:stop": function (e, t) {
                            var n = e.interaction, r = n.interactable;
                            r && r.options.styleCursor && Ke(n.element, "", t)
                        }
                    }, maxInteractions: Xe, withinInteractionLimit: Ge, validateAction: Fe
                }, Qe = Je;
                He.default = Qe;
                var Ze = {};
                Object.defineProperty(Ze, "__esModule", {value: !0}), Ze.default = void 0;
                var et = {
                    id: "auto-start/dragAxis", listeners: {
                        "autoStart:before-start": function (e, t) {
                            var n = e.interaction, r = e.eventTarget, o = e.dx, a = e.dy;
                            if ("drag" === n.prepared.name) {
                                var s = Math.abs(o), l = Math.abs(a), c = n.interactable.options.drag, u = c.startAxis,
                                    d = s > l ? "x" : s < l ? "y" : "xy";
                                if (n.prepared.axis = "start" === c.lockAxis ? d[0] : c.lockAxis, "xy" !== d && "xy" !== u && u !== d) {
                                    n.prepared.name = null;
                                    for (var p = r, f = function (e) {
                                        if (e !== n.interactable) {
                                            var o = n.interactable.options.drag;
                                            if (!o.manualStart && e.testIgnoreAllow(o, p, r)) {
                                                var i = e.getAction(n.downPointer, n.downEvent, n, p);
                                                if (i && "drag" === i.name && function (e, t) {
                                                    if (!t) return !1;
                                                    var n = t.options.drag.startAxis;
                                                    return "xy" === e || "xy" === n || n === e
                                                }(d, e) && He.default.validateAction(i, e, p, r, t)) return e
                                            }
                                        }
                                    }; i.default.element(p);) {
                                        var h = t.interactables.forEachMatch(p, f);
                                        if (h) {
                                            n.prepared.name = "drag", n.interactable = h, n.element = p;
                                            break
                                        }
                                        p = (0, E.parentNode)(p)
                                    }
                                }
                            }
                        }
                    }
                };
                Ze.default = et;
                var tt = {};

                function nt(e) {
                    var t = e.prepared && e.prepared.name;
                    if (!t) return null;
                    var n = e.interactable.options;
                    return n[t].hold || n[t].delay
                }

                Object.defineProperty(tt, "__esModule", {value: !0}), tt.default = void 0;
                var rt = {
                    id: "auto-start/hold", install: function (e) {
                        var t = e.defaults;
                        e.usePlugin(He.default), t.perAction.hold = 0, t.perAction.delay = 0
                    }, listeners: {
                        "interactions:new": function (e) {
                            e.interaction.autoStartHoldTimer = null
                        }, "autoStart:prepared": function (e) {
                            var t = e.interaction, n = nt(t);
                            n > 0 && (t.autoStartHoldTimer = setTimeout((function () {
                                t.start(t.prepared, t.interactable, t.element)
                            }), n))
                        }, "interactions:move": function (e) {
                            var t = e.interaction, n = e.duplicate;
                            t.autoStartHoldTimer && t.pointerWasMoved && !n && (clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null)
                        }, "autoStart:before-start": function (e) {
                            var t = e.interaction;
                            nt(t) > 0 && (t.prepared.name = null)
                        }
                    }, getHoldDuration: nt
                }, ot = rt;
                tt.default = ot;
                var it = {};
                Object.defineProperty(it, "__esModule", {value: !0}), it.default = void 0;
                var at = {
                    id: "auto-start", install: function (e) {
                        e.usePlugin(He.default), e.usePlugin(tt.default), e.usePlugin(Ze.default)
                    }
                };
                it.default = at;
                var st = {};

                function lt(e) {
                    return /^(always|never|auto)$/.test(e) ? (this.options.preventDefault = e, this) : i.default.bool(e) ? (this.options.preventDefault = e ? "always" : "never", this) : this.options.preventDefault
                }

                function ct(e) {
                    var t = e.interaction, n = e.event;
                    t.interactable && t.interactable.checkAndPreventDefault(n)
                }

                function ut(e) {
                    var n = e.Interactable;
                    n.prototype.preventDefault = lt, n.prototype.checkAndPreventDefault = function (n) {
                        return function (e, n, r) {
                            var o = e.options.preventDefault;
                            if ("never" !== o) if ("always" !== o) {
                                if (n.events.supportsPassive && /^touch(start|move)$/.test(r.type)) {
                                    var a = (0, t.getWindow)(r.target).document, s = n.getDocOptions(a);
                                    if (!s || !s.events || !1 !== s.events.passive) return
                                }
                                /^(mouse|pointer|touch)*(down|start)/i.test(r.type) || i.default.element(r.target) && (0, E.matchesSelector)(r.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r.preventDefault()
                            } else r.preventDefault()
                        }(this, e, n)
                    }, e.interactions.docEvents.push({
                        type: "dragstart", listener: function (t) {
                            for (var n = 0; n < e.interactions.list.length; n++) {
                                var r = e.interactions.list[n];
                                if (r.element && (r.element === t.target || (0, E.nodeContains)(r.element, t.target))) return void r.interactable.checkAndPreventDefault(t)
                            }
                        }
                    })
                }

                Object.defineProperty(st, "__esModule", {value: !0}), st.default = void 0, st.install = ut;
                var dt = {
                    id: "core/interactablePreventDefault",
                    install: ut,
                    listeners: ["down", "move", "up", "cancel"].reduce((function (e, t) {
                        return e["interactions:".concat(t)] = ct, e
                    }), {})
                };
                st.default = dt;
                var pt = {};
                Object.defineProperty(pt, "__esModule", {value: !0}), pt.default = void 0, pt.default = {};
                var ft, ht = {};
                Object.defineProperty(ht, "__esModule", {value: !0}), ht.default = void 0, function (e) {
                    e.touchAction = "touchAction", e.boxSizing = "boxSizing", e.noListeners = "noListeners"
                }(ft || (ft = {})), ft.touchAction, ft.boxSizing, ft.noListeners, ht.default = {
                    id: "dev-tools",
                    install: function () {
                    }
                };
                var mt = {};
                Object.defineProperty(mt, "__esModule", {value: !0}), mt.default = function e(t) {
                    var n = {};
                    for (var r in t) {
                        var o = t[r];
                        i.default.plainObject(o) ? n[r] = e(o) : i.default.array(o) ? n[r] = K.from(o) : n[r] = o
                    }
                    return n
                };
                var gt = {};

                function vt(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i = [], a = !0, s = !1;
                            try {
                                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return i
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return yt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yt(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function yt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function bt(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(gt, "__esModule", {value: !0}), gt.default = void 0, gt.getRectOffset = xt;
                var _t = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), bt(this, "states", []), bt(this, "startOffset", {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }), bt(this, "startDelta", void 0), bt(this, "result", void 0), bt(this, "endResult", void 0), bt(this, "edges", void 0), bt(this, "interaction", void 0), this.interaction = t, this.result = wt()
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "start", value: function (e, t) {
                            var n = e.phase, r = this.interaction, o = function (e) {
                                var t = e.interactable.options[e.prepared.name], n = t.modifiers;
                                return n && n.length ? n : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function (e) {
                                    var n = t[e];
                                    return n && n.enabled && {options: n, methods: n._methods}
                                })).filter((function (e) {
                                    return !!e
                                }))
                            }(r);
                            this.prepareStates(o), this.edges = (0, P.default)({}, r.edges), this.startOffset = xt(r.rect, t), this.startDelta = {
                                x: 0,
                                y: 0
                            };
                            var i = this.fillArg({phase: n, pageCoords: t, preEnd: !1});
                            return this.result = wt(), this.startAll(i), this.result = this.setAll(i)
                        }
                    }, {
                        key: "fillArg", value: function (e) {
                            var t = this.interaction;
                            return e.interaction = t, e.interactable = t.interactable, e.element = t.element, e.rect = e.rect || t.rect, e.edges = this.edges, e.startOffset = this.startOffset, e
                        }
                    }, {
                        key: "startAll", value: function (e) {
                            for (var t = 0; t < this.states.length; t++) {
                                var n = this.states[t];
                                n.methods.start && (e.state = n, n.methods.start(e))
                            }
                        }
                    }, {
                        key: "setAll", value: function (e) {
                            var t = e.phase, n = e.preEnd, r = e.skipModifiers, o = e.rect;
                            e.coords = (0, P.default)({}, e.pageCoords), e.rect = (0, P.default)({}, o);
                            for (var i = r ? this.states.slice(r) : this.states, a = wt(e.coords, e.rect), s = 0; s < i.length; s++) {
                                var l, c = i[s], u = c.options, d = (0, P.default)({}, e.coords), p = null;
                                null != (l = c.methods) && l.set && this.shouldDo(u, n, t) && (e.state = c, p = c.methods.set(e), M.addEdges(this.interaction.edges, e.rect, {
                                    x: e.coords.x - d.x,
                                    y: e.coords.y - d.y
                                })), a.eventProps.push(p)
                            }
                            a.delta.x = e.coords.x - e.pageCoords.x, a.delta.y = e.coords.y - e.pageCoords.y, a.rectDelta.left = e.rect.left - o.left, a.rectDelta.right = e.rect.right - o.right, a.rectDelta.top = e.rect.top - o.top, a.rectDelta.bottom = e.rect.bottom - o.bottom;
                            var f = this.result.coords, h = this.result.rect;
                            if (f && h) {
                                var m = a.rect.left !== h.left || a.rect.right !== h.right || a.rect.top !== h.top || a.rect.bottom !== h.bottom;
                                a.changed = m || f.x !== a.coords.x || f.y !== a.coords.y
                            }
                            return a
                        }
                    }, {
                        key: "applyToInteraction", value: function (e) {
                            var t = this.interaction, n = e.phase, r = t.coords.cur, o = t.coords.start,
                                i = this.result, a = this.startDelta, s = i.delta;
                            "start" === n && (0, P.default)(this.startDelta, i.delta);
                            for (var l = 0; l < [[o, a], [r, s]].length; l++) {
                                var c = vt([[o, a], [r, s]][l], 2), u = c[0], d = c[1];
                                u.page.x += d.x, u.page.y += d.y, u.client.x += d.x, u.client.y += d.y
                            }
                            var p = this.result.rectDelta, f = e.rect || t.rect;
                            f.left += p.left, f.right += p.right, f.top += p.top, f.bottom += p.bottom, f.width = f.right - f.left, f.height = f.bottom - f.top
                        }
                    }, {
                        key: "setAndApply", value: function (e) {
                            var t = this.interaction, n = e.phase, r = e.preEnd, o = e.skipModifiers,
                                i = this.setAll(this.fillArg({
                                    preEnd: r,
                                    phase: n,
                                    pageCoords: e.modifiedCoords || t.coords.cur.page
                                }));
                            if (this.result = i, !i.changed && (!o || o < this.states.length) && t.interacting()) return !1;
                            if (e.modifiedCoords) {
                                var a = t.coords.cur.page,
                                    s = {x: e.modifiedCoords.x - a.x, y: e.modifiedCoords.y - a.y};
                                i.coords.x += s.x, i.coords.y += s.y, i.delta.x += s.x, i.delta.y += s.y
                            }
                            this.applyToInteraction(e)
                        }
                    }, {
                        key: "beforeEnd", value: function (e) {
                            var t = e.interaction, n = e.event, r = this.states;
                            if (r && r.length) {
                                for (var o = !1, i = 0; i < r.length; i++) {
                                    var a = r[i];
                                    e.state = a;
                                    var s = a.options, l = a.methods, c = l.beforeEnd && l.beforeEnd(e);
                                    if (c) return this.endResult = c, !1;
                                    o = o || !o && this.shouldDo(s, !0, e.phase, !0)
                                }
                                o && t.move({event: n, preEnd: !0})
                            }
                        }
                    }, {
                        key: "stop", value: function (e) {
                            var t = e.interaction;
                            if (this.states && this.states.length) {
                                var n = (0, P.default)({
                                    states: this.states,
                                    interactable: t.interactable,
                                    element: t.element,
                                    rect: null
                                }, e);
                                this.fillArg(n);
                                for (var r = 0; r < this.states.length; r++) {
                                    var o = this.states[r];
                                    n.state = o, o.methods.stop && o.methods.stop(n)
                                }
                                this.states = null, this.endResult = null
                            }
                        }
                    }, {
                        key: "prepareStates", value: function (e) {
                            this.states = [];
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t], r = n.options, o = n.methods, i = n.name;
                                this.states.push({options: r, methods: o, index: t, name: i})
                            }
                            return this.states
                        }
                    }, {
                        key: "restoreInteractionCoords", value: function (e) {
                            var t = e.interaction, n = t.coords, r = t.rect, o = t.modification;
                            if (o.result) {
                                for (var i = o.startDelta, a = o.result, s = a.delta, l = a.rectDelta, c = [[n.start, i], [n.cur, s]], u = 0; u < c.length; u++) {
                                    var d = vt(c[u], 2), p = d[0], f = d[1];
                                    p.page.x -= f.x, p.page.y -= f.y, p.client.x -= f.x, p.client.y -= f.y
                                }
                                r.left -= l.left, r.right -= l.right, r.top -= l.top, r.bottom -= l.bottom
                            }
                        }
                    }, {
                        key: "shouldDo", value: function (e, t, n, r) {
                            return !(!e || !1 === e.enabled || r && !e.endOnly || e.endOnly && !t || "start" === n && !e.setStart)
                        }
                    }, {
                        key: "copyFrom", value: function (e) {
                            this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.edges = e.edges, this.states = e.states.map((function (e) {
                                return (0, mt.default)(e)
                            })), this.result = wt((0, P.default)({}, e.result.coords), (0, P.default)({}, e.result.rect))
                        }
                    }, {
                        key: "destroy", value: function () {
                            for (var e in this) this[e] = null
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();

                function wt(e, t) {
                    return {
                        rect: t,
                        coords: e,
                        delta: {x: 0, y: 0},
                        rectDelta: {left: 0, right: 0, top: 0, bottom: 0},
                        eventProps: [],
                        changed: !0
                    }
                }

                function xt(e, t) {
                    return e ? {
                        left: t.x - e.left,
                        top: t.y - e.top,
                        right: e.right - t.x,
                        bottom: e.bottom - t.y
                    } : {left: 0, top: 0, right: 0, bottom: 0}
                }

                gt.default = _t;
                var Et = {};

                function kt(e) {
                    var t = e.iEvent, n = e.interaction.modification.result;
                    n && (t.modifiers = n.eventProps)
                }

                Object.defineProperty(Et, "__esModule", {value: !0}), Et.addEventModifiers = kt, Et.default = void 0, Et.makeModifier = function (e, t) {
                    var n = e.defaults, r = {start: e.start, set: e.set, beforeEnd: e.beforeEnd, stop: e.stop},
                        o = function (e) {
                            var o = e || {};
                            for (var i in o.enabled = !1 !== o.enabled, n) i in o || (o[i] = n[i]);
                            var a = {
                                options: o, methods: r, name: t, enable: function () {
                                    return o.enabled = !0, a
                                }, disable: function () {
                                    return o.enabled = !1, a
                                }
                            };
                            return a
                        };
                    return t && "string" == typeof t && (o._defaults = n, o._methods = r), o
                };
                var St = {
                    id: "modifiers/base", before: ["actions"], install: function (e) {
                        e.defaults.perAction.modifiers = []
                    }, listeners: {
                        "interactions:new": function (e) {
                            var t = e.interaction;
                            t.modification = new gt.default(t)
                        },
                        "interactions:before-action-start": function (e) {
                            var t = e.interaction.modification;
                            t.start(e, e.interaction.coords.start.page), e.interaction.edges = t.edges, t.applyToInteraction(e)
                        },
                        "interactions:before-action-move": function (e) {
                            return e.interaction.modification.setAndApply(e)
                        },
                        "interactions:before-action-end": function (e) {
                            return e.interaction.modification.beforeEnd(e)
                        },
                        "interactions:action-start": kt,
                        "interactions:action-move": kt,
                        "interactions:action-end": kt,
                        "interactions:after-action-start": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        },
                        "interactions:after-action-move": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        },
                        "interactions:stop": function (e) {
                            return e.interaction.modification.stop(e)
                        }
                    }
                }, Tt = St;
                Et.default = Tt;
                var Ct = {};
                Object.defineProperty(Ct, "__esModule", {value: !0}), Ct.defaults = void 0, Ct.defaults = {
                    base: {
                        preventDefault: "auto",
                        deltaSource: "page"
                    }, perAction: {enabled: !1, origin: {x: 0, y: 0}}, actions: {}
                };
                var At = {};

                function Ot(e) {
                    return Ot = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, Ot(e)
                }

                function Pt(e, t) {
                    return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    }, Pt(e, t)
                }

                function Mt(e, t) {
                    if (t && ("object" === Ot(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return Dt(e)
                }

                function Dt(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function Nt(e) {
                    return Nt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Nt(e)
                }

                function It(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(At, "__esModule", {value: !0}), At.InteractEvent = void 0;
                var Lt = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {writable: !1}), t && Pt(e, t)
                    }(a, e);
                    var t, n, r, o, i = (r = a, o = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = Nt(r);
                        if (o) {
                            var n = Nt(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return Mt(this, e)
                    });

                    function a(e, t, n, r, o, s, l) {
                        var c;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), It(Dt(c = i.call(this, e)), "relatedTarget", null), It(Dt(c), "screenX", void 0), It(Dt(c), "screenY", void 0), It(Dt(c), "button", void 0), It(Dt(c), "buttons", void 0), It(Dt(c), "ctrlKey", void 0), It(Dt(c), "shiftKey", void 0), It(Dt(c), "altKey", void 0), It(Dt(c), "metaKey", void 0), It(Dt(c), "page", void 0), It(Dt(c), "client", void 0), It(Dt(c), "delta", void 0), It(Dt(c), "rect", void 0), It(Dt(c), "x0", void 0), It(Dt(c), "y0", void 0), It(Dt(c), "t0", void 0), It(Dt(c), "dt", void 0), It(Dt(c), "duration", void 0), It(Dt(c), "clientX0", void 0), It(Dt(c), "clientY0", void 0), It(Dt(c), "velocity", void 0), It(Dt(c), "speed", void 0), It(Dt(c), "swipe", void 0), It(Dt(c), "axes", void 0), It(Dt(c), "preEnd", void 0), o = o || e.element;
                        var u = e.interactable, d = (u && u.options || Ct.defaults).deltaSource,
                            p = (0, I.default)(u, o, n), f = "start" === r, h = "end" === r,
                            m = f ? Dt(c) : e.prevEvent, g = f ? e.coords.start : h ? {
                                page: m.page,
                                client: m.client,
                                timeStamp: e.coords.cur.timeStamp
                            } : e.coords.cur;
                        return c.page = (0, P.default)({}, g.page), c.client = (0, P.default)({}, g.client), c.rect = (0, P.default)({}, e.rect), c.timeStamp = g.timeStamp, h || (c.page.x -= p.x, c.page.y -= p.y, c.client.x -= p.x, c.client.y -= p.y), c.ctrlKey = t.ctrlKey, c.altKey = t.altKey, c.shiftKey = t.shiftKey, c.metaKey = t.metaKey, c.button = t.button, c.buttons = t.buttons, c.target = o, c.currentTarget = o, c.preEnd = s, c.type = l || n + (r || ""), c.interactable = u, c.t0 = f ? e.pointers[e.pointers.length - 1].downTime : m.t0, c.x0 = e.coords.start.page.x - p.x, c.y0 = e.coords.start.page.y - p.y, c.clientX0 = e.coords.start.client.x - p.x, c.clientY0 = e.coords.start.client.y - p.y, c.delta = f || h ? {
                            x: 0,
                            y: 0
                        } : {
                            x: c[d].x - m[d].x,
                            y: c[d].y - m[d].y
                        }, c.dt = e.coords.delta.timeStamp, c.duration = c.timeStamp - c.t0, c.velocity = (0, P.default)({}, e.coords.velocity[d]), c.speed = (0, q.default)(c.velocity.x, c.velocity.y), c.swipe = h || "inertiastart" === r ? c.getSwipe() : null, c
                    }

                    return t = a, (n = [{
                        key: "getSwipe", value: function () {
                            var e = this._interaction;
                            if (e.prevEvent.speed < 600 || this.timeStamp - e.prevEvent.timeStamp > 150) return null;
                            var t = 180 * Math.atan2(e.prevEvent.velocityY, e.prevEvent.velocityX) / Math.PI;
                            t < 0 && (t += 360);
                            var n = 112.5 <= t && t < 247.5, r = 202.5 <= t && t < 337.5;
                            return {
                                up: r,
                                down: !r && 22.5 <= t && t < 157.5,
                                left: n,
                                right: !n && (292.5 <= t || t < 67.5),
                                angle: t,
                                speed: e.prevEvent.speed,
                                velocity: {x: e.prevEvent.velocityX, y: e.prevEvent.velocityY}
                            }
                        }
                    }, {
                        key: "preventDefault", value: function () {
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.immediatePropagationStopped = this.propagationStopped = !0
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.propagationStopped = !0
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), a
                }(W.BaseEvent);
                At.InteractEvent = Lt, Object.defineProperties(Lt.prototype, {
                    pageX: {
                        get: function () {
                            return this.page.x
                        }, set: function (e) {
                            this.page.x = e
                        }
                    }, pageY: {
                        get: function () {
                            return this.page.y
                        }, set: function (e) {
                            this.page.y = e
                        }
                    }, clientX: {
                        get: function () {
                            return this.client.x
                        }, set: function (e) {
                            this.client.x = e
                        }
                    }, clientY: {
                        get: function () {
                            return this.client.y
                        }, set: function (e) {
                            this.client.y = e
                        }
                    }, dx: {
                        get: function () {
                            return this.delta.x
                        }, set: function (e) {
                            this.delta.x = e
                        }
                    }, dy: {
                        get: function () {
                            return this.delta.y
                        }, set: function (e) {
                            this.delta.y = e
                        }
                    }, velocityX: {
                        get: function () {
                            return this.velocity.x
                        }, set: function (e) {
                            this.velocity.x = e
                        }
                    }, velocityY: {
                        get: function () {
                            return this.velocity.y
                        }, set: function (e) {
                            this.velocity.y = e
                        }
                    }
                });
                var jt = {};

                function qt(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(jt, "__esModule", {value: !0}), jt.PointerInfo = void 0;
                var Rt = function (e, t, n) {
                    return Object.defineProperty(e, "prototype", {writable: !1}), e
                }((function e(t, n, r, o, i) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), qt(this, "id", void 0), qt(this, "pointer", void 0), qt(this, "event", void 0), qt(this, "downTime", void 0), qt(this, "downTarget", void 0), this.id = t, this.pointer = n, this.event = r, this.downTime = o, this.downTarget = i
                }));
                jt.PointerInfo = Rt;
                var Bt, zt, Ut = {};

                function Ht(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Ut, "__esModule", {value: !0}), Ut.Interaction = void 0, Object.defineProperty(Ut, "PointerInfo", {
                    enumerable: !0,
                    get: function () {
                        return jt.PointerInfo
                    }
                }), Ut.default = Ut._ProxyValues = Ut._ProxyMethods = void 0, Ut._ProxyValues = Bt, function (e) {
                    e.interactable = "", e.element = "", e.prepared = "", e.pointerIsDown = "", e.pointerWasMoved = "", e._proxy = ""
                }(Bt || (Ut._ProxyValues = Bt = {})), Ut._ProxyMethods = zt, function (e) {
                    e.start = "", e.move = "", e.end = "", e.stop = "", e.interacting = ""
                }(zt || (Ut._ProxyMethods = zt = {}));
                var Ft = 0, Vt = function () {
                    function e(t) {
                        var n = this, r = t.pointerType, o = t.scopeFire;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), Ht(this, "interactable", null), Ht(this, "element", null), Ht(this, "rect", null), Ht(this, "_rects", void 0), Ht(this, "edges", null), Ht(this, "_scopeFire", void 0), Ht(this, "prepared", {
                            name: null,
                            axis: null,
                            edges: null
                        }), Ht(this, "pointerType", void 0), Ht(this, "pointers", []), Ht(this, "downEvent", null), Ht(this, "downPointer", {}), Ht(this, "_latestPointer", {
                            pointer: null,
                            event: null,
                            eventTarget: null
                        }), Ht(this, "prevEvent", null), Ht(this, "pointerIsDown", !1), Ht(this, "pointerWasMoved", !1), Ht(this, "_interacting", !1), Ht(this, "_ending", !1), Ht(this, "_stopped", !0), Ht(this, "_proxy", null), Ht(this, "simulation", null), Ht(this, "doMove", (0, qe.warnOnce)((function (e) {
                            this.move(e)
                        }), "The interaction.doMove() method has been renamed to interaction.move()")), Ht(this, "coords", {
                            start: B.newCoords(),
                            prev: B.newCoords(),
                            cur: B.newCoords(),
                            delta: B.newCoords(),
                            velocity: B.newCoords()
                        }), Ht(this, "_id", Ft++), this._scopeFire = o, this.pointerType = r;
                        var i = this;
                        this._proxy = {};
                        var a = function (e) {
                            Object.defineProperty(n._proxy, e, {
                                get: function () {
                                    return i[e]
                                }
                            })
                        };
                        for (var s in Bt) a(s);
                        var l = function (e) {
                            Object.defineProperty(n._proxy, e, {
                                value: function () {
                                    return i[e].apply(i, arguments)
                                }
                            })
                        };
                        for (var c in zt) l(c);
                        this._scopeFire("interactions:new", {interaction: this})
                    }

                    var t, n;
                    return t = e, n = [{
                        key: "pointerMoveTolerance", get: function () {
                            return 1
                        }
                    }, {
                        key: "pointerDown", value: function (e, t, n) {
                            var r = this.updatePointer(e, t, n, !0), o = this.pointers[r];
                            this._scopeFire("interactions:down", {
                                pointer: e,
                                event: t,
                                eventTarget: n,
                                pointerIndex: r,
                                pointerInfo: o,
                                type: "down",
                                interaction: this
                            })
                        }
                    }, {
                        key: "start", value: function (e, t, n) {
                            return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === e.name ? 2 : 1) || !t.options[e.name].enabled) && ((0, qe.copyAction)(this.prepared, e), this.interactable = t, this.element = n, this.rect = t.getRect(n), this.edges = this.prepared.edges ? (0, P.default)({}, this.prepared.edges) : {
                                left: !0,
                                right: !0,
                                top: !0,
                                bottom: !0
                            }, this._stopped = !1, this._interacting = this._doPhase({
                                interaction: this,
                                event: this.downEvent,
                                phase: "start"
                            }) && !this._stopped, this._interacting)
                        }
                    }, {
                        key: "pointerMove", value: function (e, t, n) {
                            this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, t, n, !1);
                            var r, o,
                                i = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
                            this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, q.default)(r, o) > this.pointerMoveTolerance);
                            var a = this.getPointerIndex(e), s = {
                                pointer: e,
                                pointerIndex: a,
                                pointerInfo: this.pointers[a],
                                event: t,
                                type: "move",
                                eventTarget: n,
                                dx: r,
                                dy: o,
                                duplicate: i,
                                interaction: this
                            };
                            i || B.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s), i || this.simulation || (this.interacting() && (s.type = null, this.move(s)), this.pointerWasMoved && B.copyCoords(this.coords.prev, this.coords.cur))
                        }
                    }, {
                        key: "move", value: function (e) {
                            e && e.event || B.setZeroCoords(this.coords.delta), (e = (0, P.default)({
                                pointer: this._latestPointer.pointer,
                                event: this._latestPointer.event,
                                eventTarget: this._latestPointer.eventTarget,
                                interaction: this
                            }, e || {})).phase = "move", this._doPhase(e)
                        }
                    }, {
                        key: "pointerUp", value: function (e, t, n, r) {
                            var o = this.getPointerIndex(e);
                            -1 === o && (o = this.updatePointer(e, t, n, !1));
                            var i = /cancel$/i.test(t.type) ? "cancel" : "up";
                            this._scopeFire("interactions:".concat(i), {
                                pointer: e,
                                pointerIndex: o,
                                pointerInfo: this.pointers[o],
                                event: t,
                                eventTarget: n,
                                type: i,
                                curEventTarget: r,
                                interaction: this
                            }), this.simulation || this.end(t), this.removePointer(e, t)
                        }
                    }, {
                        key: "documentBlur", value: function (e) {
                            this.end(e), this._scopeFire("interactions:blur", {
                                event: e,
                                type: "blur",
                                interaction: this
                            })
                        }
                    }, {
                        key: "end", value: function (e) {
                            var t;
                            this._ending = !0, e = e || this._latestPointer.event, this.interacting() && (t = this._doPhase({
                                event: e,
                                interaction: this,
                                phase: "end"
                            })), this._ending = !1, !0 === t && this.stop()
                        }
                    }, {
                        key: "currentAction", value: function () {
                            return this._interacting ? this.prepared.name : null
                        }
                    }, {
                        key: "interacting", value: function () {
                            return this._interacting
                        }
                    }, {
                        key: "stop", value: function () {
                            this._scopeFire("interactions:stop", {interaction: this}), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null
                        }
                    }, {
                        key: "getPointerIndex", value: function (e) {
                            var t = B.getPointerId(e);
                            return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : K.findIndex(this.pointers, (function (e) {
                                return e.id === t
                            }))
                        }
                    }, {
                        key: "getPointerInfo", value: function (e) {
                            return this.pointers[this.getPointerIndex(e)]
                        }
                    }, {
                        key: "updatePointer", value: function (e, t, n, r) {
                            var o = B.getPointerId(e), i = this.getPointerIndex(e), a = this.pointers[i];
                            return r = !1 !== r && (r || /(down|start)$/i.test(t.type)), a ? a.pointer = e : (a = new jt.PointerInfo(o, e, t, null, null), i = this.pointers.length, this.pointers.push(a)), B.setCoords(this.coords.cur, this.pointers.map((function (e) {
                                return e.pointer
                            })), this._now()), B.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = n, B.pointerExtend(this.downPointer, e), this.interacting() || (B.copyCoords(this.coords.start, this.coords.cur), B.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = t, this.pointerWasMoved = !1)), this._updateLatestPointer(e, t, n), this._scopeFire("interactions:update-pointer", {
                                pointer: e,
                                event: t,
                                eventTarget: n,
                                down: r,
                                pointerInfo: a,
                                pointerIndex: i,
                                interaction: this
                            }), i
                        }
                    }, {
                        key: "removePointer", value: function (e, t) {
                            var n = this.getPointerIndex(e);
                            if (-1 !== n) {
                                var r = this.pointers[n];
                                this._scopeFire("interactions:remove-pointer", {
                                    pointer: e,
                                    event: t,
                                    eventTarget: null,
                                    pointerIndex: n,
                                    pointerInfo: r,
                                    interaction: this
                                }), this.pointers.splice(n, 1), this.pointerIsDown = !1
                            }
                        }
                    }, {
                        key: "_updateLatestPointer", value: function (e, t, n) {
                            this._latestPointer.pointer = e, this._latestPointer.event = t, this._latestPointer.eventTarget = n
                        }
                    }, {
                        key: "destroy", value: function () {
                            this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null
                        }
                    }, {
                        key: "_createPreparedEvent", value: function (e, t, n, r) {
                            return new At.InteractEvent(this, e, this.prepared.name, t, this.element, n, r)
                        }
                    }, {
                        key: "_fireEvent", value: function (e) {
                            var t;
                            null == (t = this.interactable) || t.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e)
                        }
                    }, {
                        key: "_doPhase", value: function (e) {
                            var t = e.event, n = e.phase, r = e.preEnd, o = e.type, i = this.rect;
                            if (i && "move" === n && (M.addEdges(this.edges, i, this.coords.delta[this.interactable.options.deltaSource]), i.width = i.right - i.left, i.height = i.bottom - i.top), !1 === this._scopeFire("interactions:before-action-".concat(n), e)) return !1;
                            var a = e.iEvent = this._createPreparedEvent(t, n, r, o);
                            return this._scopeFire("interactions:action-".concat(n), e), "start" === n && (this.prevEvent = a), this._fireEvent(a), this._scopeFire("interactions:after-action-".concat(n), e), !0
                        }
                    }, {
                        key: "_now", value: function () {
                            return Date.now()
                        }
                    }], n && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();
                Ut.Interaction = Vt;
                var Yt = Vt;
                Ut.default = Yt;
                var Wt = {};

                function Gt(e) {
                    e.pointerIsDown && (Jt(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0)
                }

                function Xt(e) {
                    Kt(e.interaction)
                }

                function Kt(e) {
                    if (!function (e) {
                        return !(!e.offset.pending.x && !e.offset.pending.y)
                    }(e)) return !1;
                    var t = e.offset.pending;
                    return Jt(e.coords.cur, t), Jt(e.coords.delta, t), M.addEdges(e.edges, e.rect, t), t.x = 0, t.y = 0, !0
                }

                function $t(e) {
                    var t = e.x, n = e.y;
                    this.offset.pending.x += t, this.offset.pending.y += n, this.offset.total.x += t, this.offset.total.y += n
                }

                function Jt(e, t) {
                    var n = e.page, r = e.client, o = t.x, i = t.y;
                    n.x += o, n.y += i, r.x += o, r.y += i
                }

                Object.defineProperty(Wt, "__esModule", {value: !0}), Wt.addTotal = Gt, Wt.applyPending = Kt, Wt.default = void 0, Ut._ProxyMethods.offsetBy = "";
                var Qt = {
                    id: "offset",
                    before: ["modifiers", "pointer-events", "actions", "inertia"],
                    install: function (e) {
                        e.Interaction.prototype.offsetBy = $t
                    },
                    listeners: {
                        "interactions:new": function (e) {
                            e.interaction.offset = {total: {x: 0, y: 0}, pending: {x: 0, y: 0}}
                        },
                        "interactions:update-pointer": function (e) {
                            return Gt(e.interaction)
                        },
                        "interactions:before-action-start": Xt,
                        "interactions:before-action-move": Xt,
                        "interactions:before-action-end": function (e) {
                            var t = e.interaction;
                            if (Kt(t)) return t.move({offset: !0}), t.end(), !1
                        },
                        "interactions:stop": function (e) {
                            var t = e.interaction;
                            t.offset.total.x = 0, t.offset.total.y = 0, t.offset.pending.x = 0, t.offset.pending.y = 0
                        }
                    }
                }, Zt = Qt;
                Wt.default = Zt;
                var en = {};

                function tn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(en, "__esModule", {value: !0}), en.default = en.InertiaState = void 0;
                var nn = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), tn(this, "active", !1), tn(this, "isModified", !1), tn(this, "smoothEnd", !1), tn(this, "allowResume", !1), tn(this, "modification", void 0), tn(this, "modifierCount", 0), tn(this, "modifierArg", void 0), tn(this, "startCoords", void 0), tn(this, "t0", 0), tn(this, "v0", 0), tn(this, "te", 0), tn(this, "targetOffset", void 0), tn(this, "modifiedOffset", void 0), tn(this, "currentOffset", void 0), tn(this, "lambda_v0", 0), tn(this, "one_ve_v0", 0), tn(this, "timeout", void 0), tn(this, "interaction", void 0), this.interaction = t
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "start", value: function (e) {
                            var t = this.interaction, n = rn(t);
                            if (!n || !n.enabled) return !1;
                            var r = t.coords.velocity.client, o = (0, q.default)(r.x, r.y),
                                i = this.modification || (this.modification = new gt.default(t));
                            if (i.copyFrom(t.modification), this.t0 = t._now(), this.allowResume = n.allowResume, this.v0 = o, this.currentOffset = {
                                x: 0,
                                y: 0
                            }, this.startCoords = t.coords.cur.page, this.modifierArg = i.fillArg({
                                pageCoords: this.startCoords,
                                preEnd: !0,
                                phase: "inertiastart"
                            }), this.t0 - t.coords.cur.timeStamp < 50 && o > n.minSpeed && o > n.endSpeed) this.startInertia(); else {
                                if (i.result = i.setAll(this.modifierArg), !i.result.changed) return !1;
                                this.startSmoothEnd()
                            }
                            return t.modification.result.rect = null, t.offsetBy(this.targetOffset), t._doPhase({
                                interaction: t,
                                event: e,
                                phase: "inertiastart"
                            }), t.offsetBy({
                                x: -this.targetOffset.x,
                                y: -this.targetOffset.y
                            }), t.modification.result.rect = null, this.active = !0, t.simulation = this, !0
                        }
                    }, {
                        key: "startInertia", value: function () {
                            var e = this, t = this.interaction.coords.velocity.client, n = rn(this.interaction),
                                r = n.resistance, o = -Math.log(n.endSpeed / this.v0) / r;
                            this.targetOffset = {
                                x: (t.x - o) / r,
                                y: (t.y - o) / r
                            }, this.te = o, this.lambda_v0 = r / this.v0, this.one_ve_v0 = 1 - n.endSpeed / this.v0;
                            var i = this.modification, a = this.modifierArg;
                            a.pageCoords = {
                                x: this.startCoords.x + this.targetOffset.x,
                                y: this.startCoords.y + this.targetOffset.y
                            }, i.result = i.setAll(a), i.result.changed && (this.isModified = !0, this.modifiedOffset = {
                                x: this.targetOffset.x + i.result.delta.x,
                                y: this.targetOffset.y + i.result.delta.y
                            }), this.onNextFrame((function () {
                                return e.inertiaTick()
                            }))
                        }
                    }, {
                        key: "startSmoothEnd", value: function () {
                            var e = this;
                            this.smoothEnd = !0, this.isModified = !0, this.targetOffset = {
                                x: this.modification.result.delta.x,
                                y: this.modification.result.delta.y
                            }, this.onNextFrame((function () {
                                return e.smoothEndTick()
                            }))
                        }
                    }, {
                        key: "onNextFrame", value: function (e) {
                            var t = this;
                            this.timeout = Te.default.request((function () {
                                t.active && e()
                            }))
                        }
                    }, {
                        key: "inertiaTick", value: function () {
                            var e, t, n, r, o, i = this, a = this.interaction, s = rn(a).resistance,
                                l = (a._now() - this.t0) / 1e3;
                            if (l < this.te) {
                                var c, u = 1 - (Math.exp(-s * l) - this.lambda_v0) / this.one_ve_v0;
                                this.isModified ? (e = this.targetOffset.x, t = this.targetOffset.y, n = this.modifiedOffset.x, r = this.modifiedOffset.y, c = {
                                    x: an(o = u, 0, e, n),
                                    y: an(o, 0, t, r)
                                }) : c = {x: this.targetOffset.x * u, y: this.targetOffset.y * u};
                                var d = {x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y};
                                this.currentOffset.x += d.x, this.currentOffset.y += d.y, a.offsetBy(d), a.move(), this.onNextFrame((function () {
                                    return i.inertiaTick()
                                }))
                            } else a.offsetBy({
                                x: this.modifiedOffset.x - this.currentOffset.x,
                                y: this.modifiedOffset.y - this.currentOffset.y
                            }), this.end()
                        }
                    }, {
                        key: "smoothEndTick", value: function () {
                            var e = this, t = this.interaction, n = t._now() - this.t0, r = rn(t).smoothEndDuration;
                            if (n < r) {
                                var o = {x: sn(n, 0, this.targetOffset.x, r), y: sn(n, 0, this.targetOffset.y, r)},
                                    i = {x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y};
                                this.currentOffset.x += i.x, this.currentOffset.y += i.y, t.offsetBy(i), t.move({skipModifiers: this.modifierCount}), this.onNextFrame((function () {
                                    return e.smoothEndTick()
                                }))
                            } else t.offsetBy({
                                x: this.targetOffset.x - this.currentOffset.x,
                                y: this.targetOffset.y - this.currentOffset.y
                            }), this.end()
                        }
                    }, {
                        key: "resume", value: function (e) {
                            var t = e.pointer, n = e.event, r = e.eventTarget, o = this.interaction;
                            o.offsetBy({
                                x: -this.currentOffset.x,
                                y: -this.currentOffset.y
                            }), o.updatePointer(t, n, r, !0), o._doPhase({
                                interaction: o,
                                event: n,
                                phase: "resume"
                            }), (0, B.copyCoords)(o.coords.prev, o.coords.cur), this.stop()
                        }
                    }, {
                        key: "end", value: function () {
                            this.interaction.move(), this.interaction.end(), this.stop()
                        }
                    }, {
                        key: "stop", value: function () {
                            this.active = this.smoothEnd = !1, this.interaction.simulation = null, Te.default.cancel(this.timeout)
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();

                function rn(e) {
                    var t = e.interactable, n = e.prepared;
                    return t && t.options && n.name && t.options[n.name].inertia
                }

                en.InertiaState = nn;
                var on = {
                    id: "inertia", before: ["modifiers", "actions"], install: function (e) {
                        var t = e.defaults;
                        e.usePlugin(Wt.default), e.usePlugin(Et.default), e.actions.phases.inertiastart = !0, e.actions.phases.resume = !0, t.perAction.inertia = {
                            enabled: !1,
                            resistance: 10,
                            minSpeed: 100,
                            endSpeed: 10,
                            allowResume: !0,
                            smoothEndDuration: 300
                        }
                    }, listeners: {
                        "interactions:new": function (e) {
                            var t = e.interaction;
                            t.inertia = new nn(t)
                        },
                        "interactions:before-action-end": function (e) {
                            var t = e.interaction, n = e.event;
                            return (!t._interacting || t.simulation || !t.inertia.start(n)) && null
                        },
                        "interactions:down": function (e) {
                            var t = e.interaction, n = e.eventTarget, r = t.inertia;
                            if (r.active) for (var o = n; i.default.element(o);) {
                                if (o === t.element) {
                                    r.resume(e);
                                    break
                                }
                                o = E.parentNode(o)
                            }
                        },
                        "interactions:stop": function (e) {
                            var t = e.interaction.inertia;
                            t.active && t.stop()
                        },
                        "interactions:before-action-resume": function (e) {
                            var t = e.interaction.modification;
                            t.stop(e), t.start(e, e.interaction.coords.cur.page), t.applyToInteraction(e)
                        },
                        "interactions:before-action-inertiastart": function (e) {
                            return e.interaction.modification.setAndApply(e)
                        },
                        "interactions:action-resume": Et.addEventModifiers,
                        "interactions:action-inertiastart": Et.addEventModifiers,
                        "interactions:after-action-inertiastart": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        },
                        "interactions:after-action-resume": function (e) {
                            return e.interaction.modification.restoreInteractionCoords(e)
                        }
                    }
                };

                function an(e, t, n, r) {
                    var o = 1 - e;
                    return o * o * t + 2 * o * e * n + e * e * r
                }

                function sn(e, t, n, r) {
                    return -n * (e /= r) * (e - 2) + t
                }

                var ln = on;
                en.default = ln;
                var cn = {};

                function un(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function dn(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (e.immediatePropagationStopped) break;
                        r(e)
                    }
                }

                Object.defineProperty(cn, "__esModule", {value: !0}), cn.Eventable = void 0;
                var pn = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), un(this, "options", void 0), un(this, "types", {}), un(this, "propagationStopped", !1), un(this, "immediatePropagationStopped", !1), un(this, "global", void 0), this.options = (0, P.default)({}, t || {})
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "fire", value: function (e) {
                            var t, n = this.global;
                            (t = this.types[e.type]) && dn(e, t), !e.propagationStopped && n && (t = n[e.type]) && dn(e, t)
                        }
                    }, {
                        key: "on", value: function (e, t) {
                            var n = (0, L.default)(e, t);
                            for (e in n) this.types[e] = K.merge(this.types[e] || [], n[e])
                        }
                    }, {
                        key: "off", value: function (e, t) {
                            var n = (0, L.default)(e, t);
                            for (e in n) {
                                var r = this.types[e];
                                if (r && r.length) for (var o = 0; o < n[e].length; o++) {
                                    var i = n[e][o], a = r.indexOf(i);
                                    -1 !== a && r.splice(a, 1)
                                }
                            }
                        }
                    }, {
                        key: "getRect", value: function (e) {
                            return null
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();
                cn.Eventable = pn;
                var fn = {};
                Object.defineProperty(fn, "__esModule", {value: !0}), fn.default = function (e, t) {
                    if (t.phaselessTypes[e]) return !0;
                    for (var n in t.map) if (0 === e.indexOf(n) && e.substr(n.length) in t.phases) return !0;
                    return !1
                };
                var hn = {};
                Object.defineProperty(hn, "__esModule", {value: !0}), hn.createInteractStatic = function (e) {
                    var t = function t(n, r) {
                        var o = e.interactables.get(n, r);
                        return o || ((o = e.interactables.new(n, r)).events.global = t.globalEvents), o
                    };
                    return t.getPointerAverage = B.pointerAverage, t.getTouchBBox = B.touchBBox, t.getTouchDistance = B.touchDistance, t.getTouchAngle = B.touchAngle, t.getElementRect = E.getElementRect, t.getElementClientRect = E.getElementClientRect, t.matchesSelector = E.matchesSelector, t.closest = E.closest, t.globalEvents = {}, t.version = "1.10.17", t.scope = e, t.use = function (e, t) {
                        return this.scope.usePlugin(e, t), this
                    }, t.isSet = function (e, t) {
                        return !!this.scope.interactables.get(e, t && t.context)
                    }, t.on = (0, qe.warnOnce)((function (e, t, n) {
                        if (i.default.string(e) && -1 !== e.search(" ") && (e = e.trim().split(/ +/)), i.default.array(e)) {
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r];
                                this.on(o, t, n)
                            }
                            return this
                        }
                        if (i.default.object(e)) {
                            for (var a in e) this.on(a, e[a], t);
                            return this
                        }
                        return (0, fn.default)(e, this.scope.actions) ? this.globalEvents[e] ? this.globalEvents[e].push(t) : this.globalEvents[e] = [t] : this.scope.events.add(this.scope.document, e, t, {options: n}), this
                    }), "The interact.on() method is being deprecated"), t.off = (0, qe.warnOnce)((function (e, t, n) {
                        if (i.default.string(e) && -1 !== e.search(" ") && (e = e.trim().split(/ +/)), i.default.array(e)) {
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r];
                                this.off(o, t, n)
                            }
                            return this
                        }
                        if (i.default.object(e)) {
                            for (var a in e) this.off(a, e[a], t);
                            return this
                        }
                        var s;
                        return (0, fn.default)(e, this.scope.actions) ? e in this.globalEvents && -1 !== (s = this.globalEvents[e].indexOf(t)) && this.globalEvents[e].splice(s, 1) : this.scope.events.remove(this.scope.document, e, t, n), this
                    }), "The interact.off() method is being deprecated"), t.debug = function () {
                        return this.scope
                    }, t.supportsTouch = function () {
                        return _.default.supportsTouch
                    }, t.supportsPointerEvent = function () {
                        return _.default.supportsPointerEvent
                    }, t.stop = function () {
                        for (var e = 0; e < this.scope.interactions.list.length; e++) this.scope.interactions.list[e].stop();
                        return this
                    }, t.pointerMoveTolerance = function (e) {
                        return i.default.number(e) ? (this.scope.interactions.pointerMoveTolerance = e, this) : this.scope.interactions.pointerMoveTolerance
                    }, t.addDocument = function (e, t) {
                        this.scope.addDocument(e, t)
                    }, t.removeDocument = function (e) {
                        this.scope.removeDocument(e)
                    }, t
                };
                var mn = {};

                function gn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(mn, "__esModule", {value: !0}), mn.Interactable = void 0;
                var vn = function () {
                    function e(n, r, o, i) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), gn(this, "options", void 0), gn(this, "_actions", void 0), gn(this, "target", void 0), gn(this, "events", new cn.Eventable), gn(this, "_context", void 0), gn(this, "_win", void 0), gn(this, "_doc", void 0), gn(this, "_scopeEvents", void 0), gn(this, "_rectChecker", void 0), this._actions = r.actions, this.target = n, this._context = r.context || o, this._win = (0, t.getWindow)((0, E.trySelector)(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = i, this.set(r)
                    }

                    var n, r;
                    return n = e, (r = [{
                        key: "_defaults", get: function () {
                            return {base: {}, perAction: {}, actions: {}}
                        }
                    }, {
                        key: "setOnEvents", value: function (e, t) {
                            return i.default.func(t.onstart) && this.on("".concat(e, "start"), t.onstart), i.default.func(t.onmove) && this.on("".concat(e, "move"), t.onmove), i.default.func(t.onend) && this.on("".concat(e, "end"), t.onend), i.default.func(t.oninertiastart) && this.on("".concat(e, "inertiastart"), t.oninertiastart), this
                        }
                    }, {
                        key: "updatePerActionListeners", value: function (e, t, n) {
                            (i.default.array(t) || i.default.object(t)) && this.off(e, t), (i.default.array(n) || i.default.object(n)) && this.on(e, n)
                        }
                    }, {
                        key: "setPerAction", value: function (e, t) {
                            var n = this._defaults;
                            for (var r in t) {
                                var o = r, a = this.options[e], s = t[o];
                                "listeners" === o && this.updatePerActionListeners(e, a.listeners, s), i.default.array(s) ? a[o] = K.from(s) : i.default.plainObject(s) ? (a[o] = (0, P.default)(a[o] || {}, (0, mt.default)(s)), i.default.object(n.perAction[o]) && "enabled" in n.perAction[o] && (a[o].enabled = !1 !== s.enabled)) : i.default.bool(s) && i.default.object(n.perAction[o]) ? a[o].enabled = s : a[o] = s
                            }
                        }
                    }, {
                        key: "getRect", value: function (e) {
                            return e = e || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (e = e || this._context.querySelector(this.target)), (0, E.getElementRect)(e)
                        }
                    }, {
                        key: "rectChecker", value: function (e) {
                            var t = this;
                            return i.default.func(e) ? (this._rectChecker = e, this.getRect = function (e) {
                                var n = (0, P.default)({}, t._rectChecker(e));
                                return "width" in n || (n.width = n.right - n.left, n.height = n.bottom - n.top), n
                            }, this) : null === e ? (delete this.getRect, delete this._rectChecker, this) : this.getRect
                        }
                    }, {
                        key: "_backCompatOption", value: function (e, t) {
                            if ((0, E.trySelector)(t) || i.default.object(t)) {
                                for (var n in this.options[e] = t, this._actions.map) this.options[n][e] = t;
                                return this
                            }
                            return this.options[e]
                        }
                    }, {
                        key: "origin", value: function (e) {
                            return this._backCompatOption("origin", e)
                        }
                    }, {
                        key: "deltaSource", value: function (e) {
                            return "page" === e || "client" === e ? (this.options.deltaSource = e, this) : this.options.deltaSource
                        }
                    }, {
                        key: "context", value: function () {
                            return this._context
                        }
                    }, {
                        key: "inContext", value: function (e) {
                            return this._context === e.ownerDocument || (0, E.nodeContains)(this._context, e)
                        }
                    }, {
                        key: "testIgnoreAllow", value: function (e, t, n) {
                            return !this.testIgnore(e.ignoreFrom, t, n) && this.testAllow(e.allowFrom, t, n)
                        }
                    }, {
                        key: "testAllow", value: function (e, t, n) {
                            return !e || !!i.default.element(n) && (i.default.string(e) ? (0, E.matchesUpTo)(n, e, t) : !!i.default.element(e) && (0, E.nodeContains)(e, n))
                        }
                    }, {
                        key: "testIgnore", value: function (e, t, n) {
                            return !(!e || !i.default.element(n)) && (i.default.string(e) ? (0, E.matchesUpTo)(n, e, t) : !!i.default.element(e) && (0, E.nodeContains)(e, n))
                        }
                    }, {
                        key: "fire", value: function (e) {
                            return this.events.fire(e), this
                        }
                    }, {
                        key: "_onOff", value: function (e, t, n, r) {
                            i.default.object(t) && !i.default.array(t) && (r = n, n = null);
                            var o = "on" === e ? "add" : "remove", a = (0, L.default)(t, n);
                            for (var s in a) {
                                "wheel" === s && (s = _.default.wheelEvent);
                                for (var l = 0; l < a[s].length; l++) {
                                    var c = a[s][l];
                                    (0, fn.default)(s, this._actions) ? this.events[e](s, c) : i.default.string(this.target) ? this._scopeEvents["".concat(o, "Delegate")](this.target, this._context, s, c, r) : this._scopeEvents[o](this.target, s, c, r)
                                }
                            }
                            return this
                        }
                    }, {
                        key: "on", value: function (e, t, n) {
                            return this._onOff("on", e, t, n)
                        }
                    }, {
                        key: "off", value: function (e, t, n) {
                            return this._onOff("off", e, t, n)
                        }
                    }, {
                        key: "set", value: function (e) {
                            var t = this._defaults;
                            for (var n in i.default.object(e) || (e = {}), this.options = (0, mt.default)(t.base), this._actions.methodDict) {
                                var r = n, o = this._actions.methodDict[r];
                                this.options[r] = {}, this.setPerAction(r, (0, P.default)((0, P.default)({}, t.perAction), t.actions[r])), this[o](e[r])
                            }
                            for (var a in e) i.default.func(this[a]) && this[a](e[a]);
                            return this
                        }
                    }, {
                        key: "unset", value: function () {
                            if (i.default.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var t = this._scopeEvents.delegatedEvents[e], n = t.length - 1; n >= 0; n--) {
                                var r = t[n], o = r.selector, a = r.context, s = r.listeners;
                                o === this.target && a === this._context && t.splice(n, 1);
                                for (var l = s.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[l][0], s[l][1])
                            } else this._scopeEvents.remove(this.target, "all")
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), e
                }();
                mn.Interactable = vn;
                var yn = {};

                function bn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(yn, "__esModule", {value: !0}), yn.InteractableSet = void 0;
                var _n = function () {
                    function e(t) {
                        var n = this;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), bn(this, "list", []), bn(this, "selectorMap", {}), bn(this, "scope", void 0), this.scope = t, t.addListeners({
                            "interactable:unset": function (e) {
                                var t = e.interactable, r = t.target, o = t._context,
                                    a = i.default.string(r) ? n.selectorMap[r] : r[n.scope.id],
                                    s = K.findIndex(a, (function (e) {
                                        return e.context === o
                                    }));
                                a[s] && (a[s].context = null, a[s].interactable = null), a.splice(s, 1)
                            }
                        })
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "new", value: function (e, t) {
                            t = (0, P.default)(t || {}, {actions: this.scope.actions});
                            var n = new this.scope.Interactable(e, t, this.scope.document, this.scope.events),
                                r = {context: n._context, interactable: n};
                            return this.scope.addDocument(n._doc), this.list.push(n), i.default.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (n.target[this.scope.id] || Object.defineProperty(e, this.scope.id, {
                                value: [],
                                configurable: !0
                            }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", {
                                target: e,
                                options: t,
                                interactable: n,
                                win: this.scope._win
                            }), n
                        }
                    }, {
                        key: "get", value: function (e, t) {
                            var n = t && t.context || this.scope.document, r = i.default.string(e),
                                o = r ? this.selectorMap[e] : e[this.scope.id];
                            if (!o) return null;
                            var a = K.find(o, (function (t) {
                                return t.context === n && (r || t.interactable.inContext(e))
                            }));
                            return a && a.interactable
                        }
                    }, {
                        key: "forEachMatch", value: function (e, t) {
                            for (var n = 0; n < this.list.length; n++) {
                                var r = this.list[n], o = void 0;
                                if ((i.default.string(r.target) ? i.default.element(e) && E.matchesSelector(e, r.target) : e === r.target) && r.inContext(e) && (o = t(r)), void 0 !== o) return o
                            }
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();
                yn.InteractableSet = _n;
                var wn = {};

                function xn(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function En(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i = [], a = !0, s = !1;
                            try {
                                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return i
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return kn(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kn(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function kn(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                Object.defineProperty(wn, "__esModule", {value: !0}), wn.default = void 0;
                var Sn = function () {
                    function e(t) {
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), xn(this, "currentTarget", void 0), xn(this, "originalEvent", void 0), xn(this, "type", void 0), this.originalEvent = t, (0, R.default)(this, t)
                    }

                    var t, n;
                    return t = e, (n = [{
                        key: "preventOriginalDefault", value: function () {
                            this.originalEvent.preventDefault()
                        }
                    }, {
                        key: "stopPropagation", value: function () {
                            this.originalEvent.stopPropagation()
                        }
                    }, {
                        key: "stopImmediatePropagation", value: function () {
                            this.originalEvent.stopImmediatePropagation()
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
                }();

                function Tn(e) {
                    if (!i.default.object(e)) return {capture: !!e, passive: !1};
                    var t = (0, P.default)({}, e);
                    return t.capture = !!e.capture, t.passive = !!e.passive, t
                }

                var Cn = {
                    id: "events", install: function (e) {
                        var t, n = [], r = {}, o = [], a = {
                            add: s,
                            remove: l,
                            addDelegate: function (e, t, n, i, a) {
                                var l = Tn(a);
                                if (!r[n]) {
                                    r[n] = [];
                                    for (var d = 0; d < o.length; d++) {
                                        var p = o[d];
                                        s(p, n, c), s(p, n, u, !0)
                                    }
                                }
                                var f = r[n], h = K.find(f, (function (n) {
                                    return n.selector === e && n.context === t
                                }));
                                h || (h = {selector: e, context: t, listeners: []}, f.push(h)), h.listeners.push([i, l])
                            },
                            removeDelegate: function (e, t, n, o, i) {
                                var a, s = Tn(i), d = r[n], p = !1;
                                if (d) for (a = d.length - 1; a >= 0; a--) {
                                    var f = d[a];
                                    if (f.selector === e && f.context === t) {
                                        for (var h = f.listeners, m = h.length - 1; m >= 0; m--) {
                                            var g = En(h[m], 2), v = g[0], y = g[1], b = y.capture, _ = y.passive;
                                            if (v === o && b === s.capture && _ === s.passive) {
                                                h.splice(m, 1), h.length || (d.splice(a, 1), l(t, n, c), l(t, n, u, !0)), p = !0;
                                                break
                                            }
                                        }
                                        if (p) break
                                    }
                                }
                            },
                            delegateListener: c,
                            delegateUseCapture: u,
                            delegatedEvents: r,
                            documents: o,
                            targets: n,
                            supportsOptions: !1,
                            supportsPassive: !1
                        };

                        function s(e, t, r, o) {
                            var i = Tn(o), s = K.find(n, (function (t) {
                                return t.eventTarget === e
                            }));
                            s || (s = {
                                eventTarget: e,
                                events: {}
                            }, n.push(s)), s.events[t] || (s.events[t] = []), e.addEventListener && !K.contains(s.events[t], r) && (e.addEventListener(t, r, a.supportsOptions ? i : i.capture), s.events[t].push(r))
                        }

                        function l(e, t, r, o) {
                            var i = Tn(o), s = K.findIndex(n, (function (t) {
                                return t.eventTarget === e
                            })), c = n[s];
                            if (c && c.events) if ("all" !== t) {
                                var u = !1, d = c.events[t];
                                if (d) {
                                    if ("all" === r) {
                                        for (var p = d.length - 1; p >= 0; p--) l(e, t, d[p], i);
                                        return
                                    }
                                    for (var f = 0; f < d.length; f++) if (d[f] === r) {
                                        e.removeEventListener(t, r, a.supportsOptions ? i : i.capture), d.splice(f, 1), 0 === d.length && (delete c.events[t], u = !0);
                                        break
                                    }
                                }
                                u && !Object.keys(c.events).length && n.splice(s, 1)
                            } else for (t in c.events) c.events.hasOwnProperty(t) && l(e, t, "all")
                        }

                        function c(e, t) {
                            for (var n = Tn(t), o = new Sn(e), a = r[e.type], s = En(B.getEventTargets(e), 1)[0], l = s; i.default.element(l);) {
                                for (var c = 0; c < a.length; c++) {
                                    var u = a[c], d = u.selector, p = u.context;
                                    if (E.matchesSelector(l, d) && E.nodeContains(p, s) && E.nodeContains(p, l)) {
                                        var f = u.listeners;
                                        o.currentTarget = l;
                                        for (var h = 0; h < f.length; h++) {
                                            var m = En(f[h], 2), g = m[0], v = m[1], y = v.capture, b = v.passive;
                                            y === n.capture && b === n.passive && g(o)
                                        }
                                    }
                                }
                                l = E.parentNode(l)
                            }
                        }

                        function u(e) {
                            return c(e, !0)
                        }

                        return null == (t = e.document) || t.createElement("div").addEventListener("test", null, {
                            get capture() {
                                return a.supportsOptions = !0
                            }, get passive() {
                                return a.supportsPassive = !0
                            }
                        }), e.events = a, a
                    }
                };
                wn.default = Cn;
                var An = {};
                Object.defineProperty(An, "__esModule", {value: !0}), An.default = void 0;
                var On = {
                    methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function (e) {
                        for (var t = 0; t < On.methodOrder.length; t++) {
                            var n;
                            n = On.methodOrder[t];
                            var r = On[n](e);
                            if (r) return r
                        }
                        return null
                    }, simulationResume: function (e) {
                        var t = e.pointerType, n = e.eventType, r = e.eventTarget, o = e.scope;
                        if (!/down|start/i.test(n)) return null;
                        for (var i = 0; i < o.interactions.list.length; i++) {
                            var a = o.interactions.list[i], s = r;
                            if (a.simulation && a.simulation.allowResume && a.pointerType === t) for (; s;) {
                                if (s === a.element) return a;
                                s = E.parentNode(s)
                            }
                        }
                        return null
                    }, mouseOrPen: function (e) {
                        var t, n = e.pointerId, r = e.pointerType, o = e.eventType, i = e.scope;
                        if ("mouse" !== r && "pen" !== r) return null;
                        for (var a = 0; a < i.interactions.list.length; a++) {
                            var s = i.interactions.list[a];
                            if (s.pointerType === r) {
                                if (s.simulation && !Pn(s, n)) continue;
                                if (s.interacting()) return s;
                                t || (t = s)
                            }
                        }
                        if (t) return t;
                        for (var l = 0; l < i.interactions.list.length; l++) {
                            var c = i.interactions.list[l];
                            if (!(c.pointerType !== r || /down/i.test(o) && c.simulation)) return c
                        }
                        return null
                    }, hasPointer: function (e) {
                        for (var t = e.pointerId, n = e.scope, r = 0; r < n.interactions.list.length; r++) {
                            var o = n.interactions.list[r];
                            if (Pn(o, t)) return o
                        }
                        return null
                    }, idle: function (e) {
                        for (var t = e.pointerType, n = e.scope, r = 0; r < n.interactions.list.length; r++) {
                            var o = n.interactions.list[r];
                            if (1 === o.pointers.length) {
                                var i = o.interactable;
                                if (i && (!i.options.gesture || !i.options.gesture.enabled)) continue
                            } else if (o.pointers.length >= 2) continue;
                            if (!o.interacting() && t === o.pointerType) return o
                        }
                        return null
                    }
                };

                function Pn(e, t) {
                    return e.pointers.some((function (e) {
                        return e.id === t
                    }))
                }

                var Mn = On;
                An.default = Mn;
                var Dn = {};

                function Nn(e) {
                    return Nn = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, Nn(e)
                }

                function In(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i = [], a = !0, s = !1;
                            try {
                                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return i
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return Ln(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ln(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Ln(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function jn(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function qn(e, t) {
                    return qn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    }, qn(e, t)
                }

                function Rn(e, t) {
                    if (t && ("object" === Nn(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }

                function Bn(e) {
                    return Bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Bn(e)
                }

                Object.defineProperty(Dn, "__esModule", {value: !0}), Dn.default = void 0;
                var zn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];

                function Un(e, t) {
                    return function (n) {
                        var r = t.interactions.list, o = B.getPointerType(n), i = In(B.getEventTargets(n), 2), a = i[0],
                            s = i[1], l = [];
                        if (/^touch/.test(n.type)) {
                            t.prevTouchTime = t.now();
                            for (var c = 0; c < n.changedTouches.length; c++) {
                                var u = n.changedTouches[c], d = {
                                    pointer: u,
                                    pointerId: B.getPointerId(u),
                                    pointerType: o,
                                    eventType: n.type,
                                    eventTarget: a,
                                    curEventTarget: s,
                                    scope: t
                                }, p = Hn(d);
                                l.push([d.pointer, d.eventTarget, d.curEventTarget, p])
                            }
                        } else {
                            var f = !1;
                            if (!_.default.supportsPointerEvent && /mouse/.test(n.type)) {
                                for (var h = 0; h < r.length && !f; h++) f = "mouse" !== r[h].pointerType && r[h].pointerIsDown;
                                f = f || t.now() - t.prevTouchTime < 500 || 0 === n.timeStamp
                            }
                            if (!f) {
                                var m = {
                                    pointer: n,
                                    pointerId: B.getPointerId(n),
                                    pointerType: o,
                                    eventType: n.type,
                                    curEventTarget: s,
                                    eventTarget: a,
                                    scope: t
                                }, g = Hn(m);
                                l.push([m.pointer, m.eventTarget, m.curEventTarget, g])
                            }
                        }
                        for (var v = 0; v < l.length; v++) {
                            var y = In(l[v], 4), b = y[0], w = y[1], x = y[2];
                            y[3][e](b, n, w, x)
                        }
                    }
                }

                function Hn(e) {
                    var t = e.pointerType, n = e.scope, r = {interaction: An.default.search(e), searchDetails: e};
                    return n.fire("interactions:find", r), r.interaction || n.interactions.new({pointerType: t})
                }

                function Fn(e, t) {
                    var n = e.doc, r = e.scope, o = e.options, i = r.interactions.docEvents, a = r.events, s = a[t];
                    for (var l in r.browser.isIOS && !o.events && (o.events = {passive: !1}), a.delegatedEvents) s(n, l, a.delegateListener), s(n, l, a.delegateUseCapture, !0);
                    for (var c = o && o.events, u = 0; u < i.length; u++) {
                        var d = i[u];
                        s(n, d.type, d.listener, c)
                    }
                }

                var Vn = {
                    id: "core/interactions", install: function (e) {
                        for (var t = {}, n = 0; n < zn.length; n++) {
                            var r = zn[n];
                            t[r] = Un(r, e)
                        }
                        var o, i = _.default.pEventTypes;

                        function a() {
                            for (var t = 0; t < e.interactions.list.length; t++) {
                                var n = e.interactions.list[t];
                                if (n.pointerIsDown && "touch" === n.pointerType && !n._interacting) for (var r = function () {
                                    var t = n.pointers[o];
                                    e.documents.some((function (e) {
                                        var n = e.doc;
                                        return (0, E.nodeContains)(n, t.downTarget)
                                    })) || n.removePointer(t.pointer, t.event)
                                }, o = 0; o < n.pointers.length; o++) r()
                            }
                        }

                        (o = g.default.PointerEvent ? [{type: i.down, listener: a}, {
                            type: i.down,
                            listener: t.pointerDown
                        }, {type: i.move, listener: t.pointerMove}, {
                            type: i.up,
                            listener: t.pointerUp
                        }, {type: i.cancel, listener: t.pointerUp}] : [{
                            type: "mousedown",
                            listener: t.pointerDown
                        }, {type: "mousemove", listener: t.pointerMove}, {
                            type: "mouseup",
                            listener: t.pointerUp
                        }, {type: "touchstart", listener: a}, {
                            type: "touchstart",
                            listener: t.pointerDown
                        }, {type: "touchmove", listener: t.pointerMove}, {
                            type: "touchend",
                            listener: t.pointerUp
                        }, {type: "touchcancel", listener: t.pointerUp}]).push({
                            type: "blur", listener: function (t) {
                                for (var n = 0; n < e.interactions.list.length; n++) e.interactions.list[n].documentBlur(t)
                            }
                        }), e.prevTouchTime = 0, e.Interaction = function (t) {
                            !function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {writable: !1}), t && qn(e, t)
                            }(s, t);
                            var n, r, o, i, a = (o = s, i = function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                    }))), !0
                                } catch (e) {
                                    return !1
                                }
                            }(), function () {
                                var e, t = Bn(o);
                                if (i) {
                                    var n = Bn(this).constructor;
                                    e = Reflect.construct(t, arguments, n)
                                } else e = t.apply(this, arguments);
                                return Rn(this, e)
                            });

                            function s() {
                                return jn(this, s), a.apply(this, arguments)
                            }

                            return n = s, (r = [{
                                key: "pointerMoveTolerance", get: function () {
                                    return e.interactions.pointerMoveTolerance
                                }, set: function (t) {
                                    e.interactions.pointerMoveTolerance = t
                                }
                            }, {
                                key: "_now", value: function () {
                                    return e.now()
                                }
                            }]) && function (e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), s
                        }(Ut.default), e.interactions = {
                            list: [], new: function (t) {
                                t.scopeFire = function (t, n) {
                                    return e.fire(t, n)
                                };
                                var n = new e.Interaction(t);
                                return e.interactions.list.push(n), n
                            }, listeners: t, docEvents: o, pointerMoveTolerance: 1
                        }, e.usePlugin(st.default)
                    }, listeners: {
                        "scope:add-document": function (e) {
                            return Fn(e, "add")
                        }, "scope:remove-document": function (e) {
                            return Fn(e, "remove")
                        }, "interactable:unset": function (e, t) {
                            for (var n = e.interactable, r = t.interactions.list.length - 1; r >= 0; r--) {
                                var o = t.interactions.list[r];
                                o.interactable === n && (o.stop(), t.fire("interactions:destroy", {interaction: o}), o.destroy(), t.interactions.list.length > 2 && t.interactions.list.splice(r, 1))
                            }
                        }
                    }, onDocSignal: Fn, doOnInteractions: Un, methodNames: zn
                }, Yn = Vn;
                Dn.default = Yn;
                var Wn = {};

                function Gn(e) {
                    return Gn = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, Gn(e)
                }

                function Xn() {
                    return Xn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
                        var r = Kn(e, t);
                        if (r) {
                            var o = Object.getOwnPropertyDescriptor(r, t);
                            return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
                        }
                    }, Xn.apply(this, arguments)
                }

                function Kn(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Qn(e));) ;
                    return e
                }

                function $n(e, t) {
                    return $n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    }, $n(e, t)
                }

                function Jn(e, t) {
                    if (t && ("object" === Gn(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }

                function Qn(e) {
                    return Qn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Qn(e)
                }

                function Zn(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function er(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function tr(e, t, n) {
                    return t && er(e.prototype, t), n && er(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
                }

                function nr(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(Wn, "__esModule", {value: !0}), Wn.Scope = void 0, Wn.initScope = or;
                var rr = function () {
                    function e() {
                        var t = this;
                        Zn(this, e), nr(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), nr(this, "isInitialized", !1), nr(this, "listenerMaps", []), nr(this, "browser", _.default), nr(this, "defaults", (0, mt.default)(Ct.defaults)), nr(this, "Eventable", cn.Eventable), nr(this, "actions", {
                            map: {},
                            phases: {start: !0, move: !0, end: !0},
                            methodDict: {},
                            phaselessTypes: {}
                        }), nr(this, "interactStatic", (0, hn.createInteractStatic)(this)), nr(this, "InteractEvent", At.InteractEvent), nr(this, "Interactable", void 0), nr(this, "interactables", new yn.InteractableSet(this)), nr(this, "_win", void 0), nr(this, "document", void 0), nr(this, "window", void 0), nr(this, "documents", []), nr(this, "_plugins", {
                            list: [],
                            map: {}
                        }), nr(this, "onWindowUnload", (function (e) {
                            return t.removeDocument(e.target)
                        }));
                        var n = this;
                        this.Interactable = function (e) {
                            !function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), Object.defineProperty(e, "prototype", {writable: !1}), t && $n(e, t)
                            }(i, e);
                            var t, r, o = (t = i, r = function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                                    }))), !0
                                } catch (e) {
                                    return !1
                                }
                            }(), function () {
                                var e, n = Qn(t);
                                if (r) {
                                    var o = Qn(this).constructor;
                                    e = Reflect.construct(n, arguments, o)
                                } else e = n.apply(this, arguments);
                                return Jn(this, e)
                            });

                            function i() {
                                return Zn(this, i), o.apply(this, arguments)
                            }

                            return tr(i, [{
                                key: "_defaults", get: function () {
                                    return n.defaults
                                }
                            }, {
                                key: "set", value: function (e) {
                                    return Xn(Qn(i.prototype), "set", this).call(this, e), n.fire("interactable:set", {
                                        options: e,
                                        interactable: this
                                    }), this
                                }
                            }, {
                                key: "unset", value: function () {
                                    Xn(Qn(i.prototype), "unset", this).call(this);
                                    var e = n.interactables.list.indexOf(this);
                                    e < 0 || (Xn(Qn(i.prototype), "unset", this).call(this), n.interactables.list.splice(e, 1), n.fire("interactable:unset", {interactable: this}))
                                }
                            }]), i
                        }(mn.Interactable)
                    }

                    return tr(e, [{
                        key: "addListeners", value: function (e, t) {
                            this.listenerMaps.push({id: t, map: e})
                        }
                    }, {
                        key: "fire", value: function (e, t) {
                            for (var n = 0; n < this.listenerMaps.length; n++) {
                                var r = this.listenerMaps[n].map[e];
                                if (r && !1 === r(t, this, e)) return !1
                            }
                        }
                    }, {
                        key: "init", value: function (e) {
                            return this.isInitialized ? this : or(this, e)
                        }
                    }, {
                        key: "pluginIsInstalled", value: function (e) {
                            return this._plugins.map[e.id] || -1 !== this._plugins.list.indexOf(e)
                        }
                    }, {
                        key: "usePlugin", value: function (e, t) {
                            if (!this.isInitialized) return this;
                            if (this.pluginIsInstalled(e)) return this;
                            if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, t), e.listeners && e.before) {
                                for (var n = 0, r = this.listenerMaps.length, o = e.before.reduce((function (e, t) {
                                    return e[t] = !0, e[ir(t)] = !0, e
                                }), {}); n < r; n++) {
                                    var i = this.listenerMaps[n].id;
                                    if (o[i] || o[ir(i)]) break
                                }
                                this.listenerMaps.splice(n, 0, {id: e.id, map: e.listeners})
                            } else e.listeners && this.listenerMaps.push({id: e.id, map: e.listeners});
                            return this
                        }
                    }, {
                        key: "addDocument", value: function (e, n) {
                            if (-1 !== this.getDocIndex(e)) return !1;
                            var r = t.getWindow(e);
                            n = n ? (0, P.default)({}, n) : {}, this.documents.push({
                                doc: e,
                                options: n
                            }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", {
                                doc: e,
                                window: r,
                                scope: this,
                                options: n
                            })
                        }
                    }, {
                        key: "removeDocument", value: function (e) {
                            var n = this.getDocIndex(e), r = t.getWindow(e), o = this.documents[n].options;
                            this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", {
                                doc: e,
                                window: r,
                                scope: this,
                                options: o
                            })
                        }
                    }, {
                        key: "getDocIndex", value: function (e) {
                            for (var t = 0; t < this.documents.length; t++) if (this.documents[t].doc === e) return t;
                            return -1
                        }
                    }, {
                        key: "getDocOptions", value: function (e) {
                            var t = this.getDocIndex(e);
                            return -1 === t ? null : this.documents[t].options
                        }
                    }, {
                        key: "now", value: function () {
                            return (this.window.Date || Date).now()
                        }
                    }]), e
                }();

                function or(e, n) {
                    return e.isInitialized = !0, i.default.window(n) && t.init(n), g.default.init(n), _.default.init(n), Te.default.init(n), e.window = n, e.document = n.document, e.usePlugin(Dn.default), e.usePlugin(wn.default), e
                }

                function ir(e) {
                    return e && e.replace(/\/.*$/, "")
                }

                Wn.Scope = rr;
                var ar = {};
                Object.defineProperty(ar, "__esModule", {value: !0}), ar.default = void 0;
                var sr = new Wn.Scope, lr = sr.interactStatic;
                ar.default = lr;
                var cr = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0;
                sr.init(cr);
                var ur = {};
                Object.defineProperty(ur, "__esModule", {value: !0}), ur.default = void 0, ur.default = function () {
                };
                var dr = {};
                Object.defineProperty(dr, "__esModule", {value: !0}), dr.default = void 0, dr.default = function () {
                };
                var pr = {};

                function fr(e, t) {
                    return function (e) {
                        if (Array.isArray(e)) return e
                    }(e) || function (e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, o, i = [], a = !0, s = !1;
                            try {
                                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                            } catch (e) {
                                s = !0, o = e
                            } finally {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return i
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ("string" == typeof e) return hr(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hr(e, t) : void 0
                        }
                    }(e, t) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function hr(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                Object.defineProperty(pr, "__esModule", {value: !0}), pr.default = void 0, pr.default = function (e) {
                    var t = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function (t) {
                        var n = fr(t, 2), r = n[0], o = n[1];
                        return r in e || o in e
                    })), n = function (n, r) {
                        for (var o = e.range, i = e.limits, a = void 0 === i ? {
                            left: -1 / 0,
                            right: 1 / 0,
                            top: -1 / 0,
                            bottom: 1 / 0
                        } : i, s = e.offset, l = void 0 === s ? {x: 0, y: 0} : s, c = {
                            range: o,
                            grid: e,
                            x: null,
                            y: null
                        }, u = 0; u < t.length; u++) {
                            var d = fr(t[u], 2), p = d[0], f = d[1], h = Math.round((n - l.x) / e[p]),
                                m = Math.round((r - l.y) / e[f]);
                            c[p] = Math.max(a.left, Math.min(a.right, h * e[p] + l.x)), c[f] = Math.max(a.top, Math.min(a.bottom, m * e[f] + l.y))
                        }
                        return c
                    };
                    return n.grid = e, n.coordFields = t, n
                };
                var mr = {};
                Object.defineProperty(mr, "__esModule", {value: !0}), Object.defineProperty(mr, "edgeTarget", {
                    enumerable: !0,
                    get: function () {
                        return ur.default
                    }
                }), Object.defineProperty(mr, "elements", {
                    enumerable: !0, get: function () {
                        return dr.default
                    }
                }), Object.defineProperty(mr, "grid", {
                    enumerable: !0, get: function () {
                        return pr.default
                    }
                });
                var gr = {};
                Object.defineProperty(gr, "__esModule", {value: !0}), gr.default = void 0;
                var vr = {
                    id: "snappers", install: function (e) {
                        var t = e.interactStatic;
                        t.snappers = (0, P.default)(t.snappers || {}, mr), t.createSnapGrid = t.snappers.grid
                    }
                }, yr = vr;
                gr.default = yr;
                var br = {};

                function _r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function wr(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? _r(Object(n), !0).forEach((function (t) {
                            xr(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function xr(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                Object.defineProperty(br, "__esModule", {value: !0}), br.default = br.aspectRatio = void 0;
                var Er = {
                    start: function (e) {
                        var t = e.state, n = e.rect, r = e.edges, o = e.pageCoords, i = t.options.ratio, a = t.options,
                            s = a.equalDelta, l = a.modifiers;
                        "preserve" === i && (i = n.width / n.height), t.startCoords = (0, P.default)({}, o), t.startRect = (0, P.default)({}, n), t.ratio = i, t.equalDelta = s;
                        var c = t.linkedEdges = {
                            top: r.top || r.left && !r.bottom,
                            left: r.left || r.top && !r.right,
                            bottom: r.bottom || r.right && !r.top,
                            right: r.right || r.bottom && !r.left
                        };
                        if (t.xIsPrimaryAxis = !(!r.left && !r.right), t.equalDelta) {
                            var u = (c.left ? 1 : -1) * (c.top ? 1 : -1);
                            t.edgeSign = {x: u, y: u}
                        } else t.edgeSign = {x: c.left ? -1 : 1, y: c.top ? -1 : 1};
                        if ((0, P.default)(e.edges, c), l && l.length) {
                            var d = new gt.default(e.interaction);
                            d.copyFrom(e.interaction.modification), d.prepareStates(l), t.subModification = d, d.startAll(wr({}, e))
                        }
                    }, set: function (e) {
                        var t = e.state, n = e.rect, r = e.coords, o = (0, P.default)({}, r),
                            i = t.equalDelta ? kr : Sr;
                        if (i(t, t.xIsPrimaryAxis, r, n), !t.subModification) return null;
                        var a = (0, P.default)({}, n);
                        (0, M.addEdges)(t.linkedEdges, a, {x: r.x - o.x, y: r.y - o.y});
                        var s = t.subModification.setAll(wr(wr({}, e), {}, {
                            rect: a,
                            edges: t.linkedEdges,
                            pageCoords: r,
                            prevCoords: r,
                            prevRect: a
                        })), l = s.delta;
                        return s.changed && (i(t, Math.abs(l.x) > Math.abs(l.y), s.coords, s.rect), (0, P.default)(r, s.coords)), s.eventProps
                    }, defaults: {ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1}
                };

                function kr(e, t, n) {
                    var r = e.startCoords, o = e.edgeSign;
                    t ? n.y = r.y + (n.x - r.x) * o.y : n.x = r.x + (n.y - r.y) * o.x
                }

                function Sr(e, t, n, r) {
                    var o = e.startRect, i = e.startCoords, a = e.ratio, s = e.edgeSign;
                    if (t) {
                        var l = r.width / a;
                        n.y = i.y + (l - o.height) * s.y
                    } else {
                        var c = r.height * a;
                        n.x = i.x + (c - o.width) * s.x
                    }
                }

                br.aspectRatio = Er;
                var Tr = (0, Et.makeModifier)(Er, "aspectRatio");
                br.default = Tr;
                var Cr = {};
                Object.defineProperty(Cr, "__esModule", {value: !0}), Cr.default = void 0;
                var Ar = function () {
                };
                Ar._defaults = {};
                var Or = Ar;
                Cr.default = Or;
                var Pr = {};
                Object.defineProperty(Pr, "__esModule", {value: !0}), Object.defineProperty(Pr, "default", {
                    enumerable: !0,
                    get: function () {
                        return Cr.default
                    }
                });
                var Mr = {};

                function Dr(e, t, n) {
                    return i.default.func(e) ? M.resolveRectLike(e, t.interactable, t.element, [n.x, n.y, t]) : M.resolveRectLike(e, t.interactable, t.element)
                }

                Object.defineProperty(Mr, "__esModule", {value: !0}), Mr.default = void 0, Mr.getRestrictionRect = Dr, Mr.restrict = void 0;
                var Nr = {
                    start: function (e) {
                        var t = e.rect, n = e.startOffset, r = e.state, o = e.interaction, i = e.pageCoords,
                            a = r.options, s = a.elementRect,
                            l = (0, P.default)({left: 0, top: 0, right: 0, bottom: 0}, a.offset || {});
                        if (t && s) {
                            var c = Dr(a.restriction, o, i);
                            if (c) {
                                var u = c.right - c.left - t.width, d = c.bottom - c.top - t.height;
                                u < 0 && (l.left += u, l.right += u), d < 0 && (l.top += d, l.bottom += d)
                            }
                            l.left += n.left - t.width * s.left, l.top += n.top - t.height * s.top, l.right += n.right - t.width * (1 - s.right), l.bottom += n.bottom - t.height * (1 - s.bottom)
                        }
                        r.offset = l
                    }, set: function (e) {
                        var t = e.coords, n = e.interaction, r = e.state, o = r.options, i = r.offset,
                            a = Dr(o.restriction, n, t);
                        if (a) {
                            var s = M.xywhToTlbr(a);
                            t.x = Math.max(Math.min(s.right - i.right, t.x), s.left + i.left), t.y = Math.max(Math.min(s.bottom - i.bottom, t.y), s.top + i.top)
                        }
                    }, defaults: {restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1}
                };
                Mr.restrict = Nr;
                var Ir = (0, Et.makeModifier)(Nr, "restrict");
                Mr.default = Ir;
                var Lr = {};
                Object.defineProperty(Lr, "__esModule", {value: !0}), Lr.restrictEdges = Lr.default = void 0;
                var jr = {top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0},
                    qr = {top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0};

                function Rr(e, t) {
                    for (var n = ["top", "left", "bottom", "right"], r = 0; r < n.length; r++) {
                        var o = n[r];
                        o in e || (e[o] = t[o])
                    }
                    return e
                }

                var Br = {
                    noInner: jr, noOuter: qr, start: function (e) {
                        var t, n = e.interaction, r = e.startOffset, o = e.state, i = o.options;
                        if (i) {
                            var a = (0, Mr.getRestrictionRect)(i.offset, n, n.coords.start.page);
                            t = M.rectToXY(a)
                        }
                        t = t || {x: 0, y: 0}, o.offset = {
                            top: t.y + r.top,
                            left: t.x + r.left,
                            bottom: t.y - r.bottom,
                            right: t.x - r.right
                        }
                    }, set: function (e) {
                        var t = e.coords, n = e.edges, r = e.interaction, o = e.state, i = o.offset, a = o.options;
                        if (n) {
                            var s = (0, P.default)({}, t), l = (0, Mr.getRestrictionRect)(a.inner, r, s) || {},
                                c = (0, Mr.getRestrictionRect)(a.outer, r, s) || {};
                            Rr(l, jr), Rr(c, qr), n.top ? t.y = Math.min(Math.max(c.top + i.top, s.y), l.top + i.top) : n.bottom && (t.y = Math.max(Math.min(c.bottom + i.bottom, s.y), l.bottom + i.bottom)), n.left ? t.x = Math.min(Math.max(c.left + i.left, s.x), l.left + i.left) : n.right && (t.x = Math.max(Math.min(c.right + i.right, s.x), l.right + i.right))
                        }
                    }, defaults: {inner: null, outer: null, offset: null, endOnly: !1, enabled: !1}
                };
                Lr.restrictEdges = Br;
                var zr = (0, Et.makeModifier)(Br, "restrictEdges");
                Lr.default = zr;
                var Ur = {};
                Object.defineProperty(Ur, "__esModule", {value: !0}), Ur.restrictRect = Ur.default = void 0;
                var Hr = (0, P.default)({
                    get elementRect() {
                        return {top: 0, left: 0, bottom: 1, right: 1}
                    }, set elementRect(e) {
                    }
                }, Mr.restrict.defaults), Fr = {start: Mr.restrict.start, set: Mr.restrict.set, defaults: Hr};
                Ur.restrictRect = Fr;
                var Vr = (0, Et.makeModifier)(Fr, "restrictRect");
                Ur.default = Vr;
                var Yr = {};
                Object.defineProperty(Yr, "__esModule", {value: !0}), Yr.restrictSize = Yr.default = void 0;
                var Wr = {width: -1 / 0, height: -1 / 0}, Gr = {width: 1 / 0, height: 1 / 0}, Xr = {
                    start: function (e) {
                        return Lr.restrictEdges.start(e)
                    }, set: function (e) {
                        var t = e.interaction, n = e.state, r = e.rect, o = e.edges, i = n.options;
                        if (o) {
                            var a = M.tlbrToXywh((0, Mr.getRestrictionRect)(i.min, t, e.coords)) || Wr,
                                s = M.tlbrToXywh((0, Mr.getRestrictionRect)(i.max, t, e.coords)) || Gr;
                            n.options = {
                                endOnly: i.endOnly,
                                inner: (0, P.default)({}, Lr.restrictEdges.noInner),
                                outer: (0, P.default)({}, Lr.restrictEdges.noOuter)
                            }, o.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : o.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), o.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : o.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), Lr.restrictEdges.set(e), n.options = i
                        }
                    }, defaults: {min: null, max: null, endOnly: !1, enabled: !1}
                };
                Yr.restrictSize = Xr;
                var Kr = (0, Et.makeModifier)(Xr, "restrictSize");
                Yr.default = Kr;
                var $r = {};
                Object.defineProperty($r, "__esModule", {value: !0}), Object.defineProperty($r, "default", {
                    enumerable: !0,
                    get: function () {
                        return Cr.default
                    }
                });
                var Jr = {};
                Object.defineProperty(Jr, "__esModule", {value: !0}), Jr.snap = Jr.default = void 0;
                var Qr = {
                    start: function (e) {
                        var t, n = e.interaction, r = e.interactable, o = e.element, i = e.rect, a = e.state,
                            s = e.startOffset, l = a.options, c = l.offsetWithOrigin ? function (e) {
                                var t = e.interaction.element;
                                return (0, M.rectToXY)((0, M.resolveRectLike)(e.state.options.origin, null, null, [t])) || (0, I.default)(e.interactable, t, e.interaction.prepared.name)
                            }(e) : {x: 0, y: 0};
                        if ("startCoords" === l.offset) t = {x: n.coords.start.page.x, y: n.coords.start.page.y}; else {
                            var u = (0, M.resolveRectLike)(l.offset, r, o, [n]);
                            (t = (0, M.rectToXY)(u) || {x: 0, y: 0}).x += c.x, t.y += c.y
                        }
                        var d = l.relativePoints;
                        a.offsets = i && d && d.length ? d.map((function (e, n) {
                            return {
                                index: n,
                                relativePoint: e,
                                x: s.left - i.width * e.x + t.x,
                                y: s.top - i.height * e.y + t.y
                            }
                        })) : [{index: 0, relativePoint: null, x: t.x, y: t.y}]
                    },
                    set: function (e) {
                        var t = e.interaction, n = e.coords, r = e.state, o = r.options, a = r.offsets,
                            s = (0, I.default)(t.interactable, t.element, t.prepared.name), l = (0, P.default)({}, n),
                            c = [];
                        o.offsetWithOrigin || (l.x -= s.x, l.y -= s.y);
                        for (var u = 0; u < a.length; u++) for (var d = a[u], p = l.x - d.x, f = l.y - d.y, h = 0, m = o.targets.length; h < m; h++) {
                            var g, v = o.targets[h];
                            (g = i.default.func(v) ? v(p, f, t._proxy, d, h) : v) && c.push({
                                x: (i.default.number(g.x) ? g.x : p) + d.x,
                                y: (i.default.number(g.y) ? g.y : f) + d.y,
                                range: i.default.number(g.range) ? g.range : o.range,
                                source: v,
                                index: h,
                                offset: d
                            })
                        }
                        for (var y = {
                            target: null,
                            inRange: !1,
                            distance: 0,
                            range: 0,
                            delta: {x: 0, y: 0}
                        }, b = 0; b < c.length; b++) {
                            var _ = c[b], w = _.range, x = _.x - l.x, E = _.y - l.y, k = (0, q.default)(x, E),
                                S = k <= w;
                            w === 1 / 0 && y.inRange && y.range !== 1 / 0 && (S = !1), y.target && !(S ? y.inRange && w !== 1 / 0 ? k / w < y.distance / y.range : w === 1 / 0 && y.range !== 1 / 0 || k < y.distance : !y.inRange && k < y.distance) || (y.target = _, y.distance = k, y.range = w, y.inRange = S, y.delta.x = x, y.delta.y = E)
                        }
                        return y.inRange && (n.x = y.target.x, n.y = y.target.y), r.closest = y, y
                    },
                    defaults: {
                        range: 1 / 0,
                        targets: null,
                        offset: null,
                        offsetWithOrigin: !0,
                        origin: null,
                        relativePoints: null,
                        endOnly: !1,
                        enabled: !1
                    }
                };
                Jr.snap = Qr;
                var Zr = (0, Et.makeModifier)(Qr, "snap");
                Jr.default = Zr;
                var eo = {};

                function to(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                Object.defineProperty(eo, "__esModule", {value: !0}), eo.snapSize = eo.default = void 0;
                var no = {
                    start: function (e) {
                        var t = e.state, n = e.edges, r = t.options;
                        if (!n) return null;
                        e.state = {
                            options: {
                                targets: null,
                                relativePoints: [{x: n.left ? 0 : 1, y: n.top ? 0 : 1}],
                                offset: r.offset || "self",
                                origin: {x: 0, y: 0},
                                range: r.range
                            }
                        }, t.targetFields = t.targetFields || [["width", "height"], ["x", "y"]], Jr.snap.start(e), t.offsets = e.state.offsets, e.state = t
                    }, set: function (e) {
                        var t, n = e.interaction, r = e.state, o = e.coords, a = r.options, s = r.offsets,
                            l = {x: o.x - s[0].x, y: o.y - s[0].y};
                        r.options = (0, P.default)({}, a), r.options.targets = [];
                        for (var c = 0; c < (a.targets || []).length; c++) {
                            var u = (a.targets || [])[c], d = void 0;
                            if (d = i.default.func(u) ? u(l.x, l.y, n) : u) {
                                for (var p = 0; p < r.targetFields.length; p++) {
                                    var f = function (e) {
                                        if (Array.isArray(e)) return e
                                    }(t = r.targetFields[p]) || function (e, t) {
                                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != n) {
                                            var r, o, i = [], a = !0, s = !1;
                                            try {
                                                for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), 2 !== i.length); a = !0) ;
                                            } catch (e) {
                                                s = !0, o = e
                                            } finally {
                                                try {
                                                    a || null == n.return || n.return()
                                                } finally {
                                                    if (s) throw o
                                                }
                                            }
                                            return i
                                        }
                                    }(t) || function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return to(e, 2);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? to(e, 2) : void 0
                                        }
                                    }(t) || function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(), h = f[0], m = f[1];
                                    if (h in d || m in d) {
                                        d.x = d[h], d.y = d[m];
                                        break
                                    }
                                }
                                r.options.targets.push(d)
                            }
                        }
                        var g = Jr.snap.set(e);
                        return r.options = a, g
                    }, defaults: {range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1}
                };
                eo.snapSize = no;
                var ro = (0, Et.makeModifier)(no, "snapSize");
                eo.default = ro;
                var oo = {};
                Object.defineProperty(oo, "__esModule", {value: !0}), oo.snapEdges = oo.default = void 0;
                var io = {
                    start: function (e) {
                        var t = e.edges;
                        return t ? (e.state.targetFields = e.state.targetFields || [[t.left ? "left" : "right", t.top ? "top" : "bottom"]], eo.snapSize.start(e)) : null
                    },
                    set: eo.snapSize.set,
                    defaults: (0, P.default)((0, mt.default)(eo.snapSize.defaults), {
                        targets: null,
                        range: null,
                        offset: {x: 0, y: 0}
                    })
                };
                oo.snapEdges = io;
                var ao = (0, Et.makeModifier)(io, "snapEdges");
                oo.default = ao;
                var so = {};
                Object.defineProperty(so, "__esModule", {value: !0}), Object.defineProperty(so, "default", {
                    enumerable: !0,
                    get: function () {
                        return Cr.default
                    }
                });
                var lo = {};
                Object.defineProperty(lo, "__esModule", {value: !0}), Object.defineProperty(lo, "default", {
                    enumerable: !0,
                    get: function () {
                        return Cr.default
                    }
                });
                var co = {};
                Object.defineProperty(co, "__esModule", {value: !0}), co.default = void 0;
                var uo = {
                    aspectRatio: br.default,
                    restrictEdges: Lr.default,
                    restrict: Mr.default,
                    restrictRect: Ur.default,
                    restrictSize: Yr.default,
                    snapEdges: oo.default,
                    snap: Jr.default,
                    snapSize: eo.default,
                    spring: so.default,
                    avoid: Pr.default,
                    transform: lo.default,
                    rubberband: $r.default
                };
                co.default = uo;
                var po = {};
                Object.defineProperty(po, "__esModule", {value: !0}), po.default = void 0;
                var fo = {
                    id: "modifiers", install: function (e) {
                        var t = e.interactStatic;
                        for (var n in e.usePlugin(Et.default), e.usePlugin(gr.default), t.modifiers = co.default, co.default) {
                            var r = co.default[n], o = r._defaults, i = r._methods;
                            o._methods = i, e.defaults.perAction[n] = o
                        }
                    }
                }, ho = fo;
                po.default = ho;
                var mo = {};

                function go(e) {
                    return go = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, go(e)
                }

                function vo(e, t) {
                    return vo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                        return e.__proto__ = t, e
                    }, vo(e, t)
                }

                function yo(e, t) {
                    if (t && ("object" === go(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return bo(e)
                }

                function bo(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function _o(e) {
                    return _o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, _o(e)
                }

                Object.defineProperty(mo, "__esModule", {value: !0}), mo.default = mo.PointerEvent = void 0;
                var wo = function (e) {
                    !function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {writable: !1}), t && vo(e, t)
                    }(a, e);
                    var t, n, r, o, i = (r = a, o = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                            }))), !0
                        } catch (e) {
                            return !1
                        }
                    }(), function () {
                        var e, t = _o(r);
                        if (o) {
                            var n = _o(this).constructor;
                            e = Reflect.construct(t, arguments, n)
                        } else e = t.apply(this, arguments);
                        return yo(this, e)
                    });

                    function a(e, t, n, r, o, s) {
                        var l;
                        if (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), l = i.call(this, o), B.pointerExtend(bo(l), n), n !== t && B.pointerExtend(bo(l), t), l.timeStamp = s, l.originalEvent = n, l.type = e, l.pointerId = B.getPointerId(t), l.pointerType = B.getPointerType(t), l.target = r, l.currentTarget = null, "tap" === e) {
                            var c = o.getPointerIndex(t);
                            l.dt = l.timeStamp - o.pointers[c].downTime;
                            var u = l.timeStamp - o.tapTime;
                            l.double = !!o.prevTap && "doubletap" !== o.prevTap.type && o.prevTap.target === l.target && u < 500
                        } else "doubletap" === e && (l.dt = t.timeStamp - o.tapTime, l.double = !0);
                        return l
                    }

                    return t = a, (n = [{
                        key: "_subtractOrigin", value: function (e) {
                            var t = e.x, n = e.y;
                            return this.pageX -= t, this.pageY -= n, this.clientX -= t, this.clientY -= n, this
                        }
                    }, {
                        key: "_addOrigin", value: function (e) {
                            var t = e.x, n = e.y;
                            return this.pageX += t, this.pageY += n, this.clientX += t, this.clientY += n, this
                        }
                    }, {
                        key: "preventDefault", value: function () {
                            this.originalEvent.preventDefault()
                        }
                    }]) && function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), a
                }(W.BaseEvent);
                mo.PointerEvent = mo.default = wo;
                var xo = {};
                Object.defineProperty(xo, "__esModule", {value: !0}), xo.default = void 0;
                var Eo = {
                    id: "pointer-events/base",
                    before: ["inertia", "modifiers", "auto-start", "actions"],
                    install: function (e) {
                        e.pointerEvents = Eo, e.defaults.actions.pointerEvents = Eo.defaults, (0, P.default)(e.actions.phaselessTypes, Eo.types)
                    },
                    listeners: {
                        "interactions:new": function (e) {
                            var t = e.interaction;
                            t.prevTap = null, t.tapTime = 0
                        }, "interactions:update-pointer": function (e) {
                            var t = e.down, n = e.pointerInfo;
                            !t && n.hold || (n.hold = {duration: 1 / 0, timeout: null})
                        }, "interactions:move": function (e, t) {
                            var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                            e.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && To(e), ko({
                                interaction: n,
                                pointer: r,
                                event: o,
                                eventTarget: i,
                                type: "move"
                            }, t))
                        }, "interactions:down": function (e, t) {
                            !function (e, t) {
                                for (var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget, a = e.pointerIndex, s = n.pointers[a].hold, l = E.getPath(i), c = {
                                    interaction: n,
                                    pointer: r,
                                    event: o,
                                    eventTarget: i,
                                    type: "hold",
                                    targets: [],
                                    path: l,
                                    node: null
                                }, u = 0; u < l.length; u++) {
                                    var d = l[u];
                                    c.node = d, t.fire("pointerEvents:collect-targets", c)
                                }
                                if (c.targets.length) {
                                    for (var p = 1 / 0, f = 0; f < c.targets.length; f++) {
                                        var h = c.targets[f].eventable.options.holdDuration;
                                        h < p && (p = h)
                                    }
                                    s.duration = p, s.timeout = setTimeout((function () {
                                        ko({interaction: n, eventTarget: i, pointer: r, event: o, type: "hold"}, t)
                                    }), p)
                                }
                            }(e, t), ko(e, t)
                        }, "interactions:up": function (e, t) {
                            To(e), ko(e, t), function (e, t) {
                                var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget;
                                n.pointerWasMoved || ko({
                                    interaction: n,
                                    eventTarget: i,
                                    pointer: r,
                                    event: o,
                                    type: "tap"
                                }, t)
                            }(e, t)
                        }, "interactions:cancel": function (e, t) {
                            To(e), ko(e, t)
                        }
                    },
                    PointerEvent: mo.PointerEvent,
                    fire: ko,
                    collectEventTargets: So,
                    defaults: {holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: {x: 0, y: 0}},
                    types: {down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0}
                };

                function ko(e, t) {
                    var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget, a = e.type, s = e.targets,
                        l = void 0 === s ? So(e, t) : s, c = new mo.PointerEvent(a, r, o, i, n, t.now());
                    t.fire("pointerEvents:new", {pointerEvent: c});
                    for (var u = {
                        interaction: n,
                        pointer: r,
                        event: o,
                        eventTarget: i,
                        targets: l,
                        type: a,
                        pointerEvent: c
                    }, d = 0; d < l.length; d++) {
                        var p = l[d];
                        for (var f in p.props || {}) c[f] = p.props[f];
                        var h = (0, I.default)(p.eventable, p.node);
                        if (c._subtractOrigin(h), c.eventable = p.eventable, c.currentTarget = p.node, p.eventable.fire(c), c._addOrigin(h), c.immediatePropagationStopped || c.propagationStopped && d + 1 < l.length && l[d + 1].node !== c.currentTarget) break
                    }
                    if (t.fire("pointerEvents:fired", u), "tap" === a) {
                        var m = c.double ? ko({
                            interaction: n,
                            pointer: r,
                            event: o,
                            eventTarget: i,
                            type: "doubletap"
                        }, t) : c;
                        n.prevTap = m, n.tapTime = m.timeStamp
                    }
                    return c
                }

                function So(e, t) {
                    var n = e.interaction, r = e.pointer, o = e.event, i = e.eventTarget, a = e.type,
                        s = n.getPointerIndex(r), l = n.pointers[s];
                    if ("tap" === a && (n.pointerWasMoved || !l || l.downTarget !== i)) return [];
                    for (var c = E.getPath(i), u = {
                        interaction: n,
                        pointer: r,
                        event: o,
                        eventTarget: i,
                        type: a,
                        path: c,
                        targets: [],
                        node: null
                    }, d = 0; d < c.length; d++) {
                        var p = c[d];
                        u.node = p, t.fire("pointerEvents:collect-targets", u)
                    }
                    return "hold" === a && (u.targets = u.targets.filter((function (e) {
                        var t;
                        return e.eventable.options.holdDuration === (null == (t = n.pointers[s]) ? void 0 : t.hold.duration)
                    }))), u.targets
                }

                function To(e) {
                    var t = e.interaction, n = e.pointerIndex, r = t.pointers[n].hold;
                    r && r.timeout && (clearTimeout(r.timeout), r.timeout = null)
                }

                var Co = Eo;
                xo.default = Co;
                var Ao = {};

                function Oo(e) {
                    var t = e.interaction;
                    t.holdIntervalHandle && (clearInterval(t.holdIntervalHandle), t.holdIntervalHandle = null)
                }

                Object.defineProperty(Ao, "__esModule", {value: !0}), Ao.default = void 0;
                var Po = {
                    id: "pointer-events/holdRepeat", install: function (e) {
                        e.usePlugin(xo.default);
                        var t = e.pointerEvents;
                        t.defaults.holdRepeatInterval = 0, t.types.holdrepeat = e.actions.phaselessTypes.holdrepeat = !0
                    }, listeners: ["move", "up", "cancel", "endall"].reduce((function (e, t) {
                        return e["pointerEvents:".concat(t)] = Oo, e
                    }), {
                        "pointerEvents:new": function (e) {
                            var t = e.pointerEvent;
                            "hold" === t.type && (t.count = (t.count || 0) + 1)
                        }, "pointerEvents:fired": function (e, t) {
                            var n = e.interaction, r = e.pointerEvent, o = e.eventTarget, i = e.targets;
                            if ("hold" === r.type && i.length) {
                                var a = i[0].eventable.options.holdRepeatInterval;
                                a <= 0 || (n.holdIntervalHandle = setTimeout((function () {
                                    t.pointerEvents.fire({
                                        interaction: n,
                                        eventTarget: o,
                                        type: "hold",
                                        pointer: r,
                                        event: r
                                    }, t)
                                }), a))
                            }
                        }
                    })
                }, Mo = Po;
                Ao.default = Mo;
                var Do = {};

                function No(e) {
                    return (0, P.default)(this.events.options, e), this
                }

                Object.defineProperty(Do, "__esModule", {value: !0}), Do.default = void 0;
                var Io = {
                    id: "pointer-events/interactableTargets", install: function (e) {
                        var t = e.Interactable;
                        t.prototype.pointerEvents = No;
                        var n = t.prototype._backCompatOption;
                        t.prototype._backCompatOption = function (e, t) {
                            var r = n.call(this, e, t);
                            return r === this && (this.events.options[e] = t), r
                        }
                    }, listeners: {
                        "pointerEvents:collect-targets": function (e, t) {
                            var n = e.targets, r = e.node, o = e.type, i = e.eventTarget;
                            t.interactables.forEachMatch(r, (function (e) {
                                var t = e.events, a = t.options;
                                t.types[o] && t.types[o].length && e.testIgnoreAllow(a, r, i) && n.push({
                                    node: r,
                                    eventable: t,
                                    props: {interactable: e}
                                })
                            }))
                        }, "interactable:new": function (e) {
                            var t = e.interactable;
                            t.events.getRect = function (e) {
                                return t.getRect(e)
                            }
                        }, "interactable:set": function (e, t) {
                            var n = e.interactable, r = e.options;
                            (0, P.default)(n.events.options, t.pointerEvents.defaults), (0, P.default)(n.events.options, r.pointerEvents || {})
                        }
                    }
                }, Lo = Io;
                Do.default = Lo;
                var jo = {};
                Object.defineProperty(jo, "__esModule", {value: !0}), jo.default = void 0;
                var qo = {
                    id: "pointer-events", install: function (e) {
                        e.usePlugin(xo), e.usePlugin(Ao.default), e.usePlugin(Do.default)
                    }
                }, Ro = qo;
                jo.default = Ro;
                var Bo = {};

                function zo(e) {
                    var t = e.Interactable;
                    e.actions.phases.reflow = !0, t.prototype.reflow = function (t) {
                        return function (e, t, n) {
                            for (var r = i.default.string(e.target) ? K.from(e._context.querySelectorAll(e.target)) : [e.target], o = n.window.Promise, a = o ? [] : null, s = function () {
                                var i = r[l], s = e.getRect(i);
                                if (!s) return "break";
                                var c = K.find(n.interactions.list, (function (n) {
                                    return n.interacting() && n.interactable === e && n.element === i && n.prepared.name === t.name
                                })), u = void 0;
                                if (c) c.move(), a && (u = c._reflowPromise || new o((function (e) {
                                    c._reflowResolve = e
                                }))); else {
                                    var d = (0, M.tlbrToXywh)(s),
                                        p = {page: {x: d.x, y: d.y}, client: {x: d.x, y: d.y}, timeStamp: n.now()},
                                        f = B.coordsToEvent(p);
                                    u = function (e, t, n, r, o) {
                                        var i = e.interactions.new({pointerType: "reflow"}),
                                            a = {interaction: i, event: o, pointer: o, eventTarget: n, phase: "reflow"};
                                        i.interactable = t, i.element = n, i.prevEvent = o, i.updatePointer(o, o, n, !0), B.setZeroCoords(i.coords.delta), (0, qe.copyAction)(i.prepared, r), i._doPhase(a);
                                        var s = e.window.Promise, l = s ? new s((function (e) {
                                            i._reflowResolve = e
                                        })) : void 0;
                                        return i._reflowPromise = l, i.start(r, t, n), i._interacting ? (i.move(a), i.end(o)) : (i.stop(), i._reflowResolve()), i.removePointer(o, o), l
                                    }(n, e, i, t, f)
                                }
                                a && a.push(u)
                            }, l = 0; l < r.length && "break" !== s(); l++) ;
                            return a && o.all(a).then((function () {
                                return e
                            }))
                        }(this, t, e)
                    }
                }

                Object.defineProperty(Bo, "__esModule", {value: !0}), Bo.default = void 0, Bo.install = zo;
                var Uo = {
                    id: "reflow", install: zo, listeners: {
                        "interactions:stop": function (e, t) {
                            var n = e.interaction;
                            "reflow" === n.pointerType && (n._reflowResolve && n._reflowResolve(), K.remove(t.interactions.list, n))
                        }
                    }
                }, Ho = Uo;
                Bo.default = Ho;
                var Fo = {exports: {}};

                function Vo(e) {
                    return Vo = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, Vo(e)
                }

                Object.defineProperty(Fo.exports, "__esModule", {value: !0}), Fo.exports.default = void 0, ar.default.use(st.default), ar.default.use(Wt.default), ar.default.use(jo.default), ar.default.use(en.default), ar.default.use(po.default), ar.default.use(it.default), ar.default.use(ke.default), ar.default.use(Me.default), ar.default.use(Bo.default);
                var Yo = ar.default;
                if (Fo.exports.default = Yo, "object" === Vo(Fo) && Fo) try {
                    Fo.exports = ar.default
                } catch (e) {
                }
                ar.default.default = ar.default, ke.default, Me.default, it.default, st.default, ht.default, en.default, ar.default, po.default, Wt.default, jo.default, Bo.default, Fo = Fo.exports;
                var Wo = {exports: {}};

                function Go(e) {
                    return Go = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ? function (e) {
                        return a(e)
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    }, Go(e)
                }

                Object.defineProperty(Wo.exports, "__esModule", {value: !0}), Wo.exports.default = void 0;
                var Xo = Fo.default;
                if (Wo.exports.default = Xo, "object" === Go(Wo) && Wo) try {
                    Wo.exports = Fo.default
                } catch (e) {
                }
                return Fo.default.default = Fo.default, Wo.exports
            }, "object" == a(t) ? e.exports = i() : (r = [], void 0 === (o = "function" == typeof (n = i) ? n.apply(t, r) : n) || (e.exports = o))
        }, 5072: function (e, t, n) {
            var r, o, i, a = ["premium", "referrerPolicy"];

            function s(e) {
                return function (e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || h(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
            }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function (t) {
                        g(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [], a = !0, s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                        } catch (e) {
                            s = !0, o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || h(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                if (e) {
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
                }
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function v(e) {
                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, v(e)
            }

            "object" == ("undefined" == typeof navigator ? "undefined" : v(navigator)) && (i = function () {
                "use strict";

                function e(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach((function (t) {
                            r(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                var c = {addCSS: !0, thumbWidth: 15, watch: !0};

                function d(e, t) {
                    return function () {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }.call(e, t)
                }

                var h = function (e) {
                    return null != e ? e.constructor : null
                }, m = function (e, t) {
                    return !!(e && t && e instanceof t)
                }, y = function (e) {
                    return h(e) === String
                }, b = function (e) {
                    return Array.isArray(e)
                }, _ = function (e) {
                    return m(e, NodeList)
                }, w = y, x = b, E = _, k = function (e) {
                    return m(e, Element)
                }, S = function (e) {
                    return m(e, Event)
                }, T = function (e) {
                    return function (e) {
                        return null == e
                    }(e) || (y(e) || b(e) || _(e)) && !e.length || function (e) {
                        return h(e) === Object
                    }(e) && !Object.keys(e).length
                }, C = function () {
                    function e(t, n) {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), k(t) ? this.element = t : w(t) && (this.element = document.querySelector(t)), k(this.element) && T(this.element.rangeTouch) && (this.config = i({}, c, {}, n), this.init())
                    }

                    return function (e, n, r) {
                        n && t(e.prototype, n), r && t(e, r)
                    }(e, [{
                        key: "init", value: function () {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                        }
                    }, {
                        key: "destroy", value: function () {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                        }
                    }, {
                        key: "listeners", value: function (e) {
                            var t = this, n = e ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach((function (e) {
                                t.element[n](e, (function (e) {
                                    return t.set(e)
                                }), !1)
                            }))
                        }
                    }, {
                        key: "get", value: function (t) {
                            if (!e.enabled || !S(t)) return null;
                            var n, r = t.target, o = t.changedTouches[0], i = parseFloat(r.getAttribute("min")) || 0,
                                a = parseFloat(r.getAttribute("max")) || 100,
                                s = parseFloat(r.getAttribute("step")) || 1, l = r.getBoundingClientRect(),
                                c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (n = 100 / l.width * (o.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), i + function (e, t) {
                                if (1 > t) {
                                    var n = function (e) {
                                        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                                    }(t);
                                    return parseFloat(e.toFixed(n))
                                }
                                return Math.round(e / t) * t
                            }(n / 100 * (a - i), s)
                        }
                    }, {
                        key: "set", value: function (t) {
                            e.enabled && S(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
                                if (e && t) {
                                    var n = new Event(t, {bubbles: !0});
                                    e.dispatchEvent(n)
                                }
                            }(t.target, "touchend" === t.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup", value: function (t) {
                            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = null;
                            if (T(t) || w(t) ? r = Array.from(document.querySelectorAll(w(t) ? t : 'input[type="range"]')) : k(t) ? r = [t] : E(t) ? r = Array.from(t) : x(t) && (r = t.filter(k)), T(r)) return null;
                            var o = i({}, c, {}, n);
                            if (w(t) && o.watch) {
                                var a = new MutationObserver((function (n) {
                                    Array.from(n).forEach((function (n) {
                                        Array.from(n.addedNodes).forEach((function (n) {
                                            k(n) && d(n, t) && new e(n, o)
                                        }))
                                    }))
                                }));
                                a.observe(document.body, {childList: !0, subtree: !0})
                            }
                            return r.map((function (t) {
                                return new e(t, n)
                            }))
                        }
                    }, {
                        key: "enabled", get: function () {
                            return "ontouchstart" in document.documentElement
                        }
                    }]), e
                }(), A = function (e) {
                    return null != e ? e.constructor : null
                }, O = function (e, t) {
                    return Boolean(e && t && e instanceof t)
                }, P = function (e) {
                    return null == e
                }, M = function (e) {
                    return A(e) === Object
                }, D = function (e) {
                    return A(e) === String
                }, N = function (e) {
                    return A(e) === Function
                }, I = function (e) {
                    return Array.isArray(e)
                }, L = function (e) {
                    return O(e, NodeList)
                }, j = function (e) {
                    return P(e) || (D(e) || I(e) || L(e)) && !e.length || M(e) && !Object.keys(e).length
                }, q = P, R = M, B = function (e) {
                    return A(e) === Number && !Number.isNaN(e)
                }, z = D, U = function (e) {
                    return A(e) === Boolean
                }, H = N, F = I, V = L, Y = function (e) {
                    return null !== e && "object" == v(e) && 1 === e.nodeType && "object" == v(e.style) && "object" == v(e.ownerDocument)
                }, W = function (e) {
                    return O(e, Event)
                }, G = function (e) {
                    return O(e, KeyboardEvent)
                }, X = function (e) {
                    return O(e, TextTrack) || !P(e) && D(e.kind)
                }, K = function (e) {
                    if (O(e, window.URL)) return !0;
                    if (!D(e)) return !1;
                    var t = e;
                    e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                    try {
                        return !j(new URL(t).hostname)
                    } catch (e) {
                        return !1
                    }
                }, $ = j, J = function () {
                    var e = document.createElement("span"), t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }, n = Object.keys(t).find((function (t) {
                        return void 0 !== e.style[t]
                    }));
                    return !!z(n) && t[n]
                }();

                function Q(e, t) {
                    setTimeout((function () {
                        try {
                            e.hidden = !0, e.offsetHeight, e.hidden = !1
                        } catch (e) {
                        }
                    }), t)
                }

                var Z = {
                    isIE: Boolean(window.document.documentMode),
                    isEdge: window.navigator.userAgent.includes("Edge"),
                    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                };

                function ee(e, t) {
                    return t.split(".").reduce((function (e, t) {
                        return e && e[t]
                    }), e)
                }

                function te() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (!n.length) return e;
                    var o = n.shift();
                    return R(o) ? (Object.keys(o).forEach((function (t) {
                        R(o[t]) ? (Object.keys(e).includes(t) || Object.assign(e, g({}, t, {})), te(e[t], o[t])) : Object.assign(e, g({}, t, o[t]))
                    })), te.apply(void 0, [e].concat(n))) : e
                }

                function ne(e, t) {
                    var n = e.length ? e : [e];
                    Array.from(n).reverse().forEach((function (e, n) {
                        var r = n > 0 ? t.cloneNode(!0) : t, o = e.parentNode, i = e.nextSibling;
                        r.appendChild(e), i ? o.insertBefore(r, i) : o.appendChild(r)
                    }))
                }

                function re(e, t) {
                    Y(e) && !$(t) && Object.entries(t).filter((function (e) {
                        var t = f(e, 2)[1];
                        return !q(t)
                    })).forEach((function (t) {
                        var n = f(t, 2), r = n[0], o = n[1];
                        return e.setAttribute(r, o)
                    }))
                }

                function oe(e, t, n) {
                    var r = document.createElement(e);
                    return R(t) && re(r, t), z(n) && (r.innerText = n), r
                }

                function ie(e, t, n, r) {
                    Y(t) && t.appendChild(oe(e, n, r))
                }

                function ae(e) {
                    V(e) || F(e) ? Array.from(e).forEach(ae) : Y(e) && Y(e.parentNode) && e.parentNode.removeChild(e)
                }

                function se(e) {
                    if (Y(e)) for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
                }

                function le(e, t) {
                    return Y(t) && Y(t.parentNode) && Y(e) ? (t.parentNode.replaceChild(e, t), e) : null
                }

                function ce(e, t) {
                    if (!z(e) || $(e)) return {};
                    var n = {}, r = te({}, t);
                    return e.split(",").forEach((function (e) {
                        var t = e.trim(), o = t.replace(".", ""), i = t.replace(/[[\]]/g, "").split("="),
                            a = f(i, 1)[0], s = i.length > 1 ? i[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                            case".":
                                z(r.class) ? n.class = "".concat(r.class, " ").concat(o) : n.class = o;
                                break;
                            case"#":
                                n.id = t.replace("#", "");
                                break;
                            case"[":
                                n[a] = s
                        }
                    })), te(r, n)
                }

                function ue(e, t) {
                    if (Y(e)) {
                        var n = t;
                        U(n) || (n = !e.hidden), e.hidden = n
                    }
                }

                function de(e, t, n) {
                    if (V(e)) return Array.from(e).map((function (e) {
                        return de(e, t, n)
                    }));
                    if (Y(e)) {
                        var r = "toggle";
                        return void 0 !== n && (r = n ? "add" : "remove"), e.classList[r](t), e.classList.contains(t)
                    }
                    return !1
                }

                function pe(e, t) {
                    return Y(e) && e.classList.contains(t)
                }

                function fe(e, t) {
                    var n = Element.prototype;
                    return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }).call(e, t)
                }

                function he(e) {
                    return this.elements.container.querySelectorAll(e)
                }

                function me(e) {
                    return this.elements.container.querySelector(e)
                }

                function ge() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Y(e) && (e.focus({preventScroll: !0}), t && de(e, this.config.classNames.tabFocus))
                }

                var ve = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                }, ye = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check: function (e, t, n) {
                        var r = Z.isIPhone && n && ye.playsinline, o = ye[e] || "html5" !== t;
                        return {api: o, ui: o && ye.rangeInput && ("video" !== e || !Z.isIPhone || r)}
                    },
                    pip: !(Z.isIPhone || !H(oe("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || oe("video").disablePictureInPicture)),
                    airplay: H(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime: function (e) {
                        if ($(e)) return !1;
                        var t = f(e.split("/"), 1)[0], n = e;
                        if (!this.isHTML5 || t !== this.type) return !1;
                        Object.keys(ve).includes(n) && (n += '; codecs="'.concat(ve[e], '"'));
                        try {
                            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                        } catch (e) {
                            return !1
                        }
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    rangeInput: function () {
                        var e = document.createElement("input");
                        return e.type = "range", "range" === e.type
                    }(),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== J,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                }, be = function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                return e = !0, null
                            }
                        });
                        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                    } catch (e) {
                    }
                    return e
                }();

                function _e(e, t, n) {
                    var r = this, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    if (e && "addEventListener" in e && !$(t) && H(n)) {
                        var s = t.split(" "), l = a;
                        be && (l = {passive: i, capture: a}), s.forEach((function (t) {
                            r && r.eventListeners && o && r.eventListeners.push({
                                element: e,
                                type: t,
                                callback: n,
                                options: l
                            }), e[o ? "addEventListener" : "removeEventListener"](t, n, l)
                        }))
                    }
                }

                function we(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    _e.call(this, e, t, n, !0, r, o)
                }

                function xe(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    _e.call(this, e, t, n, !1, r, o)
                }

                function Ee(e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], a = function a() {
                            for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
                            xe(e, n, a, o, i), r.apply(t, l)
                        };
                    _e.call(this, e, n, a, !0, o, i)
                }

                function ke(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if (Y(e) && !$(t)) {
                        var o = new CustomEvent(t, {bubbles: n, detail: p(p({}, r), {}, {plyr: this})});
                        e.dispatchEvent(o)
                    }
                }

                function Se() {
                    this && this.eventListeners && (this.eventListeners.forEach((function (e) {
                        var t = e.element, n = e.type, r = e.callback, o = e.options;
                        t.removeEventListener(n, r, o)
                    })), this.eventListeners = [])
                }

                function Te() {
                    var e = this;
                    return new Promise((function (t) {
                        return e.ready ? setTimeout(t, 0) : we.call(e, e.elements.container, "ready", t)
                    })).then((function () {
                    }))
                }

                function Ce(e) {
                    (function (e) {
                        return O(e, Promise) && N(e.then)
                    })(e) && e.then(null, (function () {
                    }))
                }

                function Ae(e) {
                    return F(e) ? e.filter((function (t, n) {
                        return e.indexOf(t) === n
                    })) : e
                }

                function Oe(e, t) {
                    return F(e) && e.length ? e.reduce((function (e, n) {
                        return Math.abs(n - t) < Math.abs(e - t) ? n : e
                    })) : null
                }

                function Pe(e) {
                    return !(!window || !window.CSS) && window.CSS.supports(e)
                }

                var Me = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((function (e, t) {
                    var n = f(t, 2), r = n[0], o = n[1];
                    return p(p({}, e), {}, g({}, r / o, [r, o]))
                }), {});

                function De(e) {
                    return !!(F(e) || z(e) && e.includes(":")) && (F(e) ? e : e.split(":")).map(Number).every(B)
                }

                function Ne(e) {
                    if (!F(e) || !e.every(B)) return null;
                    var t = f(e, 2), n = t[0], r = t[1], o = function e(t, n) {
                        return 0 === n ? t : e(n, t % n)
                    }(n, r);
                    return [n / o, r / o]
                }

                function Ie(e) {
                    var t = function (e) {
                        return De(e) ? e.split(":").map(Number) : null
                    }, n = t(e);
                    if (null === n && (n = t(this.config.ratio)), null === n && !$(this.embed) && F(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                        var r = this.media;
                        n = [r.videoWidth, r.videoHeight]
                    }
                    return Ne(n)
                }

                function Le(e) {
                    if (!this.isVideo) return {};
                    var t = this.elements.wrapper, n = Ie.call(this, e);
                    if (!F(n)) return {};
                    var r = f(Ne(n), 2), o = r[0], i = r[1], a = 100 / o * i;
                    if (Pe("aspect-ratio: ".concat(o, "/").concat(i)) ? t.style.aspectRatio = "".concat(o, "/").concat(i) : t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        var s = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                            l = (s - a) / (s / 50);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(l, "%)")
                    } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                    return {padding: a, ratio: n}
                }

                function je(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .05, r = e / t,
                        o = Oe(Object.keys(Me), r);
                    return Math.abs(o - r) <= n ? Me[o] : [e, t]
                }

                var qe = {
                    getSources: function () {
                        var e = this;
                        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function (t) {
                            var n = t.getAttribute("type");
                            return !!$(n) || ye.mime.call(e, n)
                        })) : []
                    }, getQualityOptions: function () {
                        return this.config.quality.forced ? this.config.quality.options : qe.getSources.call(this).map((function (e) {
                            return Number(e.getAttribute("size"))
                        })).filter(Boolean)
                    }, setup: function () {
                        if (this.isHTML5) {
                            var e = this;
                            e.options.speed = e.config.speed.options, $(this.config.ratio) || Le.call(e), Object.defineProperty(e.media, "quality", {
                                get: function () {
                                    var t = qe.getSources.call(e).find((function (t) {
                                        return t.getAttribute("src") === e.source
                                    }));
                                    return t && Number(t.getAttribute("size"))
                                }, set: function (t) {
                                    if (e.quality !== t) {
                                        if (e.config.quality.forced && H(e.config.quality.onChange)) e.config.quality.onChange(t); else {
                                            var n = qe.getSources.call(e).find((function (e) {
                                                return Number(e.getAttribute("size")) === t
                                            }));
                                            if (!n) return;
                                            var r = e.media, o = r.currentTime, i = r.paused, a = r.preload,
                                                s = r.readyState, l = r.playbackRate;
                                            e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", (function () {
                                                e.speed = l, e.currentTime = o, i || Ce(e.play())
                                            })), e.media.load())
                                        }
                                        ke.call(e, e.media, "qualitychange", !1, {quality: t})
                                    }
                                }
                            })
                        }
                    }, cancelRequests: function () {
                        this.isHTML5 && (ae(qe.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                    }
                };

                function Re(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return $(e) ? e : e.toString().replace(/{(\d+)}/g, (function (e, t) {
                        return n[t].toString()
                    }))
                }

                var Be = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
                }, ze = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e.toString().replace(/\w\S*/g, (function (e) {
                        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
                    }))
                };

                function Ue(e) {
                    var t = document.createElement("div");
                    return t.appendChild(e), t.innerHTML
                }

                var He = {pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube"},
                    Fe = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ($(e) || $(t)) return "";
                        var n = ee(t.i18n, e);
                        if ($(n)) return Object.keys(He).includes(e) ? He[e] : "";
                        var r = {"{seektime}": t.seekTime, "{title}": t.title};
                        return Object.entries(r).forEach((function (e) {
                            var t = f(e, 2), r = t[0], o = t[1];
                            n = Be(n, r, o)
                        })), n
                    }, Ve = function () {
                        function t(n) {
                            var r = this;
                            l(this, t), e(this, "get", (function (e) {
                                if (!t.supported || !r.enabled) return null;
                                var n = window.localStorage.getItem(r.key);
                                if ($(n)) return null;
                                var o = JSON.parse(n);
                                return z(e) && e.length ? o[e] : o
                            })), e(this, "set", (function (e) {
                                if (t.supported && r.enabled && R(e)) {
                                    var n = r.get();
                                    $(n) && (n = {}), te(n, e);
                                    try {
                                        window.localStorage.setItem(r.key, JSON.stringify(n))
                                    } catch (e) {
                                    }
                                }
                            })), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
                        }

                        return u(t, null, [{
                            key: "supported", get: function () {
                                try {
                                    if (!("localStorage" in window)) return !1;
                                    var e = "___test";
                                    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                                } catch (e) {
                                    return !1
                                }
                            }
                        }]), t
                    }();

                function Ye(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                    return new Promise((function (n, r) {
                        try {
                            var o = new XMLHttpRequest;
                            if (!("withCredentials" in o)) return;
                            o.addEventListener("load", (function () {
                                if ("text" === t) try {
                                    n(JSON.parse(o.responseText))
                                } catch (e) {
                                    n(o.responseText)
                                } else n(o.response)
                            })), o.addEventListener("error", (function () {
                                throw new Error(o.status)
                            })), o.open("GET", e, !0), o.responseType = t, o.send()
                        } catch (e) {
                            r(e)
                        }
                    }))
                }

                function We(e, t) {
                    if (z(e)) {
                        var n = z(t), r = function () {
                            return null !== document.getElementById(t)
                        }, o = function (e, t) {
                            e.innerHTML = t, n && r() || document.body.insertAdjacentElement("afterbegin", e)
                        };
                        if (!n || !r()) {
                            var i = Ve.supported, a = document.createElement("div");
                            if (a.setAttribute("hidden", ""), n && a.setAttribute("id", t), i) {
                                var s = window.localStorage.getItem("cache-".concat(t));
                                if (null !== s) {
                                    var l = JSON.parse(s);
                                    o(a, l.content)
                                }
                            }
                            Ye(e).then((function (e) {
                                if (!$(e)) {
                                    if (i) try {
                                        window.localStorage.setItem("cache-".concat(t), JSON.stringify({content: e}))
                                    } catch (e) {
                                    }
                                    o(a, e)
                                }
                            })).catch((function () {
                            }))
                        }
                    }
                }

                var Ge = function (e) {
                    return Math.trunc(e / 60 / 60 % 60, 10)
                };

                function Xe() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!B(e)) return Xe(void 0, t, n);
                    var r, o = function (e) {
                        return "0".concat(e).slice(-2)
                    }, i = Ge(e), a = (r = e, Math.trunc(r / 60 % 60, 10)), s = function (e) {
                        return Math.trunc(e % 60, 10)
                    }(e);
                    return i = t || i > 0 ? "".concat(i, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(i).concat(o(a), ":").concat(o(s))
                }

                var Ke = {
                    getIconUrl: function () {
                        var e = new URL(this.config.iconUrl, window.location),
                            t = window.location.host ? window.location.host : window.top.location.host,
                            n = e.host !== t || Z.isIE && !window.svg4everybody;
                        return {url: this.config.iconUrl, cors: n}
                    }, findElements: function () {
                        try {
                            return this.elements.controls = me.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                play: he.call(this, this.config.selectors.buttons.play),
                                pause: me.call(this, this.config.selectors.buttons.pause),
                                restart: me.call(this, this.config.selectors.buttons.restart),
                                rewind: me.call(this, this.config.selectors.buttons.rewind),
                                fastForward: me.call(this, this.config.selectors.buttons.fastForward),
                                mute: me.call(this, this.config.selectors.buttons.mute),
                                pip: me.call(this, this.config.selectors.buttons.pip),
                                airplay: me.call(this, this.config.selectors.buttons.airplay),
                                settings: me.call(this, this.config.selectors.buttons.settings),
                                captions: me.call(this, this.config.selectors.buttons.captions),
                                fullscreen: me.call(this, this.config.selectors.buttons.fullscreen)
                            }, this.elements.progress = me.call(this, this.config.selectors.progress), this.elements.inputs = {
                                seek: me.call(this, this.config.selectors.inputs.seek),
                                volume: me.call(this, this.config.selectors.inputs.volume)
                            }, this.elements.display = {
                                buffer: me.call(this, this.config.selectors.display.buffer),
                                currentTime: me.call(this, this.config.selectors.display.currentTime),
                                duration: me.call(this, this.config.selectors.display.duration)
                            }, Y(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                        }
                    }, createIcon: function (e, t) {
                        var n = "http://www.w3.org/2000/svg", r = Ke.getIconUrl.call(this),
                            o = "".concat(r.cors ? "" : r.url, "#").concat(this.config.iconPrefix),
                            i = document.createElementNS(n, "svg");
                        re(i, te(t, {"aria-hidden": "true", focusable: "false"}));
                        var a = document.createElementNS(n, "use"), s = "".concat(o, "-").concat(e);
                        return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), i.appendChild(a), i
                    }, createLabel: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = Fe(e, this.config);
                        return oe("span", p(p({}, t), {}, {class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")}), n)
                    }, createBadge: function (e) {
                        if ($(e)) return null;
                        var t = oe("span", {class: this.config.classNames.menu.value});
                        return t.appendChild(oe("span", {class: this.config.classNames.menu.badge}, e)), t
                    }, createButton: function (e, t) {
                        var n = this, r = te({}, t), o = function () {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                            return e = function () {
                                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                                return e = Be(e, "-", " "), e = Be(e, "_", " "), e = ze(e), Be(e, " ", "")
                            }(e), e.charAt(0).toLowerCase() + e.slice(1)
                        }(e), i = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                        switch (["element", "icon", "label"].forEach((function (e) {
                            Object.keys(r).includes(e) && (i[e] = r[e], delete r[e])
                        })), "button" !== i.element || Object.keys(r).includes("type") || (r.type = "button"), Object.keys(r).includes("class") ? r.class.split(" ").some((function (e) {
                            return e === n.config.classNames.control
                        })) || te(r, {class: "".concat(r.class, " ").concat(this.config.classNames.control)}) : r.class = this.config.classNames.control, e) {
                            case"play":
                                i.toggle = !0, i.label = "play", i.labelPressed = "pause", i.icon = "play", i.iconPressed = "pause";
                                break;
                            case"mute":
                                i.toggle = !0, i.label = "mute", i.labelPressed = "unmute", i.icon = "volume", i.iconPressed = "muted";
                                break;
                            case"captions":
                                i.toggle = !0, i.label = "enableCaptions", i.labelPressed = "disableCaptions", i.icon = "captions-off", i.iconPressed = "captions-on";
                                break;
                            case"fullscreen":
                                i.toggle = !0, i.label = "enterFullscreen", i.labelPressed = "exitFullscreen", i.icon = "enter-fullscreen", i.iconPressed = "exit-fullscreen";
                                break;
                            case"play-large":
                                r.class += " ".concat(this.config.classNames.control, "--overlaid"), o = "play", i.label = "play", i.icon = "play";
                                break;
                            default:
                                $(i.label) && (i.label = o), $(i.icon) && (i.icon = e)
                        }
                        var a = oe(i.element);
                        return i.toggle ? (a.appendChild(Ke.createIcon.call(this, i.iconPressed, {class: "icon--pressed"})), a.appendChild(Ke.createIcon.call(this, i.icon, {class: "icon--not-pressed"})), a.appendChild(Ke.createLabel.call(this, i.labelPressed, {class: "label--pressed"})), a.appendChild(Ke.createLabel.call(this, i.label, {class: "label--not-pressed"}))) : (a.appendChild(Ke.createIcon.call(this, i.icon)), a.appendChild(Ke.createLabel.call(this, i.label))), te(r, ce(this.config.selectors.buttons[o], r)), re(a, r), "play" === o ? (F(this.elements.buttons[o]) || (this.elements.buttons[o] = []), this.elements.buttons[o].push(a)) : this.elements.buttons[o] = a, a
                    }, createRange: function (e, t) {
                        var n = oe("input", te(ce(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": Fe(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = n, Ke.updateRangeFill.call(this, n), C.setup(n), n
                    }, createProgress: function (e, t) {
                        var n = oe("progress", te(ce(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            n.appendChild(oe("span", null, "0"));
                            var r = {played: "played", buffer: "buffered"}[e], o = r ? Fe(r, this.config) : "";
                            n.innerText = "% ".concat(o.toLowerCase())
                        }
                        return this.elements.display[e] = n, n
                    }, createTime: function (e, t) {
                        var n = ce(this.config.selectors.display[e], t), r = oe("div", te(n, {
                            class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                            "aria-label": Fe(e, this.config)
                        }), "00:00");
                        return this.elements.display[e] = r, r
                    }, bindMenuItemShortcuts: function (e, t) {
                        var n = this;
                        we.call(this, e, "keydown keyup", (function (r) {
                            if (["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(r.key) && (r.preventDefault(), r.stopPropagation(), "keydown" !== r.type)) {
                                var o, i = fe(e, '[role="menuitemradio"]');
                                !i && ["Space", "ArrowRight"].includes(r.key) ? Ke.showMenuPanel.call(n, t, !0) : "Space" !== r.key && ("ArrowDown" === r.key || i && "ArrowRight" === r.key ? (o = e.nextElementSibling, Y(o) || (o = e.parentNode.firstElementChild)) : (o = e.previousElementSibling, Y(o) || (o = e.parentNode.lastElementChild)), ge.call(n, o, !0))
                            }
                        }), !1), we.call(this, e, "keyup", (function (e) {
                            "Return" === e.key && Ke.focusFirstMenuItem.call(n, null, !0)
                        }))
                    }, createMenuItem: function (e) {
                        var t = this, n = e.value, r = e.list, o = e.type, i = e.title, a = e.badge,
                            s = void 0 === a ? null : a, l = e.checked, c = void 0 !== l && l,
                            u = ce(this.config.selectors.inputs[o]), d = oe("button", te(u, {
                                type: "button",
                                role: "menuitemradio",
                                class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                                "aria-checked": c,
                                value: n
                            })), p = oe("span");
                        p.innerHTML = i, Y(s) && p.appendChild(s), d.appendChild(p), Object.defineProperty(d, "checked", {
                            enumerable: !0,
                            get: function () {
                                return "true" === d.getAttribute("aria-checked")
                            },
                            set: function (e) {
                                e && Array.from(d.parentNode.children).filter((function (e) {
                                    return fe(e, '[role="menuitemradio"]')
                                })).forEach((function (e) {
                                    return e.setAttribute("aria-checked", "false")
                                })), d.setAttribute("aria-checked", e ? "true" : "false")
                            }
                        }), this.listeners.bind(d, "click keyup", (function (e) {
                            if (!G(e) || "Space" === e.key) {
                                switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, o) {
                                    case"language":
                                        t.currentTrack = Number(n);
                                        break;
                                    case"quality":
                                        t.quality = n;
                                        break;
                                    case"speed":
                                        t.speed = parseFloat(n)
                                }
                                Ke.showMenuPanel.call(t, "home", G(e))
                            }
                        }), o, !1), Ke.bindMenuItemShortcuts.call(this, d, o), r.appendChild(d)
                    }, formatTime: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return B(e) ? Xe(e, Ge(this.duration) > 0, t) : e
                    }, updateTimeDisplay: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        Y(e) && B(t) && (e.innerText = Ke.formatTime(t, n))
                    }, updateVolume: function () {
                        this.supported.ui && (Y(this.elements.inputs.volume) && Ke.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Y(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                    }, setRange: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        Y(e) && (e.value = t, Ke.updateRangeFill.call(this, e))
                    }, updateProgress: function (e) {
                        var t = this;
                        if (this.supported.ui && W(e)) {
                            var n, r, o = 0;
                            if (e) switch (e.type) {
                                case"timeupdate":
                                case"seeking":
                                case"seeked":
                                    n = this.currentTime, r = this.duration, o = 0 === n || 0 === r || Number.isNaN(n) || Number.isNaN(r) ? 0 : (n / r * 100).toFixed(2), "timeupdate" === e.type && Ke.setRange.call(this, this.elements.inputs.seek, o);
                                    break;
                                case"playing":
                                case"progress":
                                    !function (e, n) {
                                        var r = B(n) ? n : 0, o = Y(e) ? e : t.elements.display.buffer;
                                        if (Y(o)) {
                                            o.value = r;
                                            var i = o.getElementsByTagName("span")[0];
                                            Y(i) && (i.childNodes[0].nodeValue = r)
                                        }
                                    }(this.elements.display.buffer, 100 * this.buffered)
                            }
                        }
                    }, updateRangeFill: function (e) {
                        var t = W(e) ? e.target : e;
                        if (Y(t) && "range" === t.getAttribute("type")) {
                            if (fe(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                var n = Ke.formatTime(this.currentTime), r = Ke.formatTime(this.duration),
                                    o = Fe("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", o.replace("{currentTime}", n).replace("{duration}", r))
                            } else if (fe(t, this.config.selectors.inputs.volume)) {
                                var i = 100 * t.value;
                                t.setAttribute("aria-valuenow", i), t.setAttribute("aria-valuetext", "".concat(i.toFixed(1), "%"))
                            } else t.setAttribute("aria-valuenow", t.value);
                            Z.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                        }
                    }, updateSeekTooltip: function (e) {
                        var t, n;
                        if (this.config.tooltips.seek && Y(this.elements.inputs.seek) && Y(this.elements.display.seekTooltip) && 0 !== this.duration) {
                            var r = this.elements.display.seekTooltip,
                                o = "".concat(this.config.classNames.tooltip, "--visible"), i = function (e) {
                                    return de(r, o, e)
                                };
                            if (this.touch) i(!1); else {
                                var a = 0, s = this.elements.progress.getBoundingClientRect();
                                if (W(e)) a = 100 / s.width * (e.pageX - s.left); else {
                                    if (!pe(r, o)) return;
                                    a = parseFloat(r.style.left, 10)
                                }
                                a < 0 ? a = 0 : a > 100 && (a = 100);
                                var l = this.duration / 100 * a;
                                r.innerText = Ke.formatTime(l);
                                var c = null === (t = this.config.markers) || void 0 === t || null === (n = t.points) || void 0 === n ? void 0 : n.find((function (e) {
                                    return e.time === Math.round(l)
                                }));
                                c && r.insertAdjacentHTML("afterbegin", "".concat(c.label, "<br>")), r.style.left = "".concat(a, "%"), W(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                            }
                        }
                    }, timeUpdate: function (e) {
                        var t = !Y(this.elements.display.duration) && this.config.invertTime;
                        Ke.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Ke.updateProgress.call(this, e)
                    }, durationUpdate: function () {
                        if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                            if (this.duration >= Math.pow(2, 32)) return ue(this.elements.display.currentTime, !0), void ue(this.elements.progress, !0);
                            Y(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                            var e = Y(this.elements.display.duration);
                            !e && this.config.displayDuration && this.paused && Ke.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Ke.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Ke.setMarkers.call(this), Ke.updateSeekTooltip.call(this)
                        }
                    }, toggleMenuButton: function (e, t) {
                        ue(this.elements.settings.buttons[e], !t)
                    }, updateSetting: function (e, t, n) {
                        var r = this.elements.settings.panels[e], o = null, i = t;
                        if ("captions" === e) o = this.currentTrack; else {
                            if (o = $(n) ? this[e] : n, $(o) && (o = this.config[e].default), !$(this.options[e]) && !this.options[e].includes(o)) return void this.debug.warn("Unsupported value of '".concat(o, "' for ").concat(e));
                            if (!this.config[e].options.includes(o)) return void this.debug.warn("Disabled value of '".concat(o, "' for ").concat(e))
                        }
                        if (Y(i) || (i = r && r.querySelector('[role="menu"]')), Y(i)) {
                            this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Ke.getLabel.call(this, e, o);
                            var a = i && i.querySelector('[value="'.concat(o, '"]'));
                            Y(a) && (a.checked = !0)
                        }
                    }, getLabel: function (e, t) {
                        switch (e) {
                            case"speed":
                                return 1 === t ? Fe("normal", this.config) : "".concat(t, "&times;");
                            case"quality":
                                if (B(t)) {
                                    var n = Fe("qualityLabel.".concat(t), this.config);
                                    return n.length ? n : "".concat(t, "p")
                                }
                                return ze(t);
                            case"captions":
                                return Qe.getLabel.call(this);
                            default:
                                return null
                        }
                    }, setQualityMenu: function (e) {
                        var t = this;
                        if (Y(this.elements.settings.panels.quality)) {
                            var n = "quality", r = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                            F(e) && (this.options.quality = Ae(e).filter((function (e) {
                                return t.config.quality.options.includes(e)
                            })));
                            var o = !$(this.options.quality) && this.options.quality.length > 1;
                            if (Ke.toggleMenuButton.call(this, n, o), se(r), Ke.checkMenu.call(this), o) {
                                var i = function (e) {
                                    var n = Fe("qualityBadge.".concat(e), t.config);
                                    return n.length ? Ke.createBadge.call(t, n) : null
                                };
                                this.options.quality.sort((function (e, n) {
                                    var r = t.config.quality.options;
                                    return r.indexOf(e) > r.indexOf(n) ? 1 : -1
                                })).forEach((function (e) {
                                    Ke.createMenuItem.call(t, {
                                        value: e,
                                        list: r,
                                        type: n,
                                        title: Ke.getLabel.call(t, "quality", e),
                                        badge: i(e)
                                    })
                                })), Ke.updateSetting.call(this, n, r)
                            }
                        }
                    }, setCaptionsMenu: function () {
                        var e = this;
                        if (Y(this.elements.settings.panels.captions)) {
                            var t = "captions",
                                n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                                r = Qe.getTracks.call(this), o = Boolean(r.length);
                            if (Ke.toggleMenuButton.call(this, t, o), se(n), Ke.checkMenu.call(this), o) {
                                var i = r.map((function (t, r) {
                                    return {
                                        value: r,
                                        checked: e.captions.toggled && e.currentTrack === r,
                                        title: Qe.getLabel.call(e, t),
                                        badge: t.language && Ke.createBadge.call(e, t.language.toUpperCase()),
                                        list: n,
                                        type: "language"
                                    }
                                }));
                                i.unshift({
                                    value: -1,
                                    checked: !this.captions.toggled,
                                    title: Fe("disabled", this.config),
                                    list: n,
                                    type: "language"
                                }), i.forEach(Ke.createMenuItem.bind(this)), Ke.updateSetting.call(this, t, n)
                            }
                        }
                    }, setSpeedMenu: function () {
                        var e = this;
                        if (Y(this.elements.settings.panels.speed)) {
                            var t = "speed", n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                            this.options.speed = this.options.speed.filter((function (t) {
                                return t >= e.minimumSpeed && t <= e.maximumSpeed
                            }));
                            var r = !$(this.options.speed) && this.options.speed.length > 1;
                            Ke.toggleMenuButton.call(this, t, r), se(n), Ke.checkMenu.call(this), r && (this.options.speed.forEach((function (r) {
                                Ke.createMenuItem.call(e, {
                                    value: r,
                                    list: n,
                                    type: t,
                                    title: Ke.getLabel.call(e, "speed", r)
                                })
                            })), Ke.updateSetting.call(this, t, n))
                        }
                    }, checkMenu: function () {
                        var e = this.elements.settings.buttons, t = !$(e) && Object.values(e).some((function (e) {
                            return !e.hidden
                        }));
                        ue(this.elements.settings.menu, !t)
                    }, focusFirstMenuItem: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!this.elements.settings.popup.hidden) {
                            var n = e;
                            Y(n) || (n = Object.values(this.elements.settings.panels).find((function (e) {
                                return !e.hidden
                            })));
                            var r = n.querySelector('[role^="menuitem"]');
                            ge.call(this, r, t)
                        }
                    }, toggleMenu: function (e) {
                        var t = this.elements.settings.popup, n = this.elements.buttons.settings;
                        if (Y(t) && Y(n)) {
                            var r = t.hidden, o = r;
                            if (U(e)) o = e; else if (G(e) && "Escape" === e.key) o = !1; else if (W(e)) {
                                var i = H(e.composedPath) ? e.composedPath()[0] : e.target, a = t.contains(i);
                                if (a || !a && e.target !== n && o) return
                            }
                            n.setAttribute("aria-expanded", o), ue(t, !o), de(this.elements.container, this.config.classNames.menu.open, o), o && G(e) ? Ke.focusFirstMenuItem.call(this, null, !0) : o || r || ge.call(this, n, G(e))
                        }
                    }, getMenuSize: function (e) {
                        var t = e.cloneNode(!0);
                        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                        var n = t.scrollWidth, r = t.scrollHeight;
                        return ae(t), {width: n, height: r}
                    }, showMenuPanel: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
                        if (Y(r)) {
                            var o = r.parentNode, i = Array.from(o.children).find((function (e) {
                                return !e.hidden
                            }));
                            if (ye.transitions && !ye.reducedMotion) {
                                o.style.width = "".concat(i.scrollWidth, "px"), o.style.height = "".concat(i.scrollHeight, "px");
                                var a = Ke.getMenuSize.call(this, r), s = function t(n) {
                                    n.target === o && ["width", "height"].includes(n.propertyName) && (o.style.width = "", o.style.height = "", xe.call(e, o, J, t))
                                };
                                we.call(this, o, J, s), o.style.width = "".concat(a.width, "px"), o.style.height = "".concat(a.height, "px")
                            }
                            ue(i, !0), ue(r, !1), Ke.focusFirstMenuItem.call(this, r, n)
                        }
                    }, setDownloadUrl: function () {
                        var e = this.elements.buttons.download;
                        Y(e) && e.setAttribute("href", this.download)
                    }, create: function (e) {
                        var t = this, n = Ke.bindMenuItemShortcuts, r = Ke.createButton, o = Ke.createProgress,
                            i = Ke.createRange, a = Ke.createTime, s = Ke.setQualityMenu, l = Ke.setSpeedMenu,
                            c = Ke.showMenuPanel;
                        this.elements.controls = null, F(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(r.call(this, "play-large"));
                        var u = oe("div", ce(this.config.selectors.controls.wrapper));
                        this.elements.controls = u;
                        var d = {class: "plyr__controls__item"};
                        return Ae(F(this.config.controls) ? this.config.controls : []).forEach((function (s) {
                            if ("restart" === s && u.appendChild(r.call(t, "restart", d)), "rewind" === s && u.appendChild(r.call(t, "rewind", d)), "play" === s && u.appendChild(r.call(t, "play", d)), "fast-forward" === s && u.appendChild(r.call(t, "fast-forward", d)), "progress" === s) {
                                var l = oe("div", {class: "".concat(d.class, " plyr__progress__container")}),
                                    p = oe("div", ce(t.config.selectors.progress));
                                if (p.appendChild(i.call(t, "seek", {id: "plyr-seek-".concat(e.id)})), p.appendChild(o.call(t, "buffer")), t.config.tooltips.seek) {
                                    var f = oe("span", {class: t.config.classNames.tooltip}, "00:00");
                                    p.appendChild(f), t.elements.display.seekTooltip = f
                                }
                                t.elements.progress = p, l.appendChild(t.elements.progress), u.appendChild(l)
                            }
                            if ("current-time" === s && u.appendChild(a.call(t, "currentTime", d)), "duration" === s && u.appendChild(a.call(t, "duration", d)), "mute" === s || "volume" === s) {
                                var h = t.elements.volume;
                                if (Y(h) && u.contains(h) || (h = oe("div", te({}, d, {class: "".concat(d.class, " plyr__volume").trim()})), t.elements.volume = h, u.appendChild(h)), "mute" === s && h.appendChild(r.call(t, "mute")), "volume" === s && !Z.isIos) {
                                    var m = {max: 1, step: .05, value: t.config.volume};
                                    h.appendChild(i.call(t, "volume", te(m, {id: "plyr-volume-".concat(e.id)})))
                                }
                            }
                            if ("captions" === s && u.appendChild(r.call(t, "captions", d)), "settings" === s && !$(t.config.settings)) {
                                var g = oe("div", te({}, d, {
                                    class: "".concat(d.class, " plyr__menu").trim(),
                                    hidden: ""
                                }));
                                g.appendChild(r.call(t, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": "plyr-settings-".concat(e.id),
                                    "aria-expanded": !1
                                }));
                                var v = oe("div", {
                                        class: "plyr__menu__container",
                                        id: "plyr-settings-".concat(e.id),
                                        hidden: ""
                                    }), y = oe("div"), b = oe("div", {id: "plyr-settings-".concat(e.id, "-home")}),
                                    _ = oe("div", {role: "menu"});
                                b.appendChild(_), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function (r) {
                                    var o = oe("button", te(ce(t.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    n.call(t, o, r), we.call(t, o, "click", (function () {
                                        c.call(t, r, !1)
                                    }));
                                    var i = oe("span", null, Fe(r, t.config)),
                                        a = oe("span", {class: t.config.classNames.menu.value});
                                    a.innerHTML = e[r], i.appendChild(a), o.appendChild(i), _.appendChild(o);
                                    var s = oe("div", {id: "plyr-settings-".concat(e.id, "-").concat(r), hidden: ""}),
                                        l = oe("button", {
                                            type: "button",
                                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                                        });
                                    l.appendChild(oe("span", {"aria-hidden": !0}, Fe(r, t.config))), l.appendChild(oe("span", {class: t.config.classNames.hidden}, Fe("menuBack", t.config))), we.call(t, s, "keydown", (function (e) {
                                        "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                                    }), !1), we.call(t, l, "click", (function () {
                                        c.call(t, "home", !1)
                                    })), s.appendChild(l), s.appendChild(oe("div", {role: "menu"})), y.appendChild(s), t.elements.settings.buttons[r] = o, t.elements.settings.panels[r] = s
                                })), v.appendChild(y), g.appendChild(v), u.appendChild(g), t.elements.settings.popup = v, t.elements.settings.menu = g
                            }
                            if ("pip" === s && ye.pip && u.appendChild(r.call(t, "pip", d)), "airplay" === s && ye.airplay && u.appendChild(r.call(t, "airplay", d)), "download" === s) {
                                var w = te({}, d, {element: "a", href: t.download, target: "_blank"});
                                t.isHTML5 && (w.download = "");
                                var x = t.config.urls.download;
                                !K(x) && t.isEmbed && te(w, {
                                    icon: "logo-".concat(t.provider),
                                    label: t.provider
                                }), u.appendChild(r.call(t, "download", w))
                            }
                            "fullscreen" === s && u.appendChild(r.call(t, "fullscreen", d))
                        })), this.isHTML5 && s.call(this, qe.getQualityOptions.call(this)), l.call(this), u
                    }, inject: function () {
                        var e = this;
                        if (this.config.loadSprite) {
                            var t = Ke.getIconUrl.call(this);
                            t.cors && We(t.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        var n = null;
                        this.elements.controls = null;
                        var r, o = {id: this.id, seektime: this.config.seekTime, title: this.config.title}, i = !0;
                        if (H(this.config.controls) && (this.config.controls = this.config.controls.call(this, o)), this.config.controls || (this.config.controls = []), Y(this.config.controls) || z(this.config.controls) ? n = this.config.controls : (n = Ke.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: Qe.getLabel.call(this)
                        }), i = !1), i && z(this.config.controls) && (n = function (e) {
                            var t = e;
                            return Object.entries(o).forEach((function (e) {
                                var n = f(e, 2), r = n[0], o = n[1];
                                t = Be(t, "{".concat(r, "}"), o)
                            })), t
                        }(n)), z(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), Y(r) || (r = this.elements.container), r[Y(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), Y(this.elements.controls) || Ke.findElements.call(this), !$(this.elements.buttons)) {
                            var a = function (t) {
                                var n = e.config.classNames.controlPressed;
                                Object.defineProperty(t, "pressed", {
                                    enumerable: !0, get: function () {
                                        return pe(t, n)
                                    }, set: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                        de(t, n, e)
                                    }
                                })
                            };
                            Object.values(this.elements.buttons).filter(Boolean).forEach((function (e) {
                                F(e) || V(e) ? Array.from(e).filter(Boolean).forEach(a) : a(e)
                            }))
                        }
                        if (Z.isEdge && Q(r), this.config.tooltips.controls) {
                            var s = this.config, l = s.classNames, c = s.selectors,
                                u = "".concat(c.controls.wrapper, " ").concat(c.labels, " .").concat(l.hidden),
                                d = he.call(this, u);
                            Array.from(d).forEach((function (t) {
                                de(t, e.config.classNames.hidden, !1), de(t, e.config.classNames.tooltip, !0)
                            }))
                        }
                    }, setMediaMetadata: function () {
                        try {
                            "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
                                title: this.config.mediaMetadata.title,
                                artist: this.config.mediaMetadata.artist,
                                album: this.config.mediaMetadata.album,
                                artwork: this.config.mediaMetadata.artwork
                            }))
                        } catch (e) {
                        }
                    }, setMarkers: function () {
                        var e, t, n = this;
                        if (this.duration && !this.elements.markers) {
                            var r = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter((function (e) {
                                var t = e.time;
                                return t > 0 && t < n.duration
                            }));
                            if (null != r && r.length) {
                                var o = document.createDocumentFragment(), i = document.createDocumentFragment(),
                                    a = null, s = "".concat(this.config.classNames.tooltip, "--visible"),
                                    l = function (e) {
                                        return de(a, s, e)
                                    };
                                r.forEach((function (e) {
                                    var t = oe("span", {class: n.config.classNames.marker}, ""),
                                        r = e.time / n.duration * 100 + "%";
                                    a && (t.addEventListener("mouseenter", (function () {
                                        e.label || (a.style.left = r, a.innerHTML = e.label, l(!0))
                                    })), t.addEventListener("mouseleave", (function () {
                                        l(!1)
                                    }))), t.addEventListener("click", (function () {
                                        n.currentTime = e.time
                                    })), t.style.left = r, i.appendChild(t)
                                })), o.appendChild(i), this.config.tooltips.seek || (a = oe("span", {class: this.config.classNames.tooltip}, ""), o.appendChild(a)), this.elements.markers = {
                                    points: i,
                                    tip: a
                                }, this.elements.progress.appendChild(o)
                            }
                        }
                    }
                };

                function $e(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n = e;
                    if (t) {
                        var r = document.createElement("a");
                        r.href = n, n = r.href
                    }
                    try {
                        return new URL(n)
                    } catch (e) {
                        return null
                    }
                }

                function Je(e) {
                    var t = new URLSearchParams;
                    return R(e) && Object.entries(e).forEach((function (e) {
                        var n = f(e, 2), r = n[0], o = n[1];
                        t.set(r, o)
                    })), t
                }

                var Qe = {
                        setup: function () {
                            if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !ye.textTracks) F(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ke.setCaptionsMenu.call(this); else {
                                var e, t;
                                if (Y(this.elements.captions) || (this.elements.captions = oe("div", ce(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, Y(e) && Y(t) && t.parentNode.insertBefore(e, t.nextSibling)), Z.isIE && window.URL) {
                                    var n = this.media.querySelectorAll("track");
                                    Array.from(n).forEach((function (e) {
                                        var t = e.getAttribute("src"), n = $e(t);
                                        null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Ye(t, "blob").then((function (t) {
                                            e.setAttribute("src", window.URL.createObjectURL(t))
                                        })).catch((function () {
                                            ae(e)
                                        }))
                                    }))
                                }
                                var r = Ae((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function (e) {
                                        return e.split("-")[0]
                                    }))),
                                    o = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                "auto" === o && (o = f(r, 1)[0]);
                                var i = this.storage.get("captions");
                                if (U(i) || (i = this.config.captions.active), Object.assign(this.captions, {
                                    toggled: !1,
                                    active: i,
                                    language: o,
                                    languages: r
                                }), this.isHTML5) {
                                    var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                    we.call(this, this.media.textTracks, a, Qe.update.bind(this))
                                }
                                setTimeout(Qe.update.bind(this), 0)
                            }
                        }, update: function () {
                            var e = this, t = Qe.getTracks.call(this, !0), n = this.captions, r = n.active, o = n.language,
                                i = n.meta, a = n.currentTrackNode, s = Boolean(t.find((function (e) {
                                    return e.language === o
                                })));
                            this.isHTML5 && this.isVideo && t.filter((function (e) {
                                return !i.get(e)
                            })).forEach((function (t) {
                                e.debug.log("Track added", t), i.set(t, {default: "showing" === t.mode}), "showing" === t.mode && (t.mode = "hidden"), we.call(e, t, "cuechange", (function () {
                                    return Qe.updateCues.call(e)
                                }))
                            })), (s && this.language !== o || !t.includes(a)) && (Qe.setLanguage.call(this, o), Qe.toggle.call(this, r && s)), this.elements && de(this.elements.container, this.config.classNames.captions.enabled, !$(t)), F(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ke.setCaptionsMenu.call(this)
                        }, toggle: function (e) {
                            var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            if (this.supported.ui) {
                                var r = this.captions.toggled, o = this.config.classNames.captions.active,
                                    i = q(e) ? !r : e;
                                if (i !== r) {
                                    if (n || (this.captions.active = i, this.storage.set({captions: i})), !this.language && i && !n) {
                                        var a = Qe.getTracks.call(this),
                                            l = Qe.findTrack.call(this, [this.captions.language].concat(s(this.captions.languages)), !0);
                                        return this.captions.language = l.language, void Qe.set.call(this, a.indexOf(l))
                                    }
                                    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = i), de(this.elements.container, o, i), this.captions.toggled = i, Ke.updateSetting.call(this, "captions"), ke.call(this, this.media, i ? "captionsenabled" : "captionsdisabled")
                                }
                                setTimeout((function () {
                                    i && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                                }))
                            }
                        }, set: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = Qe.getTracks.call(this);
                            if (-1 !== e) if (B(e)) if (e in n) {
                                if (this.captions.currentTrack !== e) {
                                    this.captions.currentTrack = e;
                                    var r = n[e], o = r || {}, i = o.language;
                                    this.captions.currentTrackNode = r, Ke.updateSetting.call(this, "captions"), t || (this.captions.language = i, this.storage.set({language: i})), this.isVimeo && this.embed.enableTextTrack(i), ke.call(this, this.media, "languagechange")
                                }
                                Qe.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Qe.updateCues.call(this)
                            } else this.debug.warn("Track not found", e); else this.debug.warn("Invalid caption argument", e); else Qe.toggle.call(this, !1, t)
                        }, setLanguage: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            if (z(e)) {
                                var n = e.toLowerCase();
                                this.captions.language = n;
                                var r = Qe.getTracks.call(this), o = Qe.findTrack.call(this, [n]);
                                Qe.set.call(this, r.indexOf(o), t)
                            } else this.debug.warn("Invalid language argument", e)
                        }, getTracks: function () {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return Array.from((this.media || {}).textTracks || []).filter((function (n) {
                                return !e.isHTML5 || t || e.captions.meta.has(n)
                            })).filter((function (e) {
                                return ["captions", "subtitles"].includes(e.kind)
                            }))
                        }, findTrack: function (e) {
                            var t, n = this, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                o = Qe.getTracks.call(this), i = function (e) {
                                    return Number((n.captions.meta.get(e) || {}).default)
                                }, a = Array.from(o).sort((function (e, t) {
                                    return i(t) - i(e)
                                }));
                            return e.every((function (e) {
                                return t = a.find((function (t) {
                                    return t.language === e
                                })), !t
                            })), t || (r ? a[0] : void 0)
                        }, getCurrentTrack: function () {
                            return Qe.getTracks.call(this)[this.currentTrack]
                        }, getLabel: function (e) {
                            var t = e;
                            return !X(t) && ye.textTracks && this.captions.toggled && (t = Qe.getCurrentTrack.call(this)), X(t) ? $(t.label) ? $(t.language) ? Fe("enabled", this.config) : e.language.toUpperCase() : t.label : Fe("disabled", this.config)
                        }, updateCues: function (e) {
                            if (this.supported.ui) if (Y(this.elements.captions)) if (q(e) || Array.isArray(e)) {
                                var t = e;
                                if (!t) {
                                    var n = Qe.getCurrentTrack.call(this);
                                    t = Array.from((n || {}).activeCues || []).map((function (e) {
                                        return e.getCueAsHTML()
                                    })).map(Ue)
                                }
                                var r = t.map((function (e) {
                                    return e.trim()
                                })).join("\n");
                                if (r !== this.elements.captions.innerHTML) {
                                    se(this.elements.captions);
                                    var o = oe("span", ce(this.config.selectors.caption));
                                    o.innerHTML = r, this.elements.captions.appendChild(o), ke.call(this, this.media, "cuechange")
                                }
                            } else this.debug.warn("updateCues: Invalid input", e); else this.debug.warn("No captions element to render to")
                        }
                    }, Ze = {
                        enabled: !0,
                        title: "",
                        debug: !1,
                        autoplay: !1,
                        autopause: !0,
                        playsinline: !0,
                        seekTime: 10,
                        volume: 1,
                        muted: !1,
                        duration: null,
                        displayDuration: !0,
                        invertTime: !0,
                        toggleInvert: !0,
                        ratio: null,
                        clickToPlay: !0,
                        hideControls: !0,
                        resetOnEnd: !1,
                        disableContextMenu: !0,
                        loadSprite: !0,
                        iconPrefix: "plyr",
                        iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
                        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                        quality: {
                            default: 576,
                            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                            forced: !1,
                            onChange: null
                        },
                        loop: {active: !1},
                        speed: {selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]},
                        keyboard: {focused: !0, global: !1},
                        tooltips: {controls: !1, seek: !0},
                        captions: {active: !1, language: "auto", update: !1},
                        fullscreen: {enabled: !0, fallback: !0, iosNative: !1},
                        storage: {enabled: !0, key: "plyr"},
                        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                        settings: ["captions", "quality", "speed"],
                        i18n: {
                            restart: "Restart",
                            rewind: "Rewind {seektime}s",
                            play: "Play",
                            pause: "Pause",
                            fastForward: "Forward {seektime}s",
                            seek: "Seek",
                            seekLabel: "{currentTime} of {duration}",
                            played: "Played",
                            buffered: "Buffered",
                            currentTime: "Current time",
                            duration: "Duration",
                            volume: "Volume",
                            mute: "Mute",
                            unmute: "Unmute",
                            enableCaptions: "Enable captions",
                            disableCaptions: "Disable captions",
                            download: "Download",
                            enterFullscreen: "Enter fullscreen",
                            exitFullscreen: "Exit fullscreen",
                            frameTitle: "Player for {title}",
                            captions: "Captions",
                            settings: "Settings",
                            pip: "PIP",
                            menuBack: "Go back to previous menu",
                            speed: "Speed",
                            normal: "Normal",
                            quality: "Quality",
                            loop: "Loop",
                            start: "Start",
                            end: "End",
                            all: "All",
                            reset: "Reset",
                            disabled: "Disabled",
                            enabled: "Enabled",
                            advertisement: "Ad",
                            qualityBadge: {2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD"}
                        },
                        urls: {
                            download: null,
                            vimeo: {
                                sdk: "https://player.vimeo.com/api/player.js",
                                iframe: "https://player.vimeo.com/video/{0}?{1}",
                                api: "https://vimeo.com/api/oembed.json?url={0}"
                            },
                            youtube: {
                                sdk: "https://www.youtube.com/iframe_api",
                                api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                            },
                            googleIMA: {sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"}
                        },
                        listeners: {
                            seek: null,
                            play: null,
                            pause: null,
                            restart: null,
                            rewind: null,
                            fastForward: null,
                            mute: null,
                            volume: null,
                            captions: null,
                            download: null,
                            fullscreen: null,
                            pip: null,
                            airplay: null,
                            speed: null,
                            quality: null,
                            loop: null,
                            language: null
                        },
                        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                        selectors: {
                            editable: "input, textarea, select, [contenteditable]",
                            container: ".plyr",
                            controls: {container: null, wrapper: ".plyr__controls"},
                            labels: "[data-plyr]",
                            buttons: {
                                play: '[data-plyr="play"]',
                                pause: '[data-plyr="pause"]',
                                restart: '[data-plyr="restart"]',
                                rewind: '[data-plyr="rewind"]',
                                fastForward: '[data-plyr="fast-forward"]',
                                mute: '[data-plyr="mute"]',
                                captions: '[data-plyr="captions"]',
                                download: '[data-plyr="download"]',
                                fullscreen: '[data-plyr="fullscreen"]',
                                pip: '[data-plyr="pip"]',
                                airplay: '[data-plyr="airplay"]',
                                settings: '[data-plyr="settings"]',
                                loop: '[data-plyr="loop"]'
                            },
                            inputs: {
                                seek: '[data-plyr="seek"]',
                                volume: '[data-plyr="volume"]',
                                speed: '[data-plyr="speed"]',
                                language: '[data-plyr="language"]',
                                quality: '[data-plyr="quality"]'
                            },
                            display: {
                                currentTime: ".plyr__time--current",
                                duration: ".plyr__time--duration",
                                buffer: ".plyr__progress__buffer",
                                loop: ".plyr__progress__loop",
                                volume: ".plyr__volume--display"
                            },
                            progress: ".plyr__progress",
                            captions: ".plyr__captions",
                            caption: ".plyr__caption"
                        },
                        classNames: {
                            type: "plyr--{0}",
                            provider: "plyr--{0}",
                            video: "plyr__video-wrapper",
                            embed: "plyr__video-embed",
                            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                            embedContainer: "plyr__video-embed__container",
                            poster: "plyr__poster",
                            posterEnabled: "plyr__poster-enabled",
                            ads: "plyr__ads",
                            control: "plyr__control",
                            controlPressed: "plyr__control--pressed",
                            playing: "plyr--playing",
                            paused: "plyr--paused",
                            stopped: "plyr--stopped",
                            loading: "plyr--loading",
                            hover: "plyr--hover",
                            tooltip: "plyr__tooltip",
                            cues: "plyr__cues",
                            marker: "plyr__progress__marker",
                            hidden: "plyr__sr-only",
                            hideControls: "plyr--hide-controls",
                            isIos: "plyr--is-ios",
                            isTouch: "plyr--is-touch",
                            uiSupported: "plyr--full-ui",
                            noTransition: "plyr--no-transition",
                            display: {time: "plyr__time"},
                            menu: {value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open"},
                            captions: {enabled: "plyr--captions-enabled", active: "plyr--captions-active"},
                            fullscreen: {enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback"},
                            pip: {supported: "plyr--pip-supported", active: "plyr--pip-active"},
                            airplay: {supported: "plyr--airplay-supported", active: "plyr--airplay-active"},
                            tabFocus: "plyr__tab-focus",
                            previewThumbnails: {
                                thumbContainer: "plyr__preview-thumb",
                                thumbContainerShown: "plyr__preview-thumb--is-shown",
                                imageContainer: "plyr__preview-thumb__image-container",
                                timeContainer: "plyr__preview-thumb__time-container",
                                scrubbingContainer: "plyr__preview-scrubbing",
                                scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                            }
                        },
                        attributes: {
                            embed: {
                                provider: "data-plyr-provider",
                                id: "data-plyr-embed-id",
                                hash: "data-plyr-embed-hash"
                            }
                        },
                        ads: {enabled: !1, publisherId: "", tagUrl: ""},
                        previewThumbnails: {enabled: !1, src: ""},
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: !1,
                            customControls: !0,
                            referrerPolicy: null,
                            premium: !1
                        },
                        youtube: {
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            customControls: !0,
                            noCookie: !1
                        },
                        mediaMetadata: {title: "", artist: "", album: "", artwork: []},
                        markers: {enabled: !1, points: []}
                    }, et = "picture-in-picture", tt = {html5: "html5", youtube: "youtube", vimeo: "vimeo"}, nt = "video",
                    rt = function () {
                    }, ot = function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            l(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
                        }

                        return u(e, [{
                            key: "log", get: function () {
                                return this.enabled ? Function.prototype.bind.call(console.log, console) : rt
                            }
                        }, {
                            key: "warn", get: function () {
                                return this.enabled ? Function.prototype.bind.call(console.warn, console) : rt
                            }
                        }, {
                            key: "error", get: function () {
                                return this.enabled ? Function.prototype.bind.call(console.error, console) : rt
                            }
                        }]), e
                    }(), it = function () {
                        function t(n) {
                            var r = this;
                            l(this, t), e(this, "onChange", (function () {
                                if (r.enabled) {
                                    var e = r.player.elements.buttons.fullscreen;
                                    Y(e) && (e.pressed = r.active);
                                    var t = r.target === r.player.media ? r.target : r.player.elements.container;
                                    ke.call(r.player, t, r.active ? "enterfullscreen" : "exitfullscreen", !0)
                                }
                            })), e(this, "toggleFallback", (function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (e ? r.scrollPosition = {
                                    x: window.scrollX || 0,
                                    y: window.scrollY || 0
                                } : window.scrollTo(r.scrollPosition.x, r.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", de(r.target, r.player.config.classNames.fullscreen.fallback, e), Z.isIos) {
                                    var t = document.head.querySelector('meta[name="viewport"]'), n = "viewport-fit=cover";
                                    t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                                    var o = z(t.content) && t.content.includes(n);
                                    e ? (r.cleanupViewport = !o, o || (t.content += ",".concat(n))) : r.cleanupViewport && (t.content = t.content.split(",").filter((function (e) {
                                        return e.trim() !== n
                                    })).join(","))
                                }
                                r.onChange()
                            })), e(this, "trapFocus", (function (e) {
                                if (!Z.isIos && r.active && "Tab" === e.key) {
                                    var t = document.activeElement,
                                        n = he.call(r.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                        o = f(n, 1)[0], i = n[n.length - 1];
                                    t !== i || e.shiftKey ? t === o && e.shiftKey && (i.focus(), e.preventDefault()) : (o.focus(), e.preventDefault())
                                }
                            })), e(this, "update", (function () {
                                var e;
                                r.enabled ? (e = r.forceFallback ? "Fallback (forced)" : t.native ? "Native" : "Fallback", r.player.debug.log("".concat(e, " fullscreen enabled"))) : r.player.debug.log("Fullscreen not supported and fallback disabled"), de(r.player.elements.container, r.player.config.classNames.fullscreen.enabled, r.enabled)
                            })), e(this, "enter", (function () {
                                r.enabled && (Z.isIos && r.player.config.fullscreen.iosNative ? r.player.isVimeo ? r.player.embed.requestFullscreen() : r.target.webkitEnterFullscreen() : !t.native || r.forceFallback ? r.toggleFallback(!0) : r.prefix ? $(r.prefix) || r.target["".concat(r.prefix, "Request").concat(r.property)]() : r.target.requestFullscreen({navigationUI: "hide"}))
                            })), e(this, "exit", (function () {
                                if (r.enabled) if (Z.isIos && r.player.config.fullscreen.iosNative) r.target.webkitExitFullscreen(), Ce(r.player.play()); else if (!t.native || r.forceFallback) r.toggleFallback(!1); else if (r.prefix) {
                                    if (!$(r.prefix)) {
                                        var e = "moz" === r.prefix ? "Cancel" : "Exit";
                                        document["".concat(r.prefix).concat(e).concat(r.property)]()
                                    }
                                } else (document.cancelFullScreen || document.exitFullscreen).call(document)
                            })), e(this, "toggle", (function () {
                                r.active ? r.exit() : r.enter()
                            })), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
                                x: 0,
                                y: 0
                            }, this.forceFallback = "force" === n.config.fullscreen.fallback, this.player.elements.fullscreen = n.config.fullscreen.container && function (e, t) {
                                return (Element.prototype.closest || function () {
                                    var e = this;
                                    do {
                                        if (fe.matches(e, t)) return e;
                                        e = e.parentElement || e.parentNode
                                    } while (null !== e && 1 === e.nodeType);
                                    return null
                                }).call(e, t)
                            }(this.player.elements.container, n.config.fullscreen.container), we.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function () {
                                r.onChange()
                            })), we.call(this.player, this.player.elements.container, "dblclick", (function (e) {
                                Y(r.player.elements.controls) && r.player.elements.controls.contains(e.target) || r.player.listeners.proxy(e, r.toggle, "fullscreen")
                            })), we.call(this, this.player.elements.container, "keydown", (function (e) {
                                return r.trapFocus(e)
                            })), this.update()
                        }

                        return u(t, [{
                            key: "usingNative", get: function () {
                                return t.native && !this.forceFallback
                            }
                        }, {
                            key: "enabled", get: function () {
                                return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                            }
                        }, {
                            key: "active", get: function () {
                                if (!this.enabled) return !1;
                                if (!t.native || this.forceFallback) return pe(this.target, this.player.config.classNames.fullscreen.fallback);
                                var e = this.prefix ? this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")] : this.target.getRootNode().fullscreenElement;
                                return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
                            }
                        }, {
                            key: "target", get: function () {
                                return Z.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                            }
                        }], [{
                            key: "native", get: function () {
                                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                            }
                        }, {
                            key: "prefix", get: function () {
                                if (H(document.exitFullscreen)) return "";
                                var e = "";
                                return ["webkit", "moz", "ms"].some((function (t) {
                                    return !(!H(document["".concat(t, "ExitFullscreen")]) && !H(document["".concat(t, "CancelFullScreen")]) || (e = t, 0))
                                })), e
                            }
                        }, {
                            key: "property", get: function () {
                                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                            }
                        }]), t
                    }();

                function at(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return new Promise((function (n, r) {
                        var o = new Image, i = function () {
                            delete o.onload, delete o.onerror, (o.naturalWidth >= t ? n : r)(o)
                        };
                        Object.assign(o, {onload: i, onerror: i, src: e})
                    }))
                }

                var st = {
                    addStyleHook: function () {
                        de(this.elements.container, this.config.selectors.container.replace(".", ""), !0), de(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    }, toggleNativeControls: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    }, build: function () {
                        var e = this;
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void st.toggleNativeControls.call(this, !0);
                        Y(this.elements.controls) || (Ke.inject.call(this), this.listeners.controls()), st.toggleNativeControls.call(this), this.isHTML5 && Qe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Ke.updateVolume.call(this), Ke.timeUpdate.call(this), Ke.durationUpdate.call(this), st.checkPlaying.call(this), de(this.elements.container, this.config.classNames.pip.supported, ye.pip && this.isHTML5 && this.isVideo), de(this.elements.container, this.config.classNames.airplay.supported, ye.airplay && this.isHTML5), de(this.elements.container, this.config.classNames.isIos, Z.isIos), de(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function () {
                            ke.call(e, e.media, "ready")
                        }), 0), st.setTitle.call(this), this.poster && st.setPoster.call(this, this.poster, !1).catch((function () {
                        })), this.config.duration && Ke.durationUpdate.call(this), this.config.mediaMetadata && Ke.setMediaMetadata.call(this)
                    }, setTitle: function () {
                        var e = Fe("play", this.config);
                        if (z(this.config.title) && !$(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function (t) {
                            t.setAttribute("aria-label", e)
                        })), this.isEmbed) {
                            var t = me.call(this, "iframe");
                            if (!Y(t)) return;
                            var n = $(this.config.title) ? "video" : this.config.title,
                                r = Fe("frameTitle", this.config);
                            t.setAttribute("title", r.replace("{title}", n))
                        }
                    }, togglePoster: function (e) {
                        de(this.elements.container, this.config.classNames.posterEnabled, e)
                    }, setPoster: function (e) {
                        var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), Te.call(this).then((function () {
                            return at(e)
                        })).catch((function (n) {
                            throw e === t.poster && st.togglePoster.call(t, !1), n
                        })).then((function () {
                            if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                        })).then((function () {
                            return Object.assign(t.elements.poster.style, {
                                backgroundImage: "url('".concat(e, "')"),
                                backgroundSize: ""
                            }), st.togglePoster.call(t, !0), e
                        })))
                    }, checkPlaying: function (e) {
                        var t = this;
                        de(this.elements.container, this.config.classNames.playing, this.playing), de(this.elements.container, this.config.classNames.paused, this.paused), de(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function (e) {
                            Object.assign(e, {pressed: t.playing}), e.setAttribute("aria-label", Fe(t.playing ? "pause" : "play", t.config))
                        })), W(e) && "timeupdate" === e.type || st.toggleControls.call(this)
                    }, checkLoading: function (e) {
                        var t = this;
                        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function () {
                            de(t.elements.container, t.config.classNames.loading, t.loading), st.toggleControls.call(t)
                        }), this.loading ? 250 : 0)
                    }, toggleControls: function (e) {
                        var t = this.elements.controls;
                        if (t && this.config.hideControls) {
                            var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                        }
                    }, migrateStyles: function () {
                        var e = this;
                        Object.values(p({}, this.media.style)).filter((function (e) {
                            return !$(e) && z(e) && e.startsWith("--plyr")
                        })).forEach((function (t) {
                            e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                        })), $(this.media.style) && this.media.removeAttribute("style")
                    }
                }, lt = function () {
                    function t(n) {
                        var r = this;
                        l(this, t), e(this, "firstTouch", (function () {
                            var e = r.player, t = e.elements;
                            e.touch = !0, de(t.container, e.config.classNames.isTouch, !0)
                        })), e(this, "setTabFocus", (function (e) {
                            var t = r.player, n = t.elements, o = e.key, i = e.type, a = e.timeStamp;
                            if (clearTimeout(r.focusTimer), "keydown" !== i || "Tab" === o) {
                                "keydown" === i && (r.lastKeyDown = a);
                                var s = a - r.lastKeyDown <= 20;
                                ("focus" !== i || s) && (function () {
                                    var e = t.config.classNames.tabFocus;
                                    de(he.call(t, ".".concat(e)), e, !1)
                                }(), "focusout" !== i && (r.focusTimer = setTimeout((function () {
                                    var e = document.activeElement;
                                    n.container.contains(e) && de(document.activeElement, t.config.classNames.tabFocus, !0)
                                }), 10)))
                            }
                        })), e(this, "global", (function () {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = r.player;
                            t.config.keyboard.global && _e.call(t, window, "keydown keyup", r.handleKey, e, !1), _e.call(t, document.body, "click", r.toggleMenu, e), Ee.call(t, document.body, "touchstart", r.firstTouch), _e.call(t, document.body, "keydown focus blur focusout", r.setTabFocus, e, !1, !0)
                        })), e(this, "container", (function () {
                            var e = r.player, t = e.config, n = e.elements, o = e.timers;
                            !t.keyboard.global && t.keyboard.focused && we.call(e, n.container, "keydown keyup", r.handleKey, !1), we.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function (t) {
                                var r = n.controls;
                                r && "enterfullscreen" === t.type && (r.pressed = !1, r.hover = !1);
                                var i = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (st.toggleControls.call(e, !0), i = e.touch ? 3e3 : 2e3), clearTimeout(o.controls), o.controls = setTimeout((function () {
                                    return st.toggleControls.call(e, !1)
                                }), i)
                            }));
                            var i = function () {
                                if (e.isVimeo && !e.config.vimeo.premium) {
                                    var t = n.wrapper, r = e.fullscreen.active, o = f(Ie.call(e), 2), i = o[0],
                                        a = o[1], s = Pe("aspect-ratio: ".concat(i, " / ").concat(a));
                                    if (r) {
                                        var l = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
                                            c = l[1], u = l[0] / c > i / a;
                                        s ? (t.style.width = u ? "auto" : "100%", t.style.height = u ? "100%" : "auto") : (t.style.maxWidth = u ? c / a * i + "px" : null, t.style.margin = u ? "0 auto" : null)
                                    } else s ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null)
                                }
                            }, a = function () {
                                clearTimeout(o.resized), o.resized = setTimeout(i, 50)
                            };
                            we.call(e, n.container, "enterfullscreen exitfullscreen", (function (t) {
                                e.fullscreen.target === n.container && (!e.isEmbed && $(e.config.ratio) || (i(), ("enterfullscreen" === t.type ? we : xe).call(e, window, "resize", a)))
                            }))
                        })), e(this, "media", (function () {
                            var e = r.player, t = e.elements;
                            if (we.call(e, e.media, "timeupdate seeking seeked", (function (t) {
                                return Ke.timeUpdate.call(e, t)
                            })), we.call(e, e.media, "durationchange loadeddata loadedmetadata", (function (t) {
                                return Ke.durationUpdate.call(e, t)
                            })), we.call(e, e.media, "ended", (function () {
                                e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                            })), we.call(e, e.media, "progress playing seeking seeked", (function (t) {
                                return Ke.updateProgress.call(e, t)
                            })), we.call(e, e.media, "volumechange", (function (t) {
                                return Ke.updateVolume.call(e, t)
                            })), we.call(e, e.media, "playing play pause ended emptied timeupdate", (function (t) {
                                return st.checkPlaying.call(e, t)
                            })), we.call(e, e.media, "waiting canplay seeked playing", (function (t) {
                                return st.checkLoading.call(e, t)
                            })), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                var n = me.call(e, ".".concat(e.config.classNames.video));
                                if (!Y(n)) return;
                                we.call(e, t.container, "click", (function (o) {
                                    ([t.container, n].includes(o.target) || n.contains(o.target)) && (e.touch && e.config.hideControls || (e.ended ? (r.proxy(o, e.restart, "restart"), r.proxy(o, (function () {
                                        Ce(e.play())
                                    }), "play")) : r.proxy(o, (function () {
                                        Ce(e.togglePlay())
                                    }), "play")))
                                }))
                            }
                            e.supported.ui && e.config.disableContextMenu && we.call(e, t.wrapper, "contextmenu", (function (e) {
                                e.preventDefault()
                            }), !1), we.call(e, e.media, "volumechange", (function () {
                                e.storage.set({volume: e.volume, muted: e.muted})
                            })), we.call(e, e.media, "ratechange", (function () {
                                Ke.updateSetting.call(e, "speed"), e.storage.set({speed: e.speed})
                            })), we.call(e, e.media, "qualitychange", (function (t) {
                                Ke.updateSetting.call(e, "quality", null, t.detail.quality)
                            })), we.call(e, e.media, "ready qualitychange", (function () {
                                Ke.setDownloadUrl.call(e)
                            }));
                            var o = e.config.events.concat(["keyup", "keydown"]).join(" ");
                            we.call(e, e.media, o, (function (n) {
                                var r = n.detail, o = void 0 === r ? {} : r;
                                "error" === n.type && (o = e.media.error), ke.call(e, t.container, n.type, !0, o)
                            }))
                        })), e(this, "proxy", (function (e, t, n) {
                            var o = r.player, i = o.config.listeners[n], a = !0;
                            H(i) && (a = i.call(o, e)), !1 !== a && H(t) && t.call(o, e)
                        })), e(this, "bind", (function (e, t, n, o) {
                            var i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], a = r.player,
                                s = a.config.listeners[o], l = H(s);
                            we.call(a, e, t, (function (e) {
                                return r.proxy(e, n, o)
                            }), i && !l)
                        })), e(this, "controls", (function () {
                            var e = r.player, t = e.elements, n = Z.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach((function (t) {
                                r.bind(t, "click", (function () {
                                    Ce(e.togglePlay())
                                }), "play")
                            })), r.bind(t.buttons.restart, "click", e.restart, "restart"), r.bind(t.buttons.rewind, "click", (function () {
                                e.lastSeekTime = Date.now(), e.rewind()
                            }), "rewind"), r.bind(t.buttons.fastForward, "click", (function () {
                                e.lastSeekTime = Date.now(), e.forward()
                            }), "fastForward"), r.bind(t.buttons.mute, "click", (function () {
                                e.muted = !e.muted
                            }), "mute"), r.bind(t.buttons.captions, "click", (function () {
                                return e.toggleCaptions()
                            })), r.bind(t.buttons.download, "click", (function () {
                                ke.call(e, e.media, "download")
                            }), "download"), r.bind(t.buttons.fullscreen, "click", (function () {
                                e.fullscreen.toggle()
                            }), "fullscreen"), r.bind(t.buttons.pip, "click", (function () {
                                e.pip = "toggle"
                            }), "pip"), r.bind(t.buttons.airplay, "click", e.airplay, "airplay"), r.bind(t.buttons.settings, "click", (function (t) {
                                t.stopPropagation(), t.preventDefault(), Ke.toggleMenu.call(e, t)
                            }), null, !1), r.bind(t.buttons.settings, "keyup", (function (t) {
                                ["Space", "Enter"].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), Ke.toggleMenu.call(e, t)) : Ke.focusFirstMenuItem.call(e, null, !0))
                            }), null, !1), r.bind(t.settings.menu, "keydown", (function (t) {
                                "Escape" === t.key && Ke.toggleMenu.call(e, t)
                            })), r.bind(t.inputs.seek, "mousedown mousemove", (function (e) {
                                var n = t.progress.getBoundingClientRect(), r = 100 / n.width * (e.pageX - n.left);
                                e.currentTarget.setAttribute("seek-value", r)
                            })), r.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function (t) {
                                var n = t.currentTarget, r = "play-on-seeked";
                                if (!G(t) || ["ArrowLeft", "ArrowRight"].includes(t.key)) {
                                    e.lastSeekTime = Date.now();
                                    var o = n.hasAttribute(r), i = ["mouseup", "touchend", "keyup"].includes(t.type);
                                    o && i ? (n.removeAttribute(r), Ce(e.play())) : !i && e.playing && (n.setAttribute(r, ""), e.pause())
                                }
                            })), Z.isIos) {
                                var o = he.call(e, 'input[type="range"]');
                                Array.from(o).forEach((function (e) {
                                    return r.bind(e, n, (function (e) {
                                        return Q(e.target)
                                    }))
                                }))
                            }
                            r.bind(t.inputs.seek, n, (function (t) {
                                var n = t.currentTarget, r = n.getAttribute("seek-value");
                                $(r) && (r = n.value), n.removeAttribute("seek-value"), e.currentTime = r / n.max * e.duration
                            }), "seek"), r.bind(t.progress, "mouseenter mouseleave mousemove", (function (t) {
                                return Ke.updateSeekTooltip.call(e, t)
                            })), r.bind(t.progress, "mousemove touchmove", (function (t) {
                                var n = e.previewThumbnails;
                                n && n.loaded && n.startMove(t)
                            })), r.bind(t.progress, "mouseleave touchend click", (function () {
                                var t = e.previewThumbnails;
                                t && t.loaded && t.endMove(!1, !0)
                            })), r.bind(t.progress, "mousedown touchstart", (function (t) {
                                var n = e.previewThumbnails;
                                n && n.loaded && n.startScrubbing(t)
                            })), r.bind(t.progress, "mouseup touchend", (function (t) {
                                var n = e.previewThumbnails;
                                n && n.loaded && n.endScrubbing(t)
                            })), Z.isWebkit && Array.from(he.call(e, 'input[type="range"]')).forEach((function (t) {
                                r.bind(t, "input", (function (t) {
                                    return Ke.updateRangeFill.call(e, t.target)
                                }))
                            })), e.config.toggleInvert && !Y(t.display.duration) && r.bind(t.display.currentTime, "click", (function () {
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, Ke.timeUpdate.call(e))
                            })), r.bind(t.inputs.volume, n, (function (t) {
                                e.volume = t.target.value
                            }), "volume"), r.bind(t.controls, "mouseenter mouseleave", (function (n) {
                                t.controls.hover = !e.touch && "mouseenter" === n.type
                            })), t.fullscreen && Array.from(t.fullscreen.children).filter((function (e) {
                                return !e.contains(t.container)
                            })).forEach((function (n) {
                                r.bind(n, "mouseenter mouseleave", (function (n) {
                                    t.controls && (t.controls.hover = !e.touch && "mouseenter" === n.type)
                                }))
                            })), r.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (function (e) {
                                t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            })), r.bind(t.controls, "focusin", (function () {
                                var n = e.config, o = e.timers;
                                de(t.controls, n.classNames.noTransition, !0), st.toggleControls.call(e, !0), setTimeout((function () {
                                    de(t.controls, n.classNames.noTransition, !1)
                                }), 0);
                                var i = r.touch ? 3e3 : 4e3;
                                clearTimeout(o.controls), o.controls = setTimeout((function () {
                                    return st.toggleControls.call(e, !1)
                                }), i)
                            })), r.bind(t.inputs.volume, "wheel", (function (t) {
                                var n = t.webkitDirectionInvertedFromDevice,
                                    r = [t.deltaX, -t.deltaY].map((function (e) {
                                        return n ? -e : e
                                    })), o = f(r, 2), i = o[0], a = o[1],
                                    s = Math.sign(Math.abs(i) > Math.abs(a) ? i : a);
                                e.increaseVolume(s / 50);
                                var l = e.media.volume;
                                (1 === s && l < 1 || -1 === s && l > 0) && t.preventDefault()
                            }), "volume", !1)
                        })), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }

                    return u(t, [{
                        key: "handleKey", value: function (e) {
                            var t, n = this.player, r = n.elements, o = e.key, i = e.type, a = e.altKey, s = e.ctrlKey,
                                l = e.metaKey, c = e.shiftKey, u = "keydown" === i, d = u && o === this.lastKey;
                            if (!(a || s || l || c) && o) if (u) {
                                var p = document.activeElement;
                                if (Y(p)) {
                                    var f = n.config.selectors.editable;
                                    if (p !== r.inputs.seek && fe(p, f)) return;
                                    if ("Space" === e.key && fe(p, 'button, [role^="menuitem"]')) return
                                }
                                switch (["Space", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(o) && (e.preventDefault(), e.stopPropagation()), o) {
                                    case"0":
                                    case"1":
                                    case"2":
                                    case"3":
                                    case"4":
                                    case"5":
                                    case"6":
                                    case"7":
                                    case"8":
                                    case"9":
                                        d || (t = parseInt(o, 10), n.currentTime = n.duration / 10 * t);
                                        break;
                                    case"Space":
                                    case"k":
                                        d || Ce(n.togglePlay());
                                        break;
                                    case"ArrowUp":
                                        n.increaseVolume(.1);
                                        break;
                                    case"ArrowDown":
                                        n.decreaseVolume(.1);
                                        break;
                                    case"m":
                                        d || (n.muted = !n.muted);
                                        break;
                                    case"ArrowRight":
                                        n.forward();
                                        break;
                                    case"ArrowLeft":
                                        n.rewind();
                                        break;
                                    case"f":
                                        n.fullscreen.toggle();
                                        break;
                                    case"c":
                                        d || n.toggleCaptions();
                                        break;
                                    case"l":
                                        n.loop = !n.loop
                                }
                                "Escape" === o && !n.fullscreen.usingNative && n.fullscreen.active && n.fullscreen.toggle(), this.lastKey = o
                            } else this.lastKey = null
                        }
                    }, {
                        key: "toggleMenu", value: function (e) {
                            Ke.toggleMenu.call(this.player, e)
                        }
                    }]), t
                }();
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self && self;
                var ct = function (e, t) {
                    return function (e, t) {
                        e.exports = function () {
                            var e = function () {
                            }, t = {}, n = {}, r = {};

                            function o(e, t) {
                                if (e) {
                                    var o = r[e];
                                    if (n[e] = t, o) for (; o.length;) o[0](e, t), o.splice(0, 1)
                                }
                            }

                            function i(t, n) {
                                t.call && (t = {success: t}), n.length ? (t.error || e)(n) : (t.success || e)(t)
                            }

                            function a(t, n, r, o) {
                                var i, s, l = document, c = r.async, u = (r.numRetries || 0) + 1, d = r.before || e,
                                    p = t.replace(/[\?|#].*$/, ""), f = t.replace(/^(css|img)!/, "");
                                o = o || 0, /(^css!|\.css$)/.test(p) ? ((s = l.createElement("link")).rel = "stylesheet", s.href = f, (i = "hideFocus" in s) && s.relList && (i = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p) ? (s = l.createElement("img")).src = f : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function (e) {
                                    var l = e.type[0];
                                    if (i) try {
                                        s.sheet.cssText.length || (l = "e")
                                    } catch (e) {
                                        18 != e.code && (l = "e")
                                    }
                                    if ("e" == l) {
                                        if ((o += 1) < u) return a(t, n, r, o)
                                    } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";
                                    n(t, l, e.defaultPrevented)
                                }, !1 !== d(t, s) && l.head.appendChild(s)
                            }

                            function s(e, t, n) {
                                var r, o, i = (e = e.push ? e : [e]).length, s = i, l = [];
                                for (r = function (e, n, r) {
                                    if ("e" == n && l.push(e), "b" == n) {
                                        if (!r) return;
                                        l.push(e)
                                    }
                                    --i || t(l)
                                }, o = 0; o < s; o++) a(e[o], r, n)
                            }

                            function l(e, n, r) {
                                var a, l;
                                if (n && n.trim && (a = n), l = (a ? r : n) || {}, a) {
                                    if (a in t) throw"LoadJS";
                                    t[a] = !0
                                }

                                function c(t, n) {
                                    s(e, (function (e) {
                                        i(l, e), t && i({success: t, error: n}, e), o(a, e)
                                    }), l)
                                }

                                if (l.returnPromise) return new Promise(c);
                                c()
                            }

                            return l.ready = function (e, t) {
                                return function (e, t) {
                                    e = e.push ? e : [e];
                                    var o, i, a, s = [], l = e.length, c = l;
                                    for (o = function (e, n) {
                                        n.length && s.push(e), --c || t(s)
                                    }; l--;) i = e[l], (a = n[i]) ? o(i, a) : (r[i] = r[i] || []).push(o)
                                }(e, (function (e) {
                                    i(t, e)
                                })), l
                            }, l.done = function (e) {
                                o(e, [])
                            }, l.reset = function () {
                                t = {}, n = {}, r = {}
                            }, l.isDefined = function (e) {
                                return e in t
                            }, l
                        }()
                    }(t = {exports: {}}), t.exports
                }();

                function ut(e) {
                    return new Promise((function (t, n) {
                        ct(e, {success: t, error: n})
                    }))
                }

                function dt(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, ke.call(this, this.media, e ? "play" : "pause"))
                }

                var pt = {
                    setup: function () {
                        var e = this;
                        de(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Le.call(e), R(window.Vimeo) ? pt.ready.call(e) : ut(e.config.urls.vimeo.sdk).then((function () {
                            pt.ready.call(e)
                        })).catch((function (t) {
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                        }))
                    }, ready: function () {
                        var e = this, t = this, n = t.config.vimeo, r = n.premium, o = n.referrerPolicy,
                            i = function (e, t) {
                                if (null == e) return {};
                                var n, r, o = function (e, t) {
                                    if (null == e) return {};
                                    var n, r, o = {}, i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                                return o
                            }(n, a), s = t.media.getAttribute("src"), l = "";
                        $(s) ? (s = t.media.getAttribute(t.config.attributes.embed.id), l = t.media.getAttribute(t.config.attributes.embed.hash)) : l = function (e) {
                            var t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
                            return t && 5 === t.length ? t[4] : null
                        }(s);
                        var c = l ? {h: l} : {};
                        r && Object.assign(i, {controls: !1, sidedock: !1});
                        var u, d = Je(p(p({
                                loop: t.config.loop.active,
                                autoplay: t.autoplay,
                                muted: t.muted,
                                gesture: "media",
                                playsinline: !this.config.fullscreen.iosNative
                            }, c), i)),
                            h = $(u = s) ? null : B(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u,
                            m = oe("iframe"), g = Re(t.config.urls.vimeo.iframe, h, d);
                        if (m.setAttribute("src", g), m.setAttribute("allowfullscreen", ""), m.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), $(o) || m.setAttribute("referrerPolicy", o), r || !n.customControls) m.setAttribute("data-poster", t.poster), t.media = le(m, t.media); else {
                            var v = oe("div", {class: t.config.classNames.embedContainer, "data-poster": t.poster});
                            v.appendChild(m), t.media = le(v, t.media)
                        }
                        n.customControls || Ye(Re(t.config.urls.vimeo.api, g)).then((function (e) {
                            !$(e) && e.thumbnail_url && st.setPoster.call(t, e.thumbnail_url).catch((function () {
                            }))
                        })), t.embed = new window.Vimeo.Player(m, {
                            autopause: t.config.autopause,
                            muted: t.muted
                        }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
                            return dt.call(t, !0), t.embed.play()
                        }, t.media.pause = function () {
                            return dt.call(t, !1), t.embed.pause()
                        }, t.media.stop = function () {
                            t.pause(), t.currentTime = 0
                        };
                        var y = t.media.currentTime;
                        Object.defineProperty(t.media, "currentTime", {
                            get: function () {
                                return y
                            }, set: function (e) {
                                var n = t.embed, r = t.media, o = t.paused, i = t.volume, a = o && !n.hasPlayed;
                                r.seeking = !0, ke.call(t, r, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function () {
                                    return n.setCurrentTime(e)
                                })).then((function () {
                                    return a && n.pause()
                                })).then((function () {
                                    return a && n.setVolume(i)
                                })).catch((function () {
                                }))
                            }
                        });
                        var b = t.config.speed.selected;
                        Object.defineProperty(t.media, "playbackRate", {
                            get: function () {
                                return b
                            }, set: function (e) {
                                t.embed.setPlaybackRate(e).then((function () {
                                    b = e, ke.call(t, t.media, "ratechange")
                                })).catch((function () {
                                    t.options.speed = [1]
                                }))
                            }
                        });
                        var _ = t.config.volume;
                        Object.defineProperty(t.media, "volume", {
                            get: function () {
                                return _
                            }, set: function (e) {
                                t.embed.setVolume(e).then((function () {
                                    _ = e, ke.call(t, t.media, "volumechange")
                                }))
                            }
                        });
                        var w = t.config.muted;
                        Object.defineProperty(t.media, "muted", {
                            get: function () {
                                return w
                            }, set: function (e) {
                                var n = !!U(e) && e;
                                t.embed.setVolume(n ? 0 : t.config.volume).then((function () {
                                    w = n, ke.call(t, t.media, "volumechange")
                                }))
                            }
                        });
                        var x, E = t.config.loop;
                        Object.defineProperty(t.media, "loop", {
                            get: function () {
                                return E
                            }, set: function (e) {
                                var n = U(e) ? e : t.config.loop.active;
                                t.embed.setLoop(n).then((function () {
                                    E = n
                                }))
                            }
                        }), t.embed.getVideoUrl().then((function (e) {
                            x = e, Ke.setDownloadUrl.call(t)
                        })).catch((function (t) {
                            e.debug.warn(t)
                        })), Object.defineProperty(t.media, "currentSrc", {
                            get: function () {
                                return x
                            }
                        }), Object.defineProperty(t.media, "ended", {
                            get: function () {
                                return t.currentTime === t.duration
                            }
                        }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function (n) {
                            var r = f(n, 2), o = r[0], i = r[1];
                            t.embed.ratio = je(o, i), Le.call(e)
                        })), t.embed.setAutopause(t.config.autopause).then((function (e) {
                            t.config.autopause = e
                        })), t.embed.getVideoTitle().then((function (n) {
                            t.config.title = n, st.setTitle.call(e)
                        })), t.embed.getCurrentTime().then((function (e) {
                            y = e, ke.call(t, t.media, "timeupdate")
                        })), t.embed.getDuration().then((function (e) {
                            t.media.duration = e, ke.call(t, t.media, "durationchange")
                        })), t.embed.getTextTracks().then((function (e) {
                            t.media.textTracks = e, Qe.setup.call(t)
                        })), t.embed.on("cuechange", (function (e) {
                            var n = e.cues, r = (void 0 === n ? [] : n).map((function (e) {
                                return function (e) {
                                    var t = document.createDocumentFragment(), n = document.createElement("div");
                                    return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                                }(e.text)
                            }));
                            Qe.updateCues.call(t, r)
                        })), t.embed.on("loaded", (function () {
                            t.embed.getPaused().then((function (e) {
                                dt.call(t, !e), e || ke.call(t, t.media, "playing")
                            })), Y(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                        })), t.embed.on("bufferstart", (function () {
                            ke.call(t, t.media, "waiting")
                        })), t.embed.on("bufferend", (function () {
                            ke.call(t, t.media, "playing")
                        })), t.embed.on("play", (function () {
                            dt.call(t, !0), ke.call(t, t.media, "playing")
                        })), t.embed.on("pause", (function () {
                            dt.call(t, !1)
                        })), t.embed.on("timeupdate", (function (e) {
                            t.media.seeking = !1, y = e.seconds, ke.call(t, t.media, "timeupdate")
                        })), t.embed.on("progress", (function (e) {
                            t.media.buffered = e.percent, ke.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && ke.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function (e) {
                                e !== t.media.duration && (t.media.duration = e, ke.call(t, t.media, "durationchange"))
                            }))
                        })), t.embed.on("seeked", (function () {
                            t.media.seeking = !1, ke.call(t, t.media, "seeked")
                        })), t.embed.on("ended", (function () {
                            t.media.paused = !0, ke.call(t, t.media, "ended")
                        })), t.embed.on("error", (function (e) {
                            t.media.error = e, ke.call(t, t.media, "error")
                        })), n.customControls && setTimeout((function () {
                            return st.build.call(t)
                        }), 0)
                    }
                };

                function ft(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, ke.call(this, this.media, e ? "play" : "pause"))
                }

                function ht(e) {
                    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                }

                var mt = {
                    setup: function () {
                        var e = this;
                        if (de(this.elements.wrapper, this.config.classNames.embed, !0), R(window.YT) && H(window.YT.Player)) mt.ready.call(this); else {
                            var t = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = function () {
                                H(t) && t(), mt.ready.call(e)
                            }, ut(this.config.urls.youtube.sdk).catch((function (t) {
                                e.debug.warn("YouTube API failed to load", t)
                            }))
                        }
                    }, getTitle: function (e) {
                        var t = this;
                        Ye(Re(this.config.urls.youtube.api, e)).then((function (e) {
                            if (R(e)) {
                                var n = e.title, r = e.height, o = e.width;
                                t.config.title = n, st.setTitle.call(t), t.embed.ratio = je(o, r)
                            }
                            Le.call(t)
                        })).catch((function () {
                            Le.call(t)
                        }))
                    }, ready: function () {
                        var e = this, t = e.config.youtube, n = e.media && e.media.getAttribute("id");
                        if ($(n) || !n.startsWith("youtube-")) {
                            var r = e.media.getAttribute("src");
                            $(r) && (r = e.media.getAttribute(this.config.attributes.embed.id));
                            var o,
                                i = $(o = r) ? null : o.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : o,
                                a = oe("div", {
                                    id: "".concat(e.provider, "-").concat(Math.floor(1e4 * Math.random())),
                                    "data-poster": t.customControls ? e.poster : void 0
                                });
                            if (e.media = le(a, e.media), t.customControls) {
                                var s = function (e) {
                                    return "https://i.ytimg.com/vi/".concat(i, "/").concat(e, "default.jpg")
                                };
                                at(s("maxres"), 121).catch((function () {
                                    return at(s("sd"), 121)
                                })).catch((function () {
                                    return at(s("hq"))
                                })).then((function (t) {
                                    return st.setPoster.call(e, t.src)
                                })).then((function (t) {
                                    t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                                })).catch((function () {
                                }))
                            }
                            e.embed = new window.YT.Player(e.media, {
                                videoId: i,
                                host: ht(t),
                                playerVars: te({}, {
                                    autoplay: e.config.autoplay ? 1 : 0,
                                    hl: e.config.hl,
                                    controls: e.supported.ui && t.customControls ? 0 : 1,
                                    disablekb: 1,
                                    playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                    cc_load_policy: e.captions.active ? 1 : 0,
                                    cc_lang_pref: e.config.captions.language,
                                    widget_referrer: window ? window.location.href : null
                                }, t),
                                events: {
                                    onError: function (t) {
                                        if (!e.media.error) {
                                            var n = t.data, r = {
                                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                                150: "The owner of the requested video does not allow it to be played in embedded players."
                                            }[n] || "An unknown error occured";
                                            e.media.error = {code: n, message: r}, ke.call(e, e.media, "error")
                                        }
                                    }, onPlaybackRateChange: function (t) {
                                        var n = t.target;
                                        e.media.playbackRate = n.getPlaybackRate(), ke.call(e, e.media, "ratechange")
                                    }, onReady: function (n) {
                                        if (!H(e.media.play)) {
                                            var r = n.target;
                                            mt.getTitle.call(e, i), e.media.play = function () {
                                                ft.call(e, !0), r.playVideo()
                                            }, e.media.pause = function () {
                                                ft.call(e, !1), r.pauseVideo()
                                            }, e.media.stop = function () {
                                                r.stopVideo()
                                            }, e.media.duration = r.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                                get: function () {
                                                    return Number(r.getCurrentTime())
                                                }, set: function (t) {
                                                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, ke.call(e, e.media, "seeking"), r.seekTo(t)
                                                }
                                            }), Object.defineProperty(e.media, "playbackRate", {
                                                get: function () {
                                                    return r.getPlaybackRate()
                                                }, set: function (e) {
                                                    r.setPlaybackRate(e)
                                                }
                                            });
                                            var o = e.config.volume;
                                            Object.defineProperty(e.media, "volume", {
                                                get: function () {
                                                    return o
                                                }, set: function (t) {
                                                    o = t, r.setVolume(100 * o), ke.call(e, e.media, "volumechange")
                                                }
                                            });
                                            var a = e.config.muted;
                                            Object.defineProperty(e.media, "muted", {
                                                get: function () {
                                                    return a
                                                }, set: function (t) {
                                                    var n = U(t) ? t : a;
                                                    a = n, r[n ? "mute" : "unMute"](), r.setVolume(100 * o), ke.call(e, e.media, "volumechange")
                                                }
                                            }), Object.defineProperty(e.media, "currentSrc", {
                                                get: function () {
                                                    return r.getVideoUrl()
                                                }
                                            }), Object.defineProperty(e.media, "ended", {
                                                get: function () {
                                                    return e.currentTime === e.duration
                                                }
                                            });
                                            var s = r.getAvailablePlaybackRates();
                                            e.options.speed = s.filter((function (t) {
                                                return e.config.speed.options.includes(t)
                                            })), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), ke.call(e, e.media, "timeupdate"), ke.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function () {
                                                e.media.buffered = r.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && ke.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), ke.call(e, e.media, "canplaythrough"))
                                            }), 200), t.customControls && setTimeout((function () {
                                                return st.build.call(e)
                                            }), 50)
                                        }
                                    }, onStateChange: function (n) {
                                        var r = n.target;
                                        switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, ke.call(e, e.media, "seeked")), n.data) {
                                            case-1:
                                                ke.call(e, e.media, "timeupdate"), e.media.buffered = r.getVideoLoadedFraction(), ke.call(e, e.media, "progress");
                                                break;
                                            case 0:
                                                ft.call(e, !1), e.media.loop ? (r.stopVideo(), r.playVideo()) : ke.call(e, e.media, "ended");
                                                break;
                                            case 1:
                                                t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (ft.call(e, !0), ke.call(e, e.media, "playing"), e.timers.playing = setInterval((function () {
                                                    ke.call(e, e.media, "timeupdate")
                                                }), 50), e.media.duration !== r.getDuration() && (e.media.duration = r.getDuration(), ke.call(e, e.media, "durationchange")));
                                                break;
                                            case 2:
                                                e.muted || e.embed.unMute(), ft.call(e, !1);
                                                break;
                                            case 3:
                                                ke.call(e, e.media, "waiting")
                                        }
                                        ke.call(e, e.elements.container, "statechange", !1, {code: n.data})
                                    }
                                }
                            })
                        }
                    }
                }, gt = {
                    setup: function () {
                        this.media ? (de(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), de(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && de(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = oe("div", {class: this.config.classNames.video}), ne(this.media, this.elements.wrapper), this.elements.poster = oe("div", {class: this.config.classNames.poster}), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? qe.setup.call(this) : this.isYouTube ? mt.setup.call(this) : this.isVimeo && pt.setup.call(this)) : this.debug.warn("No media element found!")
                    }
                }, vt = function () {
                    function t(n) {
                        var r = this;
                        l(this, t), e(this, "load", (function () {
                            r.enabled && (R(window.google) && R(window.google.ima) ? r.ready() : ut(r.player.config.urls.googleIMA.sdk).then((function () {
                                r.ready()
                            })).catch((function () {
                                r.trigger("error", new Error("Google IMA SDK failed to load"))
                            })))
                        })), e(this, "ready", (function () {
                            var e;
                            r.enabled || ((e = r).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), r.startSafetyTimer(12e3, "ready()"), r.managerPromise.then((function () {
                                r.clearSafetyTimer("onAdsManagerLoaded()")
                            })), r.listeners(), r.setupIMA()
                        })), e(this, "setupIMA", (function () {
                            r.elements.container = oe("div", {class: r.player.config.classNames.ads}), r.player.elements.container.appendChild(r.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(r.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(r.player.config.playsinline), r.elements.displayContainer = new google.ima.AdDisplayContainer(r.elements.container, r.player.media), r.loader = new google.ima.AdsLoader(r.elements.displayContainer), r.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function (e) {
                                return r.onAdsManagerLoaded(e)
                            }), !1), r.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function (e) {
                                return r.onAdError(e)
                            }), !1), r.requestAds()
                        })), e(this, "requestAds", (function () {
                            var e = r.player.elements.container;
                            try {
                                var t = new google.ima.AdsRequest;
                                t.adTagUrl = r.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!r.player.muted), r.loader.requestAds(t)
                            } catch (e) {
                                r.onAdError(e)
                            }
                        })), e(this, "pollCountdown", (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (!e) return clearInterval(r.countdownTimer), void r.elements.container.removeAttribute("data-badge-text");
                            r.countdownTimer = setInterval((function () {
                                var e = Xe(Math.max(r.manager.getRemainingTime(), 0)),
                                    t = "".concat(Fe("advertisement", r.player.config), " - ").concat(e);
                                r.elements.container.setAttribute("data-badge-text", t)
                            }), 100)
                        })), e(this, "onAdsManagerLoaded", (function (e) {
                            if (r.enabled) {
                                var t = new google.ima.AdsRenderingSettings;
                                t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, r.manager = e.getAdsManager(r.player, t), r.cuePoints = r.manager.getCuePoints(), r.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function (e) {
                                    return r.onAdError(e)
                                })), Object.keys(google.ima.AdEvent.Type).forEach((function (e) {
                                    r.manager.addEventListener(google.ima.AdEvent.Type[e], (function (e) {
                                        return r.onAdEvent(e)
                                    }))
                                })), r.trigger("loaded")
                            }
                        })), e(this, "addCuePoints", (function () {
                            $(r.cuePoints) || r.cuePoints.forEach((function (e) {
                                if (0 !== e && -1 !== e && e < r.player.duration) {
                                    var t = r.player.elements.progress;
                                    if (Y(t)) {
                                        var n = 100 / r.player.duration * e,
                                            o = oe("span", {class: r.player.config.classNames.cues});
                                        o.style.left = "".concat(n.toString(), "%"), t.appendChild(o)
                                    }
                                }
                            }))
                        })), e(this, "onAdEvent", (function (e) {
                            var t = r.player.elements.container, n = e.getAd(), o = e.getAdData();
                            switch (function (e) {
                                ke.call(r.player, r.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                            }(e.type), e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    r.trigger("loaded"), r.pollCountdown(!0), n.isLinear() || (n.width = t.offsetWidth, n.height = t.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    r.manager.setVolume(r.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    r.player.ended ? r.loadAds() : r.loader.contentComplete();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    r.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    r.pollCountdown(), r.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    o.adError && r.player.debug.warn("Non-fatal ad error: ".concat(o.adError.getMessage()))
                            }
                        })), e(this, "onAdError", (function (e) {
                            r.cancel(), r.player.debug.warn("Ads error", e)
                        })), e(this, "listeners", (function () {
                            var e, t = r.player.elements.container;
                            r.player.on("canplay", (function () {
                                r.addCuePoints()
                            })), r.player.on("ended", (function () {
                                r.loader.contentComplete()
                            })), r.player.on("timeupdate", (function () {
                                e = r.player.currentTime
                            })), r.player.on("seeked", (function () {
                                var t = r.player.currentTime;
                                $(r.cuePoints) || r.cuePoints.forEach((function (n, o) {
                                    e < n && n < t && (r.manager.discardAdBreak(), r.cuePoints.splice(o, 1))
                                }))
                            })), window.addEventListener("resize", (function () {
                                r.manager && r.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                            }))
                        })), e(this, "play", (function () {
                            var e = r.player.elements.container;
                            r.managerPromise || r.resumeContent(), r.managerPromise.then((function () {
                                r.manager.setVolume(r.player.volume), r.elements.displayContainer.initialize();
                                try {
                                    r.initialized || (r.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), r.manager.start()), r.initialized = !0
                                } catch (e) {
                                    r.onAdError(e)
                                }
                            })).catch((function () {
                            }))
                        })), e(this, "resumeContent", (function () {
                            r.elements.container.style.zIndex = "", r.playing = !1, Ce(r.player.media.play())
                        })), e(this, "pauseContent", (function () {
                            r.elements.container.style.zIndex = 3, r.playing = !0, r.player.media.pause()
                        })), e(this, "cancel", (function () {
                            r.initialized && r.resumeContent(), r.trigger("error"), r.loadAds()
                        })), e(this, "loadAds", (function () {
                            r.managerPromise.then((function () {
                                r.manager && r.manager.destroy(), r.managerPromise = new Promise((function (e) {
                                    r.on("loaded", e), r.player.debug.log(r.manager)
                                })), r.initialized = !1, r.requestAds()
                            })).catch((function () {
                            }))
                        })), e(this, "trigger", (function (e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                            var i = r.events[e];
                            F(i) && i.forEach((function (e) {
                                H(e) && e.apply(r, n)
                            }))
                        })), e(this, "on", (function (e, t) {
                            return F(r.events[e]) || (r.events[e] = []), r.events[e].push(t), r
                        })), e(this, "startSafetyTimer", (function (e, t) {
                            r.player.debug.log("Safety timer invoked from: ".concat(t)), r.safetyTimer = setTimeout((function () {
                                r.cancel(), r.clearSafetyTimer("startSafetyTimer()")
                            }), e)
                        })), e(this, "clearSafetyTimer", (function (e) {
                            q(r.safetyTimer) || (r.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(r.safetyTimer), r.safetyTimer = null)
                        })), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function (e, t) {
                            r.on("loaded", e), r.on("error", t)
                        })), this.load()
                    }

                    return u(t, [{
                        key: "enabled", get: function () {
                            var e = this.config;
                            return this.player.isHTML5 && this.player.isVideo && e.enabled && (!$(e.publisherId) || K(e.tagUrl))
                        }
                    }, {
                        key: "tagUrl", get: function () {
                            var e = this.config;
                            return K(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?".concat(Je({
                                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                AV_URL: window.location.hostname,
                                cb: Date.now(),
                                AV_WIDTH: 640,
                                AV_HEIGHT: 480,
                                AV_CDIM2: e.publisherId
                            }))
                        }
                    }]), t
                }();

                function yt() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                    return Math.min(Math.max(e, t), n)
                }

                var bt, _t = function (e) {
                    var t = [];
                    return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((function (e) {
                        var n = {};
                        e.split(/\r\n|\n|\r/).forEach((function (e) {
                            if (B(n.startTime)) {
                                if (!$(e.trim()) && $(n.text)) {
                                    var t, r, o = e.trim().split("#xywh=");
                                    t = f(o, 1), n.text = t[0], o[1] && (r = f(o[1].split(","), 4), n.x = r[0], n.y = r[1], n.w = r[2], n.h = r[3])
                                }
                            } else {
                                var i = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                i && (n.startTime = 60 * Number(i[1] || 0) * 60 + 60 * Number(i[2]) + Number(i[3]) + Number("0.".concat(i[4])), n.endTime = 60 * Number(i[6] || 0) * 60 + 60 * Number(i[7]) + Number(i[8]) + Number("0.".concat(i[9])))
                            }
                        })), n.text && t.push(n)
                    })), t
                }, wt = function (e, t) {
                    var n = {};
                    return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
                }, xt = function () {
                    function t(n) {
                        var r = this;
                        l(this, t), e(this, "load", (function () {
                            r.player.elements.display.seekTooltip && (r.player.elements.display.seekTooltip.hidden = r.enabled), r.enabled && r.getThumbnails().then((function () {
                                r.enabled && (r.render(), r.determineContainerAutoSizing(), r.loaded = !0)
                            }))
                        })), e(this, "getThumbnails", (function () {
                            return new Promise((function (e) {
                                var t = r.player.config.previewThumbnails.src;
                                if ($(t)) throw new Error("Missing previewThumbnails.src config attribute");
                                var n = function () {
                                    r.thumbnails.sort((function (e, t) {
                                        return e.height - t.height
                                    })), r.player.debug.log("Preview thumbnails", r.thumbnails), e()
                                };
                                if (H(t)) t((function (e) {
                                    r.thumbnails = e, n()
                                })); else {
                                    var o = (z(t) ? [t] : t).map((function (e) {
                                        return r.getThumbnail(e)
                                    }));
                                    Promise.all(o).then(n)
                                }
                            }))
                        })), e(this, "getThumbnail", (function (e) {
                            return new Promise((function (t) {
                                Ye(e).then((function (n) {
                                    var o = {frames: _t(n), height: null, urlPrefix: ""};
                                    o.frames[0].text.startsWith("/") || o.frames[0].text.startsWith("http://") || o.frames[0].text.startsWith("https://") || (o.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                    var i = new Image;
                                    i.onload = function () {
                                        o.height = i.naturalHeight, o.width = i.naturalWidth, r.thumbnails.push(o), t()
                                    }, i.src = o.urlPrefix + o.frames[0].text
                                }))
                            }))
                        })), e(this, "startMove", (function (e) {
                            if (r.loaded && W(e) && ["touchmove", "mousemove"].includes(e.type) && r.player.media.duration) {
                                if ("touchmove" === e.type) r.seekTime = r.player.media.duration * (r.player.elements.inputs.seek.value / 100); else {
                                    var t, n, o = r.player.elements.progress.getBoundingClientRect(),
                                        i = 100 / o.width * (e.pageX - o.left);
                                    r.seekTime = r.player.media.duration * (i / 100), r.seekTime < 0 && (r.seekTime = 0), r.seekTime > r.player.media.duration - 1 && (r.seekTime = r.player.media.duration - 1), r.mousePosX = e.pageX, r.elements.thumb.time.innerText = Xe(r.seekTime);
                                    var a = null === (t = r.player.config.markers) || void 0 === t || null === (n = t.points) || void 0 === n ? void 0 : n.find((function (e) {
                                        return e.time === Math.round(r.seekTime)
                                    }));
                                    a && r.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(a.label, "<br>"))
                                }
                                r.showImageAtCurrentTime()
                            }
                        })), e(this, "endMove", (function () {
                            r.toggleThumbContainer(!1, !0)
                        })), e(this, "startScrubbing", (function (e) {
                            (q(e.button) || !1 === e.button || 0 === e.button) && (r.mouseDown = !0, r.player.media.duration && (r.toggleScrubbingContainer(!0), r.toggleThumbContainer(!1, !0), r.showImageAtCurrentTime()))
                        })), e(this, "endScrubbing", (function () {
                            r.mouseDown = !1, Math.ceil(r.lastTime) === Math.ceil(r.player.media.currentTime) ? r.toggleScrubbingContainer(!1) : Ee.call(r.player, r.player.media, "timeupdate", (function () {
                                r.mouseDown || r.toggleScrubbingContainer(!1)
                            }))
                        })), e(this, "listeners", (function () {
                            r.player.on("play", (function () {
                                r.toggleThumbContainer(!1, !0)
                            })), r.player.on("seeked", (function () {
                                r.toggleThumbContainer(!1)
                            })), r.player.on("timeupdate", (function () {
                                r.lastTime = r.player.media.currentTime
                            }))
                        })), e(this, "render", (function () {
                            r.elements.thumb.container = oe("div", {class: r.player.config.classNames.previewThumbnails.thumbContainer}), r.elements.thumb.imageContainer = oe("div", {class: r.player.config.classNames.previewThumbnails.imageContainer}), r.elements.thumb.container.appendChild(r.elements.thumb.imageContainer);
                            var e = oe("div", {class: r.player.config.classNames.previewThumbnails.timeContainer});
                            r.elements.thumb.time = oe("span", {}, "00:00"), e.appendChild(r.elements.thumb.time), r.elements.thumb.imageContainer.appendChild(e), Y(r.player.elements.progress) && r.player.elements.progress.appendChild(r.elements.thumb.container), r.elements.scrubbing.container = oe("div", {class: r.player.config.classNames.previewThumbnails.scrubbingContainer}), r.player.elements.wrapper.appendChild(r.elements.scrubbing.container)
                        })), e(this, "destroy", (function () {
                            r.elements.thumb.container && r.elements.thumb.container.remove(), r.elements.scrubbing.container && r.elements.scrubbing.container.remove()
                        })), e(this, "showImageAtCurrentTime", (function () {
                            r.mouseDown ? r.setScrubbingContainerSize() : r.setThumbContainerSizeAndPos();
                            var e = r.thumbnails[0].frames.findIndex((function (e) {
                                return r.seekTime >= e.startTime && r.seekTime <= e.endTime
                            })), t = e >= 0, n = 0;
                            r.mouseDown || r.toggleThumbContainer(t), t && (r.thumbnails.forEach((function (t, o) {
                                r.loadedImages.includes(t.frames[e].text) && (n = o)
                            })), e !== r.showingThumb && (r.showingThumb = e, r.loadImage(n)))
                        })), e(this, "loadImage", (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = r.showingThumb, n = r.thumbnails[e], o = n.urlPrefix, i = n.frames[t],
                                a = n.frames[t].text, s = o + a;
                            if (r.currentImageElement && r.currentImageElement.dataset.filename === a) r.showImage(r.currentImageElement, i, e, t, a, !1), r.currentImageElement.dataset.index = t, r.removeOldImages(r.currentImageElement); else {
                                r.loadingImage && r.usingSprites && (r.loadingImage.onload = null);
                                var l = new Image;
                                l.src = s, l.dataset.index = t, l.dataset.filename = a, r.showingThumbFilename = a, r.player.debug.log("Loading image: ".concat(s)), l.onload = function () {
                                    return r.showImage(l, i, e, t, a, !0)
                                }, r.loadingImage = l, r.removeOldImages(l)
                            }
                        })), e(this, "showImage", (function (e, t, n, o, i) {
                            var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                            r.player.debug.log("Showing thumb: ".concat(i, ". num: ").concat(o, ". qual: ").concat(n, ". newimg: ").concat(a)), r.setImageSizeAndOffset(e, t), a && (r.currentImageContainer.appendChild(e), r.currentImageElement = e, r.loadedImages.includes(i) || r.loadedImages.push(i)), r.preloadNearby(o, !0).then(r.preloadNearby(o, !1)).then(r.getHigherQuality(n, e, t, i))
                        })), e(this, "removeOldImages", (function (e) {
                            Array.from(r.currentImageContainer.children).forEach((function (t) {
                                if ("img" === t.tagName.toLowerCase()) {
                                    var n = r.usingSprites ? 500 : 1e3;
                                    if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                        t.dataset.deleting = !0;
                                        var o = r.currentImageContainer;
                                        setTimeout((function () {
                                            o.removeChild(t), r.player.debug.log("Removing thumb: ".concat(t.dataset.filename))
                                        }), n)
                                    }
                                }
                            }))
                        })), e(this, "preloadNearby", (function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return new Promise((function (n) {
                                setTimeout((function () {
                                    var o = r.thumbnails[0].frames[e].text;
                                    if (r.showingThumbFilename === o) {
                                        var i;
                                        i = t ? r.thumbnails[0].frames.slice(e) : r.thumbnails[0].frames.slice(0, e).reverse();
                                        var a = !1;
                                        i.forEach((function (e) {
                                            var t = e.text;
                                            if (t !== o && !r.loadedImages.includes(t)) {
                                                a = !0, r.player.debug.log("Preloading thumb filename: ".concat(t));
                                                var i = r.thumbnails[0].urlPrefix + t, s = new Image;
                                                s.src = i, s.onload = function () {
                                                    r.player.debug.log("Preloaded thumb filename: ".concat(t)), r.loadedImages.includes(t) || r.loadedImages.push(t), n()
                                                }
                                            }
                                        })), a || n()
                                    }
                                }), 300)
                            }))
                        })), e(this, "getHigherQuality", (function (e, t, n, o) {
                            if (e < r.thumbnails.length - 1) {
                                var i = t.naturalHeight;
                                r.usingSprites && (i = n.h), i < r.thumbContainerHeight && setTimeout((function () {
                                    r.showingThumbFilename === o && (r.player.debug.log("Showing higher quality thumb for: ".concat(o)), r.loadImage(e + 1))
                                }), 300)
                            }
                        })), e(this, "toggleThumbContainer", (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = r.player.config.classNames.previewThumbnails.thumbContainerShown;
                            r.elements.thumb.container.classList.toggle(n, e), !e && t && (r.showingThumb = null, r.showingThumbFilename = null)
                        })), e(this, "toggleScrubbingContainer", (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = r.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            r.elements.scrubbing.container.classList.toggle(t, e), e || (r.showingThumb = null, r.showingThumbFilename = null)
                        })), e(this, "determineContainerAutoSizing", (function () {
                            (r.elements.thumb.imageContainer.clientHeight > 20 || r.elements.thumb.imageContainer.clientWidth > 20) && (r.sizeSpecifiedInCSS = !0)
                        })), e(this, "setThumbContainerSizeAndPos", (function () {
                            var e = r.elements.thumb.imageContainer;
                            if (r.sizeSpecifiedInCSS) {
                                if (e.clientHeight > 20 && e.clientWidth < 20) {
                                    var t = Math.floor(e.clientHeight * r.thumbAspectRatio);
                                    e.style.width = "".concat(t, "px")
                                } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                                    var n = Math.floor(e.clientWidth / r.thumbAspectRatio);
                                    e.style.height = "".concat(n, "px")
                                }
                            } else {
                                var o = Math.floor(r.thumbContainerHeight * r.thumbAspectRatio);
                                e.style.height = "".concat(r.thumbContainerHeight, "px"), e.style.width = "".concat(o, "px")
                            }
                            r.setThumbContainerPos()
                        })), e(this, "setThumbContainerPos", (function () {
                            var e = r.player.elements.progress.getBoundingClientRect(),
                                t = r.player.elements.container.getBoundingClientRect(), n = r.elements.thumb.container,
                                o = t.left - e.left + 10, i = t.right - e.left - n.clientWidth - 10,
                                a = r.mousePosX - e.left - n.clientWidth / 2, s = yt(a, o, i);
                            n.style.left = "".concat(s, "px"), n.style.setProperty("--preview-arrow-offset", a - s + "px")
                        })), e(this, "setScrubbingContainerSize", (function () {
                            var e = wt(r.thumbAspectRatio, {
                                width: r.player.media.clientWidth,
                                height: r.player.media.clientHeight
                            }), t = e.width, n = e.height;
                            r.elements.scrubbing.container.style.width = "".concat(t, "px"), r.elements.scrubbing.container.style.height = "".concat(n, "px")
                        })), e(this, "setImageSizeAndOffset", (function (e, t) {
                            if (r.usingSprites) {
                                var n = r.thumbContainerHeight / t.h;
                                e.style.height = e.naturalHeight * n + "px", e.style.width = e.naturalWidth * n + "px", e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                            }
                        })), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                            thumb: {},
                            scrubbing: {}
                        }, this.load()
                    }

                    return u(t, [{
                        key: "enabled", get: function () {
                            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                        }
                    }, {
                        key: "currentImageContainer", get: function () {
                            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                        }
                    }, {
                        key: "usingSprites", get: function () {
                            return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                        }
                    }, {
                        key: "thumbAspectRatio", get: function () {
                            return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                        }
                    }, {
                        key: "thumbContainerHeight", get: function () {
                            return this.mouseDown ? wt(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                        }
                    }, {
                        key: "currentImageElement", get: function () {
                            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                        }, set: function (e) {
                            this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                        }
                    }]), t
                }(), Et = {
                    insertElements: function (e, t) {
                        var n = this;
                        z(t) ? ie(e, this.media, {src: t}) : F(t) && t.forEach((function (t) {
                            ie(e, n.media, t)
                        }))
                    }, change: function (e) {
                        var t = this;
                        ee(e, "sources.length") ? (qe.cancelRequests.call(this), this.destroy.call(this, (function () {
                            t.options.quality = [], ae(t.media), t.media = null, Y(t.elements.container) && t.elements.container.removeAttribute("class");
                            var n = e.sources, r = e.type, o = f(n, 1)[0], i = o.provider,
                                a = void 0 === i ? tt.html5 : i, s = o.src, l = "html5" === a ? r : "div",
                                c = "html5" === a ? {} : {src: s};
                            Object.assign(t, {
                                provider: a,
                                type: r,
                                supported: ye.check(r, a, t.config.playsinline),
                                media: oe(l, c)
                            }), t.elements.container.appendChild(t.media), U(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), $(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), st.addStyleHook.call(t), t.isHTML5 && Et.insertElements.call(t, "source", n), t.config.title = e.title, gt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && Et.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && st.build.call(t), t.isHTML5 && t.media.load(), $(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new xt(t))), t.fullscreen.update()
                        }), !0)) : this.debug.warn("Invalid source format")
                    }
                }, kt = function () {
                    function t(n, r) {
                        var o = this;
                        if (l(this, t), e(this, "play", (function () {
                            return H(o.media.play) ? (o.ads && o.ads.enabled && o.ads.managerPromise.then((function () {
                                return o.ads.play()
                            })).catch((function () {
                                return Ce(o.media.play())
                            })), o.media.play()) : null
                        })), e(this, "pause", (function () {
                            return o.playing && H(o.media.pause) ? o.media.pause() : null
                        })), e(this, "togglePlay", (function (e) {
                            return (U(e) ? e : !o.playing) ? o.play() : o.pause()
                        })), e(this, "stop", (function () {
                            o.isHTML5 ? (o.pause(), o.restart()) : H(o.media.stop) && o.media.stop()
                        })), e(this, "restart", (function () {
                            o.currentTime = 0
                        })), e(this, "rewind", (function (e) {
                            o.currentTime -= B(e) ? e : o.config.seekTime
                        })), e(this, "forward", (function (e) {
                            o.currentTime += B(e) ? e : o.config.seekTime
                        })), e(this, "increaseVolume", (function (e) {
                            var t = o.media.muted ? 0 : o.volume;
                            o.volume = t + (B(e) ? e : 0)
                        })), e(this, "decreaseVolume", (function (e) {
                            o.increaseVolume(-e)
                        })), e(this, "airplay", (function () {
                            ye.airplay && o.media.webkitShowPlaybackTargetPicker()
                        })), e(this, "toggleControls", (function (e) {
                            if (o.supported.ui && !o.isAudio) {
                                var t = pe(o.elements.container, o.config.classNames.hideControls),
                                    n = void 0 === e ? void 0 : !e,
                                    r = de(o.elements.container, o.config.classNames.hideControls, n);
                                if (r && F(o.config.controls) && o.config.controls.includes("settings") && !$(o.config.settings) && Ke.toggleMenu.call(o, !1), r !== t) {
                                    var i = r ? "controlshidden" : "controlsshown";
                                    ke.call(o, o.media, i)
                                }
                                return !r
                            }
                            return !1
                        })), e(this, "on", (function (e, t) {
                            we.call(o, o.elements.container, e, t)
                        })), e(this, "once", (function (e, t) {
                            Ee.call(o, o.elements.container, e, t)
                        })), e(this, "off", (function (e, t) {
                            xe(o.elements.container, e, t)
                        })), e(this, "destroy", (function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (o.ready) {
                                var n = function () {
                                    document.body.style.overflow = "", o.embed = null, t ? (Object.keys(o.elements).length && (ae(o.elements.buttons.play), ae(o.elements.captions), ae(o.elements.controls), ae(o.elements.wrapper), o.elements.buttons.play = null, o.elements.captions = null, o.elements.controls = null, o.elements.wrapper = null), H(e) && e()) : (Se.call(o), qe.cancelRequests.call(o), le(o.elements.original, o.elements.container), ke.call(o, o.elements.original, "destroyed", !0), H(e) && e.call(o.elements.original), o.ready = !1, setTimeout((function () {
                                        o.elements = null, o.media = null
                                    }), 200))
                                };
                                o.stop(), clearTimeout(o.timers.loading), clearTimeout(o.timers.controls), clearTimeout(o.timers.resized), o.isHTML5 ? (st.toggleNativeControls.call(o, !0), n()) : o.isYouTube ? (clearInterval(o.timers.buffering), clearInterval(o.timers.playing), null !== o.embed && H(o.embed.destroy) && o.embed.destroy(), n()) : o.isVimeo && (null !== o.embed && o.embed.unload().then(n), setTimeout(n, 200))
                            }
                        })), e(this, "supports", (function (e) {
                            return ye.mime.call(o, e)
                        })), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = ye.touch, this.media = n, z(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || V(this.media) || F(this.media)) && (this.media = this.media[0]), this.config = te({}, Ze, t.defaults, r || {}, function () {
                            try {
                                return JSON.parse(o.media.getAttribute("data-plyr-config"))
                            } catch (e) {
                                return {}
                            }
                        }()), this.elements = {
                            container: null,
                            fullscreen: null,
                            captions: null,
                            buttons: {},
                            display: {},
                            progress: {},
                            inputs: {},
                            settings: {popup: null, menu: null, panels: {}, buttons: {}}
                        }, this.captions = {
                            active: null,
                            currentTrack: -1,
                            meta: new WeakMap
                        }, this.fullscreen = {active: !1}, this.options = {
                            speed: [],
                            quality: []
                        }, this.debug = new ot(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ye), !q(this.media) && Y(this.media)) if (this.media.plyr) this.debug.warn("Target already setup"); else if (this.config.enabled) if (ye.check().api) {
                            var i = this.media.cloneNode(!0);
                            i.autoplay = !1, this.elements.original = i;
                            var a = this.media.tagName.toLowerCase(), s = null, c = null;
                            switch (a) {
                                case"div":
                                    if (s = this.media.querySelector("iframe"), Y(s)) {
                                        if (c = $e(s.getAttribute("src")), this.provider = function (e) {
                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? tt.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? tt.vimeo : null
                                        }(c.toString()), this.elements.container = this.media, this.media = s, this.elements.container.className = "", c.search.length) {
                                            var u = ["1", "true"];
                                            u.includes(c.searchParams.get("autoplay")) && (this.config.autoplay = !0), u.includes(c.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = u.includes(c.searchParams.get("playsinline")), this.config.youtube.hl = c.searchParams.get("hl")) : this.config.playsinline = !0
                                        }
                                    } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                    if ($(this.provider) || !Object.values(tt).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                    this.type = nt;
                                    break;
                                case"video":
                                case"audio":
                                    this.type = a, this.provider = tt.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                    break;
                                default:
                                    return void this.debug.error("Setup failed: unsupported type")
                            }
                            this.supported = ye.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new lt(this), this.storage = new Ve(this), this.media.plyr = this, Y(this.elements.container) || (this.elements.container = oe("div", {tabindex: 0}), ne(this.media, this.elements.container)), st.migrateStyles.call(this), st.addStyleHook.call(this), gt.setup.call(this), this.config.debug && we.call(this, this.elements.container, this.config.events.join(" "), (function (e) {
                                o.debug.log("event: ".concat(e.type))
                            })), this.fullscreen = new it(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && st.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new vt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function () {
                                return Ce(o.play())
                            })), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new xt(this))) : this.debug.error("Setup failed: no support")
                        } else this.debug.error("Setup failed: no support"); else this.debug.error("Setup failed: disabled by config"); else this.debug.error("Setup failed: no suitable element passed")
                    }

                    return u(t, [{
                        key: "isHTML5", get: function () {
                            return this.provider === tt.html5
                        }
                    }, {
                        key: "isEmbed", get: function () {
                            return this.isYouTube || this.isVimeo
                        }
                    }, {
                        key: "isYouTube", get: function () {
                            return this.provider === tt.youtube
                        }
                    }, {
                        key: "isVimeo", get: function () {
                            return this.provider === tt.vimeo
                        }
                    }, {
                        key: "isVideo", get: function () {
                            return this.type === nt
                        }
                    }, {
                        key: "isAudio", get: function () {
                            return "audio" === this.type
                        }
                    }, {
                        key: "playing", get: function () {
                            return Boolean(this.ready && !this.paused && !this.ended)
                        }
                    }, {
                        key: "paused", get: function () {
                            return Boolean(this.media.paused)
                        }
                    }, {
                        key: "stopped", get: function () {
                            return Boolean(this.paused && 0 === this.currentTime)
                        }
                    }, {
                        key: "ended", get: function () {
                            return Boolean(this.media.ended)
                        }
                    }, {
                        key: "currentTime", get: function () {
                            return Number(this.media.currentTime)
                        }, set: function (e) {
                            if (this.duration) {
                                var t = B(e) && e > 0;
                                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                            }
                        }
                    }, {
                        key: "buffered", get: function () {
                            var e = this.media.buffered;
                            return B(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                        }
                    }, {
                        key: "seeking", get: function () {
                            return Boolean(this.media.seeking)
                        }
                    }, {
                        key: "duration", get: function () {
                            var e = parseFloat(this.config.duration), t = (this.media || {}).duration,
                                n = B(t) && t !== 1 / 0 ? t : 0;
                            return e || n
                        }
                    }, {
                        key: "volume", get: function () {
                            return Number(this.media.volume)
                        }, set: function (e) {
                            var t = e;
                            z(t) && (t = Number(t)), B(t) || (t = this.storage.get("volume")), B(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !$(e) && this.muted && t > 0 && (this.muted = !1)
                        }
                    }, {
                        key: "muted", get: function () {
                            return Boolean(this.media.muted)
                        }, set: function (e) {
                            var t = e;
                            U(t) || (t = this.storage.get("muted")), U(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                        }
                    }, {
                        key: "hasAudio", get: function () {
                            return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                        }
                    }, {
                        key: "speed", get: function () {
                            return Number(this.media.playbackRate)
                        }, set: function (e) {
                            var t = this, n = null;
                            B(e) && (n = e), B(n) || (n = this.storage.get("speed")), B(n) || (n = this.config.speed.selected);
                            var r = this.minimumSpeed, o = this.maximumSpeed;
                            n = yt(n, r, o), this.config.speed.selected = n, setTimeout((function () {
                                t.media && (t.media.playbackRate = n)
                            }), 0)
                        }
                    }, {
                        key: "minimumSpeed", get: function () {
                            return this.isYouTube ? Math.min.apply(Math, s(this.options.speed)) : this.isVimeo ? .5 : .0625
                        }
                    }, {
                        key: "maximumSpeed", get: function () {
                            return this.isYouTube ? Math.max.apply(Math, s(this.options.speed)) : this.isVimeo ? 2 : 16
                        }
                    }, {
                        key: "quality", get: function () {
                            return this.media.quality
                        }, set: function (e) {
                            var t = this.config.quality, n = this.options.quality;
                            if (n.length) {
                                var r = [!$(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(B),
                                    o = !0;
                                if (!n.includes(r)) {
                                    var i = Oe(n, r);
                                    this.debug.warn("Unsupported quality option: ".concat(r, ", using ").concat(i, " instead")), r = i, o = !1
                                }
                                t.selected = r, this.media.quality = r, o && this.storage.set({quality: r})
                            }
                        }
                    }, {
                        key: "loop", get: function () {
                            return Boolean(this.media.loop)
                        }, set: function (e) {
                            var t = U(e) ? e : this.config.loop.active;
                            this.config.loop.active = t, this.media.loop = t
                        }
                    }, {
                        key: "source", get: function () {
                            return this.media.currentSrc
                        }, set: function (e) {
                            Et.change.call(this, e)
                        }
                    }, {
                        key: "download", get: function () {
                            var e = this.config.urls.download;
                            return K(e) ? e : this.source
                        }, set: function (e) {
                            K(e) && (this.config.urls.download = e, Ke.setDownloadUrl.call(this))
                        }
                    }, {
                        key: "poster", get: function () {
                            return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                        }, set: function (e) {
                            this.isVideo ? st.setPoster.call(this, e, !1).catch((function () {
                            })) : this.debug.warn("Poster can only be set for video")
                        }
                    }, {
                        key: "ratio", get: function () {
                            if (!this.isVideo) return null;
                            var e = Ne(Ie.call(this));
                            return F(e) ? e.join(":") : e
                        }, set: function (e) {
                            this.isVideo ? z(e) && De(e) ? (this.config.ratio = Ne(e), Le.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                        }
                    }, {
                        key: "autoplay", get: function () {
                            return Boolean(this.config.autoplay)
                        }, set: function (e) {
                            this.config.autoplay = U(e) ? e : this.config.autoplay
                        }
                    }, {
                        key: "toggleCaptions", value: function (e) {
                            Qe.toggle.call(this, e, !1)
                        }
                    }, {
                        key: "currentTrack", get: function () {
                            var e = this.captions, t = e.toggled, n = e.currentTrack;
                            return t ? n : -1
                        }, set: function (e) {
                            Qe.set.call(this, e, !1), Qe.setup.call(this)
                        }
                    }, {
                        key: "language", get: function () {
                            return (Qe.getCurrentTrack.call(this) || {}).language
                        }, set: function (e) {
                            Qe.setLanguage.call(this, e, !1)
                        }
                    }, {
                        key: "pip", get: function () {
                            return ye.pip ? $(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === et : null
                        }, set: function (e) {
                            if (ye.pip) {
                                var t = U(e) ? e : !this.pip;
                                H(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? et : "inline"), H(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                            }
                        }
                    }, {
                        key: "setPreviewThumbnails", value: function (e) {
                            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new xt(this))
                        }
                    }], [{
                        key: "supported", value: function (e, t, n) {
                            return ye.check(e, t, n)
                        }
                    }, {
                        key: "loadSprite", value: function (e, t) {
                            return We(e, t)
                        }
                    }, {
                        key: "setup", value: function (e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = null;
                            return z(e) ? r = Array.from(document.querySelectorAll(e)) : V(e) ? r = Array.from(e) : F(e) && (r = e.filter(Y)), $(r) ? null : r.map((function (e) {
                                return new t(e, n)
                            }))
                        }
                    }]), t
                }();
                return kt.defaults = (bt = Ze, JSON.parse(JSON.stringify(bt))), kt
            }, "object" == v(t) ? e.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = o))
        }, 644: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Children: function () {
                    return Ae
                }, Component: function () {
                    return y
                }, Fragment: function () {
                    return v
                }, PureComponent: function () {
                    return xe
                }, StrictMode: function () {
                    return ut
                }, Suspense: function () {
                    return Ne
                }, SuspenseList: function () {
                    return je
                }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: function () {
                    return tt
                }, cloneElement: function () {
                    return it
                }, createContext: function () {
                    return z
                }, createElement: function () {
                    return h
                }, createFactory: function () {
                    return rt
                }, createPortal: function () {
                    return ze
                }, createRef: function () {
                    return g
                }, default: function () {
                    return gt
                }, findDOMNode: function () {
                    return st
                }, flushSync: function () {
                    return ct
                }, forwardRef: function () {
                    return Te
                }, hydrate: function () {
                    return We
                }, isValidElement: function () {
                    return ot
                }, lazy: function () {
                    return Le
                }, memo: function () {
                    return Ee
                }, render: function () {
                    return Ye
                }, startTransition: function () {
                    return dt
                }, unmountComponentAtNode: function () {
                    return at
                }, unstable_batchedUpdates: function () {
                    return lt
                }, useCallback: function () {
                    return se
                }, useContext: function () {
                    return le
                }, useDebugValue: function () {
                    return ce
                }, useDeferredValue: function () {
                    return pt
                }, useEffect: function () {
                    return ne
                }, useErrorBoundary: function () {
                    return ue
                }, useId: function () {
                    return de
                }, useImperativeHandle: function () {
                    return ie
                }, useInsertionEffect: function () {
                    return ht
                }, useLayoutEffect: function () {
                    return re
                }, useMemo: function () {
                    return ae
                }, useReducer: function () {
                    return te
                }, useRef: function () {
                    return oe
                }, useState: function () {
                    return ee
                }, useSyncExternalStore: function () {
                    return mt
                }, useTransition: function () {
                    return ft
                }, version: function () {
                    return nt
                }
            });
            var r, o, i, a, s, l, c = {}, u = [],
                d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function p(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function f(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function h(e, t, n) {
                var o, i, a, s = {};
                for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : s[a] = t[a];
                if (arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps) for (a in e.defaultProps) void 0 === s[a] && (s[a] = e.defaultProps[a]);
                return m(e, s, o, i, null)
            }

            function m(e, t, n, r, a) {
                var s = {
                    type: e,
                    props: t,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == a ? ++i : a
                };
                return null == a && null != o.vnode && o.vnode(s), s
            }

            function g() {
                return {current: null}
            }

            function v(e) {
                return e.children
            }

            function y(e, t) {
                this.props = e, this.context = t
            }

            function b(e, t) {
                if (null == t) return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? b(e) : null
            }

            function _(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                    return _(e)
                }
            }

            function w(e) {
                (!e.__d && (e.__d = !0) && a.push(e) && !x.__r++ || s !== o.debounceRendering) && ((s = o.debounceRendering) || setTimeout)(x)
            }

            function x() {
                for (var e; x.__r = a.length;) e = a.sort((function (e, t) {
                    return e.__v.__b - t.__v.__b
                })), a = [], e.some((function (e) {
                    var t, n, r, o, i, a;
                    e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = p({}, o)).__v = o.__v + 1, M(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? b(o) : i, o.__h), D(n, o), o.__e != i && _(o)))
                }))
            }

            function E(e, t, n, r, o, i, a, s, l, d) {
                var p, f, h, g, y, _, w, x = r && r.__k || u, E = x.length;
                for (n.__k = [], p = 0; p < t.length; p++) if (null != (g = n.__k[p] = null == (g = t[p]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g || "bigint" == typeof g ? m(null, g, null, null, g) : Array.isArray(g) ? m(v, {children: g}, null, null, null) : g.__b > 0 ? m(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g)) {
                    if (g.__ = n, g.__b = n.__b + 1, null === (h = x[p]) || h && g.key == h.key && g.type === h.type) x[p] = void 0; else for (f = 0; f < E; f++) {
                        if ((h = x[f]) && g.key == h.key && g.type === h.type) {
                            x[f] = void 0;
                            break
                        }
                        h = null
                    }
                    M(e, g, h = h || c, o, i, a, s, l, d), y = g.__e, (f = g.ref) && h.ref != f && (w || (w = []), h.ref && w.push(h.ref, null, g), w.push(f, g.__c || y, g)), null != y ? (null == _ && (_ = y), "function" == typeof g.type && g.__k === h.__k ? g.__d = l = k(g, l, e) : l = T(e, g, h, x, y, l), "function" == typeof n.type && (n.__d = l)) : l && h.__e == l && l.parentNode != e && (l = b(h))
                }
                for (n.__e = _, p = E; p--;) null != x[p] && L(x[p], x[p]);
                if (w) for (p = 0; p < w.length; p++) I(w[p], w[++p], w[++p])
            }

            function k(e, t, n) {
                for (var r, o = e.__k, i = 0; o && i < o.length; i++) (r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? k(r, t, n) : T(n, r, r, o, r.__e, t));
                return t
            }

            function S(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
                    S(e, t)
                })) : t.push(e)), t
            }

            function T(e, t, n, r, o, i) {
                var a, s, l;
                if (void 0 !== t.__d) a = t.__d, t.__d = void 0; else if (null == n || o != i || null == o.parentNode) e:if (null == i || i.parentNode !== e) e.appendChild(o), a = null; else {
                    for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2) if (s == o) break e;
                    e.insertBefore(o, i), a = i
                }
                return void 0 !== a ? a : o.nextSibling
            }

            function C(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || d.test(t) ? n : n + "px"
            }

            function A(e, t, n, r, o) {
                var i;
                e:if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
                    if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || C(e.style, t, "");
                    if (n) for (t in n) r && n[t] === r[t] || C(e.style, t, n[t])
                } else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? P : O, i) : e.removeEventListener(t, i ? P : O, i); else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {
                    }
                    "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n))
                }
            }

            function O(e) {
                this.l[e.type + !1](o.event ? o.event(e) : e)
            }

            function P(e) {
                this.l[e.type + !0](o.event ? o.event(e) : e)
            }

            function M(e, t, n, r, i, a, s, l, c) {
                var u, d, f, h, m, g, b, _, w, x, k, S, T, C, A, O = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && (c = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]), (u = o.__b) && u(t);
                try {
                    e:if ("function" == typeof O) {
                        if (_ = t.props, w = (u = O.contextType) && r[u.__c], x = u ? w ? w.props.value : u.__ : r, n.__c ? b = (d = t.__c = n.__c).__ = d.__E : ("prototype" in O && O.prototype.render ? t.__c = d = new O(_, x) : (t.__c = d = new y(_, x), d.constructor = O, d.render = j), w && w.sub(d), d.props = _, d.state || (d.state = {}), d.context = x, d.__n = r, f = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != O.getDerivedStateFromProps && (d.__s == d.state && (d.__s = p({}, d.__s)), p(d.__s, O.getDerivedStateFromProps(_, d.__s))), h = d.props, m = d.state, f) null == O.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount); else {
                            if (null == O.getDerivedStateFromProps && _ !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, x), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, x) || t.__v === n.__v) {
                                for (d.props = _, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function (e) {
                                    e && (e.__ = t)
                                })), k = 0; k < d._sb.length; k++) d.__h.push(d._sb[k]);
                                d._sb = [], d.__h.length && s.push(d);
                                break e
                            }
                            null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, x), null != d.componentDidUpdate && d.__h.push((function () {
                                d.componentDidUpdate(h, m, g)
                            }))
                        }
                        if (d.context = x, d.props = _, d.__v = t, d.__P = e, S = o.__r, T = 0, "prototype" in O && O.prototype.render) {
                            for (d.state = d.__s, d.__d = !1, S && S(t), u = d.render(d.props, d.state, d.context), C = 0; C < d._sb.length; C++) d.__h.push(d._sb[C]);
                            d._sb = []
                        } else do {
                            d.__d = !1, S && S(t), u = d.render(d.props, d.state, d.context), d.state = d.__s
                        } while (d.__d && ++T < 25);
                        d.state = d.__s, null != d.getChildContext && (r = p(p({}, r), d.getChildContext())), f || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(h, m)), A = null != u && u.type === v && null == u.key ? u.props.children : u, E(e, Array.isArray(A) ? A : [A], t, n, r, i, a, s, l, c), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), b && (d.__E = d.__ = null), d.__e = !1
                    } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, r, i, a, s, c);
                    (u = o.diffed) && u(t)
                } catch (e) {
                    t.__v = null, (c || null != a) && (t.__e = l, t.__h = !!c, a[a.indexOf(l)] = null), o.__e(e, t, n)
                }
            }

            function D(e, t) {
                o.__c && o.__c(t, e), e.some((function (t) {
                    try {
                        e = t.__h, t.__h = [], e.some((function (e) {
                            e.call(t)
                        }))
                    } catch (e) {
                        o.__e(e, t.__v)
                    }
                }))
            }

            function N(e, t, n, o, i, a, s, l) {
                var u, d, p, h = n.props, m = t.props, g = t.type, v = 0;
                if ("svg" === g && (i = !0), null != a) for (; v < a.length; v++) if ((u = a[v]) && "setAttribute" in u == !!g && (g ? u.localName === g : 3 === u.nodeType)) {
                    e = u, a[v] = null;
                    break
                }
                if (null == e) {
                    if (null === g) return document.createTextNode(m);
                    e = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), a = null, l = !1
                }
                if (null === g) h === m || l && e.data === m || (e.data = m); else {
                    if (a = a && r.call(e.childNodes), d = (h = n.props || c).dangerouslySetInnerHTML, p = m.dangerouslySetInnerHTML, !l) {
                        if (null != a) for (h = {}, v = 0; v < e.attributes.length; v++) h[e.attributes[v].name] = e.attributes[v].value;
                        (p || d) && (p && (d && p.__html == d.__html || p.__html === e.innerHTML) || (e.innerHTML = p && p.__html || ""))
                    }
                    if (function (e, t, n, r, o) {
                        var i;
                        for (i in n) "children" === i || "key" === i || i in t || A(e, i, null, n[i], r);
                        for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || A(e, i, t[i], n[i], r)
                    }(e, m, h, i, l), p) t.__k = []; else if (v = t.props.children, E(e, Array.isArray(v) ? v : [v], t, n, o, i && "foreignObject" !== g, a, s, a ? a[0] : n.__k && b(n, 0), l), null != a) for (v = a.length; v--;) null != a[v] && f(a[v]);
                    l || ("value" in m && void 0 !== (v = m.value) && (v !== e.value || "progress" === g && !v || "option" === g && v !== h.value) && A(e, "value", v, h.value, !1), "checked" in m && void 0 !== (v = m.checked) && v !== e.checked && A(e, "checked", v, h.checked, !1))
                }
                return e
            }

            function I(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    o.__e(e, n)
                }
            }

            function L(e, t, n) {
                var r, i;
                if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || I(r, null, t)), null != (r = e.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (e) {
                        o.__e(e, t)
                    }
                    r.base = r.__P = null, e.__c = void 0
                }
                if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && L(r[i], t, n || "function" != typeof e.type);
                n || null == e.__e || f(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function j(e, t, n) {
                return this.constructor(e, n)
            }

            function q(e, t, n) {
                var i, a, s;
                o.__ && o.__(e, t), a = (i = "function" == typeof n) ? null : n && n.__k || t.__k, s = [], M(t, e = (!i && n || t).__k = h(v, null, [e]), a || c, c, void 0 !== t.ownerSVGElement, !i && n ? [n] : a ? null : t.firstChild ? r.call(t.childNodes) : null, s, !i && n ? n : a ? a.__e : t.firstChild, i), D(s, e)
            }

            function R(e, t) {
                q(e, t, R)
            }

            function B(e, t, n) {
                var o, i, a, s = p({}, e.props);
                for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : s[a] = t[a];
                return arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : n), m(e.type, s, o || e.key, i || e.ref, null)
            }

            function z(e, t) {
                var n = {
                    __c: t = "__cC" + l++, __: e, Consumer: function (e, t) {
                        return e.children(t)
                    }, Provider: function (e) {
                        var n, r;
                        return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
                            return r
                        }, this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && n.some(w)
                        }, this.sub = function (e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                n.splice(n.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return n.Provider.__ = n.Consumer.contextType = n
            }

            r = u.slice, o = {
                __e: function (e, t, n, r) {
                    for (var o, i, a; t = t.__;) if ((o = t.__c) && !o.__) try {
                        if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), a = o.__d), a) return o.__E = o
                    } catch (t) {
                        e = t
                    }
                    throw e
                }
            }, i = 0, y.prototype.setState = function (e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(p({}, n), this.props)), e && p(n, e), null != e && this.__v && (t && this._sb.push(t), w(this))
            }, y.prototype.forceUpdate = function (e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), w(this))
            }, y.prototype.render = v, a = [], x.__r = 0, l = 0;
            var U, H, F, V, Y = 0, W = [], G = [], X = o.__b, K = o.__r, $ = o.diffed, J = o.__c, Q = o.unmount;

            function Z(e, t) {
                o.__h && o.__h(H, e, Y || t), Y = 0;
                var n = H.__H || (H.__H = {__: [], __h: []});
                return e >= n.__.length && n.__.push({__V: G}), n.__[e]
            }

            function ee(e) {
                return Y = 1, te(ye, e)
            }

            function te(e, t, n) {
                var r = Z(U++, 2);
                if (r.t = e, !r.__c && (r.__ = [n ? n(t) : ye(void 0, t), function (e) {
                    var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
                    t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
                }], r.__c = H, !H.u)) {
                    H.u = !0;
                    var o = H.shouldComponentUpdate;
                    H.shouldComponentUpdate = function (e, t, n) {
                        if (!r.__c.__H) return !0;
                        var i = r.__c.__H.__.filter((function (e) {
                            return e.__c
                        }));
                        if (i.every((function (e) {
                            return !e.__N
                        }))) return !o || o.call(this, e, t, n);
                        var a = !1;
                        return i.forEach((function (e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (a = !0)
                            }
                        })), !(!a && r.__c.props === e) && (!o || o.call(this, e, t, n))
                    }
                }
                return r.__N || r.__
            }

            function ne(e, t) {
                var n = Z(U++, 3);
                !o.__s && ve(n.__H, t) && (n.__ = e, n.i = t, H.__H.__h.push(n))
            }

            function re(e, t) {
                var n = Z(U++, 4);
                !o.__s && ve(n.__H, t) && (n.__ = e, n.i = t, H.__h.push(n))
            }

            function oe(e) {
                return Y = 5, ae((function () {
                    return {current: e}
                }), [])
            }

            function ie(e, t, n) {
                Y = 6, re((function () {
                    return "function" == typeof e ? (e(t()), function () {
                        return e(null)
                    }) : e ? (e.current = t(), function () {
                        return e.current = null
                    }) : void 0
                }), null == n ? n : n.concat(e))
            }

            function ae(e, t) {
                var n = Z(U++, 7);
                return ve(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
            }

            function se(e, t) {
                return Y = 8, ae((function () {
                    return e
                }), t)
            }

            function le(e) {
                var t = H.context[e.__c], n = Z(U++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(H)), t.props.value) : e.__
            }

            function ce(e, t) {
                o.useDebugValue && o.useDebugValue(t ? t(e) : e)
            }

            function ue(e) {
                var t = Z(U++, 10), n = ee();
                return t.__ = e, H.componentDidCatch || (H.componentDidCatch = function (e, r) {
                    t.__ && t.__(e, r), n[1](e)
                }), [n[0], function () {
                    n[1](void 0)
                }]
            }

            function de() {
                var e = Z(U++, 11);
                return e.__ || (e.__ = "P" + function (e) {
                    for (var t = 0, n = e.length; n > 0;) t = (t << 5) - t + e.charCodeAt(--n) | 0;
                    return t
                }(H.__v.__m) + U), e.__
            }

            function pe() {
                for (var e; e = W.shift();) if (e.__P && e.__H) try {
                    e.__H.__h.forEach(me), e.__H.__h.forEach(ge), e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [], o.__e(t, e.__v)
                }
            }

            o.__b = function (e) {
                "function" != typeof e.type || e.__m || null === e.__ ? e.__m || (e.__m = e.__ && e.__.__m ? e.__.__m : "") : e.__m = (e.__ && e.__.__m ? e.__.__m : "") + (e.__ && e.__.__k ? e.__.__k.indexOf(e) : 0), H = null, X && X(e)
            }, o.__r = function (e) {
                K && K(e), U = 0;
                var t = (H = e.__c).__H;
                t && (F === H ? (t.__h = [], H.__h = [], t.__.forEach((function (e) {
                    e.__N && (e.__ = e.__N), e.__V = G, e.__N = e.i = void 0
                }))) : (t.__h.forEach(me), t.__h.forEach(ge), t.__h = [])), F = H
            }, o.diffed = function (e) {
                $ && $(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== W.push(t) && V === o.requestAnimationFrame || ((V = o.requestAnimationFrame) || he)(pe)), t.__H.__.forEach((function (e) {
                    e.i && (e.__H = e.i), e.__V !== G && (e.__ = e.__V), e.i = void 0, e.__V = G
                }))), F = H = null
            }, o.__c = function (e, t) {
                t.some((function (e) {
                    try {
                        e.__h.forEach(me), e.__h = e.__h.filter((function (e) {
                            return !e.__ || ge(e)
                        }))
                    } catch (n) {
                        t.some((function (e) {
                            e.__h && (e.__h = [])
                        })), t = [], o.__e(n, e.__v)
                    }
                })), J && J(e, t)
            }, o.unmount = function (e) {
                Q && Q(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach((function (e) {
                    try {
                        me(e)
                    } catch (e) {
                        t = e
                    }
                })), n.__H = void 0, t && o.__e(t, n.__v))
            };
            var fe = "function" == typeof requestAnimationFrame;

            function he(e) {
                var t, n = function () {
                    clearTimeout(r), fe && cancelAnimationFrame(t), setTimeout(e)
                }, r = setTimeout(n, 100);
                fe && (t = requestAnimationFrame(n))
            }

            function me(e) {
                var t = H, n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), H = t
            }

            function ge(e) {
                var t = H;
                e.__c = e.__(), H = t
            }

            function ve(e, t) {
                return !e || e.length !== t.length || t.some((function (t, n) {
                    return t !== e[n]
                }))
            }

            function ye(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function be(e) {
                return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, be(e)
            }

            function _e(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function we(e, t) {
                for (var n in e) if ("__source" !== n && !(n in t)) return !0;
                for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
                return !1
            }

            function xe(e) {
                this.props = e
            }

            function Ee(e, t) {
                function n(e) {
                    var n = this.props.ref, r = n == e.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : we(this.props, e)
                }

                function r(t) {
                    return this.shouldComponentUpdate = n, h(e, t)
                }

                return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
            }

            (xe.prototype = new y).isPureReactComponent = !0, xe.prototype.shouldComponentUpdate = function (e, t) {
                return we(this.props, e) || we(this.state, t)
            };
            var ke = o.__b;
            o.__b = function (e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ke && ke(e)
            };
            var Se = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function Te(e) {
                function t(t) {
                    var n = _e({}, t);
                    return delete n.ref, e(n, t.ref || null)
                }

                return t.$$typeof = Se, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
            }

            var Ce = function (e, t) {
                return null == e ? null : S(S(e).map(t))
            }, Ae = {
                map: Ce, forEach: Ce, count: function (e) {
                    return e ? S(e).length : 0
                }, only: function (e) {
                    var t = S(e);
                    if (1 !== t.length) throw"Children.only";
                    return t[0]
                }, toArray: S
            }, Oe = o.__e;
            o.__e = function (e, t, n, r) {
                if (e.then) for (var o, i = t; i = i.__;) if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
                Oe(e, t, n, r)
            };
            var Pe = o.unmount;

            function Me(e, t, n) {
                return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function (e) {
                    "function" == typeof e.__c && e.__c()
                })), e.__c.__H = null), null != (e = _e({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map((function (e) {
                    return Me(e, t, n)
                }))), e
            }

            function De(e, t, n) {
                return e && (e.__v = null, e.__k = e.__k && e.__k.map((function (e) {
                    return De(e, t, n)
                })), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
            }

            function Ne() {
                this.__u = 0, this.t = null, this.__b = null
            }

            function Ie(e) {
                var t = e.__.__c;
                return t && t.__a && t.__a(e)
            }

            function Le(e) {
                var t, n, r;

                function o(o) {
                    if (t || (t = e()).then((function (e) {
                        n = e.default || e
                    }), (function (e) {
                        r = e
                    })), r) throw r;
                    if (!n) throw t;
                    return h(n, o)
                }

                return o.displayName = "Lazy", o.__f = !0, o
            }

            function je() {
                this.u = null, this.o = null
            }

            o.unmount = function (e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Pe && Pe(e)
            }, (Ne.prototype = new y).__c = function (e, t) {
                var n = t.__c, r = this;
                null == r.t && (r.t = []), r.t.push(n);
                var o = Ie(r.__v), i = !1, a = function () {
                    i || (i = !0, n.__R = null, o ? o(s) : s())
                };
                n.__R = a;
                var s = function () {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var e = r.state.__a;
                            r.__v.__k[0] = De(e, e.__c.__P, e.__c.__O)
                        }
                        var t;
                        for (r.setState({__a: r.__b = null}); t = r.t.pop();) t.forceUpdate()
                    }
                }, l = !0 === t.__h;
                r.__u++ || l || r.setState({__a: r.__b = r.__v.__k[0]}), e.then(a, a)
            }, Ne.prototype.componentWillUnmount = function () {
                this.t = []
            }, Ne.prototype.render = function (e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"), r = this.__v.__k[0].__c;
                        this.__v.__k[0] = Me(this.__b, n, r.__O = r.__P)
                    }
                    this.__b = null
                }
                var o = t.__a && h(v, null, e.fallback);
                return o && (o.__h = null), [h(v, null, t.__a ? null : e.children), o]
            };
            var qe = function (e, t, n) {
                if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
                    for (; n.length > 3;) n.pop()();
                    if (n[1] < n[0]) break;
                    e.u = n = n[2]
                }
            };

            function Re(e) {
                return this.getChildContext = function () {
                    return e.context
                }, e.children
            }

            function Be(e) {
                var t = this, n = e.i;
                t.componentWillUnmount = function () {
                    q(null, t.l), t.l = null, t.i = null
                }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    appendChild: function (e) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    insertBefore: function (e, n) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    removeChild: function (e) {
                        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
                    }
                }), q(h(Re, {context: t.context}, e.__v), t.l)) : t.l && t.componentWillUnmount()
            }

            function ze(e, t) {
                var n = h(Be, {__v: e, i: t});
                return n.containerInfo = t, n
            }

            (je.prototype = new y).__a = function (e) {
                var t = this, n = Ie(t.__v), r = t.o.get(e);
                return r[0]++, function (o) {
                    var i = function () {
                        t.props.revealOrder ? (r.push(o), qe(t, e, r)) : o()
                    };
                    n ? n(i) : i()
                }
            }, je.prototype.render = function (e) {
                this.u = null, this.o = new Map;
                var t = S(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
                return e.children
            }, je.prototype.componentDidUpdate = je.prototype.componentDidMount = function () {
                var e = this;
                this.o.forEach((function (t, n) {
                    qe(e, n, t)
                }))
            };
            var Ue = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                He = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                Fe = "undefined" != typeof document, Ve = function (e) {
                    return ("undefined" != typeof Symbol && "symbol" == be(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e)
                };

            function Ye(e, t, n) {
                return null == t.__k && (t.textContent = ""), q(e, t), "function" == typeof n && n(), e ? e.__c : null
            }

            function We(e, t, n) {
                return R(e, t), "function" == typeof n && n(), e ? e.__c : null
            }

            y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
                Object.defineProperty(y.prototype, e, {
                    configurable: !0, get: function () {
                        return this["UNSAFE_" + e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {configurable: !0, writable: !0, value: t})
                    }
                })
            }));
            var Ge = o.event;

            function Xe() {
            }

            function Ke() {
                return this.cancelBubble
            }

            function $e() {
                return this.defaultPrevented
            }

            o.event = function (e) {
                return Ge && (e = Ge(e)), e.persist = Xe, e.isPropagationStopped = Ke, e.isDefaultPrevented = $e, e.nativeEvent = e
            };
            var Je, Qe = {
                configurable: !0, get: function () {
                    return this.class
                }
            }, Ze = o.vnode;
            o.vnode = function (e) {
                var t = e.type, n = e.props, r = n;
                if ("string" == typeof t) {
                    var o = -1 === t.indexOf("-");
                    for (var i in r = {}, n) {
                        var a = n[i];
                        Fe && "children" === i && "noscript" === t || "value" === i && "defaultValue" in n && null == a || ("defaultValue" === i && "value" in n && null == n.value ? i = "value" : "download" === i && !0 === a ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Ve(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && He.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === a && (a = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), r[i] && (i = "oninputCapture")), r[i] = a)
                    }
                    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = S(n.children).forEach((function (e) {
                        e.props.selected = -1 != r.value.indexOf(e.props.value)
                    }))), "select" == t && null != r.defaultValue && (r.value = S(n.children).forEach((function (e) {
                        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
                    }))), e.props = r, n.class != n.className && (Qe.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", Qe))
                }
                e.$$typeof = Ue, Ze && Ze(e)
            };
            var et = o.__r;
            o.__r = function (e) {
                et && et(e), Je = e.__c
            };
            var tt = {
                ReactCurrentDispatcher: {
                    current: {
                        readContext: function (e) {
                            return Je.__n[e.__c].props.value
                        }
                    }
                }
            }, nt = "17.0.2";

            function rt(e) {
                return h.bind(null, e)
            }

            function ot(e) {
                return !!e && e.$$typeof === Ue
            }

            function it(e) {
                return ot(e) ? B.apply(null, arguments) : e
            }

            function at(e) {
                return !!e.__k && (q(null, e), !0)
            }

            function st(e) {
                return e && (e.base || 1 === e.nodeType && e) || null
            }

            var lt = function (e, t) {
                return e(t)
            }, ct = function (e, t) {
                return e(t)
            }, ut = v;

            function dt(e) {
                e()
            }

            function pt(e) {
                return e
            }

            function ft() {
                return [!1, dt]
            }

            var ht = re;

            function mt(e, t) {
                var n = t(), r = ee({h: {__: n, v: t}}), o = r[0].h, i = r[1];
                return re((function () {
                    o.__ = n, o.v = t, o.__ !== t() && i({h: o})
                }), [e, n, t]), ne((function () {
                    return o.__ !== o.v() && i({h: o}), e((function () {
                        o.__ !== o.v() && i({h: o})
                    }))
                }), [e]), n
            }

            var gt = {
                useState: ee,
                useId: de,
                useReducer: te,
                useEffect: ne,
                useLayoutEffect: re,
                useInsertionEffect: re,
                useTransition: ft,
                useDeferredValue: pt,
                useSyncExternalStore: mt,
                startTransition: dt,
                useRef: oe,
                useImperativeHandle: ie,
                useMemo: ae,
                useCallback: se,
                useContext: le,
                useDebugValue: ce,
                version: "17.0.2",
                Children: Ae,
                render: Ye,
                hydrate: We,
                unmountComponentAtNode: at,
                createPortal: ze,
                createElement: h,
                createContext: z,
                createFactory: rt,
                cloneElement: it,
                createRef: g,
                Fragment: v,
                isValidElement: ot,
                findDOMNode: st,
                Component: y,
                PureComponent: xe,
                memo: Ee,
                forwardRef: Te,
                flushSync: ct,
                unstable_batchedUpdates: lt,
                StrictMode: v,
                Suspense: Ne,
                SuspenseList: je,
                lazy: Le,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: tt
            }
        }, 4608: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.decodeEntities,
                    i = void 0 === n || n, a = t.transform, s = t.preprocessNodes, l = void 0 === s ? function (e) {
                        return e
                    } : s, c = l(r.default.parseDOM(e, {decodeEntities: i}));
                return (0, o.default)(c, a)
            };
            var r = i(n(3397)), o = i(n(6712));

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, 9998: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, n) {
                return o.default[e.type](e, t, n)
            };
            var r, o = (r = n(2474)) && r.__esModule ? r : {default: r}
        }, 4077: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = ["allowfullScreen", "async", "autoplay", "capture", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "loop", "multiple", "muted", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "scoped", "seamless", "selected", "itemscope"]
        }, 2022: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
                accept: "accept",
                "accept-charset": "acceptCharset",
                accesskey: "accessKey",
                action: "action",
                allowfullscreen: "allowFullScreen",
                allowtransparency: "allowTransparency",
                alt: "alt",
                as: "as",
                async: "async",
                autocomplete: "autoComplete",
                autoplay: "autoPlay",
                capture: "capture",
                cellpadding: "cellPadding",
                cellspacing: "cellSpacing",
                charset: "charSet",
                challenge: "challenge",
                checked: "checked",
                cite: "cite",
                classid: "classID",
                class: "className",
                cols: "cols",
                colspan: "colSpan",
                content: "content",
                contenteditable: "contentEditable",
                contextmenu: "contextMenu",
                controls: "controls",
                controlsList: "controlsList",
                coords: "coords",
                crossorigin: "crossOrigin",
                data: "data",
                datetime: "dateTime",
                default: "default",
                defer: "defer",
                dir: "dir",
                disabled: "disabled",
                download: "download",
                draggable: "draggable",
                enctype: "encType",
                form: "form",
                formaction: "formAction",
                formenctype: "formEncType",
                formmethod: "formMethod",
                formnovalidate: "formNoValidate",
                formtarget: "formTarget",
                frameborder: "frameBorder",
                headers: "headers",
                height: "height",
                hidden: "hidden",
                high: "high",
                href: "href",
                hreflang: "hrefLang",
                for: "htmlFor",
                "http-equiv": "httpEquiv",
                icon: "icon",
                id: "id",
                inputmode: "inputMode",
                integrity: "integrity",
                is: "is",
                keyparams: "keyParams",
                keytype: "keyType",
                kind: "kind",
                label: "label",
                lang: "lang",
                list: "list",
                loop: "loop",
                low: "low",
                manifest: "manifest",
                marginheight: "marginHeight",
                marginwidth: "marginWidth",
                max: "max",
                maxlength: "maxLength",
                media: "media",
                mediagroup: "mediaGroup",
                method: "method",
                min: "min",
                minlength: "minLength",
                multiple: "multiple",
                muted: "muted",
                name: "name",
                nonce: "nonce",
                novalidate: "noValidate",
                open: "open",
                optimum: "optimum",
                pattern: "pattern",
                placeholder: "placeholder",
                playsinline: "playsInline",
                poster: "poster",
                preload: "preload",
                profile: "profile",
                radiogroup: "radioGroup",
                readonly: "readOnly",
                referrerpolicy: "referrerPolicy",
                rel: "rel",
                required: "required",
                reversed: "reversed",
                role: "role",
                rows: "rows",
                rowspan: "rowSpan",
                sandbox: "sandbox",
                scope: "scope",
                scoped: "scoped",
                scrolling: "scrolling",
                seamless: "seamless",
                selected: "selected",
                shape: "shape",
                size: "size",
                sizes: "sizes",
                slot: "slot",
                span: "span",
                spellcheck: "spellCheck",
                src: "src",
                srcdoc: "srcDoc",
                srclang: "srcLang",
                srcset: "srcSet",
                start: "start",
                step: "step",
                style: "style",
                summary: "summary",
                tabindex: "tabIndex",
                target: "target",
                title: "title",
                type: "type",
                usemap: "useMap",
                value: "value",
                width: "width",
                wmode: "wmode",
                wrap: "wrap",
                about: "about",
                datatype: "datatype",
                inlist: "inlist",
                prefix: "prefix",
                property: "property",
                resource: "resource",
                typeof: "typeof",
                vocab: "vocab",
                autocapitalize: "autoCapitalize",
                autocorrect: "autoCorrect",
                autosave: "autoSave",
                color: "color",
                itemprop: "itemProp",
                itemscope: "itemScope",
                itemtype: "itemType",
                itemid: "itemID",
                itemref: "itemRef",
                results: "results",
                security: "security",
                unselectable: "unselectable"
            }
        }, 6133: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]
        }, 8765: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
                var n = void 0;
                e.children.length > 0 && (n = e.children[0].data);
                var i = (0, o.default)(e.attribs, t);
                return r.default.createElement("style", i, n)
            };
            var r = i(n(644)), o = i(n(2581));

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, 3572: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t, n) {
                var l = e.name;
                if (!(0, s.default)(l)) return null;
                var c = (0, i.default)(e.attribs, t), u = null;
                return -1 === a.default.indexOf(l) && (u = (0, o.default)(e.children, n)), r.default.createElement(l, c, u)
            };
            var r = l(n(644)), o = l(n(6712)), i = l(n(2581)), a = l(n(6133)), s = l(n(3805));

            function l(e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, 343: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                return e.data
            }
        }, 3051: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
                return null
            }
        }, 2474: function (e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {value: !0});
            var o = n(3397), i = c(n(343)), a = c(n(3572)), s = c(n(8765)), l = c(n(3051));

            function c(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            t.default = (u(r = {}, o.ElementType.Text, i.default), u(r, o.ElementType.Tag, a.default), u(r, o.ElementType.Style, s.default), u(r, o.ElementType.Directive, l.default), u(r, o.ElementType.Comment, l.default), u(r, o.ElementType.Script, l.default), u(r, o.ElementType.CDATA, l.default), u(r, o.ElementType.Doctype, l.default), r)
        }, 9318: function (e, t, n) {
            "use strict";
            n(6712), n(9998), n(3397);
            var r, o = (r = n(4608)) && r.__esModule ? r : {default: r};
            t.ZP = o.default
        }, 6712: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e, t) {
                return e.filter((function (e) {
                    return !(0, r.default)(e)
                })).map((function (e, n) {
                    var r = void 0;
                    return "function" != typeof t || null !== (r = t(e, n)) && !r ? (0, o.default)(e, n, t) : r
                }))
            };
            var r = i(n(5892)), o = i(n(9998));

            function i(e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, 2581: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = function (e, t) {
                var n = r({}, (0, o.default)(e), {key: t});
                return "string" == typeof n.style || n.style instanceof String ? n.style = (0, i.default)(n.style) : delete n.style, n
            };
            var o = a(n(6050)), i = a(n(2240));

            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, 6050: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                return Object.keys(e).filter((function (e) {
                    return (0, i.default)(e)
                })).reduce((function (t, n) {
                    var i = n.toLowerCase(), a = o.default[i] || i;
                    return t[a] = function (e, t) {
                        return r.default.map((function (e) {
                            return e.toLowerCase()
                        })).indexOf(e.toLowerCase()) >= 0 && (t = e), t
                    }(a, e[n]), t
                }), {})
            };
            var r = a(n(4077)), o = a(n(2022)), i = a(n(3805));

            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }
        }, 2240: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            };
            t.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "" === e ? {} : e.split(";").reduce((function (e, t) {
                    var r = t.split(/^([^:]+):/).filter((function (e, t) {
                        return t > 0
                    })).map((function (e) {
                        return e.trim().toLowerCase()
                    })), o = n(r, 2), i = o[0], a = o[1];
                    return void 0 === a || (e[i = i.replace(/^-ms-/, "ms-").replace(/-(.)/g, (function (e, t) {
                        return t.toUpperCase()
                    }))] = a), e
                }), {})
            }
        }, 5892: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                return "text" === e.type && /\r?\n/.test(e.data) && "" === e.data.trim()
            }
        }, 3805: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = function (e) {
                return r.hasOwnProperty(e) || (r[e] = n.test(e)), r[e]
            };
            var n = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, r = {}
        }, 6606: function (e, t, n) {
            var r = n(8382), o = r.Buffer;

            function i(e, t) {
                for (var n in e) t[n] = e[n]
            }

            function a(e, t, n) {
                return o(e, t, n)
            }

            o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = a), a.prototype = Object.create(o.prototype), i(o, a), a.from = function (e, t, n) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return o(e, t, n)
            }, a.alloc = function (e, t, n) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var r = o(e);
                return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
            }, a.allocUnsafe = function (e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return o(e)
            }, a.allocUnsafeSlow = function (e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return r.SlowBuffer(e)
            }
        }, 1989: function (e, t, n) {
            "use strict";
            var r = n(6606).Buffer, o = r.isEncoding || function (e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                    case"raw":
                        return !0;
                    default:
                        return !1
                }
            };

            function i(e) {
                var t;
                switch (this.encoding = function (e) {
                    var t = function (e) {
                        if (!e) return "utf8";
                        for (var t; ;) switch (e) {
                            case"utf8":
                            case"utf-8":
                                return "utf8";
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return "utf16le";
                            case"latin1":
                            case"binary":
                                return "latin1";
                            case"base64":
                            case"ascii":
                            case"hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                        }
                    }(e);
                    if ("string" != typeof t && (r.isEncoding === o || !o(e))) throw new Error("Unknown encoding: " + e);
                    return t || e
                }(e), this.encoding) {
                    case"utf16le":
                        this.text = l, this.end = c, t = 4;
                        break;
                    case"utf8":
                        this.fillLast = s, t = 4;
                        break;
                    case"base64":
                        this.text = u, this.end = d, t = 3;
                        break;
                    default:
                        return this.write = p, void (this.end = f)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
            }

            function a(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }

            function s(e) {
                var t = this.lastTotal - this.lastNeed, n = function (e, t, n) {
                    if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                    if (e.lastNeed > 1 && t.length > 1) {
                        if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                        if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                    }
                }(this, e);
                return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length))
            }

            function l(e, t) {
                if ((e.length - t) % 2 == 0) {
                    var n = e.toString("utf16le", t);
                    if (n) {
                        var r = n.charCodeAt(n.length - 1);
                        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                    }
                    return n
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }

            function c(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var n = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, n)
                }
                return t
            }

            function u(e, t) {
                var n = (e.length - t) % 3;
                return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
            }

            function d(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function p(e) {
                return e.toString(this.encoding)
            }

            function f(e) {
                return e && e.length ? this.write(e) : ""
            }

            t.s = i, i.prototype.write = function (e) {
                if (0 === e.length) return "";
                var t, n;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    n = this.lastNeed, this.lastNeed = 0
                } else n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }, i.prototype.end = function (e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }, i.prototype.text = function (e, t) {
                var n = function (e, t, n) {
                    var r = t.length - 1;
                    if (r < n) return 0;
                    var o = a(t[r]);
                    return o >= 0 ? (o > 0 && (e.lastNeed = o - 1), o) : --r < n || -2 === o ? 0 : (o = a(t[r])) >= 0 ? (o > 0 && (e.lastNeed = o - 2), o) : --r < n || -2 === o ? 0 : (o = a(t[r])) >= 0 ? (o > 0 && (2 === o ? o = 0 : e.lastNeed = o - 3), o) : 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = n;
                var r = e.length - (n - this.lastNeed);
                return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
            }, i.prototype.fillLast = function (e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        }, 7594: function (e, t, n) {
            "use strict";
            var r = n(659), o = n.n(r), i = n(9483), a = n.n(i)()(o());
            a.push([e.id, '@charset "UTF-8";@keyframes plyr-progress{to{background-position:25px 0;background-position:var(--plyr-progress-loading-size,25px) 0}}@keyframes plyr-popup{0%{opacity:.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes plyr-fade-in{0%{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;direction:ltr;display:flex;flex-direction:column;font-family:inherit;font-family:var(--plyr-font-family,inherit);font-variant-numeric:tabular-nums;font-weight:400;font-weight:var(--plyr-font-weight-regular,400);line-height:1.7;line-height:var(--plyr-line-height,1.7);max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow .3s ease;z-index:0}.plyr audio,.plyr iframe,.plyr video{display:block;height:100%;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui :after,.plyr--full-ui :before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:#4a5464;background:var(--plyr-badge-background,#4a5464);border-radius:2px;border-radius:var(--plyr-badge-border-radius,2px);color:#fff;color:var(--plyr-badge-text-color,#fff);font-size:9px;font-size:var(--plyr-font-size-badge,9px);line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{animation:plyr-fade-in .3s ease;bottom:0;display:none;font-size:13px;font-size:var(--plyr-font-size-small,13px);left:0;padding:10px;padding:var(--plyr-control-spacing,10px);position:absolute;text-align:center;transition:transform .4s ease-in-out;width:100%}.plyr__captions span:empty{display:none}@media (min-width:480px){.plyr__captions{font-size:15px;font-size:var(--plyr-font-size-base,15px);padding:20px;padding:calc(var(--plyr-control-spacing, 10px)*2)}}@media (min-width:768px){.plyr__captions{font-size:18px;font-size:var(--plyr-font-size-large,18px)}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(-40px);transform:translateY(calc(var(--plyr-control-spacing, 10px)*-4))}.plyr__caption{background:rgba(0,0,0,.8);background:var(--plyr-captions-background,rgba(0,0,0,.8));border-radius:2px;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:#fff;color:var(--plyr-captions-text-color,#fff);line-height:185%;padding:.2em .5em;white-space:pre-wrap}.plyr__caption div{display:inline}.plyr__control{background:transparent;border:0;border-radius:3px;border-radius:var(--plyr-control-radius,3px);color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:7px;padding:calc(var(--plyr-control-spacing, 10px)*.7);position:relative;transition:all .3s ease}.plyr__control svg{fill:currentColor;display:block;height:18px;height:var(--plyr-control-icon-size,18px);pointer-events:none;width:18px;width:var(--plyr-control-icon-size,18px)}.plyr__control:focus{outline:0}.plyr__control.plyr__tab-focus{outline:3px dotted #00b2ff;outline:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff))) dotted 3px;outline-offset:2px}a.plyr__control{text-decoration:none}.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed,a.plyr__control:after,a.plyr__control:before{display:none}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:2.5px;margin-left:calc(var(--plyr-control-spacing, 10px)/4)}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:2.5px;padding-left:calc(var(--plyr-control-spacing, 10px)/4)}.plyr__controls .plyr__controls__item.plyr__time{padding:0 5px;padding:0 calc(var(--plyr-control-spacing, 10px)/2)}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{padding-left:0}.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip],.plyr__controls:empty{display:none}.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:transform .3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{animation:plyr-popup .2s ease;background:hsla(0,0%,100%,.9);background:var(--plyr-menu-background,hsla(0,0%,100%,.9));border-radius:4px;bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:var(--plyr-menu-shadow,0 1px 2px rgba(0,0,0,.15));color:#4a5464;color:var(--plyr-menu-color,#4a5464);font-size:15px;font-size:var(--plyr-font-size-base,15px);margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)}.plyr__menu__container:after{border:4px solid transparent;border-top-color:hsla(0,0%,100%,.9);border:var(--plyr-menu-arrow-size,4px) solid transparent;border-top-color:var(--plyr-menu-background,hsla(0,0%,100%,.9));content:"";height:0;position:absolute;right:14px;right:calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7 - var(--plyr-menu-arrow-size, 4px)/2);top:100%;width:0}.plyr__menu__container [role=menu]{padding:7px;padding:calc(var(--plyr-control-spacing, 10px)*.7)}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:#4a5464;color:var(--plyr-menu-color,#4a5464);display:flex;font-size:13px;font-size:var(--plyr-font-size-menu,var(--plyr-font-size-small,13px));padding:4.66667px 10.5px;padding:calc(var(--plyr-control-spacing, 10px)*.7/1.5) calc(var(--plyr-control-spacing, 10px)*.7*1.5);-webkit-user-select:none;user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control:after{border:4px solid transparent;border:var(--plyr-menu-item-arrow-size,4px) solid transparent;content:"";position:absolute;top:50%;transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:28px;padding-right:calc(var(--plyr-control-spacing, 10px)*.7*4)}.plyr__menu__container .plyr__control--forward:after{border-left-color:#728197;border-left-color:var(--plyr-menu-arrow-color,#728197);right:6.5px;right:calc(var(--plyr-control-spacing, 10px)*.7*1.5 - var(--plyr-menu-item-arrow-size, 4px))}.plyr__menu__container .plyr__control--forward.plyr__tab-focus:after,.plyr__menu__container .plyr__control--forward:hover:after{border-left-color:currentColor}.plyr__menu__container .plyr__control--back{font-weight:400;font-weight:var(--plyr-font-weight-regular,400);margin:7px;margin:calc(var(--plyr-control-spacing, 10px)*.7);margin-bottom:3.5px;margin-bottom:calc(var(--plyr-control-spacing, 10px)*.7/2);padding-left:28px;padding-left:calc(var(--plyr-control-spacing, 10px)*.7*4);position:relative;width:calc(100% - 14px);width:calc(100% - var(--plyr-control-spacing, 10px)*.7*2)}.plyr__menu__container .plyr__control--back:after{border-right-color:#728197;border-right-color:var(--plyr-menu-arrow-color,#728197);left:6.5px;left:calc(var(--plyr-control-spacing, 10px)*.7*1.5 - var(--plyr-menu-item-arrow-size, 4px))}.plyr__menu__container .plyr__control--back:before{background:#dcdfe5;background:var(--plyr-menu-back-border-color,#dcdfe5);box-shadow:0 1px 0 #fff;box-shadow:0 1px 0 var(--plyr-menu-back-border-shadow-color,#fff);content:"";height:1px;left:0;margin-top:3.5px;margin-top:calc(var(--plyr-control-spacing, 10px)*.7/2);overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back.plyr__tab-focus:after,.plyr__menu__container .plyr__control--back:hover:after{border-right-color:currentColor}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:7px;padding-left:calc(var(--plyr-control-spacing, 10px)*.7)}.plyr__menu__container .plyr__control[role=menuitemradio]:after,.plyr__menu__container .plyr__control[role=menuitemradio]:before{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]:before{background:rgba(0,0,0,.1);content:"";display:block;flex-shrink:0;height:16px;margin-right:10px;margin-right:var(--plyr-control-spacing,10px);transition:all .3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]:after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;transform:translateY(-50%) scale(0);transition:transform .3s ease,opacity .3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:before{background:#00b2ff;background:var(--plyr-control-toggle-checked-background,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)))}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:after{opacity:1;transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus:before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover:before{background:rgba(35,40,47,.1)}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:calc(-7px - -2);margin-right:calc(var(--plyr-control-spacing, 10px)*.7*-1 - -2);overflow:hidden;padding-left:24.5px;padding-left:calc(var(--plyr-control-spacing, 10px)*.7*3.5);pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:26px;border-radius:calc(var(--plyr-range-thumb-height, 13px)*2);color:#00b2ff;color:var(--plyr-range-fill-background,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));display:block;height:19px;height:calc(var(--plyr-range-thumb-active-shadow-width, 3px)*2 + var(--plyr-range-thumb-height, 13px));margin:0;min-width:0;padding:0;transition:box-shadow .3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:transparent;background-image:linear-gradient(90deg,currentColor 0,transparent 0);background-image:linear-gradient(to right,currentColor var(--value,0),transparent var(--value,0));border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-webkit-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-webkit-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2));height:13px;height:var(--plyr-range-thumb-height,13px);margin-top:-4px;margin-top:calc((var(--plyr-range-thumb-height, 13px) - var(--plyr-range-track-height, 5px))/2*-1);position:relative;-webkit-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-track{background:transparent;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-moz-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2));height:13px;height:var(--plyr-range-thumb-height,13px);position:relative;-moz-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px)}.plyr--full-ui input[type=range]::-ms-track{color:transparent}.plyr--full-ui input[type=range]::-ms-fill-upper,.plyr--full-ui input[type=range]::-ms-track{background:transparent;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:transparent;background:currentColor;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-ms-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2));height:13px;height:var(--plyr-range-thumb-height,13px);margin-top:0;position:relative;-ms-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track{outline:3px dotted #00b2ff;outline:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff))) dotted 3px;outline-offset:2px}.plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track{outline:3px dotted #00b2ff;outline:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff))) dotted 3px;outline-offset:2px}.plyr--full-ui input[type=range].plyr__tab-focus::-ms-track{outline:3px dotted #00b2ff;outline:var(--plyr-tab-focus-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff))) dotted 3px;outline-offset:2px}.plyr__poster{background-color:#000;background-color:var(--plyr-video-background,var(--plyr-video-background,#000));background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr--youtube.plyr--paused.plyr__poster-enabled:not(.plyr--stopped) .plyr__poster{display:none}.plyr__time{font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__time+.plyr__time:before{content:"⁄";margin-right:10px;margin-right:var(--plyr-control-spacing,10px)}@media (max-width:767px){.plyr__time+.plyr__time{display:none}}.plyr__tooltip{background:hsla(0,0%,100%,.9);background:var(--plyr-tooltip-background,hsla(0,0%,100%,.9));border-radius:5px;border-radius:var(--plyr-tooltip-radius,5px);bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:var(--plyr-tooltip-shadow,0 1px 2px rgba(0,0,0,.15));color:#4a5464;color:var(--plyr-tooltip-color,#4a5464);font-size:13px;font-size:var(--plyr-font-size-small,13px);font-weight:400;font-weight:var(--plyr-font-weight-regular,400);left:50%;line-height:1.3;margin-bottom:10px;margin-bottom:calc(var(--plyr-control-spacing, 10px)/2*2);opacity:0;padding:5px 7.5px;padding:calc(var(--plyr-control-spacing, 10px)/2) calc(var(--plyr-control-spacing, 10px)/2*1.5);pointer-events:none;position:absolute;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;white-space:nowrap;z-index:2}.plyr__tooltip:before{border-left:4px solid transparent;border-left:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-right:4px solid transparent;border-right:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-top:4px solid hsla(0,0%,100%,.9);border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,hsla(0,0%,100%,.9));bottom:-4px;bottom:calc(var(--plyr-tooltip-arrow-size, 4px)*-1);content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control.plyr__tab-focus .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{left:0;transform:translateY(10px) scale(.8);transform-origin:0 100%}.plyr__controls>.plyr__control:first-child .plyr__tooltip:before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip:before{left:16px;left:calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7)}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;transform:translateY(10px) scale(.8);transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip:before{left:auto;right:16px;right:calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7);transform:translateX(50%)}.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{transform:translate(0) scale(1)}.plyr__progress{left:6.5px;left:calc(var(--plyr-range-thumb-height, 13px)*.5);margin-right:13px;margin-right:var(--plyr-range-thumb-height,13px);position:relative}.plyr__progress input[type=range],.plyr__progress__buffer{margin-left:-6.5px;margin-left:calc(var(--plyr-range-thumb-height, 13px)*-.5);margin-right:-6.5px;margin-right:calc(var(--plyr-range-thumb-height, 13px)*-.5);width:calc(100% + 13px);width:calc(100% + var(--plyr-range-thumb-height, 13px))}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{left:0;max-width:120px;overflow-wrap:break-word;white-space:normal}.plyr__progress__buffer{-webkit-appearance:none;background:transparent;border:0;border-radius:100px;height:5px;height:var(--plyr-range-track-height,5px);left:0;margin-top:-2.5px;margin-top:calc((var(--plyr-range-track-height, 5px)/2)*-1);padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:transparent}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);-webkit-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);-moz-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;-ms-transition:width .2s ease;transition:width .2s ease}.plyr--loading .plyr__progress__buffer{animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg,rgba(35,40,47,.6) 25%,transparent 0,transparent 50%,rgba(35,40,47,.6) 0,rgba(35,40,47,.6) 75%,transparent 0,transparent);background-image:linear-gradient(-45deg,var(--plyr-progress-loading-background,rgba(35,40,47,.6)) 25%,transparent 25%,transparent 50%,var(--plyr-progress-loading-background,rgba(35,40,47,.6)) 50%,var(--plyr-progress-loading-background,rgba(35,40,47,.6)) 75%,transparent 75%,transparent);background-repeat:repeat-x;background-size:25px 25px;background-size:var(--plyr-progress-loading-size,25px) var(--plyr-progress-loading-size,25px);color:transparent}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25))}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6))}.plyr__progress__marker{background-color:#fff;background-color:var(--plyr-progress-marker-background,#fff);border-radius:1px;height:5px;height:var(--plyr-range-track-height,5px);position:absolute;top:50%;transform:translate(-50%,-50%);width:3px;width:var(--plyr-progress-marker-width,3px);z-index:3}.plyr__volume{align-items:center;display:flex;max-width:110px;min-width:80px;position:relative;width:20%}.plyr__volume input[type=range]{margin-left:5px;margin-left:calc(var(--plyr-control-spacing, 10px)/2);margin-right:5px;margin-right:calc(var(--plyr-control-spacing, 10px)/2);position:relative;z-index:2}.plyr--is-ios .plyr__volume{min-width:0;width:auto}.plyr--audio{display:block}.plyr--audio .plyr__controls{background:#fff;background:var(--plyr-audio-controls-background,#fff);border-radius:inherit;color:#4a5464;color:var(--plyr-audio-control-color,#4a5464);padding:10px;padding:var(--plyr-control-spacing,10px)}.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:#00b2ff;background:var(--plyr-audio-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));color:#fff;color:var(--plyr-audio-control-color-hover,#fff)}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6)))}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6)))}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:rgba(193,200,209,.6);background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6)))}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px rgba(35,40,47,.1);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,rgba(35,40,47,.1))}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px rgba(35,40,47,.1);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,rgba(35,40,47,.1))}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px rgba(35,40,47,.1);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,rgba(35,40,47,.1))}.plyr--audio .plyr__progress__buffer{color:rgba(193,200,209,.6);color:var(--plyr-audio-progress-buffered-background,rgba(193,200,209,.6))}.plyr--video{background:#000;background:var(--plyr-video-background,var(--plyr-video-background,#000));overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:#000;background:var(--plyr-video-background,var(--plyr-video-background,#000));height:100%;margin:auto;overflow:hidden;position:relative;width:100%}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{aspect-ratio:16/9}@supports not (aspect-ratio:16/9){.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%;position:relative}}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;transform:translateY(-38.28125%)}.plyr--video .plyr__controls{background:linear-gradient(transparent,rgba(0,0,0,.75));background:var(--plyr-video-controls-background,linear-gradient(transparent,rgba(0,0,0,.75)));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:#fff;color:var(--plyr-video-control-color,#fff);left:0;padding:5px;padding:calc(var(--plyr-control-spacing, 10px)/2);padding-top:20px;padding-top:calc(var(--plyr-control-spacing, 10px)*2);position:absolute;right:0;transition:opacity .4s ease-in-out,transform .4s ease-in-out;z-index:3}@media (min-width:480px){.plyr--video .plyr__controls{padding:10px;padding:var(--plyr-control-spacing,10px);padding-top:35px;padding-top:calc(var(--plyr-control-spacing, 10px)*3.5)}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;transform:translateY(100%)}.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:#00b2ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));color:#fff;color:var(--plyr-video-control-color-hover,#fff)}.plyr__control--overlaid{background:#00b2ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));border:0;border-radius:100%;color:#fff;color:var(--plyr-video-control-color,#fff);display:none;left:50%;opacity:.9;padding:15px;padding:calc(var(--plyr-control-spacing, 10px)*1.5);position:absolute;top:50%;transform:translate(-50%,-50%);transition:.3s;z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{opacity:1}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25)))}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25)))}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:hsla(0,0%,100%,.25);background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25)))}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px hsla(0,0%,100%,.5);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,hsla(0,0%,100%,.5))}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px hsla(0,0%,100%,.5);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,hsla(0,0%,100%,.5))}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2),0 0 0 3px hsla(0,0%,100%,.5);box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px rgba(35,40,47,.15),0 0 0 1px rgba(35,40,47,.2)),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,hsla(0,0%,100%,.5))}.plyr--video .plyr__progress__buffer{color:hsla(0,0%,100%,.25);color:var(--plyr-video-progress-buffered-background,hsla(0,0%,100%,.25))}.plyr:fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:fullscreen video{height:100%}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr--fullscreen-fallback{background:#000;border-radius:0!important;bottom:0;display:block;height:100%;left:0;margin:0;position:fixed;right:0;top:0;width:100%;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads:after{background:#23282f;border-radius:2px;bottom:10px;bottom:var(--plyr-control-spacing,10px);color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:10px;right:var(--plyr-control-spacing,10px);z-index:3}.plyr__ads:empty:after{display:none}.plyr__cues{background:currentColor;display:block;height:5px;height:var(--plyr-range-track-height,5px);left:0;opacity:.8;position:absolute;top:50%;transform:translateY(-50%);width:3px;z-index:3}.plyr__preview-thumb{background-color:hsla(0,0%,100%,.9);background-color:var(--plyr-tooltip-background,hsla(0,0%,100%,.9));border-radius:5px;border-radius:var(--plyr-tooltip-radius,5px);bottom:100%;box-shadow:0 1px 2px rgba(0,0,0,.15);box-shadow:var(--plyr-tooltip-shadow,0 1px 2px rgba(0,0,0,.15));margin-bottom:10px;margin-bottom:calc(var(--plyr-control-spacing, 10px)/2*2);opacity:0;padding:3px;pointer-events:none;position:absolute;transform:translateY(10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;transform:translate(0) scale(1)}.plyr__preview-thumb:before{border-left:4px solid transparent;border-left:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-right:4px solid transparent;border-right:var(--plyr-tooltip-arrow-size,4px) solid transparent;border-top:4px solid hsla(0,0%,100%,.9);border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,hsla(0,0%,100%,.9));bottom:-4px;bottom:calc(var(--plyr-tooltip-arrow-size, 4px)*-1);content:"";height:0;left:calc(50% + var(--preview-arrow-offset));position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c8d1;border-radius:4px;border-radius:calc(var(--plyr-tooltip-radius, 5px) - 1px);overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img,.plyr__preview-thumb__image-container:after{height:100%;left:0;position:absolute;top:0;width:100%}.plyr__preview-thumb__image-container:after{border-radius:inherit;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15);content:"";pointer-events:none}.plyr__preview-thumb__image-container img{max-height:none;max-width:none}.plyr__preview-thumb__time-container{background:linear-gradient(transparent,rgba(0,0,0,.75));background:var(--plyr-video-controls-background,linear-gradient(transparent,rgba(0,0,0,.75)));border-bottom-left-radius:4px;border-bottom-left-radius:calc(var(--plyr-tooltip-radius, 5px) - 1px);border-bottom-right-radius:4px;border-bottom-right-radius:calc(var(--plyr-tooltip-radius, 5px) - 1px);bottom:0;left:0;line-height:1.1;padding:20px 6px 6px;position:absolute;right:0;z-index:3}.plyr__preview-thumb__time-container span{color:#fff;font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__preview-scrubbing{bottom:0;filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none!important}.plyr__sr-only{clip:rect(1px,1px,1px,1px);border:0!important;height:1px!important;overflow:hidden;padding:0!important;position:absolute!important;width:1px!important}.plyr [hidden]{display:none!important}', ""]), t.Z = a
        }, 3379: function (e) {
            "use strict";
            var t = [];

            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++) if (t[r].identifier === e) {
                    n = r;
                    break
                }
                return n
            }

            function r(e, r) {
                for (var i = {}, a = [], s = 0; s < e.length; s++) {
                    var l = e[s], c = r.base ? l[0] + r.base : l[0], u = i[c] || 0, d = "".concat(c, " ").concat(u);
                    i[c] = u + 1;
                    var p = n(d), f = {css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5]};
                    if (-1 !== p) t[p].references++, t[p].updater(f); else {
                        var h = o(f, r);
                        r.byIndex = s, t.splice(s, 0, {identifier: d, updater: h, references: 1})
                    }
                    a.push(d)
                }
                return a
            }

            function o(e, t) {
                var n = t.domAPI(t);
                return n.update(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        n.update(e = t)
                    } else n.remove()
                }
            }

            e.exports = function (e, o) {
                var i = r(e = e || [], o = o || {});
                return function (e) {
                    e = e || [];
                    for (var a = 0; a < i.length; a++) {
                        var s = n(i[a]);
                        t[s].references--
                    }
                    for (var l = r(e, o), c = 0; c < i.length; c++) {
                        var u = n(i[c]);
                        0 === t[u].references && (t[u].updater(), t.splice(u, 1))
                    }
                    i = l
                }
            }
        }, 569: function (e) {
            "use strict";
            var t = {};
            e.exports = function (e, n) {
                var r = function (e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        }, 9216: function (e) {
            "use strict";
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        }, 3565: function (e, t, n) {
            "use strict";
            e.exports = function (e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        }, 7795: function (e) {
            "use strict";
            e.exports = function (e) {
                var t = e.insertStyleElement(e);
                return {
                    update: function (n) {
                        !function (e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                            var i = n.sourceMap;
                            i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }, 4589: function (e) {
            "use strict";
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }, 247: function () {
        }, 9933: function (e) {
            "use strict";
            e.exports = JSON.parse('{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}')
        }, 9451: function (e) {
            "use strict";
            e.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')
        }, 1363: function (e) {
            "use strict";
            e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
        }, 8611: function (e) {
            "use strict";
            e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')
        }, 4204: function (e) {
            "use strict";
            e.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')
        }, 9545: function (e) {
            "use strict";
            e.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')
        }, 9489: function (e) {
            "use strict";
            e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')
        }, 490: function (e) {
            "use strict";
            e.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')
        }, 1344: function (e) {
            "use strict";
            e.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')
        }
    }, t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {id: r, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.exports
    }

    n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, {a: t}), t
    }, n.d = function (e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.nc = void 0, function () {
        "use strict";
        var e = n(644);

        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var r = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.lib = {
                    simpleClick: new Audio("assets/audio/simpleClick.mp3"),
                    tictac: new Audio("assets/audio/tictac.mp3"),
                    tictac5: new Audio("assets/audio/tictac-last-five-sec.mp3"),
                    goodAnswer: new Audio("assets/audio/goodAnswer.mp3"),
                    badAnswer: new Audio("assets/audio/badAnswer.mp3"),
                    prize: new Audio("assets/audio/prize.mp3"),
                    nextPage: new Audio("assets/audio/nextPage.mp3"),
                    connection: new Audio("assets/audio/connection.mp3"),
                    typing: new Audio("assets/audio/typing.mp3")
                }
            }

            var n, r;
            return n = e, (r = [{
                key: "simpleClick", value: function () {
                    this.lib.simpleClick.currentTime = 0, this.lib.simpleClick.play()
                }
            }, {
                key: "startTimer", value: function () {
                    this.lib.tictac.loop = !0, this.lib.tictac.currentTime = 0, this.lib.tictac.play()
                }
            }, {
                key: "stopTimer", value: function () {
                    this.lib.tictac.pause(), this.lib.tictac5.pause()
                }
            }, {
                key: "tictac5", value: function () {
                    this.lib.tictac5.currentTime = 0, this.lib.tictac5.play()
                }
            }, {
                key: "goodAnswer", value: function () {
                    this.lib.goodAnswer.currentTime = 0, this.lib.goodAnswer.play()
                }
            }, {
                key: "badAnswer", value: function () {
                    this.lib.badAnswer.currentTime = 0, this.lib.badAnswer.play()
                }
            }, {
                key: "prize", value: function () {
                    this.lib.prize.currentTime = 0, this.lib.prize.play()
                }
            }, {
                key: "nextPage", value: function () {
                    this.lib.nextPage.currentTime = 0, this.lib.nextPage.play()
                }
            }, {
                key: "connection", value: function () {
                    this.lib.connection.currentTime = 0, this.lib.connection.play()
                }
            }, {
                key: "typing", value: function () {
                    this.lib.typing.currentTime = 0, this.lib.typing.play()
                }
            }]) && t(n.prototype, r), Object.defineProperty(n, "prototype", {writable: !1}), e
        }();

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var i = function () {
            function e(t, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.cont = t, this.props = n, this.sounder = new r, this.render()
            }

            var t, n;
            return t = e, (n = [{
                key: "render", value: function () {
                    var e = this;
                    this.modalCont = document.createElement("div"), this.modalCont.classList.add("modal_page"), this.modalCont.innerHTML = '\n        <div class="intro_container_abstract">\n            <div class="intro_stroke_abstract"></div>\n            <div class="intro_pg_abstract info-block">\n                <h3>'.concat(this.props.content, '</h3>\n                <div class="intro_start_abstract closeBtn"> \n                        <ul>\n                            <a><li class="no_timer green_clr">Закрыть</li></a>\n                        </ul>\n                    </div>\n            </div>\n        </div>'), this.modalCont.querySelector(".closeBtn").addEventListener("click", (function () {
                        e.close(), e.props.onClose && e.props.onClose()
                    })), this.cont.appendChild(this.modalCont)
                }
            }, {
                key: "close", value: function () {
                    this.sounder.simpleClick(), this.modalCont.parentNode.removeChild(this.modalCont)
                }
            }]) && o(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
        }();

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var s = function () {
            function e(t, n) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.cont = t, this.info = n, this.sounder = new r, this.isShown = !1, this.render()
            }

            var t, n;
            return t = e, (n = [{
                key: "render", value: function () {
                    var e = this, t = document.createElement("div");
                    t.innerHTML = '<img src="./assets/images/info.svg" width="112" height="112"/>', t.classList.add("copyrightInfo"), t.addEventListener("click", (function () {
                        e.isShown || (e.sounder.simpleClick(), e.showInfo(), e.isShown = !0)
                    })), this.cont.appendChild(t)
                }
            }, {
                key: "showInfo", value: function () {
                    var e = this;
                    this.modal = new i(this.cont.parentNode, {
                        content: this.info, onClose: function () {
                            e.isShown = !1
                        }
                    })
                }
            }]) && a(t.prototype, n), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), l = {
            type: "test",
            title: "Экология",
            questions: [{
                type: "multiple-choice",
                text: "<p>Почему нельзя мусорить?</p> <br/><br/> <img width='850' src='assets/images/1.png' />",
                answers: ["мусор плохо пахнет", ["мусор загрязняет планету"], "мусор некрасиво выглядит", "мама отругает"]
            },{
                type: "multiple-choice",
                text: "<p>Куда отправляется мусор, который нельзя перерабатывать?</p> <br/><br/> <img width='850' src='assets/images/2.png' />",
                answers: ["в мусорку", "дворнику", "в космос", ["на полигоны"]]
            },{
                type: "multiple-choice",
                text: "<p>Что делают люди для борьбы с отходами?</p> <br/><br/> <img width='850' src='assets/images/3.png' />",
                answers: [["строят перерабатывающие заводы"], "сбрасывают в океан", "открывают полигоны", "зовут супермена"]
            },{
                type: "multiple-choice",
                text: "<p>Какие бывают виды отходов?</p> <br/><br/> <img width='850' src='assets/images/4.png' />",
                answers: ["хорошо и плохо пахнущие", "природные и неприродные", ["органические и неорганические"], "красивые и некрасивые"]
            },{
                type: "multiple-choice",
                text: "<p>Что относят к органическим отходам?</p> <br/><br/> <img width='850' src='assets/images/5.png' />",
                answers: [["шкурки от бананов"], "носки", "банка из-под газировки", "использованная салфетка"]
            },{
                type: "multiple-choice",
                text: "<p>Зачем дома нужно иметь второе мусорное ведёрко?</p> <br/><br/> <img width='850' src='assets/images/6.png' />",
                answers: ["чтобы дольше не выносить мусор", "чтобы собирать стеклянные бутылки", "чтобы поставить его в комнате", ["чтобы сортировать отходы"]]
            },{
                type: "multiple-choice",
                text: "<p>Зачем сортировать отходы?</p> <br/><br/> <img width='850' src='assets/images/7.png' />",
                answers: [["чтобы они обретали вторую жизнь"], "чтобы \"убить\" время", "чтобы выбросить", "чтобы больше уместилось в мусорное ведро"]
            },{
                type: "multiple-choice",
                text: "<p>Зачем нужны перерабатывающие заводы?</p> <br/><br/> <img width='850' src='assets/images/8.png' />",
                answers: ["чтобы сжигать отходы", ["чтобы превращать отходы в новые вещи"], "чтобы хранить там отходы"]
            }]
        }, c = {
            default: "./assets/images/reload.svg",
            green: "./assets/images/reload-green.svg",
            white: "./assets/images/reload-white.svg"
        }, u = function (t) {
            var n = t.style, r = void 0 === n ? {} : n, o = t.theme, i = void 0 === o ? "default" : o;
            return e.default.createElement("div", {
                className: "reload_pg",
                style: r
            }, e.default.createElement("a", null, e.default.createElement("img", {src: c[i], height: "52"})))
        }, d = "INIT", p = "NEXT_QUESTION", f = "ADD_RESULT", h = "ENABLE_CHECK", m = "AGAIN";

        function g(e) {
            return {type: d, payload: e}
        }

        function v(e) {
            return {type: h, payload: e}
        }

        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function (t) {
                    _(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function w(e, t) {
            var n;
            return t ? null !== (n = e.score) && void 0 !== n ? n : 1 : 0
        }

        var x = function () {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                n = arguments.length > 1 ? arguments[1] : void 0, r = n.type, o = n.payload;
            switch (r) {
                case d:
                    return b(b({}, C), o);
                case h:
                    return b(b({}, t), {}, {checkEnabled: o});
                case f:
                    var i = null, a = !o && t.attempts;
                    t.currentQuestion === t.questions.length - 1 && (i = o && t.attempts || !t.attempts);
                    var s = !i && !t.attempts || !i && t.attempts && o, l = w(t.questions[t.currentQuestion], o);
                    return b(b({}, t), {}, (e = {
                        results: b(b({}, t.results), {}, _({}, t.currentQuestion, {score: l})),
                        nextEnabled: !0,
                        finished: i
                    }, _(e, "nextEnabled", s), _(e, "againEnabled", a), e));
                case p:
                    return b(b({}, t), {}, {nextEnabled: !1, currentQuestion: t.currentQuestion + 1});
                case m:
                    return b(b({}, t), {}, {
                        results: b(b({}, t.results), {}, _({}, t.currentQuestion, null)),
                        againEnabled: !1
                    })
            }
            return t
        };

        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function (t) {
                    S(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function T(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var C = {
            currentQuestion: 0,
            questions: [],
            results: {},
            checkEnabled: !1,
            nextEnabled: !1,
            againEnabled: !1,
            attempts: !1,
            finished: null
        }, A = (0, e.createContext)(null), O = function (t) {
            var n, r, o = t.children, i = (n = (0, e.useReducer)(x), r = 2, function (e) {
                if (Array.isArray(e)) return e
            }(n) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(n, r) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return T(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
                }
            }(n, r) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), a = i[0], s = i[1];
            return e.default.createElement(A.Provider, {value: k(k({}, a), {}, {dispatch: s})}, o)
        }, P = function (t) {
            var n = t.title;
            return e.default.createElement("div", {className: "eom-card__header"}, e.default.createElement("h5", null, n))
        }, M = function (t) {
            var n = t.children;
            return e.default.createElement("div", {className: "eom-card__body"}, n)
        }, D = function (t) {
            var n = t.children;
            return e.default.createElement("div", {className: "eom-card"}, n)
        }, N = function () {
            return Math.random().toString(36).substring(2, 15)
        };

        function I(e) {
            return e.map((function (e) {
                return {value: e, sort: Math.random()}
            })).sort((function (e, t) {
                return e.sort - t.sort
            })).map((function (e) {
                return e.value
            }))
        }

        var L = function (t) {
            var n = t.children, r = t.name, o = t.className, i = t.value, a = t.onChange,
                s = (0, e.useMemo)((function () {
                    return N()
                }), []), l = (0, e.useCallback)((function () {
                    a && a(i)
                }), []);
            return e.default.createElement("label", {className: "eom-check ".concat(o)}, e.default.createElement("span", {
                className: "eom-check__content",
                dangerouslySetInnerHTML: {__html: n}
            }), e.default.createElement("input", {
                id: s,
                name: r,
                type: "radio",
                onChange: l
            }), e.default.createElement("span", {className: "eom-check__checkmark"}))
        }, j = (0, e.memo)(L), q = function (t) {
            var n = t.task;
            return e.default.createElement("div", {className: "eom-task", dangerouslySetInnerHTML: {__html: n}})
        }, R = function (t) {
            var n = t.text, r = t.locked, o = t.children, i = t.className;
            return e.default.createElement("div", {className: "".concat(i || "")}, e.default.createElement(q, {task: n}), e.default.createElement("div", {className: "question-elements ".concat(r && "checked")}, o))
        };

        function B(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return z(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function z(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var U = (0, e.forwardRef)((function (t, n) {
            var r = t.question, o = (t.onChange, t.onResult), i = t.onBlur, a = t.className, s = r.text, l = r.answers,
                c = B((0, e.useState)(null), 2), u = c[0], d = c[1], p = B((0, e.useState)(!1), 2), f = p[0], h = p[1],
                m = (0, e.useMemo)((function () {
                    return I(l)
                }), [l]), g = (0, e.useMemo)((function () {
                    return N()
                }), []), v = (0, e.useMemo)((function () {
                    return m.findIndex((function (e) {
                        return e instanceof Array
                    }))
                }), [m]), y = (0, e.useCallback)((function (e) {
                    d(e), i && i(!0)
                }), []), b = (0, e.useCallback)((function () {
                    o && o(u instanceof Array), h(!0)
                }), [u]), _ = function () {
                    h(!1), d(null)
                };
            (0, e.useImperativeHandle)(n, (function () {
                return {check: b, again: _}
            }), [u, b]);
            var w = (0, e.useCallback)((function (e) {
                return f && v === e ? "right-mark" : ""
            }), [f, v]);
            return e.default.createElement(R, {
                text: s,
                locked: f,
                className: "choice ".concat(a)
            }, m.map((function (t, n) {
                return e.default.createElement(j, {className: w(n), key: n, name: g, value: t, onChange: y}, t)
            })))
        })), H = new r, F = function (t) {
            var n = t.children, r = t.name, o = t.className, i = t.value, a = t.onChange,
                s = (0, e.useMemo)((function () {
                    return N()
                }), []);
            return e.default.createElement("label", {className: "eom-check ".concat(o || "")}, e.default.createElement("input", {
                id: s,
                name: r,
                type: "checkbox",
                value: i,
                onChange: a
            }), e.default.createElement("span", {className: "eom-check__checkmark"}), e.default.createElement("span", {
                className: "eom-check__content",
                dangerouslySetInnerHTML: {__html: n}
            }))
        }, V = (0, e.memo)(F);

        function Y() {
            return Y = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Y.apply(this, arguments)
        }

        function W(e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }

        function G(e, t) {
            return G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, G(e, t)
        }

        function X(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, G(e, t)
        }

        function K(e, t) {
            return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }

        var $ = e.default.createContext(null), J = function (e) {
            return e.scrollTop
        }, Q = "unmounted", Z = "exited", ee = "entering", te = "entered", ne = "exiting", re = function (t) {
            function n(e, n) {
                var r;
                r = t.call(this, e, n) || this;
                var o, i = n && !n.isMounting ? e.enter : e.appear;
                return r.appearStatus = null, e.in ? i ? (o = Z, r.appearStatus = ee) : o = te : o = e.unmountOnExit || e.mountOnEnter ? Q : Z, r.state = {status: o}, r.nextCallback = null, r
            }

            X(n, t), n.getDerivedStateFromProps = function (e, t) {
                return e.in && t.status === Q ? {status: Z} : null
            };
            var r = n.prototype;
            return r.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus)
            }, r.componentDidUpdate = function (e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== ee && n !== te && (t = ee) : n !== ee && n !== te || (t = ne)
                }
                this.updateStatus(!1, t)
            }, r.componentWillUnmount = function () {
                this.cancelNextCallback()
            }, r.getTimeouts = function () {
                var e, t, n, r = this.props.timeout;
                return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                    exit: e,
                    enter: t,
                    appear: n
                }
            }, r.updateStatus = function (t, n) {
                if (void 0 === t && (t = !1), null !== n) if (this.cancelNextCallback(), n === ee) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var r = this.props.nodeRef ? this.props.nodeRef.current : e.default.findDOMNode(this);
                        r && J(r)
                    }
                    this.performEnter(t)
                } else this.performExit(); else this.props.unmountOnExit && this.state.status === Z && this.setState({status: Q})
            }, r.performEnter = function (t) {
                var n = this, r = this.props.enter, o = this.context ? this.context.isMounting : t,
                    i = this.props.nodeRef ? [o] : [e.default.findDOMNode(this), o], a = i[0], s = i[1],
                    l = this.getTimeouts(), c = o ? l.appear : l.enter;
                t || r ? (this.props.onEnter(a, s), this.safeSetState({status: ee}, (function () {
                    n.props.onEntering(a, s), n.onTransitionEnd(c, (function () {
                        n.safeSetState({status: te}, (function () {
                            n.props.onEntered(a, s)
                        }))
                    }))
                }))) : this.safeSetState({status: te}, (function () {
                    n.props.onEntered(a)
                }))
            }, r.performExit = function () {
                var t = this, n = this.props.exit, r = this.getTimeouts(),
                    o = this.props.nodeRef ? void 0 : e.default.findDOMNode(this);
                n ? (this.props.onExit(o), this.safeSetState({status: ne}, (function () {
                    t.props.onExiting(o), t.onTransitionEnd(r.exit, (function () {
                        t.safeSetState({status: Z}, (function () {
                            t.props.onExited(o)
                        }))
                    }))
                }))) : this.safeSetState({status: Z}, (function () {
                    t.props.onExited(o)
                }))
            }, r.cancelNextCallback = function () {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
            }, r.safeSetState = function (e, t) {
                t = this.setNextCallback(t), this.setState(e, t)
            }, r.setNextCallback = function (e) {
                var t = this, n = !0;
                return this.nextCallback = function (r) {
                    n && (n = !1, t.nextCallback = null, e(r))
                }, this.nextCallback.cancel = function () {
                    n = !1
                }, this.nextCallback
            }, r.onTransitionEnd = function (t, n) {
                this.setNextCallback(n);
                var r = this.props.nodeRef ? this.props.nodeRef.current : e.default.findDOMNode(this),
                    o = null == t && !this.props.addEndListener;
                if (r && !o) {
                    if (this.props.addEndListener) {
                        var i = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback], a = i[0], s = i[1];
                        this.props.addEndListener(a, s)
                    }
                    null != t && setTimeout(this.nextCallback, t)
                } else setTimeout(this.nextCallback, 0)
            }, r.render = function () {
                var t = this.state.status;
                if (t === Q) return null;
                var n = this.props, r = n.children,
                    o = (n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef, W(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return e.default.createElement($.Provider, {value: null}, "function" == typeof r ? r(t, o) : e.default.cloneElement(e.default.Children.only(r), o))
            }, n
        }(e.default.Component);

        function oe() {
        }

        re.contextType = $, re.propTypes = {}, re.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: oe,
            onEntering: oe,
            onEntered: oe,
            onExit: oe,
            onExiting: oe,
            onExited: oe
        }, re.UNMOUNTED = Q, re.EXITED = Z, re.ENTERING = ee, re.ENTERED = te, re.EXITING = ne;
        var ie = re, ae = function (e, t) {
            return e && t && t.split(" ").forEach((function (t) {
                return r = t, void ((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = K(n.className, r) : n.setAttribute("class", K(n.className && n.className.baseVal || "", r)));
                var n, r
            }))
        }, se = function (t) {
            function n() {
                for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                return (e = t.call.apply(t, [this].concat(r)) || this).appliedClasses = {
                    appear: {},
                    enter: {},
                    exit: {}
                }, e.onEnter = function (t, n) {
                    var r = e.resolveArguments(t, n), o = r[0], i = r[1];
                    e.removeClasses(o, "exit"), e.addClass(o, i ? "appear" : "enter", "base"), e.props.onEnter && e.props.onEnter(t, n)
                }, e.onEntering = function (t, n) {
                    var r = e.resolveArguments(t, n), o = r[0], i = r[1] ? "appear" : "enter";
                    e.addClass(o, i, "active"), e.props.onEntering && e.props.onEntering(t, n)
                }, e.onEntered = function (t, n) {
                    var r = e.resolveArguments(t, n), o = r[0], i = r[1] ? "appear" : "enter";
                    e.removeClasses(o, i), e.addClass(o, i, "done"), e.props.onEntered && e.props.onEntered(t, n)
                }, e.onExit = function (t) {
                    var n = e.resolveArguments(t)[0];
                    e.removeClasses(n, "appear"), e.removeClasses(n, "enter"), e.addClass(n, "exit", "base"), e.props.onExit && e.props.onExit(t)
                }, e.onExiting = function (t) {
                    var n = e.resolveArguments(t)[0];
                    e.addClass(n, "exit", "active"), e.props.onExiting && e.props.onExiting(t)
                }, e.onExited = function (t) {
                    var n = e.resolveArguments(t)[0];
                    e.removeClasses(n, "exit"), e.addClass(n, "exit", "done"), e.props.onExited && e.props.onExited(t)
                }, e.resolveArguments = function (t, n) {
                    return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n]
                }, e.getClassNames = function (t) {
                    var n = e.props.classNames, r = "string" == typeof n, o = r ? (r && n ? n + "-" : "") + t : n[t];
                    return {
                        baseClassName: o,
                        activeClassName: r ? o + "-active" : n[t + "Active"],
                        doneClassName: r ? o + "-done" : n[t + "Done"]
                    }
                }, e
            }

            X(n, t);
            var r = n.prototype;
            return r.addClass = function (e, t, n) {
                var r = this.getClassNames(t)[n + "ClassName"], o = this.getClassNames("enter").doneClassName;
                "appear" === t && "done" === n && o && (r += " " + o), "active" === n && e && J(e), r && (this.appliedClasses[t][n] = r, function (e, t) {
                    e && t && t.split(" ").forEach((function (t) {
                        return r = t, void ((n = e).classList ? n.classList.add(r) : function (e, t) {
                            return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                        }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                        var n, r
                    }))
                }(e, r))
            }, r.removeClasses = function (e, t) {
                var n = this.appliedClasses[t], r = n.base, o = n.active, i = n.done;
                this.appliedClasses[t] = {}, r && ae(e, r), o && ae(e, o), i && ae(e, i)
            }, r.render = function () {
                var t = this.props, n = (t.classNames, W(t, ["classNames"]));
                return e.default.createElement(ie, Y({}, n, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited
                }))
            }, n
        }(e.default.Component);
        se.defaultProps = {classNames: ""}, se.propTypes = {};
        var le = se;

        function ce() {
            return ce = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, ce.apply(this, arguments)
        }

        function ue(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var de, pe = (de = function (t) {
            return e.default.createElement("div", {
                className: "modal ".concat(t.className),
                onClick: t.onClose
            }, e.default.createElement("div", {
                className: "modal-content", onClick: function (e) {
                    return e.stopPropagation()
                }
            }, e.default.createElement("div", {className: "modal-header"}, e.default.createElement("h4", {
                className: "modal-title",
                dangerouslySetInnerHTML: {__html: t.title || "&nbsp;"}
            }), e.default.createElement("button", {
                className: "modal-close",
                onClick: t.onClose
            })), e.default.createElement("div", {className: "modal-body"}, t.children)))
        }, function (t) {
            var n, r, o = (n = (0, e.useState)(t.show), r = 2, function (e) {
                if (Array.isArray(e)) return e
            }(n) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(n, r) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return ue(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(e, t) : void 0
                }
            }(n, r) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()), i = o[0], a = o[1];
            return (0, e.useMemo)((function () {
                return t.className || ""
            }), [t.className]), (0, e.useEffect)((function () {
                a(t.show)
            }), [t.show]), e.default.createPortal(e.default.createElement(le, {
                appear: !0,
                in: i,
                unmountOnExit: !0,
                timeout: {enter: 0, exit: 300}
            }, e.default.createElement(de, ce({}, t, {
                onClose: function () {
                    a(!1), t.onClose && t.onClose()
                }
            }))), document.body)
        });

        function fe(t) {
            return function () {
                var n = document.createElement("div");
                e.default.render(e.default.createElement(e.default.Fragment, null, e.default.createElement(pe, {
                    show: !0,
                    className: "modal-info"
                }, e.default.createElement("div", {dangerouslySetInnerHTML: {__html: t}}))), n)
            }
        }

        function he(e) {
            return function (e) {
                if (Array.isArray(e)) return ve(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || ge(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function me(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || ge(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ge(e, t) {
            if (e) {
                if ("string" == typeof e) return ve(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(e, t) : void 0
            }
        }

        function ve(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var ye = (0, e.forwardRef)((function (t, n) {
                var r = t.question, o = t.className, i = t.onResult, a = t.onBlur, s = (0, e.useRef)();
                !function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = null != t ? t : (0, e.useRef)(null);
                    (0, e.useEffect)((function () {
                        n.current.base.querySelectorAll("[data-hint]").forEach((function (e) {
                            e.addEventListener("click", fe(e.dataset.hint))
                        }))
                    }), [])
                }(s);
                var l = r.text, c = r.answers, u = me((0, e.useState)([]), 2), d = u[0], p = u[1],
                    f = me((0, e.useState)(!1), 2), h = f[0], m = f[1], g = (0, e.useMemo)((function () {
                        return I(c)
                    }), [c]), v = (0, e.useMemo)((function () {
                        return N()
                    }), []), y = (0, e.useCallback)((function (e) {
                        var t = e.target.value;
                        H.simpleClick(), p((function (n) {
                            return e.target.checked ? [].concat(he(n), [JSON.parse(t)]) : he(n.filter((function (t) {
                                return JSON.stringify(t) !== e.target.value
                            })))
                        }))
                    }), [d]), b = (0, e.useMemo)((function () {
                        return g.filter((function (e) {
                            return e instanceof Array
                        })).length
                    }), [g]), _ = (0, e.useCallback)((function () {
                        var e = !0;
                        d.forEach((function (t) {
                            t instanceof Array || (e = !1)
                        })), e && (e = b === d.length), i(e), m(!0)
                    }), [d]), w = function () {
                        m(!1), p([])
                    };
                return (0, e.useImperativeHandle)(n, (function () {
                    return {check: _, again: w}
                })), (0, e.useEffect)((function () {
                    a(0 !== d.length)
                }), [d]), e.default.createElement(R, {
                    text: l,
                    locked: h,
                    className: "multiple-choice ".concat(o),
                    ref: s
                }, g.map((function (t, n) {
                    return e.default.createElement(V, {
                        className: h && t instanceof Array ? "right-mark" : "",
                        key: n,
                        name: v,
                        value: JSON.stringify(t),
                        onChange: y
                    }, t)
                })))
            })), be = n(5072), _e = n.n(be), we = n(3379), xe = n.n(we), Ee = n(7795), ke = n.n(Ee), Se = n(569),
            Te = n.n(Se), Ce = n(3565), Ae = n.n(Ce), Oe = n(9216), Pe = n.n(Oe), Me = n(4589), De = n.n(Me),
            Ne = n(7594), Ie = {};
        Ie.styleTagTransform = De(), Ie.setAttributes = Ae(), Ie.insert = Te().bind(null, "head"), Ie.domAPI = ke(), Ie.insertStyleElement = Pe(), xe()(Ne.Z, Ie), Ne.Z && Ne.Z.locals && Ne.Z.locals;
        var Le = function (t) {
            var n = t.src, r = t.options, o = t.onEnded, i = (0, e.useRef)(null);
            return (0, e.useLayoutEffect)((function () {
                new (_e())(i.current, null != r ? r : {}).on("ended", o)
            }), [n]), e.default.createElement("video", {ref: i, src: n})
        }, je = n(3984), qe = n.n(je);

        function Re(e) {
            return function (e) {
                if (Array.isArray(e)) return ze(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || Be(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Be(e, t) {
            if (e) {
                if ("string" == typeof e) return ze(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ze(e, t) : void 0
            }
        }

        function ze(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Ue(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function He(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ue(Object(n), !0).forEach((function (t) {
                    Fe(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Fe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Ve = function (e, t, n, r) {
            var o, i, a = {}, s = "right-mark", l = "wrong-mark";

            function c(e, t) {
                a = He(He({}, a), {}, Fe({}, t, Re(a[t].filter((function (t) {
                    return t !== e
                }))))), n && n(a)
            }

            function u(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                e.style.transform = "translate(" + t + "px, " + n + "px)", e.setAttribute("data-x", t), e.setAttribute("data-y", n)
            }

            function d(t) {
                var n, r = t.target,
                    o = (r.parentNode.querySelectorAll("[data-item]").length, null !== (n = r.parentNode.dataset.place) && void 0 !== n ? n : null);
                null !== o && (r.parentNode.dropped = !1, c(r.dataset.item, o));
                var i = r.getBoundingClientRect(), a = e.getBoundingClientRect();
                r.classList.add("draggable"), e.appendChild(r), u(r, i.x - a.left, i.y - a.y)
            }

            function p(e) {
                var t = e.target, n = (parseFloat(t.getAttribute("data-x")) || 0) + e.dx,
                    r = (parseFloat(t.getAttribute("data-y")) || 0) + e.dy;
                u(t, n, r)
            }

            function f(e) {
                var t, r, i, s = e.target, l = e.relatedTarget;
                !l || l.dropped && "true" !== l.dataset.multiple ? o.appendChild(s) : (l.appendChild(s), l.dropped = !0, u(s), t = s.dataset.item, r = l.dataset.place, a = He(He({}, a), {}, Fe({}, r, [].concat(Re(null !== (i = a[r]) && void 0 !== i ? i : []), [t]))), n && n(a)), u(s), s.classList.remove("draggable")
            }

            function h(e) {
                var t = e.querySelector("button[data-info]");
                t && t.addEventListener("click", (function (e) {
                    r && r(e.target.dataset.info)
                })), qe()(e).draggable({autoScroll: !0, listeners: {start: d, move: p, end: f}})
            }

            return {
                init: function () {
                    var n, r;
                    e.innerHTML = '\n            <div class="dd-content">'.concat((n = t.content, r = t.answers, n.replace(/\|_p(\d{1,2})_\|/g, (function (e, n) {
                        return '\n            <div data-place="'.concat(n, '" ').concat(function (e) {
                            var n, o,
                                i = null !== (n = (null == t ? void 0 : t.placesOptions) && (null === (o = t.placesOptions[e]) || void 0 === o ? void 0 : o.multiple)) && void 0 !== n && n,
                                a = r[e].reduce((function (e, t) {
                                    return e < t.length ? t.length : e
                                }), 1);
                            return 'data-multiple="'.concat(!!(a > 1 || i), '"')
                        }(n), "></div>\n        ")
                    }))), '</div>\n            <div class="dd-items">\n                 ').concat(t.items.sort((function (e) {
                        return Math.random() > .5 ? 1 : -1
                    })).map((function (e) {
                        return '<div data-item="'.concat(e.id, '" ').concat(e.multiple ? 'data-multiple="true"' : "", ">\n                        ").concat(e.content, "\n                        ").concat(e.description ? '<div class="button-outer"><button data-info="'.concat(e.description, '"></button></div>') : "", "\n                    </div>")
                    })).join(""), "\n            </div>\n        "), o = e.querySelector(".dd-items"), i = Array.from(e.querySelectorAll("[data-place]")), Array.from(e.querySelectorAll("[data-item]")).map(h), i.forEach((function (e) {
                        var n = e.dataset.place, r = "[data-item]";
                        null != t && t.placesOptions && t.placesOptions[n] && t.placesOptions[n].accept && (r = t.placesOptions[n].accept.map((function (e) {
                            return '[data-item="'.concat(e, '"]')
                        })).join(",")), qe()(e).dropzone({accept: r})
                    }))
                }, check: function () {
                    var n = t.answers, r = !0;
                    return Object.keys(n).forEach((function (t) {
                        var o, i, c = n[t], u = null !== (o = a[t]) && void 0 !== o ? o : [], d = !1,
                            p = function (e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = Be(e))) {
                                        n && (e = n);
                                        var r = 0, o = function () {
                                        };
                                        return {
                                            s: o, n: function () {
                                                return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                                            }, e: function (e) {
                                                throw e
                                            }, f: o
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var i, a = !0, s = !1;
                                return {
                                    s: function () {
                                        n = n.call(e)
                                    }, n: function () {
                                        var e = n.next();
                                        return a = e.done, e
                                    }, e: function (e) {
                                        s = !0, i = e
                                    }, f: function () {
                                        try {
                                            a || null == n.return || n.return()
                                        } finally {
                                            if (s) throw i
                                        }
                                    }
                                }
                            }(c);
                        try {
                            for (p.s(); !(i = p.n()).done;) {
                                var f = i.value;
                                JSON.stringify(f.map(String).sort()) === JSON.stringify(u.map(String).sort()) && (d = !0), !0 === d ? e.querySelectorAll('[data-place="'.concat(t, '"] [data-item]')).forEach((function (e) {
                                    e.classList.add(s)
                                })) : e.querySelectorAll('[data-place="'.concat(t, '"] [data-item]')).forEach((function (e) {
                                    c.flat().map(String).includes(e.dataset.item) ? e.classList.add(s) : e.classList.add(l)
                                }))
                            }
                        } catch (e) {
                            p.e(e)
                        } finally {
                            p.f()
                        }
                        !1 === d && (r = !1)
                    })), r
                }, again: function () {
                    o.style.display = "block", i.forEach((function (e) {
                        e.querySelectorAll("[data-item").forEach((function (t) {
                            t.classList.contains(l) && (t.classList.remove(l), o.appendChild(t), e.dropped = !1, c(t.dataset.item, e.dataset.place)), t.classList.remove(s)
                        }))
                    }))
                }
            }
        };

        function Ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function We(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ye(Object(n), !0).forEach((function (t) {
                    Ge(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ge(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Xe(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return Ke(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ke(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Ke(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var $e = (0, e.forwardRef)((function (t, n) {
            var r = t.question, o = t.className, i = t.onResult, a = t.onBlur, s = r.text,
                l = (r.answers, Xe((0, e.useState)(null), 2)), c = (l[0], l[1]), u = Xe((0, e.useState)(!1), 2),
                d = u[0], p = u[1], f = Xe((0, e.useState)({show: !1, info: ""}), 2), h = f[0], m = f[1],
                g = Xe((0, e.useState)({show: !1, info: ""}), 2), v = g[0], y = g[1], b = Xe((0, e.useState)(!1), 2),
                _ = b[0], w = b[1], x = function (t, n, r) {
                    var o = (0, e.useRef)(null);
                    return (0, e.useEffect)((function () {
                        o.current.dd = Ve(o.current, t, n, r), o.current.dd.init()
                    }), []), [o, function () {
                        return o.current.dd.check()
                    }, function () {
                        o.current.dd.again()
                    }]
                }(r, (function (e) {
                    c(e), a(!0)
                }), (function (e) {
                    m({show: !0, info: e})
                })), E = Xe(x, 3), k = E[0], S = E[1], T = E[2];
            return (0, e.useImperativeHandle)(n, (function () {
                return {
                    check: function () {
                        var e = S();
                        p(!0), i(e), e && (w(!0), r.successVideo && p(!1))
                    }, again: function () {
                        T(), p(!1)
                    }
                }
            })), (0, e.useEffect)((function () {
                k.current.querySelectorAll("[data-help]").forEach((function (e) {
                    e.addEventListener("click", (function (e) {
                        y({show: !0, info: e.currentTarget.dataset.help})
                    }))
                }))
            }), []), e.default.createElement(R, {
                text: s,
                locked: d,
                className: "dd ".concat(o)
            }, r.successVideo && _ ? e.default.createElement(Le, {
                src: r.successVideo,
                options: {controls: ["play-large", "play", "progress"], autoplay: !0, muted: !0}
            }) : e.default.createElement(e.default.Fragment, null, e.default.createElement("div", {
                className: "dd-container",
                ref: k
            })), e.default.createElement(pe, {
                className: "modal-info", show: h.show, onClose: function () {
                    m((function (e) {
                        return We(We({}, e), {}, {show: !1})
                    }))
                }
            }, h.info), e.default.createElement(pe, {
                className: "modal-info", show: v.show, onClose: function () {
                    y((function (e) {
                        return We(We({}, e), {}, {show: !1})
                    }))
                }
            }, e.default.createElement("div", {dangerouslySetInnerHTML: {__html: v.info}})), r.initModal && e.default.createElement(pe, {
                className: "init-modal ".concat(o),
                show: !0
            }, e.default.createElement("div", {dangerouslySetInnerHTML: {__html: r.initModal}})))
        })), Je = n(9318), Qe = function (t) {
            var n = t.value, r = t.className, o = t.options, i = t.id, a = t.onChange;
            return o ? e.default.createElement("select", {
                className: "eom-select ".concat(r || ""),
                id: i,
                value: n,
                onChange: a
            }, e.default.createElement("option", null), o.map((function (t) {
                return e.default.createElement("option", {key: t, value: t}, t)
            }))) : null
        };

        function Ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function et(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ze(Object(n), !0).forEach((function (t) {
                    tt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function tt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function nt(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return rt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rt(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function rt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var ot = (0, e.forwardRef)((function (t, n) {
            var r = t.question, o = t.className, i = t.onResult, a = t.onBlur, s = r.text, l = r.answers, c = r.content,
                u = nt((0, e.useState)({}), 2), d = u[0], p = u[1], f = nt((0, e.useState)(!1), 2), h = f[0], m = f[1],
                g = nt((0, e.useState)({}), 2), v = g[0], y = g[1], b = (0, e.useMemo)((function () {
                    return l.map((function (e) {
                        return I(e)
                    }))
                }), [l]), _ = function () {
                    var e = !0, t = {};
                    Object.keys(d).forEach((function (n) {
                        l[n].find((function (e) {
                            return e instanceof Array
                        }))[0] !== d[n] ? (t[n] = !1, e = !1) : t[n] = !0
                    })), i(e), m(!0), y(t)
                }, w = function () {
                    var e = et({}, d);
                    for (var t in v) !1 === v[t] && delete e[t];
                    p(e), y({}), m(!1)
                }, x = function (e) {
                    return h ? !0 === v[e] ? "right-mark" : "wrong-mark" : ""
                }, E = (0, e.useMemo)((function () {
                    var t = 0, n = c.replaceAll("|_dd_|", (function () {
                        var e = '<select id="'.concat(t, '"></select>');
                        return t++, e
                    }));
                    return (0, Je.ZP)(n, {
                        transform: function (t) {
                            if ("select" === t.name) {
                                var n, r = t.attribs.id;
                                return e.default.createElement(Qe, {
                                    className: x(r),
                                    id: r,
                                    value: null !== (n = d[r]) && void 0 !== n ? n : "",
                                    options: b[r],
                                    onChange: function (e) {
                                        return function (e, t) {
                                            p((function (n) {
                                                return "" === e.target.value ? Object.fromEntries(Object.entries(n).filter((function (e) {
                                                    var n = nt(e, 2), r = n[0];
                                                    return n[1], Number(r) !== t
                                                }))) : et(et({}, n), {}, tt({}, t, e.target.value))
                                            }))
                                        }(e, r)
                                    }
                                })
                            }
                        }
                    })
                }), [c, l, d, v]);
            return (0, e.useImperativeHandle)(n, (function () {
                return {check: _, again: w}
            })), (0, e.useEffect)((function () {
                var e = Object.keys(d).length === l.length;
                a(e)
            }), [d]), e.default.createElement(R, {
                text: s,
                locked: h,
                className: "drop-down ".concat(null != o ? o : "")
            }, E)
        })), it = function (t) {
            var n = t.value, r = t.className, o = t.onChange;
            return e.default.createElement("input", {value: n, className: "eom-input ".concat(r || ""), onChange: o})
        };

        function at(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function st(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? at(Object(n), !0).forEach((function (t) {
                    lt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : at(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function lt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function ct(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return ut(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ut(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ut(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var dt = (0, e.forwardRef)((function (t, n) {
            var r = t.question, o = (t.onChange, t.className), i = t.onResult, a = t.onBlur, s = r.text, l = r.answers,
                c = r.content, u = ct((0, e.useState)({}), 2), d = u[0], p = u[1], f = ct((0, e.useState)(!1), 2),
                h = f[0], m = f[1], g = ct((0, e.useState)({}), 2), v = g[0], y = g[1], b = function (e) {
                    return function (t) {
                        p((function (n) {
                            return st(st({}, n), {}, lt({}, e, t.target.value))
                        }))
                    }
                }, _ = function () {
                    var e = !0, t = {};
                    Object.keys(d).forEach((function (n) {
                        l[n].map((function (e) {
                            return e.toLowerCase()
                        })).includes(d[n].toLowerCase()) ? t[n] = !0 : (e = !1, t[n] = !1)
                    })), i(e), m(!0), y(t)
                }, w = function () {
                    var e = st({}, d);
                    Object.keys(v).forEach((function (t) {
                        !1 === v[t] && delete e[t]
                    })), y({}), m(!1), p(e)
                }, x = function (e) {
                    return h ? !0 === v[e] ? "right-mark" : "wrong-mark" : ""
                };
            (0, e.useImperativeHandle)(n, (function () {
                return {check: _, again: w}
            }));
            var E = (0, e.useMemo)((function () {
                var t = 0, n = c.replaceAll("|_dd_|", (function () {
                    var e = '<input id="'.concat(t, '"/>');
                    return t++, e
                }));
                return (0, Je.ZP)(n, {
                    transform: function (t) {
                        if ("input" === t.name) {
                            var n, r = t.attribs.id;
                            return e.default.createElement(it, {
                                key: r,
                                value: null !== (n = d[r]) && void 0 !== n ? n : "",
                                className: x(r),
                                onChange: b(r)
                            })
                        }
                    }
                })
            }), [c, d, v]);
            return (0, e.useEffect)((function () {
                var e = Object.entries(d).filter((function (e) {
                    var t = ct(e, 2);
                    return t[0], "" !== t[1]
                })).length === l.length;
                a(e)
            }), [d]), e.default.createElement(R, {
                text: s,
                locked: h,
                className: "input-text ".concat(null != o ? o : "")
            }, E)
        }));

        function pt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ft(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pt(Object(n), !0).forEach((function (t) {
                    ht(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ht(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function mt(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return gt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gt(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function gt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var vt = (0, e.forwardRef)((function (t, n) {
            var r = t.question, o = (t.onChange, t.onResult), i = t.onBlur, a = t.className, s = r.text, l = r.content,
                c = r.answers, u = mt((0, e.useState)(!1), 2), d = u[0], p = u[1], f = mt((0, e.useState)({}), 2),
                h = f[0], m = f[1], g = function () {
                    var e = h;
                    p(!0), o(e)
                }, v = function () {
                    p(null)
                }, y = (0, e.useMemo)((function () {
                    var t = 0, n = l.replaceAll("|_txt_|", (function () {
                        var e = '<textarea id="'.concat(t, '" ></textarea>');
                        return t++, e
                    }));
                    return (0, Je.ZP)(n, {
                        transform: function (t) {
                            if ("textarea" === t.name) {
                                var n, r = t.attribs.id;
                                return e.default.createElement("textarea", {
                                    id: r,
                                    value: null !== (n = h[r]) && void 0 !== n ? n : "",
                                    placeholder: "Напиши свой ответ",
                                    onChange: function (e) {
                                        return function (e, t) {
                                            m((function (n) {
                                                return ft(ft({}, n), {}, ht({}, e, t))
                                            }))
                                        }(r, e.target.value)
                                    }
                                })
                            }
                        }
                    })
                }), [h, d]);
            return (0, e.useImperativeHandle)(n, (function () {
                return {check: g, again: v}
            }), [h]), (0, e.useEffect)((function () {
                var e = Object.entries(h).filter((function (e) {
                    var t = mt(e, 2);
                    return t[0], "" != t[1].trim()
                })).length;
                i(e === c.length)
            }), [h]), e.default.createElement(R, {text: s, locked: d, className: "free-answer ".concat(a)}, y)
        }));

        function yt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function bt(e, t, n) {
            var r = "#fff", o = "#53a82d", i = "#c22233", a = null, s = null, l = null, c = null, u = !1, d = null,
                p = null, f = window, h = document, m = h.documentElement, g = h.getElementsByTagName("body")[0],
                v = f.innerWidth || m.clientWidth || g.clientWidth,
                y = (f.innerHeight || m.clientHeight || g.clientHeight, !1);
            t.horizontal && (y = !0, t.textAndPhoto && 0 == t.leftBlock[0].indexOf("<img") && alert("В данном типе теста: шнурки-текст-картинка, в leftBlock должны находиться только тектовые элементы.")), v < 1280 && (y = !1);
            var b = function () {
                s.lastElementChild.getBoundingClientRect().bottom < l.lastElementChild.getBoundingClientRect().bottom ? _(s, l) : _(l, s)
            }, _ = function (e, t) {
                var n = e.lastElementChild.getBoundingClientRect().bottom,
                    r = t.lastElementChild.getBoundingClientRect().bottom, o = Math.abs(n - r) / 2;
                e.firstElementChild.style.marginTop = o + "px"
            }, w = function (t, n) {
                var r, o, i;
                r = d.dataset.side + "_" + d.dataset.connElem, (o = e.querySelector('[data-drawing-for="'.concat(r, '"]'))) && 2 == (o = o.dataset.drawingTo.split("_")).length && e.querySelectorAll('[data-side="'.concat(o[0], '"][data-conn-elem="').concat(o[1], '"]')).forEach((function (e, t) {
                    e.isEmpty = !0
                })), (o = e.querySelector('[data-drawing-for="'.concat(r, '"]'))) && 2 == (o = o.dataset.drawingFor.split("_")).length && e.querySelectorAll('[data-side="'.concat(o[0], '"][data-conn-elem="').concat(o[1], '"]')).forEach((function (e, t) {
                    e.isEmpty = !0
                })), (o = e.querySelector('[data-drawing-to="'.concat(r, '"]'))) && 2 == (o = o.dataset.drawingTo.split("_")).length && e.querySelectorAll('[data-side="'.concat(o[0], '"][data-conn-elem="').concat(o[1], '"]')).forEach((function (e, t) {
                    e.isEmpty = !0
                })), (o = e.querySelector('[data-drawing-to="'.concat(r, '"]'))) && 2 == (o = o.dataset.drawingFor.split("_")).length && e.querySelectorAll('[data-side="'.concat(o[0], '"][data-conn-elem="').concat(o[1], '"]')).forEach((function (e, t) {
                    e.isEmpty = !0
                })), d.isEmpty = !0, p && (p.isEmpty = !0), d.parentNode.dataset.leftContainer ? (i = T(d), y && (i = A(d))) : (i = C(d), y && (i = O(d)));
                var s = d.lineCont;
                !function (t, n) {
                    var r = e.querySelector("[data-svg-cont]"),
                        o = r.querySelector('[data-drawing-for="'.concat(t, '"], [data-drawing-to="').concat(n, '"]'));
                    o && (o.dataset.drawingTo = "0", o.innerHTML = ""), (o = r.querySelector('[data-drawing-for="'.concat(n, '"], [data-drawing-to="').concat(t, '"]'))) && (o.dataset.drawingTo = "0", o.innerHTML = "")
                }(s.dataset.drawingFor, s.dataset.drawingTo);
                var l = function (e, t, n) {
                    var r = n.createSVGPoint();
                    r.x = e, r.y = t;
                    var o = n.getScreenCTM();
                    return r.matrixTransform(o.inverse())
                }(t, n, a);
                s.innerHTML = k(i.x, i.y, l.x, l.y)
            }, x = function () {
                null == p ? d && d.isEmpty && (d.lineCont.innerHTML = "", d.isEmpty = !0) : (p.style.backgroundColor = null, d != p && d.isEmpty && p.isEmpty ? (P(d, p), d.isEmpty = !1, p.isEmpty = !1, d.lineCont.dataset.drawingTo = p.dataset.side + "_" + p.dataset.connElem) : (d.lineCont.innerHTML = "", d.isEmpty = !0, p.lineCont.innerHTML = "", p.isEmpty = !0)), E() ? n(!0) : n(!1)
            }, E = function () {
                var e = !1;
                return D().length == s.querySelectorAll("[data-conn-elem]").length && (e = !0), e
            }, k = function (e, t, n, r) {
                return S(e, t, n, r)
            }, S = function (e, t, n, o) {
                var i = (n - e) / 2;
                if (y) {
                    if (t > o) {
                        var a = [e, t];
                        e = n, t = o, n = a[0], o = a[1]
                    }
                    return i = Math.abs(n - e) / 5, '<path d="M '.concat(e, " ").concat(t, " C ").concat(e, " ").concat(t + i, ", ").concat(n, " ").concat(o - i, ", ").concat(n, " ").concat(o, '" style="fill:none;stroke:').concat(r, ";stroke-width:").concat(3, '"></path>')
                }
                return '<path d="M '.concat(e, " ").concat(t, " C ").concat(e + i, " ").concat(t, ", ").concat(n - i, " ").concat(o, ", ").concat(n, " ").concat(o, '" style="fill:none;stroke:').concat(r, ";stroke-width:").concat(3, '"></path>')
            }, T = function (e) {
                var t = {x: 0, y: 0};
                return t.x = e.getBoundingClientRect().right - a.getBoundingClientRect().left, t.y = e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2 - a.getBoundingClientRect().top, t
            }, C = function (e) {
                var t = {x: 0, y: 0};
                return t.x = e.getBoundingClientRect().left - a.getBoundingClientRect().left, t.y = e.getBoundingClientRect().top + e.getBoundingClientRect().height / 2 - a.getBoundingClientRect().top, t
            }, A = function (e) {
                var t = {x: 0, y: 0};
                return t.x = e.getBoundingClientRect().right - e.getBoundingClientRect().width / 2 - a.getBoundingClientRect().left, t.y = e.getBoundingClientRect().bottom - a.getBoundingClientRect().top, t
            }, O = function (e) {
                var t = {x: 0, y: 0};
                return t.x = e.getBoundingClientRect().left + e.getBoundingClientRect().width / 2 - a.getBoundingClientRect().left, t.y = e.getBoundingClientRect().top - a.getBoundingClientRect().top, t
            }, P = function (e, t) {
                var n = e;
                if (t.parentNode.dataset.leftContainer) {
                    var r = e;
                    e = t, t = r
                }
                var o = T(e), i = C(t);
                y && (o = A(e), i = O(t)), n.lineCont.innerHTML = k(o.x, o.y, i.x, i.y)
            }, M = function () {
                var t = s.getBoundingClientRect().right, n = l.getBoundingClientRect().left,
                    r = s.getBoundingClientRect().top, o = s.getBoundingClientRect().bottom,
                    i = l.getBoundingClientRect().bottom, c = o;
                i > o && (c = i), y && (t = s.getBoundingClientRect().left, n = s.getBoundingClientRect().right, r = s.getBoundingClientRect().bottom, c = o = l.getBoundingClientRect().top);
                var u = n - t, d = c - r;
                (a = e.querySelector("[data-drawing]").querySelector("svg")).style.width = u, a.style.height = d, a.setAttribute("width", u), a.setAttribute("height", d)
            }, D = function () {
                var t = [];
                return e.querySelectorAll("[data-drawing-to]").forEach((function (e, n) {
                    "0" != e.dataset.drawingTo && e.innerHTML && t.push([e.dataset.drawingFor, e.dataset.drawingTo])
                })), t
            }, N = function (t) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = o;
                0 == r && (a = i), t.forEach((function (t, o) {
                    (n = (n = e.querySelector('[data-drawing-for="'.concat(t, '"]'))).querySelector("path")) && (n.dataset.isBad = "0", 0 == r && (n.dataset.isBad = "1"), n.style.stroke = a)
                }))
            };
            return {
                init: function () {
                    l = [], t.rightBlock.forEach((function (e, t) {
                        l.push([e, t + 1])
                    })), l.sort((function () {
                        return .5 - Math.random()
                    })), e.innerHTML = '\n\t\t    <div data-connection-cont="1">\n\t\t\t\t<span data-left-container="1">\n\t\t\t\t'.concat(t.leftBlock.map((function (e, t) {
                        return '<div data-conn-elem="'.concat(t + 1, '" data-side="l">').concat(e, "</div>")
                    })).join(""), '\n\t\t\t\t</span>\n\n\t\t\t\t<span data-drawing="0">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" >\n\t\t\t\t\t\t<g data-svg-cont="0">\n\t\t\t\t\t\t\t<g data-for-elems-left="0">\n\t\t\t\t\t\t\t</g>\n\n\t\t\t\t\t\t\t<g data-for-elems-right="0">\n\t\t\t\t\t\t\t</g>\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<g data-for-simple-line="0">\n\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</svg>\n\t\t\t\t</span>\n\n\t\t\t\t<span data-right-container="1">\n\t\t\t\t').concat(l.map((function (e, t) {
                        return '<div data-conn-elem="'.concat(e[1], '" data-side="r">').concat(e[0], "</div>")
                    })).join(""), "\n\t\t\t\t</span>\t\t\t\t\n\t\t\t</div>\n\t\t</div>"), s = e.querySelector("[data-left-container]"), l = e.querySelector("[data-right-container]");
                    var n = "";
                    s.querySelectorAll("[data-conn-elem]").forEach((function (e, t) {
                        n += '<g data-drawing-for="l_'.concat(t + 1, '" data-drawing-to="0"></g>')
                    })), e.querySelector("[data-for-elems-left]").innerHTML = n, n = "", l.querySelectorAll("[data-conn-elem]").forEach((function (e, t) {
                        n += '<g data-drawing-for="r_'.concat(t + 1, '" data-drawing-to="0"></g>')
                    })), e.querySelector("[data-for-elems-right]").innerHTML = n, function () {
                        c = e.querySelectorAll("[data-conn-elem]"), s.querySelectorAll("[data-conn-elem]").forEach((function (t, n) {
                            t.lineCont = e.querySelector("[data-for-elems-left]").querySelector('[data-drawing-for="l_'.concat(t.dataset.connElem, '"]'))
                        })), l.querySelectorAll("[data-conn-elem]").forEach((function (t, n) {
                            t.lineCont = e.querySelector("[data-for-elems-right]").querySelector('[data-drawing-for="r_'.concat(t.dataset.connElem, '"]'))
                        }));
                        var t = function (e) {
                            e.disabled || (M(), u = !0, d = e)
                        }, n = function () {
                            u && (u = !1, x(), p = null, d = null)
                        }, r = function (e) {
                            if (u && null != d) {
                                var t, n;
                                e = e || window.event;
                                var r = window.pageXOffset || document.documentElement.scrollLeft,
                                    o = window.pageYOffset || document.documentElement.scrollTop;
                                if (e.changedTouches) {
                                    t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY, t -= r, n -= o;
                                    var i = document.elementsFromPoint(t, n)[0];
                                    i.dataset.connElem || (i = document.elementsFromPoint(t, n)[1]), i.dataset.connElem ? i.isEmpty && ((p = i).style.backgroundColor = "#f9f9f9") : p && (p.style.backgroundColor = null, p = null), e.preventDefault()
                                } else t = e.pageX, n = e.pageY, t -= r, n -= o;
                                p ? p.parentNode.dataset.leftContainer ? d.parentNode.dataset.leftContainer || d.isEmpty && p.isEmpty && P(d, p) : d.parentNode.dataset.rightContainer || d.isEmpty && p.isEmpty && P(d, p) : w(t, n)
                            }
                        };
                        c.forEach((function (e, n) {
                            e.isEmpty = !0, e.addEventListener("touchstart", (function (e) {
                                t(this)
                            })), e.addEventListener("mousedown", (function (e) {
                                t(this)
                            })), e.addEventListener("mouseover", (function (e) {
                                this.isEmpty && (p = this, this.style.backgroundColor = "#f9f9f9")
                            })), e.addEventListener("mouseout", (function (e) {
                                p == this && (p = null, this.style.backgroundColor = null)
                            }))
                        })), e.addEventListener("touchmove", (function (e) {
                            r(e)
                        }), !1), e.addEventListener("mousemove", (function (e) {
                            r(e)
                        })), e.parentNode.addEventListener("touchend", (function (e) {
                            n()
                        })), e.parentNode.addEventListener("mouseup", (function (e) {
                            n()
                        }))
                    }(), M(), t.horizontal ? v < 1280 && b() : b()
                }, check: function () {
                    return function (t) {
                        var n, r, a, l, c = !0;
                        return t.forEach((function (t, s) {
                            n = t[0].split("_")[0], r = t[1].split("_")[0], a = t[0].split("_")[1], l = t[1].split("_")[1], a == l ? (N(t), e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).disabled = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).disabled = !0, e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.cursor = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.cursor = "default", e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.backgroundColor = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.backgroundColor = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.borderColor = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.borderColor = o, e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.color = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.color = "#FFF") : (N(t, 0), e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).color0 = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).color0 = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.color, e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).borderColor0 = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).borderColor0 = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.borderColor, e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.backgroundColor = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.backgroundColor = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.borderColor = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.borderColor = i, e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(a, '"]')).style.color = e.querySelector('[data-side="'.concat(r, '"][data-conn-elem="').concat(l, '"]')).style.color = "#FFF", c = !1)
                        })), t.length != s.querySelectorAll("[data-conn-elem]").length && (c = !1), c
                    }(D())
                }, again: function () {
                    var t, n, r, o;
                    D().forEach((function (i) {
                        t = i[0].split("_")[0], n = i[1].split("_")[0], r = i[0].split("_")[1], o = i[1].split("_")[1], r == o || (e.querySelector('[data-side="'.concat(t, '"][data-conn-elem="').concat(r, '"]')).isEmpty = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(o, '"]')).isEmpty = !0, e.querySelector('[data-side="'.concat(t, '"][data-conn-elem="').concat(r, '"]')).style.backgroundColor = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(o, '"]')).style.backgroundColor = null, e.querySelector('[data-side="'.concat(t, '"][data-conn-elem="').concat(r, '"]')).style.color = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(o, '"]')).style.color = e.querySelector('[data-side="'.concat(t, '"][data-conn-elem="').concat(r, '"]')).color0, e.querySelector('[data-side="'.concat(t, '"][data-conn-elem="').concat(r, '"]')).style.borderColor = e.querySelector('[data-side="'.concat(n, '"][data-conn-elem="').concat(o, '"]')).style.borderColor = e.querySelector('[data-side="'.concat(t, '"][data-conn-elem="').concat(r, '"]')).borderColor0, e.querySelector('[data-drawing-for="'.concat(t, "_").concat(r, '"][data-drawing-to="').concat(n, "_").concat(o, '"]')).innerHTML = "")
                    }))
                }
            }
        }

        var _t = (0, e.forwardRef)((function (t, n) {
            var r, o, i = t.question, a = t.onResult, s = t.onBlur, l = t.className,
                c = (r = (0, e.useState)(!1), o = 2, function (e) {
                    if (Array.isArray(e)) return e
                }(r) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [], a = !0, s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                        } catch (e) {
                            s = !0, o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(r, o) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return yt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yt(e, t) : void 0
                    }
                }(r, o) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), u = c[0], d = c[1], p = (0, e.useRef)(null), f = i.text;

            function h() {
                var e = p.current.sc.check();
                a(e), d(!0)
            }

            function m() {
                p.current.sc.again(), d(!1)
            }

            return (0, e.useImperativeHandle)(n, (function () {
                return {check: h, again: m}
            })), (0, e.useEffect)((function () {
                p.current.sc = bt(p.current, i, s), p.current.sc.init()
            }), []), e.default.createElement(R, {
                text: f,
                locked: u,
                className: "single-connect ".concat(l, " ").concat(i.horizontal ? "horizontal" : "", " ").concat(i.textAndPhoto ? "text" : "")
            }, e.default.createElement("div", {ref: p}))
        }));

        function wt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function xt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var Et = function () {
            function e(t, n, r) {
                var o = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.props = n, this.isRandomize = !0, this.onBlur = r, this.cont = t, this.sortableContainer = t, this.props.items.multi ? (this.items = [], this.props.items.multi.forEach((function (e) {
                    o.items.push([]), e.forEach((function (e) {
                        o.items[o.items.length - 1].push(e)
                    }))
                }))) : (this.items = this.props.items.slice(), this.isRandomize && this.items.sort((function () {
                    return .5 - Math.random()
                }))), this.props.items.multi ? this.drawMultiView() : this.drawView()
            }

            var t, r;
            return t = e, (r = [{
                key: "drawView", value: function () {
                    var e = this, t = "";
                    this.items.forEach((function (e, n) {
                        t += '\n                <div class="grid-item">\n                    <span data-sortable="0">'.concat(n + 1, '</span>. <span data-val="0">').concat(e, "</span>\n                </div>\n            ")
                    }));
                    var r = n(2435);
                    this.cont.innerHTML = '\n            <div class="grid">\n                '.concat(t, "\n            </div>\n        ");
                    var o = this.cont.querySelector(".grid");
                    this.sortable = r.create(o, {
                        animation: 100, onChange: function () {
                            e.redrawNumbers(), e.onBlur(!0)
                        }
                    }), this.listItems = Array.from(this.cont.querySelectorAll(".grid-item"))
                }
            }, {
                key: "drawMultiView", value: function () {
                    var e = this, t = "", r = n(2435);
                    this.items.forEach((function (n, r) {
                        t += e.props.items.headers[r] + '<div data-grid="'.concat(r, '"></div>')
                    })), this.cont.innerHTML = t, this.items.forEach((function (n, o) {
                        e.isRandomize && n.sort((function () {
                            return .5 - Math.random()
                        })), t = "", n.forEach((function (e, n) {
                            t += '\n                    <div class="grid-item">\n                        <span data-sortable="0">'.concat(n + 1, '</span>. <span data-val="0">').concat(e, "</span>\n                    </div>")
                        })), e.cont.querySelectorAll("[data-grid]")[o].innerHTML = '\n                <div class="grid">\n                    '.concat(t, "\n                </div>\n            ");
                        var i = e.cont.querySelectorAll("[data-grid]")[o].querySelector(".grid");
                        e.sortable = r.create(i, {
                            animation: 100, onChange: function () {
                                e.redrawNumbers(), e.onBlur(!0)
                            }
                        }), e.listItems = Array.from(e.cont.querySelectorAll(".grid-item"))
                    }))
                }
            }, {
                key: "redrawNumbers", value: function () {
                    this.props.items.multi ? this.cont.querySelectorAll("[data-grid]").forEach((function (e, t) {
                        e.querySelectorAll(".grid-item").forEach((function (e, t) {
                            e.querySelector("[data-sortable]").innerHTML = t + 1
                        }))
                    })) : this.cont.querySelectorAll(".grid-item").forEach((function (e, t) {
                        e.querySelector("[data-sortable]").innerHTML = t + 1
                    }))
                }
            }, {
                key: "check", value: function () {
                    return this.checkSortable(this.collectData())
                }
            }, {
                key: "collectData", value: function () {
                    var e = [];
                    return this.listItems = Array.from(this.cont.querySelectorAll(".grid-item")), this.listItems.forEach((function (t, n) {
                        e.push(t.querySelector("[data-val]").innerHTML)
                    })), e
                }
            }, {
                key: "checkSortable", value: function (e) {
                    var t, n;
                    return console.log(e), n = this.props.items.multi ? this.props.items.multi.slice() : this.props.items.slice(), console.log(n), t = e.toString() == n.toString(), this.highLightBad(e), t
                }
            }, {
                key: "highLightBad", value: function (e) {
                    var t, n = this;
                    t = this.props.items.multi ? [].concat.apply([], this.props.items.multi) : this.props.items.slice(), e.forEach((function (e, r) {
                        e.toString() != t[r].toString() ? n.listItems[r].classList.add("bad") : n.listItems[r].classList.add("good")
                    }))
                }
            }, {
                key: "again", value: function () {
                    this.listItems.forEach((function (e, t) {
                        e.classList.remove("bad"), e.classList.remove("good")
                    }))
                }
            }]) && xt(t.prototype, r), Object.defineProperty(t, "prototype", {writable: !1}), e
        }(), kt = (0, e.forwardRef)((function (t, n) {
            var r, o, i = t.question, a = t.onResult, s = t.onBlur, l = t.className,
                c = (r = (0, e.useState)(!1), o = 2, function (e) {
                    if (Array.isArray(e)) return e
                }(r) || function (e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [], a = !0, s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                        } catch (e) {
                            s = !0, o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(r, o) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return wt(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wt(e, t) : void 0
                    }
                }(r, o) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), u = c[0], d = c[1], p = (0, e.useRef)(null), f = i.text;

            function h() {
                var e = p.current.sl.check();
                a(e), d(!0)
            }

            function m() {
                p.current.sl.again(), d(!1)
            }

            return (0, e.useImperativeHandle)(n, (function () {
                return {check: h, again: m}
            })), (0, e.useEffect)((function () {
                p.current.sl = new Et(p.current, i, s)
            }), []), e.default.createElement(R, {
                text: f,
                locked: u,
                className: "sortable ".concat(l)
            }, e.default.createElement("div", {ref: p}))
        })), St = (0, e.forwardRef)((function (t, n) {
            var r = t.question, o = (t.onChange, t.onResult), i = (t.onBlur, t.className), a = r.text, s = r.content;
            return (0, e.useEffect)((function () {
                o(!0)
            }), []), e.default.createElement(R, {
                text: a,
                className: "empty ".concat(i)
            }, e.default.createElement("div", {dangerouslySetInnerHTML: {__html: s}}))
        }));

        function Tt() {
            return Tt = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Tt.apply(this, arguments)
        }

        var Ct = function (t, n) {
            var r = t.question;
            if (!r) return null;
            switch (r.type) {
                case"choice":
                    return e.default.createElement(U, Tt({ref: n}, t));
                case"multiple-choice":
                    return e.default.createElement(ye, Tt({ref: n}, t));
                case"dd":
                    return e.default.createElement($e, Tt({ref: n}, t));
                case"dropdown":
                    return e.default.createElement(ot, Tt({ref: n}, t));
                case"input-text":
                    return e.default.createElement(dt, Tt({ref: n}, t));
                case"free-answer":
                    return e.default.createElement(vt, Tt({ref: n}, t));
                case"single-connect":
                    return e.default.createElement(_t, Tt({ref: n}, t));
                case"sortable-list":
                    return e.default.createElement(kt, Tt({ref: n}, t));
                case"empty":
                    return e.default.createElement(St, Tt({ref: n}, t));
                default:
                    return e.default.createElement("div", null, "Ошибка, неправильный тип вопроса")
            }
        }, At = (0, e.forwardRef)(Ct), Ot = function (t) {
            var n = t.questionType, r = t.result, o = t.comment, i = t.successMessage, a = t.wrongMessage,
                s = (0, e.useMemo)((function () {
                    return n && "free-answer" === n ? "Ответ принят" : r ? "Правильно!" : "Неверно"
                }), [r]);
            return (0, e.useEffect)((function () {
                r >= 1 ? H.goodAnswer() : 0 === r && H.badAnswer()
            }), [r]), void 0 === r ? null : e.default.createElement("div", {className: "message-box"}, e.default.createElement("div", null, e.default.createElement("div", {className: "result ".concat(r ? "result-right" : "result-wrong")}, s), o && e.default.createElement("div", {
                className: "comment",
                dangerouslySetInnerHTML: {__html: o}
            }), !0 === Boolean(r) && i && e.default.createElement("div", {
                className: "success-message",
                dangerouslySetInnerHTML: {__html: i}
            }), !1 === Boolean(r) && a && e.default.createElement("div", {
                className: "wrong-message",
                dangerouslySetInnerHTML: {__html: a}
            })))
        }, Pt = function (t) {
            var n = t.disabled, r = t.children, o = t.type, i = void 0 === o ? "default" : o, a = t.className,
                s = t.style, l = t.onClick;
            return e.default.createElement("button", {
                style: s,
                disabled: n,
                className: "eom-btn eom-btn__".concat(i, " ").concat(a || ""),
                onClick: function (e) {
                    l && l(e)
                }
            }, r)
        }, Mt = (0, e.memo)(Pt), Dt = function (t) {
            var n = t.checkEnabled, r = t.againEnabled, o = t.nextEnabled, i = t.onCheck, a = t.onNext, s = t.onAgain;
            return e.default.createElement("div", {className: "quiz-controls"}, e.default.createElement(Mt, {
                disabled: !n,
                onClick: i,
                type: "primary"
            }, "Проверить"), e.default.createElement(Mt, {
                style: {visibility: r ? "visible" : "hidden"},
                onClick: s
            }, "Повторить"), e.default.createElement(Mt, {
                style: {visibility: o ? "visible" : "hidden"},
                onClick: a
            }, "Далее"))
        };

        function Nt(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, s = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) ;
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }
            }(e, t) || function (e, t) {
                if (e) {
                    if ("string" == typeof e) return It(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? It(e, t) : void 0
                }
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function It(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var Lt = function (t) {
            var n = t.data, r = Nt((0, e.useState)(!1), 2), o = r[0], i = r[1];
            return n ? e.default.createElement(e.default.Fragment, null, e.default.createElement("button", {
                className: "btn-hint",
                onClick: function () {
                    return i(!0)
                }
            }, "?"), e.default.createElement(pe, {
                className: "modal-info", onClose: function () {
                    return i(!1)
                }, show: o
            }, e.default.createElement("div", {dangerouslySetInnerHTML: {__html: n}}))) : null
        }, jt = function (t) {
            var n, r, o, i, a, s, l, c = t.questions, u = (t.diagnostic, t.subtitle, t.attempts), d = void 0 !== u && u,
                h = t.attemptsForReset, y = void 0 === h ? void 0 : h, b = (0, e.useRef)(null),
                _ = (0, e.useContext)(A), w = _.currentQuestion, x = _.checkEnabled, E = _.nextEnabled,
                k = _.againEnabled, S = _.results, T = _.finished, C = _.dispatch,
                O = Nt((0, e.useState)(new Date), 1)[0], N = Nt((0, e.useState)(0), 2), I = N[0], L = N[1],
                j = Nt((0, e.useState)(!1), 2), q = j[0], R = j[1];

            function B() {
                C(g({questions: c, attempts: d})), L(0), R(!1)
            }

            var z = (0, e.useMemo)((function () {
                var e = !0;
                return c[w] && "empty" === c[w].type && (e = !1), e
            }), [w]), U = (0, e.useMemo)((function () {
                var e, t;
                if (S) return null !== (e = null === (t = S[w]) || void 0 === t ? void 0 : t.score) && void 0 !== e ? e : void 0
            }), [w, S]);
            return (0, e.useEffect)((function () {
                C(g({questions: c, attempts: d}))
            }), []), (0, e.useEffect)((function () {
                T && (Object.keys(S).reduce((function (e, t) {
                    return e + Number(S[t].score)
                }), 0), c.reduce((function (e, t) {
                    var n;
                    return e + Number(null !== (n = t.score) && void 0 !== n ? n : 1)
                }), 0), Math.round((new Date - O) / 1e3))
            }), [T, S]), (0, e.useEffect)((function () {
                if (c[w] && d) {
                    var e = c[w].attemptsForReset || y;
                    I === e && R(!0)
                }
            }), [y, d, c, w, I]), e.default.createElement(D, null, e.default.createElement(P, {title: e.default.createElement("div", {className: "question"}, "Вопрос ", w + 1, " из ", c.length)}), e.default.createElement(M, null, e.default.createElement(Lt, {data: null === (n = c[w]) || void 0 === n ? void 0 : n.hint}), e.default.createElement(At, {
                key: "id_".concat(w),
                ref: b,
                className: "id_".concat(w, " ").concat(null !== (r = null === (o = c[w]) || void 0 === o ? void 0 : o.class) && void 0 !== r ? r : ""),
                question: c[w],
                onBlur: function (e) {
                    return C(v(e))
                },
                onResult: function (e) {
                    return C(function (e) {
                        return {type: f, payload: e}
                    }(e))
                }
            }), z && e.default.createElement(Ot, {
                questionType: null === (i = c[w]) || void 0 === i ? void 0 : i.type,
                result: U,
                comment: null === (a = c[w]) || void 0 === a ? void 0 : a.comment,
                successMessage: null === (s = c[w]) || void 0 === s ? void 0 : s.successMessage,
                wrongMessage: null === (l = c[w]) || void 0 === l ? void 0 : l.wrongMessage
            }), e.default.createElement(Dt, {
                checkEnabled: x, nextEnabled: E, againEnabled: k, onCheck: function () {
                    H.simpleClick(), b.current.check(), C(v(!1))
                }, onNext: function () {
                    H.simpleClick(), C({type: p, payload: null}), L(0)
                }, onAgain: function () {
                    b.current.again(), C({type: m, payload: null}), L((function (e) {
                        return e + 1
                    }))
                }
            }), e.default.createElement(pe, {
                className: "modal-info",
                show: q,
                onClose: B
            }, e.default.createElement("p", null, "К сожалению, снова допущены ошибки."), e.default.createElement("p", null, "Пройди тест заново."), e.default.createElement(Mt, {
                type: "outline-info",
                onClick: B
            }, "Хорошо"))))
        }, qt = function (t) {
            var n = t.data;
            return e.default.createElement("div", {className: "wrapper"}, e.default.createElement(u, null), e.default.createElement("h1", {className: "title"}, n.title), e.default.createElement(O, null, e.default.createElement(jt, {questions: n.questions})))
        };
        !function (e, t) {
            var n, o, i = document.body;
            document.body.classList.add("theme-" + (null !== (n = e.theme) && void 0 !== n ? n : "default")), document.body.classList.add("type-" + e.type), document.title = null !== (o = e.title) && void 0 !== o ? o : "", t(i);
            var a = new r, l = i.querySelector(".reload_pg");
            l && l.addEventListener("click", (function () {
                a.simpleClick(), confirm("Вы уверены, что хотите начать заново?") && window.location.reload(!0)
            })), e.copyrightInfo && new s(i, e.copyrightInfo), e.customBgColor && (i.querySelector("div").style.backgroundColor = e.customBgColor)
        }(l, (function (t) {
            e.default.render(e.default.createElement(qt, {data: l}), t)
        }))
    }()
}();