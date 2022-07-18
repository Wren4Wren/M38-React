const Image = ({ author, url }) => {
  return (
    <div>
      <h2>{author}</h2>
      <img src={url} alt={`Randomised grab from Author ${author}`} />
    </div>
  );
};

export default Image;
