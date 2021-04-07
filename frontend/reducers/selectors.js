

export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tagName;
  })
  return tagNames;
}

export const selectCourseInstructor = (state) => {
  const instructor = Object.values(state.entities.users).map(user=> {
    return user.username;
  })
  return instructor;
}



