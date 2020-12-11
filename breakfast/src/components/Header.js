import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable';
import './Header.css'

const Header = ({ children, className = '',toggle, ...restProps }) => {
    
    const combinedClassNames = ['Expandable-trigger', className].join('');
    return <button
        className={combinedClassNames}
        onClick={toggle}
        {...restProps}>
        {children}
    </button>
}

export default Header;