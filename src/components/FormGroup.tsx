import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export default function FormGroup(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const { children } = props;

  return (
    <div className="flex flex-1 items-end gap-8" {...props}>
      {children}
    </div>
  );
}