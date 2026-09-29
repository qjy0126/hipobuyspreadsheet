import Image from "next/image";

type SiteLogoProps = {
  size?: number;
  priority?: boolean;
  className?: string;
};

export function SiteLogo({ size = 38, priority = false, className }: SiteLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      priority={priority}
      quality={100}
      className={className}
    />
  );
}
