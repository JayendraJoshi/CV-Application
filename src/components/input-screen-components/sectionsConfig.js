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
      inputfieldsContent:["Company","Role","Start Date","End Date","Accomplishments/Learnings"],
    }
    const technicalskills = {
        id:"technical",
        sectionName:"Technical Skills",
        imgSource:skillsIcon,
        inputfieldsContent:["Skill","Description"]
    }

    sectionsData.push(personalDetails);
    sectionsData.push(educationDetails);
    sectionsData.push(workDetails);
    sectionsData.push(technicalskills);
    
    return sectionsData;
}