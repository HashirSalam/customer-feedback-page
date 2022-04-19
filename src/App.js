import "./App.css";
import { Layout } from "antd";
import FeedbackForm from "./components/form/Form.jsx";
import React from "react";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>Customer Feedback</Header>
      <Content>
        <FeedbackForm />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
