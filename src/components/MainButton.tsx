import { Button, Form, Input, Typography, Switch } from 'antd';
import { FC, useState } from 'react';
import {
  MainButton,
  MainButtonProps,
} from '@vkruglikov/react-telegram-web-app';

const MainButtonDemo: FC<{
  initialValues?: Partial<MainButtonProps> & { show?: boolean };
}> = ({ initialValues }) => {
  const [buttonState, setButtonState] = useState<
    {
      show: boolean;
    } & Pick<MainButtonProps, 'text' | 'progress' | 'disable'>
  >({
    text: 'ТЕКСТ КНОПКИ',
    show: false,
    progress: false,
    disable: true,
    ...initialValues,
  });
  const onFinish = (values: any) => setButtonState(values);

  return (
    <>
      <Typography.Title level={3}>Главная Кнопка</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="MainButton"
        layout="horizontal"
        initialValues={buttonState}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="текст" name="text">
          <Input disabled />
        </Form.Item>
        <Form.Item name="progress" label="прогресс" valuePropName="checked">
          <Switch
            onChange={value =>
              setButtonState({
                ...buttonState,
                progress: value,
              })
            }
          />
        </Form.Item>
        <Form.Item name="disable" label="отключение" valuePropName="checked">
          <Switch
            onChange={value =>
              setButtonState({
                ...buttonState,
                disable: value,
              })
            }
          />
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() =>
              setButtonState({
                ...buttonState,
                show: !buttonState?.show,
              })
            }
          >
            {buttonState?.show ? 'Скрыть Главную Кнопку' : 'Показать Главную Кнопку'}
          </Button>
        </Form.Item>
      </Form>
      <div>{buttonState?.show && <MainButton {...buttonState} />}</div>
    </>
  );
};
export default MainButtonDemo;