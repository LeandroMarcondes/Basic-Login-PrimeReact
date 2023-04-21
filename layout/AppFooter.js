import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">            
            <span className="font-medium ml-2">SportMatch</span>
        </div>
    );
};

export default AppFooter;
