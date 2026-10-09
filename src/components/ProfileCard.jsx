// Exercício 2.1 - Componente reutilizável que recebe os dados via props
function ProfileCard({ nome, cargo, imagemUrl, ativo }) {
  return (
    <div className="card">
      <img src={imagemUrl} alt={`Foto de ${nome}`} />
      <h3>{nome}</h3>
      <p>{cargo}</p>

      {/* Se ativo for true mostra Online (verde), senão Offline (cinza) */}
      {ativo ? (
        <span className="status online">Status: Online</span>
      ) : (
        <span className="status offline">Status: Offline</span>
      )}
    </div>
  );
}

export default ProfileCard;
