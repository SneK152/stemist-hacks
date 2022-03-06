import Button from "@/components/layout/Button";
import InputField from "@/components/layout/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignupPage() {
  const formik = useFormik({
    initialValues: { name: "", password: "" },
    onSubmit: (values, { setSubmitting }) => {},
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
  });
  return (
    <div className="p-8 text-center justify-center">
      <div className="text-center justify-center shadow-md p-5">
        <h1 className="text-center text-black font-bold text-4xl">
          Sign Up for the Hackthon Today!
        </h1>
        <p className="text-center py-3 font-semibold text-lg">
          Register for the amazing hackathon
        </p>
        <div className="text-center w-screen">
          <InputField name="name" error={formik.errors.name} formik={formik} />
          <InputField
            name="password"
            error={formik.errors.password}
            formik={formik}
          />
          <Button>Sign Up for STEMist Hacks</Button>
        </div>
      </div>
    </div>
  );
}
