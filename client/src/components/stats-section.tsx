import { stats } from "@shared/schema";

export function StatsSection() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
      data-testid="stats-section"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center p-4 md:p-6 rounded-lg bg-card border"
          data-testid={`stat-${index}`}
        >
          <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
