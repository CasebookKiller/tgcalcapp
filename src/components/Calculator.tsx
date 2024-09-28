import { Form, Input, InputNumber, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const Calculator = () => {

  function human(dosum: any) { // разрядность
    let sum = ""+dosum;
    sum = sum.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') // разрядность
    if (sum.indexOf(".")!==-1) {						   // к десяткам копеек добавляем ноль
      var b=sum.substr(sum.indexOf("."),sum.length)
      if (b.length===2) sum+="0"
    }
    if (sum.indexOf(",")!==-1) {						   // к десяткам копеек добавляем ноль
      var b=sum.substr(sum.indexOf(","),sum.length)
      if (b.length===2) sum+="0";
    }
    sum = sum.replace(/^00\./,'0.'); // меняем 00. на 0,
    sum = sum.replace(/^00,/,'0.');
    sum = sum.replace(/\./g,'.'); // меняем тчк на зпт
    return sum;
  }
  
  return (
    <>
      <Typography.Title level={3}>Калькулятор госпошлины</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="ShowPopup"
        layout="horizontal"
        autoComplete="off"
      >
         <Form.Item label="Цена иска" name="text">
          <InputNumber 
            id='sum'
            style={{ 
              textAlign: 'right' 
            }}
            decimalSeparator={","}
            formatter={value=>human(value)}
          />
    
        </Form.Item>
      </Form>
    </>
  );
};
export default Calculator;