import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//-------------------------------------------------------
/* 
import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const fetchFromAPI = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        ...params,
        maxResults: "50",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data from API", error);
    throw error;
  }
};

export { fetchFromAPI };
 */

//------------------------------------------------
/* import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const headers = {
  "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
  "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchFromAPI = async (url, params = {}, retryCount = 3) => {
  try {
    await delay(1000); // Delay of 1 second between requests
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        ...params,
        maxResults: "50",
      },
      headers,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.status === 429 && retryCount > 0) {
      console.warn("Rate limit exceeded, retrying...");
      await delay(2000); // Wait for 2 seconds before retrying
      return fetchFromAPI(url, params, retryCount - 1);
    } else {
      console.error("Error fetching data from API", error);
      throw error;
    }
  }
};

export { fetchFromAPI };
 */
