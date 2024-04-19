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

  return headData.map((head, index) => {
    return (
      <div className="footer-col" key={index}>
        {console.log(head)}
        <h4 key={head}>{head}</h4>
        <ul>
          {data[index].map((item, idx) => {
            console.log(item);
            return (
              <li key={idx}>
                <a href="">{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
};
export default Footer;
