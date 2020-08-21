import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Button from "./button";

export default function Home() {
  return (
    <div>
      This the the Landing Page
      <Link className="nav-link" to="/signup">
        <Button className="btn btn-primary" text="Sign up" />
      </Link>
    </div>
  );
}
