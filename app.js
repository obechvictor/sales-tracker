import { auth } from "./firebase-config.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// LOGIN ELEMENTS
const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const loginMessage = document.getElementById("loginMessage");
const currentUser = document.getElementById("currentUser");

// LOGIN
loginBtn.addEventListener("click", async () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        loginMessage.textContent = "Enter email and password";
        return;
    }

    try {

        loginMessage.textContent = "";

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

    } catch (error) {

        loginMessage.textContent = error.message;
        console.error(error);

    }

});

// LOGOUT
logoutBtn.addEventListener("click", async () => {

    try {

        await signOut(auth);

    } catch (error) {

        console.error(error);

    }

});

// AUTH STATE
onAuthStateChanged(auth, (user) => {

    if (user) {

        loginScreen.classList.remove("active");
        appScreen.classList.add("active");

        currentUser.textContent = user.email;

    } else {

        appScreen.classList.remove("active");
        loginScreen.classList.add("active");

        currentUser.textContent = "";

    }

});

// NAVIGATION
const navButtons =
    document.querySelectorAll(".bottom-nav button");

const pages =
    document.querySelectorAll(".page");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        const pageId =
            button.dataset.page;

        pages.forEach(page =>
            page.classList.remove("active")
        );

        document
            .getElementById(pageId)
            .classList.add("active");

    });

});
