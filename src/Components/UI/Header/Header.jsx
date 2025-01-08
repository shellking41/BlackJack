import { useRef, useEffect } from "react";
import style from "./Header.module.css";

function Header({ text }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const handleResize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const containerWith = container.clientWidth;
    const containerHeight = 60;

    canvas.width = containerWith;
    canvas.height = containerHeight;

    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const TextBackgroundX2 = canvas.width - 60;
    const TextBackgroundY2 = 30;
    const TextBackgroundX1 = 30;
    const TextBackgroundY1 = 0;
    var borderWidth = 3;
    var offset = borderWidth * 2;

    const BackgroundColor = "rgb(62, 70, 99)";

    //flag1
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.fillRect(TextBackgroundX2 + 20 - borderWidth, TextBackgroundY1 + 10 - borderWidth, canvas.width + offset, TextBackgroundY2 + offset);
    context.fillStyle = BackgroundColor;

    context.fillRect(TextBackgroundX2 + 20, TextBackgroundY1 + 10, canvas.width, TextBackgroundY2 + 10);
    context.stroke();
    //shadow1
    context.beginPath();
    context.fillStyle = "rgb(22, 25, 37)";
    context.moveTo(TextBackgroundX2 + offset + 27.4, TextBackgroundY2);
    context.lineTo(TextBackgroundX2 + 20, TextBackgroundY2);
    context.lineTo(TextBackgroundX2 + 20, TextBackgroundY2 + 20);
    context.fill();
    context.closePath();
    //flagCut1
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.moveTo(canvas.width - 20, TextBackgroundY2);
    context.lineTo(canvas.width, TextBackgroundY2 - 20);
    context.lineTo(canvas.width, TextBackgroundY2 + 20);
    context.fill();
    context.closePath();

    //flag2
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.fillRect(0 - borderWidth, TextBackgroundY1 + 10 - borderWidth, TextBackgroundX1 + 10 + offset, TextBackgroundY2 + offset);
    context.fillStyle = BackgroundColor;
    context.fillRect(0, TextBackgroundY1 + 10, TextBackgroundX1 + 10, TextBackgroundY2 + 10);
    context.stroke();
    //shadow2
    context.beginPath();
    context.fillStyle = "rgb(22, 25, 37)";
    context.moveTo(TextBackgroundX1 + 10, TextBackgroundY2);
    context.lineTo(TextBackgroundX1 - offset + 2.58, TextBackgroundY2);
    context.lineTo(TextBackgroundX1 + 10, TextBackgroundY2 + 20);
    context.fill();
    context.closePath();
    //flagCut2
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.moveTo(20, TextBackgroundY2);
    context.lineTo(0, TextBackgroundY2 - 20);
    context.lineTo(0, TextBackgroundY2 + 20);
    context.fill();
    context.closePath();

    //text background
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.fillRect(TextBackgroundX1 - borderWidth, TextBackgroundY1 - borderWidth, TextBackgroundX2 + offset, TextBackgroundY2 + offset);
    context.fillStyle = BackgroundColor;
    context.fillRect(TextBackgroundX1, TextBackgroundY1, TextBackgroundX2, TextBackgroundY2);
    context.stroke();

    //text
    context.textRendering = "optimizeLegibility";
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, 15);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [text]);

  return (
    <div className={style.container} ref={containerRef} style={{ width: "50%", minWidth: "160px" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Header;
