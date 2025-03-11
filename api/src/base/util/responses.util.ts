import { ApiResponsePaginatedDto } from '../dto/apiResponsePaginated.dto';
import { ApiResponseDto } from '../dto/apiResponse.dto';

export function createPaginatedResponse<T extends any[]>(
  data: T,
  currentPage = 1,
  errors?: any,
): ApiResponsePaginatedDto<T> {
  const clearData = clearReponse(data);
  return {
    message: 'success',
    total: data.length, // Agora sabemos que data é um array
    currentPage,
    errors,
    data: clearData,
  };
}

export function clearReponse<T extends any[]>(data: T): T {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return data.map(({ createdAt, updatedAt, deletedAt, ...rest }) => rest) as T;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createResponse<T>(data?: T, errors?: any): ApiResponseDto<T> {
  return {
    message: 'success',
    data,
  };
}

export function createError<T>(errors: any): ApiResponseDto<T> {
  return {
    message: 'error',
    errors: errors.toString(),
  };
}
