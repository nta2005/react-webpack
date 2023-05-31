import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom/client"; // nạp thư viện react-dom

// Tạo component App
function App() {
  return (
    <div>
      <h1>Hello Word!</h1>
    </div>
  );
}

// Render component App vào #root element
const container = document.getElementById("root");

// React@17
// ReactDOM.render(<App />, document.getElementById("root"));

// React@18
const root = ReactDOM.createRoot(container);
root.render(<App />);
