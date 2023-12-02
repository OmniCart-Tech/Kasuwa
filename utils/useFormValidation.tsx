import { useState, useCallback } from "react";

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback(
    (name: string, value: string, rules: ValidationRule): string => {
      if (rules.required && !value.trim()) {
        return `${name} is required`;
      }

      if (rules.minLength && value.length < rules.minLength) {
        return `${name} must be at least ${rules.minLength} characters`;
      }

      if (rules.maxLength && value.length > rules.maxLength) {
        return `${name} must be no more than ${rules.maxLength} characters`;
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return `${name} format is invalid`;
      }

      if (rules.custom && !rules.custom(value)) {
        return `${name} is invalid`;
      }

      return "";
    },
    []
  );

  const validateForm = useCallback(
    (formData: Record<string, string>, validationRules: Record<string, ValidationRule>) => {
      const newErrors: ValidationErrors = {};

      Object.keys(validationRules).forEach((field) => {
        const error = validateField(field, formData[field] || "", validationRules[field]);
        if (error) {
          newErrors[field] = error;
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [validateField]
  );

  const clearError = useCallback((field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    errors,
    validateForm,
    clearError,
    validateField,
  };
};
