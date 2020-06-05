import React from  'react';
import './styles.css';
import logo from'./uni-logo.jpg';
class FcaHeader extends React.Component{

    render(){
        return(

            <header id= "heading"><img alt="logo" id= "logo"src = {logo} ></img><label id ="text">Uttaranchal University Dehradun</label> </header>
        );
    }
}

export default FcaHeader;