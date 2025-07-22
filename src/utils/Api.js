import axios from "axios";

const Api = axios.create({
  baseURL: "http://laravel-api.test/api",
});

export default Api;
