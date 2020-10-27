import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  counter = 0;
  phrase = "Okay now...";
  constructor() {}

  saySomething() {
    alert("good day");
  }

  again() {
    alert("boom boom bap");
  }

  counterr() {
    this.counter++;
  }

  updatePhrase() {
    this.phrase += " ..its going";
  }
}
