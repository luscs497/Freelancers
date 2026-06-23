import { useReveal } from "../../hooks/useReveal.js";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, seen] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`df-rev ${seen ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
