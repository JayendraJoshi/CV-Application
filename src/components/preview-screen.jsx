import '../styles/preview-screen.css';
import {Page} from './preview-screen-components/page'

export function PreviewScreen({allEntriesData}){
    return (
    <section className="preview-screen">
        <Page allEntriesData={allEntriesData}/>
    </section>
    )
}