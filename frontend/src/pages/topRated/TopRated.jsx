import ImageCard from './ImageCard';

function TopRated({ images }) {
  const sortedImages = [...images].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      <h1>Top Rated</h1>
      {sortedImages.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default TopRated;