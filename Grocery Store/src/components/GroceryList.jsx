export const GroceryList = ({ title, id, status, handleToggle, handleDelete }) => {
  return (
    <div>
      {title}-{status ? "Done" : "Not Done"}
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};
