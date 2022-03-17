import React, {Component} from 'react'
import './calender.style.css'
class Calender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            month_arr : ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'],
            day_arr : ['mån', 'tis', 'ons', 'tor', 'fre', 'lör', 'sön'],
            // Current month from today
            currentDays : [],
            currentMonth : '',
            currentYear : '',
            // Next month from today >
            nextDays : '',
            nextMonth : '',
            nextYear : '',
            // < Prev month from today
            prevDays : '',
            prevMonth : '',           
            prevYear : ''
       
            
        } 
    }

    componentDidMount() {

        const date = new Date()
      

        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]

        const daysInMonth = new Date(year, month+1, 0).getDate()

        const firstDayInMonth = new Date(year, month, 1).getDay()-1

        let currentDaysArr = []
        console.log(this.state.day_arr[firstDayInMonth])

        for(let i = 1; i < daysInMonth+1; i++ ){
           currentDaysArr.push(i)
        }
      


        this.setState( function(prevState, prevProps){
            return (
                {
                    currentMonth: prevState = this.state.month_arr[month],
                    currentYear: prevState = year,
                    nextMonth: prevState = this.state.month_arr[month+1],
                    prevMonth: prevState = this.state.month_arr[month-1],
                    nextYear : prevState = year+1,
                    prevYear : prevState = year-1,
                    currentDays: prevState = currentDaysArr
                }
                
            )
        })
    }

    render(){
        

        return(            
            <div className="container">
                <div className="monthyear_container">
                    <div className='prev_monthyear_container'>
                    </div>
                    <div className='prev_monthyear_container'>
                    </div>
                    <div className='prev_monthyear_container'> 
                    </div>
                    <h1>{this.state.currentMonth}</h1>
                    <h1>{this.state.currentYear}</h1>
                </div>
                <div className="week_container">
                    {this.state.day_arr.map( (weekdays, index) => <div key={index} className="week_days"><p key={index}>{weekdays}</p></div>)}
                </div>
                <div className="day_container">
                    {this.state.currentDays.map( (day, index) => <div key={index} className="days"><p key={index}>{day}</p></div>)}
                </div>
            </div>
        )
    }
   
}

export default Calender