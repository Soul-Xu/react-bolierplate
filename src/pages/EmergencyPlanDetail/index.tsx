import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Input, Table } from 'antd'
/** images */
// @ts-ignore
import ImgExpand from '../../static/images/expand.png'
// @ts-ignore
import ImgShrink from '../../static/images/shrink.png'
// @ts-ignore
import ImgClose from '../../static/images/close.png'
// @ts-ignore
import ImgAdd from '../../static/images/add.png'

/** components */
import DropExercise from './components/dropExercise';

// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

const PlanDetail = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [showDropExercise, setShowDropExercise] = useState(false)

  const onShowAddModal = () => {
    setShowDropExercise(true)
  }

  const onHideAddModal = () => {
    setShowDropExercise(false)
  }

  const dataSource1:any = [
    {
      sort: 1,
      sceneName: "场景一",
      technogyProcess: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
      urgency: "高",
      decisionMaker: "黄志之"
    },
    {
      sort: 2,
      sceneName: "场景一",
      technogyProcess: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
      urgency: "高",
      decisionMaker: "黄志之"
    },
    {
      sort: 3,
      sceneName: "场景一",
      technogyProcess: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
      urgency: "高",
      decisionMaker: "黄志之"
    },
  ]

  const columns1 = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '场景名称',
      dataIndex: 'sceneName',
      key: 'sceneName',
    },
    {
      title: '技术处置方案',
      dataIndex: 'technogyProcess',
      key: 'technogyProcess',
    },
    {
      title: '应急级别',
      dataIndex: 'urgency',
      key: 'urgency',
    },
    {
      title: '决策人',
      dataIndex: 'decisionMaker',
      key: 'decisionMaker',
    },
  ]

  const dataSource2:any = [
    {
      sort: 1,
      exerciseNo: "YJYL2937591",
      scenarioInvolved: "场景一",
      exerciseDate: "2024-01-29",
    },
    {
      sort: 2,
      exerciseNo: "YJYL2937591",
      scenarioInvolved: "场景一，场景三",
      exerciseDate: "2024-01-29",
    },
    {
      sort: 3,
      exerciseNo: "YJYL2937591",
      scenarioInvolved: "场景二，场景三",
      exerciseDate: "2024-01-30",
    },
  ]

  const columns2 = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '演练单号',
      dataIndex: 'exerciseNo',
      key: 'exerciseNo',
    },
    {
      title: '涉及场景',
      dataIndex: 'scenarioInvolved',
      key: 'scenarioInvolved',
    },
    {
      title: '演练日期',
      dataIndex: 'exerciseDate',
      key: 'exerciseDate',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (record: any) => {
        console.log("record", record)
        return (
          <a onClick={goToExercise}>查看详情</a>
        )
      }
    },
  ]

  const onGoBack = () => {
    navigate("/emergency-plan")
  }

  const goToExercise = () => {
    navigate("/emergency-exercise/detail")
  }

  return (
    <div className={classNames("container")}>
      <section className={classNames("header")}>
        <div className={classNames("header-left")}>
          应急预案
        </div>
        <div className={classNames("header-right")}>
          {/* <div className={classNames("img")}>
            <img src={ImgExpand}/></div>
          <div className={classNames("img")}><img src={ImgShrink} /></div> */}
          <div className={classNames("img")} onClick={onGoBack}><img src={ImgClose} /></div>
        </div>
      </section>
      <section className={classNames("content")}>
        <div className={classNames("form")}>
          <div className={classNames("form-title")}>应急预案</div>
          <div className={classNames("form-content")}>
            <Form className={classNames("form-content-main")} form={form} name="emergency-plan">
              <Form.Item 
                className={classNames("content-item")} 
                label={
                  (
                    <span className={classNames("content-item-label")}>系统名称</span>
                  )
                } 
                name="systemName"
              >
                <Input />
              </Form.Item>
              <Form.Item 
                className={classNames("content-item")} 
                label={
                  (
                    <span className={classNames("content-item-label")}>RTO</span>
                  )
                } 
                name="rto">
                <Input />
              </Form.Item>
              <Form.Item 
                className={classNames("content-item")} 
                label={
                  (
                    <span className={classNames("content-item-label")}>RPO</span>
                  )
                } 
                name="rpo"
              >
                <Input />
              </Form.Item>
              <Form.Item 
                className={classNames("content-item")} 
                label={
                  (
                    <span className={classNames("content-item-label")}>系统编号</span>
                  )
                } 
                name="systemNo"
              >
                <Input />
              </Form.Item>
              <Form.Item 
                className={classNames("content-item")} 
                label={
                  (
                    <span className={classNames("content-item-label")}>运维部门</span>
                  )
                } 
                name="operatorDepartment"
              >
                <Input />
              </Form.Item>
              <Form.Item 
                className={classNames("content-item")} 
                label={
                  (
                    <span className={classNames("content-item-label")}>运维部门负责人</span>
                  )
                } 
                name="operatorAuthor"
              >
                <Input />
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className={classNames("table")}>
          <div className={classNames("table-title")}>
            <span>技术处理方案</span>
            <div className={classNames("btn")} onClick={onShowAddModal}>
              <img src={ImgAdd} />
              <div className={classNames("btn-text")}>发起演练</div>
            </div>
          </div>
          <div className={classNames("table-content")}>
            <Table 
              columns={columns1} 
              dataSource={dataSource1} 
              pagination={false} 
            />
          </div>
        </div>
        <div className={classNames("table")}>
          <div className={classNames("table-title")}>
            <span>演练记录</span>
          </div>
          <div className={classNames("table-content")}>
            <Table 
              columns={columns2} 
              dataSource={dataSource2} 
              pagination={{ 
                total: dataSource2.length,
                pageSize: 10
              }}
            />
          </div>
        </div>
      </section>
      <DropExercise show={showDropExercise} onClose={onHideAddModal} />
    </div>
  )
}

export default PlanDetail