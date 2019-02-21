import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'Calculator';
  answer = 0;
  data = "";
  stored_number = 0;
  stored_number_init = false;
  current_number = 0;
  action = "";

  onKey(event: any) {
    if (Number.isInteger(event.target.value)) {
      this.data = event.target.value;
      console.log("onKey input");
    }
  }
  // Number events
  number1_e() {
    this.data += "1";
  }
  number2_e() {
    this.data += "2";
  }
  number3_e() {
    this.data += "3";
  }
  number4_e() {
    this.data += "4";
  }
  number5_e() {
    this.data += "5";
  }
  number6_e() {
    this.data += "6";
  }
  number7_e() {
    this.data += "7";
  }
  number8_e() {
    this.data += "8";
  }
  number9_e() {
    this.data += "9";
  }
  number0_e() {
    this.data += "0";
  }

  decimal_e() {
    this.data += ".";
  }

  // Action Events
  actionPlus_e() {
    this.mathActions()
    this.action = "+";
  }
  actionMinus_e() {
    this.mathActions()
    this.action = "-";
  }
  actionDivide_e() {
    this.mathActions()
    this.action = "/";
  }
  actionMultiply_e() {
    this.mathActions();
    this.action = "*";
  }
  actionEqual_e() {
    console.log("actionEqual_e called... current action: " + this.action);
    this.current_number = parseFloat(this.data);
    console.log("\tstored_number: " + this.stored_number.toString())
    console.log("\tcurrent_number: " + this.current_number.toString())
    if (this.action == "+") {

      this.stored_number = this.stored_number + this.current_number;
    }
    else if (this.action == "-") {
      this.stored_number = this.stored_number - this.current_number;
    }
    else if (this.action == "/") {
      this.stored_number = this.stored_number / this.current_number;
    }
    else if (this.action == "*") {
      this.stored_number = this.stored_number * this.current_number;
    }

    this.updateData();
  }

  mathActions() {
    this.current_number = parseFloat(this.data);
    console.log("current_number = " + this.current_number);
    if(!this.stored_number_init) {
      console.log("stored_number has not been initialized");
      this.stored_number = this.current_number;
      this.stored_number_init = true;
    }
    this.data = "";
  }

  clear_e() {
    this.data = "";
    this.stored_number = 0;
    this.current_number = 0;
    this.stored_number_init = false;
  }

  updateData() {
    console.log("updateData() called... stored_number = " + this.stored_number);
    this.data = this.stored_number.toString();
  }
}
