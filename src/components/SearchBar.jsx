import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex w-full items-center rounded-lg border border-black/20 bg-white transition focus-within:border-2 focus-within:border-blue-900">
      <span>
        <Button className="hover:bg-blue-100 hover:text-blue-900">
          <MagnifyingGlassIcon width={25} height={25}></MagnifyingGlassIcon>
        </Button>
      </span>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-0 pl-1.5 outline-0 placeholder:font-sans"
        type="text"
      />
    </div>
  );
}
