import { Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import InputField from "./InputField"
import Card from "./Card";
export default function EntrarAtividade() {
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
    <div className="bg-gray-dark2 p-5 rounded flex flex-col gap-6">
      <h3 className="font-bold text-2xl">Inscreva-se numa atividade</h3>
      <form className="flex flex-col items-center justify-center gap-6 drop-shadow-lg" action="">
        <InputField label="Código da atividade" type="text" />
        <button type="button"onClick={handleOpen} className="font-bold text-lg py-3 px-10 bg-blue-main hover:bg-blue-secondary transition rounded">Inscrever-se</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirmar Inscrição na Atividade
            </Typography>
            <Card justShow />
            <div className="flex gap-2">
              <button type="submit" onClick={handleClose} className="bg-blue-main  hover:bg-blue-secondary transition py-2 px-5 rounded">Confirmar</button>
              <button type="button" onClick={handleClose} className="bg-red-secondary hover:bg-red-main transition py-2 px-5 rounded">Cancelar</button>
            </div>
          </Box>
        </Modal>
      </form>
    </div>
  )
} 
