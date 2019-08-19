let design = {};

const setDesignData = (firstName, lastName) => {
   design.firstName = firstName;
   design.lastName = lastName;
};

const getDesignData = () => design;

export { getDesignData, setDesignData };

// export default class SharedData {
//     constructor() {
//       this._data = {};
//     }

//     getDesignData() {
//       return this._data;
//     }

//     setDesignData(firstName, lastName) {
//         this._data.firstName = firstName;
//         this._data.lastName = lastName;
//       }
//   }
