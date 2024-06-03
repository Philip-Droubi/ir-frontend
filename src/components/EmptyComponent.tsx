import Lottie from "react-lottie-player";

import lottieJson from "@/assets/json/empty.json";

export default function EmptyComponent({ loop = true }: { loop?: boolean }) {
  return (
    <Lottie
      className="m-auto"
      loop={loop}
      animationData={lottieJson}
      play
      style={{
        width: 250,
        height: 250,
      }}
    />
  );
}
