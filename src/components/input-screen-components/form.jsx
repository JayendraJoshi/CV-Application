export function Form({inputfieldsContent, setShowForm,entryList, manageEntryList, openEntry, setOpenEntry}){
    return(
        openEntry[0] ? <FormWithEntryData inputfieldsContent={inputfieldsContent} setShowForm={setShowForm} entryList={entryList} manageEntryList={manageEntryList} openEntry={openEntry} setOpenEntry={setOpenEntry}></FormWithEntryData>
        : <EmptyForm inputfieldsContent={inputfieldsContent} setShowForm={setShowForm} manageEntryList={manageEntryList}></EmptyForm>
    )
}
function EmptyForm({inputfieldsContent,setShowForm,manageEntryList}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const formData = new FormData(e.currentTarget); setShowForm(false); addNewEntry(formData, inputfieldsContent, manageEntryList)}}>
                {inputfieldsContent.map(function(field){
                    return( 
                        <label key={field}>{field}<input name={toName(field)}></input></label>
                    )
                })}
                <div className="form-button-container">
                    <button className="delete-button" type="button" onClick={(e)=>{e.currentTarget.form?.reset()}}>Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>setShowForm(false)}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
function FormWithEntryData({inputfieldsContent,setShowForm, entryList, manageEntryList, openEntry, setOpenEntry}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget);setShowForm(false);setOpenEntry(false); updateEntry(formData,inputfieldsContent,manageEntryList,getEntry(entryList,openEntry))}}>
                {getInputsFromEntryData(inputfieldsContent,getEntry(entryList,openEntry))}
                <div className="form-button-container">
                    <button className="delete-button" type="button" onClick={()=>{deleteEntry(manageEntryList,getEntry(entryList,openEntry));setShowForm(false);setOpenEntry(false)}}>Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>{setShowForm(false);setOpenEntry(false)}}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
// Helper functions 
function addNewEntry(formData,inputfieldsContent, manageEntryList){
    let entryData = {};
    for(let i = 0;i<inputfieldsContent.length;i++){
        const key = toName(inputfieldsContent[i]);
        entryData[key] = formData.get(key);
    }
    entryData["id"] = crypto.randomUUID();
    manageEntryList(prev=>[...prev ,entryData]);
}
export function toName(field){
     return field.toLowerCase().replace(/\s+/g, "_");
}
function getEntry(entryList,openEntry){
  return entryList.find(entry=>entry.id == openEntry[1])
}
export function getInputsFromEntryData(inputfieldsContent,entryData){
    return inputfieldsContent.map(function(field){
        return( 
            <label key={field}>{field}<input name={toName(field)} defaultValue={entryData[toName(field)]}></input></label>
        )
    })
}
function deleteEntry(manageEntryList,entryToDelete){
    manageEntryList(prev=>prev.filter(entry => entry.id!=entryToDelete.id));
}
function updateEntry(formData,inputfieldsContent,manageEntryList,entryToUpdate){
    let updatedEntry = {};
    for(let i=0; i<inputfieldsContent.length;i++){
        updatedEntry[toName(inputfieldsContent[i])] = formData.get(toName(inputfieldsContent[i]));
    }

    updatedEntry.id=entryToUpdate.id;
    manageEntryList(prev=>prev.map(function(entry){
        if(entry.id === updatedEntry.id) return updatedEntry;
        else return entry;
    }))
}
