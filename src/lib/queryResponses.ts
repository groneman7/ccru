export type SuccessResponse<T> = {
    status: 200 | 201;
    message: string;
    data: T;
};

export type ErrorResponse = {
    status: 400 | 403 | 404 | 500;
    message: string;
    data?: never;
};

export type QueryResponse<T> = SuccessResponse<T> | ErrorResponse;

export function ok<T>(data: T, message?: string): SuccessResponse<T> {
    return {
        status: 200,
        message: message ?? "OK",
        data,
    };
}

export function created<T>(data: T, message?: string): QueryResponse<T> {
    return {
        status: 201,
        message: message ?? "Created",
        data,
    };
}

export function badRequest(message?: string): ErrorResponse {
    return {
        status: 400,
        message: message ?? "Bad request",
    };
}

export function notFound(message?: string): ErrorResponse {
    return {
        status: 404,
        message: message ?? "Not found",
    };
}

export function forbidden(message?: string): ErrorResponse {
    return {
        status: 403,
        message: message ?? "Forbidden",
    };
}

export function internalServerError(message?: string): ErrorResponse {
    return {
        status: 500,
        message: message ?? "Internal server error",
    };
}
