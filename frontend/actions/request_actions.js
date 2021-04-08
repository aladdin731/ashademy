import * as RequestAPI from '../util/request_ai_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";

const receiveRequests = (requests) => ({
    type: RECEIVE_REQUESTS,
    requests
})

const receiveRequest = (payload) => ({
    type: RECEIVE_REQUEST,
    payload
})



export const receiveErrors = (errors) => ({
    type: RECEIVE_REQUEST_ERRORS,
    errors
})

export const fetchRequests = () => dispatch => 
    RequestAPI.fetchRequests().then((requests) => 
    dispatch(receiveRequests(requests)))


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


