import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import HowHelp from "./components/HowHelp.js";
import HowHelp2 from "./components/HowHelp2.js";
import PhoneVerification from "./components/Buttontrial.js";
import TypesOfScams from "./components/TypesOfScams.js";
import LearningCorner from "./components/LearningCorner.js";
import { db } from "./config/firebaseConfig.js";

export default function App() {
  testFirebase();
  return (
    <>
      <Navbar />
      <Home />
      <HowHelp2 />
      <TypesOfScams />
      <LearningCorner />
    </>
  );
}

// export default App;

function testFirebase() {
  console.log("AKASH RUN");

  db.collection("cities")
    .doc("LA")
    .set({
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}
