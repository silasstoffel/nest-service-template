import {
  ApiResponse,
  ApiResponseBuilder,
  IApiResponse,
  IApiResponsePaginatorControl,
} from './api.response';

export class BaseController {
  /**
   * default response api
   * @param {any} data data
   * @param {string} message (optional) message. Default: null
   * @param {boolean} success (optional) success status. Default: true
   * @returns {ApiResponse} Response
   */
  response(
    data: any = null,
    message: string | null = null,
    success = true,
  ): ApiResponse {
    return this.createResponse(data, message, success);
  }

  /**
   * Default response api with paginator control
   * @param {any[]} items items
   * @param {IApiResponsePaginatorControl} control Paginator
   * @param {string} message (optional) message. Default: null
   * @param {boolean} success (optional) success status. Default: true
   * @returns {ApiResponse} Response
   */
  responseWithPaginator(
    items: any[] = [],
    control: IApiResponsePaginatorControl,
    message: string | null = null,
    success = true,
  ): ApiResponse {
    return this.createResponse(items, message, success, control);
  }

  private createResponse(
    data: any = null,
    message: string | null = null,
    success = true,
    paginatorControl: any = null,
  ): IApiResponse {
    return new ApiResponseBuilder()
      .withData(data)
      .withMessage(message)
      .withControl(paginatorControl)
      .withSuccess(success)
      .build();
  }
}
