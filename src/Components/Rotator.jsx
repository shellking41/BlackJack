import { useEffect, useRef } from "react";
import style from "./ComponentStyles/Rotator.module.css";
//Flipping the card
function Rotator({ children, DealerCards, index, Ignore, PlayerCards }) {
  const RotatorRef = useRef(null);

  useEffect(() => {
    const Rotator = RotatorRef.current;

    if (DealerCards && index != 1) {
      Rotator.classList.add(style.animated);
      DealerCards[index].Flipped = true;
    } else if (DealerCards && index == 1 && DealerCards?.length >= 3) {
      Rotator.classList.add(style.animated);
      DealerCards[index].Flipped = true;
    }

    if (PlayerCards || Ignore == true) {
      Rotator.classList.add(style.animated);
      PlayerCards[index].Flipped = true;
    }
  }, [index, Ignore, DealerCards?.length]);

  return (
    <div className={style.Rotator} ref={RotatorRef}>
      {children}
    </div>
  );
}

export default Rotator;
