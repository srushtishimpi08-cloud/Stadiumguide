/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  MapPin, 
  Search, 
  User, 
  Mic, 
  Send, 
  Plus, 
  Minus, 
  MessageSquare,
  ChevronRight,
  Coffee,
  Accessibility,
  Map as MapIcon,
  Navigation,
  Info,
  Clock,
  Heart,
  Filter
} from 'lucide-react';
import { useState } from 'react';
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

function MapView() {
  return (
    <div className="relative flex-1 border-r border-slate-300 bg-slate-200 overflow-hidden">
      {/* Simulated Stadium Map */}
      <div className="absolute inset-0 flex items-center justify-center bg-emerald-100/50">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full border-[20px] border-emerald-600 bg-emerald-500 shadow-2xl transition-all"
        >
          {/* Stands */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-blue-900 px-4 py-1 text-[10px] md:text-xs font-bold text-white shadow-sm">
            NORTH STAND
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded bg-blue-900 px-4 py-1 text-[10px] md:text-xs font-bold text-white shadow-sm">
            SOUTH STAND
          </div>

          {/* Gates */}
          <div className="absolute top-20 -left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-xs font-bold text-white shadow-lg">G7</div>
          <div className="absolute bottom-20 -right-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-xs font-bold text-white shadow-lg">G3</div>

          {/* Highlights */}
          <div className="absolute top-1/3 left-1/4">
            <div className="h-4 w-4 animate-pulse rounded-full bg-red-500 ring-4 ring-red-500/30"></div>
            <div className="mt-1 rounded border border-slate-200 bg-white px-2 py-1 text-[10px] font-bold shadow-md">
              Vada Pav Stall A
            </div>
          </div>

          {/* Pitch Area Indicator */}
          <div className="absolute inset-20 rounded-full border-2 border-emerald-400/30 bg-emerald-400/10 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Live Alert Overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-center px-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center space-x-4 rounded-xl bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md border-l-4 border-amber-500 max-w-lg w-full"
        >
          <div className="h-3 w-3 animate-pulse rounded-full bg-red-600"></div>
          <div className="text-sm font-bold text-slate-800">
            <span className="block text-[10px] uppercase tracking-wider text-amber-600 font-black mb-0.5">Real-Time Alert</span>
            WICKET! Virat Kohli caught by Root. IND 145/3 (32.2 Over)
          </div>
        </motion.div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-600 shadow-lg hover:text-blue-600 transition-all hover:scale-110 active:scale-95">
          <Plus className="h-6 w-6" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-600 shadow-lg hover:text-blue-600 transition-all hover:scale-110 active:scale-95">
          <Minus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

function AmenitiesPage() {
  const categories = ["Safety", "Sanitation", "Medical", "Lost & Found"];
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 overflow-y-auto bg-slate-50 p-6 custom-scrollbar"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h2 className="text-2xl font-black text-blue-900 tracking-tight">Stadium Amenities</h2>
          <p className="text-slate-500 text-sm mt-1">Easily find facilities near your current stand.</p>
        </header>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs font-bold text-slate-600 whitespace-nowrap hover:bg-blue-50 hover:text-blue-700 transition-colors">
              {cat}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Restroom (Male)", loc: "Stand C, Gate 7", dist: "45m", icon: Accessibility, color: "blue" },
            { name: "Restroom (Female)", loc: "Stand C, Gate 8", dist: "60m", icon: Accessibility, color: "pink" },
            { name: "Medical Station 2", loc: "Lower Tier, Block B-4", dist: "120m", icon: Plus, color: "red" },
            { name: "Drinking Water", loc: "Concourse, Level 1", dist: "30m", icon: Coffee, color: "cyan" },
            { name: "Lost & Found", loc: "Main Entrance, Gate 1", dist: "450m", icon: Info, color: "amber" },
            { name: "Police Station", loc: "Gate 4, Ground Floor", dist: "200m", icon: MapPin, color: "slate" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4 }}
              className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <div className="flex space-x-4">
                  <div className={`p-3 rounded-xl bg-${item.color}-50 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.loc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider">{item.dist}</span>
                  <p className="text-[9px] text-slate-400 mt-1 font-bold">EST: 2 MIN</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FoodPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 overflow-y-auto bg-slate-50 p-6 custom-scrollbar"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-black text-blue-900 tracking-tight text-white-shadow">Food & Beverages</h2>
            <p className="text-slate-500 text-sm mt-1">Pre-order to skip the halftime rush.</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors">
            <Clock size={16} />
            <span>MY ORDERS</span>
          </button>
        </header>

        {/* Featured Items */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Popular Right Now</h3>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              { name: "Spicy Vada Pav", price: "₹60", time: "5m", img: "VP" },
              { name: "Cutting Chai", price: "₹30", time: "2m", img: "CH" },
              { name: "Classic Popcorn", price: "₹120", time: "3m", img: "PC" },
              { name: "Cold Brew Coffee", price: "₹180", time: "4m", img: "CB" },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[180px] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-emerald-500 cursor-pointer">
                <div className="w-16 h-16 bg-slate-100 rounded-xl mb-3 flex items-center justify-center text-slate-400 font-black text-xl">{item.img}</div>
                <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-700 font-black text-sm">{item.price}</span>
                  <div className="flex items-center text-[10px] font-bold text-slate-400">
                    <Clock size={12} className="mr-1" />
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">All Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Snacks", "Meals", "Drinks", "Desserts"].map((cat) => (
              <button key={cat} className="h-24 bg-white rounded-2xl border border-slate-100 flex flex-col items-center justify-center space-y-2 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-slate-700">
                <Coffee size={24} className="text-blue-500" />
                <span className="text-xs uppercase tracking-widest">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Components ---

function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen w-full items-center justify-center bg-blue-900 p-6 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <div className="rounded-2xl bg-emerald-500 p-4 mb-6 shadow-lg shadow-emerald-200">
            <MapPin className="h-10 w-10 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight">StadiumGuide</h1>
          <p className="text-slate-500 mt-2 font-medium">Your professional companion for every match.</p>
        </div>

        <div className="mt-10 space-y-4">
          <button 
            onClick={onLogin}
            className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-slate-100 py-4 px-6 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:border-blue-200 transition-all group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <button 
            onClick={onLogin}
            className="w-full bg-blue-900 text-white py-4 px-6 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            Log In
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 font-medium">
          By continuing, you agree to our <span className="text-blue-600 underline cursor-pointer">Terms</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
        </p>
      </motion.div>
    </motion.div>
  );
}

// --- Main App ---

export default function App() {
  const location = useLocation();
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleLogin = () => {
    // Simulating a login
    setUser({ name: "John Doe" });
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen w-full flex-col bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Header */}
      <header className="z-20 flex h-16 items-center justify-between bg-blue-900 px-6 text-white shadow-lg border-b border-blue-800">
        <div className="flex items-center space-x-3">
          <Link to="/" className="rounded-lg bg-emerald-500 p-2 hover:scale-105 transition-transform active:scale-95">
            <MapPin className="h-6 w-6 text-white" strokeWidth={2} />
          </Link>
          <div>
            <h1 className="text-xl font-bold tracking-tight leading-none">StadiumGuide</h1>
            <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest mt-1">Eden Gardens, Kolkata</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 bg-blue-950/50 rounded-xl p-1 border border-blue-800">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${isActive ? 'bg-white text-blue-900 shadow-md' : 'text-slate-300 hover:text-white hover:bg-blue-800'}`}
          >
            <MapIcon size={14} />
            <span>LIVE MAP</span>
          </NavLink>
          <NavLink 
            to="/amenities" 
            className={({ isActive }) => `flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${isActive ? 'bg-white text-blue-900 shadow-md' : 'text-slate-300 hover:text-white hover:bg-blue-800'}`}
          >
            <Accessibility size={14} />
            <span>AMENITIES</span>
          </NavLink>
          <NavLink 
            to="/food" 
            className={({ isActive }) => `flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${isActive ? 'bg-white text-blue-900 shadow-md' : 'text-slate-300 hover:text-white hover:bg-blue-800'}`}
          >
            <Coffee size={14} />
            <span>FOOD</span>
          </NavLink>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center border border-blue-700 bg-blue-800 rounded-full p-1 shadow-inner">
            <button className="rounded-full bg-white px-3 py-1 text-[10px] font-black text-blue-900">EN</button>
            <button className="px-3 py-1 text-[10px] font-black hover:text-emerald-300 transition-colors">HI</button>
          </div>
          
          <div className="flex items-center space-x-2 border-l border-blue-700 pl-6 cursor-pointer group">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold group-hover:bg-blue-400 transition-colors shadow-md">
              JD
            </div>
            <span className="hidden lg:inline text-sm font-bold tracking-tight">John Doe</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MapView />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/food" element={<FoodPage />} />
          </Routes>
        </AnimatePresence>

        {/* Overlay Sidebar Toggle for Mobile/Small Screens could go here */}
        <aside className="hidden xl:flex w-80 flex-col bg-white shadow-2xl border-l border-slate-100 relative z-10">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
              <Navigation size={16} className="text-blue-600" />
              Quick Assist
            </h3>
          </div>
          
          <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-dashed border-slate-200">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Live Crowd Alert</p>
                <div className="flex items-center space-x-3">
                  <div className="h-2 flex-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-500"></div>
                  </div>
                  <span className="text-xs font-black text-blue-700">85%</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 font-medium">Gate 7 is currently experiencing high wait times.</p>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recommended for You</p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between group cursor-pointer hover:bg-emerald-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-500 rounded-lg text-white">
                      <Heart size={14} />
                    </div>
                    <span className="text-xs font-bold text-emerald-900 leading-tight">Vada Pav Junction<br/><span className="text-[9px] text-emerald-600 uppercase tracking-tighter">Your Favorite</span></span>
                  </div>
                  <ChevronRight size={14} className="text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer Navigation (Mobile Optimized) */}
      <footer className="flex md:hidden h-16 items-center justify-around border-t border-slate-200 bg-white px-2 shadow-2xl z-30">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-blue-900 font-black' : 'text-slate-400'}`}>
          <MapIcon size={20} />
          <span className="text-[9px] uppercase tracking-widest">Map</span>
        </NavLink>
        <NavLink to="/amenities" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-blue-900 font-black' : 'text-slate-400'}`}>
          <Accessibility size={20} />
          <span className="text-[9px] uppercase tracking-widest">Help</span>
        </NavLink>
        <NavLink to="/food" className={({ isActive }) => `flex flex-col items-center space-y-1 ${isActive ? 'text-blue-900 font-black' : 'text-slate-400'}`}>
          <Coffee size={20} />
          <span className="text-[9px] uppercase tracking-widest">Eat</span>
        </NavLink>
        <div className="flex flex-col items-center space-y-1 text-slate-400">
          <MessageSquare size={20} />
          <span className="text-[9px] uppercase tracking-widest">Chat</span>
        </div>
      </footer>

      {/* Global AI Chat Bar (Desktop Only) */}
      <footer className="hidden md:flex h-20 items-center border-t border-slate-200 bg-white px-6 space-x-4 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.05)] z-20">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Ask StadiumGuide AI: 'Where is the nearest water station?'" 
            className="h-12 w-full rounded-full bg-slate-50 px-14 text-sm font-medium outline-none border-2 border-transparent transition-all focus:border-blue-500 focus:bg-white placeholder:text-slate-400"
          />
          <div className="absolute top-1/2 left-5 -translate-y-1/2 text-blue-600">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center space-x-2">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-all rounded-full hover:bg-slate-100">
              <Mic className="h-5 w-5" />
            </button>
          </div>
        </div>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white shadow-[0_4px_15px_rgba(30,58,138,0.4)] transition-all hover:bg-blue-800 active:scale-90 hover:scale-110">
          <Send className="h-5 w-5" />
        </button>
      </footer>
    </div>
  );
}
