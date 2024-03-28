import { useState } from "react";
import { ImageGridContainer, Image } from "./ImageGrid.styles";

type ImageGridObj = {
  id: number;
  url: string;
};

interface ImageGridProps {
  images: ImageGridObj[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [images, setImages] = useState<ImageGridObj>([]);
  const [mainImage, setMainImage] = useState<{ string }>("");
  return (
    <ImageGridContainer>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index}`} />
      ))}
    </ImageGridContainer>
  );
};

export default ImageGrid;
