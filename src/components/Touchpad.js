import React, { Component } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

export class Touchpad extends Component {

    render() {

        const rows =
        {
            row1 : ['AC', '/', '*'],
            row2 : ['7', '8', '9', '-'],
            row3 : ['4', '5', '6', '+'],
            row4 : ['1', '2', '3', '='],
            row5 : ['0', '.']
        }
        
        let rowsArray = Object.values(rows)
        let rowKey = 0

        return (

                rowsArray.map(row => (

                    <div className='row' key={`row${++rowKey}`}
                         style= {rowStyle}>

                        {row.map(btn => (

                            <Button
                             key={btn} 
                             addToExpression={this.props.addToExpression} 
                             symbol={btn}
                             />
                             
                        ))}

                    </div>

                ))        
         )
    }
}

const rowStyle = {
    height: '4em'
}

Touchpad.propTypes = {
    addToExpression: PropTypes.func.isRequired,
    expression: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
}

export default Touchpad