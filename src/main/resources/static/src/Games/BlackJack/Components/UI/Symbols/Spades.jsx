import {useRef, useEffect} from "react";

function Spades() {
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const scale = canvas.width / 200;

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

        const UpsideDownHearth = {
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

        //BottomTriangle
        ctx.beginPath();
        ctx.fillStyle = "rgb(0, 0, 0)";

        ctx.moveTo(BottomTriangle.A.X, BottomTriangle.A.Y);
        ctx.lineTo(BottomTriangle.B.X, BottomTriangle.B.Y);
        ctx.lineTo(BottomTriangle.C.X, BottomTriangle.C.Y);

        ctx.fill();
        ctx.closePath();

        //UpsideDownHearth1
        ctx.beginPath();
        ctx.fillStyle = "rgb(0, 0, 0)";

        ctx.moveTo(UpsideDownHearth.A1.X, UpsideDownHearth.A1.Y);
        ctx.lineTo(UpsideDownHearth.B1.X, UpsideDownHearth.B1.Y);
        ctx.lineTo(UpsideDownHearth.C1.X, UpsideDownHearth.C1.Y);
        ctx.lineTo(UpsideDownHearth.D1.X, UpsideDownHearth.D1.Y);

        ctx.fill();
        ctx.closePath();

        //UpsideDownHearth2
        ctx.save();

        ctx.translate(canvas.width / 2, 0);
        ctx.scale(-1, 1);
        ctx.translate(-canvas.width / 2, 0);

        ctx.beginPath();
        ctx.fillStyle = "rgb(0, 0, 0)";

        ctx.moveTo(UpsideDownHearth.A1.X, UpsideDownHearth.A1.Y);
        ctx.lineTo(UpsideDownHearth.B1.X, UpsideDownHearth.B1.Y);
        ctx.lineTo(UpsideDownHearth.C1.X, UpsideDownHearth.C1.Y);
        ctx.lineTo(UpsideDownHearth.D1.X, UpsideDownHearth.D1.Y);

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
        <div ref={containerRef} style={{width: "70%", height: "auto"}}>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Spades;
