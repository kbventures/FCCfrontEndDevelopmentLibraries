import React from "react"

export const CurrentDate = (props) =>{
    return(
    <div>
        <p>Current date: {props.date}</p>
    </div>
    )
}

export class Calendar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>What date is it?</h3>
                <CurrentDate date={Date()} />
            </div>
        )
    }
}; 