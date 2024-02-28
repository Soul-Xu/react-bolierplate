import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Table, Tabs, Collapse, DatePicker, Checkbox, Modal } from 'antd'
import type { DatePickerProps } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import type { TabsProps } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
import AddRelation from './components/addRelation';

// @ts-ignore
import styles from "./index.module.scss";
import classnames from "classnames/bind";
import TabPane from 'antd/es/tabs/TabPane';
import TextArea from 'antd/es/input/TextArea';
import { ignore } from 'antd/es/theme/useToken';
const classNames = classnames.bind(styles);

const ExerciseDetail = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState("1")
  const [showAddRelation, setShowAddRelation] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [pdfSrc, setPdfSrc] = useState('');

  const onShowAddModal = () => {
    setShowAddRelation(true)
  }

  const onHideAddModal = () => {
    setShowAddRelation(false)
  }

  const onGoBack = () => {
    navigate("/emergency-plan/detail")
  }

  const onPreviewPDF = () => {
    console.log("onPreviewPDF")
    const element:any = document.getElementById('capture');
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      const pdfSrc:any = pdf.output('bloburl');
      setPdfSrc(pdfSrc);
      setModalVisible(true);
    });
  };

  const handleModalClose = () => {
    setModalVisible(false); // 关闭弹窗
  };


  const tabsItems: any = [
    {
      key: '1',
      label: '工单信息',
    },
    {
      key: '2',
      label: '审批意见',
      children: '审批意见',
    },
    {
      key: '3',
      label: '流程图',
      children: '流程图',
    },
    {
      key: '4',
      label: '操作日志',
      children: '操作日志',
    },
  ];

  const operations = <div className={classNames("tabs-btns")}>
    <Button className={classNames("tabs-btn")} >取消</Button>
    <Button className={classNames("tabs-btn")} onClick={onPreviewPDF} >预览PDF</Button>
    <Button className={classNames("tabs-btn")} >保存</Button>
    <Button className={classNames("tabs-btn")}  type='primary'>提交</Button>
  </div>;

  const dataSource1:any = [
    {
      sort: 1,
      stepName: "步骤一",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
      operationTime: "2024-01-29 16:00:00",
    },
    {
      sort: 2,
      stepName: "步骤二",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
      operationTime: "2024-01-29 16:00:00",
    },
    {
      sort: 3,
      stepName: "步骤三",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
      operationTime: "2024-01-29 16:00:00",
    },
  ]

  const totalRows = dataSource1.length;

  const columns1 = [
    {
      title: '步骤名称',
      dataIndex: 'stepName',
      key: 'stepName',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '执行',
      dataIndex: 'operation',
      key: 'operation',
      render: (record: any) => {
        return (
          <Checkbox />
        )
      }
    },
    {
      title: '操作时间',
      dataIndex: 'operationTime',
      key: 'operationTime',
    },
    {
      title: '故障恢复时间',
      dataIndex: 'recoveryTime',
      key: 'recoveryTime',
      onCell: (_:any, index:number) => {
        if (index === totalRows - 1) {
          return { rowSpan: totalRows };
        } else {
          return { rowSpan: 0 };
        }
      },
      render: (text: any, record: any, index: number) => {
        if (index === 0) {
          return {
            children: <div>
              111
              <p style={{ height: "20px", fontSize: "14px", color: "#373D47;", lineHeight: "20px" }}>(实际RTO=恢复时间-故障发生时间)</p>
            </div>,
            props: { rowSpan: totalRows },
          };
        } else {
          return null;
        }
      },
    },
  ]

  const dataSource2:any = [
    {
      sort: "SX2937597391",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
    },
    {
      sort: "SX2937597391",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
    },
    {
      sort: "SX2937597391",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
    },
  ]

  const columns2 = [
    {
      title: '单号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '标题描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (record: any) => {
        return (
          <a>查看详情</a>
        )
      }
    }
  ]

  const dataSource3:any = [
    {
      sort: "GJSJ2937597391",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
    },
    {
      sort: "GJSJ2937597391",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
    },
    {
      sort: "GJSJ2937597391",
      description: "描述方案描述方案描述方案描述方案描述方案描述方案描述方案描述方案",
    },
  ]

  const columns3 = [
    {
      title: '单号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '标题描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (record: any) => {
        return (
          <a>查看详情</a>
        )
      }
    }
  ]

  const onChangeTab = (key: string) => {
    console.log(key);
    setActiveTab(key)
  };

  const onChangeTime = (
    value: DatePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  
  const onTimeOk = (value: DatePickerProps['value']) => {
    console.log('onOk: ', value);
  };

  const renderContent = () => {
    return (
      <section className={classNames("content")}>
        {renderForm()}
        <div className={classNames("content-title")}>技术处理方案</div>
        {renderCollapse("场景一")}
        {renderCollapse("场景二")}
        {renderCollapse("场景三")}
    </section>
    )
  }

  const renderForm = () => {
    return (
      <section className={classNames("form")}>
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
          </Form>
        </div>
      </section>
    )
  }

  const renderCollapse = (name: string) => {
    return (
      <section className={classNames("collapse")}>
        <div className={classNames("collapse-item")}>
          <Collapse
            items={[{ key: '1', label: name, 
            children: <div>{renderCollapseItem()}</div> 
          }]}
          />
        </div>
      </section>
    )
  }

  const renderCollapseItem = () => {
    return (
      <div className={classNames("collapse-item-main")}>
        <div className={classNames("collapse-item-form")}>
          <Form name="scene-form">
            <Form.Item 
              labelAlign='right' 
              label={
                (
                  <span className={classNames("item-form-label")}>场景描述</span>
                )
              } 
            >
              <TextArea />
            </Form.Item>
            <Form.Item 
              labelAlign='right' 
              label={
                (
                  <span className={classNames("item-form-label")}>故障发生时间</span>
                )
              } 
            >
              <DatePicker showTime onChange={onChangeTime} onOk={onTimeOk} />
            </Form.Item>
          </Form>
        </div>
        <div className={classNames("collapse-item-table")}>
          <div className={classNames("table-title")}>
            <span>场景操作步骤</span>
          </div>
          <div className={classNames("table-content")}>
            {/* @ts-ignore */}
            <Table columns={columns1} dataSource={dataSource1} bordered pagination={false} />
          </div>
        </div>
        <div className={classNames("collapse-item-table")}>
          <div className={classNames("table-title")}>
            <span>跟进事项</span>
            <div className={classNames("btn")}>
              <img src={ImgAdd} />
              <div className={classNames("btn-text")}>添加</div>
            </div>
          </div>
          <div className={classNames("table-content")}>
            {/* @ts-ignore */}
            <Table columns={columns2} dataSource={dataSource2} bordered pagination={false} />
          </div>
        </div>
        <div className={classNames("collapse-item-table")}>
          <div className={classNames("table-title")}>
            <span>关联告警工单</span>
            <div className={classNames("btn")} style={{ width: "110px" }} onClick={onShowAddModal}>
              <img src={ImgAdd} />
              <div className={classNames("btn-text")}>关联创建</div>
            </div>
          </div>
          <div className={classNames("table-content")}>
            {/* @ts-ignore */}
            <Table columns={columns3} dataSource={dataSource3} bordered pagination={false} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="capture">
      <div className={classNames("container")}>
        <section className={classNames("header")}>
          <div className={classNames("header-left")}>
            应急演练
          </div>
          <div className={classNames("header-right")}>
            {/* <div className={classNames("img")}>
              <PrinterOutlined style={{ fontSize: "22px" }} />
            </div> */}
            {/* <div className={classNames("img")}><img src={ImgExpand}/></div>
            <div className={classNames("img")}><img src={ImgShrink} /></div> */}
            <div className={classNames("img")} onClick={onGoBack}><img src={ImgClose} /></div>
          </div>
        </section>
        <Tabs 
          className={classNames("tabs")} 
          defaultActiveKey="1" 
          items={tabsItems} 
          onChange={onChangeTab}
          tabBarExtraContent={operations}
        />
        { activeTab === '1' && renderContent() }
      </div>
      <AddRelation show={showAddRelation} onClose={onHideAddModal} />
      <Modal
        width={1500}
        title="PDF 预览"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <iframe src={pdfSrc} width="100%" height="800px" />
      </Modal>
    </div>
  )
}

export default ExerciseDetail