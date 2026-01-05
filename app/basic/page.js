"use client";

import React from 'react';
import Head from 'next/head';
import { 
  Home, Tablet, CheckCircle, Bell, User, LogOut, 
  Search, Settings, MoreVertical, Plus, ShieldCheck, 
  Smartphone, Monitor, AlertCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Sub-components ---

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
      active ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-500 hover:bg-gray-100'
    }`}
  >
    <Icon size={20} />
    <span className="text-sm">{label}</span>
  </motion.div>
);

const StatCard = ({ icon: Icon, label, value, badge, badgeColor }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex-1"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon size={24} />
      </div>
      {badge && (
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      )}
    </div>
    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{label}</p>
    <h3 className="text-3xl font-bold mt-1">{value}</h3>
  </motion.div>
);

const ActivityItem = ({ title, desc, time, type }) => {
  const colors = {
    info: 'bg-blue-100 text-blue-600',
    success: 'bg-green-100 text-green-600',
    warning: 'bg-orange-100 text-orange-600'
  };
  return (
    <div className="flex space-x-4 py-4 border-b border-gray-50 last:border-0">
      <div className={`p-2 h-fit rounded-full ${colors[type]}`}>
        {type === 'info' && <AlertCircle size={14} />}
        {type === 'success' && <CheckCircle size={14} />}
        {type === 'warning' && <ShieldCheck size={14} />}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
        <span className="text-[10px] text-gray-400 mt-2 block">{time}</span>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function DeviceTraceDashboard() {
  const devices = [
    { name: 'iPhone 13 Pro', type: 'Mobile Phone', id: '3582...1902', status: 'Active', icon: <Smartphone size={16} /> },
    { name: 'MacBook Air M2', type: 'Laptop', id: 'FVX...92JK', status: 'Active', icon: <Monitor size={16} /> },
    { name: 'Samsung Tab S8', type: 'Tablet', id: 'R52...X22L', status: 'Pending', icon: <Tablet size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans text-slate-900">
      <Head>
        <title>DeviceTrace | Secure & Track</title>
      </Head>

      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col p-6 sticky h-screen top-0">
        <div className="flex items-center space-x-2 mb-10 px-2">
          <div className="bg-orange-500 p-1.5 rounded-lg text-white">
            <ShieldCheck size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">DeviceTrace</span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={Home} label="Home" active />
          <SidebarItem icon={Smartphone} label="My Devices" />
          <SidebarItem icon={Search} label="Check Device" />
          <SidebarItem icon={Bell} label="Notifications" />
          <SidebarItem icon={User} label="Profile" />
        </nav>

        <div className="pt-6 border-t border-gray-100">
          <SidebarItem icon={LogOut} label="Log Out" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search devices, IMEIs, or help..."
              className="w-full bg-gray-100 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell size={20} className="text-gray-600 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <Settings size={20} className="text-gray-600 cursor-pointer" />
            <div className="flex items-center space-x-3 border-l pl-6">
              <div className="text-right">
                <p className="text-sm font-bold">Tunde A.</p>
                <p className="text-[10px] text-gray-400 uppercase font-medium">General User</p>
              </div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde" 
                alt="Avatar" 
                className="w-10 h-10 rounded-full bg-orange-100"
              />
            </div>
          </div>
        </header>

        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Tunde</h1>
        <p className="text-gray-500 text-sm mt-1">Here is your device overview for today.</p>

        {/* Top Grid */}
        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-8 grid grid-cols-2 gap-6">
            <StatCard 
              icon={Smartphone} 
              label="Total Registered Devices" 
              value="5" 
              badge="+1 New" 
              badgeColor="bg-green-100 text-green-600" 
            />
            <StatCard 
              icon={AlertCircle} 
              label="Devices Flagged" 
              value="0" 
              badge="No Issues" 
              badgeColor="bg-gray-100 text-gray-500" 
            />
            
            {/* Register Banner */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="col-span-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white relative overflow-hidden flex items-center justify-between cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold">Register a New Device</h3>
                <p className="text-orange-100 text-xs mt-1">Secure your gadgets by adding them to the national registry database.</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full relative z-10">
                <Plus size={24} />
              </div>
              {/* Abstract Pattern background */}
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                 <ShieldCheck size={180} className="-mr-10 -mt-10" />
              </div>
            </motion.div>
          </div>

          {/* Status Check Card */}
          <div className="col-span-4 bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="bg-orange-50 p-3 rounded-full text-orange-600 mb-4">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-lg">Check Device Status</h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Buying a used phone? Verify its history and ownership status instantly.
            </p>
            <button className="mt-auto w-full py-3 border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
              Verify Now
            </button>
          </div>
        </div>

        {/* Lower Grid */}
        <div className="grid grid-cols-12 gap-8 mt-10">
          {/* Table */}
          <div className="col-span-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-800">My Recent Devices</h2>
              <button className="text-orange-600 text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                    <th className="px-6 py-4">Device Name</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Serial / IMEI</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {devices.map((device, idx) => (
                    <motion.tr 
                      key={idx} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gray-100 p-2 rounded text-gray-500">{device.icon}</div>
                          <span className="text-sm font-semibold">{device.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">{device.type}</td>
                      <td className="px-6 py-4 text-xs font-mono text-gray-400">{device.id}</td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center space-x-1.5 px-2 py-1 rounded-full w-fit ${
                          device.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${device.status === 'Active' ? 'bg-green-600' : 'bg-orange-600'}`} />
                          <span className="text-[10px] font-bold uppercase">{device.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <MoreVertical size={16} className="text-gray-400 cursor-pointer" />
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="col-span-4">
            <h2 className="font-bold text-gray-800 mb-4">Activity</h2>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <ActivityItem 
                type="info"
                title="System Maintenance"
                desc="Scheduled maintenance on Friday, 10 PM to 2 AM WAT."
                time="Just now"
              />
              <ActivityItem 
                type="success"
                title="Registration Approved"
                desc="Your Samsung Tab S8 has been successfully registered."
                time="2 hours ago"
              />
              <ActivityItem 
                type="warning"
                title="Device Check Completed"
                desc="You verified IMEI 3582...1902. Status: Clean."
                time="Yesterday"
              />
              <button className="w-full text-center text-[10px] font-bold uppercase text-gray-400 mt-6 tracking-widest hover:text-orange-600 transition-colors">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}