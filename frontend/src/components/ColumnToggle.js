import React from "react";

const ColumnToggle = ({ columns, toggleColumn }) => {
  console.log("COLUMNS::::", columns);
  const handleChange = (columnId, isVisible) => {
    console.log("Toggling column:", columnId, isVisible);
    toggleColumn(columnId, isVisible);
  };

  return (
    <div>
      <h3>Toggle Columns:</h3>
      {columns.map((column) => (
        <label key={column.accessor}>
          <input
            type='checkbox'
            checked={column.isVisible}
            onChange={() => handleChange(column.id, !column.isVisible)}
          />
          {column.Header}
        </label>
      ))}
    </div>
  );
};

export default ColumnToggle;
