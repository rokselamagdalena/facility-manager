import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
     axios.defaults.headers.common['Content-Type'];
    delete axios.defaults.headers.common['Authorization'];
  }
}