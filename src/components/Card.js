import "./Card.css"
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { useState } from "react";

const Card = (props) => {
  const [openCard, setOpenCard] = useState(false);

  function iconShow() {
    if (openCard) {
      return <AiFillUpCircle size={30} />
    }
    return <AiFillDownCircle size={30} />
  }

  return (
    <div className="card">
      <div className="topCard">
        <h2 className="question">{props.title}</h2>
        <p onClick={() => {
          if (openCard) {
            setOpenCard(false)
          } else {
            setOpenCard(true)
          }
        }} className="icon">{iconShow()}</p>
      </div>
      <div>
        <p className={openCard ? "content" : "noContent"}>{props.content}</p>
      </div>
    </div>
  )
}

export default Card