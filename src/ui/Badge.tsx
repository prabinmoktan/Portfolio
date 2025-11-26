interface badgeTypes {
  title?: string;
  icon?: React.ReactElement;
  primary?: boolean;
  initial?: boolean;
}

const Badge = ({ title, icon, primary, initial }: badgeTypes) => {
  const neutral =
    "border-transparent bg-primary text-primary-foreground shadow-xs  bg-gray-800 hover:bg-zinc-800 hover:outline hover:outline-gray-800 ";
  const secondary =
    "border-transparent bg-secondary text-secondary-foreground bg-gray-600 hover:bg-gray-300 hover:text-gray-900";
  // const destructive = "border-transparent bg-destructive text-destructive-foreground shadow-xs";

  return (
    <>
      <div
        className={`px-3  text-white border border-gray-400 rounded-md w-auto inline-block py-0.5 text-sm ${
          initial ? neutral : ""
        } ${primary ? secondary : ""}`}
      >
        {title}
        {icon}
      </div>
    </>
  );
};

export default Badge;
