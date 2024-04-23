"use client";

import clsx from 'clsx';

type Location = 'center' | 'left' | 'right';

export function Divider({
  className,
  text,
  location = 'center',
  children
}: {
  readonly className?: string,
  readonly text?: string,
  readonly location?: Location,
  readonly children?: React.ReactNode
}) {
  return (
    <div className={clsx(
      "relative",
      className
    )}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-200" />
      </div>
      {(children || text) && (
        <div className={clsx(
          "relative flex",
          location === 'center' && 'justify-center',
          location === 'left' && 'justify-start',
          location === 'right' && 'justify-end',
        )}>
          <span
            className={clsx(
              "bg-white dark:bg-zinc-950 px-2 text-sm text-zinc-700 dark:text-zinc-200"
            )}
          >
            {children || text}
          </span>
        </div>
      )}
    </div>
  );
}