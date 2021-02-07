import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBe1gLSoCm49EAXd9n5ysNmZcbtKH8owrM',
	authDomain: 'pokemon-game-43398.firebaseapp.com',
	databaseURL:
		'https://pokemon-game-43398-default-rtdb.firebaseio.com',
	projectId: 'pokemon-game-43398',
	storageBucket: 'pokemon-game-43398.appspot.com',
	messagingSenderId: '686651796082',
	appId: '1:686651796082:web:1376189b8feaa72c3a70eb',
};
firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
