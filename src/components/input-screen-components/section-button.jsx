export function SectionButton({text,imgSource}){
    return(
        <button className="section-button">
            <img src={imgSource}></img>
            <h2>{text}</h2>
            <p>^</p>
        </button>
    )
}