import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Modify config before sending the request
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    // Handle request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Modify response data before resolving the promise
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    // Handle response error
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

// Make an HTTP request
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
