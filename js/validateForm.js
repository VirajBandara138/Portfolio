function validateForm() {
          // Get form inputs
          var name = document.forms["contactForm"]["name"].value;
          var email = document.forms["contactForm"]["email"].value;
          var phone = document.forms["contactForm"]["phone"].value;
          var 
         
          // Validate name (required field)
          if (name == "") {
            alert("Name must be filled out");
            return false;
          }
         
          // Validate email (required and correct format)
          var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (email == "") {
            alert("Email must be filled out");
            return false;
          } else if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return false;
          }
         
          // Validate phone number (optional and correct format)
          var phoneRegex = /^\d{10}$/;
          if (phone != "" && !phoneRegex.test(phone)) {
            alert("Invalid phone number format");
            return false;
          }
}
        
         
         