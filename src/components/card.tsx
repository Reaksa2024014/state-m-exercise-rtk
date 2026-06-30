"use client"
import { decrement, increment } from "@/lib/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

export default function Card(){

    //Get global state // yk data use appselector
    const count = useAppSelector((state) => state.counter.value)

    //dispatch action// yk action use appdispatch
    const dispatch = useAppDispatch()


    //dispatch action ey(decrement, increment)
    return(
        <section>
            <p>Calling Global State: {count} </p>
            <button onClick={() => dispatch(increment())}>Increase Button</button> <br />
            <button onClick={() => dispatch(decrement())}>Decrease Button</button>
        </section>
    )
}