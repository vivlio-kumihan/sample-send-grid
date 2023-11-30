import React from 'react';
import { Row, Col, Form, Input, Space, Button } from 'antd';
// import 'antd/dist/antd.css';
import './App.css';

function App() {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.React_APP_OPENWEATHERMAP_API_KEY);

  return (
    <div className="App">
      <Row gutter={24} style={{padding: "30px"}}>
        <Col xl={12}>
          <Form form={form} layout='vertical'>
            <Form.Item
              name="name"
              label="name"
              rules={[
                {required: true}
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="email"
              rules={[
                {required: true}
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="subject"
              label="subject"
              rules={[
                {required: true}
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item
              name="message"
              label="message"
              rules={[
                {required: true}
              ]}
            >
              <TextArea />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary">Submit</Button>
                <Button onClick={(e) => form.resetFields()}>Clear</Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
