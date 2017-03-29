

var manufacturing = function () {
    hideAll();
    var $manDiv = $('#manufacturing');
    var stringBuilder = '';
    stringBuilder += '<h2>Manufacturing</h2>';
    stringBuilder = '<form id="manufacturingForm" class="form-group">';
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
    stringBuilder += '<input type="submit" value="submit" class="btn btn-primary">';
    stringBuilder += '</form>';
    $manDiv.append(stringBuilder);
};

var garage = function () {
    hideAll();
    var $manDiv = $('#garage');
    var stringBuilder = '';
    stringBuilder += '<h2>garage</h2>';
    stringBuilder = '<form id="garageForm" class="form-group">';
    //stringBuilder+= '<button data-toggle="collapse" data-target="#repairs">Collapsible</button>';
    //stringBuilder += '<div id="repairs" class="collapse">';
    //var stringb = '';
    stringBuilder += '<label for="carRepairs">Description of car repair:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="repairDate">Date of repair:</label>';
    stringBuilder += '<input type="date" class="form-control" id="repairDate">';
    //$('#repairs').append(stringb);
    //stringBuilder += '</div>';

    //stringBuilder+= '<button data-toggle="collapse" data-target="#maintinance">Collapsible</button>';
    //stringBuilder += '<div id="maintinance" class="collapse">';
    stringBuilder += '<label for="carMaintenance">Description of car maintenance:</label>';
    stringBuilder += '<textarea rows="4"></textarea>';
    stringBuilder += '<label for="maintenanceDate">Date of maintenance:</label>';
    stringBuilder += '<input type="date" class="form-control" id="maintenanceDate">';
    //stringBuilder += '</div>';

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

var login = function () {
    hideAll();
    var stringBuilder = '';
    stringBuilder += '<div class="row">';
    stringBuilder += '<div class="col-sm-6 col-md-4 col-md-offset-4">';
    stringBuilder += '<h1 class="text-center login-title">Sign in to continue to BTECC</h1>';
    stringBuilder += '<div class="account-wall">';
    stringBuilder += '<img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">';
    stringBuilder += '<form class="form-signin">';
    stringBuilder += '<input type="text" class="form-control" placeholder="Email" required autofocus>';
    stringBuilder += '<input type="password" class="form-control" placeholder="Password" required>';
    stringBuilder += '<button id="signIn" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>';
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
    stringBuilder += '<input type="text" class="form-control" placeholder="Name" required autofocus>';
    stringBuilder += '<input type="text" class="form-control" placeholder="Email" required>';
    stringBuilder += '<input type="password" class="form-control" placeholder="Password" required>';
    stringBuilder += '<input type="password" class="form-control" placeholder="Password again" required>';
    stringBuilder += '<button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>';
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
};

$(function () {
    login();
    var $login = $('#login');
    $login.on('click', '#createAcc', register);
    $login.on('click', '#signIn', manufacturing);
    $('#register').on('click', '#backToLogin', login);
});

