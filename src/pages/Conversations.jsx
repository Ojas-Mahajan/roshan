import React from "react";
import { useNavigate } from "react-router-dom";

export default function Conversations() {
    const navigate = useNavigate();

    return (
        <main style={styles.container}>
            <h1 style={styles.heading}>
                Dialogue Cafe: Where Conversations Become Connections
            </h1>

            <p style={styles.paragraph}>
                In a world driven by speed, noise, and digital distractions, <a href="https://www.dialoguecafe.in/">Dialogue Cafe</a> 
                stands as a calm, meaningful space where conversations matter and
                connections grow. More than just a café, it is a community space, a place
                where ideas flow as freely as coffee, and people come not just to eat and
                drink, but to engage, reflect, and belong.
            </p>

            <p style={styles.paragraph}>Conversation Spot is built on a simple belief that conversations create real
                change.</p>



            <h2 style={styles.subheading}>A Space Designed for Dialogue</h2>

            <p style={styles.paragraph}>
                Every corner of the Conversation Spot is thoughtfully created to encourage
                interaction between friends, strangers, thinkers, creators, students,
                entrepreneurs, and dreamers. It’s a space where:
            </p>

            <ul style={styles.list}>
                <li>Conversations are welcomed</li>
                <li>Ideas are respected</li>
                <li>Differences are embraced</li>
                <li>Creativity is encouraged</li>
                <li>Community is nurtured</li>
            </ul>

            <p style={styles.paragraph}>
                Here, discussion is not just talk — it’s exchange, understanding & growth.
            </p>

            <h2 style={styles.subheading}>More Than a Cafe Experience</h2>

            <p style={styles.paragraph}>
                Dialogue Cafe is not defined only by its <a href="https://www.dialoguecafe.in/menu">menu </a>  — it’s defined by its purpose.
                It represents a culture of:
            </p>

            <ul style={styles.list}>
                <li>Open communication</li>
                <li>Healthy discussions</li>
                <li>Intellectual curiosity</li>
                <li>Social awareness</li>
                <li>Community bonding</li>
            </ul>

            <p style={styles.paragraph}>
                From casual conversations over coffee to deep discussions on life,
                business, society, and culture, Interaction Spot creates an environment
                where voices are heard and minds connect. It brings people together not
                just to sit together, but to think together, learn together, and grow together.
            </p>

            <h2 style={styles.subheading}>Food, Coffee & Conscious Living</h2>

            <p style={styles.paragraph}>
                The experience at Discussion Spot blends taste with thoughtfulness. Every
                cup of coffee and every plate served reflects care, quality and intention. It’s
                not just about consumption, it’s about experience, presence, and
                connection.
            </p>

            <p style={styles.paragraph}>Dialogue Cafe stands for:</p>

            <ul style={styles.list}>
                <li>Respectful conversation</li>
                <li>Inclusive spaces</li>
                <li>Human connection</li>
                <li>Thoughtful living</li>
                <li>Positive social impact</li>
            </ul>

            <p style={styles.paragraph}>
                It is a reminder that in a divided world, Discussion is powerful, and in a
                disconnected society, the community is healing. Welcome to Interaction
                Café, where Conversation becomes culture.
            </p>

            <h2 style={styles.subheading}>Frequently Asked Questions (FAQ)</h2>

            <div style={styles.faqBox}>
                <p style={styles.question}>
                    Q1: What makes Dialogue Cafe different from regular coffee shops?
                </p>
                <p style={styles.answer}>
                    A: Unlike traditional Spot focused on quick service, we prioritize &quot;slow
                    connection.&quot; Our seating and atmosphere are designed specifically to
                    spark conversations and community bonding.
                </p>

                <p style={styles.question}>
                    Q2: Can I host small meetings or workshops at Dialogue Cafe?
                </p>
                <p style={styles.answer}>
                    A: Yes! We encourage creators and entrepreneurs to use our space for
                    brainstorming and collaborative sessions that align with our culture of
                    growth.
                </p>

                <p style={styles.question}>
                    Q3: Is the food at Dialogue Cafe sustainably sourced?
                </p>
                <p style={styles.answer}>
                    A: Absolutely. We believe in conscious living, which means we prioritize
                    quality ingredients and mindful preparation in everything we serve.
                </p>
            </div>

            <div style={styles.faqBox}>
                <h2 style={styles.subheading}>Easy to Reach Location</h2>
                <address style={styles.address}>
                    SCO 301-302, Sector 35-B, Chandigarh – 160022<br />
                    Centrally located and easily accessible from colleges, offices, and all major areas of the city.
                </address>
            </div>

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
    container: { maxWidth: 900, margin: "30px auto", padding: "0 20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#222", lineHeight: 1.6 },
    heading: { fontSize: "1.9rem", fontWeight: "700", marginBottom: 20, color: "#5a2a83", textAlign: "center" },
    subheading: { fontSize: "1.8rem", fontWeight: "600", marginTop: 30, marginBottom: 10, color: "#5a2a83" },
    paragraph: { marginBottom: 15, fontSize: "1rem" },
    list: { marginBottom: 15, paddingLeft: 20 },
    faqBox: { backgroundColor: "#f9f9f9", padding: 15, borderRadius: 8, marginTop: 10, borderLeft: "4px solid #5a2a83" },
    question: { fontWeight: "600", marginTop: 10 },
    answer: { marginBottom: 10 },

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