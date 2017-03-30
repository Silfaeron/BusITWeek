$("#enterCar").on("click",function(){
    $.ajax({
      url: '',
      type: 'POST',
      data: $("#manufacturingForm").serialize()
    })
    .done(function(){
        alert("New car added !")
    })
    .fail(function(){
      alert("We couldn't add the car");
    });
});
