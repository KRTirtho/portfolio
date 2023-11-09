import { useState, useEffect } from "react";

type RGBColorType = [r: number, g: number, b: number];

export function useImageColor(image?: string | null): RGBColorType {
  const [color, setColor] = useState<RGBColorType>([255, 255, 255]);
  useEffect(() => {
    if (!image) return;
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = image;
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context?.drawImage(img, 0, 0);
      const data = context?.getImageData(0, 0, 1, 1).data;
      if (data) {
        setColor(Array.from(data.slice(0, 3)) as RGBColorType);
      }
    };
  }, [image]);
  return color;
}
