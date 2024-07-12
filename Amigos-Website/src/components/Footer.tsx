const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3>Location </h3>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
