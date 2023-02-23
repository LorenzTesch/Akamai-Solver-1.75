'use strict';

const isNodeEnv = true;

const axios = require('axios');
const url = require('url');


const wrapper = require('axios-cookiejar-support').wrapper;
const CookieJar = require('tough-cookie').CookieJar;
const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));


const targetUrl = "https://www.nh-hotels.com/";
const targetUrlParsed = url.parse(targetUrl);


/* Akamai Start*/

var window = {
    screen: {
        availWidth: 2560,
        availHeight: 1400,
        width: 2560,
        height: 1440
    },
    innerWidth: 2560,
    innerHeight: 1315,
    outerWidth: 2576,
    mozInnerScreenY: 85,
    document: {
        location: targetUrl,
        XPathResult: undefined,
        documentMode: undefined,
        cookie: {
          '_abck': {
            value: ''
          }
        },
        getforminfo: ()=>{ /* make dynamic */
            return '0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,1,1,1340,422,0;0,-1,1,1,1469,446,0;0,-1,0,0,2354,1143,0;'
        }
    },
    navigator: {
        permissions: {
            query: ()=>{ /* add permission list incl states */
                return new Promise((res, rej)=>{
                    res({
                        state: ''
                    })
                })
            }
        },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0',
        productSub: '20100101',
        language: 'en-US',
        product: 'Gecko',
        plugins: { /* possible more details needed */
            length: 5
        },
        credentials: {},
        appMinorVersion: undefined,
        bluetooth: undefined,
        storage: {},
        getGamepads: {},
        getStorageUpdates: undefined,
        hardwareConcurrency: 16,
        mediaDevices: {},
        mozAlarms: undefined,
        mozConnection: undefined,
        mozIsLocallyAvailable: undefined,
        mozPhoneNumberService: undefined,
        msManipulationViewsEnabled: undefined,
        registerProtocolHandler: function(){},
        requestMediaKeySystemAccess: function(){},
        requestWakeLock: undefined,
        sendBeacon: function(){},
        serviceWorker: {},
        storeWebWideTrackingException: undefined,
        webkitGetGamepads: undefined,
        webkitTemporaryStorage: undefined,
        onLine: true,
        vibrate: function(){},
        getBattery: undefined,
        brave: false
    },
    Math: {
        hypot: function(){},
        imul: function(){}
    },
    Function: {
        prototype: {
            bind: function(){}
        }
    },
    Number: {
        parseInt: function(){}
    },
    InstallTrigger: null,
    Array: {
        prototype: {
            forEach: function(){}
        }
    },
    addEventListener: function(){},
    XMLHttpRequest: function(){},
    XDomainRequest: undefined,
    emit: undefined,
    DeviceOrientationEvent: function(){},
    DeviceMotionEvent: function(){},
    TouchEvent: undefined,
    spawn: undefined,
    chrome: undefined,
    Buffer: undefined,
    PointerEvent: function(){},
    ActiveXObject: undefined,
    opera: undefined,
    FileReader: function(){},
    XPathResult: function(){},
    RTCPeerConnection: function(){},
    mozRTCPeerConnection: function(){},
    webkitRTCPeerConnection: undefined
}

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
  
        var a = _bmak.cc(o)(d3, o + 1); // either multiplies, adds or substracts (o + 1) with/to/from d3
  
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
            if (!window.navigator.permissions) return void(_bmak.nav_perm = 6);
            _bmak.nav_perm = 8;

            var e = function(a, e) {
                return window.navigator.permissions.query({
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
            b = window.Function.prototype.bind ? 1 : 0,
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
          return Boolean(window.navigator.credentials) //y
          + (Boolean(window.navigator.appMinorVersion) << 1) //y
          + (Boolean(window.navigator.bluetooth) << 2) //y
          + (Boolean(window.navigator.storage) << 3) //y
          + (Boolean(window.Math.imul) << 4) //y
          + (Boolean(window.navigator.getGamepads) << 5) //y
          + (Boolean(window.navigator.getStorageUpdates) << 6) //y
          + (Boolean(window.navigator.hardwareConcurrency) << 7) //y
          + (Boolean(window.navigator.mediaDevices) << 8) //y
          + (Boolean(window.navigator.mozAlarms) << 9) //y
          + (Boolean(window.navigator.mozConnection) << 10) //y
          + (Boolean(window.navigator.mozIsLocallyAvailable) << 11) //y
          + (Boolean(window.navigator.mozPhoneNumberService) << 12) //y
          + (Boolean(window.navigator.msManipulationViewsEnabled) << 13) //y
          + (Boolean(window.navigator.permissions) << 14) //y
          + (Boolean(window.navigator.registerProtocolHandler) << 15) //y
          + (Boolean(window.navigator.requestMediaKeySystemAccess) << 16) //y
          + (Boolean(window.navigator.requestWakeLock) << 17) //y
          + (Boolean(window.navigator.sendBeacon) << 18) //y
          + (Boolean(window.navigator.serviceWorker) << 19) //y
          + (Boolean(window.navigator.storeWebWideTrackingException) << 20) //y
          + (Boolean(window.navigator.webkitGetGamepads) << 21) //y
          + (Boolean(window.navigator.webkitTemporaryStorage) << 22) //y
          + (Boolean(window.Number.parseInt) << 23)
          + (Boolean(window.Math.hypot) << 24);
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

        if(isNodeEnv === true){
            return window.document.getforminfo();
        }

        for (var t = "", a = "", e = window.document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
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
  
        //return null == _bmak.ins && (_bmak.ins = a), _bmak.cns = a, t;
        return t;
    },

    get_cookie: ()=>{
      return window.document.cookie['_abck'].value
    }

}

async function initVariables(){

    _bmak.cs = '0a46G5m17Vrp4o4c';
    _bmak.api_public_key = 'afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq';

    _bmak.start_ts = Date.now();
    _bmak.z1 = parseInt(_bmak.start_ts / 4064256);
    _bmak.d2 = parseInt(_bmak.z1 / 23);

    _bmak.informinfo = _bmak.getforminfo(); // only call once?


    try{
        _bmak.brv = window.navigator.brave && await navigator.brave.isBrave() ? 1 : 0;
    }catch(e){
        _bmak.brv = 0;
    }

    _bmak.np();
    _bmak.bc();
    _bmak.to();

}

function generateFingerprint(){
    
    var Generated = [
        '',
        '1.75',
        _bmak.uar(),
        '',
        _bmak.xagg,
        window.navigator.productSub,
        window.navigator.language,
        window.navigator.product,
        window.navigator.plugins.length,
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
        `dm:${"number" == typeof window.document.documentMode ? 1 : 0}`,
        `cwen:${window.chrome && window.chrome.webstore ? 1 : 0}`,
        `non:${window.navigator.onLine ? 1 : 0}`,
        `opc:${window.opera ? 1 : 0}`,
        `fc:${typeof window.InstallTrigger != "undefined" ? 1 : 0}`,
        `sc:${window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 ? 1 : 0}`, /* todo */
        `wrc:${typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection ? 1 : 0}`,
        `isc:${'mozInnerScreenY' in window ? window.mozInnerScreenY : 0}`,
        `vib:${typeof window.navigator.vibrate ? 1 : 0}`,
        `bat:${typeof window.navigator.getBattery ? 1 : 0}`,
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
        _bmak.get_cookie(),
        _bmak.ab(_bmak.get_cookie()),
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
        void 0 !== window.XPathResult || void 0 !== window.document.XPathResult ? 1 : 0,
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

    return SensorData
}

/* Akamai End */



function getSubmitUrl(){

    return new Promise(async(resolve, reject)=>{

      var response = await client.get(targetUrl, {
        //headers: { 'User-Agent': window.navigator.userAgent }
      });
  
      var submitUrl = response.data.match(/src\=\"\/[a-zA-Z0-9\-\/]+/gi);
      submitUrl = submitUrl.at(-1).split('"')[1];
      submitUrl = `${targetUrlParsed.protocol}//${targetUrlParsed.host}${submitUrl}`;
  
      window.document.cookie['_abck'].value = response.headers['set-cookie'].find((c)=>{return c.startsWith('_abck')}).split(';')[0].split('=')[1];

      return resolve(submitUrl);

    })

}

function submitSensorData(SensorData, submitUrl){

    return new Promise(async(resolve, reject)=>{

        var response = await client.post(submitUrl, {
            sensor_data: SensorData
        }, {
          //headers: { 'User-Agent': window.navigator.userAgent }
        });

        if(response.data.success !== true){

            console.log('Error:', response.data);

            return reject();

        }else{

            console.log('Successfully submitted SensorData!');

            return resolve();

        }
  
    })

}

/*
async function scrape(){

    return new Promise(async(resolve, reject)=>{

        var postData = {
            "searchData": {
                "requestorInfo": {
                "transactionIdentifier": "1665318639053",
                "requestorInfo": null,
                "language": null,
                "country": null,
                "user": null,
                "requestorExtraInfo": null
                },
                "voucherdata": null,
                "hotelSearchData": [
                {
                "hotelCode": "DEHH.HAHOR",
                "roomSearchData": [
                {
                "startDate": 1666476000000,
                "endDate": 1666562400000,
                "stayOptionsList": null,
                "filterRoomConfigurationList": null,
                "paxCombination": {
                "paxList": [
                {
                "paxType": 1,
                "age": null
                }
                ]
                }
                }
                ]
                }
                ],
                "destinationSearchData": null,
                "eventToolSearchData": {
                "eventToolReservationId": null,
                "eventTool": null,
                "urlEvent": null
                },
                "loyaltySearchData": null,
                "b2bData": null,
                "bookingReservationB2E": false,
                "familyFriendsB2E": false,
                "contactPhone": "",
                "isSearchLandingExpress": false,
                "nearByHotelsSearchComingFromPromos": null
            },
            "contracts": [
            "NHWEB",
            "NHWEB_NHR"
            ],
            "isOptimicedCall": true,
            "backingBeanInfo": {
            "idioma": "en",
            "fini": 1666476000000,
            "fout": 1666562400000,
            "nadults1": 1,
            "nadults2": null,
            "nadults3": null,
            "nadults4": null,
            "nadults5": null,
            "nadults6": null,
            "nadults7": null,
            "nadults8": null,
            "nadults9": null,
            "nchilds1": 0,
            "nchilds2": null,
            "nchilds3": null,
            "nchilds4": null,
            "nchilds5": null,
            "nchilds6": null,
            "nchilds7": null,
            "nchilds8": null,
            "nchilds9": null,
            "hotelCode": null,
            "hotelId": "DEHH.HAHOR",
            "searchStringID": "",
            "destinationId": "Hamburg",
            "destinationCode": "hamburg",
            "poiId": null,
            "virtualHotel": null,
            "urlHotel": null,
            "reload": false,
            "party": null,
            "isRewardsRate": null,
            "pcode": "",
            "campaignId": null,
            "ratePlansPromo": null,
            "hotelsPromo": null,
            "alternativeHotelsData": null,
            "groupon": false,
            "gvoucher": false,
            "normalSearchPromoNoDispo": null,
            "busqId": "1665318575854",
            "tipoBuscador": "Result Page",
            "stars": null,
            "voucherCode": null,
            "services": null,
            "transactionIdentifier": "1665318639053",
            "roomCategoryCode": null,
            "ratePriceCode": null,
            "ratePriceGroupCode": null,
            "regimen": null,
            "divisa": "",
            "deeplink": true,
            "style": null,
            "eventTool": null,
            "evId": null,
            "urlEvent": null,
            "isEventTab": null,
            "contactPhone": "",
            "b2bData": null,
            "b2bUserData": null,
            "b2b": null,
            "promoCompId": null,
            "promoTemplateId": null,
            "nbabies1": 0,
            "nbabies2": null,
            "nbabies3": null,
            "nbabies4": null,
            "nbabies5": null,
            "nbabies6": null,
            "nbabies7": null,
            "nbabies8": null,
            "nbabies9": null,
            "userCtCountryCode": null,
            "prepaid": null,
            "_ga": null,
            "brand": null
            },
            "hotelFrontCode": "tcm:41-34864-16"
        };

        try{

            var response = await client.post('https://www.nh-hotels.com/rest/hotel/DEHH.HAHOR/availability', postData, {
                //headers: { 'User-Agent': window.navigator.userAgent }
            });

            console.log(response.data);

        }catch(e){
            console.log(e);
        }

        return resolve();
  
    })

}
*/

async function main(){

    var submitUrl = await getSubmitUrl();

    console.log('Retrieved endpoint url:', submitUrl);

    await initVariables();

    var Fingerprint = generateFingerprint();

    var SensorData = fillScheme(Fingerprint);

    await submitSensorData(SensorData, submitUrl);

    console.log(jar);

    // Here are the cookies, now the request to a secured endpoint can be made

    //var scrapedData = await scrape();

}


async function tokenOnly(){

    await initVariables();

    var Fingerprint = generateFingerprint();

    var SensorData = fillScheme(Fingerprint);

    console.log(SensorData);

}


if(process.argv[2] === 'token'){
    tokenOnly();
}else{
    main(); 
}





