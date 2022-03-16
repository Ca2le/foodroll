import React, {Component} from 'react'

class Calender extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        const month_arr = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
        const day_arr = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag']
        return(            
            <div className="container">
                <div className="month_container"></div>
                <div className="week_container"></div>
                <div className="day_container"></div>
            </div>
        )
    }
   
}

export default Calender