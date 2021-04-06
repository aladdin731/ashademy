export const fetchCourses = () => (
    $.ajax({
        method:"GET",
        url: "/api/courses"
    })
)

export const fetchCourse = (postId) => (
    $.ajax({
        method:"GET",
        url: `/api/courses/${postId}`,
    })
)

export const createCourse = (post) => (
    $.ajax({
        method:"POST",
        url: "/api/courses",
        data:{post}
    })
)

export const updateCourse = (post) => (
    $.ajax({
        method:"PATCH",
        url: `/api/courses/${post.id}`,
        data:{post}
    })
)

export const deleteCourse = (postId) => (
    $.ajax({
        method:"DELETE",
        url: `/api/courses/${postId}`,
    })
)

