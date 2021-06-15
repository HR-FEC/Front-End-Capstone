import React from 'react';
import RelatedItemsComp from './related_components/RelatedItemsComp';
import YourOutfitComp from './related_components/YourOutfitComp';

const RelatedItems = (props) => {
  // console.log('relatedItems fired');
  const {
    selectedItem,
    selectedRating,
    selectedDefault,
    handleClick,
    getRating,
    getDefault,
  } = props;

  return (
    <div className="related-outfit-wrapper">
      <div className="related-items-wrapper">
        <h3 className="related-items-title">Related Products</h3>
        <RelatedItemsComp
          selectedItem={selectedItem}
          // selectedRating={selectedRating}
          // selectedDefault={selectedDefault}
          handleClick={handleClick}
          getRating={getRating}
          getDefault={getDefault}
        />
      </div>
      <div className="your-outfit-wrapper">
        <h3 className="your-outfit-title">Your Outfit</h3>
        <YourOutfitComp
          selectedItem={selectedItem}
          selectedRating={selectedRating}
          selectedDefault={selectedDefault}
        />
      </div>
    </div>
  );
};

export default RelatedItems;
