const PageHeader = ({ img, title }) => {
  return (
    <div className="relative h-screen max-h-96 bg-black">
      <img
        className="h-full w-full object-cover"
        src={img}
        alt="trainer_photo"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl tracking-widest text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
        {title}
      </div>
    </div>
  );
};

export default PageHeader;
