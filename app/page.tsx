import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { mockProperties } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero FULLSCREEN con imagen */}
      <section className="relative h-[92vh] w-full">
        <Image
          src="/recorridos-hero.png"
          alt="Fachada elegante Recorridos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Encuentra tu próximo hogar en Bogotá
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80">
              Arriendos y ventas con acompañamiento experto.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="https://wa.me/573001234567?text=Hola%20vengo%20de%20Recorridos"
                className="btn btn-primary text-base md:text-lg"
              >
                WhatsApp
              </a>
              <a href="#destacadas" className="btn btn-ghost text-base md:text-lg">
                Ver propiedades
              </a>
            </div>
            <div className="mt-8">
              <SearchBar />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
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
      <section id="destacadas" className="container py-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Propiedades destacadas</h2>
          <a href="#" className="text-sm font-medium text-brand hover:underline">
            Ver todas
          </a>
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
                <a className="btn btn-primary" href="https://wa.me/573001234567?text=Quiero%20valorar%20mi%20inmueble">
                  Contactar por WhatsApp
                </a>
                <a className="btn btn-ghost" href="#contacto">
                  Vender mi inmueble
                </a>
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
