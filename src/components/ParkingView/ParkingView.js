import React from 'react';

const parkignSchema = [
  [{parkId: 1, size: 2}, {size: 4}, {parkId: 2, size: 2}, {parkId: 3, size: 2}, {parkId: 4, size: 2}],
  [{size: 3}, {parkId: 5, size: 3}, {size: 2}, {parkId: 6, size: 3}, {parkId: 7, size: 4}, {parkId: 8, size: 2}],
  [{parkId: 9, size: 2}, {parkId: 10, size: 2}]
]

export default ({freePlaces = [], busyPlaces = []}) => (
  <div>
    {parkignSchema.map((row, key) => (
      <div key={key} style={{overflow: "hidden"}}>
        {row.map(({parkId, size}, innerKey) => {
          const parkingSize = `${size * 20}px`;
          let bgColor = 'yellow';
          if (parkId) {
            if (freePlaces.includes(parkId)) {
              bgColor = 'green';
            }
            if (busyPlaces.includes(parkId)) {
              bgColor = 'red';
            }
          }

          const divCellProps = {
            style: {
              border: '1px solid blue',
              background: bgColor,
              float: 'left',
              textAlign: 'center',
              width: parkingSize,
              height: parkingSize,
              lineHeight: parkingSize
            }
          };

          return (
            <div key={innerKey} {...divCellProps}>
              {parkId}
            </div>
          )
        })}
      </div>))}
  </div>
);
