"use client";

import { Divider } from '@repo/ui/divider';

export default function DividerComponent() {
  return (
    <div className="mx-auto max-w-md w-full">
      <Divider text='OR' location='center' className='my-8' />
    </div>
  )
}