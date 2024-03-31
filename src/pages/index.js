import FirstScreen from "@/screens/FirstScreen";
import SecondScreen from "@/screens/SecondScreen";

export default function Home({ currentSlide }) {
  return (
    <div>
      {currentSlide == 0 && <FirstScreen />}
      {currentSlide == 1 && <SecondScreen />}
    </div>
  );
}
