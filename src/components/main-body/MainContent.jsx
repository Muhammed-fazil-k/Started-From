import Counter from "./Counter";

function MainContent() {
    const startingDate = new Date('2023-04-07T19:00:00')
    return (
        <div>
            <h2>React Countdown</h2>
            <Counter startFrom={startingDate}/>
        </div>
    )
}

export default MainContent;
