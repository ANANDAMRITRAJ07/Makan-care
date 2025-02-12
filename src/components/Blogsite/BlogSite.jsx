import React from "react";
import "./BlogSite.css";
import BlogImg from "../../assets/insta.jpg";

const BlogSite = () => {
  const blogs = [
    {
      id: 1,
      //   imageUrl: 'https://example.com/blog1.jpg' ,
      date: "Feb 12, 2025",
      header: "Blog Post 1 Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula...",
      link: "#",
    },
    {
      id: 2,
      //   imageUrl: 'https://example.com/blog2.jpg',
      date: "Feb 11, 2025",
      header: "Blog Post 2 Title",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      link: "#",
    },
    {
      id: 3,
      //   imageUrl: 'https://example.com/blog3.jpg',
      date: "Feb 10, 2025",
      header: "Blog Post 3 Title",
      content:
        "Quisque volutpat mattis eros, ac condimentum odio tristique ut...",
      link: "#",
    },
    {
      id: 4,
      //   imageUrl: 'https://example.com/blog4.jpg',
      date: "Feb 9, 2025",
      header: "Blog Post 4 Title",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...",
      link: "#",
    },
  ];

  return (
    <div className="blog-site">
      <h2>Our Latest Blogs</h2>
      <div className="blogs">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <img src={BlogImg} alt={`Blog ${blog.id}`} className="blog-image" />
            <div className="blog-details">
              <span className="blog-date">{blog.date}</span>
              <h3 className="blog-header">{blog.header}</h3>
              <p className="blog-content">{blog.content}</p>
              <a href={blog.link} className="read-more-btn">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSite;
