import { getElement } from "../utils";
export default function ClientCard(props) {
  const handleMouseEvent = (type) => {
    let body = getElement("body");
    let card = getElement(".card");
    let isEnter = type === "enter";
    body.style.backgroundColor = isEnter ? props.data.bg : "black";
    card.style.backgroundColor = isEnter ? props.data.bg : "";
    props.passChildData(isEnter ? props.data.screen[0] : "");
  };
  return (
    <div
      className="client-card"
      onClick={props.onClick}
      onMouseEnter={() => handleMouseEvent("enter")}
      onMouseLeave={() => handleMouseEvent("leave")}
    >
      <div className="card">
        <img src={props.data.logo} className="client-logo" alt="client-logo" />
        <p>{props.data.name}</p>
      </div>
    </div>
  );
}
