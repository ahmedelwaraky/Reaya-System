export default function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 mt-2">
      <h2 className="text-[15px] font-bold text-[var(--c-text)] whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[var(--c-border)]" />
    </div>
  );
}
