function submitHandler() {
    var NAME = document.getElementById('name').value;
    var EMAIL = document.getElementById('email').value;
    var PHONE = document.getElementById('mobile').value;
    var DATE = document.getElementById('date').value;
    var ADDRESS = document.getElementById('address').value;
    var MESSAGE = document.getElementById('message').value;

    if (NAME && EMAIL && PHONE && ADDRESS && DATE && MESSAGE) {
        // Reference to the "Request" node
        var requestRef = firebase.database().ref('Request');
        
        // Query the database to count the number of bookings for the chosen date
        requestRef.orderByChild('Date').equalTo(DATE).once('value').then(function(snapshot) {
            var bookingCount = snapshot.numChildren();
            if (bookingCount < 3) { // Check if the limit is not reached
                requestRef.push().set({
                    Name: NAME,
                    Email: EMAIL,
                    Phone: PHONE,
                    Date: DATE,
                    Address: ADDRESS,
                    Message: MESSAGE
                });

                alert("Your slot for the given date is booked successfully.");
                
                var formToReset = document.getElementById('appointment-form');
                formToReset.reset();
            } else {
                alert("Choose another date. The limit has been reached for this date.");
            }
        });
    } else {
        alert("Please fill out all these Fields");
    }

    return false; // Prevent form submission
}