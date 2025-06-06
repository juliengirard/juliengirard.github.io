function addScript(src,callback) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  s.onload=callback;
  document.body.appendChild(s);
}

function callback3()
{
window.setTimeout(function(){
$('#flickrembed').html('<div id="gallery" style="display:none; margin: 0 auto;" class="center"></div>');
api = $("#gallery").unitegallery({
          gallery_images_preload_type:"minimal",
          gallery_autoplay:false,
          slider_control_zoom:true,
          gallery_play_interval: 3000,
          slider_scale_mode: "",
          slider_scale_mode_fullscreen: "",
          slider_enable_bullets: false,
          gallery_theme:""});
        }, 1000);

}

function callback2()
{
$('head').append('<link rel="stylesheet" href="unite-gallery.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" href="ug-theme-default.css" type="text/css" />');
addScript('ug-theme-default.js', callback3);

}

function callback1()
{
$.getScript("remodal.min.js");
addScript('unitegallery.min.js', callback2);
}
addScript('jquery-1.12.1.min.js', callback1);
