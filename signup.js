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

	const txtfName = document.getElementById("fName");
	const txtlName = document.getElementById("lName");
	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnSignUp = document.getElementById("btnSignUp");
	const error = document.getElementById("error");

	// Add signup event
	btnSignUp.addEventListener('click', e => {
		// Get email and pass
		// TODO: CHECK FOR REAL EMAILS
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign In
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => error.innerText = "Sign up error: " + e.message);

	});

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			const fName = txtfName.value;
			const lName = txtlName.value;
			const db = firebase.database().ref();
			db.child("Users").set(firebaseUser.uid);
			db.child("Users").child(firebaseUser.uid).child("firstName").set(fName);
			db.child("Users").child(firebaseUser.uid).child("lastName").set(lName);
			document.getElementById("successFlash").innerText = "Account successfully created";
			document.getElementById("btnSignIn").classList.remove("hidden");
		}
		else {
		}
	});

}());