var a_idx = 0;
var c_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("猗嗟昌兮", "颀而长兮", "抑若扬兮", "美目扬兮", "巧趋跄兮", "射则臧兮", "猗嗟名兮", "美目清兮", "仪既成兮", "终日射侯", "不出正兮", "展我甥兮", "猗嗟娈兮", "清扬婉兮", "舞则选兮", "射则贯兮", "四矢反兮", "以御乱兮");
    var clr = new Array("#ff7a45", "#45b97c", "#694d9f", "#007d65", "#2595c9", "#b00295", "#d8db00", "#00bc92");
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": clr[c_idx]
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
    c_idx = (c_idx + 1) % clr.length;
  });
});