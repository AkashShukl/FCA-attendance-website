import React from 'react';
import './App.scss';
import axios from 'axios';
import FcaHeader from './components/Fca-Header';
import Attendance from './components/Attendance';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
     attendnce_data : [],
     date : new Date()
    }
  }

  async componentDidMount(){
    this.getAttendnace(this.state.date);
  }

  getAttendnace = (ndate) => {
    axios.post("https://fca-btech-cse.herokuapp.com/getattendance", {
        "date":ndate
    })
     .then( response => {
      console.log(response.data)
      var res =[]
      Object.values(response.data).forEach((value)=>{
        res.push((Object.values(value)))
      })

      this.setState({attendnce_data:res})
     })
      .catch(error => {
        console.log(error);
      })
  }

  helperFunction = () => {
    return this.state.attendnce_data.map( 
      (item) => {return(
      <tr id="entry"> 
      <td id="entry-child">{item[1]}</td>
      <td id="entry-child">{item[3]}</td>  
      <td id="entry-child">{item[0].slice(0,16)}</td> 
      <td id="entry-child">{item[2]}</td>
      </tr>);
    });      
  }

  handleChange = (ndate) => {
      this.setState({date :  ndate});
      this.getAttendnace(ndate)
  }
render(){

  return(
    <div>
      <FcaHeader/>
      <Attendance date={this.state.date} onChange = {this.handleChange}/>
      <table id="container">
      <tbody>
        <tr id="entry">
          <th id="entry-child">Name</th>
          <th id="entry-child">UID</th>  
          <th id="entry-child">Date</th>
          <th id="entry-child">Timestamp</th>
        </tr>
        {this.helperFunction()}
        </tbody>
      </table>
    </div>
  )
}

}



export default App;
