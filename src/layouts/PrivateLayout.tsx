import { Collapse, Input, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import house from "../assets/img/home.svg"
import bars from "../assets/img/bars.svg"
import Encuesta from "../assets/img/Encuesta.svg"
import bd from "../assets/img/bd.svg"
import IA from "../assets/img/IA.svg"
import filled from "../assets/img/filled.svg"
import articons from "../assets/img/arcticons.svg"
import pen from "../assets/img/pen-ruler.svg"
import users from "../assets/img/users.svg"
import { Content, Header } from "antd/es/layout/layout";
import campain from "../assets/img/campain.svg"
import message from "../assets/img/message.svg"
import logo from "../assets/img/logo.svg"
import { ButtonMenu } from "../Component/Buttonmenu/buttonmenu";
import { useLocation, useNavigate } from "react-router-dom";


interface MyComponentProps {
  children: React.ReactNode;
}

const { Search } = Input;

const CustomSearch: React.FC = () => {
  return (
    <Search
      className="w-[20vw] h-[3vw] custom-search"
      placeholder="Buscar..."
      enterButton
    />
  );
};

const PrivateLayout = (props: MyComponentProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const navegation = useNavigate()
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
      <Header className="bg-[#00AEEF] h-[5vw] flex justify-between items-center p-[1.5vw]">
        <div className="flex justify-between items-center h-full w-[50vw]">
          <img className="w-[3.5vw]" src={logo}/>
          <Search className="custon-search w-[20vw] h-[3vw]" placeholder="Buscar..." enterButton />
          
        </div>
        <div className="flex justify-end items-center h-full">
          <img className="w-[2vw]" src={message}/>
          <img className="w-[2vw]" src={campain}/>
          <h1 className="w-[2.5vw] h-[2.5vw] bg-pink-200 text-white rounded-full flex items-center justify-center text-[1vw]">A</h1>
          </div>
      </Header>
      <Layout>

        <Sider
          width={"22vw"}
          className='Sider'
          collapsed={collapsed}
          collapsedWidth={"6vw"}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >

          <div className="flex flex-col items-center justify-start w-full  gap-[1.5vw]">
            <div className="flex justify-start w-full">
              <img className="w-[3vw]" src={bars} onClick={() => setCollapsed(!collapsed)} />
            </div>

            <ButtonMenu
              img={house}
              text={"Dashboard"}
              onClick={() => navegation('/')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={users}
              text={"Gestionar Usuarios"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={pen}
              text={"Gestionar Modulo"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={filled}
              text={"Gestionar Suscripcion"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={Encuesta}
              text={"Gestionar Encuestas"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={bd}
              text={"base de datos"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={IA}
              text={"Gestionar Chat Bot"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
            <ButtonMenu
              img={articons}
              text={"Configuraciones"}
              onClick={() => navegation('/users')}
              isCollapsed={collapsed}
            />
          </div>

        </Sider>
        <Content className='Content bg-[#BEEDFF] bg-opacity-35'>
          {props.children}
        </Content>
      </Layout >
    </Layout >
  )
}

export default PrivateLayout