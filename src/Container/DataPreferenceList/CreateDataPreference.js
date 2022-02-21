import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Input, Checkbox, Button } from "antd";
const CreateDataPreference = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [data, setdata] = useState([
    {
      title: "HelloWorldDataPreferenceTaga",
    },
    {
      title: "HelloWorldDataPreferenceTaga",
    },
    {
      title: "HelloWorldDataPreferenceTaga",
    },
    {
      title: "HelloWorldDataPreferenceTaga",
    },
    {
      title: "HelloWorldDataPreferenceTaga",
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
                <span className="data-tag blue-tag">{item.title}</span>
                <i className="fa-solid fa-circle-question"></i>
              </div>
            ))}
          </div>
        </div>

        <Row>
          <Col span={24}>
            <Button
            htmlType="submit"
              className="site-btn w-100 purple-btn"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default CreateDataPreference;
