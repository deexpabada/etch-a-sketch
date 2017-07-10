$(document).ready(function () {
  drawGrid(16);

  $('.square').mouseenter(function() {
    $(this).css("background-color", "black");
  });

  $('button').click(function() {
    $('.square').css("background-color", "rgba(215, 212, 219, 0.84)");
  })
});

function drawGrid(grid){
  var i;
  var gridDim = (grid*grid);
  var j = 480/grid;
  for (i=0; i<256;i++){
    $("<div class='square'></div>").appendTo("#grid");
  }


}
