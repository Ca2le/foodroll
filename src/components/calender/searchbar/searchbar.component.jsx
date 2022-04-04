import './searchbar.style.css' 

function SearchBar(props) {
    return ( 
        <div>
            <input type={'text'}  placeholder={'Sök'} onChange={props.handleChange} />
        </div>
     );
}
 
export default SearchBar;