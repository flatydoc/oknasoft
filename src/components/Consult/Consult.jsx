import styles from "./Consult.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import image from "../../assets/images/consult.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

export const Consult = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useRef(null);

  const load = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Aplikacja wysłana pomyślnie",
      detail: `Droga ${getValues(
        "name"
      )}, nasz specjalista wkrótce się z Tobą skontaktuje`,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "błąd",
      detail:
        "Spróbuj ponownie później lub skontaktuj się z nami w dogodny dla Ciebie sposób",
    });
  };

  const defaultValues = {
    name: "",
    phone: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (error) => {
    return errors[error] ? (
      <small className="p-error">{errors[error].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const onSubmit = async (data) => {
    load();
    try {
      await FormService.send(data);
      setTimeout(() => {
        showSuccess();
        reset();
      }, 1000);
      console.log(data);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section className={styles.consult}>
      <h2 className={styles.title}>PROMOCJA</h2>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            Okno pod klucz wraz z pomiarem, dostawą i montażem z rabatem 10% +
            moskitiera w prezencie!
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.flex}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Wpisz swoje imię" }}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        id={field.name}
                        value={field.value}
                        className={classNames(
                          { "p-invalid": fieldState.error },
                          styles.input
                        )}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label style={{ color: "#acb4c3" }} htmlFor={field.name}>
                        Imię
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Wprowadź swój numer telefonu" }}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label
                      htmlFor={field.phone}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputMask
                        className={classNames(
                          { "p-invalid": fieldState.error },
                          styles.input
                        )}
                        onChange={(e) => field.onChange(e.target.value)}
                        id={field.phone}
                        value={field.value}
                        mask="+48 (999) 999-999"
                      />
                      <label style={{ color: "#acb4c3" }} htmlFor={field.phone}>
                        Telefon
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
            </div>
            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"Weź udział w promocji"}
            />
          </form>
        </div>
        <img className={styles.img} src={image} alt="#" />
      </div>
      <Toast ref={toast} />
    </section>
  );
};
