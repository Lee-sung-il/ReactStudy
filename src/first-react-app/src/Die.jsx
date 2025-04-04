export default function Die({numSide = 6}) {
    console.log(Number(numSide));
    const roll = Math.floor(Math.random() * numSide) + 1;
    return (
        <p>{numSide}-sided die roll : {roll}</p>
    )
}