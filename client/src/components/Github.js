import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "../components/assets/github.css";


export default function Github() {
  return (
    <>
   <div className="github">
    <Row style={{ justifyContent: "center", padding: "4vh 4.5vh" ,marginTop:"4vh"  }}>
      <h1 className="project-heading " style={{ paddingBottom: "20px", margin: "auto",width:"40vh" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="theneoalpha"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
    </div>
    </>
  );
}


