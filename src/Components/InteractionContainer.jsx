import { useContext } from "react";
import style from "../Components/ComponentStyles/InteractionContainer.module.css";
import ActionButton from "./ActionButton";
import Bet from "./Bet";
import { CardContext } from "../Contexts/CardContext";

function InteractionContainer() {
  const { PlayerCards, setPlayerCards, DealerCards, setDealerCards } = useContext(CardContext);
  return (
    <div className={style.InteractionContainer}>
      <Bet />
      <ActionButton Action={"GetACard"} setDealerCards={setDealerCards} />
      <ActionButton Action={"GetACard"} setPlayerCards={setPlayerCards} />
    </div>
  );
}

export default InteractionContainer;
