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
                <div class="input-screen-wrapper">
                <Heading text = "CV Builder"/>
                <h2 className="description">
                    Build a custom CV by adding your details in the forms below! Your CV will be dynamically displayed in the preview.
                </h2>
                <Section text="Personal Details" imgSource={personIcon}/>
                <Section text="Education" imgSource={educationIcon}/>
                <Section text="Work Experience" imgSource={workIcon}/>
                <Section text="Technical Skills" imgSource={skillsIcon}/>
                
               </div>

            </section>
    )
}