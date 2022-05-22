import Card from '../src/component/Card';
import './App.css';

function App() {
  let data = [
    {
      date: "28/10/2020",
      logo: "https://pngimg.com/uploads/amazon/small/amazon_PNG27.png",
      heading: "Amazon Gift",
      subheading: "Pay",
      devices: "Desktop",
      color: "orange",
    },
    {
      date: "17 Sep 2020",
      logo: "https://pngimg.com/uploads/apple_logo/small/apple_logo_PNG19666.png",
      heading: "Apple Gift",
      subheading: "Payment",
      devices: "MacOS",
      color: "gray",
    },
  ];

  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;