import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable';
import './Icon.css'

const Icon = ({ className = '', ...restProps }) => {
    const { expanded } = useContext(ExpandableContext);
    const combinedClassNames = ['Expandable-icon', className].join('');
    return (<span
        className={combinedClassNames}
        {...restProps}>
        {expanded ? '-' : '+'}
    </span>)
}

export default Icon;