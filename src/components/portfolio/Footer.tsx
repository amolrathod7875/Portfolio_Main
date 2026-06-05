const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-sm opacity-80 mb-2">Email :</p>
            <p className="font-semibold text-lg">amolrathod7875470402@gmail.com</p>
          </div>
          <div>
            <p className="text-sm opacity-80 mb-2">Call Today :</p>
            <p className="font-semibold text-lg">+91-9096293703</p>
          </div>
          <div>
            <p className="text-sm opacity-80 mb-2">Social :</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© Copyright 2026. All Rights Reserved by Amol Rathod</p>
          <p className="flex items-center gap-2">
            Created by <span className="font-bold">Amol Rathod</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
