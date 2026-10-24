const errorResponseBody = {
    err: {},
    data: {},
    message:"something went wrong",
    success: false
};

const successResponseBody = {
    err: {},
    data: {},
    message:"sucessfully processed the request",
    success: true
}

module.exports = {
    errorResponseBody,
    successResponseBody
}