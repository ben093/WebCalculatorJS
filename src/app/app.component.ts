import { Component } from '@angular/core';
import * as math from 'mathjs';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator';
  data = "";
  action = "";
  data_vector = []; // To store all numbers entered
  //operator_vector = []; // To store all operators selected
  isEnteringNumber = true;
  valid_actions_list = ["+", "-", "*", "/", "="]

  onKey(event: any) {
    if (Number.isInteger(event.target.value)) {
      this.isEnteringNumber = true;
      this.data = event.target.value;
      console.log("onKey input");
    }
  }
  // Number events
  number1_e() {
    this.checkIfEntering("1");
  }
  number2_e() {
    this.checkIfEntering("2");
  }
  number3_e() {
    this.checkIfEntering("3");
  }
  number4_e() {
    this.checkIfEntering("4");
  }
  number5_e() {
    this.checkIfEntering("5");
  }
  number6_e() {
    this.checkIfEntering("6");
  }
  number7_e() {
    this.checkIfEntering("7");
  }
  number8_e() {
    this.checkIfEntering("8");
  }
  number9_e() {
    this.checkIfEntering("9");
  }
  number0_e() {
    this.checkIfEntering("0");
  }

  decimal_e() {
    this.isEnteringNumber = true;
    if (!this.data.includes(".")) {
      this.data += ".";
    }
  }

  // Operator Events
  actionPlus_e() {
    this.action = "+";
    this.mathActions();
  }
  actionMinus_e() {
    this.action = "-";
    this.mathActions();
  }
  actionDivide_e() {
    this.action = "/";
    this.mathActions();
  }
  actionMultiply_e() {
    this.action = "*";
    this.mathActions();
  }
  actionEqual_e() {
    this.action = "=";
    this.mathActions();
  }

  inverse_e() {
    this.actionEqual_e(); // Finish evaluating any number entered
    this.data_vector.push("*");
    this.data_vector.push(-1);
    this.actionEqual_e();
  }

  mathActions() {
    console.log("mathActions() called");

    var current_number = parseFloat(this.data);
    console.log("\tcurrent_number = " + current_number);
    if (!isNaN(current_number)) {
      // Put current_number in data_vector if currently entering a number
      if (this.isEnteringNumber) {
        this.data_vector.push(current_number);
      }

      if (this.action != "=") {
        var last_data = this.data_vector[this.data_vector.length - 1];
        console.log("\tlast_data is: " + last_data);
        if (this.valid_actions_list.includes(last_data)) {
          console.log("\tLast operator is changed to: " + this.action);
          this.data_vector[this.data_vector.length - 1] = this.action;
        }
        else {
          this.data_vector.push(this.action);
        }
      }
      this.resolveAction();
      this.isEnteringNumber = false;
    }
    else {
      console.log("No number has been entered yet.");
    }
  }

  resolveAction() {
    console.log("resolveAction called... current action: " + this.data_vector[this.data_vector.length - 2]);

    console.log("Number Array: ");
    this.printArray(this.data_vector);

    /*var answer = 0;
    var current_number;
    var current_operator;
    for (var index = 0; index < this.data_vector.length; index++) {
      current_number = this.data_vector[index];

      if (index == 0) {
        answer = current_number;
      }
      else {
        current_operator = this.data_vector[index - 1];
        if (current_operator == "+") {
          answer = answer + current_number;
        }
        else if (current_operator == "-") {
          answer = answer - current_number;
        }
        else if (current_operator == "/") {
          answer = answer / current_number;
        }
        else if (current_operator == "*") {
          answer = answer * current_number;
        }
      }
    }*/

    /*var expression = "";
    this.data_vector.forEach((val, idx, arr) => {
      if (!Object.is(arr.length - 1, idx)) {
        expression += val;
      }
      else if (!this.valid_actions_list.includes(val)) {
        expression += val;
      }
    });

    console.log("\tExpression is: " + expression);

    var answer = math.eval(expression);*/

    /* var str_data_vector = this.data_vector.map(String);
 
     const answer = math.chain(str_data_vector).done();*/

    var current_var;


    

    var answer = math.bignumber(this.data_vector[0]).toString();
    for (var index = 1; index < this.data_vector.length-1; index += 2) {
      var current_operator = this.data_vector[index];
      var next_num = this.data_vector[index+1]
      if (current_operator == "+") {
        //answer = math.add(math.bignumber(answer),  math.bignumber(next_num))
        //answer = math.eval(answer.toString() + " + " + math.bignumber(next_num.toString()))
        answer = math.add(math.bignumber(answer), math.bignumber(next_num)).toString()
        console.log(" added  " + next_num.toString())
      }
      else if (current_operator == "-") {
        //answer = math.eval(answer.toString() + " - " + math.bignumber(next_num.toString()))
        answer = math.subtract(math.bignumber(answer), math.bignumber(next_num)).toString()
        console.log(" subtracted  " + next_num.toString())
      }
      else if (current_operator == "/") {
        //answer = math.eval(answer.toString() + " / " + math.bignumber(next_num.toString()))
        answer = math.divide(math.bignumber(answer), math.bignumber(next_num)).toString()
        console.log(" divided by  " + next_num.toString())
      }
      else if (current_operator == "*") {
        //answer = math.eval(answer.toString() + " * " + math.bignumber(next_num.toString()))
        answer = math.multiply(math.bignumber(answer), math.bignumber(next_num)).toString()
        console.log(" multiplied by  " + next_num.toString())
      }

    }

    console.log("\tEvaluated: " + answer.toString());
    this.data = answer.toString();
    this.isEnteringNumber = false;
  }

  clear_e() {
    console.log("clear_e() called");
    this.data = "";
    this.data_vector = [];
    this.isEnteringNumber = true;
  }

  checkIfEntering(number) {
    if (this.isEnteringNumber) {
      this.data += number
    }
    else {
      this.data = number;
      this.isEnteringNumber = true;
    }
  }

  printArray(vector_data) {
    var output = "[";

    vector_data.forEach((val, idx, arr) => {

      output += val;
      if (!Object.is(arr.length - 1, idx)) {
        output += ", "
      }
    });

    output += "]";
    console.log(output);
    return output;
  }
}
