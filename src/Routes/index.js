import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "./Home";
import MainPage from "../components/MainPage";
import BannerAnimation from "../pages/BannerAnimation";
import BackgroundParticles from "../components/BackgroundParticles";
import WindowWrapper from "../pages/WindowWrapper";
import ScratchCard from "../pages/ScratchCard";
import One from "../pages/One";
import HeartScratchCard from "../pages/HeartScratchCard";
import RosePetals from "../pages/RosePetals";
import Two from "../pages/Two";
import Stars from "../pages/Stars";
import HeartAnimation from "../pages/HeartAnimation";
import Three from "../pages/Three";
import ThreeHeartScratchCards from "../pages/ThreeHeartScratchCards";
import First from "../pages/First";
import Engagement from "../pages/Engagement";
import Ceremony from "../pages/Ceremony";
import Second from "../pages/Second";
import Third from "../pages/Third";
import Four from "../pages/Four";
import Zero from "../pages/zero";
import Five from "../pages/Five";
import Six from "../pages/Six";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/MainPage", element: <MainPage/> },
      { path: "/BannerAnimation", element: <BannerAnimation/> },
      { path: "/BackgroundParticles", element: <BackgroundParticles/> },
      { path: "/WindowWrapper", element: <WindowWrapper/>},
      { path: "/ScratchCard", element: <ScratchCard/>},
      { path: "/One", element: <One/>},
      { path: "/HeartScratchCard", element: <HeartScratchCard/>},
      { path: "/RosePetals", element: <RosePetals/>},
      { path: "/Two", element: <Two/>},
      { path: "/Stars", element: <Stars/>},
      { path: "/HeartAnimation", element: <HeartAnimation/>},
      { path: "/HeartAnimation", element: <Three/>},
      { path: "/ThreeHeartScratchCards", element: <ThreeHeartScratchCards/>},
      { path: "/First", element: <First/>},
      { path: "/Engagement", element: <Engagement/>},
      { path: "/Ceremony", element: <Ceremony/>},
      { path: "/Second" , element: <Second/>},
      { path: "/Third" , element: <Third/>},
      { path: "/Four" , element: <Four/>},
      { path: "/Five" , element: <Five/>},
      { path: "/Six" , element: <Six/>},
      { path: "/Zero" , element: <Zero/>},
    ]
  }]);
export default router;

