function Button({ color, borderColor, children }) {
  return (
    <button
      style={{
        border: '2px solid',
        color: { color },
        borderColor: { borderColor },
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
