interface Props {
    heading?: string;
    children?: JSX.Element | JSX.Element[];
  }
function SidebarItem({ heading, children }: Props) {
  return (
    <div className="flex gap-4 items-center">
        <div>{children}</div>
        <p className="hidden sm:block text-white ">{heading}</p>
    </div>
  )
}

export default SidebarItem