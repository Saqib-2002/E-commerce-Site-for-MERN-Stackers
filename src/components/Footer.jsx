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
      <div key={index}>
        {console.log(head)}
        <h4 key={head}>{head}</h4>
        {
          data[index].map((item,idx) => {
            console.log(item);
            return <li key={idx}>{item}</li>
          })
        }
      </div>
    );
  });
};
export default Footer;
