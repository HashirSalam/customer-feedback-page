import "./App.css";
import { Layout } from "antd";
import FeedbackForm from "./components/Form/index.jsx";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <FeedbackForm />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
