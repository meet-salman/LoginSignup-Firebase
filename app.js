import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


const hello = document.querySelector('#hello');
const signOutBtn = document.querySelector('#sign-out');


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);

        hello.innerHTML = `Hello 👋`

    } else {
        console.log('Logged Out');
        window.location = 'signin.html'
    }
});


signOutBtn.addEventListener('click', () => {

    signOut(auth).then(() => {
        welcomeBox.innerHTML = `Signed Out`
        window.location = 'signin.html'
    }).catch((err) => {
        console.log(err);
    });
})

