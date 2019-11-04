export class BaseModel {
  name: String;
  status: boolean;

  constructor(name: String, status: boolean) {
    this.name = name;
    this.status = status;
  }
}
