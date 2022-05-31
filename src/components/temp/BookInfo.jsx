import { useQuery, useMutation, gql } from "@apollo/client";

const GET_BOOK_DETAILS = gql`
  query {
    book {
      name
      author
    }
  }
`;

const SET_BOOK_DETAILS = gql`
  mutation UpdateBook($name: String!, $author: String!) {
    updateBook(name: $name, author: $author) {
      name
      author
    }
  }
`;

export const BookInfo = () => {
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS);

  const updateCache = (cache, { data: { updateBook } }) => {
    const existingBook = cache.readQuery({
      query: GET_BOOK_DETAILS,
    });
    
    cache.writeQuery({
      query: GET_BOOK_DETAILS,
      data: { book: updateBook },
    });
  };

  const [updateBook] = useMutation(SET_BOOK_DETAILS, { update: updateCache });

  if (loading) return <p>Loading...</p>;
  if (error) {
      return (
      <div>
          <pre>
            {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
}
    

  const updateBookDetails = () => {
    updateBook({
      variables: { name: "A Spicy Sausage", author: "Anton the Butcher" },
    });
  };

  return (
    <div>
      <p>
        {data.book.name} - {data.book.author}
      </p>
      <button onClick={updateBookDetails}>Update Book</button>
    </div>
  );
};

// export default BookInfo;