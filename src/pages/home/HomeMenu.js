import classNames from "classnames";

const HomeMenu = ({ items, currentSection, onClick }) => {
  return (
    <div className="w-10 mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item.id)}
          className={classNames("cursor-pointer h-7 flex items-center")}
        >
          <div
            className={classNames(
              "bg-white transition-all cursor-pointer h-1",
              currentSection.id === item.id ? "w-10" : "w-6"
            )}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HomeMenu;
