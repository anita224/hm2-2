import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { FiUserPlus } from 'react-icons/fi';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledField,
  StyledError,
  StyledLable,
  Wrapper,
  Button,
} from './ContactsForm.styled';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('* Name is required'),
  number: Yup.string().min(6).max(10).required(''),
});

const initialValues = { name: '', number: '' };

export const ContactsForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactsSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLable>
            Name
            <StyledField name="name" placeholder="Jane" />
            <StyledError component="div" name="name" />
          </StyledLable>

          <StyledLable>
            Number
            <StyledField name="number" placeholder="Enter Phone" />
            <StyledError component="div" name="number" />
          </StyledLable>

          <Button type="submit">
            <FiUserPlus size={26} />
          </Button>
        </StyledForm>
      </Formik>
    </Wrapper>
  );
};

ContactsForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
