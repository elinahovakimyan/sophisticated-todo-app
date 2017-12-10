import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyC4UD0O9BwnzlmUvvKTmF-o11a41PwzBnI",
	authDomain: "multitype-todo-app.firebaseapp.com",
	databaseURL: "https://multitype-todo-app.firebaseio.com",
	projectId: "multitype-todo-app",
	storageBucket: "multitype-todo-app.appspot.com",
	messagingSenderId: "879986753973"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
	appName: "Todo App",
	isRunning: true,
	user: {
		name: "Elina",
		age: 18
	}
}).then(() => {
	// console.log("ok")
}, (e) => {
	// console.log("oops")
})

firebaseRef.child('user').set({
	name: "Elin"
})