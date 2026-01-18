export function Form({inputfields, setShowForm, manageEntryList}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const fd = new FormData(e.currentTarget); setShowForm(false); addNewEntry(fd, inputfields, manageEntryList)}}>
                {inputfields.map(function(field){
                    return( 
                        <label key={field}>{field}<input name={toName(field)}></input></label>
                    )
                })}
                <div className="form-button-container">
                    <button className="delete-button" type="button">Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>setShowForm(false)}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
function addNewEntry(fd,inputfields, manageEntryList){
    let entryData = {};
    for(let i = 0;i<inputfields.length;i++){
        console.log(fd.get(toName(inputfields[i])));
        const key = toName(inputfields[i]);
        entryData[key] = fd.get(key);
    }
    entryData["id"] = crypto.randomUUID();
    manageEntryList(prev=>[...prev ,entryData]);
}
function toName(field){
     return field.toLowerCase().replace(/\s+/g, "_");
}
function EmptyForm(){

}
function FormWithEntryData(){

}

//create empty form and form with entrydata seperateley, determine which to execute by checking openEntry state
//if true create form with data by getting data of entrydetails by comparing the id's
//on cancel, set openentry to false, openform to false
//on save, update values inside entrydetails with new form submission, set openform to false, set openentry to false
//on delete, delete entrydetails entry, set openform to false, set openEntry to false