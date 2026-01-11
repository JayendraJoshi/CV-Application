import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';


export function SectionButton({text,imgSource}){
    return(
        <button className="section-button">
            <img src={imgSource} className="section-icon"></img>
            <h2>{text}</h2>
            <img src={arrowDownIcon} className="arrow-icon"></img>
        </button>
    )
}