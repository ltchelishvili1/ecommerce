import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA1livyVlvzxciTMCotiABiiO-FQadnnwU",
    authDomain: "crown-clothing-db-3a3c8.firebaseapp.com",
    projectId: "crown-clothing-db-3a3c8",
    storageBucket: "crown-clothing-db-3a3c8.appspot.com",
    messagingSenderId: "727429535272",
    appId: "1:727429535272:web:05114bb6fcdc83ae8d071d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    propmt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapShop = await getDoc(userDocRef)
  
    if(!userSnapShop.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
       
        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        } catch (error){
            console.log("error creating user",error.message)
        }
    }
    return userDocRef;

}