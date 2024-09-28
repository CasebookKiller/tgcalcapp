import { Button, Form, Typography, Select } from 'antd';
import { FC, useState } from 'react';
import {
  ImpactOccurredFunction,
  NotificationOccurredFunction,
  useHapticFeedback,
} from '@vkruglikov/react-telegram-web-app';

const HapticFeedbackApp: FC = () => {
  const [impactOccurred, notificationOccurred, selectionChanged] =
    useHapticFeedback();
  const [style, setStyle] =
    useState<Parameters<ImpactOccurredFunction>[0]>('light');
  const [type, setType] =
    useState<Parameters<NotificationOccurredFunction>[0]>('error');

  return (
    <>
      <Typography.Title level={3}>Тактильная обратная связь</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="HapticFeedback"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item label="стиль">
          <Select value={style} onChange={value => setStyle(value)}>
            <Select.Option value="light">легкий</Select.Option>
            <Select.Option value="medium">средний</Select.Option>
            <Select.Option value="heavy">тяжелый</Select.Option>
            <Select.Option value="rigid">жесткий</Select.Option>
            <Select.Option value="soft">мягкий</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" onClick={() => impactOccurred(style)}>
            Воздействие
          </Button>
        </Form.Item>
        <Form.Item label="тип">
          <Select value={type} onChange={value => setType(value)}>
            <Select.Option value="error">ошибка</Select.Option>
            <Select.Option value="success">успешно</Select.Option>
            <Select.Option value="warning">внимание</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() => notificationOccurred(type)}
          >
            Уведомление
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" onClick={() => selectionChanged()}>
            Изменение выбора
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default HapticFeedbackApp;