import profileImg from "@/assets/profile.jpg";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(95%,720px)]">
      <nav className="flex items-center justify-between gap-4 rounded-full bg-white/90 backdrop-blur-md border border-border shadow-[0_8px_30px_rgb(0,0,0,0.06)] pl-2 pr-2 py-2">
        <a
          href="#"
          className="group flex items-center gap-3 rounded-full pr-5 pl-1 py-1 transition-all duration-300 hover:bg-secondary"
        >
          <div className="h-10 w-10 rounded-full overflow-hidden bg-muted shrink-0 transition-transform duration-300 group-hover:scale-110">
            <img src={profileImg} alt="Amol Rathod" className="h-full w-full object-cover" />
          </div>
          <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            Available for work
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground">
          <li>
            <a href="#projects" className="relative transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
              Projects
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-background after:transition-all group-hover:after:w-full">
            Contact
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
