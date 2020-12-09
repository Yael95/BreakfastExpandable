import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable';

const Header = ({ children, className = '', ...restProps }) => {
    const { toggle } = useContext(ExpandableContext);
    const combinedClassNames = ['Expandable-trigger', className].join('');
    return <button
        className={combinedClassNames}
        onClick={toggle}
        {...restProps}>
        {children}
    </button>
}

export default Header;