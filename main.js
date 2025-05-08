// main.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

onAuthStateChanged(auth, user => {
  const publicPages = ['index.html','register.html'];
  const page = window.location.pathname.split('/').pop();
  if (!user && !publicPages.includes(page))       window.location = 'index.html';
  if (user && publicPages.includes(page))         window.location = 'posts.html';
  if (user) {
    const el = document.getElementById('nav-user');
    if (el) el.textContent = user.displayName || user.email;
  }
});

window.logout = () => signOut(auth);
