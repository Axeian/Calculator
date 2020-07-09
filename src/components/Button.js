import React, { Component } from 'react'
import {Button as Btn} from 'react-bootstrap'
import PropTypes from 'prop-types'

export class Button extends Component {
    

    getColor = symbol => {

        let numbs = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

        if(symbol === 'AC')
            return 'red'
        else if(symbol === '=')
            return 'blue'
        else if(numbs.has(symbol) || symbol === '.')
            return '#696969'
        else
            return 'grey'            

    }

    getStyle = symbol => {

        return ({
            fontSize: '2em',
            height: symbol === "=" ? '4em' : '2em',
            borderRadius: '0',
            border: '1px solid',
            backgroundColor: `${this.getColor(symbol)}`,
            fontFamily: 'calcifont',
            
        })
    }
    
    render() {

        const {symbol} = this.props
        
        return (
                <Btn 
                    id={symbol}
                    onClick={this.props.addToExpression.bind(this,symbol)}

                    className=
                        {`${symbol ==='AC' || symbol === '0' ? 'col-6' : 'col-3'} btn btn-dark`}
                    style={this.getStyle(symbol)}
                >{symbol}
                </Btn>
        )
    }
}

Button.propTypes = {
    addToExpression: PropTypes.func.isRequired,
    symbol: PropTypes.string.isRequired
}

export default Button
