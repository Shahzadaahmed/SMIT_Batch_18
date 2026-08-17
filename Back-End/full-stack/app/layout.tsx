// MDB Ui Integration...!
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
    >
      <body>
          {children}
      </body>
    </html>
  );
};

export default RootLayout;