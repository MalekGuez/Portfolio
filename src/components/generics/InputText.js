import React from "react";


const InputText = ({value, placeholder, handleChange}) => {

  return (
    <div className="input">

      <input type="text" value={value} placeholder={placeholder} onChange={(e) => handleChange(e) } />

    </div>
  );
};

export default InputText;