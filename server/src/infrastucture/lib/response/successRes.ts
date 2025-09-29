export const successRes = (resData: any, code?: number, message?: string) => {
  return {
    statusCode: code ? code : 200,
    message: message ? message : 'success',
    data: resData,
  };
};
