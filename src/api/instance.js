import axios from "axios";

const instance = axios.create({
  baseURL: "https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/",
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access-token");

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("help me");
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      console.log("401");
      const originalRequest = config;
      console.log(config);
      const refreshToken = await localStorage.getItem("refresh-token");

      const data = await axios.get(
        `https://y3c85nbyn7.execute-api.ap-northeast-2.amazonaws.com/v1/auth/token/refresh`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      const newAccessToken = data.data.access_token;
      console.log(newAccessToken);
      localStorage.setItem("access-token", newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
