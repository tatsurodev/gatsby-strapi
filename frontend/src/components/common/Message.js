import React, { useState, useEffect } from 'react'

export const Message = ({ location: { search } }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (search.includes('success=true')) {
      setShow(true)
    }
  }, [search])

  return (
    <>
      {show && (
        <div className="alert alert-success mt-3">Thanks for your message!</div>
      )}
    </>
  )
}
