import { Routes, Route, BrowserRouter as BRuter } from 'react-router-dom';

//CSS
import './App.css';

//Components
import HomePage from './pages/homepage/homepage.component';
import CategoryPage from './pages/category/category.component';
import Header from './component/header/header.component';
import SigninSignup from './pages/signin-signup/signin-signup.page';

//Others
import { auth, createUserProfile } from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BRuter>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/signin' element={<SigninSignup />} />
        </Routes>
      </BRuter>

    );
  }

}

export default App;
