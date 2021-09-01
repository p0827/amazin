import { useSelector } from 'react-redux';

import './customerScreen.css';
import { customerMenuTemplate } from './customerMenuTemplate';
import CustomerCard, { mapCustomerCardProp } from './CustomerCard';
import CustomerHelpSection from './CustomerHelpSection';

export default function CustomerScreen() {
  const { user } = useSelector((state) => state.userSignin);

  return (
    <div className="c-screen customer">
      <header className="container">
        <h1 className="title">We’re here to help, {user?.username || ''}</h1>
        <h3 className="sub-title">
          We’ll walk you through fixing most things here or connect you to someone if you need more help.
        </h3>
      </header>
      <div className="divider"></div>

      <div className="container">
        <h2>What can we assist you with today?</h2>
        <div className="c-boxes">
          {customerMenuTemplate.map(mapCustomerCardProp).map((props) => (
            <CustomerCard {...props} />
          ))}
          <div className="separator mb-1"></div>

          <CustomerHelpSection />
        </div>
      </div>
    </div>
  );
}
