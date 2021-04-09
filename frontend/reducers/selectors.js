export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tagName;
  })
  return tagNames;
}

// export const selectCoursesForCurrentUser = (state, currentUser) => {
//   // when we refresh the index page and then go to dashboard, then the users section is empty
//   // the course section is always not empty
//   // Boolean([]) === true 
//   // Boolean(undefined) === false 
//   const user = state.entities.users[currentUser.id];
//   return user ? user.courseIds.map(courseId => 
//     state.entities.courses[courseId]) : [];
// };

export const selectCoursesForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.courseIds && Object.keys(state.entities.courses).length !== 0 ) {
    return user.courseIds.map(courseId => state.entities.courses[courseId])
  }else {
    return [];
  }
};

export const selectRequestsForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.requestIds && Object.keys(state.entities.requests).length !== 0 ) {
    return user.requestIds.map(requestId => state.entities.requests[requestId])
  }else {
    return [];
  }
};

export const selectReceivedRequestsForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  if(user && user.receivedRequestsids && Object.keys(state.entities.requests).length !== 0 ) {
    return user.receivedRequestsids.map(requestId => state.entities.requests[requestId])
  }else {
    return [];
  }
};













