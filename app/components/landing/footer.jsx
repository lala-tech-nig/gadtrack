export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 text-white flex items-center justify-center font-bold">
              DV
            </div>
            <div>
              <div className="font-semibold">DeviceVerify</div>
              <div className="text-xs text-slate-500">All rights reserved © {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">Privacy Policy</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">Terms of Service</a>
          <a href="#" className="text-slate-600 hover:text-indigo-600 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}