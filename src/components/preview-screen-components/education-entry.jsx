export function EducationEntry({entryData}){

    return(
         <div className="education-entry">
                <div className="institution-details">
                    <p className="institution-name">{entryData?.school ?? ""}</p>
                    <p className="degree">{entryData?.degree ?? ""}</p>
                </div>
                <div className="location-and-time-details">
                    <p className="institution-location">{entryData?.address ?? ""}</p>
                    <p className="graduation-date">{entryData?.["start_date"] +` - ${entryData?.["end_date"]}` ?? ""}</p>
                </div>
            </div>
    )
}