import editIcon from "../../assets/edit.svg";

export function Entry({entryDetails,setOpenEntry, setShowForm}){
    return(
        <button className="entry" id={entryDetails.id} onClick={()=>{setOpenEntry([true,entryDetails.id]);setShowForm(true)}}>
            <h3>{Object.values(entryDetails)[0]}</h3>
            <img src={editIcon} className="edit-icon"></img>
            </button>
    )
}
