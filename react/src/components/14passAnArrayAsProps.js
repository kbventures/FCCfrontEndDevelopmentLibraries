import React from "react"


export const List = (props) =>{
    {
        return <p>{["Test0", "test1","tEsT2"]}</p>
    }
}


export class ToDo extends React.Component{
constructor(props){
    super(props);
}

render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List/>
        <h2>Tomorrow</h2>
        <List/>
      </div>
    );
  }
};


// const myItems = [{ name: 'item 1' }, { name: 'item2' }];
// function MyApp() {
//     return (
//        <TodoList items={myItems} />
//     );
// }
// Then in TodoList you map the items

// function TodoList({ items }) {
//     return items.map(item => (
//         <h1>{item.name}</h1>
//     ));
// }


