type CourseFeatureListProps = {
  title: string;
  icon?: string;
  items: string[];
};

export default function CourseFeatureList({
  title,
  icon,
  items,
}: CourseFeatureListProps) {
  return (
    <div className="rounded-[22px] border border-[#e5e9ef] bg-white p-6 md:p-8">
      <h3 className="text-2xl font-black tracking-[-0.03em] text-[#083f39]">
        {icon ? `${icon} ${title}` : title}
      </h3>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-4 text-[17px] leading-8 text-[#5f6f89]"
          >
            <span className="mt-[11px] h-[7px] w-[7px] rounded-full bg-[#005640]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
