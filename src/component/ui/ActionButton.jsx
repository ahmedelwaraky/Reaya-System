export default function ActionButton({
  title,
  icon: Icon,
  to,
  onClick,
  bg = "bg-[var(--c-accent)]", // default
  className = "",
  style = {},
}) {
  const handleClick = (e) => {
    // لو فيه onClick نفذه الأول
    if (onClick) {
      onClick(e);
    }

    // بعد كده لو فيه to اعمل redirect
    if (to) {
      window.location.href = to;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 h-9 px-4 rounded-xl text-[13px] font-medium transition text-white ${bg} ${className}`}
      style={style}
    >
      {Icon && <Icon size={16} />}
      {title}
    </button>
  );
}