/*
This component comes from Catalyst by Tailwind UI because arsenstorm/ui is designed to work with Catalyst.

It's been modified to work with Next.js’s Link component. The original component is available here:

https://catalyst.tailwindui.com/docs#client-side-router-integration

If you’re not using Next.js, uninstall it and use the original component instead (or implement your own client-side router integration).
*/

import { DataInteractive as HeadlessDataInteractive } from '@headlessui/react'
import React from 'react'
import NextLink, { type LinkProps } from 'next/link'

export const Link = React.forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <HeadlessDataInteractive>
      <NextLink {...props} ref={ref} />
    </HeadlessDataInteractive>
  )
})
