import { useCallback, useState, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("Pwertwqh");
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState(false);

  //useref hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*(){}_+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, char, number, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  return (
    <>
      <div style={{ minHeight: "100vh", backgroundColor: "black" }}>
        <div
            style={{
              margin:'auto',
              textAlign:'center',
              color:'greenyellow',
              fontSize:'50px'
            }}
        >
        Password Generator
        </div>
        <div
          style={{
            width: "60vw",
            marginLeft: "auto",
            marginRight: "auto",
            height: "40vh",
            backgroundColor: "#020d17",
            padding: "10px",
            rowGap: "5vh",
          }}
        >
          <input
            type="text"
            value={password}
            style={{ height: "10vh", width: "40vw",borderRadius:'10px' }}
            readOnly
            ref={passwordRef}
          ></input>
          <button
            style={{ backgroundColor: "blue", height: "10vh", width: "15vw" ,borderRadius:'10px',color:'white' }}
            onClick={copyPassword}
          >
            copy
          </button>
          <div
            style={{
              display: "flex",
              marginTop: "5vh",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              style={{
                width: "15vw",
                height: "10vh",
                cursor: "pointer",
              }}
            />
            <label style={{ color: "white" }}>Length: {length}</label>
            <input
              type="checkbox"
              value={false}
              onChange={() => {
                setChar((prev) => !prev);
              }}
            ></input>
            <label style={{ color: "white" }}>CharAllowed</label>
            <input
              type="checkbox"
              value={false}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            ></input>
            <label style={{ color: "white" }}>NumberAllowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
