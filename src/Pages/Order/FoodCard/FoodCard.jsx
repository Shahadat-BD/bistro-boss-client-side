import OrderTab from '../OrderTab/OrderTab';

const FoodCard = ({items}) => {
    return (
          <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
           {
              items.map(item => <OrderTab key={item._id} items={item}></OrderTab>)
           }
        </div>
    );
};

export default FoodCard;