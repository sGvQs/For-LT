lottie.loadAnimation({
  container: document.getElementById('main'), // アニメーションを追加する要素
  renderer: 'svg', // レンダリングのタイプ
  loop: true, // アニメーションをループさせるかどうか
  autoplay: true, // アニメーションを自動再生するかどうか
  path: 'anime.json', // アニメーションのjsonファイルのパス
});

var onloadCallback = function () {
  grecaptcha.render('html_element', {
    sitekey: 'your_site_key',
  });
};
