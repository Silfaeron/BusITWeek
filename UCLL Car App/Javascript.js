

var manufacturing = function () {
    hideAll();
    var $manDiv = $('#manufacturing');
    var stringBuilder = '';
    stringBuilder += '<h2>Manufacturing</h2>';
    stringBuilder += '<form id="manufacturingForm" class="form-group">';
    stringBuilder += '<label for="carId">Car id:</label>';
    stringBuilder += '<input type="text" id="carId" class="form-control">';
    stringBuilder += '<label for="brand">Brand:</label>';
    stringBuilder += '<select class="form-control" id="brand">';
    stringBuilder += '<option>BMW</option>' +
        '<option>Chevrolet</option>' +
        '<option>Citroën</option>' +
        '<option>Ferrari</option>'+
        '<option>Fiat</option>'+
        '<option>Ford</option>'+
        '<option>Honda</option>'+
        '<option>Jaguar</option>'+
        '<option>Lamborhini</option>'+
        '<option>Mercedes-Benz</option>'+
        '<option>Tesla</option>'+
        '<option>Peugot</option>';
    stringBuilder += '</select>';
    stringBuilder += '<label for="manufacturerPlant">Manufacturer Plant:</label>';
    stringBuilder += '<input type="text" id="manufacturerPlant" class="form-control">';
    stringBuilder += '<label for="km">Km:</label>';
    stringBuilder += '<input type="number" id="km" class="form-control">';
    stringBuilder += '<label for="fuel">Type of fuel:</label>';
    stringBuilder += '<select class="form-control" id="fuel">';
    stringBuilder += '<option>Premium unleaded petrol</option>'+
        '<option>Super unleaded petrol</option>'+
        '<option>Diesel</option>'+
        '<option>LPG Autogas</option>'+
        '<option>Biofuels (biodiesel and bioethanol)</option>';
    stringBuilder += '</select>';
    stringBuilder += '<label for="year">Year:</label>';
    stringBuilder += '<input type="number" min="1900" id="year" placeholder="1900" class="form-control">';
    stringBuilder += '<input id="manSubmit" type="submit" value="submit" class="btn btn-primary">';
    stringBuilder += '</form>';
    $manDiv.append(stringBuilder);
};

var garage = function () {
    hideAll();
    var $manDiv = $('#garage');
    var stringBuilder = '';
    stringBuilder += '<h2>garage</h2>';
    stringBuilder += '<form id="garageForm" class="form-group">';
    stringBuilder += '<label for="carRepairs">Description of car repair:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="repairDate">Date of repair:</label>';
    stringBuilder += '<input type="date" class="form-control" id="repairDate">';
    stringBuilder += '<label for="carMaintenance">Description of car maintenance:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="maintenanceDate">Date of maintenance:</label>';
    stringBuilder += '<input type="date" class="form-control" id="maintenanceDate">';

    stringBuilder += '<label for="brand">Brand:</label>';
    stringBuilder += '<select class="form-control" id="brand">';
    stringBuilder += '<option>BMW</option>' +
        '<option>Chevrolet</option>' +
        '<option>Citroën</option>' +
        '<option>Ferrari</option>'+
        '<option>Fiat</option>'+
        '<option>Ford</option>'+
        '<option>Honda</option>'+
        '<option>Jaguar</option>'+
        '<option>Lamborhini</option>'+
        '<option>Mercedes-Benz</option>'+
        '<option>Tesla</option>'+
        '<option>Peugot</option>';
    stringBuilder += '</select>';
    stringBuilder += '<input type="submit" value="submit" class="btn btn-primary">';
    stringBuilder += '</form>';
    $manDiv.append(stringBuilder);
};

