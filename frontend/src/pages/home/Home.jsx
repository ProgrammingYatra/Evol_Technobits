import React from 'react'
import Data from '../../data/Data'


const Home = () => {
  return (
    <div>
      {Data.map((image) => (
        <div key={image.id} className="card col-3">
          <img src={image.url} alt={image.title} style={{ width: '18rem'}}/>
          <div className="card-body">
            <h5 className="card-title">{image.title}</h5>
            <p className="card-text">{image.likes}</p>
            <p className="card-text">{image.uploadedTime}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
