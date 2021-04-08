

export const createRequest = request => (
    $.ajax({
        method:"POST",
        url: "/api/requests",
        data:{request}
    })
)

export const updateRequest = request => (
    $.ajax({
        method:"PATCH",
        url: `/api/requests/${request.id}`,
        data:{request}
    })
)

