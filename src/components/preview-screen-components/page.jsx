function PageHeader(){
    return(
        <div className="page-header">
            <h2 className="name">John Smith</h2>
            <div className="personal-info">
                <p className="address">Los Angeles</p>
                <p className="linkedin">Linkedin</p>
                <p className="phone-number">444-222-4532</p>
                <p className="e-mail">johnsmith@gmail.com</p>
            </div>
        </div>
    )
}
function EducationSection(){
    return(
        <section className="education-preview">
            <h2>Education</h2>
            <div className="education-entry">
                <div className="institution-details">
                    <p>University of California, Riverside</p>
                    <p>BSc in Computer Science (GPA 3.5)</p>
                </div>
                <div className="location-and-time-details">
                    <p>Riverside, CA</p>
                    <p>Graduation date: June 2029</p>
                </div>
            </div>
        </section>
    )
}

function WorkExperienceSection(){
    return (
        <section className="work-experience-preview">
            <h2>Work Experience</h2>
            <div className="work-experience-entry">
                <div className="work-experience-details">
                <p>Apple Inc.</p>
                <p>UX Designer</p>
                <p className="job-task"><span>-</span>Centered buttons in figma</p>
                </div>
                <div className="location-and-time-details">
                    <p>Silicon Valley, CA</p>
                    <p>June 2020 - August 2029</p>
                </div>
            </div>
        </section>
    )
}
function TechnicalSkillsSection(){
    return (
        <section className="technical-skills-preview">
            <h2>Technical Skills</h2>
            <div className="technical-skills-entry">
                <p>Figma</p>
                <p className="technical-skill"><span>-</span>Can center buttons</p>
                <p className="technical-skill"><span>-</span>Can center buttons</p>
                <p className="technical-skill"><span>-</span>Can center buttons</p>
            </div>
        </section>
    )
}

export function Page(){
    return(
        <section className="page">
            <PageHeader></PageHeader>
            <EducationSection></EducationSection>
            <WorkExperienceSection></WorkExperienceSection>
            <TechnicalSkillsSection></TechnicalSkillsSection>
        </section>
    )
}