import * as CourseAPI from '../util/course_api_util';


export const RECEIVE_ALL_COURSES = "RECEIVE_ALL_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const RECEIVE_COURSE_ERRORS = "RECEIVE_COURSE_ERRORS";
export const REMOVE_COURSE = "REMOVE_COURSE";

const receiveCourses = (courses) => ({
    type: RECEIVE_ALL_COURSES,
    courses
})

export const fetchCourses = (filters) => dispatch => 
    CourseAPI.fetchCourses(filters).then((courses) => 
    dispatch(receiveCourses(courses)))


export const receiveErrors = (errors) => ({
    type: RECEIVE_COURSE_ERRORS,
    errors
})

const removeCourse = payload => ({
    type: REMOVE_COURSE,
    payload  
})

const receiveCourse = (payload) => ({
    type: RECEIVE_COURSE,
    payload
})

export const fetchCourse = (courseId) => (dispatch) => (
    CourseAPI.fetchCourse(courseId)
    .then(payload => {
        dispatch(receiveCourse(payload))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)

export const createCourse = (course) => (dispatch) => (
    CourseAPI.createCourse(course)
    .then(payload => {
        dispatch(receiveCourse(payload))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)

export const updateCourse = (course) => (dispatch) => (
    CourseAPI.updateCourse(course)
    .then(payload => {
        dispatch(receiveCourse(payload))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)


export const deleteCourse = (courseId) => (dispatch) => (
    CourseAPI.deleteCourse(courseId)
    .then((payload) => {
        dispatch(removeCourse(payload))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)