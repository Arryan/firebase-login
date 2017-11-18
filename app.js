(function() {
	// Initialize Firebase
	const config = {
		apiKey: "AIzaSyAXCIg36L8g2IxSGZOXl7_4kM6Lq85TfeU",
		authDomain: "test-af067.firebaseapp.com",
		databaseURL: "https://test-af067.firebaseio.com",
		projectId: "test-af067",
		storageBucket: "",
		messagingSenderId: "969454132841"
	};
	firebase.initializeApp(config);

	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	const error = document.getElementById("error");

	// Add login event
	btnLogin.addEventListener('click', e => {
		// Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign In
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => error.innerText = "Sign in error: " + e.message);
	});

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			window.location = "./home.html";
		}
		else {
		}
	});

}());