import Input from './components/input';
import Button from './components/button';

import {Container, Content, Row,} from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber ('0')
    setFirstNumber ('0')
    setOperation('')

  };
  const handleAppNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)

  };

  const handleSunNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else{
      const sun = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sun))
      setOperation('')

    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else{
      const sun = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sun))
      setOperation('')

    }
  }

  const handleMultiplicationNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else{
      const sun = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sun))
      setOperation('')

    }
  }

  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else{
      const sun = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sun))
      setOperation('')

    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSunNumbers();
          break;
          case '-':
          handleMinusNumbers();
          break;
          case '*':
          handleMultiplicationNumbers();
          break;
          case '/':
          handleDivisionNumbers();
          break;
          default:
            break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiplicationNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=> handleAppNumber('7')}/>
          <Button label="8" onClick={()=> handleAppNumber('8')}/>
          <Button label="9" onClick={()=> handleAppNumber('9')}/>
          <Button label="+" onClick={handleSunNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=> handleAppNumber('4')}/>
          <Button label="5" onClick={()=> handleAppNumber('5')}/>
          <Button label="6" onClick={()=> handleAppNumber('6')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=> handleAppNumber('1')}/>
          <Button label="2" onClick={()=> handleAppNumber('2')}/>
          <Button label="3" onClick={()=> handleAppNumber('3')}/>
          <Button label="0" onClick={()=> handleAppNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
