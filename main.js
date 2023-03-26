function showSection(evt, sectionName) {
  var i, articleItem;
  articleItem = document.getElementsByClassName("article-item");
  for (i = 0; i < articleItem.length; i++) {
    articleItem[i].style.display = "none";
  }
  document.getElementById(sectionName).style.display = "block";

  // Remove the "active" class from all buttons
  var buttons = document.getElementsByClassName("article-buttons");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Add the "active" class to the clicked button
  evt.currentTarget.classList.add("active");
}
