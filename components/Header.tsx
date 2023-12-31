interface Props {
  active: string;
}

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
      name: "Blog",
      href: "https://medium.com/@alquimicacoffee",
      target: "blank",
    },
  ];

  return (
    <header
      class="w-full mx-auto py-4 px-2 md:px-4 xl:px-0 lg:py-6 sticky top-0 z-20"
      style="background:linear-gradient(rgba(30, 0, 70, 1), rgba(0, 0, 40, 1));"
    >
      <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-1 lg:gap-4">
        <div class="flex items-center flex-1">
          <div class="text-2xl font-bold hidden md:block text-gray-100">
            The Denimcouch
          </div>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                target={menu.target ?? ""}
                class={"text-teal-100 hover:text-teal-400 py-1 border-teal-400" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
