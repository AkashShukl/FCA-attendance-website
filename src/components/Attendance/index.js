import React from 'react';
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Attendance extends React.Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            currentDate : new Date()
        };
      }
    
    handleSelect = date => {
        this.setState({
            currentDate: date
        });
        this.props.onChange(date);
        // console.log(this.state)
    }

    render() {
        // console.log(this.state.currentDate)
    return (<div id="date-picker-cont">
            <DatePicker
                selected = {this.state.currentDate}
                onSelect = {this.handleSelect}
            />
        </div>);
    }

    
}

export default Attendance;