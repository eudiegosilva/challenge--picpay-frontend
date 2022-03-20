import { Table as AntdTable, Tag as AntdTag, Space as AntdSpace } from 'antd';

import { formatDate, getHourFromDate } from 'core/helpers/date';
import { formatCurrency } from 'core/helpers/currency';

import { Text } from 'components';
import { PencilIcon, BinIcon } from 'assets/icons';
import { theme } from 'styles';
import { PaymentRecordProps } from 'core/types/payments/globals';

import * as s from './styles';

export type TableProps = {
  data: PaymentRecordProps[];
  currentPage: number;
  pageSize: number;
  handlePageChange: (currentPage: number, pageSize: number) => void;
  total: number;
};

const sortText = (
  firstRecord: PaymentRecordProps,
  secondRecord: PaymentRecordProps,
  parameter: 'name' | 'title' | 'date'
) => {
  return firstRecord[parameter].localeCompare(secondRecord[parameter]);
};

const sortNumber = (
  firstRecord: PaymentRecordProps,
  secondRecord: PaymentRecordProps
) => {
  return firstRecord.value - secondRecord.value;
};

const Table = ({
  data,
  currentPage,
  pageSize,
  total,
  handlePageChange
}: TableProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: (text: string, record: PaymentRecordProps) => (
        <s.UserInfoWrapper>
          <s.UserImageWrapper>
            <s.UserImage src={text} alt={record.name} />
          </s.UserImageWrapper>
        </s.UserInfoWrapper>
      )
    },
    {
      title: 'Usuário',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: PaymentRecordProps) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {name}
            </Text>
          </s.UserInfo>
          <s.UserInfo>
            <Text type="span" color="black" size="extraSmall" opacity="medium">
              {`@${record.username}`}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (
        firstRecord: PaymentRecordProps,
        secondRecord: PaymentRecordProps
      ) => {
        return sortText(firstRecord, secondRecord, 'name');
      }
    },
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      render: (title: string) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {title}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (
        firstRecord: PaymentRecordProps,
        secondRecord: PaymentRecordProps
      ) => {
        return sortText(firstRecord, secondRecord, 'title');
      }
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      render: (date: string, record: PaymentRecordProps) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {formatDate(date)}
            </Text>
          </s.UserInfo>
          <s.UserInfo>
            <Text type="span" color="black" size="extraSmall" opacity="medium">
              {getHourFromDate(record.date)}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (
        firstRecord: PaymentRecordProps,
        secondRecord: PaymentRecordProps
      ) => {
        return sortText(firstRecord, secondRecord, 'date');
      }
    },
    {
      title: 'Valor',
      key: 'value',
      dataIndex: 'value',
      render: (value: number) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small" weight="semiBold">
              {formatCurrency(value)}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (
        firstRecord: PaymentRecordProps,
        secondRecord: PaymentRecordProps
      ) => {
        return sortNumber(firstRecord, secondRecord);
      }
    },
    {
      title: 'Situação',
      key: 'isPayed',
      dataIndex: 'isPayed',
      render: (status: string) => {
        if (status) {
          return <AntdTag color={theme.colors.primary}>PAGO</AntdTag>;
        }
        return <AntdTag color={theme.colors.black}>PENDENTE</AntdTag>;
      },
      filters: [
        { text: 'Pago', value: true },
        { text: 'Pendente', value: false }
      ],
      onFilter: (
        value: string | number | boolean,
        record: PaymentRecordProps
      ) => {
        return record.isPayed === value;
      }
    },
    {
      title: 'Ações',
      key: 'action',
      render: (record: PaymentRecordProps) => {
        return (
          <AntdSpace size="middle">
            <s.PencilIconWrapper
              onClick={() => console.log('call EDIT', record.name)}
            >
              <PencilIcon />
            </s.PencilIconWrapper>
            <s.BinIconWrapper
              onClick={() => console.log('call DELETE', record.name)}
            >
              <BinIcon />
            </s.BinIconWrapper>
          </AntdSpace>
        );
      }
    }
  ];

  return (
    <s.Wrapper aria-label="Table component">
      <AntdTable
        columns={columns}
        dataSource={data}
        pagination={{
          position: ['bottomRight'],
          current: currentPage,
          pageSize: pageSize,
          total: total,
          onChange: (currentPage, pageSize) => {
            handlePageChange(currentPage, pageSize);
          }
        }}
      />
    </s.Wrapper>
  );
};

export default Table;
