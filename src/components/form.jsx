import React from "react";
import InputTag from "./input";
// import Label from "./labels";
import Button from "./button";

function Form(props) {
  return (
    <div className="form-container">
      <form>
        <div className="form-group  ">
          <InputTag
            className="form-control"
            type="email"
            value=""
            placeholder="abc@xyz.com"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group ">
          <InputTag
            className="form-control "
            type="password"
            placeholder="enter your password"
          />
        </div>
        <Button className="btn btn-primary" type="submit" text="Login" />
      </form>
      {/* </div> */}
    </div>
  );
}

export default Form;
