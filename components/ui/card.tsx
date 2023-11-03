import { FC, HTMLAttributes, PropsWithChildren } from "react"

const Card: FC<HTMLAttributes<HTMLDivElement> & PropsWithChildren> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={`rounded-lg p-5 bg-secondary-background dark:bg-secondary-background-dark ${className}`} >{children}</div>
  )
}

export default Card