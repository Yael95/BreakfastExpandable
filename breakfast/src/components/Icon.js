import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable';
import './Icon.css'

const Icon = ({ className = '',expanded, ...restProps }) => {
    const combinedClassNames = ['Expandable-icon', className].join('');
    return (<span
        className={combinedClassNames}
        {...restProps}>
        {expanded ? '-' : '+'}
    </span>)
}

export default Icon;