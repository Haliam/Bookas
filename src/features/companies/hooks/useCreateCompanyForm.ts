import { useState } from "react";

export interface CreateCompanyForm {
  name: string;
  category: string;
  address: string;
  phone: string;
  description: string;
}

type Step = "info" | "hours" | "done";

const INITIAL_FORM: CreateCompanyForm = {
  name: "",
  category: "",
  address: "",
  phone: "",
  description: "",
};

/** Encapsulates the multi-step create-company form state, field updates and mock submit. */
export function useCreateCompanyForm() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<Step>("info");
  const [form, setForm] = useState<CreateCompanyForm>(INITIAL_FORM);

  const set = (key: keyof CreateCompanyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(prev => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setStep("done");
  };

  const isInfoComplete = Boolean(form.name && form.category && form.address);

  return { step, setStep, form, set, loading, handleSubmit, isInfoComplete };
}
