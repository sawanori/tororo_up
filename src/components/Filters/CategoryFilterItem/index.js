import React from 'react';
import { Checkbox } from 'components';
import { navigate, useLocation } from '@reach/router';
import { CategoryFilterItemWrapper } from './styles';
import queryString from 'query-string';

export function CategoryFilterItem({title}) {
  return <CategoryFilterItemWrapper >
    <Checkbox/>
    {title}
    </CategoryFilterItemWrapper >
}