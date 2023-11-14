function question_load() {
  document.getElementById("button_yes").hidden = false;
  document.getElementById("button_no").hidden = false;
  document.getElementById("button_back").hidden = true;
  document.getElementById("button_send").hidden = true;
  document.getElementById("feedback_text").hidden = false;
  document.getElementById("feedback_text_yes").hidden = true;
  document.getElementById("feedback_text_no").hidden = true;
  document.getElementById("feedback_text_answer").hidden = true;
  document.getElementById("question_radio").hidden = true;
  for (const element of document.getElementsByName('question')) {
    element.checked = false;
  }
}

function showContent(contentId) {
  var contents = document.querySelectorAll('.question_maincontent > div');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  var content = document.getElementById(contentId);
  if (content) {
    content.style.display = 'block';
  }
}

document.getElementById("button_yes").onclick = function() {
  document.getElementById("button_yes").hidden = true;
  document.getElementById("button_no").hidden = true;
  document.getElementById("button_back").hidden = false;
  document.getElementById("feedback_text").hidden = true;
  document.getElementById("feedback_text_yes").hidden = false;
}

document.getElementById("button_no").onclick = function() {
  document.getElementById("button_yes").hidden = true;
  document.getElementById("button_no").hidden = true;
  document.getElementById("button_send").hidden = false;
  document.getElementById("button_back").hidden = false;
  document.getElementById("feedback_text").hidden = true;
  document.getElementById("feedback_text_no").hidden = false;
  document.getElementById("question_radio").hidden = false;
}

document.getElementById("button_send").onclick = function() {
  document.getElementById("button_send").hidden = true;
  document.getElementById("feedback_text_no").hidden = true;
  document.getElementById("feedback_text_answer").hidden = false;
  document.getElementById("question_radio").hidden = true;
}

document.getElementById("button_back").onclick = function() {
  document.getElementById("button_yes").hidden = false;
  document.getElementById("button_no").hidden = false;
  document.getElementById("button_back").hidden = true;
  document.getElementById("button_send").hidden = true;
  document.getElementById("feedback_text").hidden = false;
  document.getElementById("feedback_text_yes").hidden = true;
  document.getElementById("feedback_text_no").hidden = true;
  document.getElementById("feedback_text_answer").hidden = true;
  document.getElementById("question_radio").hidden = true;
  for (const element of document.getElementsByName('question')) {
    element.checked = false;
  }
}


