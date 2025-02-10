import { ApiResponsePaginatedDto } from '../dto/apiResponsePaginated.dto';
import { ApiResponseDto } from '../dto/apiResponse.dto';

export function createPaginatedResponse<T>(data: T, currentPage = 1, errors?: any): ApiResponsePaginatedDto<T> {
  return {
    message: 'success',
    total: Array.isArray(data) ? data.length : 1,
    currentPage,
    errors,
    data
  };
}

export function createResponse<T>(data?: T, errors?: any): ApiResponseDto<T> {
  return {
    message: 'success',
    data
  };
}

export function createError<T>( errors: any): ApiResponseDto<T> {
  return {
    message: 'error',
    errors: errors.toString(),
  };
}