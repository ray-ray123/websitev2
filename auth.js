import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Signed in successfully!');
            // You can redirect the user or perform other actions here
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message').textContent = errorMessage;
        });
});
