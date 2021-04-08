import * as RequestAPI from '../util/request_ai_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";


export const receiveErrors = (errors) => ({
    type: RECEIVE_REQUEST_ERRORS,
    errors
})


const receiveRequest = (payload) => ({
    type: RECEIVE_REQUEST,
    payload
})


export const createRequest = (request) => (dispatch) => (
    RequestAPI.createRequest(request)
    .then(payload => {
        dispatch(receiveRequest(payload))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)

export const updateRequest = (request) => (dispatch) => (
    RequestAPI.updateRequest(request)
    .then(payload => {
        dispatch(receiveRequest(payload))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)


