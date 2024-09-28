import { Button, Form, Typography } from 'antd';
import { FC, useState } from 'react';
import { BackButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const BackButtonApp: FC = () => {
  const [buttonState, setButtonState] = useState<{
    show: boolean;
  }>();
  const showPopup = useShowPopup();

  return (
    <>
      <Typography.Title level={3}>Кнопка Назад</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="BackButton"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() =>
              setButtonState({
                show: !buttonState?.show,
              })
            }
          >
            {buttonState?.show ? 'Скрыть Кнопку Назад' : 'Показать Кнопку Назад'}
          </Button>
        </Form.Item>
      </Form>
      <div>
        {buttonState?.show && (
          <BackButton
            onClick={() => {
              showPopup({
                message: 'кнопка назад нажата',
              });
            }}
          />
        )}
      </div>
    </>
  );
};
export default BackButtonApp;