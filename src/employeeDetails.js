import React, { useState } from "react";

export default function EmployeeDetails() {
    const [name] = useState('Meha Bhandari');
    const [designation] = useState('Developer');
    const [experience, setExperience] = useState(5);

    function UpdateEmployeeExperience() {
        setExperience(experience+1);
    }

    return (
        <div>
            <p>Name of employee is: {name}</p>
            <p>Designation is: {designation}</p>
            <p>Experience of employee is: {experience}</p>
            <button onClick={UpdateEmployeeExperience}>Click to update Experience</button>
            
        </div>
    )
}