import React from 'react';
import Header from './Header/Header';
import Layout from './Layout/Layout';
import Main from './Main/Main';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <Layout>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
