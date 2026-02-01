const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {year} Starbuck Curling Club. All rights reserved.</p>
      <ul>
        <li>Designed by Adam Azarov</li>
        <li>Terms of Service</li>
      </ul>
    </div>
  );
};

export default Footer;
