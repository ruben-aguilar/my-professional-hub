const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rubén Aguilar Becerra. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for great software
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
