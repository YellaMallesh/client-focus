import { placementPartners } from "@shared/schema";

export function PartnerLogos() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
      data-testid="partner-logos"
    >
      {placementPartners.map((partner) => (
        <div
          key={partner}
          className="flex items-center justify-center p-4 md:p-6 rounded-lg bg-card border hover-elevate transition-all"
          data-testid={`partner-${partner.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <span className="text-sm font-medium text-muted-foreground text-center">
            {partner}
          </span>
        </div>
      ))}
    </div>
  );
}
