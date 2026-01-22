import personIcon from "../../assets/person.svg";
import educationIcon from '../../assets/education.svg';
import workIcon from "../../assets/work.svg";
import skillsIcon from "../../assets/skills.svg";

export  function getSectionsData(){

    const sectionsData = [];
    const personalDetails={
        id:"personal",
      sectionName:"Personal Details",
      imgSource: personIcon,
      inputfieldsContent:["Full Name","Phone Number","E-mail","Address","Linkedin (Optional)"] 
    }
    const educationDetails = {
        id:"education",
      sectionName:"Education",
      imgSource:educationIcon,
      inputfieldsContent:["School","Degree","Start Date","End Date","Address"]
    }
    const workDetails = {
        id:"work",
      sectionName:"Work Experience",
      imgSource:workIcon,
      inputfieldsContent:["Company","Role","Start Date","End Date","Accomplishments/Learnings","Address"],
    }
    const technicalskills = {
        id:"technical",
        sectionName:"Technical Skills",
        imgSource:skillsIcon,
        inputfieldsContent:["Skill","Description (Optional)"]
    }

    sectionsData.push(personalDetails);
    sectionsData.push(educationDetails);
    sectionsData.push(workDetails);
    sectionsData.push(technicalskills);
    
    return sectionsData;
}

export function getInputsPlaceholderText() {
  return {
    "Full Name": "e.g. John Smith",
    "Phone Number": "e.g. +1 555 123 4567",
    "E-mail": "e.g. john.smith@email.com",
    "Address": "e.g. Los Angeles, CA",
    "Linkedin (Optional)": "e.g. https://linkedin.com/in/johnsmith",

    "School": "e.g. University of California, Riverside",
    "Degree": "e.g. BSc in Computer Science",
    "Start Date": "e.g. 2022-09-01",
    "End Date": "e.g. 2026-06-01",

    "Company": "e.g. Apple",
    "Role": "e.g. UX Designer",
    "Accomplishments/Learnings": "e.g. Improved checkout conversion by 12%",

    "Skill": "e.g. React",
    "Description (Optional)": "e.g. Built reusable components and hooks",
  };
}