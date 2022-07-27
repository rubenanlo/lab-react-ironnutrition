import { Button, Divider, Row } from 'antd';
import './App.css';
import foodArrDB from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodArray, setFood] = useState(foodArrDB);

  //useEffect

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodArray.map((food) => {
          return <FoodBox {...food} />;
        })}
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
