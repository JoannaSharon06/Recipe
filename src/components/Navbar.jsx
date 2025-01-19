import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>FlavorFile</h1>
      <ul>
      <Link to="/">
  <button>Home</button>
</Link>

        <Link to="/add">
  <button>Add Recipe</button>
</Link>

<Link to="/edit/:id">
  <button>Edit Recipe</button>
</Link>

      </ul>
    </nav>
  );
};

export default Navbar;
