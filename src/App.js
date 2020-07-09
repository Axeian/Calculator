import React, {Component} from 'react';
import './App.css';
import Screen from './components/Screen'
import Touchpad from './components/Touchpad'


export class App extends Component {

  state = {
    expression: ' ',
    result: '0',
    lastSymbolIsOperator: false,
    decimalInOperand: false,
    equalWasPressed: false
}

addToExpression = (symbol) => {
    
    const {expression, result, lastSymbolIsOperator, decimalInOperand, equalWasPressed} = this.state

    let lastSymbol = expression.charAt(expression.length - 1) 
    let operators = new Set(['/', '*', '+', '-'])
    let numbs = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])


    // If a number is inputted after max digit limit has been reached
    if(result.length === 21 && numbs.has(symbol))
    {
      this.setState({
          result: 'DIGIT LIMIT REACHED!'
        })

      setTimeout(() => {
        this.setState({
          result
        })
      }, 1000)

      return
    }

    // If a button is clicked while this alert is still visible
    if(result === 'DIGIT LIMIT REACHED!')
      return

    // If 'AC' was clicked
    if(symbol === 'AC')
    {
        this.setState({
          expression: ' ',
          result: '0',
          lastSymbolIsOperator: false,
          decimalInOperand: false,
          equalWasPressed: false
        })

        return
    }

    // If '=' was clicked
    if(symbol === '=')
    {
        // Return if '=' is clicked consecutively
        if(equalWasPressed)
          return

        // Getting rid of any symbols at the end of the expression
        let exp = expression
        while(operators.has(lastSymbol))
        {
            exp = exp.slice(0, exp.length - 1)
            lastSymbol = exp.charAt(exp.length - 1) 
        }

        // Evealuating the expression
        try{
            let res = eval(exp)
            if(typeof(res) === 'undefined')
            {
                if(result === '0')
                    return
                else
                    throw 'invalid exp'
            }
          
            this.setState({
              result: res,
              expression: exp + '=' + res,
              lastSymbolIsOperator: false,
              decimalInOperand: false,
              equalWasPressed: true
            })
        }

        catch{
            this.setState({
              result: 'INVALID EXPRESSION!'
            })
            setTimeout(() => {
              this.setState({
                expression: ' ',
                result: '0'
              })
              
            }, 1000);
        }
       
        return
    }

    // If second to last button pressed was '='
    if(equalWasPressed)
    {
        if(operators.has(symbol))
        {
            this.setState({
              expression: result + symbol,
              result: symbol,
              lastSymbolIsOperator: true,
              decimalInOperand: false,
              equalWasPressed: false
            })
        }

        else if(numbs.has(symbol))
        {
            this.setState({
              expression: symbol,
              result: symbol,
              lastSymbolIsOperator: false,
              decimalInOperand: false,
              equalWasPressed: false
            })
        }

        else
        {
          this.setState({
            expression: '0.',
            result: '0.',
            lastSymbolIsOperator: false,
            decimalInOperand: true,
            equalWasPressed: false
          })
        }

        return

    }

    // If a number is clicked upon
    if(numbs.has(symbol))
    {
        if(result === '0')
        {
          this.setState({
            expression: expression.slice(0, expression.length-1) + symbol,
            result: symbol,
            lastSymbolIsOperator: false
          })
        }

        else
        {
          this.setState({
            expression: expression + symbol,
            result: lastSymbolIsOperator ? symbol : result + symbol,
            lastSymbolIsOperator: false
          })
        }        
    }

    // If an operator is clicked upon
    else if(operators.has(symbol))
    {
          // If last button clicked was also an operator
          if(operators.has(lastSymbol))
          {
                if(symbol === lastSymbol)
                  return

                // This allows for second operand to be negative
                else if(symbol === '-' && lastSymbol !== '-')
                {
                  this.setState({
                    expression: expression + '-',
                    result: symbol
                  })
                }

                else
                {
                    let exp = expression
                    let expLastSymbol = lastSymbol
                    while(operators.has(expLastSymbol))
                    {
                        exp = exp.slice(0, exp.length - 1)
                        expLastSymbol = exp.charAt(exp.length - 1) 
                    }

                    this.setState({
                      expression:  exp + symbol,
                      result: symbol
                    })
                }
              
          }

          // If last symbol was not an operator
          else
          {
              this.setState({
                expression: expression + symbol,
                result: symbol,
                lastSymbolIsOperator: true,
                decimalInOperand: false
              })
          }

    }

    // If the decimal symbol was clicked upon
    else
    {
          if(!decimalInOperand)
          {
              this.setState({
                expression: operators.has(lastSymbol) || lastSymbol === ' ' ? expression + '0.' : expression + '.',
                result: operators.has(lastSymbol) ? '0.' : result + '.',
                lastSymbolIsOperator: false,
                decimalInOperand: true
              })
          }
    }


  }

  render() {
      return (
          <div className='body vh-100 d-flex align-items-center'>
                 
              <div className='container jumbotron' style={calciStyle}>

                    <Screen 
                        expression={this.state.expression}
                        result={this.state.result}
                    />

                    <div className='container'>
                          <Touchpad
                              addToExpression={this.addToExpression}
                              expression={this.state.expression}
                              result={this.state.result}
                          />
                    </div>
             
              </div>
            
          </div>
      )
  }
}

const calciStyle = {
    width: 'auto',
    padding: '0',
    border: '4px solid',
}

export default App
