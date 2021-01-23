import React, { useState, useEffect } from "react"

export const Message = () => {
  const [show, setShow] = useState(false)
  const params = window.location.search

  useEffect(() => {
    if (params.includes("success=true")) {
      setShow(true)
    }
  }, [params])

  return (
    <>
      {show && (
        <div className="alert alert-success mt-3">Thanks for your message!</div>
      )}
    </>
  )
}
