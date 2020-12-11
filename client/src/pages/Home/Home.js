import React, { useContext } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { UserContext } from "../../contexts/userContext";

export default function Home() {
  const { userState, userActions } = useContext(UserContext);
  return (
    <div>
      <Button className="is-large is-info" onClick={userActions.logout}>
        Logout
      </Button>
    </div>
  );
}
