import { Advantages } from "../../components/Advantages/Advantages";
import { Calculator } from "../../components/Calculator/Calculator";
import { Consult } from "../../components/Consult/Consult";
import { Form } from "../../components/Form/Form";
import { Main } from "../../components/Main/Main";
import { Reviews } from "../../components/Reviews/Reviews";
import { Works } from "../../components/Works/Works";

export const HomePage = ({ advRef, worksRef, revRef, formRef, calcRef }) => {
  //   useDocumentTitle("Qbite - Студия веб-разработки и маркетинга");

  return (
    <>
      <Main />
      <Consult />
      <Advantages advRef={advRef} />
      <Calculator calcRef={calcRef} />
      <Works worksRef={worksRef} />
      <Form formRef={formRef} />
      <Reviews revRef={revRef} />
    </>
  );
};
