import { useContext, useEffect, useRef, useState } from "react";
import style from "../Components/ComponentStyles/InteractionContainer.module.css";
import ActionButton from "./ActionButton";
import Bet from "./Bet";
import { CardContext } from "../Contexts/CardContext";
import { GiCardDraw } from "react-icons/gi";
import { TbCardsFilled } from "react-icons/tb";
import { TbBoxMultiple2 } from "react-icons/tb";
import { BsSignStopFill } from "react-icons/bs";
import BetButton from "./BetButton";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";

function InteractionContainer() {
  const { PlayerCards, setPlayerCards, DealerCards, setDealerCards } = useContext(CardContext);
  const { GameOver, Stand } = useContext(PlayerActionContext);

  const ActionButtonsRef = useRef(null);

  useEffect(() => {
    const ActionButtons = ActionButtonsRef.current;
    if (GameOver.isGameOver || Stand || PlayerCards.some((item) => item.Flipped == false)) {
      ActionButtons.style.setProperty("--Disabled-BackGround-color-Action-Button", "#1c3441");
      ActionButtons.style.setProperty("--Disabled-Font-Color-Action-Button", "#7d7d7d");
    } else {
      ActionButtons.style.removeProperty("--Disabled-BackGround-color-Action-Button");
      ActionButtons.style.removeProperty("--Disabled-Font-Color-Action-Button");
    }
  }, [GameOver, Stand, PlayerCards]);
  return (
    <div className={style.InteractionContainer}>
      <Bet />
      <div className={style.ActionButtonContainer} ref={ActionButtonsRef}>
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
            Action={"Stand"}
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
