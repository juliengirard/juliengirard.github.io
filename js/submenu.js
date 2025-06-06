<script>
document.addEventListener("DOMContentLoaded", function () {
  const bgColor = window.getComputedStyle(document.querySelector('.custom-navbar')).backgroundColor;
  const rgb = bgColor.match(/\d+/g);
  if (rgb) {
    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    const isDark = brightness < 128;
    const color = isDark ? '#ffffff' : '#000000';

    document.querySelectorAll('.navbar-collapse .dropdown-menu li a').forEach(el => {
      el.style.color = color;
    });
  }
});
</script>
