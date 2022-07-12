import { useState, useEffect } from "react";
import { fetchImages } from "../utils";

const Feed = ({ user }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchImages(setPhotos);
  }, []);
  return (
    <div>
      <h1>{user}</h1>
      {photos.map((item, i) => {
        return <Image key={i} author={item.author} url={item.download_url} />;
      })}
    </div>
  );
};

export default Feed;
