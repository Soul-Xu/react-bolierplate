import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicLayout from '../../layout/BasicLayout';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/emergency-plan');
  }, [])

  return (
    <div>
      <BasicLayout>
        <h2>Home Page</h2>
        {/* 页面内容 */}
      </BasicLayout>
    </div>
  );
};

export default Home;