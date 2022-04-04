import './checkbox.style.css'

function CheckBox(props) {
    return ( 
        <label className='item_container'>
            <input type={'checkbox'} value={props.item}/>
            <p>{props.item}</p>
        </label>
     );
}

export default CheckBox;