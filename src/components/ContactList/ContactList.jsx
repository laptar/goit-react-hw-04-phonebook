import PropTypes from 'prop-types';

export const ContactList = ({ list, serchName, onDelete }) => {
  return (
    <ul>
      {list.length ? (
        list.filter(({ name }) =>
          name.toLowerCase().includes(serchName.toLowerCase())
        ).length ? (
          list
            .filter(({ name }) =>
              name.toLowerCase().includes(serchName.toLowerCase())
            )
            .map(el => {
              return (
                <li key={el.id}>
                  <p>{el.name}</p>
                  <p>{el.number}</p>
                  <button type="button" onClick={() => onDelete(el.id)}>
                    Delete
                  </button>
                </li>
              );
            })
        ) : (
          <h3>We did not find any matches</h3>
        )
      ) : (
        <h3>The list is empty</h3>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  serchName: PropTypes.string,
  onDelete: PropTypes.func,
};
