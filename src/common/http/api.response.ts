export interface IApiResponse {
  success: boolean;
  message: string | null;
  data: any;
  control: IApiResponsePaginatorControl | null
}

export interface IApiResponsePaginatorControl {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

export class ApiResponse implements IApiResponse {
  success = true;
  message: string | null = null;
  data: any = null;
  control = null;

  constructor(
    data: any = null,
    message: string | null = null,
    success = true,
    control: IApiResponsePaginatorControl = null
  ) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.control = control;
  }
}