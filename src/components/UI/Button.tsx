type ButtonProps = {
  isLoading?: boolean;
  children: any;
  variant?: "default" | "transparent" | "text";
  onClick?: any;
  className?: string;
};

export default function Button({
  isLoading = false,
  variant = "default",
  children,
  onClick = () => {},
  className = "",
}: ButtonProps) {
  const getStyleBtn = () => {
    switch (variant) {
      case "default":
        return "bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-md text-white py-[2px] px-[18px] h-10 rounded-lg";
      case "transparent":
        return "p-[5px] outline-none cursor-pointer flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200";
      case "text":
        return "hover:bg-[#8A63B91A] rounded-[10px] p-[5px]";
    }
  };

  return (
    <button onClick={onClick} className={`${className} ${getStyleBtn()} flex items-center`}>
      {isLoading && (
        <div className="mr-[5px]">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="animate-spin"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>
        </div>
      )}
      {children}
    </button>
  );
}
