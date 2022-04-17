import { Form, Input, Button } from "antd";
import { Rate } from "antd";

const FeedbackForm = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const onFinish = (values) => {
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
    <Form
      {...formItemLayout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="horizontal"
      form={form}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Jhon Doe" type="text" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
        label="Email"
      >
        <Input placeholder="you@email.com" type="email" />
      </Form.Item>
      <Form.Item
        label="Rating"
        name="rating"
        rules={[{ required: true, message: "Please add a rating" }]}
      >
        <Rate />
      </Form.Item>
      <Form.Item label="Comments" name="comments">
        <TextArea
          placeholder="Comments if any"
          autoSize={{ minRows: 4, maxRows: 6 }}
        />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FeedbackForm;
