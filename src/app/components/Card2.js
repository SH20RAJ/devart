import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async (username) => {
      const url = `https://api.github.com/users/${username}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setUserDetails(null);
      }
    };

    fetchUserDetails("sh20raj");
  }, []);

  let skeleton = "";
    for (let i = 0; i < 20; i++) {
      skeleton += `<div class="card rounded-[12px] m-10 text-xl shadow-2xl p-10 animate-pulse inline-block">
    <a href="#">
      <div class="w-full h-64 bg-gray-200 rounded mb-3"></div>
      <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div class="h-1 bg-gray-200 rounded w-full mb-2"></div>
      <div class="h-4 bg-gray-200 rounded w-1/4"></div>
    </a>
  </div>`
    }

  if (!userDetails) {
    return (
      <>
        <span class="flex justify-center text-center flex-wrap" dangerouslySetInnerHTML={{
            __html: skeleton
          }}>
          
        </span>
      </>
    );
  }

  const { avatar_url, name, bio, followers, public_repos, html_url } =
    userDetails;

  let scriptdata = `   // Function to fetch repository details from GitHub API
  async function fetchRepoDetails(username, repoName) {
    const url = 'https://api.github.com/repos/'+username+'/'+repoName+'';
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching repository details:', error);
      return null;
    }
  }
  
  // Function to update the repository card with fetched repo details
  async function updateRepoCard(username, repoName) {
    const repoDetails = await fetchRepoDetails(username, repoName);
    if (repoDetails) {
      const { name, description, stargazers_count, forks_count, language } = repoDetails;
      document.getElementById('description').textContent = description || '';
      document.getElementById('stars').textContent = stargazers_count;
      document.getElementById('forks').textContent = forks_count;
      document.getElementById('language').textContent = language || 'N/A';
      document.querySelector('.max-w-md').classList.add('animated-slide-in');
    }
  }
  
  // Call the updateRepoCard function with the username and repository name
  updateRepoCard('sh20raj', 'devart');
  `;
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative animated-slide-in">
        <a
          href={html_url}
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style={{
              fill: "#151513",
              color: "#fff",
              position: "absolute",
              top: 0,
              border: 0,
              right: 0,
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>

        <div className="relative">
          <img
            id="avatar"
            src={avatar_url}
            alt="User Avatar"
            className="h-48 w-full object-cover"
          />
          {!userDetails && (
            <div
              id="loading"
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 text-white text-lg font-semibold"
            >
              Loading...
            </div>
          )}
        </div>
        <div id="userDetails" className="text-center px-6 py-4">
          <h3 id="username" className="text-xl font-semibold text-gray-800">
            {name || "Username"}
          </h3>
          <p id="bio" className="text-sm font-medium text-gray-600">
            {bio || "Bio"}
          </p>
          <div className="flex justify-center mt-4">
            <div>
              <p className="text-sm text-gray-600">Followers</p>
              <p id="followers" className="text-lg font-semibold text-gray-800">
                {followers}
              </p>
            </div>
            <div className="ml-6">
              <p className="text-sm text-gray-600">Repositories</p>
              <p
                id="repositories"
                className="text-lg font-semibold text-gray-800"
              >
                {public_repos}
              </p>
            </div>
          </div>
        </div>
        <a
          href={html_url}
          id="githubcorner"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style={{
              fill: "#151513",
              color: "#fff",
              position: "absolute",
              top: 0,
              border: 0,
              right: 0,
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: "130px 106px" }}
              className="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7
,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>
      </div>
      <div class="my-10 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden animated-slide-in">
        <div class="relative">
          <a
            href={"https://github.com/sh20raj/devart"}
            className="github-corner"
            aria-label="View source on GitHub"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 250 250"
              style={{
                fill: "#151513",
                color: "#fff",
                position: "absolute",
                top: 0,
                border: 0,
                right: 0,
              }}
              aria-hidden="true"
            >
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor"
                style={{ transformOrigin: "130px 106px" }}
                className="octo-arm"
              ></path>
              <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor"
                className="octo-body"
              ></path>
            </svg>
          </a>
          <div class="text-center px-6 py-4 ">
            <div class="py-4 ">
              <h3 class="text-xl font-semibold text-gray-800">devart</h3>
              <p id="description" class="text-sm font-medium text-gray-600">
                A Blog made using Dev.to API
              </p>
            </div>
            <div class="flex justify-center mt-4">
              <div>
                <p class="text-sm text-gray-600">Stars</p>
                <p id="stars" class="text-lg font-semibold text-gray-800">
                  1
                </p>
              </div>
              <div class="ml-6">
                <p class="text-sm text-gray-600">Forks</p>
                <p id="forks" class="text-lg font-semibold text-gray-800">
                  1
                </p>
              </div>
              <div class="ml-6">
                <p class="text-sm text-gray-600">Language</p>
                <p id="language" class="text-lg font-semibold text-gray-800">
                  JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: scriptdata }} />
    </>
  );
};

export default ProfileCard;
