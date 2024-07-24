import React, { useState } from "react";

// Function to apply the mask to the input value
const applyMask = (originalStr, startIndex = 0, endIndex = 4) => {
  if (
    !originalStr ||
    startIndex >= endIndex ||
    startIndex < 0 ||
    endIndex > originalStr.length
  ) {
    return originalStr;
  }

  let firstPart = originalStr.substring(0, startIndex);
  let lastPart = originalStr.substring(endIndex);
  let trimmedString = originalStr.substring(startIndex, endIndex);

  // Use the repeat method to create a string of asterisks
  let starredString = "*".repeat(trimmedString.length);

  return firstPart + starredString + lastPart;
};

const Input = ({ handleChange }) => {
  const [maskedValue, setMaskedValue] = useState("");

  const handleBlur = (event) => {
    let maskedStr = applyMask(event.target.value, 0, 7);
    setMaskedValue(maskedStr);
  };

  const handleFocus = (event) => {
    console.log("On focus::::", event.target.value);
  };

  return (
    <div>
      <label htmlFor='maskedInput'>Masked value</label>
      <input
        type='text'
        name='maskedInput'
        value={maskedValue}
        onChange={(e) => {
          handleChange(e.target.value);
          setMaskedValue(e.target.value);
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder='Enter value'
      />
    </div>
  );
};

export default Input;
