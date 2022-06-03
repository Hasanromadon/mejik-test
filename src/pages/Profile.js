import React from 'react';
import Layout from '../HOC/Layout';
import avatar from '../assets/avatar.jpg';
import { useSelector } from 'react-redux';
import HistoryCard from '../components/HistoryCard';
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Layout>
      <div className="container mt-6">
        <div className="flex justify-center items-center flex-col">
          <img className="block" width={60} src={avatar} alt="" />
          <p className="text-lg font-medium my-4">
            {user?.firstName} {user?.lastName}
          </p>
          <div className="grid grid-cols-2 gap-1 w-[40rem] mb-6">
            <p className="p-2 bg-slate-200 rounded text-center font-medium">
              <span>{user?.phoneNumber}</span>
            </p>
            <p className="p-2 bg-slate-200 rounded text-center font-medium">
              <span>{user?.email}</span>
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-6">
          <p className="font-medium mb-6 text-lg">My History</p>
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
