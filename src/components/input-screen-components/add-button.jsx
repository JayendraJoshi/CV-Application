import addButtonIcon from '../../assets/add-button.svg'

export function AddButton({setShowForm}){
    return(
        <button className="input-add-button" onClick={()=>setShowForm(true)}>
            <p>Add</p>
            <img src={addButtonIcon}></img>
        </button>
    )
}