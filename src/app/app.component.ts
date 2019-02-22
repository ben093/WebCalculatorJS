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
  stored_number = NaN;
  stored_number_init = false;
  current_number = NaN;
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
    if (!this.data.includes(".")) {
      this.data += ".";
    }
  }

  // Action Events
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
    
    if(this.data != "") {
      this.resolveAction();
    }
    else if (!this.stored_number_init)
    {
      this.stored_number = this.current_number;
    }
    this.updateData();
  }

  mathActions() {
    this.current_number = parseFloat(this.data);
    console.log("current_number = " + this.current_number);
    if(!this.stored_number_init && this.stored_number != NaN) {
      console.log("stored_number has not been initialized");
      this.stored_number = this.current_number;
      this.stored_number_init = true;
    }
    else {
      this.resolveAction();
      this.updateData();
    }
    this.data = "";
  }

  resolveAction() {
    console.log("resolveAction called... current action: " + this.action);
    this.current_number = parseFloat(this.data);
    console.log("\tstored_number: " + this.stored_number.toString());
    console.log("\tcurrent_number: " + this.current_number.toString());
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
    this.current_number = NaN;
  }

  clear_e() {
    console.log("clear_e() called");
    this.data = "";
    this.stored_number = NaN;
    this.current_number = NaN;
    this.stored_number_init = false;
  }

  updateData() {
    console.log("updateData() called... stored_number = " + this.stored_number);
    this.data = this.stored_number.toString();
  }
}
