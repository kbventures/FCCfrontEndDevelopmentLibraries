import React from 'react';


const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class CreateAcomponentWithComposition extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }

          <ChildComponent />  
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  export default CreateAcomponentWithComposition