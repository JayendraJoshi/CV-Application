export function TechnicalSkillEntry({entryData}){
    return(
      <div className="technical-skills-entry">
                <p className="skill-name">{entryData?.skill ?? ""}</p>
                {entryData?.description && <p className="skill-description"> {entryData.description  `- ${entryData.description}`}</p>}
            </div>
    )
}