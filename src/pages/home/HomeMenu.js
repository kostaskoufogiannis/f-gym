import classNames from "classnames";

const HomeMenu = ({ items, currentSection, onClick }) => {
  return (
    <div className="mx-auto flex md:w-10 md:block">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item.id)}
          className={classNames(
            "cursor-pointer flex justify-center items-end w-7 md:w-10 md:justify-start md:items-center md:h-7"
          )}
        >
          <div
            className={classNames(
              "bg-white transition-all cursor-pointer",
              currentSection?.id === item.id
                ? "w-1 h-10 md:w-10 md:h-1"
                : "w-1 h-6 md:w-6 md:h-1"
            )}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HomeMenu;
