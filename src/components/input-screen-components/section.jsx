import {SectionButton} from "./section-button";
import {Form} from "./form";
import {AddButton} from './add-button';

export function Section({text, imgSource, inputfields}){
    return(
        <>
            <section className="input-section">
                <SectionButton text={text} imgSource={imgSource} />
                <Form inputfields={inputfields}></Form>
                <AddButton></AddButton>
            </section>
        </>
    )
}