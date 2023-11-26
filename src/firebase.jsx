import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCfMfXHQpOyegGZcT2X-Z9KZBJEqK69BV0',
	authDomain: 'chatapp-jaxx.firebaseapp.com',
	projectId: 'chatapp-jaxx',
	storageBucket: 'chatapp-jaxx.appspot.com',
	messagingSenderId: '1077281567235',
	appId: '1:1077281567235:web:cc5e071db3fa75c4709436',
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
