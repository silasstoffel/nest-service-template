export class ApiResponse {
  success = true;
  message: string | null;
  data: any;

  constructor(data: any = null, message: string | null = null, success = true) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
