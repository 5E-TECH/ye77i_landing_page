import { HttpException, InternalServerErrorException } from '@nestjs/common';

export const catchError = (error: any): never => {
  if (error?.response) {
    throw new HttpException(
      error?.response?.message,
      error?.response?.statusCode,
    );
  } else {
    throw new InternalServerErrorException(error.message);
  }
};
