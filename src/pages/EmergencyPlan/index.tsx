import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Pagination } from 'antd'
import BasicLayout from '../../layout/BasicLayout';
/** css */
// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

const EmergencyPlan = () => {
  const navigate = useNavigate()

  const dataSource = [
    {
      emergencyPlanNo: "NO.YW283648712",
      systemName: "运维系统",
      systemNo: "3001",
      technogyProcess: "technogyProcesstechnogyProcesstechnogyProcesstechnogyProcesstechnogyProcesstechnogyProcess",
      rto: "20分钟",
      rpo: "30分钟",
      keyProject: "应急预案"
    },
    {
      emergencyPlanNo: "NO.YW283648722",
      systemName: "运维系统",
      systemNo: "3001",
      technogyProcess: "technogyProcesstechnogyProcesstechnogyProcesstechnogyProcesstechnogyProcesstechnogyProcess",
      rto: "20分钟",
      rpo: "30分钟",
      keyProject: "应急预案"
    },
  ]

  const columns = [
    {
      title: '应急预案编号',
      dataIndex: 'emergencyPlanNo',
      key: 'emergencyPlanNo',
    },
    {
      title: '系统名称',
      dataIndex: 'systemName',
      key: 'systemName',
    },
    {
      title: '系统编号',
      dataIndex: 'systemNo',
      key: 'systemNo',
    },
    {
      title: '技术处置方案',
      dataIndex: 'technogyProcess',
      key: 'technogyProcess',
    },
    {
      title: 'RTO',
      dataIndex: 'rto',
      key: 'rto',
    },
    {
      title: 'RPO',
      dataIndex: 'rpo',
      key: 'rpo',
    },
    {
      title: '关键业务',
      dataIndex: 'keyProject',
      key: 'keyProject',
    },
  ]

  const onClickRow = (e: any) => {
    console.log("onClickRow", e)
    navigate("/emergency-plan/detail")
  }

  return (
    <div>
      <BasicLayout>
        <div className={classNames("table")}>
          <Table 
            columns={columns} 
            dataSource={dataSource} 
            pagination={false} 
            onRow={(record) => {
              return {
                onClick: (event) => {onClickRow(event)}, // 点击行
                onDoubleClick: (event) => {},
                onContextMenu: (event) => {},
                onMouseEnter: (event) => {}, // 鼠标移入行
                onMouseLeave: (event) => {},
              };
            }}  
          />
        </div>
        <div className={classNames("pagination")}>
          <Pagination
            total={dataSource.length}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
          />
        </div>
      </BasicLayout>
    </div>
  );
};

export default EmergencyPlan;