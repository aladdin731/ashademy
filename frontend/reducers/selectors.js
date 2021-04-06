
export const selectCourseTagsNames = (state) => {
  const tagNames = Object.values(state.entities.tags).map(tag=> {
    return tag.tag_name;
  })
  return tagNames;
}