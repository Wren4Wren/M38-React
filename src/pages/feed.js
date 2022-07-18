import { useState, useEffect } from "react";
import { fetchImages } from "../utils/index";
import Image from "../components/image";
import Nav from "../components/navigation";

const Feed = ({ user, setter }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(setImages);
  }, []);
  return (
    <div>
      <Nav user={user} setter={setter} />
      <h1>{user}</h1>
      {images.map((item, i) => {
        return <Image key={i} author={item.author} url={item.download_url} />;
      })}
    </div>
  );
};

export default Feed;
