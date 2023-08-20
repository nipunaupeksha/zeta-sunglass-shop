import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "prada",
    imageUrl:
      "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0245_1_2.jpg",
    route: "shop/prada",
  },
  {
    id: 2,
    title: "rayban",
    imageUrl:
      "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0210_1.jpg",
    route: "shop/rayban",
  },
  {
    id: 3,
    title: "polarsun",
    imageUrl:
      "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/a/_/a_19.jpg",
    route: "shop/polarsun",
  },
  {
    id: 4,
    title: "vogue",
    imageUrl:
      "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/v/o/vogue-vo4136s-752-8e.jpg",
    route: "shop/vogue",
  },
  {
    id: 5,
    title: "vintage",
    imageUrl:
      "https://shop.visioncare.lk/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0606.jpg",
    route: "shop/vintage",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
