"use client"
import { useSelector } from "react-redux/es/hooks/useSelector"

export default function Preview() {

  const state = useSelector(state => state);
  return (
    <div>
      <p className="w-[500px]">{JSON.stringify(state.user, null, 2)}</p>
    </div>
  )
}
