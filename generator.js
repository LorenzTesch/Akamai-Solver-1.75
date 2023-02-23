"use strict";

const targetUrl = "https://www.nh-hotels.com/booking/step1-rates?fini=12/02/2022&fout=13/02/2022&nadults1=2&nchilds1=0&nbabies1=0&hotelId=ESBA.PODIU&gvoucher=false";

const navigator = {
  "permissions": {
    "geolocation": 1,
    "notifications": 1,
    "push": 1,
    "midi": 1,
    "camera": 1,
    "microphone": 1,
    "speaker": 1,
    "device-info": 1,
    "background-sync": 1,
    "bluetooth": 1,
    "persistent-storage": 1,
    "ambient-light-sensor": 1,
    "accelerometer": 1,
    "gyroscope": 1,
    "magnetometer": 1,
    "clipboard": 1,
    "accessibility-events": 1,
    "clipboard-read": 1,
    "clipboard-write": 1,
    "payment-handler": 1
  },
  "mimeTypes": {},
  "plugins": {length: 0}, // is of type PluginArray
  "getGamepads": function(){},
  "registerProtocolHandler": function(){},
  "requestMediaKeySystemAccess": function () {},
  "sendBeacon": function () {},
  "serviceWorker": function () {},
  "doNotTrack": "unspecified",
  "maxTouchPoints": 0,
  "mediaCapabilities": {},
  "oscpu": "Windows NT 10.0; Win64; x64",
  "vendor": "",
  "vendorSub": "",
  "productSub": "20100101",
  "cookieEnabled": true,
  "buildID": "20181001000000",
  "mediaDevices": {},
  "serviceWorker": {},
  "credentials": {},
  "clipboard": {},
  "mediaSession": {},
  "webdriver": false,
  "hardwareConcurrency": 16,
  "geolocation": {},
  "appCodeName": "Mozilla",
  "appName": "Netscape",
  "appVersion": "5.0 (Windows)",
  "platform": "Win32",
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0",
  "product": "Gecko",
  "language": "en-US",
  "languages": [
    "en-US",
    "en"
  ],
  "locks": {},
  "onLine": true,
  "storage": {}
}

const document = {
  cookie: ''
}

const window = {
  screen: { availWidth: 2560, availHeight: 1400, width: 2560, height: 1440, colorDepth: 24, pixelDepth: 24, top: 0, left: 0, availTop: 0, availLeft: 0 },
}



