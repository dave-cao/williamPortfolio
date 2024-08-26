function checkPassword() {
  const password = "123"; // Replace with your desired password
  const input = document.getElementById("passwordInput").value;

  if (input === password) {
    document.getElementById("loginForm").classList.add("hidden");
    sessionStorage.setItem("authenticated", "true");
    document.body.style.overflow = "";
    return false;
  } else {
    alert("Incorrect password. Please try again.");
    return false;
  }
}

// Check if the user has already entered the correct password
if (sessionStorage.getItem("authenticated") === "true") {
  document.getElementById("loginForm").classList.add("hidden");
} else {
  document.body.style.overflow = "hidden";
}

// Add this to your existing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here
});

/** Script to encrypt the current data
 * 
const crypto = require('crypto');

function encrypt(text, password) {
    const salt = crypto.randomBytes(16);
    const iv = crypto.randomBytes(12);
    const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256');
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    const authTag = cipher.getAuthTag();
    return salt.toString('base64') + iv.toString('base64') + encrypted + authTag.toString('base64');
}

const sensitiveContent = `
    <!-- Your sensitive HTML content here -->
`;

const encryptedContent = encrypt(sensitiveContent, 'your_password_here');
console.log(encryptedContent);
 */
