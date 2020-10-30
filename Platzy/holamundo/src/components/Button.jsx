import React from 'react';

class Button extends React.Component {
    state = {
        count: 0,
        text: 'default'
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleName =  (nombre) => {
        this.setState({
            text: {nombre}
        })
    }
    render() {
        const { count } = this.state;
        
        return ( 
            <div> 
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleClick}>
                    Manzanas
                </button>
            </div>
        );
    }
}


export default Button;