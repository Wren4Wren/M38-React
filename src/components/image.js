const Image = ({ author, url }) => {
  return (
    <div>
      <h2>{author}</h2>
      <img src={url} alt="Randomized from Lorem Picsum" />
    </div>
  );
};
export default Image;
