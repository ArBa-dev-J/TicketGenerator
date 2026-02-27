import { Link } from "react-router";

function HomeLogin() {
  return (
    <>
    <div className="text-center">
     <Link to="/login"> <button type="button" className="border">
        Login to generate a ticket
      </button></Link>
      </div>
    </>
  );
}

export default HomeLogin;
