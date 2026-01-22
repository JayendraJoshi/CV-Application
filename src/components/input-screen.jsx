import '../styles/input-screen.css';
import {Section} from './input-screen-components/section'
import {SingleEntrySection} from './input-screen-components/single-entry-section'
import { getSectionsData } from './input-screen-components/sectionsConfig';

function Heading({text}){
    return(
        <h1 className="heading">{text}</h1>
    )
}

export function InputScreen({manageAllEntriesData}){
    return(
            <section className="input-screen">
                <div className="input-screen-wrapper">
                <header>
                    <Heading text = "CV Builder"/>
                    <h2 className="description">
                        Build a custom CV by adding your details in the forms below! Your CV will be dynamically displayed in the preview.
                    </h2>
                </header>
                <main>
                    {getSectionsData().map(sectionData=>{
                        if(sectionData.id==="personal"){
                            return <SingleEntrySection key={sectionData.id} sectionName={sectionData.sectionName} imgSource={sectionData.imgSource} inputfieldsContent={sectionData.inputfieldsContent} manageAllEntriesData={manageAllEntriesData} sectionID={sectionData.id}/>
                        }else{
                             return <Section key={sectionData.id} sectionName={sectionData.sectionName} imgSource={sectionData.imgSource} inputfieldsContent={sectionData.inputfieldsContent} manageAllEntriesData={manageAllEntriesData} sectionID={sectionData.id}/>
                        }
                    })}
                </main>
               </div>

            </section>
    )
}
