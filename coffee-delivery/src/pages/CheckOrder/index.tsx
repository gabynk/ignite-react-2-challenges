import { Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ShoppingCart } from "./components/ShoppingCart";
import { UserAddressForm } from "./components/UserAddressForm";
import { UserPaymentButtons } from "./components/UserPaymentButtons";
import { formSchema } from "./components/UserAddressForm/formSchema";

import { UserContext } from "../../contexts/UserContext";

import {
  CheckOrderContainer,
  ShoppingCartInfoContainer,
  Title,
  UserInfoContainer
} from "./styles";

export type CashType = 'CREDIT' | 'DEBID' | 'CASH';

export interface InitialFormikValue {
  cep: string;
  street: string;
  houseNumber: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentType: CashType;
}

export function CheckOrder() {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const initialValues: InitialFormikValue = {
    cep: '',
    street: '',
    houseNumber: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    paymentType: 'CREDIT',
  }

  async function handleSubmitForm(values: InitialFormikValue) {
    addUser(values);
    navigate("/order-success");
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={handleSubmitForm}
    >
      <CheckOrderContainer>
        <UserInfoContainer>
          <Title>Complete seu pedido</Title>

          <UserAddressForm />

          <UserPaymentButtons />
        </UserInfoContainer>

        <ShoppingCartInfoContainer>
          <Title>Cafés selecionados</Title>

          <ShoppingCart />
        </ShoppingCartInfoContainer>
      </CheckOrderContainer>
    </Formik>
  )
}