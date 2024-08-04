import React, { useState } from 'react';

const MoveDetails = ({ items }) => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleCategory = (category) => {
        setExpandedCategory((prev) => (prev === category ? null : category));
    };

    return (
        <div className="inventory-details">
            
            <h3>Inventory Details</h3>
            <br />
            {items.map((room) => (
                <div key={room} className="category">

                    <div className="category-header" onClick={() => toggleCategory(room)}>
                        <h3>{room.displayName}</h3>
                        <button>{expandedCategory === room ? 'Hide' : 'Show'}</button>
                    </div>
                    {expandedCategory === room && (
                        <ul className="category-items">
                            {room.category.map((item, index) => (
                                <li key={index}>{item.displayName}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};
export default MoveDetails;
