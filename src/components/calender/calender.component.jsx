import React, {Component} from 'react'
import './calender.style.css'

class Calender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month_arr: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
            day_arr: ['må', 'ti', 'on', 'to', 'fr', 'lö', 'sö'],
            allDays_arr: [],
            displayedMonth: '',
            displayedYear: ''
           
        }
         this.prevMonth = this.prevMonth.bind(this)
         this.currentMonth = this.currentMonth.bind(this)
         this.nextMonth = this.nextMonth.bind(this)
         this.calculateCalenderDay = this.calculateCalenderDay.bind(this)
         this.setStateOfDisplayedMonth = this.setStateOfDisplayedMonth.bind(this)
         this.setStateOfDisplayedYear = this.setStateOfDisplayedYear.bind(this)

    }

    componentDidMount() {

        const newDate = new Date()
        const [month, year, date] = [newDate.getMonth(), newDate.getFullYear(), newDate.getDate()]
        const firstDayOfCurrentMonth = new Date(year, month, 1).getDay()

        //Returns a array of day-objects with previus, current and next month ⏰
        const prevMonth = this.prevMonth(month, year)
        const currentMonth = this.currentMonth(month, year, date)
        const nextMonth = this.nextMonth(month, year)

        // Merge all three months to one array of objects and set it to state *allDays_arr*🙆‍♂️
        this.calculateCalenderDay(prevMonth, currentMonth, nextMonth, firstDayOfCurrentMonth)

        // set state for month and year
        this.setStateOfDisplayedMonth(month)
        this.setStateOfDisplayedYear(year)
       
    }

    setStateOfDisplayedMonth(month) {
        this.setState(function(preState){
            return {displayedMonth: preState.displayedMonth = this.state.month_arr[month]}
        })
    }

    setStateOfDisplayedYear(year) {
        this.setState(function(preState){
            return {displayedYear: preState.displayedYear = year}
        })
    }

    calculateCalenderDay(prevMonth, currMonth, nextMonth, firstDayOfMonth) {
        
        const calenderArr = []
        let firstDay = (firstDayOfMonth - 1)
        if (firstDay === -1) {
            firstDay = 6
        }
        const prevMonth_arr = prevMonth.filter( (item, index) => index < (firstDay)  )
        prevMonth_arr.reverse()
        prevMonth_arr.map( item => calenderArr.push(item))

        currMonth.map( item => calenderArr.push(item))
       
        const totalDaysLeftForNextMonth = 70 - calenderArr.length 
        const nextMonthDisplayed = nextMonth.slice(0, totalDaysLeftForNextMonth)

        nextMonthDisplayed.map( item => calenderArr.push(item))

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
                    currentMonth: false,
                    passed: true
                }
            )
        }
        return prevDaysArr.reverse()
    }

    currentMonth(currentMonth, currentYear, currentDay){
        const totalDaysOfCurrentMonth = new Date(currentYear, (currentMonth + 1), 0).getDate()
        const currentDaysArr = []
        for( let i = 1; i < totalDaysOfCurrentMonth+1; i++) {
            if( i < currentDay) {
                currentDaysArr.push(
                    {
                        year: currentYear,
                        month: this.state.month_arr[currentMonth],
                        date: i,
                        selected: false,
                        currentMonth: true,
                        passed: true
                    }
                )
            }
            else {
                currentDaysArr.push(
                    {
                        year: currentYear,
                        month: this.state.month_arr[currentMonth],
                        date: i,
                        selected: false,
                        currentMonth: true,
                        passed: false
                    }
                )
            }
        }
        return currentDaysArr
    }

    nextMonth(currentMonth, currentYear){
        const nextDaysArr = []
        const nextMonth = (currentMonth + 1)
        const nextOfNextMonth = (nextMonth + 1)
        let year = currentYear
        let yearOfOtherMonth = currentYear

        if ( nextMonth === 0) {
            year += 1
        }
        if (nextOfNextMonth === 0) {
            yearOfOtherMonth += 1
        }

        const totalDaysOfNextMonth = new Date(nextMonth, year, 0).getDate()
        const totalDaysOfNextOfNextMonth = new Date(nextOfNextMonth, yearOfOtherMonth, 0).getDate()

        
        for( let i = 1; i < totalDaysOfNextMonth+1; i++) {
            nextDaysArr.push(
                {
                    year: year,
                    month: this.state.month_arr[nextMonth],
                    date: i,
                    selected: false,
                    currentMonth: false,
                    passed: false
                }
            )
        }
        for( let i = 1; i < totalDaysOfNextOfNextMonth+1; i++) {
            nextDaysArr.push(
                {
                    year: yearOfOtherMonth,
                    month: this.state.month_arr[nextOfNextMonth],
                    date: i,
                    selected: false,
                    currentMonth: false,
                    passed: false
                }
            )
        }
        return nextDaysArr
    }

    render(){
        return(            
            <div className="container">
                <div className="monthyear_container">
                    <h1>{this.state.displayedMonth} {this.state.displayedYear}</h1>
                </div>
                <div className="week_container">
                    {this.state.day_arr.map( day => {
                        return (
                            <p>{day}</p>
                        )
                    })}
                </div>
                <div className="day_container" onScroll={ (event) => {
                  
                } }>
                    {this.state.allDays_arr.map( element => {
                        return ( 
                            <div className={`days ${element.currentMonth === true ? 'selected' : ''} ${element.passed === true ? 'passed' : ''}`}>
                                <p>{element.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Calender