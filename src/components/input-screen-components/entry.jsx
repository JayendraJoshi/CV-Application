export function Entry({entryDetails,setOpenEntry, setShowForm}){
    return(
        <button id={entryDetails.id} onClick={()=>{setOpenEntry([true,entryDetails.id]);setShowForm(true)}}>{Object.values(entryDetails)[0]}</button>
    )
}
