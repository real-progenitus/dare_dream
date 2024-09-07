"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { crimsonText } from "@/utils/fonts";
import PullUpMenu from "@/components/pull-up-menu";

const images = ["blonde.png", "brunette.png", "greenfield.png"];

export default function V2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1); // Track the next image to fade in
  const [fadeIn, setFadeIn] = useState(false); // Control fade-in effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(true); // Start fading in the next image

      setTimeout(() => {
        // After fade-in completes, update the current image and stop fading in
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(false); // Ensure that next image doesn't fade again
      }, 1000); // 1 second fade-in time
    }, 3500); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        userSelect: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{ fontSize: 50, marginTop: 30 }}
            className={crimsonText.className}
          >
            DAREDREAM
          </h1>
          <h2
            style={{
              fontSize: 18,
              display: "flex",
              justifyContent: "center",
              marginTop: -10,
            }}
            className={crimsonText.className}
          >
            AGENCY
          </h2>
        </div>
        <p
          style={{
            fontSize: 11,
            marginBottom: 10,
            fontWeight: 200,
            color: "#CCC",
          }}
        >
          Copyright © 2024 DareDream Agency - Unlimited
        </p>
      </div>
      <PullUpMenu />

      {/* Current image */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 1,
        }}
      >
        <Image
          src={`/landing/${images[currentImageIndex]}`}
          alt="Current image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          unoptimized
        />
      </div>

      {/* Next image (fades in) */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: fadeIn ? 1 : 0, // Fade in the next image
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {fadeIn && (
          <Image
            src={`/landing/${images[nextImageIndex]}`}
            alt="Next image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            unoptimized
          />
        )}
      </div>
    </div>
  );
}
