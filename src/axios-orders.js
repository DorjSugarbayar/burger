import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-feb57-default-rtdb.firebaseio.com/"
});

export default instance;
