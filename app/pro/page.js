"use client";

import React, { useState } from 'react';
import { 
  Home, 
  PlusCircle, 
  RefreshCcw, 
  CheckSquare, 
  User, 
  Bell, 
  Eye, 
  Edit3,
  Search,
  ChevronRight,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${
      active ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-600'
    }`}
  >
    <Icon size={20} strokeWidth={active ? 2.5 : 2} />
    <span className="font-medium text-sm">{label}</span>
  </motion.div>
);

const StatCard = ({ title, value, percentage, color, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start flex-1"
  >
    <div>
      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{title}</p>
      <div className="flex items-baseline space-x-2 mt-2">
        <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
        {percentage && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-600">
            {percentage} this month
          </span>
        )}
        {title.includes("PENDING") && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-orange-100 text-orange-600">
            Action Required
          </span>
        )}
      </div>
    </div>
    <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-gray-300`}>
      <Icon size={32} />
    </div>
  </motion.div>
);

const QuickActionCard = ({ title, desc, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1 cursor-pointer group"
  >
    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
      <Icon size={24} className="text-orange-600 group-hover:text-white transition-colors" />
    </div>
    <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
  </motion.div>
);

// --- Main Page ---

export default function DeviceTraceDashboard() {
  const activities = [
    { name: 'iPhone 14 Pro', imei: '...8932', type: 'Acquisition', date: 'Oct 24, 2023', time: '10:23 AM', status: 'Completed', statusColor: 'bg-green-100 text-green-600' },
    { name: 'Samsung Galaxy S23', imei: '...4421', type: 'Transfer Out', date: 'Oct 23, 2023', time: '02:15 PM', status: 'Pending', statusColor: 'bg-orange-100 text-orange-600' },
    { name: 'Tecno Camon 20', imei: '...1189', type: 'Acquisition', date: 'Oct 22, 2023', time: '09:45 AM', status: 'Completed', statusColor: 'bg-green-100 text-green-600' },
    { name: 'Infinix Note 30', imei: '...9928', type: 'Check Request', date: 'Oct 21, 2023', time: '04:12 PM', status: 'Logged', statusColor: 'bg-blue-100 text-blue-600' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-10 px-2">
            <div className="bg-orange-500 p-1.5 rounded-lg text-white">
              <RefreshCcw size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">DeviceTrace</span>
          </div>
          
          <nav className="space-y-2">
            <SidebarItem icon={Home} label="Home" active />
            <SidebarItem icon={PlusCircle} label="Acquire Device" />
            <SidebarItem icon={RefreshCcw} label="Transfer Device" />
            <SidebarItem icon={CheckSquare} label="Check Device" />
            <SidebarItem icon={User} label="Profile" />
          </nav>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Chinedu" alt="avatar" />
          </div>
          <div>
            <p className="text-sm font-bold">LALA TECH</p>
            <p className="text-[10px] text-gray-500 uppercase font-bold">Verified Seller</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="text-xs text-gray-400 font-medium">
            Dashboard <span className="mx-2">›</span> <span className="text-gray-800">Overview</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-full border border-gray-100 text-xs font-bold text-gray-500 shadow-sm">
              Today: <span className="text-gray-800 ml-1">Oct 24, 2023</span>
            </div>
            <button className="relative p-2 text-gray-400 hover:text-orange-500 transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-1">Welcome back, Chinedu</h1>
          <p className="text-gray-400 text-sm">Here is an overview of your inventory and recent activities.</p>
        </section>

        {/* STATS GRID */}
        <div className="flex gap-6 mb-10">
          <StatCard title="Devices Acquired" value="124" percentage="+12%" color="bg-gray-100" icon={Smartphone} />
          <StatCard title="Devices Transferred" value="89" percentage="+5%" color="bg-gray-100" icon={RefreshCcw} />
          <StatCard title="Pending Transfers" value="3" color="bg-orange-100" icon={CheckSquare} />
        </div>

        {/* QUICK ACTIONS */}
        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          <div className="flex gap-6">
            <QuickActionCard title="Acquire Device" desc="Register new inventory by scanning or entering IMEI." icon={PlusCircle} />
            <QuickActionCard title="Transfer Device" desc="Initiate a transfer to a buyer or another verified seller." icon={RefreshCcw} />
            <QuickActionCard title="Check Device" desc="Verify status and history of any device on the network." icon={CheckSquare} />
          </div>
        </div>

        {/* RECENT ACTIVITY TABLE */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <button className="text-orange-500 text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase font-bold text-gray-400 border-b border-gray-50">
                  <th className="px-6 py-4">Device Details</th>
                  <th className="px-6 py-4">Transaction Type</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {activities.map((item, idx) => (
                  <motion.tr 
                    key={idx} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                          <Smartphone size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-bold">{item.name}</p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-tighter">IMEI: {item.imei}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{item.type}</td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium">{item.date}</p>
                      <p className="text-[10px] text-gray-400">{item.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center w-fit ${item.statusColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-400">
                      <div className="flex justify-end space-x-2">
                        {item.status === 'Pending' ? (
                          <button className="p-1 hover:text-orange-500"><Edit3 size={18} /></button>
                        ) : (
                          <button className="p-1 hover:text-blue-500"><Eye size={18} /></button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}