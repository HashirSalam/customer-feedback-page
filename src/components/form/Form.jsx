import { Form, Input, Button, Row, Col, Divider } from "antd";
import { Rate } from "antd";
import { Comment, Avatar } from "antd";
import React, { useState, useEffect } from "react";
import "./Form.css";
import Chart from "../chart/Chart.jsx";

const FeedbackForm = () => {
  const [form] = Form.useForm();
  const [latestComments, setLatestComments] = useState([]);
  const { TextArea } = Input;

  useEffect(() => {
    // getting stored values from local storage if any
    let storage = JSON.parse(localStorage.getItem("Detail") || "[]");
    if (storage.length > 0) {
      setLatestComments(storage);
    }
  }, []);

  const onFinish = (values) => {
    let allComments = [values, ...latestComments];
    setLatestComments(allComments);
    localStorage.setItem("Detail", JSON.stringify(allComments));

    form.resetFields();
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const buttonItemLayout = {
    wrapperCol: {
      span: 14,
      offset: 4,
    },
  };
  return (
    <>
      <Row>
        <Col md={12} xs={24}>
          <Form
            data-testid="form"
            {...formItemLayout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="horizontal"
            form={form}
            className="feedback-form"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                data-testid="name-input"
                placeholder="Name"
                type="text"
                className="rounded-input input-height"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                data-testid="email-input"
                placeholder="Email"
                type="email"
                className="rounded-input input-height"
              />
            </Form.Item>
            <Form.Item
              data-testid="star"
              name="rating"
              rules={[{ required: true, message: "Please add a rating" }]}
            >
              <Rate data-testid="rating-component" />
            </Form.Item>
            <Form.Item name="comments">
              <TextArea
                data-testid="comments-input"
                placeholder="Comments"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                data-testid="button-submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col md={7} xs={24}>
          {latestComments.length > 0 && (
            <>
              <h2>Insights</h2>
              <Chart data={latestComments} id="chart" />
            </>
          )}
        </Col>
      </Row>
      <Divider plain></Divider>
      {latestComments.length > 0 &&
        latestComments.map((comment, index) => (
          <>
            <Comment
              className="feedback-form"
              key={index}
              author={<span>{comment?.name}</span>}
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt={comment?.name}
                />
              }
              content={
                <>
                  <div>{comment?.comments}</div>
                  <Rate value={comment?.rating} disabled />
                </>
              }
            />
          </>
        ))}
    </>
  );
};

export default FeedbackForm;
