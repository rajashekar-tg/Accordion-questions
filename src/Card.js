import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Accordion from "react-bootstrap/Accordion";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/Card.css";
export default function Card() {
  const [val, setVal] = useState([
    {
      id: 1,
      name: "Do I have to allow the use of cookes?",
      content:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      name: "How do I change my My Page password?",
      content:
        "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      name: "What is BankID?",
      content:
        "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      name: "Whose birth number can I use?",
      content:
        "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      id: 5,
      name: "When do I recieve a password ordered by letter?",
      content:
        "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
    },
  ]);
  return (
    <div className="container">
      <div>
        <h4>Questions And Answers About Login</h4>
      </div>
      <div className="Accordion">
        {val.map((items) => {
          const { id, content, name } = items;
          return (
            <div key={id} className="Accordion-header">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="Accordion-name">{name}</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="Accordion-content">{content}</div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
