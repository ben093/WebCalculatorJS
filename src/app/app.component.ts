import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'Calculator';
  data = "";
  //stored_number = NaN;
  //stored_number_init = false;
  //current_number = NaN;
  action = "";
  number_vector = []; // To store all numbers entered
  operator_vector = []; // To store all operators selected
  isEnteringNumber = true;
  

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
    //this.data += "2";
  }
  number2_e() {
    this.checkIfEntering("2");
    //this.data += "2";
  }
  number3_e() {
    this.checkIfEntering("3");
    //this.data += "3";
  }
  number4_e() {
    this.checkIfEntering("4");
    //this.data += "4";
  }
  number5_e() {
    this.checkIfEntering("5");
    //this.data += "5";
  }
  number6_e() {
    this.checkIfEntering("6");
    //this.data += "6";
  }
  number7_e() {
    this.checkIfEntering("7");
    //this.data += "7";
  }
  number8_e() {
    this.checkIfEntering("8");
    //this.data += "8";
  }
  number9_e() {
    this.checkIfEntering("9");
    //this.data += "9";
  }
  number0_e() {
    this.checkIfEntering("0");
    //this.data += "0";
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

  mathActions() {
    console.log("mathActions() called");
    
    this.isEnteringNumber = false;

    var current_number = parseFloat(this.data);
    console.log("\tcurrent_number = " + current_number);
    
    this.number_vector.push(current_number);
    
    if (this.number_vector.length > this.operator_vector.length) {
      this.operator_vector.push(this.action);    
    }
    else {
      console.log("\tLast operator is changed to: " + this.action);
      this.operator_vector[this.operator_vector.length-1] = this.action;
    }



    this.resolveAction();
  }

  resolveAction() {
    console.log("resolveAction called... current action: " + this.operator_vector[this.operator_vector.length-1]);
    
    console.log("Number Array: ");
    this.printArray(this.number_vector);

    console.log("Operator Array: ");
    this.printArray(this.operator_vector);

    var answer = 0;
    var current_number;
    var current_operator;
    for (var index = 0; index < this.number_vector.length; index++) {
      current_number = this.number_vector[index];
      
      if (index == 0) {
        answer = current_number;
      }
      else {
        current_operator = this.operator_vector[index - 1];
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
        else if (current_operator == "=" ) {
          answer = answer; // For completeness
        }
      }
    }
    
    console.log("\tEvaluated: " + answer.toString());
    this.data =  answer.toString();
    this.isEnteringNumber = false;
  }

  clear_e() {
    console.log("clear_e() called");
    this.data = "";
    this.number_vector = [];
    this.operator_vector = [];
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
    vector_data.forEach(element => {
      output += element;
      output += ", "
    });
    output += "]";
    console.log(output);
    return output;
  }
  /*updateData() {
    console.log("updateData() called... stored_number = " + this.stored_number);
    this.data = this.stored_number.toString();
  }*/
}
