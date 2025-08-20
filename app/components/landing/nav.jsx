"use client";
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="flex items-center gap-3" href="#">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">DV</div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold tracking-tight">DeviceVerify</h1>
              <p className="text-xs text-slate-500 -mt-1">Buy second-hand devices with confidence</p>
            </div>
          </a>


          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-indigo-600">About</a>
            <a href="#services" className="text-sm hover:text-indigo-600">Services</a>
            <a href="#pricing" className="text-sm hover:text-indigo-600">Pricing</a>
            <a href="#testimonials" className="text-sm hover:text-indigo-600">Reviews</a>
            <a href="#" className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-emerald-400 text-white shadow-md text-sm">Sign in</a>
          </div>


          <button className="md:hidden p-2 rounded-md" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>


      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.25 }} className="md:hidden border-t border-slate-200 bg-white/75">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" className="py-2">About</a>
            <a href="#services" className="py-2">Services</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#testimonials" className="py-2">Reviews</a>
            <a href="#" className="py-2 font-semibold">Sign in</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}