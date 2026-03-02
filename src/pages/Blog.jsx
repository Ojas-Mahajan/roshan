import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Best Cafe in Chandigarh – Dialogue Cafe",
    image: "/image/dialogue-cafe-feature-image.jpg",
    shortDesc: "Looking for the best cafe in Chandigarh Where do you get great food, cozy vibes, and a menu full of choices? Welcome to Dialogue Cafe,  ",

  },
  {
    id: 2,
    title: "Dialogue Cafe: Where Conversations Become Connections",
    image: "/image/cafe-feature-image.jpg",
    shortDesc: "In a world driven by speed, noise, and digital distractions, Dialogue Cafe stands as a calm, meaningful space where  ",
   
  }
];

function Blog() {
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p>{blog.shortDesc}</p>
          <Link to={`/blog/${blog.id}`}>
            <button>Read-More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;