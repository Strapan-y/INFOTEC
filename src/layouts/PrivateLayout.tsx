import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

interface MyComponentProps {
  children: React.ReactNode;
}

const PrivateLayout = (props: MyComponentProps) => {

  /* const itemsSider = [
    {
      name: 'Dashboard',
      style: location.pathname === "/" ? 'itemSiderSelected' : 'itemSider',
      rightIcon: location.pathname === "/" ? <RightOutlined style={{ position: 'relative', left: '3.3vw' }} /> : <RightOutlined style={{ visibility: 'hidden' }} />,
      leftIcon: location.pathname === "/" ? <img src={HomeSiderIcon} className='iconSider' alt='Home icon' /> : <img src={HomeGreenSiderIcon} className='iconSider' alt='Home icon' />,
      path: '/'
    },
  ] */


  return (
    <Layout className='Layout'>
      <Sider
        width={'22%'}
        className='Sider'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
      
      </Sider>
      
    </Layout >
  )
}

export default PrivateLayout