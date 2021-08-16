import { ApiResponse, IApiResponse, IApiResponsePaginatorControl } from "./api.response";

export class BaseController {

  response(
    data: any = null,
    message: string | null = null,
    success = true,
    control: IApiResponsePaginatorControl = null
  ): IApiResponse {
    return new ApiResponse(data, message, success, control);
  }

  responseWithPaginationControl(
    control: IApiResponsePaginatorControl,
    data: any = null,
    message: string | null = null,
    success = true
  ) {
    return this.response(data, message, success, control);
  }

}
