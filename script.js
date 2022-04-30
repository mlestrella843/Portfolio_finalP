
/*Set the timing*/

        setInterval(myTimer, 1000);
        function myTimer() {
        const d = new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();
        }
        
/* To hod the user's cookies */
        function checkCookie() {
          let user = getCookie("username");
          if (user == Maria) {
            alert("Welcome again " + user);
          } else {
             user = prompt("Please enter your name:","");
             if (user != "" && user != null) {
               setCookie("username", user, 30);
             }
          }
        }


/* validate the form*/

        function validateForm() {
          
          let name = document.forms["myForm"]["fname"].value;
          let email1 = document.forms["myForm"]["email"].value;
          let message = document.forms["myForm"]["message"].value;
          re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

                  
          if (!isNaN(name)) {
           alert("you entered a number, please fill with letters");
           return false;
          } 

          if (name == "") {
            alert("Name must be filled and a valid character");
            return false;
          } 
          
          if (!re.exec(email1)){
            alert("email not valid");
            return false;
          } 
          else if (email1 == "") {
            alert("Name must be filled out");
            return false;
          }
        
          if (message == "") {
            alert("Name must be filled out");
            return false;
          }        
            return  alert(' Thanks for contact us'); 
         
          
           
        }

  /* I have been trying the redireccion after the submot the form, but it didn't.
        <button id="button_form" type="button" onclick="redireccionar()">Direccionar</button>
  */  
        function redireccionar() { 
          window.location="../index.html";
         }


/* Function that show info user from formulario*/


        function imprimeNombre() {
          let name = document.forms["myForm"]["fname"].value;
          let email1 = document.forms["myForm"]["email"].value;
          let message = document.forms["myForm"]["message"].value;
          document.getElementById("p_name").innerHTML = name;
          document.getElementById("p_email").innerHTML = email1;
          document.getElementById("p_message").innerHTML = message;
          document.getElementById('p_name').style.color = 'green';
          document.getElementById('p_email').style.color = 'green';
          document.getElementById('p_message').style.color = 'green';
        }

    /* Function that ask for your age*/

        function myFunction() {
          // Get the value of the input field with id="numb"
          let x = document.getElementById("numb").value;
          // If x is Not a Number or less than one or greater than 10
            let text;
          if ( x >= 18) {
            text = "you are an adult, you pass...";
          } else {
            text = "You are still a minor";
          }
          document.getElementById("demo1").innerHTML = text;
        }