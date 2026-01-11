export function Form({inputfields}){
    return(
        <div>
            <form>
                {inputfields.map(function(field){
                    return( 
                        <label>{field}<input></input></label>
                    )
                })}
                <div className="form-button-container">
                    <button className="delete-button">Delete</button>
                    <button className="cancel-button">Cancel</button>
                    <button className="save-button">Save</button>
                </div>
            </form>
        </div>
    )
}