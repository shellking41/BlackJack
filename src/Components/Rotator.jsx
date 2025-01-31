import { useContext, useEffect, useRef } from "react";
import style from "./ComponentStyles/Rotator.module.css";
import { PlayerActionContext } from "../Contexts/PlayerActionContext";
import { CardContext } from "../Contexts/CardContext";
//Flipping the card
function Rotator({ children, DealerCards, index, Ignore, PlayerCards }) {
  const { setDealerCards, setPlayerCards } = useContext(CardContext);
  const RotatorRef = useRef(null);
  const { Stand } = useContext(PlayerActionContext);

  // setPlayerCards((prev) => {
  //   const newState = [...prev];
  //   newState[index] = { ...newState[index], Flipped: true };
  //   return newState;
  // });
  useEffect(() => {
    const Rotator = RotatorRef.current;

    if (DealerCards && index != 1) {
      Rotator.classList.add(style.animated);
    } else if (DealerCards && index == 1 && Stand) {
      Rotator.classList.add(style.animated);
    }

    if (PlayerCards || Ignore == true) {
      Rotator.classList.add(style.animated);
    }
  }, [index, Ignore, DealerCards?.length, Stand]);

  return (
    <div
      className={style.Rotator}
      ref={RotatorRef}
      onAnimationEnd={() => {
        if (PlayerCards) {
          setPlayerCards((prev) => {
            const newState = [...prev];
            newState[index] = { ...newState[index], Flipped: true };
            return newState;
          });
        } else if (DealerCards) {
          setDealerCards((prev) => {
            const newState = [...prev];
            newState[index] = { ...newState[index], Flipped: true };
            return newState;
          });
        }
      }}
    >
      {children}
    </div>
  );
}

export default Rotator;
