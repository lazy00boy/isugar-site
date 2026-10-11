/* iSugar — lingua e link condivisi */

// ▼▼ MODIFICA QUI il tuo numero WhatsApp (prefisso internazionale, senza + e senza spazi)
var WHATSAPP_NUMBER = '391234567890';
var WHATSAPP_TEXT = {
  it: 'Ciao! Vorrei informazioni su iSugar.',
  en: 'Hi! I would like some information about iSugar.'
};

var EN = {
  t_index:'iSugar · Your glucose, always in sight',
  t_guide:'Setup guide · iSugar',
  t_tos:'Terms of service · iSugar',
  nav_how:'How it works', nav_guide:'Setup guide', nav_buy:'Buy', nav_tos:'Terms of service', nav_contact:'Contact', nav_home:'Home',
  h_eyebrow:'Desktop glucose monitor',
  h_title:'Your glucose, always in sight.',
  h_lede:'iSugar shows your FreeStyle Libre* sensor data in real time on a small, always‑on display. One glance and you know how things are going, without opening the app every time. For you and the people you love.',
  cta_ebay:'Buy on eBay', cta_wa:'Message us on WhatsApp',
  chip_a:'Always visible', chip_b:'at home, at the office, on the nightstand',
  tr1:'Made in Italy', tr1s:'Independent brand', tr2:'Data stays on the device', tr2s:'No servers of ours', tr3:'3‑step setup', tr3s:'Scan, connect, done', tr4:'Multilingual',
  s_eyebrow:'Who it is for', s_title:'A small device, a lot of peace of mind.',
  s_lede:'Made for people living with diabetes and for those who care for them. The reading stays there, clear and easy to read, without picking up a phone.',
  s1:'For you', s1d:'On your desk while you work or study, on the nightstand at night.',
  s2:'For your kids', s2d:'Parents can check their child\'s reading from the kitchen or living room.',
  s3:'For grandparents', s3d:'A big, simple display: no apps to open, no menus to figure out.',
  f_eyebrow:'The product', f_title:'Everything you need, nothing more.',
  f1:'Clear, easy display', f1d:'Current reading in large digits, trend arrow, "in range" status and a 24‑hour chart. Readable from across the room.',
  f2:'Compact and light', f2d:'10 × 5.5 × 1.5 cm and 90 g. Put it wherever you need it.',
  f3:'Just 15 mm thin', f3d:'Fits in a bag or backpack, at home or on the go.',
  f4:'Recycled plastic', f4d:'The case is 3D printed in Italy with recycled material.',
  f5:'Always on via USB', f5d:'Powered by the included cable: PC, wall adapter or power bank.',
  c_eyebrow:'How it works', c_title:'Ready in minutes.',
  c1:'Plug in and scan', c1d:'Power iSugar with the USB cable and scan the QR code shown on screen.',
  c2:'Enter your details', c2d:'Nickname, home Wi‑Fi and the login of the account linked to the sensor.',
  c3:'Done', c3d:'iSugar connects and shows the reading in real time. Nothing else to do.',
  c_cta:'Read the full guide →',
  col_eyebrow:'Colors', col_title:'Available in 4 colors.', col_lede:'Pick the one that matches your home or your style.',
  col1:'Aqua green', col2:'Sky blue', col3:'Pink', col4:'Black',
  sp_eyebrow:'Specifications', sp_title:'The details.',
  sp1:'Data source', sp1v:'FreeStyle Libre* sensor, real time',
  sp2:'Display', sp2v:'Color touchscreen with reading, trend and chart',
  sp3:'Size', sp4:'Weight', sp5:'Connection', sp5v:'2.4 GHz Wi‑Fi',
  sp6:'Power', sp6v:'5V USB cable (no internal battery)',
  sp7:'Languages', sp7v:'Italiano, English, Français, Español, Deutsch and more',
  sp8:'Case', sp8v:'3D printed, recycled plastic',
  sp9:'Privacy', sp9v:'Data and login stored only on the device',
  sp10:'Updates', sp10v:'Software can be updated when new versions are released',
  box_t:'In the box', box1:'iSugar monitor', box2:'USB cable', box3:'User manual (also digital)', box4:'Protective packaging',
  power:'🔌 <b>No internal battery:</b> iSugar stays on as long as it is connected via USB to a PC, 5V wall adapter, power bank or USB hub.',
  w_t:'Important information',
  w1:'iSugar <b>is not a medical device</b> and is not certified as one.',
  w2:'It does not replace the official FreeStyle Libre app: it only shows the data read from the sensor, which remain managed and verified through the official app.',
  w3:'<b>Before any treatment decision</b> (e.g. taking insulin) always confirm the reading in the official app.',
  w4:'iSugar <b>has no alarm system</b>.',
  tm:'*FreeStyle Libre is a registered trademark of Abbott. iSugar is an independent compatible device, not made or endorsed by Abbott.',
  b_eyebrow:'Buy', b_title:'Where to get it.',
  b1tag:'Recommended', b1d:'Protected payment and tracked shipping, backed by eBay.', b1b:'Go to the listing',
  b2d:'Questions before buying, or want a specific color? Message us.', b2b:'Open the chat',
  b3tag:'Coming soon', b3d:'Soon available on our Etsy shop too.',
  q_title:'Frequently asked questions.',
  q1:'Does it work with my sensor?', q1a:'iSugar reads data from your account linked to the FreeStyle Libre* sensor. You need an active account and the official app working on your phone. If you are unsure about your model, message us before buying.',
  q2:'Does my phone need to be nearby?', q2a:'No. iSugar connects to your home Wi‑Fi on its own. The phone is only needed for the first setup.',
  q3:'Does it have a battery?', q3a:'No, it must stay plugged in via USB. To take it out of the house you can use a power bank.',
  q4:'Where does my data go?', q4a:'Nickname, Wi‑Fi and login stay saved only on the device memory. We have no servers and never receive your data.',
  q5:'Does it beep when readings are high or low?', q5a:'No, iSugar has no alarms. Keep using the official app for alerts.',
  q6:'Can I change Wi‑Fi network or account?', q6a:'Yes, with a reset from the device settings and a new setup. The steps are in the <a href="istruzioni.html#problemi">guide</a>.',
  sup_t:'Support', sup_d:'For help or setup issues, write to us and we will reply as soon as possible.',
  foot:'© 2026 iSugar · Designed and made in Italy. Not a medical device.',
  sticky_buy:'Buy', sticky_help:'Support',

  g_eyebrow:'Setup guide', g_title:'Set up your iSugar.',
  g_lede:'It takes about 5 minutes. Keep your smartphone, your home Wi‑Fi password and your account details at hand.',
  toc1:'Before you start', toc2:'Setup', toc3:'Reading the display', toc4:'Troubleshooting', toc5:'Safety',
  print:'Print or save as PDF',
  p_title:'Before you start',
  p1:'2.4 GHz Wi‑Fi', p1d:'iSugar does not support 5 GHz networks. Most routers offer both: use the 2.4 GHz one.',
  p2:'Active LibreLinkUp account', p2d:'iSugar reads the data as a "follower" through LibreLinkUp. See the steps below.',
  p3:'A smartphone', p3d:'Only needed for setup, with a camera to scan the QR code.',
  p4:'USB power', p4d:'The included cable and a 5V USB socket: PC, wall adapter or power bank.',
  llu_t:'How to enable LibreLinkUp (one time only)',
  llu1:'On the phone of the person wearing the sensor, open the <b>FreeStyle Libre</b> app and go to the sharing section: <b>Connected apps → LibreLinkUp</b>.',
  llu2:'Tap <b>Add connection</b> and enter an email address (yours or a family member\'s).',
  llu3:'Download the <b>LibreLinkUp</b> app and sign up with that same email.',
  llu4:'Accept the invitation and check that the glucose reading appears in the LibreLinkUp app.',
  llu_note:'💡 The login to enter in iSugar is the <b>email and password of the LibreLinkUp account</b>. If you can sign in to the LibreLinkUp app and see the reading, iSugar will work.',
  c_title2:'Step by step setup',
  g1:'Power on iSugar', g1d:'Connect the USB cable to iSugar and to a power source. On first start it enters <b>setup mode</b> and shows a Wi‑Fi network name, its password and a QR code on screen.',
  mock_t:'Setup mode active', mock_d:'Connect to the Wi‑Fi network shown to continue.', mock_net:'Network', mock_ssid:'as shown on screen', mock_url:'Address',
  g2:'Scan the QR code', g2d:'Point your phone camera at the QR code and confirm joining the iSugar network. Otherwise, open your phone Wi‑Fi settings and join the network shown on screen manually, with the password shown.',
  g3:'Open the setup page', g3d:'It usually opens by itself. If it does not within a few seconds, open your phone browser and type <code>192.168.4.1</code> in the address bar.',
  g3n:'📱 If your phone warns "this network has no Internet access", choose <b>Stay connected</b>. That is normal: this network is only used to talk to iSugar.',
  g4:'Pick a nickname', g4d:'This is the name shown at the top of the display, for example the name of the person wearing the sensor.',
  g5:'Connect your home Wi‑Fi', g5d:'Select your network (2.4 GHz) and enter the password. Mind uppercase and lowercase letters.',
  g6:'Enter your LibreLinkUp login', g6d:'Email and password of the LibreLinkUp account. iSugar checks them right away: if they are correct, setup is completed.',
  g6n:'If you see <b>"Wrong credentials or account does not exist"</b>, check that you can sign in to the LibreLinkUp app with the same details and that you accepted the invitation.',
  g7:'Done!', g7d:'iSugar joins your home network and shows the reading after a few moments. Your phone automatically goes back to your Wi‑Fi. From now on just keep it powered: when switched back on, it reconnects by itself.',
  d_title:'Reading the display',
  d1:'<b>Current reading</b> in mg/dL, large in the center.',
  d2:'<b>Arrow and change</b>: show whether the reading is rising, falling or steady.',
  d3:'<b>Status</b>: "In range" when the reading is within the expected range.',
  d4:'<b>Last update</b>: the time of the last reading received. If it is old, see "Troubleshooting".',
  d5:'<b>Chart</b>: the trend over the last 24 hours.',
  d6:'<b>Gear icon</b> top right: opens the settings.',
  pr_title:'Troubleshooting',
  pr1:'The setup page does not open', pr1a:'Make sure you are connected to the iSugar network, then open your browser and go to <code>192.168.4.1</code>. If it still does not open, turn off mobile data for a moment and try again.',
  pr2:'"Wrong credentials or account does not exist"', pr2a:'Open the LibreLinkUp app and try signing in with the same email and password. If that fails too, reset your password from the app. Also make sure you accepted the sharing invitation.',
  pr3:'iSugar does not connect to Wi‑Fi', pr3a:'Check that the network is 2.4 GHz and the password is correct. Keep iSugar close to the router for the first connection. If you typed the wrong password, repeat the setup (see below).',
  pr4:'The reading does not update', pr4a:'Check the "Last update" time. Make sure the official app on the sensor wearer\'s phone is receiving data and your home Wi‑Fi is working. If the sensor was just replaced, wait for its warm‑up period to end.',
  pr5:'The screen is off', pr5a:'iSugar has no battery: check the cable and try another USB socket or another 5V adapter.',
  pr6:'I want to change Wi‑Fi network or account', pr6a:'Tap the gear icon, open the settings and run a <b>factory reset</b>. iSugar erases the saved data and restarts in setup mode: repeat the steps from step 1.',
  pr_help:'Still stuck? Write to <a href="mailto:isugar.support@gmail.com"><b>isugar.support@gmail.com</b></a> describing the problem and what you see on screen.',
  sec_title:'Safety and privacy',
  sec4:'Nickname, Wi‑Fi and login stay saved only on the device. A factory reset erases them permanently.',

  tos_eyebrow:'Legal', tos_title:'Terms of service', tos_upd:'Last updated: October 2026',
  tos1:'Nature of the product', tos1d:'iSugar is an independent device, handmade in Italy, that shows on a display the data read from the FreeStyle Libre sensor through the user\'s LibreLinkUp account.',
  tos2:'Not a medical device', tos2d:'iSugar is not a medical device, is not certified as one and does not replace the official FreeStyle Libre app. Before any treatment decision (e.g. taking insulin) the glucose reading must be confirmed in the official app. iSugar has no alarm system.',
  tos3:'Trademarks', tos3d:'FreeStyle Libre and LibreLinkUp are registered trademarks of Abbott. iSugar is an independent compatible device, not made, sponsored or endorsed by Abbott.',
  tos4:'Data and privacy', tos4d:'Nickname, Wi‑Fi and login entered during setup are stored only on the device memory. The login is used only to connect to the official service and read the data. The maker runs no servers of its own and does not collect or receive any user data.',
  tos5:'Data deletion', tos5d:'A factory reset permanently and irreversibly erases all data stored on the device.',
  tos6:'Power', tos6d:'The device has no internal battery and only works when powered through a USB cable from a 5V source.',
  tos7:'Limitation of liability', tos7d:'Use of the device is at your own risk. The maker is not liable for damage resulting from hardware or software malfunctions, interruptions of the official service or of the connection, improper use, unauthorized third party interventions, or for consequences of decisions based on the readings displayed.',
  tos8:'Updates and changes', tos8d:'Features, software and availability of the product may change without notice. Software updates are made available when released.',
  tos9:'Contact', tos9d:'For questions or support: <a href="mailto:isugar.support@gmail.com">isugar.support@gmail.com</a>.'
};

(function(){
  var nodes = document.querySelectorAll('[data-i18n]');
  var IT = {};
  nodes.forEach(function(n){ IT[n.getAttribute('data-i18n')] = n.innerHTML; });

  function getSaved(){ try{ return localStorage.getItem('isugar_lang'); }catch(e){ return null; } }
  function save(l){ try{ localStorage.setItem('isugar_lang', l); }catch(e){} }

  function apply(lang){
    nodes.forEach(function(n){
      var k = n.getAttribute('data-i18n');
      var v = lang === 'en' ? EN[k] : IT[k];
      if (v !== undefined) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    var wa = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WHATSAPP_TEXT[lang]);
    document.querySelectorAll('[data-wa]').forEach(function(a){ a.href = wa; a.target = '_blank'; a.rel = 'noopener'; });
  }

  var lang = getSaved() || ((navigator.language || 'it').toLowerCase().indexOf('it') === 0 ? 'it' : 'en');
  apply(lang);
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ var l = b.getAttribute('data-lang'); save(l); apply(l); });
  });
})();
