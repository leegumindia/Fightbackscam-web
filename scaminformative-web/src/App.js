import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import GameBanner from "./components/GameBanner.js";
import HowHelp from "./components/HowHelp.js";
import HowHelp2 from "./components/HowHelp2.js";
import PhoneVerification from "./components/Buttontrial.js";
import TypesOfScams from "./components/TypesOfScams.js";
import LearningCorner from "./components/LearningCorner.js";
import { analytics, db } from "./config/firebaseConfig.js";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getGoogleAnalyticsClientId } from "firebase/analytics";

/**
 * @mode -> 0: Whatsapp, 1: SMS, 2: Call
 * @status -> -1: Unsubscribed (Off), 0: All Alerts Active, 1: Launch Updates Only, 2: Scam Alerts Only, 3: (1+2)
 */
class Subscriber {
  constructor(country, whatsapp, mode, status, createdAt, updatedAt) {
    this.country = country;
    this.whatsapp = whatsapp;
    this.mode = mode;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  toString() {
    return (
      "+" +
      this.country +
      this.whatsapp +
      " (" +
      (this.mode == 0 ? "WHATSAPP" : this.mode == 1 ? "SMS" : "CALL") +
      ")"
    );
  }
}

// Firestore data converter
const subscriberConverter = {
  toFirestore: (subscriber) => {
    return {
      country: subscriber.country,
      whatsapp: subscriber.whatsapp,
      mode: subscriber.mode,
      status: subscriber.status,
      createdAt: subscriber.createdAt,
      updatedAt: subscriber.updatedAt,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Subscriber(
      data.country,
      data.whatsapp,
      data.mode,
      data.status,
      data.createdAt,
      data.updatedAt
    );
  },
};

export default function App() {
  testFirebase();
  return (
    <>
      {console.log("AKASH RUN outer html")}
      <Navbar />
      <Home />
      <GameBanner />
      <HowHelp2 />
      <TypesOfScams />
      <LearningCorner />
    </>
  );
}

// export default App;

async function testFirebase() {
  console.log("AKASH RUN testFirebase");
  console.log("AKASH RUN: " + new Date().now);
  console.log("AKASH RUN: " + new Date().toISOString());
  console.log("AKASH RUN: " + new Date().toLocaleString());
  console.log("AKASH RUN: " + new Subscriber(91, "12345", 0).toString());
  console.log("AKASH RUN: " + new Subscriber(91, "12345", 1).toString());
  console.log("AKASH RUN: " + new Subscriber(91, "12345", 2).toString());

  const timestamp = new Date().toISOString();
  const docRef = await addDoc(
    collection(db, "cities").withConverter(subscriberConverter),
    new Subscriber(91, "12345", 0, 0, timestamp, timestamp)
  );
  console.log("Document written with ID: ", docRef.id);

  // await setDoc(
  //   doc(db, "cities", "LA"),
  //   {
  //     name: "Los Angeles",
  //     state: "CAA",
  //     country: "USA",
  //     timestamp: new Date().toLocaleString(),
  //   },
  //   {
  //     merge: true,
  //   }
  // );
}