const bmak = {

  /* akamai version */
  ver: 1.75,

  loc: "",

  api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",

  d3: 0,

  cs: "0a46G5m17Vrp4o4c",

  o9: 0,

  tst: -1,

  ckie: "_abck",

  y1: 2016,

  /* start timestamp */
  start_ts: Date.now(),

  /* get current timestamp */
  get_cf_date: ()=>{
    return Date.now()
  },

  /* get execution time */
  updatet: ()=>{
    return bmak.get_cf_date() - bmak.start_ts
  },

  /* TODO */
  get_cookie: ()=>{
    var t = '0';

    try {
        var t = bmak.cookie_chk_read(bmak.ckie);
        if(t){
          bmak.n_ck = 1;
          t = bmak.bm ? '2' : '1';
        }
    } catch (t) {}

    return t
  },

  /* get value of cookie */
  cookie_chk_read: (t)=>{
    for (var a = t + '=', e = document.cookie.split('; '), n = 0; n < e.length; n++) {
      var o = e[n];
      if (0 === o.indexOf(a)) {
        var m = o.substring(a.length, o.length);
        if (-1 != m.indexOf('~') || -1 != decodeURIComponent(m).indexOf('~')) return m
      }
    }
    return !1
  },

  od: (t, a)=>{
    try {

      t = String(t);
      a = String(a);

      var e = [];
      var n = a.length;

      if (n > 0) {
        // Iterate over all characters in
        // bmak.cs = 0a46G5m17Vrp4o4c
        for (var o = 0; o < t.length; o++) {
          var m = t.charCodeAt(o); // get current character code from bmak.cs
          var r = t.charAt(o); // get the actual current character
          var i = a.charCodeAt(o % n); // get char code from api_public_key wrap index
          
          m = bmak.rir(m, 47, 57, i);

          if( m != t.charCodeAt(o) ){
            r = String.fromCharCode(m)
          }

          e.push(r);

        }

        if (e.length > 0) return e.join("");
      }
    } catch (t) {}

    return t;
  },

  rir: (t, a, e, n)=>{
    if(t > a && t <= e){
      if((t += n % (e - a)) > e){
        t = t - e + a;
      }
    }

    return t;
  },

  /* retrieve useragent */
  uar: ()=>{
    return navigator.userAgent.replace(/\\|"/g, '')
  },

  /* returns sum of ascii codes, which are less than 128 */
  ab: (t)=>{
    if (null == t) return -1;
    try {
      for (var a = 0, e = 0; e < t.length; e++) {
        var n = t.charCodeAt(e);
        n < 128 && (a += n)
      }
      return a
    } catch (t) {
      return -2
    }
  },

  /* returns string from charcode */
  ff: (t)=>{
    return String.fromCharCode(t);
  },

  /* distance formula */
  cal_dis: (t)=>{
    var a = t[0] - t[1];
    var e = t[2] - t[3];
    var n = t[4] - t[5];
    var o = Math.sqrt(a * a + e * e + n * n);

    return Math.floor(o);
  },

  to: function () {
    var t = bmak.x2() % 1e7;
    bmak.d3 = t;

    // e = parseInt("7") -> 7
    for (var a = t, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
      // parseInt(Date.now() % 1e7 / Math.pow(10, n)) % 10
      var o = bmak.pi(t / Math.pow(10, n)) % 10;
      m = o + 1;
      op = bmak.cc(o);
      a = op(a, m);
    }

    bmak.o9 = a * e;
  },

  jrs: (t)=>{

    var a = Math.floor(Math.random() * 100000 + 1000); // number between 10,000 and 110,000

    var e = String(t * a);
    var n = 0;
    var o = [];

    var m = e.length >= 18;

    while(o.length < 6){

      o.push(parseInt(e.slice(n, n + 2)));

      if (m) {
        n += 3;
      } else {
        n += 2;
      }

    }

    return [a, bmak.cal_dis(o)];
  },

  fm: ()=>{

    return "Monospace:1267,218;Wingdings 2:1267,218;ITC Bodoni 72 Bold:1267,218;Menlo:1355,213;Gill Sans MT:1311,222;Lucida Sans:1601,219;Bodoni 72:1601,219;Serif:1355,213;Shree Devanagari 714:1355,213;Microsoft Tai Le:1463,244;Nimbus Roman No 9 L:1463,244;Candara:1387,235;Press Start 2P:1387,235;Waseem:1355,213;";

    var t = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"];

    var a = document.createElement("span");
    a.innerHTML = "mmmmmmmmlli";
    a.style.fontSize = "192px";
    var e = "";

    // Iterate through all the fonts above and change the span
    // element to the font while appending the name:offsetWidth,offsetHeight
    for(var o in t){
      a.style.fontFamily = t[o];
      document.body.appendChild(a);
      e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";";
      document.body.removeChild(a);
    }

    // Once done iterating through all of the fonts to try
    // SHA256 hash the final string and set bmak.fmh
    bmak.fmh = bmak.ats(bmak.mn_s(e));

    bmak.fmz = devicePixelRatio;
  },

  /* WebGL based detections through the capturing of GPU and vendor + the collection of hashed supported web extensions */
  wgl: ()=>{
    try {
      var t = document.createElement("canvas");
      var a = t.getContext("webgl");
      bmak.wv = "n";
      bmak.wr = "n";
      bmak.weh = "n";
      bmak.wl = 0;
      if (a) {
        bmak.wv = "b";
        bmak.wr = "b";
        bmak.weh = "b";
        if (a.getSupportedExtensions()) {
          // SHA256 hash of all the supported webgl extensions.
          // This can be used to distinguish hardware based rendering
          // from software based rendering (headless browsers.)
          bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort())));
          bmak.wl = a.getSupportedExtensions().length;
          if (a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {

            // Fetch the vendor
            bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL);
            // Fetch the GPU
            bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);
          }
        }
      }
    } catch (t) {
      bmak.wv = "e";
      bmak.wr = "e";
      bmak.weh = "e";
      bmak.wl = 0;
    }
  },

  /* fingerprinting based on Web Speech API */
  csh: function() {
    if (window.speechSynthesis) {
      var t = window.speechSynthesis.getVoices();

      if (t.length > 0) {
        for (var a = "", e = 0; e < t.length; e++) a += t[e].voiceURI + "_" + t[e].lang;

        bmak.ssh = bmak.ats(bmak.mn_s(a));
      } else bmak.ssh = "0";
    } else bmak.ssh = "n";
  },

  gd: ()=>{

      bmak.z1 = parseInt(bmak.start_ts / (bmak.y1 * bmak.y1)); //y

      var d = Math.random();

      var k = (d + '').slice(0, 11) + parseInt(1000 * d / 2);

      bmak.gbrv(); //y
      bmak.get_browser(); //y
      bmak.bc(); //y
      bmak.bmisc(); //y

      return [
        bmak.uar() + ',uaend',
        bmak.xagg, //y
        bmak.psub, //y
        bmak.lang, //y
        bmak.prod, //y
        bmak.plen, //y
        bmak.pen, //y
        bmak.wen, //y
        bmak.den, //y
        bmak.z1, //y
        bmak.d3, //n
        window.screen.availWidth,
        window.screen.availHeight,
        window.screen.width,
        window.screen.height,
        window.innerWidth,
        window.innerHeight,
        window.outerWidth,
        bmak.bd(), //n
        '' + bmak.ab(bmak.uar()),
        k,
        bmak.start_ts / 2,
        bmak.brv, //y
        'loc:' + bmak.loc
      ].join(',')

      //return t + ',uaend,' + bmak.xagg + ',' + bmak.psub + ',' + bmak.lang + ',' + bmak.prod + ',' + bmak.plen + ',' + bmak.pen + ',' + bmak.wen + ',' + bmak.den + ',' + bmak.z1 + ',' + bmak.d3 + ',' + n + ',' + o + ',' + m + ',' + r + ',' + c + ',' + i + ',' + b + ',' + bmak.bd() + ',' + a + ',' + k + ',' + e + ',' + bmak.brv + ',loc:' + bmak.loc
  },

  /* check if browser is brave */
  gbrv: ()=>{
    bmak.brv = 0;
  },

  /* browser info */
  get_browser: ()=>{

    if (navigator.productSub) {
      /**
     * Browser build number
     * Safari and Chrome will always return "20030107"
     * Firefox returns "20100101" and this doesn't exist on IE
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/productSub
     */
      bmak.psub = navigator.productSub
    }

    if(navigator.language) {
      /**
       * User's browser's preferred language.
       * This can be represented
       * differently depending on the browser. For example,
       * English is stylized as en-US in Chrome but en-us in Safari
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
       */
      bmak.lang = navigator.language
    }

    if (navigator.product) {
      /**
       * All browsers return "Gecko" for compatibility reasons.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/product
       */
      bmak.prod = navigator.product
    }

    if (navigator.plugins !== undefined) {
      /**
       * Legacy browser plugins. Not to be confused with extensions.
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/plugins
       */
      bmak.plen = navigator.plugins.length;
    } else {
      bmak.plen = -1;
    }
  },

  /* checks if functions exist */
  bc: ()=>{

    return bmak.xagg = 11059; // firefox default

    /**
     * addEventListener available
     */
    var t = window.addEventListener ? 1 : 0,
      /**
       * XMLHttpRequest available
       */
      a = window.XMLHttpRequest ? 1 : 0,
      /**
       * XDomainRequest available
       * Only exists for Internet Explorer
       */
      e = window.XDomainRequest ? 1 : 0,
      /**
       * emit available
       */
      n = window.emit ? 1 : 0,
      /**
       * DeviceOrientationEvent available
       * Not supported on Safari and IE
       */
      o = window.DeviceOrientationEvent ? 1 : 0,
      /**
       * DeviceMotionEvent available
       * Not supported on Safari and IE
       */
      m = window.DeviceMotionEvent ? 1 : 0,
      /**
       * TouchEvent available
       * Not supported on Safari and IE
       */
      r = window.TouchEvent ? 1 : 0,
      /**
       * spawn available
       * Doesnt exist in browsers. Maybe used as a check to see if its running in a Node environment.
       */
      i = window.spawn ? 1 : 0,
      /**
       * chrome available
       * Check to see if running in Chrome
       */
      c = window.chrome ? 1 : 0,
      /**
       * Function.prototype.bind available
       */
      b = Function.prototype.bind ? 1 : 0,
      /**
       * Buffer available
       * Doesnt exist in browsers. Maybe used as a check to see if its running in a Node environment (global.Buffer).
       */
      d = window.Buffer ? 1 : 0,
      /**
       * PointerEvent available
       */
      s = window.PointerEvent ? 1 : 0;

    try {
      /**
       * Window Inner Width
       */
      var k = window.innerWidth ? 1 : 0;
    } catch (t) {
      var k = 0;
    }

    try {
      /**
       * Window Outer Width
       */
      var l = window.outerWidth ? 1 : 0;
    } catch (t) {
      var l = 0;
    }

    bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
  },

  /* checks for browser automatisation */
  bmisc: ()=>{
    // _phantom https://phantomjs.org/
    bmak.pen = 0;

    /*
      window.webdriver property is true when in:
    Chrome
      The --enable-automation or the --headless flag or the --remote-debugging-port is used.
    Firefox
      The marionette.enabled preference or --marionette flag is passed.
    */
    bmak.wen = 0;
    // Headless chrome property
    bmak.den = 0;
  },

  /* check for various Window and Navigator properties */
  bd: ()=>{
    /**
     * The array that will serve as the return string
     */
    var t = [],
    /**
     * Has callback function for phantomJS (https://phantomjs.org/api/webpage/handler/on-callback.html)
     */
    a = window.callPhantom ? 1 : 0;
    t.push(",cpen:" + a);
    var e = 0;
    /**
     * "The ActiveXObject object is used to create instances of OLE Automation objects in Internet Explorer on Windows operating systems."
     * @see http://help.dottoro.com/ljiujjib.php#:~:text=The%20ActiveXObject%20object%20is%20used,to%20allow%20communication%20with%20them
     */
    window.ActiveXObject && "ActiveXObject" in window && (e = 1), t.push("i1:" + e);
    /**
     * Property only exists on IE. Prob an IE check
     */
    var n = "number" == typeof document.documentMode ? 1 : 0;
    t.push("dm:" + n);
    /**
     * Chrome check
     */
    var o = window.chrome && window.chrome.webstore ? 1 : 0;
    t.push("cwen:" + o);
    /**
     * Returns the online status of the browser. The property returns a boolean value, with true meaning online and false meaning offline
     */
    var m = navigator.onLine ? 1 : 0;
    t.push("non:" + m);
    /**
     * Opera browser check
     */
    var r = window.opera ? 1 : 0;
    t.push("opc:" + r);
    /**
     * Firefox check. InstallTrigger only exists on firefox and typeof InstallTrigger will return "object" on firefox based browsers. "undefined" otherwise
     */
    var i = "undefined" != typeof InstallTrigger ? 1 : 0;
    t.push("fc:" + i);
    /**
     * Early safari check
     * @see https://stackoverflow.com/questions/15470777/what-does-this-statement-object-prototype-do
     */
    var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
    t.push("sc:" + c);
    /**
     * WebRTC check
     * @see https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
     */
    var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
    t.push("wrc:" + b);
    /**
     * Firefox check as it's only available in Firefox.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenY
     */
    var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
    t.push("isc:" + d);

    /*
      Rough day identifier for start timestamp(bmak.start_ts).

      "d2 now divides by 23, which gives us, again roughly,
      a day marker, as diving the "hour marker" by 23,
      will result in a number that changes roughly every day
      (maybe this is 23 not 24 because our 7 extra minutes is
      now an extra 2.96608 hours in the timeframe)"
      - xssc

      see: https://github.com/char/bpre/issues/1#issuecomment-914575546
    */
    bmak.d2 = parseInt(bmak.z1 / 23);
    /**
     * Mobile check, only available in Chromium and Firefox
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate
     */
    var s = "function" == typeof navigator.vibrate ? 1 : 0;
    t.push("vib:" + s);
    /**
    * Mobile check, only available in Chromium and Opera
    * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery
    */
    var k = "function" == typeof navigator.getBattery ? 1 : 0;
    t.push("bat:" + k);
    /**
     * JS check, some browsers don't support this function
     * @see https://caniuse.com/?search=forEach
     */
    var l = Array.prototype.forEach ? 0 : 1;
    t.push("x11:" + l);
    /**
     * JS check, some browsers don't support this function
     * @see https://caniuse.com/?search=FileReader
     */
    var u = "FileReader" in window ? 1 : 0;
    return t.push("x12:" + u), t.join(",");
  },

  /* get document URL */
  getdurl: ()=>{
    return targetUrl
  },

  /* generates a fingerprint based on input-elements (name, id, type, autocomplete, defaultValue, value) */
  getforminfo: ()=>{

    return "0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;0,-1,0,1,1246,419,0;";

    var t = '';
    var a = '';
    var inputs = document.getElementsByTagName('input');
    var n = -1;

    for(var index = 0; index < inputs.length; index++){

      var elem = inputs[index];

      var r = bmak.ab(elem.getAttribute('name'));
      var i = bmak.ab(elem.getAttribute('id'));

      var b = elem.getAttribute('required') == null ? 0 : 1;

      var d = elem.getAttribute('type');
      var s = null == d ? -1 : bmak.get_type(d);

      var k = elem.getAttribute('autocomplete');

      if(k == null){
        n = -1;
      }else{
        k = k.toLowerCase();

        if(k == 'off'){
          n = 0;
        }else if(k == 'on'){
          n = 1;
        }else{
          n = 2;
        }

      }

      var l = elem.defaultValue;
      var u = elem.value;
      var _ = 0;
      var f = 0;


      if(l && l.length != 0){
        f = 1;
      }

      if(s != 2){
        t += [s,n,_,b,i,r,f].join(',') + ';'
      }

      if(u && u.length !== 0 && !f && u !== l){
        _ = 1;
      }

      a += _ + ';';

    }

    if(bmak.ins == null){
      bmak.ins = a;
    }

    bmak.cns = a;

    return t

  },

  /* checks if funtions in navigator and Math are existing */
  fas: ()=>{
    try {
      return Boolean(navigator.credentials) //y
      + (Boolean(navigator.appMinorVersion) << 1) //y
      + (Boolean(navigator.bluetooth) << 2) //y
      + (Boolean(navigator.storage) << 3) //y
      + (Boolean(Math.imul) << 4) //y
      + (Boolean(navigator.getGamepads) << 5) //y
      + (Boolean(navigator.getStorageUpdates) << 6) //y
      + (Boolean(navigator.hardwareConcurrency) << 7) //y
      + (Boolean(navigator.mediaDevices) << 8) //y
      + (Boolean(navigator.mozAlarms) << 9) //y
      + (Boolean(navigator.mozConnection) << 10) //y
      + (Boolean(navigator.mozIsLocallyAvailable) << 11) //y
      + (Boolean(navigator.mozPhoneNumberService) << 12) //y
      + (Boolean(navigator.msManipulationViewsEnabled) << 13) //y
      + (Boolean(navigator.permissions) << 14) //y
      + (Boolean(navigator.registerProtocolHandler) << 15) //y
      + (Boolean(navigator.requestMediaKeySystemAccess) << 16) //y
      + (Boolean(navigator.requestWakeLock) << 17) //y
      + (Boolean(navigator.sendBeacon) << 18) //y
      + (Boolean(navigator.serviceWorker) << 19) //y
      + (Boolean(navigator.storeWebWideTrackingException) << 20) //y
      + (Boolean(navigator.webkitGetGamepads) << 21) //y
      + (Boolean(navigator.webkitTemporaryStorage) << 22) //y
      + (Boolean(Number.parseInt) << 23)
      + (Boolean(Math.hypot) << 24);
    } catch (t) {
      return 0;
    }
  },

  /* checks if funtions in window are existing */
  hbs: ()=>{
    try {
      return Boolean(window.__nightmare)
      + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Array) << 1)
      + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Promise) << 2)
      + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol) << 3)
      + (Boolean(window.OSMJIF) << 4)
      + (Boolean(window._Selenium_IDE_Recorder) << 5)
      + (Boolean(window.__$webdriverAsyncExecutor) << 6)
      + (Boolean(window.__driver_evaluate) << 7)
      + (Boolean(window.__driver_unwrapped) << 8)
      + (Boolean(window.__fxdriver_evaluate) << 9)
      + (Boolean(window.__fxdriver_unwrapped) << 10)
      + (Boolean(window.__lastWatirAlert) << 11)
      + (Boolean(window.__lastWatirConfirm) << 12)
      + (Boolean(window.__lastWatirPrompt) << 13)
      + (Boolean(window.__phantomas) << 14)
      + (Boolean(window.__selenium_evaluate) << 15)
      + (Boolean(window.__selenium_unwrapped) << 16)
      + (Boolean(window.__webdriverFuncgeb) << 17)
      + (Boolean(window.__webdriver__chr) << 18)
      + (Boolean(window.__webdriver_evaluate) << 19)
      + (Boolean(window.__webdriver_script_fn) << 20)
      + (Boolean(window.__webdriver_script_func) << 21)
      + (Boolean(window.__webdriver_script_function) << 22)
      + (Boolean(window.__webdriver_unwrapped) << 23)
      + (Boolean(window.awesomium) << 24)
      + (Boolean(window.callSelenium) << 25)
      + (Boolean(window.calledPhantom) << 26)
      + (Boolean(window.calledSelenium) << 27)
      + (Boolean(window.domAutomationController) << 28)
      + (Boolean(window.watinExpressionError) << 29)
      + (Boolean(window.watinExpressionResult) << 30)
      + (Boolean(window.spynner_additional_js_loaded) << 31)
      + (Boolean(document.$chrome_asyncScriptInfo) << 32)
      + (Boolean(window.fmget_targets) << 33)
      + (Boolean(window.geb) << 34);
    } catch (t) {
      return 0;
    }
  },

  /* returns navigator.webdriver if exists, else -1 */
  gwd: ()=>{
    try {
      return navigator.webdriver ? navigator.webdriver : -1;
    } catch (t) {
      return 0;
    }
  },

  /**
     * Mouse events.
     * 
     *  This function gets triggered on:
     *  
     *  hmm: "mousemove", "onmousemove" (a = 1)
     *  hc: "click", "onclick" (a = 2)
     *  hmd: "mousedown", "onmousedown" (a = 3)
     *  hmu: "mouseup", "onmouseup" (a = 4)
     * @param {event} t @see https://dom.spec.whatwg.org/#concept-event
     * @param {number} a 
     */

  cma: function (t, a) {
    try {

      /*
          If this function is being triggered by: 
          a mousemove event and the mouse events is less than the mouse move event limit (100)
          OR any click/mousedown/mouseup events and the event count is less than the mouse click event limit (75)
        */

      if (1 == a && bmak.mme_cnt < bmak.mme_cnt_lmt || 1 != a && bmak.mduce_cnt < bmak.mduce_cnt_lmt) {
        /**
           * The event triggered
           * @see https://dom.spec.whatwg.org/#concept-event
           */
        var e = t || window.event,
          n = -1,
          o = -1;

        e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
        var m = e.toElement;
        null == m && (m = e.target);
        var r = bmak.gf(m),
          i = bmak.get_cf_date() - bmak.start_ts,
          c = bmak.me_cnt + ',' + a + ',' + i + ',' + n + ',' + o;
        if (1 != a) {
          c = c + ',' + r;
          var b = void 0 !== e.which ? e.which : e.button;
          null != b && 1 != b && (c = c + ',' + b)
        }
        void 0 !== e.isTrusted && !1 === e.isTrusted && (c += ',it0'), c += ';', bmak.me_vel = bmak.me_vel + bmak.me_cnt + a + i + n + o, bmak.mact = bmak.mact + c, bmak.ta += i
      }
      //1 == a ? bmak.mme_cnt++ : bmak.mduce_cnt++, bmak.me_cnt++, bmak.js_post && 3 == a && (bmak.aj_type = 1, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1)
    } catch (t) { }
  },

  /* returns get_cf_date(); Date.now() */
  x2: ()=>{
    var t = bmak.ff,
      a = t(98) + t(109) + t(97) + t(107), // "bmak"
      e = t(103) + t(101) + t(116) + t(95) + t(99) + t(102) + t(95) + t(100) + t(97) + t(116) + t(101), // "get_cf_date"
      n = window[a][e], // window.bmak.get_cf_date
      o = 0;
    return 'function' == typeof n && (o = n()), o
  },

  /* map permissions into string */
  np: ()=>{
    var t = [];
    var a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

    for(permission of a){

      /*
      *  - prompted (1)
      *  - granted (2)
      *  - denied (0)
      *  - invalid permission name (4)
      *  - Other error (3)
      */

      t.push(navigator.permissions[permission]);

    }

    bmak.nav_perm = t.join("");

  },

  /* checks for automation libraries */
  sed: ()=>{
    return "0,0,0,0,1,0,0"
  },

  get_mn_params_from_abck: ()=>{

    var t = [[]];

    try {

      var a = bmak.cookie_chk_read(bmak.ckie);

      if(a !== false){
        var e = decodeURIComponent(a).split("~");

        if(e.length >= 5){

          var n = e[0];
          var o = e[4];
          var m = o.split("||");

          if(m.length > 0){

            for (var r = 0; r < m.length; r++) {
              var i = m[r],
                c = i.split("-");

              if (c.length >= 5) {

                var b = parseInt(c[0]);
                var d = c[1];
                var s = parseInt(c[2]);
                var k = parseInt(c[3]);
                var l = parseInt(c[4]);
                var u = 1;

                if(c.length >= 6){
                  u = parseInt(c[5]);
                }

                var _ = [b, n, d, s, k, l, u];

                if(u == 2){
                  t.splice(0, 0, _);
                }else{
                  t.push(_);
                }

              }

            }

          }
        }
      }

    } catch (t) {}

    return t;
  },

  mn_get_current_challenges: ()=>{
    var t = bmak.get_mn_params_from_abck();
    var a = [];

    if (t != null){
      for(var e = 0; e < t.length; e++){
        var n = t[e];

        if(n.length > 0){
          var o = n[1] + n[2];
          var m = n[6];
          a[m] = o;
        }

      }
    }
    return a;
  },

  /* SHA-256 function */
  mn_s: (t)=>{
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      e = 1779033703,
      n = 3144134277,
      o = 1013904242,
      m = 2773480762,
      r = 1359893119,
      i = 2600822924,
      c = 528734635,
      b = 1541459225,
      d = bmak.encode_utf8(t),
      s = 8 * d.length;
    d += String.fromCharCode(128);

    for (var k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0; _ < l; _++) {
      u[_] = new Array(16);

      for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
    }

    var p = s / Math.pow(2, 32);
    u[l - 1][14] = Math.floor(p), u[l - 1][15] = s;

    for (var v = 0; v < l; v++) {
      for (var h, g = new Array(64), w = e, y = n, E = o, S = m, C = r, h = i, B = c, x = b, _ = 0; _ < 64; _++) {
        var M, j, A, L, P, T;
        _ < 16 ? g[_] = u[v][_] : (M = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, j = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + M + g[_ - 7] + j), j = bmak.rotate_right(C, 6) ^ bmak.rotate_right(C, 11) ^ bmak.rotate_right(C, 25), A = C & h ^ ~C & B, L = x + j + A + a[_] + g[_], M = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22), P = w & y ^ w & E ^ y & E, T = M + P, x = B, B = h, h = C, C = S + L >>> 0, S = E, E = y, y = w, w = L + T >>> 0;
      }

      e += w, n += y, o += E, m += S, r += C, i += h, c += B, b += x;
    }

    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
  },

  /* array of numbers to hex string */
  ats: (t)=>{
    var a = "";
    for (var e = 0; e < t.length; e++) {
      if (t[e].toString(16).length == 2) {
        a += t[e].toString(16);
      } else {
        a += "0" + t[e].toString(16);
      }
    }

    return a;
  }


}


