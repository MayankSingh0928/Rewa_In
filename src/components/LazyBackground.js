import { useEffect, useRef, useState } from 'react';

function LazyBackground({ as: Tag = 'div', backgroundImage, children, className, style, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundImage: visible ? backgroundImage : undefined,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default LazyBackground;
