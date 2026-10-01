// Native anchors and telephone/map links work without JavaScript.
// Close other editorial disclosures when one is opened.
document.querySelectorAll('details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
