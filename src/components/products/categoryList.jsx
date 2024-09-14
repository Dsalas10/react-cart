import React from 'react';

const CategoryList = ({ categoryCounts, onCategoryClick }) => (
  <div className="content">
    <h3 className="title-categoria">Categoría</h3>
    <div className="is-divider"></div>
    <div className="content-items">
      <ul>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li
            key={category}
            className="content-item-li"
            onClick={() => onCategoryClick(category)}
          >
            {category} <span>({count})</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CategoryList;