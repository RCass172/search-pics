import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log(term);
  };

  return (
    <div>
      <h2>Picture search</h2>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
      <ImageShow />
    </div>
  );
}

export default App;
