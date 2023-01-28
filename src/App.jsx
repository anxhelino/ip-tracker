import Header from "./components/Header";
import Card from "./components/Card";
import Map from "./components/Map";
import { IpProvider } from "./context/IpContext";

function App() {
  return (
    <IpProvider>
      <div className="w-full h-screen">
        <Header />
        <Card />
        <Map />
      </div>
    </IpProvider>
  );
}

export default App;
