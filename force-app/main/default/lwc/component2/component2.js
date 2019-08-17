import { LightningElement, track } from "lwc";
import * as design from "c/designData";

export default class Component2 extends LightningElement {
  @track name;

  handleClick() {
    this.data = design.getDesignData();
    this.fullName();
  }

  fullName() {
    this.name = this.data ? this.data.firstName + " " + this.data.lastName : "";
  }
}
