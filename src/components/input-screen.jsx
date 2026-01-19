import '../styles/input-screen.css';
import {Section} from './input-screen-components/section'
import personIcon from "../assets/person.svg";
import educationIcon from '../assets/education.svg';
import workIcon from "../assets/work.svg";
import skillsIcon from "../assets/skills.svg";

function Heading({text}){
    return(
        <h1 className="heading">{text}</h1>
    )
}

export function InputScreen(){
    return(
            <section className="input-screen">
                <div className="input-screen-wrapper">
                <header>
                    <Heading text = "CV Builder"/>
                    <h2 className="description">
                        Build a custom CV by adding your details in the forms below! Your CV will be dynamically displayed in the preview.
                    </h2>
                </header>
                <main>
                    <Section text="Personal Details" imgSource={personIcon} inputfieldsContent={["Full Name","Phone Number","E-mail","Address","Linkedin (Optional)"]} />
                    <Section text="Education" imgSource={educationIcon} inputfieldsContent={["School","Degree","Start Date","End Date","Address"]} />
                    <Section text="Work Experience" imgSource={workIcon} inputfieldsContent={["Company","Role","Start Date","End Date","Accomplishments/Learnings"]} />
                    <Section text="Technical Skills" imgSource={skillsIcon} inputfieldsContent={["Skill","Description"]} />
                </main>
               </div>

            </section>
    )
}