

export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tagName;
  })
  return tagNames;
}



export const selectCoursesForCurrentUser = (state, currentUser) => {
  const user = state.entities.users[currentUser.id];
  return user ? user.courseIds.map(courseId => 
    state.entities.courses[courseId]) : [];
};



