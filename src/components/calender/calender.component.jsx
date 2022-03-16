import React, {Component} from 'react'

class Calender extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        const month_arr = ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC']
        const day_arr = ['mån', 'tis', 'ons', 'tor', 'fre', 'lör', 'sön']

        return(            
            <div className="container">
                <div className="month_container">
                    <h1>{month_arr[month]}</h1>
                    <h1>{year}</h1>
                </div>
                <div className="week_container">
                    {day_arr.map( days => <div><h1>{days}</h1></div>)}
                </div>
                <div className="day_container"></div>
            </div>
        )
    }
   
}

export default Calender