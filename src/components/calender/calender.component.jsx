import React, {Component} from 'react'
import './calender.style.css'

class Calender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            month_arr: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
            day_arr: ['må', 'ti', 'on', 'to', 'fr', 'lö', 'sö'],
            allDays_arr: [],
            selectedMonth: ''
           
        }
         this.prevMonth = this.prevMonth.bind(this)
         this.currentMonth = this.currentMonth.bind(this)
         this.nextMonth = this.nextMonth.bind(this)
         this.calculateCalenderDay = this.calculateCalenderDay.bind(this)
    }

    componentDidMount() {

        const date = new Date()
        const [month, year] = [date.getMonth(), date.getFullYear()]
        
        const firstDayOfCurrentMonth = new Date(year, month, 1).getDay()

        //Set state to current month
        this.setState( function(prevState) {
            return {selected: prevState.selectedMonth = this.state.month_arr[month]}
        })
        
        //Returns a array of day-objects with previus, current and next month ⏰
        const prevMonth = this.prevMonth(month, year)
        const currentMonth = this.currentMonth(month, year)
        const nextMonth = this.nextMonth(month, year)

        // Merge all three months to one array of objects and set it to state *allDays_arr*🙆‍♂️
        this.calculateCalenderDay(prevMonth, currentMonth, nextMonth, firstDayOfCurrentMonth)
       
    }

    calculateCalenderDay(prevMonth, currMonth, nextMonth, firstDayOfMonth) {
        const calenderArr = []
        let firstDay = (firstDayOfMonth - 1)
        if (firstDay === -1) return (firstDay = 6)

        const prevMonth_arr = prevMonth.filter( (item, index) => index < (firstDayOfMonth - 1)  )
        prevMonth.reverse()
        prevMonth_arr.map( item => calenderArr.push(item))
        currMonth.map( item => calenderArr.push(item))
        nextMonth.map( item => calenderArr.push(item))

        this.setState( function(prevState) {
            return {allDays_arr: prevState.allDays_arr = calenderArr}
        })
    }
    
    prevMonth(currentMonth, currentYear){
        let prevMonth = (currentMonth - 1)
        let year = currentYear
        const totalDaysOfPrevMonth = new Date(year, currentMonth, 0).getDate()
        const prevDaysArr = []

        if (prevMonth === -1){
            return [prevMonth = 11, year-1]
        }
        
        for( let i = 1; i < totalDaysOfPrevMonth+1; i++) {
            prevDaysArr.push(
                {
                    year: year,
                    month: this.state.month_arr[prevMonth],
                    date: i,
                    selected: false,
                }
            )
        }
        return prevDaysArr.reverse()
    }

    currentMonth(currentMonth, currentYear){
        const totalDaysOfCurrentMonth = new Date(currentYear, (currentMonth + 1), 0).getDate()
        const currentDaysArr = []
        for( let i = 1; i < totalDaysOfCurrentMonth+1; i++) {
            currentDaysArr.push(
                {
                    year: currentYear,
                    month: this.state.month_arr[currentMonth],
                    date: i,
                    selected: false,
                }
            )
        }
        return currentDaysArr
    }

    nextMonth(currentMonth, currentYear){
        let nextMonth = (currentMonth + 1)
        let year = currentYear
        if ( nextMonth === 0) {
            return (year + 1)
        }
        const totalDaysOfNextMonth = new Date(nextMonth, year, 0).getDate()
        const nextDaysArr = []
        for( let i = 1; i < totalDaysOfNextMonth+1; i++) {
            nextDaysArr.push(
                {
                    year: year,
                    month: this.state.month_arr[nextMonth],
                    date: i,
                    selected: false,
                }
            )
        }
        return nextDaysArr
    }


    render(){

        return(            
            <div className="container">
                <div className="monthyear_container">
                    <h1>{this.state.selectedMonth}</h1>
                </div>
                <div className="week_container">
                    
                </div>
                <div className="day_container">
                    {this.state.allDays_arr.map( element => <div className='days'><p>{element.date}</p></div>)}
                </div>
            </div>
        )
    }
   
}

export default Calender