import { useState } from "react"

const useCurso = (inicial) => {
  const [curso, setCurso] = useState(inicial)
  const handleChange = (e) => {
    setCurso({
      ...curso,
      [e.target.name]: e.target.value
    })
  }

  return [curso, handleChange]
}

export default useCurso