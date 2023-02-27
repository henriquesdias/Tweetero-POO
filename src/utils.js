class STATUS_CODE {
  constructor() {
    this.OK = 200;
    this.CREATED = 201;
    this.BAD_REQUEST = 400;
  }
}

const status = new STATUS_CODE();

export { status };
