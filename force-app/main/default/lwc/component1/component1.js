import { LightningElement, api } from "lwc";
import * as shared from "c/sharedData";

export default class Component1 extends LightningElement {
   // Design Attributes
   @api firstName;
   @api lastName;

   connectedCallback() {
      shared.setDesignData(this.firstName, this.lastName);
   }
}
