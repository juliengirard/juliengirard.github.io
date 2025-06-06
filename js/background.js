// Detect background color and set font color accordingly
document.querySelectorAll('.dropdown-menu li a').forEach(link => {
  const bgColor = window.getComputedStyle(link.parentElement).backgroundColor;
  const rgb = bgColor.match(/\d+/g);
  if (rgb) {
    const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
    link.style.color = brightness > 150 ? 'black' : 'white';
  }
});
