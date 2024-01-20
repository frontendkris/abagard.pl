export default function SearchBar(params) {
  return (
    <div className={`mt-6 pt-2 relative mx-auto text-gray-600 ${params.className}`}>
      <input
        className="input input-bordered w-full"
        type="search"
        name="search"
        placeholder={params.placeholder ? params.placeholder : `Szukaj`}
        onChange={(e) => params.setSearch(e.target.value)}
      />
    </div>
  );
}
