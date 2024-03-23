import '../css/styles.css';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Select, Space } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

export const Registers = () => {
  const [values, setValues] = useState({
    idcard: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [selector1, selectorSet1] = useState(false);
  const [selector2, selectorSet2] = useState(false);
  const handleChange1 = (value: string) => {
    if (value === '1') {
      selectorSet1(true);
      selectorSet2(false);
    } else if (value === '2') {
      selectorSet1(false);
      selectorSet2(true);
    } else {
      selectorSet1(false);
      selectorSet2(false);
    }
    console.log(`selected ${value}`);
  };

  const handleChange2 = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleChange3 = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleInputChange = (event: any) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleInputChangeidcard = (event: any) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [checkIdcard, setCheckIdcard] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (values.firstName && values.lastName && values.idcard) {
      setValid(true);
    }
    if (values.idcard.length !== 13) {
      setCheckIdcard(true);
      setValid(false);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3></h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="เลขบัตรประชาชน 13 หลัก"
            name="idcard"
            value={values.idcard}
            onChange={handleInputChangeidcard}
          />
        )}
        { !valid && checkIdcard  && (
          <span id="idcard-error">ตรวจสอบบัตรประชาชนให้ครบ 13 หลัก</span>
        )}
        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="ชื่อ"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.firstName && (
          <span id="first-name-error">โปรดใส่ชื่อ</span>
        )}
        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="นามสกุล"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.lastName && (
          <span id="last-name-error">โปรดใส่ นามสกุล</span>
        )}
        {!valid && (
          <div id="claim">
            <h1>การเเจ้งซ่อม</h1>
            <Space id="selectClaim">
              <Select
                defaultValue="first"
                style={{ width: 450 }}
                onChange={handleChange1}
                options={[
                  { value: 'first', label: 'เลือก' },
                  {
                    value: '1',
                    label: 'เเสกนบัตรหรือแอพ เเล้วเข้าเปิดประตูไม่ได้',
                  },
                  { value: '2', label: 'ประตูเปิดไม่ได้' },
                ]}
              />
              {selector1 && (
                <Select
                  defaultValue="first"
                  style={{ width: 450 }}
                  onChange={handleChange2}
                  options={[
                    { value: 'first', label: 'เลือก' },
                    {
                      value: '1.1',
                      label: 'สถานะไฟสีเขียว เเต่เเม่เหล็กไม่คลายล็อค',
                    },
                    { value: '1.2', label: 'สถานะไปเป็นสีเเดง' },
                  ]}
                />
              )}
              {selector2 && (
                <Select
                  defaultValue="first"
                  style={{ width: 450 }}
                  onChange={handleChange3}
                  options={[
                    { value: 'first', label: 'เลือก' },
                    {
                      value: '2.1',
                      label: 'กดปุ่ม Exit เเต่เเม่เหล็กไม่คลายล็อค',
                    },
                    {
                      value: '2.2',
                      label: 'เเสกนบัตรหรือแอพ ไม่มีอะไรเกิดขึ้น',
                    },
                  ]}
                />
              )}
            </Space>
          </div>
        )}

        {!valid && (
          <button className="form-field" type="submit">
            บันทึกข้อมูล
          </button>
        )}
      </form>
    </div>
  );
};
