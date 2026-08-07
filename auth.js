/* ================= AUTH CONFIG =================
   Edit these two values, nothing else needs to change.

   GOOGLE_CLIENT_ID — from Google Cloud Console → APIs & Services →
   Credentials → OAuth client ID (Web application). See README.md
   for the step-by-step setup.

   ALLOWED_EMAILS — only these Google accounts can open the site.
*/
const GOOGLE_CLIENT_ID = "857388610259-745jdjjvbedmc6qa6t0il85nlfd6v4dd.apps.googleusercontent.com";

const ALLOWED_EMAILS = [
  "silviana.anutescu@gmail.com",
];

/* ================= GATE LOGIC =================
   Note: this is a client-side gate on a static site with no backend.
   It stops casual visitors and search engines from seeing the app,
   verified against a real Google sign-in rather than a shared
   password. It does not hide the underlying data files from someone
   who deliberately fetches them by URL — that would require a
   server-side check, which a static GitHub Pages site doesn't have.
*/
const AUTH_STORAGE_KEY = "tripAuthEmail";

function decodeJwtPayload(token){
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const json = decodeURIComponent(
    atob(base64)
      .split("")
      .map(c => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );
  return JSON.parse(json);
}

function showGate(message){
  document.getElementById("appRoot").style.display = "none";
  document.getElementById("authGate").style.display = "flex";
  const err = document.getElementById("authError");
  err.textContent = message || "";
  err.style.display = message ? "block" : "none";
}

function unlockApp(){
  document.getElementById("authGate").style.display = "none";
  document.getElementById("appRoot").style.display = "block";
}

function handleCredentialResponse(response){
  let payload;
  try {
    payload = decodeJwtPayload(response.credential);
  } catch (e){
    showGate("Sign-in failed — please try again.");
    return;
  }
  if (!payload.email_verified || !ALLOWED_EMAILS.includes(payload.email)){
    showGate(`${payload.email} isn't on the guest list for this trip.`);
    return;
  }
  localStorage.setItem(AUTH_STORAGE_KEY, payload.email);
  unlockApp();
}

function signOut(){
  localStorage.removeItem(AUTH_STORAGE_KEY);
  showGate();
}

function initAuth(){
  const storedEmail = localStorage.getItem(AUTH_STORAGE_KEY);
  if (storedEmail && ALLOWED_EMAILS.includes(storedEmail)){
    unlockApp();
    return;
  }
  showGate();
  if (typeof google === "undefined"){
    showGate("Couldn't reach Google Sign-In. Check your connection and reload.");
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("googleSignInBtn"),
    { theme: "outline", size: "large", shape: "pill", text: "signin_with" }
  );
}

window.addEventListener("load", initAuth);
