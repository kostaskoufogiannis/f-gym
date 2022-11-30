const Button = ({ onClick, text }) => {
  const handleClick = () => onClick?.();
  return (
    <button
      type="button"
      className="rounded-full bg-green-400 px-8 py-3 text-center text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
