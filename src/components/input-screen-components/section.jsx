import {SectionButton} from "./section-button"

export function Section({text, imgSource}){
    return(
        <>
            <section class="input-section">
                <SectionButton text={text} imgSource={imgSource} />
            </section>
        </>
    )
}