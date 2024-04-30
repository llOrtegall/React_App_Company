interface LabelProps extends React.HTMLAttributes<HTMLLabelElement>{}

export const Label: React.FC<LabelProps> = ({children, ...rest}) => {
  return (
    <label {...rest} className='text-sm text-gray-600'>
      {children}
    </label>
  )
}