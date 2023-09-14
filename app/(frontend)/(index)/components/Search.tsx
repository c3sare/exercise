import SearchItem from "./SearchItem";

const Search = () => {
  return (
    <div className="flex gap-2 justify-center flex-nowrap items-center mb-[20px]">
      <SearchItem title="Hight Quality" />
      <SearchItem title="Pop Art" />
      <SearchItem title="Realistic Look" />
    </div>
  );
};

export default Search;
