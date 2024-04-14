"use client"

export default function SignInComponent() {
    function buttonHandler(){
        alert("Button clicked..");
    }

    return (
    <div>
        Sign In here:
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <button onClick={buttonHandler}>Submit</button>
    </div>
    );
}

