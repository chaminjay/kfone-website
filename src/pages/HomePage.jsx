import React from 'react';
import { useHistory } from 'react-router-dom';
import BusinessPlansSection from '../layouts/BusinessPlansSection';
import DealsSection from '../layouts/DealsSection';
import EntertainmentSection from '../layouts/EntertainmentSection';
import Hero from '../layouts/Hero';
import QuickActionsSection from '../layouts/QuickActionsSection';
import UnlimitedPlansSection from '../layouts/UnlimitedPlansSection';
import GeneralTemplate from '../templates/GeneralTemplate';

const HomePage = () => {
  const history = useHistory();

  const handleLogin = () => {
    navigateToPortal();
  };

  const navigateToPortal = () => {
    history.push('/my-kfone');
  };

  return (
    <GeneralTemplate handleLogin={handleLogin}>
      <Hero />
      <QuickActionsSection />
      <DealsSection />
      <UnlimitedPlansSection />
      <BusinessPlansSection />
      <EntertainmentSection />
    </GeneralTemplate>
  );
};

export default HomePage;
