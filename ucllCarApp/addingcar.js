$("#enterCar").on("click",function(e){
    e.preventDefault();
    $.ajax({
      url: '/home/user1/go/src/Test-Cluster/Test-Cluster.go',
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