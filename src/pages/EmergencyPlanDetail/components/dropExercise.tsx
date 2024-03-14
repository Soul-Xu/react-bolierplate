// 添加跟进事项弹窗

import React, { useState } from 'react'
import { Divider, Modal, Table, Button } from 'antd'
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
  scene: string;
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
    scene: record.scene,
  }),
};

const DropExercise = (props: Props) => {
  const { show, onClose } = props
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  const dataSource:any = [
    {
      key: 1,
      scene: "场景一",
    },
    {
      key: 2,
      scene: "场景二",
    },
    {
      key: 3,
      scene: "场景三",
    },
    {
      key: 4,
      scene: "场景名称",
    },
    {
      key: 5,
      scene: "场景名称",
    },
    {
      key: 6,
      scene: "场景名称",
    },
    {
      key: 7,
      scene: "场景名称",
    },
    {
      key: 8,
      scene: "场景名称",
    },
    {
      key: 9,
      scene: "场景名称",
    },
    {
      key: 10,
      scene: "场景名称",
    },
    {
      key: 11,
      scene: "场景名称",
    },
    {
      key: 12,
      scene: "场景名称",
    },
  ]

  const columns = [
    {
      title: '场景名称',
      dataIndex: 'scene',
      key: 'scene',
    },
  ]

  return (
    <Modal
      width={800}
      className={classNames("modal")}
      title={
        <div>
          <div className={classNames("modal-header")}>
            <div className={classNames("modal-header-left")}>发起演练</div>
            <div className={classNames("modal-header-right")}>
              {/* <div className={classNames("img")}><img src={ImgExpand}/></div>
              <div className={classNames("img")}><img src={ImgShrink} /></div> */}
              <Button type='text' onClick={() => onClose()}>返回</Button>
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

export default DropExercise