jQuery(document).ready(function() {


var tags = ["h1" , "p" , "img"]

tags.forEach(function(tag){
    tags[tag].addEventListener("click", function () {
      alert("This is a " + tag);

    })

// jQuery("h1").click(function(){
//   alert("this is" + tags[0] )
// })

});


  



//   jQuery("h1").click(function() {
//     alert("This is a header.");
//     alert("I told you, THIS IS A HEADER!");
// });

//   jQuery("p").click(function() {
//     alert("This is a paragraph.");
// });

//   jQuery("img").click(function() {
//     alert("This is an image.");
// });
});