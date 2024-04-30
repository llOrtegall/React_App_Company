interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
  
}

export const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <button {...rest} className='w-full bg-blue-400 hover:bg-blue-600 hover:text-white transition-all py-1 px-2 text-lg  font-semibold rounded-md'>
      {children}
    </button>
  )
}
