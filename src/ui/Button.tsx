interface ButtonTypes {
    title: string;
    primary?: boolean;
    danger?: boolean;
    normal?: boolean;
    icon?: React.ReactElement;
    iconFirst?: React.ReactElement;
    onClick?: React.ReactEventHandler;
    disabled?: boolean;
  }
  
  const Button = ({ title, primary, danger, normal,  icon, iconFirst, onClick, disabled }: ButtonTypes) => {
    const primaryBg = "bg-blue-600 hover:bg-blue-700";
    const dangerBg = "bg-red-600";
    const neutral = "bg-zinc-800 border border-gray-700 hover:bg-zinc-700";
    const disableBg = "opacity-50"
  
    return (
      <button
        className={`group flex items-center space-x-4 px-6 py-1.5 rounded cursor-pointer text-white  border border-gray-700
          ${primary ? primaryBg : ""}
          ${danger ? dangerBg : ""}
          ${normal ? neutral : ""}
          ${disabled ? disableBg  : ""}
        `}
        disabled={disabled}
        onClick={onClick}
      >
        {
            iconFirst &&
            <span>{iconFirst}</span>
        }
        {
            title && 

        <span className="text-sm">{title}</span>
        }
        {icon && ( 
          <span
            className=" transition-transform duration-500 group-hover:translate-x-2"
            style={{ willChange: 'transform' }}
          >
            {icon}
          </span>
        )}
      </button>
    );
  };
  
  export default Button;
  