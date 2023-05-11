import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from './ImageCard';

const RecentlyAdded = () => {
  const images = useSelector((state) => state.images);

  // Sort the images by date
  const sortedImages = images.slice().sort((a, b) => {
    return new Date(b.uploadTime) - new Date(a.uploadTime);
  });

  return (
    <div className="row">
      {sortedImages.map((image) => (
        <div className="col-md-4 mb-4" key={image.id}>
          <ImageCard image={image} />
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;