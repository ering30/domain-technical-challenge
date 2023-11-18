"use client"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { UserState } from "@/app/redux/user.slice";

type StoredUserState = {
  user: UserState
}

export default function Preview() {

  const state = useSelector((state: StoredUserState) => state);
  return (
    <div>
      <p className="w-[500px]">{JSON.stringify(state.user, null, 2)}</p>
    </div>
  )
}
