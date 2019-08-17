import { LightningElement, api } from "lwc";
import * as design from "c/designData";

export default class Component1 extends LightningElement {
  // Design Attributes
  @api firstName;
  @api lastName;

  connectedCallback() {
    design.setDesignData(this.firstName, this.lastName);
  }
}
