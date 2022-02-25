import axios from "axios";

const api = axios.create({
  // baseURL: 'exp://57-b82.otaviohenls625.cardapio-app.exp.direct:80:3333'
  // exp://57-b82.otaviohenls625.cardapio-app.exp.direct:80
  baseURL: 'http://192.168.0.11:3333'
  // exp://192.168.0.11:19000
  // baseURL: 'http://localhost:3333'
});

export default api;
