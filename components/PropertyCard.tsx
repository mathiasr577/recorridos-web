import Image from "next/image";
import { type Property } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[3/2] w-full">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-brand">
          {property.operation}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-tight">{property.title}</h3>
          <div className="shrink-0 rounded-lg bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">
            {property.price}
          </div>
        </div>
        <p className="text-sm text-black/70">{property.location}</p>
        <div className="flex flex-wrap gap-2 pt-1 text-xs text-black/70">
          <span className="rounded-full border border-black/10 px-2 py-1">{property.area} m²</span>
          <span className="rounded-full border border-black/10 px-2 py-1">{property.bedrooms} hab</span>
          <span className="rounded-full border border-black/10 px-2 py-1">{property.bathrooms} baños</span>
          <span className="rounded-full border border-black/10 px-2 py-1">{property.parking} parqueaderos</span>
        </div>
      </div>
    </article>
  );
}
