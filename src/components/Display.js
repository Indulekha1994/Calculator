import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
export const Display = () => {
    const [display, setDisplay] = useState('');
    const handleClick = (e) => {
        setDisplay(display + e)
    }
    const calresult = () => {
        try{
            setDisplay(eval(display))
        }catch(e){
            setDisplay('Error')
        }
    }

    const backspace = () => {
        if(display){
            setDisplay(display.slice(0,-1))
        }else{
            setDisplay('')
    }
        
    }
    const clear = () => {
        setDisplay('')
    }

  return (
    <>
       <Container className='container'>
                <Row>
                    <h1>Calculator</h1>
                </Row>
                <Row>    
                <Col md={4} className="col-lft"></Col>
                <Col md={4}> 
                    <Card className="card">
                        <Card.Body>
                            <div className="display d-flex" id='display'>
                                <input type="text" value={display}/>
                          </div>
                            <div className="buttons">
                                <div className="row">
                                    <button className='col' onClick={()=> handleClick('1')}>1</button>
                                    <button className='col' onClick={()=> handleClick('2')}>2</button>
                                    <button className='col' onClick={()=> handleClick('3')}>3</button>
                                    <button className='col symbol' onClick={()=> handleClick('+')}>+</button>
                                </div>
                                <div className="row">
                                    <button className='col' onClick={()=> handleClick('4')}>4</button>
                                    <button className='col' onClick={()=> handleClick('5')}>5</button>
                                    <button className='col' onClick={()=> handleClick('6')}>6</button>
                                    <button className='col symbol' onClick={()=> handleClick('-')}>-</button>
                                </div>
                                <div className="row">
                                    <button className='col' onClick={()=> handleClick('7')}>7</button>
                                    <button className='col' onClick={()=> handleClick('8')}>8</button>
                                    <button className='col' onClick={()=> handleClick('9')}>9</button>
                                    <button className='col symbol' onClick={()=> handleClick('*')}>*</button>
                                </div>
                                <div className="row">
                                    <button className='col' onClick={()=> handleClick('0')}>0</button>
                                    <button className='col' onClick={()=> handleClick('.')}>.</button>
                                    <button className='col symbol' onClick={()=> handleClick('/')}>/</button>
                                    <button className='col symbol' onClick={calresult}>=</button>
                                </div>
                                <div className="row">
                                    <button className='col symbol'onClick={backspace}>del</button>
                                    <button className='col symbol' onClick={()=> handleClick('%')}>%</button>
                                    <button className='col symbol' onClick={()=> handleClick('(')}>(</button>
                                    <button className='col symbol' onClick={()=> handleClick(')')}>)</button>
                                </div>
                                <div className="row">
                                    <button className='col clear-symbol'onClick={clear}>Clear</button>                            
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="col-lft"></Col>
            </Row>
        </Container> 
    </>
  )
}
