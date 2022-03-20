import { useContext, useState, useEffect } from 'react';

import { AuthContext, PaymentsProvider, PaymentsContext } from 'contexts';

import { Container, Menu, Text, Button, Table } from 'components';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout, user } = useContext(AuthContext);
  const { getPayments, paymentRecords } = useContext(PaymentsContext);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const handlePageChange = (currentPage: number, pageSize: number) => {
    setCurrentPage(currentPage), setPageSize(pageSize);
  };

  useEffect(() => {
    getPayments();
  }, []);

  // console.log('paymentRecords', paymentRecords);
  // console.log('amount', paymentRecords.length);

  return (
    <PaymentsProvider>
      <s.Wrapper>
        <Menu user={user} onLogout={logout} />
        <Container>
          <s.HeaderWrapper>
            <Text type="h1" size="extraLarge" weight="semiBold">
              Meus pagamentos
            </Text>
            <Button>Adicionar pagamento</Button>
          </s.HeaderWrapper>

          <s.TableWrapper>
            <Table
              data={paymentRecords}
              currentPage={currentPage}
              pageSize={pageSize}
              handlePageChange={handlePageChange}
              total={paymentRecords.length}
            />
          </s.TableWrapper>
        </Container>
      </s.Wrapper>
    </PaymentsProvider>
  );
}
