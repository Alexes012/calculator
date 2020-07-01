import React from "react";
import styles from "./Calculator.module.css";

class Calculator extends React.Component {

    state = {
        input: '0',
        numbers: false,
        sign: '',
        storage: ''
    };

    click = (newNumber) => {
        if (this.state.numbers === false) {
            this.setState({input: newNumber, numbers: true})
        } else {
            this.setState({input: this.state.input + newNumber})
        }
    };

    onPlusMinusClick = () => {
        if (this.state.input > 0) {
            this.setState({input: '-' + this.state.input})
        } else {
            this.setState({input: Math.abs(this.state.input)})
        }
    };

    onDotClick = () => {
        if (this.state.input.indexOf('.') === -1) {
            this.setState({input: this.state.input + "."})
        }
    };

    onACClick = () => {
        this.setState({input: 0, numbers: false})
    };

    onChangeSign = () => {
        switch (this.state.action) {
            case '/':
                return this.state.storage / this.state.input;
                break;
            case 'x':
                return this.state.storage * this.state.input;
                break;
            case '-':
                return this.state.storage - this.state.input;
                break;
            case '+':
                return +this.state.storage + +this.state.input;
                break;
        }
    };

    onSign = (sign) => {
        switch (sign) {
            case '/':
                if (this.state.storage === '') {
                    this.setState({action: '/', storage: this.state.input, numbers: false})
                } else {
                    let result = this.onChangeSign();
                    this.setState({action: '/', storage: result, input: result, numbers: false})
                }
                break;
            case 'x':
                if (this.state.storage === '') {
                    this.setState({action: 'x', storage: this.state.input, numbers: false})
                } else {
                    let result = this.onChangeSign();
                    this.setState({action: 'x', storage: result, input: result, numbers: false})
                }
                break;
            case '-':
                if (this.state.storage === '') {
                    this.setState({action: '-', storage: this.state.input, numbers: false})
                } else {
                    let result = this.onChangeSign();
                    this.setState({action: '-', storage: result, input: result, numbers: false})
                }
                break;
            case '+':
                if (this.state.storage === '') {
                    this.setState({action: '+', storage: this.state.input, numbers: false})
                } else {
                    let result = this.onChangeSign();
                    this.setState({action: '+', storage: result, input: result, numbers: false})
                }
                break;
        }
    };

    onEquallyClick = () => {
        switch (this.state.action) {
            case '/':
                this.setState(
                    {
                        input: this.state.storage / this.state.input,
                        numbers: false,
                        storage: '',
                        action: ''
                    });
                break;
            case 'x':
                this.setState(
                    {
                        input: this.state.storage * this.state.input,
                        numbers: false,
                        storage: '',
                        action: ''
                    });
                break;
            case '-':
                this.setState(
                    {
                        input: this.state.storage - this.state.input,
                        numbers: false,
                        storage: '',
                        action: ''
                    });
                break;
            case '+':
                this.setState(
                    {
                        input: +this.state.storage + +this.state.input,
                        numbers: false,
                        storage: '',
                        action: ''
                    });
                break;
        }
    };

    render() {

        return (
            <div className={styles.wrapper}>
                <div>
                    <input placeholder={this.state.input} className={styles.input}/>
                </div>
                <div className={styles.row}>
                    <div className={styles.buttonOne} onClick={() => {
                        this.onACClick()
                    }}>AC
                    </div>
                    <div className={styles.buttonOne} onClick={() => {
                        this.onPlusMinusClick()
                    }}>+/-
                    </div>
                    <div className={styles.buttonOne}>%</div>
                    <div className={styles.buttonTwo} onClick={() => {
                        this.onSign('/')
                    }}>/
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("7")}>7</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("8")}>8</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("9")}>9</div>
                    <div className={styles.buttonTwo} onClick={() => {
                        this.onSign('x')
                    }}>x
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("4")}>4</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("5")}>5</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("6")}>6</div>
                    <div className={styles.buttonTwo} onClick={() => {
                        this.onSign('-')
                    }}>-
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("1")}>1</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("2")}>2</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.click("3")}>3</div>
                    <div className={styles.buttonTwo} onClick={() => {
                        this.onSign('+')
                    }}>+
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.buttonZero} onClick={() => this.click("0")}>0</div>
                    <div className={styles.buttonTreeAll} onClick={() => this.onDotClick()}>,</div>
                    <div className={styles.buttonTwo} onClick={() => this.onEquallyClick()}>=</div>
                </div>
            </div>
        )
    }
}

export default Calculator;