import { Button, Form, Typography } from 'antd';
import {
  useScanQrPopup,
  useShowPopup,
} from '@vkruglikov/react-telegram-web-app';

const ScanQrPopup = () => {
  const [showQrPopup, closeQrPopup] = useScanQrPopup();
  const showPopup = useShowPopup();

  return (
    <>
      <Typography.Title level={3}>Сканирование QR кода</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ScanQrPopup"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="button"
            onClick={() =>
              showQrPopup(
                {
                  text: 'Привет друг',
                },
                text => {
                  closeQrPopup();
                  showPopup({
                    message: text,
                  });
                },
              )
            }
          >
            Сканировать QR код
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ScanQrPopup;