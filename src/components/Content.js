import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sound1 from "../assets/audio/1.wav";
import Waveform1 from "../assets/png/waveform 1.png";
import Waveform2 from "../assets/png/waveform 2.png";
import Spectrogram1 from "../assets/png/spectrogram 1.png";
import Spectrogram2 from "../assets/png/spectrogram 2.png";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { getMachines } from "../api/Machine.api";

const Content = () => {
  let machine = [
    { name: "CNC Machine", code: "CNC" },
    { name: "Milling Machine", code: "MILL" },
  ];
  const actions = [
    { name: "Immediate", code: "IM" },
    { name: "Later", code: "LT" },
    { name: "No Action", code: "NA" },
  ];
  const reasons = [
    { name: "Spindle Error", code: "SE" },
    { name: "Axis Problem", code: "AP" },
    { name: "Machine Crash", code: "MC" },
    { name: "Router Fault", code: "RF" },
    { name: "Normal", code: "NE" },
  ];

  const [selectedMachine, setMachine] = useState(machine);
  const [selectedAction, setAction] = useState(actions);
  const [selectedReason, setReason] = useState(reasons);
  const [comments, setComments] = useState("");
  const [defaultMachine, setDefaultMachine] = useState("");

  useEffect(() => {
    getMachines().then((result) => {
      console.log("DATAX", result.machineData);
      machine = result.machineData.map((m) => {
        return { name: m.machineName, code: m._id };
      });
      // setMachine(machine);
      setDefaultMachine("CNC");
    });
  }, []);

  return (
    <div className="bg-[#F8F8FF] p-4 h-screen">
      {/* Header Content */}
      <div className="bg-white border border-gray-200 rounded-md p-4">
        <Dropdown
          value={defaultMachine}
          options={selectedMachine}
          onChange={(e) => setMachine(e.value)}
          optionLabel="name"
          optionValue="code"
          placeholder="Select Machine"
        />
      </div>
      <div className="grid grid-cols-4">
        {/* Sidebar Content */}
        <div className="bg-white border border-gray-200 h-full rounded-md">
          <div className="flex border-b-2 border-gray-200">
            <Button
              className="p-button-secondary p-button-text pt-10"
              style={{ color: "#2A2E5D" }}
            >
              <FontAwesomeIcon
                icon={faCaretLeft}
                className="p-10"
                style={{ paddingRight: "0.5rem", paddingLeft: "2vw" }}
              />
              Back
            </Button>
          </div>
          <div
            className="border-b-2 border-gray-200 rounded-md grid grid-cols-4 "
            style={{ height: "max-content", paddingBottom: "2vh" }}
          >
            <div className="text-xs px-4" style={{ paddingTop: "2vh" }}>
              6 Alerts
            </div>
            <div className="w-max" style={{ paddingTop: "2vh" }}>
              <p
                className="bg-[#3478FC] flex text-xs rounded-full text-white"
                style={{
                  width: "fit-content",
                  paddingLeft: "1vw",
                  paddingRight: "1vw",
                }}
              >
                2 New
              </p>
            </div>
          </div>
          {/* Anomaly List*/}
          <div
            className="border"
            style={{
              marginTop: "2vh",
              marginInline: "1vw",
              borderColor: "#3478FC",
              borderWidth: "2px",
            }}
          >
            <div
              className="grid w-1/2 grid-cols-2 rounded-t-xl bg-white p-4 m-10"
              style={{ fontSize: "14px" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    height: "0.75rem",
                    width: "0.75rem",
                    backgroundColor: "#3478FC",
                  }}
                ></div>
                <div className="pl-4 col-span-2">ID #00023123</div>
              </div>
              <div className="flex justify-end">
                <div
                  className="flex w-1/2 items-center justify-center rounded-full text-white"
                  style={{
                    backgroundColor: "#FCA034",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                  }}
                >
                  Moderate
                </div>
              </div>
            </div>
            <div
              className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
              style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
            >
              <div className="py-2">
                <div className="w-full font-bold">Unknown Anomaly</div>
                <div className="font-light">
                  Detected at 2021-06-18 20:10:04
                </div>
              </div>
              <div
                style={{
                  paddingTop: "2vh",
                  paddingBottom: "2vh",
                  color: "#3478FC",
                }}
              >
                CNC Machine
              </div>
            </div>
          </div>

          <div
            className="border"
            style={{
              marginTop: "2vh",
              marginInline: "1vw",
              borderColor: "#2A2E5D",
            }}
          >
            <div
              className="grid w-1/2 grid-cols-2 rounded-t-xl bg-white p-4 m-10"
              style={{ fontSize: "14px" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    height: "0.75rem",
                    width: "0.75rem",
                    backgroundColor: "#3478FC",
                  }}
                ></div>
                <div className="pl-4 col-span-2">ID #00023123</div>
              </div>
              <div className="flex justify-end">
                <div
                  className="flex w-1/2 items-center justify-center rounded-full text-white"
                  style={{
                    backgroundColor: "#FCA034",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                  }}
                >
                  Moderate
                </div>
              </div>
            </div>
            <div
              className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
              style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
            >
              <div className="py-2">
                <div className="w-full font-bold">Unknown Anomaly</div>
                <div className="font-light">
                  Detected at 2021-06-18 20:10:04
                </div>
              </div>
              <div
                style={{
                  paddingTop: "2vh",
                  paddingBottom: "2vh",
                  color: "#3478FC",
                }}
              >
                CNC Machine
              </div>
            </div>
          </div>

          <div
            className="border"
            style={{
              marginTop: "2vh",
              marginInline: "1vw",
              borderColor: "#2A2E5D",
            }}
          >
            <div
              className="grid w-1/2 grid-cols-2 rounded-t-xl bg-white p-4 m-10"
              style={{ fontSize: "14px" }}
            >
              <div className="flex items-center gap-2">
                {/* <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      height: "0.75rem",
                      width: "0.75rem",
                      backgroundColor: "#3478FC",
                    }}
                  ></div> */}
                <div className="col-span-2" style={{ paddingLeft: "1.5rem" }}>
                  ID #00023123
                </div>
              </div>
              <div className="flex justify-end">
                <div
                  className="flex w-1/2 items-center justify-center rounded-full text-white"
                  style={{
                    backgroundColor: "#FCA034",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                  }}
                >
                  Moderate
                </div>
              </div>
            </div>
            <div
              className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
              style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
            >
              <div className="py-2">
                <div className="w-full font-bold">Unknown Anomaly</div>
                <div className="font-light">
                  Detected at 2021-06-18 20:10:04
                </div>
              </div>
              <div
                style={{
                  paddingTop: "2vh",
                  paddingBottom: "2vh",
                  color: "#3478FC",
                }}
              >
                CNC Machine
              </div>
            </div>
          </div>
        </div>
        {/* Body Content */}
        <div className="col-span-3 bg-white p-4 border border-gray-200 h-full rounded-md">
          <div className="gap-4">
            <div className="border-b-2">
              <div style={{ fontSize: "25px" }}>Alert ID #00023123</div>
              <div style={{ fontSize: "15px", paddingBottom: "8vh" }}>
                Detected at 2021-04-22 20:10:04
              </div>
            </div>
            <div className="grid grid-cols-2" style={{ paddingTop: "4vh" }}>
              {/* <audio controls src="./assets/audio/1.wav">
                <a href="./assets/audio/1.wav">Download audio</a>
              </audio> */}
              <div>
                {/* Header Machine Output */}
                <div style={{ paddingLeft: "2vw" }}>
                  <div style={{ paddingBottom: "2vh" }}>
                    Anomaly Machine Output
                  </div>
                  <ReactAudioPlayer
                    src={Sound1}
                    controls
                    style={{ backgroundColor: "#FFFF" }}
                  />
                </div>
                {/* <Waveform buffer={Sound1} height={150} /> */}
                <img src={Waveform1} alt="" style={{ paddingTop: "1rem" }} />
                <img src={Spectrogram1} alt="" className="p-4" />
                <div className="pl-4" style={{ fontSize: "15px" }}>
                  <p className="font-bold">Equipment</p>
                  <p className="p-2">CNC Machine</p>
                  <p className="font-bold" style={{ paddingTop: "1rem" }}>
                    Suspected Reason
                  </p>
                  <Dropdown
                    className="h-2 w-2"
                    placeholder="Unknown Anomally"
                    options={selectedReason}
                    onChange={(e) => setReason(e.value)}
                    optionLabel="name"
                    optionValue="code"
                    style={{ width: "15rem" }}
                  />
                  <p className="font-bold" style={{ paddingTop: "1rem" }}>
                    Action Required
                  </p>
                  <Dropdown
                    className="h-2 w-2"
                    placeholder="Select Action"
                    options={selectedAction}
                    onChange={(e) => setAction(e.value)}
                    optionLabel="name"
                    optionValue="code"
                    style={{ width: "15rem" }}
                  />
                  <p className="font-bold" style={{ paddingTop: "1.5rem" }}>
                    Comments
                  </p>
                  <InputTextarea
                    rows={4}
                    cols={50}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                  {/* <Button
                      className="p-button-sm"
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        fontSize: "15px",
                      }}
                    >
                      UPDATE
                    </Button> */}
                </div>
                <div className="p-4">
                  <button
                    style={{
                      backgroundColor: "#526CFE",
                      color: "#fff",
                      padding: "9px",
                      borderRadius: "8px",
                      width: "25%",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                    onClick={() => console.log("submit")}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
              <div>
                {/* Header Machine Output */}
                <div style={{ paddingLeft: "2vw" }}>
                  <div style={{ paddingBottom: "2vh" }}>
                    Normal Machine Output
                  </div>
                  <ReactAudioPlayer
                    src={Sound1}
                    controls
                    style={{ backgroundColor: "#FFFF" }}
                  />
                </div>
                {/* <Waveform buffer={Sound1} height={150} /> */}
                <img src={Waveform2} alt="" style={{ paddingTop: "1rem" }} />
                <img src={Spectrogram2} alt="" style={{ padding: "1rem" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;