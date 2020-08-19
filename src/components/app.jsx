import React, { useState } from "react";
import Form from "./form";
import Paragraph from "./paragraph";

function App() {
  const [name, setName] = useState("Kennie");

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at enim sit amet lorem volutpat luctus pretium lacinia purus. Fusce hendrerit, leo sit amet faucibus congue, lectus ipsum cursus enim, hendrerit porttitor risus nunc vitae risus. Cras consectetur ipsum felis, non molestie ante aliquam a. In eleifend pulvinar massa, vitae consequat risus cursus tincidunt. Morbi semper mauris ut sapien fringilla faucibus. Morbi nec laoreet diam. In at ultrices eros, sed auctor risus.";
  return (
    <div className="app_component">
      <div className="row_one">
        <Paragraph className="col_one_row_one" text={text} />

        <Form className="col_two_row_one" />
        <Paragraph className="col_three_row_one" text={text} />
      </div>
      <div className="row_two">
        <Paragraph className="col_one_row_two" text={text} />
      </div>
      <div className="row_three">
        <Paragraph className="col_one_row_two" text={text} />
      </div>
    </div>
  );
}

export default App;
