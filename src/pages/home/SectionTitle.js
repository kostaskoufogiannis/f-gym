const SectionTitle = ({ text }) => {
  return (
    <div className="section-title mb-5 md:mb-10">
      <h1
        className={
          "mb-3 text-4xl tracking-widest text-white md:mb-7 md:text-7xl lg:text-8xl xl:text-9xl"
        }
      >
        {text}
      </h1>
      <div className="lines">
        <div className="mb-3 h-1 w-16 bg-green-400 md:w-20"></div>
        <div className="ml-10 h-1 w-16 bg-green-400 md:w-20"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
