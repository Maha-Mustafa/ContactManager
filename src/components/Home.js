import React from "react";
import { Card } from "react-bootstrap";
function Home() {
  return (
    <div>
      <h2 style={{ marginTop: 25, padding: 20, textAlign: "center" }}>
        Welcome
      </h2>
      <Card body>
        <h4 style={{ color: "pink", textAlign: "center" }}>
          Organize your contact list.
        </h4>
      </Card>
    </div>
  );
}
export default Home;
