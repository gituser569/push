window.onload = () => {
  $("#loadFeatured").click(function () {
    $("#featured").load("./1.html");
  });
  $("#main-22").click(function () {
    $("#main-2").load("./2.html");
  });

  
  $("#main-23").click(function () {
    $("#pick").load("./3.html");
  });


  //   document
  //     .getElementById("loadFeatured")
  //     .addEventListener("click", function () {
  //       document.getElementById("featured").load("./1.html");
  //     });
};
