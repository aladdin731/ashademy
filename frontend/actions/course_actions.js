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

const removeCourse = course => ({
    type: REMOVE_COURSE,
    course  
})

const receiveCourse = (course) => ({
    type: RECEIVE_COURSE,
    course
})

export const fetchCourse = (courseId) => (dispatch) => (
    CourseAPI.fetchCourse(courseId)
    .then(course => {
        dispatch(receiveCourse(course))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)

export const createCourse = (course) => (dispatch) => (
    CourseAPI.createCourse(course)
    .then(course => {
        dispatch(receiveCourse(course))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)

export const updateCourse = (course) => (dispatch) => (
    CourseAPI.updateCourse(course)
    .then(course => {
        dispatch(receiveCourse(course))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)


export const deleteCourse = (courseId) => (dispatch) => (
    CourseAPI.deleteCourse(courseId)
    .then((course) => {
        dispatch(removeCourse(course))
    })
    .fail(err => {
        dispatch(receiveErrors(err.responseJSON))
    })
)