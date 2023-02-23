
const _bmak = {

    uar: ()=>{
        return window.navigator.userAgent.replace(/\\|"/g, '')
    },

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

    rir: (t, a, e, n)=>{
        return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
    },

    od: (t, a)=>{
        try {
    
          t = String(t);
          a = String(a);
    
          var e = [];
          var n = a.length;
    
          if (n > 0) {
            // Iterate over all characters in
            // _bmak.cs = 0a46G5m17Vrp4o4c
            for (var o = 0; o < t.length; o++) {
              var m = t.charCodeAt(o); // get current character code from _bmak.cs
              var r = t.charAt(o); // get the actual current character
              var i = a.charCodeAt(o % n); // get char code from api_public_key wrap index
              
              m = _bmak.rir(m, 47, 57, i);
    
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

    cc: (t)=>{

        /*
        t:
        
        0,4,8       multiplication
        1,5,9       addition
        2,3,6,7     subtraction

        */

        var a = t % 4;
  
        if (a == 0){
            var n = function(t, a) {
                return t * a;
            }
        }else if (a == 1){
            var n = function(t, a) {
                return t + a;
            }
        }else{
            var n = function(t, a) {
                return t - a;
            }
        }

        return n;
    },

    to: ()=>{


        /* this section */

        var d3 = Date.now() % 10000000;
        _bmak.d3 = d3;
  
        var o = parseInt(d3 / 10000) % 10; // mod 10 simply reduces the number to its last character

        /* takes current timestamp and reduces it to the 5th character from behind */
        /* same as parseInt(Date.now().toString().substr(-5, 1)) */
  
        a = _bmak.cc(o)(d3, o + 1); // either multiplies, adds or substracts (o + 1) with/to/from d3
  
        _bmak.o9 = a * 7;
    },

    cal_dis: (t)=>{
        var a = t[0] - t[1],
            e = t[2] - t[3],
            n = t[4] - t[5],
            o = Math.sqrt(a * a + e * e + n * n);
        return Math.floor(o);
    },

    np: function() {
        var t = [],
            a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

        try {
            if (!navigator.permissions) return void(_bmak.nav_perm = 6);
            _bmak.nav_perm = 8;

            var e = function(a, e) {
                return navigator.permissions.query({
                name: a
                }).then(function(a) {
                switch (a.state) {
                    case "prompt":
                    t[e] = 1;
                    break;

                    case "granted":
                    t[e] = 2;
                    break;

                    case "denied":
                    t[e] = 0;
                    break;

                    default:
                    t[e] = 5;
                }
                })["catch"](function(a) {
                t[e] = -1 !== a.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
                });
            },
            n = a.map(function(t, a) {
                return e(t, a);
            });

            Promise.all(n).then(function() {
            _bmak.nav_perm = t.join("");
            });
        } catch (t) {
            _bmak.nav_perm = 7;
        }
    },

    bc: ()=>{
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

        _bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
    },

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

    jrs: (t)=>{

        var a = Math.floor(Math.random() * 100000 + 10000); // number between 10,000 and 110,000
    
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
    
        return [a, _bmak.cal_dis(o)];
    },

    get_type: function(t) {
        return t = t.toLowerCase(), "text" == t || "search" == t || "url" == t || "email" == t || "tel" == t || "number" == t ? 0 : "password" == t ? 1 : 2;
    },

    getforminfo: ()=>{
        for (var t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
          var m = e[o],
            r = _bmak.ab(m.getAttribute("name")),
            i = _bmak.ab(m.getAttribute("id")),
            c = m.getAttribute("required"),
            b = null == c ? 0 : 1,
            d = m.getAttribute("type"),
            s = null == d ? -1 : _bmak.get_type(d),
            k = m.getAttribute("autocomplete");
          null == k ? n = -1 : (k = k.toLowerCase(), n = "off" == k ? 0 : "on" == k ? 1 : 2);
          var l = m.defaultValue,
            u = m.value,
            _ = 0,
            f = 0;
          l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != s && (t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), a = a + _ + ";";
        }
  
        return null == _bmak.ins && (_bmak.ins = a), _bmak.cns = a, t;
    },

};





var Generated = [];





async function init(){

    _bmak.cs = '0a46G5m17Vrp4o4c';
    _bmak.api_public_key = 'afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq';

    _bmak.start_ts = Date.now();
    _bmak.z1 = parseInt(_bmak.start_ts / 4064256);
    _bmak.d2 = parseInt(_bmak.z1 / 23);

    _bmak.informinfo = _bmak.getforminfo(); // only call once?


    try{
        _bmak.brv = navigator.brave && await navigator.brave.isBrave() ? 1 : 0;
    }catch(e){
        _bmak.brv = 0;
    }

    _bmak.np();
    _bmak.bc();
    _bmak.to();

}




function generate(){
    
    Generated = [
        '',
        '1.75',
        _bmak.uar(),
        '',
        _bmak.xagg,
        navigator.productSub,
        navigator.language,
        navigator.product,
        navigator.plugins.length,
        '0',
        '0',
        '0',
        parseInt(_bmak.start_ts / 4064256),
        _bmak.d3,
        window.screen.availWidth,
        window.screen.availHeight,
        window.screen.width,
        window.screen.height,
        window.innerWidth,
        window.innerHeight,
        window.outerWidth,
        '',
        'cpen:0',
        `i1:${window.ActiveXObject && "ActiveXObject" in window ? 1 : 0}`,
        `dm:${"number" == typeof document.documentMode ? 1 : 0}`,
        `cwen:${window.chrome && window.chrome.webstore ? 1 : 0}`,
        `non:${navigator.onLine ? 1 : 0}`,
        `opc:${window.opera ? 1 : 0}`,
        `fc:${typeof InstallTrigger != "undefined" ? 1 : 0}`,
        `sc:${window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ? 1 : 0}`,
        `wrc:${typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection ? 1 : 0}`,
        `isc:${'mozInnerScreenY' in window ? window.mozInnerScreenY : 0}`,
        `vib:${typeof navigator.vibrate ? 1 : 0}`,
        `bat:${typeof navigator.getBattery ? 1 : 0}`,
        `x11:${Array.prototype.forEach ? 0 : 1}`,
        `x12:${'FileReader' in window ? 1 : 0}`,
        _bmak.ab(_bmak.uar()),
        (()=>{var d = Math.random(); return (d + '').slice(0, 11) + parseInt(1000 * d / 2)})(),
        _bmak.start_ts / 2,
        _bmak.brv,
        '',
        '',
        window.DeviceOrientationEvent ? 'do_en' : 'do_dis',
        window.DeviceMotionEvent ? 'dm_en' : 'dm_dis',
        window.TouchEvent ? 't_en' : 't_dis',
        _bmak.informinfo,
        _bmak.informinfo,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        window.document.location,
        '1',
        '32',
        '32',
        '0',
        '0',
        '0',
        '0',
        Date.now() - _bmak.start_ts, //todo: increase number randomly,
        '0',
        _bmak.start_ts,
        '-999999',
        _bmak.d2,
        '0',
        '0',
        parseInt(_bmak.d2 / 6),
        '0',
        '0',
        Date.now() - _bmak.start_ts, //todo: increase number randomly
        '0',
        '0',
        '',
        '',
        '-1',
        '-1',
        _bmak.fas(),
        '',
        _bmak.jrs(_bmak.start_ts).join('<#s#>'),
        '0',
        '-1',
        '0',
        '0',
        '-1',
        '0',
        '0',
        '0',
        '0',
        void 0 !== window.XPathResult || void 0 !== document.XPathResult ? 1 : 0,
        '0',
        '0',
        '',
        '',
        '',
        _bmak.nav_perm,
        '-1',
        _bmak.ab('-1'),
        _bmak.o9,
        'c',
        '',
        ''
    ].join('<#s#>').split('<#s#>');

    
    Generated.push(Date.now() - _bmak.start_ts); //todo: increase number randomly
    Generated.push('-1');
    Generated.push('0');

    return Generated

}


function fillScheme(g){

    var SensorData = 
    `${g[1]}-1,2,-94,-100,${g[2]},uaend,${g[4]},${g[5]},${g[6]},${g[7]},${g[8]},${g[9]},${g[10]},${g[11]},${g[12]},${g[13]},${g[14]},${g[15]},${g[16]},${g[17]},${g[18]},${g[19]},${g[20]},${g[21]},${g[22]},${g[23]},${g[24]},${g[25]},${g[26]},${g[27]},${g[28]},${g[29]},${g[30]},${g[31]},${g[32]},${g[33]},${g[34]},${g[35]},${g[36]},${g[37]},${g[38]},${g[39]},${g[40]}-1,2,-94,-131,-1,2,-94,-101,${g[42]},${g[43]},${g[44]}-1,2,-94,-105,${g[45]}-1,2,-94,-102,${g[46]}-1,2,-94,-108,-1,2,-94,-110,${g[48]}-1,2,-94,-117,-1,2,-94,-111,-1,2,-94,-109,-1,2,-94,-114,-1,2,-94,-103,-1,2,-94,-112,${g[54]}-1,2,-94,-115,${g[55]},${g[56]},${g[57]},${g[58]},${g[59]},${g[60]},${g[61]},${g[62]},${g[63]},${g[64]},${g[65]},${g[66]},${g[67]},${g[68]},${g[69]},${g[70]},${g[71]},${g[72]},${g[73]},${g[74]},${g[75]},${g[76]},${g[77]},${g[78]},${g[79]},PiZtE,${g[81]},${g[82]},${g[83]},${g[84]}-1,2,-94,-106,${g[85]},${g[86]}-1,2,-94,-119,${g[87]}-1,2,-94,-122,${g[88]},${g[89]},${g[90]},${g[91]},${g[92]},${g[93]},${g[94]}-1,2,-94,-123,-1,2,-94,-124,-1,2,-94,-126,-1,2,-94,-127,${g[98]}`;

    var P = 24 ^ _bmak.ab(SensorData);

    var F = _bmak.od(_bmak.cs, _bmak.api_public_key).slice(0, 16);
    F = F + _bmak.od(Math.floor(Date.now() / 3600000), F)

    SensorData = F + SensorData + `-1,2,-94,-70,${g[99]}-1,2,-94,-80,${g[100]}-1,2,-94,-116,${g[101]}-1,2,-94,-118,${P}-1,2,-94,-129,-1,2,-94,-121,;${g[105]};${g[106]};${g[107]}`;

    console.log(g);

    
    console.log(SensorData);

    return SensorData
}



init().then(()=>{

    fillTable(fillScheme(generate()))

})
