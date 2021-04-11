import React from 'react';
import CourseIndexItem from '../course/course_index_item';

const CourseIndex = ({ courses }) => (
  <div>
    <h1>Courses You are interested in: </h1>
    {courses.map(course => (
      <CourseIndexItem
        course={course}
        key={course.id}
      />
    ))}
  </div>
);

export default CourseIndex;
