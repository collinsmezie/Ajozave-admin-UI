import React from 'react';
import { HomeIcon, PlusCircleIcon, WalletIcon, UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navItems = [
    { name: 'Home', icon: <HomeIcon className="h-6 w-6 text-purple-400" />, path: '/dashboard' },
    { name: 'Sessions', icon: <EyeIcon className="h-6 w-6 text-purple-300" />, path: '/sessions' },
    { name: 'Create Session', icon: <PlusCircleIcon className="h-16 w-16 text-purple-600 transform transition duration-200 hover:scale-110" />, path: '/create-session' },
    { name: 'Wallet', icon: <WalletIcon className="h-6 w-6 text-purple-300" />, path: '/wallet' },
    { name: 'Menu', icon: <UserCircleIcon className="h-6 w-6 text-purple-300" />, path: '/menu' },
  ];

  return (
    <div className="sticky bottom-0 bg-white shadow-lg flex justify-between items-center py-3 px-8 w-full">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${item.name === 'Create Session' ? 'w-1/5 transform translate-y-[-10px]' : 'w-1/5'}`}
          onClick={() => handleNavigation(item.path)}
        >
          {item.icon}
          {item.name !== 'Create Session' && (
            <span className="mt-1 text-xs text-gray-500">{item.name}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
