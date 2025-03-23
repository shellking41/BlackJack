import { useRef, useEffect } from "react";

function Clubs() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const handleResize = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = container.clientWidth * dpr;
    canvas.height = container.clientWidth * dpr;

    canvas.style.width = `${container.clientWidth}px`;
    canvas.style.height = `${container.clientWidth}px`;

    const ctx = canvas.getContext("2d");

    const scale = canvas.width / 200;
    const lineWith = 5;
    const strokeStyle = "white";

    const BottomTriangle = {
      A: {
        X: canvas.width / 2,
        Y: canvas.height - (80 * scale) / 1.5,
      },
      B: {
        X: canvas.width / 2 - (80 * scale) / 1.5,
        Y: canvas.height,
      },
      C: {
        X: canvas.width / 2 + (80 * scale) / 1.5,
        Y: canvas.height,
      },
    };

    const CenterDiamond = {
      A: {
        X: canvas.width / 2,
        Y: 0,
      },
      B: {
        X: canvas.width / 2 - 50 * scale,
        Y: 50 * scale,
      },
      C: {
        X: canvas.width / 2,
        Y: 100 * scale,
      },
      D: {
        X: canvas.width / 2 + 50 * scale,
        Y: 50 * scale,
      },
    };

    const OuterDiamond = {
      A: {
        X: canvas.width / 2 - 50 * scale,
        Y: 50 * scale,
      },
      B: {
        X: canvas.width / 2,
        Y: 100 * scale,
      },
      C: {
        X: canvas.width / 2 - 50 * scale,
        Y: 150 * scale,
      },
      D: {
        X: canvas.width / 2 - 100 * scale,
        Y: 100 * scale,
      },
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //BottomTriangle
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";

    ctx.moveTo(BottomTriangle.A.X, BottomTriangle.A.Y);
    ctx.lineTo(BottomTriangle.B.X, BottomTriangle.B.Y);
    ctx.lineTo(BottomTriangle.C.X, BottomTriangle.C.Y);

    ctx.fill();
    ctx.closePath();

    //CenterDiamond
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = lineWith;
    ctx.strokeStyle = strokeStyle;
    ctx.moveTo(CenterDiamond.A.X, CenterDiamond.A.Y);
    ctx.lineTo(CenterDiamond.B.X, CenterDiamond.B.Y);
    ctx.lineTo(CenterDiamond.C.X, CenterDiamond.C.Y);
    ctx.lineTo(CenterDiamond.D.X, CenterDiamond.D.Y);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //OuterDiamond1
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = lineWith;
    ctx.strokeStyle = strokeStyle;
    ctx.moveTo(OuterDiamond.A.X, OuterDiamond.A.Y);
    ctx.lineTo(OuterDiamond.B.X, OuterDiamond.B.Y);
    ctx.lineTo(OuterDiamond.C.X, OuterDiamond.C.Y);
    ctx.lineTo(OuterDiamond.D.X, OuterDiamond.D.Y);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //OuterDiamond2
    ctx.save();

    ctx.translate(canvas.width / 2, 0);
    ctx.scale(-1, 1);
    ctx.translate(-canvas.width / 2, 0);

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = lineWith;
    ctx.strokeStyle = strokeStyle;
    ctx.moveTo(OuterDiamond.A.X, OuterDiamond.A.Y);
    ctx.lineTo(OuterDiamond.B.X, OuterDiamond.B.Y);
    ctx.lineTo(OuterDiamond.C.X, OuterDiamond.C.Y);
    ctx.lineTo(OuterDiamond.D.X, OuterDiamond.D.Y);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

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
    <div ref={containerRef} style={{ width: "70%", height: "auto" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Clubs;
