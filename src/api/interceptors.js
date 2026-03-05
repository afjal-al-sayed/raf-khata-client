export const responseErrorHandler = (error) => {
  // on rejected or has some error code in response
  // error. response . data holds the response body sent by server
  // error. response. staus is code
  // error. messag => axios generated error message
  console.error("Interceptor: ", error);
  let normalizedError = {
    message: "Network error: No response from server.",
    status: -1,
  };

  if (error.response) {
    // has a response form server
    // also can get anything returned from server
    normalizedError.message = error.response.data?.message || error.message;
    normalizedError.status = error.response.status;
  }
  return Promise.reject(normalizedError);
};
