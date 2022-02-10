import React from "react";
import { connect } from "react-redux";
import Banner from "../../Component/Tables/Banner";
import { Row, Button,Col, Divider } from "antd";
import { Input } from "antd";

const ManageInvestor = () => {
//   let data = [
//     {
//       name: "firstname",
//       placeholder: "",
//     },
//   ];

  return (
    <>
      <Banner title={"Manage Investors"} />
    
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input name={"firstname"} placeholder={"firstname"} />
          </Col>
          <Col span={12}>
            <Input name="lastname" placeholder="lastname" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input name={"firstname"} placeholder={"firstname"} />
          </Col>
          <Col span={12}>
            <Input name="lastname" placeholder="lastname" />
          </Col>
        </Row> <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input name={"firstname"} placeholder={"firstname"} />
          </Col>
          <Col span={12}>
            <Input name="lastname" placeholder="lastname" />
          </Col>
        </Row> <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input name={"firstname"} placeholder={"firstname"} />
          </Col>
          <Col span={12}>
            <Input name="lastname" placeholder="lastname" />
          </Col>
        </Row> <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input name={"firstname"} placeholder={"firstname"} />
          </Col>
          <Col span={12}>
            <Input name="lastname" placeholder="lastname" />
          </Col>
        </Row>
        <Row >
          <Col span={24}>
          <Button>Submit</Button>

          </Col>
         
        </Row>
    
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ManageInvestor);
