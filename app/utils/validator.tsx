import validator from 'validator';

type ValidatorResponse = {
  valid: boolean,
  errors: {
    [key: string]: string
  },
  errorMsg?: string | Error,
};

const { isEmpty, isEmail, isMobilePhone } = validator;
export function contactUsValidator(formData: { [key: string]: string }) {
  const result: ValidatorResponse = {
    valid: true,
    errors: {},
  };

  try {
    for (let key in formData) {
      const val = formData[key];
      if (isEmpty(val)) {
        result.valid = false;
        result.errors[key] = `Please insert your ${key === 'email' ? 'e-mail' : key}`;
        continue;
      }

      if (key === 'email' && !isEmail(val, { allow_underscores: true })) {
        result.valid = false;
        result.errors[key] = `E-mail is invalid`;
        continue;
      }

      if (key === 'phone' && !isMobilePhone(val)) {
        result.valid = false;
        result.errors[key] = `Phone number is invalid. Please remove any separator like dash (-) or dot (.)`;
        continue;
      }
    }
  } catch (error: any) {
    result.valid = false;
    result.errorMsg = 'An error occured. Please contact us later';
  }

  return result;
}