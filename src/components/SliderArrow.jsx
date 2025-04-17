export default function SliderArrow({ direction, onClick, icon: Icon }) {
    const position = direction === "left" ? "left-4" : "right-4";
    return (
      <button
        onClick={onClick}
        className={`absolute top-1/2 ${position} -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-md`}
      >
        <Icon />
      </button>
    );
  }
  