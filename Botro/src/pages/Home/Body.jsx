import './Body.css'
import Counter from './Counter';
import Student from './Student';
function Body() {
    return (
        <div className="body">
            <h1>Welcome to Botro</h1>
            <Student name ="Doanh" age="20" />
            <Student name ="Hieu" age="21" />
            <Student name ="Phuc" age="22" />
            <div>-------------------------------</div>
            <Counter />
        </div>

    );
}
export default Body