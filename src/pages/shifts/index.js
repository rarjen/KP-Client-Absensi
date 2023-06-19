import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import PTableWithAction from "../../components/TableWithAction";
import { useSelector, useDispatch } from "react-redux";
import { fetchShifts } from "../../redux/shifts/actions";
import AlertMessage from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";

export default function JabatanPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const shifts = useSelector((state) => state.shifts);

  useEffect(() => {
    dispatch(fetchShifts());
  }, [dispatch]);

  const handleDelete = (shift_id) => {
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
        const res = await deleteData(`/shift/${shift_id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Berhasil hapus karyawan ${res.data.data.full_name}`
          )
        );

        dispatch(fetchShifts());
      }
    });
  };

  return (
    <Container className={"mt-3"}>
      <BreadCrumb textSecond={"Shift"} />
      <div className={"mb-3"}>
        <Button action={() => navigate("/shift/create")}>Tambah</Button>
      </div>
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <PTableWithAction
        status={shifts.status}
        thead={["Shift", "Aksi"]}
        data={shifts.data}
        tbody={["shift"]}
        editUrl={`/shift/edit`}
        deleteAction={(shift_id) => handleDelete(shift_id)}
        withoutPagination
      />
    </Container>
  );
}
