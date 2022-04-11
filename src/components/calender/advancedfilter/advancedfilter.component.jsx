import PORK_DATA from '../../../test/bacon_flask_data.json'
import CHEEZE_DATA from '../../../test/cheese_data.json'
import EGG_DATA from '../../../test/egg_data.json'
import PASTA_DATA from '../../../test/spaghetti_pasta_data.json'
import CATEGORIES from '../../../test/categories.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react'
import './advancedfilter.style.css'

class AdvancedFilter extends Component{
    constructor() {
        super()
        this.state = {
            arrowArray : []
        }
        this.dropStyle = this.dropStyle.bind(this)
        this.handleSubArrowOnClick = this.handleSubArrowOnClick.bind(this)
    }

    handleSubArrowOnClick (event, i, index) {
       
        const array = this.state.arrowArray
        console.log(array)
        array[i].subCatArr[index].isDropped = !array[i].subCatArr[index].isDropped

         this.setState( (preState) => {
             return { arrowArray : preState.arrowArray = array}
         })
       
    }
    

    componentDidMount() {
        let arrowArray = []
        CATEGORIES.map( (element, index) => {
            arrowArray.push({
                isDropped : false,
                subCatArr : element.category.category_items.map( () => {
                    return {isDropped : false}
                })
            })
        })
        this.setState( (preState) => {
            return { arrowArray : preState.arrowArray = arrowArray}
        })
    }

    dropStyle(i, index) {
        console.log(this.state.arrowArray[i])
        return (
            {
                backgroundColor : 'black'
            }
        )
        
    }

    render() {
    return (
            <form>         
                {CATEGORIES.map( (e, i) => {
                    return(
                        <div key={i}>
                            <div className={'category_main'}>
                                <input type={'checkbox'} value={e.category.category_name}/>
                                <p>{e.category.category_name}</p>
                                <FontAwesomeIcon icon={faAngleDown}/>
                                
                            </div>
                            <div>
                                {e.category.category_items.map( (category, index) => {
                                    return (
                                        <div key={index}>
                                            <div style={this.dropStyle(i, index)} className={`category_sub`}>
                                                <input type={'checkbox'} value={category.sub_cat_name}/>
                                                <p>{category.sub_cat_name}</p>
                                                <FontAwesomeIcon icon={faAngleDown} onClick={(event) => this.handleSubArrowOnClick(event, i, index)} />
                                            </div>
                                            {category.sub_cat_items.map( (item ) => {
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
}
 
export default AdvancedFilter;