import Header from "./components/Header";
import ImageList from "./pages/ImageList";

/**
 * @description - App Root.
 * @returns {Node} - App Root.
 */
function App() {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden">
      <Header />
      <ImageList />
    </div>
  );
}

export default App;
