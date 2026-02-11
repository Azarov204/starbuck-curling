const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-6 flex justify-center bg-website-bg text-sm md:text-base lg:text-lg">
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
