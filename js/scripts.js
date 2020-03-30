jQuery(document).ready(function () {


  var tags = ["h1", "p", "img"];
  var names = ["header", "paragraph", "image"];


  tags.forEach(function (tag) {
    $(tag).click(function () {
      if (tag === "h1") {
        alert("This is a header");
      } else if (tag === "p") {
        alert("This is a paragraph");
      } else {
        alert("This is an image");
      }
    });
  });
});