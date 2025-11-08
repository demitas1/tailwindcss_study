// Button.tsx
type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  const baseClasses = 'rounded-xl px-4 py-2';
  const variants = {
    primary: 'bg-sky-500 hover:bg-sky-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white'
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};
