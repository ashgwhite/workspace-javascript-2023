//hotel registration --- store in an object
var test = {
    hotelname: "Marriot",
    room: 456,
    booked: 123,
    display: function(){
        return this.hotelname;
    
    }
}

// access the properties
console.log(test.hotelname);
console.log(test.booked);
test.booked = 144;

//Start the hotel reservation
var guestgroup = [];
function reservation(){
    // get the values from the form
    var guest = {
        name: $('#name').val(),
        numguest: $('#num').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        typeRoom: $('#room').val()
    };

    guestgroup.push(guest);
    alert("Thank you for you reservation");
}

function displayreslist(){
    $('#guestList').html("");
    $('#guestList').append("<table>");
    for(var i in guestgroup){
        $('#guestList').append("<tr><td>" + guestgroup[i].name + "</td>");
        $('#guestList').append("<td>" + guestgroup[i].numguest + "</td>");
        $('#guestList').append("<td>" + guestgroup[i].checkIn + "</td>");
        $('#guestList').append("<td>" + guestgroup[i].checkOut + "</td>");
        $('#guestList').append("<td>" + guestgroup[i].typeRoom + "</td></tr>");


    }
    $("#guestList").append("</table>");
}



//Register the event
$('#submit').click(reservation);
$("#lists").click(displayreslist);