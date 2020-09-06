export const commonResponse = (pureResponse, code = 0, message = '') => {
    return {
        code: code,
        message: message,
        data: pureResponse
    }
}