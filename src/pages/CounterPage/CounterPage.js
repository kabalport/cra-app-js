import Viewer from "./Viewer";
import Controller from "./Controller";

const CounterPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-8">Simple Counter</h1>
            <section className="mb-4">
                <Viewer />
            </section>
            <section>
                <Controller />
            </section>
        </div>
    );
}

export default CounterPage;
