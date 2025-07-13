import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import frontPage from "../../assets/images/products/caras-portadas.jpg";
import {
  Form,
  FormFrontPage,
  FormContainer,
  FormTitle,
  FormGroup,
  FormLabel,
  FormGroupInput,
  FormInput,
  FormInputError,
  FormButton,
  FormMessageSuccess,
  FormMessageError,
  FormFooter,
  CircleCheck,
  CircleXmark,
  TriangleExclamation
} from "./SubscriptionForm.styles";

const regex: Record<keyof FormValue, RegExp> = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

type FormValue = {
  name: string;
  email: string;
};

type ValidFields = {
  name: boolean | undefined;
  email: boolean | undefined;
};

type Messages = {
  error: boolean;
  success: boolean;
};

const SubscriptionForm: React.FC = () => {
  const [formValue, setFormValue] = useState<FormValue>({ name: "", email: "" });
  const [validFields, setValidFields] = useState<ValidFields>({ name: undefined, email: undefined });
  const [messages, setMessages] = useState<Messages>({ error: false, success: false });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (messages.success) {
      timeout = setTimeout(() => {
        setMessages(prev => ({ ...prev, success: false }));
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [messages.success]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name" || name === "email") {
      setFormValue(prev => ({ ...prev, [name]: value }));
      validateField(name, value);
    }
  };

  const validateField = (field: keyof FormValue, value: string) => {
    const isValid = regex[field].test(value);
    setValidFields(prev => ({ ...prev, [field]: isValid }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasInvalidField = Object.values(validFields).some(value => !value);

    if (hasInvalidField) {
      setMessages({ error: true, success: false });
    } else {
      setMessages({ success: true, error: false });
      setFormValue({ name: "", email: "" });
      setValidFields({ name: undefined, email: undefined });
    }
  };

  const getFieldState = (value: string, isValid?: boolean) =>
  value !== "" ? isValid : undefined;

  return (
    <FormContainer>
      <FormFrontPage>
        <img src={frontPage} alt="portadas de revistas cara" />
      </FormFrontPage>

      <Form onSubmit={handleSubmit}>
        <FormTitle>Suscríbete y descubre el mundo de la cultura y el estilo</FormTitle>

        <FormGroup>
          <FormLabel htmlFor="name" validField={getFieldState(formValue.name, validFields.name)}>Nombre</FormLabel>
          <FormGroupInput>
            <FormInput
              type="text"
              name="name"
              value={formValue.name}
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
              validField={getFieldState(formValue.name, validFields.name)}
            />
            <CircleCheck validField={getFieldState(formValue.name, validFields.name)} />
            <CircleXmark validField={getFieldState(formValue.name, validFields.name)} />
          </FormGroupInput>
          <FormInputError show={validFields.name === false && formValue.name !== ""}>
            El nombre solo puede contener letras.
          </FormInputError>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="email" validField={getFieldState(formValue.email, validFields.email)}>Correo</FormLabel>
          <FormGroupInput>
            <FormInput
              type="email"
              name="email"
              value={formValue.email}
              placeholder="Ingresa tu correo electrónico"
              onChange={handleChange}
              validField={getFieldState(formValue.email, validFields.email)}
            />
            <CircleCheck validField={getFieldState(formValue.email, validFields.email)} />
            <CircleXmark validField={getFieldState(formValue.email, validFields.email)} />
          </FormGroupInput>
          <FormInputError show={!validFields.email && formValue.email !== ""}>
            El correo solo puede contener letras, números, puntos, guiones y guion bajo.
          </FormInputError>
        </FormGroup>

        <FormButton type="submit">Enviar</FormButton>

        <FormMessageError message={messages.error}>
          <TriangleExclamation /><b> Error:</b> Por favor rellena el formulario correctamente.
        </FormMessageError>

        <FormMessageSuccess message={messages.success}>
          ¡Formulario enviado exitosamente!
        </FormMessageSuccess>

        <FormFooter>Puedes cancelar la suscripción en cualquier momento</FormFooter>
      </Form>
    </FormContainer>
  );
};

export default SubscriptionForm;
