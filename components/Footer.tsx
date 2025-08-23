export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="container grid gap-6 py-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 font-semibold">
            <span className="inline-block h-6 w-6 rounded bg-brand" />
            Recorridos
          </div>
          <p className="text-sm text-black/60">
            Inmobiliaria boutique en Bogotá. Arriendos y ventas con acompañamiento experto.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-medium">Enlaces</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Inmuebles</a></li>
            <li><a href="#" className="hover:underline">Servicios</a></li>
            <li><a href="#" className="hover:underline">Nosotros</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div id="contacto">
          <h4 className="mb-2 font-medium">Contacto</h4>
          <ul className="space-y-1 text-sm">
            <li>WhatsApp: <a className="hover:underline" href="https://wa.me/">+57 300 000 0000</a></li>
            <li>Email: <a className="hover:underline" href="mailto:hola@recorridos.com.co">hola@recorridos.com.co</a></li>
            <li>Horario: Lun–Sáb 9:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10 py-4 text-center text-xs text-black/60">
        © {new Date().getFullYear()} Recorridos. Todos los derechos reservados.
      </div>
    </footer>
  );
}
