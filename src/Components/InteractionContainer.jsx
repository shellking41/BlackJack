import { useContext, useState } from "react";
import style from "../Components/ComponentStyles/InteractionContainer.module.css";
import ActionButton from "./ActionButton";
import Bet from "./Bet";
import { CardContext } from "../Contexts/CardContext";
import { GiCardDraw } from "react-icons/gi";
import { TbCardsFilled } from "react-icons/tb";
import { TbBoxMultiple2 } from "react-icons/tb";
import { BsSignStopFill } from "react-icons/bs";
import BetButton from "./BetButton";

function InteractionContainer() {
  const { PlayerCards, setPlayerCards, DealerCards, setDealerCards } = useContext(CardContext);

  return (
    <div className={style.InteractionContainer}>
      <Bet />
      <div className={style.ActionButtonContainer}>
        {/* <ActionButton Action={"GetACard"} setDealerCards={setDealerCards} Text={"Dealer"} /> */}
        <div className={style.ActionButtonContainerRow1}>
          <ActionButton
            Action={"GetACard"}
            setPlayerCards={setPlayerCards}
            Text={
              <p>
                Hit{" "}
                <span style={{ color: "orange" }}>
                  <GiCardDraw />
                </span>
              </p>
            }
          />
          <ActionButton
            Action={"GetACard"}
            setPlayerCards={setPlayerCards}
            Text={
              <p>
                Stand{" "}
                <span style={{ color: "red" }}>
                  <BsSignStopFill />
                </span>
              </p>
            }
          />
        </div>
        <div className={style.ActionButtonContainerRow2}>
          <ActionButton
            Action={"GetACard"}
            setPlayerCards={setPlayerCards}
            Text={
              <p>
                Split{" "}
                <span style={{ color: "gray" }}>
                  <TbCardsFilled />
                  <TbCardsFilled />
                </span>
              </p>
            }
          />
          <ActionButton
            Action={"GetACard"}
            setDealerCards={setDealerCards}
            Text={
              <p>
                Double{" "}
                <span style={{ color: "white" }}>
                  <TbBoxMultiple2 />
                </span>
              </p>
            }
          />
        </div>
      </div>
      <BetButton />
    </div>
  );
}

export default InteractionContainer;
