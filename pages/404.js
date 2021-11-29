import { useEffect } from "react"
import { useRouter } from "next/router"
import Media from "../src/components/layout/Media"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return (
      <Media />
  )
}