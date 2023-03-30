import styles from "./Form.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputTextarea } from "primereact/inputtextarea";
import image from "../../assets/images/window.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

export const Form = ({ formRef }) => {
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
    text: "",
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
    console.log(data);
    try {
      await FormService.send(data);
      setTimeout(() => {
        showSuccess();
        reset();
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section ref={formRef} className={styles.consult}>
      <h2 className={styles.title}>
        DARMOWA KONSULTACJA
        <br />
        <span style={{ color: "var(--dark)" }}>NASZEGO SPECJALISTY</span>
      </h2>
      <div className={styles.wrapper}>
        <img className={styles.img} src={image} alt="#" />
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            Wypełnij formularz, a nasz specjalista oddzwoni i odpowie na
            wszystkie pytania.
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
                      <label
                        style={{ color: "var(--dark)" }}
                        htmlFor={field.name}
                      >
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
                      <label
                        style={{ color: "var(--dark)" }}
                        htmlFor={field.phone}
                      >
                        Telefon
                      </label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </div>
                )}
              />
            </div>
            <Controller
              name="text"
              control={control}
              render={({ field, fieldState }) => (
                <div
                  style={{ marginBottom: "36px" }}
                  className={styles.formItem}
                >
                  <span className="p-float-label">
                    <InputTextarea
                      className={styles.input}
                      rows={4}
                      cols={20}
                      id={field.text}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <label
                      style={{ color: "var(--dark)" }}
                      htmlFor={field.text}
                    >
                      Krótko opisz istotę pytania
                    </label>
                  </span>
                </div>
              )}
            />
            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"Dostać odpowiedź"}
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </section>
  );
};
