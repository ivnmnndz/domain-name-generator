/* eslint-disable */
import "bootstrap";
import "./style.css";

const domainSchema = {
  subDomain: ["www.", "blog.", "mail."],
  pronoun: ["the", "our"],
  adj: ["simple", "great", "big"],
  noun: ["website", "winner"],
  topLevelDomain: [".com", ".net", ".io", ".org"]
};

window.onload = function() {
  const output = Object.values(domainSchema)
    .reduce((accumulator, currentValue) =>
      accumulator.flatMap(c => currentValue.map(n => c + n))
    )
    .join("</br>");

  document.getElementById("domains").innerHTML = output;
};
