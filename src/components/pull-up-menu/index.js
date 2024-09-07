"use client";
import { useEffect, useRef, useState } from "react";
import { crimsonText } from "@/utils/fonts";
import useDragDetector from "@/components/hooks/drag-detector";
import Image from "next/image";

const PullUpMenu = () => {
  const [deltaTouchY] = useDragDetector();
  const [bottomPosition, setBottomPosition] = useState(1000);
  const [bottomLimit, setBottomLimit] = useState(1000);
  const [hasTransition, setHasTransition] = useState(false);
  const [ratio, setRatio] = useState(1);
  const menuRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calculatedRatio = window.innerHeight / window.screen.height;
      setRatio(calculatedRatio);
      setBottomLimit(menuRef?.current?.offsetHeight * calculatedRatio - 100);
    }
  }, []);

  useEffect(() => {
    const newBottom = bottomPosition + deltaTouchY * 3;
    if (newBottom > 0 && newBottom < bottomLimit) {
      setBottomPosition(newBottom);
    } else if (newBottom <= 0) {
      setBottomPosition(0);
    } else if (newBottom >= bottomLimit) {
      setBottomPosition(bottomLimit);
    }
  }, [deltaTouchY, bottomLimit]);

  useEffect(() => {
    if (hasTransition) {
      setTimeout(() => {
        setHasTransition(false);
      }, 500);
    }
  }, [hasTransition]);

  return (
    <div
      ref={menuRef}
      style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "80%",
        height: "65%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: bottomPosition,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          fontSize: 24,
          fontWeight: 600,
          flexDirection: "column",
          justifyContent: "space-around",
          height: "100%",
          transition: hasTransition ? "top 0.5s ease-in-out" : "none",
        }}
        className={crimsonText.className}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              border:
                bottomPosition !== bottomLimit || hasTransition
                  ? "none"
                  : "2px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 40,
            }}
            onClick={() => {
              setHasTransition(true);
              setBottomPosition(
                bottomPosition !== bottomLimit ? bottomLimit : 0
              );
            }}
          >
            <Image
              src={
                bottomPosition !== bottomLimit || hasTransition
                  ? "/angle-down.svg"
                  : "/angle-up.svg"
              }
              alt="angle-up"
              width={28}
              height={28}
            />
          </div>
          <p>MODELS</p>
        </div>

        <p>ABOUT</p>
        <p>APPLY</p>
        <p>NEWSLETTER</p>
      </div>
    </div>
  );
};

export default PullUpMenu;
