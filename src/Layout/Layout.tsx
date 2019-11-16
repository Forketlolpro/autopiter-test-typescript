import React from 'react';
import styles from './Layout.module.scss';

export interface LayoutProps {
    children: JSX.Element[] | JSX.Element | string;
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (<div className={styles.Layout}>{props.children}</div>);
}

export default Layout;