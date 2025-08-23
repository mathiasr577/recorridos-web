'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

export function SearchBar() {
  const [q, setQ] = useState({ gestion: "Arriendo", tipo: "Apartamento", zona: "", precio: "" });

  return (
    <div className="card p-3 md:p-4">
      <div className="grid gap-3 md:grid-cols-5">
        <select className="rounded-xl border border-black/10 px-3 py-3" value={q.gestion} onChange={(e)=>setQ({...q, gestion: e.target.value})}>
          <option>Arriendo</option>
          <option>Venta</option>
        </select>
        <select className="rounded-xl border border-black/10 px-3 py-3" value={q.tipo} onChange={(e)=>setQ({...q, tipo: e.target.value})}>
          <option>Apartamento</option>
          <option>Casa</option>
          <option>Oficina</option>
          <option>Local</option>
        </select>
        <input className="rounded-xl border border-black/10 px-3 py-3" placeholder="Zona o barrio (Chicó, Rosales...)" value={q.zona} onChange={(e)=>setQ({...q, zona: e.target.value})} />
        <select className="rounded-xl border border-black/10 px-3 py-3" value={q.precio} onChange={(e)=>setQ({...q, precio: e.target.value})}>
          <option>Precio</option>
          <option>&lt; $3M</option>
          <option>$3M–$6M</option>
          <option>$6M–$10M</option>
          <option>&gt; $10M</option>
        </select>
        <button className="btn btn-primary">Buscar</button>
      </div>
    </div>
  );
}
