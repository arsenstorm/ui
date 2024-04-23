"use client";

import { Divider } from "@repo/ui/divider";
import { Link } from "@repo/ui/link";

const elements = [
  {
    name: 'Divider',
    path: '/divider'
  }
];

const plannedElements = [
  "Accordion",
  "Aspect Ratio",
  "Collapisble",
  "Context Menu",
  "Card",
  "Hover Card",
  "Breadcrumb",
  "Slider"
]

const officialElements = [
  {
    name: "Alert",
    href: "https://catalyst.tailwindui.com/docs/alert"
  },
  {
    name: "Avatar",
    href: "https://catalyst.tailwindui.com/docs/avatar"
  },
  {
    name: "Badge",
    href: "https://catalyst.tailwindui.com/docs/badge"
  },
  {
    name: "Button",
    href: "https://catalyst.tailwindui.com/docs/button"
  },
  {
    name: "Checkbox",
    href: "https://catalyst.tailwindui.com/docs/checkbox"
  },
  {
    name: "Dialog",
    href: "https://catalyst.tailwindui.com/docs/dialog"
  },
  {
    name: "Dropdown",
    href: "https://catalyst.tailwindui.com/docs/dropdown"
  },
  {
    name: "Fieldset",
    href: "https://catalyst.tailwindui.com/docs/fieldset"
  },
  {
    name: "Input",
    href: "https://catalyst.tailwindui.com/docs/input"
  },
  {
    name: "Listbox",
    href: "https://catalyst.tailwindui.com/docs/listbox"
  },
  {
    name: "Pagination",
    href: "https://catalyst.tailwindui.com/docs/pagination"
  },
  {
    name: "Radio button",
    href: "https://catalyst.tailwindui.com/docs/radio"
  },
  {
    name: "Select",
    href: "https://catalyst.tailwindui.com/docs/select"
  },
  {
    name: "Switch",
    href: "https://catalyst.tailwindui.com/docs/switch"
  },
  {
    name: "Table",
    href: "https://catalyst.tailwindui.com/docs/table"
  },
  {
    name: "Text",
    href: "https://catalyst.tailwindui.com/docs/text"
  },
  {
    name: "Textarea",
    href: "https://catalyst.tailwindui.com/docs/textarea"
  }
]

export default function Homepage() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-4 mb-20">
      <div className="">
        <h1 className="text-2xl font-bold text-zinc-700 dark:text-zinc-200 tracking-tighter leading-10">
          Catalyst UI Extended
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2 tracking-tight">
          Catalyst UI by Tailwind Labs is incredible; however, it lacks some stuff.
          <br />
          This project aims to extend Catalyst UI with more components.
        </p>
      </div>
      <Divider location="left" className="my-8">
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          Components
        </h2>
      </Divider>
      <main className="max-w-7xl mx-auto rounded-md ring ring-zinc-200 flex flex-col gap-y-2 px-8 py-4">
        {elements.map((element) => (
          <Link
            key={element.name}
            href={`/components${element.path}`}
            className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {element.name}
          </Link>
        ))}
        <Divider location="center" className="my-2" />
        <p className="text-zinc-500 dark:text-zinc-400 tracking-tighter">
          More components coming soon!
        </p>
      </main>
      <Divider location="left" className="my-8">
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          Planned Components
        </h2>
      </Divider>
      <main className="max-w-7xl mx-auto rounded-md ring ring-zinc-200 flex flex-col gap-y-2 px-8 py-4">
        {plannedElements.map((element) => (
          <p
            key={element}
            className="text-zinc-700 dark:text-zinc-200"
          >
            {element}
          </p>
        ))}
      </main>
      <Divider location="left" className="my-8">
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          Official Components
        </h2>
      </Divider>
      <main className="max-w-7xl mx-auto rounded-md ring ring-zinc-200 flex flex-col gap-y-2 px-8 py-4">
        {officialElements.map((element) => (
          <Link
            key={element.name}
            href={element.href}
            target="_blank"
            className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {element.name}
          </Link>
        ))}
        <Divider location="center" className="my-2" />
        <p className="text-zinc-500 dark:text-zinc-400 tracking-tighter">
          More official components are planned. Check out the <Link href="https://catalyst.tailwindui.com/docs" className="underline underline-offset-4">official Catalyst UI documentation</Link> for more information.
        </p>
      </main>
    </div>
  )
}