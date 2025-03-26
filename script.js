document.getElementById("continue").addEventListener("click", changeMainContent);
function changeMainContent() {
    let selectedTime = document.getElementById("timeSelect").value;

    if (selectedTime) {
        document.getElementById("mainContent").innerHTML = `
            <h1>Add Your Personal Details</h1>
            <input type="text" id="fname" class="text" placeholder="First Name" required> <br>
            <input type="text" id="lname" class="text" placeholder="Last Name" required> <br>
            <input type="email" id="email" class="text" placeholder="Email" required> <br>
            <input type="number" id="phone" class="text" placeholder="Phone Number" required> <br>

           <div class="checkbox">
              <input type="checkbox" id="checkbox" required>
              <label for="checkbox">
               By clicking the button above, you acknowledge, consent and agree to the following: a) Our Privacy Policy and consent to receive notices and other communications electronically; b) We take your privacy seriously. You are providing express written consent for to share your information with up to four (4) of its and for, parties calling on behalf of, or authorized third parties on their behalf to contact you including through automated means; e.g. autodialing, text and pre-recorded messaging) about legal services or other Mass Tort related offers via telephone, mobile device (including SMS and MMS) and/or email, even if your telephone number is currently listed on any state, federal, local or corporate Do Not Call list; c) Consent to be contacted is not required in order to purchase goods or services from or the that contact you. You may choose to speak with an individual service provider by dialing (888) 888-8888.
              </label>
           </div>
           <br><br>
           <button id="submit">SUBMIT YOUR DETAILS</button>
        `;
        document.getElementById("submit").addEventListener("click", function () {
            submitDetails(selectedTime);
        });

    } else {
        alert("Please select a time before continuing.");
    }
}

function submitDetails(selectedTime) {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let checkbox = document.getElementById("checkbox").checked;

    if (firstName && lastName && email && phone && checkbox) {
        document.getElementById("mainContent").innerHTML =
            "<h1>Review Your Details</h1>" +
            "<p><strong>Selected Time:</strong> " + selectedTime + " CST</p>" +
            "<p><strong>First Name:</strong> " + firstName + "</p>" +
            "<p><strong>Last Name:</strong> " + lastName + "</p>" +
            "<p><strong>Email:</strong> " + email + "</p>" +
            "<p><strong>Phone:</strong> " + phone + "</p>" +
            '<button id="restart">Start Over</button>';


        document.getElementById("restart").addEventListener("click", restart);
        document.getElementById("reviewSection").style.display = "block";
    } else {
        alert("Please fill in all fields and agree to the consent before submitting.");
    }
}

function restart() {
    location.reload();
}


