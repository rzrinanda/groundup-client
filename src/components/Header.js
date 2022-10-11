import React from "react";
import BrandLogo from "../assets/png/GroundUp.png";
import Settings from "../assets/png/gear.png";
import User from "../assets/png/user.png";
import Notif from "../assets/png/notification.png";

const Header = () => {
  return (
    <div className="grid grid-cols-2  bg-white h-[53px] border-b-2">
      <div
        className="flex items-center justify-start gap-4 pl-4"
        style={{ fontSize: "13px" }}
      >
        <img src={BrandLogo} alt="" className="pr-8" />
        <div className="font-normal">DASHBOARD</div>
        <div
          className="flex items-center px-4 hover:bg-[#F0F5FF] hover:cursor-pointer hover:border-b hover:border-b-[#3478FC] h-full"
          style={{
            backgroundColor: "#F0F5FF",
            borderBottomWidth: "3px",
            borderBottomColor: "#3478FC",
          }}
        >
          ALERT
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-3">
            <div>
              <img src={Settings} alt="" className="pr-4" />
            </div>
            <div>
              <img src={User} alt="" className="pr-4" />
            </div>
            <div>
              <div className="relative ">
                <img src={Notif} alt="" className="pr-4 " />
                <div className="flex justify-end pr-6">
                  <div className="bg-[#3478FC] rounded-full text-white absolute  -top-2 text-[11px] w-4 h-4 flex justify-center">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 border-l border-l-slate-700">Welcome Admin!</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
