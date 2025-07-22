import { Link, LinkProps } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface ActiveLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export default function ActiveLink({
  children,
  className,
  activeClassName = "opacity-100",
  inactiveClassName = "opacity-50 hover:opacity-100",
  ...props
}: ActiveLinkProps) {
  return (
    <Link
      className={cn(inactiveClassName, className)}
      activeProps={{
        className: cn(activeClassName, className),
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
