import {SectionButton} from "./section-button";
import {Form} from "./form";
import {AddButton} from './add-button';
import {Entry} from './entry';
import { useState } from "react";

export function Section({text, imgSource, inputfields}){
      const [showSection,setShowSection] = useState(false);
    return(
        <>
            <section className="input-section">
                <SectionButton text={text} imgSource={imgSource} showSection={showSection} setShowSection={setShowSection} />
               {showSection && 
               <>
               <Entry></Entry> 
               <Form inputfields={inputfields}></Form>
                <AddButton></AddButton>
                </>}
                
            </section>
        </>
    )
}