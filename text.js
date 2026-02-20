var wh = e => {
    throw TypeError(e)
}
;
var $l = (e, t, n) => t.has(e) || wh("Cannot " + n);
var N = (e, t, n) => ($l(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? wh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => ($l(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Oe = (e, t, n) => ($l(e, t, "access private method"),
n);
var ws = (e, t, n, r) => ({
    set _(o) {
        H(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function H1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Ig(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Vg = {
    exports: {}
}
  , el = {}
  , _g = {
    exports: {}
}
  , q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is = Symbol.for("react.element")
  , K1 = Symbol.for("react.portal")
  , G1 = Symbol.for("react.fragment")
  , Y1 = Symbol.for("react.strict_mode")
  , Q1 = Symbol.for("react.profiler")
  , q1 = Symbol.for("react.provider")
  , X1 = Symbol.for("react.context")
  , Z1 = Symbol.for("react.forward_ref")
  , J1 = Symbol.for("react.suspense")
  , eb = Symbol.for("react.memo")
  , tb = Symbol.for("react.lazy")
  , bh = Symbol.iterator;
function nb(e) {
    return e === null || typeof e != "object" ? null : (e = bh && e[bh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Fg = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , zg = Object.assign
  , Bg = {};
function Uo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Bg,
    this.updater = n || Fg
}
Uo.prototype.isReactComponent = {};
Uo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Uo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function $g() {}
$g.prototype = Uo.prototype;
function wd(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Bg,
    this.updater = n || Fg
}
var bd = wd.prototype = new $g;
bd.constructor = wd;
zg(bd, Uo.prototype);
bd.isPureReactComponent = !0;
var Sh = Array.isArray
  , Ug = Object.prototype.hasOwnProperty
  , Sd = {
    current: null
}
  , Wg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Hg(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Ug.call(t, r) && !Wg.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: is,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Sd.current
    }
}
function rb(e, t) {
    return {
        $$typeof: is,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Cd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === is
}
function ob(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ch = /\/+/g;
function Ul(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ob("" + e.key) : t.toString(36)
}
function Ks(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case is:
            case K1:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + Ul(s, 0) : r,
        Sh(o) ? (n = "",
        e != null && (n = e.replace(Ch, "$&/") + "/"),
        Ks(o, t, n, "", function(u) {
            return u
        })) : o != null && (Cd(o) && (o = rb(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Ch, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Sh(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Ul(i, a);
            s += Ks(i, t, n, l, o)
        }
    else if (l = nb(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + Ul(i, a++),
            s += Ks(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function bs(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Ks(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function ib(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ye = {
    current: null
}
  , Gs = {
    transition: null
}
  , sb = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: Gs,
    ReactCurrentOwner: Sd
};
function Kg() {
    throw Error("act(...) is not supported in production builds of React.")
}
q.Children = {
    map: bs,
    forEach: function(e, t, n) {
        bs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return bs(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return bs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Cd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
q.Component = Uo;
q.Fragment = G1;
q.Profiler = Q1;
q.PureComponent = wd;
q.StrictMode = Y1;
q.Suspense = J1;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sb;
q.act = Kg;
q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = zg({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = Sd.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Ug.call(t, l) && !Wg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: is,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
q.createContext = function(e) {
    return e = {
        $$typeof: X1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: q1,
        _context: e
    },
    e.Consumer = e
}
;
q.createElement = Hg;
q.createFactory = function(e) {
    var t = Hg.bind(null, e);
    return t.type = e,
    t
}
;
q.createRef = function() {
    return {
        current: null
    }
}
;
q.forwardRef = function(e) {
    return {
        $$typeof: Z1,
        render: e
    }
}
;
q.isValidElement = Cd;
q.lazy = function(e) {
    return {
        $$typeof: tb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ib
    }
}
;
q.memo = function(e, t) {
    return {
        $$typeof: eb,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
q.startTransition = function(e) {
    var t = Gs.transition;
    Gs.transition = {};
    try {
        e()
    } finally {
        Gs.transition = t
    }
}
;
q.unstable_act = Kg;
q.useCallback = function(e, t) {
    return Ye.current.useCallback(e, t)
}
;
q.useContext = function(e) {
    return Ye.current.useContext(e)
}
;
q.useDebugValue = function() {}
;
q.useDeferredValue = function(e) {
    return Ye.current.useDeferredValue(e)
}
;
q.useEffect = function(e, t) {
    return Ye.current.useEffect(e, t)
}
;
q.useId = function() {
    return Ye.current.useId()
}
;
q.useImperativeHandle = function(e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n)
}
;
q.useInsertionEffect = function(e, t) {
    return Ye.current.useInsertionEffect(e, t)
}
;
q.useLayoutEffect = function(e, t) {
    return Ye.current.useLayoutEffect(e, t)
}
;
q.useMemo = function(e, t) {
    return Ye.current.useMemo(e, t)
}
;
q.useReducer = function(e, t, n) {
    return Ye.current.useReducer(e, t, n)
}
;
q.useRef = function(e) {
    return Ye.current.useRef(e)
}
;
q.useState = function(e) {
    return Ye.current.useState(e)
}
;
q.useSyncExternalStore = function(e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n)
}
;
q.useTransition = function() {
    return Ye.current.useTransition()
}
;
q.version = "18.3.1";
_g.exports = q;
var b = _g.exports;
const R = Ig(b)
  , Ed = H1({
    __proto__: null,
    default: R
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ab = b
  , lb = Symbol.for("react.element")
  , ub = Symbol.for("react.fragment")
  , cb = Object.prototype.hasOwnProperty
  , db = ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Gg(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        cb.call(t, r) && !fb.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: lb,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: db.current
    }
}
el.Fragment = ub;
el.jsx = Gg;
el.jsxs = Gg;
Vg.exports = el;
var p = Vg.exports
  , Yg = {
    exports: {}
}
  , ct = {}
  , Qg = {
    exports: {}
}
  , qg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, A) {
        var O = k.length;
        k.push(A);
        e: for (; 0 < O; ) {
            var U = O - 1 >>> 1
              , B = k[U];
            if (0 < o(B, A))
                k[U] = A,
                k[O] = B,
                O = U;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var A = k[0]
          , O = k.pop();
        if (O !== A) {
            k[0] = O;
            e: for (var U = 0, B = k.length, Q = B >>> 1; U < Q; ) {
                var X = 2 * (U + 1) - 1
                  , be = k[X]
                  , Le = X + 1
                  , ee = k[Le];
                if (0 > o(be, O))
                    Le < B && 0 > o(ee, be) ? (k[U] = ee,
                    k[Le] = O,
                    U = Le) : (k[U] = be,
                    k[X] = O,
                    U = X);
                else if (Le < B && 0 > o(ee, O))
                    k[U] = ee,
                    k[Le] = O,
                    U = Le;
                else
                    break e
            }
        }
        return A
    }
    function o(k, A) {
        var O = k.sortIndex - A.sortIndex;
        return O !== 0 ? O : k.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , x = !1
      , y = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(k) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= k)
                r(u),
                A.sortIndex = A.expirationTime,
                t(l, A);
            else
                break;
            A = n(u)
        }
    }
    function S(k) {
        if (y = !1,
        v(k),
        !x)
            if (n(l) !== null)
                x = !0,
                $(C);
            else {
                var A = n(u);
                A !== null && F(S, A.startTime - k)
            }
    }
    function C(k, A) {
        x = !1,
        y && (y = !1,
        g(P),
        P = -1),
        h = !0;
        var O = f;
        try {
            for (v(A),
            d = n(l); d !== null && (!(d.expirationTime > A) || k && !z()); ) {
                var U = d.callback;
                if (typeof U == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var B = U(d.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof B == "function" ? d.callback = B : d === n(l) && r(l),
                    v(A)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Q = !0;
            else {
                var X = n(u);
                X !== null && F(S, X.startTime - A),
                Q = !1
            }
            return Q
        } finally {
            d = null,
            f = O,
            h = !1
        }
    }
    var E = !1
      , T = null
      , P = -1
      , j = 5
      , M = -1;
    function z() {
        return !(e.unstable_now() - M < j)
    }
    function I() {
        if (T !== null) {
            var k = e.unstable_now();
            M = k;
            var A = !0;
            try {
                A = T(!0, k)
            } finally {
                A ? G() : (E = !1,
                T = null)
            }
        } else
            E = !1
    }
    var G;
    if (typeof m == "function")
        G = function() {
            m(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , Y = L.port2;
        L.port1.onmessage = I,
        G = function() {
            Y.postMessage(null)
        }
    } else
        G = function() {
            w(I, 0)
        }
        ;
    function $(k) {
        T = k,
        E || (E = !0,
        G())
    }
    function F(k, A) {
        P = w(function() {
            k(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || h || (x = !0,
        $(C))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = f
        }
        var O = f;
        f = A;
        try {
            return k()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, A) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var O = f;
        f = k;
        try {
            return A()
        } finally {
            f = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, A, O) {
        var U = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? U + O : U) : O = U,
        k) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = O + B,
        k = {
            id: c++,
            callback: A,
            priorityLevel: k,
            startTime: O,
            expirationTime: B,
            sortIndex: -1
        },
        O > U ? (k.sortIndex = O,
        t(u, k),
        n(l) === null && k === n(u) && (y ? (g(P),
        P = -1) : y = !0,
        F(S, O - U))) : (k.sortIndex = B,
        t(l, k),
        x || h || (x = !0,
        $(C))),
        k
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(k) {
        var A = f;
        return function() {
            var O = f;
            f = A;
            try {
                return k.apply(this, arguments)
            } finally {
                f = O
            }
        }
    }
}
)(qg);
Qg.exports = qg;
var hb = Qg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pb = b
  , lt = hb;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Xg = new Set
  , ji = {};
function zr(e, t) {
    Mo(e, t),
    Mo(e + "Capture", t)
}
function Mo(e, t) {
    for (ji[e] = t,
    e = 0; e < t.length; e++)
        Xg.add(t[e])
}
var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , zu = Object.prototype.hasOwnProperty
  , mb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Eh = {}
  , Th = {};
function gb(e) {
    return zu.call(Th, e) ? !0 : zu.call(Eh, e) ? !1 : mb.test(e) ? Th[e] = !0 : (Eh[e] = !0,
    !1)
}
function yb(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function vb(e, t, n, r) {
    if (t === null || typeof t > "u" || yb(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Qe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Qe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Qe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Qe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Qe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Qe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Qe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Td = /[\-:]([a-z])/g;
function Pd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Td, Pd);
    De[t] = new Qe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Td, Pd);
    De[t] = new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Td, Pd);
    De[t] = new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function kd(e, t, n, r) {
    var o = De.hasOwnProperty(t) ? De[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vb(t, n, o, r) && (n = null),
    r || o === null ? gb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wn = pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ss = Symbol.for("react.element")
  , qr = Symbol.for("react.portal")
  , Xr = Symbol.for("react.fragment")
  , Nd = Symbol.for("react.strict_mode")
  , Bu = Symbol.for("react.profiler")
  , Zg = Symbol.for("react.provider")
  , Jg = Symbol.for("react.context")
  , Ad = Symbol.for("react.forward_ref")
  , $u = Symbol.for("react.suspense")
  , Uu = Symbol.for("react.suspense_list")
  , Rd = Symbol.for("react.memo")
  , Dn = Symbol.for("react.lazy")
  , ey = Symbol.for("react.offscreen")
  , Ph = Symbol.iterator;
function ti(e) {
    return e === null || typeof e != "object" ? null : (e = Ph && e[Ph] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ge = Object.assign, Wl;
function fi(e) {
    if (Wl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Wl = t && t[1] || ""
        }
    return `
` + Wl + e
}
var Hl = !1;
function Kl(e, t) {
    if (!e || Hl)
        return "";
    Hl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Hl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? fi(e) : ""
}
function xb(e) {
    switch (e.tag) {
    case 5:
        return fi(e.type);
    case 16:
        return fi("Lazy");
    case 13:
        return fi("Suspense");
    case 19:
        return fi("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Kl(e.type, !1),
        e;
    case 11:
        return e = Kl(e.type.render, !1),
        e;
    case 1:
        return e = Kl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Wu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Xr:
        return "Fragment";
    case qr:
        return "Portal";
    case Bu:
        return "Profiler";
    case Nd:
        return "StrictMode";
    case $u:
        return "Suspense";
    case Uu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Jg:
            return (e.displayName || "Context") + ".Consumer";
        case Zg:
            return (e._context.displayName || "Context") + ".Provider";
        case Ad:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Rd:
            return t = e.displayName || null,
            t !== null ? t : Wu(e.type) || "Memo";
        case Dn:
            t = e._payload,
            e = e._init;
            try {
                return Wu(e(t))
            } catch {}
        }
    return null
}
function wb(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Wu(t);
    case 8:
        return t === Nd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function er(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ty(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function bb(e) {
    var t = ty(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Cs(e) {
    e._valueTracker || (e._valueTracker = bb(e))
}
function ny(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ty(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ha(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Hu(e, t) {
    var n = t.checked;
    return ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function kh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = er(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function ry(e, t) {
    t = t.checked,
    t != null && kd(e, "checked", t, !1)
}
function Ku(e, t) {
    ry(e, t);
    var n = er(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Gu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gu(e, t.type, er(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Nh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Gu(e, t, n) {
    (t !== "number" || ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var hi = Array.isArray;
function po(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + er(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Yu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ah(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (hi(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: er(n)
    }
}
function oy(e, t) {
    var n = er(t.value)
      , r = er(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Rh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function iy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Qu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Es, sy = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Es = Es || document.createElement("div"),
        Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Es.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Mi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var yi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sb = ["Webkit", "ms", "Moz", "O"];
Object.keys(yi).forEach(function(e) {
    Sb.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        yi[t] = yi[e]
    })
});
function ay(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yi.hasOwnProperty(e) && yi[e] ? ("" + t).trim() : t + "px"
}
function ly(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = ay(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Cb = ge({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function qu(e, t) {
    if (t) {
        if (Cb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function Xu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Zu = null;
function jd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ju = null
  , mo = null
  , go = null;
function jh(e) {
    if (e = ls(e)) {
        if (typeof Ju != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = il(t),
        Ju(e.stateNode, e.type, t))
    }
}
function uy(e) {
    mo ? go ? go.push(e) : go = [e] : mo = e
}
function cy() {
    if (mo) {
        var e = mo
          , t = go;
        if (go = mo = null,
        jh(e),
        t)
            for (e = 0; e < t.length; e++)
                jh(t[e])
    }
}
function dy(e, t) {
    return e(t)
}
function fy() {}
var Gl = !1;
function hy(e, t, n) {
    if (Gl)
        return e(t, n);
    Gl = !0;
    try {
        return dy(e, t, n)
    } finally {
        Gl = !1,
        (mo !== null || go !== null) && (fy(),
        cy())
    }
}
function Di(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = il(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(D(231, t, typeof n));
    return n
}
var ec = !1;
if (hn)
    try {
        var ni = {};
        Object.defineProperty(ni, "passive", {
            get: function() {
                ec = !0
            }
        }),
        window.addEventListener("test", ni, ni),
        window.removeEventListener("test", ni, ni)
    } catch {
        ec = !1
    }
function Eb(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var vi = !1
  , pa = null
  , ma = !1
  , tc = null
  , Tb = {
    onError: function(e) {
        vi = !0,
        pa = e
    }
};
function Pb(e, t, n, r, o, i, s, a, l) {
    vi = !1,
    pa = null,
    Eb.apply(Tb, arguments)
}
function kb(e, t, n, r, o, i, s, a, l) {
    if (Pb.apply(this, arguments),
    vi) {
        if (vi) {
            var u = pa;
            vi = !1,
            pa = null
        } else
            throw Error(D(198));
        ma || (ma = !0,
        tc = u)
    }
}
function Br(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function py(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Mh(e) {
    if (Br(e) !== e)
        throw Error(D(188))
}
function Nb(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Br(e),
        t === null)
            throw Error(D(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Mh(o),
                    e;
                if (i === r)
                    return Mh(o),
                    t;
                i = i.sibling
            }
            throw Error(D(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function my(e) {
    return e = Nb(e),
    e !== null ? gy(e) : null
}
function gy(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = gy(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var yy = lt.unstable_scheduleCallback
  , Dh = lt.unstable_cancelCallback
  , Ab = lt.unstable_shouldYield
  , Rb = lt.unstable_requestPaint
  , xe = lt.unstable_now
  , jb = lt.unstable_getCurrentPriorityLevel
  , Md = lt.unstable_ImmediatePriority
  , vy = lt.unstable_UserBlockingPriority
  , ga = lt.unstable_NormalPriority
  , Mb = lt.unstable_LowPriority
  , xy = lt.unstable_IdlePriority
  , tl = null
  , qt = null;
function Db(e) {
    if (qt && typeof qt.onCommitFiberRoot == "function")
        try {
            qt.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var It = Math.clz32 ? Math.clz32 : Ib
  , Lb = Math.log
  , Ob = Math.LN2;
function Ib(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Lb(e) / Ob | 0) | 0
}
var Ts = 64
  , Ps = 4194304;
function pi(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ya(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = pi(a) : (i &= s,
        i !== 0 && (r = pi(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = pi(s) : i !== 0 && (r = pi(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - It(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Vb(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function _b(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - It(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Vb(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function nc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function wy() {
    var e = Ts;
    return Ts <<= 1,
    !(Ts & 4194240) && (Ts = 64),
    e
}
function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ss(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - It(t),
    e[t] = n
}
function Fb(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - It(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Dd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - It(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ne = 0;
function by(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Sy, Ld, Cy, Ey, Ty, rc = !1, ks = [], Kn = null, Gn = null, Yn = null, Li = new Map, Oi = new Map, On = [], zb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Lh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Kn = null;
        break;
    case "dragenter":
    case "dragleave":
        Gn = null;
        break;
    case "mouseover":
    case "mouseout":
        Yn = null;
        break;
    case "pointerover":
    case "pointerout":
        Li.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Oi.delete(t.pointerId)
    }
}
function ri(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = ls(t),
    t !== null && Ld(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Bb(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Kn = ri(Kn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Gn = ri(Gn, e, t, n, r, o),
        !0;
    case "mouseover":
        return Yn = ri(Yn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Li.set(i, ri(Li.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Oi.set(i, ri(Oi.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Py(e) {
    var t = xr(e.target);
    if (t !== null) {
        var n = Br(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = py(n),
                t !== null) {
                    e.blockedOn = t,
                    Ty(e.priority, function() {
                        Cy(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ys(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = oc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Zu = r,
            n.target.dispatchEvent(r),
            Zu = null
        } else
            return t = ls(n),
            t !== null && Ld(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Oh(e, t, n) {
    Ys(e) && n.delete(t)
}
function $b() {
    rc = !1,
    Kn !== null && Ys(Kn) && (Kn = null),
    Gn !== null && Ys(Gn) && (Gn = null),
    Yn !== null && Ys(Yn) && (Yn = null),
    Li.forEach(Oh),
    Oi.forEach(Oh)
}
function oi(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    rc || (rc = !0,
    lt.unstable_scheduleCallback(lt.unstable_NormalPriority, $b)))
}
function Ii(e) {
    function t(o) {
        return oi(o, e)
    }
    if (0 < ks.length) {
        oi(ks[0], e);
        for (var n = 1; n < ks.length; n++) {
            var r = ks[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Kn !== null && oi(Kn, e),
    Gn !== null && oi(Gn, e),
    Yn !== null && oi(Yn, e),
    Li.forEach(t),
    Oi.forEach(t),
    n = 0; n < On.length; n++)
        r = On[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && (n = On[0],
    n.blockedOn === null); )
        Py(n),
        n.blockedOn === null && On.shift()
}
var yo = wn.ReactCurrentBatchConfig
  , va = !0;
function Ub(e, t, n, r) {
    var o = ne
      , i = yo.transition;
    yo.transition = null;
    try {
        ne = 1,
        Od(e, t, n, r)
    } finally {
        ne = o,
        yo.transition = i
    }
}
function Wb(e, t, n, r) {
    var o = ne
      , i = yo.transition;
    yo.transition = null;
    try {
        ne = 4,
        Od(e, t, n, r)
    } finally {
        ne = o,
        yo.transition = i
    }
}
function Od(e, t, n, r) {
    if (va) {
        var o = oc(e, t, n, r);
        if (o === null)
            ou(e, t, r, xa, n),
            Lh(e, r);
        else if (Bb(o, e, t, n, r))
            r.stopPropagation();
        else if (Lh(e, r),
        t & 4 && -1 < zb.indexOf(e)) {
            for (; o !== null; ) {
                var i = ls(o);
                if (i !== null && Sy(i),
                i = oc(e, t, n, r),
                i === null && ou(e, t, r, xa, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            ou(e, t, r, null, n)
    }
}
var xa = null;
function oc(e, t, n, r) {
    if (xa = null,
    e = jd(r),
    e = xr(e),
    e !== null)
        if (t = Br(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = py(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return xa = e,
    null
}
function ky(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (jb()) {
        case Md:
            return 1;
        case vy:
            return 4;
        case ga:
        case Mb:
            return 16;
        case xy:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var $n = null
  , Id = null
  , Qs = null;
function Ny() {
    if (Qs)
        return Qs;
    var e, t = Id, n = t.length, r, o = "value"in $n ? $n.value : $n.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Qs = o.slice(e, 1 < r ? 1 - r : void 0)
}
function qs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ns() {
    return !0
}
function Ih() {
    return !1
}
function dt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ns : Ih,
        this.isPropagationStopped = Ih,
        this
    }
    return ge(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ns)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ns)
        },
        persist: function() {},
        isPersistent: Ns
    }),
    t
}
var Wo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Vd = dt(Wo), as = ge({}, Wo, {
    view: 0,
    detail: 0
}), Hb = dt(as), Ql, ql, ii, nl = ge({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _d,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (Ql = e.screenX - ii.screenX,
        ql = e.screenY - ii.screenY) : ql = Ql = 0,
        ii = e),
        Ql)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ql
    }
}), Vh = dt(nl), Kb = ge({}, nl, {
    dataTransfer: 0
}), Gb = dt(Kb), Yb = ge({}, as, {
    relatedTarget: 0
}), Xl = dt(Yb), Qb = ge({}, Wo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), qb = dt(Qb), Xb = ge({}, Wo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Zb = dt(Xb), Jb = ge({}, Wo, {
    data: 0
}), _h = dt(Jb), eS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, tS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, nS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function rS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nS[e]) ? !!t[e] : !1
}
function _d() {
    return rS
}
var oS = ge({}, as, {
    key: function(e) {
        if (e.key) {
            var t = eS[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = qs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _d,
    charCode: function(e) {
        return e.type === "keypress" ? qs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , iS = dt(oS)
  , sS = ge({}, nl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Fh = dt(sS)
  , aS = ge({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _d
})
  , lS = dt(aS)
  , uS = ge({}, Wo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , cS = dt(uS)
  , dS = ge({}, nl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , fS = dt(dS)
  , hS = [9, 13, 27, 32]
  , Fd = hn && "CompositionEvent"in window
  , xi = null;
hn && "documentMode"in document && (xi = document.documentMode);
var pS = hn && "TextEvent"in window && !xi
  , Ay = hn && (!Fd || xi && 8 < xi && 11 >= xi)
  , zh = " "
  , Bh = !1;
function Ry(e, t) {
    switch (e) {
    case "keyup":
        return hS.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function jy(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Zr = !1;
function mS(e, t) {
    switch (e) {
    case "compositionend":
        return jy(t);
    case "keypress":
        return t.which !== 32 ? null : (Bh = !0,
        zh);
    case "textInput":
        return e = t.data,
        e === zh && Bh ? null : e;
    default:
        return null
    }
}
function gS(e, t) {
    if (Zr)
        return e === "compositionend" || !Fd && Ry(e, t) ? (e = Ny(),
        Qs = Id = $n = null,
        Zr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ay && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var yS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function $h(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yS[e.type] : t === "textarea"
}
function My(e, t, n, r) {
    uy(r),
    t = wa(t, "onChange"),
    0 < t.length && (n = new Vd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var wi = null
  , Vi = null;
function vS(e) {
    Uy(e, 0)
}
function rl(e) {
    var t = to(e);
    if (ny(t))
        return e
}
function xS(e, t) {
    if (e === "change")
        return t
}
var Dy = !1;
if (hn) {
    var Zl;
    if (hn) {
        var Jl = "oninput"in document;
        if (!Jl) {
            var Uh = document.createElement("div");
            Uh.setAttribute("oninput", "return;"),
            Jl = typeof Uh.oninput == "function"
        }
        Zl = Jl
    } else
        Zl = !1;
    Dy = Zl && (!document.documentMode || 9 < document.documentMode)
}
function Wh() {
    wi && (wi.detachEvent("onpropertychange", Ly),
    Vi = wi = null)
}
function Ly(e) {
    if (e.propertyName === "value" && rl(Vi)) {
        var t = [];
        My(t, Vi, e, jd(e)),
        hy(vS, t)
    }
}
function wS(e, t, n) {
    e === "focusin" ? (Wh(),
    wi = t,
    Vi = n,
    wi.attachEvent("onpropertychange", Ly)) : e === "focusout" && Wh()
}
function bS(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return rl(Vi)
}
function SS(e, t) {
    if (e === "click")
        return rl(t)
}
function CS(e, t) {
    if (e === "input" || e === "change")
        return rl(t)
}
function ES(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ft = typeof Object.is == "function" ? Object.is : ES;
function _i(e, t) {
    if (Ft(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!zu.call(t, o) || !Ft(e[o], t[o]))
            return !1
    }
    return !0
}
function Hh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Kh(e, t) {
    var n = Hh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hh(n)
    }
}
function Oy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oy(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Iy() {
    for (var e = window, t = ha(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ha(e.document)
    }
    return t
}
function zd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function TS(e) {
    var t = Iy()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oy(n.ownerDocument.documentElement, n)) {
        if (r !== null && zd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Kh(n, i);
                var s = Kh(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var PS = hn && "documentMode"in document && 11 >= document.documentMode
  , Jr = null
  , ic = null
  , bi = null
  , sc = !1;
function Gh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sc || Jr == null || Jr !== ha(r) || (r = Jr,
    "selectionStart"in r && zd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    bi && _i(bi, r) || (bi = r,
    r = wa(ic, "onSelect"),
    0 < r.length && (t = new Vd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Jr)))
}
function As(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var eo = {
    animationend: As("Animation", "AnimationEnd"),
    animationiteration: As("Animation", "AnimationIteration"),
    animationstart: As("Animation", "AnimationStart"),
    transitionend: As("Transition", "TransitionEnd")
}
  , eu = {}
  , Vy = {};
hn && (Vy = document.createElement("div").style,
"AnimationEvent"in window || (delete eo.animationend.animation,
delete eo.animationiteration.animation,
delete eo.animationstart.animation),
"TransitionEvent"in window || delete eo.transitionend.transition);
function ol(e) {
    if (eu[e])
        return eu[e];
    if (!eo[e])
        return e;
    var t = eo[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Vy)
            return eu[e] = t[n];
    return e
}
var _y = ol("animationend")
  , Fy = ol("animationiteration")
  , zy = ol("animationstart")
  , By = ol("transitionend")
  , $y = new Map
  , Yh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function lr(e, t) {
    $y.set(e, t),
    zr(t, [e])
}
for (var tu = 0; tu < Yh.length; tu++) {
    var nu = Yh[tu]
      , kS = nu.toLowerCase()
      , NS = nu[0].toUpperCase() + nu.slice(1);
    lr(kS, "on" + NS)
}
lr(_y, "onAnimationEnd");
lr(Fy, "onAnimationIteration");
lr(zy, "onAnimationStart");
lr("dblclick", "onDoubleClick");
lr("focusin", "onFocus");
lr("focusout", "onBlur");
lr(By, "onTransitionEnd");
Mo("onMouseEnter", ["mouseout", "mouseover"]);
Mo("onMouseLeave", ["mouseout", "mouseover"]);
Mo("onPointerEnter", ["pointerout", "pointerover"]);
Mo("onPointerLeave", ["pointerout", "pointerover"]);
zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , AS = new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));
function Qh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    kb(r, t, void 0, e),
    e.currentTarget = null
}
function Uy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Qh(o, a, u),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Qh(o, a, u),
                    i = l
                }
        }
    }
    if (ma)
        throw e = tc,
        ma = !1,
        tc = null,
        e
}
function le(e, t) {
    var n = t[dc];
    n === void 0 && (n = t[dc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wy(t, e, 2, !1),
    n.add(r))
}
function ru(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Wy(n, e, r, t)
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function Fi(e) {
    if (!e[Rs]) {
        e[Rs] = !0,
        Xg.forEach(function(n) {
            n !== "selectionchange" && (AS.has(n) || ru(n, !1, e),
            ru(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rs] || (t[Rs] = !0,
        ru("selectionchange", !1, t))
    }
}
function Wy(e, t, n, r) {
    switch (ky(t)) {
    case 1:
        var o = Ub;
        break;
    case 4:
        o = Wb;
        break;
    default:
        o = Od
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !ec || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function ou(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = xr(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    hy(function() {
        var u = i
          , c = jd(n)
          , d = [];
        e: {
            var f = $y.get(e);
            if (f !== void 0) {
                var h = Vd
                  , x = e;
                switch (e) {
                case "keypress":
                    if (qs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = iS;
                    break;
                case "focusin":
                    x = "focus",
                    h = Xl;
                    break;
                case "focusout":
                    x = "blur",
                    h = Xl;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Xl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Vh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = Gb;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = lS;
                    break;
                case _y:
                case Fy:
                case zy:
                    h = qb;
                    break;
                case By:
                    h = cS;
                    break;
                case "scroll":
                    h = Hb;
                    break;
                case "wheel":
                    h = fS;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = Zb;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Fh
                }
                var y = (t & 4) !== 0
                  , w = !y && e === "scroll"
                  , g = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var m = u, v; m !== null; ) {
                    v = m;
                    var S = v.stateNode;
                    if (v.tag === 5 && S !== null && (v = S,
                    g !== null && (S = Di(m, g),
                    S != null && y.push(zi(m, S, v)))),
                    w)
                        break;
                    m = m.return
                }
                0 < y.length && (f = new h(f,x,null,n,c),
                d.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== Zu && (x = n.relatedTarget || n.fromElement) && (xr(x) || x[pn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (x = n.relatedTarget || n.toElement,
                h = u,
                x = x ? xr(x) : null,
                x !== null && (w = Br(x),
                x !== w || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null,
                x = u),
                h !== x)) {
                    if (y = Vh,
                    S = "onMouseLeave",
                    g = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Fh,
                    S = "onPointerLeave",
                    g = "onPointerEnter",
                    m = "pointer"),
                    w = h == null ? f : to(h),
                    v = x == null ? f : to(x),
                    f = new y(S,m + "leave",h,n,c),
                    f.target = w,
                    f.relatedTarget = v,
                    S = null,
                    xr(c) === u && (y = new y(g,m + "enter",x,n,c),
                    y.target = v,
                    y.relatedTarget = w,
                    S = y),
                    w = S,
                    h && x)
                        t: {
                            for (y = h,
                            g = x,
                            m = 0,
                            v = y; v; v = Yr(v))
                                m++;
                            for (v = 0,
                            S = g; S; S = Yr(S))
                                v++;
                            for (; 0 < m - v; )
                                y = Yr(y),
                                m--;
                            for (; 0 < v - m; )
                                g = Yr(g),
                                v--;
                            for (; m--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = Yr(y),
                                g = Yr(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    h !== null && qh(d, f, h, y, !1),
                    x !== null && w !== null && qh(d, w, x, y, !0)
                }
            }
            e: {
                if (f = u ? to(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var C = xS;
                else if ($h(f))
                    if (Dy)
                        C = CS;
                    else {
                        C = bS;
                        var E = wS
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = SS);
                if (C && (C = C(e, u))) {
                    My(d, C, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Gu(f, "number", f.value)
            }
            switch (E = u ? to(u) : window,
            e) {
            case "focusin":
                ($h(E) || E.contentEditable === "true") && (Jr = E,
                ic = u,
                bi = null);
                break;
            case "focusout":
                bi = ic = Jr = null;
                break;
            case "mousedown":
                sc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                sc = !1,
                Gh(d, n, c);
                break;
            case "selectionchange":
                if (PS)
                    break;
            case "keydown":
            case "keyup":
                Gh(d, n, c)
            }
            var T;
            if (Fd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                Zr ? Ry(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Ay && n.locale !== "ko" && (Zr || P !== "onCompositionStart" ? P === "onCompositionEnd" && Zr && (T = Ny()) : ($n = c,
            Id = "value"in $n ? $n.value : $n.textContent,
            Zr = !0)),
            E = wa(u, P),
            0 < E.length && (P = new _h(P,e,null,n,c),
            d.push({
                event: P,
                listeners: E
            }),
            T ? P.data = T : (T = jy(n),
            T !== null && (P.data = T)))),
            (T = pS ? mS(e, n) : gS(e, n)) && (u = wa(u, "onBeforeInput"),
            0 < u.length && (c = new _h("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        Uy(d, t)
    })
}
function zi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function wa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Di(e, n),
        i != null && r.unshift(zi(e, i, o)),
        i = Di(e, t),
        i != null && r.push(zi(e, i, o))),
        e = e.return
    }
    return r
}
function Yr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function qh(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = Di(n, i),
        l != null && s.unshift(zi(n, l, a))) : o || (l = Di(n, i),
        l != null && s.push(zi(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var RS = /\r\n?/g
  , jS = /\u0000|\uFFFD/g;
function Xh(e) {
    return (typeof e == "string" ? e : "" + e).replace(RS, `
`).replace(jS, "")
}
function js(e, t, n) {
    if (t = Xh(t),
    Xh(e) !== t && n)
        throw Error(D(425))
}
function ba() {}
var ac = null
  , lc = null;
function uc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var cc = typeof setTimeout == "function" ? setTimeout : void 0
  , MS = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Zh = typeof Promise == "function" ? Promise : void 0
  , DS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zh < "u" ? function(e) {
    return Zh.resolve(null).then(e).catch(LS)
}
: cc;
function LS(e) {
    setTimeout(function() {
        throw e
    })
}
function iu(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Ii(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Ii(t)
}
function Qn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Jh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ho = Math.random().toString(36).slice(2)
  , Qt = "__reactFiber$" + Ho
  , Bi = "__reactProps$" + Ho
  , pn = "__reactContainer$" + Ho
  , dc = "__reactEvents$" + Ho
  , OS = "__reactListeners$" + Ho
  , IS = "__reactHandles$" + Ho;
function xr(e) {
    var t = e[Qt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[pn] || n[Qt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Jh(e); e !== null; ) {
                    if (n = e[Qt])
                        return n;
                    e = Jh(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ls(e) {
    return e = e[Qt] || e[pn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function to(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function il(e) {
    return e[Bi] || null
}
var fc = []
  , no = -1;
function ur(e) {
    return {
        current: e
    }
}
function ue(e) {
    0 > no || (e.current = fc[no],
    fc[no] = null,
    no--)
}
function ie(e, t) {
    no++,
    fc[no] = e.current,
    e.current = t
}
var tr = {}
  , Be = ur(tr)
  , Je = ur(!1)
  , Dr = tr;
function Do(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return tr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function et(e) {
    return e = e.childContextTypes,
    e != null
}
function Sa() {
    ue(Je),
    ue(Be)
}
function ep(e, t, n) {
    if (Be.current !== tr)
        throw Error(D(168));
    ie(Be, t),
    ie(Je, n)
}
function Hy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(D(108, wb(e) || "Unknown", o));
    return ge({}, n, r)
}
function Ca(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tr,
    Dr = Be.current,
    ie(Be, e),
    ie(Je, Je.current),
    !0
}
function tp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = Hy(e, t, Dr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ue(Je),
    ue(Be),
    ie(Be, e)) : ue(Je),
    ie(Je, n)
}
var ln = null
  , sl = !1
  , su = !1;
function Ky(e) {
    ln === null ? ln = [e] : ln.push(e)
}
function VS(e) {
    sl = !0,
    Ky(e)
}
function cr() {
    if (!su && ln !== null) {
        su = !0;
        var e = 0
          , t = ne;
        try {
            var n = ln;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ln = null,
            sl = !1
        } catch (o) {
            throw ln !== null && (ln = ln.slice(e + 1)),
            yy(Md, cr),
            o
        } finally {
            ne = t,
            su = !1
        }
    }
    return null
}
var ro = []
  , oo = 0
  , Ea = null
  , Ta = 0
  , pt = []
  , mt = 0
  , Lr = null
  , cn = 1
  , dn = "";
function gr(e, t) {
    ro[oo++] = Ta,
    ro[oo++] = Ea,
    Ea = e,
    Ta = t
}
function Gy(e, t, n) {
    pt[mt++] = cn,
    pt[mt++] = dn,
    pt[mt++] = Lr,
    Lr = e;
    var r = cn;
    e = dn;
    var o = 32 - It(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - It(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        cn = 1 << 32 - It(t) + o | n << o | r,
        dn = i + e
    } else
        cn = 1 << i | n << o | r,
        dn = e
}
function Bd(e) {
    e.return !== null && (gr(e, 1),
    Gy(e, 1, 0))
}
function $d(e) {
    for (; e === Ea; )
        Ea = ro[--oo],
        ro[oo] = null,
        Ta = ro[--oo],
        ro[oo] = null;
    for (; e === Lr; )
        Lr = pt[--mt],
        pt[mt] = null,
        dn = pt[--mt],
        pt[mt] = null,
        cn = pt[--mt],
        pt[mt] = null
}
var st = null
  , it = null
  , de = !1
  , Ot = null;
function Yy(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function np(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        it = Qn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        st = e,
        it = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Lr !== null ? {
            id: cn,
            overflow: dn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = gt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        st = e,
        it = null,
        !0) : !1;
    default:
        return !1
    }
}
function hc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function pc(e) {
    if (de) {
        var t = it;
        if (t) {
            var n = t;
            if (!np(e, t)) {
                if (hc(e))
                    throw Error(D(418));
                t = Qn(n.nextSibling);
                var r = st;
                t && np(e, t) ? Yy(r, n) : (e.flags = e.flags & -4097 | 2,
                de = !1,
                st = e)
            }
        } else {
            if (hc(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            de = !1,
            st = e
        }
    }
}
function rp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    st = e
}
function Ms(e) {
    if (e !== st)
        return !1;
    if (!de)
        return rp(e),
        de = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !uc(e.type, e.memoizedProps)),
    t && (t = it)) {
        if (hc(e))
            throw Qy(),
            Error(D(418));
        for (; t; )
            Yy(e, t),
            t = Qn(t.nextSibling)
    }
    if (rp(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = Qn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else
        it = st ? Qn(e.stateNode.nextSibling) : null;
    return !0
}
function Qy() {
    for (var e = it; e; )
        e = Qn(e.nextSibling)
}
function Lo() {
    it = st = null,
    de = !1
}
function Ud(e) {
    Ot === null ? Ot = [e] : Ot.push(e)
}
var _S = wn.ReactCurrentBatchConfig;
function si(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function Ds(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function op(e) {
    var t = e._init;
    return t(e._payload)
}
function qy(e) {
    function t(g, m) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [m],
            g.flags |= 16) : v.push(m)
        }
    }
    function n(g, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(g, m),
            m = m.sibling;
        return null
    }
    function r(g, m) {
        for (g = new Map; m !== null; )
            m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
            m = m.sibling;
        return g
    }
    function o(g, m) {
        return g = Jn(g, m),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, m, v) {
        return g.index = v,
        e ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < m ? (g.flags |= 2,
        m) : v) : (g.flags |= 2,
        m)) : (g.flags |= 1048576,
        m)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, m, v, S) {
        return m === null || m.tag !== 6 ? (m = hu(v, g.mode, S),
        m.return = g,
        m) : (m = o(m, v),
        m.return = g,
        m)
    }
    function l(g, m, v, S) {
        var C = v.type;
        return C === Xr ? c(g, m, v.props.children, S, v.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Dn && op(C) === m.type) ? (S = o(m, v.props),
        S.ref = si(g, m, v),
        S.return = g,
        S) : (S = ra(v.type, v.key, v.props, null, g.mode, S),
        S.ref = si(g, m, v),
        S.return = g,
        S)
    }
    function u(g, m, v, S) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = pu(v, g.mode, S),
        m.return = g,
        m) : (m = o(m, v.children || []),
        m.return = g,
        m)
    }
    function c(g, m, v, S, C) {
        return m === null || m.tag !== 7 ? (m = jr(v, g.mode, S, C),
        m.return = g,
        m) : (m = o(m, v),
        m.return = g,
        m)
    }
    function d(g, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = hu("" + m, g.mode, v),
            m.return = g,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Ss:
                return v = ra(m.type, m.key, m.props, null, g.mode, v),
                v.ref = si(g, null, m),
                v.return = g,
                v;
            case qr:
                return m = pu(m, g.mode, v),
                m.return = g,
                m;
            case Dn:
                var S = m._init;
                return d(g, S(m._payload), v)
            }
            if (hi(m) || ti(m))
                return m = jr(m, g.mode, v, null),
                m.return = g,
                m;
            Ds(g, m)
        }
        return null
    }
    function f(g, m, v, S) {
        var C = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : a(g, m, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ss:
                return v.key === C ? l(g, m, v, S) : null;
            case qr:
                return v.key === C ? u(g, m, v, S) : null;
            case Dn:
                return C = v._init,
                f(g, m, C(v._payload), S)
            }
            if (hi(v) || ti(v))
                return C !== null ? null : c(g, m, v, S, null);
            Ds(g, v)
        }
        return null
    }
    function h(g, m, v, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return g = g.get(v) || null,
            a(m, g, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ss:
                return g = g.get(S.key === null ? v : S.key) || null,
                l(m, g, S, C);
            case qr:
                return g = g.get(S.key === null ? v : S.key) || null,
                u(m, g, S, C);
            case Dn:
                var E = S._init;
                return h(g, m, v, E(S._payload), C)
            }
            if (hi(S) || ti(S))
                return g = g.get(v) || null,
                c(m, g, S, C, null);
            Ds(m, S)
        }
        return null
    }
    function x(g, m, v, S) {
        for (var C = null, E = null, T = m, P = m = 0, j = null; T !== null && P < v.length; P++) {
            T.index > P ? (j = T,
            T = null) : j = T.sibling;
            var M = f(g, T, v[P], S);
            if (M === null) {
                T === null && (T = j);
                break
            }
            e && T && M.alternate === null && t(g, T),
            m = i(M, m, P),
            E === null ? C = M : E.sibling = M,
            E = M,
            T = j
        }
        if (P === v.length)
            return n(g, T),
            de && gr(g, P),
            C;
        if (T === null) {
            for (; P < v.length; P++)
                T = d(g, v[P], S),
                T !== null && (m = i(T, m, P),
                E === null ? C = T : E.sibling = T,
                E = T);
            return de && gr(g, P),
            C
        }
        for (T = r(g, T); P < v.length; P++)
            j = h(T, g, P, v[P], S),
            j !== null && (e && j.alternate !== null && T.delete(j.key === null ? P : j.key),
            m = i(j, m, P),
            E === null ? C = j : E.sibling = j,
            E = j);
        return e && T.forEach(function(z) {
            return t(g, z)
        }),
        de && gr(g, P),
        C
    }
    function y(g, m, v, S) {
        var C = ti(v);
        if (typeof C != "function")
            throw Error(D(150));
        if (v = C.call(v),
        v == null)
            throw Error(D(151));
        for (var E = C = null, T = m, P = m = 0, j = null, M = v.next(); T !== null && !M.done; P++,
        M = v.next()) {
            T.index > P ? (j = T,
            T = null) : j = T.sibling;
            var z = f(g, T, M.value, S);
            if (z === null) {
                T === null && (T = j);
                break
            }
            e && T && z.alternate === null && t(g, T),
            m = i(z, m, P),
            E === null ? C = z : E.sibling = z,
            E = z,
            T = j
        }
        if (M.done)
            return n(g, T),
            de && gr(g, P),
            C;
        if (T === null) {
            for (; !M.done; P++,
            M = v.next())
                M = d(g, M.value, S),
                M !== null && (m = i(M, m, P),
                E === null ? C = M : E.sibling = M,
                E = M);
            return de && gr(g, P),
            C
        }
        for (T = r(g, T); !M.done; P++,
        M = v.next())
            M = h(T, g, P, M.value, S),
            M !== null && (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
            m = i(M, m, P),
            E === null ? C = M : E.sibling = M,
            E = M);
        return e && T.forEach(function(I) {
            return t(g, I)
        }),
        de && gr(g, P),
        C
    }
    function w(g, m, v, S) {
        if (typeof v == "object" && v !== null && v.type === Xr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Ss:
                e: {
                    for (var C = v.key, E = m; E !== null; ) {
                        if (E.key === C) {
                            if (C = v.type,
                            C === Xr) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    m = o(E, v.props.children),
                                    m.return = g,
                                    g = m;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Dn && op(C) === E.type) {
                                n(g, E.sibling),
                                m = o(E, v.props),
                                m.ref = si(g, E, v),
                                m.return = g,
                                g = m;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    v.type === Xr ? (m = jr(v.props.children, g.mode, S, v.key),
                    m.return = g,
                    g = m) : (S = ra(v.type, v.key, v.props, null, g.mode, S),
                    S.ref = si(g, m, v),
                    S.return = g,
                    g = S)
                }
                return s(g);
            case qr:
                e: {
                    for (E = v.key; m !== null; ) {
                        if (m.key === E)
                            if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                n(g, m.sibling),
                                m = o(m, v.children || []),
                                m.return = g,
                                g = m;
                                break e
                            } else {
                                n(g, m);
                                break
                            }
                        else
                            t(g, m);
                        m = m.sibling
                    }
                    m = pu(v, g.mode, S),
                    m.return = g,
                    g = m
                }
                return s(g);
            case Dn:
                return E = v._init,
                w(g, m, E(v._payload), S)
            }
            if (hi(v))
                return x(g, m, v, S);
            if (ti(v))
                return y(g, m, v, S);
            Ds(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        m !== null && m.tag === 6 ? (n(g, m.sibling),
        m = o(m, v),
        m.return = g,
        g = m) : (n(g, m),
        m = hu(v, g.mode, S),
        m.return = g,
        g = m),
        s(g)) : n(g, m)
    }
    return w
}
var Oo = qy(!0)
  , Xy = qy(!1)
  , Pa = ur(null)
  , ka = null
  , io = null
  , Wd = null;
function Hd() {
    Wd = io = ka = null
}
function Kd(e) {
    var t = Pa.current;
    ue(Pa),
    e._currentValue = t
}
function mc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function vo(e, t) {
    ka = e,
    Wd = io = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0),
    e.firstContext = null)
}
function bt(e) {
    var t = e._currentValue;
    if (Wd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        io === null) {
            if (ka === null)
                throw Error(D(308));
            io = e,
            ka.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            io = io.next = e;
    return t
}
var wr = null;
function Gd(e) {
    wr === null ? wr = [e] : wr.push(e)
}
function Zy(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Gd(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    mn(e, r)
}
function mn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ln = !1;
function Yd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Jy(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function fn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        mn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Gd(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    mn(e, n)
}
function Xs(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Dd(e, n)
    }
}
function ip(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Na(e, t, n, r) {
    var o = e.updateQueue;
    Ln = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? i = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
        c = u = l = null,
        a = i;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , y = a;
                    switch (f = t,
                    h = n,
                    y.tag) {
                    case 1:
                        if (x = y.payload,
                        typeof x == "function") {
                            d = x.call(h, d, f);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = y.payload,
                        f = typeof x == "function" ? x.call(h, d, f) : x,
                        f == null)
                            break e;
                        d = ge({}, d, f);
                        break e;
                    case 2:
                        Ln = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                s |= f;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Ir |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function sp(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(D(191, o));
                o.call(r)
            }
        }
}
var us = {}
  , Xt = ur(us)
  , $i = ur(us)
  , Ui = ur(us);
function br(e) {
    if (e === us)
        throw Error(D(174));
    return e
}
function Qd(e, t) {
    switch (ie(Ui, t),
    ie($i, e),
    ie(Xt, us),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Qu(t, e)
    }
    ue(Xt),
    ie(Xt, t)
}
function Io() {
    ue(Xt),
    ue($i),
    ue(Ui)
}
function ev(e) {
    br(Ui.current);
    var t = br(Xt.current)
      , n = Qu(t, e.type);
    t !== n && (ie($i, e),
    ie(Xt, n))
}
function qd(e) {
    $i.current === e && (ue(Xt),
    ue($i))
}
var he = ur(0);
function Aa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var au = [];
function Xd() {
    for (var e = 0; e < au.length; e++)
        au[e]._workInProgressVersionPrimary = null;
    au.length = 0
}
var Zs = wn.ReactCurrentDispatcher
  , lu = wn.ReactCurrentBatchConfig
  , Or = 0
  , me = null
  , Te = null
  , Ne = null
  , Ra = !1
  , Si = !1
  , Wi = 0
  , FS = 0;
function Ie() {
    throw Error(D(321))
}
function Zd(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ft(e[n], t[n]))
            return !1;
    return !0
}
function Jd(e, t, n, r, o, i) {
    if (Or = i,
    me = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Zs.current = e === null || e.memoizedState === null ? US : WS,
    e = n(r, o),
    Si) {
        i = 0;
        do {
            if (Si = !1,
            Wi = 0,
            25 <= i)
                throw Error(D(301));
            i += 1,
            Ne = Te = null,
            t.updateQueue = null,
            Zs.current = HS,
            e = n(r, o)
        } while (Si)
    }
    if (Zs.current = ja,
    t = Te !== null && Te.next !== null,
    Or = 0,
    Ne = Te = me = null,
    Ra = !1,
    t)
        throw Error(D(300));
    return e
}
function ef() {
    var e = Wi !== 0;
    return Wi = 0,
    e
}
function Wt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ne === null ? me.memoizedState = Ne = e : Ne = Ne.next = e,
    Ne
}
function St() {
    if (Te === null) {
        var e = me.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Te.next;
    var t = Ne === null ? me.memoizedState : Ne.next;
    if (t !== null)
        Ne = t,
        Te = e;
    else {
        if (e === null)
            throw Error(D(310));
        Te = e,
        e = {
            memoizedState: Te.memoizedState,
            baseState: Te.baseState,
            baseQueue: Te.baseQueue,
            queue: Te.queue,
            next: null
        },
        Ne === null ? me.memoizedState = Ne = e : Ne = Ne.next = e
    }
    return Ne
}
function Hi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function uu(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Te
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((Or & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                s = r) : l = l.next = d,
                me.lanes |= c,
                Ir |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
        Ft(r, t.memoizedState) || (Ze = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            me.lanes |= i,
            Ir |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function cu(e) {
    var t = St()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        Ft(i, t.memoizedState) || (Ze = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function tv() {}
function nv(e, t) {
    var n = me
      , r = St()
      , o = t()
      , i = !Ft(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ze = !0),
    r = r.queue,
    tf(iv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Ne !== null && Ne.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ki(9, ov.bind(null, n, r, o, t), void 0, null),
        Ae === null)
            throw Error(D(349));
        Or & 30 || rv(n, t, o)
    }
    return o
}
function rv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    me.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ov(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    sv(t) && av(e)
}
function iv(e, t, n) {
    return n(function() {
        sv(t) && av(e)
    })
}
function sv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ft(e, n)
    } catch {
        return !0
    }
}
function av(e) {
    var t = mn(e, 1);
    t !== null && Vt(t, e, 1, -1)
}
function ap(e) {
    var t = Wt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = $S.bind(null, me, e),
    [t.memoizedState, e]
}
function Ki(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = me.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    me.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function lv() {
    return St().memoizedState
}
function Js(e, t, n, r) {
    var o = Wt();
    me.flags |= e,
    o.memoizedState = Ki(1 | t, n, void 0, r === void 0 ? null : r)
}
function al(e, t, n, r) {
    var o = St();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Te !== null) {
        var s = Te.memoizedState;
        if (i = s.destroy,
        r !== null && Zd(r, s.deps)) {
            o.memoizedState = Ki(t, n, i, r);
            return
        }
    }
    me.flags |= e,
    o.memoizedState = Ki(1 | t, n, i, r)
}
function lp(e, t) {
    return Js(8390656, 8, e, t)
}
function tf(e, t) {
    return al(2048, 8, e, t)
}
function uv(e, t) {
    return al(4, 2, e, t)
}
function cv(e, t) {
    return al(4, 4, e, t)
}
function dv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function fv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    al(4, 4, dv.bind(null, t, e), n)
}
function nf() {}
function hv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zd(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function pv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zd(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function mv(e, t, n) {
    return Or & 21 ? (Ft(n, t) || (n = wy(),
    me.lanes |= n,
    Ir |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ze = !0),
    e.memoizedState = n)
}
function zS(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = lu.transition;
    lu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        lu.transition = r
    }
}
function gv() {
    return St().memoizedState
}
function BS(e, t, n) {
    var r = Zn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    yv(e))
        vv(t, n);
    else if (n = Zy(e, t, n, r),
    n !== null) {
        var o = Ge();
        Vt(n, e, r, o),
        xv(n, t, r)
    }
}
function $S(e, t, n) {
    var r = Zn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (yv(e))
        vv(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                Ft(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Gd(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Zy(e, t, o, r),
        n !== null && (o = Ge(),
        Vt(n, e, r, o),
        xv(n, t, r))
    }
}
function yv(e) {
    var t = e.alternate;
    return e === me || t !== null && t === me
}
function vv(e, t) {
    Si = Ra = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function xv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Dd(e, n)
    }
}
var ja = {
    readContext: bt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1
}
  , US = {
    readContext: bt,
    useCallback: function(e, t) {
        return Wt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: bt,
    useEffect: lp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Js(4194308, 4, dv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Js(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Js(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Wt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Wt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = BS.bind(null, me, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Wt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: ap,
    useDebugValue: nf,
    useDeferredValue: function(e) {
        return Wt().memoizedState = e
    },
    useTransition: function() {
        var e = ap(!1)
          , t = e[0];
        return e = zS.bind(null, e[1]),
        Wt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = me
          , o = Wt();
        if (de) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            Ae === null)
                throw Error(D(349));
            Or & 30 || rv(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        lp(iv.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Ki(9, ov.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Wt()
          , t = Ae.identifierPrefix;
        if (de) {
            var n = dn
              , r = cn;
            n = (r & ~(1 << 32 - It(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Wi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = FS++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , WS = {
    readContext: bt,
    useCallback: hv,
    useContext: bt,
    useEffect: tf,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: cv,
    useMemo: pv,
    useReducer: uu,
    useRef: lv,
    useState: function() {
        return uu(Hi)
    },
    useDebugValue: nf,
    useDeferredValue: function(e) {
        var t = St();
        return mv(t, Te.memoizedState, e)
    },
    useTransition: function() {
        var e = uu(Hi)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: tv,
    useSyncExternalStore: nv,
    useId: gv,
    unstable_isNewReconciler: !1
}
  , HS = {
    readContext: bt,
    useCallback: hv,
    useContext: bt,
    useEffect: tf,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: cv,
    useMemo: pv,
    useReducer: cu,
    useRef: lv,
    useState: function() {
        return cu(Hi)
    },
    useDebugValue: nf,
    useDeferredValue: function(e) {
        var t = St();
        return Te === null ? t.memoizedState = e : mv(t, Te.memoizedState, e)
    },
    useTransition: function() {
        var e = cu(Hi)[0]
          , t = St().memoizedState;
        return [e, t]
    },
    useMutableSource: tv,
    useSyncExternalStore: nv,
    useId: gv,
    unstable_isNewReconciler: !1
};
function Rt(e, t) {
    if (e && e.defaultProps) {
        t = ge({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function gc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ge({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ll = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Br(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ge()
          , o = Zn(e)
          , i = fn(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = qn(e, i, o),
        t !== null && (Vt(t, e, o, r),
        Xs(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ge()
          , o = Zn(e)
          , i = fn(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = qn(e, i, o),
        t !== null && (Vt(t, e, o, r),
        Xs(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ge()
          , r = Zn(e)
          , o = fn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = qn(e, o, r),
        t !== null && (Vt(t, e, r, n),
        Xs(t, e, r))
    }
};
function up(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !_i(n, r) || !_i(o, i) : !0
}
function wv(e, t, n) {
    var r = !1
      , o = tr
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = bt(i) : (o = et(t) ? Dr : Be.current,
    r = t.contextTypes,
    i = (r = r != null) ? Do(e, o) : tr),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ll,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function cp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ll.enqueueReplaceState(t, t.state, null)
}
function yc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Yd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = bt(i) : (i = et(t) ? Dr : Be.current,
    o.context = Do(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (gc(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ll.enqueueReplaceState(o, o.state, null),
    Na(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Vo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += xb(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function du(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function vc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var KS = typeof WeakMap == "function" ? WeakMap : Map;
function bv(e, t, n) {
    n = fn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Da || (Da = !0,
        Nc = r),
        vc(e, t)
    }
    ,
    n
}
function Sv(e, t, n) {
    n = fn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            vc(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        vc(e, t),
        typeof r != "function" && (Xn === null ? Xn = new Set([this]) : Xn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function dp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new KS;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = sC.bind(null, e, t, n),
    t.then(e, e))
}
function fp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function hp(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = fn(-1, 1),
    t.tag = 2,
    qn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var GS = wn.ReactCurrentOwner
  , Ze = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? Xy(t, null, n, r) : Oo(t, e.child, n, r)
}
function pp(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return vo(t, o),
    r = Jd(e, t, n, r, i, o),
    n = ef(),
    e !== null && !Ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    gn(e, t, o)) : (de && n && Bd(t),
    t.flags |= 1,
    Ue(e, t, r, o),
    t.child)
}
function mp(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !df(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Cv(e, t, i, r, o)) : (e = ra(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : _i,
        n(s, r) && e.ref === t.ref)
            return gn(e, t, o)
    }
    return t.flags |= 1,
    e = Jn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Cv(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (_i(i, r) && e.ref === t.ref)
            if (Ze = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ze = !0);
            else
                return t.lanes = e.lanes,
                gn(e, t, o)
    }
    return xc(e, t, n, r, o)
}
function Ev(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(ao, rt),
            rt |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(ao, rt),
                rt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ie(ao, rt),
            rt |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(ao, rt),
        rt |= r;
    return Ue(e, t, o, n),
    t.child
}
function Tv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function xc(e, t, n, r, o) {
    var i = et(n) ? Dr : Be.current;
    return i = Do(t, i),
    vo(t, o),
    n = Jd(e, t, n, r, i, o),
    r = ef(),
    e !== null && !Ze ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    gn(e, t, o)) : (de && r && Bd(t),
    t.flags |= 1,
    Ue(e, t, n, o),
    t.child)
}
function gp(e, t, n, r, o) {
    if (et(n)) {
        var i = !0;
        Ca(t)
    } else
        i = !1;
    if (vo(t, o),
    t.stateNode === null)
        ea(e, t),
        wv(t, n, r),
        yc(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = bt(u) : (u = et(n) ? Dr : Be.current,
        u = Do(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && cp(t, s, r, u),
        Ln = !1;
        var f = t.memoizedState;
        s.state = f,
        Na(t, r, s, o),
        l = t.memoizedState,
        a !== r || f !== l || Je.current || Ln ? (typeof c == "function" && (gc(t, n, c, r),
        l = t.memoizedState),
        (a = Ln || up(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Jy(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Rt(t.type, a),
        s.props = u,
        d = t.pendingProps,
        f = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = bt(l) : (l = et(n) ? Dr : Be.current,
        l = Do(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && cp(t, s, r, l),
        Ln = !1,
        f = t.memoizedState,
        s.state = f,
        Na(t, r, s, o);
        var x = t.memoizedState;
        a !== d || f !== x || Je.current || Ln ? (typeof h == "function" && (gc(t, n, h, r),
        x = t.memoizedState),
        (u = Ln || up(t, n, u, r, f, x, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        s.props = r,
        s.state = x,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return wc(e, t, n, r, i, o)
}
function wc(e, t, n, r, o, i) {
    Tv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && tp(t, n, !1),
        gn(e, t, i);
    r = t.stateNode,
    GS.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Oo(t, e.child, null, i),
    t.child = Oo(t, null, a, i)) : Ue(e, t, a, i),
    t.memoizedState = r.state,
    o && tp(t, n, !0),
    t.child
}
function Pv(e) {
    var t = e.stateNode;
    t.pendingContext ? ep(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ep(e, t.context, !1),
    Qd(e, t.containerInfo)
}
function yp(e, t, n, r, o) {
    return Lo(),
    Ud(o),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Sc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function kv(e, t, n) {
    var r = t.pendingProps, o = he.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ie(he, o & 1),
    e === null)
        return pc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = dl(s, r, 0, null),
        e = jr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Sc(n),
        t.memoizedState = bc,
        e) : rf(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return YS(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Jn(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = Jn(a, i) : (i = jr(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Sc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = bc,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Jn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function rf(e, t) {
    return t = dl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ls(e, t, n, r) {
    return r !== null && Ud(r),
    Oo(t, e.child, null, n),
    e = rf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function YS(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = du(Error(D(422))),
        Ls(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = dl({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = jr(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Oo(t, e.child, null, s),
        t.child.memoizedState = Sc(s),
        t.memoizedState = bc,
        i);
    if (!(t.mode & 1))
        return Ls(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(D(419)),
        r = du(i, r, void 0),
        Ls(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Ze || a) {
        if (r = Ae,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            mn(e, o),
            Vt(r, e, o, -1))
        }
        return cf(),
        r = du(Error(D(421))),
        Ls(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = aC.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    it = Qn(o.nextSibling),
    st = t,
    de = !0,
    Ot = null,
    e !== null && (pt[mt++] = cn,
    pt[mt++] = dn,
    pt[mt++] = Lr,
    cn = e.id,
    dn = e.overflow,
    Lr = t),
    t = rf(t, r.children),
    t.flags |= 4096,
    t)
}
function vp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    mc(e.return, t, n)
}
function fu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function Nv(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Ue(e, t, r.children, n),
    r = he.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && vp(e, n, t);
                else if (e.tag === 19)
                    vp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(he, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Aa(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            fu(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Aa(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            fu(t, !0, n, null, i);
            break;
        case "together":
            fu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ea(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function gn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Ir |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Jn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Jn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function QS(e, t, n) {
    switch (t.tag) {
    case 3:
        Pv(t),
        Lo();
        break;
    case 5:
        ev(t);
        break;
    case 1:
        et(t.type) && Ca(t);
        break;
    case 4:
        Qd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ie(Pa, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(he, he.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? kv(e, t, n) : (ie(he, he.current & 1),
            e = gn(e, t, n),
            e !== null ? e.sibling : null);
        ie(he, he.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Nv(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ie(he, he.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ev(e, t, n)
    }
    return gn(e, t, n)
}
var Av, Cc, Rv, jv;
Av = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Cc = function() {}
;
Rv = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        br(Xt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Hu(e, o),
            r = Hu(e, r),
            i = [];
            break;
        case "select":
            o = ge({}, o, {
                value: void 0
            }),
            r = ge({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Yu(e, o),
            r = Yu(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ba)
        }
        qu(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ji.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ji.hasOwnProperty(u) ? (l != null && u === "onScroll" && le("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
jv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ai(e, t) {
    if (!de)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function qS(e, t, n) {
    var r = t.pendingProps;
    switch ($d(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ve(t),
        null;
    case 1:
        return et(t.type) && Sa(),
        Ve(t),
        null;
    case 3:
        return r = t.stateNode,
        Io(),
        ue(Je),
        ue(Be),
        Xd(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ms(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ot !== null && (jc(Ot),
        Ot = null))),
        Cc(e, t),
        Ve(t),
        null;
    case 5:
        qd(t);
        var o = br(Ui.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Rv(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return Ve(t),
                null
            }
            if (e = br(Xt.current),
            Ms(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[Qt] = t,
                r[Bi] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    le("cancel", r),
                    le("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    le("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < mi.length; o++)
                        le(mi[o], r);
                    break;
                case "source":
                    le("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    le("error", r),
                    le("load", r);
                    break;
                case "details":
                    le("toggle", r);
                    break;
                case "input":
                    kh(r, i),
                    le("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    le("invalid", r);
                    break;
                case "textarea":
                    Ah(r, i),
                    le("invalid", r)
                }
                qu(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && js(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && js(r.textContent, a, e),
                        o = ["children", "" + a]) : ji.hasOwnProperty(s) && a != null && s === "onScroll" && le("scroll", r)
                    }
                switch (n) {
                case "input":
                    Cs(r),
                    Nh(r, i, !0);
                    break;
                case "textarea":
                    Cs(r),
                    Rh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = ba)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = iy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Qt] = t,
                e[Bi] = r,
                Av(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Xu(n, r),
                    n) {
                    case "dialog":
                        le("cancel", e),
                        le("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        le("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < mi.length; o++)
                            le(mi[o], e);
                        o = r;
                        break;
                    case "source":
                        le("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        le("error", e),
                        le("load", e),
                        o = r;
                        break;
                    case "details":
                        le("toggle", e),
                        o = r;
                        break;
                    case "input":
                        kh(e, r),
                        o = Hu(e, r),
                        le("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ge({}, r, {
                            value: void 0
                        }),
                        le("invalid", e);
                        break;
                    case "textarea":
                        Ah(e, r),
                        o = Yu(e, r),
                        le("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    qu(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? ly(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && sy(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Mi(e, l) : typeof l == "number" && Mi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ji.hasOwnProperty(i) ? l != null && i === "onScroll" && le("scroll", e) : l != null && kd(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        Cs(e),
                        Nh(e, r, !1);
                        break;
                    case "textarea":
                        Cs(e),
                        Rh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + er(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? po(e, !!r.multiple, i, !1) : r.defaultValue != null && po(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = ba)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ve(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            jv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = br(Ui.current),
            br(Xt.current),
            Ms(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Qt] = t,
                (i = r.nodeValue !== n) && (e = st,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        js(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && js(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Qt] = t,
                t.stateNode = r
        }
        return Ve(t),
        null;
    case 13:
        if (ue(he),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (de && it !== null && t.mode & 1 && !(t.flags & 128))
                Qy(),
                Lo(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ms(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(D(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(D(317));
                    i[Qt] = t
                } else
                    Lo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ve(t),
                i = !1
            } else
                Ot !== null && (jc(Ot),
                Ot = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || he.current & 1 ? Pe === 0 && (Pe = 3) : cf())),
        t.updateQueue !== null && (t.flags |= 4),
        Ve(t),
        null);
    case 4:
        return Io(),
        Cc(e, t),
        e === null && Fi(t.stateNode.containerInfo),
        Ve(t),
        null;
    case 10:
        return Kd(t.type._context),
        Ve(t),
        null;
    case 17:
        return et(t.type) && Sa(),
        Ve(t),
        null;
    case 19:
        if (ue(he),
        i = t.memoizedState,
        i === null)
            return Ve(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                ai(i, !1);
            else {
                if (Pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Aa(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ai(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(he, he.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && xe() > _o && (t.flags |= 128,
                r = !0,
                ai(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Aa(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ai(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !de)
                        return Ve(t),
                        null
                } else
                    2 * xe() - i.renderingStartTime > _o && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ai(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = xe(),
        t.sibling = null,
        n = he.current,
        ie(he, r ? n & 1 | 2 : n & 1),
        t) : (Ve(t),
        null);
    case 22:
    case 23:
        return uf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rt & 1073741824 && (Ve(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function XS(e, t) {
    switch ($d(t),
    t.tag) {
    case 1:
        return et(t.type) && Sa(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Io(),
        ue(Je),
        ue(Be),
        Xd(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return qd(t),
        null;
    case 13:
        if (ue(he),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            Lo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ue(he),
        null;
    case 4:
        return Io(),
        null;
    case 10:
        return Kd(t.type._context),
        null;
    case 22:
    case 23:
        return uf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Os = !1
  , Fe = !1
  , ZS = typeof WeakSet == "function" ? WeakSet : Set
  , V = null;
function so(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ve(e, t, r)
            }
        else
            n.current = null
}
function Ec(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var xp = !1;
function JS(e, t) {
    if (ac = va,
    e = Iy(),
    zd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (a = s),
                            f === i && ++c === r && (l = s),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (lc = {
        focusedElem: e,
        selectionRange: n
    },
    va = !1,
    V = t; V !== null; )
        if (t = V,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            V = e;
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var y = x.memoizedProps
                                  , w = x.memoizedState
                                  , g = t.stateNode
                                  , m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Rt(t.type, y), w);
                                g.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (S) {
                    ve(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    V = e;
                    break
                }
                V = t.return
            }
    return x = xp,
    xp = !1,
    x
}
function Ci(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && Ec(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ul(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Tc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Mv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Mv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Qt],
    delete t[Bi],
    delete t[dc],
    delete t[OS],
    delete t[IS])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Dv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function wp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Dv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Pc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ba));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Pc(e, t, n),
        e = e.sibling; e !== null; )
            Pc(e, t, n),
            e = e.sibling
}
function kc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (kc(e, t, n),
        e = e.sibling; e !== null; )
            kc(e, t, n),
            e = e.sibling
}
var Re = null
  , Lt = !1;
function kn(e, t, n) {
    for (n = n.child; n !== null; )
        Lv(e, t, n),
        n = n.sibling
}
function Lv(e, t, n) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
        try {
            qt.onCommitFiberUnmount(tl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Fe || so(n, t);
    case 6:
        var r = Re
          , o = Lt;
        Re = null,
        kn(e, t, n),
        Re = r,
        Lt = o,
        Re !== null && (Lt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
    case 18:
        Re !== null && (Lt ? (e = Re,
        n = n.stateNode,
        e.nodeType === 8 ? iu(e.parentNode, n) : e.nodeType === 1 && iu(e, n),
        Ii(e)) : iu(Re, n.stateNode));
        break;
    case 4:
        r = Re,
        o = Lt,
        Re = n.stateNode.containerInfo,
        Lt = !0,
        kn(e, t, n),
        Re = r,
        Lt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Fe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && Ec(n, t, s),
                o = o.next
            } while (o !== r)
        }
        kn(e, t, n);
        break;
    case 1:
        if (!Fe && (so(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ve(n, t, a)
            }
        kn(e, t, n);
        break;
    case 21:
        kn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null,
        kn(e, t, n),
        Fe = r) : kn(e, t, n);
        break;
    default:
        kn(e, t, n)
    }
}
function bp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ZS),
        t.forEach(function(r) {
            var o = lC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Pt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Re = a.stateNode,
                        Lt = !1;
                        break e;
                    case 3:
                        Re = a.stateNode.containerInfo,
                        Lt = !0;
                        break e;
                    case 4:
                        Re = a.stateNode.containerInfo,
                        Lt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Re === null)
                    throw Error(D(160));
                Lv(i, s, o),
                Re = null,
                Lt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                ve(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ov(t, e),
            t = t.sibling
}
function Ov(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Pt(t, e),
        Ut(e),
        r & 4) {
            try {
                Ci(3, e, e.return),
                ul(3, e)
            } catch (y) {
                ve(e, e.return, y)
            }
            try {
                Ci(5, e, e.return)
            } catch (y) {
                ve(e, e.return, y)
            }
        }
        break;
    case 1:
        Pt(t, e),
        Ut(e),
        r & 512 && n !== null && so(n, n.return);
        break;
    case 5:
        if (Pt(t, e),
        Ut(e),
        r & 512 && n !== null && so(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Mi(o, "")
            } catch (y) {
                ve(e, e.return, y)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && ry(o, i),
                    Xu(a, s);
                    var u = Xu(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , d = l[s + 1];
                        c === "style" ? ly(o, d) : c === "dangerouslySetInnerHTML" ? sy(o, d) : c === "children" ? Mi(o, d) : kd(o, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Ku(o, i);
                        break;
                    case "textarea":
                        oy(o, i);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        h != null ? po(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? po(o, !!i.multiple, i.defaultValue, !0) : po(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Bi] = i
                } catch (y) {
                    ve(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Pt(t, e),
        Ut(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (y) {
                ve(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Pt(t, e),
        Ut(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ii(t.containerInfo)
            } catch (y) {
                ve(e, e.return, y)
            }
        break;
    case 4:
        Pt(t, e),
        Ut(e);
        break;
    case 13:
        Pt(t, e),
        Ut(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (af = xe())),
        r & 4 && bp(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Fe = (u = Fe) || c,
        Pt(t, e),
        Fe = u) : Pt(t, e),
        Ut(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (V = e,
                c = e.child; c !== null; ) {
                    for (d = V = c; V !== null; ) {
                        switch (f = V,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ci(4, f, f.return);
                            break;
                        case 1:
                            so(f, f.return);
                            var x = f.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (y) {
                                    ve(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            so(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Cp(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        V = h) : Cp(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = ay("display", s))
                        } catch (y) {
                            ve(e, e.return, y)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            ve(e, e.return, y)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Pt(t, e),
        Ut(e),
        r & 4 && bp(e);
        break;
    case 21:
        break;
    default:
        Pt(t, e),
        Ut(e)
    }
}
function Ut(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Dv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Mi(o, ""),
                r.flags &= -33);
                var i = wp(e);
                kc(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = wp(e);
                Pc(e, a, s);
                break;
            default:
                throw Error(D(161))
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function eC(e, t, n) {
    V = e,
    Iv(e)
}
function Iv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var o = V
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Os;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Fe;
                a = Os;
                var u = Fe;
                if (Os = s,
                (Fe = l) && !u)
                    for (V = o; V !== null; )
                        s = V,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Ep(o) : l !== null ? (l.return = s,
                        V = l) : Ep(o);
                for (; i !== null; )
                    V = i,
                    Iv(i),
                    i = i.sibling;
                V = o,
                Os = a,
                Fe = u
            }
            Sp(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            V = i) : Sp(e)
    }
}
function Sp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fe || ul(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Fe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Rt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && sp(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            sp(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Ii(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(D(163))
                    }
                Fe || t.flags & 512 && Tc(t)
            } catch (f) {
                ve(t, t.return, f)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function Cp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function Ep(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ul(4, t)
                } catch (l) {
                    ve(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ve(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    Tc(t)
                } catch (l) {
                    ve(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Tc(t)
                } catch (l) {
                    ve(t, s, l)
                }
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        if (t === e) {
            V = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            V = a;
            break
        }
        V = t.return
    }
}
var tC = Math.ceil
  , Ma = wn.ReactCurrentDispatcher
  , of = wn.ReactCurrentOwner
  , vt = wn.ReactCurrentBatchConfig
  , Z = 0
  , Ae = null
  , Ce = null
  , Me = 0
  , rt = 0
  , ao = ur(0)
  , Pe = 0
  , Gi = null
  , Ir = 0
  , cl = 0
  , sf = 0
  , Ei = null
  , Xe = null
  , af = 0
  , _o = 1 / 0
  , an = null
  , Da = !1
  , Nc = null
  , Xn = null
  , Is = !1
  , Un = null
  , La = 0
  , Ti = 0
  , Ac = null
  , ta = -1
  , na = 0;
function Ge() {
    return Z & 6 ? xe() : ta !== -1 ? ta : ta = xe()
}
function Zn(e) {
    return e.mode & 1 ? Z & 2 && Me !== 0 ? Me & -Me : _S.transition !== null ? (na === 0 && (na = wy()),
    na) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ky(e.type)),
    e) : 1
}
function Vt(e, t, n, r) {
    if (50 < Ti)
        throw Ti = 0,
        Ac = null,
        Error(D(185));
    ss(e, n, r),
    (!(Z & 2) || e !== Ae) && (e === Ae && (!(Z & 2) && (cl |= n),
    Pe === 4 && In(e, Me)),
    tt(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (_o = xe() + 500,
    sl && cr()))
}
function tt(e, t) {
    var n = e.callbackNode;
    _b(e, t);
    var r = ya(e, e === Ae ? Me : 0);
    if (r === 0)
        n !== null && Dh(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Dh(n),
        t === 1)
            e.tag === 0 ? VS(Tp.bind(null, e)) : Ky(Tp.bind(null, e)),
            DS(function() {
                !(Z & 6) && cr()
            }),
            n = null;
        else {
            switch (by(r)) {
            case 1:
                n = Md;
                break;
            case 4:
                n = vy;
                break;
            case 16:
                n = ga;
                break;
            case 536870912:
                n = xy;
                break;
            default:
                n = ga
            }
            n = Wv(n, Vv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Vv(e, t) {
    if (ta = -1,
    na = 0,
    Z & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (xo() && e.callbackNode !== n)
        return null;
    var r = ya(e, e === Ae ? Me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Oa(e, r);
    else {
        t = r;
        var o = Z;
        Z |= 2;
        var i = Fv();
        (Ae !== e || Me !== t) && (an = null,
        _o = xe() + 500,
        Rr(e, t));
        do
            try {
                oC();
                break
            } catch (a) {
                _v(e, a)
            }
        while (!0);
        Hd(),
        Ma.current = i,
        Z = o,
        Ce !== null ? t = 0 : (Ae = null,
        Me = 0,
        t = Pe)
    }
    if (t !== 0) {
        if (t === 2 && (o = nc(e),
        o !== 0 && (r = o,
        t = Rc(e, o))),
        t === 1)
            throw n = Gi,
            Rr(e, 0),
            In(e, r),
            tt(e, xe()),
            n;
        if (t === 6)
            In(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !nC(o) && (t = Oa(e, r),
            t === 2 && (i = nc(e),
            i !== 0 && (r = i,
            t = Rc(e, i))),
            t === 1))
                throw n = Gi,
                Rr(e, 0),
                In(e, r),
                tt(e, xe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                yr(e, Xe, an);
                break;
            case 3:
                if (In(e, r),
                (r & 130023424) === r && (t = af + 500 - xe(),
                10 < t)) {
                    if (ya(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ge(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = cc(yr.bind(null, e, Xe, an), t);
                    break
                }
                yr(e, Xe, an);
                break;
            case 4:
                if (In(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - It(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = xe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tC(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = cc(yr.bind(null, e, Xe, an), r);
                    break
                }
                yr(e, Xe, an);
                break;
            case 5:
                yr(e, Xe, an);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return tt(e, xe()),
    e.callbackNode === n ? Vv.bind(null, e) : null
}
function Rc(e, t) {
    var n = Ei;
    return e.current.memoizedState.isDehydrated && (Rr(e, t).flags |= 256),
    e = Oa(e, t),
    e !== 2 && (t = Xe,
    Xe = n,
    t !== null && jc(t)),
    e
}
function jc(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e)
}
function nC(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ft(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function In(e, t) {
    for (t &= ~sf,
    t &= ~cl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - It(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Tp(e) {
    if (Z & 6)
        throw Error(D(327));
    xo();
    var t = ya(e, 0);
    if (!(t & 1))
        return tt(e, xe()),
        null;
    var n = Oa(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = nc(e);
        r !== 0 && (t = r,
        n = Rc(e, r))
    }
    if (n === 1)
        throw n = Gi,
        Rr(e, 0),
        In(e, t),
        tt(e, xe()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    yr(e, Xe, an),
    tt(e, xe()),
    null
}
function lf(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (_o = xe() + 500,
        sl && cr())
    }
}
function Vr(e) {
    Un !== null && Un.tag === 0 && !(Z & 6) && xo();
    var t = Z;
    Z |= 1;
    var n = vt.transition
      , r = ne;
    try {
        if (vt.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = r,
        vt.transition = n,
        Z = t,
        !(Z & 6) && cr()
    }
}
function uf() {
    rt = ao.current,
    ue(ao)
}
function Rr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    MS(n)),
    Ce !== null)
        for (n = Ce.return; n !== null; ) {
            var r = n;
            switch ($d(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Sa();
                break;
            case 3:
                Io(),
                ue(Je),
                ue(Be),
                Xd();
                break;
            case 5:
                qd(r);
                break;
            case 4:
                Io();
                break;
            case 13:
                ue(he);
                break;
            case 19:
                ue(he);
                break;
            case 10:
                Kd(r.type._context);
                break;
            case 22:
            case 23:
                uf()
            }
            n = n.return
        }
    if (Ae = e,
    Ce = e = Jn(e.current, null),
    Me = rt = t,
    Pe = 0,
    Gi = null,
    sf = cl = Ir = 0,
    Xe = Ei = null,
    wr !== null) {
        for (t = 0; t < wr.length; t++)
            if (n = wr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        wr = null
    }
    return e
}
function _v(e, t) {
    do {
        var n = Ce;
        try {
            if (Hd(),
            Zs.current = ja,
            Ra) {
                for (var r = me.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Ra = !1
            }
            if (Or = 0,
            Ne = Te = me = null,
            Si = !1,
            Wi = 0,
            of.current = null,
            n === null || n.return === null) {
                Pe = 1,
                Gi = t,
                Ce = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = Me,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = fp(s);
                    if (h !== null) {
                        h.flags &= -257,
                        hp(h, s, a, i, t),
                        h.mode & 1 && dp(i, u, t),
                        t = h,
                        l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            dp(i, u, t),
                            cf();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (de && a.mode & 1) {
                    var w = fp(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        hp(w, s, a, i, t),
                        Ud(Vo(l, a));
                        break e
                    }
                }
                i = l = Vo(l, a),
                Pe !== 4 && (Pe = 2),
                Ei === null ? Ei = [i] : Ei.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = bv(i, l, t);
                        ip(i, g);
                        break e;
                    case 1:
                        a = l;
                        var m = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Xn === null || !Xn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = Sv(i, a, t);
                            ip(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Bv(n)
        } catch (C) {
            t = C,
            Ce === n && n !== null && (Ce = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Fv() {
    var e = Ma.current;
    return Ma.current = ja,
    e === null ? ja : e
}
function cf() {
    (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Ae === null || !(Ir & 268435455) && !(cl & 268435455) || In(Ae, Me)
}
function Oa(e, t) {
    var n = Z;
    Z |= 2;
    var r = Fv();
    (Ae !== e || Me !== t) && (an = null,
    Rr(e, t));
    do
        try {
            rC();
            break
        } catch (o) {
            _v(e, o)
        }
    while (!0);
    if (Hd(),
    Z = n,
    Ma.current = r,
    Ce !== null)
        throw Error(D(261));
    return Ae = null,
    Me = 0,
    Pe
}
function rC() {
    for (; Ce !== null; )
        zv(Ce)
}
function oC() {
    for (; Ce !== null && !Ab(); )
        zv(Ce)
}
function zv(e) {
    var t = Uv(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps,
    t === null ? Bv(e) : Ce = t,
    of.current = null
}
function Bv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = XS(n, t),
            n !== null) {
                n.flags &= 32767,
                Ce = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Pe = 6,
                Ce = null;
                return
            }
        } else if (n = qS(n, t, rt),
        n !== null) {
            Ce = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ce = t;
            return
        }
        Ce = t = e
    } while (t !== null);
    Pe === 0 && (Pe = 5)
}
function yr(e, t, n) {
    var r = ne
      , o = vt.transition;
    try {
        vt.transition = null,
        ne = 1,
        iC(e, t, n, r)
    } finally {
        vt.transition = o,
        ne = r
    }
    return null
}
function iC(e, t, n, r) {
    do
        xo();
    while (Un !== null);
    if (Z & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Fb(e, i),
    e === Ae && (Ce = Ae = null,
    Me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Is || (Is = !0,
    Wv(ga, function() {
        return xo(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = vt.transition,
        vt.transition = null;
        var s = ne;
        ne = 1;
        var a = Z;
        Z |= 4,
        of.current = null,
        JS(e, n),
        Ov(n, e),
        TS(lc),
        va = !!ac,
        lc = ac = null,
        e.current = n,
        eC(n),
        Rb(),
        Z = a,
        ne = s,
        vt.transition = i
    } else
        e.current = n;
    if (Is && (Is = !1,
    Un = e,
    La = o),
    i = e.pendingLanes,
    i === 0 && (Xn = null),
    Db(n.stateNode),
    tt(e, xe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Da)
        throw Da = !1,
        e = Nc,
        Nc = null,
        e;
    return La & 1 && e.tag !== 0 && xo(),
    i = e.pendingLanes,
    i & 1 ? e === Ac ? Ti++ : (Ti = 0,
    Ac = e) : Ti = 0,
    cr(),
    null
}
function xo() {
    if (Un !== null) {
        var e = by(La)
          , t = vt.transition
          , n = ne;
        try {
            if (vt.transition = null,
            ne = 16 > e ? 16 : e,
            Un === null)
                var r = !1;
            else {
                if (e = Un,
                Un = null,
                La = 0,
                Z & 6)
                    throw Error(D(331));
                var o = Z;
                for (Z |= 4,
                V = e.current; V !== null; ) {
                    var i = V
                      , s = i.child;
                    if (V.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ci(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        V = d;
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (Mv(c),
                                            c === u) {
                                                V = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                V = f;
                                                break
                                            }
                                            V = h
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null,
                                        y = w
                                    } while (y !== null)
                                }
                            }
                            V = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        V = s;
                    else
                        e: for (; V !== null; ) {
                            if (i = V,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ci(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                V = g;
                                break e
                            }
                            V = i.return
                        }
                }
                var m = e.current;
                for (V = m; V !== null; ) {
                    s = V;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        V = v;
                    else
                        e: for (s = m; V !== null; ) {
                            if (a = V,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ul(9, a)
                                    }
                                } catch (C) {
                                    ve(a, a.return, C)
                                }
                            if (a === s) {
                                V = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                V = S;
                                break e
                            }
                            V = a.return
                        }
                }
                if (Z = o,
                cr(),
                qt && typeof qt.onPostCommitFiberRoot == "function")
                    try {
                        qt.onPostCommitFiberRoot(tl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            vt.transition = t
        }
    }
    return !1
}
function Pp(e, t, n) {
    t = Vo(n, t),
    t = bv(e, t, 1),
    e = qn(e, t, 1),
    t = Ge(),
    e !== null && (ss(e, 1, t),
    tt(e, t))
}
function ve(e, t, n) {
    if (e.tag === 3)
        Pp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Pp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xn === null || !Xn.has(r))) {
                    e = Vo(n, e),
                    e = Sv(t, e, 1),
                    t = qn(t, e, 1),
                    e = Ge(),
                    t !== null && (ss(t, 1, e),
                    tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function sC(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ge(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ae === e && (Me & n) === n && (Pe === 4 || Pe === 3 && (Me & 130023424) === Me && 500 > xe() - af ? Rr(e, 0) : sf |= n),
    tt(e, t)
}
function $v(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ps,
    Ps <<= 1,
    !(Ps & 130023424) && (Ps = 4194304)) : t = 1);
    var n = Ge();
    e = mn(e, t),
    e !== null && (ss(e, t, n),
    tt(e, n))
}
function aC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    $v(e, n)
}
function lC(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    $v(e, n)
}
var Uv;
Uv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Je.current)
            Ze = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ze = !1,
                QS(e, t, n);
            Ze = !!(e.flags & 131072)
        }
    else
        Ze = !1,
        de && t.flags & 1048576 && Gy(t, Ta, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ea(e, t),
        e = t.pendingProps;
        var o = Do(t, Be.current);
        vo(t, n),
        o = Jd(null, t, r, e, o, n);
        var i = ef();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        et(r) ? (i = !0,
        Ca(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Yd(t),
        o.updater = ll,
        t.stateNode = o,
        o._reactInternals = t,
        yc(t, r, e, n),
        t = wc(null, t, r, !0, i, n)) : (t.tag = 0,
        de && i && Bd(t),
        Ue(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ea(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = cC(r),
            e = Rt(r, e),
            o) {
            case 0:
                t = xc(null, t, r, e, n);
                break e;
            case 1:
                t = gp(null, t, r, e, n);
                break e;
            case 11:
                t = pp(null, t, r, e, n);
                break e;
            case 14:
                t = mp(null, t, r, Rt(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Rt(r, o),
        xc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Rt(r, o),
        gp(e, t, r, o, n);
    case 3:
        e: {
            if (Pv(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Jy(e, t),
            Na(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Vo(Error(D(423)), t),
                    t = yp(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Vo(Error(D(424)), t),
                    t = yp(e, t, r, n, o);
                    break e
                } else
                    for (it = Qn(t.stateNode.containerInfo.firstChild),
                    st = t,
                    de = !0,
                    Ot = null,
                    n = Xy(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Lo(),
                r === o) {
                    t = gn(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ev(t),
        e === null && pc(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        uc(r, o) ? s = null : i !== null && uc(r, i) && (t.flags |= 32),
        Tv(e, t),
        Ue(e, t, s, n),
        t.child;
    case 6:
        return e === null && pc(t),
        null;
    case 13:
        return kv(e, t, n);
    case 4:
        return Qd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Oo(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Rt(r, o),
        pp(e, t, r, o, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ie(Pa, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (Ft(i.value, s)) {
                    if (i.children === o.children && !Je.current) {
                        t = gn(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = fn(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    mc(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(D(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            mc(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Ue(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        vo(t, n),
        o = bt(o),
        r = r(o),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Rt(r, t.pendingProps),
        o = Rt(r.type, o),
        mp(e, t, r, o, n);
    case 15:
        return Cv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Rt(r, o),
        ea(e, t),
        t.tag = 1,
        et(r) ? (e = !0,
        Ca(t)) : e = !1,
        vo(t, n),
        wv(t, r, o),
        yc(t, r, o, n),
        wc(null, t, r, !0, e, n);
    case 19:
        return Nv(e, t, n);
    case 22:
        return Ev(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function Wv(e, t) {
    return yy(e, t)
}
function uC(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function gt(e, t, n, r) {
    return new uC(e,t,n,r)
}
function df(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function cC(e) {
    if (typeof e == "function")
        return df(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ad)
            return 11;
        if (e === Rd)
            return 14
    }
    return 2
}
function Jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ra(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        df(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Xr:
            return jr(n.children, o, i, t);
        case Nd:
            s = 8,
            o |= 8;
            break;
        case Bu:
            return e = gt(12, n, t, o | 2),
            e.elementType = Bu,
            e.lanes = i,
            e;
        case $u:
            return e = gt(13, n, t, o),
            e.elementType = $u,
            e.lanes = i,
            e;
        case Uu:
            return e = gt(19, n, t, o),
            e.elementType = Uu,
            e.lanes = i,
            e;
        case ey:
            return dl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Zg:
                    s = 10;
                    break e;
                case Jg:
                    s = 9;
                    break e;
                case Ad:
                    s = 11;
                    break e;
                case Rd:
                    s = 14;
                    break e;
                case Dn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = gt(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function jr(e, t, n, r) {
    return e = gt(7, e, r, t),
    e.lanes = n,
    e
}
function dl(e, t, n, r) {
    return e = gt(22, e, r, t),
    e.elementType = ey,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function hu(e, t, n) {
    return e = gt(6, e, null, t),
    e.lanes = n,
    e
}
function pu(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function dC(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Yl(0),
    this.expirationTimes = Yl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Yl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function ff(e, t, n, r, o, i, s, a, l) {
    return e = new dC(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = gt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Yd(i),
    e
}
function fC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: qr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Hv(e) {
    if (!e)
        return tr;
    e = e._reactInternals;
    e: {
        if (Br(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (et(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n))
            return Hy(e, n, t)
    }
    return t
}
function Kv(e, t, n, r, o, i, s, a, l) {
    return e = ff(n, r, !0, e, o, i, s, a, l),
    e.context = Hv(null),
    n = e.current,
    r = Ge(),
    o = Zn(n),
    i = fn(r, o),
    i.callback = t ?? null,
    qn(n, i, o),
    e.current.lanes = o,
    ss(e, o, r),
    tt(e, r),
    e
}
function fl(e, t, n, r) {
    var o = t.current
      , i = Ge()
      , s = Zn(o);
    return n = Hv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = fn(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = qn(o, t, s),
    e !== null && (Vt(e, o, s, i),
    Xs(e, o, s)),
    s
}
function Ia(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function kp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function hf(e, t) {
    kp(e, t),
    (e = e.alternate) && kp(e, t)
}
function hC() {
    return null
}
var Gv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function pf(e) {
    this._internalRoot = e
}
hl.prototype.render = pf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    fl(e, t, null, null)
}
;
hl.prototype.unmount = pf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vr(function() {
            fl(null, e, null, null)
        }),
        t[pn] = null
    }
}
;
function hl(e) {
    this._internalRoot = e
}
hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ey();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++)
            ;
        On.splice(n, 0, e),
        n === 0 && Py(e)
    }
}
;
function mf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Np() {}
function pC(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ia(s);
                i.call(u)
            }
        }
        var s = Kv(t, r, e, 0, null, !1, !1, "", Np);
        return e._reactRootContainer = s,
        e[pn] = s.current,
        Fi(e.nodeType === 8 ? e.parentNode : e),
        Vr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ia(l);
            a.call(u)
        }
    }
    var l = ff(e, 0, !1, null, null, !1, !1, "", Np);
    return e._reactRootContainer = l,
    e[pn] = l.current,
    Fi(e.nodeType === 8 ? e.parentNode : e),
    Vr(function() {
        fl(t, l, n, r)
    }),
    l
}
function ml(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Ia(s);
                a.call(l)
            }
        }
        fl(t, s, e, o)
    } else
        s = pC(n, t, e, o, r);
    return Ia(s)
}
Sy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = pi(t.pendingLanes);
            n !== 0 && (Dd(t, n | 1),
            tt(t, xe()),
            !(Z & 6) && (_o = xe() + 500,
            cr()))
        }
        break;
    case 13:
        Vr(function() {
            var r = mn(e, 1);
            if (r !== null) {
                var o = Ge();
                Vt(r, e, 1, o)
            }
        }),
        hf(e, 1)
    }
}
;
Ld = function(e) {
    if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
            var n = Ge();
            Vt(t, e, 134217728, n)
        }
        hf(e, 134217728)
    }
}
;
Cy = function(e) {
    if (e.tag === 13) {
        var t = Zn(e)
          , n = mn(e, t);
        if (n !== null) {
            var r = Ge();
            Vt(n, e, t, r)
        }
        hf(e, t)
    }
}
;
Ey = function() {
    return ne
}
;
Ty = function(e, t) {
    var n = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = n
    }
}
;
Ju = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ku(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = il(r);
                    if (!o)
                        throw Error(D(90));
                    ny(r),
                    Ku(r, o)
                }
            }
        }
        break;
    case "textarea":
        oy(e, n);
        break;
    case "select":
        t = n.value,
        t != null && po(e, !!n.multiple, t, !1)
    }
}
;
dy = lf;
fy = Vr;
var mC = {
    usingClientEntryPoint: !1,
    Events: [ls, to, il, uy, cy, lf]
}
  , li = {
    findFiberByHostInstance: xr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , gC = {
    bundleType: li.bundleType,
    version: li.version,
    rendererPackageName: li.rendererPackageName,
    rendererConfig: li.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = my(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: li.findFiberByHostInstance || hC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber)
        try {
            tl = Vs.inject(gC),
            qt = Vs
        } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mC;
ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!mf(t))
        throw Error(D(200));
    return fC(e, t, null, n)
}
;
ct.createRoot = function(e, t) {
    if (!mf(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , o = Gv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = ff(e, 1, !1, null, null, n, !1, r, o),
    e[pn] = t.current,
    Fi(e.nodeType === 8 ? e.parentNode : e),
    new pf(t)
}
;
ct.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = my(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ct.flushSync = function(e) {
    return Vr(e)
}
;
ct.hydrate = function(e, t, n) {
    if (!pl(t))
        throw Error(D(200));
    return ml(null, e, t, !0, n)
}
;
ct.hydrateRoot = function(e, t, n) {
    if (!mf(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Gv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Kv(t, null, e, 1, n ?? null, o, !1, i, s),
    e[pn] = t.current,
    Fi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new hl(t)
}
;
ct.render = function(e, t, n) {
    if (!pl(t))
        throw Error(D(200));
    return ml(null, e, t, !1, n)
}
;
ct.unmountComponentAtNode = function(e) {
    if (!pl(e))
        throw Error(D(40));
    return e._reactRootContainer ? (Vr(function() {
        ml(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[pn] = null
        })
    }),
    !0) : !1
}
;
ct.unstable_batchedUpdates = lf;
ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!pl(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return ml(e, t, n, !1, r)
}
;
ct.version = "18.3.1-next-f1338f8080-20240426";
function Yv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)
        } catch (e) {
            console.error(e)
        }
}
Yv(),
Yg.exports = ct;
var cs = Yg.exports;
const Qv = Ig(cs);
var qv, Ap = cs;
qv = Ap.createRoot,
Ap.hydrateRoot;
const yC = 1
  , vC = 1e6;
let mu = 0;
function xC() {
    return mu = (mu + 1) % Number.MAX_SAFE_INTEGER,
    mu.toString()
}
const gu = new Map
  , Rp = e => {
    if (gu.has(e))
        return;
    const t = setTimeout( () => {
        gu.delete(e),
        Pi({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , vC);
    gu.set(e, t)
}
  , wC = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, yC)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Rp(n) : e.toasts.forEach(r => {
                Rp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , oa = [];
let ia = {
    toasts: []
};
function Pi(e) {
    ia = wC(ia, e),
    oa.forEach(t => {
        t(ia)
    }
    )
}
function bC({...e}) {
    const t = xC()
      , n = o => Pi({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Pi({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Pi({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function SC() {
    const [e,t] = b.useState(ia);
    return b.useEffect( () => (oa.push(t),
    () => {
        const n = oa.indexOf(t);
        n > -1 && oa.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: bC,
        dismiss: n => Pi({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function we(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function jp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Xv(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = jp(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : jp(e[o], null)
                }
            }
    }
}
function ut(...e) {
    return b.useCallback(Xv(...e), e)
}
function Ko(e, t=[]) {
    let n = [];
    function r(i, s) {
        const a = b.createContext(s)
          , l = n.length;
        n = [...n, s];
        const u = d => {
            var g;
            const {scope: f, children: h, ...x} = d
              , y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , w = b.useMemo( () => x, Object.values(x));
            return p.jsx(y.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(d, f) {
            var y;
            const h = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
              , x = b.useContext(h);
            if (x)
                return x;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => b.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return b.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, CC(o, ...t)]
}
function CC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return b.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Mc(e) {
    const t = EC(e)
      , n = b.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , a = b.Children.toArray(i)
          , l = a.find(PC);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : d);
            return p.jsx(t, {
                ...s,
                ref: o,
                children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null
            })
        }
        return p.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function EC(e) {
    const t = b.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (b.isValidElement(o)) {
            const s = NC(o)
              , a = kC(i, o.props);
            return o.type !== b.Fragment && (a.ref = r ? Xv(r, s) : s),
            b.cloneElement(o, a)
        }
        return b.Children.count(o) > 1 ? b.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Zv = Symbol("radix.slottable");
function TC(e) {
    const t = ({children: n}) => p.jsx(p.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Zv,
    t
}
function PC(e) {
    return b.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Zv
}
function kC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function NC(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Jv(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Ko(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = y => {
        const {scope: w, children: g} = y
          , m = R.useRef(null)
          , v = R.useRef(new Map).current;
        return p.jsx(o, {
            scope: w,
            itemMap: v,
            collectionRef: m,
            children: g
        })
    }
    ;
    s.displayName = t;
    const a = e + "CollectionSlot"
      , l = Mc(a)
      , u = R.forwardRef( (y, w) => {
        const {scope: g, children: m} = y
          , v = i(a, g)
          , S = ut(w, v.collectionRef);
        return p.jsx(l, {
            ref: S,
            children: m
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = Mc(c)
      , h = R.forwardRef( (y, w) => {
        const {scope: g, children: m, ...v} = y
          , S = R.useRef(null)
          , C = ut(w, S)
          , E = i(c, g);
        return R.useEffect( () => (E.itemMap.set(S, {
            ref: S,
            ...v
        }),
        () => void E.itemMap.delete(S))),
        p.jsx(f, {
            [d]: "",
            ref: C,
            children: m
        })
    }
    );
    h.displayName = c;
    function x(y) {
        const w = i(e + "CollectionConsumer", y);
        return R.useCallback( () => {
            const m = w.collectionRef.current;
            if (!m)
                return [];
            const v = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (E, T) => v.indexOf(E.ref.current) - v.indexOf(T.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, x, r]
}
var AC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ke = AC.reduce( (e, t) => {
    const n = Mc(`Primitive.${t}`)
      , r = b.forwardRef( (o, i) => {
        const {asChild: s, ...a} = o
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function e0(e, t) {
    e && cs.flushSync( () => e.dispatchEvent(t))
}
function nr(e) {
    const t = b.useRef(e);
    return b.useEffect( () => {
        t.current = e
    }
    ),
    b.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function RC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = nr(e);
    b.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var jC = "DismissableLayer", Dc = "dismissableLayer.update", MC = "dismissableLayer.pointerDownOutside", DC = "dismissableLayer.focusOutside", Mp, t0 = b.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), gf = b.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l} = e
      , u = b.useContext(t0)
      , [c,d] = b.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = b.useState({})
      , x = ut(t, T => d(T))
      , y = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = y.indexOf(w)
      , m = c ? y.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = m >= g
      , C = OC(T => {
        const P = T.target
          , j = [...u.branches].some(M => M.contains(P));
        !S || j || (o == null || o(T),
        s == null || s(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , E = IC(T => {
        const P = T.target;
        [...u.branches].some(M => M.contains(P)) || (i == null || i(T),
        s == null || s(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return RC(T => {
        m === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    b.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Mp = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Dp(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Mp)
            }
    }
    , [c, f, n, u]),
    b.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Dp())
    }
    , [c, u]),
    b.useEffect( () => {
        const T = () => h({});
        return document.addEventListener(Dc, T),
        () => document.removeEventListener(Dc, T)
    }
    , []),
    p.jsx(ke.div, {
        ...l,
        ref: x,
        style: {
            pointerEvents: v ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: we(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: we(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: we(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
gf.displayName = jC;
var LC = "DismissableLayerBranch"
  , n0 = b.forwardRef( (e, t) => {
    const n = b.useContext(t0)
      , r = b.useRef(null)
      , o = ut(t, r);
    return b.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    p.jsx(ke.div, {
        ...e,
        ref: o
    })
}
);
n0.displayName = LC;
function OC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = nr(e)
      , r = b.useRef(!1)
      , o = b.useRef( () => {}
    );
    return b.useEffect( () => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function() {
                    r0(MC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function IC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = nr(e)
      , r = b.useRef(!1);
    return b.useEffect( () => {
        const o = i => {
            i.target && !r.current && r0(DC, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Dp() {
    const e = new CustomEvent(Dc);
    document.dispatchEvent(e)
}
function r0(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? e0(o, i) : o.dispatchEvent(i)
}
var VC = gf
  , _C = n0
  , Jt = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
  , FC = "Portal"
  , o0 = b.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,i] = b.useState(!1);
    Jt( () => i(!0), []);
    const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? Qv.createPortal(p.jsx(ke.div, {
        ...r,
        ref: t
    }), s) : null
}
);
o0.displayName = FC;
function zC(e, t) {
    return b.useReducer( (n, r) => t[n][r] ?? n, e)
}
var gl = e => {
    const {present: t, children: n} = e
      , r = BC(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : b.Children.only(n)
      , i = ut(r.ref, $C(o));
    return typeof n == "function" || r.isPresent ? b.cloneElement(o, {
        ref: i
    }) : null
}
;
gl.displayName = "Presence";
function BC(e) {
    const [t,n] = b.useState()
      , r = b.useRef(null)
      , o = b.useRef(e)
      , i = b.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [a,l] = zC(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return b.useEffect( () => {
        const u = _s(r.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Jt( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const f = i.current
              , h = _s(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Jt( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const y = _s(r.current).includes(h.animationName);
                if (h.target === t && y && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (i.current = _s(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: b.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function _s(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function $C(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var UC = Ed[" useInsertionEffect ".trim().toString()] || Jt;
function yl({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = WC({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const c = b.useRef(e !== void 0);
        b.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = b.useCallback(c => {
        var d;
        if (a) {
            const f = HC(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            i(c)
    }
    , [a, e, i, s]);
    return [l, u]
}
function WC({defaultProp: e, onChange: t}) {
    const [n,r] = b.useState(e)
      , o = b.useRef(n)
      , i = b.useRef(t);
    return UC( () => {
        i.current = t
    }
    , [t]),
    b.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function HC(e) {
    return typeof e == "function"
}
var KC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , GC = "VisuallyHidden"
  , vl = b.forwardRef( (e, t) => p.jsx(ke.span, {
    ...e,
    ref: t,
    style: {
        ...KC,
        ...e.style
    }
}));
vl.displayName = GC;
var YC = vl
  , yf = "ToastProvider"
  , [vf,QC,qC] = Jv("Toast")
  , [i0,ED] = Ko("Toast", [qC])
  , [XC,xl] = i0(yf)
  , s0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [a,l] = b.useState(null)
      , [u,c] = b.useState(0)
      , d = b.useRef(!1)
      , f = b.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${yf}\`. Expected non-empty \`string\`.`),
    p.jsx(vf.Provider, {
        scope: t,
        children: p.jsx(XC, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: b.useCallback( () => c(h => h + 1), []),
            onToastRemove: b.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: s
        })
    })
}
;
s0.displayName = yf;
var a0 = "ToastViewport"
  , ZC = ["F8"]
  , Lc = "toast.viewportPause"
  , Oc = "toast.viewportResume"
  , l0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=ZC, label: o="Notifications ({hotkey})", ...i} = e
      , s = xl(a0, n)
      , a = QC(n)
      , l = b.useRef(null)
      , u = b.useRef(null)
      , c = b.useRef(null)
      , d = b.useRef(null)
      , f = ut(t, d, s.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = s.toastCount > 0;
    b.useEffect( () => {
        const w = g => {
            var v;
            r.length !== 0 && r.every(S => g[S] || g.code === S) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    b.useEffect( () => {
        const w = l.current
          , g = d.current;
        if (x && w && g) {
            const m = () => {
                if (!s.isClosePausedRef.current) {
                    const E = new CustomEvent(Lc);
                    g.dispatchEvent(E),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const E = new CustomEvent(Oc);
                    g.dispatchEvent(E),
                    s.isClosePausedRef.current = !1
                }
            }
              , S = E => {
                !w.contains(E.relatedTarget) && v()
            }
              , C = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", m),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [x, s.isClosePausedRef]);
    const y = b.useCallback( ({tabbingDirection: w}) => {
        const m = a().map(v => {
            const S = v.ref.current
              , C = [S, ...dE(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? m.reverse() : m).flat()
    }
    , [a]);
    return b.useEffect( () => {
        const w = d.current;
        if (w) {
            const g = m => {
                var C, E, T;
                const v = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !v) {
                    const P = document.activeElement
                      , j = m.shiftKey;
                    if (m.target === w && j) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = y({
                        tabbingDirection: j ? "backwards" : "forwards"
                    })
                      , G = I.findIndex(L => L === P);
                    yu(I.slice(G + 1)) ? m.preventDefault() : j ? (E = u.current) == null || E.focus() : (T = c.current) == null || T.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [a, y]),
    p.jsxs(_C, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && p.jsx(Ic, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "forwards"
                });
                yu(w)
            }
        }), p.jsx(vf.Slot, {
            scope: n,
            children: p.jsx(ke.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), x && p.jsx(Ic, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "backwards"
                });
                yu(w)
            }
        })]
    })
}
);
l0.displayName = a0;
var u0 = "ToastFocusProxy"
  , Ic = b.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = xl(u0, n);
    return p.jsx(vl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const a = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Ic.displayName = u0;
var ds = "Toast"
  , JC = "toast.swipeStart"
  , eE = "toast.swipeMove"
  , tE = "toast.swipeCancel"
  , nE = "toast.swipeEnd"
  , c0 = b.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [a,l] = yl({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: ds
    });
    return p.jsx(gl, {
        present: n || a,
        children: p.jsx(iE, {
            open: a,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: nr(e.onPause),
            onResume: nr(e.onResume),
            onSwipeStart: we(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: we(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: we(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: we(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
c0.displayName = ds;
var [rE,oE] = i0(ds, {
    onClose() {}
})
  , iE = b.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...x} = e
      , y = xl(ds, n)
      , [w,g] = b.useState(null)
      , m = ut(t, L => g(L))
      , v = b.useRef(null)
      , S = b.useRef(null)
      , C = o || y.duration
      , E = b.useRef(0)
      , T = b.useRef(C)
      , P = b.useRef(0)
      , {onToastAdd: j, onToastRemove: M} = y
      , z = nr( () => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = y.viewport) == null || Y.focus()),
        s()
    }
    )
      , I = b.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(P.current),
        E.current = new Date().getTime(),
        P.current = window.setTimeout(z, L))
    }
    , [z]);
    b.useEffect( () => {
        const L = y.viewport;
        if (L) {
            const Y = () => {
                I(T.current),
                u == null || u()
            }
              , $ = () => {
                const F = new Date().getTime() - E.current;
                T.current = T.current - F,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return L.addEventListener(Lc, $),
            L.addEventListener(Oc, Y),
            () => {
                L.removeEventListener(Lc, $),
                L.removeEventListener(Oc, Y)
            }
        }
    }
    , [y.viewport, C, l, u, I]),
    b.useEffect( () => {
        i && !y.isClosePausedRef.current && I(C)
    }
    , [i, C, y.isClosePausedRef, I]),
    b.useEffect( () => (j(),
    () => M()), [j, M]);
    const G = b.useMemo( () => w ? y0(w) : null, [w]);
    return y.viewport ? p.jsxs(p.Fragment, {
        children: [G && p.jsx(sE, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: G
        }), p.jsx(rE, {
            scope: n,
            onClose: z,
            children: cs.createPortal(p.jsx(vf.ItemSlot, {
                scope: n,
                children: p.jsx(VC, {
                    asChild: !0,
                    onEscapeKeyDown: we(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || z(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: p.jsx(ke.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...x,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: we(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent),
                            L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: we(e.onPointerDown, L => {
                            L.button === 0 && (v.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }
                        ),
                        onPointerMove: we(e.onPointerMove, L => {
                            if (!v.current)
                                return;
                            const Y = L.clientX - v.current.x
                              , $ = L.clientY - v.current.y
                              , F = !!S.current
                              , k = ["left", "right"].includes(y.swipeDirection)
                              , A = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , O = k ? A(0, Y) : 0
                              , U = k ? 0 : A(0, $)
                              , B = L.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: O,
                                y: U
                            }
                              , X = {
                                originalEvent: L,
                                delta: Q
                            };
                            F ? (S.current = Q,
                            Fs(eE, d, X, {
                                discrete: !1
                            })) : Lp(Q, y.swipeDirection, B) ? (S.current = Q,
                            Fs(JC, c, X, {
                                discrete: !1
                            }),
                            L.target.setPointerCapture(L.pointerId)) : (Math.abs(Y) > B || Math.abs($) > B) && (v.current = null)
                        }
                        ),
                        onPointerUp: we(e.onPointerUp, L => {
                            const Y = S.current
                              , $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId),
                            S.current = null,
                            v.current = null,
                            Y) {
                                const F = L.currentTarget
                                  , k = {
                                    originalEvent: L,
                                    delta: Y
                                };
                                Lp(Y, y.swipeDirection, y.swipeThreshold) ? Fs(nE, h, k, {
                                    discrete: !0
                                }) : Fs(tE, f, k, {
                                    discrete: !0
                                }),
                                F.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , sE = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = xl(ds, t)
      , [i,s] = b.useState(!1)
      , [a,l] = b.useState(!1);
    return uE( () => s(!0)),
    b.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : p.jsx(o0, {
        asChild: !0,
        children: p.jsx(vl, {
            ...r,
            children: i && p.jsxs(p.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , aE = "ToastTitle"
  , d0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(ke.div, {
        ...r,
        ref: t
    })
}
);
d0.displayName = aE;
var lE = "ToastDescription"
  , f0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return p.jsx(ke.div, {
        ...r,
        ref: t
    })
}
);
f0.displayName = lE;
var h0 = "ToastAction"
  , p0 = b.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? p.jsx(g0, {
        altText: n,
        asChild: !0,
        children: p.jsx(xf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${h0}\`. Expected non-empty \`string\`.`),
    null)
}
);
p0.displayName = h0;
var m0 = "ToastClose"
  , xf = b.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = oE(m0, n);
    return p.jsx(g0, {
        asChild: !0,
        children: p.jsx(ke.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: we(e.onClick, o.onClose)
        })
    })
}
);
xf.displayName = m0;
var g0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return p.jsx(ke.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function y0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        cE(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...y0(r))
        }
    }
    ),
    t
}
function Fs(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? e0(o, i) : o.dispatchEvent(i)
}
var Lp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function uE(e= () => {}
) {
    const t = nr(e);
    Jt( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function cE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function dE(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function yu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var fE = s0
  , v0 = l0
  , x0 = c0
  , w0 = d0
  , b0 = f0
  , S0 = p0
  , C0 = xf;
function E0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = E0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function T0() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = E0(e)) && (r && (r += " "),
        r += t);
    return r
}
const Op = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Ip = T0
  , hE = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Ip(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const f = Op(c) || Op(d);
        return o[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(x => {
            let[y,w] = x;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...a
            }[y]) : {
                ...i,
                ...a
            }[y] === w
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Ip(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , P0 = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gE = b.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...a}, l) => b.createElement("svg", {
    ref: l,
    ...mE,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: P0("lucide", o),
    ...a
}, [...s.map( ([u,c]) => b.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = (e, t) => {
    const n = b.forwardRef( ({className: r, ...o}, i) => b.createElement(gE, {
        ref: i,
        iconNode: t,
        className: P0(`lucide-${pE(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = oe("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = oe("Bell", [["path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
    key: "1qo2s2"
}], ["path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
    key: "qgo35s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yE = oe("Building2", [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {
    d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
    key: "10jefs"
}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {
    d: "M10 10h4",
    key: "tcdvrf"
}], ["path", {
    d: "M10 14h4",
    key: "kelpxr"
}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = oe("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = oe("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = oe("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = oe("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = oe("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wE = oe("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = oe("Handshake", [["path", {
    d: "m11 17 2 2a1 1 0 1 0 3-3",
    key: "efffak"
}], ["path", {
    d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
    key: "9pr0kb"
}], ["path", {
    d: "m21 3 1 11h-2",
    key: "1tisrp"
}], ["path", {
    d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
    key: "1uvwmv"
}], ["path", {
    d: "M3 4h8",
    key: "1ep09j"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SE = oe("LockOpen", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 9.9-1",
    key: "1mm8w8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CE = oe("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EE = oe("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TE = oe("Percent", [["line", {
    x1: "19",
    x2: "5",
    y1: "5",
    y2: "19",
    key: "1x9vlm"
}], ["circle", {
    cx: "6.5",
    cy: "6.5",
    r: "2.5",
    key: "4mh3h7"
}], ["circle", {
    cx: "17.5",
    cy: "17.5",
    r: "2.5",
    key: "1mdrzq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PE = oe("Scale", [["path", {
    d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "7g6ntu"
}], ["path", {
    d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
    key: "ijws7r"
}], ["path", {
    d: "M7 21h10",
    key: "1b0cd5"
}], ["path", {
    d: "M12 3v18",
    key: "108xh3"
}], ["path", {
    d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
    key: "3gwbw2"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kE = oe("ShieldCheck", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NE = oe("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AE = oe("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RE = oe("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jE = oe("Store", [["path", {
    d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
    key: "ztvudi"
}], ["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["path", {
    d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",
    key: "2ebpfo"
}], ["path", {
    d: "M2 7h20",
    key: "1fcdvo"
}], ["path", {
    d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
    key: "6c3vgh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ME = oe("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DE = oe("TrendingDown", [["polyline", {
    points: "22 17 13.5 8.5 8.5 13.5 2 7",
    key: "1r2t7k"
}], ["polyline", {
    points: "16 17 22 17 22 11",
    key: "11uiuu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N0 = oe("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LE = oe("UserCheck", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["polyline", {
    points: "16 11 18 13 22 9",
    key: "1pwet4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = oe("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OE = oe("Wind", [["path", {
    d: "M12.8 19.6A2 2 0 1 0 14 16H2",
    key: "148xed"
}], ["path", {
    d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
    key: "1u4tom"
}], ["path", {
    d: "M9.8 4.4A2 2 0 1 1 11 8H2",
    key: "75valh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = oe("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IE = oe("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Sf = "-"
  , VE = e => {
    const t = FE(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const a = s.split(Sf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            A0(a, t) || _E(s)
        }
        ,
        getConflictingClassGroupIds: (s, a) => {
            const l = n[s] || [];
            return a && r[s] ? [...l, ...r[s]] : l
        }
    }
}
  , A0 = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? A0(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Sf);
    return (s = t.validators.find( ({validator: a}) => a(i))) == null ? void 0 : s.classGroupId
}
  , _p = /^\[(.+)\]$/
  , _E = e => {
    if (_p.test(e)) {
        const t = _p.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , FE = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return BE(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Vc(s, r, i, t)
    }
    ),
    r
}
  , Vc = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Fp(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (zE(o)) {
                Vc(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Vc(s, Fp(t, i), n, r)
        }
        )
    }
    )
}
  , Fp = (e, t) => {
    let n = e;
    return t.split(Sf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , zE = e => e.isThemeGetter
  , BE = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,a]) => [t + s, a])) : i);
    return [n, o]
}
) : e
  , $E = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , R0 = "!"
  , UE = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (u === 0) {
                if (g === o && (r || a.slice(w, w + i) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + i;
                    continue
                }
                if (g === "/") {
                    d = w;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(R0)
          , x = h ? f.substring(1) : f
          , y = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: x,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: s
    }) : s
}
  , WE = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , HE = e => ({
    cache: $E(e.cacheSize),
    parseClassName: UE(e),
    ...VE(e)
})
  , KE = /\s+/
  , GE = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(KE);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const u = s[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let x = !!h
          , y = r(x ? f.substring(0, h) : f);
        if (!y) {
            if (!x) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (y = r(f),
            !y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            x = !1
        }
        const w = WE(c).join(":")
          , g = d ? w + R0 : w
          , m = g + y;
        if (i.includes(m))
            continue;
        i.push(m);
        const v = o(y, x);
        for (let S = 0; S < v.length; ++S) {
            const C = v[S];
            i.push(g + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function YE() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = j0(t)) && (r && (r += " "),
        r += n);
    return r
}
const j0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = j0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function QE(e, ...t) {
    let n, r, o, i = s;
    function s(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = HE(u),
        r = n.cache.get,
        o = n.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = GE(l, n);
        return o(l, c),
        c
    }
    return function() {
        return i(YE.apply(null, arguments))
    }
}
const ae = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , M0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , qE = /^\d+\/\d+$/
  , XE = new Set(["px", "full", "screen"])
  , ZE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , JE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , eT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , tT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , nT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , on = e => wo(e) || XE.has(e) || qE.test(e)
  , Nn = e => Go(e, "length", cT)
  , wo = e => !!e && !Number.isNaN(Number(e))
  , vu = e => Go(e, "number", wo)
  , ui = e => !!e && Number.isInteger(Number(e))
  , rT = e => e.endsWith("%") && wo(e.slice(0, -1))
  , K = e => M0.test(e)
  , An = e => ZE.test(e)
  , oT = new Set(["length", "size", "percentage"])
  , iT = e => Go(e, oT, D0)
  , sT = e => Go(e, "position", D0)
  , aT = new Set(["image", "url"])
  , lT = e => Go(e, aT, fT)
  , uT = e => Go(e, "", dT)
  , ci = () => !0
  , Go = (e, t, n) => {
    const r = M0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , cT = e => JE.test(e) && !eT.test(e)
  , D0 = () => !1
  , dT = e => tT.test(e)
  , fT = e => nT.test(e)
  , hT = () => {
    const e = ae("colors")
      , t = ae("spacing")
      , n = ae("blur")
      , r = ae("brightness")
      , o = ae("borderColor")
      , i = ae("borderRadius")
      , s = ae("borderSpacing")
      , a = ae("borderWidth")
      , l = ae("contrast")
      , u = ae("grayscale")
      , c = ae("hueRotate")
      , d = ae("invert")
      , f = ae("gap")
      , h = ae("gradientColorStops")
      , x = ae("gradientColorStopPositions")
      , y = ae("inset")
      , w = ae("margin")
      , g = ae("opacity")
      , m = ae("padding")
      , v = ae("saturate")
      , S = ae("scale")
      , C = ae("sepia")
      , E = ae("skew")
      , T = ae("space")
      , P = ae("translate")
      , j = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", K, t]
      , I = () => [K, t]
      , G = () => ["", on, Nn]
      , L = () => ["auto", wo, K]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", K]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [wo, K];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ci],
            spacing: [on, Nn],
            blur: ["none", "", An, K],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", An, K],
            borderSpacing: I(),
            borderWidth: G(),
            contrast: U(),
            grayscale: A(),
            hueRotate: U(),
            invert: A(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [rT, Nn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: I(),
            saturate: U(),
            scale: U(),
            sepia: A(),
            skew: U(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", K]
            }],
            container: ["container"],
            columns: [{
                columns: [An]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), K]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: j()
            }],
            "overscroll-x": [{
                "overscroll-x": j()
            }],
            "overscroll-y": [{
                "overscroll-y": j()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ui, K]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", K]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", ui, K]
            }],
            "grid-cols": [{
                "grid-cols": [ci]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ui, K]
                }, K]
            }],
            "col-start": [{
                "col-start": L()
            }],
            "col-end": [{
                "col-end": L()
            }],
            "grid-rows": [{
                "grid-rows": [ci]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ui, K]
                }, K]
            }],
            "row-start": [{
                "row-start": L()
            }],
            "row-end": [{
                "row-end": L()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", K]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", K]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t]
            }],
            "min-w": [{
                "min-w": [K, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [K, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [An]
                }, An]
            }],
            h: [{
                h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [K, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", An, Nn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", vu]
            }],
            "font-family": [{
                font: [ci]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K]
            }],
            "line-clamp": [{
                "line-clamp": ["none", wo, vu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", on, K]
            }],
            "list-image": [{
                "list-image": ["none", K]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", K]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", on, Nn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", on, K]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", K]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), sT]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", iT]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, lT]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [on, K]
            }],
            "outline-w": [{
                outline: [on, Nn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: G()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [on, Nn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", An, uT]
            }],
            "shadow-color": [{
                shadow: [ci]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...F(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": F()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", An, K]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", K]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", K]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [ui, K]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", K]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", K]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [on, Nn, vu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , pT = QE(hT);
function nn(...e) {
    return pT(T0(e))
}
const mT = fE
  , L0 = b.forwardRef( ({className: e, ...t}, n) => p.jsx(v0, {
    ref: n,
    className: nn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
L0.displayName = v0.displayName;
const gT = hE("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , O0 = b.forwardRef( ({className: e, variant: t, ...n}, r) => p.jsx(x0, {
    ref: r,
    className: nn(gT({
        variant: t
    }), e),
    ...n
}));
O0.displayName = x0.displayName;
const yT = b.forwardRef( ({className: e, ...t}, n) => p.jsx(S0, {
    ref: n,
    className: nn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
yT.displayName = S0.displayName;
const I0 = b.forwardRef( ({className: e, ...t}, n) => p.jsx(C0, {
    ref: n,
    className: nn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: p.jsx(Va, {
        className: "h-4 w-4"
    })
}));
I0.displayName = C0.displayName;
const V0 = b.forwardRef( ({className: e, ...t}, n) => p.jsx(w0, {
    ref: n,
    className: nn("text-sm font-semibold", e),
    ...t
}));
V0.displayName = w0.displayName;
const _0 = b.forwardRef( ({className: e, ...t}, n) => p.jsx(b0, {
    ref: n,
    className: nn("text-sm opacity-90", e),
    ...t
}));
_0.displayName = b0.displayName;
function vT() {
    const {toasts: e} = SC();
    return p.jsxs(mT, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return p.jsxs(O0, {
                ...i,
                children: [p.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && p.jsx(V0, {
                        children: n
                    }), r && p.jsx(_0, {
                        children: r
                    })]
                }), o, p.jsx(I0, {})]
            }, t)
        }), p.jsx(L0, {})]
    })
}
var zp = ["light", "dark"]
  , xT = "(prefers-color-scheme: dark)"
  , wT = b.createContext(void 0)
  , bT = {
    setTheme: e => {}
    ,
    themes: []
}
  , ST = () => {
    var e;
    return (e = b.useContext(wT)) != null ? e : bT
}
;
b.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: a, nonce: l}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? zp.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (x, y=!1, w=!0) => {
        let g = s ? s[x] : x
          , m = y ? x + "|| ''" : `'${g}'`
          , v = "";
        return o && w && !y && zp.includes(x) && (v += `d.style.colorScheme = '${x}';`),
        n === "class" ? y || g ? v += `c.add(${m})` : v += "null" : g && (v += `d[s](n,${m})`),
        v
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${xT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
    return b.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var CT = e => {
    switch (e) {
    case "success":
        return PT;
    case "info":
        return NT;
    case "warning":
        return kT;
    case "error":
        return AT;
    default:
        return null
    }
}
  , ET = Array(12).fill(0)
  , TT = ({visible: e, className: t}) => R.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, ET.map( (n, r) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , PT = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , kT = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , NT = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , AT = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , RT = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , jT = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , _c = 1
  , MT = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : _c++
              , i = this.toasts.find(a => a.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async l => {
                if (i = ["resolve", l],
                R.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (LT(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => s.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || _c++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , qe = new MT
  , DT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || _c++;
    return qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , LT = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , OT = DT
  , IT = () => qe.toasts
  , VT = () => qe.getActiveToasts();
Object.assign(OT, {
    success: qe.success,
    info: qe.info,
    warning: qe.warning,
    error: qe.error,
    custom: qe.custom,
    message: qe.message,
    promise: qe.promise,
    dismiss: qe.dismiss,
    loading: qe.loading
}, {
    getHistory: IT,
    getToasts: VT
});
function _T(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
_T(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function zs(e) {
    return e.label !== void 0
}
var FT = 3
  , zT = "32px"
  , BT = "16px"
  , Bp = 4e3
  , $T = 356
  , UT = 14
  , WT = 20
  , HT = 200;
function kt(...e) {
    return e.filter(Boolean).join(" ")
}
function KT(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var GT = e => {
    var t, n, r, o, i, s, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: x, interacting: y, setHeights: w, visibleToasts: g, heights: m, index: v, toasts: S, expanded: C, removeToast: E, defaultRichColors: T, closeButton: P, style: j, cancelButtonStyle: M, actionButtonStyle: z, className: I="", descriptionClassName: G="", duration: L, position: Y, gap: $, loadingIcon: F, expandByDefault: k, classNames: A, icons: O, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: B} = e
      , [Q,X] = R.useState(null)
      , [be,Le] = R.useState(null)
      , [ee,$r] = R.useState(!1)
      , [bn,fr] = R.useState(!1)
      , [Sn,Ur] = R.useState(!1)
      , [Cn,ys] = R.useState(!1)
      , [_l,vs] = R.useState(!1)
      , [Fl,Jo] = R.useState(0)
      , [Wr,ph] = R.useState(0)
      , ei = R.useRef(h.duration || L || Bp)
      , mh = R.useRef(null)
      , hr = R.useRef(null)
      , I1 = v === 0
      , V1 = v + 1 <= g
      , ft = h.type
      , Hr = h.dismissible !== !1
      , _1 = h.className || ""
      , F1 = h.descriptionClassName || ""
      , xs = R.useMemo( () => m.findIndex(W => W.toastId === h.id) || 0, [m, h.id])
      , z1 = R.useMemo( () => {
        var W;
        return (W = h.closeButton) != null ? W : P
    }
    , [h.closeButton, P])
      , gh = R.useMemo( () => h.duration || L || Bp, [h.duration, L])
      , zl = R.useRef(0)
      , Kr = R.useRef(0)
      , yh = R.useRef(0)
      , Gr = R.useRef(null)
      , [B1,$1] = Y.split("-")
      , vh = R.useMemo( () => m.reduce( (W, re, ce) => ce >= xs ? W : W + re.height, 0), [m, xs])
      , xh = jT()
      , U1 = h.invert || f
      , Bl = ft === "loading";
    Kr.current = R.useMemo( () => xs * $ + vh, [xs, vh]),
    R.useEffect( () => {
        ei.current = gh
    }
    , [gh]),
    R.useEffect( () => {
        $r(!0)
    }
    , []),
    R.useEffect( () => {
        let W = hr.current;
        if (W) {
            let re = W.getBoundingClientRect().height;
            return ph(re),
            w(ce => [{
                toastId: h.id,
                height: re,
                position: h.position
            }, ...ce]),
            () => w(ce => ce.filter(Ct => Ct.toastId !== h.id))
        }
    }
    , [w, h.id]),
    R.useLayoutEffect( () => {
        if (!ee)
            return;
        let W = hr.current
          , re = W.style.height;
        W.style.height = "auto";
        let ce = W.getBoundingClientRect().height;
        W.style.height = re,
        ph(ce),
        w(Ct => Ct.find(Et => Et.toastId === h.id) ? Ct.map(Et => Et.toastId === h.id ? {
            ...Et,
            height: ce
        } : Et) : [{
            toastId: h.id,
            height: ce,
            position: h.position
        }, ...Ct])
    }
    , [ee, h.title, h.description, w, h.id]);
    let En = R.useCallback( () => {
        fr(!0),
        Jo(Kr.current),
        w(W => W.filter(re => re.toastId !== h.id)),
        setTimeout( () => {
            E(h)
        }
        , HT)
    }
    , [h, E, w, Kr]);
    R.useEffect( () => {
        if (h.promise && ft === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let W;
        return C || y || B && xh ? ( () => {
            if (yh.current < zl.current) {
                let re = new Date().getTime() - zl.current;
                ei.current = ei.current - re
            }
            yh.current = new Date().getTime()
        }
        )() : ei.current !== 1 / 0 && (zl.current = new Date().getTime(),
        W = setTimeout( () => {
            var re;
            (re = h.onAutoClose) == null || re.call(h, h),
            En()
        }
        , ei.current)),
        () => clearTimeout(W)
    }
    , [C, y, h, ft, B, xh, En]),
    R.useEffect( () => {
        h.delete && En()
    }
    , [En, h.delete]);
    function W1() {
        var W, re, ce;
        return O != null && O.loading ? R.createElement("div", {
            className: kt(A == null ? void 0 : A.loader, (W = h == null ? void 0 : h.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, O.loading) : F ? R.createElement("div", {
            className: kt(A == null ? void 0 : A.loader, (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, F) : R.createElement(TT, {
            className: kt(A == null ? void 0 : A.loader, (ce = h == null ? void 0 : h.classNames) == null ? void 0 : ce.loader),
            visible: ft === "loading"
        })
    }
    return R.createElement("li", {
        tabIndex: 0,
        ref: hr,
        className: kt(I, _1, A == null ? void 0 : A.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[ft], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ft]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : T,
        "data-styled": !(h.jsx || h.unstyled || x),
        "data-mounted": ee,
        "data-promise": !!h.promise,
        "data-swiped": _l,
        "data-removed": bn,
        "data-visible": V1,
        "data-y-position": B1,
        "data-x-position": $1,
        "data-index": v,
        "data-front": I1,
        "data-swiping": Sn,
        "data-dismissible": Hr,
        "data-type": ft,
        "data-invert": U1,
        "data-swipe-out": Cn,
        "data-swipe-direction": be,
        "data-expanded": !!(C || k && ee),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": S.length - v,
            "--offset": `${bn ? Fl : Kr.current}px`,
            "--initial-height": k ? "auto" : `${Wr}px`,
            ...j,
            ...h.style
        },
        onDragEnd: () => {
            Ur(!1),
            X(null),
            Gr.current = null
        }
        ,
        onPointerDown: W => {
            Bl || !Hr || (mh.current = new Date,
            Jo(Kr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Ur(!0),
            Gr.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, re, ce, Ct;
            if (Cn || !Hr)
                return;
            Gr.current = null;
            let Et = Number(((W = hr.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , Tn = Number(((re = hr.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , pr = new Date().getTime() - ((ce = mh.current) == null ? void 0 : ce.getTime())
              , Tt = Q === "x" ? Et : Tn
              , Pn = Math.abs(Tt) / pr;
            if (Math.abs(Tt) >= WT || Pn > .11) {
                Jo(Kr.current),
                (Ct = h.onDismiss) == null || Ct.call(h, h),
                Le(Q === "x" ? Et > 0 ? "right" : "left" : Tn > 0 ? "down" : "up"),
                En(),
                ys(!0),
                vs(!1);
                return
            }
            Ur(!1),
            X(null)
        }
        ,
        onPointerMove: W => {
            var re, ce, Ct, Et;
            if (!Gr.current || !Hr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let Tn = W.clientY - Gr.current.y
              , pr = W.clientX - Gr.current.x
              , Tt = (ce = e.swipeDirections) != null ? ce : KT(Y);
            !Q && (Math.abs(pr) > 1 || Math.abs(Tn) > 1) && X(Math.abs(pr) > Math.abs(Tn) ? "x" : "y");
            let Pn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (Tt.includes("top") || Tt.includes("bottom")) && (Tt.includes("top") && Tn < 0 || Tt.includes("bottom") && Tn > 0) && (Pn.y = Tn) : Q === "x" && (Tt.includes("left") || Tt.includes("right")) && (Tt.includes("left") && pr < 0 || Tt.includes("right") && pr > 0) && (Pn.x = pr),
            (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && vs(!0),
            (Ct = hr.current) == null || Ct.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
            (Et = hr.current) == null || Et.style.setProperty("--swipe-amount-y", `${Pn.y}px`)
        }
    }, z1 && !h.jsx ? R.createElement("button", {
        "aria-label": U,
        "data-disabled": Bl,
        "data-close-button": !0,
        onClick: Bl || !Hr ? () => {}
        : () => {
            var W;
            En(),
            (W = h.onDismiss) == null || W.call(h, h)
        }
        ,
        className: kt(A == null ? void 0 : A.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton)
    }, (i = O == null ? void 0 : O.close) != null ? i : RT) : null, h.jsx || b.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : R.createElement(R.Fragment, null, ft || h.icon || h.promise ? R.createElement("div", {
        "data-icon": "",
        className: kt(A == null ? void 0 : A.icon, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || W1() : null, h.type !== "loading" ? h.icon || (O == null ? void 0 : O[ft]) || CT(ft) : null) : null, R.createElement("div", {
        "data-content": "",
        className: kt(A == null ? void 0 : A.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, R.createElement("div", {
        "data-title": "",
        className: kt(A == null ? void 0 : A.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? R.createElement("div", {
        "data-description": "",
        className: kt(G, F1, A == null ? void 0 : A.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), b.isValidElement(h.cancel) ? h.cancel : h.cancel && zs(h.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || M,
        onClick: W => {
            var re, ce;
            zs(h.cancel) && Hr && ((ce = (re = h.cancel).onClick) == null || ce.call(re, W),
            En())
        }
        ,
        className: kt(A == null ? void 0 : A.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, b.isValidElement(h.action) ? h.action : h.action && zs(h.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || z,
        onClick: W => {
            var re, ce;
            zs(h.action) && ((ce = (re = h.action).onClick) == null || ce.call(re, W),
            !W.defaultPrevented && En())
        }
        ,
        className: kt(A == null ? void 0 : A.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function $p() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function YT(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , a = i ? BT : zT;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var QT = b.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: x=FT, toastOptions: y, dir: w=$p(), gap: g=UT, loadingIcon: m, icons: v, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,T] = R.useState([])
      , P = R.useMemo( () => Array.from(new Set([r].concat(E.filter(B => B.position).map(B => B.position)))), [E, r])
      , [j,M] = R.useState([])
      , [z,I] = R.useState(!1)
      , [G,L] = R.useState(!1)
      , [Y,$] = R.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , F = R.useRef(null)
      , k = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , A = R.useRef(null)
      , O = R.useRef(!1)
      , U = R.useCallback(B => {
        T(Q => {
            var X;
            return (X = Q.find(be => be.id === B.id)) != null && X.delete || qe.dismiss(B.id),
            Q.filter( ({id: be}) => be !== B.id)
        }
        )
    }
    , []);
    return R.useEffect( () => qe.subscribe(B => {
        if (B.dismiss) {
            T(Q => Q.map(X => X.id === B.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            Qv.flushSync( () => {
                T(Q => {
                    let X = Q.findIndex(be => be.id === B.id);
                    return X !== -1 ? [...Q.slice(0, X), {
                        ...Q[X],
                        ...B
                    }, ...Q.slice(X + 1)] : [B, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Q}) => {
                $(Q ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: X}) => {
                try {
                    $(X ? "dark" : "light")
                } catch (be) {
                    console.error(be)
                }
            }
            )
        }
    }
    , [c]),
    R.useEffect( () => {
        E.length <= 1 && I(!1)
    }
    , [E]),
    R.useEffect( () => {
        let B = Q => {
            var X, be;
            o.every(Le => Q[Le] || Q.code === Le) && (I(!0),
            (X = F.current) == null || X.focus()),
            Q.code === "Escape" && (document.activeElement === F.current || (be = F.current) != null && be.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [o]),
    R.useEffect( () => {
        if (F.current)
            return () => {
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null,
                O.current = !1)
            }
    }
    , [F.current]),
    R.createElement("section", {
        ref: t,
        "aria-label": `${S} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (B, Q) => {
        var X;
        let[be,Le] = B.split("-");
        return E.length ? R.createElement("ol", {
            key: B,
            dir: w === "auto" ? $p() : w,
            tabIndex: -1,
            ref: F,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": be,
            "data-lifted": z && E.length > 1 && !i,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((X = j[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${$T}px`,
                "--gap": `${g}px`,
                ...h,
                ...YT(l, u)
            },
            onBlur: ee => {
                O.current && !ee.currentTarget.contains(ee.relatedTarget) && (O.current = !1,
                A.current && (A.current.focus({
                    preventScroll: !0
                }),
                A.current = null))
            }
            ,
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                A.current = ee.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                G || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || L(!0)
            }
            ,
            onPointerUp: () => L(!1)
        }, E.filter(ee => !ee.position && Q === 0 || ee.position === B).map( (ee, $r) => {
            var bn, fr;
            return R.createElement(GT, {
                key: ee.id,
                icons: v,
                index: $r,
                toast: ee,
                defaultRichColors: d,
                duration: (bn = y == null ? void 0 : y.duration) != null ? bn : f,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (fr = y == null ? void 0 : y.closeButton) != null ? fr : s,
                interacting: G,
                position: B,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: U,
                toasts: E.filter(Sn => Sn.position == ee.position),
                heights: j.filter(Sn => Sn.position == ee.position),
                setHeights: M,
                expandByDefault: i,
                gap: g,
                loadingIcon: m,
                expanded: z,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const qT = ({...e}) => {
    const {theme: t="system"} = ST();
    return p.jsx(QT, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var XT = Ed[" useId ".trim().toString()] || ( () => {}
)
  , ZT = 0;
function F0(e) {
    const [t,n] = b.useState(XT());
    return Jt( () => {
        n(r => r ?? String(ZT++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const JT = ["top", "right", "bottom", "left"]
  , rr = Math.min
  , ot = Math.max
  , _a = Math.round
  , Bs = Math.floor
  , or = e => ({
    x: e,
    y: e
})
  , eP = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , tP = {
    start: "end",
    end: "start"
};
function Fc(e, t, n) {
    return ot(e, rr(t, n))
}
function yn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function vn(e) {
    return e.split("-")[0]
}
function Yo(e) {
    return e.split("-")[1]
}
function Cf(e) {
    return e === "x" ? "y" : "x"
}
function Ef(e) {
    return e === "y" ? "height" : "width"
}
function ir(e) {
    return ["top", "bottom"].includes(vn(e)) ? "y" : "x"
}
function Tf(e) {
    return Cf(ir(e))
}
function nP(e, t, n) {
    n === void 0 && (n = !1);
    const r = Yo(e)
      , o = Tf(e)
      , i = Ef(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Fa(s)),
    [s, Fa(s)]
}
function rP(e) {
    const t = Fa(e);
    return [zc(e), t, zc(t)]
}
function zc(e) {
    return e.replace(/start|end/g, t => tP[t])
}
function oP(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : s;
    default:
        return []
    }
}
function iP(e, t, n, r) {
    const o = Yo(e);
    let i = oP(vn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(zc)))),
    i
}
function Fa(e) {
    return e.replace(/left|right|bottom|top/g, t => eP[t])
}
function sP(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function z0(e) {
    return typeof e != "number" ? sP(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function za(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Up(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = ir(t)
      , s = Tf(t)
      , a = Ef(s)
      , l = vn(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , f = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (Yo(t)) {
    case "start":
        h[s] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[s] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const aP = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , a = i.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Up(u, r, l)
      , f = r
      , h = {}
      , x = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: w, fn: g} = a[y]
          , {x: m, y: v, data: S, reset: C} = await g({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = m ?? c,
        d = v ?? d,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...S
            }
        },
        C && x <= 50 && (x++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: c, y: d} = Up(u, f, l)),
        y = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: o,
        middlewareData: h
    }
}
;
async function Yi(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = yn(t, e)
      , x = z0(h)
      , w = a[f ? d === "floating" ? "reference" : "floating" : d]
      , g = za(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , m = d === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = za(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: m,
        offsetParent: v,
        strategy: l
    }) : m);
    return {
        top: (g.top - C.top + x.top) / S.y,
        bottom: (C.bottom - g.bottom + x.bottom) / S.y,
        left: (g.left - C.left + x.left) / S.x,
        right: (C.right - g.right + x.right) / S.x
    }
}
const lP = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = yn(e, t) || {};
        if (u == null)
            return {};
        const d = z0(c)
          , f = {
            x: n,
            y: r
        }
          , h = Tf(o)
          , x = Ef(h)
          , y = await s.getDimensions(u)
          , w = h === "y"
          , g = w ? "top" : "left"
          , m = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , S = i.reference[x] + i.reference[h] - f[h] - i.floating[x]
          , C = f[h] - i.reference[h]
          , E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let T = E ? E[v] : 0;
        (!T || !await (s.isElement == null ? void 0 : s.isElement(E))) && (T = a.floating[v] || i.floating[x]);
        const P = S / 2 - C / 2
          , j = T / 2 - y[x] / 2 - 1
          , M = rr(d[g], j)
          , z = rr(d[m], j)
          , I = M
          , G = T - y[x] - z
          , L = T / 2 - y[x] / 2 + P
          , Y = Fc(I, L, G)
          , $ = !l.arrow && Yo(o) != null && L !== Y && i.reference[x] / 2 - (L < I ? M : z) - y[x] / 2 < 0
          , F = $ ? L < I ? L - I : L - G : 0;
        return {
            [h]: f[h] + F,
            data: {
                [h]: Y,
                centerOffset: L - Y - F,
                ...$ && {
                    alignmentOffset: F
                }
            },
            reset: $
        }
    }
})
  , uP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: y=!0, ...w} = yn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const g = vn(o)
              , m = ir(a)
              , v = vn(a) === a
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = f || (v || !y ? [Fa(a)] : rP(a))
              , E = x !== "none";
            !f && E && C.push(...iP(a, y, x, S));
            const T = [a, ...C]
              , P = await Yi(t, w)
              , j = [];
            let M = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && j.push(P[g]),
            d) {
                const L = nP(o, s, S);
                j.push(P[L[0]], P[L[1]])
            }
            if (M = [...M, {
                placement: o,
                overflows: j
            }],
            !j.every(L => L <= 0)) {
                var z, I;
                const L = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1
                  , Y = T[L];
                if (Y)
                    return {
                        data: {
                            index: L,
                            overflows: M
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let $ = (I = M.filter(F => F.overflows[0] <= 0).sort( (F, k) => F.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (h) {
                    case "bestFit":
                        {
                            var G;
                            const F = (G = M.filter(k => {
                                if (E) {
                                    const A = ir(k.placement);
                                    return A === m || A === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(A => A > 0).reduce( (A, O) => A + O, 0)]).sort( (k, A) => k[1] - A[1])[0]) == null ? void 0 : G[0];
                            F && ($ = F);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Wp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Hp(e) {
    return JT.some(t => e[t] >= 0)
}
const cP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = yn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await Yi(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Wp(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Hp(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await Yi(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Wp(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Hp(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function dP(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = vn(n)
      , a = Yo(n)
      , l = ir(n) === "y"
      , u = ["left", "top"].includes(s) ? -1 : 1
      , c = i && l ? -1 : 1
      , d = yn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: x} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof x == "number" && (h = a === "end" ? x * -1 : x),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const fP = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: a} = t
              , l = await dP(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , hP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: a={
                fn: w => {
                    let {x: g, y: m} = w;
                    return {
                        x: g,
                        y: m
                    }
                }
            }, ...l} = yn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Yi(t, l)
              , d = ir(vn(o))
              , f = Cf(d);
            let h = u[f]
              , x = u[d];
            if (i) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , m = h + c[w]
                  , v = h - c[g];
                h = Fc(m, h, v)
            }
            if (s) {
                const w = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , m = x + c[w]
                  , v = x - c[g];
                x = Fc(m, x, v)
            }
            const y = a.fn({
                ...t,
                [f]: h,
                [d]: x
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [f]: i,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , pP = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = yn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = ir(o)
              , f = Cf(d);
            let h = c[f]
              , x = c[d];
            const y = yn(a, t)
              , w = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (l) {
                const v = f === "y" ? "height" : "width"
                  , S = i.reference[f] - i.floating[v] + w.mainAxis
                  , C = i.reference[f] + i.reference[v] - w.mainAxis;
                h < S ? h = S : h > C && (h = C)
            }
            if (u) {
                var g, m;
                const v = f === "y" ? "width" : "height"
                  , S = ["top", "left"].includes(vn(o))
                  , C = i.reference[d] - i.floating[v] + (S && ((g = s.offset) == null ? void 0 : g[d]) || 0) + (S ? 0 : w.crossAxis)
                  , E = i.reference[d] + i.reference[v] + (S ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) - (S ? w.crossAxis : 0);
                x < C ? x = C : x > E && (x = E)
            }
            return {
                [f]: h,
                [d]: x
            }
        }
    }
}
  , mP = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: a} = t
              , {apply: l= () => {}
            , ...u} = yn(e, t)
              , c = await Yi(t, u)
              , d = vn(o)
              , f = Yo(o)
              , h = ir(o) === "y"
              , {width: x, height: y} = i.floating;
            let w, g;
            d === "top" || d === "bottom" ? (w = d,
            g = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d,
            w = f === "end" ? "top" : "bottom");
            const m = y - c.top - c.bottom
              , v = x - c.left - c.right
              , S = rr(y - c[w], m)
              , C = rr(x - c[g], v)
              , E = !t.middlewareData.shift;
            let T = S
              , P = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = m),
            E && !f) {
                const M = ot(c.left, 0)
                  , z = ot(c.right, 0)
                  , I = ot(c.top, 0)
                  , G = ot(c.bottom, 0);
                h ? P = x - 2 * (M !== 0 || z !== 0 ? M + z : ot(c.left, c.right)) : T = y - 2 * (I !== 0 || G !== 0 ? I + G : ot(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: T
            });
            const j = await s.getDimensions(a.floating);
            return x !== j.width || y !== j.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function bl() {
    return typeof window < "u"
}
function Qo(e) {
    return B0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function at(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function rn(e) {
    var t;
    return (t = (B0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function B0(e) {
    return bl() ? e instanceof Node || e instanceof at(e).Node : !1
}
function zt(e) {
    return bl() ? e instanceof Element || e instanceof at(e).Element : !1
}
function en(e) {
    return bl() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1
}
function Kp(e) {
    return !bl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot
}
function fs(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Bt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function gP(e) {
    return ["table", "td", "th"].includes(Qo(e))
}
function Sl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Pf(e) {
    const t = kf()
      , n = zt(e) ? Bt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function yP(e) {
    let t = sr(e);
    for (; en(t) && !Fo(t); ) {
        if (Pf(t))
            return t;
        if (Sl(t))
            return null;
        t = sr(t)
    }
    return null
}
function kf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Fo(e) {
    return ["html", "body", "#document"].includes(Qo(e))
}
function Bt(e) {
    return at(e).getComputedStyle(e)
}
function Cl(e) {
    return zt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function sr(e) {
    if (Qo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Kp(e) && e.host || rn(e);
    return Kp(t) ? t.host : t
}
function $0(e) {
    const t = sr(e);
    return Fo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : en(t) && fs(t) ? t : $0(t)
}
function Qi(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = $0(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = at(o);
    if (i) {
        const a = Bc(s);
        return t.concat(s, s.visualViewport || [], fs(o) ? o : [], a && n ? Qi(a) : [])
    }
    return t.concat(o, Qi(o, [], n))
}
function Bc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function U0(e) {
    const t = Bt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = en(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , a = _a(n) !== i || _a(r) !== s;
    return a && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: a
    }
}
function Nf(e) {
    return zt(e) ? e : e.contextElement
}
function bo(e) {
    const t = Nf(e);
    if (!en(t))
        return or(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = U0(t);
    let s = (i ? _a(n.width) : n.width) / r
      , a = (i ? _a(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: s,
        y: a
    }
}
const vP = or(0);
function W0(e) {
    const t = at(e);
    return !kf() || !t.visualViewport ? vP : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function xP(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== at(e) ? !1 : t
}
function Fr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Nf(e);
    let s = or(1);
    t && (r ? zt(r) && (s = bo(r)) : s = bo(e));
    const a = xP(i, n, r) ? W0(i) : or(0);
    let l = (o.left + a.x) / s.x
      , u = (o.top + a.y) / s.y
      , c = o.width / s.x
      , d = o.height / s.y;
    if (i) {
        const f = at(i)
          , h = r && zt(r) ? at(r) : r;
        let x = f
          , y = Bc(x);
        for (; y && r && h !== x; ) {
            const w = bo(y)
              , g = y.getBoundingClientRect()
              , m = Bt(y)
              , v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * w.x
              , S = g.top + (y.clientTop + parseFloat(m.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            l += v,
            u += S,
            x = at(y),
            y = Bc(x)
        }
    }
    return za({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function wP(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = rn(r)
      , a = t ? Sl(t.floating) : !1;
    if (r === s || a && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = or(1);
    const c = or(0)
      , d = en(r);
    if ((d || !d && !i) && ((Qo(r) !== "body" || fs(s)) && (l = Cl(r)),
    en(r))) {
        const f = Fr(r);
        u = bo(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y
    }
}
function bP(e) {
    return Array.from(e.getClientRects())
}
function $c(e, t) {
    const n = Cl(e).scrollLeft;
    return t ? t.left + n : Fr(rn(e)).left + n
}
function SP(e) {
    const t = rn(e)
      , n = Cl(e)
      , r = e.ownerDocument.body
      , o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + $c(e);
    const a = -n.scrollTop;
    return Bt(r).direction === "rtl" && (s += ot(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: a
    }
}
function CP(e, t) {
    const n = at(e)
      , r = rn(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = kf();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: l
    }
}
function EP(e, t) {
    const n = Fr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = en(e) ? bo(e) : or(1)
      , s = e.clientWidth * i.x
      , a = e.clientHeight * i.y
      , l = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}
function Gp(e, t, n) {
    let r;
    if (t === "viewport")
        r = CP(e, n);
    else if (t === "document")
        r = SP(rn(e));
    else if (zt(t))
        r = EP(t, n);
    else {
        const o = W0(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return za(r)
}
function H0(e, t) {
    const n = sr(e);
    return n === t || !zt(n) || Fo(n) ? !1 : Bt(n).position === "fixed" || H0(n, t)
}
function TP(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Qi(e, [], !1).filter(a => zt(a) && Qo(a) !== "body")
      , o = null;
    const i = Bt(e).position === "fixed";
    let s = i ? sr(e) : e;
    for (; zt(s) && !Fo(s); ) {
        const a = Bt(s)
          , l = Pf(s);
        !l && a.position === "fixed" && (o = null),
        (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || fs(s) && !l && H0(e, s)) ? r = r.filter(c => c !== s) : o = a,
        s = sr(s)
    }
    return t.set(e, r),
    r
}
function PP(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? Sl(t) ? [] : TP(t, this._c) : [].concat(n), r]
      , a = s[0]
      , l = s.reduce( (u, c) => {
        const d = Gp(t, c, o);
        return u.top = ot(d.top, u.top),
        u.right = rr(d.right, u.right),
        u.bottom = rr(d.bottom, u.bottom),
        u.left = ot(d.left, u.left),
        u
    }
    , Gp(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function kP(e) {
    const {width: t, height: n} = U0(e);
    return {
        width: t,
        height: n
    }
}
function NP(e, t, n) {
    const r = en(t)
      , o = rn(t)
      , i = n === "fixed"
      , s = Fr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = or(0);
    if (r || !r && !i)
        if ((Qo(t) !== "body" || fs(o)) && (a = Cl(t)),
        r) {
            const h = Fr(t, !0, i, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            o && (l.x = $c(o));
    let u = 0
      , c = 0;
    if (o && !r && !i) {
        const h = o.getBoundingClientRect();
        c = h.top + a.scrollTop,
        u = h.left + a.scrollLeft - $c(o, h)
    }
    const d = s.left + a.scrollLeft - l.x - u
      , f = s.top + a.scrollTop - l.y - c;
    return {
        x: d,
        y: f,
        width: s.width,
        height: s.height
    }
}
function xu(e) {
    return Bt(e).position === "static"
}
function Yp(e, t) {
    if (!en(e) || Bt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return rn(e) === n && (n = n.ownerDocument.body),
    n
}
function K0(e, t) {
    const n = at(e);
    if (Sl(e))
        return n;
    if (!en(e)) {
        let o = sr(e);
        for (; o && !Fo(o); ) {
            if (zt(o) && !xu(o))
                return o;
            o = sr(o)
        }
        return n
    }
    let r = Yp(e, t);
    for (; r && gP(r) && xu(r); )
        r = Yp(r, t);
    return r && Fo(r) && xu(r) && !Pf(r) ? n : r || yP(e) || n
}
const AP = async function(e) {
    const t = this.getOffsetParent || K0
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: NP(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function RP(e) {
    return Bt(e).direction === "rtl"
}
const jP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: wP,
    getDocumentElement: rn,
    getClippingRect: PP,
    getOffsetParent: K0,
    getElementRects: AP,
    getClientRects: bP,
    getDimensions: kP,
    getScale: bo,
    isElement: zt,
    isRTL: RP
};
function MP(e, t) {
    let n = null, r;
    const o = rn(e);
    function i() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function s(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const {left: u, top: c, width: d, height: f} = e.getBoundingClientRect();
        if (a || t(),
        !d || !f)
            return;
        const h = Bs(c)
          , x = Bs(o.clientWidth - (u + d))
          , y = Bs(o.clientHeight - (c + f))
          , w = Bs(u)
          , m = {
            rootMargin: -h + "px " + -x + "px " + -y + "px " + -w + "px",
            threshold: ot(0, rr(1, l)) || 1
        };
        let v = !0;
        function S(C) {
            const E = C[0].intersectionRatio;
            if (E !== l) {
                if (!v)
                    return s();
                E ? s(!1, E) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(S,{
                ...m,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S,m)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function DP(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Nf(e)
      , c = o || i ? [...u ? Qi(u) : [], ...Qi(t)] : [];
    c.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }),
        i && g.addEventListener("resize", n)
    }
    );
    const d = u && a ? MP(u, n) : null;
    let f = -1
      , h = null;
    s && (h = new ResizeObserver(g => {
        let[m] = g;
        m && m.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var v;
            (v = h) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let x, y = l ? Fr(e) : null;
    l && w();
    function w() {
        const g = Fr(e);
        y && (g.x !== y.x || g.y !== y.y || g.width !== y.width || g.height !== y.height) && n(),
        y = g,
        x = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        c.forEach(m => {
            o && m.removeEventListener("scroll", n),
            i && m.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (g = h) == null || g.disconnect(),
        h = null,
        l && cancelAnimationFrame(x)
    }
}
const LP = fP
  , OP = hP
  , IP = uP
  , VP = mP
  , _P = cP
  , Qp = lP
  , FP = pP
  , zP = (e, t, n) => {
    const r = new Map
      , o = {
        platform: jP,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return aP(e, t, {
        ...o,
        platform: i
    })
}
;
var sa = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
function Ba(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ba(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ba(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function G0(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function qp(e, t) {
    const n = G0(e);
    return Math.round(t * n) / n
}
function wu(e) {
    const t = b.useRef(e);
    return sa( () => {
        t.current = e
    }
    ),
    t
}
function BP(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = b.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = b.useState(r);
    Ba(f, r) || h(r);
    const [x,y] = b.useState(null)
      , [w,g] = b.useState(null)
      , m = b.useCallback(k => {
        k !== E.current && (E.current = k,
        y(k))
    }
    , [])
      , v = b.useCallback(k => {
        k !== T.current && (T.current = k,
        g(k))
    }
    , [])
      , S = i || x
      , C = s || w
      , E = b.useRef(null)
      , T = b.useRef(null)
      , P = b.useRef(c)
      , j = l != null
      , M = wu(l)
      , z = wu(o)
      , I = wu(u)
      , G = b.useCallback( () => {
        if (!E.current || !T.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        z.current && (k.platform = z.current),
        zP(E.current, T.current, k).then(A => {
            const O = {
                ...A,
                isPositioned: I.current !== !1
            };
            L.current && !Ba(P.current, O) && (P.current = O,
            cs.flushSync( () => {
                d(O)
            }
            ))
        }
        )
    }
    , [f, t, n, z, I]);
    sa( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const L = b.useRef(!1);
    sa( () => (L.current = !0,
    () => {
        L.current = !1
    }
    ), []),
    sa( () => {
        if (S && (E.current = S),
        C && (T.current = C),
        S && C) {
            if (M.current)
                return M.current(S, C, G);
            G()
        }
    }
    , [S, C, G, M, j]);
    const Y = b.useMemo( () => ({
        reference: E,
        floating: T,
        setReference: m,
        setFloating: v
    }), [m, v])
      , $ = b.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , F = b.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return k;
        const A = qp($.floating, c.x)
          , O = qp($.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + A + "px, " + O + "px)",
            ...G0($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: O
        }
    }
    , [n, a, $.floating, c.x, c.y]);
    return b.useMemo( () => ({
        ...c,
        update: G,
        refs: Y,
        elements: $,
        floatingStyles: F
    }), [c, G, Y, $, F])
}
const $P = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Qp({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Qp({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , UP = (e, t) => ({
    ...LP(e),
    options: [e, t]
})
  , WP = (e, t) => ({
    ...OP(e),
    options: [e, t]
})
  , HP = (e, t) => ({
    ...FP(e),
    options: [e, t]
})
  , KP = (e, t) => ({
    ...IP(e),
    options: [e, t]
})
  , GP = (e, t) => ({
    ...VP(e),
    options: [e, t]
})
  , YP = (e, t) => ({
    ..._P(e),
    options: [e, t]
})
  , QP = (e, t) => ({
    ...$P(e),
    options: [e, t]
});
var qP = "Arrow"
  , Y0 = b.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return p.jsx(ke.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : p.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Y0.displayName = qP;
var XP = Y0;
function ZP(e) {
    const [t,n] = b.useState(void 0);
    return Jt( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize,
                    a = u.blockSize
                } else
                    s = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Q0 = "Popper"
  , [q0,X0] = Ko(Q0)
  , [TD,Z0] = q0(Q0)
  , J0 = "PopperAnchor"
  , ex = b.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Z0(J0, n)
      , s = b.useRef(null)
      , a = ut(t, s);
    return b.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : p.jsx(ke.div, {
        ...o,
        ref: a
    })
}
);
ex.displayName = J0;
var Af = "PopperContent"
  , [JP,ek] = q0(Af)
  , tx = b.forwardRef( (e, t) => {
    var ee, $r, bn, fr, Sn, Ur;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: x, ...y} = e
      , w = Z0(Af, n)
      , [g,m] = b.useState(null)
      , v = ut(t, Cn => m(Cn))
      , [S,C] = b.useState(null)
      , E = ZP(S)
      , T = (E == null ? void 0 : E.width) ?? 0
      , P = (E == null ? void 0 : E.height) ?? 0
      , j = r + (i !== "center" ? "-" + i : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , z = Array.isArray(u) ? u : [u]
      , I = z.length > 0
      , G = {
        padding: M,
        boundary: z.filter(nk),
        altBoundary: I
    }
      , {refs: L, floatingStyles: Y, placement: $, isPositioned: F, middlewareData: k} = BP({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...Cn) => DP(...Cn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [UP({
            mainAxis: o + P,
            alignmentAxis: s
        }), l && WP({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? HP() : void 0,
            ...G
        }), l && KP({
            ...G
        }), GP({
            ...G,
            apply: ({elements: Cn, rects: ys, availableWidth: _l, availableHeight: vs}) => {
                const {width: Fl, height: Jo} = ys.reference
                  , Wr = Cn.floating.style;
                Wr.setProperty("--radix-popper-available-width", `${_l}px`),
                Wr.setProperty("--radix-popper-available-height", `${vs}px`),
                Wr.setProperty("--radix-popper-anchor-width", `${Fl}px`),
                Wr.setProperty("--radix-popper-anchor-height", `${Jo}px`)
            }
        }), S && QP({
            element: S,
            padding: a
        }), rk({
            arrowWidth: T,
            arrowHeight: P
        }), f && YP({
            strategy: "referenceHidden",
            ...G
        })]
    })
      , [A,O] = ox($)
      , U = nr(x);
    Jt( () => {
        F && (U == null || U())
    }
    , [F, U]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x
      , Q = ($r = k.arrow) == null ? void 0 : $r.y
      , X = ((bn = k.arrow) == null ? void 0 : bn.centerOffset) !== 0
      , [be,Le] = b.useState();
    return Jt( () => {
        g && Le(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    p.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: F ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: be,
            "--radix-popper-transform-origin": [(fr = k.transformOrigin) == null ? void 0 : fr.x, (Sn = k.transformOrigin) == null ? void 0 : Sn.y].join(" "),
            ...((Ur = k.hide) == null ? void 0 : Ur.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: p.jsx(JP, {
            scope: n,
            placedSide: A,
            onArrowChange: C,
            arrowX: B,
            arrowY: Q,
            shouldHideArrow: X,
            children: p.jsx(ke.div, {
                "data-side": A,
                "data-align": O,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: F ? void 0 : "none"
                }
            })
        })
    })
}
);
tx.displayName = Af;
var nx = "PopperArrow"
  , tk = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , rx = b.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = ek(nx, r)
      , s = tk[i.placedSide];
    return p.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: p.jsx(XP, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
rx.displayName = nx;
function nk(e) {
    return e !== null
}
var rk = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, m;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [u,c] = ox(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , h = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let x = ""
          , y = "";
        return u === "bottom" ? (x = s ? d : `${f}px`,
        y = `${-l}px`) : u === "top" ? (x = s ? d : `${f}px`,
        y = `${r.floating.height + l}px`) : u === "right" ? (x = `${-l}px`,
        y = s ? d : `${h}px`) : u === "left" && (x = `${r.floating.width + l}px`,
        y = s ? d : `${h}px`),
        {
            data: {
                x,
                y
            }
        }
    }
});
function ox(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var ok = ex
  , ik = tx
  , sk = rx
  , [El,PD] = Ko("Tooltip", [X0])
  , Rf = X0()
  , ix = "TooltipProvider"
  , ak = 700
  , Xp = "tooltip.open"
  , [lk,sx] = El(ix)
  , ax = e => {
    const {__scopeTooltip: t, delayDuration: n=ak, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = b.useRef(!0)
      , a = b.useRef(!1)
      , l = b.useRef(0);
    return b.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    p.jsx(lk, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: b.useCallback( () => {
            window.clearTimeout(l.current),
            s.current = !1
        }
        , []),
        onClose: b.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
ax.displayName = ix;
var lx = "Tooltip"
  , [kD,Tl] = El(lx)
  , Uc = "TooltipTrigger"
  , uk = b.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Tl(Uc, n)
      , i = sx(Uc, n)
      , s = Rf(n)
      , a = b.useRef(null)
      , l = ut(t, a, o.onTriggerChange)
      , u = b.useRef(!1)
      , c = b.useRef(!1)
      , d = b.useCallback( () => u.current = !1, []);
    return b.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    p.jsx(ok, {
        asChild: !0,
        ...s,
        children: p.jsx(ke.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: we(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: we(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: we(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: we(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: we(e.onBlur, o.onClose),
            onClick: we(e.onClick, o.onClose)
        })
    })
}
);
uk.displayName = Uc;
var ck = "TooltipPortal"
  , [ND,dk] = El(ck, {
    forceMount: void 0
})
  , zo = "TooltipContent"
  , ux = b.forwardRef( (e, t) => {
    const n = dk(zo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Tl(zo, e.__scopeTooltip);
    return p.jsx(gl, {
        present: r || s.open,
        children: s.disableHoverableContent ? p.jsx(cx, {
            side: o,
            ...i,
            ref: t
        }) : p.jsx(fk, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , fk = b.forwardRef( (e, t) => {
    const n = Tl(zo, e.__scopeTooltip)
      , r = sx(zo, e.__scopeTooltip)
      , o = b.useRef(null)
      , i = ut(t, o)
      , [s,a] = b.useState(null)
      , {trigger: l, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , f = b.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = b.useCallback( (x, y) => {
        const w = x.currentTarget
          , g = {
            x: x.clientX,
            y: x.clientY
        }
          , m = yk(g, w.getBoundingClientRect())
          , v = vk(g, m)
          , S = xk(y.getBoundingClientRect())
          , C = bk([...v, ...S]);
        a(C),
        d(!0)
    }
    , [d]);
    return b.useEffect( () => () => f(), [f]),
    b.useEffect( () => {
        if (l && c) {
            const x = w => h(w, c)
              , y = w => h(w, l);
            return l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", y),
            () => {
                l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", y)
            }
        }
    }
    , [l, c, h, f]),
    b.useEffect( () => {
        if (s) {
            const x = y => {
                const w = y.target
                  , g = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , m = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !wk(g, s);
                m ? f() : v && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
        }
    }
    , [l, c, s, u, f]),
    p.jsx(cx, {
        ...e,
        ref: i
    })
}
)
  , [hk,pk] = El(lx, {
    isInside: !1
})
  , mk = TC("TooltipContent")
  , cx = b.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...a} = e
      , l = Tl(zo, n)
      , u = Rf(n)
      , {onClose: c} = l;
    return b.useEffect( () => (document.addEventListener(Xp, c),
    () => document.removeEventListener(Xp, c)), [c]),
    b.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    p.jsx(gf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: p.jsxs(ik, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [p.jsx(mk, {
                children: r
            }), p.jsx(hk, {
                scope: n,
                isInside: !0,
                children: p.jsx(YC, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
ux.displayName = zo;
var dx = "TooltipArrow"
  , gk = b.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Rf(n);
    return pk(dx, n).isInside ? null : p.jsx(sk, {
        ...o,
        ...r,
        ref: t
    })
}
);
gk.displayName = dx;
function yk(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function vk(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function xk(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function wk(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i]
          , l = t[s]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (o = !o)
    }
    return o
}
function bk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Sk(t)
}
function Sk(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Ck = ax
  , fx = ux;
const Ek = Ck
  , Tk = b.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => p.jsx(fx, {
    ref: r,
    sideOffset: t,
    className: nn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Tk.displayName = fx.displayName;
var Pl = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , kl = typeof window > "u" || "Deno"in globalThis;
function jt() {}
function Pk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function kk(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Nk(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Wc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Ak(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Zp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== jf(s, t.options))
                return !1
        } else if (!Xi(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t))
}
function Jp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (qi(t.options.mutationKey) !== qi(i))
                return !1
        } else if (!Xi(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function jf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || qi)(e)
}
function qi(e) {
    return JSON.stringify(e, (t, n) => Hc(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Xi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Xi(e[n], t[n])) : !1
}
function hx(e, t) {
    if (e === t)
        return e;
    const n = em(e) && em(t);
    if (n || Hc(e) && Hc(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : i[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = hx(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === s && u === o ? e : a
    }
    return t
}
function em(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Hc(e) {
    if (!tm(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!tm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function tm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Rk(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function jk(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? hx(e, t) : t
}
function Mk(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Dk(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Mf = Symbol();
function px(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Mf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Er, Vn, Eo, Ng, Lk = (Ng = class extends Pl {
    constructor() {
        super();
        J(this, Er);
        J(this, Vn);
        J(this, Eo);
        H(this, Eo, t => {
            if (!kl && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Vn) || this.setEventListener(N(this, Eo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Vn)) == null || t.call(this),
        H(this, Vn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Eo, t),
        (n = N(this, Vn)) == null || n.call(this),
        H(this, Vn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Er) !== t && (H(this, Er, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Er) == "boolean" ? N(this, Er) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Er = new WeakMap,
Vn = new WeakMap,
Eo = new WeakMap,
Ng), mx = new Lk, To, _n, Po, Ag, Ok = (Ag = class extends Pl {
    constructor() {
        super();
        J(this, To, !0);
        J(this, _n);
        J(this, Po);
        H(this, Po, t => {
            if (!kl && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, _n) || this.setEventListener(N(this, Po))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, _n)) == null || t.call(this),
        H(this, _n, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Po, t),
        (n = N(this, _n)) == null || n.call(this),
        H(this, _n, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, To) !== t && (H(this, To, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, To)
    }
}
,
To = new WeakMap,
_n = new WeakMap,
Po = new WeakMap,
Ag), $a = new Ok;
function Ik() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function Vk(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function gx(e) {
    return (e ?? "online") === "online" ? $a.isOnline() : !0
}
var yx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function bu(e) {
    return e instanceof yx
}
function vx(e) {
    let t = !1, n = 0, r = !1, o;
    const i = Ik()
      , s = y => {
        var w;
        r || (f(new yx(y)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => mx.isFocused() && (e.networkMode === "always" || $a.isOnline()) && e.canRun()
      , c = () => gx(e.networkMode) && e.canRun()
      , d = y => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        i.resolve(y))
    }
      , f = y => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        i.reject(y))
    }
      , h = () => new Promise(y => {
        var w;
        o = g => {
            (r || u()) && y(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        o = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let y;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (g) {
            y = Promise.reject(g)
        }
        Promise.resolve(y).then(d).catch(g => {
            var E;
            if (r)
                return;
            const m = e.retry ?? (kl ? 0 : 3)
              , v = e.retryDelay ?? Vk
              , S = typeof v == "function" ? v(n, g) : v
              , C = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, g);
            if (t || !C) {
                f(g);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, g),
            Rk(S).then( () => u() ? void 0 : h()).then( () => {
                t ? f(g) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? x() : h().then(x),
        i)
    }
}
var _k = e => setTimeout(e, 0);
function Fk() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = _k;
    const i = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , s = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var We = Fk(), Tr, Rg, xx = (Rg = class {
    constructor() {
        J(this, Tr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        kk(this.gcTime) && H(this, Tr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (kl ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Tr) && (clearTimeout(N(this, Tr)),
        H(this, Tr, void 0))
    }
}
,
Tr = new WeakMap,
Rg), ko, Pr, ht, kr, _e, rs, Nr, Mt, sn, jg, zk = (jg = class extends xx {
    constructor(t) {
        super();
        J(this, Mt);
        J(this, ko);
        J(this, Pr);
        J(this, ht);
        J(this, kr);
        J(this, _e);
        J(this, rs);
        J(this, Nr);
        H(this, Nr, !1),
        H(this, rs, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, kr, t.client),
        H(this, ht, N(this, kr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, ko, $k(this.options)),
        this.state = t.state ?? N(this, ko),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, _e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, rs),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, ht).remove(this)
    }
    setData(t, n) {
        const r = jk(this.state.data, t, this.options);
        return Oe(this, Mt, sn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Oe(this, Mt, sn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, _e)) == null ? void 0 : r.promise;
        return (o = N(this, _e)) == null || o.cancel(t),
        n ? n.then(jt).catch(jt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, ko))
    }
    isActive() {
        return this.observers.some(t => Ak(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Mf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Wc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Nk(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, _e)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, _e)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, ht).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, _e) && (N(this, Nr) ? N(this, _e).cancel({
            revert: !0
        }) : N(this, _e).cancelRetry()),
        this.scheduleGc()),
        N(this, ht).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Oe(this, Mt, sn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, _e))
                return N(this, _e).continueRetry(),
                N(this, _e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (H(this, Nr, !0),
                r.signal)
            })
        }
          , i = () => {
            const f = px(this.options, n)
              , x = ( () => {
                const y = {
                    client: N(this, kr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(y),
                y
            }
            )();
            return H(this, Nr, !1),
            this.options.persister ? this.options.persister(f, x, this) : f(x)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, kr),
                state: this.state,
                fetchFn: i
            };
            return o(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, Pr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Oe(this, Mt, sn).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, x, y, w;
            bu(f) && f.silent || Oe(this, Mt, sn).call(this, {
                type: "error",
                error: f
            }),
            bu(f) || ((x = (h = N(this, ht).config).onError) == null || x.call(h, f, this),
            (w = (y = N(this, ht).config).onSettled) == null || w.call(y, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, _e, vx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, x, y, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (g) {
                    l(g);
                    return
                }
                (x = (h = N(this, ht).config).onSuccess) == null || x.call(h, f, this),
                (w = (y = N(this, ht).config).onSettled) == null || w.call(y, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Oe(this, Mt, sn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Oe(this, Mt, sn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Oe(this, Mt, sn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        N(this, _e).start()
    }
}
,
ko = new WeakMap,
Pr = new WeakMap,
ht = new WeakMap,
kr = new WeakMap,
_e = new WeakMap,
rs = new WeakMap,
Nr = new WeakMap,
Mt = new WeakSet,
sn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Bk(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, Pr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return bu(o) && o.revert && N(this, Pr) ? {
                ...N(this, Pr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, ht).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
jg);
function Bk(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: gx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function $k(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Kt, Mg, Uk = (Mg = class extends Pl {
    constructor(t={}) {
        super();
        J(this, Kt);
        this.config = t,
        H(this, Kt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? jf(o, n);
        let s = this.get(i);
        return s || (s = new zk({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Kt).has(t.queryHash) || (N(this, Kt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Kt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Kt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        We.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Kt).get(t)
    }
    getAll() {
        return [...N(this, Kt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Zp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Zp(t, r)) : n
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Kt = new WeakMap,
Mg), Gt, $e, Ar, Yt, Rn, Dg, Wk = (Dg = class extends xx {
    constructor(t) {
        super();
        J(this, Yt);
        J(this, Gt);
        J(this, $e);
        J(this, Ar);
        this.mutationId = t.mutationId,
        H(this, $e, t.mutationCache),
        H(this, Gt, []),
        this.state = t.state || Hk(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, Gt).includes(t) || (N(this, Gt).push(t),
        this.clearGcTimeout(),
        N(this, $e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Gt, N(this, Gt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, $e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, Gt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, $e).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, Ar)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, a, l, u, c, d, f, h, x, y, w, g, m, v, S, C, E, T, P;
        const n = () => {
            Oe(this, Yt, Rn).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Ar, vx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, M) => {
                Oe(this, Yt, Rn).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: M
                })
            }
            ,
            onPause: () => {
                Oe(this, Yt, Rn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, $e).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, Ar).canStart();
        try {
            if (r)
                n();
            else {
                Oe(this, Yt, Rn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = N(this, $e).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                M !== this.state.context && Oe(this, Yt, Rn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: o
                })
            }
            const j = await N(this, Ar).start();
            return await ((c = (u = N(this, $e).config).onSuccess) == null ? void 0 : c.call(u, j, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, j, t, this.state.context)),
            await ((x = (h = N(this, $e).config).onSettled) == null ? void 0 : x.call(h, j, null, this.state.variables, this.state.context, this)),
            await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, j, null, t, this.state.context)),
            Oe(this, Yt, Rn).call(this, {
                type: "success",
                data: j
            }),
            j
        } catch (j) {
            try {
                throw await ((m = (g = N(this, $e).config).onError) == null ? void 0 : m.call(g, j, t, this.state.context, this)),
                await ((S = (v = this.options).onError) == null ? void 0 : S.call(v, j, t, this.state.context)),
                await ((E = (C = N(this, $e).config).onSettled) == null ? void 0 : E.call(C, void 0, j, this.state.variables, this.state.context, this)),
                await ((P = (T = this.options).onSettled) == null ? void 0 : P.call(T, void 0, j, t, this.state.context)),
                j
            } finally {
                Oe(this, Yt, Rn).call(this, {
                    type: "error",
                    error: j
                })
            }
        } finally {
            N(this, $e).runNext(this)
        }
    }
}
,
Gt = new WeakMap,
$e = new WeakMap,
Ar = new WeakMap,
Yt = new WeakSet,
Rn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        N(this, Gt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, $e).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Dg);
function Hk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var un, Dt, os, Lg, Kk = (Lg = class extends Pl {
    constructor(t={}) {
        super();
        J(this, un);
        J(this, Dt);
        J(this, os);
        this.config = t,
        H(this, un, new Set),
        H(this, Dt, new Map),
        H(this, os, 0)
    }
    build(t, n, r) {
        const o = new Wk({
            mutationCache: this,
            mutationId: ++ws(this, os)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, un).add(t);
        const n = $s(t);
        if (typeof n == "string") {
            const r = N(this, Dt).get(n);
            r ? r.push(t) : N(this, Dt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, un).delete(t)) {
            const n = $s(t);
            if (typeof n == "string") {
                const r = N(this, Dt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, Dt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = $s(t);
        if (typeof n == "string") {
            const r = N(this, Dt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = $s(t);
        if (typeof n == "string") {
            const o = (r = N(this, Dt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        We.batch( () => {
            N(this, un).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, un).clear(),
            N(this, Dt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, un))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Jp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Jp(t, n))
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return We.batch( () => Promise.all(t.map(n => n.continue().catch(jt))))
    }
}
,
un = new WeakMap,
Dt = new WeakMap,
os = new WeakMap,
Lg);
function $s(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function nm(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, x;
            const r = t.options
              , o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , i = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let y = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = px(t.options, t.fetchOptions)
                  , m = async (v, S, C) => {
                    if (y)
                        return Promise.reject();
                    if (S == null && v.pages.length)
                        return Promise.resolve(v);
                    const T = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , P = await g(T)
                      , {maxPages: j} = t.options
                      , M = C ? Dk : Mk;
                    return {
                        pages: M(v.pages, P, j),
                        pageParams: M(v.pageParams, S, j)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , S = v ? Gk : rm
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , E = S(r, C);
                    a = await m(C, E, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const S = l === 0 ? s[0] ?? r.initialPageParam : rm(r, a);
                        if (l > 0 && S == null)
                            break;
                        a = await m(a, S),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, w;
                return (w = (y = t.options).persister) == null ? void 0 : w.call(y, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function rm(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Gk(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ye, Fn, zn, No, Ao, Bn, Ro, jo, Og, Yk = (Og = class {
    constructor(e={}) {
        J(this, ye);
        J(this, Fn);
        J(this, zn);
        J(this, No);
        J(this, Ao);
        J(this, Bn);
        J(this, Ro);
        J(this, jo);
        H(this, ye, e.queryCache || new Uk),
        H(this, Fn, e.mutationCache || new Kk),
        H(this, zn, e.defaultOptions || {}),
        H(this, No, new Map),
        H(this, Ao, new Map),
        H(this, Bn, 0)
    }
    mount() {
        ws(this, Bn)._++,
        N(this, Bn) === 1 && (H(this, Ro, mx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, ye).onFocus())
        }
        )),
        H(this, jo, $a.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, ye).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        ws(this, Bn)._--,
        N(this, Bn) === 0 && ((e = N(this, Ro)) == null || e.call(this),
        H(this, Ro, void 0),
        (t = N(this, jo)) == null || t.call(this),
        H(this, jo, void 0))
    }
    isFetching(e) {
        return N(this, ye).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, Fn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, ye).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, ye).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Wc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, ye).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, ye).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = Pk(t, i);
        if (s !== void 0)
            return N(this, ye).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return We.batch( () => N(this, ye).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, ye).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, ye);
        We.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, ye);
        return We.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = We.batch( () => N(this, ye).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(jt).catch(jt)
    }
    invalidateQueries(e, t={}) {
        return We.batch( () => (N(this, ye).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = We.batch( () => N(this, ye).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(jt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(jt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, ye).build(this, t);
        return n.isStaleByTime(Wc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(jt).catch(jt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = nm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(jt).catch(jt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = nm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return $a.isOnline() ? N(this, Fn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, ye)
    }
    getMutationCache() {
        return N(this, Fn)
    }
    getDefaultOptions() {
        return N(this, zn)
    }
    setDefaultOptions(e) {
        H(this, zn, e)
    }
    setQueryDefaults(e, t) {
        N(this, No).set(qi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, No).values()]
          , n = {};
        return t.forEach(r => {
            Xi(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, Ao).set(qi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, Ao).values()]
          , n = {};
        return t.forEach(r => {
            Xi(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, zn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = jf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Mf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, zn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, ye).clear(),
        N(this, Fn).clear()
    }
}
,
ye = new WeakMap,
Fn = new WeakMap,
zn = new WeakMap,
No = new WeakMap,
Ao = new WeakMap,
Bn = new WeakMap,
Ro = new WeakMap,
jo = new WeakMap,
Og), Qk = b.createContext(void 0), qk = ({client: e, children: t}) => (b.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
p.jsx(Qk.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ua() {
    return Ua = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ua.apply(this, arguments)
}
var Wn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Wn || (Wn = {}));
const om = "popstate";
function Xk(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: a} = r.location;
        return Kc("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : bx(o)
    }
    return Jk(t, n, null, e)
}
function nt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function wx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Zk() {
    return Math.random().toString(36).substr(2, 8)
}
function im(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Kc(e, t, n, r) {
    return n === void 0 && (n = null),
    Ua({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Nl(t) : t, {
        state: n,
        key: t && t.key || r || Zk()
    })
}
function bx(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Nl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Jk(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , a = Wn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(Ua({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Wn.Pop;
        let w = c()
          , g = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: y.location,
            delta: g
        })
    }
    function f(w, g) {
        a = Wn.Push;
        let m = Kc(y.location, w, g);
        u = c() + 1;
        let v = im(m, u)
          , S = y.createHref(m);
        try {
            s.pushState(v, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        i && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function h(w, g) {
        a = Wn.Replace;
        let m = Kc(y.location, w, g);
        u = c();
        let v = im(m, u)
          , S = y.createHref(m);
        s.replaceState(v, "", S),
        i && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function x(w) {
        let g = o.location.origin !== "null" ? o.location.origin : o.location.href
          , m = typeof w == "string" ? w : bx(w);
        return m = m.replace(/ $/, "%20"),
        nt(g, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,g)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(om, d),
            l = w,
            () => {
                o.removeEventListener(om, d),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: x,
        encodeLocation(w) {
            let g = x(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return s.go(w)
        }
    };
    return y
}
var sm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(sm || (sm = {}));
function e2(e, t, n) {
    return n === void 0 && (n = "/"),
    t2(e, t, n, !1)
}
function t2(e, t, n, r) {
    let o = typeof t == "string" ? Nl(t) : t
      , i = Ex(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Sx(e);
    n2(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = h2(i);
        a = d2(s[l], u, r)
    }
    return a
}
function Sx(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (nt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = So([r, l.relativePath])
          , c = n.concat(l);
        i.children && i.children.length > 0 && (nt(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Sx(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: u2(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, s);
        else
            for (let l of Cx(i.path))
                o(i, s, l)
    }
    ),
    t
}
function Cx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Cx(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))),
    o && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function n2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : c2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const r2 = /^:[\w-]+$/
  , o2 = 3
  , i2 = 2
  , s2 = 1
  , a2 = 10
  , l2 = -2
  , am = e => e === "*";
function u2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(am) && (r += l2),
    t && (r += i2),
    n.filter(o => !am(o)).reduce( (o, i) => o + (r2.test(i) ? o2 : i === "" ? s2 : a2), r)
}
function c2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function d2(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , d = lm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = lm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        s.push({
            params: o,
            pathname: So([i, d.pathname]),
            pathnameBase: p2(So([i, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (i = So([i, d.pathnameBase]))
    }
    return s
}
function lm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = f2(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let y = a[d] || "";
                s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[d];
            return h && !x ? u[f] = void 0 : u[f] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function f2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    wx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function h2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return wx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Ex(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const So = e => e.join("/").replace(/\/\/+/g, "/")
  , p2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function m2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Tx = ["post", "put", "patch", "delete"];
new Set(Tx);
const g2 = ["get", ...Tx];
new Set(g2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wa() {
    return Wa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Wa.apply(this, arguments)
}
const y2 = b.createContext(null)
  , v2 = b.createContext(null)
  , Px = b.createContext(null)
  , Al = b.createContext(null)
  , Rl = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , kx = b.createContext(null);
function Df() {
    return b.useContext(Al) != null
}
function Nx() {
    return Df() || nt(!1),
    b.useContext(Al).location
}
function x2(e, t) {
    return w2(e, t)
}
function w2(e, t, n, r) {
    Df() || nt(!1);
    let {navigator: o} = b.useContext(Px)
      , {matches: i} = b.useContext(Rl)
      , s = i[i.length - 1]
      , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Nx(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? Nl(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || nt(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let x = e2(e, {
        pathname: h
    })
      , y = T2(x && x.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: So([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : So([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && y ? b.createElement(Al.Provider, {
        value: {
            location: Wa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Wn.Pop
        }
    }, y) : y
}
function b2() {
    let e = A2()
      , t = m2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? b.createElement("pre", {
        style: o
    }, n) : null, null)
}
const S2 = b.createElement(b2, null);
class C2 extends b.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(Rl.Provider, {
            value: this.props.routeContext
        }, b.createElement(kx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function E2(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = b.useContext(y2);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Rl.Provider, {
        value: t
    }, r)
}
function T2(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || nt(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , x = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    l = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, d, f) => {
        let h, x = !1, y = null, w = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        y = d.route.errorElement || S2,
        l && (u < 0 && f === 0 ? (x = !0,
        w = null) : u === f && (x = !0,
        w = d.route.hydrateFallbackElement || null)));
        let g = t.concat(s.slice(0, f + 1))
          , m = () => {
            let v;
            return h ? v = y : x ? v = w : d.route.Component ? v = b.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            b.createElement(E2, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? b.createElement(C2, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var Gc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Gc || {});
function P2(e) {
    let t = b.useContext(v2);
    return t || nt(!1),
    t
}
function k2(e) {
    let t = b.useContext(Rl);
    return t || nt(!1),
    t
}
function N2(e) {
    let t = k2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || nt(!1),
    n.route.id
}
function A2() {
    var e;
    let t = b.useContext(kx)
      , n = P2(Gc.UseRouteError)
      , r = N2(Gc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function R2(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Yc(e) {
    nt(!1)
}
function j2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Wn.Pop, navigator: i, static: s=!1, future: a} = e;
    Df() && nt(!1);
    let l = t.replace(/^\/*/, "/")
      , u = b.useMemo( () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Wa({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, s]);
    typeof r == "string" && (r = Nl(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: x="default"} = r
      , y = b.useMemo( () => {
        let w = Ex(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: x
            },
            navigationType: o
        }
    }
    , [l, c, d, f, h, x, o]);
    return y == null ? null : b.createElement(Px.Provider, {
        value: u
    }, b.createElement(Al.Provider, {
        children: n,
        value: y
    }))
}
function M2(e) {
    let {children: t, location: n} = e;
    return x2(Qc(t), n)
}
new Promise( () => {}
);
function Qc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return b.Children.forEach(e, (r, o) => {
        if (!b.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === b.Fragment) {
            n.push.apply(n, Qc(r.props.children, i));
            return
        }
        r.type !== Yc && nt(!1),
        !r.props.index || !r.props.children || nt(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Qc(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const D2 = "6";
try {
    window.__reactRouterVersion = D2
} catch {}
const L2 = "startTransition"
  , um = Ed[L2];
function O2(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = b.useRef();
    i.current == null && (i.current = Xk({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [a,l] = b.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = b.useCallback(d => {
        u && um ? um( () => l(d)) : l(d)
    }
    , [l, u]);
    return b.useLayoutEffect( () => s.listen(c), [s, c]),
    b.useEffect( () => R2(r), [r]),
    b.createElement(j2, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var cm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(cm || (cm = {}));
var dm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(dm || (dm = {}));
const I2 = () => {
    const [e,t] = b.useState(!1)
      , n = o => {
        var i;
        (i = document.getElementById(o)) == null || i.scrollIntoView({
            behavior: "smooth"
        }),
        t(!1)
    }
      , r = [["Who It's For", "who-its-for"], ["How It Works", "how-it-works"], ["Pricing", "fees"], ["FAQ", "faq"], ["Contact", "forms"]];
    return p.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm",
        children: [p.jsxs("div", {
            className: "container-narrow flex items-center justify-between h-16 px-4 md:px-8 lg:px-16",
            children: [p.jsx("button", {
                onClick: () => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                }),
                className: "font-display font-bold text-xl text-primary",
                children: "Affiliate Warehouse"
            }), p.jsxs("div", {
                className: "hidden md:flex items-center gap-6",
                children: [r.map( ([o,i]) => p.jsx("button", {
                    onClick: () => n(i),
                    className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                    children: o
                }, i)), p.jsx("button", {
                    onClick: () => n("contractor-form"),
                    className: "bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity",
                    children: "Apply Now"
                })]
            }), p.jsx("button", {
                className: "md:hidden",
                onClick: () => t(!e),
                children: e ? p.jsx(Va, {
                    className: "w-6 h-6 text-foreground"
                }) : p.jsx(EE, {
                    className: "w-6 h-6 text-foreground"
                })
            })]
        }), e && p.jsxs("div", {
            className: "md:hidden bg-card border-t border-border px-4 pb-4 space-y-2",
            children: [r.map( ([o,i]) => p.jsx("button", {
                onClick: () => n(i),
                className: "block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2",
                children: o
            }, i)), p.jsx("button", {
                onClick: () => n("contractor-form"),
                className: "w-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg",
                children: "Apply Now"
            })]
        })]
    })
}
  , Ax = b.createContext({});
function V2(e) {
    const t = b.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Rx = typeof window < "u"
  , _2 = Rx ? b.useLayoutEffect : b.useEffect
  , Lf = b.createContext(null);
function Of(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Ha(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const tn = (e, t, n) => n > t ? t : n < e ? e : n;
let jl = () => {}
  , Bo = () => {}
;
const xn = {}
  , jx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Mx(e) {
    return typeof e == "object" && e !== null
}
const Dx = e => /^0[^.\s]+$/u.test(e);
function Lx(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const xt = e => e
  , F2 = (e, t) => n => t(e(n))
  , hs = (...e) => e.reduce(F2)
  , Zi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class If {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Of(this.subscriptions, t),
        () => Ha(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const wt = e => e * 1e3
  , yt = e => e / 1e3;
function Ox(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Ix = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , z2 = 1e-7
  , B2 = 12;
function $2(e, t, n, r, o) {
    let i, s, a = 0;
    do
        s = t + (n - t) / 2,
        i = Ix(s, r, o) - e,
        i > 0 ? n = s : t = s;
    while (Math.abs(i) > z2 && ++a < B2);
    return s
}
function ps(e, t, n, r) {
    if (e === t && n === r)
        return xt;
    const o = i => $2(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Ix(o(i), t, r)
}
const Vx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , _x = e => t => 1 - e(1 - t)
  , Fx = ps(.33, 1.53, .69, .99)
  , Vf = _x(Fx)
  , zx = Vx(Vf)
  , Bx = e => (e *= 2) < 1 ? .5 * Vf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , _f = e => 1 - Math.sin(Math.acos(e))
  , $x = _x(_f)
  , Ux = Vx(_f)
  , U2 = ps(.42, 0, 1, 1)
  , W2 = ps(0, 0, .58, 1)
  , Wx = ps(.42, 0, .58, 1)
  , H2 = e => Array.isArray(e) && typeof e[0] != "number"
  , Hx = e => Array.isArray(e) && typeof e[0] == "number"
  , fm = {
    linear: xt,
    easeIn: U2,
    easeInOut: Wx,
    easeOut: W2,
    circIn: _f,
    circInOut: Ux,
    circOut: $x,
    backIn: Vf,
    backInOut: zx,
    backOut: Fx,
    anticipate: Bx
}
  , K2 = e => typeof e == "string"
  , hm = e => {
    if (Hx(e)) {
        Bo(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,o] = e;
        return ps(t, n, r, o)
    } else if (K2(e))
        return Bo(fm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        fm[e];
    return e
}
  , Us = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , pm = {
    value: null,
    addProjectionMetrics: null
};
function G2(e, t) {
    let n = new Set
      , r = new Set
      , o = !1
      , i = !1;
    const s = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        s.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const y = h && o ? n : r;
            return f && s.add(d),
            y.has(d) || y.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            s.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            o) {
                i = !0;
                return
            }
            o = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && pm.value && pm.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            o = !1,
            i && (i = !1,
            c.process(d))
        }
    };
    return c
}
const Y2 = 40;
function Kx(e, t) {
    let n = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = () => n = !0
      , s = Us.reduce( (v, S) => (v[S] = G2(i, t ? S : void 0),
    v), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: x} = s
      , y = () => {
        const v = xn.useManualTiming ? o.timestamp : performance.now();
        n = !1,
        xn.useManualTiming || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(v - o.timestamp, Y2), 1)),
        o.timestamp = v,
        o.isProcessing = !0,
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        h.process(o),
        x.process(o),
        o.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , w = () => {
        n = !0,
        r = !0,
        o.isProcessing || e(y)
    }
    ;
    return {
        schedule: Us.reduce( (v, S) => {
            const C = s[S];
            return v[S] = (E, T=!1, P=!1) => (n || w(),
            C.schedule(E, T, P)),
            v
        }
        , {}),
        cancel: v => {
            for (let S = 0; S < Us.length; S++)
                s[Us[S]].cancel(v)
        }
        ,
        state: o,
        steps: s
    }
}
const {schedule: se, cancel: ar, state: je, steps: Su} = Kx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xt, !0);
let aa;
function Q2() {
    aa = void 0
}
const He = {
    now: () => (aa === void 0 && He.set(je.isProcessing || xn.useManualTiming ? je.timestamp : performance.now()),
    aa),
    set: e => {
        aa = e,
        queueMicrotask(Q2)
    }
}
  , Gx = e => t => typeof t == "string" && t.startsWith(e)
  , Yx = Gx("--")
  , q2 = Gx("var(--")
  , Ff = e => q2(e) ? X2.test(e.split("/*")[0].trim()) : !1
  , X2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function mm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const qo = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Ji = {
    ...qo,
    transform: e => tn(0, 1, e)
}
  , Ws = {
    ...qo,
    default: 1
}
  , ki = e => Math.round(e * 1e5) / 1e5
  , zf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Z2(e) {
    return e == null
}
const J2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Bf = (e, t) => n => !!(typeof n == "string" && J2.test(n) && n.startsWith(e) || t && !Z2(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Qx = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [o,i,s,a] = r.match(zf);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , eN = e => tn(0, 255, e)
  , Cu = {
    ...qo,
    transform: e => Math.round(eN(e))
}
  , Sr = {
    test: Bf("rgb", "red"),
    parse: Qx("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Cu.transform(e) + ", " + Cu.transform(t) + ", " + Cu.transform(n) + ", " + ki(Ji.transform(r)) + ")"
};
function tN(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const qc = {
    test: Bf("#"),
    parse: tN,
    transform: Sr.transform
}
  , ms = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , jn = ms("deg")
  , Zt = ms("%")
  , _ = ms("px")
  , nN = ms("vh")
  , rN = ms("vw")
  , gm = {
    ...Zt,
    parse: e => Zt.parse(e) / 100,
    transform: e => Zt.transform(e * 100)
}
  , lo = {
    test: Bf("hsl", "hue"),
    parse: Qx("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + Zt.transform(ki(t)) + ", " + Zt.transform(ki(n)) + ", " + ki(Ji.transform(r)) + ")"
}
  , Se = {
    test: e => Sr.test(e) || qc.test(e) || lo.test(e),
    parse: e => Sr.test(e) ? Sr.parse(e) : lo.test(e) ? lo.parse(e) : qc.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Sr.transform(e) : lo.transform(e),
    getAnimatableNone: e => {
        const t = Se.parse(e);
        return t.alpha = 0,
        Se.transform(t)
    }
}
  , oN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function iN(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(zf)) == null ? void 0 : t.length) || 0) + (((n = e.match(oN)) == null ? void 0 : n.length) || 0) > 0
}
const qx = "number"
  , Xx = "color"
  , sN = "var"
  , aN = "var("
  , ym = "${}"
  , lN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function es(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let i = 0;
    const a = t.replace(lN, l => (Se.test(l) ? (r.color.push(i),
    o.push(Xx),
    n.push(Se.parse(l))) : l.startsWith(aN) ? (r.var.push(i),
    o.push(sN),
    n.push(l)) : (r.number.push(i),
    o.push(qx),
    n.push(parseFloat(l))),
    ++i,
    ym)).split(ym);
    return {
        values: n,
        split: a,
        indexes: r,
        types: o
    }
}
function Zx(e) {
    return es(e).values
}
function Jx(e) {
    const {split: t, types: n} = es(e)
      , r = t.length;
    return o => {
        let i = "";
        for (let s = 0; s < r; s++)
            if (i += t[s],
            o[s] !== void 0) {
                const a = n[s];
                a === qx ? i += ki(o[s]) : a === Xx ? i += Se.transform(o[s]) : i += o[s]
            }
        return i
    }
}
const uN = e => typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e;
function cN(e) {
    const t = Zx(e);
    return Jx(e)(t.map(uN))
}
const _t = {
    test: iN,
    parse: Zx,
    createTransformer: Jx,
    getAnimatableNone: cN
};
function Eu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function dN({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , i = 0
      , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        o = Eu(l, a, e + 1 / 3),
        i = Eu(l, a, e),
        s = Eu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function Ka(e, t) {
    return n => n > 0 ? t : e
}
const pe = (e, t, n) => e + (t - e) * n
  , Tu = (e, t, n) => {
    const r = e * e
      , o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , fN = [qc, Sr, lo]
  , hN = e => fN.find(t => t.test(e));
function vm(e) {
    const t = hN(e);
    if (jl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === lo && (n = dN(n)),
    n
}
const xm = (e, t) => {
    const n = vm(e)
      , r = vm(t);
    if (!n || !r)
        return Ka(e, t);
    const o = {
        ...n
    };
    return i => (o.red = Tu(n.red, r.red, i),
    o.green = Tu(n.green, r.green, i),
    o.blue = Tu(n.blue, r.blue, i),
    o.alpha = pe(n.alpha, r.alpha, i),
    Sr.transform(o))
}
  , Xc = new Set(["none", "hidden"]);
function pN(e, t) {
    return Xc.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function mN(e, t) {
    return n => pe(e, t, n)
}
function $f(e) {
    return typeof e == "number" ? mN : typeof e == "string" ? Ff(e) ? Ka : Se.test(e) ? xm : vN : Array.isArray(e) ? ew : typeof e == "object" ? Se.test(e) ? xm : gN : Ka
}
function ew(e, t) {
    const n = [...e]
      , r = n.length
      , o = e.map( (i, s) => $f(i)(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
function gN(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = $f(e[o])(e[o], t[o]));
    return o => {
        for (const i in r)
            n[i] = r[i](o);
        return n
    }
}
function yN(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const i = t.types[o]
          , s = e.indexes[i][r[i]]
          , a = e.values[s] ?? 0;
        n[o] = a,
        r[i]++
    }
    return n
}
const vN = (e, t) => {
    const n = _t.createTransformer(t)
      , r = es(e)
      , o = es(t);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Xc.has(e) && !o.values.length || Xc.has(t) && !r.values.length ? pN(e, t) : hs(ew(yN(r, o), o.values), n) : (jl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    Ka(e, t))
}
;
function tw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? pe(e, t, n) : $f(e)(e, t)
}
const xN = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => se.update(t, n),
        stop: () => ar(t),
        now: () => je.isProcessing ? je.timestamp : He.now()
    }
}
  , nw = (e, t, n=10) => {
    let r = "";
    const o = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < o; i++)
        r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , Ga = 2e4;
function Uf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Ga; )
        t += n,
        r = e.next(t);
    return t >= Ga ? 1 / 0 : t
}
function wN(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , o = Math.min(Uf(r), Ga);
    return {
        type: "keyframes",
        ease: i => r.next(o * i).value / t,
        duration: yt(o)
    }
}
const bN = 5;
function rw(e, t, n) {
    const r = Math.max(t - bN, 0);
    return Ox(n - e(r), t - r)
}
const fe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Pu = .001;
function SN({duration: e=fe.duration, bounce: t=fe.bounce, velocity: n=fe.velocity, mass: r=fe.mass}) {
    let o, i;
    jl(e <= wt(fe.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let s = 1 - t;
    s = tn(fe.minDamping, fe.maxDamping, s),
    e = tn(fe.minDuration, fe.maxDuration, yt(e)),
    s < 1 ? (o = u => {
        const c = u * s
          , d = c * e
          , f = c - n
          , h = Zc(u, s)
          , x = Math.exp(-d);
        return Pu - f / h * x
    }
    ,
    i = u => {
        const d = u * s * e
          , f = d * n + n
          , h = Math.pow(s, 2) * Math.pow(u, 2) * e
          , x = Math.exp(-d)
          , y = Zc(Math.pow(u, 2), s);
        return (-o(u) + Pu > 0 ? -1 : 1) * ((f - h) * x) / y
    }
    ) : (o = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Pu + c * d
    }
    ,
    i = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = EN(o, i, a);
    if (e = wt(e),
    isNaN(l))
        return {
            stiffness: fe.stiffness,
            damping: fe.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const CN = 12;
function EN(e, t, n) {
    let r = n;
    for (let o = 1; o < CN; o++)
        r = r - e(r) / t(r);
    return r
}
function Zc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const TN = ["duration", "bounce"]
  , PN = ["stiffness", "damping", "mass"];
function wm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function kN(e) {
    let t = {
        velocity: fe.velocity,
        stiffness: fe.stiffness,
        damping: fe.damping,
        mass: fe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!wm(e, PN) && wm(e, TN))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , o = r * r
              , i = 2 * tn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            t = {
                ...t,
                mass: fe.mass,
                stiffness: o,
                damping: i
            }
        } else {
            const n = SN({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: fe.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Ya(e=fe.visualDuration, t=fe.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: o} = n;
    const i = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = kN({
        ...n,
        velocity: -yt(n.velocity || 0)
    })
      , x = f || 0
      , y = u / (2 * Math.sqrt(l * c))
      , w = s - i
      , g = yt(Math.sqrt(l / c))
      , m = Math.abs(w) < 5;
    r || (r = m ? fe.restSpeed.granular : fe.restSpeed.default),
    o || (o = m ? fe.restDelta.granular : fe.restDelta.default);
    let v;
    if (y < 1) {
        const C = Zc(g, y);
        v = E => {
            const T = Math.exp(-y * g * E);
            return s - T * ((x + y * g * w) / C * Math.sin(C * E) + w * Math.cos(C * E))
        }
    } else if (y === 1)
        v = C => s - Math.exp(-g * C) * (w + (x + g * w) * C);
    else {
        const C = g * Math.sqrt(y * y - 1);
        v = E => {
            const T = Math.exp(-y * g * E)
              , P = Math.min(C * E, 300);
            return s - T * ((x + y * g * w) * Math.sinh(P) + C * w * Math.cosh(P)) / C
        }
    }
    const S = {
        calculatedDuration: h && d || null,
        next: C => {
            const E = v(C);
            if (h)
                a.done = C >= d;
            else {
                let T = C === 0 ? x : 0;
                y < 1 && (T = C === 0 ? wt(x) : rw(v, C, E));
                const P = Math.abs(T) <= r
                  , j = Math.abs(s - E) <= o;
                a.done = P && j
            }
            return a.value = a.done ? s : E,
            a
        }
        ,
        toString: () => {
            const C = Math.min(Uf(S), Ga)
              , E = nw(T => S.next(C * T).value, C, 30);
            return C + "ms " + E
        }
        ,
        toTransition: () => {}
    };
    return S
}
Ya.applyToOptions = e => {
    const t = wN(e, 100, Ya);
    return e.ease = t.ease,
    e.duration = wt(t.duration),
    e.type = "keyframes",
    e
}
;
function Jc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: i=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = P => a !== void 0 && P < a || l !== void 0 && P > l
      , x = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let y = n * t;
    const w = d + y
      , g = s === void 0 ? w : s(w);
    g !== w && (y = g - d);
    const m = P => -y * Math.exp(-P / r)
      , v = P => g + m(P)
      , S = P => {
        const j = m(P)
          , M = v(P);
        f.done = Math.abs(j) <= u,
        f.value = f.done ? g : M
    }
    ;
    let C, E;
    const T = P => {
        h(f.value) && (C = P,
        E = Ya({
            keyframes: [f.value, x(f.value)],
            velocity: rw(v, P, f.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: P => {
            let j = !1;
            return !E && C === void 0 && (j = !0,
            S(P),
            T(P)),
            C !== void 0 && P >= C ? E.next(P - C) : (!j && S(P),
            f)
        }
    }
}
function NN(e, t, n) {
    const r = []
      , o = n || xn.mix || tw
      , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || xt : t;
            a = hs(l, a)
        }
        r.push(a)
    }
    return r
}
function AN(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    if (Bo(i === t.length, "Both input and output ranges must be the same length", "range-length"),
    i === 1)
        return () => t[0];
    if (i === 2 && t[0] === t[1])
        return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = NN(t, r, o)
      , l = a.length
      , u = c => {
        if (s && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = Zi(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(tn(e[0], e[i - 1], c)) : u
}
function RN(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Zi(0, t, r);
        e.push(pe(n, 1, o))
    }
}
function jN(e) {
    const t = [0];
    return RN(t, e.length - 1),
    t
}
function MN(e, t) {
    return e.map(n => n * t)
}
function DN(e, t) {
    return e.map( () => t || Wx).splice(0, e.length - 1)
}
function Ni({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const o = H2(r) ? r.map(hm) : hm(r)
      , i = {
        done: !1,
        value: t[0]
    }
      , s = MN(n && n.length === t.length ? n : jN(t), e)
      , a = AN(s, t, {
        ease: Array.isArray(o) ? o : DN(t, o)
    });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l),
        i.done = l >= e,
        i)
    }
}
const LN = e => e !== null;
function Wf(e, {repeat: t, repeatType: n="loop"}, r, o=1) {
    const i = e.filter(LN)
      , a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !a || r === void 0 ? i[a] : r
}
const ON = {
    decay: Jc,
    inertia: Jc,
    tween: Ni,
    keyframes: Ni,
    spring: Ya
};
function ow(e) {
    typeof e.type == "string" && (e.type = ON[e.type])
}
class Hf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const IN = e => e / 100;
class Kf extends Hf {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, o;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== He.now() && this.tick(He.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (o = (r = this.options).onStop) == null || o.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        ow(t);
        const {type: n=Ni, repeat: r=0, repeatDelay: o=0, repeatType: i, velocity: s=0} = t;
        let {keyframes: a} = t;
        const l = n || Ni;
        l !== Ni && typeof a[0] != "number" && (this.mixKeyframes = hs(IN, tw(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        i === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -s
        })),
        u.calculatedDuration === null && (u.calculatedDuration = Uf(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + o,
        this.totalDuration = this.resolvedDuration * (r + 1) - o,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: o, mixKeyframes: i, mirroredGenerator: s, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: x, onUpdate: y, finalKeyframe: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , m = this.playbackSpeed >= 0 ? g < 0 : g > o;
        this.currentTime = Math.max(g, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let v = this.currentTime
          , S = r;
        if (d) {
            const P = Math.min(this.currentTime, o) / a;
            let j = Math.floor(P)
              , M = P % 1;
            !M && P >= 1 && (M = 1),
            M === 1 && j--,
            j = Math.min(j, d + 1),
            !!(j % 2) && (f === "reverse" ? (M = 1 - M,
            h && (M -= h / a)) : f === "mirror" && (S = s)),
            v = tn(0, 1, M) * a
        }
        const C = m ? {
            done: !1,
            value: c[0]
        } : S.next(v);
        i && (C.value = i(C.value));
        let {done: E} = C;
        !m && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return T && x !== Jc && (C.value = Wf(c, this.options, w, this.speed)),
        y && y(C.value),
        T && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return yt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + yt(t)
    }
    get time() {
        return yt(this.currentTime)
    }
    set time(t) {
        var n;
        t = wt(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(He.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = yt(this.currentTime))
    }
    play() {
        var o, i;
        if (this.isStopped)
            return;
        const {driver: t=xN, startTime: n} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        (i = (o = this.options).onPlay) == null || i.call(o);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(He.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function VN(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Cr = e => e * 180 / Math.PI
  , ed = e => {
    const t = Cr(Math.atan2(e[1], e[0]));
    return td(t)
}
  , _N = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: ed,
    rotateZ: ed,
    skewX: e => Cr(Math.atan(e[1])),
    skewY: e => Cr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , td = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , bm = ed
  , Sm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Cm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , FN = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Sm,
    scaleY: Cm,
    scale: e => (Sm(e) + Cm(e)) / 2,
    rotateX: e => td(Cr(Math.atan2(e[6], e[5]))),
    rotateY: e => td(Cr(Math.atan2(-e[2], e[0]))),
    rotateZ: bm,
    rotate: bm,
    skewX: e => Cr(Math.atan(e[4])),
    skewY: e => Cr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function nd(e) {
    return e.includes("scale") ? 1 : 0
}
function rd(e, t) {
    if (!e || e === "none")
        return nd(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (n)
        r = FN,
        o = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = _N,
        o = a
    }
    if (!o)
        return nd(t);
    const i = r[t]
      , s = o[1].split(",").map(BN);
    return typeof i == "function" ? i(s) : s[i]
}
const zN = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return rd(n, t)
}
;
function BN(e) {
    return parseFloat(e.trim())
}
const Xo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Zo = new Set(Xo)
  , Em = e => e === qo || e === _
  , $N = new Set(["x", "y", "z"])
  , UN = Xo.filter(e => !$N.has(e));
function WN(e) {
    const t = [];
    return UN.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Hn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => rd(t, "x"),
    y: (e, {transform: t}) => rd(t, "y")
};
Hn.translateX = Hn.x;
Hn.translateY = Hn.y;
const Mr = new Set;
let od = !1
  , id = !1
  , sd = !1;
function iw() {
    if (id) {
        const e = Array.from(Mr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const o = WN(r);
            o.length && (n.set(r, o),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const o = n.get(r);
            o && o.forEach( ([i,s]) => {
                var a;
                (a = r.getValue(i)) == null || a.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    id = !1,
    od = !1,
    Mr.forEach(e => e.complete(sd)),
    Mr.clear()
}
function sw() {
    Mr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (id = !0)
    }
    )
}
function HN() {
    sd = !0,
    sw(),
    iw(),
    sd = !1
}
class Gf {
    constructor(t, n, r, o, i, s=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = o,
        this.element = i,
        this.isAsync = s
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Mr.add(this),
        od || (od = !0,
        se.read(sw),
        se.resolveKeyframes(iw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: o} = this;
        if (t[0] === null) {
            const i = o == null ? void 0 : o.get()
              , s = t[t.length - 1];
            if (i !== void 0)
                t[0] = i;
            else if (r && n) {
                const a = r.readValue(n, s);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = s),
            o && i === void 0 && o.set(t[0])
        }
        VN(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Mr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Mr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const KN = e => e.startsWith("--");
function GN(e, t, n) {
    KN(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const YN = {};
function aw(e, t) {
    const n = Lx(e);
    return () => YN[t] ?? n()
}
const QN = aw( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , lw = aw( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , gi = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Tm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gi([0, .65, .55, 1]),
    circOut: gi([.55, 0, 1, .45]),
    backIn: gi([.31, .01, .66, -.59]),
    backOut: gi([.33, 1.53, .69, .99])
};
function uw(e, t) {
    if (e)
        return typeof e == "function" ? lw() ? nw(e, t) : "ease-out" : Hx(e) ? gi(e) : Array.isArray(e) ? e.map(n => uw(n, t) || Tm.easeOut) : Tm[e]
}
function qN(e, t, n, {delay: r=0, duration: o=300, repeat: i=0, repeatType: s="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = uw(a, o);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: o,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function cw(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function XN({type: e, ...t}) {
    return cw(e) && lw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class dw extends Hf {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: o, pseudoElement: i, allowFlatten: s=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!i,
        this.allowFlatten = s,
        this.options = t,
        Bo(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = XN(t);
        this.animation = qN(n, r, o, u, i),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !i) {
                const c = Wf(o, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : GN(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, o;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((o = (r = this.animation).commitStyles) == null || o.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return yt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + yt(t)
    }
    get time() {
        return yt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = wt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && QN() ? (this.animation.timeline = t,
        xt) : n(this)
    }
}
const fw = {
    anticipate: Bx,
    backInOut: zx,
    circInOut: Ux
};
function ZN(e) {
    return e in fw
}
function JN(e) {
    typeof e.ease == "string" && ZN(e.ease) && (e.ease = fw[e.ease])
}
const ku = 10;
class eA extends dw {
    constructor(t) {
        JN(t),
        ow(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: o, element: i, ...s} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Kf({
            ...s,
            autoplay: !1
        })
          , l = Math.max(ku, He.now() - this.startTime)
          , u = tn(0, ku, l - ku);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const Pm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (_t.test(e) || e === "0") && !e.startsWith("url("));
function tA(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function nA(e, t, n, r) {
    const o = e[0];
    if (o === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const i = e[e.length - 1]
      , s = Pm(o, t)
      , a = Pm(i, t);
    return jl(s === a, `You are trying to animate ${t} from "${o}" to "${i}". "${s ? i : o}" is not an animatable value.`, "value-not-animatable"),
    !s || !a ? !1 : tA(e) || (n === "spring" || cw(n)) && r
}
function ad(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const rA = new Set(["opacity", "clipPath", "filter", "transform"])
  , oA = Lx( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function iA(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: o, damping: i, type: s} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return oA() && n && rA.has(n) && (n !== "transform" || !u) && !l && !r && o !== "mirror" && i !== 0 && s !== "inertia"
}
const sA = 40;
class aA extends Hf {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: o=0, repeatDelay: i=0, repeatType: s="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var x;
        super(),
        this.stop = () => {
            var y, w;
            this._animation && (this._animation.stop(),
            (y = this.stopTimeline) == null || y.call(this)),
            (w = this.keyframeResolver) == null || w.cancel()
        }
        ,
        this.createdAt = He.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: o,
            repeatDelay: i,
            repeatType: s,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || Gf;
        this.keyframeResolver = new h(a, (y, w, g) => this.onKeyframesResolved(y, w, f, !g),l,u,c),
        (x = this.keyframeResolver) == null || x.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, o) {
        var w, g;
        this.keyframeResolver = void 0;
        const {name: i, type: s, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = He.now(),
        nA(t, i, s, a) || ((xn.instantAnimations || !l) && (c == null || c(Wf(t, r, n))),
        t[0] = t[t.length - 1],
        ad(r),
        r.repeat = 0);
        const f = {
            startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > sA ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && iA(f)
          , x = (g = (w = f.motionValue) == null ? void 0 : w.owner) == null ? void 0 : g.current
          , y = h ? new eA({
            ...f,
            element: x
        }) : new Kf(f);
        y.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(xt),
        this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = y
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        HN()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function hw(e, t, n, r=0, o=1) {
    const i = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , s = e.size
      , a = (s - 1) * r;
    return typeof n == "function" ? n(i, s) : o === 1 ? i * r : a - i * r
}
const lA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function uA(e) {
    const t = lA.exec(e);
    if (!t)
        return [, ];
    const [,n,r,o] = t;
    return [`--${n ?? r}`, o]
}
const cA = 4;
function pw(e, t, n=1) {
    Bo(n <= cA, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,o] = uA(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return jx(s) ? parseFloat(s) : s
    }
    return Ff(o) ? pw(o, t, n + 1) : o
}
const dA = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , fA = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , hA = {
    type: "keyframes",
    duration: .8
}
  , pA = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , mA = (e, {keyframes: t}) => t.length > 2 ? hA : Zo.has(e) ? e.startsWith("scale") ? fA(t[1]) : dA : pA
  , gA = e => e !== null;
function yA(e, {repeat: t, repeatType: n="loop"}, r) {
    const o = e.filter(gA)
      , i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !i || r === void 0 ? o[i] : r
}
function mw(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function Yf(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? mw(n, e) : n
}
function vA({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Qf = (e, t, n, r={}, o, i) => s => {
    const a = Yf(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - wt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            s(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: i ? void 0 : o
    };
    vA(a) || Object.assign(c, mA(e, c)),
    c.duration && (c.duration = wt(c.duration)),
    c.repeatDelay && (c.repeatDelay = wt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (ad(c),
    c.delay === 0 && (d = !0)),
    (xn.instantAnimations || xn.skipAnimations || o != null && o.shouldSkipAnimations) && (d = !0,
    ad(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !i && t.get() !== void 0) {
        const f = yA(c.keyframes, a);
        if (f !== void 0) {
            se.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new Kf(c) : new aA(c)
}
;
function km(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function qf(e, t, n, r) {
    if (typeof t == "function") {
        const [o,i] = km(r);
        t = t(n !== void 0 ? n : e.custom, o, i)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [o,i] = km(r);
        t = t(n !== void 0 ? n : e.custom, o, i)
    }
    return t
}
function Co(e, t, n) {
    const r = e.getProps();
    return qf(r, t, n !== void 0 ? n : r.custom, e)
}
const gw = new Set(["width", "height", "top", "left", "right", "bottom", ...Xo])
  , Nm = 30
  , xA = e => !isNaN(parseFloat(e));
class wA {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var i;
            const o = He.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current),
            this.dependents))
                for (const s of this.dependents)
                    s.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = He.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = xA(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new If);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            se.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = He.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Nm)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Nm);
        return Ox(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function $o(e, t) {
    return new wA(e,t)
}
const ld = e => Array.isArray(e);
function bA(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $o(n))
}
function SA(e) {
    return ld(e) ? e[e.length - 1] || 0 : e
}
function CA(e, t) {
    const n = Co(e, t);
    let {transitionEnd: r={}, transition: o={}, ...i} = n || {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const a = SA(i[s]);
        bA(e, s, a)
    }
}
const ze = e => !!(e && e.getVelocity);
function EA(e) {
    return !!(ze(e) && e.add)
}
function ud(e, t) {
    const n = e.getValue("willChange");
    if (EA(n))
        return n.add(t);
    if (!n && xn.WillChange) {
        const r = new xn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function Xf(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const TA = "framerAppearId"
  , yw = "data-" + Xf(TA);
function vw(e) {
    return e.props[yw]
}
function PA({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function xw(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    let {transition: i, transitionEnd: s, ...a} = t;
    const l = e.getDefaultTransition();
    i = i ? mw(i, l) : l;
    const u = i == null ? void 0 : i.reduceMotion;
    r && (i = r);
    const c = []
      , d = o && e.animationState && e.animationState.getState()[o];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , x = a[f];
        if (x === void 0 || d && PA(d, f))
            continue;
        const y = {
            delay: n,
            ...Yf(i || {}, f)
        }
          , w = h.get();
        if (w !== void 0 && !h.isAnimating && !Array.isArray(x) && x === w && !y.velocity)
            continue;
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const S = vw(e);
            if (S) {
                const C = window.MotionHandoffAnimation(S, f, se);
                C !== null && (y.startTime = C,
                g = !0)
            }
        }
        ud(e, f);
        const m = u ?? e.shouldReduceMotion;
        h.start(Qf(f, h, x, m && gw.has(f) ? {
            type: !1
        } : y, e, g));
        const v = h.animation;
        v && c.push(v)
    }
    if (s) {
        const f = () => se.update( () => {
            s && CA(e, s)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function cd(e, t, n={}) {
    var l;
    const r = Co(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(xw(e, r, n)) : () => Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = o;
        return kA(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [i, s] : [s, i];
        return u().then( () => c())
    } else
        return Promise.all([i(), s(n.delay)])
}
function kA(e, t, n=0, r=0, o=0, i=1, s) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(cd(l, t, {
            ...s,
            delay: n + (typeof r == "function" ? 0 : r) + hw(e.variantChildren, l, r, o, i)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function NA(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => cd(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = cd(e, t, n);
    else {
        const o = typeof t == "function" ? Co(e, t, n.custom) : t;
        r = Promise.all(xw(e, o, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const AA = {
    test: e => e === "auto",
    parse: e => e
}
  , ww = e => t => t.test(e)
  , bw = [qo, _, Zt, jn, rN, nN, AA]
  , Am = e => bw.find(ww(e));
function RA(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Dx(e) : !0
}
const jA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function MA(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(zf) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = jA.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + o + ")"
}
const DA = /\b([a-z-]*)\(.*?\)/gu
  , dd = {
    ..._t,
    getAnimatableNone: e => {
        const t = e.match(DA);
        return t ? t.map(MA).join(" ") : e
    }
}
  , fd = {
    ..._t,
    getAnimatableNone: e => {
        const t = _t.parse(e);
        return _t.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , Rm = {
    ...qo,
    transform: Math.round
}
  , LA = {
    rotate: jn,
    rotateX: jn,
    rotateY: jn,
    rotateZ: jn,
    scale: Ws,
    scaleX: Ws,
    scaleY: Ws,
    scaleZ: Ws,
    skew: jn,
    skewX: jn,
    skewY: jn,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: Ji,
    originX: gm,
    originY: gm,
    originZ: _
}
  , Zf = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...LA,
    zIndex: Rm,
    fillOpacity: Ji,
    strokeOpacity: Ji,
    numOctaves: Rm
}
  , OA = {
    ...Zf,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: dd,
    WebkitFilter: dd,
    mask: fd,
    WebkitMask: fd
}
  , Sw = e => OA[e]
  , IA = new Set([dd, fd]);
function Cw(e, t) {
    let n = Sw(e);
    return IA.has(n) || (n = _t),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const VA = new Set(["auto", "none", "0"]);
function _A(e, t, n) {
    let r = 0, o;
    for (; r < e.length && !o; ) {
        const i = e[r];
        typeof i == "string" && !VA.has(i) && es(i).values.length && (o = e[r]),
        r++
    }
    if (o && n)
        for (const i of t)
            e[i] = Cw(n, o)
}
class FA extends Gf {
    constructor(t, n, r, o, i) {
        super(t, n, r, o, i, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            Ff(d))) {
                const f = pw(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !gw.has(r) || t.length !== 2)
            return;
        const [o,i] = t
          , s = Am(o)
          , a = Am(i)
          , l = mm(o)
          , u = mm(i);
        if (l !== u && Hn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (s !== a)
            if (Em(s) && Em(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Hn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let o = 0; o < t.length; o++)
            (t[o] === null || RA(t[o])) && r.push(o);
        r.length && _A(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Hn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const o = t.getValue(n);
        o && o.jump(this.measuredOrigin, !1);
        const i = r.length - 1
          , s = r[i];
        r[i] = Hn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const zA = new Set(["opacity", "clipPath", "filter", "transform"]);
function Ew(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const o = document.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e).filter(r => r != null)
}
const Tw = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function BA(e) {
    return Mx(e) && "offsetHeight"in e
}
const {schedule: Jf, cancel: AD} = Kx(queueMicrotask, !1)
  , At = {
    x: !1,
    y: !1
};
function Pw() {
    return At.x || At.y
}
function $A(e) {
    return e === "x" || e === "y" ? At[e] ? null : (At[e] = !0,
    () => {
        At[e] = !1
    }
    ) : At.x || At.y ? null : (At.x = At.y = !0,
    () => {
        At.x = At.y = !1
    }
    )
}
function kw(e, t) {
    const n = Ew(e)
      , r = new AbortController
      , o = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, o, () => r.abort()]
}
function UA(e) {
    return !(e.pointerType === "touch" || Pw())
}
function WA(e, t, n={}) {
    const [r,o,i] = kw(e, n);
    return r.forEach(s => {
        let a = !1, l = !1, u;
        const c = () => {
            s.removeEventListener("pointerleave", x)
        }
          , d = w => {
            u && (u(w),
            u = void 0),
            c()
        }
          , f = w => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(w))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, o),
            window.addEventListener("pointercancel", f, o)
        }
          , x = w => {
            if (w.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(w)
            }
        }
          , y = w => {
            if (!UA(w))
                return;
            l = !1;
            const g = t(s, w);
            typeof g == "function" && (u = g,
            s.addEventListener("pointerleave", x, o))
        }
        ;
        s.addEventListener("pointerenter", y, o),
        s.addEventListener("pointerdown", h, o)
    }
    ),
    i
}
const Nw = (e, t) => t ? e === t ? !0 : Nw(e, t.parentElement) : !1
  , eh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , HA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function KA(e) {
    return HA.has(e.tagName) || e.isContentEditable === !0
}
const GA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function YA(e) {
    return GA.has(e.tagName) || e.isContentEditable === !0
}
const la = new WeakSet;
function jm(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Nu(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const QA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = jm( () => {
        if (la.has(n))
            return;
        Nu(n, "down");
        const o = jm( () => {
            Nu(n, "up")
        }
        )
          , i = () => Nu(n, "cancel");
        n.addEventListener("keyup", o, t),
        n.addEventListener("blur", i, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Mm(e) {
    return eh(e) && !Pw()
}
const Dm = new WeakSet;
function qA(e, t, n={}) {
    const [r,o,i] = kw(e, n)
      , s = a => {
        const l = a.currentTarget;
        if (!Mm(a) || Dm.has(a))
            return;
        la.add(l),
        n.stopPropagation && Dm.add(a);
        const u = t(l, a)
          , c = (h, x) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            la.has(l) && la.delete(l),
            Mm(h) && typeof u == "function" && u(h, {
                success: x
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || Nw(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, o),
        window.addEventListener("pointercancel", f, o)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o),
        BA(a) && (a.addEventListener("focus", u => QA(u, o)),
        !KA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    i
}
function th(e) {
    return Mx(e) && "ownerSVGElement"in e
}
const ua = new WeakMap;
let Mn;
const Aw = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : th(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , XA = Aw("inline", "width", "offsetWidth")
  , ZA = Aw("block", "height", "offsetHeight");
function JA({target: e, borderBoxSize: t}) {
    var n;
    (n = ua.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return XA(e, t)
            },
            get height() {
                return ZA(e, t)
            }
        })
    }
    )
}
function eR(e) {
    e.forEach(JA)
}
function tR() {
    typeof ResizeObserver > "u" || (Mn = new ResizeObserver(eR))
}
function nR(e, t) {
    Mn || tR();
    const n = Ew(e);
    return n.forEach(r => {
        let o = ua.get(r);
        o || (o = new Set,
        ua.set(r, o)),
        o.add(t),
        Mn == null || Mn.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const o = ua.get(r);
            o == null || o.delete(t),
            o != null && o.size || Mn == null || Mn.unobserve(r)
        }
        )
    }
}
const ca = new Set;
let uo;
function rR() {
    uo = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        ca.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", uo)
}
function oR(e) {
    return ca.add(e),
    uo || rR(),
    () => {
        ca.delete(e),
        !ca.size && typeof uo == "function" && (window.removeEventListener("resize", uo),
        uo = void 0)
    }
}
function Lm(e, t) {
    return typeof e == "function" ? oR(e) : nR(e, t)
}
function iR(e) {
    return th(e) && e.tagName === "svg"
}
const sR = [...bw, Se, _t]
  , aR = e => sR.find(ww(e))
  , Om = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , co = () => ({
    x: Om(),
    y: Om()
})
  , Im = () => ({
    min: 0,
    max: 0
})
  , Ee = () => ({
    x: Im(),
    y: Im()
})
  , lR = new WeakMap;
function Ml(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function ts(e) {
    return typeof e == "string" || Array.isArray(e)
}
const nh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , rh = ["initial", ...nh];
function Dl(e) {
    return Ml(e.animate) || rh.some(t => ts(e[t]))
}
function Rw(e) {
    return !!(Dl(e) || e.variants)
}
function uR(e, t, n) {
    for (const r in t) {
        const o = t[r]
          , i = n[r];
        if (ze(o))
            e.addValue(r, o);
        else if (ze(i))
            e.addValue(r, $o(o, {
                owner: e
            }));
        else if (i !== o)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, $o(s !== void 0 ? s : o, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const hd = {
    current: null
}
  , jw = {
    current: !1
}
  , cR = typeof window < "u";
function dR() {
    if (jw.current = !0,
    !!cR)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => hd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            hd.current = !1
}
const Vm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Qa = {};
function Mw(e) {
    Qa = e
}
function fR() {
    return Qa
}
class hR {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: o, skipAnimations: i, blockInitialAnimation: s, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = Gf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = He.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            se.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.skipAnimationsConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = Dl(n),
        this.isVariantNode = Rw(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const x = f[h];
            u[h] !== void 0 && ze(x) && x.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const o in this.initialValues)
                (n = this.values.get(o)) == null || n.jump(this.initialValues[o]),
                this.latestValues[o] = this.initialValues[o];
        this.current = t,
        lR.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (o, i) => this.bindToMotionValue(i, o)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (jw.current || dR(),
        this.shouldReduceMotion = hd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        ar(this.notifyUpdate),
        ar(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && zA.has(t) && this.current instanceof HTMLElement) {
            const {factory: s, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new dw({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: wt(c)
            })
              , f = s(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = Zo.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const o = n.on("change", s => {
            this.latestValues[t] = s,
            this.props.onUpdate && se.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let i;
        typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            o(),
            i && i(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Qa) {
            const n = Qa[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: o} = n;
            if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)),
            this.features[t]) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(),
                i.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Vm.length; r++) {
            const o = Vm[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const i = "on" + o
              , s = t[i];
            s && (this.propEventSubscriptions[o] = this.on(o, s))
        }
        this.prevMotionValues = uR(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = $o(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (jx(r) || Dx(r)) ? r = parseFloat(r) : !aR(r) && _t.test(n) && (r = Cw(t, n)),
        this.setBaseTarget(t, ze(r) ? r.get() : r)),
        ze(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var i;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const s = qf(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
            s && (r = s[t])
        }
        if (n && r !== void 0)
            return r;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !ze(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new If),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        Jf.render(this.render)
    }
}
class Dw extends hR {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = FA
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ze(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class dr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Lw({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function pR({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function mR(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Au(e) {
    return e === void 0 || e === 1
}
function pd({scale: e, scaleX: t, scaleY: n}) {
    return !Au(e) || !Au(t) || !Au(n)
}
function vr(e) {
    return pd(e) || Ow(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Ow(e) {
    return _m(e.x) || _m(e.y)
}
function _m(e) {
    return e && e !== "0%"
}
function qa(e, t, n) {
    const r = e - n
      , o = t * r;
    return n + o
}
function Fm(e, t, n, r, o) {
    return o !== void 0 && (e = qa(e, o, r)),
    qa(e, n, r) + t
}
function md(e, t=0, n=1, r, o) {
    e.min = Fm(e.min, t, n, r, o),
    e.max = Fm(e.max, t, n, r, o)
}
function Iw(e, {x: t, y: n}) {
    md(e.x, t.translate, t.scale, t.originPoint),
    md(e.y, n.translate, n.scale, n.originPoint)
}
const zm = .999999999999
  , Bm = 1.0000000000001;
function gR(e, t, n, r=!1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
        i = n[a],
        s = i.projectionDelta;
        const {visualElement: l} = i.options;
        l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && ho(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        Iw(e, s)),
        r && vr(i.latestValues) && ho(e, i.latestValues))
    }
    t.x < Bm && t.x > zm && (t.x = 1),
    t.y < Bm && t.y > zm && (t.y = 1)
}
function fo(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function $m(e, t, n, r, o=.5) {
    const i = pe(e.min, e.max, o);
    md(e, t, n, i, r)
}
function ho(e, t) {
    $m(e.x, t.x, t.scaleX, t.scale, t.originX),
    $m(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Vw(e, t) {
    return Lw(mR(e.getBoundingClientRect(), t))
}
function yR(e, t, n) {
    const r = Vw(e, n)
      , {scroll: o} = t;
    return o && (fo(r.x, o.offset.x),
    fo(r.y, o.offset.y)),
    r
}
const vR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , xR = Xo.length;
function wR(e, t, n) {
    let r = ""
      , o = !0;
    for (let i = 0; i < xR; i++) {
        const s = Xo[i]
          , a = e[s];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (s.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = s.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = Tw(a, Zf[s]);
            if (!l) {
                o = !1;
                const c = vR[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, o ? "" : r) : o && (r = "none"),
    r
}
function oh(e, t, n) {
    const {style: r, vars: o, transformOrigin: i} = e;
    let s = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (Zo.has(l)) {
            s = !0;
            continue
        } else if (Yx(l)) {
            o[l] = u;
            continue
        } else {
            const c = Tw(u, Zf[l]);
            l.startsWith("origin") ? (a = !0,
            i[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = wR(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = i;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function _w(e, {style: t, vars: n}, r, o) {
    const i = e.style;
    let s;
    for (s in t)
        i[s] = t[s];
    o == null || o.applyProjectionStyles(i, r);
    for (s in n)
        i.setProperty(s, n[s])
}
function Um(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const di = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Um(e, t.target.x)
          , r = Um(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , bR = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , o = _t.parse(e);
        if (o.length > 5)
            return r;
        const i = _t.createTransformer(e)
          , s = typeof o[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        o[0 + s] /= a,
        o[1 + s] /= l;
        const u = pe(a, l, .5);
        return typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
    }
}
  , gd = {
    borderRadius: {
        ...di,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: di,
    borderTopRightRadius: di,
    borderBottomLeftRadius: di,
    borderBottomRightRadius: di,
    boxShadow: bR
};
function Fw(e, {layout: t, layoutId: n}) {
    return Zo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!gd[e] || e === "opacity")
}
function ih(e, t, n) {
    var s;
    const r = e.style
      , o = t == null ? void 0 : t.style
      , i = {};
    if (!r)
        return i;
    for (const a in r)
        (ze(r[a]) || o && ze(o[a]) || Fw(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (i[a] = r[a]);
    return i
}
function SR(e) {
    return window.getComputedStyle(e)
}
class CR extends Dw {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = _w
    }
    readValueFromInstance(t, n) {
        var r;
        if (Zo.has(n))
            return (r = this.projection) != null && r.isProjecting ? nd(n) : zN(t, n);
        {
            const o = SR(t)
              , i = (Yx(n) ? o.getPropertyValue(n) : o[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Vw(t, n)
    }
    build(t, n, r) {
        oh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ih(t, n, r)
    }
}
const ER = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , TR = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function PR(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const i = o ? ER : TR;
    e[i.offset] = `${-r}`,
    e[i.array] = `${t} ${n}`
}
const kR = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function zw(e, {attrX: t, attrY: n, attrScale: r, pathLength: o, pathSpacing: i=1, pathOffset: s=0, ...a}, l, u, c) {
    if (oh(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of kR)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && PR(d, o, i, s, !1)
}
const Bw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , $w = e => typeof e == "string" && e.toLowerCase() === "svg";
function NR(e, t, n, r) {
    _w(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(Bw.has(o) ? o : Xf(o), t.attrs[o])
}
function Uw(e, t, n) {
    const r = ih(e, t, n);
    for (const o in e)
        if (ze(e[o]) || ze(t[o])) {
            const i = Xo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[i] = e[o]
        }
    return r
}
class AR extends Dw {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ee
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Zo.has(n)) {
            const r = Sw(n);
            return r && r.default || 0
        }
        return n = Bw.has(n) ? n : Xf(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Uw(t, n, r)
    }
    build(t, n, r) {
        zw(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, o) {
        NR(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = $w(t.tagName),
        super.mount(t)
    }
}
const RR = rh.length;
function Ww(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Ww(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < RR; n++) {
        const r = rh[n]
          , o = e.props[r];
        (ts(o) || o === !1) && (t[r] = o)
    }
    return t
}
function Hw(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const jR = [...nh].reverse()
  , MR = nh.length;
function DR(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => NA(e, n, r)))
}
function LR(e) {
    let t = DR(e)
      , n = Wm()
      , r = !0;
    const o = l => (u, c) => {
        var f;
        const d = Co(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: h, transitionEnd: x, ...y} = d;
            u = {
                ...u,
                ...y,
                ...x
            }
        }
        return u
    }
    ;
    function i(l) {
        t = l(e)
    }
    function s(l) {
        const {props: u} = e
          , c = Ww(e.parent) || {}
          , d = []
          , f = new Set;
        let h = {}
          , x = 1 / 0;
        for (let w = 0; w < MR; w++) {
            const g = jR[w]
              , m = n[g]
              , v = u[g] !== void 0 ? u[g] : c[g]
              , S = ts(v)
              , C = g === l ? m.isActive : null;
            C === !1 && (x = w);
            let E = v === c[g] && v !== u[g] && S;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            m.protectedKeys = {
                ...h
            },
            !m.isActive && C === null || !v && !m.prevProp || Ml(v) || typeof v == "boolean")
                continue;
            if (g === "exit" && m.isActive && C !== !0) {
                m.prevResolvedValues && (h = {
                    ...h,
                    ...m.prevResolvedValues
                });
                continue
            }
            const T = OR(m.prevProp, v);
            let P = T || g === l && m.isActive && !E && S || w > x && S
              , j = !1;
            const M = Array.isArray(v) ? v : [v];
            let z = M.reduce(o(g), {});
            C === !1 && (z = {});
            const {prevResolvedValues: I={}} = m
              , G = {
                ...I,
                ...z
            }
              , L = F => {
                P = !0,
                f.has(F) && (j = !0,
                f.delete(F)),
                m.needsAnimating[F] = !0;
                const k = e.getValue(F);
                k && (k.liveStyle = !1)
            }
            ;
            for (const F in G) {
                const k = z[F]
                  , A = I[F];
                if (h.hasOwnProperty(F))
                    continue;
                let O = !1;
                ld(k) && ld(A) ? O = !Hw(k, A) : O = k !== A,
                O ? k != null ? L(F) : f.add(F) : k !== void 0 && f.has(F) ? L(F) : m.protectedKeys[F] = !0
            }
            m.prevProp = v,
            m.prevResolvedValues = z,
            m.isActive && (h = {
                ...h,
                ...z
            }),
            r && e.blockInitialAnimation && (P = !1);
            const Y = E && T;
            P && (!Y || j) && d.push(...M.map(F => {
                const k = {
                    type: g
                };
                if (typeof F == "string" && r && !Y && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: A} = e
                      , O = Co(A, F);
                    if (A.enteringChildren && O) {
                        const {delayChildren: U} = O.transition || {};
                        k.delay = hw(A.enteringChildren, e, U)
                    }
                }
                return {
                    animation: F,
                    options: k
                }
            }
            ))
        }
        if (f.size) {
            const w = {};
            if (typeof u.initial != "boolean") {
                const g = Co(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                g && g.transition && (w.transition = g.transition)
            }
            f.forEach(g => {
                const m = e.getBaseTarget(g)
                  , v = e.getValue(g);
                v && (v.liveStyle = !0),
                w[g] = m ?? null
            }
            ),
            d.push({
                animation: w
            })
        }
        let y = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
        r = !1,
        y ? t(d) : Promise.resolve()
    }
    function a(l, u) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) == null || d.forEach(f => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = s(l);
        for (const f in n)
            n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
            n = Wm()
        }
    }
}
function OR(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Hw(t, e) : !1
}
function mr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Wm() {
    return {
        animate: mr(!0),
        whileInView: mr(),
        whileHover: mr(),
        whileTap: mr(),
        whileDrag: mr(),
        whileFocus: mr(),
        exit: mr()
    }
}
function Hm(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Nt(e, t) {
    Hm(e.x, t.x),
    Hm(e.y, t.y)
}
function Km(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const Kw = 1e-4
  , IR = 1 - Kw
  , VR = 1 + Kw
  , Gw = .01
  , _R = 0 - Gw
  , FR = 0 + Gw;
function Ke(e) {
    return e.max - e.min
}
function zR(e, t, n) {
    return Math.abs(e - t) <= n
}
function Gm(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = pe(t.min, t.max, e.origin),
    e.scale = Ke(n) / Ke(t),
    e.translate = pe(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= IR && e.scale <= VR || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= _R && e.translate <= FR || isNaN(e.translate)) && (e.translate = 0)
}
function Ai(e, t, n, r) {
    Gm(e.x, t.x, n.x, r ? r.originX : void 0),
    Gm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Ym(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ke(t)
}
function BR(e, t, n) {
    Ym(e.x, t.x, n.x),
    Ym(e.y, t.y, n.y)
}
function Qm(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ke(t)
}
function Xa(e, t, n) {
    Qm(e.x, t.x, n.x),
    Qm(e.y, t.y, n.y)
}
function qm(e, t, n, r, o) {
    return e -= t,
    e = qa(e, 1 / n, r),
    o !== void 0 && (e = qa(e, 1 / o, r)),
    e
}
function $R(e, t=0, n=1, r=.5, o, i=e, s=e) {
    if (Zt.test(t) && (t = parseFloat(t),
    t = pe(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let a = pe(i.min, i.max, r);
    e === i && (a -= t),
    e.min = qm(e.min, t, n, a, o),
    e.max = qm(e.max, t, n, a, o)
}
function Xm(e, t, [n,r,o], i, s) {
    $R(e, t[n], t[r], t[o], t.scale, i, s)
}
const UR = ["x", "scaleX", "originX"]
  , WR = ["y", "scaleY", "originY"];
function Zm(e, t, n, r) {
    Xm(e.x, t, UR, n ? n.x : void 0, r ? r.x : void 0),
    Xm(e.y, t, WR, n ? n.y : void 0, r ? r.y : void 0)
}
function Jm(e) {
    return e.translate === 0 && e.scale === 1
}
function Yw(e) {
    return Jm(e.x) && Jm(e.y)
}
function eg(e, t) {
    return e.min === t.min && e.max === t.max
}
function HR(e, t) {
    return eg(e.x, t.x) && eg(e.y, t.y)
}
function tg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Qw(e, t) {
    return tg(e.x, t.x) && tg(e.y, t.y)
}
function ng(e) {
    return Ke(e.x) / Ke(e.y)
}
function rg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Ht(e) {
    return [e("x"), e("y")]
}
function KR(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
      , i = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: x} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const qw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , GR = qw.length
  , og = e => typeof e == "string" ? parseFloat(e) : e
  , ig = e => typeof e == "number" || _.test(e);
function YR(e, t, n, r, o, i) {
    o ? (e.opacity = pe(0, n.opacity ?? 1, QR(r)),
    e.opacityExit = pe(t.opacity ?? 1, 0, qR(r))) : i && (e.opacity = pe(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let s = 0; s < GR; s++) {
        const a = `border${qw[s]}Radius`;
        let l = sg(t, a)
          , u = sg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || ig(l) === ig(u) ? (e[a] = Math.max(pe(og(l), og(u), r), 0),
        (Zt.test(u) || Zt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = pe(t.rotate || 0, n.rotate || 0, r))
}
function sg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const QR = Xw(0, .5, $x)
  , qR = Xw(.5, .95, xt);
function Xw(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Zi(e, t, r))
}
function XR(e, t, n) {
    const r = ze(e) ? e : $o(e);
    return r.start(Qf("", r, t, n)),
    r.animation
}
function ns(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const ZR = (e, t) => e.depth - t.depth;
class JR {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Of(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Ha(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(ZR),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function ej(e, t) {
    const n = He.now()
      , r = ({timestamp: o}) => {
        const i = o - n;
        i >= t && (ar(r),
        e(i - t))
    }
    ;
    return se.setup(r, !0),
    () => ar(r)
}
function da(e) {
    return ze(e) ? e.get() : e
}
class tj {
    constructor() {
        this.members = []
    }
    add(t) {
        Of(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const o = r.instance;
            o && o.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && Ha(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Ha(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o]
              , s = i.instance;
            if (i.isPresent !== !1 && (!s || s.isConnected !== !1)) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender();
            const o = r.options.layoutDependency
              , i = t.options.layoutDependency;
            if (!(o !== void 0 && i !== void 0 && o === i)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const fa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Ru = ["", "X", "Y", "Z"]
  , nj = 1e3;
let rj = 0;
function ju(e, t, n, r) {
    const {latestValues: o} = t;
    o[e] && (n[e] = o[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Zw(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = vw(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: i} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", se, !(o || i))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && Zw(r)
}
function Jw({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(s={}, a=t == null ? void 0 : t()) {
            this.id = rj++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(sj),
                this.nodes.forEach(cj),
                this.nodes.forEach(dj),
                this.nodes.forEach(aj)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new JR)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new If),
            this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s) {
            if (this.instance)
                return;
            this.isSVG = th(s) && !iR(s),
            this.instance = s;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                se.read( () => {
                    d = window.innerWidth
                }
                ),
                e(s, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = ej(f, 250),
                    fa.hasAnimatedSinceResize && (fa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(ug)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || u.getDefaultTransition() || gj
                  , {onLayoutAnimationStart: y, onLayoutAnimationComplete: w} = u.getProps()
                  , g = !this.targetLayout || !Qw(this.targetLayout, h)
                  , m = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || m || d && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const v = {
                        ...Yf(x, "layout"),
                        onPlay: y,
                        onComplete: w
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0,
                    v.type = !1),
                    this.startAnimation(v),
                    this.setAnimationOrigin(c, m)
                } else
                    d || ug(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ar(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(fj),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Zw(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(ag);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(lg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(uj),
            this.nodes.forEach(oj),
            this.nodes.forEach(ij)) : this.nodes.forEach(lg),
            this.clearAllSnapshots();
            const a = He.now();
            je.delta = tn(0, 1e3 / 60, a - je.timestamp),
            je.timestamp = a,
            je.isProcessing = !0,
            Su.update.process(je),
            Su.preRender.process(je),
            Su.render.process(je),
            je.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Jf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(lj),
            this.sharedNodes.forEach(hj)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            se.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            se.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Ke(this.snapshot.measuredBox.x) && !Ke(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Ee(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !Yw(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && this.instance && (a || vr(this.latestValues) || c) && (o(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
            yj(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: s} = this.options;
            if (!s)
                return Ee();
            const a = s.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(vj))) {
                const {scroll: c} = this.root;
                c && (fo(a.x, c.offset.x),
                fo(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = Ee();
            if (Nt(a, s),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Nt(a, s),
                fo(a.x, d.offset.x),
                fo(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, a=!1) {
            const l = Ee();
            Nt(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ho(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                vr(c.latestValues) && ho(l, c.latestValues)
            }
            return vr(this.latestValues) && ho(l, this.latestValues),
            l
        }
        removeTransform(s) {
            const a = Ee();
            Nt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !vr(u.latestValues))
                    continue;
                pd(u.latestValues) && u.updateSnapshot();
                const c = Ee()
                  , d = u.measurePageBox();
                Nt(c, d),
                Zm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return vr(this.latestValues) && Zm(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== je.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = je.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ee(),
            this.targetWithTransforms = Ee()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            BR(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Nt(this.target, this.layout.layoutBox),
            Iw(this.target, this.targetDelta)) : Nt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || pd(this.parent.latestValues) || Ow(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(s, a, l) {
            this.relativeParent = s,
            this.linkedParentVersion = s.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Ee(),
            this.relativeTargetOrigin = Ee(),
            Xa(this.relativeTargetOrigin, a, l),
            Nt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var x;
            const s = this.getLead()
              , a = !!this.resumingFrom || this !== s;
            let l = !0;
            if ((this.isProjectionDirty || (x = this.parent) != null && x.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === je.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            Nt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            gR(this.layoutCorrected, this.treeScale, this.path, a),
            s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
            s.targetWithTransforms = Ee());
            const {target: h} = s;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Km(this.prevProjectionDelta.x, this.projectionDelta.x),
            Km(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ai(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !rg(this.projectionDelta.x, this.prevProjectionDelta.x) || !rg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = co(),
            this.projectionDelta = co(),
            this.projectionDeltaWithTransform = co()
        }
        setAnimationOrigin(s, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = co();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Ee()
              , h = l ? l.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , y = h !== x
              , w = this.getStack()
              , g = !w || w.members.length <= 1
              , m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(mj));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = S => {
                const C = S / 1e3;
                cg(d.x, s.x, C),
                cg(d.y, s.y, C),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                pj(this.relativeTarget, this.relativeTargetOrigin, f, C),
                v && HR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = Ee()),
                Nt(v, this.relativeTarget)),
                y && (this.animationValues = c,
                YR(c, u, this.latestValues, C, m, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (ar(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = se.update( () => {
                fa.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = $o(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = XR(this.motionValue, [0, 1e3], {
                    ...s,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        s.onUpdate && s.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(nj),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && e1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ee();
                    const d = Ke(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = Ke(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                    l.y.max = l.y.min + f
                }
                Nt(a, l),
                ho(a, c),
                Ai(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new tj),
            this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: s} = this.options;
            return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: s} = this.options;
            return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let a = !1;
            const {latestValues: l} = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && ju("z", s, u, this.animationValues);
            for (let c = 0; c < Ru.length; c++)
                ju(`rotate${Ru[c]}`, s, u, this.animationValues),
                ju(`skew${Ru[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        applyProjectionStyles(s, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                s.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                s.visibility = "",
                s.opacity = "",
                s.pointerEvents = da(a == null ? void 0 : a.pointerEvents) || "",
                s.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                s.pointerEvents = da(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !vr(this.latestValues) && (s.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            s.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = KR(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            s.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const x in gd) {
                if (c[x] === void 0)
                    continue;
                const {correct: y, applyTo: w, isCSSVariable: g} = gd[x]
                  , m = d === "none" ? c[x] : y(c[x], u);
                if (w) {
                    const v = w.length;
                    for (let S = 0; S < v; S++)
                        s[w[S]] = m
                } else
                    g ? this.options.visualElement.renderState.vars[x] = m : s[x] = m
            }
            this.options.layoutId && (s.pointerEvents = u === this ? da(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(ag),
            this.root.sharedNodes.clear()
        }
    }
}
function oj(e) {
    e.updateLayout()
}
function ij(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: o} = e.layout
          , {animationType: i} = e.options
          , s = t.source !== e.layout.source;
        i === "size" ? Ht(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d]
              , h = Ke(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : e1(i, t.layoutBox, r) && Ht(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d]
              , h = Ke(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = co();
        Ai(a, r, t.layoutBox);
        const l = co();
        s ? Ai(l, e.applyTransform(o, !0), t.measuredBox) : Ai(l, r, t.layoutBox);
        const u = !Yw(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const x = Ee();
                    Xa(x, t.layoutBox, f.layoutBox);
                    const y = Ee();
                    Xa(y, r, h.layoutBox),
                    Qw(x, y) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function sj(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function aj(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function lj(e) {
    e.clearSnapshot()
}
function ag(e) {
    e.clearMeasurements()
}
function lg(e) {
    e.isLayoutDirty = !1
}
function uj(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function ug(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function cj(e) {
    e.resolveTargetDelta()
}
function dj(e) {
    e.calcProjection()
}
function fj(e) {
    e.resetSkewAndRotation()
}
function hj(e) {
    e.removeLeadSnapshot()
}
function cg(e, t, n) {
    e.translate = pe(t.translate, 0, n),
    e.scale = pe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function dg(e, t, n, r) {
    e.min = pe(t.min, n.min, r),
    e.max = pe(t.max, n.max, r)
}
function pj(e, t, n, r) {
    dg(e.x, t.x, n.x, r),
    dg(e.y, t.y, n.y, r)
}
function mj(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const gj = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , fg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , hg = fg("applewebkit/") && !fg("chrome/") ? Math.round : xt;
function pg(e) {
    e.min = hg(e.min),
    e.max = hg(e.max)
}
function yj(e) {
    pg(e.x),
    pg(e.y)
}
function e1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !zR(ng(t), ng(n), .2)
}
function vj(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const xj = Jw({
    attachResizeListener: (e, t) => ns(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , Mu = {
    current: void 0
}
  , t1 = Jw({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Mu.current) {
            const e = new xj({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Mu.current = e
        }
        return Mu.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , n1 = b.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function wj(e=!0) {
    const t = b.useContext(Lf);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: o} = t
      , i = b.useId();
    b.useEffect( () => {
        if (e)
            return o(i)
    }
    , [e]);
    const s = b.useCallback( () => e && r && r(i), [i, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const r1 = b.createContext({
    strict: !1
})
  , mg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let gg = !1;
function bj() {
    if (gg)
        return;
    const e = {};
    for (const t in mg)
        e[t] = {
            isEnabled: n => mg[t].some(r => !!n[r])
        };
    Mw(e),
    gg = !0
}
function o1() {
    return bj(),
    fR()
}
function Sj(e) {
    const t = o1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    Mw(t)
}
const Cj = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function Za(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Cj.has(e)
}
let i1 = e => !Za(e);
function Ej(e) {
    typeof e == "function" && (i1 = t => t.startsWith("on") ? !Za(t) : e(t))
}
try {
    Ej(require("@emotion/is-prop-valid").default)
} catch {}
function Tj(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (i1(o) || n === !0 && Za(o) || !t && !Za(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
const Ll = b.createContext({});
function Pj(e, t) {
    if (Dl(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || ts(n) ? n : void 0,
            animate: ts(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function kj(e) {
    const {initial: t, animate: n} = Pj(e, b.useContext(Ll));
    return b.useMemo( () => ({
        initial: t,
        animate: n
    }), [yg(t), yg(n)])
}
function yg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const sh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function s1(e, t, n) {
    for (const r in t)
        !ze(t[r]) && !Fw(r, n) && (e[r] = t[r])
}
function Nj({transformTemplate: e}, t) {
    return b.useMemo( () => {
        const n = sh();
        return oh(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function Aj(e, t) {
    const n = e.style || {}
      , r = {};
    return s1(r, n, e),
    Object.assign(r, Nj(e, t)),
    r
}
function Rj(e, t) {
    const n = {}
      , r = Aj(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const a1 = () => ({
    ...sh(),
    attrs: {}
});
function jj(e, t, n, r) {
    const o = b.useMemo( () => {
        const i = a1();
        return zw(i, t, $w(r), e.transformTemplate, e.style),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const i = {};
        s1(i, e.style, e),
        o.style = {
            ...i,
            ...o.style
        }
    }
    return o
}
const Mj = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ah(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Mj.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Dj(e, t, n, {latestValues: r}, o, i=!1, s) {
    const l = (s ?? ah(e) ? jj : Rj)(t, r, o, e)
      , u = Tj(t, typeof e == "string", i)
      , c = e !== b.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = b.useMemo( () => ze(d) ? d.get() : d, [d]);
    return b.createElement(e, {
        ...c,
        children: f
    })
}
function Lj({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, o) {
    return {
        latestValues: Oj(n, r, o, e),
        renderState: t()
    }
}
function Oj(e, t, n, r) {
    const o = {}
      , i = r(e, {});
    for (const f in i)
        o[f] = da(i[f]);
    let {initial: s, animate: a} = e;
    const l = Dl(e)
      , u = Rw(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !Ml(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const x = qf(e, f[h]);
            if (x) {
                const {transitionEnd: y, transition: w, ...g} = x;
                for (const m in g) {
                    let v = g[m];
                    if (Array.isArray(v)) {
                        const S = c ? v.length - 1 : 0;
                        v = v[S]
                    }
                    v !== null && (o[m] = v)
                }
                for (const m in y)
                    o[m] = y[m]
            }
        }
    }
    return o
}
const l1 = e => (t, n) => {
    const r = b.useContext(Ll)
      , o = b.useContext(Lf)
      , i = () => Lj(e, t, r, o);
    return n ? i() : V2(i)
}
  , Ij = l1({
    scrapeMotionValuesFromProps: ih,
    createRenderState: sh
})
  , Vj = l1({
    scrapeMotionValuesFromProps: Uw,
    createRenderState: a1
})
  , _j = Symbol.for("motionComponentSymbol");
function Fj(e, t, n) {
    const r = b.useRef(n);
    b.useInsertionEffect( () => {
        r.current = n
    }
    );
    const o = b.useRef(null);
    return b.useCallback(i => {
        var a;
        i && ((a = e.onMount) == null || a.call(e, i)),
        t && (i ? t.mount(i) : t.unmount());
        const s = r.current;
        if (typeof s == "function")
            if (i) {
                const l = s(i);
                typeof l == "function" && (o.current = l)
            } else
                o.current ? (o.current(),
                o.current = null) : s(i);
        else
            s && (s.current = i)
    }
    , [t])
}
const u1 = b.createContext({});
function Qr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function zj(e, t, n, r, o, i) {
    var v, S;
    const {visualElement: s} = b.useContext(Ll)
      , a = b.useContext(r1)
      , l = b.useContext(Lf)
      , u = b.useContext(n1)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = b.useRef(null)
      , h = b.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: i
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const x = f.current
      , y = b.useContext(u1);
    x && !x.projection && o && (x.type === "html" || x.type === "svg") && Bj(f.current, n, o, y);
    const w = b.useRef(!1);
    b.useInsertionEffect( () => {
        x && w.current && x.update(n, l)
    }
    );
    const g = n[yw]
      , m = b.useRef(!!g && !((v = window.MotionHandoffIsComplete) != null && v.call(window, g)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, g)));
    return _2( () => {
        h.current = !0,
        x && (w.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        m.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    b.useEffect( () => {
        x && (!m.current && x.animationState && x.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, g)
        }
        ),
        m.current = !1),
        x.enteringChildren = void 0)
    }
    ),
    x
}
function Bj(e, t, n, r) {
    const {layoutId: o, layout: i, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : c1(e.parent)),
    e.projection.setOptions({
        layoutId: o,
        layout: i,
        alwaysMeasureLayout: !!s || a && Qr(a),
        visualElement: e,
        animationType: typeof i == "string" ? i : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function c1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : c1(e.parent)
}
function Du(e, {forwardMotionProps: t=!1, type: n}={}, r, o) {
    r && Sj(r);
    const i = n ? n === "svg" : ah(e)
      , s = i ? Vj : Ij;
    function a(u, c) {
        let d;
        const f = {
            ...b.useContext(n1),
            ...u,
            layoutId: $j(u)
        }
          , {isStatic: h} = f
          , x = kj(u)
          , y = s(u, h);
        if (!h && Rx) {
            Uj();
            const w = Wj(f);
            d = w.MeasureLayout,
            x.visualElement = zj(e, y, f, o, w.ProjectionNode, i)
        }
        return p.jsxs(Ll.Provider, {
            value: x,
            children: [d && x.visualElement ? p.jsx(d, {
                visualElement: x.visualElement,
                ...f
            }) : null, Dj(e, u, Fj(y, x.visualElement, c), y, h, t, i)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = b.forwardRef(a);
    return l[_j] = e,
    l
}
function $j({layoutId: e}) {
    const t = b.useContext(Ax).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Uj(e, t) {
    b.useContext(r1).strict
}
function Wj(e) {
    const t = o1()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const o = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}
function Hj(e, t) {
    if (typeof Proxy > "u")
        return Du;
    const n = new Map
      , r = (i, s) => Du(i, s, e, t)
      , o = (i, s) => r(i, s);
    return new Proxy(o,{
        get: (i, s) => s === "create" ? r : (n.has(s) || n.set(s, Du(s, void 0, e, t)),
        n.get(s))
    })
}
const Kj = (e, t) => t.isSVG ?? ah(e) ? new AR(t) : new CR(t,{
    allowProjection: e !== b.Fragment
});
class Gj extends dr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = LR(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Ml(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let Yj = 0;
class Qj extends dr {
    constructor() {
        super(...arguments),
        this.id = Yj++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const qj = {
    animation: {
        Feature: Gj
    },
    exit: {
        Feature: Qj
    }
};
function gs(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const Xj = e => t => eh(t) && e(t, gs(t));
function Ri(e, t, n, r) {
    return ns(e, t, Xj(n), r)
}
const d1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , vg = (e, t) => Math.abs(e - t);
function Zj(e, t) {
    const n = vg(e.x, t.x)
      , r = vg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const xg = new Set(["auto", "scroll"]);
class f1 {
    constructor(t, n, {transformPagePoint: r, contextWindow: o=window, dragSnapToOrigin: i=!1, distanceThreshold: s=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = Ou(this.lastMoveEventInfo, this.history)
              , x = this.startEvent !== null
              , y = Zj(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!x && !y)
                return;
            const {point: w} = h
              , {timestamp: g} = je;
            this.history.push({
                ...w,
                timestamp: g
            });
            const {onStart: m, onMove: v} = this.handlers;
            x || (m && m(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            v && v(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, x) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = Lu(x, this.transformPagePoint),
            se.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, x) => {
            this.end();
            const {onEnd: y, onSessionEnd: w, resumeAnimation: g} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = Ou(h.type === "pointercancel" ? this.lastMoveEventInfo : Lu(x, this.transformPagePoint), this.history);
            this.startEvent && y && y(h, m),
            w && w(h, m)
        }
        ,
        !eh(t))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = s,
        this.contextWindow = o || window;
        const l = gs(t)
          , u = Lu(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = je;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, Ou(u, this.history)),
        this.removeListeners = hs(Ri(this.contextWindow, "pointermove", this.handlePointerMove), Ri(this.contextWindow, "pointerup", this.handlePointerUp), Ri(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (xg.has(r.overflowX) || xg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , o = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , i = {
            x: o.x - n.x,
            y: o.y - n.y
        };
        i.x === 0 && i.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x,
        this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x,
        this.history[0].y -= i.y),
        this.scrollPositions.set(t, o),
        se.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        ar(this.updatePoint)
    }
}
function Lu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function wg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Ou({point: e}, t) {
    return {
        point: e,
        delta: wg(e, h1(t)),
        offset: wg(e, Jj(t)),
        velocity: eM(t, .1)
    }
}
function Jj(e) {
    return e[0]
}
function h1(e) {
    return e[e.length - 1]
}
function eM(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const o = h1(e);
    for (; n >= 0 && (r = e[n],
    !(o.timestamp - r.timestamp > wt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && o.timestamp - r.timestamp > wt(t) * 2 && (r = e[1]);
    const i = yt(o.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function tM(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? pe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? pe(n, e, r.max) : Math.min(e, n)),
    e
}
function bg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function nM(e, {top: t, left: n, bottom: r, right: o}) {
    return {
        x: bg(e.x, n, o),
        y: bg(e.y, t, r)
    }
}
function Sg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function rM(e, t) {
    return {
        x: Sg(e.x, t.x),
        y: Sg(e.y, t.y)
    }
}
function oM(e, t) {
    let n = .5;
    const r = Ke(e)
      , o = Ke(t);
    return o > r ? n = Zi(t.min, t.max - r, e.min) : r > o && (n = Zi(e.min, e.max - o, t.min)),
    tn(0, 1, n)
}
function iM(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const yd = .35;
function sM(e=yd) {
    return e === !1 ? e = 0 : e === !0 && (e = yd),
    {
        x: Cg(e, "left", "right"),
        y: Cg(e, "top", "bottom")
    }
}
function Cg(e, t, n) {
    return {
        min: Eg(e, t),
        max: Eg(e, n)
    }
}
function Eg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const aM = new WeakMap;
class lM {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ee(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const i = d => {
            n && this.snapToCursor(gs(d).point),
            this.stopAnimation()
        }
          , s = (d, f) => {
            const {drag: h, dragPropagation: x, onDragStart: y} = this.getProps();
            if (h && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = $A(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ht(g => {
                let m = this.getAxisMotionValue(g).get() || 0;
                if (Zt.test(m)) {
                    const {projection: v} = this.visualElement;
                    if (v && v.layout) {
                        const S = v.layout.layoutBox[g];
                        S && (m = Ke(S) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[g] = m
            }
            ),
            y && se.update( () => y(d, f), !1, !0),
            ud(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: x, onDirectionLock: y, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: g} = f;
            if (x && this.currentDirection === null) {
                this.currentDirection = cM(g),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, g),
            this.updateAxis("y", f.point, g),
            this.visualElement.render(),
            w && se.update( () => w(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new f1(t,{
            onSessionStart: i,
            onStart: s,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: d1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , o = n || this.latestPanInfo
          , i = this.isDragging;
        if (this.cancel(),
        !i || !o || !r)
            return;
        const {velocity: s} = o;
        this.startAnimation(s);
        const {onDragEnd: a} = this.getProps();
        a && se.postRender( () => a(r, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: o} = this.getProps();
        if (!r || !Hs(t, o, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = tM(s, this.constraints[t], this.elastic[t])),
        i.set(s)
    }
    resolveConstraints() {
        var i;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout
          , o = this.constraints;
        t && Qr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = nM(r.layoutBox, t) : this.constraints = !1,
        this.elastic = sM(n),
        o !== this.constraints && !Qr(t) && r && this.constraints && !this.hasMutatedConstraints && Ht(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = iM(r.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Qr(t))
            return !1;
        const r = t.current;
        Bo(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const i = yR(r, o.root, this.visualElement.getTransformPagePoint());
        let s = rM(o.layout.layoutBox, i);
        if (n) {
            const a = n(pR(s));
            this.hasMutatedConstraints = !!a,
            a && (s = Lw(a))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = Ht(c => {
            if (!Hs(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6
              , h = o ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...d
            };
            return this.startAxisValueAnimation(c, x)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return ud(this.visualElement, t),
        r.start(Qf(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Ht(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ht(n => {
            const {drag: r} = this.getProps();
            if (!Hs(n, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: s, max: a} = o.layout.layoutBox[n]
                  , l = i.get() || 0;
                i.set(t[n] - pe(s, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Qr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Ht(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                o[s] = oM({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        Ht(s => {
            if (!Hs(s, t, null))
                return;
            const a = this.getAxisMotionValue(s)
              , {min: l, max: u} = this.constraints[s];
            a.set(pe(l, u, o[s]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        aM.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Ri(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && YA(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const o = () => {
            const {dragConstraints: u} = this.getProps();
            Qr(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = uM(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", o);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        se.read(o);
        const a = ns(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (Ht(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            s(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: i=!1, dragElastic: s=yd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function Tg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function uM(e, t, n) {
    const r = Lm(e, Tg(n))
      , o = Lm(t, Tg(n));
    return () => {
        r(),
        o()
    }
}
function Hs(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function cM(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class dM extends dr {
    constructor(t) {
        super(t),
        this.removeGroupControls = xt,
        this.removeListeners = xt,
        this.controls = new lM(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || xt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Iu = e => (t, n) => {
    e && se.update( () => e(t, n), !1, !0)
}
;
class fM extends dr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = xt
    }
    onPointerDown(t) {
        this.session = new f1(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: d1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: Iu(t),
            onStart: Iu(n),
            onMove: Iu(r),
            onEnd: (i, s) => {
                delete this.session,
                o && se.postRender( () => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ri(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Vu = !1;
class hM extends b.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: i} = t;
        i && (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        Vu && i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        fa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: o, isPresent: i} = this.props
          , {projection: s} = r;
        return s && (s.isPresent = i,
        t.layoutDependency !== n && s.setOptions({
            ...s.options,
            layoutDependency: n
        }),
        Vu = !0,
        o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== i && (i ? s.promote() : s.relegate() || se.postRender( () => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Jf.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: o} = t;
        Vu = !0,
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function p1(e) {
    const [t,n] = wj()
      , r = b.useContext(Ax);
    return p.jsx(hM, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: b.useContext(u1),
        isPresent: t,
        safeToRemove: n
    })
}
const pM = {
    pan: {
        Feature: fM
    },
    drag: {
        Feature: dM,
        ProjectionNode: t1,
        MeasureLayout: p1
    }
};
function Pg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n
      , i = r[o];
    i && se.postRender( () => i(t, gs(t)))
}
class mM extends dr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = WA(t, (n, r) => (Pg(this.node, r, "Start"),
        o => Pg(this.node, o, "End"))))
    }
    unmount() {}
}
class gM extends dr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = hs(ns(this.node.current, "focus", () => this.onFocus()), ns(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function kg(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n)
      , i = r[o];
    i && se.postRender( () => i(t, gs(t)))
}
class yM extends dr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = qA(t, (o, i) => (kg(this.node, i, "Start"),
        (s, {success: a}) => kg(this.node, s, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const vd = new WeakMap
  , _u = new WeakMap
  , vM = e => {
    const t = vd.get(e.target);
    t && t(e)
}
  , xM = e => {
    e.forEach(vM)
}
;
function wM({root: e, ...t}) {
    const n = e || document;
    _u.has(n) || _u.set(n, {});
    const r = _u.get(n)
      , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(xM,{
        root: e,
        ...t
    })),
    r[o]
}
function bM(e, t, n) {
    const r = wM(t);
    return vd.set(e, n),
    r.observe(e),
    () => {
        vd.delete(e),
        r.unobserve(e)
    }
}
const SM = {
    some: 0,
    all: 1
};
class CM extends dr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: o="some", once: i} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : SM[o]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            i && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return bM(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(EM(t, n)) && this.startObserver()
    }
    unmount() {}
}
function EM({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const TM = {
    inView: {
        Feature: CM
    },
    tap: {
        Feature: yM
    },
    focus: {
        Feature: gM
    },
    hover: {
        Feature: mM
    }
}
  , PM = {
    layout: {
        ProjectionNode: t1,
        MeasureLayout: p1
    }
}
  , kM = {
    ...qj,
    ...TM,
    ...pM,
    ...PM
}
  , te = Hj(kM, Kj)
  , NM = "/assets/contractors-hero-DpwSEsdG.jpg"
  , AM = () => {
    const e = t => {
        var n;
        (n = document.getElementById(t)) == null || n.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return p.jsx("section", {
        className: "relative bg-background pt-16",
        children: p.jsx("div", {
            className: "container-narrow section-padding !pb-0",
            children: p.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [p.jsxs(te.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .7
                    },
                    children: [p.jsxs("h1", {
                        className: "text-3xl md:text-4xl lg:text-5xl font-display font-800 text-foreground leading-tight mb-6",
                        children: ["We Help Our", " ", p.jsx("span", {
                            className: "text-primary",
                            children: "Preferred Contractors"
                        }), " ", "Access Better Pricing — Transparently"]
                    }), p.jsx("p", {
                        className: "text-lg text-muted-foreground mb-8 max-w-xl",
                        children: "Collective buying power, price tracking, and corporate-level trade accounts — without lock-ins or obligations."
                    }), p.jsxs("div", {
                        className: "flex flex-wrap gap-4 mb-8",
                        children: [p.jsxs("button", {
                            onClick: () => e("contractor-form"),
                            className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity shadow-md",
                            children: ["Apply to Become a Preferred Contractor", p.jsx(_r, {
                                className: "w-5 h-5"
                            })]
                        }), p.jsx("button", {
                            onClick: () => e("info-form"),
                            className: "inline-flex items-center gap-2 border border-border text-foreground font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-muted transition-colors",
                            children: "Request a Call-Back"
                        })]
                    }), p.jsxs("div", {
                        className: "flex flex-wrap gap-5 text-muted-foreground",
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [p.jsx(CE, {
                                className: "w-4 h-4 text-primary"
                            }), p.jsx("span", {
                                className: "text-sm",
                                children: "No lock-ins"
                            })]
                        }), p.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [p.jsx(wl, {
                                className: "w-4 h-4 text-primary"
                            }), p.jsx("span", {
                                className: "text-sm",
                                children: "No discount = no charge"
                            })]
                        }), p.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [p.jsx(wf, {
                                className: "w-4 h-4 text-primary"
                            }), p.jsx("span", {
                                className: "text-sm",
                                children: "Optional price-change alerts"
                            })]
                        })]
                    })]
                }), p.jsx(te.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .7,
                        delay: .2
                    },
                    className: "hidden lg:block",
                    children: p.jsx("img", {
                        src: NM,
                        alt: "Australian trade contractors — electricians, HVAC technicians, and solar installers",
                        className: "rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
                    })
                })]
            })
        })
    })
}
  , RM = [{
    icon: IE,
    title: "Electrical Contractors",
    description: "Access corporate pricing on cables, switchboards, LED lighting, circuit breakers and more across TradeZone, Ideal Electrical, and Voltex.",
    cta: "Apply Now"
}, {
    icon: OE,
    title: "HVAC & Air-Conditioning",
    description: "Better pricing on refrigerants, copper, condensers, and installation materials — without changing how you buy or who you buy from.",
    cta: "Apply Now"
}, {
    icon: ME,
    title: "Solar Installers",
    description: "Aggregated volume across panels, inverters, mounting systems and BOS components — access pricing tiers typically reserved for large operators.",
    cta: "Apply Now"
}]
  , jM = () => {
    var e;
    (e = document.getElementById("contractor-form")) == null || e.scrollIntoView({
        behavior: "smooth"
    })
}
  , MM = () => p.jsx("section", {
    className: "section-padding bg-card",
    id: "who-its-for",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Who It's For"
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Built for independent Australian trade businesses who want access to better pricing without changing how they work."
            })]
        }), p.jsx("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: RM.map( (e, t) => p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "bg-background rounded-xl border border-border p-8 shadow-sm flex flex-col",
                children: [p.jsx("div", {
                    className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5",
                    children: p.jsx(e.icon, {
                        className: "w-6 h-6 text-primary"
                    })
                }), p.jsx("h3", {
                    className: "font-display font-bold text-foreground text-lg mb-3",
                    children: e.title
                }), p.jsx("p", {
                    className: "text-muted-foreground text-sm mb-6 flex-1",
                    children: e.description
                }), p.jsxs("button", {
                    onClick: jM,
                    className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline",
                    children: [e.cta, p.jsx(_r, {
                        className: "w-4 h-4"
                    })]
                })]
            }, t))
        })]
    })
})
  , DM = [{
    icon: bf,
    title: "Join as a Preferred Contractor",
    description: "Independent preferred contractors choose to participate together — no exclusivity, no obligation."
}, {
    icon: AE,
    title: "Order Through Our National Accounts",
    description: "Rather than purchasing separately, preferred contractors may purchase through our national corporate accounts at TradeZone, Ideal Electrical, and Voltex."
}, {
    icon: N0,
    title: "Access Corporate Pricing Tiers",
    description: "Aggregated purchasing volumes may enable access to pricing structures typically available to larger operators, subject to supplier approval and terms."
}, {
    icon: wf,
    title: "Get Price Alerts (Optional)",
    description: "Optional email alerts notify you when prices increase or decrease compared to prior purchases."
}, {
    icon: k0,
    title: "Compare Anytime",
    description: "Pricing can be compared at any time against your original trade accounts. Use Affiliate Warehouse only when it's better."
}]
  , LM = () => p.jsx("section", {
    className: "section-padding bg-background",
    id: "how-it-works",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-16",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "How Affiliate Warehouse Works"
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Five simple steps to better pricing — no contracts, no complexity."
            })]
        }), p.jsx("div", {
            className: "max-w-3xl mx-auto space-y-0",
            children: DM.map( (e, t) => p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .08
                },
                className: "flex gap-5 items-start py-6 border-b border-border last:border-0",
                children: [p.jsx("div", {
                    className: "flex flex-col items-center shrink-0",
                    children: p.jsx("div", {
                        className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                        children: p.jsx("span", {
                            className: "font-display font-bold text-primary text-lg",
                            children: t + 1
                        })
                    })
                }), p.jsxs("div", {
                    children: [p.jsx("h3", {
                        className: "font-display font-bold text-foreground text-lg mb-1",
                        children: e.title
                    }), p.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: e.description
                    })]
                })]
            }, t))
        })]
    })
})
  , OM = [{
    product: "6mm Twin & Earth Cable (100m)",
    before: "$142.00",
    after: "$128.50",
    change: "-9.5%"
}, {
    product: "LED Panel Light 600x600",
    before: "$38.00",
    after: "$34.20",
    change: "-10%"
}, {
    product: "MCB 20A Single Pole",
    before: "$12.50",
    after: "$11.75",
    change: "-6%"
}, {
    product: "Conduit 25mm Heavy Gauge (3m)",
    before: "$8.90",
    after: "$8.90",
    change: "0%"
}]
  , IM = () => p.jsx("section", {
    className: "section-padding bg-card",
    id: "price-tracking",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Improve Visibility Over Repeat Purchases"
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Our system monitors pricing over time so you always know where you stand. Optional notifications keep you ahead of price movements."
            })]
        }), p.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 items-start",
            children: [p.jsx(te.div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                children: p.jsxs("ul", {
                    className: "space-y-5",
                    children: [p.jsxs("li", {
                        className: "flex items-start gap-4",
                        children: [p.jsx("div", {
                            className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",
                            children: p.jsx(k0, {
                                className: "w-5 h-5 text-primary"
                            })
                        }), p.jsxs("div", {
                            children: [p.jsx("h4", {
                                className: "font-semibold text-foreground mb-1",
                                children: "System monitors pricing over time"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Track price trends across your repeat purchases and high-volume items."
                            })]
                        })]
                    }), p.jsxs("li", {
                        className: "flex items-start gap-4",
                        children: [p.jsx("div", {
                            className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",
                            children: p.jsx(wf, {
                                className: "w-5 h-5 text-primary"
                            })
                        }), p.jsxs("div", {
                            children: [p.jsx("h4", {
                                className: "font-semibold text-foreground mb-1",
                                children: "Optional notifications for price movements"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Get email alerts when prices go up or down — you choose what to track."
                            })]
                        })]
                    }), p.jsxs("li", {
                        className: "flex items-start gap-4",
                        children: [p.jsx("div", {
                            className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",
                            children: p.jsx(DE, {
                                className: "w-5 h-5 text-primary"
                            })
                        }), p.jsxs("div", {
                            children: [p.jsx("h4", {
                                className: "font-semibold text-foreground mb-1",
                                children: "Supports quoting accuracy and cost control"
                            }), p.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Adjust your quotes before prices change — protect your margins."
                            })]
                        })]
                    })]
                })
            }), p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    x: 20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                className: "bg-background rounded-xl shadow-lg border border-border overflow-hidden",
                children: [p.jsx("div", {
                    className: "p-4 border-b border-border bg-primary/5",
                    children: p.jsx("h3", {
                        className: "font-display font-bold text-foreground text-sm",
                        children: "Sample Price Comparison"
                    })
                }), p.jsx("div", {
                    className: "overflow-x-auto",
                    children: p.jsxs("table", {
                        className: "w-full text-sm",
                        children: [p.jsx("thead", {
                            children: p.jsxs("tr", {
                                className: "border-b border-border",
                                children: [p.jsx("th", {
                                    className: "text-left p-3 font-semibold text-foreground",
                                    children: "Product"
                                }), p.jsx("th", {
                                    className: "text-right p-3 font-semibold text-foreground",
                                    children: "Trade"
                                }), p.jsx("th", {
                                    className: "text-right p-3 font-semibold text-foreground",
                                    children: "AW"
                                }), p.jsx("th", {
                                    className: "text-right p-3 font-semibold text-foreground",
                                    children: "Saving"
                                })]
                            })
                        }), p.jsx("tbody", {
                            children: OM.map( (e, t) => p.jsxs("tr", {
                                className: "border-b border-border last:border-0",
                                children: [p.jsx("td", {
                                    className: "p-3 text-foreground",
                                    children: e.product
                                }), p.jsx("td", {
                                    className: "p-3 text-right text-muted-foreground",
                                    children: e.before
                                }), p.jsx("td", {
                                    className: "p-3 text-right font-semibold text-foreground",
                                    children: e.after
                                }), p.jsx("td", {
                                    className: `p-3 text-right font-semibold ${e.change !== "0%" ? "text-success" : "text-muted-foreground"}`,
                                    children: e.change
                                })]
                            }, t))
                        })]
                    })
                })]
            })]
        })]
    })
})
  , VM = () => p.jsx("section", {
    className: "section-padding bg-background",
    id: "comparison",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Side-by-Side Comparison. Same Products. Same Suppliers."
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "As a preferred contractor you can simply compare Affiliate Warehouse pricing against your existing trade accounts. No obligation to switch — use our pricing only if it's better."
            })]
        }), p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "max-w-3xl mx-auto bg-card rounded-xl shadow-lg border border-border overflow-hidden",
            children: [p.jsxs("div", {
                className: "grid grid-cols-3 text-center",
                children: [p.jsx("div", {
                    className: "p-6 border-b border-border"
                }), p.jsx("div", {
                    className: "p-6 border-b border-l border-border",
                    children: p.jsx("h3", {
                        className: "font-display font-bold text-foreground text-sm",
                        children: "Your Trade Account"
                    })
                }), p.jsx("div", {
                    className: "p-6 border-b border-l border-border bg-primary/5",
                    children: p.jsx("h3", {
                        className: "font-display font-bold text-primary text-sm",
                        children: "Affiliate Warehouse"
                    })
                })]
            }), [{
                feature: "Same suppliers",
                trade: !0,
                aw: !0
            }, {
                feature: "Same products",
                trade: !0,
                aw: !0
            }, {
                feature: "Corporate pricing tiers",
                trade: !1,
                aw: !0
            }, {
                feature: "Group leverage",
                trade: !1,
                aw: !0
            }, {
                feature: "Price tracking & alerts",
                trade: !1,
                aw: !0
            }, {
                feature: "Aggregated volume discounts",
                trade: !1,
                aw: !0
            }, {
                feature: "No lock-ins",
                trade: !0,
                aw: !0
            }].map( (e, t) => p.jsxs("div", {
                className: "grid grid-cols-3 border-b border-border last:border-0",
                children: [p.jsx("div", {
                    className: "p-4 text-sm font-medium text-foreground",
                    children: e.feature
                }), p.jsx("div", {
                    className: "p-4 flex justify-center border-l border-border",
                    children: e.trade ? p.jsx(Vp, {
                        className: "w-5 h-5 text-success"
                    }) : p.jsx(Va, {
                        className: "w-5 h-5 text-muted-foreground/40"
                    })
                }), p.jsx("div", {
                    className: "p-4 flex justify-center border-l border-border bg-primary/5",
                    children: e.aw ? p.jsx(Vp, {
                        className: "w-5 h-5 text-success"
                    }) : p.jsx(Va, {
                        className: "w-5 h-5 text-muted-foreground/40"
                    })
                })]
            }, t))]
        })]
    })
})
  , _M = () => p.jsx("section", {
    className: "section-padding bg-card",
    id: "fees",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Aligned Incentives. Transparent Structure."
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "We only earn when you save. No discount achieved? No charge. It's that simple."
            })]
        }), p.jsx(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "max-w-3xl mx-auto",
            children: p.jsxs("div", {
                className: "bg-background rounded-xl shadow-lg border border-border p-8 md:p-12",
                children: [p.jsxs("div", {
                    className: "text-center mb-8",
                    children: [p.jsx("p", {
                        className: "text-6xl md:text-7xl font-display font-bold text-primary",
                        children: "1.1%"
                    }), p.jsx("p", {
                        className: "text-muted-foreground mt-2",
                        children: "of verified savings only"
                    })]
                }), p.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6",
                    children: [p.jsxs("div", {
                        className: "text-center p-4",
                        children: [p.jsx(xE, {
                            className: "w-10 h-10 text-primary mx-auto mb-2"
                        }), p.jsx("p", {
                            className: "text-sm font-semibold text-foreground",
                            children: "Discount Achieved"
                        }), p.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "e.g. 10% savings"
                        })]
                    }), p.jsx(_r, {
                        className: "w-6 h-6 text-muted-foreground rotate-90 md:rotate-0 shrink-0"
                    }), p.jsxs("div", {
                        className: "text-center p-4 bg-primary/5 rounded-lg",
                        children: [p.jsx(TE, {
                            className: "w-10 h-10 text-primary mx-auto mb-2"
                        }), p.jsx("p", {
                            className: "text-sm font-semibold text-foreground",
                            children: "AW Fee: 1.1%"
                        }), p.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Of verified savings only"
                        })]
                    }), p.jsx(_r, {
                        className: "w-6 h-6 text-muted-foreground rotate-90 md:rotate-0 shrink-0"
                    }), p.jsxs("div", {
                        className: "text-center p-4 bg-success/10 rounded-lg",
                        children: [p.jsx(wl, {
                            className: "w-10 h-10 text-success mx-auto mb-2"
                        }), p.jsx("p", {
                            className: "text-sm font-semibold text-foreground",
                            children: "You Keep the Rest"
                        }), p.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "8.9% stays with you"
                        })]
                    })]
                }), p.jsx("div", {
                    className: "mt-8 pt-6 border-t border-border text-center",
                    children: p.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Fees are billed monthly, only on verified savings. No savings = no bill."
                    })
                })]
            })
        })]
    })
})
  , FM = [{
    icon: SE,
    title: "No Contracts",
    description: "No binding agreements or long-term commitments."
}, {
    icon: NE,
    title: "No Minimum Spend",
    description: "Buy as much or as little as you need."
}, {
    icon: wl,
    title: "No Exclusivity",
    description: "Keep all your existing accounts and relationships."
}, {
    icon: _r,
    title: "Stop Anytime",
    description: "Leave whenever you want — no penalties, no questions."
}]
  , zM = () => p.jsx("section", {
    className: "section-padding bg-background",
    id: "no-lockins",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "No Contracts. No Minimum Spend. No Exclusivity."
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "You're in full control. Use us when it works for you, stop when it doesn't."
            })]
        }), p.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: FM.map( (e, t) => p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "bg-card rounded-xl border border-border p-6 text-center shadow-sm",
                children: [p.jsx("div", {
                    className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4",
                    children: p.jsx(e.icon, {
                        className: "w-6 h-6 text-primary"
                    })
                }), p.jsx("h3", {
                    className: "font-display font-bold text-foreground mb-2",
                    children: e.title
                }), p.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: e.description
                })]
            }, t))
        })]
    })
});
var Ol = "Collapsible"
  , [BM,m1] = Ko(Ol)
  , [$M,lh] = BM(Ol)
  , g1 = b.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, open: r, defaultOpen: o, disabled: i, onOpenChange: s, ...a} = e
      , [l,u] = yl({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: Ol
    });
    return p.jsx($M, {
        scope: n,
        disabled: i,
        contentId: F0(),
        open: l,
        onOpenToggle: b.useCallback( () => u(c => !c), [u]),
        children: p.jsx(ke.div, {
            "data-state": ch(l),
            "data-disabled": i ? "" : void 0,
            ...a,
            ref: t
        })
    })
}
);
g1.displayName = Ol;
var y1 = "CollapsibleTrigger"
  , v1 = b.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, ...r} = e
      , o = lh(y1, n);
    return p.jsx(ke.button, {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": ch(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: we(e.onClick, o.onOpenToggle)
    })
}
);
v1.displayName = y1;
var uh = "CollapsibleContent"
  , x1 = b.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , o = lh(uh, e.__scopeCollapsible);
    return p.jsx(gl, {
        present: n || o.open,
        children: ({present: i}) => p.jsx(UM, {
            ...r,
            ref: t,
            present: i
        })
    })
}
);
x1.displayName = uh;
var UM = b.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, present: r, children: o, ...i} = e
      , s = lh(uh, n)
      , [a,l] = b.useState(r)
      , u = b.useRef(null)
      , c = ut(t, u)
      , d = b.useRef(0)
      , f = d.current
      , h = b.useRef(0)
      , x = h.current
      , y = s.open || a
      , w = b.useRef(y)
      , g = b.useRef(void 0);
    return b.useEffect( () => {
        const m = requestAnimationFrame( () => w.current = !1);
        return () => cancelAnimationFrame(m)
    }
    , []),
    Jt( () => {
        const m = u.current;
        if (m) {
            g.current = g.current || {
                transitionDuration: m.style.transitionDuration,
                animationName: m.style.animationName
            },
            m.style.transitionDuration = "0s",
            m.style.animationName = "none";
            const v = m.getBoundingClientRect();
            d.current = v.height,
            h.current = v.width,
            w.current || (m.style.transitionDuration = g.current.transitionDuration,
            m.style.animationName = g.current.animationName),
            l(r)
        }
    }
    , [s.open, r]),
    p.jsx(ke.div, {
        "data-state": ch(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        id: s.contentId,
        hidden: !y,
        ...i,
        ref: c,
        style: {
            "--radix-collapsible-content-height": f ? `${f}px` : void 0,
            "--radix-collapsible-content-width": x ? `${x}px` : void 0,
            ...e.style
        },
        children: y && o
    })
}
);
function ch(e) {
    return e ? "open" : "closed"
}
var WM = g1
  , HM = v1
  , KM = x1
  , GM = b.createContext(void 0);
function YM(e) {
    const t = b.useContext(GM);
    return e || t || "ltr"
}
var $t = "Accordion"
  , QM = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [dh,qM,XM] = Jv($t)
  , [Il,jD] = Ko($t, [XM, m1])
  , fh = m1()
  , w1 = R.forwardRef( (e, t) => {
    const {type: n, ...r} = e
      , o = r
      , i = r;
    return p.jsx(dh.Provider, {
        scope: e.__scopeAccordion,
        children: n === "multiple" ? p.jsx(tD, {
            ...i,
            ref: t
        }) : p.jsx(eD, {
            ...o,
            ref: t
        })
    })
}
);
w1.displayName = $t;
var [b1,ZM] = Il($t)
  , [S1,JM] = Il($t, {
    collapsible: !1
})
  , eD = R.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: o= () => {}
    , collapsible: i=!1, ...s} = e
      , [a,l] = yl({
        prop: n,
        defaultProp: r ?? "",
        onChange: o,
        caller: $t
    });
    return p.jsx(b1, {
        scope: e.__scopeAccordion,
        value: R.useMemo( () => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: R.useCallback( () => i && l(""), [i, l]),
        children: p.jsx(S1, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: p.jsx(C1, {
                ...s,
                ref: t
            })
        })
    })
}
)
  , tD = R.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: o= () => {}
    , ...i} = e
      , [s,a] = yl({
        prop: n,
        defaultProp: r ?? [],
        onChange: o,
        caller: $t
    })
      , l = R.useCallback(c => a( (d=[]) => [...d, c]), [a])
      , u = R.useCallback(c => a( (d=[]) => d.filter(f => f !== c)), [a]);
    return p.jsx(b1, {
        scope: e.__scopeAccordion,
        value: s,
        onItemOpen: l,
        onItemClose: u,
        children: p.jsx(S1, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: p.jsx(C1, {
                ...i,
                ref: t
            })
        })
    })
}
)
  , [nD,Vl] = Il($t)
  , C1 = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, disabled: r, dir: o, orientation: i="vertical", ...s} = e
      , a = R.useRef(null)
      , l = ut(a, t)
      , u = qM(n)
      , d = YM(o) === "ltr"
      , f = we(e.onKeyDown, h => {
        var P;
        if (!QM.includes(h.key))
            return;
        const x = h.target
          , y = u().filter(j => {
            var M;
            return !((M = j.ref.current) != null && M.disabled)
        }
        )
          , w = y.findIndex(j => j.ref.current === x)
          , g = y.length;
        if (w === -1)
            return;
        h.preventDefault();
        let m = w;
        const v = 0
          , S = g - 1
          , C = () => {
            m = w + 1,
            m > S && (m = v)
        }
          , E = () => {
            m = w - 1,
            m < v && (m = S)
        }
        ;
        switch (h.key) {
        case "Home":
            m = v;
            break;
        case "End":
            m = S;
            break;
        case "ArrowRight":
            i === "horizontal" && (d ? C() : E());
            break;
        case "ArrowDown":
            i === "vertical" && C();
            break;
        case "ArrowLeft":
            i === "horizontal" && (d ? E() : C());
            break;
        case "ArrowUp":
            i === "vertical" && E();
            break
        }
        const T = m % g;
        (P = y[T].ref.current) == null || P.focus()
    }
    );
    return p.jsx(nD, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: p.jsx(dh.Slot, {
            scope: n,
            children: p.jsx(ke.div, {
                ...s,
                "data-orientation": i,
                ref: l,
                onKeyDown: r ? void 0 : f
            })
        })
    })
}
)
  , Ja = "AccordionItem"
  , [rD,hh] = Il(Ja)
  , E1 = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, value: r, ...o} = e
      , i = Vl(Ja, n)
      , s = ZM(Ja, n)
      , a = fh(n)
      , l = F0()
      , u = r && s.value.includes(r) || !1
      , c = i.disabled || e.disabled;
    return p.jsx(rD, {
        scope: n,
        open: u,
        disabled: c,
        triggerId: l,
        children: p.jsx(WM, {
            "data-orientation": i.orientation,
            "data-state": R1(u),
            ...a,
            ...o,
            ref: t,
            disabled: c,
            open: u,
            onOpenChange: d => {
                d ? s.onItemOpen(r) : s.onItemClose(r)
            }
        })
    })
}
);
E1.displayName = Ja;
var T1 = "AccordionHeader"
  , P1 = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = Vl($t, n)
      , i = hh(T1, n);
    return p.jsx(ke.h3, {
        "data-orientation": o.orientation,
        "data-state": R1(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
P1.displayName = T1;
var xd = "AccordionTrigger"
  , k1 = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = Vl($t, n)
      , i = hh(xd, n)
      , s = JM(xd, n)
      , a = fh(n);
    return p.jsx(dh.ItemSlot, {
        scope: n,
        children: p.jsx(HM, {
            "aria-disabled": i.open && !s.collapsible || void 0,
            "data-orientation": o.orientation,
            id: i.triggerId,
            ...a,
            ...r,
            ref: t
        })
    })
}
);
k1.displayName = xd;
var N1 = "AccordionContent"
  , A1 = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = Vl($t, n)
      , i = hh(N1, n)
      , s = fh(n);
    return p.jsx(KM, {
        role: "region",
        "aria-labelledby": i.triggerId,
        "data-orientation": o.orientation,
        ...s,
        ...r,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
A1.displayName = N1;
function R1(e) {
    return e ? "open" : "closed"
}
var oD = w1
  , iD = E1
  , sD = P1
  , j1 = k1
  , M1 = A1;
const aD = oD
  , D1 = b.forwardRef( ({className: e, ...t}, n) => p.jsx(iD, {
    ref: n,
    className: nn("border-b", e),
    ...t
}));
D1.displayName = "AccordionItem";
const L1 = b.forwardRef( ({className: e, children: t, ...n}, r) => p.jsx(sD, {
    className: "flex",
    children: p.jsxs(j1, {
        ref: r,
        className: nn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, p.jsx(vE, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
L1.displayName = j1.displayName;
const O1 = b.forwardRef( ({className: e, children: t, ...n}, r) => p.jsx(M1, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: p.jsx("div", {
        className: nn("pb-4 pt-0", e),
        children: t
    })
}));
O1.displayName = M1.displayName;
const lD = [{
    q: "What wholesaler accounts do I get access to?",
    a: "Currently, Affiliate Warehouse provides access to TradeZone, Ideal Electrical, and Voltex. We're continually expanding our network of wholesaler partnerships."
}, {
    q: "How does Affiliate Warehouse make money?",
    a: "We take 1.1% of verified discounts only. If no discount is achieved on a product, there is no charge. Our incentives are fully aligned with yours."
}, {
    q: "Am I locked in?",
    a: "No. There are no contracts, no minimum spend requirements, and no exclusivity. You can stop using the service at any time with no penalties."
}, {
    q: "How do I know pricing is actually improving?",
    a: "You can compare Affiliate Warehouse pricing against your original trade accounts at any time. You only use our pricing when it's genuinely better."
}, {
    q: "Is this compliant with supplier systems?",
    a: "Yes. All purchases are processed through the same backend wholesaler systems — fully traceable, job-coded, and operating within standard terms and conditions."
}, {
    q: "What if it stops being useful?",
    a: "Simply stop using it. There are no exit fees, no penalties, and no obligations. Your existing trade accounts remain unaffected."
}, {
    q: "How are better prices achieved?",
    a: "By aggregating purchasing volume across our independent preferred contractors nationally, we can access corporate-level pricing tiers that individual businesses typically can't reach alone."
}]
  , uD = () => p.jsx("section", {
    className: "section-padding bg-background",
    id: "faq",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsx(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Frequently Asked Questions"
            })
        }), p.jsx(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "max-w-3xl mx-auto",
            children: p.jsx(aD, {
                type: "single",
                collapsible: !0,
                className: "space-y-3",
                children: lD.map( (e, t) => p.jsxs(D1, {
                    value: `faq-${t}`,
                    className: "bg-card rounded-lg border border-border px-6 shadow-sm",
                    children: [p.jsx(L1, {
                        className: "text-left font-semibold text-foreground hover:no-underline",
                        children: e.q
                    }), p.jsx(O1, {
                        className: "text-muted-foreground",
                        children: e.a
                    })]
                }, t))
            })
        })]
    })
})
  , cD = () => p.jsx("section", {
    className: "section-padding bg-card",
    id: "wholesaler-alignment",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Built to Operate Within Existing Wholesaler Systems"
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Affiliate Warehouse operates within existing wholesaler systems and terms. Pricing and availability are set solely by wholesalers. No disruption — just collaborative efficiency."
            })]
        }), p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "max-w-3xl mx-auto",
            children: [p.jsxs("div", {
                className: "flex flex-col md:flex-row items-center justify-center gap-4 mb-12",
                children: [p.jsxs("div", {
                    className: "bg-background rounded-xl border border-border p-6 text-center shadow-sm flex-1",
                    children: [p.jsx(bf, {
                        className: "w-10 h-10 text-primary mx-auto mb-3"
                    }), p.jsx("h3", {
                        className: "font-display font-bold text-foreground text-sm",
                        children: "Preferred Contractors"
                    }), p.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Voluntary participation"
                    })]
                }), p.jsx(_r, {
                    className: "w-6 h-6 text-primary rotate-90 md:rotate-0 shrink-0"
                }), p.jsxs("div", {
                    className: "bg-primary/5 rounded-xl border border-primary/20 p-6 text-center shadow-sm flex-1",
                    children: [p.jsx(yE, {
                        className: "w-10 h-10 text-primary mx-auto mb-3"
                    }), p.jsx("h3", {
                        className: "font-display font-bold text-foreground text-sm",
                        children: "National Buying Pool"
                    }), p.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Aggregated volume"
                    })]
                }), p.jsx(_r, {
                    className: "w-6 h-6 text-primary rotate-90 md:rotate-0 shrink-0"
                }), p.jsxs("div", {
                    className: "bg-background rounded-xl border border-border p-6 text-center shadow-sm flex-1",
                    children: [p.jsx(jE, {
                        className: "w-10 h-10 text-primary mx-auto mb-3"
                    }), p.jsx("h3", {
                        className: "font-display font-bold text-foreground text-sm",
                        children: "Wholesalers"
                    }), p.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Existing systems & terms"
                    })]
                })]
            }), p.jsx("div", {
                className: "grid sm:grid-cols-2 gap-4",
                children: ["Job-coded, traceable, processed through normal wholesaler channels", "No reselling or alteration of supplier terms", "Participation is voluntary and non-exclusive", "Collaborative efficiency — not disruption"].map( (e, t) => p.jsxs("div", {
                    className: "flex items-start gap-3 bg-background rounded-lg border border-border p-4",
                    children: [p.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-primary mt-2 shrink-0"
                    }), p.jsx("p", {
                        className: "text-sm text-foreground",
                        children: e
                    })]
                }, t))
            })]
        })]
    })
})
  , dD = () => p.jsx("section", {
    className: "section-padding bg-background",
    id: "collective-buying",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Independent Contractors. Collective Efficiency."
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Independent preferred contractors choosing to buy together — improved efficiency, visibility, and access to pricing tiers via volume and consistency."
            })]
        }), p.jsx("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: [{
                icon: bf,
                title: "Strength in Numbers",
                description: "Hundreds of independent contractors pool their purchasing volume — without losing independence."
            }, {
                icon: N0,
                title: "Corporate Pricing Tiers",
                description: "Combined volume unlocks pricing tiers that individual businesses can't reach alone."
            }, {
                icon: bE,
                title: "Benefits Everyone",
                description: "Contractors save money, wholesalers get reliable volume, and the industry benefits from improved efficiency."
            }].map( (e, t) => p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "bg-card rounded-xl border border-border p-8 text-center shadow-sm",
                children: [p.jsx("div", {
                    className: "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4",
                    children: p.jsx(e.icon, {
                        className: "w-6 h-6 text-primary"
                    })
                }), p.jsx("h3", {
                    className: "font-display font-bold text-foreground text-lg mb-3",
                    children: e.title
                }), p.jsx("p", {
                    className: "text-muted-foreground text-sm",
                    children: e.description
                })]
            }, t))
        })]
    })
})
  , fD = [{
    icon: kE,
    title: "Procurement Support & Price-Monitoring",
    description: "Transparent system for tracking and comparing pricing across wholesalers."
}, {
    icon: wE,
    title: "No Resale or Term Alteration",
    description: "All transactions follow standard wholesaler terms and conditions."
}, {
    icon: LE,
    title: "Voluntary Participation",
    description: "Contractors choose to participate — no pressure, no obligation."
}, {
    icon: PE,
    title: "Transparent Comparison Encouraged",
    description: "We encourage comparing AW pricing against your own accounts at any time."
}]
  , hD = () => p.jsx("section", {
    className: "section-padding bg-card",
    id: "compliance",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Procurement Support & Price-Monitoring Service"
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Built on transparency, operating within industry standards."
            })]
        }), p.jsx("div", {
            className: "grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto",
            children: fD.map( (e, t) => p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "flex items-start gap-4 bg-background rounded-xl border border-border p-6 shadow-sm",
                children: [p.jsx("div", {
                    className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",
                    children: p.jsx(e.icon, {
                        className: "w-5 h-5 text-primary"
                    })
                }), p.jsxs("div", {
                    children: [p.jsx("h3", {
                        className: "font-display font-bold text-foreground mb-1",
                        children: e.title
                    }), p.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: e.description
                    })]
                })]
            }, t))
        })]
    })
})
  , pD = () => p.jsx("section", {
    className: "section-padding bg-muted/50",
    id: "legal",
    children: p.jsx("div", {
        className: "container-narrow",
        children: p.jsxs(te.div, {
            initial: {
                opacity: 0
            },
            whileInView: {
                opacity: 1
            },
            viewport: {
                once: !0
            },
            className: "max-w-3xl mx-auto",
            children: [p.jsx("h2", {
                className: "text-xl font-display font-bold text-foreground mb-4",
                children: "Legal Disclaimer"
            }), p.jsxs("div", {
                className: "space-y-3 text-sm text-muted-foreground",
                children: [p.jsx("p", {
                    children: "Pricing and discounts are set by wholesalers and are subject to change without notice."
                }), p.jsx("p", {
                    children: "No guaranteed savings on all products — savings vary by product, supplier, and market conditions."
                }), p.jsx("p", {
                    children: "Larger or high-volume items typically see stronger results than smaller purchases."
                }), p.jsx("p", {
                    children: "Fees only apply where verifiable savings occur — no discount means no charge."
                }), p.jsx("p", {
                    children: "Participation is voluntary, non-exclusive, and your existing trade accounts remain unaffected."
                })]
            })]
        })
    })
})
  , mD = [{
    name: "James T.",
    role: "Electrician, Sydney",
    text: "Switched to AW pricing on my last two jobs and saved over $800. No hassle, no strings attached.",
    rating: 5
}, {
    name: "Sarah M.",
    role: "HVAC Contractor, Melbourne",
    text: "The price tracking alerts are brilliant. I updated a quote before prices went up and kept my margin intact.",
    rating: 5
}, {
    name: "Darren K.",
    role: "Solar Installer, Brisbane",
    text: "I was skeptical, but the side-by-side comparison sold me. Same products, same suppliers, genuinely better pricing.",
    rating: 5
}]
  , gD = () => p.jsx("section", {
    className: "section-padding bg-background",
    id: "testimonials",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsx(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "What Contractors Say"
            })
        }), p.jsx("div", {
            className: "grid md:grid-cols-3 gap-6",
            children: mD.map( (e, t) => p.jsxs(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "bg-card rounded-xl border border-border p-6 shadow-sm",
                children: [p.jsx("div", {
                    className: "flex gap-1 mb-4",
                    children: Array.from({
                        length: e.rating
                    }).map( (n, r) => p.jsx(RE, {
                        className: "w-4 h-4 fill-accent text-accent"
                    }, r))
                }), p.jsxs("p", {
                    className: "text-foreground text-sm mb-4 leading-relaxed",
                    children: ['"', e.text, '"']
                }), p.jsxs("div", {
                    children: [p.jsx("p", {
                        className: "font-semibold text-foreground text-sm",
                        children: e.name
                    }), p.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: e.role
                    })]
                })]
            }, t))
        })]
    })
})
  , Fu = ({id: e, title: t, subtitle: n, fields: r, successMessage: o, microcopy: i, highlighted: s}) => {
    const [a,l] = b.useState(!1)
      , [u,c] = b.useState({})
      , d = f => {
        f.preventDefault(),
        l(!0)
    }
    ;
    return a ? p.jsxs("div", {
        className: `rounded-xl border border-border p-8 text-center h-full flex flex-col items-center justify-center ${s ? "bg-primary/5" : "bg-card"}`,
        children: [p.jsx(wl, {
            className: "w-12 h-12 text-success mx-auto mb-4"
        }), p.jsx("p", {
            className: "text-foreground font-semibold text-sm leading-relaxed",
            children: o
        })]
    }) : p.jsxs("div", {
        id: e,
        className: `rounded-xl border p-8 shadow-sm h-full flex flex-col ${s ? "border-primary/30 bg-primary/5" : "border-border bg-card"}`,
        children: [p.jsx("h3", {
            className: "font-display font-bold text-xl text-foreground mb-2",
            children: t
        }), p.jsx("p", {
            className: "text-sm text-muted-foreground mb-6",
            children: n
        }), p.jsxs("form", {
            onSubmit: d,
            className: "space-y-4 flex-1 flex flex-col",
            children: [p.jsx("div", {
                className: "space-y-4 flex-1",
                children: r.map(f => p.jsxs("div", {
                    children: [p.jsxs("label", {
                        htmlFor: `${e}-${f.name}`,
                        className: "block text-sm font-medium text-foreground mb-1",
                        children: [f.label, f.required && p.jsx("span", {
                            className: "text-destructive ml-1",
                            children: "*"
                        })]
                    }), f.type === "textarea" ? p.jsx("textarea", {
                        id: `${e}-${f.name}`,
                        required: f.required,
                        placeholder: f.placeholder,
                        rows: 3,
                        className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                        onChange: h => c({
                            ...u,
                            [f.name]: h.target.value
                        })
                    }) : p.jsx("input", {
                        id: `${e}-${f.name}`,
                        type: f.type,
                        required: f.required,
                        placeholder: f.placeholder,
                        className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                        onChange: h => c({
                            ...u,
                            [f.name]: h.target.value
                        })
                    })]
                }, f.name))
            }), p.jsx("button", {
                type: "submit",
                className: "w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity",
                children: "Submit"
            })]
        }), p.jsx("div", {
            className: "mt-4 space-y-1",
            children: i.map( (f, h) => p.jsx("p", {
                className: "text-xs text-muted-foreground text-center",
                children: f
            }, h))
        })]
    })
}
  , yD = () => p.jsx("section", {
    className: "section-padding bg-card",
    id: "forms",
    children: p.jsxs("div", {
        className: "container-narrow",
        children: [p.jsxs(te.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-12",
            children: [p.jsx("h2", {
                className: "text-3xl md:text-4xl font-display font-bold text-foreground mb-4",
                children: "Get Started"
            }), p.jsx("p", {
                className: "text-muted-foreground text-lg",
                children: "Choose the option that fits you best."
            })]
        }), p.jsxs("div", {
            className: "grid lg:grid-cols-3 gap-8",
            children: [p.jsx(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: 0
                },
                children: p.jsx(Fu, {
                    id: "contractor-form",
                    title: "Preferred Contractor Application",
                    subtitle: "Fill in your details to become a Preferred Contractor.",
                    highlighted: !0,
                    fields: [{
                        name: "business",
                        label: "Business Name",
                        type: "text",
                        required: !0,
                        placeholder: "Your business name"
                    }, {
                        name: "contact",
                        label: "Contact Name",
                        type: "text",
                        required: !0,
                        placeholder: "Full name"
                    }, {
                        name: "mobile",
                        label: "Mobile",
                        type: "tel",
                        required: !0,
                        placeholder: "0400 000 000"
                    }, {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: !0,
                        placeholder: "you@business.com"
                    }],
                    successMessage: "Thanks — your details have been received. We'll review your application and call you at your scheduled time to walk through the Affiliate Warehouse onboarding process and answer any questions.",
                    microcopy: ["No discount, no charge.", "Compare pricing with your existing accounts anytime."]
                })
            }), p.jsx(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .1
                },
                children: p.jsx(Fu, {
                    id: "info-form",
                    title: "Information / Call-Back",
                    subtitle: "Want to learn more? Book a quick call with our team.",
                    fields: [{
                        name: "name",
                        label: "Name",
                        type: "text",
                        required: !0,
                        placeholder: "Full name"
                    }, {
                        name: "business",
                        label: "Business",
                        type: "text",
                        required: !0,
                        placeholder: "Business name"
                    }, {
                        name: "phone",
                        label: "Phone",
                        type: "tel",
                        required: !0,
                        placeholder: "0400 000 000"
                    }, {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: !0,
                        placeholder: "you@business.com"
                    }],
                    successMessage: "Thanks for booking in. We'll review your details and give you a call at your selected time to walk you through how Affiliate Warehouse works and answer any questions.",
                    microcopy: ["No discount, no charge.", "You're free to compare pricing against your current suppliers."]
                })
            }), p.jsx(te.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .2
                },
                children: p.jsx(Fu, {
                    id: "wholesaler-form",
                    title: "Wholesaler Expression of Interest",
                    subtitle: "Interested in partnering with Affiliate Warehouse?",
                    fields: [{
                        name: "company",
                        label: "Company Name",
                        type: "text",
                        required: !0,
                        placeholder: "Company name"
                    }, {
                        name: "contact",
                        label: "Contact Name",
                        type: "text",
                        required: !0,
                        placeholder: "Full name"
                    }, {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: !0,
                        placeholder: "contact@company.com"
                    }, {
                        name: "phone",
                        label: "Phone",
                        type: "tel",
                        required: !0,
                        placeholder: "0400 000 000"
                    }, {
                        name: "message",
                        label: "Message (Optional)",
                        type: "textarea",
                        placeholder: "Tell us about your interest..."
                    }],
                    successMessage: "Thanks — we've received your details. We'll review the information provided and call you at your scheduled time to discuss the Affiliate Warehouse model and next steps.",
                    microcopy: ["We'll be in touch within 2 business days."]
                })
            })]
        })]
    })
})
  , vD = () => p.jsx("footer", {
    className: "bg-primary section-padding !py-10",
    children: p.jsx("div", {
        className: "container-narrow",
        children: p.jsxs("div", {
            className: "flex flex-col md:flex-row items-center justify-between gap-4",
            children: [p.jsx("p", {
                className: "font-display font-bold text-lg text-primary-foreground",
                children: "Affiliate Warehouse"
            }), p.jsxs("p", {
                className: "text-sm text-primary-foreground/50",
                children: ["© ", new Date().getFullYear(), " Affiliate Warehouse. All rights reserved."]
            })]
        })
    })
})
  , xD = () => p.jsxs(p.Fragment, {
    children: [p.jsx(I2, {}), p.jsxs("main", {
        children: [p.jsx(AM, {}), p.jsx(MM, {}), p.jsx(LM, {}), p.jsx(IM, {}), p.jsx(VM, {}), p.jsx(_M, {}), p.jsx(zM, {}), p.jsx(cD, {}), p.jsx(dD, {}), p.jsx(hD, {}), p.jsx(gD, {}), p.jsx(uD, {}), p.jsx(yD, {}), p.jsx(pD, {})]
    }), p.jsx(vD, {})]
})
  , wD = () => {
    const e = Nx();
    return b.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    p.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: p.jsxs("div", {
            className: "text-center",
            children: [p.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), p.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), p.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , bD = new Yk
  , SD = () => p.jsx(qk, {
    client: bD,
    children: p.jsxs(Ek, {
        children: [p.jsx(vT, {}), p.jsx(qT, {}), p.jsx(O2, {
            children: p.jsxs(M2, {
                children: [p.jsx(Yc, {
                    path: "/",
                    element: p.jsx(xD, {})
                }), p.jsx(Yc, {
                    path: "*",
                    element: p.jsx(wD, {})
                })]
            })
        })]
    })
});
qv(document.getElementById("root")).render(p.jsx(SD, {}));
