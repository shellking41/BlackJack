import { useRef, useEffect } from "react";

function Hearth() {
  const CanvasRef = useRef(null);
  const ContainerRef = useRef(null);
  const handleResize = () => {
    const canvas = CanvasRef.current;
    const container = ContainerRef.current;
    canvas.width = container.clientWidth;
    canvas.height = container.clientWidth;

    const ctx = canvas.getContext("2d");
    const scale = canvas.width / 200;

    const Hearth = {
      A1: {
        X: canvas.width / 2,
        Y: 0,
      },
      B1: {
        X: canvas.width / 2 - 100 * scale,
        Y: 100 * scale,
      },
      C1: {
        X: canvas.width / 2 - 50 * scale,
        Y: 150 * scale,
      },
      D1: {
        X: canvas.width / 2 + 50 * scale,
        Y: 50 * scale,
      },
    };

    //Hearth1
    ctx.save();

    ctx.translate(canvas.width, canvas.height);
    ctx.scale(-1, -1);

    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 0, 0)";

    ctx.moveTo(Hearth.A1.X, Hearth.A1.Y);
    ctx.lineTo(Hearth.B1.X, Hearth.B1.Y);
    ctx.lineTo(Hearth.C1.X, Hearth.C1.Y);
    ctx.lineTo(Hearth.D1.X, Hearth.D1.Y);

    ctx.fill();
    ctx.closePath();

    ctx.restore();
    //Hearth2
    ctx.save();

    ctx.translate(0, canvas.height);
    ctx.scale(1, -1);

    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 0, 0)";

    ctx.moveTo(Hearth.A1.X, Hearth.A1.Y);
    ctx.lineTo(Hearth.B1.X, Hearth.B1.Y);
    ctx.lineTo(Hearth.C1.X, Hearth.C1.Y);
    ctx.lineTo(Hearth.D1.X, Hearth.D1.Y);

    ctx.fill();
    ctx.closePath();

    ctx.restore();
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={ContainerRef} style={{ width: "100%", height: "auto" }}>
      <canvas ref={CanvasRef}></canvas>
    </div>
  );
}

export default Hearth;
