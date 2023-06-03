function Button({ name, css }) {
  return (
    <div>
      <button className={css}>{name}</button>
    </div>
  );
}

export default Button;
