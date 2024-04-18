/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, notification } from 'antd'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RouterUrl } from '../../../routes';

export const Login = () => {
    const navigate = useNavigate()
    const onFinish = async(values:any) => {
        try {
            const response = await axios.get(
              'https://jsonplaceholder.typicode.com/users'
            );
            console.log(response)
            const users = response.data;
            console.log(users)
            const user = users.find(
              (u:any) => u.username === values.username
            );
            console.log(user)
            if (user) {
              notification.success({
                message:'Login successful'
              });
              navigate(RouterUrl.mainPage)
            } else {
              notification.error({
                message:'Invalid credentials'
              });
            }
          } catch (error) {
            console.error('Error fetching data: ', error);
            notification.error({
                message:'An error occurred'
            });
          }
      };
  return (
    <div className="App flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}
