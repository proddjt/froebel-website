import { school } from "@/demo/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold">{school.name}</p>
          <p className="text-muted">{school.tagline}</p>
        </div>
        <div className="text-muted">
          <p>{school.address}</p>
          <p>{school.phone}</p>
          <p>{school.email}</p>
        </div>
        <div className="text-muted">
          <p>Privacy policy</p>
          <p>Accessibility statement</p>
          <p>Transparent administration</p>
        </div>
      </div>
    </footer>
  );
}
