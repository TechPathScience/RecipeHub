import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Github.css";
import Navbar from "../Navbar/Navbar";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "TechPathScience"; // Replace with your GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="repo-container">
        <h1>My GitHub Repositories 📂</h1>
        <div className="card-grid">
          {repos.map((repo) => (
            <div className="card" key={repo.id}>
              <h2 className="repo-name">{repo.name}</h2>
              <p className="repo-description">
                {repo.description || "No description available"}
              </p>
              <a
                className="repo-link"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Repository →
              </a>
            </div>
          ))}
        </div>
        <footer className="footer">
          <p>
            🌟 Explore my GitHub repositories and connect with my projects! 🚀
          </p>
        </footer>
      </div>
    </>
  );
};

export default Github;
