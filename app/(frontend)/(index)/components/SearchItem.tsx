type SearchItemProps = {
  title: string;
};

const SearchItem: React.FC<SearchItemProps> = ({ title }) => {
  return (
    <button className="rounded-[7px] h-[47px] bg-[#f5f5f6] w-full flex justify-center items-center text-[14px] font-semibold">
      {title}
    </button>
  );
};

export default SearchItem;
