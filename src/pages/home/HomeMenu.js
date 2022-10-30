import classNames from "classnames";

const HomeMenu = ({ items, currentSectionId, onClick }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClick(item.id)}
          className={classNames(
            "border-t-4 border-black transition-all cursor-pointer",
            currentSectionId === item.id ? "w-10" : "w-6",
            index !== items?.length - 1 ? "pt-5" : ""
          )}
        ></div>
      ))}
    </div>
  );
};

export default HomeMenu;
