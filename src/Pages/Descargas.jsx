import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";

const Descargas = () => {
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
      <div className="overflow-x-auto mt-10">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
            DESCARGAS
          </h2>
        </div>
        <table className="min-w-full divide-y-4 divide-gray-200">
          <thead className="bg-transparent">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                HOSTING
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                DESCRIPCIÓN
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                DESCARGAR
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                PESO
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">
                MEGAUPLOAD
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">CLIENTE V3</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                <Link to="https://www.google.com.ar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12  items-center"
                  >
                    <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13 12V8H11V12H8L12 16L16 12H13Z"></path>
                  </svg>
                </Link>
              </td>
            </tr>
            <td className="px-6 py-4 whitespace-nowrap text-white font-bold">
                MEDIAFIRE
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">CLIENTE V3</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                <Link to="https://www.mediafire.com/file/7nlhqzccily7iy3/CLUB5_V3.exe/file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13 12V8H11V12H8L12 16L16 12H13Z"></path>
                  </svg>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">138MB</td>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">
                MEDIAFIRE
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">PARCHE V3</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
                <Link to="https://www.mediafire.com/file/ffytqkchhyy8eq0/PARCHE_V3.rar/file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM13 12V8H11V12H8L12 16L16 12H13Z"></path>
                  </svg>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white font-bold">3MB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Descargas;
