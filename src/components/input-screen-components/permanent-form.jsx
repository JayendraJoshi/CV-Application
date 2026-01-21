import { toKey, getInputsFromEntryData, getInputType, getPattern, getPlaceholderText } from './form';
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
                {inputfieldsContent.map(function(fieldName){
                    return( toKey(fieldName).toLowerCase().includes("optional") ? 
                        <label key={fieldName}>{fieldName}<input name={toKey(fieldName)} type={getInputType(toKey(fieldName))} pattern={getPattern(toKey(fieldName))} placeholder={getPlaceholderText(fieldName)}></input></label>
                        : <label key={fieldName}>{fieldName}<input name={toKey(fieldName)} required type={getInputType(toKey(fieldName))} pattern={getPattern(toKey(fieldName))} placeholder={getPlaceholderText(fieldName)}></input></label>
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
        const key = toKey(inputfieldsContent[i]);
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
        updatedEntry[toKey(inputfieldsContent[i])] = formData.get(toKey(inputfieldsContent[i]));
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

