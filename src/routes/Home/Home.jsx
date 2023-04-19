import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/Directory";

function Home() {
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
}

export default Home;
