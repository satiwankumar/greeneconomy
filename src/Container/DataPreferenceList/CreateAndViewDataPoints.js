import React from "react";
import { useNavigate } from "react-router-dom";

import { Row, Col, Input, Checkbox, Button } from "antd";
const CreateAndViewDataPoint = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="heading"> Create Data Preference</h1>
        </div>
      </div>
      <hr />

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
              name={"firstname"}
              className="site-input dash-input"
              placeholder={"Enter Data Point and Click Enter"}
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
          <div className="d-flex align-items-center mr-3 mb-3  ">
            <span className="data-tag">
              HelloWorldDataPreferenceTaga
            </span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3  ">
            <span className="data-tag ">HelloWorldDataPreferenceTaga</span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3  ">
            <span className="data-tag">
              HelloWorldDataPreferenceTaga
            </span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3  ">
            <span className="data-tag ">HelloWorldDataPreferenceTaga</span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3  ">
            <span className="data-tag">
              HelloWorldDataPreferenceTaga
            </span>
            <i className="fa-solid fa-circle-question"></i>
          </div>

          <div className="d-flex align-items-center mr-3 mb-3 ">
            <span className="data-tag">
              HelloWorldDataPreferenceTaga
            </span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3 ">
            <span className="data-tag ">HelloWorldDataPreferenceTaga</span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3 ">
            <span className="data-tag">
              HelloWorldDataPreferenceTaga
            </span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3 ">
            <span className="data-tag">
              HelloWorldDataPreferenceTaga
            </span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="d-flex align-items-center mr-3 mb-3 ">
            <span className="data-tag ">HelloWorldDataPreferenceTaga</span>
            <i className="fa-solid fa-circle-question"></i>
          </div>
        </div>
      </div>

      <Row>
        <Col span={24}>
          <Button
            onClick={() => navigate("/data-preference")}
            className="site-btn w-100 purple-btn"
          >
            Update
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CreateAndViewDataPoint;
