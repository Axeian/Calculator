import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Screen extends Component {

    render() {

        return (
            
            <div className='container' style= {screenStyle}>

                <div style={expressionStyle}>
                    {this.props.expression}
                </div>

                <div style={resultStyle}>
                    {this.props.result}
                </div>
                
            </div>
        )
    }
}

const screenStyle = {
    backgroundColor: 'black',
    color: 'white',
    height: 'auto',
    width: '350px',
    fontFamily: 'calcifont',
    textAlign: 'right'
  }

const expressionStyle = {
    fontSize: '1.2em',
    color: 'orange',
    minHeight: '1.5em',
    overflowWrap: 'break-word',
    wordWrap: 'break-word'
}

const resultStyle = {
    fontSize: '2em'
}

Screen.propTypes = {
    expression: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
}

export default Screen
