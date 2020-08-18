import React from "react";
import Form from "./form";
import Paragraph from "./paragraph";

function App() {
  return (
    <div className="app_component">
      <Paragraph
        className="paragraph_one row_one"
        text="This is the first paragraph in the App component view. And it is on the first row and first column of the grid"
      />

      <Form />
    </div>
  );
}

export default App;
