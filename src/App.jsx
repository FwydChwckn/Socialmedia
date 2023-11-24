import "./App.css";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Profile />
      {/* <div className="mt-[10px] flex w-[100%] ">
        <Sidebar />
        <div className="flex">
          <div className="flex-[9]">
            <img src="asstes/post/" alt="" />
          </div>
          <div className="flex">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
