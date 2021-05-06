import React, { Component } from 'react';

class EyesOnMe extends Component {

    render() { 
        return (  
            <button 
            className="eyesOnMe"
            onFocus={() => console.log('Good!')}
            onBlur={() => console.log('Hey! Eyes on me!')}

            >Eyes on me Please!</button>
        );
    }
}
 
export default EyesOnMe;