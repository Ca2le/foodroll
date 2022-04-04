import PORK_DATA from '../../../test/bacon_flask_data.json'
import CHEEZE_DATA from '../../../test/cheese_data.json'
import EGG_DATA from '../../../test/egg_data.json'
import PASTA_DATA from '../../../test/spaghetti_pasta_data.json'
import CATEGORIES from '../../../test/categories.json'

import './advancedfilter.style.css'



const combineData = (...data) => {
    const DATA_ARRAY = new Array
    
    /**
        data.map( element => element.map( subcategory => {
        const filterdItems = subcategory.itemCat.items.filter( item => item.recepie === "")
        filterdItems.map( item => DATA_ARRAY.push(item))
    }))
    */
    
    
    return DATA_ARRAY
}

function AdvancedFilter() {
        return (
            <form>         
                {CATEGORIES.map(element => {
                    return(
                        <div>
                            <div className={'category_main'}>
                                <input type={'checkbox'} value={element.category.category_name}/>
                                <p>{element.category.category_name}</p>
                            </div>
                            <div>
                                {element.category.category_items.map( category => {
                                    return (
                                        <div>
                                            <div className={'category_sub'}>
                                                <input type={'checkbox'} value={category.sub_cat_name}/>
                                                <p>{category.sub_cat_name}</p>
                                            </div>
                                            {category.sub_cat_items.map( item => {
                                                return (
                                                    <div className={'category_item'}>
                                                        <input type={'checkbox'} value={item.sub_cat_name}/>
                                                        <p>{item}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        
                                    )
                                })}
                            </div>
                        </div>
                   )
                })}
            </form>
         );
}
 
export default AdvancedFilter;