function splitData(inputSensorData){

  var inputSensorDataSplit = inputSensorData.split(/-1,2,-94,-[0-9]+,/g);


  inputSensorDataSplit[0] = [inputSensorDataSplit[0].substr(0, inputSensorDataSplit[0].length-4), inputSensorDataSplit[0].substr(-4)];

  inputSensorDataSplit[1] = inputSensorDataSplit[1].split(',uaend,');
  inputSensorDataSplit[1][1] = inputSensorDataSplit[1][1].split(',').join('<#s#>');
  inputSensorDataSplit[1] = inputSensorDataSplit[1].join('<#s#>uaend<#s#>').split('<#s#>');

  inputSensorDataSplit[3] = inputSensorDataSplit[3].split(',');

  inputSensorDataSplit[14] = inputSensorDataSplit[14].split(',');
  inputSensorDataSplit[15] = inputSensorDataSplit[15].split(',');

  inputSensorDataSplit[17] = inputSensorDataSplit[17].split(',');
  inputSensorDataSplit[27] = inputSensorDataSplit[27].split(';');

  inputSensorDataSplit = inputSensorDataSplit.map((c)=>{return typeof c === 'object' ? c.join('<#s#>') : c}).join('<#s#>').split('<#s#>');

  return inputSensorDataSplit

}


