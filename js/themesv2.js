(()=>{
    var e, n, t, o, l, a, i, s, r = document.getElementById("satuMomen"), c = document.documentElement.lang, d = document.getElementById("loader");
    d && (window.onload = d.style.display = "none");
    var u = r.dataset.guest
      
   
    var y = r.dataset.group
      , p = document.getElementById("groupNameSlot");
    y && p && (p.innerHTML = y);
    var v = document.getElementById("btnMusic")
      , g = document.getElementById("music") ? document.getElementById("music") : null
      , f = document.querySelector(".sc-music > iframe")
      , w = f ? SC.Widget(f) : null
      , h = !1;
    playMusic = function(e) {
        g && (e ? (g.play(),
        h = !0) : (h ? g.pause() : g.play(),
        h = !h)),
        w && SC.Widget.Events.READY && (h ? (w.pause(),
        h = !1) : (w.play(),
        h = !0)),
        v && (h ? v.classList.add("playing") : v.classList.remove("playing"))
    }
    ,
    g && (g.onplaying = function() {
        h = !0,
        v.classList.add("playing")
    }
    ,
    g.onpause = function() {
        h = !1,
        v.classList.remove("playing")
    }
    ),
    showGift = function(e) {
        for (var n = 0; n < E.length; n++)
            n != e && (L[n].style.display = "none");
        L[e].style.display = "inherit",
        ve()
    }
    ;
    for (var L = document.getElementsByClassName("gift-container"), b = 0; b < L.length; b++)
        L[b].style.display = "none";
    for (var E = document.getElementsByClassName("btn-gift"), x = function(e) {
        E[e].onclick = function() {
            showGift(e)
        }
    }, B = 0; B < E.length; B++)
        x(B);
    var M = document.getElementById("lightboxWrapper")
      , T = document.getElementById("lightboxCloseBtn")
      , I = document.getElementById("lightboxNextBtn")
      , H = document.getElementById("lightboxPrevBtn")
      , S = document.querySelector("#lightboxWrapper > .lightbox-list")
      , q = document.getElementsByClassName("lightbox");
    showLightbox = function(e) {
        M.classList.add("show"),
        S.innerHTML = '<div class="lightbox-inner"><img src="'.concat(q[e].src, '"></div>'),
        I.dataset.index = e,
        H.dataset.index = e,
        ve(),
        window.removeEventListener(se[K].down, ue, !1)
    }
    ,
    I.onclick = function() {
        var e = parseInt(I.dataset.index) + 1;
        e >= q.length && (e = 0),
        showLightbox(e)
    }
    ,
    H.onclick = function() {
        var e = parseInt(H.dataset.index) - 1;
        -1 == e && (e = q.length - 1),
        showLightbox(e)
    }
    ,
    closeLightbox = function() {
        M.classList.remove("show"),
        S.innerHTML = "",
        window.addEventListener(se[K].down, ue, !1)
    }
    ;
    for (var k = function(e) {
        q[e].onclick = function() {
            showLightbox(e)
        }
    }, C = 0; C < q.length; C++)
        k(C);
    T.onclick = function() {
        closeLightbox()
    }
    ;
    var _ = document.getElementsByTagName("BODY")[0]
      , N = document.getElementById("modalOverlay");
    showModal = function(e) {
        _.classList.add("modal-open"),
        N.classList.add("show"),
        N.style = "display: block;",
        e.classList.add("show"),
        e.style = "display: block;",
        ve(),
        window.removeEventListener(se[K].down, ue, !1)
    }
    ,
    closeModal = function(e) {
        _.classList.remove("modal-open"),
        N.classList.remove("show"),
        N.style = "display: none;",
        e.classList.remove("show"),
        e.style = "display: none;",
        window.addEventListener(se[K].down, ue, !1)
    }
    ;
    // var A = document.getElementsByClassName("countdown-wrapper");
    // displayCountdown = function(e) {
    //     var n = new Date(e.dataset.datetime).getTime()
    //       , t = e.querySelector(".countdown > .day > .number")
    //       , o = e.querySelector(".countdown > .hour > .number")
    //       , l = e.querySelector(".countdown > .minute > .number")
    //       , a = e.querySelector(".countdown > .second > .number")
    //       , i = setInterval((function() {
    //         var e = (new Date).getTime()
    //           , s = n - e
    //           , r = Math.floor(s / 864e5)
    //           , c = Math.floor(s % 864e5 / 36e5)
    //           , d = Math.floor(s % 36e5 / 6e4)
    //           , u = Math.floor(s % 6e4 / 1e3);
    //         t.innerHTML = r,
    //         o.innerHTML = c,
    //         l.innerHTML = d,
    //         a.innerHTML = u,
    //         s < 0 && (clearInterval(i),
    //         t.innerHTML = "00",
    //         o.innerHTML = "00",
    //         l.innerHTML = "00",
    //         a.innerHTML = "00")
    //     }
    //     ), 1e3)
    // }
    // ;
    // for (var W = 0; W < A.length; W++)
    //     displayCountdown(A[W]);
    for (var D = document.getElementsByClassName("btn-rsvp"), F = null !== (e = document.querySelector(".rsvp-placeholder")) && void 0 !== e ? e : null, O = null !== (n = document.querySelector(".rsvp-form")) && void 0 !== n ? n : null, R = 0; R < D.length; R++)
        F ? D[R].style.display = "none" : D[R].onclick = function() {
            showModal(rsvpModal)
        }
        ;
    O && F && (F.innerHTML = "",
    F.appendChild(O));
    // var Y = null !== (t = document.getElementById("app")) && void 0 !== t ? t : null
    //   , P = null !== (o = document.getElementById("illegal")) && void 0 !== o ? o : null
    //   , U = null !== (l = document.getElementById("waterMark")) && void 0 !== l ? l : null
    //   , j = null !== (a = document.querySelector(".watermark-placeholder")) && void 0 !== a ? a : null
    //   , G = null !== (i = document.querySelector(".no-watermark")) && void 0 !== i ? i : null
    //   , z = null !== (s = document.querySelector(".watermark")) && void 0 !== s ? s : null;
    //   setTimeout((function() {
    //     U && j && null == G ? (U.style.display = "inherit",
    //     j.innerHTML = "",
    //     j.appendChild(U),
    //     P.style.display = "none") : z && null == j ? (Y && (Y.innerHTML = ""),
    //     P.style.display = "flex") : (U && (U.style.display = "none"),
    //     P.style.display = "none")
    // }
    // ), 300);
    for (var X = document.getElementsByClassName("account-number"), Z = 0; Z < X.length; Z++)
        X[Z].innerHTML && ("id" == c ? X[Z].insertAdjacentHTML("afterend", "<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(X[Z].innerText, "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px'>Salin Rekening</button>")) : X[Z].insertAdjacentHTML("afterend", "<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='".concat(X[Z].innerText, "' onclick='copyText(event)' style='font-family: sans-serif; border-radius: 4px'>Copy to Clipboard</button>")));
    copyText = function(e) {
        var n = document.createElement("input");
        n.autofocus = !1,
        n.value = e.target.dataset.text,
        document.body.appendChild(n),
        n.select(),
        document.execCommand("copy"),
        n.remove(),
        e.target.innerHTML = "id" == c ? "Berhasil Disalin" : "Copied to Clipboard"
    }
    ;
    var J = function() {
        document.getElementById("workspace-container");
        var e = document.querySelector(".canvas")
          , n = document.getElementById("panZoom")
          , t = Number(window.screen.width > 430 ? 414 : window.screen.width)
          , o = Number(window.innerHeight > 932 ? 736 : window.innerHeight) / t * 9
          , l = Number(window.innerHeight) / 736
          , a = Number(window.screen.width) / 414
          , i = l < a ? l : a
          , s = 46 * (o < 16 || window.screen.width > 430 ? 16 : o);
        e.style.height = "".concat(s, "px"),
        r.style.height = "".concat(s, "px"),
        n.style.transform = "scale(".concat(i, ") translate(0px,0px)")
    };
    J(),
    window.addEventListener("resize", J, !1);
    var K = ""
      , Q = function() {
        try {
            return document.createEvent("TouchEvent"),
            K = "touch",
            !0
        } catch (e) {
            return K = "mouse",
            !1
        }
    };
    Q();
    var V = document.querySelectorAll(".satumomen_slide")
      , $ = document.querySelectorAll(".satumomen_menu_item")
      , ee = document.getElementById("smMenu")
      , ne = document.querySelector(".satumomen_menu_list")
      , te = $.length < 5 ? ee.offsetWidth / $.length : ee.offsetWidth / 5
      , oe = 0
      , le = function() {
        Array.from(V).forEach((function(e) {
            e.style.display = "none"
        }
        )),
        Array.from($).forEach((function(e) {
            e.style.maxWidth = "".concat(te, "px"),
            e.classList.remove("active"),
            e.onclick = function(n) {
                n.cancelable && n.preventDefault(),
                oe = Array.from($).indexOf(e),
                ie(oe)
            }
        }
        )),
        V[oe].style.display = "",
        $[oe].classList.add("active")
    };
    le();
    var ae = function() {
        le(),
        oe = oe < V.length - 1 ? oe + 1 : 0,
        ie(oe, !1),
        de()
    }
      , ie = function(e) {
        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        le(),
        n && ve();
        var t = ne.offsetWidth - ne.scrollWidth;
        V[e].style.display = "",
        $[e].classList.add("active");
        var o = ee.offsetWidth / 2 - te / 2 - $[e].offsetLeft;
        ne.style.transform = "translateX(".concat(o > 0 ? 0 : o < t ? t : o, "px)"),
        oe = e
    }
      , se = {
        mouse: {
            down: "mousedown",
            move: "mousemove",
            up: "mouseup"
        },
        touch: {
            down: "touchstart",
            move: "touchmove",
            up: "touchend"
        }
    }
      , re = 0
      , ce = function(e) {
        var n = Q() ? e.touches[0].clientY : e.clientY;
        re - 50 > n && (ve(),
        ae()),
        re < n - 50 && (le(),
        ie(oe = oe > 0 ? oe - 1 : oe),
        de(),
        ve())
    }
      , de = function(e) {
        window.removeEventListener(se[K].move, ce, !1)
    }
      , ue = function(e) {
        e.cancelable && e.preventDefault(),
        re = Q() ? e.touches[0].clientY : e.clientY,
        window.addEventListener(se[K].up, de, !1),
        window.addEventListener(se[K].move, ce, !1)
    }
      , me = document.getElementById("btnAutoplay")
      , ye = !1
      , pe = function() {
        ye = !0,
        autoPlay = setInterval((function() {
            ae()
        }
        ), 1e4),
        me.classList.add("playing")
    }
      , ve = function() {
        ye && (ye = !1,
        clearInterval(autoPlay),
        me.classList.remove("playing"))
    };
    me.addEventListener("click", (function(e) {
        e.cancelable && e.preventDefault(),
        ye ? ve() : ye || ge ? pe() : fe()
    }
    ), !1),
    openFullScreen = function() {
        document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
    }
    ;
    for (var ge = !1, fe = function(e) {
        ge = !0,
        playMusic(!0),
        pe(),
        -1 != navigator.userAgent.indexOf("UCBrowser") || -1 != navigator.userAgent.indexOf("MiuiBrowser") || navigator.userAgent.includes("OppoBrowser") || navigator.userAgent.includes("HeyTapBrowser") ? console.log("Browser not support portrait full screen mode") : openFullScreen(),
        document.querySelector(".not-open").classList.remove("not-open"),
        window.addEventListener(se[K].down, ue, !1),
        ae()
    }, we = document.getElementsByClassName("btn-open-invitation"), he = 0; he < we.length; he++)
        we[he].addEventListener("click", fe, !1)
}
)();
