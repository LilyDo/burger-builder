import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-jul2020.firebaseio.com/",
});

export default instance;
