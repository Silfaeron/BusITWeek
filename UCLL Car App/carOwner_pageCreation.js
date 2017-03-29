
$(document).ready(function()
{
  create_Owner_Page_Display();
  create_Owner_Page_EnterInfo();
	//$('#addData').mousedown(add_gestion);


});

function create_Owner_Page_Display(){

  var user = "owner1";
  var ownerDisplay = "<ul class='list-group'>";
/*
  $.get( "testCar.php", function( data ) {
  $.each(data, function (index, dataMessage) {
    ownerDisplay += "<ul class='list-group'><li class='list-group-item'><h3>"+index+"</h3>";
    $.each(dataMessage, function (key, value) {
        ownerDisplay += "<li class='list-group-item'><h5>"+key+" : </h5><p>\t"+value+"</p></li>";
    });
    ownerDisplay += "</ul>";
  });
});*/
var data = {a:{w:1,x:2,c:1},
            b:{q:1,s:2,d:3},
            c:{h:1,j:2,k:3}
          }

$.each(data, function (index, dataMessage) {
  ownerDisplay += "<ul class='list-group'><li class='list-group-item'><h3>"+index+"</h3>";
  $.each(dataMessage, function (key, value) {
      ownerDisplay += "<li class='list-group-item'><h5>"+key+" : </h5><p>\t"+value+"</p></li>";
  });
  ownerDisplay += "</ul>";
});
/*
  $.ajax({
    url: 'testCar.php',
    type: 'GET',
    data: {'user': user}
  })
  .done(function(data){

    $.each(data, function (index, dataMessage) {
      ownerDisplay += "<ul class='list-group'><li class='list-group-item'><h3>"+index+"</h3>";
      $.each(dataMessage, function (key, value) {
          ownerDisplay += "<li class='list-group-item'><h5>"+key+" : </h5><p>\t"+value+"</p></li>";
      });
      ownerDisplay += "</ul>";
    });
  })
  .fail(function(){
    alert("We couldn't retrieve the data");
  });*/

  ownerDisplay += "</ul>";

  $("#carOwner-display").append(ownerDisplay); $("#carOwner-display").fadeIn();

}

function create_Owner_Page_EnterInfo(){

  var informations = {0:"Engine",1:"Color",2:"Km",3:"Insurance",4:"licence plate"};
  var owner_choice = "<div class='form-group'>";

  $.each(informations,function(index,value){
      owner_choice += "<label class='checkbox-inline'><input type='checkbox' value=''>"+value+"</label>";
  });
  owner_choice += "<div></br><input type='button' class='btn btn-primary' value='Send'</input></div></div>";
  $("#carOwner-choice").append(owner_choice); $("#carOwner-choice").fadeIn();
}
