import Header from './Header';
import Footer from './Footer';
// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
export default DefaultLayout;
