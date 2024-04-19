const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <Struct />
          </div>
        </div>
      </footer>
    </>
  );
};

const Struct = () => {
  const headData = ["company", "get help", "online shop"];
  //   console.log(headData);

  const data = [
    ["about us", "our services", "privacy", "affiliate program"],
    ["FAQ", "shipping", "returns", "order status", "payment options"],
    ["watch", "bag", "shoes", "dress"],
  ];

  const head = headData.map((head, index) => {
    // console.log(index, head);
    return <h4 key={index}>{head}</h4>;
  });

  return data.map((data, index) => {
    // console.log(index);

    const list = data.map((items, index) => {
      //   console.log(index, items);
      return (
        <li key={index}>
          <a href="#">{items}</a>
        </li>
      );
    });

    return (
      <div className="footer-col" key={index}>
        <ul>{list}</ul>
      </div>
    );
  });
};

export default Footer;
