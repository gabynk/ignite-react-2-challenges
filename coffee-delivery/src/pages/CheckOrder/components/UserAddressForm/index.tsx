import { MapPin } from "phosphor-react";
import { useFormikContext, FormikProps } from 'formik';
import { InitialFormikValue } from "../..";
import { Input } from "../../../../components/Input";
import { HalfWidthInput, InputRow, SmallWidthInput, UserAddressContainer, UserInfoDescription } from "./styles";

export function UserAddressForm() {
  const { values, setFieldValue } = useFormikContext() as FormikProps<InitialFormikValue>;

  return (
    <UserAddressContainer>
      <UserInfoDescription>
        <MapPin size={22} />
        <div>
          Endereço de Entrega
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </UserInfoDescription>
      <form>
        <HalfWidthInput>
          <Input
            id="cep"
            name="cep"
            label="CEP"
            placeholder="CEP"
            value={values.cep}
            onChange={(value) => setFieldValue('cep', value.target.value)}
          />
        </HalfWidthInput>

        <Input
          id="street"
          name="street"
          label="Rua"
          placeholder="Rua"
          value={values.street}
          onChange={(value) => setFieldValue('street', value.target.value)}
        />

        <InputRow>
          <HalfWidthInput>
            <Input
              id="houseNumber"
              name="houseNumber"
              label="Número"
              placeholder="Número"
              value={values.houseNumber}
              onChange={(value) => setFieldValue('houseNumber', value.target.value)}
            />
          </HalfWidthInput>
          <Input
            id="complement"
            name="complement"
            label="Complemento"
            placeholder="Complemento"
            value={values.complement}
            onChange={(value) => setFieldValue('complement', value.target.value)}
          />
        </InputRow>

        <InputRow>
          <HalfWidthInput>
            <Input
              id="neighborhood"
              name="neighborhood"
              label="Bairro"
              placeholder="Bairro"
              value={values.neighborhood}
              onChange={(value) => setFieldValue('neighborhood', value.target.value)}
            />
          </HalfWidthInput>
          <Input
            id="city"
            name="city"
            label="Cidade"
            placeholder="Cidade"
            value={values.city}
            onChange={(value) => setFieldValue('city', value.target.value)}
          />
          <SmallWidthInput>
            <Input
              id="state"
              name="state"
              label="UF"
              placeholder="UF"
              value={values.state}
              onChange={(value) => setFieldValue('state', value.target.value)}
            />
          </SmallWidthInput>
        </InputRow>
      </form>
    </UserAddressContainer>
  )
}