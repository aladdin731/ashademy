

export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tagName;
  })
  return tagNames;
}



export const selectCoursesForCurrentUser = (state) => {
  return state.session.currentUser.courseIds.map(courseId => state.entities.courses[courseId]);
};



