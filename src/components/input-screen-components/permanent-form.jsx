import { toName, getInputsFromEntryData, getInputType } from './form';
export function PermanentForm({inputfieldsContent,setShowSection,entryValues, setEntryValues, manageAllEntriesData, sectionID}){
    return(  Object.keys(entryValues).length!=0 
            ? <FormWithEntryData inputfieldsContent={inputfieldsContent} setShowSection={setShowSection} entryValues={entryValues} setEntryValues={setEntryValues} manageAllEntriesData={manageAllEntriesData} sectionID={sectionID}></FormWithEntryData>
            :<EmptyForm inputfieldsContent={inputfieldsContent} setShowSection={setShowSection} setEntryValues={setEntryValues} manageAllEntriesData={manageAllEntriesData} sectionID={sectionID}></EmptyForm>
)
}
function FormWithEntryData({inputfieldsContent,setShowSection,entryValues, setEntryValues, manageAllEntriesData, sectionID}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const formData = new FormData(e.currentTarget); updateEntry(formData, inputfieldsContent, setEntryValues, manageAllEntriesData, sectionID)}}>
                {getInputsFromEntryData(inputfieldsContent,entryValues)}
                <div className="form-button-container">
                     <button className="delete-button" type="button" onClick={(e)=>{e.currentTarget.form?.reset(); setEntryValues({}); deleteEntry(manageAllEntriesData,sectionID)}}>Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>{setShowSection(false)}}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
function EmptyForm({inputfieldsContent,setShowSection,setEntryValues, manageAllEntriesData, sectionID}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const formData = new FormData(e.currentTarget); saveEntry(formData, inputfieldsContent, setEntryValues, manageAllEntriesData, sectionID)}}>
                {inputfieldsContent.map(function(field){
                    return( toName(field).toLowerCase().includes("optional") ? 
                        <label key={field}>{field}<input name={toName(field)} type={getInputType(toName(field))}></input></label>
                        : <label key={field}>{field}<input name={toName(field)} required type={getInputType(toName(field))}></input></label>
                    )
                })}
                <div className="form-button-container">
                    <button className="delete-button" type="button" onClick={(e)=>{e.currentTarget.form?.reset()}}>Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>{setShowSection(false)}}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
function saveEntry(formData,inputfieldsContent, setEntryValues, manageAllEntriesData, sectionID){
    let entryData = {};
    for(let i = 0;i<inputfieldsContent.length;i++){
        const key = toName(inputfieldsContent[i]);
        entryData[key] = formData.get(key);
    }
    setEntryValues(entryData);
    manageAllEntriesData(prev=>{
        const next = {...prev};
        next[sectionID] = [entryData];
        return next;
    })
}

function updateEntry(formData, inputfieldsContent, setEntryValues, manageAllEntriesData, sectionID){
     let updatedEntry = {};
    for(let i=0; i<inputfieldsContent.length;i++){
        updatedEntry[toName(inputfieldsContent[i])] = formData.get(toName(inputfieldsContent[i]));
    }
    setEntryValues(updatedEntry);
     manageAllEntriesData(prev=>{
        const next = {...prev};
        next[sectionID] = [updatedEntry];
        return next;
    })
}
function deleteEntry(manageAllEntriesData, sectionID){
    manageAllEntriesData(prev=> {
        const next = {...prev};
        next[sectionID] = []; 
        return next;
    });
}

