import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import PButton from "../../components/Button";
import PTextInputWithLabel from "../../components/TextInputWithLabel";
import SelectBox from "../../components/SelectBox";

export default function KaryawansForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
  lists,
}) {
  return (
    <Form>
      <Row>
        <Col>
          <PTextInputWithLabel
            placeholder={"Masukan Full Name"}
            label={"Full Name"}
            name="full_name"
            value={form.full_name}
            type="text"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <SelectBox
            label={"Jabatan"}
            placeholder={"Masukkan Jabatan"}
            name="jabatan"
            value={form.jabatan}
            options={lists.jabatans}
            isClearable={true}
            handleChange={(e) => handleChange(e)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <PTextInputWithLabel
            placeholder={"Masukan Email"}
            label={"Email"}
            name="email"
            value={form.email}
            type="text"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <SelectBox
            placeholder={"Masukkan Shift"}
            label={"Shift"}
            name="shift"
            value={form.shift}
            options={lists.shifts}
            isClearable={true}
            handleChange={(e) => handleChange(e)}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <PTextInputWithLabel
            placeholder={"Masukkan Nomer / Id Karyawan"}
            label={"Id Karyawan"}
            name="nomer_karyawan"
            value={form.nomer_karyawan}
            type="text"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <PTextInputWithLabel
            placeholder={"Masukan Telepon Karyawan"}
            label={"Nomor Telepon"}
            name="nomer_telepon"
            value={form.nomer_telepon}
            type="text"
            onChange={handleChange}
          />
        </Col>
      </Row>

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
