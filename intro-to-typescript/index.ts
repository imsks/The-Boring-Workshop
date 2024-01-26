// interface & type
interface AddTwoNumbersProps {
    a: number
    b: number
}

type FunctionCalledBy = "USER" | "DEFAULT"

interface AddThreeNumbersProps extends AddTwoNumbersProps {
    c: number
    calledBy?: FunctionCalledBy
}

function addTwoNumbers({ a, b }: AddTwoNumbersProps) {
    return a + b
}

const a = 2
const b = 5

console.log(addTwoNumbers({ a, b }))

function addThreeNumbers({
    a,
    b,
    c,
    calledBy = "DEFAULT"
}: AddThreeNumbersProps) {
    console.log("Function called by ", calledBy)
    return a + b + c
}

const c = 10
addThreeNumbers({ a, b, c })

addThreeNumbers({ a, b, c, calledBy: "USER" })
