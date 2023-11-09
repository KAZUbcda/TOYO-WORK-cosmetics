function showContent(contentId) {
  var contents = document.querySelectorAll('.new_maincontent > div');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  var content = document.getElementById(contentId);
  if (content) {
    content.style.display = 'block';
  }
}
