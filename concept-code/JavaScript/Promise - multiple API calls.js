// -- Sequential Asynchronous Operations

function fetchUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => response.json()
  );
}

function fetchUserPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => response.json());
}

fetchUser(1)
  .then((user) => {
    console.log("User:", user);
    return fetchUserPosts(user.id); // next API call
  })
  .then((posts) => {
    console.log("User's posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// -- Handling Multiple Promises Concurrently

function fetchUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => response.json()
  );
}

function fetchUserPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => response.json());
}

// Promise.all(Array[Promise1, Promise2]).then((Array[res1, resp2]) => {})...

Promise.all([fetchUser(1), fetchUserPosts(1)])
  .then(([user, posts]) => {
    console.log("User:", user);
    console.log("User's posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// -- Retry a Failed Operation

function fetchDataWithRetry(url, retries = 3) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      if (retries > 0) {
        console.log(`Retrying... (${retries} attempts left)`);
        return fetchDataWithRetry(url, retries - 1);
      } else {
        throw error;
      }
    });
}

fetchDataWithRetry("https://jsonplaceholder.typicode.com/posts", 3)
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
