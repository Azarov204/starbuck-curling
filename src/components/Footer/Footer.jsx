const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 flex justify-center bg-blue-950 text-sm md:text-base">
      <div>
        <span
          className="text-body text-white">
          {`© ${year} Starbuck Curling Club | Designed by Adam Azarov | All rights reserved`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
