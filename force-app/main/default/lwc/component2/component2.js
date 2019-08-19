import { LightningElement, track } from "lwc";
import * as shared from "c/sharedData";
import * as labels from "c/customLabels";

export default class Component2 extends LightningElement {
   @track name;
   LABELS;

   connectedCallback() {
      this.LABELS = labels.getLabels();
   }

   handleClick() {
      const designData = shared.getDesignData();
      this.fullName(designData);
   }

   fullName(data) {
      this.name = data ? data.firstName + " " + data.lastName : "";
   }
}
