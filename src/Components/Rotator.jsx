import { useEffect, useRef } from "react";
import style from "./ComponentStyles/Rotator.module.css";
//Flipping the card
function Rotator({ children, DealerCards, index, Ignore, PlayerCards }) {
  const RotatorRef = useRef(null);

  useEffect(() => {
    const Rotator = RotatorRef.current;

    if (DealerCards && !(DealerCards?.length == 2 && DealerCards?.length - 1 == index)) {
      Rotator.classList.add(style.animated);
    }
    if (PlayerCards || Ignore == true) {
      Rotator.classList.add(style.animated);
    }
  }, [index, Ignore, DealerCards?.length]);

  return (
    <div className={style.Rotator} ref={RotatorRef}>
      {children}
    </div>
  );
}

export default Rotator;
