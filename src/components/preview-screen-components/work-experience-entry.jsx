export function WorkExperienceEntry({entryData}){
    console.log(entryData);
    return(
        <div className="work-experience-entry">
                <div className="work-experience-details">
                <p className="company-name">{entryData?.company ?? ""}</p>
                <p className="role">{entryData?.role ?? ""}</p>
                <p className="job-task"><span>-</span>{entryData?.["accomplishments/learnings"] ?? ""}</p>
                </div>
                <div className="location-and-time-details">
                    <p className="address">{entryData?.address ?? ""}</p>
                    <p classname="job-date">{entryData?.["start_date"] +` - ${entryData?.["end_date"]}` ?? ""}</p>
                </div>
            </div>
    )
}