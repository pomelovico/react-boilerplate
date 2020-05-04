import { FormikErrors, FormikTouched } from 'formik';

function fieldErrorMessageCreator<T>(
  errors: FormikErrors<T>,
  touched: FormikTouched<T>
) {
  return (field: string) => {
    return errors[field] && touched[field] ? errors[field].toString() : '';
  };
}

export default fieldErrorMessageCreator;