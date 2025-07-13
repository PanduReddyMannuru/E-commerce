// import Header from "../components/common/Header";
// import Footer from "../components/common/Footer";

// export default function MainLayout({ children }) {
//   return (
//     <>
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// }

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
// import Navbar from "../components/common/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
