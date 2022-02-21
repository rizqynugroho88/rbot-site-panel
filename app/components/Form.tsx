import clsx from 'clsx'
import { Paragraph } from './Typography'

type InputProps = {
  className?: string
  label: string
  type: React.HTMLInputTypeAttribute
}

function Input({ className, label, type }: InputProps) {
  return (
    <label
      className={clsx(
        'flex w-full flex-col items-start justify-center gap-2 p-2',
        className,
      )}
    >
      <Paragraph className="text-white">{label}</Paragraph>
      <input
        type={type}
        className="w-full rounded-md p-4 px-5 caret-white outline-none ring-white focus:ring-2"
      />
    </label>
  )
}

function InputRadio() {
  return (
    <label className="flex w-full items-center justify-center gap-2 p-2">
      <input type={'radio'} className="accent-slate-500" />
      <Paragraph className="text-white">Aasdasd</Paragraph>
    </label>
  )
}

export { Input, InputRadio }
