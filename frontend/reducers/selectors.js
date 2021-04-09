export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tagName;
  })
  return tagNames;
}


export const selectCoursesForCurrentUser = (state, currentUser) => {
  // when we refresh the index page and then go to dashboard, then the users section is empty
  // the course section is always not empty
  const user = state.entities.users[currentUser.id];
  return user ? user.courseIds.map(courseId => 
    state.entities.courses[courseId]) : [];
};


export const selectRequestsForCurrentUser = (state, currentUser) => {
  return Object.keys(state.entities.requests).length === 0 ? 
  undefined : currentUser.requestIds.map(requestId => state.entities.requests[requestId])
};

export const selectReceivedRequestsForCurrentUser = (state, currentUser) => {
  return Object.keys(state.entities.requests).length === 0 ? 
  undefined : currentUser.receivedRequestsids.map(requestId => state.entities.requests[requestId])
};


// can not user this way, in this way, can not show the course once we add it ???

// export const selectCoursesForCurrentUser = (state, currentUser) => {
//   return Object.keys(state.entities.users).length === 0 ? 
//   undefined : currentUser.courseIds.map(requestId => state.entities.courses[requestId])
// };

// can not do this because???

// export const selectRequestsForCurrentUser = (state, currentUser) => {
//   const user = state.entities.users[currentUser.id];
//   return user ? user.requestIds.map(requestId => 
//     state.entities.requests[requestId]) : [];
// };

// export const selectReceivedRequestsForCurrentUser = (state, currentUser) => {
//   const user = state.entities.users[currentUser.id];
//   return user ? user.receivedRequestsids.map(requestId => 
//     state.entities.requests[requestId]) : [];
// };


// can not use this way because whether we refresh the index page and then go to dashboard
// the courses section is always not empty

// export const selectCoursesForCurrentUser = (state, currentUser) => {
//   return Object.keys(state.entities.courses).length === 0 ? 
//   undefined : currentUser.courseIds.map(courseId => state.entities.courses[courseId])
// };




// this way is not corrent because even state is empty, the courses is {}, it is still true 
// so it will not cause an error but it show [], which is nothing, so can not show the courses

// export const selectCoursesForCurrentUser = (state, currentUser) => {
//   return state.entities.courses ? []: currentUser.courseIds.map(courseId => 
//     state.entities.courses[courseId]);
// };



// this way is not correct because the currentUser is always there 
// because we use bootstrap as long as we logged in 
// so it is wrong because when courses are empty we can not do courseId for {}!

// export const selectCoursesForCurrentUser = (state, currentUser) => {
//   return currentUser ? currentUser.courseIds.map(courseId => 
//     state.entities.courses[courseId]) : [];
// };



// export const selectReceivedRequestsForCurrentUser = (state, currentUser) => {
//   const user = state.entities.users[currentUser.id];
//   return user ? user.receivedRequestsids.map(requestId => 
//     state.entities.requests[requestId]) : [];
// };







