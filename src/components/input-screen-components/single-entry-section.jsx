import { useState } from "react";
import { PermanentForm } from "./permanent-form";
import {SectionButton} from "./section-button";
export function SingleEntrySection({sectionName, imgSource, inputfieldsContent, manageAllEntriesData}){
    const [showSection,setShowSection] = useState(false);
    const [entryValues,setEntryValues] = useState({});

    return(
        <section className="input-section">
             <SectionButton sectionName={sectionName} imgSource={imgSource} showSection={showSection} setShowSection={setShowSection} />
            {showSection && <PermanentForm inputfieldsContent={inputfieldsContent} setShowSection={setShowSection} entryValues={entryValues} setEntryValues={setEntryValues} manageAllEntriesData={manageAllEntriesData}></PermanentForm>}
        </section>
    )
}