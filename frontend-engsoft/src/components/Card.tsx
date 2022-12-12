import { Modal, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";
import arrow from "../assets/Arrow.svg"

export default function Card({ isTeacher = false, justShow = false }: { isTeacher?: boolean, justShow?: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#131385',
    color: '#fff',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    itens: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  };

  return (
    <>
      <article className="flex items-center justify-between p-2 rounded bg-blue-secondary w-full">
        <div className="flex justify-center items-center gap-2 p-2 ">
          <div className="p-5 bg-white rounded ">
            <h3 className="font-bold text-black">A1</h3>
          </div>
          <h4 className="font-bold">Lorem Ipsum</h4>
        </div>
        <div className="flex justify-center items-center gap-3">
          {!justShow && <p>dd/mm/YY</p>}
          {!isTeacher && !justShow && (
            <button onClick={handleOpen} className="bg-blue-main hover:bg-blue-darker transition p-3 rounded">
              <img src={arrow} alt="arrow" />
            </button>
          )}
        </div>
      </article>
      {isTeacher && (
        <div className="flex items-center gap-3">
          <button className="bg-cyan-dark hover:bg-blue-darker transition p-3 rounded">
            Ver Respostas
          </button>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-1 w-full">
            <h5>Atividade</h5>
            <Card justShow />
            <h5>Arquivo (word, .pdf, .jpg)</h5>
            <TextField type="file" />
          </div>
          <div className="flex gap-2">
            <button type="submit" onClick={handleClose} className="bg-blue-main  hover:bg-blue-secondary transition py-2 px-5 rounded">Confirmar</button>
            <button type="button" onClick={handleClose} className="bg-red-secondary hover:bg-red-main transition py-2 px-5 rounded">Cancelar</button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

