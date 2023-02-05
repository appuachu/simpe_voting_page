var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");
var comments = document.getElementById("comments");
var submit = document.getElementById("submit");
var showComments = document.getElementById("show-comments");
var commentsSection = document.getElementById("comments-section");
var displayComments = document.getElementById("display-comments");
var votedOption = null;
var commentsArray = [];

// Check if vote count is in local storage
if (localStorage.getItem("count1")) {
  count1.innerHTML = localStorage.getItem("count1");
}
if (localStorage.getItem("count2")) {
  count2.innerHTML = localStorage.getItem("count2");
}

// Check if comments are in local storage
if (localStorage.getItem("comments")) {
  commentsArray = JSON.parse(localStorage.getItem("comments"));
  commentsArray.forEach(function(comment) {
    var p = document.createElement("p");
    p.innerHTML = comment;
    displayComments.appendChild(p);
  });
}

// Check if voted option is in local storage
if (localStorage.getItem("votedOption")) {
  votedOption = localStorage.getItem("votedOption");
}

option1.addEventListener("click", function() {
  if (votedOption === "option1") {
    count1.innerHTML = parseInt(count1.innerHTML) - 1;
    localStorage.setItem("count1", count1.innerHTML);
    votedOption = null;
    localStorage.removeItem("votedOption");
  } else if (votedOption === null) {
    count1.innerHTML = parseInt(count1.innerHTML) + 1;
    localStorage.setItem("count1", count1.innerHTML);
    votedOption = "option1";
    localStorage.setItem("votedOption", votedOption);
  }
});

option2.addEventListener("click", function() {
  if (votedOption === "option2") {
    count2.innerHTML = parseInt(count2.innerHTML) - 1;
    localStorage.setItem("count2", count2.innerHTML);
    votedOption = null;
    localStorage.removeItem("votedOption");
  } else if (votedOption === null) {
    count2.innerHTML = parseInt(count2.innerHTML) + 1;
    localStorage.setItem("count2", count2.innerHTML);
    votedOption = "option2";
    localStorage.setItem("votedOption", votedOption);
  }
});

submit.addEventListener("click", function() {
  commentsArray.push(comments.value);
  localStorage.setItem("comments", JSON.stringify(commentsArray));
  var p = document.createElement("p");
  p.innerHTML = comments.value;
displayComments.appendChild(p);
comments.value = "";
});

showComments.addEventListener("click", function() {
if (commentsSection.style.display === "none") {
commentsSection.style.display = "block";
} else {
commentsSection.style.display = "none";
}
});
