import { DirectoryContainer } from "./Directory.styles";

import DirectoryItem from "../DirectoryItem/DirectoryItem";

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
