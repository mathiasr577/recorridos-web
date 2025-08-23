import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded bg-brand" />
          Recorridos
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="#" className="hover:underline">Inmuebles</Link>
          <Link href="#" className="hover:underline">Servicios</Link>
          <Link href="#" className="hover:underline">Nosotros</Link>
          <Link href="#" className="hover:underline">Blog</Link>
          <Link href="#contacto" className="hover:underline">Contacto</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/" className="btn btn-primary">WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
