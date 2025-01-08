import { useRef, useEffect } from "react";

function Diamond() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const handleResize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    canvas.width = container.clientWidth;
    canvas.height = container.clientWidth;

    const ctx = canvas.getContext("2d");

    const Diamond = {
      X1: canvas.width / 2,
      Y1: 0,
      X2: canvas.width / 2,
      Y2: canvas.height,
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.moveTo(Diamond.X1, Diamond.Y1);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineTo(Diamond.X2, Diamond.Y2);
    ctx.lineTo(0, canvas.height / 2);
    ctx.fill();
    ctx.closePath();
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "auto" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Diamond;
