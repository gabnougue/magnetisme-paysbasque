import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';

type GradientType = 'forest' | 'meditation' | 'zen' | 'nature' | 'harmony' | 'serenity';

const GRADIENT_BACKGROUNDS: Record<GradientType, { className: string; pattern: string }> = {
  forest: {
    className: 'bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900',
    pattern: 'subtle-dots',
  },
  meditation: {
    className: 'bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800',
    pattern: 'circles',
  },
  zen: {
    className: 'bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900',
    pattern: 'waves',
  },
  nature: {
    className: 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900',
    pattern: 'organic',
  },
  harmony: {
    className: 'bg-gradient-to-br from-secondary-800 via-primary-800 to-primary-900',
    pattern: 'subtle-dots',
  },
  serenity: {
    className: 'bg-gradient-to-br from-primary-800 via-secondary-700 to-primary-900',
    pattern: 'waves',
  },
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'white' | 'gray' | 'primary-light';
  backgroundImage?: string;
  gradient?: GradientType;
  id?: string;
}

export function Section({
  children,
  className,
  containerSize = 'lg',
  background = 'white',
  backgroundImage,
  gradient,
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    'primary-light': 'bg-primary-50',
  };

  // Priorité: gradient > backgroundImage > background color
  if (gradient) {
    const gradientConfig = GRADIENT_BACKGROUNDS[gradient];
    return (
      <section
        id={id}
        className={cn('py-16 md:py-24 relative', gradientConfig.className, className)}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: getPattern(gradientConfig.pattern),
            backgroundSize: gradientConfig.pattern === 'waves' ? '100% 100%' : '30px 30px',
          }}
        />

        <Container size={containerSize}>
          <div className="relative z-10">{children}</div>
        </Container>
      </section>
    );
  }

  if (backgroundImage) {
    return (
      <section
        id={id}
        className={cn('py-16 md:py-24 relative overflow-hidden', className)}
      >
        {/* Background image optimisée pour mobile */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Overlay sans blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/80 to-primary-900/85"></div>

        <Container size={containerSize}>
          <div className="relative z-10">{children}</div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', backgrounds[background], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

// Helper function pour les patterns
function getPattern(pattern: string): string {
  switch (pattern) {
    case 'subtle-dots':
      return `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`;
    case 'circles':
      return `radial-gradient(circle at 50% 50%, white 1px, transparent 10px)`;
    case 'waves':
      return `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='white' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`;
    case 'organic':
      return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    default:
      return '';
  }
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({
  children,
  className,
  center = false,
  light = false
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl font-bold font-serif mb-4',
        light ? 'text-white' : 'text-gray-900',
        center && 'text-center',
        className
      )}
    >
      {children}
    </h2>
  );
}

interface SectionDescriptionProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionDescription({
  children,
  className,
  center = false,
  light = false,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        'text-lg mb-12',
        light ? 'text-white/90' : 'text-gray-600',
        center && 'text-center',
        className
      )}
    >
      {children}
    </p>
  );
}
