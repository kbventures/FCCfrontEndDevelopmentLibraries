import React from 'react';


export const List = (props) => {
    return (
        <div>
         <p>{props.tasks.join(", ")}</p>
         </div>
    )
  };
  
  export class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["Walk", "Cook", "Bake"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["Study", "Code", "Eat"]}/>
        </div>
      );
    }
  };