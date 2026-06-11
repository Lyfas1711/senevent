
// {author, content} sont des props, c'est la destructuration des props
// On pouvait aussi écrire
// function Message(props) {
//   return <p className="alert alert-danger">{props.author} {props.content}</p>;
function Message({author, content}) { // un component doit toujours commencer par une majuscule
  // un component doit toujours retourner du JSX
  // JSX est une syntaxe qui permet d'écrire du HTML dans du JavaScript
  // JSX est transformé en JavaScript par Babel
  return <p className="alert alert-danger">  
    Author: {author} <br />
    Content: {content}
  </p>;
}

function Joueur({name, nbBut, pd}) {
  if (nbBut + pd > 30) {
    return <p className="alert alert-success">
    Player: {name} <br />
    Nombre de but: {nbBut} <br />
    Passe décisive: {pd}
  </p>;
  }
  else if (nbBut + pd > 20) {
    return <p className="alert alert-warning">
    Player: {name} <br />
    Nombre de but: {nbBut} <br />
    Passe décisive: {pd}
  </p>;
  }

  return <p className="alert alert-danger">
    Player: {name} <br />
    Nombre de but: {nbBut} <br />
    Passe décisive: {pd}
  </p>;
}

function Summary() {
  return <p className="alert alert-success">This is a summary</p>;
}

function App(){
  return (
    <div>
      <Message author="User1" content="This is a first message" />
      <Summary />
      <Message author="User2" content="This is a second message" />
      <Joueur name="Messi 10" nbBut={32} pd={15} />
      <Joueur name="Ronaldo 7" nbBut={20} pd={5} />
      <Joueur name="Mané 10" nbBut={25} pd={12} />
      <Joueur name="Neymar 11" nbBut={5} pd={8} />
      <Joueur name="Mbappé 7" nbBut={28} pd={14} />
    </div>
  );
}

export default App;