import {SectionButton} from "./section-button";
import {Form} from "./form";
import {AddButton} from './add-button';
import {Entry} from './entry';
import { useState } from "react";

export function Section({text, imgSource, inputfields}){
      const [showSection,setShowSection] = useState(false);
      const [showForm,setShowForm] = useState(false);
      const [entryList,manageEntryList] = useState([]);
      const [openEntry,setOpenEntry] = useState(["false",0]);
    return(
        <>
            <section className="input-section">
                <SectionButton text={text} imgSource={imgSource} showSection={showSection} setShowSection={setShowSection} />
               { showSection && 
               <><Entry></Entry> 
                {showForm ? <Form inputfields={inputfields} setShowForm={setShowForm} manageEntryList={manageEntryList}></Form>:<AddButton setShowForm={setShowForm}></AddButton>}   
               </>}
            </section>
        </>
    )
}
//check whether openentry is true or false, if true than identify target entrydetails with id and pass to form
//and hide add button
//if false than show entries in minimized form by mapping through entrylist and show add button