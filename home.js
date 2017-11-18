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

	const btnLogout = document.getElementById("btnLogout");
	const welcome = document.getElementById("welcome");

	// Add logout event
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	})

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
			const db = firebase.database().ref();
			welcome.innerText = "Hi, " 
			db.child("Users").child(firebaseUser.uid).child("firstName").once('value')
			.then(name => welcome.innerText += " " + name.val());
		}
		else {
			window.location = "./index.html"
		}
	});

}());