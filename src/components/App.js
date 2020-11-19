// eslint-disable-next-line
import React,{useState} from 'react';
import ReactDOM from 'react-dom';


import "./App.css";
import Button from "./Buttons";

const App = () => {
    
    
    setInterval(updateTime,1000);
    const now = new Date().toLocaleTimeString();
    const [value,setValue] = useState("0");
    const [memory,setMemory] = useState(null);
    const [operator,setOperator] = useState(null);
    const [time,setTime] = useState(now);



    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    

    const handleButtonPress = content  => () => {

        const num = parseFloat(value);


        if(content === "AC") {
            setValue("0");
            setMemory(null);
            setOperator(null);
            return;
        }

        if(content=== "±") {
            setValue((num * -1).toString());
            setOperator(null);
            return;
        }

        if( content === "%") {
            setValue((num / 100).toString());
            setOperator(null);
            return;
        }

        if(content ===".") {

        }

        if( content === "+") {
            if(operator !== null) {
                if(operator === "+"){
                    setValue(memory + parseFloat(value));
                } else if(operator === "-") {
                    setValue(memory - parseFloat(value));
                } else if(operator === "×") {
                    setValue(memory * parseFloat(value));
                } else if(operator === "÷") {
                    setValue(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setMemory(parseFloat(value));
            setOperator("+");
            setValue("0");
            return;
        }

        if( content === "-") {
            if(operator !== null) {
                if(operator === "+"){
                    setValue(memory + parseFloat(value));
                } else if(operator === "-") {
                    setValue(memory - parseFloat(value));
                } else if(operator === "×") {
                    setValue(memory * parseFloat(value));
                } else if(operator === "÷") {
                    setValue(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setMemory(parseFloat(value));
            setOperator("-");
            setValue("0");
            return;
        }

        if( content === "×") {
            if(operator !== null) {
                if(operator === "+"){
                    setValue(memory + parseFloat(value));
                } else if(operator === "-") {
                    setValue(memory - parseFloat(value));
                } else if(operator === "×") {
                    setValue(memory * parseFloat(value));
                } else if(operator === "÷") {
                    setValue(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setMemory(parseFloat(value));
            setOperator("×");
            setValue("0");
            return;
        }

        if( content === "÷") {
            if(operator !== null) {
                if(operator === "+"){
                    setValue(memory + parseFloat(value));
                } else if(operator === "-") {
                    setValue(memory - parseFloat(value));
                } else if(operator === "×") {
                    setValue(memory * parseFloat(value));
                } else if(operator === "÷") {
                    setValue(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setMemory(parseFloat(value));
            setOperator("÷")
            setValue("0");
            return;
        }

        if(content === "=") {

            if(!operator) return;

            if(operator !== null) {
                if(operator === "+"){
                    setValue(memory + parseFloat(value));
                } else if(operator === "-") {
                    setValue(memory - parseFloat(value));
                } else if(operator === "×") {
                    setValue(memory * parseFloat(value));
                } else if(operator === "÷") {
                    setValue(memory / parseFloat(value));
                }
            } else {
                setMemory(parseFloat(value));
            }
            setOperator(null);
            setMemory(null);
            return;
        }

        setValue(parseFloat(num + content).toString());
    };

    return (
        <div className="App">
            <div className="top">
                <div className="time">
                {time}
                </div>
            </div>
            <div className="display">{value}</div>
            <div className="buttons">
                <Button onButtonClick={handleButtonPress}  content="AC" type="function" />
                <Button onButtonClick={handleButtonPress} content="±"  type="function"/>
                <Button onButtonClick={handleButtonPress} content="%" type="function" />
                <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
                <Button onButtonClick={handleButtonPress} content="7" />
                <Button onButtonClick={handleButtonPress} content="8" />
                <Button onButtonClick={handleButtonPress} content="9" />
                <Button onButtonClick={handleButtonPress} content="×" type="operator" />
                <Button onButtonClick={handleButtonPress} content="4" />
                <Button onButtonClick={handleButtonPress} content="5" />
                <Button onButtonClick={handleButtonPress} content="6" />
                <Button onButtonClick={handleButtonPress} content="-" type="operator" />
                <Button onButtonClick={handleButtonPress} content="1" />
                <Button onButtonClick={handleButtonPress} content="2" />
                <Button onButtonClick={handleButtonPress} content="3" />
                <Button onButtonClick={handleButtonPress} content="+" type="operator" />
                <Button onButtonClick={handleButtonPress} content="0" />
               
                <Button onButtonClick={handleButtonPress} content="=" type="operator" />
            </div>
            
        </div>
    );
}

export default App;