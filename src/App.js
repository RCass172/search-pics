import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h2>Picture search</h2>
      <SearchBar />
      <ImageList />
      <ImageShow />
    </div>
  );
}

export default App;
