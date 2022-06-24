import { get } from 'axios';

export function checkProduct() {
    return get('http://localhost:5000/api/v1/product/:624abe2f071a39dc8512adb0');
}
export function checkLogin(email, password) {
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    const { data } = axios.post(
        `http://localhost:5000/api/v1/user/login`,
        { email, password },config
      );
    return data;
}
