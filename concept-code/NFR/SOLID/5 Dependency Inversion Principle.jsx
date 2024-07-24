/**
 * High-level modules should not depend on low-level modules, but rather both should
 * depend on abstractions.
 */

/**
 * withOut Dependency Inversion Principle (DIP)
 *
 * Create & Edit Form
 */

const CreateBookForm = () => {
  const handleCreateBookForm = async () => {
    try {
      const formData = new FormData(e.currentTarget);
      await axios.post("https://myapi.com/books", formData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleCreateBookForm}>
      <input name='title' />
      <input name='author' />
      <input name='bookType' />
    </form>
  );
};

const EditBookForm = () => {
  const handleEditeBookForm = async () => {
    try {
      const formData = new FormData(e.currentTarget);
      await axios.post("https://myapi.com/books", formData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleEditeBookForm}>
      <input name='title' />
      <input name='author' />
      <input name='bookType' />
    </form>
  );
};

/**
 * Refactored with Dependency Inversion Principle (DIP)
 *
 */

const BookForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name='title' />
      <input name='author' />
      <input name='bookType' />
    </form>
  );
};

const CreateBookFormDIP = () => {
  const handleCreateBook = async () => {
    try {
      const formData = new FormData(e.currentTarget);
      await axios.post("https://myapi.com/books", formData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return <BookForm onSubmit={handleCreateBook} />;
};

const EditBookFormDIP = () => {
  const handleEditBook = async () => {
    try {
      const formData = new FormData(e.currentTarget);
      await axios.put("https://myapi.com/books/1", formData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return <BookForm onSubmit={handleEditBook} />;
};
