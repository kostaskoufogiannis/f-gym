import classNames from "classnames";

const SectionTitle = ({ text, dark, active }) => {
  return (
    <div className="section-title mb-10">
      <h1
        className={classNames(
          "text-8xl font-bold mb-7",
          dark ? "text-white" : "text-black"
        )}
      >
        {text}
      </h1>
      <div className="lines">
        <div className="bg-green-400 h-1 w-20 mb-3"></div>
        <div className="bg-green-400 h-1 w-20 ml-10"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
