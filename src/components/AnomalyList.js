import React from "react";

const AnomalyList = (props) => {
  const data = props.data;
  const anomalies = data.anomalyList;
  console.log("DATA", data, data.anomalyList);

  return (
    anomalies?.map((ano) => {
      const timestamp = parseInt(ano.timestamp) / 1000;
      const date = new Date(new Date(0).setUTCSeconds(timestamp));

      const datetime = `${date.getFullYear()}-${(
        "0" +
        (date.getMonth() + 1)
      ).slice(
        -2
      )}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      return (
        <div
          className="border"
          style={{
            marginTop: "2vh",
            marginInline: "1vw",
            borderColor: "#2A2E5D", //if active change bordercolor to #3478FC and borderwidth to 2px
            borderWidth: "1px",
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
              <div className="pl-4 col-span-2">ID #{ano.sensor}</div>
            </div>
            <div className="flex justify-end">
              <div
                className="flex w-1/2 items-center justify-center rounded-full text-white"
                style={{
                  backgroundColor:
                    ano.anomaly === "Severe"
                      ? "red"
                      : ano.anomaly === "Mild"
                      ? "green"
                      : "#FCA034",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              >
                {ano.anomaly}
              </div>
            </div>
          </div>
          <div
            className="w-1/2 flex-row rounded-b-xl bg-white pb-2"
            style={{ fontSize: "14px", paddingLeft: "2.5rem" }}
          >
            <div className="py-2">
              <div className="w-full font-bold">Unknown Anomaly</div>
              <div className="font-light">Detected at {datetime}</div>
            </div>
            <div
              style={{
                paddingTop: "2vh",
                paddingBottom: "2vh",
                color: "#3478FC",
              }}
            >
              {ano.machineName}
            </div>
          </div>
        </div>
      );
    }) || null
  );
};

export default AnomalyList;
