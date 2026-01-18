import {SectionButton} from "./section-button";
import {Form} from "./form";
import {AddButton} from './add-button';
import {Entry} from './entry';

export function Section({text, imgSource, inputfields}){
    return(
        <>
            <section className="input-section">
                <SectionButton text={text} imgSource={imgSource} />
                <Entry></Entry>
                <Form inputfields={inputfields}></Form>
                <AddButton></AddButton>
            </section>
        </>
    )
}