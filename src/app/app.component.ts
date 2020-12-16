import { Component, HostListener } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  get someText(): string {
    return localStorage.getItem("someText");
  }

  set someText(val: string) {
    if (val !== localStorage.getItem("someText")) {
      localStorage.setItem("someText", val);
    }
  }

  @HostListener("window:storage", ["$event"])
  onStorage(event: StorageEvent) {
    console.log(event);
    this.someText = localStorage.getItem("someText");
  }
}
