import { useState } from 'react';
import './App.css';
import AddContactButton from './components/AddContactButton';
import List from './components/List';
import CustomModal from './components/CustomModal';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="App">
      <List />
      {!modalIsOpen && <AddContactButton handleClick={openModal} />}
      <CustomModal
        isOpen={modalIsOpen}
        setClose={closeModal}
        overlayClassName={'overlay-modal'}
        type="addContact"
      />
    </div>
  );
}

export default App;
