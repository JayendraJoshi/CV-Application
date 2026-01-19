import {SectionButton} from "./section-button";
import {Form} from "./form";
import {AddButton} from './add-button';
import {Entry} from './entry';
import { useState } from "react";

export function Section({text, imgSource, inputfieldsContent}){
      const [showSection,setShowSection] = useState(false);
      const [showForm,setShowForm] = useState(false);
      const [entryList,manageEntryList] = useState([]);
      const [openEntry,setOpenEntry] = useState([false,0]);
    return(
        <>
            <section className="input-section">
                <SectionButton text={text} imgSource={imgSource} showSection={showSection} setShowSection={setShowSection} />
               { showSection &&
               <>
                {showForm ? <Form inputfieldsContent={inputfieldsContent} setShowForm={setShowForm} entryList={entryList} manageEntryList={manageEntryList} openEntry={openEntry} setOpenEntry={setOpenEntry}></Form>
                :<>
                { entryList.length !=0 &&  entryList.map((entry)=><Entry key={entry.id} entryDetails={entry} setOpenEntry={setOpenEntry} setShowForm={setShowForm}></Entry>)}
                <AddButton setShowForm={setShowForm}></AddButton>
                </>}   
               </>}
            </section>
        </>
    )
}
