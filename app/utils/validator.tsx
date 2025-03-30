import { data } from 'react-router';

import validator from 'validator';
import sanitize from 'sanitize-html';

type ValidatorResponse = {
  success: boolean,
  value: {
    [key: string]: string
  },
  errors: {
    [key: string]: string
  },
  errorMsg?: string | Error,
};

const { isEmpty, isEmail, isMobilePhone } = validator;
export function contactUsValidator(formData: FormData) {
  const result: ValidatorResponse = {
    success: true,
    value: {},
    errors: {},
  };

  try {
    for (let [key, val] of formData) {
      const sanitized: string = sanitize(val as string);
      if (isEmpty(sanitized)) {
        result.success = false;
        result.errors[key] = `Please insert your ${key}`;
        continue;
      }

      if (key === 'email' && !isEmail(sanitized, { allow_underscores: true })) {
        result.success = false;
        result.errors[key] = `Email is invalid`;
        continue;
      }

      if (key === 'phone' && !isMobilePhone(sanitized)) {
        result.success = false;
        result.errors[key] = `Phone number is invalid`;
        continue;
      }

      result.value[key] = sanitized;
    }
  } catch (error: any) {
    result.success = false;
    result.errorMsg = 'An error occured. Please contact us later';
  }

  return data(result, { status: 200 });
}