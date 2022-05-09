import { useState } from "react"

const useCreditos = (initial) => {
  const [creditos, setCreditos] = useState(initial)
  const handleChange = (e) => {
    setCreditos({
      ...creditos,
      [e.name]: e.value
    })
  }

  return [creditos, handleChange]
}

export default useCreditos