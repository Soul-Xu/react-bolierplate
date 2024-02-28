// 添加跟进事项弹窗

import React, { useState } from 'react'
import { Divider, Modal, Table } from 'antd'
/** images */
// @ts-ignore
import ImgExpand from '../../../static/images/expand.png'
// @ts-ignore
import ImgShrink from '../../../static/images/shrink.png'
// @ts-ignore
import ImgClose from '../../../static/images/close.png'

// @ts-ignore
import styles from "../index.module.scss";
import classnames from "classnames/bind";
const classNames = classnames.bind(styles);

interface DataType {
  key: React.Key;
  sort: string;
  title: string;
}

interface Props {
  show: boolean,
  onClose: () => void
}

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    sort: record.sort,
  }),
};

const AddRelation = (props: Props) => {
  const { show, onClose } = props
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  const dataSource:any = [
    {
      key: 1,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 2,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 3,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 4,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 5,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 6,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 7,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 8,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 9,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 10,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 11,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
    {
      key: 12,
      sort: "SX2937597391",
      title: "事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题事件标题",
    },
  ]

  const columns = [
    {
      title: '事件单号',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: '事件标题',
      dataIndex: 'title',
      key: 'title',
    },
  ]

  return (
    <Modal
      width={800}
      className={classNames("modal")}
      title={
        <div>
          <div className={classNames("modal-header")}>
            <div className={classNames("modal-header-left")}>关联事件</div>
            <div className={classNames("modal-header-right")}>
              {/* <div className={classNames("img")}><img src={ImgExpand}/></div>
              <div className={classNames("img")}><img src={ImgShrink} /></div> */}
              <div className={classNames("img")} onClick={() => onClose()}><img src={ImgClose} /></div>
            </div>
          </div>
          <Divider style={{ marginTop: 0, marginBottom: 0 }}/>
        </div>
      }
      visible={show}
      closeIcon={null}
      onCancel={onClose} // 取消按钮的处理函数
      onOk={() => {}} // 确定按钮的处理函数
      okText="提交"
      cancelText="取消"
    >
      <div className={classNames("modal-content")}>
        <Table 
          // @ts-ignore
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns} 
          dataSource={dataSource} 
          pagination={false} 
        />
      </div>
    </Modal>
  )
}

export default AddRelation