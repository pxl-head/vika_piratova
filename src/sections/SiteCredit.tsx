const PXL_HEAD_SITE_URL = "https://t.me/pxl_head";

interface SiteCreditProps {
  className?: string;
  dark?: boolean;
}

export default function SiteCredit({ className = "", dark = false }: SiteCreditProps) {
  return (
    <p className={`micro normal-case font-mono tracking-[0.08em] ${dark ? "text-white/55" : "text-neutral-500"} ${className}`}>
      The site was created by{" "}
      <a
        href={PXL_HEAD_SITE_URL}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto text-cyan-300 underline decoration-cyan-300/70 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-200"
      >
        pxl_head
      </a>
    </p>
  );
}
