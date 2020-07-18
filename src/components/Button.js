import React from 'react'
function getClassName({ className }) {
  const originClassName = ['outline-none', 'border-none', 'pointer']
  const propsClassName = className ? className.split(/\s+/) : []
  let i = 0
  const { length } = propsClassName
  for (; i < length; i++) {
    if (originClassName.indexOf(propsClassName[i]) === -1) {
      originClassName.push(propsClassName[i])
    }
  }
  return originClassName.join(' ')
}
export default function Button(props) {
  return (
    <button {...props} className={getClassName(props)}>
      {props.children}
    </button>
  )
}
