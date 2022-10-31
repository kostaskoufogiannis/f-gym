import classNames from "classnames";

const SectionTitle = ({ text, dark }) => {
  return (
    <div className="mb-10">
      <h1
        className={classNames(
          "text-8xl font-bold mb-10",
          dark ? "text-white" : "text-black"
        )}
      >
        {text}
      </h1>
      <div>
        <div className="bg-green-400 h-1 w-20 mb-5"></div>
        <div className="bg-green-400 h-1 w-20 ml-10"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
