interface FooterListProps {
  title: string;
  items?: { label: string; href?: string }[];
}

const FooterList: React.FC<FooterListProps> = ({ title, items }) => {
  return (
    <div>
      <h5>{title}</h5>
      {items ? (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ display: "block" }}>
              {item.href ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <p>{item.label}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items</p>
      )}
    </div>
  );
};

export default FooterList;