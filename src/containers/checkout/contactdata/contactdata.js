import React, { Component } from "react";

import classes from "./contactdata.module.css";
import Button from "../../../components/ui/button/button";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postal: ""
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>enter contact</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={classes.Input}
            type="text"
            name="email"
            placeholder="email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="postal"
          />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
