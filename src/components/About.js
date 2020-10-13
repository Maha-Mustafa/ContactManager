import React from "react";
import { Card } from "react-bootstrap";
function About() {
  return (
    <div>
      <h2 style={{ marginTop: 25, padding: 20, textAlign: "center" }}>About</h2>
      <Card body>
        <h4 style={{ color: "pink", textAlign: "center" }}>
          An app designed to manage your contacts
        </h4>
      </Card>
    </div>
  );
}
export default About;
