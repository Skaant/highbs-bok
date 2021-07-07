import React, { ReactElement } from "react"

export function ContentRowWithHeader({
  id,
  header,
  className,
  children,
}: {
  id?: string
  header?:
    | { level: 1 | 2 | 3; content: string; className?: string }
    | { element: ReactElement }
  className?: string
  children?: ReactElement
}) {
  return (
    <div id={id} className={`row px-4 ${className || ""}`}>
      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
        {header &&
          ("element" in header ? (
            header.element
          ) : header.level === 1 ? (
            <h1 className={header.className}>{header.content}</h1>
          ) : header.level === 2 ? (
            <h2 className={header.className}>{header.content}</h2>
          ) : (
            <h3 className={header.className}>{header.content}</h3>
          ))}
        {children}
      </div>
    </div>
  )
}
