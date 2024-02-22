import '@/assets/styles/global.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream Rental property',
  keywords: 'rental, find rental, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
