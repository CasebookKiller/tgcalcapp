import { Button, Form, Typography } from 'antd';
import { useExpand } from '@vkruglikov/react-telegram-web-app';

const ExpandApp = () => {
  const [isExpanded, expand] = useExpand();

  return (
    <>
      <Typography.Title level={3}>Развертывание</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ExpandDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item name="isExpanded">
          <Typography.Text>развернуто: {`${isExpanded}`}</Typography.Text>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" onClick={expand}>
            {`Развернуто: ${isExpanded}, вызвать expand()`}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ExpandApp;