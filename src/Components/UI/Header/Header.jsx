import { useRef, useEffect } from "react";
import style from "./Header.module.css";

function Header({ text }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const handleResize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const containerWith = container.clientWidth;
    const containerHeight = container.clientHeight;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = containerWith * dpr;
    canvas.height = containerHeight * dpr;

    canvas.style.width = `${containerWith}px`;
    canvas.style.height = `${containerHeight}px`;

    const scale = canvas.width / 300;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const TextBackgroundX2 = canvas.width - 60 * scale;
    const TextBackgroundY2 = 30 * scale;
    const TextBackgroundX1 = 30 * scale;
    const TextBackgroundY1 = 0;
    var borderWidth = 3;
    var offset = borderWidth * 2;

    const BackgroundColor = "rgb(62, 70, 99)";

    //flag1
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.fillRect(TextBackgroundX2 + 20 - borderWidth * scale, TextBackgroundY1 + 10 - borderWidth * scale, canvas.width + offset * scale, TextBackgroundY2 + offset * scale);
    context.fillStyle = BackgroundColor;

    context.fillRect(TextBackgroundX2 + 20 * scale, TextBackgroundY1 + 10 * scale, canvas.width, TextBackgroundY2 + 10 * scale);
    context.stroke();
    //shadow1
    context.beginPath();
    context.fillStyle = "rgb(22, 25, 37)";
    context.moveTo(TextBackgroundX2 + offset + 27.4 * scale, TextBackgroundY2);
    context.lineTo(TextBackgroundX2 + 20 * scale, TextBackgroundY2);
    context.lineTo(TextBackgroundX2 + 20 * scale, TextBackgroundY2 + 20 * scale);
    context.fill();
    context.closePath();
    //flagCut1
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.moveTo(canvas.width - 20 * scale, TextBackgroundY2);
    context.lineTo(canvas.width, TextBackgroundY2 - 20 * scale);
    context.lineTo(canvas.width, TextBackgroundY2 + 20 * scale);
    context.fill();
    context.closePath();

    //flag2
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.fillRect(0 - borderWidth, TextBackgroundY1 + 10 * scale - borderWidth, TextBackgroundX1 + 10 + offset * scale, TextBackgroundY2 + offset * scale);
    context.fillStyle = BackgroundColor;
    context.fillRect(0, TextBackgroundY1 + 10 * scale, TextBackgroundX1 + 10 * scale, TextBackgroundY2 + 10 * scale);
    context.stroke();
    //shadow2
    context.beginPath();
    context.fillStyle = "rgb(22, 25, 37)";
    context.moveTo(TextBackgroundX1 + 10 * scale, TextBackgroundY2);
    context.lineTo(TextBackgroundX1 - offset + 2.58 * scale, TextBackgroundY2);
    context.lineTo(TextBackgroundX1 + 10 * scale, TextBackgroundY2 + 20 * scale);
    context.fill();
    context.closePath();
    //flagCut2
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.moveTo(20, TextBackgroundY2);
    context.lineTo(0, TextBackgroundY2 - 20 * scale);
    context.lineTo(0, TextBackgroundY2 + 20 * scale);
    context.fill();
    context.closePath();

    //text background
    context.beginPath();
    context.fillStyle = "rgb(39, 45, 68)";
    context.fillRect(TextBackgroundX1 - borderWidth * scale, TextBackgroundY1 - borderWidth * scale, TextBackgroundX2 + offset * scale, TextBackgroundY2 + offset * scale);
    context.fillStyle = BackgroundColor;
    context.fillRect(TextBackgroundX1, TextBackgroundY1, TextBackgroundX2, TextBackgroundY2);
    context.stroke();

    //text
    context.textRendering = "optimizeLegibility";
    context.font = `${20 * scale}px Arial`;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, 15 * scale);
  };

  useEffect(() => {
    // Create ResizeObserver
    resizeObserverRef.current = new ResizeObserver(() => {
      requestAnimationFrame(handleResize);
    });

    // Start observing
    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }

    // Initial draw
    handleResize();

    // Cleanup
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [handleResize]);
  return (
    <div className={style.container} ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Header;
