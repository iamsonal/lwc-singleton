import CLICK_HERE from "@salesforce/label/c.CLICK_HERE";
import HELLO from "@salesforce/label/c.HELLO";

let design = {};

const label = {
    CLICK_HERE,
    HELLO
};

const setDesignData = (firstName, lastName) => {
    design.firstName = firstName;
    design.lastName = lastName;
};

const getDesignData = () => design;

const getLabels = () => label;

export { getDesignData, setDesignData, getLabels };