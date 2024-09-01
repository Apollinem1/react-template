import { AxiosRequestConfig } from "axios";

export class HttpService {
  private baseApi: string = "";
  private httpClient: any;

  constructor(baseApiPath: string = "/api/v1/", httpClient: any) {
    this.baseApi = baseApiPath;
    this.httpClient = httpClient;
  }

  get baseHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  protected async get(path: string, config?: AxiosRequestConfig) {
    let response;

    if (config) {
      response = await this.httpClient.get(`${this.baseApi}/${path}`, config);
    } else {
      response = await this.httpClient.get(`${this.baseApi}/${path}`, {
        headers: this.baseHeaders,
      });
    }
    return response.data;
  }

  protected async post<T>(path: string, body: T, config?: AxiosRequestConfig) {
    if (config) {
      return await this.httpClient.post(
        `${this.baseApi}/${path}`,
        body,
        config
      );
    } else {
      return await this.httpClient.post(`${this.baseApi}/${path}`, body, {
        headers: this.baseHeaders,
      });
    }
  }

  protected async put<T>(path: string, body: T) {
    const response = await this.httpClient.put(
      `${this.baseApi}/${path}`,
      body,
      {
        headers: this.baseHeaders,
      }
    );

    return response.data;
  }

  protected async delete(path: string, config?: AxiosRequestConfig) {
    const response = await this.httpClient.delete(
      `${this.baseApi}/${path}`,
      config
    );

    return response.data;
  }

  protected async patch<T>(path: string, body: T) {
    const response = await this.httpClient.patch(
      `${this.baseApi}/${path}`,
      body,
      {
        headers: this.baseHeaders,
      }
    );

    return response.data;
  }
}
