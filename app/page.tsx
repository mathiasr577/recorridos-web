import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { mockProperties } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black/10 bg-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
              Inmobiliaria boutique · Bogotá
            </span>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Encuentra tu próximo hogar en Bogotá
            </h1>
            <p className="mt-4 text-lg text-black/70">
              Arriendos y ventas con acompañamiento experto. Sin enredos.
            </p>
            <div className="mt-8">
              <SearchBar />
            </div>
            <div className="mt-6 flex gap-4 text-sm text-black/60">
              <span>+15 años de experiencia</span>
              <span>•</span>
              <span>Avalúos por peritos</span>
              <span>•</span>
              <span>Atención por WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Propiedades destacadas */}
      <section className="container py-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Propiedades destacadas</h2>
          <a href="#" className="text-sm font-medium text-brand hover:underline">Ver todas</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProperties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      {/* CTA vendedor */}
      <section className="border-y border-black/10 bg-[#F5F7FA]">
        <div className="container py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">¿Vendes o arriendas tu inmueble?</h3>
              <p className="mt-3 text-black/70">Solicita una valoración sin costo y te contactamos hoy.</p>
              <div className="mt-6 flex gap-3">
                <a className="btn btn-primary" href="https://wa.me/">Contactar por WhatsApp</a>
                <a className="btn btn-ghost" href="#contacto">Vender mi inmueble</a>
              </div>
            </div>
            <div className="card p-4">
              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-xl border border-black/10 px-3 py-3" placeholder="Nombre" />
                <input className="rounded-xl border border-black/10 px-3 py-3" placeholder="Celular" />
                <input className="rounded-xl border border-black/10 px-3 py-3 md:col-span-2" placeholder="Email" />
                <input className="rounded-xl border border-black/10 px-3 py-3" placeholder="Zona" />
                <select className="rounded-xl border border-black/10 px-3 py-3">
                  <option>Apartamento</option>
                  <option>Casa</option>
                  <option>Oficina</option>
                  <option>Local</option>
                </select>
                <button className="btn btn-primary md:col-span-2">Quiero una valoración</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
