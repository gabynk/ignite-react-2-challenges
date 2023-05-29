import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { FormikProps, useFormikContext } from "formik";
import { CashType, InitialFormikValue } from "../..";
import { ButtonsContainer, PaymentButton, PaymentInfoDescription, UserPaymentContainer } from "./styles";

export function UserPaymentButtons() {
  const { values, setFieldValue } = useFormikContext() as FormikProps<InitialFormikValue>;

  function handleChangePaymentType(type: CashType) {
    setFieldValue('paymentType', type)
  }

  return (
    <UserPaymentContainer>
      <PaymentInfoDescription>
        <CurrencyDollar size={22} />
        <div>
          Pagamento
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </PaymentInfoDescription>

      <ButtonsContainer>
        <PaymentButton
          disabled={values.paymentType === 'CREDIT'}
          onClick={() => handleChangePaymentType('CREDIT')}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentButton>
        <PaymentButton
          disabled={values.paymentType === 'DEBID'}
          onClick={() => handleChangePaymentType('DEBID')}
        >
          <Bank size={16} />
          Cartão de débito
        </PaymentButton>
        <PaymentButton
          disabled={values.paymentType === 'CASH'}
          onClick={() => handleChangePaymentType('CASH')}
        >
          <Money size={16} />
          Dinheiro
        </PaymentButton>
      </ButtonsContainer>
    </UserPaymentContainer>
  )
}