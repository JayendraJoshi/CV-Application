import addButtonIcon from '../../assets/add-button.svg'

export function AddButton(){
    return(
        <button className="input-add-button">
            <p>Add</p>
            <img src={addButtonIcon}></img>
        </button>
    )
}