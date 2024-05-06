import Layout from "../Components/Layout";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner
} from "@nextui-org/react";
import { useState, useEffect } from "react";


const Informacion = () => {

  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <Spinner />
    </div>
    );
  }


  return (
    <Layout>
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
          Información del Servidor
        </h2>
      </div>

      <Table style={{ backgroundColor: "transparent" }}>
        <TableHeader className="font-bold">
          <TableColumn className="font-bold">INFORMACION</TableColumn>
          <TableColumn className="font-bold">NORMAL</TableColumn>
          <TableColumn className="font-bold">VIP</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="font-semibold">Experiencia</TableCell>
            <TableCell className="font-semibold">12x</TableCell>
            <TableCell className="font-semibold">16x</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="font-semibold">Dropeo</TableCell>
            <TableCell className="font-semibold">40%</TableCell>
            <TableCell className="font-semibold">60%</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className="font-semibold">Balanceo</TableCell>
            <TableCell className="font-semibold">Si</TableCell>
            <TableCell className="font-semibold">Si</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Reset</TableCell>
            <TableCell className="font-semibold">Nivel 350</TableCell>
            <TableCell className="font-semibold">Nivel 350</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Costo del Reset</TableCell>
            <TableCell className="font-semibold">25 Millones</TableCell>
            <TableCell className="font-semibold">10 Millones</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">
              Zen Reset Acumulativo
            </TableCell>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">No</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Bless Bug</TableCell>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">No</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Borra Stat</TableCell>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">No</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Borra Inventario</TableCell>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">No</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Puntos Adicionales</TableCell>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">No</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">Stats Maximos</TableCell>
            <TableCell className="font-semibold">32767</TableCell>
            <TableCell className="font-semibold">32767</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">
              Nivel Ingreso Stadium
            </TableCell>
            <TableCell className="font-semibold">220</TableCell>
            <TableCell className="font-semibold">150</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">
              Nivel Ingreso Exilio
            </TableCell>
            <TableCell className="font-semibold">255</TableCell>
            <TableCell className="font-semibold">180</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">
              Evento Corazones - Medallas 
            </TableCell>
            <TableCell className="font-semibold">Si</TableCell>
            <TableCell className="font-semibold">Si</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">
              Custom Attack
            </TableCell>
            <TableCell className="font-semibold">12Hs</TableCell>
            <TableCell className="font-semibold">Ilimitado</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="font-semibold">
              Custom Pick
            </TableCell>
            <TableCell className="font-semibold">No</TableCell>
            <TableCell className="font-semibold">Si</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </Layout>
  );
};

export default Informacion;
