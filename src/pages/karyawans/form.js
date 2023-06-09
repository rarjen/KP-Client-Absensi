import React from "react";
import { Form } from "react-bootstrap";
import PButton from "../../components/Button";
import PTextInputWithLabel from "../../components/TextInputWithLabel";

export default function SpeakersForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <PTextInputWithLabel
        placeholder={"Masukan Jabatan"}
        label={"id_jabatan"}
        name="id_jabatan"
        value={form.id_jabatan}
        type="number"
        onChange={handleChange}
      />
      <PTextInputWithLabel
        placeholder={"Masukan Full Name"}
        label={"Full Name"}
        name="full_name"
        value={form.full_name}
        type="text"
        onChange={handleChange}
      />
      <PTextInputWithLabel
        placeholder={"Masukan Email"}
        label={"Email"}
        name="email"
        value={form.email}
        type="text"
        onChange={handleChange}
      />
      <PTextInputWithLabel
        placeholder={"Masukkan Shift"}
        label={"Shift"}
        name="shift"
        value={form.shift}
        type="text"
        onChange={handleChange}
      />
      <PTextInputWithLabel
        placeholder={"Masukkan Nomer / Id Karyawan"}
        label={"Id Karyawan"}
        name="nomer_karyawan"
        value={form.nomer_karyawan}
        type="text"
        onChange={handleChange}
      />
      <PTextInputWithLabel
        placeholder={"Masukan Telepon Karyawan"}
        label={"Nomor Telepon"}
        name="nomer_telepon"
        value={form.nomer_telepon}
        type="text"
        onChange={handleChange}
      />
      <PTextInputWithLabel
        placeholder={"Masukan Rekening Karyawan"}
        label={"Nomer Rekening"}
        name="nomer_rekening"
        value={form.nomer_rekening}
        type="text"
        onChange={handleChange}
      />

      <PButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </PButton>
    </Form>
  );
}
