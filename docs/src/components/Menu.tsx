import { Link } from "react-router-dom"
import { cn } from "../utils/cn.ts"
import { routes } from "../router"

export const Menu = () => {
  const options = [
    {
      label: "Introducción",
      children: [
        {
          label: "Instalación",
          path: routes.instalation.path,
        },
      ],
    },
    {
      label: "Fundamentos",
      children: [
        {
          label: "Logotipos",
          path: "#",
        },
        {
          label: "Iconografía",
          path: "#",
        },
        {
          label: "Reticula",
          path: "#",
        },
        {
          label: "Paleta de colores",
          path: "#",
        },
        {
          label: "Tipografía",
          path: "#",
        },
        {
          label: "Rounded",
          path: "#",
        },
        {
          label: "Shading",
          path: "#",
        },
      ],
    },
    {
      label: "Componentes",
      children: [
        {
          label: "Accordion",
          path: "#",
        },
        {
          label: "Alert",
          path: "#",
        },
        {
          label: "Avatar",
          path: "#",
        },
        {
          label: "Badge",
          path: "#",
        },
        {
          label: "Banner",
          path: "#",
        },
        {
          label: "Blanket",
          path: "#",
        },
        {
          label: "Breadcrumb",
          path: "#",
        },
        {
          label: "Card",
          path: "#",
        },
        {
          label: "Carousel",
          path: "#",
        },
        {
          label: "Form",
          path: "#",
        },
        {
          label: "Header",
          path: "#",
        },
        {
          label: "Menu",
          path: "#",
        },
        {
          label: "Pagination",
          path: "#",
        },
        {
          label: "Popup/Modals",
          path: "#",
        },
        {
          label: "Progress Tracker",
          path: "#",
        },
        {
          label: "Tab",
          path: "#",
        },
        {
          label: "Table",
          path: "#",
        },
        {
          label: "Tooltip",
          path: "#",
        },
      ],
    },
  ]

  return (
    <div className="border-r px-6 py-4 overflow-y-auto max-h-[calc(100vh_-_65px)] sticky top-[65px] bg-transparent border-neutral-700">
      <ul>
        {options.map(({ label, children }) => (
          <li key={label} className="mb-6">
            <strong className="font-bold text-lg">{label}</strong>
            {children && (
              <ul className=" pt-1 mt-1">
                {children.map(({ label: Tag, path: To }) => (
                  <li
                    key={Tag}
                    className={cn("border-l-4 pl-4 border-primary/20", {
                      "border-primary bg-primary/20":
                        window.location.pathname === To,
                    })}
                  >
                    <Link
                      to={To}
                      className={cn(
                        "hover:text-white hover:font-bold  text-neutral-400 transition-all py-2 block",
                        {
                          "font-bold text-white":
                            window.location.pathname === To,
                        },
                      )}
                    >
                      {Tag}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
