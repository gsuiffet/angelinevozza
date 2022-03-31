import React from "react";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "../components/InputText";
import { toast } from "react-toastify";
import ToastMessage from "./ToastMessage";

const schema = yup.object().shape({
  name: yup.string()
    .required("Oups vous avez oublié d'entrer votre nom"),
  email: yup.string()
    .email("Votre email n'est pas valide")
    .required("Oups vous avez oublié d'entrer votre email"),
})

const ContactForm = () => {
  const form = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const {register, handleSubmit, formState, setError} = form;
  const {errors, isSubmitting, isValid, isSubmitSuccessful} = formState;

  const onSubmit = async (data: any) => {
    try {
      const {ok} = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!ok) {
        toast.error(<ToastMessage />, {
          autoClose: false,
          closeOnClick: false,
          style: {
            cursor: "default",
          }
        });
        setError("new error", {});
      }
    } catch (e) {
      toast.error(<ToastMessage />, {
        autoClose: false,
        closeOnClick: false,
        style: {
          cursor: "default",
        }
      });
      setError("new error", {});
    }
  }

  if (isSubmitSuccessful) {
    return <p className="font-medium">Bien reçu ! À bientôt 😀 Merci</p>
  }

  return <FormProvider {...form}>
    <form
      className="w-full max-w-lg bg-white rounded-3xl p-12"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <InputText
            label="Nom"
            className={errors.name && errors.name.message ? "border-red" : ""}
            placeholder="Votre nom"
            name="name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <InputText
            label="Email"
            className={errors.email && errors.email.message ? "border-red" : ""}
            placeholder="Votre email"
            name="email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase font-bold mb-2">Message</label>
          <textarea
            {...register("message")}
            className="resize-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Votre message"
            rows={5}
          />
        </div>
      </div>
      <button
        disabled={isSubmitting || !isValid}
        type="submit"
        className={`btn m-2 ${(isSubmitting || !isValid) && "shadow-none bg-white border border-gray-200 text-black cursor-not-allowed"} `}
      >
        Envoyer
      </button>
    </form>
  </FormProvider>
}

export default ContactForm;
