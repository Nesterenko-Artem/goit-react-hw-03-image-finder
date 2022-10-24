// import React, { Component } from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export  const ImageGallery = ({ items }) => {
   return (
      <ul className="imageGallery">
         {items.map((item) => (
            <li className="imageGalleryItem" key={item.id}>
               <img className="imageGalleryItem-image" src={item.webformatURL} alt={item.tags} />
            </li>
         ))}
      </ul>
   );
}

