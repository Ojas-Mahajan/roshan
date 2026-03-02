import React from "react";
import { useNavigate } from "react-router-dom"; 
export default function BestCafeinChandigarh() {
  const navigate = useNavigate(); 
  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Best Cafe in Chandigarh – Dialogue Cafe</h1>

      <p style={styles.paragraph}>
        Looking for the <a href="https://dialoguecafe.in/"> best cafe in Chandigarh </a>where you get great food, cozy vibes, and a menu full of choices? Welcome to Dialogue Cafe, located in Sector 35-B — a perfect place for coffee lovers, foodies, students, and working professionals.
      </p>
      <p style={styles.paragraph}>
        More than just a coffee place, it’s a space where conversations start; ideas grow, and every visit feels special.
      </p>

      <h2 style={styles.subheading}>A Cozy Ambience That Feels Like Home</h2>
      <p style={styles.paragraph}>
        As you enter this place, you are welcomed by a warm and relaxing atmosphere. Soft lighting, wooden interiors, comfortable seating, and peaceful vibes make it perfect for:
      </p>
      <ul style={styles.list}>
        <li>Friends' hangout</li>
        <li>Work from coffee place</li>
        <li>Study sessions</li>
        <li>Coffee dates</li>
        <li>Me-time</li>
      </ul>

      <p style={styles.paragraph}>
        You can sit for hours, enjoy your coffee, and feel completely comfortable.
      </p>

      <h2 style={styles.subheading}>Explore Our Multi-Cuisine Menu</h2>
      <p style={styles.paragraph}>
        One of the biggest highlights of this place is its beautifully crafted a multi-cuisine menu. You don’t just come here for coffee — you come here for a complete food experience.
      </p>

      <h3 style={styles.subsubheading}>Continental Delights</h3>
      <p style={styles.paragraph}>
        From fresh pizzas to creamy pasta and all-day breakfast options — perfect for light and satisfying meals.
      </p>

      <h3 style={styles.subsubheading}>Mexican Treats</h3>
      <p style={styles.paragraph}>
        Craving something spicy and exciting? Nachos, wraps, and Mexican bowls bring bold flavors to your table.
      </p>

      <h3 style={styles.subsubheading}>Authentic Chinese</h3>
      <p style={styles.paragraph}>
        Enjoy your favorite noodles, fried rice, Manchurian, and starters made with a rich taste and perfect seasoning.
      </p>

      <h3 style={styles.subsubheading}>North Indian Favorites</h3>
      <p style={styles.paragraph}>
        For desi food lovers — flavorful curries, chap, and hearty Indian meals that feel like home.
      </p>

      <h3 style={styles.subsubheading}>American Classics</h3>
      <p style={styles.paragraph}>
        Burgers, sandwiches, pancakes, waffles, and loaded sides — perfect for quick bites and heavy cravings.
      </p>

      <h3 style={styles.subsubheading}>Refreshing Beverages</h3>
      <p style={styles.paragraph}>
        From hot coffees and cold coffees to shakes, mocktails, and coolers — there’s something for every mood.
      </p>

      <h2 style={styles.subheading}>Must-Try at Dialogue Cafe</h2>
      <ul style={styles.list}>
        <li>Cappuccino & Espresso</li>
        <li>Cheesy Garlic Bread</li>
        <li>Alfredo Pasta</li>
        <li>Loaded Burgers</li>
        <li>Chocolate Shakes & Brownies</li>
      </ul>

      <p style={styles.paragraph}>Every dish is freshly prepared and beautifully served.</p>

      <h2 style={styles.subheading}>Perfect for Every Occasion</h2>
      <p style={styles.paragraph}>
        Whether you want to:
      </p>
      <ul style={styles.list}>
        <li>Chill with friends</li>
        <li>Go on a date</li>
        <li>Work with free Wi-Fi</li>
        <li>Celebrate small moments</li>
      </ul>
      <p style={styles.paragraph}>This place gives you the perfect setting.</p>

      <h2 style={styles.subheading}>Affordable Yet Premium</h2>
      <p style={styles.paragraph}>
        You don’t have to spend a lot enjoying a premium coffee place experience. This place offers:
      </p>
      <ul style={styles.list}>
        <li>Pocket-friendly prices</li>
        <li>Generous portions</li>
        <li>Quality food & coffee</li>
      </ul>
      <p style={styles.paragraph}>
        That’s why it’s one of the most loved coffee places in Chandigarh.
      </p>

      <h2 style={styles.subheading}>Easy to Reach Location</h2>
      <address style={styles.address}>
        SCO 301-302, Sector 35-B, Chandigarh – 160022<br />
        Centrally located and easily accessible from colleges, offices, and all major areas of the city.
      </address>

      <h2 style={styles.subheading}>Why Dialogue Cafe is One of the Best Cafes in Chandigarh</h2>
      <ul style={styles.list}>
        <li>Different cuisines under one roof</li>
        <li>Cozy & aesthetic ambiance</li>
        <li>Free Wi-Fi & comfortable seating</li>
        <li>Budget-friendly</li>
        <li>Perfect for work & hangouts</li>
      </ul>

      <p style={styles.paragraph}>
        If you are searching for the top coffee place in Chandigarh, this place should be on your list. Come for the coffee, explore the menu, enjoy the  <a href="https://dialoguecafe.in/">vibe </a>, and make beautiful memories with every visit.
      </p>
      <p>Let the conversations begin at this place.</p>

      {/* ✅ Back Button */}
      <div style={styles.backButtonContainer}>
        <button
          style={styles.backButton}
          onClick={() => navigate("/blog")}
        >
          ← Back to Blog
        </button>
      </div>
    
    </main>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "30px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#222",
    lineHeight: 1.6,
  },
  heading: {
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: 20,
    color: "#5a2a83",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    color: "#5a2a83",
  },
  subsubheading: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 6,
    color: "#8430b3",
  },
  paragraph: {
    marginBottom: 15,
    fontSize: "1rem",
  },
  list: {
    marginBottom: 15,
    paddingLeft: 20,
  },
  address: {
    fontStyle: "normal",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeft: "4px solid #5a2a83",
  },

   // ✅ Styles for Back Button
  backButtonContainer: { marginTop: 30, textAlign: "center" },
  backButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#5a2a83",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};