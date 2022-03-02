import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Input, Checkbox, Button } from "antd";
const CreateAndViewDataPoint = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [data, setdata] = useState([
    {
      title: "Measured Co2 Emission",
    },
    {
      title: "Emission co2 Emission",
    },
    {
      title: "Financial Worth of Co2 Emmiteed",
    },
    {
      title: "Co2 Emission Reduced",
    },
    {
      title: "Final Worth of Co2 Emitted",
    },
    {
      title: "Co2 Emission Reduced",
    },
    {
      title: "Real Icome per Co2 Emitted",
    },
    {
      title: "Total Organic Weight",
    },
    {
      title: "Total Recyled  Weight",
    },
    {
      title: "Daily Organic Raw Material Weight",
    },
    {
      title: "Estimated Total Primary Energy Supply",
    },
    {
      title: "Daily Organic Raw Material Weight",
    },
    {
      title: "Daily Organic Raw Material Weight Financial Value",
    },
  ]);
  const onSubmit = (e) => {
    e.preventDefault("");

    setdata([
      ...data,
      {
        title: title,
      },
    ]);

    setTitle("")
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="heading"> Create Data Preference</h1>
        </div>
      </div>
      <hr />
      <form onSubmit={(e) => onSubmit(e)}>


      <Row>
        <Col span={6}>
          <div className="d-flex">
          <Checkbox className="flex-row-reverse">

              <span className="check-text">
                <Input
                  name={"firstname"}
                  className="site-input dash-input"
                  placeholder={"Informational"}
                />
              </span>
            </Checkbox>
          </div>
          <div className="d-flex">
            <Checkbox className="flex-row-reverse">
              <span className="check-text">
                <Input
                  name={"firstname"}
                  className="site-input dash-input"
                  placeholder={"Conversational"}
                />
              </span>
            </Checkbox>
          </div>
        </Col>
        <Col span={6}>
          <div className="d-flex ">
          <Checkbox className="flex-row-reverse">

              <span className="check-text">
                <Input
                  name={"firstname"}
                  className="site-input dash-input"
                  placeholder={"Innovational"}
                />
              </span>
            </Checkbox>
          </div>
          <div className="d-flex">
          <Checkbox className="flex-row-reverse">

              <span className="check-text">
                <Input
                  name={"firstname"}
                  className="site-input dash-input"
                  placeholder={"Financiall"}
                />
              </span>
            </Checkbox>
          </div>
        </Col>

        <Col span={12}>
          <div className="d-flex">
          <Input
          className="site-input dash-input"
          placeholder={"Enter Data point Name"}
          name={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
          </div>
          <div className="d-flex">
            <Input
              name={"firstname"}
              className="site-input dash-input"
              placeholder={"Describe Your Data Points"}
            />
          </div>
        </Col>
      </Row>


     
      <div className="data-points">
        <h2 className="mt-5">Available Data Point</h2>

        <div className="data-points-inner site-input dash-input">
        {data?.map((item) => (
              <div className="d-flex align-items-center mr-3 mb-3  ">
                <span className="data-tag ">{item.title}</span>
                <i className="fa-solid fa-circle-question"></i>
              </div>
            ))}
         

        </div>
      </div>

      <Row>
        <Col span={24}>
          <Button
          htmlType="submit"
            // onClick={() => navigate("/data-preference")}
            className="site-btn w-100 purple-btn"
          >
            Update
          </Button>
        </Col>
      </Row>
      </form>
    </>
  );
};

export default CreateAndViewDataPoint;
