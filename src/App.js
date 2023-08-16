import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [imgs, setImgs] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImgs(result);
  };

  return (
    <div>
      <h2>Picture search</h2>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={imgs} />
    </div>
  );
}

export default App;
