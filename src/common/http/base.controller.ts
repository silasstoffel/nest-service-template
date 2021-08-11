import { ApiResponse } from './api.response';

export class BaseController {
  response(
    data: any = null,
    message: string | null = null,
    success = true,
  ): ApiResponse {
    return new ApiResponse(data, message, success);
  }
}
