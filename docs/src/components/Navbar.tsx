import { Link, NavLink } from "react-router-dom"
import { cn } from "../utils"
import { routes } from "../router"

interface Props {
  position?: "sticky" | "absolute"
  transparent?: boolean
  dark?: boolean
}

export const Navbar = ({ position, transparent, dark }: Props) => {
  const options = [
    {
      path: "#",
      label: "Docs",
    },
    {
      path: "#",
      label: "Blog",
    },
    {
      path: "#",
      label: "Community",
    },
    {
      path: "#",
      label: "Support",
    },
    {
      path: "#",
      label: "About",
    },
  ]

  return (
    <header
      className={cn("relative z-40 text-white border-b border-neutral-700", {
        "sticky top-0": position === "sticky",
        "absolute top-0 w-full": position === "absolute",
        "bg-transparent": transparent,
        "border-neutral-700": dark,
      })}
    >
      <div className="h-full w-full bg-black rounded-md absolute top-0 left-0 right-0 bottom-0 m-auto bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 z-10" />
      <div className="grid items-center grid-cols-[auto_1fr] gap-x-8 col-span-12 max-w-screen-2xl mx-auto py-4 px-6 relative z-20">
        <NavLink to={routes.home.path} className="text-2xl font-bold uppercase">
          Andromeda
        </NavLink>

        <nav className="flex justify-end">
          <ul className="flex space-x-3">
            {options.map((option) => (
              <li key={option.path}>
                <Link
                  to={option.path}
                  className="hover:underline font-semibold"
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
