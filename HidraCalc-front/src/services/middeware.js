import Cookie from "js-cookie";
import axios from "axios";

export default class Guard {
  static async auth(to, from, next) {
    const token = Cookie.get("token");

    if (!token) {
      return next('/calc');
    }

    try {
      const response = await axios.post('http://localhost:8003/api/validate-token', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.valid) {
        return next();
      } else {
        return next('/Login');
      }
    } catch (error) {
      console.error("Erro ao validar o token:", error);
      return next('/Login');
    }
  }
}
