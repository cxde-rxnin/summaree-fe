import React from 'react';
import MeetingForm from '../components/MeetingForm';

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center">Summaree</h1>
      <MeetingForm />
    </div>
  );
};

export default Home;