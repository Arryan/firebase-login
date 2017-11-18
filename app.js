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
	const btnSignUp = document.getElementById("btnSignUp");
	const btnLogout = document.getElementById("btnLogout");
	const welcome = document.getElementById("welcome");
	const content = document.getElementById("content");
	const loginPage = document.getElementById("loginPage");
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

	// Add logout event
	btnLogout.addEventListener('click', e => {
		txtEmail.value = "";
		txtPassword.value = "";
		error.innerText = "";
		firebase.auth().signOut();
	})

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			content.classList.remove('hidden');
			loginPage.classList.add('hidden');
			welcome.innerText = "Welcome, " + firebaseUser.email;
		}
		else {
			content.classList.add('hidden')
			loginPage.classList.remove('hidden')
			welcome.innerText = "Log In";
		}
	});

}());