console.log("main linked")

$("#container").on("click", ".delete", function(event){
   var id = $(event.target).data("id");
   $.ajax({
    url: "/menus/" + id,
    type: "DELETE"
   }).done(function(data){
    fetchAllMenus();
   })
})

$("body").on("click",".addRest", function(event){
    var $restaurantName = $("#restname").val();
    var $location = $("#restloc").val();
    postMenu($restaurantName, $location);
})

function fetchAllMenus(){
    $("#container").empty()
    $.ajax({
        url: "/menus",
        type: "GET"
    }).done(function(data){
        data.forEach(function(e){
            console.log(e);
            renderOne(e);
        })
    })
}

function aboutMe(){
    $("#container").empty();
    var aboutDiv = $("<h1> ABOUT ME HEHEHE</h1>");
    $("#container").append(aboutDiv);
}


function renderOne(thing){
    var $newEl = $("<div>");
    $newEl.data("id", thing.id);
    var $header = $("<h1> <a href=/#/menus/"+$newEl.data("id")+">" + thing.restaurantName + "</a></h1>");
    var $location = $("<h2>" + thing.location + "</h2>");
    var $deleteMe = $("<button class='delete'> Delete Me </button>");
    $deleteMe.data("id", thing.id);
    $newEl.append($header);
    $newEl.append($location);
    $newEl.append($deleteMe);
    $("#container").append($newEl);
}

function fetchOne(id){
    $("#container").empty();
    $.ajax({
        url: "/menus/"+ id,
        type: "GET"
    }).done(function(data){
        renderOne(data);
    })
}

function renderPostForm(){
    $("#container").empty();
    console.log($("#postFormTemplate").text())
    $("#container").append($("#postFormTemplate").text())
}



function postMenu(restaurantName, location){
    var newMenu = {restaurantName: restaurantName,location: location, cuisine: "american"}
    $.ajax({
        type: "POST",
        url: "/menus",
        data: newMenu
    }).done(function(data){
        console.log(data)
    })
}