import { AxiosInstance } from "./api-config";
import { HttpService } from "./http-service";

export class ApiService extends HttpService {
  constructor(baseApiPath: string = "/api/v1/") {
    super(baseApiPath, AxiosInstance);
  }
}
