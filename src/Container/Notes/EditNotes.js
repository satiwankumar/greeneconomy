import React from "react";
import { Input } from "antd";
const EditNotes = () => {
  const { TextArea } = Input;

  return (
    <div>
      <h1>Edit Notes</h1>
      <TextArea
    

        className="site-input mt-3 text-area"
        placeholder="Notes Text Goes Here"
        autoSize={{ minRows: 40, maxRows: 50 }}
      />
    </div>
  );
};

export default EditNotes;
