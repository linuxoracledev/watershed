import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyA81UBDT3LErtQ8aWQp6MXWrkeLDHKoxgE",
    authDomain: "watershed-715b6.firebaseapp.com",
    projectId: "watershed-715b6",
    storageBucket: "watershed-715b6.appspot.com",
    messagingSenderId: "922711313355",
    appId: "1:922711313355:web:e6bafc12dba6bdb14bc44e"

}

export const createUserProfile = async (userAuth, ...aditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...aditionalData })
        } catch (error) {
            console.log('Error creating user!', error.message);
        }
    }



    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propm: 'select_account' });
export const signInWithGoogle = () => (auth.signInWithPopup(provider));

export default firebase;