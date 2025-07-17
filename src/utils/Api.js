import axios from "axios";

const Api = axios.create({
  baseURL: "https://laravel-api.test/api",
});

export default Api;
