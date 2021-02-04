export const HTTP_CODE = {
  OK: 200,
  CREATED: 201,
  UPDATED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  ACCESS_FORBIDDEN: 403,
  URL_NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNREGISTERED: 410,
  EMAIL_REQUIRED: 411,
  PAYLOAD_TOO_LARGE: 413,
  NOT_ACTIVE: 414, // custom
  CONCURRENT_LIMITED_EXCEEDED: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SHUTDOWN: 503,
};

const succes = (message = 'Succesfull query!', headerCode = HTTP_CODE.OK) => ({
  headerCode,
  message,
  statusCode: HTTP_CODE.OK,
  success: true,
});

const error = (message = 'Something went wrong!', headerCode = HTTP_CODE.BAD_REQUEST) => ({
  headerCode,
  message,
  statusCode: HTTP_CODE.OK,
  success: false,
});

export const SUCCESS = {
  DEFAULT: succes(),
};

export const ERROR = {
  DEFAULT: error(),
  FIELD_VALIDATION_FAILED: error('Field validation failed'),
};