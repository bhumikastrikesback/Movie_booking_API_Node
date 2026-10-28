
// this object will be used as a template for building error responses
const errorResponseBody = {
    err: {},
    data: {},
    message:"something went wrong",
    success: false
};

// this object will be used as a template for buildinf success responses
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