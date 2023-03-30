import styles from "./Calculator.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { SelectButton } from "primereact/selectbutton";
import image from "../../assets/images/calculator.svg";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

import { InputSwitch } from "primereact/inputswitch";

export const Calculator = ({ calcRef }) => {
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
    square: "",
    length: "",
    instalacja: false,
    zamek: false,
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
      console.log(data);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section ref={calcRef} className={styles.consult}>
      <h2 className={styles.title}>
        KALKULACJA KOSZTÓW
        <br />
        <span style={{ color: "var(--dark)" }}>PRZYBLIŻONY KOSZT TERAZ</span>
      </h2>
      <div className={styles.wrapper}>
        <img className={styles.img} src={image} alt="#" />
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            Korzystając z kalkulatora możesz samodzielnie przeprowadzić
            przybliżoną kalkulację swojego zamówienia.
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
            <div className={styles.flex}>
              <Controller
                name="square"
                control={control}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label className={styles.label} htmlFor={field.square}>
                      Podaj całkowitą powierzchnię otworów do zamknięcia
                    </label>
                    <InputNumber
                      className={classNames(styles.input, styles.inputNum)}
                      onValueChange={(e) => field.onChange(e.target.value)}
                      id={field.square}
                      value={field.value}
                    />
                  </div>
                )}
              />
              <Controller
                name="length"
                control={control}
                render={({ field, fieldState }) => (
                  <div className={styles.formItem}>
                    <label className={styles.label} htmlFor={field.length}>
                      Wpisz liczbę metrów bieżących błyskawicy
                    </label>
                    <InputNumber
                      className={classNames(styles.input, styles.inputNum)}
                      onValueChange={(e) => field.onChange(e.target.value)}
                      id={field.length}
                      value={field.value}
                    />
                  </div>
                )}
              />
            </div>

            <div className={styles.flexRow}>
              <Controller
                name="instalacja"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <label htmlFor={field.instalacja}>Instalacja</label>
                    <InputSwitch
                      inputId={field.instalacja}
                      checked={field.value}
                      inputRef={field.ref}
                      onChange={(e) => field.onChange(e.value)}
                    />
                  </>
                )}
              />

              <Controller
                name="zamek"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <label htmlFor={field.zamek}>Drzwi z zamkiem</label>
                    <InputSwitch
                      inputId={field.zamek}
                      checked={field.value}
                      inputRef={field.ref}
                      onChange={(e) => field.onChange(e.value)}
                    />
                  </>
                )}
              />
            </div>

            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"Oblicz koszt"}
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </section>
  );
};
