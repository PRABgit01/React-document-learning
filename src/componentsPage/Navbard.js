import { Link } from "react-router-dom";

export function NavBarPage() {

  return (
    <>
      <nav>
        <Link  to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/dontexist">about</Link>
        <Link to="product">product</Link>

      </nav>
    </>
  );
}
