export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tagName;
  })
  return tagNames;
}


export const selectCoursesForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.courseIds && Object.keys(state.entities.courses).length !== 0 ) {
    return user.courseIds.map(courseId => {
      if(!state.entities.courses[courseId]){
        return [];
      }else {
        return state.entities.courses[courseId]
      }
    })
  }else {
    return [];
  }
};

export const selectRequestsForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.requestIds && Object.keys(state.entities.requests).length !== 0 && Object.keys(state.entities.courses).length !== 0 ) {
    return user.requestIds.map(requestId => {
        let request = state.entities.requests[requestId];
        if(!state.entities.courses[request.courseId]) {
          return [];
        }
        request.course = state.entities.courses[request.courseId].courseName;
        request.receiver = request.username;
        return request;
    })
  }else {
    return [];
  }
};

export const selectReceivedRequestsForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.receivedRequestsids && Object.keys(state.entities.requests).length !== 0 && Object.keys(state.entities.courses).length !== 0) {
    return user.receivedRequestsids.map(requestId => {
        let request = state.entities.requests[requestId];
        if(!state.entities.courses[request.courseId]) {
          return [];
        }
        request.course = state.entities.courses[request.courseId].courseName;
        request.sender = request.username;
        return request;
    }) 
  }else {
    return [];
  }
};

export const selectReviewsForCourse = (state) => {
  return Object.values(state.entities.reviews);
}

export const asArray = ({ courses }) => (

  Object.keys(courses).map(key => courses[key])
);

// export const selectReviewsForCourse = (state, courseId) => {
//   const course = state.entities.courses[courseId];
//   if(course && Object.keys(state.entities.reviews).length !== 0 ) {
//     return course.reviewIds.map(reviewId => state.entities.reviews[reviewId]) 
//   }else {
//     return [];
//   }
// }














