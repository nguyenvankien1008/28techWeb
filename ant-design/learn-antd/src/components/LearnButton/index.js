import { useState } from 'react';
// import './App.css';
import { Button, Typography } from "antd";
import { ExpandAltOutlined } from "@ant-design/icons";

const {Title} = Typography;

function LearnButton() {

    const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        code: 200,
        data: []
      };
      
      if(result && result.code === 200) {
        setLoading(false);
      }
    }, 3000);
  };

    return (
    <>
      <Button 
        type='primary' 
        loading={loading} 
        onClick={handleClick} 
        danger={loading} 
        disabled={loading} href="https://28tech.com.vn/" 
        size='large'
      >
        Nội dung
      </Button>

      <Button icon={<ExpandAltOutlined rotate={45} spin={true} />}>Button</Button>

      <Title level={3}>h3. Ant Design</Title>
    </>
    )
}

export default LearnButton;