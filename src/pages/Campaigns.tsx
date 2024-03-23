import { DatePicker, Table } from 'antd';
import { useState } from 'react';

//ข้อมูลที่เเสดงในตาราง
const dataSource = [
  {
    id: '1234567891234',
    key: '1',
    name: 'Mike',
    code: 30,
    claim: 'เเสกนบัตรไม่ได้',
    status: 'กำลังซ่อม',
  },
  {
    id: '789546',
    key: '1',
    name: 'John',
    code: 10,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: '789345',
    key: '1',
    name: 'Jimmy',
    code: 125,
    claim: 'รายละเอียด (click)',
    status: 'กำลังซ่อม',
  },
  {
    id: 'xxxx',
    key: '1',
    name: 'Mike',
    code: 30,
    claim: 'เเสกนบัตรไม่ได้',
    status: 'กำลังซ่อม',
  },
];

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'ชื่อ-นามสกุล',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'รหัส',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'การเเจ้งซ่อม',
    dataIndex: 'claim',
    key: 'claim',
  },
  {
    title: 'สถานะ',
    dataIndex: 'status',
    key: 'status',
  },
];
export const Campaigns = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  return (
    <>
      <div className="mb-[20px] rounded-lg bg-blue-400 p-4 text-white">
        <div id="timepicker">
          <div id="start">
            <h1>START DATE</h1>
            <DatePicker onChange={(date: any) => setSelectedDate(date)} />
          </div>
          <div>
            <h1>END DATE</h1>
            <DatePicker onChange={(date: any) => setSelectedDate1(date)} />
          </div>
          <div></div>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};