var vendor = function () {
    hideAll();
    var $manDiv = $('#vendor');
    var stringBuilder = '';
    stringBuilder += '<h2>vendor</h2>';
    stringBuilder += '<form id="vendorForm" class="form-group">';
    stringBuilder += '<label for="carMaintenance">Description of car maintenance:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="maintenanceDate">Date of maintenance:</label>';
    stringBuilder += '<input type="date" class="form-control" id="maintenanceDate">';

    stringBuilder += '<label for="brand">Brand:</label>';
    stringBuilder += '<select class="form-control" id="brand">';
    stringBuilder += '<option>BMW</option>' +
        '<option>Chevrolet</option>' +
        '<option>Citroën</option>' +
        '<option>Ferrari</option>'+
        '<option>Fiat</option>'+
        '<option>Ford</option>'+
        '<option>Honda</option>'+
        '<option>Jaguar</option>'+
        '<option>Lamborhini</option>'+
        '<option>Mercedes-Benz</option>'+
        '<option>Tesla</option>'+
        '<option>Peugot</option>';
    stringBuilder += '</select>';
    stringBuilder += '<label for="km">Km:</label>';
    stringBuilder += '<input type="number" id="km" class="form-control">';
    stringBuilder += '<label for="fuel">Type of fuel:</label>';
    stringBuilder += '<select class="form-control" id="fuel">';
    stringBuilder += '<option>Premium unleaded petrol</option>'+
        '<option>Super unleaded petrol</option>'+
        '<option>Diesel</option>'+
        '<option>LPG Autogas</option>'+
        '<option>Biofuels (biodiesel and bioethanol)</option>';
    stringBuilder += '</select>';
    stringBuilder += '<label for="year">Year:</label>';
    stringBuilder += '<input type="number" min="1900" id="year" placeholder="1900" class="form-control">';
    stringBuilder += '<input type="submit" value="submit" class="btn btn-primary">';
    stringBuilder += '</form>';
    $manDiv.append(stringBuilder);
};

/*var carOwner = function () {
    hideAll();
    var $manDiv = $('#carOwner');
    var stringBuilder = '';
    stringBuilder += '<h2>car owner</h2>';
    stringBuilder += '<form id="carOwnerForm" class="form-group">';
    stringBuilder += '<label for="carRepairs">Description of car repair:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="repairDate">Date of repair:</label>';
    stringBuilder += '<input type="date" class="form-control" id="repairDate">';

    stringBuilder += '<label for="carMaintenance">Description of car maintenance:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="maintenanceDate">Date of maintenance:</label>';
    stringBuilder += '<input type="date" class="form-control" id="maintenanceDate">';

    stringBuilder += '<label for="brand">Brand:</label>';
    stringBuilder += '<select class="form-control" id="brand">';
    stringBuilder += '<option>BMW</option>' +
        '<option>Chevrolet</option>' +
        '<option>Citroën</option>' +
        '<option>Ferrari</option>'+
        '<option>Fiat</option>'+
        '<option>Ford</option>'+
        '<option>Honda</option>'+
        '<option>Jaguar</option>'+
        '<option>Lamborhini</option>'+
        '<option>Mercedes-Benz</option>'+
        '<option>Tesla</option>'+
        '<option>Peugot</option>';
    stringBuilder += '</select>';
    stringBuilder += '<label for="manufacturerPlant">Manufacturer Plant:</label>';
    stringBuilder += '<input type="text" id="manufacturerPlant" class="form-control">';
    stringBuilder += '<label for="km">Km:</label>';
    stringBuilder += '<input type="number" id="km" class="form-control">';
    stringBuilder += '<label for="fuel">Type of fuel:</label>';
    stringBuilder += '<select class="form-control" id="fuel">';
    stringBuilder += '<option>Premium unleaded petrol</option>'+
        '<option>Super unleaded petrol</option>'+
        '<option>Diesel</option>'+
        '<option>LPG Autogas</option>'+
        '<option>Biofuels (biodiesel and bioethanol)</option>';
    stringBuilder += '</select>';
    stringBuilder += '<label for="year">Year:</label>';
    stringBuilder += '<input type="number" min="1900" id="year" placeholder="1900" class="form-control">';
    stringBuilder += '<input type="submit" value="submit" class="btn btn-primary">';
    stringBuilder += '</form>';
    $manDiv.append(stringBuilder);
};*/

var create_Owner_Page_Display = function(){
    hideAll();
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
    };

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

    $("#carOwnerChoice").append(ownerDisplay);

};

var create_Owner_Page_EnterInfo = function(){
    var informations = {0:"Engine",1:"Color",2:"Km",3:"Insurance",4:"licence plate"};
    var owner_choice = "<div class='form-group'>";

    $.each(informations,function(index,value){
        owner_choice += "<label class='checkbox-inline'><input type='checkbox' value=''>"+value+"</label>";
    });
    owner_choice += "<div></br><input type='button' class='btn btn-primary' value='Send'</input></div></div>";
    $("#carOwnerChoice").append(owner_choice);
};

