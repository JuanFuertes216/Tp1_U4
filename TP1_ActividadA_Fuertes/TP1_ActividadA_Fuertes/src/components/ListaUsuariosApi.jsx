import React, { useState, useEffect } from "react";

export default function ListaUsuariosApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=3")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      });
  }, []);
}
