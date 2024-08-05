export type QueryResponse<T> = {
  status: number;
  message?: string;
  data?: T;
};

export const defaultQueryReturns = {
  200: {
    status: 200,
    message: 'OK'
  },
  201: {
    status: 201,
    message: 'Created'
  },
  404: {
    status: 404,
    message: "Not found"
  },
  500: {
    status: 500,
    message: "Internal server error"
  }
};
