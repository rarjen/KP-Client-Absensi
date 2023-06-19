import React from "react";
import { Form } from "react-bootstrap";
import PButton from "../../components/Button";
import PTextInputWithLabel from "../../components/TextInputWithLabel";

export default function JabatanForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <PTextInputWithLabel
        placeholder={"Masukkan nama jabatan"}
        label={"Jabatan"}
        name="jabatan"
        value={form.jabatan}
        type="text"
        onChange={handleChange}
      />
      <PButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </PButton>
    </Form>
  );
}
