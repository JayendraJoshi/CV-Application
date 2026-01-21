import { getSectionsData } from "../input-screen-components/sectionsConfig"
import { EducationEntry } from "./education-entry"
import { WorkExperienceEntry } from "./work-experience-entry"
import {   TechnicalSkillEntry} from "./technical-skill-entry"
import linkedInIcon from '../../assets/linkedin.svg';

function PersonalInfoSection({entryData}){
    console.log(entryData);
    return(
            <div className="page-header">
            {entryData.length>0 && <>
                        <h2 className="name">{entryData[0]?.full_name ?? ""}</h2>
                        <div className="personal-info">
                            <p className="address">{entryData[0]?.address ?? ""}</p>
                            <p className="phone-number">{entryData[0]?.["phone_number"] ?? ""}</p>
                            <p className="e-mail">{entryData[0]?.["e-mail"] ?? ""}</p>
                            {entryData[0]["linkedin_(optional)"] && <p className="linkedin"><a href={entryData[0]?.["linkedin_(optional)"]}><img src={linkedInIcon}></img></a></p>}
                        </div>
           </> }
            </div>
    )
}
function EducationSection({sectionData,entriesData}){
    return(
        <section className={toClassName(sectionData.sectionName)+"-preview"}>
            {entriesData.length>0 && <h2>{sectionData.sectionName}</h2>}
            {entriesData?.map(entryData=> <EducationEntry key={entryData.id} entryData={entryData}></EducationEntry>) ?? ""}            
        </section>
    )
}

function WorkExperienceSection({sectionData, entriesData}){
    return (
        <section className={toClassName(sectionData.sectionName)+"-preview"}>
              {entriesData.length>0 && <h2>{sectionData.sectionName}</h2>}   
                {entriesData?.map(entryData=> <WorkExperienceEntry key={entryData.id} entryData={entryData}></WorkExperienceEntry>) ?? ""}            
        </section>
    )
}
function TechnicalSkillsSection({sectionData, entriesData}){
    return (
        <section className={toClassName(sectionData.sectionName)+"-preview"}>
              {entriesData.length>0 && <h2>{sectionData.sectionName}</h2>}
            {entriesData?.map(entryData=> <TechnicalSkillEntry key={entryData.id} entryData={entryData}></TechnicalSkillEntry>) ?? ""}            
        </section>
    )
}

export function Page({allEntriesData}){
    const sectionsData = getSectionsData();
    return(
        <section className="page">
            <PersonalInfoSection sectionData={sectionsData[0]} entryData={allEntriesData[sectionsData[0].id]}></PersonalInfoSection>
            <EducationSection sectionData={sectionsData[1]} entriesData={allEntriesData[sectionsData[1].id]}></EducationSection>
            <WorkExperienceSection sectionData={sectionsData[2]} entriesData={allEntriesData[sectionsData[2].id]}></WorkExperienceSection>
            <TechnicalSkillsSection sectionData={sectionsData[3]} entriesData={allEntriesData[sectionsData[3].id]}></TechnicalSkillsSection>
        </section>
    )
}
function toClassName(name){
   return name.toLowerCase().replace(/\W+/g, "-");
}