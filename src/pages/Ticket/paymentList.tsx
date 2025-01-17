import { TicketAPI } from "api";
import Page from "components/common/Page";
import React, { useEffect } from "react";

const PaymentList = () => {
  useEffect(() => {
    TicketAPI.listPayments();
  }, []);

  return (
    <Page title="티켓 구매">
      <h1>구매 내역</h1>
    </Page>
  );
};

export default PaymentList;
