import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
/** images */
// @ts-ignore
import ImgCenter from '../../static/images/center.png'
// @ts-ignore
import ImgArrow from '../../static/images/arrow.png'
// @ts-ignore
import ImgShape from '../../static/images/shape.png'
// @ts-ignore
import ImgAvatar from '../../static/images/avatar.png'
// @ts-ignore
import ImgPlanIcon from '../../static/images/plan_icon.png'
// @ts-ignore
import ImgProcessIcon from '../../static/images/process_icon.png'
// @ts-ignore
import ImgRecordIcon from '../../static/images/record_icon.png'

/** css */
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);
const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const menuItems: MenuProps['items'] = [
  getItem('应急预案', 'emergency-plan', <img src={ImgPlanIcon} style={{ width: "16px", height: "16px" }}/>),
  getItem('技术处理方案', 'processing-plan', <img src={ImgProcessIcon} style={{ width: "16px", height: "16px" }}/>),
  getItem('演练记录', 'exercise-record', <img src={ImgRecordIcon} style={{ width: "16px", height: "16px" }}/>),
]

interface PageContainerProps {
  children?: React.ReactNode
}


const BasicLayout: React.FC<PageContainerProps> = ({children}) => {
  const [selectedMenu, setSelectMenu] = useState("")
  let navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onChangeMenu = (menuItem:any) => {
    setTimeout(() => {
      navigate(`/${menuItem.key}`);
    }, 1000)
    setSelectMenu(`${menuItem.key}`)
  }

  const renderMenuLabel = (menuKey: string) => {
    const labelMap: { [key: string]: string } = {
      '': "应急预案",
      'emergency-plan': "应急预案",
      'processing-plan': "技术处理方案",
      'exercise-record': "演练记录"
    }

    return labelMap[menuKey];
  }

  return (
    <Layout>
      <Header className={classNames('header')}>
        <div className={classNames('left')}>
          <div className={classNames('left-item')}>
            <img src={ImgCenter} />
            <span>应用中心</span>
          </div>
          <span className={classNames('left-arrow')}>
            <img src={ImgArrow} />
          </span>
          <div className={classNames('left-item')}>
            <div className={classNames('img-box')}>
              <img src={ImgShape} />
            </div>
            <span>{renderMenuLabel(selectedMenu)}</span>
          </div>
        </div>
        <div className={classNames('right')}>
          <img src={ImgAvatar} />
          <span>用户名</span>
        </div>
      </Header>
      <Layout style={{ marginTop: "16px" }}>
        <Sider width={210} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            // defaultSelectedKeys={['emergency-plan']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={onChangeMenu}
          />
        </Sider>
        <Layout style={{ padding: '0 0 0 16px' }}>
          <Content
            style={{
              margin: 0,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;