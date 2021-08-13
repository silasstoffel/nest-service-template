export interface IApiResponseBuilder {
  withMessage(message: string): this;
  withSuccess(success: boolean): this;
  withData(data: any): this;
  build(): IApiResponse;
}

export interface IApiResponse {
  success: boolean;
  message: string | null;
  data: any;
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

  constructor(data: any = null, message: string | null = null, success = true) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export class ApiResponseBuilder implements IApiResponseBuilder {
  private builder: IApiResponse;
  private control: any;

  constructor() {
    this.control = null;
    this.builder = new ApiResponse();
    return this;
  }

  build(): IApiResponse {
    if (this.control !== null) {
      const data = this.builder.data;
      this.builder.data = { items: data, control: this.control };
    }
    return this.builder;
  }

  withMessage(message: string): this {
    this.builder.message = message;
    return this;
  }

  withSuccess(success: boolean): this {
    this.builder.success = success;
    return this;
  }

  withData(data: any): this {
    this.builder.data = data;
    return this;
  }

  withControl(control: any): this {
    this.control = control;
    return this;
  }
}
