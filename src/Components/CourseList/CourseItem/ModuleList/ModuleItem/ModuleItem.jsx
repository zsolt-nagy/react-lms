import React from 'react'

export default function ModuleItem({ title, lessons }) {
  return (
    <li>{title} ({lessons.length} lesson(s))</li>
  )
}