var login = function () {
    hideAll();
    var stringBuilder = '';
    stringBuilder += '<div class="row">';
    stringBuilder += '<div class="col-sm-6 col-md-4 col-md-offset-4">';
    stringBuilder += '<h1 class="text-center login-title">Sign in to continue to BTECC</h1>';
    stringBuilder += '<div class="account-wall">';
    stringBuilder += '<img class="profile-img" src="btecc.png" alt="">';
    stringBuilder += '<form class="form-signin">';
    stringBuilder += '<input id="name" type="text" class="form-control" placeholder="Name" required autofocus>';
    stringBuilder += '<input id="email" type="email" class="form-control" placeholder="Email" required>';
    stringBuilder += '<input id="password" type="password" class="form-control" placeholder="Password" required>';
    stringBuilder += '<input id="signIn" class="btn btn-lg btn-primary btn-block" type="submit" value="Sign in"/>';
    stringBuilder += '<label class="checkbox pull-left">';
    stringBuilder += '<input type="checkbox" value="remember-me">Remember me</label>';
    stringBuilder += '<a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>';
    stringBuilder += '</form>';
    stringBuilder += '</div>';
    stringBuilder += '<a id="createAcc" href="#" class="text-center new-account">Create an account </a>';
    stringBuilder += '</div>';
    stringBuilder += '</div>';
    $('#login').append(stringBuilder);
};

var register = function () {
    hideAll();
    var stringBuilder = '';
    stringBuilder += '<div class="row">';
    stringBuilder += '<div class="col-sm-6 col-md-4 col-md-offset-4">';
    stringBuilder += '<h1 class="text-center login-title">Register here to continue to BTECC</h1>';
    stringBuilder += '<div class="account-wall">';
    stringBuilder += '<img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">';
    stringBuilder += '<form class="form-signin">';
    stringBuilder += '<input id="name" type="text" class="form-control" placeholder="Name" required autofocus>';
    stringBuilder += '<input id="email" type="text" class="form-control" placeholder="Email" required>';
    stringBuilder += '<input id=password" type="password" class="form-control" placeholder="Password" required>';
    stringBuilder += '<input type="password" class="form-control" placeholder="Password again" required>';
    stringBuilder += '<button id="signUp" class="btn btn-lg btn-primary btn-block" type="submit">Register</button>';
    stringBuilder += '<label class="checkbox pull-left">';
    stringBuilder += '<input type="checkbox" value="remember-me">Accept the terms of agreement</label>';
    stringBuilder += '</form>';
    stringBuilder += '</div>';
    stringBuilder += '<a id="backToLogin" href="#" class="text-center new-account">Back to login </a>';
    stringBuilder += '</div>';
    stringBuilder += '</div>';
    $('#register').append(stringBuilder);
};

var hideAll = function () {
    $('#register').html('');
    $('#login').html('');
    $('#garage').html('');
    $('#manufacturing').html('');
    $('#vendor').html('');
    $('#carOwner').html('');
};

var progressLogin = function () {
    var account = {};
    account.name = $('#login #name').val();
    account.email = $('#login #email').val();
    account.password = $('#login #password').val();
    console.log(account.email);

    switch (account.name){
        case 'manufacturing':
            manufacturing();
            break;
        case 'garage':
            garage();
            break;
        case 'carowner':
            //carOwner();
            create_Owner_Page_Display();
            create_Owner_Page_EnterInfo();
            break;
        case 'vendor':
            vendor();
            break;
    }

    if(account.name == 'manufacturing'){
        manufacturing();
    }
    saveAccount(account);
    displayLoggedInUser();

};

var displayLoggedInUser = function () {
    if((typeof Storage)  !== void(0)) {
        var loggedInUser = JSON.parse(localStorage.getItem('account'));
        if( loggedInUser  !== null) {
            console.log('header p ding');
            $('header a').html('');
            $('header a').append(loggedInUser.email)
        }
    }
};

var saveAccount = function(account) {
    console.log('saveAccount');
    if ((typeof Storage) !== void(0)) {
        localStorage.setItem('account', JSON.stringify(account));
    }
};

var saveData = function (e) {
    e.preventDefault();
  console.log(this);
  console.log($this);
};

$(function () {
    login();
    var $login = $('#login');
    var $register = $('#register');
    $login.on('click', '#createAcc', register);
    $login.on('submit', progressLogin);
    $register.on('click', '#backToLogin', login);
    $('#manufacturing').on('submit', saveData);

});

