interface Props {
    heading?: string;
    children?: JSX.Element | JSX.Element[];
    href: string;
  }
function SidebarItem({ heading, children, href }: Props) {
  return (
    <a href={href}>
    <div className="flex gap-4 items-center">
        <div>{children}</div>
        <p className="hidden sm:block text-white text-[20px]">{heading}</p>
    </div>
    </a>
  )
}

export default SidebarItem