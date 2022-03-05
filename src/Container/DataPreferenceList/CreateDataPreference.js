import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Input, message, Checkbox, Button } from "antd";
const CreateDataPreference = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [datapoints, SetDataPoints] = useState([]);

  const [data, setdata] = useState([
    {
      id: "1",
      title: "Measured Co2 Emission",
    },
    {
      id: "2",

      title: "Emission co2 Emission",
    },
    {
      id: "3",

      title: "Financial Worth of Co2 Emmiteed",
    },
    {
      id: "4",

      title: "Co2 Emission Reduced",
    },
    {
      id: "5",

      title: "Final Worth of Co2 Emitted",
    },
    {
      id: "6",

      title: "Co2 Emission Reduced",
    },
    {
      id: "7",

      title: "Real Icome per Co2 Emitted",
    },
    {
      id: "8",

      title: "Total Organic Weight",
    },
    {
      id: "9",

      title: "Total Recyled  Weight",
    },
    {
      id: "10",

      title: "Daily Organic Raw Material Weight",
    },
    {
      id: "11",

      title: "Estimated Total Primary Energy Supply",
    },
    {
      id: "12",

      title: "Daily Organic Raw Material Weight",
    },
    {
      id: "13",

      title: "Daily Organic Raw Material Weight Financial Value",
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault("");

    message.success(`Data Preference Created Successfully`);

    setTitle("");
    SetDataPoints([]);
    navigate("/data-preference");
  };  

  const handleSelect = (id) => {
    if (!datapoints.includes(id)) {
      SetDataPoints([...datapoints, id]);
    } else {
      console.log(id);
      let newdata = datapoints.filter((item) => item != id);
      //  console.log(newdata)
      SetDataPoints(newdata);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="heading"> Create Data Preference</h1>
        </div>

        <div>
          <Button onClick={() => navigate(`/data-preference`)}>
            view data Preference List
          </Button>
        </div>
      </div>
      <hr />

      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          className="site-input dash-input"
          placeholder={"Enter Data Preference Name"}
          name={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div className="data-points">
          <h2 className="mt-5">Select Data Point</h2>
          <div className="data-points-inner site-input dash-input">
            {data?.map((item) => (
              <div className="d-flex align-items-center mr-3 mb-3  ">
                <span
                  className={`data-tag ${
                    datapoints.includes(item.id) ? "blue-tag" : ""
                  } `}
                  onClick={() => handleSelect(item.id)}
                >
                  {item.title}
                </span>
                <i className="fa-solid fa-circle-question"></i>
              </div>
            ))}
          </div>
        </div>

        <Row>
          <Col span={24}>
            <Button htmlType="submit" className="site-btn w-100 purple-btn">
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default CreateDataPreference;
