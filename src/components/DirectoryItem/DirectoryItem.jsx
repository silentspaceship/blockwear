import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItem.styles";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <h2>{title}</h2>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;
