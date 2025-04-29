import { Field, Formik, Form } from "formik";

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };
  return (
    <section>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </section>
  );
};
export default SearchBar;
