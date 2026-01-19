import { useState } from "react";
import { PermanentForm } from "./permanent-form";
import {SectionButton} from "./section-button";
export function SingleEntrySection({text, imgSource, inputfieldsContent}){
    const [showSection,setShowSection] = useState(false);
    const [entryValues,setEntryValues] = useState({});

    return(
        <section className="input-section">
             <SectionButton text={text} imgSource={imgSource} showSection={showSection} setShowSection={setShowSection} />
            {showSection && <PermanentForm inputfieldsContent={inputfieldsContent} setShowSection={setShowSection} entryValues={entryValues} setEntryValues={setEntryValues}></PermanentForm>}
        </section>
    )
}