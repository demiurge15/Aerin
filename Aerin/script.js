// Track user login state
let isLoggedIn = false; // Initially, the user is not logged in

// Navigation links
const homeLink = document.getElementById("home-link");
const exploreLink = document.getElementById("explore-link");
const loginLink = document.getElementById("login-link");
const aboutLink = document.getElementById("about-link");

// Content container
const content = document.getElementById("content");

// Event Listeners
homeLink.addEventListener("click", loadHome);
exploreLink.addEventListener("click", () => {
  if (isLoggedIn) {
    loadExplore();
  } else {
    alert("Please log in to access Explore.");
    loadLogin();
  }
});
loginLink.addEventListener("click", loadLogin);
aboutLink.addEventListener("click", loadAbout);

// Load Home Page
function loadHome() {
  content.innerHTML = `
    <section class="hero">
      <h1>Elevate Your Style</h1>
      <p>Unleash your creativity with fashion inspiration tailored just for you.</p>
      <button onclick="exploreLink.click()">Explore Now</button>
    </section>
  `;
}

// Load Explore Page
function loadExplore() {
    content.innerHTML = `
      <section class="gallery">
        <h2>Explore Collections</h2>
        <div class="grid">
          <div class="grid-item">
            <a href="WomenStyles.html">
              <img src="WomanStyles.jpg" alt="Women Styling">
            </a>
          </div>
          <div class="grid-item">
            <a href="MenStyles.html">
              <img src="ManStyles.jpg" alt="Men Styling">
            </a>
          </div>
          <div class="grid-item">
            <a href="WomenHairstyles.html">
              <img src="Womanhairstyle.jpg" alt="Women Hairstyles">
            </a>
          </div>
          <div class="grid-item">
            <a href="Men Hairstyles.html">
              <img src="Manhairstyle.jpg" alt="Men Hairstyles">
            </a>
          </div>
        </div>
      </section>
    `;
  }


// Initial load
loadExplore();

// Load Login Page
function loadLogin() {
  content.innerHTML = `
    <section class="login classy-login">
      <div class="login-container">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>
        <form onsubmit="event.preventDefault(); handleLogin();">
          <input type="text" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
        <div class="login-footer">
          <p>Don't have an account? <a href="#" onclick="loadSignUp()">Sign Up</a></p>
        </div>
      </div>
    </section>
  `;
}

// Handle Login
function handleLogin() {
  isLoggedIn = true; // Simulate a successful login
  alert("You have successfully logged in.");
  loadExplore(); // Redirect to Explore page after login
}

// Load Sign Up Page
function loadSignUp() {
  content.innerHTML = `
    <section class="signup classy-login">
      <div class="login-container">
        <h2>Create an Account</h2>
        <p>Sign up to discover amazing styles</p>
        <form onsubmit="event.preventDefault(); handleSignUp();">
          <input type="text" placeholder="Username" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>
        </form>
        <div class="login-footer">
          <p>Already have an account? <a href="#" onclick="loadLogin()">Login</a></p>
        </div>
      </div>
    </section>
  `;
}

// Handle Sign Up
function handleSignUp() {
  // Simulate account creation
  alert("Account created successfully! Please log in.");
  loadLogin();
}

// Load About Page
function loadAbout() {
  content.innerHTML = `
    <section class="about">
      <h2>About Us</h2>
      <p>Aerin brings together the timeless elegance of Paris, the bold trends of Korea, and the minimalist charm of the Netherlands to create globally inspired fashion for everyday life.</p>
      <p>More than just a clothing brand, we’re here to help you elevate your style. Through versatile designs and expert fashion tips, Aerin empowers you to express your individuality and discover your best-dressed self.</p>
      <p>Explore Aerin and redefine your wardrobe with global flair.</p>
    </section>
  `;
}
function handleSignUp() {
  showNotification("Account created successfully! Please log in.", "success");
  loadLogin();
}
exploreLink.addEventListener("click", () => {
  if (isLoggedIn) {
    loadExplore();
  } else {
    showNotification("Please log in to explore.", "warning");
    loadLogin();
  }
});

// Function to display a notification
function showNotification(message, type = "warning") {
  const notificationContainer = document.getElementById("notification-container");

  // Create the notification element
  const notification = document.createElement("div");
  notification.classList.add("notification");

  // Add icon and message
  const icon = type === "warning" ? "⚠️" : "✅";
  notification.innerHTML = `
    <span class="icon">${icon}</span>
    <span>${message}</span>
    <button class="close-btn" onclick="this.parentElement.remove()">×</button>
  `;

  // Append to the notification container
  notificationContainer.appendChild(notification);

  // Automatically remove the notification after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Example usage for Explore Access
exploreLink.addEventListener("click", () => {
  if (isLoggedIn) {
    loadExplore();
  } else {
    showNotification(" Please log in to access Explore. ", "warning");
    loadLogin();
  }
});