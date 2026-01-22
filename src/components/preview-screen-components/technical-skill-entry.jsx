export function TechnicalSkillEntry({entryData}){
    return(
      <div className="technical-skills-entry">
                <p className="skill-name">{entryData?.skill ?? ""}</p>
                {entryData?.["description_(optional)"] && (
        <p className="skill-description">- {entryData["description_(optional)"]}</p>
      )}
            </div>
    )
}