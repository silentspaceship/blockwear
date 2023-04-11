import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItem.styles";

function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer to={`/shop/${title}`}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <h2>{title}</h2>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
