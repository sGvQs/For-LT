lottie.loadAnimation({
  container: document.getElementById('main'), // アニメーションを追加する要素
  renderer: 'svg', // レンダリングのタイプ
  loop: true, // アニメーションをループさせるかどうか
  autoplay: true, // アニメーションを自動再生するかどうか
  path: 'anime.json', // アニメーションのjsonファイルのパス
});

// vanta.js

VANTA.CLOUDS({
  el: "#clouds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x868af2,
  cloudColor: 0x4e8df7,
  cloudShadowColor: 0x33336e,
  sunColor: 0xff8200,
  sunGlareColor: 0xff6432,
  sunlightColor: 0xbf52fc,
  speed: 1
});

//darkmode.js

const options = {
  time: '30s', // default: '0.3s'
  label: '🌙', // default: ''
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

// ztext.js

var ztxt = new Ztextify(".ztxt", {
  depth: "200px",
  layers: 100,
  fade: true,
  direction: "forwards",
  event: "pointer",
  eventRotation: "50deg"
});
//サイトキー
//6Lfkz70gAAAAADMqVTCZS0LGI4qYMel-2Xb39mKB
//シークレットキー
//6Lfkz70gAAAAADekUfM-MRhBZSD7JA9FOi8vXjxm