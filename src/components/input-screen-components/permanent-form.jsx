import { toName, getInputsFromEntryData } from './form';
export function PermanentForm({inputfieldsContent,setShowSection,entryValues, setEntryValues, manageAllEntriesData}){
    return(  Object.keys(entryValues).length!=0 
            ? <FormWithEntryData inputfieldsContent={inputfieldsContent} setShowSection={setShowSection} entryValues={entryValues} setEntryValues={setEntryValues}></FormWithEntryData>
            :<EmptyForm inputfieldsContent={inputfieldsContent} setShowSection={setShowSection} setEntryValues={setEntryValues}></EmptyForm>
)
}
function FormWithEntryData({inputfieldsContent,setShowSection,entryValues, setEntryValues}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const formData = new FormData(e.currentTarget); updateEntry(formData, inputfieldsContent, setEntryValues)}}>
                {getInputsFromEntryData(inputfieldsContent,entryValues)}
                <div className="form-button-container">
                     <button className="delete-button" type="button" onClick={(e)=>{e.currentTarget.form?.reset(); setEntryValues({});}}>Delete</button>
                    <button className="cancel-button" type="button" onClick={()=>{setShowSection(false)}}>Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}
function EmptyForm({inputfieldsContent,setShowSection,setEntryValues}){
    return(
        <div>
            <form onSubmit={(e) => { e.preventDefault();const formData = new FormData(e.currentTarget); saveEntry(formData, inputfieldsContent, setEntryValues)}}>
                {inputfieldsContent.map(function(field){
                    return( 
                        <label key={field}>{field}<input name={toName(field)}></input></label>
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
function saveEntry(formData,inputfieldsContent, setEntryValues){
    let entryData = {};
    for(let i = 0;i<inputfieldsContent.length;i++){
        const key = toName(inputfieldsContent[i]);
        entryData[key] = formData.get(key);
    }
    setEntryValues(entryData);
}

function updateEntry(formData, inputfieldsContent, setEntryValues){
     let updatedEntry = {};
    for(let i=0; i<inputfieldsContent.length;i++){
        updatedEntry[toName(inputfieldsContent[i])] = formData.get(toName(inputfieldsContent[i]));
    }
    setEntryValues(updatedEntry);
}

