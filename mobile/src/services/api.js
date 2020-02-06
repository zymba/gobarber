import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // for android emulator, use this ip: 10.0.2.2
  // for genymotion: 10.0.3.2
  // for usb, use your ip like 192.168...
});

export default api;
