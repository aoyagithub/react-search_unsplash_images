import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID l4fhTp-daWYibZk3NyuwQYJOowkqpgH5lU-g14tGAbM",
  },
});
