import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";
import PAlert from "../../components/Alert";
import Form from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";

function KaryawanCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    jabatan: 0,
    shift: 0,
    full_name: "",
    email: "",
    nomer_karyawan: "",
    nomer_telepon: "",
    nomer_rekening: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "jabatan" || e.target.name === "shift") {
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await postData("/karyawan/create", form);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `Berhasil tambah karyawan ${res.data.data.full_name}`
        )
      );
      navigate("/categories");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.message,
      });
    }
  };

  return (
    <Container>
      <PBreadCrumb
        textSecond={"Karyawan"}
        urlSecond={"/karyawan"}
        textThird="Create"
      />
      {alert.status && <PAlert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default KaryawanCreate;
