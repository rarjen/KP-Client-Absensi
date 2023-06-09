import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import PTableWithAction from "../../components/TableWithAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchKaryawans } from "../../redux/karyawans/actions";
import AlertMessage from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import { fetchListJabatans, fetchListShifts } from "../../redux/lists/actions";

export default function KaryawanPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const karyawans = useSelector((state) => state.karyawans);

  useEffect(() => {
    dispatch(fetchKaryawans());
    dispatch(fetchListJabatans());
    dispatch(fetchListShifts());
  }, [dispatch]);

  const handleDelete = (karyawan_id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/karyawan/${karyawan_id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Berhasil hapus karyawan ${res.data.data.full_name}`
          )
        );

        dispatch(fetchKaryawans());
      }
    });
  };

  return (
    <Container className={"mt-3"}>
      <BreadCrumb textSecond={"Karyawan"} />
      <div className={"mb-3"}>
        <Button action={() => navigate("/karyawan/create")}>Tambah</Button>
      </div>
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <PTableWithAction
        status={karyawans.status}
        thead={[
          "Nama",
          "Email",
          "Nomer Karyawan",
          "Telepon",
          "Rekening",
          "Jabatan",
          "Shift",
          "Aksi",
        ]}
        data={karyawans.data}
        tbody={[
          "jabatan.jabatan",
          "shift.shift",
          "full_name",
          "email",
          "nomer_karyawan",
          "nomer_telepon",
          "nomer_rekening",
        ]}
        editUrl={`/karyawan/edit`}
        deleteAction={(karyawan_id) => handleDelete(karyawan_id)}
        withoutPagination
      />
    </Container>
  );
}
