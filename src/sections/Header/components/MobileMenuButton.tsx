export const MobileMenuButton = () => {
  return (
    <button
      aria-label="menu"
      className="items-stretch appearance-none bg-transparent caret-transparent text-stone-500 flex flex-col font-normal h-10 justify-between outline-[3px] break-words fixed text-center no-underline w-10 z-[14] mt-[25px] px-[9px] py-[13px] right-2.5 top-[20.5px] md:hidden md:h-[52px] md:w-[52px] md:px-[11px] md:py-[17px] md:right-[18px]"
    >
      <span className="box-border caret-transparent block h-0 min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline w-full border border-stone-500 border-solid md:min-h-0 md:min-w-0"></span>
      <span className="box-border caret-transparent block h-0 min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline w-full border border-stone-500 border-solid md:min-h-0 md:min-w-0"></span>
      <span className="box-border caret-transparent block h-0 min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline w-full border border-stone-500 border-solid md:min-h-0 md:min-w-0"></span>
    </button>
  );
};
