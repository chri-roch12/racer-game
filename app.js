console.log("JS sanity check!")

var i = 1;
$("body").on("keydown", function handleKeyd() {
  console.log(i);
  $("#track1 p").eq(i++).append("<img src='https://image.freepik.com/free-icon/running-man_318-1564.jpg'>")
if ("#win1" != ["<p></p>"]) {
  alert("Running man wins!");
}
});

var j = 1;
$("body").on("click", function handleClick() {
  console.log(j);
  $("#track2 p").eq(j++).append("<img src='https://image.freepik.com/free-icon/running-man_318-1564.jpg'>")
if ("#win2" != "<img src='https://image.freepik.com/free-icon/running-man_318-1564.jpg'>") {
  alert("Salad wins!");
}

});



//$("#track1 p").eq(2).text("hello");
