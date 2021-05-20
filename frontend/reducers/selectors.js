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
  if(user && user.requestIds && Object.keys(state.entities.requests).length !== 0 ) {
    return user.requestIds.map(requestId => {
      if(!state.entities.requests[requestId]){
        return [];
      }else {
        return state.entities.requests[requestId]
      }
    })
  }else {
    return [];
  }
};


export const selectReceivedRequestsForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.receivedRequestsids && Object.keys(state.entities.requests).length !== 0 ) {
    return user.receivedRequestsids.map(requestId => {
      if(!state.entities.requests[requestId]){
        return [];
      }else {
        return state.entities.requests[requestId]
      }
    })
  }else {
    return [];
  }
};



export const selectReviewsForCourse = (state, courseId) => {
  let course = state.entities.courses[courseId];
  if(course && course.reviewIds && Object.keys(state.entities.reviews).length !== 0) {
    return course.reviewIds.map(id => {
      if(!state.entities.reviews[id]) {
          return [];
      }
      return state.entities.reviews[id];
    })
  }else {
    return [];
  }
}













