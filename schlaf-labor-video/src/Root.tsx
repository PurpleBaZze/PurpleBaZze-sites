import "./index.css";
import { Composition } from "remotion";
import { Main } from "./Main";
import { loadFont } from "@remotion/google-fonts/Inter";

loadFont();

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TikTokVideo"
        component={Main}
        durationInFrames={31 * 30} // 31 seconds at 30fps
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
