"use client"

import "@tensorflow/tfjs";
import { useEffect, useRef, useState } from "react";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";

export default function ASLRecognition() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState("Waiting...");

  useEffect(() => {
    const runHandpose = async () => {
      const net = await handpose.load();
      setInterval(() => {
        detect(net);
      }, 1000);
    };

    const detect = async (net: handpose.HandPose) => {
      if (
        webcamRef.current &&
        webcamRef.current.video?.readyState === 4
      ) {
        const video = webcamRef.current.video;
        if (video) {
          const hand = await net.estimateHands(video);
          if (hand.length > 0) {
        }
          const sign = classifySign();
          setPrediction(sign);
        }
      }
    };

    runHandpose();
  }, []);

  const classifySign = () => {
    // Mock classification: Replace with actual ASL model
    return "Hello"; // Example static output
  };

  return (
    <div className="flex flex-col items-center">
      <Webcam ref={webcamRef} style={{ width: 640, height: 480 }} />
      <canvas ref={canvasRef} style={{ position: "absolute" }} />
      <div className="text-xl font-bold mt-4">{prediction}</div>
    </div>
  );
}
