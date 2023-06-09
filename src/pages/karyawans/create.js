import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import PBreadCrumb from "../../components/BreadCrumb";
import PAlert from "../../components/Alert";
import Form from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotif } from "../../redux/notif/actions";
import { fetchListJabatans, fetchListShifts } from "../../redux/lists/actions";

export default function KaryawanCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);

  const [form, setForm] = useState({
    jabatan: null,
    shift: null,
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

  useEffect(() => {
    dispatch(fetchListJabatans());
    dispatch(fetchListShifts());
  }, [dispatch]);

  const handleChange = (e) => {
    if (e.target.name === "jabatan" || e.target.name === "shift") {
      setForm({ ...form, [e.target.name]: e });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      jabatan_id: form.jabatan.value,
      shift_id: form.shift.value,
      full_name: form.full_name,
      email: form.email,
      nomer_karyawan: form.nomer_karyawan,
      nomer_telepon: form.nomer_telepon,
      nomer_rekening: form.nomer_rekening,
    };

    const res = await postData("/karyawan/create", payload);
    if (res?.data?.data) {
      dispatch(
        setNotif(
          true,
          "success",
          `Berhasil tambah karyawan ${res.data.data.full_name}`
        )
      );
      navigate("/karyawan");
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
        lists={lists}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}
