import { object, string } from 'yup';

export const formSchema = object({
  cep: string().required(),
  street: string().required(),
  houseNumber: string().required(),
  complement: string().required(),
  neighborhood: string().required(),
  city: string().required(),
  state: string().required(),
});