import SearchIcon from "../sidebar/searchIcon"

function RigthBar() {
  return (
    <div className="border-l border-gray-700 p-4">
      <div className="flex items-center h-10 rounded-full bg-gray-900 p-4 gap-2 placeholder-gray-700">
        <SearchIcon />
        <input type="search" name="" id="" placeholder="Search Twitter" className="h-10 rounded-full bg-gray-900 p-4 outline-none"/>
      </div>
    </div>
  )
}

export default RigthBar