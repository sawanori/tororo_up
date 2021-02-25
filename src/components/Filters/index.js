import React,{useContext} from 'react';
import ProductContext from 'context/ProductContext';
import {CategoryFilterItem} from './CategoryFilterItem'
import { FiltersWrapper } from './styles';
export function Filters() {
  const { collections } = useContext(ProductContext);
  return (
    <FiltersWrapper>
      <strong>
        カテゴリ
      </strong>
      {collections.map((collection) => (
        <CategoryFilterItem 
        title={collection.title}
        key={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  )
}