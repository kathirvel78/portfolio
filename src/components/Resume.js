import React from 'react';

const Resume = () => {
    const workExperience = [
        { company: 'COGNIZANT TECHNOLOGY SOLUTIONS', role: 'Frontend Developer', period: 'Jul 2022 - May 2024' },
        { company: 'COGNIZANT TECHNOLOGY SOLUTIONS', role: 'Programmer Analyst Trainee', period: 'Feb 2022 - June 2022' },
    ];

    const education = [
        { institution: 'Kamaraj College of Engineering and Technology', degree: 'B.E in Electrical and Electronics Engineering', period: '2018 - 2021' },
        { institution: 'Vellaisamy Nadar Polytechnic College', degree: 'Diploma in Electrical and Electronics Engineering', period: '2015 - 2018' }
    ];

    const skills = ['JavaScript', 'ReactJS', 'CSS', 'HTML'];

    return (
        <section id="resume" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Resume</h2>

            <h3>Work Experience</h3>
            <ul>
                {workExperience.map((item, index) => (
                    <li key={index}>
                        <strong>{item.role}</strong> at {item.company} ({item.period})
                    </li>
                ))}
            </ul>

            <h3>Education</h3>
            <ul>
                {education.map((item, index) => (
                    <li key={index}>
                        {item.degree}, {item.institution} ({item.period})
                    </li>
                ))}
            </ul>

            <h3>Skills</h3>
            <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
                {skills.map((skill, index) => (
                    <li key={index} style={{ margin: '0 1rem' }}>{skill}</li>
                ))}
            </ul>

            <div style={{ marginTop: '2rem' }}>
                <a href="/resume.pdf" download="resume.pdf" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Resume;
