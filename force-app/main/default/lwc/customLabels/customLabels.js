import CLICK_HERE from "@salesforce/label/c.CLICK_HERE";
import HELLO from "@salesforce/label/c.HELLO";

class CustomLabels {
   constructor() {
      if (!CustomLabels.instance) {
         this._data = {
            CLICK_HERE,
            HELLO
         };
         CustomLabels.instance = this;
      }

      return CustomLabels.instance;
   }

   getLabels() {
      return this._data;
   }
}

const labels = new CustomLabels();
Object.freeze(labels);

export default labels;
