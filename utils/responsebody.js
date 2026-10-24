const errorResponseBody = {
    err: {},
    data: {},
    message:"something went wrong",
    success: false
};

const sucessResponseBody = {
    err: {},
    data: {},
    message:"sucessfully processed the request",
    success: true
}

module.exports = {
    errorResponseBody,
    sucessResponseBody
}