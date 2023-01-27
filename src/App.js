import './App.css';
import Header from './layout/Header';
import MainContextProvider from './context/ctx';
import Main from './layout/Main';

function App() {
    return (
        <MainContextProvider>
            <div className='App'>
                <Header />
                <Main />
            </div>
        </MainContextProvider>
    );
}

export default App;
