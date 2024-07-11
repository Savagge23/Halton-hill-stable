import { useContext } from 'react';
import { DataContext } from './DataContext';
import LeaseCalculator from './LeaseCalculator';
import Footer from './Footer';

function HorseInfo() {
  const { data: horse } = useContext(DataContext);

  if (!horse) {
    return <p>No horse selected.</p>;
  }

  return (
  <div>
    <div className="container mt-5">
      <h1>{horse.name}</h1>
      <img src={horse.img} alt={horse.name} className="img-fluid mb-4" />
      <p>{horse.description}</p>
      <p><strong>Breed:</strong> {horse.breed}</p>
      <p><strong>Price:</strong> ${horse.price}</p>
      <p><strong>Age:</strong> {horse.age}</p>
      <p><strong>Date of Birth:</strong> {horse.dob}</p>
      <p><strong>Purchase Option:</strong> {horse.purchaseoption}</p>
      <LeaseCalculator />
      </div>
      <Footer />
    </div>
  );
}

export default HorseInfo;
