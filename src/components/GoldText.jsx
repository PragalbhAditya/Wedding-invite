// Metallic gold-foil text with an optional shimmer sweep.
export default function GoldText({
  children,
  as: Tag = 'span',
  animate = true,
  className = '',
}) {
  return (
    <Tag className={`text-foil ${animate ? 'text-foil--anim' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
