export function Form({inputfieldsContent, setShowForm,entryList, manageEntryList, openEntry, setOpenEntry, manageAllEntriesData, sectionID}){
    return(
        openEntry[0] ? <FormWithEntryData inputfieldsContent={inputfieldsContent} setShowForm={setShowForm} entryList={entryList} manageEntryList={manageEntryList} openEntry={openEntry} setOpenEntry={setOpenEntry} manageAllEntriesData={manageAllEntriesData} sectionID={sectionID}></FormWithEntryData>
        : <EmptyForm inputfieldsContent={inputfieldsContent} setShowForm={setShowForm} manageEntryList={manageEntryList} manageAllEntriesData={manageAllEntriesData} sectionID={sectionID}></EmptyForm>
    )
}
function EmptyForm({inputfieldsContent,setShowForm,manageEntryList, manageAllEntriesData, sectionID}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const formData = new FormData(e.currentTarget); setShowForm(false); addNewEntry(formData, inputfieldsContent, manageEntryList, manageAllEntriesData, sectionID)}}>
                {inputfieldsContent.map(function(field){
                    return( toName(field).toLowerCase().includes("optional") ? <label key={field}>{field}<input name={toName(field)} type={getInputType(toName(field))}></input></label> :
                     <label key={field}>{field}<input name={toName(field)} required type={getInputType(toName(field))}></input></label>
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
function FormWithEntryData({inputfieldsContent,setShowForm, entryList, manageEntryList, openEntry, setOpenEntry, manageAllEntriesData, sectionID}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault(); const formData = new FormData(e.currentTarget);setShowForm(false);setOpenEntry(false); updateEntry(formData,inputfieldsContent,manageEntryList,getEntry(entryList,openEntry), manageAllEntriesData, sectionID)}}>
                {getInputsFromEntryData(inputfieldsContent,getEntry(entryList,openEntry))}
                <div className="form-button-container">
                    <button className="delete-button" type="button" onClick={()=>{deleteEntry(manageEntryList,getEntry(entryList,openEntry), manageAllEntriesData, sectionID);setShowForm(false);setOpenEntry(false)}}>Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>{setShowForm(false);setOpenEntry(false)}}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
// Helper functions 
function addNewEntry(formData,inputfieldsContent, manageEntryList,manageAllEntriesData, sectionID){
    let entryData = {};
    for(let i = 0;i<inputfieldsContent.length;i++){
        const key = toName(inputfieldsContent[i]);
        entryData[key] = formData.get(key);
    }
    entryData["id"] = crypto.randomUUID();
    manageEntryList(prev=>[...prev ,entryData]);
    manageAllEntriesData(prev=> {
        const next = {...prev};
        next[sectionID] = [...next[sectionID], entryData];
        return next;
    });
}
export function toName(field){
     return field.toLowerCase().replace(/\s+/g, "_");
}
function getEntry(entryList,openEntry){
  return entryList.find(entry=>entry.id == openEntry[1])
}
export function getInputsFromEntryData(inputfieldsContent,entryData){
    return inputfieldsContent.map(function(field){
        return( toName(field).toLowerCase().includes("optional") ? <label key={field}>{field}<input name={toName(field)} defaultValue={entryData[toName(field)]} type={getInputType(toName(field))}></input></label>
        :    <label key={field}>{field}<input name={toName(field)} defaultValue={entryData[toName(field)]} required type={getInputType(toName(field))}></input></label>
    )
    })
}
function deleteEntry(manageEntryList,entryToDelete, manageAllEntriesData, sectionID){
    manageEntryList(prev=>prev.filter(entry => entry.id!==entryToDelete.id));
    manageAllEntriesData(prev=> {
        const next = {...prev};
      next[sectionID] = next[sectionID].filter(entry=> entry.id!==entryToDelete.id) 
        return next;
    });
}
function updateEntry(formData,inputfieldsContent,manageEntryList,entryToUpdate, manageAllEntriesData, sectionID){
    let updatedEntry = {};
    for(let i=0; i<inputfieldsContent.length;i++){
        updatedEntry[toName(inputfieldsContent[i])] = formData.get(toName(inputfieldsContent[i]));
    }

    updatedEntry.id=entryToUpdate.id;
    manageEntryList(prev=>prev.map(function(entry){
        if(entry.id === updatedEntry.id) return updatedEntry;
        else return entry;
    }))
    manageAllEntriesData(prev=> {
        const next = {...prev};
      next[sectionID] = next[sectionID].map(entry=>{
            if(entry.id===entryToUpdate.id){
                return updatedEntry;
            }else{
                return entry;
            }
        }) 
        return next;
    });
}
export function getInputType(inputName){
    let inputNameLowerCase = inputName.toLowerCase();

    if(inputNameLowerCase.includes("phone")){
        return "tel"
    }else if(inputNameLowerCase.includes("mail")){
        return "email";
    }else if(inputNameLowerCase.includes("date")){
        return "date";
    }else{
        return "text";
    }
}