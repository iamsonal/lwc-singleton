import { LightningElement, track } from "lwc";
import * as shared from "c/sharedData";

export default class Component2 extends LightningElement {
  @track name;
  labels;

  connectedCallback() {
    this.labels = shared.getLabels();
  }

  handleClick() {
    const designData = shared.getDesignData();
    this.fullName(designData);
  }

  fullName(data) {
    this.name = data ? data.firstName + " " + data.lastName : "";
  }
}
