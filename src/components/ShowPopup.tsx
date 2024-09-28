import { Button, Form, Input, Typography } from 'antd';
import { FC, useState } from 'react';
import {
  ShowPopupParams,
  useShowPopup,
} from '@vkruglikov/react-telegram-web-app';

const ShowPopup: FC = () => {
  const showPopup = useShowPopup();
  const [popupState, setPopupState] = useState<
    Pick<ShowPopupParams, 'title' | 'message'>
  >({
    title: 'наименование',
    message: 'сообщение',
  });
  const onFinish = (values: any) => {
    setPopupState(values);
    showPopup({
      ...values,
      buttons: [
        {
          type: 'ok',
          text: 'хорошо',
        },
        {
          type: 'close',
          text: 'закрыть',
        },
        {
          type: 'destructive',
          text: 'отмена',
        },
      ],
    }).catch(e => {
      showPopup({
        title: 'error',
        message: e,
      });
    });
  };

  return (
    <>
      <Typography.Title level={3}>Диалоговое Окно</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ShowPopup"
        layout="horizontal"
        initialValues={popupState}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="наименование" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="сообщение" name="message">
          <Input />
        </Form.Item>
        <Form.Item label="кнопки" name="buttons">
          <Typography.Text>
            {JSON.stringify([
              {
                type: 'ok',
                text: 'хорошо',
              },
              {
                type: 'close',
                text: 'закрыть',
              },
              {
                type: 'destructive',
                text: 'отмена',
              },
            ])}
          </Typography.Text>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Показать Диалоговое Окно
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ShowPopup;