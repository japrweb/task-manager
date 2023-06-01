import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-700 flex justify-between md:px-16 px-10 py-4">
      <Link to={"/"} className="text-white font-bold">
        <h1>React MySQL</h1>
      </Link>

      <ul className="flex gap-x-2">
        <li>
          <Link to="/" className="text-zinc-800 text-md font-semibold px-2 py-1 rounded-md bg-slate-300 duration-700 transition-all hover:bg-slate-800 hover:text-white hover:duration-700 hover:transition-all" >Home</Link>
        </li>
        <li>
          <Link to="/new" className="text-zinc-800 text-md font-semibold px-2 py-1 rounded-md bg-slate-300 duration-700 transition-all hover:bg-slate-800 hover:text-white hover:duration-700 hover:transition-all" >Create task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
