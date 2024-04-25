import { ComponentChildren } from "preact";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-instagram.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconBrandMastodon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-mastodon.tsx";

type Props = {
  children?: ComponentChildren;
};

export default function Footer(_props: Props) {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/_denimcouch/",
      icon: <IconBrandInstagram size="38" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/denimcouch",
      icon: <BrandGithub size="38" />,
    },
    {
      name: "Mastodon",
      href: "https://mastodon.social/@denimcouch",
      icon: <IconBrandMastodon size="38" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/alexmatadev",
      icon: <IconBrandLinkedin size="38" />,
    },
  ];
  const menus = [
    {
      title: "Site map",
      children: [
        { name: "About", href: "#about" },
        {
          name: "Blog",
          href: "https://medium.com/@alquimicacoffee",
          target: "blank",
        },
      ],
    },
  ];

  return (
    <footer class="mx-auto flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-2 md:px-4 xl:px-0 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            the denimcouch
          </div>
        </div>
        <div className="flex gap-1.5">
          {socialLinks.map((link, index) => (
            <a
              href={link.href}
              class="inline-block hover:text-teal-400"
              aria-label={link.name}
              target="blank"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-teal-100 hover:text-teal-400"
                  href={child.href}
                  target={child.target ?? ""}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-teal-100 space-y-2">
        <div class="text-xs">
          Copyright © 2023 Denimcouch studios<br />
          All right reserved.
        </div>
      </div>
    </footer>
  );
}
