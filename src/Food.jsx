const today = new Date();
const foodList = ['Chocolate', 'Pasta', 'Coffee', 'Digestive Biscuits'];
function formatDate(date) {
    return new Intl.DateTimeFormat('en-UK',{ weekday: 'long' }).format(date);
}

export default function Food() {
   return (
    <>
        <h3>My favourite food as of {formatDate(today)}...</h3>
        <ol>
            {foodList.map((foodItem) => {
                return <li key={foodItem}>{foodItem}</li>
            })}
        </ol>
    </>
   )
} 
