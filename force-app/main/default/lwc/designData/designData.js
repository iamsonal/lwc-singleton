let data = {};

const setDesignData = (firstName, lastName) => {
  data.firstName = firstName;
  data.lastName = lastName;
};

const getDesignData = () => data;

export { getDesignData, setDesignData };
