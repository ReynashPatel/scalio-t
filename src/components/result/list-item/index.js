import cx from 'classnames';

const ListItem = (props) => (
  <div
    className={cx(
      'flex',
      'gap-x-3',
      'w-full',
      'px-3',
      'py-2',
      props.isEven ? 'bg-gray-300' : 'bg-gray-400'
    )}
  >
    <div className="w-2/6">{props.login}</div>
    <div className="w-1/6">{props.type}</div>
    <div className="w-3/6">{props.avatar_url}</div>
  </div>
);

export default ListItem;
