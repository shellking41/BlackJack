import style from "../Components/ComponentStyles/CardValueCounter.module.css";
//MEGPROBALNI AZT HOGY HA KULOMBOZO KEZDO POZICIOT ADNI NEKI CSSBE .SETPROPERITYVEL!!!(TOP,RIGHT)
function CardValueCounter({ PlayerCards, DealerCards }) {
  return (
    <div
      className={style.CardValueCounterContainer}
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: PlayerCards
          ? `translateX(${(PlayerCards.length - 1) * 33.5}%)  translateY(${(-12 * PlayerCards.length - 1) * 40}%)  `
          : DealerCards
          ? `translateX(${(DealerCards.length - 1) * 33.5}%) `
          : null,
      }} /*transform--> always push to the left if a new card initialized*/
    >
      <p>{"99"}</p>
    </div>
  );
}

export default CardValueCounter;
