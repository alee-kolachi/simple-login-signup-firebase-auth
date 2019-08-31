(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: YOUR-API-KEY-HERE
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
      var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
if(firebase.auth().currentUser !=null){window.location.replace(dir + '/passwords.html');}
    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        //growSpinner.classList.remove("hide");
        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());
