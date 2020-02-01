import React, { Component } from 'react';
import congratsAnimation from '../assets/congrats.gif';
import errorAnimation from '../assets/error.gif';

class AgeStats extends Component {
    constructor(){
        super();

        this.state = {
            error : false
        }
    }
    timeSince(date){
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);
        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/31);
        days -= months*31;
        if(isNaN(days)||isNaN(months)||isNaN(years)){
            if(!this.state.error){
                this.setState({ error : true });
            }
            return `Ups... something went wrong! 
            May be you could try with a valid date...`;
        }else{
            if(this.state.error){
                this.setState({ error : false });
            }
            return `Congrats on ${years } years, ${months} months, and ${days} days`
        }
    }
    
    render(){
        return (
            <div>
                {!this.state.error ? <h3>Date: {this.props.date}</h3> : <span></span>}
                <h4>{this.timeSince(this.props.date)}!</h4>
                <img src={!this.state.error? congratsAnimation : errorAnimation } alt="Congratulations"  />
            </div>
        )
    }
}

export default AgeStats;