bmak.fpcf = {

  td: 13, // should not be set
  fpValCalculated: false, //should default to false

  fpVal: ()=>{
    bmak.fpcf.fpValCalculated = true;

    try {

      var t = Date.now();

      var e = bmak.fpcf.data();

      bmak.fpcf.fpValstr = e.replace(/\"/g, "\\\\\"");

      var n = Date.now();

      bmak.fpcf.td = n - t;

    } catch (t) {}

  },

  data: ()=>{
    var t = screen.colorDepth ? screen.colorDepth : -1,
      e = screen.pixelDepth ? screen.pixelDepth : -1,
      n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
      o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
      m = navigator.doNotTrack ? navigator.doNotTrack : -1,
      r = "default";
    r = bmak.runFonts ? bmak.altFonts ? a.fonts_optm() : a.fonts() : "dis";
    return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
  }

}


bmak.bpd = ()=>{

  var t = 0;

  try {

    t = bmak.get_cf_date(); //y

    var a = bmak.updatet(); //y
    var e = '3';

    if(bmak.ckie){ //y
      e = bmak.get_cookie(); //n
    }

    var n = bmak.gd(); //y

    var i = [
      window.DeviceOrientationEvent ? 'do_en' : 'do_dis',
      window.DeviceMotionEvent ? 'dm_en' : 'dm_dis',
      window.TouchEvent ? 't_en' : 't_dis'
    ].join(',');

    var c = bmak.getforminfo(); //y

    /* required because startTracking is not executed */
    bmak.informinfo = bmak.getforminfo();

    var b = bmak.getdurl(); //y

    var d = bmak.aj_type + ',' + bmak.aj_indx; //n

    if(!bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0)){ //n
      bmak.fpcf.fpVal(); //n
    }

    var s = bmak.ke_vel //n
          + bmak.me_vel //n
          + bmak.doe_vel
          + bmak.dme_vel
          + bmak.te_vel
          + bmak.pe_vel;

    var k = bmak.ff; // bmak.ff = String.fromCharCode
    var l = k(80) + k(105) + k(90) + k(116) + k(69); // PiZtE

    var u = bmak.jrs(bmak.start_ts); //y

    var _ = bmak.get_cf_date() - bmak.start_ts; //y

    var f = parseInt(bmak.d2 / 6); //n

    var p = bmak.fas(); //n
    var h = bmak.hbs(); //y
    var v = bmak.gwd(); //y

    var w = [
      bmak.ke_vel + 1, //n
      bmak.me_vel + 32,
      bmak.te_vel + 32,
      bmak.doe_vel,
      bmak.dme_vel,
      bmak.pe_vel,
      s, //n
      a, //y
      bmak.init_time,
      bmak.start_ts,
      bmak.fpcf.td,
      bmak.d2,
      bmak.ke_cnt,
      bmak.me_cnt,
      f, //n
      bmak.pe_cnt,
      bmak.te_cnt,
      _, //y
      bmak.ta,
      bmak.n_ck,
      e, //n
      bmak.ab(e),
      bmak.fpcf.rVal,
      bmak.fpcf.rCFP,
      p,
      l,
      u[0],
      u[1],
      h,
      v
    ].join(',');

    var y = '' + bmak.ab(bmak.fpcf.fpValstr);

    if(bmak.firstLoad){
      bmak.np();
    }else{
      bmak.csh();

      if(!bmak.hbCalc && (0 == bmak.js_post || bmak.aj_indx > 0)){
        setTimeout(bmak.fm, 4000);
        setTimeout(bmak.wgl, 4000);
        bmak.hbCalc = true;
      }

    }


    var E = '';

    if(bmak.hbCalc){
      E = bmak.fmh + ',' + bmak.fmz + ',' + bmak.ssh + ',' + bmak.wv + ',' + bmak.wr + ',' + bmak.weh + ',' + bmak.wl;
    }

    var S = bmak.sed();

    var C = bmak.mn_get_current_challenges();
    var A = '';
    var B = '';
    var x = '';

    if(C[1] !== undefined){
      var M = C[1];
      void 0 !== bmak.mn_r[M] && (A = bmak.mn_r[M])
    }

    if(C[2] !== undefined){
      var j = C[2];
      void 0 !== bmak.mn_r[j] && (B = bmak.mn_r[j])
    }

    if(C[3] !== undefined){
      var L = C[3];

      if(bmak.mn_r[L] !== undefined){
        x = bmak.mn_r[L];
      }

    }
    
    void 0 !== navigator.userAgentData && bmak.isChrome() && bmak.build_pua()

    bmak.sensor_data = [
      bmak.ver,
      '-1,2,-94,-100,',
      n,                  // 
      '-1,2,-94,-131,',
      bmak.pua,
      '-1,2,-94,-101,',
      i,
      '-1,2,-94,-105,',
      bmak.informinfo,
      '-1,2,-94,-102,',
      c,
      '-1,2,-94,-108,',
      bmak.kact,
      '-1,2,-94,-110,',
      bmak.mact,
      '-1,2,-94,-117,',
      bmak.tact,
      '-1,2,-94,-111,',
      bmak.doact,
      '-1,2,-94,-109,',
      bmak.dmact,
      '-1,2,-94,-114,',
      bmak.pact,
      '-1,2,-94,-103,',
      bmak.vcact,
      '-1,2,-94,-112,',
      b,
      '-1,2,-94,-115,',
      w,
      '-1,2,-94,-106,',
      d,
      '-1,2,-94,-119,',
      bmak.mr,
      '-1,2,-94,-122,',
      S,
      '-1,2,-94,-123,',
      A,
      '-1,2,-94,-124,',
      B,
      '-1,2,-94,-126,',
      x,
      '-1,2,-94,-127,',
      bmak.nav_perm
    ].join("");

    var P = 24 ^ bmak.ab(bmak.sensor_data); // bitwise XOR; 24 = 0b00011000

    bmak.sensor_data = bmak.sensor_data + [
      '-1,2,-94,-70,',
      bmak.fpcf.fpValstr,
      '-1,2,-94,-80,',
      y,
      '-1,2,-94,-116,',
      bmak.o9,
      '-1,2,-94,-118,',
      P,
      '-1,2,-94,-129,',
      E,
      '-1,2,-94,-121,'
    ].join("");

  } catch (t) {

    console.log(t);

    var T = '';
    try {
      t.stack && 'string' == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : 'string' == typeof t && (T = t.replace(/\"/g, "\\'")), T = T.slice(0, 1e3), bmak.sensor_data = bmak.ver + '-1,2,-94,-100,' + bmak.uar() + '-1,2,-94,-120,' + T
    } catch (t) {
      t.stack && 'string' == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : 'string' == typeof t && (T = t.replace(/\"/g, "\\'")), T = T.slice(0, 1e3), bmak.sensor_data = bmak.ver + bmak.sensor_data + ',s3:' + T
    }

  }

  try {
    var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16);

    var D = Math.floor(bmak.get_cf_date() / 3600000); // get full hour since unix time start; 3600000 = 60 * 60 * 1000; hour to milliseconds;

    var N = bmak.get_cf_date(); // Date.now()

    var odDF = bmak.od(D, F);


    
    var R = F + odDF + bmak.sensor_data;

    bmak.sensor_data = R + ';' + (bmak.get_cf_date() - t) + ';' + bmak.tst + ';' + (bmak.get_cf_date() - N)

    console.log(bmak.sensor_data);

  } catch (t) {}

}

bmak.bpd();
