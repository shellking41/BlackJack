import { useRef, useEffect } from "react";

function Hearth() {
  const CanvasRef = useRef(null);
  const containerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const handleResize = () => {
    const canvas = CanvasRef.current;
    const container = containerRef.current;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = container.clientWidth * dpr;
    canvas.height = container.clientWidth * dpr;

    canvas.style.width = `${container.clientWidth}px`;
    canvas.style.height = `${container.clientWidth}px`;
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
    <div ref={containerRef} style={{ width: "80%", height: "auto" }}>
      <canvas ref={CanvasRef}></canvas>
    </div>
  );
}

export default Hearth;
