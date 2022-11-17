import React from 'react';


const CourseDetails = (props) => {
    const { course } = props.location.state;
    return (
        <div>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p>{course.instructor}</p>
        </div>
    );
    };
export default CourseDetails;