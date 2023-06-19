import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import PTableWithAction from "../../components/TableWithAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchJabatans } from "../../redux/jabatans/actions";
import AlertMessage from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";

export default function JabatanPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const jabatans = useSelector((state) => state.jabatans);

  useEffect(() => {
    dispatch(fetchJabatans());
  }, [dispatch]);

  const handleDelete = (jabatan_id) => {
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
        const res = await deleteData(`/jabatan/${jabatan_id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Berhasil hapus karyawan ${res.data.data.full_name}`
          )
        );

        dispatch(fetchJabatans());
      }
    });
  };

  return (
    <Container className={"mt-3"}>
      <BreadCrumb textSecond={"Jabatan"} />
      <div className={"mb-3"}>
        <Button action={() => navigate("/jabatan/create")}>Tambah</Button>
      </div>
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <PTableWithAction
        status={jabatans.status}
        thead={["Jabatan", "Aksi"]}
        data={jabatans.data}
        tbody={["jabatan"]}
        editUrl={`/jabatan/edit`}
        deleteAction={(jabatan) => handleDelete(jabatan)}
        withoutPagination
      />
    </Container>
  );
}
