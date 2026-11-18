const Map = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.7389772798624!2d-97.62714492246306!3d49.774690435787946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea0003fb4ed289%3A0xc5fc6f6bae5207ff!2sStarbuck%20Sports%20Centre!5e0!3m2!1sen!2sca!4v1790351674777!5m2!1sen!2sca"
        className="w-full h-[300px] md:h-[400px] lg:h-[450px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Starbuck Sport Centre"
      ></iframe>
    </div>
  );
};

export default Map;
