import classNames from "classnames";

const HomeMenu = ({ items, currentSection, onClick }) => {
  return (
    <div className="mx-auto flex md:block md:w-10">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item.id)}
          className={classNames(
            "flex w-7 cursor-pointer items-end justify-center md:h-7 md:w-10 md:items-center md:justify-start"
          )}
        >
          <div
            className={classNames(
              "cursor-pointer bg-white transition-all",
              currentSection?.id === item.id
                ? "h-10 w-[3px] md:h-[3px] md:w-10"
                : "h-6 w-[3px] md:h-[3px] md:w-6"
            )}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default HomeMenu;