function fillTable(SensorData){

  var inputSensorData = `7a74G7m23Vrp0o5c9357671.75-1,2,-94,-100,Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36,uaend,12147,20030107,en-US,Gecko,5,0,0,0,407943,8827753,1920,1050,1920,1080,1038,947,1920,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,8101,0.19054413795,828994413876.5,0,loc:-1,2,-94,-131,-1,2,-94,-101,do_en,dm_en,t_en-1,2,-94,-105,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-102,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-108,-1,2,-94,-110,0,4,160826,410,20,-1;-1,2,-94,-117,-1,2,-94,-111,-1,2,-94,-109,-1,2,-94,-114,-1,2,-94,-103,-1,2,-94,-112,https://www.nh-hotels.com/booking/step1-rates?fini=24/10/2022&fout=27/10/2022&nadults1=2&nchilds1=0&nbabies1=0&hotelId=ESBA.PODIU&divisa=&gvoucher=false-1,2,-94,-115,1,161292,32,0,0,0,0,2,0,1657988827753,-999999,17736,0,1,2956,1,0,3,160826,0,8CC5522388D0BCEAA36B0C02DCADB721~-1~YAAQ12QRAvTLavuBAQAA+/XUBwgZ2ACGhc2O2sU5VyOFo+fKYVkuwUxtaT8AsLse8I4z5EvKf0+i4MODGKR7A3KWc2Ui+PQBZMZkRa5fAv9KiNy8MXsS17cSN/qZOzBmNkIzXmUZZB9+Dxsv1m9itCemSD2rG7TJPq4fcrFCniNdzxKAdJzZ6ioHYw5cLoLy36yDY/rV1KyEeNHVIimeMOcEmTMlOGV2AyH+63mUqhQwXvJKScgamWLiT7e2YD8RfFk0ewpDx5kwo+Qa+mVc9dFmmMJz1P+BXHtkIWVI7Dpd3YZtzk4Okbh9b5i7UVUWk7ZAp2GksEC4AAi9LE8LDsllXC37INALADNon1CyenVDuXPXqYvj7l3YVeBG2AL5o4j7u0CNEfbK7Ad/KR9aRJ260CBI/CSnW33cv9FyeqZCKO6GncPhOg==~0~-1~-1,39405,-1,-1,30261693,PiZtE,17812,79,0,-1-1,2,-94,-106,0,0-1,2,-94,-119,-1-1,2,-94,-122,0,0,0,0,1,0,0-1,2,-94,-123,-1,2,-94,-124,-1,2,-94,-126,-1,2,-94,-127,8-1,2,-94,-70,-1-1,2,-94,-80,94-1,2,-94,-116,26483208-1,2,-94,-118,113129-1,2,-94,-129,-1,2,-94,-121,;444475;-1;0`;

inputSensorData = `7a74G7m23Vrp0o5c9368191.75-1,2,-94,-100,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0,uaend,11059,20100101,en-US,Gecko,5,0,0,0,408876,7337348,2560,1400,2560,1440,1221,1315,2576,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:1,sc:0,wrc:1,isc:85,vib:1,bat:0,x11:0,x12:1,5641,0.880719127440,830888668673.5,0,loc:-1,2,-94,-131,-1,2,-94,-101,do_en,dm_en,t_dis-1,2,-94,-105,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-102,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-108,-1,2,-94,-110,-1,2,-94,-117,-1,2,-94,-111,-1,2,-94,-109,-1,2,-94,-114,-1,2,-94,-103,-1,2,-94,-112,https://www.nh-hotels.com/booking/step1-rates?fini=24/10/2022&fout=27/10/2022&nadults1=2&nchilds1=0&nbabies1=0&hotelId=ESBA.PODIU&divisa=&gvoucher=false-1,2,-94,-115,1,32,32,0,0,0,0,2,0,1661777337347,-999999,17777,0,0,2962,0,0,3,0,0,5EA787D910591BD318B70314E2456747~-1~YAAQddhraDeD7MmCAQAAIwem6QhtjPCQP5WpY8XpDbj4yswTLjFyG2tnV+Cydop+YLiG35/8g0GEJyXaMr//NDhsILZmkq+VT2CKzms6mHdxXz0HkGjr/q3Su2RzhugqSTNgonZgka2tBZ7wxVIqI9S/ngY009uSZwoyyz5lptvwv/BdMbFiDzgdZg0vDgJFvBuWsNO6h6Hf3GfxecjzcxlTwqgaH9H4l90UaKqVaHIKUFtZYO3vdkEGzqo3GdyIAeOCoWFU0xJs2RFqvDLH/V7Tg9rwEVNGD/C6oRHH1Sa9sA0tdbXUXRcSYN3T7slKlqKuFr5fPq0Cnm42RsPAn7zoXwIvtIMKN9ll/X2mY1AxT6EQpLQE8UDi2ZMgpV/U3BaQDUZ3VVti+EF8bPI=~-1~-1~-1,37539,-1,-1,25543097,PiZtE,24333,33,0,-1-1,2,-94,-106,0,0-1,2,-94,-119,-1-1,2,-94,-122,0,0,0,0,1,0,0-1,2,-94,-123,-1,2,-94,-124,-1,2,-94,-126,-1,2,-94,-127,8-1,2,-94,-70,-1-1,2,-94,-80,94-1,2,-94,-116,990541932-1,2,-94,-118,107580-1,2,-94,-129,-1,2,-94,-121,;5;-1;0`;
inputSensorData = `7a74G7m23Vrp0o5c9361211.75-1,2,-94,-100,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0,uaend,11059,20100101,en-US,Gecko,5,0,0,0,409151,7745558,2560,1400,2560,1440,1355,1315,2576,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:1,sc:0,wrc:1,isc:85,vib:1,bat:0,x11:0,x12:1,5641,0.283208796141,831448872779,0,loc:-1,2,-94,-131,-1,2,-94,-101,do_en,dm_en,t_dis-1,2,-94,-105,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-102,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,0,1,1340,422,0;0,-1,0,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-108,-1,2,-94,-110,-1,2,-94,-117,-1,2,-94,-111,-1,2,-94,-109,-1,2,-94,-114,-1,2,-94,-103,-1,2,-94,-112,https://www.nh-hotels.com/booking/step1-rates?fini=24/10/2022&fout=27/10/2022&nadults1=2&nchilds1=0&nbabies1=0&hotelId=ESBA.PODIU&divisa=&gvoucher=false-1,2,-94,-115,1,32,32,0,0,0,0,1,0,1662897745558,-999999,17789,0,0,2964,0,0,3,0,0,ECFCF80DE0800220210E26A3D30A7209~-1~YAAQjNlraH2gHvOCAQAA/2VsLAhOvxTk3/5SlzrlLXe1eNdH8wTX0Bdy3iqUL90hUm3a9J9VN0DFDRbgiaPP7ZaTHjRRvWO6Jh1zMx1cfl17MYNWJ00Y8OhovbdBbzE5UvXMTqOD4CnDsiewpWMivoGLWtxOkZjxPLiJ1j8a0uq5zyzdo72ajs/ICcWvYpmsGD0smoOwGS7or8pIk2J4S7c+/Pb0hBu7p3d5rZjOOh5hlPIFABncxtN+4vpna7ywIoLuCpf2/2VgV8/LhnoQ48IjqHbMsbIa9GKlpyQiqhSRwBZ1jQEEv88mbvr5dmbKlsmE8pJfD1NErKTbXMdbChJW1Fg0Vp8vFDdJ3dy3XmbV5H1uLJlhsCAM/kuvvTklVeYZKeZm4ff1eyUi2FximiI54MmeXwYyyoWxNsXfnFWOwBhLphe0T4M=~-1~-1~-1,40947,-1,-1,26067385,PiZtE,82902,80,0,-1-1,2,-94,-106,0,0-1,2,-94,-119,-1-1,2,-94,-122,0,0,0,0,1,0,0-1,2,-94,-123,-1,2,-94,-124,-1,2,-94,-126,-1,2,-94,-127,8-1,2,-94,-70,-1-1,2,-94,-80,94-1,2,-94,-116,1045650600-1,2,-94,-118,110909-1,2,-94,-129,-1,2,-94,-121,;21;-1;0`;
inputSensorData = `7a74G7m23Vrp0o5c9361591.75-1,2,-94,-100,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0,uaend,11059,20100101,en-US,Gecko,5,0,0,0,409176,9080458,2560,1400,2560,1440,2560,1315,2576,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:1,sc:0,wrc:1,isc:85,vib:1,bat:1,x11:0,x12:1,5641,0.328101046164,831499540229,0,-1,2,-94,-131,-1,2,-94,-101,do_en,dm_en,t_dis-1,2,-94,-105,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,1,1,1340,422,0;0,-1,1,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-102,0,-1,0,1,1672,-1,0;1,-1,0,1,2035,-1,0;0,-1,0,1,1461,101,0;0,-1,0,1,1246,419,0;0,-1,0,1,907,1402,1;0,-1,1,1,1340,422,0;0,-1,1,1,1469,446,0;0,-1,0,0,2354,1143,0;-1,2,-94,-108,-1,2,-94,-110,-1,2,-94,-117,-1,2,-94,-111,-1,2,-94,-109,-1,2,-94,-114,-1,2,-94,-103,-1,2,-94,-112,https://www.nh-hotels.com/booking/step1-rates?fini=24/10/2022&fout=27/10/2022&nadults1=2&nchilds1=0&nbabies1=0&hotelId=ESBA.PODIU&divisa=&gvoucher=false-1,2,-94,-115,1,32,32,0,0,0,0,1,0,1662999080458,-999999,17790,0,0,2965,0,0,1,0,0,,,-1,-1,26067385,PiZtE,87166,83,0,-1-1,2,-94,-106,0,0-1,2,-94,-119,-1-1,2,-94,-122,0,0,0,0,1,0,0-1,2,-94,-123,-1,2,-94,-124,-1,2,-94,-126,-1,2,-94,-127,8-1,2,-94,-70,-1-1,2,-94,-80,94-1,2,-94,-116,572068854-1,2,-94,-118,69262-1,2,-94,-129,-1,2,-94,-121,;1;-1;0`;
  /*
  var inputSensorDataSplit = inputSensorData.split(',uaend,');

  inputSensorDataSplit[0] = inputSensorDataSplit[0].split(/-1,2,-94,-[0-9]+,/g).join('<#s#>');
  inputSensorDataSplit[1] = inputSensorDataSplit[1].split(/-1,2,-94,-[0-9]+,/g).join('<#s#>').split(',').join('<#s#>');

  inputSensorDataSplit = (inputSensorDataSplit[0] + '<#s#>uaend<#s#>' + inputSensorDataSplit[1]).split('<#s#>');
  */




  //console.log(inputSensorDataSplit.length);

  var inputSensorDataSplit = splitData(inputSensorData);
  var SensorDataSplit = splitData(SensorData || fillScheme(inputSensorDataSplit));



  console.log('eq', inputSensorData);
  console.log('eq', fillScheme(inputSensorDataSplit));




  document.body.querySelector('#sensorData').innerHTML = inputSensorData;

  const elemTable = document.body.querySelector('table');



  const segments = [
    'Constant from bmak.cs and bmak.api_public_key + Combination from timestamp',
    'version',
    'useragent',
    '',
    'xagg; array of function-check',
    'psub; navigator.productSub',
    'lang; navigator.language',
    'prod; navigator.product',
    'plen; navigator.plugins.length',
    'pen; checks for phantom',
    'wen; checks for window.webdriver',
    'den; checks for Headless chrome property',
    'z1; parseInt(bmak.start_ts / 4064256); bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1))',
    'd3; Date.now() % 10000000; bmak.x2() % 1e7',
    'window.screen.availWidth',
    'window.screen.availHeight',
    'window.screen.width',
    'window.screen.height',
    'window.innerWidth',
    'window.innerHeight',
    'window.outerWidth',
    '',
    'window.callPhantom available',
    'window.ActiveXObject available',
    'typeof document.documentMode available',
    'window.chrome.webstore available',
    'navigator.onLine',
    'window.opera',
    '"undefined" != typeof InstallTrigger',
    `window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0`,
    `typeof window.RTCPeerConnection || 'function' == typeof window.mozRTCPeerConnection || 'function' == typeof window.webkitRTCPeerConnection`,
    `'mozInnerScreenY' in window ? window.mozInnerScreenY : 0`,
    'typeof navigator.vibrate',
    'typeof navigator.getBattery',
    'Array.prototype.forEach ? 0 : 1',
    `'FileReader' in window`,
    'bmak.ab(bmak.uar()); sum of ascii codes of useragent',
    `random number;
  var d = Math.random();
  var k = (d + '').slice(0, 11) + parseInt(1000 * d / 2);`,
    'bmak.start_ts / 2',
    'brv; check if browser is brave',
    '',
    '',
    `window.DeviceOrientationEvent ? 'do_en' : 'do_dis'`,
    `window.DeviceMotionEvent ? 'dm_en' : 'dm_dis'`,
    `window.TouchEvent ? 't_en' : 't_dis'`,
    'informinfo from getforminfo()',
    'informinfo from getforminfo()',
    '',
    'mact; mouse-events',
    '',
    '',
    '',
    '',
    '',
    'getdurl; document URL',
    'bmak.ke_vel + 1; default: 1',
    'bmak.me_vel + 32',
    'bmak.te_vel + 32',
    'bmak.doe_vel',
    'bmak.dme_vel',
    'bmak.pe_vel',
    'sum of ke_vel, me_vel, doe_vel, dme_vel, te_vel, pe_vel',
    'ms passed since start; bmak.get_cf_date() - bmak.start_ts',
    'init_time; default 0',
    'start_ts',
    'fpcf.td',
    'd2',
    'ke_cnt',
    'me_cnt',
    'parseInt(bmak.d2 / 6)',
    'pe_cnt',
    'te_cnt',
    'ms passed since start; bmak.get_cf_date() - bmak.start_ts',
    'ta',
    'n_ck',
    'get_cookie(); value of _abck cookie',
    'limited ascii sum of _abck cookie value',
    'fpcf.rVal',
    'fpcf.rCFP',
    'fas(); checks for keys in Math, Number and navigator',
    '',
    'random number between 10,000 and 110,000',
    'cal_dis on semi-random number',
    'hbs(); checks for browser automation drivers',
    'navigator.webdriver ? navigator.webdriver : -1',
    'aj_type',
    'aj_indx',
    'mr; getmr(); performance metrics; default -1',
    'window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_',
    'null != window.document.documentElement.getAttribute("webdriver")',
    'void 0 !== navigator.webdriver && navigator.webdriver',
    'void 0 !== window.webdriver',
    'void 0 !== window.XPathResult || void 0 !== document.XPathResult',
    'null != window.document.documentElement.getAttribute("driver")',
    'null != window.document.documentElement.getAttribute("selenium")',
    '',
    '',
    '',
    'nav_perm',
    'fpcf.fpValstr',
    'bmak.ab(bmak.fpcf.fpValstr)',
    'o9; semi-random number based on timestamp',
    'ascii sum of sensor data',
    '',
    '',
    'execution time of bpd',
    'tst; default is -1 on first run; otherwise time startTracking took?',
    'execution time of the last few lines; will equal 0',
  ]


  segments.forEach((segment, i) => {
    if(segment === '')return
    elemTable.innerHTML += `
    <tr>
      <th>${segment}</th>
      <td>${inputSensorDataSplit[i]}</td>
      <td>${SensorDataSplit[i]}</td>
    </tr>`;
  });


}