import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

//click event has to be set to setState of open value

export function SectionButton({text,imgSource,showSection, setShowSection}){
    return(
        <button className="section-button" onClick={()=>setShowSection(prev => !prev)}>
            <img src={imgSource} className="section-icon"></img>
            <h2>{text}</h2>
            {showSection ? <img src={arrowUpIcon} className="arrow-icon"></img> :  <img src={arrowDownIcon} className="arrow-icon"></img>}
        </button>
    )
}

