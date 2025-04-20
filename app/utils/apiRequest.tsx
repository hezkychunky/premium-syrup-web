import Axios, { type AxiosInstance } from "axios";

interface HTTPRequest {
  create({ timeout }: { timeout?: number }): AxiosInstance;
}

class ClientHTTP implements HTTPRequest {
  private static instance: AxiosInstance | null = null;

  create({ timeout = 5000 }: { timeout?: number }): AxiosInstance {
    if (ClientHTTP.instance) {
      // make sure there is only one instance
      return ClientHTTP.instance;
    }

    ClientHTTP.instance = Axios.create({
      baseURL: import.meta.env.VITE_API_URL!,
      timeout,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY!,
      },
    });

    ClientHTTP.instance.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error.response?.data || error.message)
    );

    return ClientHTTP.instance;
  }
}

class HTTP implements HTTPRequest {
  private static instance: AxiosInstance | null = null;

  create({ timeout = 5000 }: { timeout?: number }): AxiosInstance {
    if (HTTP.instance) {
      // make sure there is only one instance
      return HTTP.instance;
    }

    HTTP.instance = Axios.create({
      baseURL: process.env.VITE_API_URL!,
      timeout,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.VITE_API_KEY!,
      },
    });

    HTTP.instance.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error.response?.data || error.message)
    );

    return HTTP.instance;
  }
}

export const createHTTP = (
  type: "client" | "server",
  options?: { timeout?: number }
): AxiosInstance => {
  if (type === "client") {
    return new ClientHTTP().create(options || {});
  }

  return new HTTP().create(options || {});
};

export default { createHTTP };
