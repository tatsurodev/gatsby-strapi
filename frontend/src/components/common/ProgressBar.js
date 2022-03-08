import React from 'react'

function ProgressBar({ progress }) {
  let color
  switch (progress) {
    case 5:
      color = 'bg-info'
      break
    case 4:
      color = 'bg-success'
      break
    case 3:
      color = 'bg-warning'
      break
    case 2:
      color = 'bg-danger'
      break
    case 1:
      color = 'bg-primary'
      break
    default:
  }

  return (
    <div className="progress">
      <div
        className={`progress-bar progress-bar-striped ${color}`}
        style={{ width: `${progress * 20}%` }}
      ></div>
    </div>
  )
}

export { ProgressBar }
