export const fetchCourses = () => (
    $.ajax({
        method:"GET",
        url: "/api/courses"
    })
)

export const fetchCourse = (courseId) => (
    $.ajax({
        method:"GET",
        url: `/api/courses/${courseId}`,
    })
)

export const createCourse = (course) => (
    $.ajax({
        method:"POST",
        url: "/api/courses",
        data:{course}
    })
)

export const updateCourse = (course) => (
    $.ajax({
        method:"PATCH",
        url: `/api/courses/${course.id}`,
        data:{course}
    })
)

export const deleteCourse = (courseId) => (
    $.ajax({
        method:"DELETE",
        url: `/api/courses/${courseId}`,
    })
)

