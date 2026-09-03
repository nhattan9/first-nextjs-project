"use client";

export default function UserButton() {
    function onClickMe() {
        console.log("Clicked!");
    }

    return <button onClick={onClickMe}>CLICK ME</button>;
}
