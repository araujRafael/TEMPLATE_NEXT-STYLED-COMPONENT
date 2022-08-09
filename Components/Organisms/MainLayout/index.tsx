import React from 'react';
import { PageLayout } from '../../Atoms/PageLayout';
import HeaderNav from '../../Molecules/HeaderNav';

// import { Container } from './styles';

const MainLayout: React.FC = ({
  children
}) => {
  return (
    <PageLayout className='center-col' >
      <HeaderNav />
      {children}
    </PageLayout>
  );
}

export default MainLayout;