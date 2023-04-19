import { DirectoryContainer } from "./Directory.styles";

import DirectoryItem from "../DirectoryItem/DirectoryItem";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://images.unsplash.com/photo-1635650804512-003e5ee6ccac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://images.pexels.com/photos/5416411/pexels-photo-5416411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

function Directory() {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
