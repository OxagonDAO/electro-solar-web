
import clsx from 'clsx'
import { LogoIcon } from '../logo-icon'
import { FC } from 'react'

const _styles = {
  dark: "fill-[#212121]",
  white: "fill-white"
}

type Props = {
  theme?: keyof typeof _styles,
  classNames?: {
    container?: string,
    loader?: string
  }
}

export const Loader: FC<Props> = (props) => {
  const { theme = "white", classNames } = props

  return (
    <div className={clsx('absolute w-full h-full flex items-center justify-center', classNames?.container)}>
      <LogoIcon className={clsx('animate-spin', _styles[theme], classNames?.loader)} />
    </div>
  )
}
