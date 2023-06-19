import React from "react";
import { Form, Row } from "react-bootstrap";
import PButton from "../../components/Button";
// import PTextInputWithLabel from "../../components/TextInputWithLabel";
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
        <SelectBox
          label={"Nama"}
          placeholder={"Masukkan Nama"}
          name="karyawan"
          value={form.karyawans}
          options={lists.karyawans}
          isClearable={true}
          handleChange={(e) => handleChange(e, "karyawan")}
        />
      </Row>
      <Row>
        <SelectBox
          label={"Status Absen"}
          placeholder={"Pilih Status Absen"}
          name="status_absensi"
          value={form.status_absensi}
          options={[
            { value: "DATANG", label: "DATANG" },
            { value: "PULANG", label: "PULANG" },
          ]}
          isClearable={true}
          handleChange={(e) => handleChange(e, "status_absensi")}
        />
      </Row>

      <PButton variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Absen"}
      </PButton>
    </Form>
  );
}
